import React from "react";
import styles from "./Modal.module.css";
import Card from "./Card";
import Button from "./AddUser/Button";

const Modal = (props) => {

  return (
    <div>
      <div>
        <div className={styles.backdrop}  onClick={props.errorHandle}/>
        <Card className={styles.modal}>
          <header className={styles.header}>
            <h2>{props.title}</h2>
          </header>
          <div className={styles.content}>
            <p>{props.msg}</p>
          </div>
          <footer className={styles.actions}>
            <Button onClick={props.errorHandle}>Close</Button>
          </footer>
        </Card>
      </div>
    </div>
  );
};

export default Modal;
