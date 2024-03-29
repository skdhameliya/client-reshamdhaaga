import './Payment.css'

export const Payment = async(p_title, amount, address, quantity) => {

    const loadRazorScript = (scriptUrl) => {
        return new Promise((resolve) => {
          const script = document.createElement("script")
          script.src = scriptUrl;
          
          script.onload = () => {
            resolve(true)
          }
          script.onerror = () => {
            resolve(false)
          }
    
          document.body.appendChild(script)
        })
    }

    const response = await loadRazorScript("https://checkout.razorpay.com/v1/checkout.js")
    
        if(!response){
          alert("Network Error...")
          return
        }

        const total_amount = quantity * amount
        const delivery_charge = 50
    
        const options = {
            // "key": "rzp_live_ZLPy9MP5mjsXHD", // Enter the Key ID generated from the Dashboard
            "key": "rzp_test_ghGuxlQix1Ks9b", // test api key
            "amount": (total_amount + delivery_charge)*100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": "Reshamdhaaga Art",
            "description": delivery_charge + " Rs delivery charge is added",
            "image": "https://i.postimg.cc/9Fb8vjm7/logo.png",
            "notes": {
              "Product Quantity & Link": "Quantity="+quantity +" ("+amount+"rs) , Link="+window.location.href,
              "Customer Address": address
            },
            "theme": {
              "color": "#F4DECB"
            },
            "handler": function (response){
                if(response.razorpay_payment_id){
                  let text = "Your Payment ID = "+response.razorpay_payment_id+" please take the screenshot"
                  if(window.confirm(text) == true || window.confirm(text) == false) {
                    
                    let orderDetailUrl = " *Payment ID ->* "+response.razorpay_payment_id
                    +", *Product Name ->* "+p_title
                    +", *Quantity ->* "+quantity
                    +", *Paid Amount ->* "+(total_amount+delivery_charge)
                    +", *Delivery Address ->* "+address
                    +", *Product Link ->* "+window.location.href

                    let str = ""
                    str += "<center><dialog id='myDialog1' class='p-5 m-3'>"
                      str += "<b>Please Save Your Payment ID : </b>"+response.razorpay_payment_id+" <br> <a class='btn btn-success mt-3' href='https://wa.me/+917016160266?text=Hi, My Order Details : "+orderDetailUrl+"'>Click Here To Send Order Details in WhatsApp</a>"
                    str += "</dialog></center>"
                    
                    window.document.getElementById("paymentDialog").innerHTML = str
                    window.document.getElementById("myDialog1").show()
                  }
                }else{
                  alert('payment failed, if money is deducted, it will be refunded within 2-3 working days')
                }
                
            }
        }
    
        const rzp1 = new window.Razorpay(options);
        rzp1.open()

}

