//import React,{useState} from 'react'
import React,{useState} from 'react';
import Select from 'react-dropdown-select';

export default function App() {
  const [value,setValue] = useState(null)

  const option =[
    {value:"Chocolate",label:"chocolate"},
    {value:"CANDY",label:"candy"},
    {value:"ICE CREAM",label:"Ice cream"},
    {value:"BURGER",label:"Burger"},
  ]
  return (
    <div style={{margin:20, width:200}}>
      
      <Select 
      options={option} 
      defaultValue={value} 
      placeholder="Select your Snack" 
      onChange={setValue}
      multi
      isSearchable
      
      />
    </div>
  )
} 
