import 'antd/dist/antd.css'
import * as React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import AppLayout from './components/AppLayout'

export default class App extends React.Component {
  public render() {
    return (
      <BrowserRouter>
        <Route path="/" component={AppLayout} />
      </BrowserRouter>
    )
  }
}
