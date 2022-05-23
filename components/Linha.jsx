import Subdivisao from './Subdivisao';
import styles from '../styles/Linha.module.css'

export default function Linha(props) {
  return (
    <div
      style={{ flexDirection: props.reverse ? "row-reverse" : "row"}}
      className={styles.linha}
    >
      <Subdivisao />
      <Subdivisao preta />
      <Subdivisao />
      <Subdivisao preta />
      <Subdivisao />
      <Subdivisao preta />
      <Subdivisao />
      <Subdivisao preta />
    </div>
  )
}