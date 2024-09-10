import { useState } from "react";


const FormComponent = () => {

    const [username,setUserName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [repassword,setRePassword] = useState('')

    const [errorusername,setErrorUserName]  = useState('')
    const [erroremail,setErrorEmail]  = useState('')
    const [errorpassword,setErrorPassword]  = useState('')
    const [errorrepassword,setErrorRePassword]  = useState('')

    const [usernameColor,setUserNameColor] = useState('')
    const [emailColor,setEmailColor] = useState('')
    const [passwordColor,setPasswordColor] = useState('')
    const [repasswordColor,setRePasswordColor] = useState('')

    const validateForm = (e) => {
        e.preventDefault()
        if(username.length > 8){
            setErrorUserName('')
            setUserNameColor('skyblue')
        }
        else{
            setErrorUserName('Username require')
            setUserNameColor('red')
        }
        
        if(email.includes("@")){
            setErrorEmail('')
            setEmailColor('skyblue')
        }
        else{
            setErrorEmail('Email input wrong')
            setEmailColor('red')
        }

        if (/[A-Z]/.test(password) && /[0-9]/.test(password) && /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password) && password.length>8){
            setErrorPassword('')
            setPasswordColor('skyblue')
        }
        else{
            setErrorPassword('Password require upper letter,number,special letter and password length more than 8')
            setPasswordColor('red')
        }

        if((password == repassword) && (password.length>0)){
            setErrorRePassword('')
            setRePasswordColor('skyblue')
        }
        else{
            setErrorRePassword('Confirm your password')
            setRePasswordColor('red')
        }
    }

    return (
        <div className="flex justify-center items-center h-screen bg-white">
            <div className="border-none shadow-lg border-black w-[300px] px-5 py-5 rounded-md">
                <form action="" onSubmit={validateForm}>
                    <h1 className="font-semibold text-[30px]">Sign up</h1>
                    <div className=" flex flex-col">
                        <label htmlFor="">Username</label>
                        <input type="text" value={username} onChange={(e)=>setUserName(e.target.value)} style={{borderColor:usernameColor}} className={`border-${{usernameColor}} border-2 border-black rounded-md py-1 px-2`} /> {/*onChange เมื่อใส่ข้อความใดๆ state จะเปลี่ยน*/}
                        <small style={{color:usernameColor}}className="">{errorusername}</small> {/*เรียกใช้งาน state*/}
                    </div>
                    <div className=" flex flex-col">
                        <label htmlFor="">Email</label>
                        <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} style={{borderColor:emailColor}}className="border-2 border-black rounded-md py-1 px-2" />
                        <small style={{color:emailColor}}>{erroremail}</small>
                    </div>
                    <div className=" flex flex-col">
                        <label htmlFor="">Password</label>
                        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} style={{borderColor:passwordColor}} className="border-2 border-black rounded-md py-1 px-2" />
                        <small style={{color:passwordColor}}>{errorpassword}</small>
                    </div>
                    <div className=" flex flex-col">
                        <label htmlFor="">Confirm Password</label>
                        <input type="password" value={repassword} onChange={(e)=>setRePassword(e.target.value)} style={{borderColor:repasswordColor}} className="border-2 border-black rounded-md py-1 px-2" />
                        <small style={{color:repasswordColor}}>{errorrepassword}</small>
                    </div>
                    <button className="outline bg-black hover:bg-white hover:text-black hover:outline-black text-white rounded-md py-2 px-7 mt-4 w-full ">Confirm</button>
                </form>
            </div>
        </div>
    );
}

export default FormComponent;