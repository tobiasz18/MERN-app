import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addEvent } from '../../actions';
import FormAddEvents from '../presentation/Add_Event_formik_form';
import { LoaderContainer } from '../../styled-components/addEventContainer-theme';

import loader from '../../img/spinner.svg';

import { Redirect } from 'react-router-dom';
class AddEventContainer extends Component {

  getLink = async (file) => { 
    const url = 'https://api.imgur.com/3/image';
    const data = new FormData();
    data.append('image', file);

    const getLink = await fetch(url, {
      body: data,
      headers: {
        "Authorization": "Client-ID " + '4409588f10776f7'
      },
      method: 'POST'
    })
    const link = await getLink.json()
    return link.data.link
  }

  render() {
    const { loading, addEvent } = this.props;
 
    return (
      loading ? 
      <LoaderContainer>
        <img src={loader}/>
      </LoaderContainer> :
      <div>
        <FormAddEvents getLink={this.getLink} addEvent={addEvent}/> 
      </div>
    )
  }
}

const mapStateToProps = state => ({
  events: state.events,
  loading: state.loading
})

export default connect(mapStateToProps, {addEvent})(AddEventContainer)

