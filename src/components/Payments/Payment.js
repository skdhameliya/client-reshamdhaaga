import './Payment.css'

export const Payment = async(p_title, amount, address, quantity) => {

    // console.log("--"+p_title+"--"+amount+"--"+address+"--"+quantity+"<--");
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
    
        const options = {
            "key": "rzp_test_kUEScWO2XntWAl", // Enter the Key ID generated from the Dashboard
            "amount": quantity * amount * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": "SKD STORE "+p_title,
            "description": p_title + ", 1 piece price=>"+amount,
            "image": "https://img.icons8.com/fluency/48/undefined/shop-location.png",
            "notes": {
              "Product Quantity & Url": "Quantity="+quantity +" ("+amount+"rs) , URL="+window.location.href,
              "Customer Address": address
            },
            "theme": {
              "color": "#3399cc"
            },
            "handler": function (response){
                if(response.razorpay_payment_id){
                  let text = "Your Payment ID = "+response.razorpay_payment_id+" please take the screenshot"
                  if(window.confirm(text) == true || window.confirm(text) == false) {
                    
                    let orderDetailUrl = " *Payment ID ->* "+response.razorpay_payment_id
                    +", *Product Name ->* "+p_title
                    +", *Quantity ->* "+quantity
                    +", *Total Amount ->* "+(amount*quantity)
                    +", *Delivery Address ->* "+address
                    +", *Product Link ->* "+window.location.href
                    +", *Thank you for shopping with us!*"

                    let str = ""
                    str += "<center><dialog id='myDialog1' class='p-5 m-3'>"
                      str += "<b>Please Save Your Payment ID : </b>"+response.razorpay_payment_id+" <br> <a class='btn btn-success mt-3' href='https://wa.me/+918980129712?text=Hi, Your Order Details : "+orderDetailUrl+"'>Send To WhatsApp</a>"
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

