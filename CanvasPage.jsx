import React, { useRef, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './CanvasPage.css';

export default function CanvasPage({ me }) {
  const { roomId } = useParams();
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.lineWidth = 2;
    ctx.strokeStyle = "#000000";
    ctx.lineCap = "round";
  }, []);

  const startDrawing = (e) => {
    const ctx = canvasRef.current.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    setIsDrawing(true);
  };

  const draw = (e) => {
    if (!isDrawing) return;
    const ctx = canvasRef.current.getContext('2d');
    ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  return (
    <div className="canvas-container">
      <div className="room-info">
        <h2>Room ID: {roomId}</h2>
        <p>You are: <strong>{me || 'Anonymous'}</strong></p>
      </div>
      <div className="toolbar">
        <span>🖌️ Tools coming soon...</span>
      </div>
      <canvas
        ref={canvasRef}
        width={1000}
        height={600}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
      />
    </div>
  );
}
