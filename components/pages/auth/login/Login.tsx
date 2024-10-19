"use client";
import AuthTitle from "@/components/shared/auth/AuthTitle/AuthTitle";
import React from "react";
import { LoginIcon } from "@/assets/images/auth/auth.vector";
import Input from "@/components/shared/auth/input/Input";
import Button from "@/components/shared/auth/Button/Button";
import styles from "@/components/pages/auth/auth.module.scss";
import Redirect from "@/components/shared/auth/Redirect/Redirect";
import Link from "next/link";
const Login = () => {
  const login = async (event: React.FormEvent): Promise<void> => {
    event.preventDefault();
  };

  return (
    <div>
      <AuthTitle
        title="Log in to your account"
        subtitle="Welcome back! Please enter your details."
        icon={LoginIcon}
      />
      <form className={styles.form} onSubmit={login}>
        <Input
          title={"Email"}
          placeholder={"Enter your email"}
          type={"email"}
          required
        />
        <Input
          title={"Password"}
          placeholder={"••••••••"}
          type={"password"}
          required
        />
        <Link href="/auth/forgot">
          <button className={styles.forgot_btn}>Forgot password</button>
        </Link>
        <div className={styles.form_btn}>
          <Button text="Sign in" />
        </div>
        <Redirect
          text="Don’t have an account?"
          linkName="Sign up"
          link="/auth/forgot"
        />
      </form>
    </div>
  );
};

export default Login;
