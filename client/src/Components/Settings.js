import React, { Component } from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Button from '@material-ui/core/Button';
import { Delete } from './Delete';
import { Edit } from './Edit';
import { Jobs } from './Jobs';

export class Settings extends Component {
	state = {
		step: 1
	}

	// Go to Delete Page
	toDelete= () => {
		const { step } = this.state;
		this.setState({
			step: step + 1
		});
	}

	// Go to Edit Page
	toEdit= () => {
		const { step } = this.state;
		this.setState({
			step: step + 2
		});
	}

	render() {
	const { step } = this.state;

		switch(step) {
			case 1:
		return (
			<MuiThemeProvider>
				<React.Fragment>
					<h1>
						Settings
					</h1>
					<Button color="secondary" variant="contained" style={styles.button}>
						Delete Account
					</Button>
					<body1 style={styles.button}>
						Click on the adjacent button to proceed with deleting your profile.
					</body1>
					<div/>
					<br />
					<Button color="secondary" variant="contained" style={styles.button}>
						Edit Account
					</Button>
					<body1 style={styles.button}>
						Click on the adjacent button to proceed with editing your profile.
					</body1>
				</React.Fragment>
			</MuiThemeProvider>
		);
		case 2:
			return (
				<Delete/>
			);
		case 3:
			return (
				<Edit/>
			);
		default:
			return (
				<Jobs/>
			);
		}
	}
}

const styles = {
	button: {
		margin: 15,
		direction: 'row',
		justify: 'center',
		alignItems: 'center'
	}
}

export default Settings
