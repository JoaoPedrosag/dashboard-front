import { Board } from './styles';
import { Order } from '../../@types/Order';
import { OrderContainer } from '../OrderContainer/styles';
import { OrderModal } from '../OrderModal';
import { useState } from 'react';


interface OrdersBoardProps {
    icon: string;
    title: string;
    orders: Order[];


}
export function OrdersBoard({ icon, title, orders }: OrdersBoardProps) {
    const [isModalVisible, setIsModalVisible] = useState(false);
    function handleOpenOrder() {
        setIsModalVisible(true);
        alert('Pedido aberto com sucesso!');
    }
    return (
        <Board>
            <OrderModal visible={isModalVisible}/>
            <header>
                <span>{icon}</span>
                <strong>{title}</strong>
                <span>({orders.length})</span>
            </header>
            {orders.length > 0 && (
                <OrderContainer>
                    {orders.map((order) => (
                        <button type='button' key={order._id} onClick={handleOpenOrder}>
                            <strong> Mesa {order.table}</strong>
                            <span>{order.products.length} itens</span>
                        </button>
                    ))}
                </OrderContainer>
            )}
        </Board>
    );
}