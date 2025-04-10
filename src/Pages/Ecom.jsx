import React, { useState } from 'react'
import Nav from '../Components/navbar'
import Lable from '../Components/label'
import Footer from '../Components/footer'
import { Link } from 'react-router-dom'
import logo6 from '../assets/jpg/logo6.jpg'
import cart from '../assets/png/cart.png'
import pharma1 from '../assets/jpg/pharma1.jpg'
import add from '../assets/svg/icons8-plus.svg'
import minus from '../assets/png/minus.png'
import genuine from '../assets/jpg/genuine.jpg'
import doorstep from '../assets/jpg/doorsteps.jpg'
import Firstdiv from '../Components/Ecom/firstdiv'
import Ecom_card from '../Components/Ecom/ecom_card'
import Featuredbrand from '../Components/Ecom/featuredbrand'

function Ecom() {
  const [showAnimation, setshowAnimation] = useState(true);

  setTimeout(() => {
    setshowAnimation(false);

  }, 3600);

  const [isVisible, setIsVisible] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  const [isVisible4, setIsVisible4] = useState(false);
  const [isVisible5, setIsVisible5] = useState(false);

  function showmore() {
    setIsVisible(!isVisible);
  }
  function showmore2() {
    setIsVisible2(!isVisible2);
  }
  function showmore3() {
    setIsVisible3(!isVisible3);
  }
  function showmore4() {
    setIsVisible4(!isVisible4);
  }
  function showmore5() {
    setIsVisible5(!isVisible5);
  }

  return (
    <>
      <Nav />
      <section>
        {/*<div className='w-screen p-5'>
          <img src={pharma1} alt="" className='w-full rounded-t-2xl'/>
        </div> */}

        <div className='bg-lime-500 rounded-t-4xl m-5 h-fit'>
          <div className='h-fit px-20 py-10'>
            <p className={`text-[280px] text-center font-bold animate-bounce ${showAnimation ? '' : 'animate-none'}`}>Pharmacy</p>
            <p className='w-1/4'>ONLINE MEDICINE DELIVERY IS THE PROCESS OF ORDERING MEDICATONS THROUGH A WEBSITE OR APP AND HAVING THEM DELIVERED TO YOUR DOORSTEP.</p>
            <div className='grid grid-cols-2 w-fit mt-30' >
              <p><img src={genuine} alt="" className='h-10 w-10 p-1 rounded-[100%] bg-white' /> <span>100% Genuine Medicines</span></p>
              <p><img src={doorstep} alt="" className='h-10 w-10 rounded-[100%] bg-white' /> <span>Delivery to your doorsteps</span></p>
            </div>
          </div>

          <div className='backg_teal rounded-t-4xl h-fit'>
            <div className='bg-none grid grid-cols-6 p-14'>
              <Firstdiv name="Bone & Joint Care" img={cart} />
              <Firstdiv name="Diabetes Care" img={cart} />
              <Firstdiv name="Kidney Care" img={cart} />
              <Firstdiv name="Liver Care" img={cart} />
              <Firstdiv name="Respiratory Care" img={cart} />
              <Firstdiv name="Eye Care" img={cart} />
            </div>

            <div className='px-24 py-10'>
              <div className='flex justify-between'>
                <h1 className='divheadingblack text-4xl font-bold w-1/4'>Todays best deals for you!</h1>
                {/* <Link to='/showmore' className='divheadingblack font-bold'>SEE ALL PRODUCTS &rarr;</Link> */}
              </div>

              <div className='grid grid-cols-4 mt-5'>
                <Ecom_card title="Healthcare" desc="Nitrile diposable gloves 100" price="89" newprice="78" />
                <Ecom_card title="Healthcare" desc="Nitrile diposable gloves 100" price="89" newprice="78" />
                <Ecom_card title="Healthcare" desc="Nitrile diposable gloves 100" price="89" newprice="78" />
                <Ecom_card title="Healthcare" desc="Nitrile diposable gloves 100" price="89" newprice="78" />
              </div>

              <div className='grid grid-cols-2 gap-5 py-20'>
                <div className='bg-orange-200 rounded-4xl p-8'>
                  <img src={logo6} alt="" className='w-full h-52' />
                  <div className='inline-flex pt-8'>
                    <img src={logo6} alt="" className='h-12 rounded-4xl' />
                    <Link className='p-3 rounded-3xl bg-amber-950 text-orange-200 text-center'>Order Via Prescription</Link>
                    <Link className='text-center border-b-2 my-3 mx-5'>How to order?</Link>
                  </div>
                </div>
                <div className='bg-orange-200 rounded-4xl p-8'>
                  <div className='w-full h-52 content-center'>
                    <h3 className='text-3xl font-bold pb-5 w-1/3'>Don't have a Perscription?</h3>
                    <p className='font-bold w-1/2'>Upload only .jpg .png  or .pdf files size limit 15MB</p>
                  </div>
                  <div className='inline-flex pt-8'>
                    <Link className='p-3 rounded-3xl bg-amber-950 text-orange-200 text-center'>Order Via Prescription</Link>
                    <img src={logo6} alt="" className='h-12 rounded-4xl' />
                  </div>
                </div>
              </div>

              <h1 className='text-4xl font-bold w-1/4 divheadingblack'>Featured Brands</h1>
              
              <div className='grid grid-cols-7'>
                <Featuredbrand img={pharma1} brand="Cipla" />
                <Featuredbrand img={pharma1} brand="Cipla" />
                <Featuredbrand img={pharma1} brand="Cipla" />
                <Featuredbrand img={pharma1} brand="Cipla" />
                <Featuredbrand img={pharma1} brand="Cipla" />
                <Featuredbrand img={pharma1} brand="Cipla" />
                <Featuredbrand img={pharma1} brand="Cipla" />
              </div>

              <div className='flex justify-between'>
                <h1 className='text-4xl font-bold w-1/4 divheadingblack'>Trending Products for You!</h1>
                {/* <Link to='/showmore' className='divheadingblack font-bold'>SEE ALL PRODUCTS &rarr;</Link> */}
              </div>

              <div className='grid grid-cols-4 mt-5'>
                <Ecom_card title="Healthcare" desc="Nitrile diposable gloves 100" price="89" newprice="78" />
                <Ecom_card title="Healthcare" desc="Nitrile diposable gloves 100" price="89" newprice="78" />
                <Ecom_card title="Healthcare" desc="Nitrile diposable gloves 100" price="89" newprice="78" />
                <Ecom_card title="Healthcare" desc="Nitrile diposable gloves 100" price="89" newprice="78" />
                <Ecom_card title="Healthcare" desc="Nitrile diposable gloves 100" price="89" newprice="78" />
                <Ecom_card title="Healthcare" desc="Nitrile diposable gloves 100" price="89" newprice="78" />
                <Ecom_card title="Healthcare" desc="Nitrile diposable gloves 100" price="89" newprice="78" />
                <Ecom_card title="Healthcare" desc="Nitrile diposable gloves 100" price="89" newprice="78" />
              </div>

              <div className='grid grid-cols-3 gap-10 p-6'>
                <div className='p-5 bg-orange-300 rounded-4xl '>
                  <h1 className='font-bold text-2xl w-2/3 pb-4'>Maternal Health and Comfort</h1>
                  <Link to="/" className=''>BROWSE ALL &rarr;</Link>
                  <p className='pt-10 '><span className='font-bold text-2xl'>5%</span><br />Cashback</p>
                </div>

                <div className='p-5 bg-cyan-300 rounded-4xl '>
                  <h1 className='font-bold text-2xl w-2/3 pb-4'>Headache and Migraine Solutions</h1>
                  <Link to="/" className=''>BROWSE ALL &rarr;</Link>
                  <p className='pt-10 '>Flat <br /><span className='font-bold text-2xl'>10%<sup>Off</sup></span></p>
                </div>

                <div className='p-5 bg-amber-300 rounded-4xl '>
                  <h1 className='font-bold text-2xl w-1/2 pb-4'>Cold and Flu Relief</h1>
                  <Link to="/" className=''>BROWSE ALL &rarr;</Link>
                  <p className='pt-10 '>Flat <br /><span className='font-bold text-2xl'>10%<sup>Off</sup></span></p>
                </div>
              </div>

              <div className='flex justify-between pt-10 divheadingblack'>
                <h1 className='text-4xl font-bold w-1/4'>Baby Food Collecton</h1>
                <Link to='/showmore' className='font-bold'>SEE ALL PRODUCTS &rarr;</Link>
              </div>

              <div className='grid grid-cols-4 mt-5'>
                <Ecom_card title="Healthcare" desc="Nitrile diposable gloves 100" price="89" newprice="78" />
                <Ecom_card title="Healthcare" desc="Nitrile diposable gloves 100" price="89" newprice="78" />
                <Ecom_card title="Healthcare" desc="Nitrile diposable gloves 100" price="89" newprice="78" />
                <Ecom_card title="Healthcare" desc="Nitrile diposable gloves 100" price="89" newprice="78" />
              </div>

              <div className='w-full my-10 bg-cyan-200 rounded-t-4xl pt-6'>
                <h2 className='text-center font-semibold'>Cereal Honey Flavour</h2>

                <div className='inline-flex px-14 w-full py-10'>
                  <div className='px-20 w-1/2 font-semibold'>
                    <h2 className='text-5xl font-bold'>Cereal Healthy Food</h2>
                    <p className='py-5'>cereal food offers many benefits that make it a healthy and nutritious breakfast choice</p>
                    <ul className='list-disc w-fit'>
                      <li className='border-t-2 border-cyan-500 py-4'>Provides essential nutrients</li>
                      <li className='border-y-2 border-cyan-500 py-4'>High in fiber</li>
                      <li className='border-b-2 border-cyan-500 py-4'>Low in fat</li>
                    </ul>
                    <div className='inline-flex pt-8'>
                      <Link className='py-3 px-6 rounded-3xl bg-black text-cyan-200 text-center'>Buy now from $50.00</Link>
                      <img src={cart} alt="" className='h-12 rounded-4xl p-3 bg-white' />
                    </div>
                  </div>
                  <div className='px-10 w-1/2'>
                    <img src={logo6} alt="" className='h-full w-full' />
                  </div>
                </div>

                <h2 className='text-center font-semibold bg-amber-200 py-5 rounded-t-4xl'>Chocolate Flavour</h2>
                <div className='bg-amber-300'>
                  <h2 className='text-center font-semibold bg-orange-300 py-5 rounded-t-4xl'>Oats Flavour</h2>
                </div>
              </div>

              <div className='grid grid-cols-2 gap-5 py-20'>
                <div className='bg-sky-200 rounded-4xl p-8'>
                  <div className='w-full h-52 content-center'>
                    <h3 className='text-3xl font-bold pb-5 w-2/5'>Enjoy Free Delivery within 2 Hours</h3>
                  </div>
                  <div className='inline-flex pt-8'>
                    <Link className='py-3 px-6 rounded-3xl bg-white text-black text-center'>Order Now</Link>
                    <img src={logo6} alt="" className='h-12 rounded-4xl' />
                  </div>
                </div>
                <div className='bg-blue-200 rounded-4xl p-8'>
                  <div className='w-full h-52 content-center'>
                    <h3 className='text-3xl font-bold pb-5 w-2/3'>You can enjoy a 5% discount using our health card</h3>
                  </div>
                  <div className='inline-flex pt-8'>
                    <Link className='py-3 px-6 rounded-3xl bg-white text-black text-center'>Get Health Card</Link>
                    <img src={logo6} alt="" className='h-12 rounded-4xl' />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className='form px-50 py-6'>
          <h3 className='text-center text-4xl font-bold'>Got Questions?</h3>
          <div className='bg-gray-200 p-6 my-3 rounded-2xl flex justify-between' onClick={() => { showmore() }}>
            <h3 className='text-lg font-semibold'>How do I start online consulation with doctors on Medicare?</h3>
            <div onClick={showmore} className='w-fit h-fit'>
              {isVisible ? <img src={minus} alt="" className='self-center h-8 w-8 rounded-[100%]' /> : <img src={add} alt="" className='self-center h-8 w-8 rounded-[100%]' />}
            </div>
          </div>
          {isVisible && <div className='bg-green-200 rounded-4xl p-5'>This div is now visible.</div>}

          <div className='bg-gray-200 p-6 my-3 rounded-2xl flex justify-between'>
            <h3 className='text-lg font-semibold'>Are your online doctors qualified?</h3>
            <div onClick={showmore2} className='w-fit h-fit'>
              {isVisible2 ? <img src={minus} alt="" className='self-center h-8 w-8 rounded-[100%]' /> : <img src={add} alt="" className='self-center h-8 w-8 rounded-[100%]' />}
            </div>
          </div>
          {isVisible2 && <div className='bg-green-200 rounded-4xl p-5'>hello vishesh</div>}

          <div className='bg-gray-200 p-6 my-3 rounded-2xl flex justify-between'>
            <h3 className='text-lg font-semibold'>Is online doctor consultation safe and secured on Medicare?</h3>
            <div onClick={showmore3} className='w-fit h-fit'>
              {isVisible3 ? <img src={minus} alt="" className='self-center h-8 w-8 rounded-[100%]' /> : <img src={add} alt="" className='self-center h-8 w-8 rounded-[100%]' />}
            </div>
          </div>
          {isVisible3 && <div className='bg-green-200 rounded-4xl p-5'>This div is now visible.</div>}

          <div className='bg-gray-200 p-6 my-3 rounded-2xl flex justify-between'>
            <h3 className='text-lg font-semibold'>What happens if I don't get a response from a doctor?</h3>
            <div onClick={showmore4} className='w-fit h-fit'>
              {isVisible4 ? <img src={minus} alt="" className='self-center h-8 w-8 rounded-[100%]' /> : <img src={add} alt="" className='self-center h-8 w-8 rounded-[100%]' />}
            </div>
          </div>
          {isVisible4 && <div className='bg-green-200 rounded-4xl p-5'>This div is now visible.</div>}

          <div className='bg-gray-200 p-6 my-3 rounded-2xl flex justify-between'>
            <h3 className='text-lg font-semibold'>Can I do a free online doctor consultation on Medicare?</h3>
            <div onClick={showmore5} className='w-fit h-fit'>
              {isVisible5 ? <img src={minus} alt="" className='self-center h-8 w-8 rounded-[100%]' /> : <img src={add} alt="" className='self-center h-8 w-8 rounded-[100%]' />}
            </div>
          </div>
          {isVisible5 && <div className='bg-green-200 rounded-4xl p-5'>This div is now visible.</div>}

        </div>
      </section>

      <section>
        <div className='px-24 py-10 font-semibold form'>
          <table className='w-full'>
            <caption class="caption-bottom">
              Table 3.1: chart for each items.
            </caption>
            <thead>
              <tr className='bg-sky-400'>
                <th>S.No</th>
                <th>PRODUCT</th>
                <th>CUST.RATE</th>
                <th>BUY</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>SEMI FOWLER MANUAL AVS PANNELS HOSPITAL BED WITH WHEEL CLOPS RAILING, MATRESS.</td>
                <td>3000</td>
                <td className='text-center p-2 '><Link className='bg-sky-400 font-bolder text-sm text-white rounded-2xl py-1 px-2'>Buy</Link></td>
              </tr>
              <tr>
                <td>2</td>
                <td>FULL FOWLER MANUAL AVS PANNELS HOSPITAL BED WITH WHEEL CLOPS RAILING, MATRESS.</td>
                <td>3000</td>
                <td className='text-center p-2 '><Link className='bg-sky-400 font-bolder text-sm text-white rounded-2xl py-1 px-2'>Buy</Link></td>
              </tr>
              <tr>
                <td>3</td>
                <td>SEMI FOWLER MANUAL AVS PANNELS HOSPITAL BED WITH WHEEL CLOPS RAILING, MATRESS.</td>
                <td>3000</td>
                <td className='text-center p-2 '><Link className='bg-sky-400 font-bolder text-sm text-white rounded-2xl py-1 px-2'>Buy</Link></td>
              </tr>
              <tr>
                <td>4</td>
                <td> FIVE FUNCTION FOWLER MANUAL AVS PANNELS HOSPITAL BED WITH WHEEL CLOPS RAILING, MATRESS.</td>
                <td>3000</td>
                <td className='text-center p-2 '><Link className='bg-sky-400 font-bolder text-sm text-white rounded-2xl py-1 px-2'>Buy</Link></td>
              </tr>
              <tr>
                <td>5</td>
                <td> SEMI FOWLER ELECTRIC AVS PANNELS HOSPITAL BED WITH WHEEL CLOPS RAILING, MATRESS.</td>
                <td>3000</td>
                <td className='text-center p-2 '><Link className='bg-sky-400 font-bolder text-sm text-white rounded-2xl py-1 px-2'>Buy</Link></td>
              </tr>
              <tr>
                <td>6</td>
                <td>FULL FOWLER ELECTRIC AVS PANNELS HOSPITAL BED WITH WHEEL CLOPS RAILING, MATRESS</td>
                <td>3000</td>
                <td className='text-center p-2 '><Link className='bg-sky-400 font-bolder text-sm text-white rounded-2xl py-1 px-2'>Buy</Link></td>
              </tr>
              <tr>
                <td>7</td>
                <td>THREE FUNCTION ELECTRIC AVS PANNELS HOSPITAL BED WITH WHEEL CLOPS RAILING, MATRESS.</td>
                <td>3000</td>
                <td className='text-center p-2 '><Link className='bg-sky-400 font-bolder text-sm text-white rounded-2xl py-1 px-2'>Buy</Link></td>
              </tr>
              <tr>
                <td>8</td>
                <td> FIVE FUNCTION ELECTRIC AVS PANNELS HOSPITAL BED WITH WHEEL AVS RAILING, MATRESS.</td>
                <td>3000</td>
                <td className='text-center p-2 '><Link className='bg-sky-400 font-bolder text-sm text-white rounded-2xl py-1 px-2'>Buy</Link></td>
              </tr>
              <tr>
                <td>9</td>
                <td> MOTORISED RECLINER BED WITH MATTERS.</td>
                <td>3000</td>
                <td className='text-center p-2 '><Link className='bg-sky-400 font-bolder text-sm text-white rounded-2xl py-1 px-2'>Buy</Link></td>
              </tr>
              <tr>
                <td>10</td>
                <td>5 LTR. OXYGEN CONCENTRATOR ON RENT</td>
                <td>3000</td>
                <td className='text-center p-2 '><Link className='bg-sky-400 font-bolder text-sm text-white rounded-2xl py-1 px-2'>Buy</Link></td>
              </tr>
              <tr>
                <td>11</td>
                <td>BIPAP MACHINE ON RENT</td>
                <td>3000</td>
                <td className='text-center p-2 '><Link className='bg-sky-400 font-bolder text-sm text-white rounded-2xl py-1 px-2'>Buy</Link></td>
              </tr>
              <tr>
                <td>12</td>
                <td>DVT PUMP ON RENT</td>
                <td>3000</td>
                <td className='text-center p-2 '><Link className='bg-sky-400 font-bolder text-sm text-white rounded-2xl py-1 px-2'>Buy</Link></td>
              </tr>
              <tr>
                <td>13</td>
                <td> SYRINGE PUMP ON RENT</td>
                <td>3000</td>
                <td className='text-center p-2 '><Link className='bg-sky-400 font-bolder text-sm text-white rounded-2xl py-1 px-2'>Buy</Link></td>
              </tr>
              <tr>
                <td>14</td>
                <td>5 PARA PATIENT MONITOR ON RENT</td>
                <td>3000</td>
                <td className='text-center p-2 '><Link className='bg-sky-400 font-bolder text-sm text-white rounded-2xl py-1 px-2'>Buy</Link></td>
              </tr>
              <tr>
                <td>15</td>
                <td>SUCTION MACHINE ON RENT</td>
                <td>3000</td>
                <td className='text-center p-2 '><Link className='bg-sky-400 font-bolder text-sm text-white rounded-2xl py-1 px-2'>Buy</Link></td>
              </tr>
              <tr>
                <td>16</td>
                <td>WHEEL CHAIR ON RENT</td>
                <td>3000</td>
                <td className='text-center p-2 '><Link className='bg-sky-400 font-bolder text-sm text-white rounded-2xl py-1 px-2'>Buy</Link></td>
              </tr>
              <tr>
                <td>17</td>
                <td>PATIENT STRETCHER ON RENT</td>
                <td>3000</td>
                <td className='text-center p-2 '><Link className='bg-sky-400 font-bolder text-sm text-white rounded-2xl py-1 px-2'>Buy</Link></td>
              </tr>
              <tr>
                <td>18</td>
                <td>WALKER ON RENT</td>
                <td>3000</td>
                <td className='text-center p-2 '><Link className='bg-sky-400 font-bolder text-sm text-white rounded-2xl py-1 px-2'>Buy</Link></td>
              </tr>
              <tr>
                <td>19</td>
                <td>BABY WARMER ON RENT</td>
                <td>3000</td>
                <td className='text-center p-2 '><Link className='bg-sky-400 font-bolder text-sm text-white rounded-2xl py-1 px-2'>Buy</Link></td>
              </tr>
              <tr>
                <td>20</td>
                <td>10 LTR. OXYGEN CONCENTRATOR ON RENT FOR ONE MONTH</td>
                <td>3000</td>
                <td className='text-center p-2 '><Link className='bg-sky-400 font-bolder text-sm text-white rounded-2xl py-1 px-2'>Buy</Link></td>
              </tr>
              <tr>
                <td>20</td>
                <td>DOUBLE SURFACE PHOTOTHERAPY MACHINE ON RENT</td>
                <td>3000</td>
                <td className='text-center p-2 '><Link className='bg-sky-400 font-bolder text-sm text-white rounded-2xl py-1 px-2'>Buy</Link></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <Lable />
      <Footer />
    </>
  )
}

export default Ecom