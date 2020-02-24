import React, { Component } from 'react'
import Beercard from '../Components/Beercard'

class Beercards extends Component {
  constructor (props) {
    super(props)
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      sortBy: null
    }
  }

  componentDidMount () {
    fetch('https://api.punkapi.com/v2/beers')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          })
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          })
        }
      )
  }

  render () {
    const { error, isLoaded, items } = this.state
    if (error) {
      return <div>Error: {error.message}</div>
    } else if (!isLoaded) {
      return <div>Loading...</div>
    } else {
      let list = [...items]
      if (this.props.sortBy === 'strongest') {
        list = [...items].sort(function (a, b) {
          return b.abv - a.abv
        })
      } else if (this.props.sortBy === 'name') {
        list = [...items].sort(function compare (a, b) {
          if (a.name < b.name) {
            return -1
          }
          if (a.name > b.name) {
            return 1
          }
          return 0
        }
        )
      }
      list = list.map(item => (
        <Beercard key={item.id} name={item.name} img={item.image_url} description={item.description} abv={item.abv} />
      ))

      return (
        <div className='row'>
          {list}
        </div>
      )
    }
  }
}

export default Beercards
