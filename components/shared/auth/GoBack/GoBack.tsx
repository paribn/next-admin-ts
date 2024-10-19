import { GoBackIcon } from "@/assets/images/auth/auth.vector";
import React from "react";
import styles from "./goback.module.scss";
import Link from "next/link";

const GoBack = () => {
  return (
    <Link href={"/auth/login"} className={styles.goBackBtn}>
      <GoBackIcon />
      <span> Back to log in</span>
    </Link>
  );
};

export default GoBack;
