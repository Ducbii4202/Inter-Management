// import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DashboardPage from "./DashboardPage";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/dashboard" component={DashboardPage} />
        {/* Thêm các route khác nếu cần */}
      </Switch>
    </Router>
  );
};

export default App;
