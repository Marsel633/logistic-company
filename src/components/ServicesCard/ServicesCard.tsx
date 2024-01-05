import React from 'react'
import styles from "./ServicesCard.module.scss"

type ServicesCardType = {
    icon: React.ReactNode,
    title: string,
    description: string,
}

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
