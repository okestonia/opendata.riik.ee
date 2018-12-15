import yaml
import requests
import sys
import json


# Recursively parse the URLs out of a YAML structure
def get_urls(tree):
    lst = []
    for k in tree.keys():
        if k == 'url':
            lst.append(tree[k])
        else:
            if isinstance(tree[k], list):
                for l in tree[k]:
                    if isinstance(l, dict):
                        lst.extend(get_urls(l))
    return lst


# Access the URLs supplied and return an array of dictionaries containing the statuses
def validate_urls(urls, source):
    ret = []
    for url in urls:
        # The default values in case we don't end up getting a response
        status = -1
        content_type = ""
        try:
            r = requests.get(url, stream=True, timeout=21)
            status = r.status_code
            print(r.headers)
            content_type = r.headers["content-type"]
            r.close()
        except (requests.exceptions.ReadTimeout, requests.exceptions.ConnectTimeout):
            print(url + " timed out")
        ret.append({"url": url, "http_status": status, "content-type": content_type, "source": source})

    return ret


# The code reads a YAML file name list from standard input, parses each file for URLs, accesses all URLs found
# and writes the results to a json file the name of which is supplied as the first command line parameter
if __name__ == "__main__":
    orgs = []
    # Read a directory listing from standard input and process all files in sequence
    for line in sys.stdin:
        o = {}
        line_rstrip = line.rstrip()
        file = open(line_rstrip, "r")
        for d in yaml.load_all(file):
            if d is not None:
                if "organization" in d.keys():
                    print(d["organization"])
                    o["organization"] = d["organization"]
                else:
                    o["organization"] = line_rstrip
                o["urls"] = validate_urls(get_urls(d), line_rstrip)
        file.close()
        orgs.append(o)

    with open(sys.argv[1], 'w') as output:
        json.dump(orgs, output)
