import React, { Component } from 'react'
import Link from 'gatsby-link'

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
                <p>{list.content}</p>

                <Link className="Button" to={list.link}>
                  Download PDF
                </Link>
              </AccordionItemBody>
            </AccordionItem>
          )
        })}
      </Accordion>
    )
  }
}

export default AccordionRepeater
