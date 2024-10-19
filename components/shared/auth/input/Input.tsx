import React from "react";
import styles from "./input.module.scss";
export default function Input({ title, ...props }: any) {
  return (
    <label className={styles.label}>
      <span>{title}</span>
      <input {...props} />
    </label>
  );
}
