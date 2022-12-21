import { Order } from '../../@types/Order';
import { OrdersBoard } from '../OrdersBoard';
import { Container } from './styles';

const orders: Order[] = [
	
		{
			"_id": "6373d7888b9988034818eeae",
			"table": "13",
			"status": "WAITING",
			"products": [
				{
					"product": {						
						"name": "Pizza quatro queijos",
						"imagePath": "1668533566528-quatro-queijos.png",
						"price": 40.5,						
					},
					"quantity": 3,
					"_id": "6373d7888b9988034818eeaf"
				},
				{
					"product": {						
						"name": "Pizza quatro queijos",
						
						"imagePath": "1668533581335-quatro-queijos.png",
						"price": 40.5,
					},
					"quantity": 2,
					"_id": "6373d7888b9988034818eeb0"
				}
			],	
		}
	]
export function Orders() {
	return (
		<Container>
			<OrdersBoard
				icon='🕛'
				title='Fila de espera'
				orders={orders}
			/>
			<OrdersBoard
			icon='🧑‍🍳'
				title='Em preparação'
				orders={[]}
			/>
			<OrdersBoard
				icon='✔️'
				title='Pronto' 
				orders={[]}
				/>
				
		</Container>
	);
}
