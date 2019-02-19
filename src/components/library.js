import React from 'react'

import Card from './card'
import SearchBar from './searchBar'
import Categories from './categories'
import NoResults from './noResults'
import { updateCategoryCounts, matchStringBySubString, getCategoryIfTrue } from './helpers'

const SEARCH_MIN_CHARS = 2

export default class Library extends React.Component {
  constructor(props) {
    super(props)
    let categories = this.props.categories.map(category => ({
      name: category,
      checked: false,
      count: 0
    }))

    categories = updateCategoryCounts(categories, this.props.posts);

    this.state = {
      displayedPosts: this.props.posts,
      categories: categories,
      searchString: ''
    }
  }

  componentDidMount() {
    this.getSelectedCategoriesFromURL()
  }

  getSelectedCategoriesFromURL() {
    const categoryString = new URLSearchParams(window.location.search).get('category')
    let allCategories = this.state.categories

    if(categoryString) {
      let activeFilters = categoryString.toLowerCase().split(';')

      allCategories = allCategories.map(category => ({
        name: category.name,
        checked: activeFilters.includes(category.name),
        count: category.count
      }))

      this.filterResults(this.state.searchString, allCategories)
    }
  }

  // Filter out Posts that do not match the searchTerm of selectedCategory
  filterResults(searchTerm, categories) {
    const filterByCategories = categories.reduce(getCategoryIfTrue, [])

    const matchesKeyword = (searchTerm) =>
      (post) => matchStringBySubString(post.frontmatter.desc, searchTerm) ||
        matchStringBySubString(post.frontmatter.title, searchTerm) ||
          matchStringBySubString(post.frontmatter.category, searchTerm)

    const matchesCategories = (categories) =>
      (post) => filterByCategories.includes(post.frontmatter.category);

    let displayResults = this.props.posts

    if(searchTerm.length >= SEARCH_MIN_CHARS) {
      displayResults = displayResults.filter(matchesKeyword(searchTerm))
    } else {
      searchTerm = ''
    }

    categories = updateCategoryCounts(categories, displayResults)

    if(filterByCategories.length > 0) {
      displayResults = displayResults.filter(matchesCategories(categories))
    }

    this.setState({
      displayedPosts: displayResults,
      categories: categories,
      searchString: searchTerm
    })
  }

  // Set category state (called from categories checkboxes)
  setCategories = categories =>  {
    this.filterResults(this.state.searchString, categories)
  }

  // Set searchString state (called from search component)
  setSearchTerm = searchTerm => {
    this.filterResults(searchTerm, this.state.categories)
  }

  render() {
    const toggleMobileMenu = e => {
      const filterBackdrop = document.querySelector('.filter__backdrop')
      const filterContainer = document.querySelector('.filter__container')
      filterContainer.classList.toggle('filter__container--visible')
      filterBackdrop.classList.toggle('filter__backdrop--visible')
    }

    return (
      <>
      <button
        name="button"
        type="button"
        className="marketing-button marketing-button--small marketing-button--secondary filter__open-button js-open-overlay"
        aria-controls="FilterOverlay"
        aria-expanded="false"
        onClick={toggleMobileMenu}>
        Filter
      </button>
      <div className="library-container">
        <section className="grid">
          <div className="grid__item grid__item--mobile-up-four-quarter">
            <SearchBar
              onChange={this.setSearchTerm}
              onClickCategory={this.setCategories}
              categories={this.state.categories}
            />
          </div>
        </section>

        <hr className="library-container__rule hide--desktop"/>

        <section className="section section--padding-bottom-only">
          <div className="grid">
            <div className="filter__backdrop"></div>
            <div className="grid__item grid__item--desktop-up-quarter filter__container">
              <div className="filter__top">
                <h3 className="filter__heading">Filters</h3>
                <button name="button" type="button" className="marketing-button marketing-button--small filter__close-button"
                  aria-controls="FilterOverlay" aria-expanded="true"  onClick={toggleMobileMenu}>
                  Done
                </button>
              </div>
              <Categories
                categories={this.state.categories}
                onChange={this.setCategories}
              />
            </div>
            {this.state.displayedPosts.length > 0 ? (
              <ul className="grid__item grid__item--desktop-up-three-quarters">
                {this.state.displayedPosts.map(post =>
                  <Card
                    key={post.id}
                    post={post}
                    searchString={this.state.searchString}
                  />
                )}
              </ul>
            ) : (
              <div className="grid__item grid__item--mobile-up-three-quarters">
                <NoResults searchString={this.state.searchString} />
              </div>
            )}
          </div>
        </section>
      </div>
      </>
    )
  }
}
