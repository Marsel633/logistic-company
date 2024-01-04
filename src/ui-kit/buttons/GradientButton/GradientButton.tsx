import React, { PropsWithChildren } from 'react'
import styles from "./GradientButton.module.scss"
import { krub } from '@/ui-kit'

type GradientButtonType = {
    children: React.ReactNode,
    props?: PropsWithChildren,
}
export const GradientButton : React.FC<GradientButtonType> = ({children, ...props}) => {
  return (
    <button className={`${styles.button} ${krub.className}`} {...props}>{children}</button>
  )
}
