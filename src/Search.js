import React from "react";
const Search = ({searchchange}) =>{
    return(
        <div>
        <input type="box" placeholder="seach here!" className="bg-lightest-blue pa3 ba  b--green" onChange={searchchange}/>
        </div>
    );
}

export default Search;