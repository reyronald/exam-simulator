import * as React from 'react'
import styled from 'react-emotion'
import ExamCard from '../ExamCard'

const Container = styled('div')`
  display: flex;
  flex-flow: row wrap;

  & > div {
    margin-right: 24px;
    margin-bottom: 24px;
  }
`

export default class Dashboard extends React.Component {
  public render() {
    return (
      <Container>
        <ExamCard />
        <ExamCard />
        <ExamCard />
        <ExamCard />
        <ExamCard />
        <ExamCard />
      </Container>
    )
  }
}
