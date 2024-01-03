import React from "react";
import styles from "./Footer.module.scss";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footer__intro}>
          <div className={`${styles.footer__info} container`}>
            <div className={styles.mainLogo}>
              <Image src={"/Logo.svg"} width={36} height={36} alt="main logo" />
              TransitFlow
            </div>
            <p>Pages</p>
            <p>Utility</p>
            <p>Subscribe</p>
          </div>
        </div>
        <div className={`${styles.footer__content} container`}>
          <div className={styles.footer__contact}>
            <p>
              Leverage agile frameworks to provide a robust synopsis for strategy
              collaborative thinking to further the overall value proposition.
            </p>
            <div className={styles.contact__item}>
              <Image src={"/email.svg"} width={64} height={64} alt="email logo" />
              <p>
                Email <br /> contact@logistics.com
              </p>
            </div>
            <div className={styles.contact__item}>
              <Image src={"/phone.svg"} width={64} height={64} alt="phone logo" />
              <p>
                Call Us <br /> (00) 112 365 489
              </p>
            </div>
          </div>
          <nav className={styles.footer__pagesNav}>
            <Link href={"#"}>About Us</Link>
            <Link href={"#"}>Our Team</Link>
            <Link href={"#"}>Our Project</Link>
            <Link href={"#"}>Pricing</Link>
            <Link href={"#"}>Contact</Link>
          </nav>
          <nav className={styles.footer__utilityNav}>
            <Link href={"#"}>Style Guide</Link>
            <Link href={"#"}>Changelog</Link>
            <Link href={"#"}>Licenses</Link>
            <Link href={"#"}>Protected</Link>
            <Link href={"#"}>Not Found</Link>
          </nav>
          <div className={styles.footer__subscribe}>
            <input type="text" placeholder="Email here *"/>
            <div className={styles.footer__social}>
              <button>Send now</button>
              <Image
                src={"/Linkdin.svg"}
                width={20}
                height={20}
                alt="linkedin logo"
              />
              <Image
                src={"/Twitter.svg"}
                width={20}
                height={20}
                alt="twtitter logo"
              />
              <Image
                src={"/Facebook.svg"}
                width={20}
                height={20}
                alt="facebook logo"
              />
            </div>
          </div>
        </div>
      </footer>
      <div className={styles.copyright__wrapper}>
        <div className={`${styles.footer__copyright} container`}>
          <p>
            Copyright © TransitFlow | Designed by VictorFlow - Created by
            Marsel633.
          </p>
          <p>Style Guide Licenses Changelog Password</p>
        </div>
      </div>
    </>
  );
};
