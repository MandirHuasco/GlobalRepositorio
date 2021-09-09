import React			 				from "react"
import NewWindow 						from 'react-new-window'
import { observer }						from "mobx-react"
import RapidStore						from "./modulos/str/RapidStore"
import Eventscolas 						from './modulos/fun/js'
import logo 							from './modulos/img/dre-logo.png'
import fondo1 							from './modulos/img/escolar.jpg'
import fondo2 							from './modulos/img/escolar2.jpg'
import fondo3 							from './modulos/img/escolar3.jpg'
import fondo4 							from './modulos/img/escolar4.jpg'
import fondo5 							from './modulos/img/escolar5.jpg'
import fondo6 							from './modulos/img/escolar6.jpg'


//import './modulos/css/globales.css';
import './modulos/css/principal.css';


class Winpop extends React.PureComponent {
	render() {
		return (<>
			<NewWindow
				title="Sistema Colas - N&W Seguridad Total"
				url=""
				features={{width: '800px', height: '500px'}}
				center="screen"

			>
				<div 
					className="papid-fondo-win-escolar" 
					style={{ 
						backgroundImage: `url(${'http://fastattender.traker.ga' + fondo2}) `
					}}
				>
					<div 
						className="rapid-logo"
					>
						<img 
							className="logo" 
							src={'http://fastattender.traker.ga' + logo} 
							alt="" 
							
						/>
						<div className="titulopop">{RapidStore.a_c[0].e_b}</div>

					</div>
					<div className="rapid-contenedor-regilla">
						<div className="rapid rejilla win bi-alto">{
							//consion de canal
							RapidStore.a_k.map(a =>(
					 			a.Active > 0 ?
									<div 
										key={a.Id_button}
										className={ a.Id_background === 'fondo-lista-hojarota' ? 'rapid-elementowinpop ' + a.Id_color + ' ' + a.Id_background : 'rapid-elementowin' }
										style={{
											backgroundImage: `url(http://fastattender.traker.ga/static/media/hoja.07b3bf76.png)`
										}}
									>	
										<div className={ a.Id_background === 'fondo-lista-hojarota' ? 'rapid-elemento-espaciowin-hoja' : 'rapid-elemento-espaciowin' } 



											>	
											<h1 className="rapid-elento-textwin">{ a.Name }</h1>
											<div className="contenedor-l lista-hojapop">{
												//condicion areas
	  											RapidStore.a_j.map(b =>(
													b.Channell === a.Id_button ?
														b.Id_state <=2?
															<div
																className={ b.Bell === 1 ? Eventscolas.a_m() : 'listas lista-user' }
																key={b.Id}
															>
																<div
																	className={ a.Id_background === 'fondo-lista-hojarota' ? 'rapid-name' : '' } 
																>
																	{b.User_Name.split(' ')[0] + " " + b.User_Firstname + " " + b.User_Lastname }	
																</div>
																<div
																	className={ a.Id_background === 'fondo-lista-hojarota' ? 'rapid-attender' : '' } 
																>
																	{b.Attender}
																</div>
															</div>
														:''	
													:''
												))
											}</div>
										</div>
									</div>
								:''
							))

						}</div>          
					</div>
				</div>
			</NewWindow>
		</>)
	}
}
export default observer(Winpop);