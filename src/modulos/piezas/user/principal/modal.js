import React									from 'react'
import { observer }								from 'mobx-react'

import RapidStore 						        from '../../../str/RapidStore'
import Eventscolas 						        from '../../../fun/js'

import {
	MDBBtn,
	MDBModal,
	MDBModalDialog,
	MDBModalContent,
	MDBModalHeader,
	MDBModalTitle,
	MDBModalBody,
	MDBModalFooter,

	// MDBCard, 
	// MDBCardBody, 
	// MDBCardTitle, 
	// MDBCardText, 
	// MDBCardImage,
	// MDBRipple,

	// MDBInput,
	// MDBRadio,
	// MDBBadge,
  } from 'mdb-react-ui-kit';
//<PDFObject url={this.props.link} />
class Modal extends React.Component {
	render(){
		return (
            RapidStore.a_c[0].z_a? 
                <div
                    id={this.props.id}
                    className='hep100 wip100 po_ap z_i-i blue-tp'
                    onClick={(e) => Promise.resolve().then(e.target.id===this.props.id ? this.props.bclose: '') }
                >   
                    <div
                        className={'po_re ma_tr1 ma__a fuse bo_sh2b ' + this.props.clasn1}
                    >
                        <div
                            className='po_ap her10 ler30 tor05 fo_sr1'
                        >
                            {this.props.title}
                        </div>
                        <div
                            className={'po_ap her15 ler02 tor02 ico_sr15 ' + this.props.icon}
                        >
                        </div>
                        <div
                            className={'cu1 po_ap her15 rir02 tor02 ico_sr10 icon-close'}
                            onClick={() => Promise.resolve().then(this.props.bclose) }
                        >
                        </div>
                        <div
                            className={this.props.footer === true ? 'po_re tor19 light ico_sr15 hep88 ma3' : 'po_re tor19 light ico_sr15 hep-r19 ma3'}
                        >
                            {this.props.bodya === true ?
                                <div
                                    className='ma3'
                                >
                                    {this.props.bodymsg.pa1 === '' ?
                                        ''
                                    :<p>
                                        {this.props.bodymsg.pa1}
                                    </p>}
                                    {this.props.bodymsg.pa2 === '' ?
                                        ''
                                    :<p>
                                        {this.props.bodymsg.pa2}
                                    </p>}
                                    {this.props.bodymsg.pa3 === '' ?
                                        ''
                                    :<p>
                                        {this.props.bodymsg.pa3}
                                    </p>}
                                    {this.props.bodymsg.pa4 === '' ?
                                        ''
                                    :<p>
                                        {this.props.bodymsg.pa4}
                                    </p>}
                                    {this.props.bodymsg.rec === '' ?
                                        ''
                                    :<p>
                                        {this.props.bodymsg.rec}
                                    </p>}

                                </div>
                            :'' }
                            {this.props.bodyb === true ?
                                this.props.bodyest
                            :'' }
                        </div>
                        <div
                            className={'po_re her2 bor2 light ico_sr15'}
                        >   
                            {this.props.footer === true ?
                                <div className='po_ap di2 rip0 '>
                                    {this.props.bcanac === true ?
                                        <div 
                                            className='red ma1 c_light wir7 her20 fo_sr1 ju_co1 ju_se1'
                                            onClick={this.props.bcance === ''? this.props.bclose : this.props.bcance} 
                                        >
                                            {this.props.cancel}
                                        </div>
                                    :''}
                                    {this.props.boptac === true ?
                                        <div 
                                            className='purple ma1 c_light wir7 her20 fo_sr1 ju_co1 ju_se1'
                                            onClick={this.props.bopton === ''? this.props.bclose : this.props.bopton} 
                                        >
                                            {this.props.option}
                                        </div>
                                    :''}
                                    {this.props.baccac === true ?
                                        <div 
                                            className='blue ma1 c_light wir7 her20 fo_sr1 ju_co1 ju_se1'
                                            onClick={this.props.bacept}
                                        >
                                            {this.props.accept}
                                        </div>
                                    :''}
                                </div>
                            :''}
                            
                        </div>
                    </div>
                </div>
            :''


            // <MDBModal 
            //     show={this.props.show}
            //     getOpenState={this.props.getOpenState} 
            //     tabIndex='-1'>
            //     <MDBModalDialog size={this.props.size}  className={this.props.clasn1}>
            //         <MDBModalContent className='hep100'>
            //             <MDBModalHeader className={this.props.clasn2}>
            //                 <MDBModalTitle>{this.props.title}</MDBModalTitle>
            //                 <MDBBtn className='btn-close' onClick={this.props.bclose} color='none'></MDBBtn>
            //             </MDBModalHeader>
            //             <MDBModalBody className='hep100'>
            //                 {this.props.bodya === true ?
            //                     <>
            //                         {this.props.bodymsg.pa1 === '' ?
            //                             ''
            //                         :<p>
            //                             {this.props.bodymsg.pa1}
            //                         </p>}
            //                         {this.props.bodymsg.pa2 === '' ?
            //                             ''
            //                         :<p>
            //                             {this.props.bodymsg.pa2}
            //                         </p>}
            //                         {this.props.bodymsg.pa3 === '' ?
            //                             ''
            //                         :<p>
            //                             {this.props.bodymsg.pa3}
            //                         </p>}
            //                         {this.props.bodymsg.pa4 === '' ?
            //                             ''
            //                         :<p>
            //                             {this.props.bodymsg.pa4}
            //                         </p>}
            //                         {this.props.bodymsg.rec === '' ?
            //                             ''
            //                         :<p>
            //                             {this.props.bodymsg.rec}
            //                         </p>}

            //                     </>
            //                 :'' }
            //                 {this.props.bodyb === true ?
            //                     this.props.bodyest
            //                 :'' }
            //             </MDBModalBody>
            //                 {this.props.footer === true ?
            //                     <MDBModalFooter className='modal-botton-wh2'>
            //                         {this.props.bcanac === true ?
            //                         <MDBBtn onClick={this.props.bcance === ''? this.props.bclose : this.props.bcance} color='secondary'>{this.props.cancel}</MDBBtn>
            //                         :''}
            //                         {this.props.boptac === true ?
            //                             <MDBBtn onClick={this.props.bopton === ''? this.props.bclose : this.props.bopton} color='secondary'>{this.props.option}</MDBBtn>
            //                         :''}
            //                         {this.props.baccac === true ?
            //                         <MDBBtn onClick={this.props.bacept}>{this.props.accept}</MDBBtn>
            //                         :''}
            //                     </MDBModalFooter>
            //                 :''}
            //         </MDBModalContent>
            //     </MDBModalDialog>
            // </MDBModal> 

		
		)
	}
	
}
/*
        <MDBModal 
					show={RapidStore.a_c[0].i_f? true : false}
					getOpenState={(e) =>(RapidStore.c_a('i_f', e), RapidStore.c_a('h_f', e))} 
					tabIndex='-1'>
					<MDBModalDialog size='lg' className='modal-wh1'>
						<MDBModalContent>
							<MDBModalHeader className='alto8'>
								<MDBModalTitle>¿Directo o DNI?.</MDBModalTitle>
								<MDBBtn className='btn-close' onClick={() =>(RapidStore.c_a('i_f', false), RapidStore.c_a('h_f', false))} color='none'></MDBBtn>
							</MDBModalHeader>
							<MDBModalBody>
								<p>
									¿Impresion directa o Check In?.
								</p>
								<p>
									[Información] Impresion directa emitita el boleto con usuario vicitante DNI 00000000.
								</p>

							</MDBModalBody>
							<MDBModalFooter className='modal-botton-wh2'>
								<MDBBtn onClick={() =>RapidStore.c_a('i_f', false), RapidStore.c_a('h_f', false)} color='secondary'>.</MDBBtn>
								<MDBBtn onClick={() =>RapidStore.c_a('i_f', false), RapidStore.c_a('h_f', false), Eventscolas.a_s(4, 0)}>Opciones.</MDBBtn>
							</MDBModalFooter>
						</MDBModalContent>
					</MDBModalDialog>
				</MDBModal>
                */
export default observer(Modal)