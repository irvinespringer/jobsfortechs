import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

class ResumeForm extends React.Component {
	render() {
		return (
			<div className="container mt-5 mb-5 ">
				<div className="row ">
					<div className="col-md-12 ">
						<form>
							<div className="col-md-12 bg-light shadow  bg-white rounded mb-5">
								<h6>Work Experience </h6>
								<div className="form-group">
									<label className="control-label">
										Job title
									</label>
									<input
										type="text"
										className="form-control"
										name="jobtitle"
										placeholder="Job title"
									/>
								</div>

								<div className="form-group">
									<label className="control-label">
										Company
									</label>
									<input
										type="text"
										className="form-control"
										name="companyName"
										placeholder="Company "
									/>
								</div>

								<div className="form-group">
									<label className="control-label">
										City
									</label>
									<input
										type="text"
										className="form-control"
										name="city"
										placeholder="e.g. Miami, FL"
									/>
								</div>

								<div className="form-group mr-2">
									<input type="checkbox" />
									<label className="control-label">
										&nbsp;I currently work here
									</label>
								</div>

								<div className="form-row mb-3">
									<div className="col">
										<label />
										<select className="form-control">
											<option value="January">
												January
											</option>
											<option value="February">
												February
											</option>
											<option value="March">March</option>
											<option value="April">April</option>
											<option value="May">May</option>
											<option value="June">June</option>
											<option value="July">July</option>
											<option value="August">
												August
											</option>
											<option value="September">
												September
											</option>
											<option value="October">
												October
											</option>
											<option value="November">
												November
											</option>
											<option value="December">
												December
											</option>
										</select>
									</div>

									<div className="col">
										<label />
										<select className="form-control">
											<option value="2019">2019</option>
											<option value="2018">2018</option>
											<option value="2017">2017</option>
											<option value="2016">2016</option>
											<option value="2015">2015</option>
											<option value="2014">2014</option>
											<option value="2013">2013</option>
											<option value="2012">2012</option>
											<option value="2011">2011</option>
											<option value="2010">2010</option>
											<option value="2009">2009</option>
											<option value="2008">2008</option>
											<option value="2007">2007</option>
											<option value="2006">2006</option>
											<option value="2005">2005</option>
											<option value="2004">2004</option>
											<option value="2003">2003</option>
											<option value="2002">2002</option>
											<option value="2001">2001</option>
											<option value="2000">2000</option>
											<option value="1999">1999</option>
											<option value="1998">1998</option>
											<option value="1997">1997</option>
											<option value="1996">1996</option>
											<option value="1995">1995</option>
											<option value="1994">1994</option>
											<option value="1993">1993</option>
											<option value="1992">1992</option>
											<option value="1991">1991</option>
											<option value="1990">1990</option>
											<option value="1989">1989</option>
											<option value="1988">1988</option>
											<option value="1987">1987</option>
											<option value="1986">1986</option>
											<option value="1985">1985</option>
											<option value="1984">1984</option>
											<option value="1983">1983</option>
											<option value="1982">1982</option>
											<option value="1981">1981</option>
											<option value="1980">1980</option>
											<option value="1979">1979</option>
											<option value="1978">1978</option>
											<option value="1977">1977</option>
											<option value="1976">1976</option>
											<option value="1975">1975</option>
											<option value="1974">1974</option>
											<option value="1973">1973</option>
											<option value="1972">1972</option>
											<option value="1971">1971</option>
											<option value="1970">1970</option>
											<option value="1969">1969</option>
											<option value="1968">1968</option>
											<option value="1967">1967</option>
											<option value="1966">1966</option>
											<option value="1965">1965</option>
											<option value="1964">1964</option>
											<option value="1963">1963</option>
											<option value="1962">1962</option>
											<option value="1961">1961</option>
											<option value="1960">1960</option>
										</select>
									</div>

									<div className="form-inline"> to </div>

									<div className="col">
										<label />
										<select className="form-control">
											<option value="January">
												January
											</option>
											<option value="February">
												February
											</option>
											<option value="March">March</option>
											<option value="April">April</option>
											<option value="May">May</option>
											<option value="June">June</option>
											<option value="July">July</option>
											<option value="August">
												August
											</option>
											<option value="September">
												September
											</option>
											<option value="October">
												October
											</option>
											<option value="November">
												November
											</option>
											<option value="December">
												December
											</option>
										</select>
									</div>
									<div className="col">
										<label />
										<select className="form-control">
											<option value="2019">2019</option>
											<option value="2018">2018</option>
											<option value="2017">2017</option>
											<option value="2016">2016</option>
											<option value="2015">2015</option>
											<option value="2014">2014</option>
											<option value="2013">2013</option>
											<option value="2012">2012</option>
											<option value="2011">2011</option>
											<option value="2010">2010</option>
											<option value="2009">2009</option>
											<option value="2008">2008</option>
											<option value="2007">2007</option>
											<option value="2006">2006</option>
											<option value="2005">2005</option>
											<option value="2004">2004</option>
											<option value="2003">2003</option>
											<option value="2002">2002</option>
											<option value="2001">2001</option>
											<option value="2000">2000</option>
											<option value="1999">1999</option>
											<option value="1998">1998</option>
											<option value="1997">1997</option>
											<option value="1996">1996</option>
											<option value="1995">1995</option>
											<option value="1994">1994</option>
											<option value="1993">1993</option>
											<option value="1992">1992</option>
											<option value="1991">1991</option>
											<option value="1990">1990</option>
											<option value="1989">1989</option>
											<option value="1988">1988</option>
											<option value="1987">1987</option>
											<option value="1986">1986</option>
											<option value="1985">1985</option>
											<option value="1984">1984</option>
											<option value="1983">1983</option>
											<option value="1982">1982</option>
											<option value="1981">1981</option>
											<option value="1980">1980</option>
											<option value="1979">1979</option>
											<option value="1978">1978</option>
											<option value="1977">1977</option>
											<option value="1976">1976</option>
											<option value="1975">1975</option>
											<option value="1974">1974</option>
											<option value="1973">1973</option>
											<option value="1972">1972</option>
											<option value="1971">1971</option>
											<option value="1970">1970</option>
											<option value="1969">1969</option>
											<option value="1968">1968</option>
											<option value="1967">1967</option>
											<option value="1966">1966</option>
											<option value="1965">1965</option>
											<option value="1964">1964</option>
											<option value="1963">1963</option>
											<option value="1962">1962</option>
											<option value="1961">1961</option>
											<option value="1960">1960</option>
										</select>
									</div>
								</div>

								<div className="form-group">
									<label className="control-label">
										Description
									</label>
									<textarea
										type="text"
										className="form-control"
										name="description"
										placeholder=""
									/>
								</div>
							</div>

							<div className="container mt-5 mb-2 ">
								<div className="row ">
									<div className="col-md-12 bg-light shadow  bg-white rounded">
										<h6>Education </h6>

										<div className="form-group">
											<label />
											<select className="form-control">
												<option>None</option>
												<option>Certificate</option>
												<option>Diplomas</option>
												<option>High school</option>
												<option>Associates</option>
												<option>Bacherlors</option>
												<option>Masters</option>
												<option>Doctorate</option>
												<option>Other</option>
											</select>
										</div>

										<div className="form-group">
											<label className="control-label">
												Degree
											</label>
											<input
												type="text"
												className="form-control"
												name="degree"
												placeholder="Bsc."
											/>
										</div>

										<div className="form-group">
											<label className="control-label">
												School
											</label>
											<input
												type="text"
												className="form-control"
												name="school"
												placeholder="School"
											/>
										</div>
										<div className="form-group">
											<label className="control-label">
												Field of study
											</label>
											<input
												type="text"
												className="form-control"
												name="field-of-study"
												placeholder="e.g. engineering,computer science"
											/>
										</div>

										<div className="form-group">
											<label className="control-label">
												City
											</label>
											<input
												type="text"
												className="form-control"
												name="city"
												placeholder="e.g. Miami, FL"
											/>
										</div>

										<div> Time Period</div>
										<div className="form-row mb-3">
											<div className="col">
												<label />
												<select className="form-control">
													<option value="January">
														January
													</option>
													<option value="February">
														February
													</option>
													<option value="March">
														March
													</option>
													<option value="April">
														April
													</option>
													<option value="May">
														May
													</option>
													<option value="June">
														June
													</option>
													<option value="July">
														July
													</option>
													<option value="August">
														August
													</option>
													<option value="September">
														September
													</option>
													<option value="October">
														October
													</option>
													<option value="November">
														November
													</option>
													<option value="December">
														December
													</option>
												</select>
											</div>

											<div className="col">
												<label />
												<select className="form-control">
													<option value="2019">
														2019
													</option>
													<option value="2018">
														2018
													</option>
													<option value="2017">
														2017
													</option>
													<option value="2016">
														2016
													</option>
													<option value="2015">
														2015
													</option>
													<option value="2014">
														2014
													</option>
													<option value="2013">
														2013
													</option>
													<option value="2012">
														2012
													</option>
													<option value="2011">
														2011
													</option>
													<option value="2010">
														2010
													</option>
													<option value="2009">
														2009
													</option>
													<option value="2008">
														2008
													</option>
													<option value="2007">
														2007
													</option>
													<option value="2006">
														2006
													</option>
													<option value="2005">
														2005
													</option>
													<option value="2004">
														2004
													</option>
													<option value="2003">
														2003
													</option>
													<option value="2002">
														2002
													</option>
													<option value="2001">
														2001
													</option>
													<option value="2000">
														2000
													</option>
													<option value="1999">
														1999
													</option>
													<option value="1998">
														1998
													</option>
													<option value="1997">
														1997
													</option>
													<option value="1996">
														1996
													</option>
													<option value="1995">
														1995
													</option>
													<option value="1994">
														1994
													</option>
													<option value="1993">
														1993
													</option>
													<option value="1992">
														1992
													</option>
													<option value="1991">
														1991
													</option>
													<option value="1990">
														1990
													</option>
													<option value="1989">
														1989
													</option>
													<option value="1988">
														1988
													</option>
													<option value="1987">
														1987
													</option>
													<option value="1986">
														1986
													</option>
													<option value="1985">
														1985
													</option>
													<option value="1984">
														1984
													</option>
													<option value="1983">
														1983
													</option>
													<option value="1982">
														1982
													</option>
													<option value="1981">
														1981
													</option>
													<option value="1980">
														1980
													</option>
													<option value="1979">
														1979
													</option>
													<option value="1978">
														1978
													</option>
													<option value="1977">
														1977
													</option>
													<option value="1976">
														1976
													</option>
													<option value="1975">
														1975
													</option>
													<option value="1974">
														1974
													</option>
													<option value="1973">
														1973
													</option>
													<option value="1972">
														1972
													</option>
													<option value="1971">
														1971
													</option>
													<option value="1970">
														1970
													</option>
													<option value="1969">
														1969
													</option>
													<option value="1968">
														1968
													</option>
													<option value="1967">
														1967
													</option>
													<option value="1966">
														1966
													</option>
													<option value="1965">
														1965
													</option>
													<option value="1964">
														1964
													</option>
													<option value="1963">
														1963
													</option>
													<option value="1962">
														1962
													</option>
													<option value="1961">
														1961
													</option>
													<option value="1960">
														1960
													</option>
												</select>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className="container  mb-5 mt-5 ">
								<div className="row ">
									<div className="col-md-12 bg-light shadow  bg-white rounded">
										<h6>Skills </h6>

										<div className="form-group">
											<label className="control-label">
												Description of skills
											</label>
											<textarea
												type="text"
												className="form-control"
												name="skills"
												placeholder="e.g. object oriented programming,ux, css,HTML5, python"
											/>
										</div>
										<div className="form-group">
											<button
												type="submit"
												className="btn btn-primary">
												Save
											</button>
										</div>
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}
export default ResumeForm;
