import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getEventByLocation } from '../../actions';

class SearchEvent extends Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }

  handleChange = () => {
    const value = this.textInput.current.value;
    return value;
  }

  handleSubmit = () => {
    console.log(this.handleChange(), 'submite')
    this.props.getEventByLocation(this.handleChange())
    this.textInput.current.value = ''
  }

  render() {
    console.log(this.props , 'z searthc')
    console.log(this.props.searchEvents, 'lel')
    return (
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center',marginTop: '100px'}}>
        <input type="text" ref={this.textInput} onChange={this.handleChange}/>
        <button type="submit" onClick={this.handleSubmit}>Submit</button>

        {
          this.props.searchEvents.map(item => <div>{item.title}</div>)
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  searchEvents: state.searchEvents
})

export default connect(mapStateToProps, {getEventByLocation})(SearchEvent) 


/*
 handleChange,
        handleSubmit,
*/