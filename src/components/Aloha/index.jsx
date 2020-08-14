import React from "react";
import styles from './Aloha.module.css';

function Aloha(props) {
    const { name } = props;
    return <h1 className={styles.list}>Hello {name}</h1>;
}

export default Aloha;
