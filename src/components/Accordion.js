import React, { Component } from 'react'
import Link from 'gatsby-link'
import Content from '../components/Content'

import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody
} from 'react-accessible-accordion'

import '../components/accordion.scss'
// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css'

class AccordionRepeater extends Component {
  render() {
    const accordion = this.props.accordion || []

    return (
      <Accordion className="relative container accordion">
        {accordion.map((list, index) => {
          return (
            <AccordionItem className="accordion--item" key={list.title}>
              <AccordionItemTitle>
                <p className="subtitle">{list.title}</p>
              </AccordionItemTitle>
              <AccordionItemBody className="accordion-item--body">
                <Content source={list.content} />

                {list.link && (
                  <a className="Button" href={list.link.publicURL}>
                    Download PDF
                  </a>
                )}
              </AccordionItemBody>
            </AccordionItem>
          )
        })}
      </Accordion>
    )
  }
}

export default AccordionRepeater
