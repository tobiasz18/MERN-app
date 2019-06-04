import React from 'react';
import { getLink } from '../../helpers/ImagurRequest';
import {
  FormContainer,
  HeaderForm,
  Label, 
  SpanRequired,
  SpanContent,
  TextInput, 
  Select,
  Textarea,
  ErrorMessage, 
  SubmitButton } from '../../styled-components/addEventContainer-theme';
import { AddEventSchema } from '../../helpers/validateSchema';
import { Formik } from 'formik';

const FormikForm = ({ flag, actionSubmit, initialState, location, title }) => (
  <FormContainer>
    <Formik
      initialValues={initialState}
      onSubmit={async (values) => {
        const { file, ...rest } = values
        if(file) {
          const linkToImage = await getLink(file)
          actionSubmit({...rest, imageUrl: linkToImage})    
        } else {
          actionSubmit({...rest})     
        }
        console.log(flag)
        flag ? location.history.push(`/events/${values.title.replace(/\/|\||:\s*|—|’|‘|'|\.|\?|(<i[^>]+>|<i>|<\/i>)| /gi, "_")}`) : location.history.push(`/`)
        
    }}
      validationSchema={AddEventSchema}
      render={({
        values,
        errors, 
        touched,
        handleChange,
        handleSubmit,
        setFieldValue
      }) => (
        <FormContainer>
            <HeaderForm>{title}</HeaderForm>
            <form onSubmit={handleSubmit}>
                <Label>
                    <SpanContent>Title<SpanRequired >*</SpanRequired></SpanContent>
                    {errors.title && touched.title ? (
                      <div>
                        <TextInput  name="title" style={{
                          backgroundColor: 'rgb(255, 244, 244)',
                          borderColor: 'rgb(240, 61, 61)',
                        }} onChange={handleChange} value={values.title}/> 
                        <ErrorMessage>{errors.title}</ErrorMessage>   
                      </div>
                    ) : <TextInput  name="title" onChange={handleChange} value={values.title}/>}
                </Label>
                <Label>
                    <SpanContent>Organization</SpanContent>
                    <TextInput name="organization" value={values.organization} onChange={handleChange}/>
                </Label>
                <Label>
                    <SpanContent>Location<SpanRequired> *</SpanRequired></SpanContent>
                      {errors.location && touched.location ? (
                        <div>
                          <TextInput name="location" style={{
                            backgroundColor: 'rgb(255, 244, 244)',
                            borderColor: 'rgb(240, 61, 61)',
                          }}         
                          value={values.location} onChange={handleChange}/>   
                          <ErrorMessage>{errors.location}</ErrorMessage>
                        </div>
                      ) : <TextInput name="location" value={values.location} onChange={handleChange}/>}       
                </Label>
                <Label>
                    <SpanContent>Description<SpanRequired> *</SpanRequired></SpanContent>
                    {errors.desc && touched.desc ? (
                        <div>
                          <Textarea style={{
                              backgroundColor: 'rgb(255, 244, 244)',
                              borderColor: 'rgb(240, 61, 61)',
                            }}  name="desc" value={values.desc} onChange={handleChange} />
                            <ErrorMessage>{errors.desc}</ErrorMessage>
                        </div>  
                      ) : <Textarea name="desc" value={values.desc} onChange={handleChange} />}                                     
                </Label>
                <Label>
                    <SpanContent>Date<SpanRequired>*</SpanRequired>  </SpanContent>
                    <input type="date" name="date" onChange={handleChange} value={values.date}></input>
                </Label>
                <Label>
                    <SpanContent>Image                    
                    </SpanContent>                  
                      <input name="file" type="file" onChange={(event) => {
                        setFieldValue("file", event.currentTarget.files[0]);
                      }} />

                </Label> 
                <Label>                    
                    <SubmitButton type='submit' >Submit</SubmitButton>
                </Label>
            </form>
        </FormContainer>
    )}
  />
</FormContainer>
)



export default FormikForm

