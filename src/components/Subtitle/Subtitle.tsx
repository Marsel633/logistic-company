import React from 'react'
import styles from "./Subtitle.module.scss"
import { SubtitleType } from '@/config'

export const Subtitle: React.FC<SubtitleType> = ({text, bgColor, textColor}) => {
  return (
    <h3 className={styles.subtitle} style={{background: bgColor, color: textColor}}>{text}</h3>
  )
}
