import React, { Component } from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export class Edit extends Component {
	render() {
		return (
			<MuiThemeProvider>
			<React.Fragment>
				<h1>
					Edit Account
				</h1>
				<TextField style={styles.container}
					hintText="Enter Your Name"
					floatingLabelText="Name"
				/>
				<TextField style={styles.container}
					hintText="Enter Your Current Job Title"
					floatingLabelText="Current Job Title"
				/>
				<TextField style={styles.container}
					hintText="Enter Your Area of Study"
					floatingLabelText="Area of Study"
				/>
				<br/>
				<body1 style={styles.center}>
					About
				</body1>
				<body1 style={styles.right}>
					Projects
				</body1>
				<br/>
				<TextField
					hintText="Enter a Personal Summary"
					floatingLabelText="Summary"
				/>
				<TextField style={styles.container}
					hintText="Enter the Project Description"
					floatingLabelText="Description"

				/>
				<br/>
				<Button color="secondary" variant="contained" style={styles.button}>
					+
				</Button>
				<body2 style={styles.container}>
					Add More Experience
				</body2>
				<Button color="secondary" variant="contained" style={styles.button}>
					+
				</Button>
				<body2 style={styles.container}>
					Add More Projects
				</body2>
			</React.Fragment>
			</MuiThemeProvider>
		)
	}
}

const styles ={
	container: {
		margin: 15,
		direction: 'row',
		justify: 'center',
		alignItems: 'center'
	},
	left: {
		margin: 150,
		direction: 'row',
		justify: 'flex-start',
		alignItems: 'flex-start'
	},
	right: {
		margin: 150,
		direction: 'row',
		justify: 'flex-end',
		alignItems: 'flex-start'
	}
}

export default Edit
