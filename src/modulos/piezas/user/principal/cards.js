import React 					from 'react'
import { observer }				from 'mobx-react'
import RapidStore				from '../../../str/RapidStore'
import Eventscolas 				from '../../../fun/js'




import '../../../fnt/style.css'

class Cards extends React.Component {
	
	render () {
		if (RapidStore.a_c[0].a_c){
	 		return(	<>{
				RapidStore.a_d.map(c =>(
					c.Visible > 0 ?
						<div 
							key={c.Id_button}
							className={Eventscolas.a_i(RapidStore.a_n) ? 'cu1 c_dark wip84 hep100 te_al1 al_se1 ju_se1 gray' : 'cu1 c_light wip84 hep100 te_al1 al_se1 ju_se1 ' + c.Id_color }
							onClick={()=> Eventscolas.a_i(RapidStore.a_n) ? console.log('ddd') : Eventscolas.a_q(2, {but : c.Id_button, are: c.Id_area})}
						>
							<div className="hep100 po_re">
								<div className={'ico_sr95 ico_t13ba di3 te_sh3 tr_sc1 '+ c.Id_icon}></div>
								<h1 className="fo_sr17 te_sh3 ma_t06ba">{c.Name}</h1>
								<h1 className="po_ap bop2 rip2 fo_sr15 te_sh3">{'Totales ' + c.Incremental}</h1>
								<h1 className="po_ap top2 lep2 fo_sr28 te_sh3">{c.Incremental_day}</h1>
							</div>
						</div>
					:''
				))
			}</>)
		}
		if (RapidStore.a_c[0].a_d){
			return( <>{ 
				RapidStore.a_o.map(c =>(
					c.Visible > 0 ?
						RapidStore.a_c[0].c_h ?
							<div 
								key={c.Id_button}
								className={Eventscolas.a_i(RapidStore.a_n) ? 'cu1 c_dark wip84 hep100 te_al1 al_se1 ju_se1 gray' : 'cu1 c_light wip84 hep100 te_al1 al_se1 ju_se1 ' + c.Id_color }
								onClick={()=> Eventscolas.a_i(RapidStore.a_n) ? '' : c.Rooms===null ? Eventscolas.a_s(3, 0) :  Eventscolas.a_s(5, {but : c.Id_button, are: c.Id_area, ExEv : 1}) }
							>
								<div className="hep100 po_re">
									<div className={'ico_sr95 ico_t13ba di3 te_sh3 tr_sc1 '+ c.Id_icon}></div>
									<h1 className="fo_sr17 te_sh3 ma_t06ba">{c.Name}</h1>
									<h1 className="po_ap bop2 rip2 fo_sr15 te_sh3">{'Totales ' + c.Incremental}</h1>
									<h1 className="po_ap top2 lep2 fo_sr28 te_sh3">{c.Incremental_day}</h1>
								</div>
							</div>
						:
						<div 
							key={c.Id_button}
							className={Eventscolas.a_i(RapidStore.a_n) ? 'cu1 c_dark wip84 hep100 te_al1 al_se1 ju_se1 gray' : 'cu1 c_light wip84 hep100 te_al1 al_se1 ju_se1 ' + c.Id_color }
							onClick={()=> Eventscolas.a_i(RapidStore.a_n) ? '' : '' }
						>
							<div className="hep100 po_re">
								<div className={'ico_sr95 ico_t13ba di3 te_sh3 tr_sc1 '+ c.Id_icon}></div>
								<h1 className="fo_sr17 te_sh3 ma_t06ba">{c.Name}</h1>
								<h1 className="po_ap bop2 rip2 fo_sr15 te_sh3">{'Totales ' + c.Incremental}</h1>
								<h1 className="po_ap top2 lep2 fo_sr28 te_sh3">{c.Incremental_day}</h1>
							</div>
						</div>
					:''
				))
			}</>)
		}
		if (RapidStore.a_c[0].a_e){
			return(<>
				<div 
					key="P"
					className='rapid-elemento mono-off purple'
					onClick={()=>Eventscolas.a_f(1, 'http://con.localhost' , 'POST' , RapidStore.a_c[0].b_g )}
				>sss
				</div>
	 		</>)
		}
		if (RapidStore.a_c[0].a_f){
			return( <>{ 
				RapidStore.a_f.map(a =>(
					a.Id_mtu_id_button === RapidStore.a_c[0].b_a ?
						RapidStore.a_g.map(c =>(
							c.Id_button === a.Id_quotes_query ?
								c.Visible > 0 ?
									<div
										key={c.Id_button}
										className={'elemento ' + c.Id_color }
										onClick={()=> Eventscolas.a_q(2, c)}
									>
										<div className="rapid-elemento-espacio">
											<div className={'rapid-cards-area rapid-icono '+ c.Id_icon}></div>
											<h1 className="rapid-elento-text">{c.Name}</h1>
										</div>
									</div>
								:''
							:''
						))
					:''
				))
			}</>)
		}
	}
}
export default observer(Cards)