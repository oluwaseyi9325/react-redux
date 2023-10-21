import { useEffect } from "react"

type GreetType={
  name: string
}
function Greet(props: GreetType) {
  let name='';
   const fun=():void=>{
     return 
   }
   useEffect(()=>{
     fun()
   },[])
  return (
    <div>
      <h2>Hello {props.name}</h2>
    </div>
  )
}

export default Greet
