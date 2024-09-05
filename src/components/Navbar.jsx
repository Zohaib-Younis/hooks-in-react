import React from 'react'
import { memo } from 'react'
//memo ka kam hota ha jab jab props change ho gay tab tab rerender hoga 
function Navbar({adjective,getAdjective}) {
    console.log("Navbar is rendered")
  return (
    <>
    <div>i'm a {adjective} Nevbar</div>
    <button onClick={()=>{getAdjective()}}>
    {getAdjective()}
    </button>
    </>
  )
}

export default memo(Navbar)