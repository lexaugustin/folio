import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import IconButton from 'material-ui/IconButton';
import Result from './Result';
import ResultG from './ResultG';
import list from '../list.png';
import grid from '../grid.png';

export class Jobs extends Component {
	state = {
		step: 1
	}

	// Go to Grid View
	toGrid = () => {
		const { step } = this.state;
		this.setState({
			step: step + 1
		});
	}
	
	// Go to List View
	toList = () => {
		const { step } = this.state;
		this.setState({
			step: step - 1
		});
	}

	//
	render() {
		const { step } = this.state;

		switch(step) {
			case 1:
				return (
<MuiThemeProvider>
				<React.Fragment>
					<body1>Jobs That Match Your Profile</body1>
					<IconButton
					label="List"
					style={styles.button}
					>
						<img src={list} alt="List"/>
					</IconButton>
					<IconButton
					label="Grid"
					style={styles.button}
					onClick={this.toGrid}
					>
						<img src={grid} alt="Grid"/>
					</IconButton>
					<div></div>
					<br />
					<Result/>
					<br />
					<Result/>
					<br />
					<Result/>
					<br />
					<Result/>
					<br />
					<Result/>
					<br />
					<Result/>
				</React.Fragment>
			</MuiThemeProvider>
						);
			case 2:
				return (
		<MuiThemeProvider>
				<React.Fragment>
		<body1>Jobs That Match Your Profile</body1>
					<IconButton
					label="List"
					style={styles.button}
					onClick={this.toList}
					>
						<img src={list} alt="List"/>
					</IconButton>
					<IconButton
					label="Grid"
					style={styles.button}
					>
						<img src={grid} alt="Grid"/>
					</IconButton>
					<div></div>
					<br />
					<ResultG/>
				</React.Fragment>
			</MuiThemeProvider>
			);
			default:
				return (
							<MuiThemeProvider>
				<React.Fragment>
		<body1>Jobs That Match Your Profile</body1>
					<IconButton
					label="List"
					style={styles.button}
					>
						<img src={list} alt="List"/>
					</IconButton>
					<IconButton
					label="Grid"
					style={styles.button}
					>
						<img src={grid} alt="Grid"/>
					</IconButton>
					<div></div>
					<br />
					<body1>
					No job results match your user profile. 						Please add more information about yourself.
					</body1>
				</React.Fragment>
			</MuiThemeProvider>
				);
		}

	}
}

const styles ={
	button: {
		direction: 'row',
		justify: 'flex-end',
		alignItems: 'flex-end'
	}
}

export default Jobs