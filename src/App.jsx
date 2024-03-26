import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FaUser } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FaMobileScreen } from "react-icons/fa6";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { BsWallet2 } from "react-icons/bs";
import { CiCreditCard2 } from "react-icons/ci";
import { FaMapMarkerAlt } from "react-icons/fa";
import { GoDownload } from "react-icons/go";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { FaRegQuestionCircle } from "react-icons/fa";
import { GrShieldSecurity } from "react-icons/gr";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { IoHomeOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { MdWindow } from "react-icons/md";
import { AiFillLock } from "react-icons/ai";
import { FaArrowRotateRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='container'>
        <div className="row d-flex justify-content-center mt-2 p-3">
          <div className="col-md-6 col-lg-6 col-sm-12 ">
            <div className='user'>
              <div className='user-topsec  p-4'>
                <div className='user_1 d-flex justify-content-between '>
                  <FaUser className='user-icon' />
                  <div >
                    <p className='text-white'>User : member_9116669221</p>
                    <p className='mb-5 text-white'>id : 1006</p>
                  </div>
                  <FaBell className='bell-icon' />
                </div>
                <p className='text-white '>Mobile :  <span><a href='' className=''> 8756687857</a></span></p>
                <p className='text-white '>Available balance: &#8377; 1000.00  </p>
                <div className='top-btn'>
                  <Button variant="success" className=''>Recharge</Button>
                  <Button variant="light" className=' py-1 btn_light'>Change Nick Name</Button>
                </div>


              </div>

              <div className='mt-2 px-3'>
                <div className='d-flex justify-content-start align-items-center  gap-4'>
                  <FaMobileScreen className='icon-mid' />
                  <h6 className='mt-1 ms-2'>Bonus Record</h6>
                </div>
                <hr></hr>

                <div className='d-flex justify-content-start align-items-center  gap-4'>
                  <HiOutlineSpeakerphone className='icon-mid' />

                  <h6 className='mt-1 ms-2'>Promotion</h6>
                </div>
                <hr></hr>
                <div className='d-flex justify-content-start align-items-center  gap-4'>
                  <BsWallet2 className='icon-mid' />

                  <Form.Select >
                    <option >Wallet</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>

                </div>
                <hr></hr>
                <div className='d-flex justify-content-start align-items-center  gap-4'>

                  <CiCreditCard2 className='icon-mid' />

                  <h6 className='mt-1 ms-2'>Bank Card</h6>
                </div>
                <hr></hr>

                <div className='d-flex justify-content-start align-items-center  gap-4'>

                  <FaMapMarkerAlt className='icon-mid' />
                  <h6 className='mt-1 ms-2'>Addreess</h6>
                </div>
                <hr></hr>
                <div className='d-flex justify-content-start align-items-center  gap-3'>

                  <GrShieldSecurity className='icon-mid' />

                  <Form.Select >
                    <option className='ms-4'>Account Security</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </div>
                <hr></hr>
                <div className='d-flex justify-content-start align-items-center  gap-3'>
                  <GoDownload className='icon-mid' />


                  <Form.Select >
                    <option >App Dowmload</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </div>
                <hr></hr>
                <div className='d-flex justify-content-start align-items-center  gap-4'>
                  <BiMessageRoundedDetail className='icon-mid' />

                  <h6 className='mt-1 ms-1'>Complants & Suggestions</h6>
                </div>
                <hr></hr>
                <div className='d-flex justify-content-start align-items-center  gap-3'>
                  <FaRegQuestionCircle className='icon-mid' />


                  <Form.Select >
                    <option >About</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </div>
                <hr></hr>

                <div className='d-flex justify-content-center align-items-center'>
                  <Button>Lagout</Button>
                </div>






              </div>


              <nav className='pe-4 mt-5 m-auto pt-3 pb-3'>
                <ul className='d-flex justify-content-between '>
                  <li className='text-center'>
                    <Link to="/" ><IoHomeOutline /><br />Home</Link>
                  
                    </li>
                  <li className='text-center'>
                    <Link to="/">
                    <IoSearchOutline /><br />Search
                    </Link>
                   
                    </li>
                  <li className='text-center'>
                    <Link to="/">
                    <MdWindow /><br />win
                    </Link>
                
                    </li>
                  <li className='text-center'>
                    <Link to="/">
                    <FaUser /><br />My
                    </Link>
                     
                     </li>
                </ul>
              </nav>

              <div className='user-bottom d-flex  justify-content-between align-items-center'>
                <h6>A<span className='b-span'>A</span></h6>
                <div>
                  <AiFillLock />
                  <span>allgamess.com</span>
                </div>
                <FaArrowRotateRight />
              </div>


            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
