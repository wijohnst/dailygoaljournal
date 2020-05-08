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
export default function Dashboard() {

  const context = useContext(AppContext);


  return (
    <DashboardWrapper>
        <h1>Your Goals</h1>
        {context.goals.map( goal => (
          <GoalCard>
            <h1>{goal.description}</h1>
            <h4>Creation Date: {moment(goal.creationDate).format('MM-DD-YYYY')}</h4>
            <h4>Completion Date: {moment(goal.creationDate).add(goal.duration, 'days').format('MM-DD-YYYY')}</h4>
            <h4>Daily Benchmarks:</h4>
            {goal.benchmarks.map( benchmark => (
              <BenchmarkCard>
                <BenchmarkDescriptionWrapper>
                  <h4>{benchmark.description}</h4>
                </BenchmarkDescriptionWrapper>
                {benchmark.records.map( (record, index) => (
                  <RecordDisplay>
                    <p> 
                      <u>{moment(goal.creationDate).add(index, 'days').format('MM-DD')}</u>
                      {record ? <p style={{color: 'green'}}>√</p> : <p style={{color: 'red'}}>X</p>}
                    </p>  
                  </RecordDisplay>
                ))}
              </BenchmarkCard>
            ))}
          </GoalCard>
        )
      )
    }
    <h1>Add a New Goal</h1>
    <AddGoal />
    </DashboardWrapper>
  )
}
