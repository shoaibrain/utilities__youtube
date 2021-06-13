import React from 'react'

const Description = (props) => {
  return (
    <div className='ui segment'>
      <h1>
        `Playlist length: ${props.hr} hr {props.min} min ${props.sex} sec`
      </h1>

      <h2>Channel description</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, odit
        commodi dolor accusamus labore explicabo consectetur consequuntur
        accusantium obcaecati illo.
      </p>
    </div>
  )
}

export default Description
