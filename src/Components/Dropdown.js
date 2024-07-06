

import React from 'react'

function Dropdown({config,handler,selectedValue}) {
  return (
    
    <select value={ selectedValue }  onChange={(event)=> handler(event.target.value)} className='w-48 mr-4 text-white py-2 px-4 rounded bg-[rgb(19,18,22)]' name="" id="">
      
      {
              config.map(item => <option  key={item.identifier} value={item.identifier}>{item.name }</option>)
      }
      
      </select>
    
  )
}

export default Dropdown
