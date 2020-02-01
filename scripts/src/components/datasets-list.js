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
import * as Fuse from 'fuse.js'
import TmplDatasetItem from '../templates/dataset-item'
import {queryByHook, setContent, createDatasetFilters} from '../util'
import $ from 'jquery'

export default class {
  constructor (opts) {
    const elements = {
      datasetsItems: queryByHook('datasets-items', opts.el),
      datasetsCount: queryByHook('datasets-count', opts.el),
      searchQuery: queryByHook('search-query', opts.el)
    }

    // Filter datasets and render in items container
    const paramFilters = pick(opts.params, ['organization', 'category'])
    const attributeFilters = pick(opts.el.data(), ['organization', 'category'])
    const filters = createDatasetFilters(defaults(paramFilters, attributeFilters))
    const filteredDatasets = filter(opts.datasets, filters)
    const datasetsMarkup = filteredDatasets.map(TmplDatasetItem)
    setContent(elements.datasetsItems, datasetsMarkup)

    // // Dataset count
  //  const datasetSuffix =  filteredDatasets.length > 1 ? 's' : ''
    const datasetsCountMarkup = filteredDatasets.length + ' Andmehulgad';
    // + datasetSuffix;
    setContent(elements.datasetsCount, datasetsCountMarkup)

    // Search datasets listener
  //  const searchFunction = this._createSearchFunction(filteredDatasets)
    $(document).ready(function () {
      var Fuse = require('fuse.js')
    //  window.$.getJSON('../datasets.json', function (response) {
      var options = {
      shouldSort: true,
      threshold: 0.4,
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      minMatchCharLength: 1,
      keys: [
        "title",
        "notes",
        "organization",
        "category",
        "resources.name"
      ]
    };
    const fuse = new Fuse(filteredDatasets, options);

    elements.searchQuery.on('keyup', function () {
      let result = fuse.search($(this).val());
      const results = result
      const resultsMarkup = results.map(TmplDatasetItem)
      setContent(elements.datasetsItems, resultsMarkup)

      // Dataset count
      const resultsCountMarkup = results.length + ' Andmehulgad'
      setContent(elements.datasetsCount, resultsCountMarkup)


    })
//  });

  // Returns a function that can be used to search an array of datasets
  // The function returns the filtered array of datasets
  // _createSearchFunction (datasets) {
  //
  //     return filter(datasets, function (dataset) {
  //     })
  //   }

});
}
}
