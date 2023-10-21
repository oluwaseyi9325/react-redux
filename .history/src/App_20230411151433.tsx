import React, { useState , FC} from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './Component.js/Greet';
import Pop from './Component.js/Pop';
import Status from './Component.js/Status';
import Heading from './Component.js/Heading';
import Oscar from './Component.js/Oscar';
import Button from './Component.js/Button';
import Input from './Component.js/Input';
import Container from './Component.js/Container';
import LoggedIn from './Component.js/state/LoggedIn';
import User from './Component.js/state/User';
import Form from './Component.js/Form';
 
const App : FC=()=> {
        const fuct=(): void=>{
          
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
      <LoggedIn/>
      <User/>
      <Form/>
      {/* <Container styles={{border:"1px solid black",padding:"1rem",backgroundColor:"red"}}/>
      <Input value='' handleChange={(event)=>console.log(event)}/> 
      <Button handleClick={(event,id)=>{console.log("Button clicked",event ,id)}}/>
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar is from New York</Heading>
      </Oscar>
      <Status status='loading'/>
        <Greet name="Seyi Adedokun"/>
        <Pop details={personName} arr={det} /> */}
    </div>
  );
}

export default App;
