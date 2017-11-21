import React, { Component } from 'react'
import { connect } from 'react-redux';
import { CHANGE_NAME } from '../../actionTypes';

class CompetitorName extends Component {
	constructor(props) {
		super(props);

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		const name = e.target.value;
		this.props.changeName(name, this.props.playerId);
	}

	render() {
		return(
			<div className="col s9" style={{
				color: "#ffffff",
				padding: "5px"
			}}>
				<div >
					<input type='text'
						defaultValue={this.props.player.name} 
						onChange={this.handleChange}
						style={{
							height: 'inherit',
							margin: 0,
							borderBottom: 'none',
						}}/>		
				</div>
				
			</div>
		)
	}
}

// {this.props.player.name}

// backgroundColor: `${this.props.backgroundColor}`,

// onClick={ this.handleMouseClick } 
// 					style={{
// 					display: `${this.state.textDisplay}`
// 				}}

//<div onClick={ this.handleMouseClick } style={{
//	display: `${this.state.inputDisplay}`,
//}}>
//	<input type='text'
//	ref='textInput'
//	value={this.state.name} 
//	onChange={this.handleChange}
//	onKeyPress={this.handleKeyPress} 
//	style={{
//		height: 'inherit',
//		margin: 0,
//	}}/>
//</div>

const changeName = (name, id) => ({
	type: CHANGE_NAME,
	name,
	id
})

const mapDispatchToProps = ({
	changeName
})

function mapStateToProps(state, props) {
	const player = props.playerId === '' ? { name: ''} : state.players[props.playerId];

	return { player }
}

export default  connect(mapStateToProps, mapDispatchToProps)(CompetitorName);

