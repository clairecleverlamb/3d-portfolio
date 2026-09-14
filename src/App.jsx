import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GTMovieStore from "./components/GTMovieStore";

const Home = lazy(() => import("./Home"));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className="min-h-screen bg-primary" />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio/gt-movie-store" element={<GTMovieStore />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
