---
title: Guidelines for publishing secondary datasets
layout: default
permalink: /en/guidelines/
lang: en
---
{% include breadcrumbs.html %}

# Guidelines for publishing secondary datasets on opendata.riik.ee

## General principles

 1. **For the purposes of these guidelines, 'secondary datasets' are defined as datasets produced as a result of the automated processing, combination or scraping/polling of publicly accessible datasets**. Secondary datasets can be published on opendata.riik.ee in accordance with the guidelines below.
 2. In exceptional cases, one can also publish references to primary sources on opendata.riik.ee in case the data holder does not wish or is not able to publish the data (e.g. datasets belonging to foreign governments or private companies). In this case, the data publisher should refer to the direct source of the dataset, without making a copy, and the responsibility for the data remains with the owner of the original dataset.
 3. The original source of the data and the process whereby the secondary dataset was created needs to be transparent for users. To this end, all datasets should be accompanied with detailed metadata to allow users to assess the credibility of the data.
 4. When publishing secondary datasets, no restrictions shall be set (e.g. by attaching a restrictive license) as regards the means, formats and goals for which the data can be reused, except in cases where such restrictions are required by law.
 5. The publisher of a secondary dataset bears full responsibility for the lawfulness of accessing and processing the data and the consequences thereof. The two principal (but not the only) norms to be followed include:
	- in case the primary dataset is defined as personal data in the sense of the General Data Protection Regulation 2016/679 Article 4, paragraph 1, the publisher is obliged to verify the existence of a justified legal basis for processing the data and ensuring that the rights of data subject be respected, including the data subject’s right to access the data (Article 15), right to rectification (Article 16), right to erasure (Article 17), right to object (Article 21), right to compensation and liability (Article 82);  
	- Law of Obligations Act (*Võlaõigusseadus*), in particular §1046 (unlawfulness of damaging personality rights) and §1047 (unlawfulness of disclosure of incorrect information and the obligation for compensation of related damages).

Notifications of possible errors in secondary datasets can be submitted to GitHub following the same procedure as for primary datasets: <https://github.com/okestonia/opendata-issue-tracker>.

## Metadata

The following metadata should be published along with any secondary dataset:

**Data source**: an as accurate as possible reference to the source of the original data, e.g. URLs, addresses of scraped websites, etc.

**Source code of the program used for the collection and processing of the data**. The program used for the creation of secondary datasets should be public in order to enable the public to assess the credibility of the processing.

**Name and contact information of the publisher of the secondary dataset**. The name and contact details of the publisher of a secondary dataset allow users to report problems and the owners of the original datasets to take measures to request changes or the removal of the secondary dataset if need be.

**Temporal dimension**, including:

 - Time retrieved (time when the data was obtained from the original source);
 - Time of publication in the original source (what time period the data represents);
 - Update frequency or update policy: how often or on what conditions (if at all) the secondary dataset will be updated;
 - Planned date of storage: how long the secondary dataset will be available to the public without significant changes in methodology. 

**License**. What and on which grounds can be done with the dataset. The license chosen for a secondary dataset cannot contradict the license attached to the primary dataset.

## Questions and answers

### Who and how assesses the quality and credibility of the data?

A user of a dataset or its derivatives assesses data quality based on the metadata attached to the dataset. As a rule, the more detailed the metadata, the more credible the data can be presumed to be (except in cases where the data provider has pointed to possible errors in data). Users use secondary datasets at their own responsibility. If a secondary dataset is not deemed credible, users can use the original data.

### Who is responsible for the accuracy of the data?

As regards data accuracy, the publisher of a secondary dataset is responsible only for providing accurate metadata and ensuring that the published code indeed produces the secondary dataset that is published.

## Discussion and feedback

Proposals for amendments to these guidelines can be made via GitHub: <https://github.com/okestonia/jkan/issues/403>.
