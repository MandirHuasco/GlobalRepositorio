import React									from 'react'
import { observer }								from 'mobx-react'
import RapidStore								from '../../../str/RapidStore'
import Boton 									from '../../../piezas/user/filtro/boton'
import Eventscolas 								from '../../../fun/js'
import '../../../fnt/style.css'				
import KeyboardEventHandler 					from 'react-keyboard-event-handler';



class Filtro extends React.Component {

	render () {
 		return(	<>
 			<KeyboardEventHandler 
 				handleKeys={['numeric', 'u', 'a', 'r', 'g']}
 				onKeyEvent={(key, e) => Eventscolas.aaa('c_a', key, 2)}
 			/>
 			<KeyboardEventHandler
			handleKeys={['Enter']}
			onKeyEvent={(key, e) => Eventscolas.aab(1, 1, 1) }
			/>
			<KeyboardEventHandler
			handleKeys={['backspace']}
			onKeyEvent={(key, e) => Eventscolas.aac(1, 0, 1) }
			/>
			<div
				className='c_crimson her70 po_ap z_i3 wip84 ma_lp11'			
			>
				<div
					className='hep100 wip100 pa1 fo_sr5 fo_we2 c_dark bo_sh1 ou1 tr_bc_bs1 light'
					placeholder='Puede usar el lector...'
				>{
					RapidStore.a_c[0].c_a ? RapidStore.a_c[0].c_a : ''
				}</div>

				
				<Boton
					text='OK'
					className="fo_sr4 cyan her70"
					disabled={RapidStore.a_c[0].c_c}
					onClick={()=> Eventscolas.aab(1,1,1)}
					>
				</Boton>
			</div>

			
			<div
				className='po_ap lep12 tor80'
			>
				<h1 className="te_sh2 fo_sr2 c_red">{RapidStore.a_c[0].c_b ? RapidStore.a_c[0].c_b : ''}</h1>
			</div>
			<div
				className={'z_i3 po_ap her110 wip32 lep12 tor110 ju_co1 di3 gr_6x2_1p cu1'}
			> { RapidStore.a_h.map(a => ( 
				
				<div
					key={a.Id_button}
					className={'te_al1 c_light tr_sc1 di3 ' + a.Id_color} 
					onClick={()=> Eventscolas.aaa('c_a', a.Id_button, 2)}
				>
					<h1 className="fo_sr2 te_sh3 ov_wr1 ma_a">{a.Id_button}</h1>			
				</div>
			))}
			</div>
			<div 
				className={'z_i3 po_ap her40 wip80 lep12 tor230 ju_co1 di3 gr_6x1_1p cu1'}
			> { RapidStore.a_i.map(a => (
				<div
					key={a.Id_button}
					className={'te_al1 c_light tr_sc1 di3 ico_cc ico_sr20 bo_ac ' + a.Id_color + " " + a.Id_icon } 
					onClick={()=> Eventscolas.aac('c_a', a.Id_button, true)}
				>
					<h1 className="fo_sr2 te_sh3 ov_wr1 ma_a">{a.Name}</h1>
				</div>
			))}
			</div>
			
			
 		</>)
	}
}
export default observer(Filtro)