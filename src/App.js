import './App.css';
import { useEffect, useState } from 'react';
import api from './hooks/useApi';
import PetDetails from './templates/PetDetail';

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
    <PetDetails/>
    </>
    // <div>
    //   <h1>Lista</h1>
    //   {
    //     (!pets ? 'Nada não' :
    //     pets.map((a)=>{
    //       return(<h1>{a._id  }</h1>)
    //     })
    //     )
    //   }
    // </div>
    );
}

export default App;
