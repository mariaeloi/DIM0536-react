import { useState } from 'react';
import { Button } from '../button/Button';
import styles from './quantity.module.css';

interface QuantityProps {
  value: number;
  min?: number;
  max?: number;
  onUpdate?: (newValue: number) => void;
}

export default function Quantity({ value, min, max, onUpdate }: Readonly<QuantityProps>) {
  const [quantity, setQuantity] = useState(value);

  const update = (newValue: number) => {
    setQuantity(newValue);
    onUpdate?.(newValue);
  };

  return (
    <div className={styles.quantity}>
      <p>{quantity}</p>
      <div className={styles.quantityButtons}>
        <Button label='+' size='small' onClick={(event) => {
          event.stopPropagation();
          update(quantity + 1);
        }} disabled={max !== undefined && quantity >= max} />
        <Button label='-' size='small' onClick={(event) => {
          event.stopPropagation();
          update(quantity - 1);
        }} disabled={min !== undefined && quantity <= min} />
      </div>
    </div>
  )
}
