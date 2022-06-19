// import React, { useContext } from "react";
// import { GlobalContext } from "../context/GlobalState";

// export const ResultCard = ({ movie }) => {
//   const { addMovieToWatchlist, addMovieToWatched, watchlist, watched } =
//     useContext(GlobalContext);

//   let storedMovie = watchlist.find((o) => o.id === movie.id);
//   let storedMovieWatched = watched.find((o) => o.id === movie.id);

//   const watchlistDisabled = storedMovie
//     ? true
//     : storedMovieWatched
//     ? true
//     : false;

//   const watchedDisabled = storedMovieWatched ? true : false;

//   return (
//     <div className="result-card">
//       <div className="poster-wrapper">
//         {movie.poster_path ? (
//           <img
//             src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
//             alt={`${movie.title} Poster`}
//           />
//         ) : (
//           <div className="filler-poster" />
//         )}
//       </div>
//       <div className="info">
//         <div className="header">
//           <h3 className="title">{movie.title}</h3>
//           <h4 className="release-date">
//             {movie.release_date
//               ? movie.release_date.substring(0, 4)
//               : "No info..."}
//           </h4>
//         </div>
//         <div className="controls">
//           <button
//             className="btn"
//             disabled={watchlistDisabled}
//             onClick={() => addMovieToWatchlist(movie)}
//           >
//             Add to Watchlist
//           </button>
//           <button
//             className="btn"
//             disabled={watchedDisabled}
//             onClick={() => addMovieToWatched(movie)}
//           >
//             Add to Watched
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

import { margin } from "@mui/system";
import React, { useContext } from "react";
// import Moment from "react-moment";
import { GlobalContext } from "../context/GlobalState";

export const ResultCard = ({ movie }) => {
  const { addMovieToWatchlist, addMovieToWatched, watchlist, watched } =
    useContext(GlobalContext);

  let storedMovie = watchlist.find((o) => o.id === movie.id);
  let storedMovieWatched = watched.find((o) => o.id === movie.id);

  const watchlistDisabled = storedMovie
    ? true
    : storedMovieWatched
    ? true
    : false;

  const watchedDisabled = storedMovieWatched ? true : false;

  return (
    <div
      className="result-card"
      style={{ display: "flex", alignItems: "center" }}
    >
      <div className="poster-wrapper">
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={`${movie.title} Poster`}
          />
        ) : (
          <div className="filler-poster" />
        )}
      </div>

      <div
        className="info"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <div className="header">
          <h3 className="title">{movie.title}</h3>
          <h4 className="release-date">
            {movie.release_date
              ? movie.release_date.substring(0, 4)
              : "No info..."}
          </h4>
          <h4>{movie.vote_average}</h4>
          <h6>{movie.overview}</h6>
        </div>

        <div className="controls">
          <button
            className="btn"
            style={{ maxInlineSize: "250px" }}
            disabled={watchlistDisabled}
            onClick={() => addMovieToWatchlist(movie)}
          >
            Add to Watchlist
          </button>

          <button
            className="btn"
            style={{ maxInlineSize: "250px" }}
            disabled={watchedDisabled}
            onClick={() => addMovieToWatched(movie)}
          >
            Add to Watched
          </button>
        </div>
      </div>
    </div>
  );
};