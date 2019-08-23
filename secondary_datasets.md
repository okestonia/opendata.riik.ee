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
