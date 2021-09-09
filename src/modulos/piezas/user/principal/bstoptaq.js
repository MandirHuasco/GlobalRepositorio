import React 					from 'react'
import { observer }				from 'mobx-react'
import RapidStore				from '../../../str/RapidStore'
import Eventscolas 				from '../../../fun/js'




import '../../../fnt/style.css'

class Bstoptaq extends React.Component {
	
	render () {
		if (RapidStore.a_c[0].a_c || RapidStore.a_c[0].a_d || RapidStore.a_c[0].a_e || RapidStore.a_c[0].a_f){
	 		return(	<>{
				<div
					className={Eventscolas.a_i(RapidStore.a_n)===false ? 'cu1 hep100 te_al1 c_light di3 red' : 'hep100 te_al1 c_light di3 teal' }
					onClick={()=> Eventscolas.a_i(RapidStore.a_n)===false ? Eventscolas.a_s(2): Eventscolas.a_q(4, 0)}
					>
					<div
						className={Eventscolas.a_i(RapidStore.a_n)===false ? 'ico_sr15 ico_t03ba di3 te_sh3 tr_sc1 icon-present_to_all' : 'ico_sr15 ico_t03ba di3 te_sh3 tr_sc1 icon-queue_play_next' }
					></div>
					<h1 className="fo_sr06 te_sh3 ov_wr1 ma_tab01 ">{Eventscolas.a_i(RapidStore.a_n)===false ? 'CCj.' : 'ACj.' }</h1>			
				</div>
			}</>)
		}
	}
}
export default observer(Bstoptaq)