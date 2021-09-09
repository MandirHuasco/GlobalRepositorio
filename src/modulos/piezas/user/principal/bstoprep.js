import React 					from 'react'
import { observer }				from 'mobx-react'
import RapidStore				from '../../../str/RapidStore'
import Eventscolas 				from '../../../fun/js'




import '../../../fnt/style.css'

class Bstoprep extends React.Component {
	
	render () {
		if (RapidStore.a_c[0].a_c || RapidStore.a_c[0].a_d || RapidStore.a_c[0].a_e || RapidStore.a_c[0].a_f){
			return(	<>{
				<div
					className={Eventscolas.a_i(RapidStore.a_p)===false ? 'cu1 hep100 te_al1 c_light di3 white' : 'hep100 te_al1 c_light di3 gray' }
					onClick={()=> Eventscolas.a_i(RapidStore.a_p)===false ? Eventscolas.a_s(1) : ''}
					>
					<div
						className={Eventscolas.a_i(RapidStore.a_p)===false ? 'ico_sr15 ico_t03ba di3 tr_sc1 c_red icon-file_present' : 'ico_sr15 ico_t03ba di3 te_sh3 tr_sc1 icon-plagiarism' }
					></div>
					<h1 className="fo_sr06 te_sh3 ov_wr1 red ma_tab01">{Eventscolas.a_i(RapidStore.a_p)===false ? 'Rep.' : 'SRe.' }</h1>			
				</div>
			}</>)
		}
	}
}
export default observer(Bstoprep)