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
				backgroundColor: `${this.props.backgroundColor}`,
				color: "#ffffff",
				padding: "5px"
			}}>
				<div >
					<input type='text'
						value={this.props.player.name} 
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

const changeName = (name, id) => ({
	type: CHANGE_NAME,
	name,
	id
})

const mapDispatchToProps = ({
	changeName
})

function mapStateToProps(state, props) {
	const player = props.playerId === '' ? { name: '', hover: false} : state.players[props.playerId];
	const backgroundColor = player.hover ? '#c0392b' : '';
	return { player, backgroundColor }
}

export default  connect(mapStateToProps, mapDispatchToProps)(CompetitorName);