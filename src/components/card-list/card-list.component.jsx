import React, { Component } from 'react'

class CardList extends Component {
  render() {
    const { monsters } = this.props
    console.log('render from CardList')

    return (
      <div>
        {monsters.map((monster) => (
          <div className='card-container' key={monster.id}>
            <img
              alt={`monster ${monster.name}`}
              src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
            />
            <h2>{monster.name}</h2>
            <p>{monster.email}</p>
          </div>
        ))}
      </div>
    )
  }
}

export default CardList
