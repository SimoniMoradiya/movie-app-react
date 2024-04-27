import React from 'react';
import { BrowserRouter as Router, Route ,Switch } from 'react-router-dom';
import MovieDetails from './MovieDetails';
import MovieSearch from './MovieSearch';

function App() {
  return (
    <>
    <Router>
      <Switch>
      <Route exact path="/movie" component={MovieSearch} />
          <Route path="/movie/:id" render={(props) => <MovieDetails {...props} />} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
