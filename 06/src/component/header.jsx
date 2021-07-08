import React, { Component } from 'react'

export class header extends Component {
    constructor(props){
        super(props)
        this.state={
            list: [{
                url: '/repositories?q=stars:3E1&sort=stars&order=desc&type=Repositories',
                name: 'all'
            }, {
                url: '/repositories?q=stars:3E1+language:javascript&sort=stars&order=desc&type=Repositories',
                name: 'JavaScript'
            }, {
                url: '/repositories?q=stars:3E1+language:ruby&sort=stars&order=desc&type=Repositories',
                name: 'ruby'
            }, {
                url: '/repositories?q=stars:3E1+language:java&sort=stars&order=desc&type=Repositories',
                name: 'Java'
            }, {
                url: '/repositories?q=stars:3E1+language:css&sort=stars&order=desc&type=Repositories',
                name: 'css'
            }, {
                url: '/repositories?q=stars:3E1+language:python&sort=stars&order=desc&type=Repositories',
                name: 'Python'
            }],
            active: 0
        }
    }
    componentDidMount (){
      const  { list } = this.state
      this.props.callback(list[0].url)
    }
    render() {
        let { list, active } = this.state
        return (
            <div>
                <div style={{ textAlign: 'center',padding: '30px 0' }}>
                    {
                        list.map((opt, i)=>(
                          <span style={{ marginRight: '30px', display: 'inline-block', cursor: 'pointer' }} className={ active === i ?  'item-active' : '' } onClick={()=>this.checked(opt.url, i)} key={i}>{opt.name}</span>))
                    }
                </div>
                <span></span>
            </div>
        )
    }
    checked (url, i) {
      this.props.callback(url)
      this.setState({ active: i })
    }
}

export default header
