import { ButtonHTMLAttributes } from "react";

import styles from './styles.module.css';
interface IButtonProps  {
  children: React.ReactNode
  type: string
}

export default function Button({ type, children, ...rest }: IButtonProps) {
  const classBtn = `btn ${type}`

  return(
    <a className={classBtn} {...rest}>
      {children}
    </a>
  )
}