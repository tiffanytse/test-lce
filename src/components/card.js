import React from 'react'
import { Link } from 'gatsby'
import Markdown from 'react-markdown'

import {highlightMarkdown} from './helpers'

const Card = ({post, searchString}) => {
  const { frontmatter } = post
  let {title, category, desc, path} = frontmatter

  // highlight to reflect searchterm
  desc = highlightMarkdown(desc, searchString);
  category = highlightMarkdown(category, searchString);
  title = highlightMarkdown(title, searchString);

  const Del = (props) => {
    return <mark className="highlight">{props.children}</mark>
  }

  return (
    <li className="card-wrapper">
      <Link to={path} className="block background-white block--padding block--padded block--border__purple block--shadow card">
        <h3 className="block__heading heading--3"><Markdown source={title} renderers={{delete: Del}} disallowedTypes={['paragraph']} unwrapDisallowed={true}/></h3>
        <Markdown className="block-content--padding" source={desc} renderers={{delete: Del}} disallowedTypes={['link']} unwrapDisallowed={true} />
      </Link>
      <a href={`?category=${category}`} className="card__category category--link" key={category}>
        <Markdown source={category} renderers={{delete: Del}} disallowedTypes={['paragraph']} unwrapDisallowed={true} />
      </a>
    </li>
  )
}

export default Card
