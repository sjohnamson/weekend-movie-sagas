import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'

export default function MovieDetails() {
    const movieId = useParams();
    const movieDetails = useSelector(store => store.movieDetails);
    const dispatch = useDispatch();

    console.log('movieId from param', 0)


    // useEffect(() => {
    //     getDetails(movieId)
    // }, []);




    const getDetails = (movieId) => {
        dispatch({ type: 'GET_DETAILS', payload: movieId })
       
    }

console.log('movie details in component:', movieDetails)

    return (
        <>
            <h1>{movieDetails.id}</h1>
        </>
    )
}