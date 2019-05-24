import React from 'react';
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

const FormAddEvents = ({ getLink, addEvent }) => (
  <FormContainer>
    <Formik
      initialValues={{
        title: '',
        desc: '',
        location: '',
        file: undefined

      }}
      onSubmit={async (values) => {
        const { file, ...rest } = values
        const linkToImage = await getLink(file)
        addEvent({...rest, imageUrl: linkToImage})     
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
            <HeaderForm>Add new event </HeaderForm>
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
                    <SpanContent>Category</SpanContent>
                    <Select name="category" value={values.category} onChange={handleChange}>      
                      <option value="sport">sport</option>
                      <option value="Festival">Festival</option>
                      <option value="manifestations">manifestations </option>
                      <option value="concert ">concert </option>
                      <option value="Art">Art</option>
                      <option value="Another">Another</option>
                    </Select>
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
                    <SpanContent>Image<SpanRequired>*</SpanRequired>                      
                    </SpanContent>                  
                      <input name="file" type="file" onChange={(event) => {
                        setFieldValue("file", event.currentTarget.files[0]);
                      }} />
                      {errors.file && touched.file ? (
                        <ErrorMessage>{errors.file}</ErrorMessage>
                      ) : null}   
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



export default FormAddEvents