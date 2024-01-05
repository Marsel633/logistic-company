import React from 'react'
import styles from "./Title.module.scss"
type TitleType = {
    text: string,
    width: string
}
export const Title:React.FC<TitleType> = ({text, width}) => {
  return (
    <h1 className={styles.title} style={{width: width}}>
        {text}
    </h1>
  )
}
