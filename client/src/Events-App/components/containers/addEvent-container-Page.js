import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addEvent } from '../../actions';
import FormikForm from '../presentation/Formik-form';
import { LoaderContainer } from '../../styled-components/addEventContainer-theme';

import loader from '../../img/spinner.svg';

import { Redirect } from 'react-router-dom';
class AddEventContainer extends Component {

  render() {
    const { loading, addEvent } = this.props;
    const initialState = {
      title: 'ss',
      desc: '',
      location: '',
      imageUrl: "https://i.imgur.com/216orqx.png"
    }
    return (
      loading ? 
      <LoaderContainer>
        <img src={loader}/>
      </LoaderContainer> :
      <div>
        <FormikForm initialState={initialState} actionSubmit={addEvent}/> 
      </div>
    )
  }
}

const mapStateToProps = state => ({
  events: state.events,
  loading: state.loading
})

export default connect(mapStateToProps, {addEvent})(AddEventContainer)

