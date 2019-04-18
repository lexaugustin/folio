import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import TextField from '../Common/TextField';
import TextAreaField from '../Common/TextAreaField';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addEducation } from '../../actions/profileActions';

class AddEducation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      school: '',
      degree: '',
      major: '',
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

    const eduData = {
      school: this.state.school,
      degree: this.state.degree,
      major: this.state.major,
      startDate: this.state.startDate,
      endDate: this.state.endDate,
      current: this.state.current,
      description: this.state.description
    };

    this.props.addEducation(eduData, this.props.history);
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
      <div className="add-education">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">

              <Link to="/userprofile" className="btn btn-light">Go Back</Link>

              <h1 className="display-4 text-center">Add Education</h1>
              <p className="lead text-center">Add your education history</p>
              <small className="d-block pb-3">* = required fields</small>

              <form onSubmit={this.onSubmit}>

                <TextField
                  placeholder="* School"
                  name="school"
                  value={this.state.school}
                  onChange={this.onChange}
                  error={errors.school}
                />

                <TextField
                  placeholder="* Degree or Certification"
                  name="degree"
                  value={this.state.degree}
                  onChange={this.onChange}
                  error={errors.degree}
                />

                <TextField
                  placeholder="* Major"
                  name="major"
                  value={this.state.major}
                  onChange={this.onChange}
                  error={errors.major}
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

AddEducation.propTypes = {
  addEducation: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    profile: state.profile,
    errors: state.errors
});

export default connect(mapStateToProps, { addEducation })(withRouter(AddEducation));
