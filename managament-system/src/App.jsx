// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import StudentList from "./components/StudentList";
import Assignment from "./components/Assignment";
import InternshipTime from "./components/InternshipTime";

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/students">Danh sách sinh viên</Link>
            </li>
            <li>
              <Link to="/assignments">Bài tập</Link>
            </li>
            <li>
              <Link to="/internship-time">Thời gian thực tập</Link>
            </li>
          </ul>
        </nav>

        <hr />

        <Route path="/students" component={StudentList} />
        <Route path="/assignments" component={Assignment} />
        <Route path="/internship-time" component={InternshipTime} />
      </div>
    </Router>
  );
};

export default App;
