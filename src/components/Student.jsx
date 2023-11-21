import React from 'react'
import studentdata from '../modeldata/studentdata'

export default function Student(props) {
 

  return (
    <div className='classyClass'>
      <p>
{props.name}
      </p>
      <p>
{props.location}
      </p>
      <p>
{props.grade}
      </p>
    </div>
  )

}

