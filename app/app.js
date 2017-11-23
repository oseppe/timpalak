import React, { Component } from 'react'
import { render } from 'react-dom'
import LevelCard from './components/levelCard/levelCard'
import { RECORD_COMPETITION, START_NEW_COMPETITION, GET_SAVED_COMPETITION } from './actionTypes';
import store from './store';
import { Provider, connect } from 'react-redux';
import { rootSaga } from './sagas/stateSagas';
import { db } from './mockDb'

class Board extends Component {

	constructor(props) {
		super(props);

		const displayInputSave = Object.keys(this.props.levels).length === 0 ? 'none' : '';

		this.state = {
			loadKey: '',
			displayInputLoad: 'none',
			displayInputSave,
		};

		this.handleLoadKeyOnChange = this.handleLoadKeyOnChange.bind(this);
		this.handleLoadCompetition = this.handleLoadCompetition.bind(this);
		this.handleOnClickSave = this.handleOnClickSave.bind(this);
		this.handleOnClickLoad = this.handleOnClickLoad.bind(this);
		this.handleOnClickCopy = this.handleOnClickCopy.bind(this);
	}

	handleLoadKeyOnChange(e) {
		const loadKey = e.target.value;

		this.setState({ loadKey });
	}

	handleLoadCompetition() {
		const saveKey = this.state.loadKey;
		
		this.props.loadState(saveKey);
	}

	handleOnClickSave() {
		this.props.recordState();
		this.showInputFor('save');
	}

	handleOnClickLoad() {
		this.showInputFor('load');
	}

	handleOnClickCopy() {
		this.inputSaveKey.select();
		try {
			document.execCommand('copy');
			this.inputSaveKey.blur();
			alert('Copied to clipboard');
		} catch(err) {
			alert("Can't copy to clipboard");
		}
		
	}

	showInputFor(inputFor) {
		if (inputFor === 'save') this.setState({displayInputSave: '', displayInputLoad: 'none'});
		else if (inputFor === 'load') this.setState({displayInputSave: 'none', displayInputLoad: ''});
	}

	render() {
		// console.log('db: ');
		// console.log(db);
		const handleStartNew = this.props.startNewCompetition;
		
		const levelsData = this.props.levels;
		const levels = [];

		const countLevels = Object.keys(levelsData).length;
		
		const displayBtnSave = countLevels === 0 ? 'none' : '';

		for (let i = 0; i < countLevels; i++) {
			levels.push(<LevelCard key={i}
				matchIds={levelsData[i]} />)
		}

		return(
			<div>
				<div className="row" style={{
					paddingTop: '10px',
				}}>
					<div className="col s12 m6 offset-m3 l4 offset-l4">
						<button className="btn waves-effect waves-light" onClick={ handleStartNew }>
							Restart
						</button>
						<button className="btn waves-effect waves-light" onClick={ this.handleOnClickSave } style={{
							marginLeft: '7px',
							display: `${displayBtnSave}`,
						}}>
							Save
						</button>
						<button className="btn waves-effect waves-light" onClick={ this.handleOnClickLoad } style={{
							marginLeft: '7px',
						}}>
							Load
						</button>
					</div>
				</div>
				<div className="row">
					<div className="col s12 m6 offset-m3 l4 offset-l4">
						<div className="row" style={{
							display: `${this.state.displayInputSave}`,
						}}>
							<div className="col s8 m9 l9" style={{
								padding: 0,
							}}>
								<input type="text" value={this.props.saveKey} readOnly 
									ref={(input) => {this.inputSaveKey = input}}/>
							</div>
							<div className="col s4 m3 l3">
								<button className="grey btn-flat" onClick={ this.handleOnClickCopy }>
									<i className="material-icons">content_copy</i>
								</button>
							</div>
						</div>
						<div className="row" style={{
							display: `${this.state.displayInputLoad}`,
						}}>
							<div className="col s8 m9 l9" style={{
								padding: 0,
							}}>
								<input type="text" onChange={this.handleLoadKeyOnChange} />
							</div>
							<div className="col s4 m3 l3">
								<button className="grey btn-flat" onClick={ this.handleLoadCompetition }>
									<i className="material-icons">arrow_forward</i>
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					{ levels }
				</div>
			</div>
		)
	}
}

const startNewCompetition = () => ({ type: START_NEW_COMPETITION });
const recordState = () => ({ type: RECORD_COMPETITION });
const loadState = (saveKey) => ({ type: GET_SAVED_COMPETITION, saveKey });

function mapStateToProps(state) {
	return {
		levels: state.levels,
		saveKey: state.saveKey,
	}
}

const mapDispatchToProps = ({
	startNewCompetition,
	recordState,
	loadState,
})

let App = connect(
	mapStateToProps,
	mapDispatchToProps
)(Board);

store.runSaga(rootSaga);

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('app')
)