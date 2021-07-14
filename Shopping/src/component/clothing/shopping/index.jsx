import React, { Component } from 'react'
import { ShoppingCartOutlined, CloseOutlined, PlusOutlined, MinusOutlined } from '@ant-design/icons'
import { Button, Badge, Message } from 'antd'
import './style.less'

export default class ShoppingCarBox  extends Component {
  constructor(props){
    super(props)
    this.state={
      commodityList: props.list //商品数量
    }
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    let { commodityList } = this.state
    const { list } = this.props
  }
  render() {
    const { commodityList } = this.state
    const { close } = this.props
    return (
      <div className='shopping-car-box'>
        <div>
          <span>
            <CloseOutlined onClick={close}></CloseOutlined>
          </span>
          <div>
            <Badge count={commodityList.length}>
              <ShoppingCartOutlined></ShoppingCartOutlined>
            </Badge>
            <span style={{ fontSize: '18px' }}>   Cart</span>
          </div>
        </div>
        <div className='car-box'>
          <div>
            {
              commodityList.map((opt, i)=>(
                <div key={i}>
                  <div>
                    <img src={require(`asset/img/${opt.img.split('_1')[0]}_2.jpg`)} alt='' />
                  </div>
                  <div>
                    <div><CloseOutlined onClick={()=>this.onDeleteItem(opt.img)}></CloseOutlined></div>
                    <p>
                      <span>{opt.commodity_name}</span>
                      <span>{opt.moneyUnit} {opt.money}</span>
                    </p>
                    <p>
                      <span>{opt.type}</span>
                      <span> | {opt.commodity_name.replace('Man Tie Dye')}</span>
                    </p>
                    <p>
                      <span>quantity: {opt.count}</span>
                      <span>
                        <Button icon={<MinusOutlined />} disabled={opt.count <= 1} onClick={()=>this.onItemFun(true, opt.img)}></Button>
                        <Button icon={<PlusOutlined />} onClick={()=>this.onItemFun(false, opt.img)}></Button>
                      </span>
                    </p>
                  </div>
                </div>
              ))
            }
          </div>
          <div className='total-number'>
            <div>
              SUBTOTAL
            </div>
            <div>
              $ {this.countNumber()}
            </div>
          </div>
          <div className='car-submit'>
            <Button onClick={()=>{
              Message.warning('暂时无法结账')
            }}>CHECKOUT</Button>
          </div>
        </div>
      </div>
    )
  }
  onItemFun=(Is, key)=>{
    let { commodityList } = this.state
    commodityList.forEach((opt) => {
      if(opt.img === key) opt.count = Is ? ( opt.count - 1 ) : ( opt.count + 1 )
    })
    this.cacheData(commodityList)
    this.setState({ commodityList })
  }
  onDeleteItem=(src)=>{
    let { commodityList } = this.state
    commodityList = commodityList.filter(opt=> opt.img !== src)
    this.cacheData(commodityList)
    this.setState({ commodityList })
  }
  cacheData=(data)=>{
    sessionStorage.car = JSON.stringify(data)
  }
  countNumber=()=>{
    const { commodityList } = this.state
    return commodityList.reduce((total, opt)=>{
      return total += opt.count * Number(opt.money)
    }, 0)
  }
} 
