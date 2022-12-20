import { Board } from './styles';
import { OrderContainerModal } from '../OrderContainer';
interface OrdersBoardProps {
    icon: string;
    title: string;
    
}
export function OrdersBoard(props: OrdersBoardProps) {
    return (
        <Board>
            <header>
                <span>{props.icon}</span>
                <strong>{props.title}</strong>
                <span>(1)</span>
            </header>
            <OrderContainerModal 
            title='Pedido 1'
            subtitle='R$ 20,00'
            />
        </Board>
    );
}