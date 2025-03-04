import React from 'react'
import { useParams } from "react-router-dom";

export default function Products({ objProps }) {
    console.log('useParams()',useParams());
    const param = useParams();
    
  return (
   <>
    <h2>Hi {objProps?.pageName||''}</h2>
    <h3>category: {param?.category||''}</h3>
    <h3>product_name: {param?.product_name||''}</h3> 
   </>
  )
}