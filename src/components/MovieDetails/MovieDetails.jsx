import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

export default function MovieDetails() {
    const movieId = useParams();
    const dispatch = useDispatch();
    const history = useHistory();

    const movieDetails = useSelector(store => store.movieDetails);

    console.log('movieId from param', movieId);

    useEffect(() => {
        getDetails(movieId)
        console.log('movieDetails in effect:', movieDetails)
    }, []);

    const getDetails = (movieId) => {
        dispatch({ type: 'GET_DETAILS', payload: movieId })
    }

    const handleBack = () => {
        history.push('/')
    }

    return (
        <>

            <h3>{movieDetails.title}</h3>
            <img src={movieDetails.poster} alt={movieDetails.title} />
            <p>Description: {movieDetails.description}</p>
            <p>Genres: {movieDetails.genres?.map(genre => {
                return (
                    <div >{genre.name}</div>
                )
            }
            )}
            </p>
            <button onClick={handleBack}>Back</button>
        </>
    )
}