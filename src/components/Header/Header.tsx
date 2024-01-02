import React from "react";
import styles from "./Header.module.scss";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
   <>
        <header className={styles.header}>
          <div className={`${styles.header__intro} container`}>
            <div className={styles.mainLogo}>
              <Image src={"/Logo.svg"} width={36} height={36} alt="main logo" />
              TransitFlow
            </div>
            <div className={styles.header__info}>
              <div className={styles.info__item}>
                <Image src={"/time.svg"} width={64} height={64} alt="time logo" />
                <p>
                  Mon - Sat 9.00 - 18.00 <br /> Sunday Closed
                </p>
              </div>
              <div className={styles.info__item}>
                <Image src={"/email.svg"} width={64} height={64} alt="email logo" />
                <p>
                  Email <br /> contact@logistics.com
                </p>
              </div>
              <div className={styles.info__item}>
                <Image src={"/phone.svg"} width={64} height={64} alt="phone logo" />
                <p>
                  Call Us <br /> (00) 112 365 489
                </p>
              </div>
            </div>
          </div>
          </header>
         <div className={styles.nav__wrapper}>
              <nav className={`${styles.nav} container`}>
                <div className={styles.nav__links}>
                  <Link href={"#"}>Home</Link>
                  <Link href={"#"}>About</Link>
                  <Link href={"#"}>Pages</Link>
                  <Link href={"#"}>Project</Link>
                  <Link href={"#"}>Contact</Link>
                </div>
                <div className={styles.nav__social}>
                  <Image src={"/Instagram.svg"} width={20} height={20} alt="instagram logo" />
                  <Image src={"/Facebook.svg"} width={20} height={20} alt="facebook logo" />
                  <Image src={"/Twitter.svg"} width={20} height={20} alt="twtitter logo" />
                  <Image src={"/Linkdin.svg"} width={20} height={20} alt="linkedin logo" />
                  <button className={styles.nav__quote}>Request Quote</button>
                </div>
              </nav>
         </div>
   </>
  );
};
