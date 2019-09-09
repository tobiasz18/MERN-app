import React from 'react';
import { Img, Section, SpanHeader, Div } from '../../styled-components/Details-events-Page-theme';
import { Link } from 'react-router-dom';

const DetailEvent = ({event, removeEvent}) => (
  <Section>
    <Div>
      <Link to={`/edit/${event.id}`}>Edit</Link>  
      <button  style={{dosplay: 'flex'}} onClick={removeEvent}>Remove</button>            
    </Div>        
    <SpanHeader>{event.title}</SpanHeader>
    <p>{event.desc}</p>  
    <p>Location: {event.location}</p>
    <Img src={event.imageUrl} />
    <p>Organizers by {event.organization}</p>
    
    <p>Date event: {event.date}</p> 
  </Section> 
)

export default DetailEvent;