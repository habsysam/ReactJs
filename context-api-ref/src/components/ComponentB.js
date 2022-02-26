import React from 'react'
import  ComponentC from './ComponentC'



function ComponentB(props) {
  return (
  <div>
{/* ComponentC-{props.username} */}
{/* <ComponentC username={props.username}/> */}
<ComponentC/>
  </div>
  )
}

export default ComponentB;
