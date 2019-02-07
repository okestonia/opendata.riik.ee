dataset_fields:
  - field_name: title
    label: Riigikogu veebi avaandmed
    datajson: title
  - field_name: update_freq
    label: 
    datajson: frequency
  - field_name: date_issued
    label: 2019/02/07
    datajson: issued
  - field_name: date_modified
    label: 2019/02/07
    datajson: modified
  - field_name: organization
    label: Riigikogu Kantselei
    datajson: publisher
  - field_name: notes
    label: Riigikogu Kantselei avaandmete teenused võimaldavad IT-asjatundjale paindlikku ja kohest ligipääsu töö käigus tekkinud infole. Avaandmeid väljastatakse läbi rakendusliidese (API) JSON-vormingus. Avalik rakendus kuvab märkimisväärses mahus sisu mitmest infosüsteemist (näiteks stenogrammid, hääletused, osavõtt, dokumendiregister, saadikute ja teenistujate andmed, eelnõud, märksõnaotsingu sisu, statistika jm info). Paljud andmed on API väljundites esitatud universaalsete ja unikaalsete identifikaatoritena (UUID), millele saab selgitava vaste sobiva API päringu tegemisel.
    form_template: form/textarea.html
    datajson: description
  - field_name: license
    label: <a href="https://creativecommons.org/licenses/by-sa/3.0/ee/legalcode">Creative Commons 3.0 BY-SA</a>
    form_template: form/license.html
    datajson: license
  - field_name: category
    label: Valitsus ja avalik sektor
    form_template: form/category.html
    display_template: display/category.html
    datajson: category
  - field_name: maintainer_name
    label: Riigikogu Kantselei
    datajson: contactPoint.fn
  - field_name: maintainer_email
    label: riigikogu@riigikogu.ee
    datajson: contactPoint.hasEmail
  - field_name: maintainer_phone
    label: +372 631 6331


resource_fields:
  - field_name: name
    label: EMS API dokumentatsioon
    datajson: distribution.title
  - field_name: url
    label: https://api.riigikogu.ee/swagger-ui.html
    datajson: distribution.downloadURL
  - field_name: format
    label: JSON
    datajson: distribution.format
    form_template: form/dropdown.html
    values:
      - api
      - csv
      - json
      - geojson
      - html
      - kml
      - kmz
      - shp
      - xml
      - xlsx
      - xsd
      - txt
      - zip
      - pdf
      - rdf
