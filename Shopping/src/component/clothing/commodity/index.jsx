import React, { Component } from 'react'
import define from './common'
import { Button } from 'antd'

export default class ClothingCommodity extends Component {
  constructor(props){
    super(props)
    this.state = {
      list: JSON.parse(JSON.stringify(define.list)),
      searchN: define.list.length,
      sizeList: props.sizeList
    }
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    let { sizeList, list } = this.state
    const { sizeList: nextSize } = this.props
    if(JSON.stringify(nextSize) !== JSON.stringify(sizeList)){
      list = define.list.filter(opt=>{
        return  nextSize.length ? nextSize.some(item => item === opt.type) : true
      })
      this.setState({ list: JSON.parse(JSON.stringify(list)), sizeList: JSON.parse(JSON.stringify(nextSize)) })
    }
  }
  render() {
    const { list, searchN, size } = this.state
    return (
      <div className='commodity-info'>
        <div>
          <div> 
            { searchN } Product(s) found.
          </div>
          <div>
            Order by 
            <select id='commodity-sort' onChange={this.onSelect}>
              {
                define.listSort.map((opt, i)=>(
                  <option key={i} value={opt.type}>{opt.name}</option>
                ))
              }
            </select>
          </div>
        </div>
        <div className='commodity-list'>
          {
            this.renderItem(list)
          }
        </div>
      </div>
    )
  }
  renderItem=(list)=>{
    return list.map((opt, i)=>(
      <div className='item-box' key={opt.img}>
        <div>
          <span className='welfare-info'>{opt.welfare}</span>
          <img src={require(`asset/img/${opt.img}.jpg`)} alt="" />
        </div>
        <div>
          <p className='commodity-title'>{opt.commodity_name}</p>
          <div className='commodity-money'>
            <span>{opt.unit}</span>
            {opt.money.split('.').map((item, i)=>(<span key={`${opt.img}-${i}`}>{item}{!i && '.'}</span>))}
          </div>
          <div className='commodity-extend'>{opt.extendInfo}</div>
        </div>
        <div className='commodity-add'>
          <Button onClick={()=>this.onAdd(opt)}>add to cat</Button>
        </div>
      </div>
    ))
  }
  onSelect=(e)=>{
    let n, { list, sizeList } = this.state
    e.target.childNodes.forEach(opt=>{
      if(opt.selected) n = opt.value
    })
    if(n === '2') list = list.sort((a, b)=> a.money - b.money )
    else if(n === '3') list = list.sort((a, b)=> b.money - a.money )
    else if(n === '1') list = define.list.filter(opt =>
      sizeList.length ? sizeList.some(item => item === opt.type) : true)

    this.setState({ list })
  }
  onAdd=(obj)=>{
    const { add } = this.props
    add(obj, 'img')
  }
}
