import React 					from 'react'
import {observer}				from 'mobx-react'
import RapidStore				from '../../../str/RapidStore'
import Eventscolas 				from '../../../fun/js'


//console.log(RapidStore.a_t, 'gogogogog')

// import '../../../fnt/style.css'

class Register extends React.Component {
	
	render () {
		
		return(	<>{
			<div
				className='context-item po_ap wip90 hep90 lep6'
			>{RapidStore.a_t.map((c, Id_user_services) =>(
				<div
					key={Id_user_services}
					className='midle-list-item light her19 divchbox'
				>
					<div
						key={Id_user_services}
						className='midle-menus-listvh-button divbox'
					>
						<div className='swtich-container'>
							<input
								type='checkbox'
								id={Id_user_services}
								className='switch'
								//checked="checked"
								//onChange={handleChange}
							/>
							<label className='lbl' htmlFor={Id_user_services}></label>
						</div>

						<div
							className='di2'
						>{c.User_Name}
						</div>
						<div
							className='di2'
						>{c.User_Firstname}
						</div>
						<div
							className='di2'
						>{c.User_Lastname}
						</div>



					</div>
				</div>
			))}
			</div>
			

		}</>)
		
	}
}
export default observer(Register)