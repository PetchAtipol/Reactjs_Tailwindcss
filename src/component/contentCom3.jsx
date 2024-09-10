import contentCom3_1 from '../image/contentCom3_1.svg'
import contentCom3_2 from '../image/contentCom3_2.svg'
import contentCom3_3 from '../image/contentCom3_3.svg'
import contentCom3_4 from '../image/contentCom3_4.svg'

const ContentCom3 = () => {
    return (
        <div className="m-auto flex justify-around h-[202.94px] w-[1002.34px] items-center bg-silver rounded-lg mb-[33.41px]">
            <div className="">
                <h1 className="font-semibold text-[25.06px]">Helping a local<br />business reinvent itself</h1>
                <p className="font-normal text-[11.4px]">We reached here with our hard work and dedication</p>
            </div>
            <div className="flex-col justify-items-center w-[375.88px] h-[113.84px]">
                <div className="flex justify-around">
                    <div className="flex w-[177.5px] h-[43px]">
                        <img src={contentCom3_1} alt="" className="mr-[15px]"/>
                        <div>
                            <h2 className="font-bold text-[19.49px]">2,245,341</h2>
                            <p className="font-thin text-[11.4px]">Members</p>
                        </div>
                    </div>
                    <div className="flex w-[177.5px] h-[43px]">
                        <img src={contentCom3_2} alt="" className="mr-[15px]"/>
                        <div>
                            <h2 className="font-bold text-[19.49px]">46,328</h2>
                            <p className="font-thin text-[11.4px]">Clubs</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-around mt-[27.5px]">
                    <div className="flex w-[177.5px] h-[43px]">
                        <img src={contentCom3_3} alt="" className="mr-[15px]"/>
                        <div>
                            <h2 className="font-bold text-[19.49px]">828,867</h2>
                            <p className="font-thin text-[11.4px]">Event Bookings</p>
                        </div>
                    </div>
                    <div className="flex w-[177.5px] h-[43px]">
                        <img src={contentCom3_4} alt="" className="mr-[15px]"/>
                        <div>
                            <h2 className="font-bold text-[19.49px]">1,926,436</h2>
                            <p className="font-thin text-[11.4px]">Payments</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContentCom3;