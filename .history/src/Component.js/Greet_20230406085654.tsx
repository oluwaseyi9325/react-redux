import { useEffect } from "react"

type GreetType={
  name: string
}
function Greet(props: GreetType) {
  let age:string='';
   const fun=():void=>{
     age:string="seyi"
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
