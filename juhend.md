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

CC BY 4.0 litsents on eestikeelsena kättesaadav [SIIN](https://github.com/okestonia/jkan/files/2951537/CC.4.0_litsents_EN_est.docx/)  

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
