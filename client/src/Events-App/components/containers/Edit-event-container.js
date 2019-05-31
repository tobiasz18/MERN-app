import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editEvet, getEventById } from '../../actions';
import FormikForm from '../presentation/Formik-form';
import Spinner from '../../img/spinner.svg'
class EditEventContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      initialState: this.props.singleEvent[0]
    }
  }

  componentDidMount = () => {
    this.props.getEventById(this.props.match.params.id)
  }
  
  editEventFun = () => {
    this.props.editEvet({title: 'tobiasz', id: this.props.match.params.id})
  }

  render() {
    console.log(this.props.singleEvent[0], 'z edot')
    return(
      <div style={{display: 'flex', justifyContent: 'center'}}>
        {
          this.props.singleEvent[0] == undefined ? <img src={Spinner} /> : 
          <FormikForm actionSubmit={this.props.editEvet} initialState={this.props.singleEvent[0]} />
        }
      </div>
    )
  }
}

const mapSateToProps = state => ({
  singleEvent: Object.values(state.singleEvent)
});

export default connect(mapSateToProps,{editEvet, getEventById})(EditEventContainer);