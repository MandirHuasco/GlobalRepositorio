import React from 'react'

class Boton extends React.Component {
	render(){
		return (
			<div className="po_ap tor00 rip0 ma_rp0">
				<button
					className={this.props.className}
					disabled={this.props.disabled}
					onClick={()=> this.props.onClick()}
				>
					{this.props.text}
				</button>
			</div>
		)
	}
	
}
export default Boton