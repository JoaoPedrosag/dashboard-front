import { OrderContainer } from './styles';


interface OrderContainerProps {
    title: string;
    subtitle: string;
}
export function OrderContainerModal({title, subtitle}: OrderContainerProps) {
    return (
        <OrderContainer>
            <button type='button'>
                <strong>{title}</strong>
                <span>{subtitle}</span>
            </button>
        </OrderContainer>
    );
}