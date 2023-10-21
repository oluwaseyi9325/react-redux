import { useEffect } from "react"

type GreetType={
  name: string
}
function Greet(props: GreetType) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let age:string='';
   // eslint-disable-next-line react-hooks/exhaustive-deps
   const fun=():void=>{
     age="seyi"
   }
   useEffect(()=>{
     fun()
   },[fun])
  return (
    <div>
      <h2>Hello {props.name}</h2>
    </div>
  )
}

export default Greet
