// import React, { useContext } from "react";
// import { GlobalContext } from "../context/GlobalState";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CloseIcon from "@mui/icons-material/Close";

// export const MovieControls = ({ type, movie }) => {
//   const {
//     removeMovieFromWatchlist,
//     addMovieToWatched,
//     moveToWatchlist,
//     removeFromWatched,
//   } = useContext(GlobalContext);

//   return (
//     <div className="inner-card-controls">
//       {type === "watchlist" && (
//         <>
//           <button className="ctrl-btn" onClick={() => addMovieToWatched(movie)}>
//             <FavoriteIcon style={{ color: "red" }} />
//           </button>

//           <button
//             className="ctrl-btn"
//             onClick={() => removeMovieFromWatchlist(movie.id)}
//           >
//             <CloseIcon style={{ color: "white" }} />
//           </button>
//         </>
//       )}

//       {type === "watched" && (
//         <>
//           <button className="ctrl-btn" onClick={() => moveToWatchlist(movie)}>
//             <i className="fa-fw far fa-eye-slash"></i>
//           </button>

//           <button
//             className="ctrl-btn"
//             onClick={() => removeFromWatched(movie.id)}
//           >
//             <CloseIcon style={{ color: "white" }} />
//           </button>
//         </>
//       )}
//     </div>
//   );
// };

// export default MovieControls;

import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const MovieControls = ({ type, movie }) => {
  const {
    removeMovieFromWatchlist,
    addMovieToWatched,
    moveToWatchlist,
    removeFromWatched,
  } = useContext(GlobalContext);

  return (
    <div className="inner-card-controls">
      {type === "watchlist" && (
        <>
          <button className="ctrl-btn" onClick={() => addMovieToWatched(movie)}>
            <i className="fa-fw far fa-eye-slash"></i>
          </button>

          <button
            className="ctrl-btn"
            onClick={() => removeMovieFromWatchlist(movie.id)}
          >
            <i className="fa-fw fa fa-times"></i>
          </button>
        </>
      )}

      {type === "watched" && (
        <>
          <button className="ctrl-btn" onClick={() => moveToWatchlist(movie)}>
            <i className="fa-fw far fa-eye"></i>
          </button>

          <button
            className="ctrl-btn"
            onClick={() => removeFromWatched(movie.id)}
          >
            <CloseIcon style={{ color: "white" }} />
          </button>
        </>
      )}
    </div>
  );
};

export default MovieControls;
