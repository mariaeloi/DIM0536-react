import { useEffect, useState } from 'react';
import styles from './total-card.module.css';
import { Button } from '../button/Button';

interface TotalCardProps {
  items: Item[];
}

export default function TotalCard({ items }: Readonly<TotalCardProps>) {

  const [address] = useState<Address>({
    code: '59000-000',
    city: 'Natal',
    state: 'RN',
  });
  const [shipping, setShipping] = useState(15);
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [qttItems, setQttItems] = useState(0);

  useEffect(() => {
    let value = 0;
    let quantity = 0;

    items.forEach(item => {
      value += item.quantity * item.price;
      quantity += item.quantity;
    });

    setQttItems(quantity);
    setSubtotal(value);
    setTotal(value + shipping);

    if (items.length === 0) {
      setShipping(0);
      setTotal(0);
    } else {
      setShipping(15);
    }
  }, [items]);

  return (
    <div className={styles.totalCard}>
      <h3 className={styles.title}>Resumo</h3>
      <hr />
      <div className={styles.shipping}>
        <h4>Frete</h4>
        <div className={styles.shippingRow}>
          <h4>CEP</h4> <p>{address.code}</p>
          <p>{shipping.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</p>
        </div>
        <p className={styles.address}>{address.city} - {address.state}</p>
      </div>
      <hr />
      <div className={styles.subtotal}>
        <div className={styles.subtotalRow}>
          <h4>Itens ({qttItems})</h4>
          <p>{subtotal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</p>
        </div>
        <div className={styles.subtotalRow}>
          <h4>Frete</h4>
          <p>{shipping.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</p>
        </div>
      </div>
      <hr />
      <div className={styles.total}>
        <h4>Total</h4>
        <p>{total.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</p>
      </div>
      <Button label='Fechar pedido'></Button>
    </div>
  )
}
