import { useContext, useEffect, useState } from "react";
import { UserAuth } from "../contexts/AuthContext";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { AccountDetails } from "../components/Account/AccountDetails";
import { EmailPreference } from "../components/Account/EmailPreferences";
import { NavigationSide } from "../components/Account/NavigationSide";
export const Account = () => {
  const { user, setUser, login, logout } = UserAuth();
  const [active,setActive] = useState(2);
  return (
    <div className="pt-[55px]">
      <Navbar></Navbar>
      <div className="grid grid-cols-6 px-4 sm:px-9 mb-[100px]">
      <div className="col-span-1 flex mt-[45px] ml-3">
          <NavigationSide></NavigationSide>
      </div>
      <div className="col-span-4 pl-3 flex justify-center min-h-[75vh]">
        {/* {active === 1 && (
          <div className="mt-[35px]">
            {orderHistory.length > 0 && <div>Has Order</div>}
            {orderHistory.length === 0 && <div>u don't have any orders</div>}
          </div>
        )} */}

        {/* {active === 2 && (
          <form className="text-xs w-[480px] mt-[35px]">
            <h1 className="capitalize text-base text-center mb-[25px] ">
              Account details
            </h1>
            <h2 className="mb-2.5">Edit your preference below</h2>
            <div className="flex flex-col">
              <h3 className="text-[13px] font-normal leading-5">
                Account information
              </h3>
              <label htmlFor="firstname" className="mt-2.5 mb-[5px]">
                First name
              </label>
              <input
                type="text"
                id="firstname"
                placeholder={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                className={`text-xs w-full ${
                  submit === true && firstName.length === 0
                    ? "border-red-600 focus:border-red-600"
                    : "border-black focus:border-black"
                } border-[0.8px] h-[30px] outline-none px-1.5 focus:ring-0`}
              />
              {submit === true && firstName.length === 0 && (
                <p className="mt-1 mb-2.5 text-red-600">
                  Please fill out this field.
                </p>
              )}
              <label htmlFor="lastname" className="mt-2.5 mb-[5px]">
                Last name
              </label>
              <input
                type="text"
                id="lastname"
                placeholder={lastName}
                className={`text-xs w-full ${
                  submit === true && lastName.length === 0
                    ? "border-red-600 focus:border-red-600"
                    : "border-black focus:border-black"
                }  border-[0.8px] h-[30px] outline-none px-1.5 focus:ring-0`}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
              {submit === true && lastName.length === 0 && (
                <p className="mt-1 text-red-600 mb-2.5">
                  Please fill out this field.
                </p>
              )}
              <label htmlFor="email" className="mt-2.5 mb-[5px]">
                Email
              </label>
              <input
                type="email"
                id="email"
                disabled
                value={email}
                className="text-xs w-full border-[#ccc] border-[0.8px] h-[30px] outline-none px-1.5 mb-5 cursor-not-allowed"
              />
            </div>
            <div className="flex flex-col">
              <h3 className="text-[13px] font-normal leading-5">
                Account information
              </h3>
              <label htmlFor="oldpassword" className="mt-2.5 mb-[5px]">
                Old password
              </label>
              <input
                type="text"
                id="oldpassword"
                className="text-xs w-full border-black border-[0.8px] h-[30px] outline-none px-1.5"
              />
              <label htmlFor="newpassword" className="mt-2.5 mb-[5px]">
                New password
              </label>
              <input
                type="text"
                id="newpassword"
                className="text-xs w-full border-black border-[0.8px] h-[30px] outline-none px-1.5 mb-5"
              />
            </div>
            <div className="grid place-items-center mt-5">
              <button
                className="text-xs w-[200px] px-7.5 py-[6px] bg-black text-white"
                onClick={(e) => {
                  handleAccountDetails(e);
                }}
              >
                SAVE CHANGES
              </button>
            </div>
          </form>
        )} */}
        {active === 3 && (
          <EmailPreference></EmailPreference>
        )}
        {/* {active === 4 && (
          <div className="mt-[35px]">
            {!addressActive && (
              <div className="max-w-[480px]">
                <h1 className="text-base text-center mb-[60px]">
                  Saved addresses
                </h1>
                <button
                  onClick={handleAddressSection}
                  className="text-xs min-w-[140px] uppercase font-bold px-[30px] py-[6px] bg-black text-white"
                >
                  Add new address
                </button>
              </div>
            )}
            {addressActive && (
              <form className="min-w-[480px]">
                <h1 className="text-base text-center mb-[25px]">
                  Add an address
                </h1>
                <div className="flex flex-col">
                  <label className="text-xs mb-[5px]" htmlFor="">
                    First name
                  </label>
                  <input
                    type="text"
                    id=""
                    className="text-xs w-full border-black border-[0.8px] h-[30px] outline-none px-1.5 mb-5"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-xs mb-[5px]" htmlFor="">
                    Last name
                  </label>
                  <input
                    type="text"
                    id=""
                    className="text-xs w-full border-black border-[0.8px] h-[30px] outline-none px-1.5 mb-5"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-xs mb-[5px]" htmlFor="">
                    Company
                  </label>
                  <input
                    type="text"
                    id=""
                    className="text-xs w-full border-black border-[0.8px] h-[30px] outline-none px-1.5 mb-5"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-xs mb-[5px]" htmlFor="">
                    Street address
                  </label>
                  <input
                    type="text"
                    id=""
                    className="text-xs w-full border-black border-[0.8px] h-[30px] outline-none px-1.5 mb-5"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-xs mb-[5px]" htmlFor="">
                    Country
                  </label>
                  <select
                    className="w-full border-[0.8px] border-black min-h-[30px] text-xs mb-5"
                    id="addresses-form-country-input"
                  >
                    <option value="" disabled="disabled">
                      Select
                    </option>{" "}
                    <option value="af">Afghanistan</option>
                    <option value="al">Albania</option>
                    <option value="dz">Algeria</option>
                    <option value="as">American Samoa</option>
                    <option value="ad">Andorra</option>
                    <option value="ao">Angola</option>
                    <option value="ai">Anguilla</option>
                    <option value="aq">Antarctica</option>
                    <option value="ag">Antigua And Barbuda</option>
                    <option value="ar">Argentina</option>
                    <option value="am">Armenia</option>
                    <option value="aw">Aruba</option>
                    <option value="au">Australia</option>
                    <option value="at">Austria</option>
                    <option value="az">Azerbaijan</option>
                    <option value="bs">Bahamas</option>
                    <option value="bh">Bahrain</option>
                    <option value="bd">Bangladesh</option>
                    <option value="bb">Barbados</option>
                    <option value="by">Belarus</option>
                    <option value="be">Belgium</option>
                    <option value="bz">Belize</option>
                    <option value="bj">Benin</option>
                    <option value="bm">Bermuda</option>
                    <option value="bt">Bhutan</option>
                    <option value="bo">Bolivia</option>
                    <option value="ba">Bosnia And Herzegowina</option>
                    <option value="bw">Botswana</option>
                    <option value="bv">Bouvet Island</option>
                    <option value="br">Brazil</option>
                    <option value="io">British Indian Ocean Territory</option>
                    <option value="bn">Brunei Darussalam</option>
                    <option value="bg">Bulgaria</option>
                    <option value="bf">Burkina Faso</option>
                    <option value="bi">Burundi</option>
                    <option value="kh">Cambodia</option>
                    <option value="cm">Cameroon</option>
                    <option value="ca">Canada</option>
                    <option value="cv">Cape Verde</option>
                    <option value="ky">Cayman Islands</option>
                    <option value="cf">Central African Republic</option>
                    <option value="td">Chad</option>
                    <option value="cl">Chile</option>
                    <option value="cn">China</option>
                    <option value="cx">Christmas Island</option>
                    <option value="cc">Cocos Islands</option>
                    <option value="co">Colombia</option>
                    <option value="km">Comoros</option>
                    <option value="cg">Congo</option>
                    <option value="ck">Cook Islands</option>
                    <option value="cr">Costa Rica</option>
                    <option value="ci">Cote dIvoire</option>
                    <option value="hr">Croatia</option>
                    <option value="cw">Curacao</option>
                    <option value="cy">Cyprus</option>
                    <option value="cz">Czech Republic</option>
                    <option value="cd">Democratic Republic of the Congo</option>
                    <option value="dk">Denmark</option>
                    <option value="dj">Djibouti</option>
                    <option value="dm">Dominica</option>
                    <option value="do">Dominican Republic</option>
                    <option value="ec">Ecuador</option>
                    <option value="eg">Egypt</option>
                    <option value="sv">El Salvador</option>
                    <option value="gq">Equatorial Guinea</option>
                    <option value="er">Eritrea</option>
                    <option value="ee">Estonia</option>
                    <option value="et">Ethiopia</option>
                    <option value="fk">Falkland Islands</option>
                    <option value="fo">Faroe Islands</option>
                    <option value="fj">Fiji</option>
                    <option value="fi">Finland</option>
                    <option value="fr">France</option>
                    <option value="gf">French Guiana</option>
                    <option value="pf">French Polynesia</option>
                    <option value="tf">French Southern</option>
                    <option value="ga">Gabon</option>
                    <option value="gm">Gambia</option>
                    <option value="ge">Georgia</option>
                    <option value="de">Germany</option>
                    <option value="gh">Ghana</option>
                    <option value="gi">Gibraltar</option>
                    <option value="gr">Greece</option>
                    <option value="gl">Greenland</option>
                    <option value="gd">Grenada</option>
                    <option value="gp">Guadeloupe</option>
                    <option value="gu">Guam</option>
                    <option value="gt">Guatemala</option>
                    <option value="gn">Guinea</option>
                    <option value="gw">Guinea-Bissau</option>
                    <option value="gy">Guyana</option>
                    <option value="ht">Haiti</option>
                    <option value="hm">Heard And Mc Donald</option>
                    <option value="hn">Honduras</option>
                    <option value="hk">Hong Kong SAR</option>
                    <option value="hu">Hungary</option>
                    <option value="is">Iceland</option>
                    <option value="in">India</option>
                    <option value="id">Indonesia</option>
                    <option value="iq">Iraq</option>
                    <option value="ie">Ireland</option>
                    <option value="il">Israel</option>
                    <option value="it">Italy</option>
                    <option value="jm">Jamaica</option>
                    <option value="jp">Japan</option>
                    <option value="jo">Jordan</option>
                    <option value="kz">Kazakhstan</option>
                    <option value="ke">Kenya</option>
                    <option value="ki">Kiribati</option>
                    <option value="kw">Kuwait</option>
                    <option value="kg">Kyrgyzstan</option>
                    <option value="la">Lao Peoples Republic</option>
                    <option value="lv">Latvia</option>
                    <option value="lb">Lebanon</option>
                    <option value="ls">Lesotho</option>
                    <option value="lr">Liberia</option>
                    <option value="ly">Libya</option>
                    <option value="li">Liechtenstein</option>
                    <option value="lt">Lithuania</option>
                    <option value="lu">Luxembourg</option>
                    <option value="mo">Macau SAR</option>
                    <option value="mk">Macedonia</option>
                    <option value="mg">Madagascar</option>
                    <option value="mw">Malawi</option>
                    <option value="my">Malaysia</option>
                    <option value="mv">Maldives</option>
                    <option value="ml">Mali</option>
                    <option value="mt">Malta</option>
                    <option value="mh">Marshall Islands</option>
                    <option value="mq">Martinique</option>
                    <option value="mr">Mauritania</option>
                    <option value="mu">Mauritius</option>
                    <option value="yt">Mayotte</option>
                    <option value="mx">Mexico</option>
                    <option value="fm">Micronesia</option>
                    <option value="md">Moldova</option>
                    <option value="mc">Monaco</option>
                    <option value="mn">Mongolia</option>
                    <option value="me">Montenegro</option>
                    <option value="ms">Montserrat</option>
                    <option value="ma">Morocco</option>
                    <option value="mz">Mozambique</option>
                    <option value="mm">Myanmar</option>
                    <option value="na">Namibia</option>
                    <option value="nr">Nauru</option>
                    <option value="np">Nepal</option>
                    <option value="nl">Netherlands</option>
                    <option value="nc">New Caledonia</option>
                    <option value="nz">New Zealand</option>
                    <option value="ni">Nicaragua</option>
                    <option value="ne">Niger</option>
                    <option value="ng">Nigeria</option>
                    <option value="nu">Niue</option>
                    <option value="nf">Norfolk Island</option>
                    <option value="mp">Northern Mariana Islands</option>
                    <option value="no">Norway</option>
                    <option value="om">Oman</option>
                    <option value="pk">Pakistan</option>
                    <option value="pw">Palau</option>
                    <option value="ps">Palestine</option>
                    <option value="pa">Panama</option>
                    <option value="pg">Papua New Guinea</option>
                    <option value="py">Paraguay</option>
                    <option value="pe">Peru</option>
                    <option value="ph">Philippines</option>
                    <option value="pn">Pitcairn</option>
                    <option value="pl">Poland</option>
                    <option value="pt">Portugal</option>
                    <option value="pr">Puerto Rico</option>
                    <option value="qa">Qatar</option>
                    <option value="re">Reunion</option>
                    <option value="ro">Romania</option>
                    <option value="ru">Russia</option>
                    <option value="rw">Rwanda</option>
                    <option value="kn">Saint Kitts And Nevis</option>
                    <option value="lc">Saint Lucia</option>
                    <option value="ws">Samoa</option>
                    <option value="sm">San Marino</option>
                    <option value="st">Sao Tome And Principe</option>
                    <option value="sa">Saudi Arabia</option>
                    <option value="sn">Senegal</option>
                    <option value="rs">Serbia</option>
                    <option value="sc">Seychelles</option>
                    <option value="sl">Sierra Leone</option>
                    <option value="sg">Singapore</option>
                    <option value="sx">Sint Maarten</option>
                    <option value="sk">Slovakia (Slovak Republic)</option>
                    <option value="si">Slovenia</option>
                    <option value="sb">Solomon Islands</option>
                    <option value="so">Somalia</option>
                    <option value="za">South Africa</option>
                    <option value="gs">South Georgia Sandwich</option>
                    <option value="kr">South Korea</option>
                    <option value="es">Spain</option>
                    <option value="lk">Sri Lanka</option>
                    <option value="vc">St-Vincent Grenadines</option>
                    <option value="sh">St. Helena</option>
                    <option value="pm">St. Pierre And Miquelon</option>
                    <option value="sr">Suriname</option>
                    <option value="sj">Svalbard And Jan Mayen</option>
                    <option value="sz">Swaziland</option>
                    <option value="se">Sweden</option>
                    <option value="ch">Switzerland</option>
                    <option value="tw">Taiwan, China</option>
                    <option value="tj">Tajikistan</option>
                    <option value="tz">Tanzania</option>
                    <option value="th">Thailand</option>
                    <option value="tg">Togo</option>
                    <option value="tk">Tokelau</option>
                    <option value="to">Tonga</option>
                    <option value="tt">Trinidad And Tobago</option>
                    <option value="tn">Tunisia</option>
                    <option value="tr">Turkey</option>
                    <option value="tm">Turkmenistan</option>
                    <option value="tc">Turks And Caicos Islands</option>
                    <option value="tv">Tuvalu</option>
                    <option value="ug">Uganda</option>
                    <option value="ua">Ukraine</option>
                    <option value="ae">United Arab Emirates</option>
                    <option value="gb">United Kingdom</option>
                    <option value="us">United States</option>
                    <option value="um">
                      United States Minor Outlying Islands
                    </option>
                    <option value="uy">Uruguay</option>
                    <option value="uz">Uzbekistan</option>
                    <option value="vu">Vanuatu</option>
                    <option value="va">Vatican City State</option>
                    <option value="ve">Venezuela</option>
                    <option value="vn">Viet Nam</option>
                    <option value="vg">Virgin Islands (British)</option>
                    <option value="vi">Virgin Islands (U.S.)</option>
                    <option value="wf">Wallis And Futuna Islands</option>
                    <option value="eh">Western Sahara</option>
                    <option value="ye">Yemen</option>
                    <option value="zm">Zambia</option>
                    <option value="zw">Zimbabwe</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label className="text-xs mb-[5px]" htmlFor="">
                    Province
                  </label>
                  <select
                    className="w-full border-[0.8px] border-black min-h-[30px] text-xs mb-5"
                    id="addresses-form-country-input"
                  >
                    <option value="" disabled="disabled">
                      Select
                    </option>{" "}
                    <option value="af">Afghanistan</option>
                    <option value="al">Albania</option>
                    <option value="dz">Algeria</option>
                    <option value="as">American Samoa</option>
                    <option value="ad">Andorra</option>
                    <option value="ao">Angola</option>
                    <option value="ai">Anguilla</option>
                    <option value="aq">Antarctica</option>
                    <option value="ag">Antigua And Barbuda</option>
                    <option value="ar">Argentina</option>
                    <option value="am">Armenia</option>
                    <option value="aw">Aruba</option>
                    <option value="au">Australia</option>
                    <option value="at">Austria</option>
                    <option value="az">Azerbaijan</option>
                    <option value="bs">Bahamas</option>
                    <option value="bh">Bahrain</option>
                    <option value="bd">Bangladesh</option>
                    <option value="bb">Barbados</option>
                    <option value="by">Belarus</option>
                    <option value="be">Belgium</option>
                    <option value="bz">Belize</option>
                    <option value="bj">Benin</option>
                    <option value="bm">Bermuda</option>
                    <option value="bt">Bhutan</option>
                    <option value="bo">Bolivia</option>
                    <option value="ba">Bosnia And Herzegowina</option>
                    <option value="bw">Botswana</option>
                    <option value="bv">Bouvet Island</option>
                    <option value="br">Brazil</option>
                    <option value="io">British Indian Ocean Territory</option>
                    <option value="bn">Brunei Darussalam</option>
                    <option value="bg">Bulgaria</option>
                    <option value="bf">Burkina Faso</option>
                    <option value="bi">Burundi</option>
                    <option value="kh">Cambodia</option>
                    <option value="cm">Cameroon</option>
                    <option value="ca">Canada</option>
                    <option value="cv">Cape Verde</option>
                    <option value="ky">Cayman Islands</option>
                    <option value="cf">Central African Republic</option>
                    <option value="td">Chad</option>
                    <option value="cl">Chile</option>
                    <option value="cn">China</option>
                    <option value="cx">Christmas Island</option>
                    <option value="cc">Cocos Islands</option>
                    <option value="co">Colombia</option>
                    <option value="km">Comoros</option>
                    <option value="cg">Congo</option>
                    <option value="ck">Cook Islands</option>
                    <option value="cr">Costa Rica</option>
                    <option value="ci">Cote dIvoire</option>
                    <option value="hr">Croatia</option>
                    <option value="cw">Curacao</option>
                    <option value="cy">Cyprus</option>
                    <option value="cz">Czech Republic</option>
                    <option value="cd">Democratic Republic of the Congo</option>
                    <option value="dk">Denmark</option>
                    <option value="dj">Djibouti</option>
                    <option value="dm">Dominica</option>
                    <option value="do">Dominican Republic</option>
                    <option value="ec">Ecuador</option>
                    <option value="eg">Egypt</option>
                    <option value="sv">El Salvador</option>
                    <option value="gq">Equatorial Guinea</option>
                    <option value="er">Eritrea</option>
                    <option value="ee">Estonia</option>
                    <option value="et">Ethiopia</option>
                    <option value="fk">Falkland Islands</option>
                    <option value="fo">Faroe Islands</option>
                    <option value="fj">Fiji</option>
                    <option value="fi">Finland</option>
                    <option value="fr">France</option>
                    <option value="gf">French Guiana</option>
                    <option value="pf">French Polynesia</option>
                    <option value="tf">French Southern</option>
                    <option value="ga">Gabon</option>
                    <option value="gm">Gambia</option>
                    <option value="ge">Georgia</option>
                    <option value="de">Germany</option>
                    <option value="gh">Ghana</option>
                    <option value="gi">Gibraltar</option>
                    <option value="gr">Greece</option>
                    <option value="gl">Greenland</option>
                    <option value="gd">Grenada</option>
                    <option value="gp">Guadeloupe</option>
                    <option value="gu">Guam</option>
                    <option value="gt">Guatemala</option>
                    <option value="gn">Guinea</option>
                    <option value="gw">Guinea-Bissau</option>
                    <option value="gy">Guyana</option>
                    <option value="ht">Haiti</option>
                    <option value="hm">Heard And Mc Donald</option>
                    <option value="hn">Honduras</option>
                    <option value="hk">Hong Kong SAR</option>
                    <option value="hu">Hungary</option>
                    <option value="is">Iceland</option>
                    <option value="in">India</option>
                    <option value="id">Indonesia</option>
                    <option value="iq">Iraq</option>
                    <option value="ie">Ireland</option>
                    <option value="il">Israel</option>
                    <option value="it">Italy</option>
                    <option value="jm">Jamaica</option>
                    <option value="jp">Japan</option>
                    <option value="jo">Jordan</option>
                    <option value="kz">Kazakhstan</option>
                    <option value="ke">Kenya</option>
                    <option value="ki">Kiribati</option>
                    <option value="kw">Kuwait</option>
                    <option value="kg">Kyrgyzstan</option>
                    <option value="la">Lao Peoples Republic</option>
                    <option value="lv">Latvia</option>
                    <option value="lb">Lebanon</option>
                    <option value="ls">Lesotho</option>
                    <option value="lr">Liberia</option>
                    <option value="ly">Libya</option>
                    <option value="li">Liechtenstein</option>
                    <option value="lt">Lithuania</option>
                    <option value="lu">Luxembourg</option>
                    <option value="mo">Macau SAR</option>
                    <option value="mk">Macedonia</option>
                    <option value="mg">Madagascar</option>
                    <option value="mw">Malawi</option>
                    <option value="my">Malaysia</option>
                    <option value="mv">Maldives</option>
                    <option value="ml">Mali</option>
                    <option value="mt">Malta</option>
                    <option value="mh">Marshall Islands</option>
                    <option value="mq">Martinique</option>
                    <option value="mr">Mauritania</option>
                    <option value="mu">Mauritius</option>
                    <option value="yt">Mayotte</option>
                    <option value="mx">Mexico</option>
                    <option value="fm">Micronesia</option>
                    <option value="md">Moldova</option>
                    <option value="mc">Monaco</option>
                    <option value="mn">Mongolia</option>
                    <option value="me">Montenegro</option>
                    <option value="ms">Montserrat</option>
                    <option value="ma">Morocco</option>
                    <option value="mz">Mozambique</option>
                    <option value="mm">Myanmar</option>
                    <option value="na">Namibia</option>
                    <option value="nr">Nauru</option>
                    <option value="np">Nepal</option>
                    <option value="nl">Netherlands</option>
                    <option value="nc">New Caledonia</option>
                    <option value="nz">New Zealand</option>
                    <option value="ni">Nicaragua</option>
                    <option value="ne">Niger</option>
                    <option value="ng">Nigeria</option>
                    <option value="nu">Niue</option>
                    <option value="nf">Norfolk Island</option>
                    <option value="mp">Northern Mariana Islands</option>
                    <option value="no">Norway</option>
                    <option value="om">Oman</option>
                    <option value="pk">Pakistan</option>
                    <option value="pw">Palau</option>
                    <option value="ps">Palestine</option>
                    <option value="pa">Panama</option>
                    <option value="pg">Papua New Guinea</option>
                    <option value="py">Paraguay</option>
                    <option value="pe">Peru</option>
                    <option value="ph">Philippines</option>
                    <option value="pn">Pitcairn</option>
                    <option value="pl">Poland</option>
                    <option value="pt">Portugal</option>
                    <option value="pr">Puerto Rico</option>
                    <option value="qa">Qatar</option>
                    <option value="re">Reunion</option>
                    <option value="ro">Romania</option>
                    <option value="ru">Russia</option>
                    <option value="rw">Rwanda</option>
                    <option value="kn">Saint Kitts And Nevis</option>
                    <option value="lc">Saint Lucia</option>
                    <option value="ws">Samoa</option>
                    <option value="sm">San Marino</option>
                    <option value="st">Sao Tome And Principe</option>
                    <option value="sa">Saudi Arabia</option>
                    <option value="sn">Senegal</option>
                    <option value="rs">Serbia</option>
                    <option value="sc">Seychelles</option>
                    <option value="sl">Sierra Leone</option>
                    <option value="sg">Singapore</option>
                    <option value="sx">Sint Maarten</option>
                    <option value="sk">Slovakia (Slovak Republic)</option>
                    <option value="si">Slovenia</option>
                    <option value="sb">Solomon Islands</option>
                    <option value="so">Somalia</option>
                    <option value="za">South Africa</option>
                    <option value="gs">South Georgia Sandwich</option>
                    <option value="kr">South Korea</option>
                    <option value="es">Spain</option>
                    <option value="lk">Sri Lanka</option>
                    <option value="vc">St-Vincent Grenadines</option>
                    <option value="sh">St. Helena</option>
                    <option value="pm">St. Pierre And Miquelon</option>
                    <option value="sr">Suriname</option>
                    <option value="sj">Svalbard And Jan Mayen</option>
                    <option value="sz">Swaziland</option>
                    <option value="se">Sweden</option>
                    <option value="ch">Switzerland</option>
                    <option value="tw">Taiwan, China</option>
                    <option value="tj">Tajikistan</option>
                    <option value="tz">Tanzania</option>
                    <option value="th">Thailand</option>
                    <option value="tg">Togo</option>
                    <option value="tk">Tokelau</option>
                    <option value="to">Tonga</option>
                    <option value="tt">Trinidad And Tobago</option>
                    <option value="tn">Tunisia</option>
                    <option value="tr">Turkey</option>
                    <option value="tm">Turkmenistan</option>
                    <option value="tc">Turks And Caicos Islands</option>
                    <option value="tv">Tuvalu</option>
                    <option value="ug">Uganda</option>
                    <option value="ua">Ukraine</option>
                    <option value="ae">United Arab Emirates</option>
                    <option value="gb">United Kingdom</option>
                    <option value="us">United States</option>
                    <option value="um">
                      United States Minor Outlying Islands
                    </option>
                    <option value="uy">Uruguay</option>
                    <option value="uz">Uzbekistan</option>
                    <option value="vu">Vanuatu</option>
                    <option value="va">Vatican City State</option>
                    <option value="ve">Venezuela</option>
                    <option value="vn">Viet Nam</option>
                    <option value="vg">Virgin Islands (British)</option>
                    <option value="vi">Virgin Islands (U.S.)</option>
                    <option value="wf">Wallis And Futuna Islands</option>
                    <option value="eh">Western Sahara</option>
                    <option value="ye">Yemen</option>
                    <option value="zm">Zambia</option>
                    <option value="zw">Zimbabwe</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label className="text-xs mb-[5px]" htmlFor="">
                    City
                  </label>
                  <input
                    type="text"
                    id=""
                    className="text-xs w-full border-black border-[0.8px] h-[30px] outline-none px-1.5 mb-5"
                  />
                </div>
                <div className="flex">
                  <div className="flex flex-col w-1/2">
                    <label className="text-xs mb-[5px]" htmlFor="">
                      ZIP or postal code
                    </label>
                    <input
                      type="text"
                      id=""
                      className="text-xs w-full border-black border-[0.8px] h-[30px] outline-none px-1.5 mb-5"
                    />
                  </div>
                  <div className="flex flex-col w-1/2 pl-3">
                    <label className="text-xs mb-[5px]" htmlFor="">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id=""
                      className="text-xs w-full border-black border-[0.8px] h-[30px] outline-none px-1.5 mb-5"
                    />
                  </div>
                </div>
                <div className="mb-[5px]">
                  <input type="checkbox" name="" id="" className="mr-3" />
                  <label htmlFor="billingAddress" className="text-xs">
                    Set as default billing address
                  </label>
                </div>
                <div className="mb-5">
                  <input type="checkbox" name="" id="" className="mr-3" />
                  <label htmlFor="shippingAddress" className="text-xs">
                    Set as default shipping address
                  </label>
                </div>
                <div className="grid place-items-center">
                  <div>
                    <button
                      onClick={() => {
                        setAddressActive(false);
                      }}
                      className="text-xs min-w-[140px] px-7.5 py-[6px] bg-white text-black border border-black"
                    >
                      Cancel
                    </button>
                    <button className="text-xs min-w-[140px] px-7.5 py-[6px] bg-black text-white border border-black ml-3">
                      Save
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        )} */}
      </div>
    </div>
      <AccountDetails></AccountDetails>
      <Footer></Footer>
    </div>
  );
};
