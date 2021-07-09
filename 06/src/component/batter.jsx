import React, { Component } from 'react'

class batter extends Component {
  constructor(props){
    super(props)
    this.state={
      sub0: 1,
      sub1: 1
    }
  }
  render() {
    const { sub0, sub1 } = this.state
    return (
      <div className='battle-content'>
        <div className='title-block'>Instructions</div>
        <div>
          {
            ['Enter two Github', 'Battle', 'See the winner'].map((opt, i)=>(<div key={i}>
              <div>{opt}</div>
              <div>
                <img src={require(`../asset/img/${['user', 'fight', 'star'][i]}.png`)} alt=''/>
              </div>
            </div>))
          }
        </div>
        <div className='title-block'>Instructions</div>
        <section className='row submit-box'>
          <div>
            <div>
              Player One
            </div>
            <div>
              <input type='text' onInput={(v)=>this.inputChange(v, '0')}/>
              <button disabled={sub0}>Submit</button>
            </div>
          </div>
          <div>
            <div>
              Player Two
            </div>
            <div>
              <input type='text' onInput={(v)=>this.inputChange(v, '1')} />
              <button disabled={sub1}>Submit</button>
            </div>
          </div>
        </section>
      </div>
    )
  }
  inputChange=(v, type)=>{
    const { nativeEvent: { data } } = v
    this.setState({ [`sub${type}`]: !Boolean(data) })
  }
}

export default batter
