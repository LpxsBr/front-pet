import './App.css';
import { useEffect, useState } from 'react';
import api from './hooks/useApi';
import PetDetails from './templates/PetDetail';
import AppRouter from './Router';

function App() {
  
  const [pets, setPets] = useState()

  useEffect(()=>{
    api.get('/api/pet/view/')
    .then((response)=>setPets(response.data))
    .catch((err)=>console.log(err))
  },[])

  console.log(pets);
  return(
    <>
    <AppRouter/>
    </>
    );
}

export default App;
