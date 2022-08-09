import {React, useState, useEffect} from 'react'
import AuditHandler from './AuditHandler'


const UpdateHandler = (update) =>{

    //'data' ARRAY MAP
    // emp_name: data[0][0],
    // emp_role: data[0][1],
    // emp_efis: data[0][2],
    // emp_email: data[0][3],

    // new_name: data[1][0],
    // new_email: data[1][1]


    //'audit' ARRAY MAP
    // change_type = audit[0]
    // changed_by_number = audit[1]
    // old_name = audit[2]
    // new_name = audit[3]
    // old_email = audit[4]
    // new_email = audit[5]
    // role = audit[6]
    // efis = audit[7]



    var audit = []

    //change type
    if((data[0][0] != data[1][0]) && (data[0][3] != data[1][1])){
      audit.push("Name/Email")
    }else if((data[0][0] != data[1][0]) && (data[0][3] == data[1][1])){
      audit.push("Name")
    }else if((data[0][0] == data[1][0]) && (data[0][3] != data[1][1])){
      audit.push("Email")
    }else{
      audit.push(null)
    }
    audit.push(user.userid) //employee number
    audit.push(data[0][0]) //old name
    audit.push(data[1][0]) //new name
    audit.push(data[0][3]) //old email
    audit.push(data[1][1]) //new email
    audit.push(data[0][1]) //role
    audit.push(data[0][2]) //efis


    fetch("/ManagerDB/api/update/", {
        method: "POST",
        headers: {
            'Content-Type':'application/json',
            'Accept':'application/json'
        },
        body: JSON.stringify(update) 
      }).then((res) => {
        res.json().then((data) => {
          console.log("Update Response: " + data)
          AuditHandler(audit)
          fetch("/ManagerDB/api/managers/", {
            method: "GET",
          })
         
        });
      });

   
}

export default UpdateHandler;