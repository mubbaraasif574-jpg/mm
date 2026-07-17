import { useEffect, useState } from 'react';

export default function App() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setOpen(true), 400);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="page">
      <div className="card">
        <div className="flower-container">
          <div className={`flower ${open ? 'open' : ''}`}>
            <span className="petal petal1" />
            <span className="petal petal2" />
            <span className="petal petal3" />
            <span className="petal petal4" />
            <span className="petal petal5" />
            <span className="center" />
          </div>
          <div className="stem" />
          <div className="leaf leaf1" />
          <div className="leaf leaf2" />
        </div>

        <div className="message">
          <p className="subtext">A warm, elegant birthday greeting</p>
          <h1>Happy Birthday Mubbarah</h1>
          <p className="note">Piyara sa aur professional style</p>
        </div>
      </div>
    </div>
  );
}
