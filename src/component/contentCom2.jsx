import ContentComII from "../image/ContentComII.svg";

const ContentCom2 = () => {
    return (
        <div className="m-auto h-[301.4px] w-[1002.34px] mt-[30px] mb-[33.41px]">
            <div className="flex justify-between w-full h-full">
                <div className="flex w-[433px] justify-center">
                    <img src={ContentComII} alt="" />
                </div>
                <div className="w-[594.1px] h-[301px] justify-start mt-[20px]">
                    <h1 className="text-2xl font-semibold">The unseen of spending three<br /> years at Pixelgrade</h1>
                    <p className="text-[9.7px] mt-[15px] mb-[27px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
                    <a href="https://github.com/Eclair2199/Reactjs_Tailwindcss.git" target='_blank' className="py-[14px] px-[38px] text-white bg-goodgreen hover:bg-bestgreen rounded font-medium text-xs">Learn More</a>
                </div>
            </div>
        </div>
    );
}

export default ContentCom2;