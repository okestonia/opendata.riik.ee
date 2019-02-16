---
schema: default
title: X-tee teenuste kataloog
notes: 'X-tee teenuste kataloog https://www.x-tee.ee/catalogue/ genereeritakse RIA teenuste monitooringu serveri poolt päringu getWsdl vastuste põhjal kõikidest X-tee alamsüsteemidest. Alamsüsteemid ikooniga Empty ei paku X-tee teenuseid ("methods": []). Alamsüsteemid ikooniga Error ei ole kas kättesaadavad RIA monitooringu serveri poolt või esines mingi muu viga ("subsystemStatus": "ERROR"). NB! 2019/02/13 seisuga on X-tee kataloog ajutine ja mittetäiuslik / poolik lahendus. RIA-l on projekti "X-tee teenusega liitumise ja liikmelisuse haldamise lihtsustamine" koosseisus loomisel keskkond, mille arenduse käigus on soov seda kataloogi täiendada funktsionaalsustega. Samuti on koostöös MKMi veetava arhitektuurinõukoguga algamas RIHA tuleviku kontseptsiooni visiooni uuendamine ja seal saab muuhulgas selgeks antud kataloogi võimalik paiknemine ja seos RIHA-ga.'
department: ''
category:
  - Valitsus ja avalik sektor
resources:
  - name: Kõik alamsüsteemid koos teenuste kirjelduste ja WSDL-failidega, X-tee toodangukeskkond (EE)
    url: 'https://www.x-tee.ee/catalogue/EE/wsdls/index.json'
    format: JSON
    interactive: 'False'
  - name: Kõik alamsüsteemid koos teenuste kirjelduste ja WSDL-failidega, X-tee testkeskkond (ee-test)
    url: 'https://www.x-tee.ee/catalogue/ee-test/wsdls/index.json'
    format: JSON
    interactive: 'False'
  - name: Kõik alamsüsteemid koos teenuste kirjelduste ja WSDL-failidega, X-tee arenduskeskkond (ee-dev)
    url: 'https://www.x-tee.ee/catalogue/ee-dev/wsdls/index.json'
    format: JSON
    interactive: 'False'
license: 'https://creativecommons.org/licenses/by-sa/3.0/ee/legalcode'
update_freq: 'http://purl.org/linked-data/sdmx/2009/code#freq-D'
date_issued: 2018/05/14
date_modified: 2019/02/16
organization: Riigi Infosüsteemi Amet (RIA)
maintainer_name: Toomas Mölder
maintainer_email: toomas.molder@ria.ee
maintainer_phone: '+372 666 8822; +372 55 22000'
---
