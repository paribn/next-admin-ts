import Image from "next/image";
import React from "react";
import auth_background from "@/assets/images/auth/Background.png";
import styles from "./AuthLayout.module.scss";

import { LoginIcon } from "@/assets/images/auth/auth.vector";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.auth}>
      <Image
        className={styles.auth__background}
        src={auth_background}
        alt="backgroud"
      />
      <div className={styles.auth__content}>{children}</div>
    </div>
  );
}
