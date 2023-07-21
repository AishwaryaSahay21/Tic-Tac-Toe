import React from 'react'

export default function Square(props) {
  return (
    <div onClick={props.onClick} className='square'>
      {/* <h3>X</h3> */}
      <h3>{props.value}</h3> 
    </div>
  )
}
