import React, { useState } from "react";
import Nav from '../navbar'
import Footer from '../footer'
import { useLocation } from "react-router-dom";
import gpay from '../../assets/icons/gpay.png'
import paypal from '../../assets/icons/paypal.png'
import paytm from '../../assets/icons/paytm.png'
import phonepe from '../../assets/icons/phonepe.png'

function ShippingForm(props) {
    const location = useLocation();
    const {data} = location.state || {};
    const {img,color,product_name,rate,discount,isdeliveryfree,delivery_date,isreturn,return_duration,isCOD,description} = data;
    const totalprice = rate;
    const [isvisible, setIsVisible] = useState(true);
    

    const handleCheckOut = () =>{

    }

    const showmore = () =>{
        setIsVisible(!isvisible);
    }

  return (
    <>
    <Nav/>
    <h1 className="p-5 text-white text-3xl text-center font-bold">Your Order</h1>
    <section className="min-h-fit p-6 flex flex-col md:flex-row gap-6 border-y-2 border-white">
        
      {/* Left Section: Cart Items */}
      <div className="form h-fit flex-1 px-6 pt-6 pb-30 rounded-xl shadow">
        <h2 className="text-xl font-bold mb-4">MY BAG</h2>
        <p className="text-sm text-gray-500 mb-4">
          Items are reserved for 60 minutes
        </p>

        {/* Cart Item 1 */}
        <div className="flex items-start gap-4 border-b pb-4 mb-4">
          <img
            src={img}
            alt={product_name}
            className="w-24 rounded"
          />
          <div className="flex-1">
            <h3 className="font-medium">${rate}</h3>
            <p className="text-sm text-gray-600">{product_name}</p>
            <p className="text-sm text-gray-600">{description}</p>
            <p className="text-sm text-gray-600">Discount: {discount}%</p>
            <div className="text-sm text-gray-500 my-2">{color} · UK 11.5 · Qty 1</div>
          </div>

          <div className="flex-1">
            <h3 className="font-medium">Delivery</h3>
            <p className="text-sm text-gray-600">is free:{isdeliveryfree}</p>
            <p className="text-sm text-gray-600">Deliver Date:{delivery_date}</p>
            <p className="text-sm text-gray-600">Return: {isreturn}</p>
            <p className="text-sm text-gray-500">Return Duration: {return_duration}</p>
            <p className="text-sm text-gray-500">Cash on Delivery: {isCOD}</p>
          </div>
          <button className="text-xl text-red-400">×</button>
        </div>

        

        {/* Subtotal */}
        <div className="text-right mt-6 font-medium">SUB-TOTAL: {totalprice}</div>

        {/* Delivery Info */}
        <div>
              <label className="block font-medium mb-1">Choose your courier:</label>
              <div className="space-y-2 ">
                <label className="flex items-center border rounded-xl p-4 cursor-pointer hover:bg-green-50 hover:border-green-500 ">
                  <input type="radio" name="courier" className= "mr-4" defaultChecked />
                  <div>
                    <div className="font-semibold">FedEx Int.</div>
                    <div className="text-sm text-gray-500">Arrives in 2-3 Days</div>
                  </div>
                </label>
                <label className="hover:bg-green-50 hover:border-green-500  flex items-center border rounded-xl p-4 cursor-pointer">
                  <input type="radio" name="courier" className="mr-4" />
                  <div className="font-semibold">DHL Express</div>
                </label>
              </div>
            </div>

        <div className="mt-6 space-y-4">
          <div className="flex items-start gap-3">
            <span>🚚</span>
            <div>
              <div className="font-semibold">FREE* STANDARD DELIVERY</div>
              <p className="text-sm text-gray-500">
                Faster delivery options available to most countries.{" "}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span>↩️</span>
            <div>
              <div className="font-semibold">EASY RETURNS</div>
              <p className="text-sm text-gray-500">
                Send it back within 28 days of receiving your order.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section: Summary */}
      <div className="form w-full md:w-1/3 bg-white p-6 rounded-xl shadow h-fit">
        <h2 className="text-lg font-semibold mb-4">TOTAL</h2>
        <div className="flex justify-between mb-2">
          <span>Sub-total</span>
          <span>{totalprice}</span>
        </div>

        <div className="flex justify-between mb-4">
          <span>Delivery</span>
          <select className="text-sm border p-1 rounded">
            <option>Standard Delivery (Free)</option>
          </select>
        </div>

        <button className="w-full bg-green-600 text-white py-3 rounded-lg mb-4 hover:bg-green-700" onClick={handleCheckOut}>
          CHECKOUT
        </button>
        <div className="text-sm text-gray-600 mb-2">WE ACCEPT:</div>
        <div className="flex gap-2 mb-4">
          <img src="https://img.icons8.com/color/48/000000/visa.png" className="w-8" />
          <img src="https://img.icons8.com/color/48/000000/mastercard.png" className="w-8" />
          <img src="https://img.icons8.com/color/48/000000/amex.png" className="w-8" />
          <img src="https://img.icons8.com/color/48/000000/paypal.png" className="w-8" />
        </div>
        <p onClick={showmore} className="cursor-pointer">Show More Options</p>
        {
            isvisible && 
            <div className="h-fit w-full px-20 py-10 space-y-3">
                <img src={gpay} alt="G-pay" className="h-10 w-full rounded-2xl" />
                <img src={paytm} alt="Paytm" className="h-10 w-full rounded-2xl"/>
                <img src={paypal} alt="Paypal" className="h-10 w-full rounded-2xl"/>
                <img src={phonepe} alt="PhonePay" className="h-10 w-full rounded-2xl"/>
                <button className="text-center w-full h-10 rounded-2xl bg-indigo-800 text-white">Cash on Delivery</button>
                {/* <button><img src={gpay} alt="G-pay" className="h-10 w-full" /></button>
                <button><img src={paytm} alt="Paytm" /></button>
                <button><img src={paypal} alt="Paypal" /></button>
                <button><img src={phonepe} alt="PhonePay" /></button>
                <button>Cash on Delivery</button> */}
            </div>
        }

        <p className="text-sm text-gray-600">
          Got a discount code? Add it in the next step.
        </p>
      </div>
    </section>
    
    <Footer/>
    </>
  );
}

