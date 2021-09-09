import React from 'react'

class InputText extends React.Component {
	render(){
		return (
			<div className="Input-login">
				<input
					className={this.props.className}
					type={this.props.type}
					placeholder={this.props.placeholder}
					value={this.props.value}
					onChange={(e)=> this.props.onChange(e.target.value)}
					onKeyPress={(e)=> this.props.onKeyPress(e.key)}
				/>
			</div>
		)
	}
}
export default InputText