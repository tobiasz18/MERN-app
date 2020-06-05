import React from 'react';
import { Img, Section, SpanHeader, Div } from '../../styled-components/DetailsEventsPage.styled';
import { Link } from 'react-router-dom';

const DetailEvent = ({event, removeEvent}) => (
  <Section>
    <Div>
      <Link to={`/edit/${event.id}`}>Edit</Link>  
      <button  style={{dosplay: 'flex'}} onClick={removeEvent}>Remove</button>            
    </Div>        
    <SpanHeader>{event.title}</SpanHeader>
    <p>{event.desc}</p>  
    <Img src={event.imageUrl} alt="smile.png" />
    <p>Location: {event.location}</p>
    <p>Date event: {event.date}</p> 
    <p>Organizers by {event.organization}</p> 
  </Section> 
)

export default DetailEvent;