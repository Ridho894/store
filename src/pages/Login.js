import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { MailIcon, LockClosedIcon } from "@heroicons/react/outline";
function Login(props) {
    const history = useHistory()
    const [Email] = useState('');
    const [Password] = useState('')
    // const [error, setError] = useState(null);
    // const [loading, setLoading] = useState(false);

    function login() {
        if (Email == 'ridho' && Password == '123') {
            alert('anda adalah admin ')
            history.push('/Home')
        } else if (Email == '' && Password == '') {
            // alert("Masukkan Email dan Password")
            history.push('/')
        } else { alert("maaf anda tidak bisa masuk" + Email) }
    }
    const handleLogin = () => {
        props.history.push('/Home');
    }
    return (
        <div className={'bg-gray-700 h-screen justify-center items-center flex'}>
            <form className={'bg-gray-800 text-white rounded-xl shadow-inner'}>
                <div className={'flex flex-col items-center pt-5'}>
                    <img alt={'logo'} className={'rounded-full'} src="https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png" width={100} height={100} />
                </div>
                <div className={'h-72 p-9'}>
                    <label className={'block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4'}>
                        Email<MailIcon className={'w-6 h-6 absolute mt-2 ml-2'} />
                        <input className={"bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-8 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-white-500"} id="inline-full-name" type="text" />
                    </label>
                    <label className={'block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4'}>
                        Password<LockClosedIcon className={'w-6 h-6 absolute mt-2 ml-2'} />
                        <input className={"bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-8 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-white-500"} id="inline-full-name" type="password" />
                    </label>
                    <div className={'flex justify-center'}>
                        <button className={'bg-white text-gray-800 px-5 rounded mt-8'} type={'submit'} onClick={login}>LOGIN</button>
                    </div>
                    <div className={'bg-white text-gray-800 text-center rounded mt-8 w-1/2 flex justify-center'}>
                        <button onClick={() => history.push('/Home')}>Langsung Masuk</button>
                    </div>
                </div>
            </form>

        </div>
    )
}
export default Login;