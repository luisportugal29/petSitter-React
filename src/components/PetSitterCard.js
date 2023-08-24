import React from "react";

const PetSitterCard = ({ sitter }) => {
    
    return (
        <div className="mx-auto w-[25rem] p-4 hover:scale-105 transition-transform">
            {sitter && (
                <div className="border p-4 rounded-lg shadow-md">
                    <div className="flex items-center mb-4">
                        <img
                            src={sitter.photoUrl}
                            alt={sitter.name}
                            className="w-12 h-12 rounded-full mr-4"
                        />
                        <h2 className="text-xl font-semibold">{`${sitter.name} ${sitter.lastName}`}</h2>
                    </div>
                    <p className="mb-1"><strong>Edad:</strong> {sitter.age}</p>
                    <p className="mb-1"><strong>Ciudad: </strong>{sitter.city.name}</p>
                    <p><strong>Mascotas:</strong> {sitter.pets.map(pet => pet.name).join(',')}</p>
                </div>
            )}
        </div>
    );
    

};

export default PetSitterCard;