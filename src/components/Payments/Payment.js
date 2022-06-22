export const Payment = async(p_title, amount, address, quantity) => {

    console.log("--"+p_title+"--"+amount+"--"+address+"--"+quantity+"<--");
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
//                 alert("Your Payment ID = "+response.razorpay_payment_id+ " please take the screenshot");
                window.open("https://wa.me/+918980129712?text=Your Payment ID = "+response.razorpay_payment_id);

                // alert("Your Order ID = "+response.razorpay_order_id);
                // alert(response.razorpay_signature)
    
                // if(response.razorpay_payment_id){
                //   // do backend stuff
                //   alert("do backend stuff...payment done")
                // }
            }
        }
    
        const rzp1 = new window.Razorpay(options);
        rzp1.open()

}
