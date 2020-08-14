import React from "react";
import PropTypes from "prop-types";
import styles from "./ImageWrapper.module.scss";

function ImageWrapper(props) {
    const { width, height, children } = props;
    const inlineStyles = {
        width,
        height,
    };
    return (
        <div style={inlineStyles} className={styles.wrapper}>
            {children}
        </div>
    );
}

ImageWrapper.propTypes = {
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
};

export default ImageWrapper;
