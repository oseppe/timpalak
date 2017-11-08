import React, { Component } from 'react'

class CompetitorScore extends Component {
	render() {
		return(
			<div className="col s2" style={{
				backgroundColor: "#d35400", 
				padding: "5px",
				textAlign: "center"
			}}>
				{this.props.score}
			</div>
		)
	}
}

export default CompetitorScore;

