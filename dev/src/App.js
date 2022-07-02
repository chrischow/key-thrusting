import { useState } from 'react';
import { faker } from '@faker-js/faker';
import { IoIosRocket, IoMdLock, IoMdUnlock } from 'react-icons/io';
import './App.css';

export default function App() {
  const capitalizeFirst = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const generateOneKeyThrust = () => {
    return `${capitalizeFirst(faker.company.bs())} to ${faker.company.bsBuzz()} ${faker.company.catchPhrase().toLowerCase()}.`;
  }

  const [kt1, setKt1] = useState(generateOneKeyThrust());
  const [kt2, setKt2] = useState(generateOneKeyThrust());
  const [kt3, setKt3] = useState(generateOneKeyThrust());
  const [fixKt1, setFixKt1] = useState(false);
  const [fixKt2, setFixKt2] = useState(false);
  const [fixKt3, setFixKt3] = useState(false);

  const generateKeyThrusts = () => {
    if (!fixKt1) {
      setKt1(generateOneKeyThrust());
    }
    if (!fixKt2) {
      setKt2(generateOneKeyThrust());
    }
    if (!fixKt3) {
      setKt3(generateOneKeyThrust());
    }
  };

  const toggleLock = (kt) => {
    if (kt === 1) {
      setFixKt1(!fixKt1);
    } else if (kt === 2) {
      setFixKt2(!fixKt2);
    } else if (kt === 3) {
      setFixKt3(!fixKt3);
    }
  };

  return (
    <div className="main">
      <div className="title">
        <h1>Key-Thrusting</h1>
        <p className="subtitle">Accelerate your bullshit development cycle.</p>
        <div className="btn-div">
          <button onClick={generateKeyThrusts}>
            <IoIosRocket style={{marginRight: '5px'}} />
            Thrust!
          </button>
        </div>
      </div>
      <div className="thrusts">
        <div className="thrusts-grid">
          <div className="thrust1-lock">
            {fixKt1 ? <IoMdLock style={{color: '#FF5364'}} onClick={() => toggleLock(1)} /> : <IoMdUnlock style={{color: '#E6BA0F'}} onClick={() => toggleLock(1)} />}
          </div>
          <div className="thrust1-num">1</div>
          <div className="thrust1-text">{kt1}</div>
          <div className="thrust2-lock">
            {fixKt2 ? <IoMdLock style={{color: '#FF5364'}} onClick={() => toggleLock(2)} /> : <IoMdUnlock style={{color: '#E6BA0F'}} onClick={() => toggleLock(2)} />}
          </div>
          <div className="thrust2-num">2</div>
          <div className="thrust2-text">{kt2}</div>
          <div className="thrust3-lock">
            {fixKt3 ? <IoMdLock style={{color: '#FF5364'}} onClick={() => toggleLock(3)} /> : <IoMdUnlock style={{color: '#E6BA0F'}} onClick={() => toggleLock(3)} />}
          </div>
          <div className="thrust3-num">3</div>
          <div className="thrust3-text">{kt3}</div>
        </div>
      </div>
    </div>
  );
}