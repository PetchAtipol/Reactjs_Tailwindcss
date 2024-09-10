import contentCom4 from '../image/contentCom4.svg'

const ContentCom4 = () => {
    return (
        <div className="flex m-auto w-[1002.34px] h-[301.68px] justify-around items-center mb-[33.41px]">
            <div className="flex w-[444px] h-full items-center justify-center">
                <img src={contentCom4} alt="" />
            </div>
            <div className="w-[561px] h-full mt-[75px]">
                <h1 className="font-semibold text-[25.06px] flex-none">How to design your site footer like<br/>we did</h1>
                <p className=" font-thin text-[9.74px] mb-[22.7px] ">Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
                <a href="https://github.com/Eclair2199/Reactjs_Tailwindcss.git" target='_blank' className="py-[14px] px-[38px] text-white bg-goodgreen hover:bg-bestgreen rounded font-medium text-xs">Learn More</a>
            </div>
        </div>
    );
}

export default ContentCom4;