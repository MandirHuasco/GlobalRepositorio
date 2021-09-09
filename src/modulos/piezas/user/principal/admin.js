import React 					from 'react'
import { observer }				from 'mobx-react'
import RapidStore				from '../../../str/RapidStore'
import Eventscolas 				from '../../../fun/js'

import '../../../fnt/style.css'

class ListAdmin extends React.Component {
	render () {
		return (<>{
			//condion canal y areas
		 	RapidStore.a_k.map(a =>(
	 			a.Active > 0 ?
					<div 
						key={a.Id_button}
						className={'rapid-elementowin ' + a.Id_color + ' ' + a.Id_background}
					>	
						<div className="rapid-elemento-espaciowin">	
							<h1 className="rapid-elento-textwin">{ a.Name }</h1>
							<div className="contenedor-l lista-hoja">{
								//consion canal areas
									RapidStore.a_j.map(b =>(
									b.Channell === a.Id_button ? 
										b.Id_state <=2?
											<div
												className='contedo-listado'
												key={b.Id}
												>
												<div
													className={ b.Bell === 1 ? Eventscolas.a_l() : 'listas lista-admin'}
													onClick={()=> Eventscolas.a_q(4, {Id : b.Id, Bell : b.Bell === 1? 0 : 1})}
												>{b.User_Name + " " + b.User_Firstname + " " + b.User_Lastname }
												</div>
												<div 
													className={ b.Id_state === 2 ? 'boton-admin icon-alarm tarde' : 'boton-admin icon-alarm espera' }
													onClick={()=> Eventscolas.a_q(4, {Id : b.Id, Bell : 2})}
												></div>
												<div 
													className='boton-admin icon-close-solid anulado'
													onClick={()=> Eventscolas.a_q(4, {Id : b.Id, Bell : 4})}
												></div>
												<div 
													className='boton-admin icon-checkmark2 atendido'
													onClick={()=> Eventscolas.a_q(4, {Id : b.Id, Bell : 3})}
												></div>
											</div>
										:''
									:''
								))
							}</div>
						</div>
					</div>
				:''	
			))
		}</>)
	}
}
// Eventscolas.a_k(b.Id, RapidStore.c_a('c_h',0))
//.split(' ')[0]
export default observer(ListAdmin)