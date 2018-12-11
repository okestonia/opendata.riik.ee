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
