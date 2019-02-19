import React from 'react'

import iconSearch from '../images/icons/search.svg'
import iconClose from '../images/icons/close.svg'

import { checkUncheckCategory, uncheckAllCategories, countActiveCategories } from './helpers'

export default class SearchBar extends React.Component {

  performSearch = evt => {
    let keyword = evt.target.value;
    keyword = keyword.replace(/[^a-zA-Z ]/g, "");

    this.props.onChange(keyword)
  }

  clearCategory (category) {
    const clearAll = category === 'all' ? true : false
    let newCategories = []

    if (clearAll) {
      newCategories = uncheckAllCategories(category, this.props.categories)
    } else {
      newCategories = checkUncheckCategory(category, this.props.categories)
    }

    this.props.onClickCategory(newCategories)
  }


  render() {
    return (
      <div className="ui-searchbar block block--padded category-bar">
        <div className="grid grid--vertically-centered">
          <div className="ui-searchbar--search grid__item grid__item--desktop-up-third grid__item--wide-up-quarter grid__item--desktop-up-push-two-thirds grid__item--wide-up-push-three-quarters">
            <svg className="icon ui-searchbar--search__icon" aria-labelledby="icon-modules-search" role="img">
              <title id="icon-modules-search">Search</title>
              <use xlinkHref={`#${iconSearch.id}`} />
            </svg>

            <label className="marketing-input-wrapper ui-searchbar--search__input-wrapper">
              <span className="marketing-label marketing-label--hidden visuallyhidden">Search keywords</span>
              <input type="text" name="search" className="marketing-input ui-searchbar--search__input" placeholder="Search keywords" onChange={this.performSearch}/>
            </label>
          </div>

          <div className="ui-searchbar--filters grid__item grid__item--desktop-up-two-thirds grid__item--wide-up-three-quarters grid__item--desktop-up-pull-third grid__item--wide-up-pull-quarter">
            { countActiveCategories(this.props.categories) > 0 &&
              <span className="ui-searchbar__filter-label">Filtered by</span>
            }
            { this.props.categories.map( (category) => {
              return (
                category.checked &&
                <button key={category.name} className={`ui-searchbar__filter-clear category--link clear-category--${category.name}`} onClick={() => this.clearCategory(category.name)}>
                  {category.name}
                  <svg className="icon ui-searchbar__filter-clear__icon" aria-labelledby="icon-modules-close" role="img">
                    <title id="icon-modules-close">Remove {category.name} category</title>
                    <use xlinkHref={`#${iconClose.id}`} />
                  </svg>
                </button>
              )
            })}
            { countActiveCategories(this.props.categories) > 0 &&
              <button className="ui-searchbar__filter-clear-link" onClick={() => this.clearCategory('all')}>Clear</button>
            }
          </div>
        </div>
      </div>
    )
  }
}
