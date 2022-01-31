import React from 'react'
import data from './data'


function Assignment() {
  return (
    <div>
        {
            data.map((currData)=>{
                return(
                    <>
                       <h1>{currData.heading}</h1>
                       {
                           currData.companies.map((brand)=>{
                               return  <li>{brand}</li>
                           })
                       }
                    </>
                )
            }) 
        }
       
    </div>
  )
}

export default Assignment
