import { Card, Icon } from 'antd'
import * as React from 'react'
import styled from 'react-emotion'

const CardHeader = styled('div')`
  background: #001529;
  color: white;
  display: flex;
  padding: 24px;

  h3 {
    color: white;
  }
`

const CardBody = styled('div')`
  padding: 24px;
`

export default class ExamCard extends React.Component {
  public render() {
    return (
      <Card
        style={{ width: 300 }}
        actions={[
          <span key="take">
            <Icon type="rocket" title="Take Exam" /> Take Exam
          </span>,
        ]}
        bodyStyle={{ padding: 0 }}
      >
        <CardHeader>
          <div>
            <h3>Exam Title</h3>

            <div>
              <small>100 questions</small>
            </div>
            <div>
              <small>60 minutes</small>
            </div>
          </div>
          <Icon
            type="delete"
            title="Delete"
            style={{ cursor: 'pointer', marginLeft: 'auto' }}
          />
        </CardHeader>

        <CardBody>Description</CardBody>
      </Card>
    )
  }
}
