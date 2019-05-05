import React, {Component} from 'react'
import "./registration.sass"
import "../bottom-modals.sass"
import {closeModal, openModal} from "../../../actions";
import {compose} from "redux";
import {withService} from "../../hoc/with-service";
import connect from "react-redux/es/connect/connect";

class RegistrationContainer extends Component {

    state = {
        error: false,
        success: false,
    };

    checkInput = () => {

    }

    onSubmit = (e) => {
        e.preventDefault();
        const email = document.getElementById("registration-input-email").value;
        const username = document.getElementById("registration-input-username").value;
        const phone = document.getElementById("registration-input-phone").value;
        const password = document.getElementById("registration-input-password").value;
        const repeat = document.getElementById("registration-input-repeat-password").value;
        if(password != repeat) {
            this.setState({
                error: "Passwords do not match"
            });
            return;
        }
        const body = {
            username: username,
            email: email,
            phone: phone,
            password: password,
        }
        this.props.service.postRegisterNewUser(body)
            .then((data) => {
                this.setState({
                    error: false,
                    success: true,
                })
            })
            .catch((error) => {
                this.setState({
                    error: error.message
                });
            })
    };

    render() {
        const { closeModal, openModal } = this.props;
        const { error } = this.state;
        return(
            <div className = "overlay">
                <div className="form-container">
                    <form
                        onSubmit={this.onSubmit}
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
    }
}

const mapStateToProps = ({ profileList }) => {
    return {
        profileList: profileList,
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const { service } = ownProps;
    return{
        closeModal: () => dispatch(closeModal()),
        openModal: (modal) => dispatch(openModal(modal)),
    }
};

export default compose(
    withService(),
    connect(mapStateToProps, mapDispatchToProps)
)(RegistrationContainer)