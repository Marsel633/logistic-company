import React from 'react'
import styles from "./TransportationCard.module.scss"
import Image from 'next/image'
import { TransportationCardType } from '@/config'

export const TransportationCard : React.FC<TransportationCardType> = ({title, desc, image}) => {
  return (
    <div className={styles.card}>
        <Image width={250} height={300} src={image} alt={title} />
        <h5>{title}</h5>
        <p>{desc}</p>
    </div>
  )
}
