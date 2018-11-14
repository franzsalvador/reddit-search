import React, { Component } from 'react'

import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getSubreddits } from '../actions/subreddits-actions'

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.handleSearch = this.handleSearch.bind(this)
  }

  handleSearch(event) {
    event.preventDefault()
    const { userInput, getSubreddits } = this.props
    const query = userInput.replace(/ /g, '')
    getSubreddits(query)
  }

  render() {
    const { handleSearch } = this
    const { handleInput, userInput } = this.props
    return (
      <form className='form-inline mt-4' onSubmit={handleSearch} >
        <div className='mx-auto search-section'>
          <input
            className='form-control form-inline mr-3 search-bar'
            type='search'
            aria-label='Search'
            onChange={handleInput}
            value={userInput} />
          <button
            className="btn btn-outline-light search-button"
            type='submit'>
            Search
          </button>
        </div>
      </form>
    )
  }
}

SearchBar.propTypes = {
  subreddits: PropTypes.array,
  getSubreddits: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({ subreddits: state.subreddits })

export default connect(mapStateToProps, { getSubreddits })(SearchBar)
