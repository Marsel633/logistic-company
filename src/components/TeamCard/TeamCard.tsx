import { TeamCardType } from '@/config'
import styles from "./TeamCard.module.scss"
import Image from 'next/image'
import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

export const TeamCard:React.FC<TeamCardType> = ({name, profession, image, facebook, linkedin, twitter, instagram}) => {
  return (
    <div className={styles.teamCard}>
        <Image width={370} height={450} src={image} alt='user photo'/>
        <div className={styles.teamCard__title}>
            <h5>{name}</h5>
            <p>{profession}</p>
        <div className={styles.teamCard__socials}>
            {linkedin && (<FaLinkedin size={21}/>)}
            {twitter && (<FaTwitter size={21}/>)}
            {facebook && (<FaFacebook size={21}/>)}
            {instagram && (<FaInstagram size={21}/>)}
        </div>
        </div>
    </div>
  )
}
