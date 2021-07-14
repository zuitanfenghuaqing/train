
import { Component } from 'react';
import './index.less';
import SizeComponent from '@/component/clothing/size/size'
import Commodity from '@/component/clothing/commodity'
import { Badge } from 'antd'
import { ShoppingCartOutlined } from '@ant-design/icons'
import Car from '@/component/clothing/shopping'

export default class IndexPage extends Component {
  constructor(props){
    super(props)
    this.state={
      commodityList: [], //商品数量
      catShow: false,
      sizeList: []
    }
  }
  componentDidMount(){
    if(sessionStorage.car){
      this.setState({ commodityList: JSON.parse(sessionStorage.car) })
    }
  }
  render(){
    const { commodityList, catShow, sizeList } = this.state
    return (
      <article className='shopping-list'>
        <div className='left-cotent'></div>
        <div className='commodity-box'>
          <SizeComponent callBack={this.onParams}/>
          <Commodity add={this.commodityCount} sizeList={sizeList} />
        </div>
        <div className='shopping-car'>
          {
            !catShow ? (
              <div className='show-icon'>
                <Badge count={commodityList.length}>
                  <ShoppingCartOutlined onClick={()=>this.setState({ catShow: true })}></ShoppingCartOutlined>
                </Badge>
              </div> 
            ) : (
              <div>
                <Car list={commodityList} close={()=> this.setState({ catShow: false })} />
              </div>
            )
          }
        </div>
      </article>
    )
  }
  //筛选参数
  onParams=(param)=>{
    this.setState({ sizeList: param })
  }
  //统计添加商品
  commodityCount=(item, key)=>{
    let { commodityList } = this.state
    if(!item) return void(0)
    if(commodityList.every(opt=> opt[key] !== item[key])) commodityList.push({ ...item, count: 1 })
    else commodityList.length && commodityList.forEach(opt=>{
      if(opt[key] === item[key]) opt.count = opt.count+1
    })
    sessionStorage.car = JSON.stringify(commodityList)
    this.setState({ commodityList })
  }
}
