---
title: Andmete uuendamise juhend
layout: default
permalink: /juhend/
ref: Howto
lang: et
---
{% include breadcrumbs.html %}
# Avaandmete lisamise ja uuendamise juhend

Tee omale konto <https://github.com> ja logi sisse. Jää sisselogituks, sest järgnevate tegevuste käigus suunatakse Sind automaatselt GitHub'i ja siis on hea kui oled juba sisselogitud.

Enne kui hakkad lisama infot oma organisatsiooni avaandmete kohta, veendu, et organisatsioon oleks avaandmete portaalis teabevaldajate nimekirjas olemas <https://opendata.riik.ee/teabevaldajad/>

**Organisatsiooni lisamise juhend**

Kui Sinu organisatsiooni ei ole avaandmete portaali teabevaldajate nimekirjas, pead selle lisama enne kui hakkad avaandmeid lisama. Selleks mine <https://github.com/okestonia/jkan/tree/master/_organizations>

Nagu näed, on organisatsioonid siin .md failidena kirjas. Pead tekitama samasuguse faili vajutades „Create new file".

„Name your file" asemele kirjuta **organisatsiooninimi.md** (näiteks veeteedeamet.md)

Seejärel kopeeri „Edit new file" kasti järgnev tekst (koos kolme kriipsuga alguses ja lõpus)

---

title: siia tuleb Sinu organisatsiooni nimi

title_en:

description: 'Siia tuleb lühikirjeldus organisatsiooni kohta.'

maintainer_name: siia tuleb Sinu nimi

maintainer_email: siia tuleb Sinu e-mail

logo:

twitter: ''

---

Logo lisamist Sa ei saa ise teha. Kui tahad logo lisada, siis seda peab tegema portaali administraator tagantjärgi.

Kui oled väljad ära täitnud, vajuta lehe allääres „Propose new file".

Seejärel vajuta lehe keskel „Create pull request" ja peale seda uuesti lehe allääres „Create pull request".

Nüüd läheb organisatsiooni lisamine ülevaatamiseks portaali administraatorile. Umbes 24h jooksul ilmub organisatsioon teabevaldajate nimekirja <https://opendata.riik.ee/teabevaldajad/> (läbi GitHub'i saad selle kohta teate e-maili peale).

**Avaandmete lisamise juhend**

Enne kui hakkad avaandmeid lisama, veendu, et vastavat andmekogu pole juba lisatud (näiteks mõne Su kolleegi poolt): <https://opendata.riik.ee/andmehulgad/>

Uue andmekogu lisamiseks ole kõigepealt <https://github.com> sisselogitud ning siis mine <https://github.com/okestonia/jkan/tree/master/_datasets>

Nagu näed, on andmekogud siin .md failidena kirjas. Pead tekitama samasuguse faili vajutades „Create new file".

„Name your file" asemele kirjuta **organisatsiooninimi-andmekogu.md** (näiteks lennuameti-infosysteem.md). Faili nimi võiks olla sisukas ja peegeldada andmestiku sisu. Nii on teda lihtsam leida ja otse viidata. Näiteks andmekogu "Rebaseregister" failinimi peakski olema rebaseregister.md ja mitte rr.md või näiteks ecnr.md.

Seejärel kopeeri „Edit new file" kasti järgnev tekst (koos kolme kriipsuga alguses ja lõpus)

---

schema: default

title: infosüsteemi nimi (näiteks Lennuohutuse järelevalve infosüsteem LOIS)

title_en:

notes: infosüsteemi kirjeldus (kirjuta paari lausega, mida see infosüsteem teeb, mis infot on avaandmete näol oodata)

notes_en:

department: ''

