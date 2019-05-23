import React from 'react';
import { Section } from '../../styled-components/eventsContainer-theme';
import { SectionOne, Img, Button} from '../../styled-components/singleEventOnList-theme';

const SingleEvent = ({ title, desc, image }) => (
    <Section>
      <div>
        <h1>{title}</h1>
      </div>
      <SectionOne> 
        <div>
          <p>{desc}</p>
          <Button>Details</Button>
          </div>
          <div>
            <Img src={image}/>
          </div>
        </SectionOne>
  </Section>
)

export default SingleEvent;