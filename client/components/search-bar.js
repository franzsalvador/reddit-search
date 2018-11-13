import React from 'react'

export default function SearchBar({ handleSearch, handleInput, userInput }) {
  return (
    <form className='form-inline mt-4'>
      <div className='mx-auto search-section'>
        <input
          className='form-control form-inline mr-3 search-bar'
          type='search'
          aria-label='Search'
          onChange={handleInput}
          value={userInput} />
        <button
          className="btn btn-outline-light search-button"
          type='button'
          onClick={handleSearch}>
          Search
        </button>
      </div>
    </form>
  )
}
