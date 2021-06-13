import React from 'react'

const Block = (props) => {
  return (
    <div className='ui segment'>
      <h1>props.section</h1>
      <p>props.description</p>
      <button class='ui primary button'>listen</button>
      <button class='ui button'>download</button>
    </div>
  )
}

export default Block
