import React from 'react';
import { Section } from '../../styled-components/eventsContainer-theme';
import { SectionOne, Img, Button} from '../../styled-components/EventsList-theme';
import { Link } from 'react-router-dom';

const EventsList = ({ title, desc, image, location }) => (
    <Section>
      <div>
        <h1>{title}</h1>
      </div>
      <SectionOne> 
        <div>
          <p>{desc}</p>
          <Link to={`/events/${title.replace(/\/|\||:\s*|—|’|‘|'|\.|\?|(<i[^>]+>|<i>|<\/i>)| /gi, "_")}`}>Details</Link>
          </div>
          <div>
            <Img src={image}/>
          </div>
        </SectionOne>
        <div>location: { location}</div>
  </Section>
)

export default EventsList;