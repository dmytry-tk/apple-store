import Success from "../success";
import React from 'react'
import "./login.sass"
import "../bottom-modals.sass"

const Login = ({onSubmit, closeModal, openModal, profileList, error}) => {
    const {profile, isLogin} = profileList;

    return(
        <div className = "overlay">
            <div className="form-container">
                {
                    isLogin ? <Success desc={`Hi, ${profile.username}. You have successfully logged in`} />  : ""
                }
                <form className={"form"} onSubmit={onSubmit}>
                    <div className="form-header">
                        Login account
                        <div className="close" onClick={() => closeModal()}>
                            <i className="fas fa-times"></i>
                        </div>
                    </div>
                    <div className="form-body">
                        <input
                            type="email"
                            id={"sign-in-email"}
                            className={"input"}
                            placeholder="Email..."
                            defaultValue={"dmytro.tkachuk@nure.ua"}
                            autoComplete={"username"}
                            required/>
                        <input
                            type="password"
                            id={"sign-in-password"}
                            className={"input"}
                            placeholder={"Password..."}
                            defaultValue={"123456"}
                            autoComplete={"current-password"}
                            required/>
                        <div className={"form-error"}>{error ? error : ""}</div>
                    </div>
                    <div className="form-footer">
                        <button type="submit" className={"button"}>
                            Sign in
                        </button>
                        <div className="registration">
                            Don't have account?
                            <span onClick={() => openModal("registration")} >Sign up</span>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default Login