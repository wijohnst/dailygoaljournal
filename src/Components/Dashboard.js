import React, { useContext } from 'react'
import styled from 'styled-components'
import moment from 'moment'

import AppContext from '../AppContext'

import GoalCard from './GoalCard'
import BenchmarkCard from './BenchmarkCard'
import RecordDisplay from './RecordDisplay'

import AddGoal from './AddGoal'

const DashboardWrapper = styled.div`
  padding: 5px;
`
const BenchmarkDescriptionWrapper = styled.div``

const BenchmarksWrapper = styled.div`
  text-align: center;
`
export default function Dashboard() {

  const context = useContext(AppContext);
  if(context.goals === undefined){
    return(
      <p>Loading</p>
    )
  }
  else{
    return (
      <DashboardWrapper>
          <h1>Your Goals</h1>
          {context.goals.goals.map( (goal,index) => (
            <GoalCard key={`GoalCard${index}`}>
              <h1>{goal.description}</h1>
              <h4>Creation Date: {moment(goal.creationDate).format('MM-DD-YYYY')}</h4>
              <h4>Completion Date: {moment(goal.creationDate).add(goal.duration, 'days').format('MM-DD-YYYY')}</h4>
              <h4>Daily Benchmarks:</h4>
              <BenchmarksWrapper>
              {goal.benchmarks.map( (benchmark,index) => (
                <BenchmarkCard key={`BenchmarkCard${index}`}>
                  <BenchmarkDescriptionWrapper>
                    <h4>{benchmark.description}</h4>
                  </BenchmarkDescriptionWrapper>
                  {benchmark.records.map( (record, index) => (
                    <RecordDisplay key={`RecordDisplay${index}`}>
                      <span> 
                        <u>{moment(goal.creationDate).add(index, 'days').format('MM-DD')}</u>
                        {record.completed ? <p style={{color: 'green'}}>√</p> : <p style={{color: 'red'}}>X</p>}
                      </span>  
                    </RecordDisplay>
                  ))}
                </BenchmarkCard>
              ))}
              </BenchmarksWrapper>
            </GoalCard>
          )
        )
      }
      <h1>Add a New Goal</h1>
      <AddGoal />
      </DashboardWrapper>
    )
  }
}

