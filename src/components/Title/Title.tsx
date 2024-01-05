import React from 'react'
import styles from "./Title.module.scss"
type TitleType = {
    text: string,
    width?: string
    textColor: string,
    fontSize: string,
    fontWeight: string,
}
export const Title:React.FC<TitleType> = ({text, width, textColor,fontSize, fontWeight}) => {
  return (
    <h1 className={styles.title} style={{width: width, color: textColor, fontSize: fontSize, fontWeight: fontWeight}}>
        {text}
    </h1>
  )
}
