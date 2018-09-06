import React from 'react';

 function SearchFilter () {
    return (
      <div className="filter-list">
        <form>
            <input 
                type="text" 
                className="search-box" 
                placeholder="Search by Title" 
                onChange={this.filterList} 
            />
        </form>
        <List items={this.state.filteredBooks}/>
      </div>
    );
  }
