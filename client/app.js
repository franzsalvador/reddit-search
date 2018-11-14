import React, { Component } from 'react'

import Header from './components/header'
import SearchBar from './components/search-bar'
import Posts from './components/posts'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userInput: ''
    }
    this.handleInput = this.handleInput.bind(this)
  }

  handleInput(event) {
    const userInput = event.target.value
    this.setState({ userInput })
  }

  render() {
    const { handleSearch, handleInput } = this
    const { userInput } = this.state
    return (
      <div className='container' data-test='component-app'>
        <Header />
        <SearchBar
          handleSearch={handleSearch}
          handleInput={handleInput}
          userInput={userInput} />
        <Posts
          userInput={userInput} />
      </div>
    )
  }
}
