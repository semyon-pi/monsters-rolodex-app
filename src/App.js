import { useState, useEffect } from 'react'
import CardList from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.component'

import './App.css'

const App = () => {
  const [monsters, setMonsters] = useState([])
  const [searchField, setSearchField] = useState('')
  const [filteredMonsters, setFilteredMonsters] = useState(monsters)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users').then((response) =>
      response.json().then((users) => setMonsters(users))
    )
  }, [])

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase()
    setSearchField(searchFieldString)
  }

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField)
    })
    setFilteredMonsters(newFilteredMonsters)
  }, [searchField, monsters])

  return (
    <div className='App'>
      <h1 className='app-title'>Monsters Rolodex</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder='search monsters'
        className='monsters-search-box'
      />
      <CardList monsters={filteredMonsters} />
    </div>
  )
}

export default App
