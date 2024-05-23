import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const SocialLogin = () => {
    const { googleLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();
    const handleGoogleLogin = () => {
        googleLogin()
            .then(res => {
                console.log(res.user)
                const userInfo = {
                    name: res.user?.displayName,
                    email: res.user?.email
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data);
                        navigate("/")
                    })
            })
    };
    return (
        <div className="p-8">
            <div className='divider'></div>
            <div>
                <button onClick={handleGoogleLogin} className="btn bg-slate-300 text-black w-full">
                    <FaGoogle className="mr-4" /> Google login
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;