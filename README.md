# Custom notes

### Installation

```bash
bundle install
npm install # Optional, for JS
```
### Local development

```bash
bundle exec jekyll serve --incremental --watch
```
### Building

```bash
npx parcel build scripts/src/index.js --out-file scripts/dist --no-source-maps # Optional, for JS
bundle exec jekyll build
# Built site is available at _site
```
# Custom Scripts
### checkUpdates.py (update last_modified information for datasets)
```bash
cd ./_datasets
ls *.md | python3 ../checkUpdates.py
```
### validateURLs.py (check resource http response)
```bash
cd ./_datasets
ls *.md | python3 ../validateURLs.py  ../validated.json
```

A more thorough README in both Estonian and English language is in progress. 
