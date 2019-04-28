import yaml
import requests
import sys
import json
import urllib.parse

BASE_URL = "https://opendata.riik.ee/"


# Recursively parse the URLs out of a YAML structure
def get_urls(tree):
    lst = []
    for k in tree.keys():
        if k == 'url':
            # If we stumble upon a relative URL, add the base
            if urllib.parse.urlparse(tree[k]).netloc == "":
                lst.append(urllib.parse.urljoin(tree[k], BASE_URL))
            else:
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
        try:
            r = requests.get(url, stream=True, timeout=21)
            status = r.status_code
            content_type = r.headers.get("content-type")
            r.close()
            ret.append({"url": url, "http_status": status, "content-type": content_type, "source": source})
        except requests.exceptions.RequestException as ex:
            print("{0}: {1}".format(source, ex))
            ret.append({"url": url, "source": source, "Exception": {"type": type(ex).__name__, "message": str(ex)}})

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
        try:
            for d in yaml.load_all(file):
                if d is not None:
                    o["organization"] = d.get("organization", line_rstrip)
                    o["urls"] = validate_urls(get_urls(d), line_rstrip)
        except (AttributeError, yaml.YAMLError):
            print("{0} does not seem to be a YAML file we recognize".format(line_rstrip))
        file.close()
        orgs.append(o)

    with open(sys.argv[1], 'w') as output:
        json.dump(orgs, output)
