import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import UserList from './components/UserList';
import AlbumList from './components/AlbumList';
import PhotoList from './components/PhotoList';

function App() {
  return (
    <div className="App">
        <Router>
            <Routes>
                <Route path="/" element={<UserList />} />
                <Route path="/users/:userId" element={<AlbumList />} />
                <Route path="/albums/:albumId" element={<PhotoList />} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;