export default ShippingForm;


// /*
// <div className="backg_teal min-h-screen bg-gray-100 p-6">
//       <div className="max-w-6xl mx-auto">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {/* Left Panel */}
//           <div className="form md:col-span-2 p-6 rounded-xl shadow space-y-4">
//             <div className="grid grid-cols-2 gap-4">
//               <div>
//                 <label className="block font-medium mb-1">Ship to:</label>
//                 <select className="ele w-full border p-2 rounded">
//                   <option>Hong Kong</option>
//                   <option>Singapore</option>
//                   <option>USA</option>
//                 </select>
//               </div>
//               <div>
//                 <label className="block font-medium mb-1">Category:</label>
//                 <select className="ele w-full border p-2 rounded">
//                   <option>Furniture</option>
//                   <option>Electronics</option>
//                 </select>
//               </div>
//             </div>

//             <div className="grid grid-cols-2 gap-4">
//               <div>
//                 <label className="ele sblock font-medium mb-1">Retail Price:</label>
//                 <div className="flex gap-2">
//                   <input type="number" defaultValue="302.99" className="flex-1 border p-2 rounded" />
//                   <select className="ele w-24 border p-2 rounded">
//                     <option>USD</option>
//                     <option>IDR</option>
//                   </select>
//                 </div>
//               </div>
//               <div>
//                 <label className="block font-medium mb-1">Taxes & Duties paid by:</label>
//                 <div className="flex gap-2">
//                   <button className="bg-green-100 border border-green-600 text-green-700 px-4 py-2 rounded">Sender</button>
//                   <button className="border px-4 py-2 rounded">Receiver</button>
//                 </div>
//               </div>
//             </div>

//             <div className="grid grid-cols-2 gap-4">
//               <div>
//                 <label className="block font-medium mb-1">Package Dimensions (cm):</label>
//                 <div className="flex gap-2">
//                   <input defaultValue="75" className="border p-2 rounded w-full" />
//                   <input defaultValue="43" className="border p-2 rounded w-full" />
//                   <input defaultValue="67" className="border p-2 rounded w-full" />
//                 </div>
//               </div>
//               <div>
//                 <label className="block font-medium mb-1">Package Weight (kg):</label>
//                 <input defaultValue="3.6" className="w-full border p-2 rounded" />
//               </div>
//             </div>

            
//           </div>

//           {/* Right Panel */}
//           <div className="space-y-4">
//             {/* Summary Card */}
//             <div className="form bg-amber-500 p-6 rounded-xl shadow">
//               <h3 className="font-semibold text-lg mb-4">Summary</h3>
//               <div className="flex justify-between mb-2">
//                 <span>Shipping</span>
//                 <span>$59.99</span>
//               </div>
//               <div className="flex justify-between mb-2">
//                 <span>Tax</span>
//                 <span>$5.00</span>
//               </div>
//               <div className="flex justify-between mb-4">
//                 <span>Insurance</span>
//                 <span>$12.00</span>
//               </div>
//               <div className="text-green-600 text-sm cursor-pointer mb-2">Have a discount code?</div>
//               <div className="text-green-600 text-xl font-bold">$76.99</div>
//             </div>

//             {/* Info Box */}
//             <div className="bg-white p-6 rounded-xl shadow space-y-3">
//               <div>
//                 <div className="font-semibold">Streaming box shipping information</div>
//                 <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur.</p>
//               </div>
//               <div>
//                 <div className="font-semibold">Faulty products, money back guarantee</div>
//                 <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur.</p>
//               </div>
//             </div>

//             {/* Button */}
//             <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 text-lg rounded-xl">
//               Next Step →
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
    
//     */