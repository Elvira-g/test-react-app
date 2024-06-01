import React from 'react'
import { Accordion } from 'react-bootstrap'
import { FaqItem } from '../../../../types/types'


export const AccordionItem = ({title, text, id}: FaqItem) => {
    return (
        <Accordion>
            <Accordion.Item eventKey={id}>
                <Accordion.Header>{title}</Accordion.Header>
                <Accordion.Body>{text}</Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}