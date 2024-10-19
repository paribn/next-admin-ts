"use client";
import AuthTitle from "@/components/shared/auth/AuthTitle/AuthTitle";
import React from "react";
import { ForgotIcon } from "@/assets/images/auth/auth.vector";
import Input from "@/components/shared/auth/input/Input";
import styles from "@/components/pages/auth/auth.module.scss";
import Button from "@/components/shared/auth/Button/Button";
import GoBack from "@/components/shared/auth/GoBack/GoBack";

const Forgot = () => {
  const login = async (event: React.FormEvent): Promise<void> => {
    event.preventDefault();
  };

  return (
    <div>
      <AuthTitle
        title="Forgot password?"
        subtitle="No worries, we’ll send you reset instructions."
        icon={ForgotIcon}
      />
      <form className={styles.form} onSubmit={login}>
        <Input
          title={"Email"}
          placeholder={"Enter your email"}
          type={"email"}
          required
        />

        <div className={styles.form_btn}>
          <Button text="Reset password" />
        </div>
        <GoBack />
      </form>
    </div>
  );
};

export default Forgot;
