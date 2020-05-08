import React from 'react'
import styled from 'styled-components'

const GoalCardWrapper = styled.div`
  /* background-color: lightpink; */
  padding: 10px;
  margin: 0 auto;
  margin-bottom: 15px;
  border-radius: 5px;
  box-shadow: 3px 3px 16px rgba(0,0,0,0.25);
  max-width: 75%;
`

export default function GoalCard(props) {

  return (
    <GoalCardWrapper>
      {props.children}
    </GoalCardWrapper>
  )
}
