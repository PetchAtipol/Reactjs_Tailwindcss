import contentCom5 from '../image/contentCom5.svg'
import LogoCon1 from '../image/LogoCon1.svg'
import LogoCon2 from '../image/LogoCon2.svg'
import LogoCon3 from '../image/LogoCon3.svg'
import LogoCon4 from '../image/LogoCon4.svg'
import LogoCon5 from '../image/LogoCon5.svg'
import LogoCon6 from '../image/LogoCon6.svg'

const ContentCom5 = () => {
    return (
        <div className="m-auto w-[1002.34px] h-[271.47] flex justify-around bg-silver mb-[33.41px]">
            <img src={contentCom5} alt="" className="ml-[100px] mr-[54.29px] my-[22.7px]" />
            <div className="h-full my-[22.27px] mr-[100px] justify-start">
                <p className="font-thin text-[11.14px]  mb-[11.14px]">Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
                    lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus.
                    Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie
                    arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit.
                    Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget
                    lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat
                    ante feugiat eget. Quisque vulputate odio neque,
                    eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
                <p className="font-semibold text-[13.92px] text-goodgreen mb-[5.57px]">Tim Smith</p>
                <p className="font-thin text-[11.14px] mb-[22.27px]">British Dragon Boat Racing Association</p>
                <div className="flex justify-around items-center">
                    <img src={LogoCon1} alt="" />
                    <img src={LogoCon2} alt="" />
                    <img src={LogoCon3} alt="" />
                    <img src={LogoCon4} alt="" />
                    <img src={LogoCon5} alt="" />
                    <img src={LogoCon6} alt="" />
                    <a href="" className="font-semibold text-[13.92px] text-goodgreen hover:text-bestgreen">Meet all customers →</a>
                </div>
            </div>
        </div>
    );
}

export default ContentCom5;