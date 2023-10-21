import React from 'react'

type InputProps={
    value:string,
    handleChange:(event:React.ChangeEvent<HTMLInputElement>)=>void
}


function Input(
private _value : string;
public get value() : string {
    return this._value;
}
public set value(v : string) {
    this._value = v;
}
) {
  return (
    <div>
      <input type="text" />
    </div>
  )
}

export default Input
