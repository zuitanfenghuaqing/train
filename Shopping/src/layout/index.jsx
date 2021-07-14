
import React, { Component } from 'react'
import { Layout } from 'antd';
const { Content } = Layout;
import '../global.less'

export default class LayoutIndex extends Component {
  constructor(){
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div>
        <Layout>
        {/* <Header className='height-48' /> */}
        <Layout>
          <Layout>
            <Content>
              <main id='main'> { this.props.children } </main>
             </Content>
           </Layout>
         </Layout>
       </Layout>
      </div>
    )
  }
}
