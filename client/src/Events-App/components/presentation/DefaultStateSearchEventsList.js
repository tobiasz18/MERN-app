import React from 'react';
import {connect} from 'react-redux';
import SearchSingleEvent from '../presentation/SearchSingleEvent';

const DefaultStateSearchEventsList = ({events}) => {

  return (
    <div style={{display: 'flex'}}>
      {
        events.map(item => <SearchSingleEvent
          key={item.id} titleText={"Search by location - Events page"}  image={item.imageUrl} title={item.title} />)
      }
    </div>
  )
}

const mapStateToProps = state => {
  const reduceToTwo = Object.values(state.events).reverse().splice(0,2)

  return {
    events: reduceToTwo
  }
}

export default connect(mapStateToProps, null)(DefaultStateSearchEventsList) ;