import React from 'react'

const UserItem = (props) => {
  return (
    <li >{props.details.username} ({props.details.age} years old)</li>
  )
}

export default UserItem