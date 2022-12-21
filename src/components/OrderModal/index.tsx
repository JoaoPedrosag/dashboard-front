import { ModalBody, Overlay } from './styles';
import closeIcon from '../../assets/images/close-icon.svg';
interface OrderModalProps {
    visible: boolean;
}
export function OrderModal({ visible }: OrderModalProps) {
    if (!visible) {
        return null;
    }
    return (
        <Overlay>
            <ModalBody>
                <header>
                    <h1>Order</h1>
                    <button type='button'>
                        <img src={closeIcon} alt='Close' />
                    </button>

                </header>

            </ModalBody>

        </Overlay>
    );
}