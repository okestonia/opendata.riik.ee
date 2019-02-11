---
schema: default
title: X-Road v6 service monitoring opendata
notes: X-Road monitoring data is collected from Estonian X-Road members security servers available by X-Road Center (Republic of Estonia Information System Authority, Riigi Infosüsteemi Amet, RIA) and published as opendata with a delay of 10 days from actual transaction execution time. Timestamps (specifically requestInTs) are rounded to hour precision and presented in form of Unix timestamp (epoch time). X-Road data that is being published as open data by RIA does not contain data considered to be for internal use only and information about the security authorities.
User Guide https://github.com/ria-ee/X-Road-opmonitor/blob/master/docs/opendata/user_guide/ug_opendata_interface.md
API Guide https://github.com/ria-ee/X-Road-opmonitor/blob/master/docs/opendata/user_guide/ug_opendata_api.md
Fields https://github.com/ria-ee/X-Road-opmonitor/blob/master/docs/opendata/user_guide/cfg_lists/field_data.yaml
department: ''
category:
  - Valitsus ja avalik sektor
resources:
  - name: Production environment (EE)
    url: 'https://logs.x-tee.ee/EE/gui/'
    format: json, gzip
    interactive: 'True'
  - name: Test environment (ee-test)
    url: 'https://logs.x-tee.ee/ee-test/gui/'
    format: json, gzip
    interactive: 'True'
  - name: Development environment (ee-dev)
    url: 'https://logs.x-tee.ee/ee-dev/gui/'
    format: json, gzip
    interactive: 'True'
license: 'http://creativecommons.org/licenses/by/3.0/'
update_freq: 'http://purl.org/linked-data/sdmx/2009/code#freq-D'
date_issued: 2017/12/01
date_modified: 2019/02/11
organization: Republic of Estonia, Information System Authority
maintainer_name: Toomas Mölder
maintainer_email: toomas.molder@ria.ee
maintainer_phone: '+372 666 8822; +372 55 22000'

---
