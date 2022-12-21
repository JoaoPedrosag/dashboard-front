import { OrderContainer } from './styles';


interface OrderContainerProps {
    title: string;
    subtitle: string;
    key: string;
}
export function OrderContainerModal({title, subtitle, key}: OrderContainerProps) {
    return (
        <OrderContainer>
            <button type='button' key={key}>
                <strong>{title}</strong>
                <span>{subtitle}</span>
            </button>
        </OrderContainer>
    );
}