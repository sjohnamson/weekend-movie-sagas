import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'

export default function MovieDetails() {
    const movieId = useParams();
    const movieDetails = useSelector(store => store.movieDetails);
    const dispatch = useDispatch();

console.log('movieId from param', movieId)


    useEffect((movieId) => {
        getDetails(movieId)
    }, []);

 
    

    const getDetails = (movieId) => {
        dispatch({ type: 'GET_DETAILS', payload: movieId })
        console.log('movie genres', movieId)
    }

    return (
        <>
          {/* {movieDetails.genres.map(genre => {
                    return (

                        <div key={movie.id} >
                            
                                <h3>{movie.title}</h3>
                                <img src={movie.poster} alt={movie.title} />
                        </div>
                    );
                })} */}
        </>
    )
}