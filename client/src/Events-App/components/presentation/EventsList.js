import React from 'react';

import { Section, Image, Text} from '../../styled-components/EventsList-theme';
import { Link } from 'react-router-dom';

const EventsList = ({ title, desc, image, location, checkLengthDesc }) => (
  <Section>
    <Image>
      <img src={image}/>
    </Image>
    <Text>
     <div>
        <Link to={`/events/${title.replace(/\/|\||:\s*|—|’|‘|'|\.|\?|(<i[^>]+>|<i>|<\/i>)| /gi, "_")}`}>{title}</Link>
        <p>{checkLengthDesc(desc)} {/*space*/} 
          <Link to={`/events/${title.replace(/\/|\||:\s*|—|’|‘|'|\.|\?|(<i[^>]+>|<i>|<\/i>)| /gi, "_")}`}>read more</Link>
        </p>
      </div>
      <div>
        <div>location: {location}</div>
      </div>
    </Text>
  </Section>
)

export default EventsList;