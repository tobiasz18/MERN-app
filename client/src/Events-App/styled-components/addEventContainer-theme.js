import styled from 'styled-components'

export const FormContainer = styled.div`
  padding: 20px 12px 10px 20px;
  font: 13px Arial, Helvetica, sans-serif;
  margin: auto;
  margin-top: 75px;
  max-width: 500px;
  min-width: 50vw;
`
export const HeaderForm = styled.div`
  font-weight: bold;
  font-style: italic;
  border-bottom: 2px solid #ddd;
  margin-bottom: 20px;
  padding-bottom: 3px;
  font-size: 15px;
`
export const Label = styled.label`
  display: block;
  margin: 0px 0px 23px 0px;
`
export const SpanContent = styled.span`
  width: 100px;
  font-weight: bold;
  float: left;
  padding-top: 8px;
  padding-right: 5px;
`
export const SpanRequired = styled.span`
  color:red;
`
export const TextInput = styled.input`
  box-sizing: border-box;
  padding: 7px;
  border: 1px solid #C2C2C2;
  box-shadow: 1px 1px 4px #ece9e9;
  border-radius: 3px;
  outline: none;
  width: 60%;

  &:focus {
    border-color: #00b6ff;
  }
`
export const Select = styled.select`
  box-sizing: border-box;
  padding: 7px;
  border: 1px solid #C2C2C2;
  box-shadow: 1px 1px 4px #ece9e9;
  border-radius: 3px;
  outline: none;
  width: 60%;

  &:focus {
    border-color: #00b6ff;
  }
`
export const Textarea = styled.textarea`
  border: 1px solid #C2C2C2;
  border-radius: 3px;
  outline: none;
  box-shadow: 1px 1px 4px #ece9e9;
  margin: 0px;
  height: 195px;
  max-width: 100%;
  width: 600px;
  max-height: 400px;
  margin-top: 5px;

  &:focus {
    border-color: #00b6ff;
  }
`
export const SubmitButton = styled.button`
  border: none;
  padding: 8px 15px 8px 15px;
  background: #FF8500;
  color: #fff;
  box-shadow: 1px 1px 4px #DADADA;
  -moz-box-shadow: 1px 1px 4px #DADADA;
  -webkit-box-shadow: 1px 1px 4px #DADADA;
  border-radius: 3px;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
`
export const ErrorMessage = styled.div`
  color: red;
  display: inline;
  padding-left: 5px;
`
 export const LoaderContainer = styled.div`
  text-align: center;
  padding-top: 250px; 
` 