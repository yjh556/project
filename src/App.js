import React from "react";
import Home from "./components/Home";
import WebtoonPage from "./components/WebtoonPage";
import GoodsPage from "./components/GoodsPage";
import DramaPage from "./components/DramaPage";
import MoviePage from "./components/MoviePage";
import ScrollToTop from "./components/ScrollToTop";
import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div>
      <ScrollToTop>
        <Switch>
          <Route path="/" component={Home} exact={true} />
          <Route path="/Webtoon" component={WebtoonPage} />
          <Route path="/Goods" component={GoodsPage} />
          <Route path="/Drama" component={DramaPage} />
          <Route path="/Movie" component={MoviePage} />
        </Switch>
      </ScrollToTop>
    </div>
  );
};

export default App;
