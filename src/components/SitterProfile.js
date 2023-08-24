import React, { useEffect, useState  } from "react"
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import PetSitterCard from './PetSitterCard';
import { fetchSitter } from "../store/actions/sitterActions";
import { assignComment } from "../store/actions/sitterActions";


const SitterProfile = () => {
    const dispatch = useDispatch();

    const { id } = useParams();
    const sitter = useSelector(state => state.sitters.sitter);

    const [newComment, setNewComment] = useState('');
    const [rating, setRating] = useState(0);
    const [isBtnVisible, setIsBtnVisible] = useState(false);

    useEffect(() => {
        dispatch(fetchSitter(id));
      
    }, [dispatch, id]);

    useEffect(() => {
        setIsBtnVisible(newComment.trim() !== '' && rating > 0);
    }, [newComment, rating])

    const handleAddComment = () => {
        if (newComment.trim() !== '') {
            const comment = {
                comment: newComment,
                rating: rating,
            };
            dispatch(assignComment(id, comment))

            setNewComment('');
            setRating(0);
        }
    };

    return (
        <div className="mx-auto w-[40rem] p-8">
            {sitter && (
                <>
                    <PetSitterCard sitter={sitter} />
                    <div className="mt-8">
                        <h2 className="text-2xl font-semibold mb-4">{sitter.comments.length ? 'Comentarios de otras personas' : 'Aún no hay comentarios'}</h2>
                        <div className="max-h-60 overflow-y-auto">
                            <ul className="divide-y divide-gray-300">
                                {sitter.comments.map(comment => (
                                    <li key={comment.id} className="py-2">
                                        <p className="text-gray-700">
                                            "{comment.comment}"
                                        </p>
                                        <p className="text-gray-500 mt-1">Rating: {comment.rating}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="mt-8">
                        <h2 className="text-2xl font-semibold mb-4">Añade un comentario</h2>
                        <textarea
                            className="w-full px-4 py-2 rounded border focus:outline-none focus:ring focus:border-blue-300"
                            rows="4"
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                        />
                        <div className="mt-4 text-center">
                            <p className="text-lg font-semibold mb-2">Selecciona un rating:</p>
                            <div className="flex justify-center space-x-2">
                                {[1, 2, 3, 4, 5].map(value => (
                                    <button
                                        key={value}
                                        className={`w-10 h-10 rounded-full ${rating === value ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-600 hover:bg-green-500 hover:text-white transition duration-300'}`}
                                        onClick={() => setRating(value)}
                                    >
                                        {value}
                                    </button>
                                ))}
                            </div>
                        </div>
                        {isBtnVisible && (
                            <button
                                className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 block mx-auto"
                                onClick={handleAddComment}
                            >
                                Añadir Comentario
                            </button>
                        )}
                    </div>
                </>
            )}
        </div>
    );
};

export default SitterProfile;