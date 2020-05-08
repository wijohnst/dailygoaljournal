import React from 'react'
import styled from 'styled-components'

const RecordDisplayWrapper = styled.div`
  /* background-color: lightpink; */
  display: inline-flex;
  flex-direction: row;
  margin-right: 5px;
  justify-content: center;
  align-items: center;
  text-align: center;
`

export default function RecordDisplay(props) {

  return (
    <RecordDisplayWrapper>
      {props.children}
    </RecordDisplayWrapper>
  )
}
