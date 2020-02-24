import React, { Component } from 'react'
import './filterbar.scss'

class Filterbar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      ok: true
    }
  }

  render () {
    return (
      <div className='Filterbar-container'>
        <div className='Filterbar-sort-options'>
          <p>Sort By: </p>
          <select onChange={ this.props.onChange } value={this.props.is_expenditure}>
            <option defaultValue> - - - -</option>
            <option value='strongest'>Strength</option>
            <option value='name'>Name</option>
          </select>
        </div>
      </div>
    )
  }
}

export default Filterbar
