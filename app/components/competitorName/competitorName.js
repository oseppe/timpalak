import React, { Component } from 'react'

class CompetitorName extends Component {
	render() {
		return(
			<div className="col s9" style={{
				color: "#ffffff",
				padding: "5px"
			}}>
				{this.props.name}
			</div>
		)
	}
}

export default CompetitorName;

