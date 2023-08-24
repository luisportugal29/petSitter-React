import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchSitters } from "../store/actions/sitterActions";
import PetSitterCard from "./PetSitterCard";
import { Link } from "react-router-dom";
import { differenceInYears, parse } from 'date-fns';

const PetSitterList = () => {

    const dispatch = useDispatch();
    const sitters = useSelector(state => state.sitters.sitters.map(sitter => {
        const birthDate =  parse(sitter.birthDate, 'yyyy-MM-dd', new Date());
        const age  = differenceInYears(new Date(),birthDate);
        return {...sitter, age }
    }));

    const itemsPerPage = 6;
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentSitters = sitters.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(sitters.length / itemsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    useEffect(() => {
        dispatch(fetchSitters());
       
    },[dispatch]);

    return (
        <div>
            <div className="grid grid-cols-3 gap-4">
                {currentSitters.map(sitter => (
                    <Link key={sitter.id} to={`/sitter/${sitter.id}`} className="cursor-pointer"> 
                        <PetSitterCard sitter={sitter} />
                    </Link>
                ))}
            </div>
    
            <div className="mt-4 flex justify-center">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index}
                        onClick={() => handlePageChange(index + 1)}
                        className={`mx-1 px-2 py-1 w-8 h-8 rounded-full ${
                            currentPage === index + 1 ? 'bg-gray-700 text-white' : 'bg-gray-300 text-gray-700 hover:bg-blue-500 hover:text-white transition duration-300'
                        }`}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
   
};

export default PetSitterList;