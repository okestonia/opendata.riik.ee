# Custom notes

### Installation

```bash
bundle install
npm install # Optional, for JS
```
### Local development

```bash
bundle exec jekyll serve --incremental
```

### Building

```bash
npx parcel build scripts/src/index.js --out-file scripts/dist --no-source-maps # Optional, for JS
bundle exec jekyll build
# Built site is available at _site
```
### Python Scripts
# checkUpdates.py
CD to datasets folder
ls | python3 ../validateURLs.py
Creates a new json file with a hash for every resource.

# validateURLs.py
CD to datasets folder
ls | python3 ../validateURLs.py > ../validated.json
Creates a new json file titled validated.json with a list of all returned statuses for each resource.


