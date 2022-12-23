import { ModalBody, OrderDetails, Overlay } from './styles';
import closeIcon from '../../assets/images/close-icon.svg';
import { Order } from '../../@types/Order';
interface OrderModalProps {
    visible: boolean;
    order: Order | null;
}
export function OrderModal({ visible, order }: OrderModalProps) {
    if (!visible || !order) {
        return null;
    }
    return (
        <Overlay>
            <ModalBody>
                <header>
                    <h1>Mesa {order.table}</h1>
                    <button type='button'>
                        <img src={closeIcon} alt='Close' />
                    </button>
                </header>
                <div>
                    <small>Status do Pedido</small>
                    <div>
                        <span>
                            {order.status === 'WAITING' && '🕛'}
                            {order.status === 'IN_PRODUCTION' && '🧑‍🍳'}
                            {order.status === 'DONE' && '✔️'}
                        </span>
                        <strong>
                            {order.status === 'WAITING' && 'Fila de espera'}
                            {order.status === 'IN_PRODUCTION' && 'Em produção'}
                            {order.status === 'DONE' && 'Pronto'}
                        </strong>
                    </div>
                </div>
                <OrderDetails>
                    <strong>Detalhes do Pedido</strong>
                    {order.products.map(({
                        _id,
                        product,
                        quantity
                    }) => (
                       <div key={_id}>
                            <img width="56" height="28.51" src={`http://localhost:3001/uploads/${product.imagePath}`} alt={product.name}></img>
                            <span>{quantity}x</span>
                            <div>
                                <strong>{product.name}</strong>
                                <span>{product.price}</span>
                            </div>
                       </div>
                    ))}
                </OrderDetails>
            </ModalBody>

        </Overlay>
    );
}