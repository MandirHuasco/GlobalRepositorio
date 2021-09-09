import React 					from 'react'
import { observer }				from 'mobx-react'
import RapidStore				from '../../../str/RapidStore'
import Eventscolas 				from '../../../fun/js'

class Button_R extends React.Component {
	
	render(){
		let oo = []
		let pp 
		//console.log(RapidStore.a_q)
			//pp = Promise.all(RapidStore.a_q.find(room => room.Id_room===i))
		
		RapidStore.a_q.forEach(room => {
			oo.push(
				<div
					key={room.Id_room}
					className='hep100'
				>
					<div
						className={room.State===1 ? 'rapid-botones Google' : 'rapid-botones green'}
						onClick={()=>RapidStore.a_c[0].e_e === true? '' : room.State===1 ? Eventscolas.a_s(0, {var1 : 'h_f', var2 : 'i_f', e : false, ExEv : 4 }) : Eventscolas.a_s(0, {var1 : 'h_e', var2 : 'i_e', e : false, ExEv : 3, room : room})}   //se puede agregar condicional para evitar mensaje directo o DNI
						>
						<div
							className={room.State===1 ? 'icon-post-top icon-hotel' : 'icon-post-top icon-key2'}
						></div>
						<h1 className="rapid-elento-text text-post-top">{room.Id_room}</h1>			
					</div>
				</div>
			)
		})
		return oo
	}
	
}
export default observer(Button_R)