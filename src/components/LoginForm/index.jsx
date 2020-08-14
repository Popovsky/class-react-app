import React, { Component } from "react";
import styles from "./LoginForm.module.css";
import classNames from "classnames";

class LoginForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userEmail: "",
            userPass: "",
            isPassValid: null,
        };
    };

    handleChange = ({ target: { name, value } }) => {
        this.setState({
            isPassValid: !value.includes(" "),
        });

        this.setState({
            [name]: value,
        });
    };

    handleSubmit = e => {
        e.preventDefault();
    };

    render() {
        const { userEmail, userPass, isPassValid } = this.state;
        const passClasses = classNames(styles.input, {
            [styles.valid]: isPassValid,
        });
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    placeholder="email"
                    type="email"
                    name="userEmail"
                    id=""
                    value={userEmail}
                    onChange={this.handleChange}
                />
                <input
                    className={passClasses}
                    placeholder="password"
                    type="password"
                    name="userPass"
                    id=""
                    value={userPass}
                    onChange={this.handleChange}
                />
                <button type="submit">submit</button>
            </form>
        );
    };
};
export default LoginForm;
