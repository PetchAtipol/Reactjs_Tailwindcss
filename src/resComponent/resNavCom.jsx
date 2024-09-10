import logo from '../image/Icon.svg'

const NavCom = () => {
    return (
        <div className="m-auto h-[59px] w-[1002px]">
            <div className="">
                <nav className="inline-flex items-center bg-white w-[1002px] h-[60px] py-[30px]">
                    <div className="inline-flex items-center">
                        <img src={logo} alt="picture" className="text-[11px]" />
                        <a href="" className="ml-[10px] font-bold text-secondary text-[20px] hidden sm:inline">Ganymede</a>
                    </div>
                    <div className="flex text-[11px] justify-around xl:ml-[248px] w-[355px] text-D_gray">
                        <a href="" className="text-[11.4px]">Home</a>
                        <a href="" className="text-[11.4px]">Features</a>
                        <a href="" className="text-[11.4px]">Community</a>
                        <a href="" className="text-[11.4px]">Blog</a>
                        <a href="" className="text-[11.4px]">Pricing</a>
                    </div>
                    <select className="md:hidden sm:inline ml-[15px]">
                        <option href="" className="text-[11.4px]">Home</option>
                        <option href="" className="text-[11.4px]">Features</option>
                        <option href="" className="text-[11.4px]">Community</option>
                        <option href="" className="text-[11.4px]">Blog</option>
                        <option href="" className="text-[11.4px]">Pricing</option>
                    </select>
                    <a href="https://youtu.be/o6wtDPVkKqI?si=OVfG6Gp5hk-A0_s0" target="_blank" className="text-[11px] ml-[50px] py-[14px] px-[57px]  text-white
                         bg-goodgreen hover:bg-bestgreen rounded font-bold text-xs flex jus"
                    >
                        Register Now →</a>
                </nav>
            </div>
        </div>
    );
}

export default NavCom;