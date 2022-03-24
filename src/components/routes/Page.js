import React from 'react'
import {useParams } from 'react-router-dom'
function Page() {

    let params = useParams();
    console.log("sddsd" ,params)
  return <h2>Invoice: {params.pageId}</h2>;
  
}

export default Page