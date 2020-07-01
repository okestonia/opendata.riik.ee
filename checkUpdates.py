#!/usr/bin/env python3
#!/usr/bin/env python3
import sys
import yaml
import json
import requests
import hashlib
import datetime
import re


def get_hash(resource_url):
    """ Access the URL provided and calculate an MD5 hash of whatever is returned.
    Throw an exception, if the URL is not accessible.
    """
    req = requests.get(resource_url, stream=True)
    m = hashlib.md5()
    for chunk in req.iter_content(chunk_size=1024):
        if chunk:
            m.update(chunk)
    return m.hexdigest()


def load_hashes(fn):
    """Load previously stored URL hashes from a file. Assume a clean sheet when load
    cannot be completed.
    """
    try:
        with open(fn, 'r') as f:
            return json.load(f)
    except FileNotFoundError:
        return {}


def dump_hashes(contents, filename):
    """Persist the new version of the hash-URL dataset to a file."""
    with open(filename, 'w') as h_file:
        json.dump(contents, h_file, indent=4, sort_keys=True)


def change_date(in_file, what_date):
    """Change the given YAML file to contain a new updated date_modified field.
    The file is changed directly instead of dumping YAML as the latter would change
    the file layout in ways that might be off-putting to novice users expected to
    modify the files manually.
    """
    new_file = []
    with open(in_file, 'r') as i_f:
        for l in i_f:
            mo = re.match("^\s*date_modified: (.*)$", l, re.I | re.M | re.U | re.S)
            if mo:
                new_file.append("date_modified: " + what_date + "\n")
            else:
                new_file.append(l)
    with open(in_file, 'w') as o_f:
        o_f.writelines(new_file)


if __name__ == "__main__":
    filename = 'datachanges.json'
    hashes = load_hashes(filename)
    for line in sys.stdin:
        line_rstrip = line.rstrip()
        file = open(line_rstrip, "r")
        new_date = ""

        for d in yaml.load_all(file):
            # The separators in files can result in empty YAML documents to be returned
            if d is not None:
                # Iterate over all resources getting all the hashes
                for r in d['resources']: 
		# Leave APIs and HTML interfaces alone
                    if r.get('interactive', 'True') != 'True':
                        url = r.get('url', '')
                        changed = False
                        old_hash = hashes.get(url, '')
                        new_hash = ""
                        try:
                            new_hash = get_hash(url)
                            if old_hash == '':
                                # We have not touched the URL before, just store the hash, no change
                                changed = False
                                hashes[url] = new_hash
                            else:
                                changed = (new_hash != old_hash)
                        except requests.exceptions.RequestException:
                            # If we could not get the hash, assume the resource has not changed
                            changed = False
                        if changed:
                            new_date = datetime.datetime.now().strftime("%Y/%m/%d")
                            hashes[url] = new_hash
        file.close()
        # If _any_ of the resources has been changed, update the date for the dataset
        if new_date:
            change_date(line_rstrip, new_date)
    dump_hashes(hashes, filename)

