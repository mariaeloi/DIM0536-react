import styles from './shopping-cart-title.module.css';

interface ShoppingCartTitleProps {
  totalItems: number;
}

export default function ShoppingCartTitle({ totalItems }: Readonly<ShoppingCartTitleProps>) {

  const noItems = <p>Você não tem item algum.</p>;
  const itemsDetail = <p>Você tem {totalItems} {totalItems > 1 ? 'itens' : 'item'}.</p>;

  return (
    <div className={styles.shoppingCartTitle}>
      <h2>Carrinho de compras</h2>
      {totalItems > 0 ? itemsDetail : noItems}
    </div>
  )
}
