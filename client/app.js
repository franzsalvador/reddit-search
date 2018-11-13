import React, { Component } from 'react'
import Header from './components/header'
import SearchBar from './components/search-bar'
import Posts from './components/posts'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userInput: '',
      data: []
    }
    this.handleSearch = this.handleSearch.bind(this)
    this.handleInput = this.handleInput.bind(this)
  }

  handleInput(event) {
    const userInput = event.target.value
    this.setState({ userInput })
  }

  handleSearch(event) {
    event.preventDefault()
    const { userInput } = this.state
    const query = userInput.replace(/ /g, '')
    fetch(`https://www.reddit.com/r/${query}/new.json?limit=15`)
      .then(res => res.ok ? res.json() : null)
      .then(results => {
        const data = results.data.children
        this.setState({ data })
      })
      .catch(err => console.error(err))
  }

  handleEnter(event) {
    event.preventDefault()
  }

  render() {
    const { handleSearch, handleInput } = this
    const { userInput, data } = this.state
    return (
      <div>
        <Header />
        <div className='container'>
          <div className='heading'>Reddit Search</div>
          <SearchBar
            handleSearch={handleSearch}
            handleInput={handleInput}
            userInput={userInput} />
          <Posts
            data={data} />
        </div>
      </div>
    )
  }
}
