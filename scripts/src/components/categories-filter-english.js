import $ from 'jquery'
import {chain, pick, omit, filter, defaults} from 'lodash'

import TmplListGroupItem from '../templates/list-group-item'
import {setContent, slugify, createDatasetFilters, collapseListGroup} from '../util'

export default class {
  constructor (opts) {
    const categories = this._categoriesWithCount(opts.datasets, opts.params)
    const categoriesMarkup = categories.map(TmplListGroupItem)
    setContent(opts.el, categoriesMarkup)
    collapseListGroup(opts.el)
  }

  // Given an array of datasets, returns an array of their categories with counts
  _categoriesWithCount (datasets, params) {
    return chain(datasets)
      .filter('category_en')
      .flatMap(function (value, index, collection) {
        // Explode objects where category is an array into one object per category
        if (typeof value.category_en === 'string') return value
        const duplicates = []
        value.category_en.forEach(function (category_en) {
          duplicates.push(defaults({category_en: category_en}, value))
        })
        return duplicates
      })
      .groupBy('category_en')
      .map(function (datasetsInCat, category_en) {
        const filters = createDatasetFilters(pick(params, ['organization']))
        const filteredDatasets = filter(datasetsInCat, filters)
        const categorySlug = slugify(category_en)
        const selected = params.category_en && params.category_en === categorySlug
        const itemParams = selected ? omit(params, 'category_en') : defaults({category_en: categorySlug}, params)
        return {
          title: category_en,
          url: '?' + $.param(itemParams),
          count: filteredDatasets.length,
          unfilteredCount: datasetsInCat.length,
          selected: selected
        }
      })
      .orderBy('unfilteredCount', 'desc')
      .value()
  }
}
