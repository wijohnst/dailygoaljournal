import React, {useState} from 'react'
import styled from 'styled-components'

import AddBenchmark from './AddBenchmark'

const AddGoalWrapper = styled.div`
  padding: 10px;
  margin: 0 auto;
  margin-bottom: 15px;
  border-radius: 5px;
  box-shadow: 3px 3px 16px rgba(0,0,0,0.25);
  max-width: 75%;
`
const AddGoalForm = styled.form`
  border-radius: 5px;
  border: solid thin black;
  padding: 10px;
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
const DailyBenchmarksDisplay = styled.div`

`

export default function AddGoal() {

  const [goalDescription, setGoalDescription] = useState('');
  const [termLength, setTermLength] = useState(7);
  const [hasBenchmark, setHasBenchmark] = useState(false);
  const [benchmarkDescriptions, setBenchmarkDescriptions] = useState([]);

  
  const handleDescriptionSubmit = (e,description) =>{
    
    const benchmarks = [...benchmarkDescriptions];
    benchmarks.push(description);
    setBenchmarkDescriptions(benchmarks);
    setHasBenchmark(true);
    e.target.reset();
    e.preventDefault();
  }

  return (
    <AddGoalWrapper>
      <AddGoalForm>
        <FormInput type='text' placeholder='What is your goal?' onChange={(e) => {setGoalDescription(e.target.value)}} />
        <p>Select a term length:</p>
        <select onChange={(e) => {setTermLength(e.target.value)}}>
          <option value={7}>Short Term {`(1 week)`}</option>
          <option value={30}>Near Term {`(1 month)`}</option>
          <option value={90}>Mid Term {`(3 months)`}</option>
          <option value={356}>Long Term {`(1 year)`}</option>
        </select>
        {!hasBenchmark ? " " : 
                              <DailyBenchmarksDisplay>
                                <h4><u>Daily Benchmarks</u></h4>
                                <ul>
                                {benchmarkDescriptions.map(description => (
                                  <li style={{margin: '5px'}}>{description}</li>
                                ))}
                                </ul>
                              </DailyBenchmarksDisplay>
                            }
        <AddBenchmark handleDescriptionSubmit={handleDescriptionSubmit} hasBenchmark={hasBenchmark} />
        <input type='submit' value='Submit New Goal' />
      </AddGoalForm>
    </AddGoalWrapper>
  )
}
