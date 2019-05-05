import React, {Component} from 'react'
import "./login.sass"
import "../bottom-modals.sass"
import {closeModal, fetchProfile, openModal} from "../../../actions";
import {compose} from "redux";
import {withService} from "../../hoc/with-service";
import connect from "react-redux/es/connect/connect";
import Success from "../success";

class LoginContainer extends Component {

    state = {
        error: null,
    };

    onSubmit = (e) => {
        e.preventDefault();
        const email = document.getElementById("sign-in-email").value;
        const password = document.getElementById("sign-in-password").value;
        this.props.fetchProfile(email, password)
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        const { error } = this.props.profileList;
        if (prevState.error != error){
            this.setState({error})
        }
    }

    render() {
        const { closeModal, openModal, profileList } = this.props;
        const { error } = this.state;
        return(
            <Login onSubmit={this.onSubmit}
                   openModal={(modal) => openModal(modal)}
                   profileList={profileList}
                   error={error}
                   closeModal={closeModal}/>
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
        fetchProfile: ( email, password ) => fetchProfile(service.getUser(email, password), dispatch )
    }
};

export default compose(
    withService(),
    connect(mapStateToProps, mapDispatchToProps)
)(LoginContainer)


const Login = ({onSubmit, closeModal, openModal, profileList, error}) => {
    console.log(profileList)
    const {profile, loading, isLogin} = profileList;

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
                            required/>
                        <input
                            type="password"
                            id={"sign-in-password"}
                            className={"input"}
                            placeholder={"Password..."}
                            defaultValue={"123456"}
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
}