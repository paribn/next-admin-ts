import React from "react";
import styles from "./AuthTitle.module.scss";

type AuthDescriberProps = {
  title: string;
  subtitle: string;
  icon: any;
};

export default function AuthTitle({
  title,
  subtitle,
  icon: Icon,
}: AuthDescriberProps) {
  return (
    <div className={styles.desc}>
      {Icon && <Icon />}

      <h1 className={styles.title}>{title}</h1>
      <p className={styles.subtitle}>{subtitle}</p>
    </div>
  );
}
