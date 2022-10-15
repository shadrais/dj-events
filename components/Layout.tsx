import { NextPage } from "next";
import Head from "next/head";
import React, { PropsWithChildren } from "react";
import styles from "../styles/Layout.module.css";

const Layout: React.FC<{ title?: string; children: React.ReactNode }> = ({
  title,
  children,
}: any) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
      </Head>
      {children}
    </div>
  );
};

Layout.defaultProps = {
  title: "DJ Events",
};

export default Layout;
