import { Suspense } from "react";
import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "./Components/Navigation/Navigation";
import { GlobalCSS } from "./styles/global";

const Home = lazy(() => import("./Pages/HomePage/HomePage"));

const MovieDetails = lazy(() =>
  import("./Pages/MovieDetailsPage/MovieDetailsPage")
);
const MoviesPage = lazy(() => import("./Pages/MoviesPage/MoviesPage"));

const NotFound = lazy(() => import("./Pages/NotFoundPage/NotFoundPage"));

const MovieCast = lazy(() => import("./Components/MovieCast/MovieCast"));

const MovieReviews = lazy(() =>
  import("./Components/MovieReviews/MovieReviews")
);

function App() {
  return (
    <>
      <Navigation />
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<MovieCast />} />
              <Route path="reviews" element={<MovieReviews />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <GlobalCSS />
    </>
  );
}

export default App;