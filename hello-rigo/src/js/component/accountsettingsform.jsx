import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

class AccountSettingsForm extends React.Component {
	render() {
		return (
			<div className="container mt-5 mb-5 ">
				<div className="row ">
					<div className="col-md-12 bg-light shadow  bg-white rounded">
						<form>
							<div className="form-group">
								<label className="control-label">
									Full Name
								</label>
								<input
									type="text"
									className="form-control"
									name="fullname"
									placeholder="Jane Doe"
								/>
							</div>
							<div className="form-group">
								<label className="control-label">Email</label>
								<input
									type="email"
									className="form-control"
									name="email"
									placeholder="email@email.com"
								/>
							</div>
							<div className="form-group">
								<label className="control-label">
									Telephone
								</label>
								<input
									type="telephone"
									className="form-control"
									name="elephone"
									placeholder="555-555-5555"
								/>
							</div>
							<div className="form-group">
								<label className="control-label">
									Street Address 1
								</label>
								<input
									type="text"
									className="form-control"
									id="street1_id"
									name="street1"
									placeholder="Street address, P.O. box, company name, c/o"
								/>
							</div>

							<div className="form-group">
								<label className="control-label">
									Street Address 2
								</label>
								<input
									type="text"
									className="form-control"
									id="street2_id"
									name="street2"
									placeholder="Apartment, suite, unit, building, floor, etc."
								/>
							</div>

							<div className="form-group">
								<label className="control-label">City</label>
								<input
									type="text"
									className="form-control"
									id="city_id"
									name="city"
									placeholder="Smallville"
								/>
							</div>

							<div className="form-group">
								<label className="control-label">State</label>
								<select className="form-control" id="state_id">
									<option value="AL">Alabama</option>
									<option value="AK">Alaska</option>
									<option value="AZ">Arizona</option>
									<option value="AR">Arkansas</option>
									<option value="CA">California</option>
									<option value="CO">Colorado</option>
									<option value="CT">Connecticut</option>
									<option value="DE">Delaware</option>
									<option value="DC">
										District Of Columbia
									</option>
									<option value="FL">Florida</option>
									<option value="GA">Georgia</option>
									<option value="HI">Hawaii</option>
									<option value="ID">Idaho</option>
									<option value="IL">Illinois</option>
									<option value="IN">Indiana</option>
									<option value="IA">Iowa</option>
									<option value="KS">Kansas</option>
									<option value="KY">Kentucky</option>
									<option value="LA">Louisiana</option>
									<option value="ME">Maine</option>
									<option value="MD">Maryland</option>
									<option value="MA">Massachusetts</option>
									<option value="MI">Michigan</option>
									<option value="MN">Minnesota</option>
									<option value="MS">Mississippi</option>
									<option value="MO">Missouri</option>
									<option value="MT">Montana</option>
									<option value="NE">Nebraska</option>
									<option value="NV">Nevada</option>
									<option value="NH">New Hampshire</option>
									<option value="NJ">New Jersey</option>
									<option value="NM">New Mexico</option>
									<option value="NY">New York</option>
									<option value="NC">North Carolina</option>
									<option value="ND">North Dakota</option>
									<option value="OH">Ohio</option>
									<option value="OK">Oklahoma</option>
									<option value="OR">Oregon</option>
									<option value="PA">Pennsylvania</option>
									<option value="RI">Rhode Island</option>
									<option value="SC">South Carolina</option>
									<option value="SD">South Dakota</option>
									<option value="TN">Tennessee</option>
									<option value="TX">Texas</option>
									<option value="UT">Utah</option>
									<option value="VT">Vermont</option>
									<option value="VA">Virginia</option>
									<option value="WA">Washington</option>
									<option value="WV">West Virginia</option>
									<option value="WI">Wisconsin</option>
									<option value="WY">Wyoming</option>
								</select>
							</div>

							<div className="form-group">
								<label className="control-label">
									Zip Code
								</label>
								<input
									type="text"
									className="form-control"
									id="zip_id"
									name="zip"
									placeholder="#####"
								/>
							</div>

							<div className="form-group">
								<button
									type="submit"
									className="btn btn-primary">
									Save
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}
export default AccountSettingsForm;
