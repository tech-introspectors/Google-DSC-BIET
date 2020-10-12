import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';
import '../Home.css';
const FaQ = () => {

    
    return (
        <>
            <div className="container faq_container ">
              <div className="faq_content">
              <Accordion allowZeroExpanded={true}>
              <AccordionItem>
                <AccordionItemHeading className = "_accordion__button">
                  <AccordionItemButton >
                    I am not from CSE branch, Can I join DSC BIET ?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p className="accordion-content">
                    Any branch student can join DSC BIET, there is no
                    restriction to join the club
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    I am from first year branch, Am I allowed to join ?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p className="accordion-content">
                    Students from any year can join DSC BIET and contribute to
                    the club
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    I dont have much technical knowledge but I would like to
                    help DSC BIET
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p className="accordion-content">
                    No worries, we constantly looking for people who will help
                    us as volunteers during the events, workshops and would love
                    to have you on the team
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
               
              </div>
              
              
          </div>
        </>
    );
}

export default FaQ;
