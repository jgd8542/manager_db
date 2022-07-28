import {setState, useState, useEffect} from 'react'

export default function ManagerDBView({searchResults}) {
  const results = Object.values(searchResults)
  if(results[1]){
    var emp_name = Object.values(results[0])
  }else{
    emp_name = [""]
  }
  if(results[2]){
    var emp_role = Object.values(results[1]) 
  }else{
    emp_role = [""]
  }
  if(results.length  > 2){
    var emp_efis = Object.values(results[2])
  }else{
    emp_efis = [""]
  }
  if(results.length  > 3){
    var emp_district = Object.values(results[3])
  }else{
    emp_district = [""]
  }
 
 
  return (

    <div className="h-[36rem] max-h-[36rem] p-2 w-[44rem] rounded bg-[#70AA9B]">
      <div className="text-white text-2xl pb-2">Retrieved Information:</div>
     
    <div className="bg-white text-black rounded w-128 max-w-128 h-[32rem] pt-8 ">


    

      <div className="grid grid-cols-4 max-h-[28rem] overflow-auto">
        <div className="ml-4 w-80 ">
          <span className="font-bold">Name</span>
      {emp_name.map(empname => {
              return (
                <div>
                {empname}
                </div>
              )
              
      })}
      </div>
      <div className="ml-20">
      <span className="font-bold">EFIS</span>
      {emp_efis.map(efis => {
              return (
                <div>
                {efis}
                </div>
              )
              
      })}
      </div>
      <div className="ml-14">
      <span className="font-bold">Role</span>
      {emp_role.map(role => {
              return (
                <div>
                {role}
                </div>
              )
              
      })}
      </div>
      <div className="ml-12">
      <span className="font-bold mb-4">District</span>
      {emp_district.map(district => {
              return (
                <div>
                {district}
                </div>
              )
              
      })}
      </div>
      </div>


          



     
  
    </div>

    <div className="text-center p-6">
      <button className="bg-yellow-500 hover:bg-yellow-700 text-white px-4 rounded m-2 w-auto h-10" onClick={submitEdits}>Submit Edits</button>
    </div>

    </div>

  )
}


const submitEdits = () => {
  // Do stuff on button click
  console.log("Submit Edits button clicked.")
  
  // if(this.value == "Dashboard"){
  //     console.log(this)
  // }
}