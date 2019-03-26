---
schema: default
title: Eesti Teadusinfosüsteemi avaandmed
notes: |-
  Eesti Teadusinfosüsteem (ETIS) koondab Eesti teadus- ja arendustegevusega seotud andmeid. Kõige vanemad andmed on aastast 2006. Kõik ETISe avalikud andmed on kättesaadavad portaalist ja API kaudu (väljundformaadid XML, JSON).
     API kasutamise juhend on lisatud täiendava failina. Allpool on  näitena lisatud API kasutamise juhendi abil  koostatud Tartu Ülikooli teadusaparatuuri ja käimasolevate sihtfinatseeringuga projektide andmehulgad.
     Portaalist on võimalik andmeid ning otsingu tulemeid eksportida Excelisse ja CSV, XML formaati.
department: ''
category:
  - Teadus ja tehnoloogia
resources:
  - name: ETIS avaandmete kasutamine API liidese vahendusel
    url: 'https://opendata.riik.ee/downloads/etisavaandmetekasutamineapiliidesevahendusel.pdf'
    format: PDF
    interactive: 'True'
  - name: Tartu Ülikooli Teadusaparatuur
    url: 'https://www.etis.ee:7443/api/scientificequipment/getitems?Format=xml&SearchType=3&Take=5&Skip=0&InstitutionRegNo=74001073'
    format: XML
    interactive: 'False'
  - name: Käimasolevad sihtfinantseerimisega projektid
    url: 'https://www.etis.ee:7443/api/project/getitems?Format=json&SearchType=3&Take=5&Skip=0&ProgrammeName=Sihtfinantseerimine&ProjectStatus=2'
    format: JSON
    interactive: 'False'
  - name: Teadus- ja arendustegevusega seotud isikud
    url: 'https://www.etis.ee/Portal/Persons/Index'
    format: HTML
    interactive: 'True'
  - name: Teadus- ja arendustegevusega seotud asutused
    url: 'https://www.etis.ee/Portal/Institutions/Index'
    format: HTML
    interactive: 'True'
  - name: Teadus- ja arendustegevusega seotud projektid
    url: 'https://www.etis.ee/Portal/Projects/Index'
    format: HTML
    interactive: 'True'
  - name: Teadus- ja arendustegevusega seotud publikatsioonid
    url: 'https://www.etis.ee/Portal/Publications/Index'
    format: HTML
    interactive: 'True'
  - name: Teadus- ja arendustegevusega seotud juhendamised
    url: 'https://www.etis.ee/Portal/Mentorships/Index'
    format: HTML
    interactive: 'True'
  - name: Teadus- ja arendustegevusega seotud tööstusomand
    url: 'https://www.etis.ee/Portal/IndustrialProperties/Index'
    format: HTML
    interactive: 'True'
  - name: Teadus- ja arendustegevusega seotud kollektsioonid ja kogud
    url: 'https://www.etis.ee/Portal/Collections/Index'
    format: HTML
    interactive: 'True'
  - name: Teadus- ja arendustegevusega seotud teadusaparatuur
    url: 'https://www.etis.ee/Portal/ScientificEquipments/Index'
    format: HTML
    interactive: 'True'
  - name: Teadus- ja arendustegevusega seotud tooted ja teenused
    url: 'https://www.etis.ee/Portal/ProductServices/Index'
    format: HTML
    interactive: 'True'
  - name: Teadus- ja arendustegevusega seotud koostööpakkumised
    url: 'https://www.etis.ee/Portal/CooperationOffers/Index'
    format: HTML
    interactive: 'True'
  - name: Teadus- ja arendustegevusega seotud klassifikaatorid
    url: 'https://www.etis.ee/Portal/Classifiers/Index'
    format: HTML
    interactive: 'True'
license: 'https://creativecommons.org/licenses/by-sa/3.0/ee/legalcode'
update_freq: ''
date_issued: 2018/04/16
date_modified: 2019/03/27
organization: Haridus- ja Teadusministeerium
maintainer_name: ETIS kasutajatugi
maintainer_email: etis@etag.ee
maintainer_phone: ''

---
