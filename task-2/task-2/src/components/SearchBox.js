import React from 'react';


const SearchBox=({searchfeild, searchChange})=>{
    return(
            <div className='pa2'>
                <input 
                className='pa3 ba b--white bg-orange
                '
                 type="search" 
                 placeholder='Search by name' 
                 onChange={searchChange}/>
            </div>
        );
}

export default SearchBox;
