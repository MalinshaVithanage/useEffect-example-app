import './App.css';
import React, { useEffect, useState } from 'react';

export default function App() {
 const[resourceType, setResourceType] = useState('posts')


useEffect(() => {
 console.log('resource changed')

 return () => {
  console.log('return from resource change');
 }
}, [resourceType])

 return(
  <>
    <div>
      <button onClick={()=>setResourceType('posts')}>Posts</button>
      <button onClick={()=>setResourceType('users')}>Users</button>
      <button onClick={()=>setResourceType('comments')}>Comments</button>
    </div>
    <h1>{resourceType}</h1>
   
  </>
 )
}

