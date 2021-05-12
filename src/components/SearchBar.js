import React, { useState } from 'react';

const SearchBar = (props) => {

    const {onSearchSubmit} = props;

    const [term, setTerm] = useState("");

    const handleInputChange = (event) => {
        setTerm(event.target.value);
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        onSearchSubmit(term);
    }

    return(
        <div className="search-bar ui segment">
            <form className="ui form" onSubmit={(event) => onFormSubmit(event)}>
                <div className="field">
                    <label>Video Search</label>
                    <input type="text" value={term} onChange={(event) => handleInputChange(event)}/>
                </div>
            </form>
        </div>
    );

}

export default SearchBar;