import React, { useState } from 'react'
import styled from 'styled-components'

const AddBenchmarkWrapper = styled.div`
  border: solid thin black;
  padding: 5px;
  margin: 5px;
`

const AddBenchMarkForm = styled.form`
  /* background-color: lightpink; */
`

const FormInput = styled.input`
  width: 75%;
  text-decoration: none;
  &:focus{
    background-color: lightgray;
    outline: none;
    border: none;
  }
`

export default function AddBenchmark(props) {

  const {handleDescriptionSubmit, hasBenchmark} = props;

  const [description, setDescription] = useState();
  
    return (
      <AddBenchmarkWrapper>
       {hasBenchmark ? <p>Add another daily benchmark.</p> : <p>Add a daily benchmark.</p>} 
       <AddBenchMarkForm onSubmit={(e) => handleDescriptionSubmit(e,description)}>
         <FormInput type="text" placeholder="What is your daily benchmark?" onChange={(e) => setDescription(e.target.value)}/><br />
         <input type='submit' value={hasBenchmark ? "Add Another Benchmark" : "Add Benchmark"} />
        </AddBenchMarkForm>
      </AddBenchmarkWrapper>
    )
  }

