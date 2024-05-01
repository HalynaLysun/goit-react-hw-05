import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { DiVim } from "react-icons/di";

const Layout = lazy(() => import("../components/Layout/Layout"));
const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("../pages/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() =>
  import("../pages/MovieDetailsPage/MovieDetailsPage")
);
const MovieReviews = lazy(() =>
  import("../components/MovieReviews/MovieReviews")
);
const MovieCast = lazy(() => import("../components/MovieCast/MovieCast"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage/NotFoundPage"));

export default function App() {
  return (
    <Layout>
      <Suspense fallback={<div>Please wait loading page...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/movies" element={<MoviesPage />}></Route>
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="reviews" element={<MovieReviews />} />
            <Route path="cast" element={<MovieCast />} />
          </Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
      </Suspense>
    </Layout>
  );
}
