import React from 'react';

 function SearchFilter (props) {
    return (
      <div className="filter-list">
        <form>
            <input 
                type="text" 
                className="search-box" 
                placeholder="Search Catalogue" 
                onChange={props.handleChange} 
            />
        </form>
      </div>
    );
  }

  export default SearchFilter;
