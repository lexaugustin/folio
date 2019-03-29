import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import logo from '../logo.svg';

export class Result extends Component {
	render() {
		return (
			<MuiThemeProvider>
				<React.Fragment>
				<img src={logo} styles={styles.header} width={100} height= {100} alt="company logo"/>
				<body1 styles={styles.header}>
					Job Title
				</body1>
				<img src={logo} styles={styles.header} width={100} height= {100} alt="company logo"/>
				<body1 styles={styles.header}>
					Job Title
				</body1>
				<img src={logo} styles={styles.header} width={100} height= {100} alt="company logo"/>
				<body1 styles={styles.header}>
					Job Title
				</body1>
				<br />
				<body1>
					Description of job
				</body1>
			<body1>
					Description of job
				</body1>
			<body1>
					Description of job
				</body1>
				</React.Fragment>
			</MuiThemeProvider>
		)
	}
}

const styles = {
	header: {
		margin: 15,
		direction: 'row',
		alignItems: 'center',
		justify: 'center'
	}
}

export default Result
