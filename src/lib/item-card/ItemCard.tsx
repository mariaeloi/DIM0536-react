import { Button } from '../button/Button';
import Quantity from '../quantity/Quantity';
import styles from './item-card.module.css';

interface ItemCardProps {
  index: number;
  item: Item;
  update: (idx: number, newValue: number) => void;
  remove: (idx: number) => void;
}

export default function ItemCard({ index, item, update, remove }: Readonly<ItemCardProps>) {

  const onUpdate = (newValue: number) => {
    if (newValue > 0) {
      update(index, newValue);
    } else {
      remove(index);
    }
  }

  return (
    <div className={styles.itemCard}>
      <div className={styles.itemDetails}>
        <h4>{item.name}</h4>
        <p>{item.description}</p>
        <p>{item.price?.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</p>
      </div>
      <div className={styles.itemQtt}>
        <Quantity value={item.quantity} min={0} max={99} onUpdate={onUpdate} />
      </div>
      <div className={styles.itemTotal}>
        {(item.quantity * item.price).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
      </div>
      <div className={styles.itemRemove}>
        <Button label='Remover' size='small' onClick={(event) => {
          event.stopPropagation();
          remove(index);
        }} />
      </div>
    </div>
  )
}
