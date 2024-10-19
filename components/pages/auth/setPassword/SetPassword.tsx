"use client";
import React from "react";
import Input from "@/components/shared/auth/input/Input";
import Button from "@/components/shared/auth/Button/Button";
import { CheckIcon, LockIcon } from "@/assets/images/auth/auth.vector";
import styles from "@/components/pages/auth/auth.module.scss";
import AuthTitle from "@/components/shared/auth/AuthTitle/AuthTitle";
import GoBack from "@/components/shared/auth/GoBack/GoBack";
import setStyle from "./setPassword.module.scss";
const SetPassword = () => {
  const login = async (event: React.FormEvent): Promise<void> => {
    event.preventDefault();
  };

  return (
    <div>
      <AuthTitle
        title="Set new password"
        subtitle="Your new password must be different to previously used passwords."
        icon={LockIcon}
      />
      <form className={styles.form} onSubmit={login}>
        <Input
          title={"Password"}
          placeholder={"••••••••"}
          type={"password"}
          required
        />
        <Input
          title={"Confirm password"}
          placeholder={"••••••••"}
          type={"password"}
          required
        />

        <div className={setStyle.form_check}>
          <span className={setStyle.check}>
            <CheckIcon />
            <p>Must be at least 8 characters</p>
          </span>
          <span className={setStyle.check}>
            <CheckIcon />
            <p>Must contain one special character</p>
          </span>
        </div>
        <div className={styles.form_btn}>
          <Button text="Reset password" />
        </div>

        <GoBack />
      </form>
    </div>
  );
};

export default SetPassword;
