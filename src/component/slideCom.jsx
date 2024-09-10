import Head1 from '../image/Head1.svg'

const SlideCom = () => {
    return (
        <div className="m-auto h-[416px] w-[1002px] bg-silver flex items-center rounded-lg">
            <div className="flex items-center justify-around w-full h-full">
                <div className="w-[457px] h-[192.9] justify-start items-center">
                    <h1 className="text-5xl font-semibold">Lessons and insights <br /> from 8 years</h1>
                    <p className="text-xs mt-[15px] mb-[17px]">Where to grow your business as a photographer: site or social media?</p>
                    <a href="https://github.com/Eclair2199/Reactjs_Tailwindcss.git" target='_blank' className="py-[14px] px-[38px]  text-white
                          bg-goodgreen hover:bg-bestgreen rounded font-medium text-xs">Register →</a>
                </div>
                <div className="">
                    <img src={Head1} alt="KK" className="h-[283.3px] w-[272.16px] "></img>
                </div>
            </div>
        </div>
    );
}

export default SlideCom;