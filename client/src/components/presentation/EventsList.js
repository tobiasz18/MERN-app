import React from 'react';
import { Section, Image, Text} from '../../styled-components/EventsList.styled';
import { Link } from 'react-router-dom';

const EventsList = ({ title, desc, image, location, checkLengthDesc }) => (
  <Section>
    <Link to={`/events/${title.replace(/\/|\||:\s*|—|’|‘|'|\.|\?|(<i[^>]+>|<i>|<\/i>)| /gi, "_")}`} >
      <Image>  
        <img alt="" src={image}/>       
      </Image>
    </Link>
    <Text>
     <div>
        <Link to={`/events/${title.replace(/\/|\||:\s*|—|’|‘|'|\.|\?|(<i[^>]+>|<i>|<\/i>)| /gi, "_")}`}>{title}</Link>
          <p>{checkLengthDesc(desc)} {/*space*/} 
          <Link to={`/events/${title.replace(/\/|\||:\s*|—|’|‘|'|\.|\?|(<i[^>]+>|<i>|<\/i>)| /gi, "_")}`}>read more</Link>
        </p>
      </div>
      <div>
        <div>Location: {location}</div>
      </div>
    </Text>
  </Section>
)

export default EventsList;