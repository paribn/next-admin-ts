import React from "react";
import styles from "./redirect.module.scss";
import Link from "next/link";

type RedirectProps = {
  text: string;
  linkName: string;
  link: string;
};

const Redirect = ({ text, linkName, link }: RedirectProps) => {
  return (
    <p className={styles.redirect}>
      {text}

      <Link href={link}>
        <span>{linkName}</span>
      </Link>
    </p>
  );
};

export default Redirect;
