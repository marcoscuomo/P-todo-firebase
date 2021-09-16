import { ButtonHTMLAttributes } from "react";

import styles from './styles.module.css';
interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export default function Button({ color, children, ...rest }: IButtonProps) {
  
  return(
    <button className={styles.btnAdd} {...rest}>
      {children}
    </button>
  )
}