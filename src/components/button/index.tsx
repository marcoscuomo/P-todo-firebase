import React, { ButtonHTMLAttributes } from "react";

import styles from './styles.module.css';
interface IButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement>{
  children: React.ReactNode
  typeButton: string,
  onClick?: (value: any) => void
}

export default function Button({ typeButton, children, ...rest }: IButtonProps) {
  const classBtn = `btn ${typeButton}`

  return(
    <a className={classBtn} {...rest}>
      {children}
    </a>
  )
}