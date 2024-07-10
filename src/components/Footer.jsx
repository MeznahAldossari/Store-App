import React from 'react'
import Logo from '../assets/foodly-logo.png'
import Facebook from '../assets/facebook.png'
import X from '../assets/x.png'
import Linkedin from '../assets/linkedin.png'


const Footer = () => {
  return (
    <div className='bg-[#ececec] flex flex-col items-center gap-[20px] py-[20px] px-[8vw] pt-[80px] mt-[100px] max-sm:px-[4vw] max-sm:pt-[40px] max-sm:mt-[50px] '>
        <div className="w-[100%] grid grid-cols-custom gap-[80px] max-sm:grid-cols-1 max-sm:gap-[40px]">
            <div className="flex flex-col items-start gap-[20px] max-sm:items-center">
                <img className='w-[10vw] max-sm:w-[30vw]' src={Logo} alt="" />
                {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quisquam vero nam labore eum, reprehenderit explicabo laborum facilis consequatur? Ducimus nihil exercitationem, blanditiis voluptas laborum alias deleniti ullam soluta tempora?</p> */}
                <div className="flex w-[5%] mr-[15px] gap-8 cursor-pointer max-sm:w-[8%] max-sm:justify-center">
                    <img src={X} alt="x-icon" />
                    <img src={Facebook} alt="facebook-icon" />
                    <img src={Linkedin} alt="linkedin-icon" />
                </div>
            </div>
            <div className="flex flex-col items-start gap-[20px] max-sm:items-center max-sm:text-center">
                <h2 className='text-[20px] font-bold'>COMPANY</h2>
                <ul>
                    <li className='list-none mb-[10px] cursor-pointer hover:text-[#da6129]'>About us</li>
                    <li className='list-none mb-[10px] cursor-pointer hover:text-[#da6129]'> Delivery</li>
                    <li className='list-none mb-[10px] cursor-pointer hover:text-[#da6129]'>Privacy policy</li>
                </ul>
            </div>
            <div className="flex flex-col items-start gap-[20px] max-sm:items-center max-sm:text-center">
                <h2 className='text-[20px] font-bold max-sm:text-center'>GET IN TOUCH</h2>
                <ul>
                    <li className='list-none mb-[10px]'>212-234-6547</li>
                    <li className='list-none mb-[10px]'>contact@foodly.com</li>
                </ul>
            </div>
        </div>
        <hr className='w-[100%] h-[2px] my-5 bg-[#797979] border-none max-sm:my-3' />
        <p className="footer-copy max-sm:text-sm">Cpoyright 2024 © Foodly.com - All Right Reserved.</p>
    </div>
)
}

export default Footer