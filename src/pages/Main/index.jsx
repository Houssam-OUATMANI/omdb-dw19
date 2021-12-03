import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Form from "../../components/Form";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Card from "../../components/Card";

function Main(props) {
  const { handleSubmit, register, errors } = useForm();
  const [movie, setMovie] = useState(null);
  const onSubmit = async (data) => {
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?t=${data.movie}&apikey=${process.env.REACT_APP_OMDB_KEY}`
      );
      const myMovie = await response.json();
      setMovie(myMovie);
      console.log(movie);
    } catch (error) {}
  };

  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          id="movie"
          label="Find info about your favorite movie"
          name="movie"
          type="text"
          ref={register({ required: true })}
        />
        {errors.movie && <p>Input required</p>}
        <Button type="submit" content="Search" />
      </Form>
      {movie && !movie.Error && (
        <Card
          title={movie.Title}
          released={movie.Released}
          poster={movie.Poster}
          plot={movie.Plot}
          actors={movie.Actors}
        />
      )}
    </div>
  );
}

export default Main;
