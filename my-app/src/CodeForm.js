import React from 'react'
import './CodeChallengeII.css';

const CodeForm = ( {reqType , setReqType} ) => {
  return (
    <div>
        <form onSubmit={ (e) => { e.preventDefault() } }>
            <button className={ reqType==='users'? 'selected' : '' } type='button' onClick={ () => { setReqType('users') } }>Users</button>
            <button className={ reqType==='posts'? 'selected' : '' } type='button' onClick={ () => { setReqType('posts') } }>Posts</button>
            <button className={ reqType==='comments'? 'selected' : '' } type='button' onClick={ () => { setReqType('comments') } }>Comments</button>
        </form>
    </div>
  )
}

export default CodeForm