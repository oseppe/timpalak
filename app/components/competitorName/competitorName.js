import React from 'react'

export default function CompetitorName(props) {
	return (
		<div className="col s9" style={{
			backgroundColor: `${props.backgroundColor}`,
			color: "#ffffff",
			padding: "5px"
		}}>
			<div >
				<input type='text'
					value={props.playerName}
					onChange={props.handleOnNameChange}
					style={{
						height: 'inherit',
						margin: 0,
						borderBottom: 'none',
					}}/>		
			</div>
			
		</div>
	)
}