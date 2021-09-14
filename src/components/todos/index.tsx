import styles from './styles.module.css';

export default function Todo() {
  return(
    <div className={styles.container}>
      <ul>
        <li>Limpar a casa</li>
        <li>Limpar o quintal</li>
        <li>Arrumar o carro</li>
        <li>Fazer janta</li>
      </ul>
    </div>
  )
}