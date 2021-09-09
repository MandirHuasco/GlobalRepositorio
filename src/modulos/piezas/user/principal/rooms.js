import React									from 'react'
import { observer }								from 'mobx-react'
import RapidStore 								from '../../../str/RapidStore'
import Eventscolas 								from '../../../fun/js'
import Button_R 								from './button_r'

import {
	MDBBtn,
	// MDBModal,
	// MDBModalDialog,
	// MDBModalContent,
	// MDBModalHeader,
	// MDBModalTitle,
	// MDBModalBody,
	// MDBModalFooter,

	MDBCard, 
	MDBCardBody, 
	MDBCardTitle, 
	MDBCardText, 
	MDBCardImage,
	MDBRipple,

	MDBInput,
	MDBRadio,
	MDBBadge,
  } from 'mdb-react-ui-kit';
//<PDFObject url={this.props.link} />
class Rooms extends React.Component {
	render(){
		return (
			RapidStore.a_o.map(c =>(
				c.Visible > 0 ?
					RapidStore.a_c[0].c_h ?
						<>
							<div
								className='botones-rooms'
							>	
								<Button_R></Button_R>
							</div>
							<div
								className='botones-rooms-detail'
							>	{
									RapidStore.a_c[0].c_i ?
										RapidStore.a_c[0].c_j.State===0 ?
											<MDBCard style={{ maxWidth: '22rem' }}>
												<MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay her110'>
												<MDBCardImage src={RapidStore.a_c[0].c_j.Img_link===null ? 'http://global.traker.ga/PUBLIC/IMG/000.jpg' : RapidStore.a_c[0].c_j.Img_link } fluid alt='...' />
													<a>
														<div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
													</a>
												</MDBRipple>
												<MDBCardBody>
													<MDBCardTitle>Check In</MDBCardTitle>
													<div className='input-modal'>
														<MDBInput className='fo_sii' label='D.N.I.' id='impi' type='text' value={RapidStore.a_c[0].j_a ? RapidStore.a_c[0].j_a :''} onChange={(val) => Eventscolas.baa('j_a', val.target.value, 0)}/>
														<MDBBadge className='mx-2 alert_input ' color='danger'>{RapidStore.a_c[0].k_a ? RapidStore.a_c[0].k_a :''}</MDBBadge>
													</div>
													<div className='input-modal'>
														<MDBInput  className='fo_sii' label='Nombre' id='impii' type='text' value={RapidStore.a_c[0].j_b ? RapidStore.a_c[0].j_b :''} onChange={(val) => Eventscolas.baa('j_b', val.target.value, 0)}/>
														<MDBBadge className='mx-2 alert_input' color='danger'>{RapidStore.a_c[0].k_b ? RapidStore.a_c[0].k_b :''}</MDBBadge>
													</div>
													<div className='input-modal'>
														<MDBInput className='fo_sii' label='Apellido Materno' id='impiii' type='text' value={RapidStore.a_c[0].j_c ? RapidStore.a_c[0].j_c :''} onChange={(val) => Eventscolas.baa('j_c', val.target.value, 0)}/>
														<MDBBadge className='mx-2 alert_input' color='danger'>{RapidStore.a_c[0].k_c ? RapidStore.a_c[0].k_c :''}</MDBBadge>
													</div>
													<div className='input-modal'>
														<MDBInput className='fo_sii' label='Apellido Paterno' id='impiv' type='text' value={RapidStore.a_c[0].j_d ? RapidStore.a_c[0].j_d :''} onChange={(val) => Eventscolas.baa('j_d', val.target.value, 0)}/>
														<MDBBadge className='mx-2 alert_input' color='danger'>{RapidStore.a_c[0].k_d ? RapidStore.a_c[0].k_d :''}</MDBBadge>
													</div>
													<div className='input-modal'>
														<MDBInput className='fo_sii' label='Fecha Nacimiento' id='impv' type='text' value={RapidStore.a_c[0].j_e ? RapidStore.a_c[0].j_e :''} onChange={(val) => Eventscolas.baa('j_e', val.target.value, 0)}/>
														<MDBBadge className='mx-2 alert_input' color='danger'>{RapidStore.a_c[0].k_e ? RapidStore.a_c[0].k_e :''}</MDBBadge>
													</div>
													<div className='input-modal'>
														<MDBInput className='fo_sii' label='Número Celular' id='impvii' value={RapidStore.a_c[0].j_g ? RapidStore.a_c[0].j_g :''} onChange={(val) => Eventscolas.baa('j_g', val.target.value, 0)}/>
														<MDBBadge className='mx-2 alert_input' color='danger'>{RapidStore.a_c[0].k_g ? RapidStore.a_c[0].k_g :''}</MDBBadge>
													</div>
													<div  className='input-modal'>
														<MDBRadio className='check' name='inlineRadio' id='impvi-i' value='Femenino' label='Femenino' inline onChange={(val) => Eventscolas.baa('j_f', val.target.value, 0)}/>
														<MDBRadio className='check' name='inlineRadio' id='impvi-ii' value='Masculino' label='Masculino' inline onChange={(val) => Eventscolas.baa('j_f', val.target.value, 0)}/>
														
														<MDBBadge className='mx-2 alert_input' color='danger'>{RapidStore.a_c[0].k_f ? RapidStore.a_c[0].k_f :''}</MDBBadge>
													</div>
													<div
														className='linea'
													>
														<MDBBtn className='btn-primary' onClick={() => Eventscolas.bac()} >Registrar</MDBBtn>
														<MDBBtn className='btn-warning' onClick={() => RapidStore.c_a('c_l', 16)}>Pasaporte</MDBBtn>
													</div>
												</MDBCardBody>
											</MDBCard>
										:
											<MDBCard style={{ maxWidth: '22rem' }}>
												<MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
												<MDBCardImage src={RapidStore.a_c[0].c_j.Img_link===null ? 'http://global.traker.ga/PUBLIC/IMG/000.jpg' : RapidStore.a_c[0].c_j.Img_link } fluid alt='...' />
													<a>
													<div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
													</a>
												</MDBRipple>
												<MDBCardBody>
													<MDBCardTitle>Check Out</MDBCardTitle>
													<MDBCardText>
														Respuestas cierre de habitaciones en construccion.
													</MDBCardText>
													<MDBBtn href='#'>Button</MDBBtn>
												</MDBCardBody>
											</MDBCard>
									: 'Elija una habitación.'
								}
							</div> 
						</>
						:''
					:
					<div 
						key={c.Id_button}
						className={Eventscolas.a_i(RapidStore.a_n) ? 'elemento gray' : 'elemento ' + c.Id_color }
						onClick={()=> Eventscolas.a_i(RapidStore.a_n) ? '' : '' }
					>
						Area restringida
					</div>
			))
		)
	}
}
export default observer(Rooms)