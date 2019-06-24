# Planning

## Collaborators

Shane Vann-Shirley, Paula Bannerman, Melika Rasti

## Goal

Our goal is to create a movie app that allows a user to log in, search for movies by various identifiers, and then store movies in a to-do list

## Models

```
User {
  name: String,
  password: String,
  listOfMovies: []
}
```

```
Movie {
  title: String,
  videoExists: Boolean,
  videoKey: String,
  popularity: Number,
  posterImage: String,
  backdropImage: String,
  overview: String,
  genre: [],
  castAndCrew: [],
  adult: Boolean
}
```

```
Genre {
  id: Number,
  name: String
}
```

## ERD

<img src="./flickpick_erd.png" width=500px />

## MVP Requirements

A user should be able to search for a movie and view its details. They should be able to add, update, or delete movies from their movie to-do list.

## Bonus Objectives

Adding authentication for users, embedding videos

## Distribution of Work

Melika - back end
Shane and Paula - front end

## Timeframe goals

Tuesday - MVP
Wednesday - Complete styling
Thursday/Friday - Bonus work and presentation preparation
