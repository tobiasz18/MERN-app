import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editEvet } from '../../actions';

class EditEventContainer extends Component {
  constructor(props) {
    super(props)
  }

  editEventFun = () => {
    this.props.editEvet({title: 'tobiasz', id: this.props.match.params.id})
  }

  render() {
    console.log(this.props)
    return(
      <div>
        hello from EditEvent
        <button onClick={this.editEventFun}>Edit z Edited title</button>
      </div>
    )
  }
}

const mapSateToProps = state => ({
  singleEvent: Object.values(state.singleEvent)
});

export default connect(mapSateToProps,{editEvet})(EditEventContainer);