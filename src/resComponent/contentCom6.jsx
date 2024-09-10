import ImgCom6_1 from '../image/ImgCom6_1.svg'
import ImgCom6_2 from '../image/ImgCom6_2.svg'
import ImgCom6_3 from '../image/ImgCom6_3.svg'

const ContentCom6 = () => {
    return (
        <div className="m-auto mb-[61px] w-[1002.34px] h-[354.51px] flex flex-col items-center justify-center">
            {/* <div className="w-full h-full flex items-center justify-center"> */}
            <div className="h-[87.57px] w-[772.64px] mb-[11.4px] flex flex-col justify-center">
                <h1 className="flex justify-center font-semibold text-[25.06px] mb-[5.57px]">Caring is the new marketing</h1>
                <div className="flex justify-center">
                    <p className="text-center font-normal text-[11.14px] w-[437.13px] ">The Nextcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​</p>
                </div>
            </div>
            <div className="flex justify-around w-full mt-[11.14px]">
                <div className="h-[255.8px] w-[256.15px] flex flex-col ">
                    <div className="w-[256.15px] h-[199.08px] mb-[-66.82px]">
                        <img src={ImgCom6_1} alt="" />
                    </div>
                    <div className="ml-[17px] w-[220.65px] h-[123.55px] flex flex-col justify-center bg-silver drop-shadow-md rounded-lg">
                        <p className="font-semibold text-[13.92px] text-center mb-[11.14px]">Creating Streamlined Safeguarding Processes with OneRen</p>
                        <a href="" className="flex justify-center font-semibold text-[13.92px] text-goodgreen hover:text-bestgreen">Readmore →</a>
                    </div>
                </div>
                <div className="h-[255.8px] w-[256.15px] flex flex-col">
                    <div className="w-[256.15px] h-[199.08px] mb-[-66.82px]">
                        <img src={ImgCom6_2} alt="" />
                    </div>
                    <div className="ml-[17px] w-[220.65px] h-[123.55px] flex flex-col justify-center bg-silver drop-shadow-md rounded-lg">
                        <p className="font-semibold text-[13.92px] text-center mb-[11.14px]">What are your safeguarding responsibilities and how can you manage them?</p>
                        <a href="" className="flex justify-center font-semibold text-[13.92px] text-goodgreen hover:text-bestgreen">Readmore →</a>
                    </div>
                </div>
                <div className="h-[255.8px] w-[256.15px] flex flex-col">
                    <div className="w-[256.15px] h-[199.08px] mb-[-66.82px]">
                        <img src={ImgCom6_3} alt="" />
                    </div>
                    <div className="ml-[17px] w-[220.65px] h-[123.55px] flex flex-col justify-center bg-silver drop-shadow-md rounded-lg">
                        <p className="font-semibold text-[13.92px] text-center mb-[11.14px]">What are your safeguarding responsibilities and how can you manage them?</p>
                        <a href="" className="flex justify-center font-semibold text-[13.92px] text-goodgreen hover:text-bestgreen">Readmore →</a>
                    </div>
                </div>
            </div>
            {/* </div> */}
        </div>
    );
}

export default ContentCom6;