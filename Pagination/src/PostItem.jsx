import React from 'react'
import style from "./postItem.module.css"
const PostItem = ({id,title}) => {
  return (
    <> 
    <div className={style.main}>
      <h1>{id}</h1>
      <p>{title}</p>
    </div>
    </>
  )
}

export default PostItem