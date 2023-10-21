import React, { useState , FC} from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './Component.js/Greet';
import Pop from './Component.js/Pop';
import Status from './Component.js/Status';
import Heading from './Component.js/Heading';
import Oscar from './Component.js/Oscar';
import Button from './Component.js/Button';

const App : FC=()=> {
        const fuct=(): void=>{
          
        }
        let personName={
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
      <Button
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar is from New York</Heading>
      </Oscar>
      <Status status='loading'/>
        <Greet name="Seyi Adedokun"/>
        <Pop details={personName} arr={det} />
    </div>
  );
}

export default App;
