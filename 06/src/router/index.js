import React, { Component } from 'react'
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import { Suspense } from 'react'
import routes from './routerConfig'

export default class App extends Component {
    render(){
        return (
            <div className='app-content'>
              <Suspense fallback={<div>loading...</div>}>
                <Router>
                  <Switch>
                    {routes.map((item,index) => (<Route exact={item.isExact} component={item.component} path={item.path} key={index}/>))}
                  </Switch>
                </Router>
              </Suspense>
            </div>
          )   
    }
}