category:

  - Siia tuleb teema (näiteks Transport, vaata teemasid <https://opendata.riik.ee/andmehulgad> vasakust tulbast)

category_en:

  - Siia tuleb teema (näiteks Transport, vaata teemasid <https://opendata.riik.ee/en/andmehulgad> vasakust tulbast)

resources:

  - name: Avaandmed

    url: 'https://... ' (siia pane avaandmete faili asukoht)

    format: XML (avaandmete faili formaat, näiteks XML, JSON või mis iganes)

    interactive: 'False'

  - name: Schema

    url: 'https://...' (siia pane avaandmete schema faili asukoht)

    format: XSD

    interactive: 'False'

  - name: Avaandmete kirjeldus

    url: 'https://...' (siia pane avaandmeid kirjeldava faili asukoht)

    format: PDF (muuda seda nii nagu vaja, näiteks „docx")

    interactive: 'False'

license: 'https://creativecommons.org/licenses/by-sa/3.0/ee/legalcode'  (Creative Commons kasutatakse juhul kui Sa ei tea, et mingi muu litsents peaks olema)

update_freq: 'http://purl.org/linked-data/sdmx/2009/code#freq-D' (viimane täht siin lõpus näitab kui tihti avaandmeid uuendatakse: D -- iga päev, M -- iga kuu, Q -- kord kvartalis)

date_issued: 31/01/2019 (avaandmete portaali lisamise kuupäev)

date_modified: 31/01/2019 (avaandmete portaalis andmete uuendamise kuupäev)

organization: Sinu organisatsiooni nimi

maintainer_name: Sinu nimi

maintainer_email: Sinu e-mail

maintainer_phone: '' (telefoninumbri saad kirjutada ülakomade vahele)

---

Kõik siin näidises sulgudes olevad tekstid palun korja ära (kaasaarvatud sulud).

Kui oled väljad ära täitnud, vajuta lehe allääres „Propose new file".

Seejärel vajuta lehe keskel „Create pull request" ja peale seda uuesti lehe allääres „Create pull request".

Nüüd läheb andmekogu lisamine ülevaatamiseks portaali administraatorile. Umbes 24h jooksul ilmub andmekogu nimekirja <https://opendata.riik.ee/andmehulgad/> (läbi GitHub'i saad selle kohta teate e-maili peale). Avaldamise käigus vaadatakse andmekogu kirjeldus üle. Pisivead parandatakse, suuremate puhul (kui ei ole selge, mida mõeldud on, või on erinevused vajalikust formaadist liig suured) lükatakse muudatus tagasi. Kui puudub märge litsentsi kohta, lisatakse viide litsentsile CC-BY 3.0.

**Lisatud andmete parandamise juhend**

Avaandmete portaalis andmekogu andmete parandamiseks ole kõigepealt <https://github.com> sisselogitud. Seejärel mine <https://opendata.riik.ee/andmehulgad/> ja otsi oma andmekogu üles. Vajuta andmekogu nime peale. Avanenud lehel näed andmeid andmekogu kohta. Kui midagi vajab siin parandamist, vajuta lehe allääres nuppu „Muuda Githubis".

Tee „Edit file" kastis vajalikud muudatused ning vajuta lehe allääres „Propose new file".

Seejärel vajuta lehe keskel „Create pull request" ja peale seda uuesti lehe allääres „Create pull request".

Nüüd läheb andmete muutmine ülevaatamiseks portaali administraatorile. Umbes 24h jooksul viiakse muudatused sisse (läbi GitHub'i saad selle kohta teate e-maili peale).

# Juhend teiste organisatsioonide andmetel põhinevate andmehulkade avaldamiseks opendata.riik.ee portaalis

## Üldpõhimõtted

 1. **Teisesteks andmeteks loetakse avalikult ligipääsetavate andmeallikate automaatse töötlemise, kombineerimise või korduva laadimise teel koostatud andmehulki**. Teiseste andmete avaldamisel portaalis opendata.riik.ee tuleb lähtuda käesolevast juhendist.
 2. Erandina võib avaldada ka viiteid primaarsetele allikatele, juhul kui andmestiku omanik ei soovi või ei ole võimeline seda ise tegema (näiteks välisriikide või eraettevõtete andmestikud). Sel juhul tuleb viidata otse andmete allikale, koopiat tegemata, ning andmete eest vastutab primaarallikas.
 3. Kasutaja jaoks peab olema läbipaistev, millel andmed põhinevad ja kuidas nendeni jõuti. Selleks tuleb andmed varustada korralike metaandmetega, mille põhjal kasutaja saaks hinnata andmete usaldusväärsust.
 4. Andmete taaskasutamise viisidele, vormidele, eesmärkidele ei tohi andmete avaldamisel seada piiranguid (näiteks vastava piirava litsentsi lisamisega), välja arvatud juhul, kui piirangud tulevad seadusest.
 5. Teisese andmehulga avaldaja vastutab täielikult andmetele ligipääsu ja nende töötlemise seaduspärasuse ning selle tagajärgede eest. Kaks peamist (kuid mitte ainsat) rakenduvat normi on:
	- juhul, kui kasutatavad andmed on käsitletavad isikuandmetena isikuandmete kaitse üldmääruse 2016/679 art 4 p-i 1 mõistes, kohustub avaldaja tagama andmete töötlemiseks õigusliku aluse olemasolu kontrollimise ning subjekti õiguste teostamise, sh andmesubjekti õigus tutvuda andmetega (art 15), õigus andmete parandamisele (art 16), õigus andmete kustutamisele (art 17), õigus esitada vastuväiteid (art 21), õigus hüvitisele ja vastutus (art 82);  
	- Võlaõigusseadus (VÕS), täpsemalt VÕSi §1046 isiklike õiguste kahjustamise õigusvastasus ning §1047 ebaõigete andmete avaldamise õigusvastasus ning nendest tulenev kahju hüvitamise kohustus.

Teiseste andmehulkade puudustele viitamine toimub GitHubis samas korras kui primaarallikate puhul: <https://github.com/okestonia/opendata-issue-tracker>.

## Metaandmed

Avaandmete portaalis teisese andmehulga avaldamisel peab andmehulgaga käima kaasas järgmine komplekt metaandmeid:

**Andmete allikas**. Võimalikult täpne viide primaarsetele andmeallikatele. Näiteks pöördutud URLid, kraabitud veebilehtede aadressid vms.

**Andmete kogumiseks ja töötlemiseks kasutatud programmi lähtekoodi asukoht**. Teisese andmehulga puhul peab selle moodustamiseks kasutatud programm olema avalikult saadaval, võimaldamaks hinnata töötluse usaldusväärsust.

**Andmehulga avaandmetena avaldaja nimi ja kontakt**. Teisese andmehulga kättesaadavaks teinud inimese nimi ja kontaktandmed võimaldavad kasutajatel raporteerida probleeme ning primaarse allika omanikul vajadusel võtta samme teisese andmehulga muutmiseks või eemaldamiseks.

**Ajaline dimensioon**, sh:

 - Kogumise aeg (millal andmed primaarallikatest toodi);
 - Primaarallikas avaldamise aeg (mis seisuga andmed toodi);
 - Uuendamissagedus või uuendamispoliitika: kui tihti või mis tingimustel (kui üldse) teisest andmehulka uuendatakse;
 - Teiseste andmete säilitamise tähtaeg: kui kaua teisene andmestik oluliste muutusteta metoodikas saadaval saab olema.

**Litsents**. Mida ja mis alustel võib teisese andmeallikaga edasi teha. Teisesele andmehulgale määratud litsents ei tohi olla vastuolus primaarse andmeallika litsentsiga.

## Küsimused ja vastused

### Kes ja kuidas hindab andmete kvaliteeti ja usaldusväärsust?

Andmete või nende tuletiste lõppkasutaja hindab kvaliteeti metainfo põhjal, mis on andmetega kaasa pandud. Üldjuhul võib eeldada, et mida detailsem metainfo, seda usaldusväärsemaks saab andmeid pidada (välja arvatud juhul kui andmevaldaja on ise märkinud andmete juurde info võimalike vigade kohta). Kasutaja kasutab teiseseid andmeid omal vastutusel. Kui teiseseid andmeid ei usaldata, siis saab kasutada ainult primaarallikat.

### Kes vastutab andmete korrektsuse eest?

Teiseste andmete avaldaja vastutab andmete korrektsuse osas ainult selle eest, et andmehulgale lisatud metaandmed vastavad tõele ning et avaldatud kood tõepoolest produtseerib avaldatud teisesed andmed.

## Arutelu ja tagasiside

Ettepanekuid käesoleva juhendi parandamiseks ja täiendamiseks saab teha GitHubis: <https://github.com/okestonia/jkan/issues/403>.
