import styles from './items-list.module.css';
import ItemCard from '../item-card/ItemCard';

interface ItemsListProps {
  items: Item[];
  onUpdate: (idx: number, newValue: number) => void;
  onRemove: (idx: number) => void;
}

export default function ItemsList({ items, onUpdate, onRemove }: Readonly<ItemsListProps>) {
  const handleClick = (idx: number) => {
    alert(`${items[idx].name}: ${items[idx].description}`);
  };

  return (
    <div className={styles.itemsList}>
      {items.length === 0 ?
        <p>Não há produtos no carrinho.</p> : <>
          <hr />
          {items.map((item, i) =>
            <div className={styles.itemsListCard} key={item.id} onClick={() => handleClick(i)}>
              <ItemCard index={i} item={item} update={onUpdate} remove={onRemove} />
              <hr />
            </div>
          )}
        </>
      }
    </div>
  )
}
