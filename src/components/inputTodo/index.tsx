import styles from './styles.module.css'

interface IInputProps {
  placeholder?: string
}

export default function inputTodo({ placeholder }: IInputProps) {
  return(
    <input type="text" className={styles.input} placeholder={placeholder} />
  )
}