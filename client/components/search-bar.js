import React from 'react'

export default function SearchBar({ handleSearch, handleInput, handleEnter, userInput }) {
  return (
    <form className='form-inline mt-4' onSubmit={handleSearch}>
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
