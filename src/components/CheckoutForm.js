import React, {useState}from "react";
import { Link } from "react-router-dom";


const CheckoutForm = () => {

    const [ user, setUser] = useState({
        email:"", address:""
})

let name, value;

const handleInputs = (e) => {
    console.log(e)
    name = e.target.name;
    value = e.target.value;

    setUser({...user, [name]:value})
}
    return (
        <form className="CheckoutForm mb-3">
            <div className="CheckoutForm_headings d-flex justify-content-between mb-3">
                <p className="contact__info">Contact Information</p>
                <p className="account">Already have an account? <Link to="/login">Log in</Link></p>
            </div>

            <div className="form-floating mb-3">
                <input type="text" className="form-control shadow-none" name="email" id="email" placeholder="Email Address" value={user.email} onChange={handleInputs} required />
                <label htmlFor="email">Email address</label>
            </div>

            <div className="form-check shadow-none my-2">
                <input className="form-check-input" type="checkbox" id="EmailCheckbox" />
                <label htmlFor="EmailCheckbox">Email me with news and offers</label>
            </div>

            <div className="shipping__address form-floating my-4">
                <p className="shipping__heading my-3">Shipping address</p>
                <select id="inputState" className="form-select mb-3 shadow-none">
                    {/* <option >Select Country...</option> */}
                    <option value="MX">Mexico</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="AU">Australia</option>
                    <option disabled="" value="">
                        ---
                    </option>
                    <option value="AX">Åland Islands</option>
                    <option value="AL">Albania</option>
                    <option value="AD">Andorra</option>
                    <option value="AM">Armenia</option>
                    <option value="AU">Australia</option>
                    <option value="AT">Austria</option>
                    <option value="BY">Belarus</option>
                    <option value="BE">Belgium</option>
                    <option value="BA">Bosnia &amp; Herzegovina</option>
                    <option value="BR">Brazil</option>
                    <option value="BG">Bulgaria</option>
                    <option value="CA">Canada</option>
                    <option value="BQ">Caribbean Netherlands</option>
                    <option value="CL">Chile</option>
                    <option value="CN">China</option>
                    <option value="CO">Colombia</option>
                    <option value="HR">Croatia</option>
                    <option value="CY">Cyprus</option>
                    <option value="CZ">Czechia</option>
                    <option value="DK">Denmark</option>
                    <option value="EE">Estonia</option>
                    <option value="FO">Faroe Islands</option>
                    <option value="FI">Finland</option>
                    <option value="FR">France</option>
                    <option value="GE">Georgia</option>
                    <option value="DE">Germany</option>
                    <option value="GI">Gibraltar</option>
                    <option value="GR">Greece</option>
                    <option value="GL">Greenland</option>
                    <option value="GP">Guadeloupe</option>
                    <option value="GG">Guernsey</option>
                    <option value="HK">Hong Kong SAR</option>
                    <option value="HU">Hungary</option>
                    <option value="IS">Iceland</option>
                    <option value="ID">Indonesia</option>
                    <option value="IE">Ireland</option>
                    <option value="IM">Isle of Man</option>
                    <option value="IL">Israel</option>
                    <option value="IT">Italy</option>
                    <option value="JP">Japan</option>
                    <option value="JE">Jersey</option>
                    <option value="JO">Jordan</option>
                    <option value="XK">Kosovo</option>
                    <option value="KW">Kuwait</option>
                    <option value="LV">Latvia</option>
                    <option value="LI">Liechtenstein</option>
                    <option value="LT">Lithuania</option>
                    <option value="LU">Luxembourg</option>
                    <option value="MO">Macao SAR</option>
                    <option value="MY">Malaysia</option>
                    <option value="MT">Malta</option>
                    <option value="YT">Mayotte</option>
                    <option value="MX">Mexico</option>
                    <option value="MD">Moldova</option>
                    <option value="MC">Monaco</option>
                    <option value="ME">Montenegro</option>
                    <option value="MA">Morocco</option>
                    <option value="NL">Netherlands</option>
                    <option value="MK">North Macedonia</option>
                    <option value="NO">Norway</option>
                    <option value="PK">Pakistan</option>
                    <option value="PH">Philippines</option>
                    <option value="PL">Poland</option>
                    <option value="PT">Portugal</option>
                    <option value="QA">Qatar</option>
                    <option value="RE">Réunion</option>
                    <option value="RO">Romania</option>
                    <option value="SM">San Marino</option>
                    <option value="SA">Saudi Arabia</option>
                    <option value="RS">Serbia</option>
                    <option value="SG">Singapore</option>
                    <option value="SK">Slovakia</option>
                    <option value="SI">Slovenia</option>
                    <option value="ZA">South Africa</option>
                    <option value="KR">South Korea</option>
                    <option value="ES">Spain</option>
                    <option value="SJ">Svalbard &amp; Jan Mayen</option>
                    <option value="SE">Sweden</option>
                    <option value="CH">Switzerland</option>
                    <option value="TW">Taiwan</option>
                    <option value="TH">Thailand</option>
                    <option value="TR">Turkey</option>
                    <option value="UA">Ukraine</option>
                    <option value="AE">United Arab Emirates</option>
                    <option value="GB">United Kingdom</option>
                    <option value="US">United States</option>
                    <option value="VA">Vatican City</option>
                    <option value="VN">Vietnam</option>
                    <option value="YE">Yemen</option>

                </select>
                <div className="row mb-3">
                    <div className="col-6 firstNameCol">
                        <div className="form-floating">
                            <input type="text" className="form-control shadow-none" id="fname" placeholder="fname" required />
                            <label htmlFor="fname">First Name</label>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="form-floating">
                            <input type="text" className="form-control shadow-none" id="lname" placeholder="lname" required />
                            <label htmlFor="lname">Last Name</label>
                        </div>
                    </div>
                </div>

                <div className="form-floating mb-3">
                    <input type="text" className="form-control shadow-none" name="address" id="address" placeholder="address" value={user.address} onChange={handleInputs} required />
                    <label htmlFor="address">Address</label>
                </div>

                <div className="form-floating mb-3">
                    <input type="text" className="form-control shadow-none" id="apartment" placeholder="apartment, suit, etc. (optional)" required />
                    <label htmlFor="apartment">Apartment, suit, etc. (optional)</label>
                </div>

                <div className="row mb-3">
                    <div className="col-6 cityCol">
                        <div className="form-floating">
                            <input type="text" className="form-control shadow-none" id="city" placeholder="city" required />
                            <label htmlFor="city">City</label>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="form-floating">
                            <input type="text" className="form-control shadow-none" id="postalCode" placeholder="Postal Code" required />
                            <label htmlFor="postalCode">Postal Code</label>
                        </div>
                    </div>
                </div>

                <div className="form-floating">
                    <input type="text" className="form-control shadow-none" id="phone" placeholder="phone" required />
                    <label htmlFor="phone">Phone</label>
                </div>
            </div>

            <div className="form-check shadow-none mb-3">
                <input className="form-check-input shadow-none" type="checkbox" id="SaveInfoCheckbox" />
                <label htmlFor="SaveInfoCheckbox">Save this information for next time</label>
            </div>

            <div className="CheckoutFooterBtn">
                <Link  to="/cart" className="return__Cart"><i className="fa-solid fa-chevron-left me-3"></i>Return to Cart</Link>
                <button type="submit" className="btn shadow-none"><Link to="/shipping" className="text-white">Continue to shipping</Link></button>
            </div>
        </form>
    );
};

export default CheckoutForm;