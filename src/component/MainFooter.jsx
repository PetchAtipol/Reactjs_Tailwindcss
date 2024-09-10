import Icon from '../image/Icon.svg'
import SocialIcon from '../image/Social Icons.svg'
import SocialIcon1 from '../image/Social Icons-1.svg'
import SocialIcon2 from '../image/Social Icons-2.svg'
import SocialIcon3 from '../image/Social Icons-3.svg'
import Send from '../image/send.svg'

const MainFooter = () => {
    return (
        <div className="m-auto h-[438.53px] w-[1002.34px]">
            <div className=" h-[209.31px] bg-silver flex flex-col justify-center items-center mb-[7px]">
                <h1 className="font-semibold text-[44.55px] text-center mb-[7px] mt-[-5px]">Pellentesque suscipit<br />fringilla libero eu.</h1>
                <a href="" target='_blank' className="flex justify-center py-[14px] px-[38px] text-white
                 bg-goodgreen hover:bg-bestgreen rounded font-medium text-xs">Learn More</a>
            </div>
            <div className="w-full h-[229.21px] bg-D_black flex justify-around items-center">
                <div className="w-[243.62px] h-[132.18px]">
                    <div className="flex mb-[25px]">
                        <img src={Icon} alt="" className="mr-[10px]" />
                        <h1 className="text-white font-bold text-[25px]">Ganymede</h1>
                    </div>
                    <div className="mb-[20px]">
                        <p className="text-white text-[9.74px]">Copyright © 2020 Landify UI Kit.</p>
                        <p className="text-white text-[9.74px]">All rights reserved</p>
                    </div>
                    <div className="flex justify-start">
                        <img src={SocialIcon} alt="" className="cursor-pointer" href=""/>
                        <img src={SocialIcon1} alt="" className="ml-[5px] cursor-pointer" href=""/>
                        <img src={SocialIcon2} alt="" className="ml-[5px] cursor-pointer" href=""/>
                        <img src={SocialIcon3} alt="" className="ml-[5px] cursor-pointer" href=""/>
                    </div>
                </div>
                <div className="w-[442px] h-[140.12px] flex justify-around">
                    <div className="flex flex-col w-[111.37px] h-[140.12px]">
                        <h1 className="font-semibold text-[13.92px] text-white mb-[20px]">Company</h1>
                        <a href="https://github.com/Eclair2199/Reactjs_Tailwindcss.git" target="_blank" className="text-white text-[9.74px] mb-[10px] hover:text-goodgreen">About us</a>
                        <a href="https://github.com/Eclair2199/Reactjs_Tailwindcss.git" target="_blank" className="text-white text-[9.74px] mb-[10px] hover:text-goodgreen">Blog</a>
                        <a href="https://github.com/Eclair2199/Reactjs_Tailwindcss.git" target="_blank" className="text-white text-[9.74px] mb-[10px] hover:text-goodgreen">Contact us</a>
                        <a href="https://github.com/Eclair2199/Reactjs_Tailwindcss.git" target="_blank" className="text-white text-[9.74px] mb-[10px] hover:text-goodgreen">Pricing</a>
                        <a href="https://github.com/Eclair2199/Reactjs_Tailwindcss.git" target="_blank" className="text-white text-[9.74px] hover:text-goodgreen">Testimonials</a>
                    </div>
                    <div className="flex flex-col w-[111.37px] h-[140.12px]">
                        <h1 className="font-semibold text-[13.92px] text-white mb-[20px]">Support</h1>
                        <a href="" className="text-white text-[9.74px] mb-[10px] hover:text-goodgreen">Help center</a>
                        <a href="" className="text-white text-[9.74px] mb-[10px] hover:text-goodgreen">Terms of service</a>
                        <a href="" className="text-white text-[9.74px] mb-[10px] hover:text-goodgreen">Legal</a>
                        <a href="" className="text-white text-[9.74px] mb-[10px] hover:text-goodgreen">Privacy policy</a>
                        <a href="" className="text-white text-[9.74px] hover:text-goodgreen">Status</a>
                    </div>
                    <div className="flex flex-col w-[177.5px] h-[64.55px]">
                        <h1 className="font-semibold text-[13.92px] text-white mb-[20px]">Stay up to date</h1>
                        <div className="flex">
                            <input type="text" placeholder="Your email address" className="bg-D_gray py-2 pl-2 pr-[40px] text-[9.74px] rounded-md focus:outline-none shadow-sm" />
                            <a href="" className="flex ml-[-24px]">
                                <img src={Send} alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainFooter;