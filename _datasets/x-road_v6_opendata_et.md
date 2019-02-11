---
schema: default
title: X-tee v6 teenuste monitooringu avaandmed
notes: X-tee teenuste monitooringu andmed kogutakse X-tee keskuse (Riigi Infosüsteemi Amet, RIA) poolt kättesaadavatest Eesti X-tee liikmete turvaserveritest ja avaldatakse avaandmetena 10-päevase viitega päringu toimumise tegelikust ajast. Päringute toimumise kellaajad (requestInTs) on ümardatud tunni täpsusega, esitatud Unix-ajana (epoch-aeg). Andmetest on eemaldatud vaid asutusesiseseks kasutamiseks mõeldud ning Julgeolekuasutuste seaduses (JAS) nimetatud asutuste andmed.
Kasutusjuhend https://github.com/ria-ee/X-Road-opmonitor/blob/master/docs/opendata/user_guide/ug_opendata_interface.md
API juhend https://github.com/ria-ee/X-Road-opmonitor/blob/master/docs/opendata/user_guide/ug_opendata_api.md
Andmeväljad https://github.com/ria-ee/X-Road-opmonitor/blob/master/docs/opendata/user_guide/cfg_lists/field_data.yaml
department: ''
category:
  - Valitsus ja avalik sektor
resources:
  - name: Toodangukeskkond (EE)
    url: 'https://logs.x-tee.ee/EE/gui/'
    format: json, gzip
    interactive: 'True'
  - name: Testkeskkond (ee-test)
    url: 'https://logs.x-tee.ee/ee-test/gui/'
    format: json, gzip
    interactive: 'True'
  - name: Arenduskeskkond (ee-dev)
    url: 'https://logs.x-tee.ee/ee-dev/gui/'
    format: json, gzip
    interactive: 'True'
license: 'http://creativecommons.org/licenses/by/3.0/'
update_freq: 'http://purl.org/linked-data/sdmx/2009/code#freq-D'
date_issued: 2017/12/01
date_modified: 2019/02/11
organization: Riigi Infosüsteemi Amet
maintainer_name: Toomas Mölder
maintainer_email: toomas.molder@ria.ee
maintainer_phone: '+372 666 8822; +372 55 22000'

---
