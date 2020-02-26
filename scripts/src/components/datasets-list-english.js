/**
 * Usage:
 * <div data-component="datasets-list">
 *   <h3 class="datasets-count" data-hook="datasets-count"></h3>
 *   <input type="text" data-hook="search-query" placeholder="Search..." class="form-control">
 *   <div data-hook="datasets-items"></div>
 * </div>
 *
 * Optionally, add filters to the component element such as
 *   data-organization="sample-department"
 *   data-category="education"
 */
import {pick, defaults, filter} from 'lodash'

import TmplDatasetItemEn from '../templates/dataset-item-english'
import {queryByHook, setContent, createDatasetFilters} from '../util'

export default class {
  constructor (opts) {
    const elements = {
      datasetsItemsEnglish: queryByHook('datasets-items-english', opts.el),
      datasetsEnglishCount: queryByHook('datasets-english-count', opts.el),
      searchQueryEnglish: queryByHook('search-query-english', opts.el)
    }

    // Filter datasets and render in items container
    const paramFiltersEn = pick(opts.params, ['organization', 'category_en'])
    const attributeFiltersEn = pick(opts.el.data(), ['organization', 'category_en'])
    const filtersEn = createDatasetFilters(defaults(paramFiltersEn, attributeFiltersEn))
    const filteredDatasetsEn = filter(opts.datasets, filtersEn)
    const datasetsMarkupEn = filteredDatasetsEn.map(TmplDatasetItemEn)
    setContent(elements.datasetsItemsEnglish, datasetsMarkupEn)
    $(function() {
        var pageParts = $("dataset");
        var numPages = pageParts.length;
        var perPage = 7;
        pageParts.slice(perPage).hide();
        $("#page-nav").pagination({
            items: numPages,
            itemsOnPage: perPage,
            prevText: "Previous",
            nextText: "Next",
            cssStyle: "light-theme",
            onPageClick: function(pageNum) {
                var start = perPage * (pageNum - 1);
                var end = start + perPage;
                pageParts.hide()
                         .slice(start, end).show();
            }
        });
    });

    // // Dataset count English
    const datasetSuffix =  filteredDatasetsEn.length > 1 ? 's' : ''
    const datasetsEnglish = filteredDatasetsEn.length + ' Dataset' + datasetSuffix;

    setContent(elements.datasetsEnglishCount, datasetsEnglish)

    // Search datasets listener
    const searchFunctionEnglish = this._createSearchFunctionEnglish(filteredDatasetsEn)
    elements.searchQueryEnglish.on('keyup', (e) => {
      const queryEn = e.currentTarget.value

      // Datasets
      const resultsEn = searchFunctionEnglish(queryEn)
      const resultsMarkupEn = resultsEn.map(TmplDatasetItemEn)
      setContent(elements.datasetsItemsEnglish, resultsMarkupEn)

      //Dataset Count english
      const resultid = resultsEn.length + ' Datasets'
      setContent(elements.datasetsEnglishCount, resultid)
      $(function() {
          var pageParts = $("dataset");
          var numPages = pageParts.length;
          var perPage = 7;
          pageParts.slice(perPage).hide();
          $("#page-nav").pagination({
              items: numPages,
              itemsOnPage: perPage,
              prevText: "Previous",
              nextText: "Next",
              cssStyle: "light-theme",
              onPageClick: function(pageNum) {
                  var start = perPage * (pageNum - 1);
                  var end = start + perPage;
                  pageParts.hide()
                           .slice(start, end).show();
              }
          });
      });

    })
  }

  // Returns a function that can be used to search an array of datasets
  // The function returns the filtered array of datasets
  _createSearchFunctionEnglish (datasets) {
    const keys = ['title_en', 'notes_en']
    return function (query) {
      const lowerCaseQuery = query.toLowerCase()
      return filter(datasets, function (dataset) {
        return keys.reduce(function (previousValue, key) {
          return previousValue || (dataset[key] && dataset[key].toLowerCase().indexOf(lowerCaseQuery) !== -1)
        }, false)
      })
    }
  }
}
