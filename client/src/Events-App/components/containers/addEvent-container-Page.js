import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addEvent } from '../../actions';
import FormikForm from '../presentation/Formik-form';
import { LoaderContainer } from '../../styled-components/addEventContainer-theme';
import { Helmet } from 'react-helmet';
import loader from '../../img/spinner.svg';

import { Redirect } from 'react-router-dom';
class AddEventContainer extends Component {

  render() {
    const { loading, addEvent } = this.props;
    const initialState = {
      title: '',
      desc: '',
      location: '',
      organization: 'unknown',
      imageUrl: "https://i.imgur.com/216orqx.png"
    }
    return (
      <div>
        <Helmet>
          <title>Add new event - Events page</title>
        </Helmet>

        {loading ? 
          <LoaderContainer>
            <img src={loader}/>
          </LoaderContainer> :
          <div>
            <FormikForm 
              initialState={initialState} 
              flag={false} 
              location={this.props} 
              actionSubmit={addEvent}
              title={'Add new Event'}
              /> 
          </div>
        }
      </div>
    ) 
  } 
}

const mapStateToProps = state => ({
  events: state.events,
  loading: state.loading
})

export default connect(mapStateToProps, {addEvent})(AddEventContainer)

