import {useEffect} from "react";

export const Input = ({name, options, onValueChane}) => {
  useEffect(()=>{
    onValueChane(name, options[0].value)
  }, [])

  return (
    <label>
      {name}:
      <br />
      <select className="sel" id={name} onChange={({target})=>onValueChane(name, +target.value)}>
        {options.map((option)=>{
          return <option key={`${option.name}-${option.value}`} value={option.value}>{option.name}</option>
        })}
      </select>
    </label>
  )
}