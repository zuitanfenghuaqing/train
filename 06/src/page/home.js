import React, { Component, Fragment } from "react";
import Header from '../component/header'
import request from "../utils/request";
import Batter from '../component/batter'
import InfiniteScroll from 'react-infinite-scroller'
import { Spin } from 'antd'
import './style.less'
export default class Home extends Component{
    constructor(props){
        super(props)
        this.state={
            hasMore: true, // 是否开启下拉加载
            data: [], // 接受我每次的数据
            active: sessionStorage.tabKey ? Number(sessionStorage.tabKey) : 0,
            origin: '',
            loading: true
        }
    }
    render(){
      const { data = [], active, hasMore, loading } = this.state
      return(
          <div className='main-content'>
            <Spin spinning={loading}>
              <div className='top-menu'>
                {
                  ['Popular', 'Battle'].map((opt, i)=>(<span key={i} className={Number(active) === i ? 'active': ''}  onClick={()=>{
                    sessionStorage.tabKey = i
                    this.setState({ active: i })
                  }}>{opt}</span>))
                }
              </div>
              <div>
                {
                  !active ? (
                    <Fragment>
                      <Header callback={this.callback} />
                      <div style={{ display: "flex", width: "100%", flexWrap: "wrap", justifyContent: 'space-evenly' }}>
                      <InfiniteScroll
                        initialLoad={false} // 不让它进入直接加载
                        pageStart={1} // 设置初始化请求的页数
                        loadMore={this.itemChange}  // 监听的ajax请求
                        hasMore={hasMore} // 是否继续监听滚动事件 true 监听 | false 不再监听
                        useWindow={true} // 不监听 window 滚动条
                      >                   {
                          data.length ? data.map((opt, i)  =>{
                            const { name, stargazers_count, forks_count, owner: {
                              avatar_url
                            } } = opt
                            return (
                              <div key={i} style={{ flex:'0 0 calc((100% / 4) - 15px)',
                                marginRight: i+1 / 4 ? '15px' : '0',
                                width: 'calc(100% / 4 - 15px)',
                                backgroundColor: 'rgb(235,235,235)',
                                padding: '30px 25px',
                                marginBottom: '20px'}}>
                                <h3 style={{ textAlign: 'center', color: 'rgb(200,112,97s)', fontSize: '25px' }}>#{++i}</h3>
                                <div style={{backgroundImage: `url(${avatar_url})`,
                                  backgroundSize: '100% 100%',
                                  width: '93px',
                                  height: '93px',
                                  margin: '0 auto'
                                }}></div>
                                <div style={{ textAlign: 'center', color: 'rgb(200,112,97)',fontSize: '18px', margin: '30px 0' }}>
                                  {opt.name}
                                </div>
                                {
                                  ['user', 'star', 'fen'].map((item, i)=>{
                                    return (
                                      <div key={i}>
                                        <span  style={{
                                          backgroundSize: '100% 100%',
                                          verticalAlign: 'sub',
                                          marginRight: '20px',
                                          backgroundImage: `url( ${require("../asset/img/"+item+".png")})`,
                                          display: 'inline-block', width: '20px', height: '20px' }}></span>
                                        <span style={{fontWeight: '600' }}>{[name, stargazers_count, forks_count][i]}</span>
                                      </div>
                                    )})
                                }
                                <div>
                                  <span></span>
                                  <span>--</span>
                                </div>
                              </div>
                            )
                          }) : null
                        }
                      </InfiniteScroll>
                      </div>
                    </Fragment>
                  ) : <Batter />
                }
              </div>
            </Spin>
          </div>
      )
    }
    callback=(url)=>{
      this.setState({ origin: url, loading: true, data: [] }, ()=>{
        this.itemChange(1)
      })
    }
    itemChange=(page = 1)=>{
      let { data, origin } = this.state
      let url = `${origin}&page=${page}`
      request(url).then(iData=>{
        this.setState({ data: [...data, ...iData.items] })
      }).finally((v)=>{
        console.log(v)
        // this.setState({ loading: false })
      })
    }
}