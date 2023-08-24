import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { searchSitters } from "../store/actions/searchActions";
import { clearSitterSearch } from "../store/actions/searchActions";

const Search = () => {
    const dispatch = useDispatch();

    const [query, setQuery] = useState('');
    const [typingTimeout, setTypingTimeout] = useState(null);

    const searchResults = useSelector(state => state.search.results);


    useEffect(() => () => dispatch(clearSitterSearch()), [ dispatch])

    const handleInputChange = (e) => {
        const { value } = e.target;

        clearTimeout(typingTimeout);

        setTypingTimeout(setTimeout(() => {
            if (value ) {
                dispatch(searchSitters(value));
            } else {
                dispatch(clearSitterSearch()); 
            }
        }, 400));

        setQuery(value);
    };


    return (
        <div className="p-4">
            <div className="w-96 rounded-lg overflow-hidden border border-gray-300 shadow-md">
                <input
                    type="text"
                    placeholder="Buscar Cuidadores"
                    value={query}
                    className="w-full px-4 py-2 rounded-t-lg focus:outline-none focus:ring focus:border-blue-300"
                    onChange={handleInputChange}
                />
                <ul className="mt-2">
                    {searchResults.map((user) => (
                        <li
                            key={user.id}
                            className="border-t p-2 hover:bg-gray-100 transition duration-300"
                        >
                            <Link to={`/sitter/${user.id}`} className="block">
                                <strong>{user.name}</strong>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Search;