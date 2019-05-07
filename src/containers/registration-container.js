import React, {Component} from 'react'
import {closeModal, openModal} from "../actions";
import {compose} from "redux";
import {withService} from "../components/hoc/with-service";
import {connect} from "react-redux";
import Registration from "../components/modals/registration";

class RegistrationContainer extends Component {

    state = {
        error: false,
        success: false,
    };

    onSubmit = (e) => {
        e.preventDefault();
        const email = document.getElementById("registration-input-email").value;
        const username = document.getElementById("registration-input-username").value;
        const phone = document.getElementById("registration-input-phone").value;
        const password = document.getElementById("registration-input-password").value;
        const repeat = document.getElementById("registration-input-repeat-password").value;
        if(password !== repeat) {
            this.setState({
                error: "Passwords do not match"
            });
            return;
        };
        const body = {
            username: username,
            email: email,
            phone: phone,
            password: password,
        };
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
        const { closeModal, openModal, profileList:profile } = this.props;
        const { error, success } = this.state;
        return(
            <Registration
                onSubmit={this.onSubmit}
                error={error}
                success={success}
                closeModal={closeModal}
                openModal={openModal}
                username={profile.username}
            />
        )
    }
}

const mapStateToProps = ({ profileList }) => {
    return {
        profileList: profileList,
    }
};

const mapDispatchToProps = {
    closeModal,
    openModal
};

export default compose(
    withService(),
    connect(mapStateToProps, mapDispatchToProps)
)(RegistrationContainer)
