import React from 'react'
import styles from "./Subtitle.module.scss"
type SubtitleType = {
    text: string,
    bgColor: string,
    textColor: string,
}
export const Subtitle: React.FC<SubtitleType> = ({text, bgColor, textColor}) => {
  return (
    <h3 className={styles.subtitle} style={{background: bgColor, color: textColor}}>{text}</h3>
  )
}
