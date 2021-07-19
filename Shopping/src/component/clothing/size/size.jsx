import { Component } from 'react'
import { Button, message } from 'antd'
import { StarOutlined } from '@ant-design/icons';

export default class size extends Component {
  constructor(props){
    super(props)
    this.state={
      list: ['XS', 'S', 'M', 'ML', 'L', 'XL', 'XXL'],
      star: 967,
      active: []
    }
  }
  render() {
    const { list, star, active } = this.state
    return (
      <div className='sizes-content'>
        <p className='title-block'>Sizes:</p>
        <div className='size-box'>
          {
            list.map((item)=>(
              <span key={item} className={`${active.some(opt=> opt === item) && 'active' }`} onClick={()=>this.checkedArr(item)}>{item}</span>))
          }
        </div>
        <div className='describe'>
          <p>Leve a star on Github if this
            repository was useful:)</p>
          <div>
            <Button icon={<StarOutlined />} onClick={this.staradd}>start</Button>
            <span>{star}</span>
          </div>
        </div>
      </div>
    )
  }
  staradd=()=>{
    let { star } = this.state
    message.success('关注成功')
    this.setState({ star: ++star })
  }
  checkedArr = (v)=>{
    let { active } = this.state
    let { callBack } = this.props
    if(active.every(opt=> opt !== v)) active.push(v)
    else active = active.filter(opt => opt !== v)
    this.setState({ active })
    //传递筛选参数
    console.log(active)
    callBack(active)
  }
}
