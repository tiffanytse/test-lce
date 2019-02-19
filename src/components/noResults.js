import React from 'react'

const NoResults = ({searchString}) => {
  return (
    <div className="noResults">
      <p>No results for <strong>{searchString}</strong></p>
    </div>
  )
}

export default NoResults
