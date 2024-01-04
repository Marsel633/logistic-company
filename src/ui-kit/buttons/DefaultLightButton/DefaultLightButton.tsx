import React, { PropsWithChildren } from 'react'
import styles from "./DefaultLightButton.module.scss"
import { krub } from '@/ui-kit'

type DefaultLightButtonType = {
    children: React.ReactNode,
    props?: PropsWithChildren,
}
export const DefaultLightButton : React.FC<DefaultLightButtonType> = ({children, ...props}) => {
  return (
    <button className={`${styles.button} ${krub.className}`} {...props}>{children}</button>
  )
}
