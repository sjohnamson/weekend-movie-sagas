import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'

export default function MovieDetails() {
    const movieId = useParams();
    const movieDetails = useSelector(store => store.movieDetails);
    const dispatch = useDispatch();

    console.log('movieId from param', movieId)

    useEffect(() => {
        getDetails(movieId)
        console.log('movieDetails in effect:', movieDetails)
    }, []);




    const getDetails = (movieId) => {
        dispatch({ type: 'GET_DETAILS', payload: movieId })
    }

    console.log('movie details in component:', movieDetails)

    return (
        <>

            <h3>{movieDetails.title}</h3>
            <img src={movieDetails.poster} alt={movieDetails.title} />
            <p>Description: {movieDetails.description}</p>
            <p>Genres: {movieDetails.genres?.map(genre => {
                return (
                    <div >{genre.name}</div>
                )}
            )}
            </p>
        </>
    )
}