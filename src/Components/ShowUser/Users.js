import React from 'react'
import Card from '../Card'

import styles from './UserList.module.css'
import UserItem from './UserItem'

const Users = (props) => {
  return (
    <Card className={styles.users}>
        <ul>
          {props.details.map((e)=>{
            return <UserItem key={e.id} details={e}/>
          })}
        </ul>
    </Card>
  )
}

export default Users