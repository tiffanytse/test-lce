import React from 'react'

import { capitalize, checkUncheckCategory } from './helpers'

export default class Categories extends React.Component {
  // Handle checkbox changes
  clicked (category) {
    const oldCategories = this.props.categories
    const newCategories = checkUncheckCategory(category.name, oldCategories)

    this.props.onChange(newCategories)
  }

  render() {
    return (
      <div className="block block--padded category-bar filter">
        <h3 className="heading--3">Category</h3>
          { this.props.categories.map( (category) => {
            return (
              <div key={category.name}>
                <input className="marketing-checkbox"
                  type="checkbox"
                  checked={category.checked}
                  onChange={() => this.clicked(category)}
                  name={category.name}
                  id={`checkbox_for_${category.name}`}
                />
                <label className="marketing-checkbox-label" htmlFor={`checkbox_for_${category.name}`}>
                  {capitalize(category.name)}
                  <span className="category-bar__count">{category.count}</span>
                </label>
              </div>
            )
          })}
      </div>
    )
  }
}
