import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Earth from './components/Earth';
import Info from './components/Info';
import './styles/App.scss';

const App: React.FC = () => (
  <>
    <Canvas>
      <Suspense fallback={null}>
        <Earth />
      </Suspense>
    </Canvas>
    <Info />
  </>
);

export default App;
