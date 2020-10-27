# Mis on riigi avaandmete portaal?

Riigi avaandmete portaal on mõeldud Eesti avaliku sektori asutuste kogutavate andmete avalikustamise hõlbustamiseks ja nende leidmise kergendamiseks potentsiaalsete kasutajate jaoks.

Avaandmete portaalis saab:
* avaandmeid otsida ja neid alla laadida
* lisada viiteid uutele avaandmetele
* otsida ja kasutada avaandmete põhjal loodud rakendusi
* algatada avaandmete teemal arutelusid ning postitada teateid, küsimusi ja juhendeid

# Küsimused ja vastused
## Kes ja kuidas hindab andmete kvaliteeti ja usaldusväärsust?
Andmete või nende tuletiste lõppkasutaja hindab kvaliteeti metainfo põhjal, mis on andmetega kaasa pandud. Üldjuhul võib eeldada, et mida detailsem metainfo, seda usaldusväärsemaks saab andmeid pidada (välja arvatud juhul kui andmevaldaja on ise märkinud andmete juurde info võimalike vigade kohta). Kasutaja kasutab teiseseid andmeid omal vastutusel. Kui teiseseid andmeid ei usaldata, siis saab kasutada ainult primaarallikat.

## Kes vastutab andmete korrektsuse eest?
Teiseste andmete avaldaja vastutab andmete korrektsuse osas ainult selle eest, et andmehulgale lisatud metaandmed vastavad tõele ning et avaldatud kood tõepoolest produtseerib avaldatud teisesed andmed.

## Arutelu ja tagasiside
Ettepanekuid käesoleva juhendi parandamiseks ja täiendamiseks saab teha GitHubis: https://github.com/okestonia/jkan/issues/403.

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
