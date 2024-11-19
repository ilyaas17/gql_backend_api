# Anime GraphQL API

This is a simple GraphQL API for managing an anime database, built with Express, Apollo Server, and MongoDB.

## Features

- **Queries**:
  - `getAnimes`: Fetch a list of all animes.
  - `getAnime(id: ID!)`: Fetch details of a specific anime by its ID.

- **Mutations**:
  - `addAnime`: Add a new anime.
  - `updateAnime`: Update an existing anime by its ID.
  - `deleteAnime`: Delete an anime by its ID.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-repo/anime-graphql-api.git
    ```

2. Navigate to the project directory:
    ```bash
    cd anime-graphql-api
    ```

3. Install the dependencies:
    ```bash
    npm install
    ```

4. Create a `.env` file in the root directory and add your MongoDB connection string:
    ```dotenv
    MONGODB_URI=your_mongodb_connection_string
    PORT=4000
    ```

5. Start the server:
    ```bash
    npm start
    ```

## Usage

- The server will be running on `http://localhost:4000/graphql`. 
- You can use tools like [Apollo Studio](https://www.apollographql.com/docs/studio/explorer/) to interact with the API.

## Schema
```
```graphql
type Anime {
  id: ID!
  title: String!
  startDate: String!
  endDate: String
  averageScore: Int!
}

type Query {
  getAnimes: [Anime]
  getAnime(id: ID!): Anime
}

type Mutation {
  addAnime(title: String!, startDate: String!, endDate: String, averageScore: Int!): Anime
  updateAnime(id: ID!, title: String!, startDate: String!, endDate: String, averageScore: Int!): Anime
  deleteAnime(id: ID!): Anime
}
```

## Models

### Anime Models

```javascript
import mongoose from 'mongoose';

const animeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  startDate: {
    type: String,
    required: true,
  },
  endDate: {
    type: String,
  },
  averageScore: {
    type: Number,
    required: true,
  },
});

export const Anime = mongoose.model('Anime', animeSchema);

```

### If you like my work, consider starring it 
