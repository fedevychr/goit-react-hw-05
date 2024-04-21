import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTlkZGUxYjk1NDhmMmQ5NTBhYzZiNGNjNjI3M2UyYiIsInN1YiI6IjY2MjUwYTdiMmUyYjJjMDE2MzY2NTBhZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZN5Am04KmZ_aRf0LmcLWKmwiC5LitO7DrWr2cDvvQIM",
  },
  params: {
    language: "en-US",
  },
});

export default instance;
