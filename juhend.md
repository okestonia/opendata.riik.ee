---
title: Andmete uuendamise juhend
layout: default
permalink: /juhend/
ref: Howto
lang: et
---
{% include breadcrumbs.html %}

# Juhendid

Sellelt lehelt leiate juhendeid ja nõuandeid, mis võiksid olla abiks andmete avaldamisel opendata.riik.ee portaalis:
- [Avaandmete lisamise juhend](#avaandmete-lisamise-ja-uuendamise-juhend)
- [Teiseste andmete avaldamise juhend](#juhend-teiste-organisatsioonide-andmetel-põhinevate-andmehulkade-avaldamiseks-opendatariikee-portaalis)
- [Andmetele litsentsi määramine](#andmetele-litsentsi-andmine)
- [Avaandmete loomise juhend](#avaandmete-loomise-juhend)
- [Soovitused avaandmete mõju hindamiseks organisatsioonis](#soovitused-avaandmete-mõju-hindamiseks-organisatsioonis) 

---

# Avaandmete lisamise ja uuendamise juhend

Tee omale konto <https://github.com> ja logi sisse. Jää sisselogituks, sest järgnevate tegevuste käigus suunatakse Sind automaatselt GitHub'i ja siis on hea kui oled juba sisselogitud.

Enne kui hakkad lisama infot oma organisatsiooni avaandmete kohta, veendu, et organisatsioon oleks avaandmete portaalis teabevaldajate nimekirjas olemas <https://opendata.riik.ee/teabevaldajad/>  

## Organisatsiooni lisamise juhend

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

## Avaandmete lisamise juhend

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

## Lisatud andmete parandamise juhend

Avaandmete portaalis andmekogu andmete parandamiseks ole kõigepealt <https://github.com> sisselogitud. Seejärel mine <https://opendata.riik.ee/andmehulgad/> ja otsi oma andmekogu üles. Vajuta andmekogu nime peale. Avanenud lehel näed andmeid andmekogu kohta. Kui midagi vajab siin parandamist, vajuta lehe allääres nuppu „Muuda Githubis".

Tee „Edit file" kastis vajalikud muudatused ning vajuta lehe allääres „Propose new file".

Seejärel vajuta lehe keskel „Create pull request" ja peale seda uuesti lehe allääres „Create pull request".

Nüüd läheb andmete muutmine ülevaatamiseks portaali administraatorile. Umbes 24h jooksul viiakse muudatused sisse (läbi GitHub'i saad selle kohta teate e-maili peale).  


---

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

**Kes ja kuidas hindab andmete kvaliteeti ja usaldusväärsust?**

Andmete või nende tuletiste lõppkasutaja hindab kvaliteeti metainfo põhjal, mis on andmetega kaasa pandud. Üldjuhul võib eeldada, et mida detailsem metainfo, seda usaldusväärsemaks saab andmeid pidada (välja arvatud juhul kui andmevaldaja on ise märkinud andmete juurde info võimalike vigade kohta). Kasutaja kasutab teiseseid andmeid omal vastutusel. Kui teiseseid andmeid ei usaldata, siis saab kasutada ainult primaarallikat.

**Kes vastutab andmete korrektsuse eest?**

Teiseste andmete avaldaja vastutab andmete korrektsuse osas ainult selle eest, et andmehulgale lisatud metaandmed vastavad tõele ning et avaldatud kood tõepoolest produtseerib avaldatud teisesed andmed.  

## Arutelu ja tagasiside

Ettepanekuid käesoleva juhendi parandamiseks ja täiendamiseks saab teha GitHubis: <https://github.com/okestonia/jkan/issues/403>.  


---

# Andmetele litsentsi andmine

Avatud andmehulgal peab olema litsents, mis võimaldab andmete vaba ja piiranguteta kasutamist, töötlemist ja levitamist, sh. levitamist kasutaja äranägemisel nii tasuta kui tasu eest. Andmete avaldajad on litsentsi valikul vabad. Kui andmeavaldaja ei soovi määrata andmehulgale spetsiifilist litsentsi, soovitame eelistatult litsentsiks valida Creative Commons litsentsi (vt https://creativecommons.org/), eeskätt CC BY 4.0: https://creativecommons.org/licenses/by/4.0/. Allpool toome ära Creative Commonsi koostatud soovitused litsentsiandjatele ja -saajatele.

CC BY 4.0 litsents on eestikeelsena kättesaadav [SIIN](https://opendata.riik.ee/litsents/)  

# Mida litsentsiandjad ja litsentsisaajad peaksid kaaluma  

Alljärgnevas toome ära mõned põhilised punktid, mis tuleks läbi mõelda, enne kui rakendate oma materjalile Creative Commonsi litsentsi või kasutate Creative Commonsi litsentsi all olevat materjali. See ei ole ammendav loetelu.  

## Mida peaksid kaaluma litsentsiandjad  

**Tagasivõetamatus**

Pidage meeles, et litsentsi ei saa tagasi võtta.

Kui olete juba kord oma materjalile CC litsentsi rakendanud, siis võib igaüks, kes selle litsentsi saab, [toetuda sellele litsentsile](https://creativecommons.org/faq/#what-if-i-change-my-mind-about-using-a-cc-license) senikaua, kui materjal on autorikaitse ja sarnaste õiguste kaitse all, isegi kui te hiljem selle levitamise lõpetate.  

**Materjali tüüp**

Veenduge, et materjal sobib CC litsentseerimiseks.

CC litsentsid sobivad kõigi sisutüüpide jaoks, mida te soovite avalikult jagada, [välja arvatud tarkvara ja riistvara](https://creativecommons.org/faq/#can-i-apply-a-creative-commons-license-to-software).

Määratlege täpselt, mida te litsentseerite.

Igal teosel on mitu elementi, nt tekst, pildid, muusika. Tehke kindlasti selgelt, [näidake ära või märkige teatises](https://wiki.creativecommons.org/wiki/Marking_your_work_with_a_CC_license), millised eeltoodutest on litsentsiga hõlmatud.  

**Õiguste olemus ja piisavus**

Veenduge, et materjalile kehtivad autoriõigused või muud õigused.

CC litsentsid toimivad ainult juhul, kui tegemist on autoriõigustega, *sui generis* andmebaasiõigustega või [muude autoriõigustega lähedalt seotud õigustega](https://creativecommons.org/faq/#rights-other-than-copyright). Neid ei tohi rakendada avalikele materjalidele.

Selgitage välja õigused, mis on materjali kasutamiseks vajalikud.

Kui materjal hõlmab teiste isikute õigusi, siis veenduge, et olete saanud loa neid õigusi CC litsentsi alusel all-litsentseerida. Kui olete loonud selle materjali oma töösuhte või tööettevõtusuhte raames, siis ei pruugi te olla nende õiguste omanik ja võite vajada CC litsentsi rakendamiseks luba.

Näidake ära õigused, mida litsents ei hõlma.

[Näidake ära või märkige teatises silmatorkaval viisil kolmandate isikute õigused](https://wiki.creativecommons.org/wiki/Marking/Creators/Marking_third_party_content), nagu avaldamisõigused või kaubamärgiõigused. See hõlmab kogu sisu, mida te kasutate autorikaitse erandite või piirangute alusel, ning kogu kolmandate isikute sisu, mida kasutatakse mingi muu litsentsi alusel (isegi kui see on samasugune CC litsents nagu te ise rakendate).  

**Litsentsi tüüp**

Mõelge, kuidas te tahate, et seda materjali kasutataks.

Mõelge läbi, mida te tahate oma teose jagamisega saavutada, kui panete paika, [millist kuuest CC litsentsist rakendada](https://creativecommons.org/faq/#how-should-i-decide-which-license-to-choose). Näiteks kui tahate, et see ilmuks Wikipedia artiklis, peab sellele rakendama BY-SA või sellega kokkusobiva litsentsi.

Kaaluge kõiki kohustusi, mis võivad mõjutada seda, millist tüüpi litsentsi te rakendate.

Mõelge läbi kõik kohustused, mis teil on, nagu rahastusallika poolt või töölepingus esitatud litsentseerimisnõuded või [autorite ühingu poolt kehtestatud](https://creativecommons.org/faq/#can-i-use-a-creative-commons-license-if-i-am-a-member-of-a-collecting-society) piirangud teie poolsele CC litsentsi kasutamisele, mis dikteerivad, millist (kui üldse) kuuest CC litsentsist te rakendada saate.  

**Lisasätted**

Kaaluge garantii pakkumist.

Kui olete kindel, et olete välja selgitanud kõik õigused materjalile, siis võite otsustada anda garantii, et teos ei riku mingeid kolmandate isikute õigusi.

Soovi korral määrake täiendavad load.

Teil on võimalus [anda lube](https://creativecommons.org/faq/#can-i-waive-license-terms-or-conditions), mis on litsentsiga lubatavast väiksema või suurema ulatusega; näiteks lubada litsentsisaajatel ND-litsentsi alust materjali tõlkida. Kui nii, siis kaaluge [CC+ litsentsi](https://wiki.creativecommons.org/wiki/CCPlus) kasutamist, et märkida ära, milliseid lisalube pakutakse.  

**Erieelistused**

Määrake omistamise teave, kui soovite.

Võite määrata konkreetsed isikud seoses omistamisega, materjali URI ja muud omistamisega seonduvad andmed, mille litsentsisaajad peavad säilitama.

Märkige ära kõik mittesiduvad palved.

Võite paluda litsentsisaajatel järgida teie erisoove, näiteks teie materjalis tehtavate muudatuste märgistamine või kirjeldamine.  

## Mida peaksid kaaluma litsentsisaajad  

**Tehke litsents endale selgeks**

Lugege läbi kogu juriidiline tekst, mitte ainult õiguste andmise osa.

Lihtsasti loetav õiguste andmise osa on kokkuvõte [juriidilisest tekstist](https://wiki.creativecommons.org/wiki/Legal_code), kuid mitte selle asendus. See ei selgita kõike, mida te peate teadma, enne kui hakkate litsentseeritud materjali kasutama.

Veenduge, et litsents annab loa teha seda, mida te tahate teha.

On olemas kuus erinevat CC litsentsi. Kaks neist keelavad kohanduste jagamise (BY-ND, BY-NC-ND); kolm keelavad ärilise kasutuse (BY-NC, BY-NC-ND, BY-NC-SA) ja kaks nõuavad, et kohandused litsentseeritaks sama litsentsi alusel (BY-SA, BY-NC-SA).

Pange tähele litsentsi konkreetset versiooni.

Praegune versioon (4.0) [erineb varasematest versioonidest olulises osas](https://wiki.creativecommons.org/wiki/License_Versions). Sarnaselt võivad teatavatel tingimustel erinevad olla ka [jurisdiktsiooni ületoomised](https://creativecommons.org/faq/#what-are-the-international-unported-creative-commons-licenses-and-why-does-cc-offer-ported-licenses), nagu näiteks vaidluste lahendamisel ja kohalduva õiguse valimisel.  

**Litsentsi ulatus**

Pöörake tähelepanu sellele, mida täpselt litsentseeritakse.

Litsentsiandja peab olema [ära märkinud](https://wiki.creativecommons.org/wiki/Marking_your_work_with_a_CC_license), millised teose elemendid on litsentsiga hõlmatud ja millised mitte. Litsentsiga hõlmamata elementide jaoks võite vajada eriluba.

Kaaluge kolmandate isikute õiguste väljaselgitamist, kui see teid puudutab.

Litsents ei sisalda garantiid, seega kui arvate, et kolmandatel isikutel võib olla materjalile õigusi, siis võiksite need õigused juba ette välja selgitada.

Mõned litsentseeritud materjali kasutusviisid ei nõua litsentsi alusel lube.

Kui teose teie poolt soovitud kasutusviis on hõlmatud autoriõiguste või sarnaste õiguste [erandi või piiranguga](https://creativecommons.org/faq/#do-i-always-have-to-comply-with-the-license-terms-if-not-what-are-the-exceptions), siis võite teost nii kasutada. Neid kasutusviise litsents ei reguleeri.  

**Teadke oma kohustusi**

Tagage omistamine.

Kõik CC litsentsid nõuavad autorile [omistamist](https://creativecommons.org/faq/#how-do-i-properly-attribute-material-offered-under-a-creative-commons-license) ja [materjali märgistamist](https://wiki.creativecommons.org/wiki/Marking/Users), kui jagate seda avalikult. Konkreetsed nõuded on [eri versioonides veidi erinevad](https://wiki.creativecommons.org/wiki/License_Versions#Attribution-specific_elements).

Ärge piirake selle litsentsi all teiste isikute õiguste kasutamist.

Kõik CC litsentsid keelavad [toimivate tehnoloogiliste mooduste rakendamise](https://creativecommons.org/faq/#what-do-i-do-if-someone-tries-to-place-effective-technological-measures-such-as-drm-on-my-cc-licensed-material) ja õiguslike tingimuste kehtestamise, mis takistaks teistel tegemast seda, mida litsents lubab.

Tehke kindlaks, mida, kui üldse, te tohite enda loodavate kohandustega teha.

Sõltuvat rakendatavast litsentsist eksisteerivad piirangud sellele, [kas te tohite oma kohandusi jagada](https://creativecommons.org/faq/#can-i-combine-material-under-different-creative-commons-licenses-in-my-work) ja kui jah, siis [millist litsentsi te tohite oma panusele rakendada](https://creativecommons.org/faq/#if-i-derive-or-adapt-material-offered-under-a-creative-commons-license-which-cc-licenses-can-i-use).

Lõppemine on automaatne.

Kõik CC litsentsid [lõpevad automaatselt](https://creativecommons.org/faq/#how-can-i-lose-my-rights-under-a-creative-commons-license-if-that-happens-how-do-i-get-them-back), kui te nende tingimusi ei täida. Kui materjal on hõlmatud 4.0 litsentsiga, siis peate probleemi lahendama 30 päeva jooksul pärast probleemi avastamist, kui tahate, et teie õigused automaatselt taastuksid.  

**Arvestage litsentsiandja eelistustega**

Kaaluge litsentsiandja mittesiduvate palvete täitmist.

Litsentsiandja võib esitada materjali kasutamisel eripalveid. Soovitame neid järgida, kuid see on teile valikuline ja mitte kohustus.

# Avaandmete loomise juhend

## Kuidas andmeid mõistlikult tuumsüsteemidest kätte saada?

**Põhisoovitused:**

* Andmete avaldajal peab olema kohustus andmete kättesaadavus tagada.
* Tuum peaks olema eraldi:
  * tee vahepuhver (mitte otse andmebaasist).
  * tee protsess tuuma ja avaldamise vahele.
* Töötada lahendus välja juba andmekogu loomisel või olemasoleva muutumisel.
* Tuumas indeksid != avaandmetes indeksid.
* Kui vaja pärida tuumast, siis tükelda, limiteeri küsimine, et mitte häirida tuuma.
* Automatiseerida:
  * päringud kellaajaliselt hajutatud.
  * mõistlik filtreering, päringud detailsemalt.
  * piisavalt hea koormusjaotur.
* Alternatiivne/täiendav variant: eraldi organisatsioon andmete väljavõtmiseks (kompetents).
 
## Kuidas andmeid mõistlikult internetis avaldada?

**Avaldatavad andmed peaksid olema:**

* Värsked:
  * dünaamilisi andmeid (näiteks ilmastiku, ühistranspordi või parkimise andmestikud) peab ajakohastama sageli või reaalajas eelkõige seetõttu, et nad muutuvad pidevalt või aeguvad kiiresti.
  * andurite abil saadud andmeid loetakse tavaliselt dünaamilisteks andmeteks.
* Inim-mõistetavad.
* Masintöödeldavad: JSON, CSV, XML + semantika, metaandmed.
* Struktureeritud! 
* Leitavad, otsimootori-sõbralikud.
* Kooskõlas seadusega.
* Kooskõlas avatud standarditega.
* Masintõlgitavad (et ka välismaalased saaksid andmeid kasutada).
 
## Kuidas seda tagada?

* Andmete avaldamine ja uuendamine **automatiseerida** (vii käsitöö miinimumini) & **teha regulaarseks**: 
  * aitab tagada andmete usaldusväärsuse.
  * kui andmete avaldamine on ühekordne tegevus, ei ole võimalik tagada, et andmete avaldamine on seadusega kooskõlas. Auditeeritavuse ning kontrollitavuse huvides on hea, kui on koodis kirjas.
* Dokumenteeri, lisa readme fail.
* API on eelistatuim andmestike avaldamiseks ning jagamiseks.
* Lisa näidiseid, too välja võimalikud kasutusotstarve.
* Mõtle läbi URL, hoia see stabiilne.
* Lisa CORS-võimekus (muudatustega või infoga andmete muutmise aja kohta).
* Pane alati juurde metaandmed:
* kasuta laialt kasutatud sõnavara, nt Google Markup.
* Mõtle läbi üksikelemendid, nimekirja päring, muudatuste päring.
* Loo aegrea säilimise võimalus.
* Masintõlgitavus: jälgi eestikeelseid termineid valides, et näiteks Google Translate suudaks termineid üheselt tõlkida.
* Visualiseeri kaardid ning graafikud.
* Laialt kasutatud andmed avalda lingituna/linkandmetena.
* Anna võimalus tagasisideks, lisaküsimusteks:
  * tea, kes on su kasutajad.
 
**Muud tugitegevused:**

* Pressiteated, info avaldamine avaandmete pealt loodud edulugude kohta.
* Avaandmete promo ja andmevaldajate survestamine, et andmeid avaldataks.
 
## Kuidas korraldada andmete puhastamine/anonümiseerimine enne avaldamist?

**Kes peaks tegelema?**

* Töötlemine peaks toimuma IT ja äripoole koostöös - äripool teab, milleks andmed vajalikud, IT peaks sellest juhinduma.
* Kooskõlastada avaldamise protsess infoturbe, tehnoloogia jt asjassepuutuvatega.
* Määra vastutaja, DPO, andmete omanik.
 
**Kes ütleb, mis andmed on vajalikud?**

* Organisatsiooni äripool.
* Kasutaja.
* Andmed võiks üle vaadata teise valdkonna isik ja veenduda nendest arusaamises ning nende vajalikkuses.
 
**Õiguslik alus:**

* Alusta sellest, mis on andmete avaldamise seaduslik alus – AvTS ja seonduvad seadused.
* Taga isikuandmete, riigi- ja finantssaladuse kaitse.
 
**Kuidas tagada andmete turvalisus?**

* Eemalda mittevajalik, eemalda avalikustamisele mittekuuluv.
* Vajadusel anonümiseeri, pseudonümiseeri ning agregeeri.
* Andmete haavatavus - kui selgub, et keegi suudab sinu andmete toel teha midagi ebaeetilist, kuritegelikku vms, muuda protsessi.
 
**Üldine protsess:**

* **Pane püsti pidev protsess**, ära avalda ainult üks kord - korratavus vajalik ka seadusega kooskõla tagamiseks.
* Mitte tegeleda andmete korrastamisega - see peaks toimuma tuumsüsteemis.
* Automatiseerida andmete avaldamine, et alati oleks värsked andmed. Ei tohiks olla käsitöö.
* Automaatne kontroll, mis juhib tähelepanu muredele andmetes.
* Mõelda läbi, milline on parim formaat andmete esitamiseks.
* Mõõda andmete kvaliteeti.
  * Statistikaamet tegeleb kvaliteedi mõõtmise metoodika väljaarendamisega.
 
**Kui läheb avalikustamiseks:**

* Kirjelda andmed, mis sul on:
  * RIHA.
* Kirjelda metaandmed ja vorming.
* Vii masintöödeldavale kujule.
* Andmetega lähtekood kaasa – s.o kuidas andmed on töödeldud.
* Versioneerimine:
  * V1 jääb endiselt uuenema (protsess!), V2 tuleb kõrvale (nt eemaldasime duplikaadid).
 
## Kas ja kuidas toimub metaandmestiku avaldamine ning uuendamine?

**Kõige olulisem:**

* Metaandmed on väga olulised kirjeldamaks, andmete sisu, uuenemiskiirust jms.
* Avaandmete kirjeldused ei tule veebiotsingutest välja:
  * tuleb lahendada metaandmete avaldamine – metaandmed peaksid olema avaldatud andmetega koos ja tekkima automaatselt.
* Eraldiseisva dokumentatsiooni asemel inimhoomatav ja masintöödeldav kirjeldus.
* Lisaks andmetele hoolitseda ka metaandmete ajakohasena hoidmise eest.
* Kõige alus: vajalik saada andmete elutsükkel organisatsioonis kontrolli alla! Andmed kui “organisatsiooni vereringe” - oleks vaja teada, kust kuhu mis jookseb.
 
**Kuidas metaandmeid luua?**

* Vajalik tekitada kirjeldusstandard - Statistikaamet tegeleb
* Asutustes peab tekkima andmekataloog, kus on andmed kirjeldatud. Ei kirjutata ette, milline see peab olema, aga siis tekib vähemalt koht, kust andmeid avalikustada.
* Metaandmed YAML, sama kasutada avaldamisprotsessis, et tagada asjakohasus, ühekordsus.
* Kirjelda teadaoleva andmevead!
* Tekita tagasiside looja ja kasutaja vahel: anna metaandmetes ka kontaktpunkt (lisaküsimused, tagasiside andmetele).
 
**Statistikaameti pakutav lahendus:**
* Avaldatav kirjeldus peab olema semantiliselt seotud algse kirjeldusega.
* Metaandmed peavad olema ühtlustatud (kirjeldusstandard) – Statistikaamet teeb standardi! Statistikaameti standardid: DDI, SDMX. Transformation: SDMX → VTL = validation and transportation language.
 
## Kas ja kuidas piirata ligipääsu andmetele?

* Põhimõtteline küsimus: kas üldse piirata? 
* Piirata (ainult) süsteemi tervise huvides.
* Tehniline võimekus süsteemi hooldustööde aegadeks.
* Käsitleda andmeid kui ressurssi (nagu Ülemiste järve vesi – järvel on tara ümber, aga kraanist vett saavad kõik).
 
**Millistele andmetele ligipääsu piirata/mitte piirata?**

* Ligipääsu piirang vaid üksikandmetele (isikuandmed) → pseudonümiseerimine või anonümiseerimine, et saaks avaldada.
* Suurandmetele ligipääs kokkuleppel.
* Ligipääs pärast autentimist.
 
**Mille alusel otsustada, kas/kui palju piirata?**

Andmed võib jagada kategooriatesse:
* personaalsed andmed, mida ainult asutus töötleb.
* andmed, mis kõigile arusaadavalt avalikud.
* muud andmed:
  * statistika – äriline väärtus. Riik müüb ka andmeid (äriregister, kinnistusregister). Kas saaks võtta siit ärilise kasu maha ja teha need avaandmeteks?
  * Mikroandmed, näiteks leibkondade uuringute ankeedid (isikustamata, seega sobilikud avaldamiseks).
 
**Kasutuslitsentsid:**
* Litsentsi on vaja! On üldlevinud arusaam, et Eesti seadusandluse kohaselt ei ole litsentsi vaja, aga sellele on mitu vastuargumenti:
  * juristid ei ole sugugi ühel meelel, et ei ole vaja – parem litsents juurde panna.
  * kasutajad tahavad teada, mis alusel võib andmeid kasutada.
  * oluline määratleda, mida võib andmetega teha. Pahatahtlikku kasutajat litsents ei takista, aga võimaldab vastutusele võtta. Heatahtlik kasutaja saab suunised ja reeglid.
  * litsents oluline välisriikide kasutajate jaoks, kes ei jõua süveneda Eesti seadusandluse eripäradesse.
* Kasutuslitsentsi juures täpsusta allika mainimise nõuet, töötluse tulemi eest raha küsimise luba ning töötlemata andmete eest tasu küsimist.

# Soovitused avaandmete mõju hindamiseks organisatsioonis

„Enne teabe avaandmeteks andmist peab teabevaldaja tegema avaandmete mõjuhinnangu.“[1] Andmekaitse Inspektsioon peab eelkõige silmas andmekaitsealast mõjuhinnangut ning pakub selleks ka [näidisdokumendi](https://www.aki.ee/sites/default/files/inspektsioon/naidis/andmekaitsealane_mojuhinnang_naidis_1.pdf).

Lisaks andmekaitsealasaele mõjuhinnangule on soovituslik läbi viia ka üleüldine avaandmete mõju mõõtmine. Avaandmete mõju võib olla näiteks majanduslik, sotsiaalne, poliitiline ja/või keskkondlik ning eristada tuleks andmete avaldamisega kaasnevat mõju ja taaskasutusest tekkivast mõjust. Avaldamisega kaasnev mõju liik sõltub eelkõige organisatsiooni tegevusvaldkonnast, kuna avaandmed tekivad tööprotsesside täitmise käigus. Avaandmete mõju on enim seotud andmete taaskasutusega ja sõltub konkreetsetest kasutusjuhtudest.

Avaandmete mõju mõõtmine peab olema iga organisatsiooni jaoks loomulik tööprotsessi osa ning mõju hindamise mõõdikud peavad olema nii efektiivsed kui ka lihtsasti tuletavad, et mõju hindamiseks ei kuluks organisatsioonisiseselt lisaressurssi. Mõju mõõtmine võib esmapilgul näida lisakohustusena, kuid aitab lõpuks paremini hinnata seni tehtut, planeerida edasisi tegevusi ja seada tuleviku eesmärke.

Kuigi mõõdikute seadmisel tuleks arvestada asutuse enda eripärade ja eesmärkidega, siis toome välja mõningad mõõdikud, mida võiks kaaluda:

1. Andmestiku allalaadimise arv – kui andmestik tundub teoreetiliselt kasulik, kuid allalaadimiste arv seda ei kajasta, siis tuleb uurida selle põhjuseid. Kas andmestiku vorming on sobiv, kas avaldatud andmed on kasutajatele piisavalt arusaadavad, kas andmed on piisavalt hästi leitavad?
2. Andmestiku allalaadimise sagedus – s.o kui on märgata andmestiku allalaadimise langust, tuleb uurida selle põhjuseid. Kas andmestiku kvaliteet on halvenenud või pole teema lihtsalt enam nii aktuaalne?
3. Organisatsioonile esitatavate teabenõuete valdkondade/teemade analüüs – kas ilmneb kindel teema, mille kohta võiks teabenõuete mitmekordsetele rahuldamiste asemel avaldada teemakohased andmed avaandmetena?
  * Teabenõuetele vastamise võimalik asendamine avaandmete avaldamisega toob endaga kaasa ka avaliku sektori kokkuhoiu ning tootlikkuse ja tõhususe kasvu avalikus sektoris, kuna töötajad saavad enam keskenduda sisutööle. Lisaks sellele saab avaliku sektori kokkuhoidu mõõta rahalises vääringus, mis on omakorda mõju mõõdik.
4. Kasutajate rahulolu mõõtmine – rahulolu mõõtmine ei pea olema keeruline protsess, sobilik on ka etteantud skaalal kasutajatelt numbrilise tagasiside küsimine (näiteks 10-palli likert skaalal), mis toimub allalaadimisega samal ajal. Lisaks on mõistlik kasutajatelt tagasiside ja kasutusjuhu küsimine ning vajadusel viia sisse muudatused vastavalt kasutajate tagasisidele.

Sellised mõõdikud on esmaseks mõjuhinnanguks piisavad ja sobilikud, andes nii teabevaldajale tagasiside avaldatud andmestiku kohta kui ka kasutajatele, kes saavad tarbida andmeid omale optimaalsel kujul. Mõju liigitamine majanduslikuks, poliitiliseks, sotsiaalseks või keskkondlikuks tuleneb andmetest. Majanduslik mõju ilmneb eriti geograafiliste, meteoroloogiliste ning majandusalaste andmestike avaldamisel. Poliitiline mõju ilmneb selliste andmestike avaldamisest, mis muudavad riigivalitsemist läbipaistvamaks ning andmestike, mis sisaldavat teavet vastutusest erinevate ressursside kasutamise kohta. Andmestikud, millel on sotsiaalne mõju, on kõikvõimalikud hüvitiste ja toetuste andmestikud ning erinevate inimgruppide kohta käivad andmed ning keskkondlik mõju on suurim keskkondlikel andmestikel. [2]
 
–––

[1] [Avaandmetest Andmekaitse Inspektsioon](https://www.aki.ee/et/teabe-avalikkus/avaandmetest)

[2] [Creating Value through Open Data](https://www.europeandataportal.eu/sites/default/files/edp_creating_value_through_open_data_0.pdf)