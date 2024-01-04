import React, { PropsWithChildren } from 'react'
import styles from "./DefaultDarkButton.module.scss"
import { krub } from '@/ui-kit'

type DefaultDarkButtonType = {
    children: React.ReactNode,
    props?: PropsWithChildren,
}
export const DefaultDarkButton : React.FC<DefaultDarkButtonType> = ({children, ...props}) => {
  return (
    <button className={`${styles.button} ${krub.className}`} {...props}>{children}</button>
  )
}
