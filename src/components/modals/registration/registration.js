import React, {Component} from 'react'
import "./registration.sass"
import "../bottom-modals.sass"
import Success from "../success";

const Registration = ({success, error, username, openModal, closeModal, onSubmit}) => {
    return(
        <div className = "overlay">
            <div className="form-container">
                {
                    success? <Success desc={`You have successfully registered. Log in to your account`} /> : ""
                }
                <form
                    onSubmit={(e) => onSubmit(e)}
                    className={"form"}>
                    <div className="form-header">
                        Registration
                        <div className="close" onClick={() => closeModal()}>
                            <i className="fas fa-times"></i>
                        </div>
                    </div>
                    <div className="form-body">
                        <input
                            type="email"
                            className={"input"}
                            id={"registration-input-email"}
                            defaultValue={"orlova@gmail.com"}
                            required
                            placeholder={"Email..."}/>
                        <input
                            type="number"
                            className={"input"}
                            id={"registration-input-phone"}
                            defaultValue={"0990948907"}
                            required
                            placeholder={"099 99 99 99"}/>
                        <input
                            type="text"
                            className={"input"}
                            id={"registration-input-username"}
                            defaultValue={"orlova"}
                            required
                            placeholder={"Username..."}/>
                        <input
                            type="password"
                            className={"input"}
                            id={"registration-input-password"}
                            defaultValue={"123456"}
                            required
                            placeholder={"Password..."}/>
                        <input
                            type="password"
                            className={"input"}
                            id={"registration-input-repeat-password"}
                            defaultValue={"123456"}
                            required
                            placeholder={"Repeat password..."}/>
                        <div className="form-error">{error}</div>
                    </div>
                    <div className="form-footer">
                        <button type="submit" className={"button"}>
                            Sign up
                        </button>
                        <div className="registration">
                            Already have account?
                            <span onClick={() => openModal("login")}>Sign in</span>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default Registration