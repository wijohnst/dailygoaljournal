import React,{useState, useContext, useRef} from 'react'
import styled from 'styled-components'
import AppContext from '../AppContext'
import moment from 'moment'
import axios from 'axios'

const AddGoalWrapper = styled.div`
  padding: 10px;
  margin: 0 auto;
  margin-bottom: 15px;
  border-radius: 5px;
  box-shadow: 3px 3px 16px rgba(0,0,0,0.25);
  max-width: 75%; 
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
const AddBenchmarkWrapper = styled.div`
  border: solid thin black;
  border-radius: 5px;
  padding: 5px;
  margin: 5px;
`
const GoalSubmit = styled.div`
  display: inline-block;
  border: solid thin black;
  border-radius: 5px;
  margin: 5px;
  padding: 5px;
  box-shadow: 5px 5px 12px rgba(0,0,0,0.5);
  &:hover{
    cursor: pointer;
    box-shadow: none;
  }
`
export default function AddGoal() {

  const context = useContext(AppContext);
  const benchmarkInputRef = useRef(null);
  const goalInputRef = useRef(null);

  const [goalDescription, setGoalDescription] = useState('');
  const [benchmarkDescription, setBenchmarkDescription] = useState('');
  const [benchmarks, setBenchmarks] = useState([]);
  const [hasBenchmarks, setHasBenchmarks] = useState(false);
  const [termLength, setTermLength] = useState('');

  const handleBenchmarkSubmit = () =>{
    console.log('Benchmark submit...')
    const oldBenchmarks = [...benchmarks];
    const benchObject = { description: benchmarkDescription, records : [{completed : true}]};
    oldBenchmarks.push(benchObject);
    setBenchmarks(oldBenchmarks);
    setHasBenchmarks(true);
    benchmarkInputRef.current.value = " ";

  }

  const submitGoal = async () =>{

    const now = Date.now();
    const idNum = context.goals.goals.length + 1;
    
    const newGoal = {
      id : idNum.toString(),
      description: goalDescription,
      creationDate: moment(now).format("MM/DD/YYYY"),
      duration: parseInt(termLength),
      benchmarks: benchmarks
    }
    
    const id = context.goals.id;

    const setUserGoals = context.setGoals;
    const oldGoals = [...context.goals.goals];
    oldGoals.push(newGoal);

    const state = {
      id: id,
      goals: oldGoals
    }
    
    goalInputRef.current.value = " ";
    setBenchmarks([]);
    setHasBenchmarks(false);
    
    try{
      console.log(newGoal)
      await axios.post(`https://m2x3ewcsne.execute-api.us-east-2.amazonaws.com/beta/goals/{id}`, newGoal)
    }catch(err){
      console.log(`An error has occurred while creating a new goal: ${err}`)
    }
    setUserGoals(state);
  }

  return (
    <AddGoalWrapper>
      <FormInput type="text" placeholder="Add a description of your goal..." onChange={(e) => setGoalDescription(e.target.value)} ref={goalInputRef}/>
      <p>Select a term:</p>
      <select onChange={(e) => {setTermLength(e.target.value)}}>
          <option value={7}>Short Term {`(1 week)`}</option>
          <option value={30}>Near Term {`(1 month)`}</option>
          <option value={90}>Mid Term {`(3 months)`}</option>
          <option value={356}>Long Term {`(1 year)`}</option>
      </select>
      <p>Daily Benchmarks:</p>
      {!hasBenchmarks ? " " : <ul>{benchmarks.map((benchmark,index) =>(<li key={index}>{benchmark.description}</li>))}</ul>}
      <AddBenchmarkWrapper>
        {!hasBenchmarks ? <p>Add a daily benchmark</p> : <p>Add another daily benchmark</p>}
        <FormInput type="text" placeholder="Add a description of your daily benchmark..." onChange={(e) => setBenchmarkDescription(e.target.value)} ref={benchmarkInputRef}/>
        <button style={{padding: '5px', margin: '5px'}} onClick={handleBenchmarkSubmit}>Submit Daily Benchmark</button>
      </AddBenchmarkWrapper>
        <GoalSubmit onClick={submitGoal}>
          <p>Submit New Goal</p>
        </GoalSubmit>
    </AddGoalWrapper>
  )
}
