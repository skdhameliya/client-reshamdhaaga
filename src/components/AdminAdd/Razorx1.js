import React from 'react'

const Razorx1 = () => {

    
  const myFun = async() => {

    let credentials = "rzp_test_qU5IYtZnCb9tUR:VsxzvoL7uzoCOevj9iChMe14"
    let auth = { 
                  "Authorization" : `Basic ${credentials}` 
                }

    let options = {
      "account_number":"2323230044616236",
      "amount":100,
      "currency":"INR",
      "mode":"NEFT",
      "purpose":"refund",
      "fund_account":{
          "account_type":"bank_account",
          "bank_account":{
              "name":"Gaurav Kumar",
              "ifsc":"HDFC0001234",
              "account_number":"1121431121541121"
          },
          "contact":{
              "name":"Gaurav Kumar",
              "email":"gaurav.kumar@example.com",
              "contact":"9876543210",
              "type":"employee",
              "reference_id":"Acme Contact ID 12345",
              "notes":{
                  "notes_key_1":"Tea, Earl Grey, Hot",
                  "notes_key_2":"Tea, Earl Grey… decaf."
              }
          }
      },
      "queue_if_low_balance":true,
      "reference_id":"Acme Transaction ID 12345",
      "narration":"Acme Corp Fund Transfer",
      "notes":{
          "notes_key_1":"Beam me up Scotty",
          "notes_key_2":"Engage"
      }
  }

    fetch("https://api.razorpay.com/v1/payouts", {
        options
    })
    .then(response => response.json())
    .then(json => console.log(json));
  }



  return (
    <>
        <div>razorx1</div>
        <button onClick={()=>myFun()}>click</button>
    </>
  )
}

export default Razorx1