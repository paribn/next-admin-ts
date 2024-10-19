"use client";
import React from "react";
import Button from "@/components/shared/auth/Button/Button";
import styles from "@/components/pages/auth/auth.module.scss";
import AuthTitle from "@/components/shared/auth/AuthTitle/AuthTitle";
import { SuccessIcon } from "@/assets/images/auth/auth.vector";
import GoBack from "@/components/shared/auth/GoBack/GoBack";

const PasswordSuccess = () => {
  const login = async (event: React.FormEvent): Promise<void> => {
    event.preventDefault();
  };

  return (
    <div>
      <AuthTitle
        title="Password reset"
        subtitle="Your password has been successfully reset. Click below to log in magically."
        icon={SuccessIcon}
      />
      <form className={styles.form} onSubmit={login}>
        <div className={styles.form_btn}>
          <Button text="Continue" />
        </div>
        <GoBack />
      </form>
    </div>
  );
};

export default PasswordSuccess;
