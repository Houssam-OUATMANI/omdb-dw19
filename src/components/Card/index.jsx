import React from 'react';
import styles from './Card.module.css'
function Card(props) {
    return (
        <div className={styles.container}>
            <div className={styles.head}>
                <h1>{props.title}</h1>
                <p>Released On {props.released}</p>
            </div>
            <div className={styles.poster}>
                <img src={props.poster} alt={props.title} />
            </div>
            <div className={styles.info}>
                <p>{props.plot}</p>
                <h3>Actors:</h3>
                <ul>
                    {props.actors.split(',').map(actor => (
                        <li key={actor}>{actor.trim()}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Card;