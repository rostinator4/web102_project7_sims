import './App.css';
import React from 'react';
import { useRoutes, Link } from 'react-router-dom';
import ReadPosts from './pages/ReadPosts'; // Rename this to ListCitizens later
import CreatePost from './pages/CreatePost'; // Rename this to AddCitizen later
import EditPost from './pages/EditPost';
import Welcome from './pages/Welcome'; // New Component

const App = () => {
  let element = useRoutes([
    { path: "/", element: <Welcome /> },
    { path: "/citizens", element: <ReadPosts /> },
    { path: "/edit/:id", element: <EditPost /> },
    { path: "/new", element: <CreatePost /> }
  ]);

  return ( 
    <div className="App">
      <div className="main-content">
        {element}
      </div>

      <div className="sidebar">
        <h2>City Menu</h2>
        <nav>
          <Link to="/">Welcome</Link>
          <Link to="/citizens">List Citizens</Link>
          <Link to="/new">Add Citizen</Link>
        </nav>
      </div>
    </div>
  );
}

export default App;