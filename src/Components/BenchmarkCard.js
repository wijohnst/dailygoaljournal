import React from 'react'
import styled from 'styled-components'

const BenchmarkCardWrapper = styled.div`
  /* background-color: lightgreen; */
  display: inline-block;
  border: solid thin black;
  border-radius: 5px;
  box-shadow: 9px 9px 16px rgba(0,0,0,0.25);
  margin: 5px;
  padding: 5px;
`

export default function BenchmarkCard(props) {
  return (
    <BenchmarkCardWrapper>
      {props.children}
    </BenchmarkCardWrapper>
  )
}
