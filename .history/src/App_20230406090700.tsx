import React, { useState , FC} from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './Component.js/Greet';
import Pop from './Component.js/Pop';

const App : FC=()=> {
        const fuct=(): void=>{
          
        }
        let personName:string<Object>={
          first:"seyi",
          second:"Victor"
        }
        let det=[
          {
            id:3,
            title:"The life danger"
          },
          {
            id:4,
            title:"Sweet six"
          }
        ]
  const[name,setName]=useState<string|number>(666)
  return (
    <div className="App">
        <Greet name="Seyi Adedokun"/>
        <Pop details={personName} arr={det} />
    </div>
  );
}

export default App;
