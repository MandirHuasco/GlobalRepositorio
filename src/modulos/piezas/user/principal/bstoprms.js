import React 					from 'react'
import { observer }				from 'mobx-react'
import RapidStore				from '../../../str/RapidStore'
import Eventscolas 				from '../../../fun/js'




import '../../../fnt/style.css'

class Bstoprms extends React.Component {
	
	render () {
		if (RapidStore.a_c[0].a_d || RapidStore.a_c[0].a_f){
			return(	<>{
				<div
					className={ 'cu1 hep100 te_al1 c_light di3 purple' }
					onClick={()=> Eventscolas.a_s(4) }
					>
					<div
						className={'ico_sr15 ico_t03ba di3 te_sh3 tr_sc1 icon-settings_applications'}
					></div>
					<h1 className="fo_sr06 te_sh3 ov_wr1 ma_tab01">{'Opc.'}</h1>			
				</div>
			}</>)
		}
	}
}
export default observer(Bstoprms)