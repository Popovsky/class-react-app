import React, { Component } from "react";
import PropTypes from "prop-types";

class ScreenSize extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: window.innerWidth,
            height: window.innerHeight,
        };
    }
    handleResize = () => {
        this.setState({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    };
    componentWillUnmount() {
        window.removeEventListener("resize", this.handleResize);
    }
    componentDidMount() {
        window.addEventListener("resize", this.handleResize);
    }
    render() {
        const { width, height } = this.state;
        return (
            <div>
                <ul>
                    <li>Width: {width}</li>
                    <li>Height: {height}</li>
                </ul>
            </div>
        );
    }
}

ScreenSize.propTypes = {};

export default ScreenSize;
