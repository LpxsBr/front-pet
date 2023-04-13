import './App.css';
import { useEffect, useState } from 'react';
import api from './hooks/useApi';
import PetDetails from './templates/PetDetail';
import AppRouter from './Router';

function App() {
  
  return(
    <>
    <AppRouter/>
    </>
    );
}

export default App;
