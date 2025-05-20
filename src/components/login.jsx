import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSliec";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

const Login = () => {
    const [emailId, setEmailId] = useState("kundan12@gmail.com");
    const [password, setPassword] = useState("Kundan12@12");
    //Redux data store (by dispatch hook)
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleLogin = async () => {
        try {
            const res = await axios.post(BASE_URL+"/login", {
                emailId,
                password
            },
                { withCredentials: true })//save token in application cookies
            dispatch(addUser(res.data));
            return navigate("/feed")
        } catch (error) {
            console.log("ERROR:", error.message)
        }
    }
    return (
        <div className="flex justify-center my-10">
            <div className="card bg-base-300 w-96 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title justify-center">Login</h2>
                    <div>
                        <label className="form-control w-full max-w-xs ">
                            <div className="label my-2">
                                <span className="label-text">Email ID</span>
                            </div>
                            <input type="text"
                                value={emailId} className="input input-bordered w-full max-w-xs"
                                onChange={(e) => setEmailId(e.target.value)} />
                        </label>
                        <label className="form-control w-full max-w-xs ">
                            <div className="label py-4">
                                <span className="label-text">Password</span>
                            </div>
                            <input type="text"
                                value={password}
                                className="input input-bordered w-full max-w-xs"
                                onChange={(e) => setPassword(e.target.value)} />
                        </label>
                    </div>
                    <div className="card-actions justify-center m-3">
                        <button className="btn btn-primary" onClick={handleLogin}>Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;