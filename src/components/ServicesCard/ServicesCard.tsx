import React from 'react'
import styles from "./ServicesCard.module.scss"
import { ServicesCardType } from '@/config'

export const ServicesCard : React.FC<ServicesCardType> = ({icon, title, description}) => {
  return (
    <div className={styles.cardItem}>
        {icon}
        <div className={styles.cardItem__info}>
            <h5>{title}</h5>
            <p>{description}</p>
        </div>
    </div>
  )
}
