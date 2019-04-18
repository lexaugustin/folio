import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import TextField from '../Common/TextField';
import TextAreaField from '../Common/TextAreaField';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addExperience } from '../../actions/profileActions';

class AddExperience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company: '',
      title: '',
      location: '',
      startDate: '',
      endDate: '',
      current: false,
      description: '',
      errors: {},
      disabled: false
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onCheck = this.onCheck.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const expData = {
      company: this.state.company,
      title: this.state.title,
      location: this.state.location,
      startDate: this.state.startDate,
      endDate: this.state.endDate,
      current: this.state.current,
      description: this.state.description
    };

    this.props.addExperience(expData, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onCheck(e) {
    this.setState({
      disabled: !this.state.disabled,
      current: !this.state.current
    });
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="add-experience">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">

              <Link to="/userprofile" className="btn btn-light">Go Back</Link>

              <h1 className="display-4 text-center">Add Experience</h1>
              <p className="lead text-center">Add your work experience</p>
              <small className="d-block pb-3">* = required fields</small>

              <form onSubmit={this.onSubmit}>

                <TextField
                  placeholder="* Company"
                  name="company"
                  value={this.state.company}
                  onChange={this.onChange}
                  error={errors.company}
                />

                <TextField
                  placeholder="* Job Title"
                  name="title"
                  value={this.state.title}
                  onChange={this.onChange}
                  error={errors.title}
                />

                <TextField
                  placeholder="Location"
                  name="location"
                  value={this.state.location}
                  onChange={this.onChange}
                  error={errors.location}
                />

                <h6>Start Date</h6>
                <TextField
                  name="startDate"
                  type="date"
                  value={this.state.startDate}
                  onChange={this.onChange}
                  error={errors.startDate}
                />

                <h6>End Date</h6>
                <TextField
                  name="endDate"
                  type="date"
                  value={this.state.endDate}
                  onChange={this.onChange}
                  error={errors.endDate}
                  disabled={this.state.disabled ? 'disabled' : ''}
                />

                <div className="form-check mb-4">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    name="current"
                    value={this.state.current}
                    checked={this.state.current}
                    onChange={this.onCheck}
                    id="current"
                  />
                  <label htmlFor="current" className="form-check-label">Current Job</label>
                </div>

                <TextAreaField
                  placeholder="Job Description"
                  name="description"
                  value={this.state.description}
                  onChange={this.onChange}
                  error={errors.description}
                />

                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-info btn-block mt-4"
                />

              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AddExperience.propTypes = {
  addExperience: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    profile: state.profile,
    errors: state.errors
});

export default connect(mapStateToProps, { addExperience })(withRouter(AddExperience));
