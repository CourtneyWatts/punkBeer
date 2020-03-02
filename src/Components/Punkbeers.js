import React, { Component } from 'react'
import Filterbar from './Filterbar'
import Beercards from './Beercards'
import banner from '../images/beers_banner.jpg'

class Punkbeers extends Component {
  constructor (props) {
    super(props)
    this.state = {
      sortBy: null
    }
    this.handleSort = this.handleSort.bind(this)
  }

  handleSort (e) {
    console.log(e.target.value)
    this.setState({
      sortBy: e.target.value
    })
  }

  render () {
    return (
      <div>
        <div className='container-fluid banner' style={{backgroundImage: `url(${banner})` }}>
          <h1 className>Punk Beers</h1>
        </div>
        <div className='container pt-5'>
          <Filterbar onChange={this.handleSort} />
          <Beercards sortBy={this.state.sortBy} />
        </div>
      </div>
    )
  }
}

export default Punkbeers
