import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

export class Project extends Component {
	render() {
		return (
			<MuiThemeProvider>
				<React.Fragment>
				<body1 style={styles.right}>Projects</body1>
				<br/>
				<TextField style={styles.container}
					hintText="Enter the Project Description"
					floatingLabelText="Description"

				/>
				<br/>
				<RaisedButton
					label="+"
					primary={true}
					style={styles.container}
					//onClick={} add more project descriptions
				/>
				<body2 style={styles.container}>Add More Projects</body2>
				</React.Fragment>
			</MuiThemeProvider>
		)
	}
}

const styles = {
	container: {
		margin: 150,
		direction: 'row',
		justify: 'flex-end',
		alignItems: 'center'
	}}

export default Project
