import React, { Component } from "react";
import Header from '../component/header'
import request from "../utils/request";
import './style.less'
export default class Home extends Component{
    constructor(props){
        super(props)
        this.state={
            body: {}
        }
    }
    componentDidCatch(){

    }
    render(){
      const { body: { items = [] } } = this.state
      return(
          <div>
            <Header callback={this.itemChange} />
            <div style={{ display: "flex", width: "100%", flexWrap: "wrap", justifyContent: 'space-evenly' }}>
              {
                items.length && items.map((opt, i)  =>{
                  return (
                    <div key={i} style={{ flex:'0 0 calc((100% / 4) - 15px)',
                      marginRight: i+1 / 4 ? '15px' : '0',
                      backgroundColor: 'rgb(235,235,235)',
                      padding: '20px 15px',
                      marginBottom: '20px'}}>
                      <h3 style={{ textAlign: 'center', color: 'rgb(200,112,97s)' }}>#{++i}</h3>
                      <div></div>
                      <div style={{ textAlign: 'center', color: 'rgb(200,112,97)',fontSize: '18px' }}>
                        {opt.name}
                      </div>
                      <div>
                        <span  style={{ 
                          background: `url(${require("../asset/img/user.png")})`, display: 'inline-block', width: '20px', height: '20px' }}></span>
                        <span style={{fontWeight: '600' }}>{opt.name}</span>
                      </div>
                      <div>
                        <span></span>
                        <span>{opt.stargazers_count}</span>
                      </div>
                      <div>
                        <span></span>
                        <span>{opt.forks_count}</span>
                      </div>
                      <div>
                        <span></span>
                        <span>--</span>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
      )
    }
    itemChange=(url)=>{
      request(url).then(data=>{
        console.log(data)
        this.setState({ body: data })
      })
    }
}