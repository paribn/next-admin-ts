"use client";
import React from "react";
import Button from "@/components/shared/auth/Button/Button";
import styles from "@/components/pages/auth/auth.module.scss";
import { CheckMailIcon } from "@/assets/images/auth/auth.vector";
import AuthTitle from "@/components/shared/auth/AuthTitle/AuthTitle";
import GoBack from "@/components/shared/auth/GoBack/GoBack";
import Redirect from "@/components/shared/auth/Redirect/Redirect";

const Success = () => {
  const login = async (event: React.FormEvent): Promise<void> => {
    event.preventDefault();
  };

  return (
    <div>
      <AuthTitle
        title="Check your email"
        subtitle="We sent a password reset link to olivia@untitledui.com"
        icon={CheckMailIcon}
      />
      <form className={styles.form} onSubmit={login}>
        <div className={styles.form_btn}>
          <Button text="Reset password" />
        </div>
        <Redirect
          text="Didn’t receive the email?"
          linkName="Click to resend"
          link="/auth/forgot"
        />
        <GoBack />
      </form>
    </div>
  );
};

export default Success;
