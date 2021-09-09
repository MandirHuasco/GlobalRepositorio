import React 							from 'react'
import { observer } 					from 'mobx-react'
import RapidStore 						from './modulos/str/RapidStore'
import Eventscolas 						from './modulos/fun/js'
import Cards 							from './modulos/piezas/user/principal/cards'
import Bstop 							from './modulos/piezas/user/principal/bstop'
import Bstoptaq 						from './modulos/piezas/user/principal/bstoptaq'
import Bstoprep 						from './modulos/piezas/user/principal/bstoprep'
import Bstoprms 						from './modulos/piezas/user/principal/bstoprms'
import Rooms	 						from './modulos/piezas/user/principal/rooms'
import Filtro 							from './modulos/piezas/user/filtro/filtro'
import Register							from './modulos/piezas/user/principal/register'

import Modal 							from './modulos/piezas/user/principal/modal'


import { PDFObject } 					        from 'react-pdfobject'



//import './modulos/css/globales.css';
import './modulos/css/principal.css';


import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


class App extends React.Component {




	componentDidMount() {

		Eventscolas.aan(RapidStore.a_c[0].g_a).then((a) => {
			console.log(a)
			Eventscolas.aat()
			//Eventscolas.a_d(window.localStorage.token)
		}).catch((e) => {
			console.log(e, 'Connection Error')
		})


		RapidStore.a_c[0].g_b.onclose = (e) => {
			Eventscolas.a_o(e)
		}

		




		//setInterval(() => {
		//}, 2000)
	}
	render() {
		return (<>
			{RapidStore.a_c[0].h_a?
				<Modal
					id='lrep'
					show={RapidStore.a_c[0].i_a? true : false}
					getOpenState={(e) =>Eventscolas.a_s(0, {var1 : 'h_a', var2 : 'i_a', e : e})}
					icon='icon-pacman'
					clasn1 = 'hep92 wip70'
					title = 'Ultimo Reporte Generado'
					bclose = {() =>Eventscolas.a_s(0, {var1 : 'h_a', e : false})}
					bodya ={false}
					bodymsg = {{
						pa1 : '',
						pa2 : '',
						pa3 : '',
						pa4 : '',
						rec : ''
					}}
					bodyb = {true}
					bodyest = {
						<PDFObject url={RapidStore.a_p.Link} />
					}
					footer = {false}
					bopton = {''}
					bacept = {''}
					bcance = {''} //parametro adcional al cancelar por defecto solo cierra
					option = ''
					accept = ''
					cancel = ''
					boptac = {false}
					baccac = {false}
					bcanac = {false}
				>
				</Modal>
			:''}
			{RapidStore.a_c[0].h_b?
				<Modal
					id='ceca'
					show={RapidStore.a_c[0].i_b? true : false}
					getOpenState={(e) =>Eventscolas.a_s(0, {var1 : 'h_b', var2 : 'i_b', e : e})}
					icon='icon-pacman'
					clasn1 = 'hep40 wip70'
					title = '¿Desea cerrar su caja?'
					bclose = {() =>Eventscolas.a_s(0, {var1 : 'h_b', e : false})}
					bodya = {true}
					bodymsg = {{
						pa1 : 'Cerrar la Caja pondrá fin a su emisión de tickets y generará su Reporte.',
						pa2 : '',
						pa3 : '',
						pa4 : '',
						rec : '[Recomendación] debe cerrar su caja al finalizar su turno.'
					}}
					bodyb = {false}
					bodyest = {
						''
					}
					footer = {true}
					bopton = {''}
					bacept = {() =>Eventscolas.a_s(0, {var1 : 'h_b', var2 : 'i_b', e : false, ExEv : 1})}
					bcance = {''} //parametro adcional al cancelar por defecto solo cierra
					option = ''
					accept = 'Aceptar.'
					cancel = 'Cancelar.'
					boptac = {false}
					baccac = {true}
					bcanac = {true}
				>
				</Modal>
			:''}
			{RapidStore.a_c[0].h_c?
				<Modal
					id='help'
					show={RapidStore.a_c[0].i_c? true : false}
					getOpenState={(e) =>Eventscolas.a_s(0, {var1 : 'h_c', var2 : 'i_c', e : e})}
					icon='icon-pacman'
					clasn1 = 'hep92 wip70'
					title = 'Ayuda.'
					bclose = {() =>Eventscolas.a_s(0, {var1 : 'h_c', e : false})}
					bodya = {true}
					bodymsg = {{
						pa1 : 'No ha configurado el número de habitaciones.',
						pa2 : '',
						pa3 : '',
						pa4 : '',
						rec : '[Recomendación] esta opcion esta en el botón Opciones.'
					}}
					bodyb = {false}
					bodyest = {
						''
					}
					footer = {true}
					bopton = {''}
					bacept = {() =>Eventscolas.a_s(0, {var1 : 'h_c', var2 : 'i_c', e : false, ExEv : 2})}
					bcance = {''} //parametro adcional al cancelar por defecto solo cierra
					option = ''
					accept = 'Aceptar.'
					cancel = 'Cancelar.'
					boptac = {false}
					baccac = {true}
					bcanac = {true}
				>
				</Modal>
			:''}
			{RapidStore.a_c[0].h_d?
				<Modal
					id='opti'
					show={RapidStore.a_c[0].i_d? true : false}
					getOpenState={(e) =>Eventscolas.a_s(0, {var1 : 'h_d', var2 : 'i_d', e : e})}
					icon='icon-pacman'
					clasn1 = 'hep92 wip70'
					title = 'Opciones.'
					bclose = {() =>Eventscolas.a_s(0, {var1 : 'h_d', e : false})}
					bodya = {false}
					bodymsg = {{
						pa1 : '',
						pa2 : '',
						pa3 : '',
						pa4 : '',
						rec : ''
					}}
					bodyb = {true}
					bodyest = {
						<div className='btn-primary' onClick={() => ''} >Registrar</div>
					}
					footer = {false}
					bopton = {''}
					bacept = {''}
					bcance = {''} //parametro adcional al cancelar por defecto solo cierra
					option = ''
					accept = ''
					cancel = ''
					boptac = {false}
					baccac = {false}
					bcanac = {false}
				>
				</Modal>
			:''}
			{RapidStore.a_c[0].h_e?
				<Modal
					id='room'
					show={RapidStore.a_c[0].i_e? true : false}
					getOpenState={(e) =>Eventscolas.a_s(0, {var1 : 'h_e', var2 : 'i_e', e : e})}
					icon='icon-pacman'
					clasn1 = 'hep92 wip70'
					title = 'Habitaciones.'
					bclose = {() =>Eventscolas.a_s(0, {var1 : 'h_e', e : false})}
					bodya = {false}
					bodymsg = {{
						pa1 : '',
						pa2 : '',
						pa3 : '',
						pa4 : '',
						rec : ''
					}}
					bodyb = {true}
					bodyest = {
						<Rooms></Rooms>
					}
					footer = {false}
					bopton = {''}
					bacept = {''}
					bcance = {''} //parametro adcional al cancelar por defecto solo cierra
					option = ''
					accept = ''
					cancel = ''
					boptac = {false}
					baccac = {false}
					bcanac = {false}
				>
				</Modal>
			:''}
			{RapidStore.a_c[0].h_f?
				<Modal
					id='proo'
					show={RapidStore.a_c[0].i_f? true : false}
					getOpenState={(e) =>Eventscolas.a_s(0, {var1 : 'h_f', var2 : 'i_f', e : e})}
					icon='icon-pacman'
					clasn1 = 'hep40 wip70'
					title = '¿Directa o DNI?.'
					bclose = {() =>Eventscolas.a_s(0, {var1 : 'h_f', e : false})}
					bodya = {true}
					bodymsg = {{
						pa1 : '¿Impresion directa o Check In?.',
						pa2 : '',
						pa3 : '',
						pa4 : '',
						rec : '[Información] Impresion directa emitita el boleto con usuario vicitante DNI 00000000.'
					}}
					bodyb = {false}
					bodyest = {
						''
					}
					footer = {true}
					bopton = {() =>Eventscolas.a_s(0, {var1 : 'h_f', var2 : 'i_f', e : false, ExEv : 4 })}
					bacept = {() =>Eventscolas.a_s(0, {var1 : 'h_f', var2 : 'i_f', e : false, ExEv : 5 })}
					bcance = {() =>Eventscolas.a_s(0, {var1 : 'h_f', var2 : 'i_f', e : false, ExEv : 6 })} //parametro adcional al cancelar por defecto solo cierra
					option = 'Check In/Out.'
					accept = 'Directa.'
					cancel = 'Cancelar.'
					boptac = {true}
					baccac = {true}
					bcanac = {true}
					
				>
				</Modal>
			:''}
			{ RapidStore.a_c[0].g_d ? //online
				<div className="po_re blue-tp ov1 hep100 ma_wp1 rapid-fondo us_se_n">
					<div className="po_ap z_i1 ma1 di2 wip98 her40">
						<img className="wir4 her40 ba_si2 ba_re1" src={RapidStore.a_l.Logo} alt=""
						
						/><div className="fo_we1 ma_lp2 ma_a fo_sr2 c_green-lw te_sh1">{RapidStore.a_c[0].e_a}</div>
					</div>
					<>
						{RapidStore.a_c[0].a_c ?
							<>	
								<div 
									className={'z_i2 po_ap her30 wir24 lep40 ju_co1 di3 gr_11x1_1px'}
								>
									<Bstoptaq />
									<Bstoprep />
								</div>
								<div 
									className={'z_i2 po_ap her40 wir14 rip1 ju_co1 di3 gr_7x1_1px'}
								>
									<Bstop />
									
									
								</div>
							</>
						: ''}
					</>
					<>	
						{RapidStore.a_c[0].a_d ?
							<>
								<div 
									className={'z_i2 po_ap her30 wir24 lep40 ju_co1 di3 gr_11x1_1px'}
								>
									<Bstoptaq />
									<Bstoprep />
									<Bstoprms />
								</div>
								<div 
									className={'z_i2 po_ap her40 wir14 rip1 ju_co1 di3 gr_7x1_1px'}
								>
									<Bstop />
								</div>
							</>
						: ''}
					</>
					<>
						{RapidStore.a_c[0].a_e ?
							<>
								<div 
									className={'z_i2 po_ap her30 wir24 lep40 ju_co1 di3 gr_11x1_1px'}
								>
									<Bstoptaq />
									<Bstoprep />
								</div>
								<div 
									className={'z_i2 po_ap her40 wir14 rip1 ju_co1 di3 gr_7x1_1px'}
								>
									<Bstop />
								</div>
								
							</>
						: ''}
					</>
					<>
						{RapidStore.a_c[0].a_f ?
							<>
								<div 
									className={'z_i2 po_ap her30 wir24 lep40 ju_co1 di3 gr_11x1_1px'}
								>
									<Bstoptaq />
									<Bstoprep />
								</div>
								<div 
									className={'z_i2 po_ap her40 wir14 rip1 ju_co1 di3 gr_7x1_1px'}
								>
									<Bstop />
								</div>
							</>
						: ''}
					</>
					<div className="po_ap z_i2 hep-r60 wip100 ma_tr6">
						<div className={'ju_co1 hep100 ' + RapidStore.a_c[0].e_d + ' ' + RapidStore.a_c[0].e_c}>
							<>
								{RapidStore.a_c[0].a_a ?
									<div
										className="progress"
										onClick={() => Eventscolas.a_f(2, RapidStore.a_c[0].d_e, 'POST', 'otro')}
									>
										<CircularProgressbar
											className="progress"
											value={RapidStore.a_a}
											text={RapidStore.a_a}
											background
											backgroundPadding={6}
											styles={buildStyles({
												backgroundColor: "#F55555",
												textColor: "#fff",
												pathColor: "#fff",
												trailColor: "transparent"
											})}
										/>
									</div>
								: ''}
							</>
							<>
								{RapidStore.a_c[0].a_b ?
									<Filtro />
									: ''}
							</>
							<>
								{RapidStore.a_c[0].a_c ?
									<Cards />
									: ''}
							</>
							<>
								{RapidStore.a_c[0].a_d ?
									<Cards />
									: ''}
							</>
							<>
								{RapidStore.a_c[0].a_e ?
									<Register />
									: ''}
							</>
							<>
								{RapidStore.a_c[0].a_f ?
									<Cards />
									: ''}
							</>
						</div>
					</div>
				</div>
			:	// offline
				<div className="fondogradiente">
					<div className="rapid-logo">
						<img className="logo" src={RapidStore.a_l.Logo} alt="" /><div className="titulo">Sin conexión, modalidad de soporte.</div>
					</div>
					<div className="rapid-contenedor-regilla">
						<div className="rapid rejilla mono">
							<div
								key="P"
								className='elemento mono-off purple'
								onClick={() => Eventscolas.a_f(1, 'http://con.localhost', 'POST', RapidStore.a_c[0].b_g)}
							>
								<div className="rapid-elemento-espacio">
									<div className='rapid-icono icon-network'></div>
									<h1 className="rapid-elento-text">'Modo OffLine'</h1>
								</div>
							</div>
						</div>
					</div>
				</div>
			}
		</>)
	}
}
export default observer(App);
