import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

export class Experience extends Component {
	render() {
		return (
			<MuiThemeProvider>
				<React.Fragment>
				<body1 style={styles.container}>About</body1>
				<br/>
				<TextField
					hintText="Enter a Personal Summary"
					floatingLabelText="Summary"
				/>
				<br/>
				<RaisedButton
					label="+"
					primary={true}
					style={styles.container}
					//onClick={} add more experience
				/>
				<body2 style={styles.container}>Add More Experience</body2>
				</React.Fragment>
			</MuiThemeProvider>
		)
	}
}

const styles ={
	container: {
		margin: 150,
		direction: 'row',
		justify: 'flex-start',
		alignItems: 'flex-start'
	}
}
export default Experience
