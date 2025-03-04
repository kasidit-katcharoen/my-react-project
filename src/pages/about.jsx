import React from 'react'

export default function About({ objProps }) {
  return (
   <>
    <h2>Hi {objProps?.pageName||''}</h2>
   </>
  )
}