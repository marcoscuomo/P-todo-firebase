import styles from './styles.module.css'

interface IInputProps {
  placeholder?: string
  onChange?: (value: any) => void
  value: string
}

export default function inputTodo({ placeholder, onChange, value, ...rest }: IInputProps) {
  return(
    <input 
      type="text" 
      className={styles.input} 
      placeholder={placeholder}
      onChange={e => onChange?.(e.target.value)} 
      value={value}
      {...rest}
    />
  )
}