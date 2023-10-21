import { useEffect } from "react"

type GreetType={
  name: string
}
function Greet(props: GreetType) {
  let age:str='';
   const fun=():void=>{
     return age="seyi"
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
