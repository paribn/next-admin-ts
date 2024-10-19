import React, { ButtonHTMLAttributes } from "react";

import styles from "./buton.module.scss";

type ButtonProps = {
  text: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;
const Button = ({ text, ...props }: ButtonProps) => {
  return (
    <button className={styles.btn} {...props}>
      <span className={styles.text}>{text}</span>
    </button>
  );
};

export default Button;
