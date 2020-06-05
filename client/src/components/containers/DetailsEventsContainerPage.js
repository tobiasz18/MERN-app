import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getEventByTitle, removeEvent, getEvents } from '../../actions';
import { Helmet } from 'react-helmet';
import DetailEvent from '../presentation/DetailsSingleEvent';
import { Div } from '../../styled-components/LoaderStyle.styled';
import eclipse from '../../img/eclipse.svg';

class EventDetailsContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: null,
      updateFlag: false
    }
  }

  componentDidMount = () => {
   const title = this.props.match.params.title.replace(/_/g, ' ');
   this.props.getEventByTitle(title);
  }

  componentDidUpdate = (prevProps) => {
    // To prevent loadig the same data during substitution 
    if (this.props.singleEvent !== prevProps.singleEvent) {
      console.log('true')
      this.setState({data: this.props.singleEvent[0]});
    }
  }

  removeEvent = () => {
    if(this.state.data.removeFlag) {
      this.props.removeEvent(this.state.data.id);
      this.props.history.push('/');
      this.props.getEvents();
    } else {
      alert(`You can not delete older events, only those created by yourself`)
    }
  }

  render() {
    const titleText = this.state.data ? this.state.data.title : 'loading';
    // to prevent show flashback from earlier state and check did actually data are loaded
    const condition = this.state.data && this.props.match.params.title.replace(/_/g, ' ') === this.state.data.title;
    return (
      <div style={{minHeight: '760px', display: 'flex', justifyContent:'center' }}>
        <Helmet>
          <title>{titleText} - Events page</title>
        </Helmet>
        { condition ? <DetailEvent removeEvent={this.removeEvent} event={this.state.data}/> : <Div>{/*` <H2>Loading</H2>`*/}<img src={eclipse} alt="smile.png" /> </Div> }               
      </div>
    )
  }
}

const mapStateToProps = state => ({
  singleEvent: Object.values(state.singleEvent),
  loading:  state.loading
})

export default connect(mapStateToProps, {getEventByTitle, getEvents, removeEvent})(EventDetailsContainer)