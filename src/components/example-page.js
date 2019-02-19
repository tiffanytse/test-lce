import React from 'react'
import Markdown from 'react-markdown'
import Clipboard from 'clipboard'
import { Link } from 'gatsby'

import {capitalize} from './helpers'
import './code-styles.css'

const addAppendButton = (pre, key) => {
  const codeBlock = pre.firstChild
  const codeBlockClass = `example__code-${key}`
  codeBlock.className += ` ${codeBlockClass}`

  let clickToCopy = document.createElement('button')
  clickToCopy.setAttribute('class','click-to-copy-button')
  clickToCopy.setAttribute('data-clipboard-target',`.${codeBlockClass}`)
  clickToCopy.innerHTML = 'Copy'

  pre.insertBefore(clickToCopy, codeBlock)
}

export default class ExampleLayout extends React.Component {
  componentDidMount(){
    this.addClipboardButtons()
  }
  componentDidUpdate(){
    this.addClipboardButtons()
  }
  addClipboardButtons (){
    const codeBlocks = Array.from(this.ref.querySelectorAll('pre'))
    codeBlocks.forEach(addAppendButton)
  }
  render (){
    const {title, html, desc, category, date} = this.props
    const parsedDate = new Date(date)
    const formateddate = parsedDate.toLocaleDateString('en-US',{month: 'short', day: 'numeric', year: 'numeric'})

    new Clipboard('[data-clipboard-target]')

    return (

    <section className="section section--padding-bottom-only section--tight" ref={(node)=>this.ref = node} >
      <div className="example--page">
        <div className="grid gutter-bottom--half">
          <p className="grid__item gutter-bottom--reset">
            <a href="/" className="example__return-link">&#60; Browse library</a>
          </p>
        </div>
        <div className="grid">
          <div className="grid__item">
            <h1 className="heading--3 heading--inline">{title}</h1>
            <p className="example__date">Last updated: {formateddate}</p>
            <p className="gutter-bottom"><Link to={`/?category=${category}`} className="category--link" key={category}>
              {capitalize(category)}
            </Link>
            </p>
          </div>
        </div>
        <div className="grid">
          <div className="grid__item grid__item--tablet-up-three-quarters">
            <div className= "example__desc">
              <Markdown source={desc} />
            </div>

            <div className="example__markdown gutter-bottom" dangerouslySetInnerHTML={{ __html: html }} />
            <p className="example__disclaimer"><strong>Please note: </strong>We have intentionally limited CSS and JavaScript, and removed translation strings in order to keep these examples compatible with any theme. Any CSS we have included is for accessibility or rendering purposes.</p>
          </div>
        </div>
      </div>
    </section>
    )
  }
}
