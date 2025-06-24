import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import LandingPage from './LandingPage.jsx';
import CanvasPage from './CanvasPage.jsx';

export default function App() {
  const [me, setMe] = useState('');
  const navigate = useNavigate();

  const joinRoom = (name, roomId) => {
    setMe(name);
    alert('Joined Room');
    setTimeout(() => navigate(`/canvas/${roomId}`), 1000);
  };

  const createRoom = (name, roomId) => {
    setMe(name);
    alert('Created Room');
    setTimeout(() => navigate(`/canvas/${roomId}`), 1000);
  };

  return (
    <Routes>
      <Route path="/" element={<LandingPage onJoin={joinRoom} onCreate={createRoom} />} />
      <Route path="/canvas/:roomId" element={<CanvasPage me={me} />} />
    </Routes>
  );
}
