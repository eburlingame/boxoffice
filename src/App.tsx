import React, { useState } from "react";
import Layout from "./components/Layout";
import useSavedMovies from "./hooks/save";
import ConfirmPage from "./pages/ConfirmPage";
import ReviewPage from "./pages/ReviewPage";
import SearchPage from "./pages/SearchPage";

const App = () => {
  // Simple navigation state field
  const [activePage, setActivePage] = useState("search");
  const { savedMovies, saveMovie, unsaveMovie } = useSavedMovies();

  const gotoPage = (page: string) => {
    if (["search", "review", "confirm"].includes(page)) {
      setActivePage(page);
    }
  };

  const commonProps = { gotoPage, savedMovies, saveMovie, unsaveMovie };

  return (
    <Layout>
      {activePage === "search" && <SearchPage {...commonProps} />}
      {activePage === "review" && <ReviewPage {...commonProps} />}
      {activePage === "confirm" && <ConfirmPage {...commonProps} />}
    </Layout>
  );
};

export default App;
