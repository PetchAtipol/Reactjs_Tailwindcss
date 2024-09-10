import LogoCon1 from '../image/LogoCon1.svg'
import LogoCon2 from '../image/LogoCon2.svg'
import LogoCon3 from '../image/LogoCon3.svg'
import LogoCon4 from '../image/LogoCon4.svg'
import LogoCon5 from '../image/LogoCon5.svg'
import LogoCon6 from '../image/LogoCon6.svg'
import LogoCon7 from '../image/LogoCon7.svg'
import IconCon1 from '../image/IconCon1.svg'
import IconCon2 from '../image/IconCon2.svg'
import IconCon3 from '../image/IconCon3.svg'

const ContentCom = () => {
    return ( 
        <div className="m-auto h-[474px] w-[1002px] flex items-center justify-center mt-[30px]">
            <div className="flex-col ">
                <div className="flex-col justify-center w-[1002px] mb-[5px]">
                    <div className=" mb-[11.14px]">
                        <h1 className="flex justify-center items-center font-semibold text-[25.6px]">Our Clients</h1>
                        <p className="flex justify-center items-center font-normal text-[11.7px]">We have been working with some Fortune 500+ clients</p>
                    </div>
                    <div className="flex justify-around py-[49.1px]">
                        <img src={LogoCon1} alt="" className=" object-fill"/>
                        <img src={LogoCon2} alt="" />
                        <img src={LogoCon3} alt="" />
                        <img src={LogoCon4} alt="" />
                        <img src={LogoCon5} alt="" />
                        <img src={LogoCon6} alt="" />
                        <img src={LogoCon7} alt="" />
                    </div>
                </div>
                <div className="flex-col justify-center w-[1002px] h-[292px]">
                    <div className="้h-[85px]">
                        <h1 className="flex justify-center items-center text-center font-semibold text-[25.06px]">Manage your entire community <br/> in a single system</h1>
                        <p className="flex justify-center items-center font-normal text-[11.4px]">Who is Nextcent suitable for?</p>
                    </div>
                    <div className="flex justify-around mt-[22px] mb-[25px]">
                        <div className=" w-[208px] h-[182px] ">
                            <img src={IconCon1} alt="" className="flex justify-center items-center w-full h-[39px]"/>
                            <h1 className="text-center font-bold text-[19.14px] mt-[5px]">Membership <br/> Organisations</h1>
                            <p className="text-center font-normal text-[9.7px] mt-[5px]">Our membership management software provides full automation of membership renewals and payments</p>
                        </div>
                        <div className="w-[208px] h-[182px]">
                            <img src={IconCon2} alt="" className="flex justify-center items-center w-full h-[39px]" />
                            <h1 className="text-center font-bold text-[19.14px] mt-[5px]">National <br/> Associations</h1>
                            <p className="text-center font-normal text-[9.7px] mt-[5px]">Our membership management software provides full automation of membership renewals and payments</p>
                        </div>
                        <div className="w-[208px] h-[182px]">
                            <img src={IconCon3} alt="" className="flex justify-center items-center w-full h-[39px]"/>
                            <h1 className="text-center font-bold text-[19.14px] mt-[5px]">Clubs And <br/> Groups</h1>
                            <p className="text-center font-normal text-[9.7px] mt-[5px]">Our membership management software provides full automation of membership renewals and payments</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default ContentCom;