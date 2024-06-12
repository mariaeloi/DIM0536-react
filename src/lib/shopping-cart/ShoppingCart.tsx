import styles from './shopping-cart.module.css';
import ShoppingCartTitle from '../shopping-cart-title/ShoppingCartTitle';
import ItemsList from '../items-list/ItemsList';
import TotalCard from '../total-card/TotalCard';
import { useState } from 'react';

export default function ShoppingCart() {
  const [items, setItems] = useState([
    { id: 1, name: 'Pizza da mãe', price: 79.9, description: 'Saborosa pizza caseira feita por sua mãe.', quantity: 1 },
    { id: 2, name: 'Churrasquinho', price: 29.9, description: 'Delicioso espetinho à moda da (sua) casa.', quantity: 3 },
    { id: 3, name: 'Espaguete', price: 59.9, description: 'Apetitoso macarrão. Basta seguir a receita.', quantity: 2 },
  ]);

  const onUpdate = (idx: number, newValue: number) => {
    setItems(prevItems => {
      const newItems = [...prevItems];
      newItems[idx].quantity = newValue;
      return newItems;
    });
  }
  
  const onRemove = (idx: number) => {
    setItems(prevItems => [
      ...prevItems.slice(0, idx),
      ...prevItems.slice(idx + 1)
    ]);
  }

  return (
    <div className={styles.shoppingCart}>
      <div className={styles.shoppingCartItems}>
        <ShoppingCartTitle totalItems={items.length} />
        <ItemsList items={items} onUpdate={onUpdate} onRemove={onRemove} />
      </div>
      <div className={styles.shoppingCartTotal}>
        <TotalCard items={items} />
      </div>
    </div>
  )
}
