import React, {Component} from 'react'
import {
    closeModal,
    openModal,
    addCurrentUser} from "../actions";
import {compose} from "redux";
import {withService} from "../components/hoc/with-service";
import {connect} from "react-redux";
import Login from "../components/modals/login";

class LoginContainer extends Component {

    state = {
        error: false,
        success: false,
    };

    onSubmit = (e) => {
        e.preventDefault();
        const email = document.getElementById("sign-in-email").value;
        const password = document.getElementById("sign-in-password").value;
        this.props.service.getUser( email, password )
            .then((data) => {
                this.props.addCurrentUser(data);
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

const mapDispatchToProps = {
    addCurrentUser,
    closeModal,
    openModal
};

export default compose(
    withService(),
    connect(mapStateToProps, mapDispatchToProps)
)(LoginContainer)