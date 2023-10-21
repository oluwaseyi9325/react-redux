import { useEffect } from "react"

type GreetType={
  name: string
}
function Greet(props: GreetType) {
   const fun=():void=>{
      alert("hey")
   }
   useEffect(()=>{
     
   },[])
  return (
    <div>
      <h2>Hello {props.name}</h2>
    </div>
  )
}

export default Greet
