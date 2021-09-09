import React 					from 'react'
import RapidStore				from '../../../str/RapidStore'
import Eventscolas 				from '../../../fun/js'




import '../../../fnt/style.css'

class Bstop extends React.Component {
	
	render () {
		if (RapidStore.a_c[0].a_c || RapidStore.a_c[0].a_d || RapidStore.a_c[0].a_e || RapidStore.a_c[0].a_f){
	 		return(	<>{
				RapidStore.a_g.map(c =>(
					c.Visible > 0 ?
						<div
							key={c.Id_button}
							className={Eventscolas.a_j(c.Id_button)===true ? 'cu1 hep100 te_al1 c_light di3 gray' : 'hep100 te_al1 c_light di3 ' + c.Id_color }
							onClick={()=> Eventscolas.a_j(c.Id_button)===true ? '' : Eventscolas.a_k(c.Id_button)}
							>
							<div
								className={'ico_sr15 ico_t03ba di3 te_sh3 tr_sc1 ' + c.Id_icon}
							></div>
							<h1 className="fo_sr06 te_sh3 ma_tab01">{c.Name.substr(0,4) + '.'}</h1>		
						</div>
					:''
				))
			}</>)
		}
	}
}
export default Bstop