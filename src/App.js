import React, { useEffect } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { connect } from "react-redux";

import ShowActions from "./components/show-info/ShowActions";
import AddActions from "./components/add-actions/AddActions";
import { loadState } from "./localStorage";
import { loadActions } from "./redux/actions";

function App({ loadActions }) {
  useEffect(() => {
    loadActions(loadState());
  }, [loadActions]);

  return (
    <div className="App">
      <BrowserRouter>
        <Link to="/">Home</Link>
        <br />
        <Link to="/create">Create</Link>

        <Route exact path="/" component={ShowActions} />
        <Route path="/create" component={AddActions} />
      </BrowserRouter>
    </div>
  );
}

const mapStateToProps = state => {
  return { actions: state };
};

export default connect(
  mapStateToProps,
  { loadActions }
)(App);
