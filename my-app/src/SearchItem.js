import React from 'react'

const SearchItem = ( {searchItems , setSearchItems} ) => {
  return (
    <div>
        <form className='searchForm' onSubmit={(e) => {e.preventDefault()}}>
            <label htmlFor="search">Search</label>
            <input type="text" name="" id="search" value={searchItems} role='searchbox' placeholder='Search Item' onChange={(e) => setSearchItems(e.target.value)} />
        </form>
    </div>
  )
}

export default SearchItem