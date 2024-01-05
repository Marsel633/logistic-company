import React from 'react'
import styles from "./Subtitle.module.scss"
type SubtitleType = {
    text: string,
}
export const Subtitle: React.FC<SubtitleType> = ({text}) => {
  return (
    <h3 className={styles.subtitle}>{text}</h3>
  )
}
