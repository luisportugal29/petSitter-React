import React from "react";
import Search from './Search';
import PetSitterList from "./PetStitterList";


const Home = () => {
    
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <Search />
            <PetSitterList /> 
        </div>
    );
};

export default Home;