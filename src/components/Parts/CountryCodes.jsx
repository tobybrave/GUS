import React from 'react';
import { Select } from '@chakra-ui/react';

function CountryCodes({ country, handleCountryChange }) {
  return (
    <Select id="country-code" maxWidth="30%" mr="2" variant="filled" name="country_code" value={country} onChange={handleCountryChange}>
      <option value="AF" data-countrycode="+93">🇦🇫 Afghanistan (+93)</option>
      <option value="AL" data-countrycode="+355">🇦🇽 Albania (+355)</option>
      <option value="DZ" data-countrycode="+213">🇩🇿 Algeria (+213)</option>
      <option value="AD" data-countrycode="+376">🇦🇩 Andorra (+376)</option>
      <option value="AO" data-countrycode="+244">🇦🇴 Angola (+244)</option>
      <option value="AI" data-countrycode="+1264">🇦🇮 Anguilla (+1264)</option>
      <option value="AG" data-countrycode="+1268">🇦🇬 Antigua &amp; Barbuda(+1268)</option>
      <option value="AR" data-countrycode="+54">🇦🇷 Argentina (+54)</option>
      <option value="AM" data-countrycode="+374">🇦🇲 Armenia (+374)</option>
      <option value="AW" data-countrycode="+297">🇦🇼 Aruba (+297)</option>
      <option value="AC" data-countrycode="+247">🇦🇨 Ascension Island (+297)</option>
      <option value="AU" data-countrycode="+61">🇦🇺 Australia (+61)</option>
      <option value="AT" data-countrycode="+43">🇦🇹 Austria (+43)</option>
      <option value="AZ" data-countrycode="+994">🇦🇿 Azerbaijan (+994)</option>
      <option value="BS" data-countrycode="+1242">🇧🇸 Bahamas (+1242)</option>
      <option value="BH" data-countrycode="+973">🇧🇭 Bahrain (+973)</option>
      <option value="BD" data-countrycode="+880">🇧🇩 Bangladesh (+880)</option>
      <option value="BB" data-countrycode="+1246">🇧🇧 Barbados (+1246)</option>
      <option value="BY" data-countrycode="+375">🇧🇾 Belarus (+375)</option>
      <option value="BE" data-countrycode="+32">🇧🇪 Belgium (+32)</option>
      <option value="BZ" data-countrycode="+501">🇧🇿 Belize (+501)</option>
      <option value="BJ" data-countrycode="+229">🇧🇯 Benin (+229)</option>
      <option value="BM" data-countrycode="+1441">🇧🇲 Bermuda (+1441)</option>
      <option value="BT" data-countrycode="+975">🇧🇹 Bhutan (+975)</option>
      <option value="BO" data-countrycode="+591">🇧🇴 Bolivia (+591)</option>
      <option value="BQ" data-countrycode="+599">🇧🇶 Bonaire, Saba and Sint Eustatius(+599)</option>
      <option value="BA" data-countrycode="+387">🇧🇦 Bosnia Herzegovina (+387)</option>
      <option value="BW" data-countrycode="+267">🇧🇼 Botswana (+267)</option>
      <option value="BR" data-countrycode="+55">🇧🇷 Brazil (+55)</option>
      <option value="IO" data-countrycode="+246">🇮🇴 British Indian Ocean Territory(+246)</option>
      <option value="BN" data-countrycode="+673">🇧🇳 Brunei (+673)</option>
      <option value="BG" data-countrycode="+359">🇧🇬 Bulgaria (+359)</option>
      <option value="BF" data-countrycode="+226">🇧🇫 Burkina Faso (+226)</option>
      <option value="BI" data-countrycode="+257">🇧🇮 Burundi (+257)</option>
      <option value="KH" data-countrycode="+855">🇰🇭 Cambodia (+855)</option>
      <option value="CM" data-countrycode="+237">🇨🇲 Cameroon (+237)</option>
      <option value="CA" data-countrycode="+1">🇨🇦 Canada (+1)</option>
      <option value="CV" data-countrycode="+238">🇨🇻 Cape Verde Islands (+238)</option>
      <option value="KY" data-countrycode="+1345">🇰🇾 Cayman Islands (+1345)</option>
      <option value="CF" data-countrycode="+236">🇨🇫 Central African Republic(+236)</option>
      <option value="TD" data-countrycode="+235">🇹🇩 Chad (+235)</option>
      <option value="CL" data-countrycode="+56">🇨🇱 Chile (+56)</option>
      <option value="CN" data-countrycode="+86">🇨🇳 China (+86)</option>
      <option value="CO" data-countrycode="+57">🇨🇴 Colombia (+57)</option>
      <option value="KM" data-countrycode="+269">🇰🇲 Comoros (+269)</option>
      <option value="CG" data-countrycode="+242">🇨🇬 Congo (+242)</option>
      <option value="CD" data-countrycode="+243">🇨🇩 Democratic Republic of the Congo(+243)</option>
      <option value="CK" data-countrycode="+682">🇨🇰 Cook Islands (+682)</option>
      <option value="CR" data-countrycode="+506">🇨🇷 Costa Rica (+506)</option>
      <option value="HR" data-countrycode="+385">🇭🇷 Croatia (+385)</option>
      <option value="CU" data-countrycode="+53">🇨🇺 Cuba (+53)</option>
      <option value="CW" data-countrycode="+5999">🇨🇼 Curaçao (+5999)</option>
      <option value="CY" data-countrycode="+357">🇨🇾 Cyprus (+357)</option>
      <option value="CZ" data-countrycode="+420">🇨🇿 Czech Republic (+420)</option>
      <option value="DK" data-countrycode="+45">🇩🇰 Denmark (+45)</option>
      <option value="DJ" data-countrycode="+253">🇩🇯 Djibouti (+253)</option>
      <option value="DM" data-countrycode="+1767">🇩🇲 Dominica (+1767)</option>
      <option value="DO" data-countrycode="+1809">🇩🇴 Dominican Republic(+1809)</option>
      <option value="TL" data-countrycode="+670">🇹🇱 East Timor (+670)</option>
      <option value="EC" data-countrycode="+593">🇪🇨 Ecuador (+593)</option>
      <option value="EG" data-countrycode="+20">🇪🇬 Egypt (+20)</option>
      <option value="SV" data-countrycode="+503">🇸🇻 El Salvador (+503)</option>
      <option value="GQ" data-countrycode="+240">🇬🇶 Equatorial Guinea (+240)</option>
      <option value="ER" data-countrycode="+291">🇪🇷 Eritrea (+291)</option>
      <option value="EE" data-countrycode="+372">🇪🇪 Estonia (+372)</option>
      <option value="SZ" data-countrycode="+268">🇸🇿 Eswatini (+268)</option>
      <option value="ET" data-countrycode="+251">🇪🇹 Ethiopia (+251)</option>
      <option value="FK" data-countrycode="+500">🇫🇰 Falkland Islands (+500)</option>
      <option value="FO" data-countrycode="+298">🇫🇴 Faroe Islands (+298)</option>
      <option value="FJ" data-countrycode="+679">🇫🇯 Fiji (+679)</option>
      <option value="FI" data-countrycode="+358">🇫🇮 Finland (+358)</option>
      <option value="FR" data-countrycode="+33">🇫🇷 France (+33)</option>
      <option value="GF" data-countrycode="+594">🇬🇫 French Guiana (+594)</option>
      <option value="PF" data-countrycode="+689">🇵🇫 French Polynesia (+689)</option>
      <option value="GA" data-countrycode="+241">🇬🇦 Gabon (+241)</option>
      <option value="GM" data-countrycode="+220">🇬🇲 Gambia (+220)</option>
      <option value="GE" data-countrycode="+995">🇬🇪 Georgia (+995)</option>
      <option value="DE" data-countrycode="+49">🇩🇪 Germany (+49)</option>
      <option value="GH" data-countrycode="+233">🇬🇭 Ghana (+233)</option>
      <option value="GI" data-countrycode="+350">🇬🇮 Gibraltar (+350)</option>
      <option value="GR" data-countrycode="+30">🇬🇷 Greece (+30)</option>
      <option value="GL" data-countrycode="+299">🇬🇱 Greenland (+299)</option>
      <option value="GD" data-countrycode="+1473">🇬🇩 Grenada (+1473)</option>
      <option value="GP" data-countrycode="+590">🇬🇵 Guadeloupe (+590)</option>
      <option value="GU" data-countrycode="+1671">🇬🇺 Guam (+1671)</option>
      <option value="GT" data-countrycode="+502">🇬🇹 Guatemala (+502)</option>
      <option value="GN" data-countrycode="+224">🇬🇳 Guinea (+224)</option>
      <option value="GW" data-countrycode="+245">🇬🇼 Guinea - Bissau (+245)</option>
      <option value="GY" data-countrycode="+592">🇬🇾 Guyana (+592)</option>
      <option value="HT" data-countrycode="+509">🇭🇹 Haiti (+509)</option>
      <option value="HN" data-countrycode="+504">🇭🇳 Honduras (+504)</option>
      <option value="HK" data-countrycode="+852">🇭🇰 Hong Kong (+852)</option>
      <option value="HU" data-countrycode="+36">🇭🇺 Hungary (+36)</option>
      <option value="IS" data-countrycode="+354">🇮🇸 Iceland (+354)</option>
      <option value="IN" data-countrycode="+91">🇮🇳 India (+91)</option>
      <option value="ID" data-countrycode="+62">🇮🇩 Indonesia (+62)</option>
      <option value="IR" data-countrycode="+98">🇮🇷 Iran (+98)</option>
      <option value="IQ" data-countrycode="+964">🇮🇶 Iraq (+964)</option>
      <option value="IE" data-countrycode="+353">🇮🇪 Ireland (+353)</option>
      <option value="IL" data-countrycode="+972">🇮🇱 Israel (+972)</option>
      <option value="IT" data-countrycode="+39">🇮🇹 Italy (+39)</option>
      <option value="CI" data-countrycode="+225">🇨🇮 Ivory Coast (+225)</option>
      <option value="JM" data-countrycode="+1876">🇯🇲 Jamaica (+1876)</option>
      <option value="JP" data-countrycode="+81">🇯🇵 Japan (+81)</option>
      <option value="JO" data-countrycode="+962">🇯🇴 Jordan (+962)</option>
      <option value="KZ" data-countrycode="+7">🇰🇿 Kazakhstan (+7)</option>
      <option value="KE" data-countrycode="+254">🇰🇪 Kenya (+254)</option>
      <option value="KI" data-countrycode="+686">🇰🇮 Kiribati (+686)</option>
      <option value="KP" data-countrycode="+850">🇰🇵 Korea, North (+850)</option>
      <option value="KR" data-countrycode="+82">🇰🇷 Korea, South (+82)</option>
      <option value="XK" data-countrycode="+383">🇽🇰 Kosovo (+383)</option>
      <option value="KW" data-countrycode="+965">🇰🇼 Kuwait (+965)</option>
      <option value="KG" data-countrycode="+996">🇰🇬 Kyrgyzstan (+996)</option>
      <option value="LA" data-countrycode="+856">🇱🇦 Laos (+856)</option>
      <option value="LV" data-countrycode="+371">🇱🇻 Latvia (+371)</option>
      <option value="LB" data-countrycode="+961">🇱🇧 Lebanon (+961)</option>
      <option value="LS" data-countrycode="+266">🇱🇸 Lesotho (+266)</option>
      <option value="LR" data-countrycode="+231">🇱🇷 Liberia (+231)</option>
      <option value="LY" data-countrycode="+218">🇱🇾 Libya (+218)</option>
      <option value="LI" data-countrycode="+423">🇱🇮 Liechtenstein (+423)</option>
      <option value="LT" data-countrycode="+370">🇱🇹 Lithuania (+370)</option>
      <option value="LU" data-countrycode="+352">🇱🇺 Luxembourg (+352)</option>
      <option value="MO" data-countrycode="+853">🇲🇴 Macao (+853)</option>
      <option value="MK" data-countrycode="+389">🇲🇰 Macedonia (+389)</option>
      <option value="MG" data-countrycode="+261">🇲🇬 Madagascar (+261)</option>
      <option value="MW" data-countrycode="+265">🇲🇼 Malawi (+265)</option>
      <option value="MY" data-countrycode="+60">🇲🇾 Malaysia (+60)</option>
      <option value="MV" data-countrycode="+960">🇲🇻 Maldives (+960)</option>
      <option value="ML" data-countrycode="+223">🇲🇱 Mali (+223)</option>
      <option value="MT" data-countrycode="+356">🇲🇹 Malta (+356)</option>
      <option value="MH" data-countrycode="+692">🇲🇭 Marshall Islands (+692)</option>
      <option value="MQ" data-countrycode="+596">🇲🇶 Martinique (+596)</option>
      <option value="MR" data-countrycode="+222">🇲🇷 Mauritania (+222)</option>
      <option value="MU" data-countrycode="+230">🇲🇺 Mauritius (+230)</option>
      <option value="YT" data-countrycode="+262">🇾🇹 Mayotte (+262)</option>
      <option value="MX" data-countrycode="+52">🇲🇽 Mexico (+52)</option>
      <option value="FM" data-countrycode="+691">🇫🇲 Micronesia (+691)</option>
      <option value="MD" data-countrycode="+373">🇲🇩 Moldova (+373)</option>
      <option value="MC" data-countrycode="+377">🇲🇨 Monaco (+377)</option>
      <option value="MN" data-countrycode="+976">🇲🇳 Mongolia (+976)</option>
      <option value="ME" data-countrycode="+382">🇲🇪 Montenegro (+382)</option>
      <option value="MS" data-countrycode="+1664">🇲🇸 Montserrat (+1664)</option>
      <option value="MA" data-countrycode="+212">🇲🇦 Morocco (+212)</option>
      <option value="MZ" data-countrycode="+258">🇲🇿 Mozambique (+258)</option>
      <option value="MM" data-countrycode="+95">🇲🇲 Myanmar (+95)</option>
      <option value="NA" data-countrycode="+264">🇳🇦 Namibia (+264)</option>
      <option value="NR" data-countrycode="+674">🇳🇷 Nauru (+674)</option>
      <option value="NP" data-countrycode="+977">🇳🇵 Nepal (+977)</option>
      <option value="NL" data-countrycode="+31">🇳🇱 Netherlands (+31)</option>
      <option value="NC" data-countrycode="+687">🇳🇨 New Caledonia (+687)</option>
      <option value="NZ" data-countrycode="+64">🇳🇿 New Zealand (+64)</option>
      <option value="NI" data-countrycode="+505">🇳🇮 Nicaragua (+505)</option>
      <option value="NE" data-countrycode="+227">🇳🇪 Niger (+227)</option>
      <option value="NG" data-countrycode="+234">🇳🇬 Nigeria (+234)</option>
      <option value="NU" data-countrycode="+683">🇳🇺 Niue (+683)</option>
      <option value="NF" data-countrycode="+672">🇳🇫 Norfolk Islands (+67)</option>
      <option value="MP" data-countrycode="+1670">🇲🇵 Northern Mariana Islands(+1670)</option>
      <option value="NO" data-countrycode="+47">🇳🇴 Norway (+47)</option>
      <option value="OM" data-countrycode="+968">🇴🇲 Oman (+968)</option>
      <option value="PK" data-countrycode="+92">🇵🇰 Pakistan (+92)</option>
      <option value="PW" data-countrycode="+680">🇵🇼 Palau (+680)</option>
      <option value="PS" data-countrycode="+970">🇵🇸 Palestine (+970)</option>
      <option value="PA" data-countrycode="+507">🇵🇦 Panama (+507)</option>
      <option value="PG" data-countrycode="+675">🇵🇬 Papua New Guinea (+675)</option>
      <option value="PY" data-countrycode="+595">🇵🇾 Paraguay (+595)</option>
      <option value="PE" data-countrycode="+51">🇵🇪 Peru (+51)</option>
      <option value="PH" data-countrycode="+63">🇵🇭 Philippines (+63)</option>
      <option value="PL" data-countrycode="+48">🇵🇱 Poland (+48)</option>
      <option value="PT" data-countrycode="+351">🇵🇹 Portugal (+351)</option>
      <option value="PR" data-countrycode="+1787">🇵🇷 Puerto Rico (+1787)</option>
      <option value="QA" data-countrycode="+974">🇶🇦 Qatar (+974)</option>
      <option value="RE" data-countrycode="+262">🇷🇪 Réunion (+262)</option>
      <option value="RO" data-countrycode="+40">🇷🇴 Romania (+40)</option>
      <option value="RU" data-countrycode="+7">🇷🇺 Russia (+7)</option>
      <option value="RW" data-countrycode="+250">🇷🇼 Rwanda (+250)</option>
      <option value="WS" data-countrycode="+685">🇼🇸 Samoa (+685)</option>
      <option value="SM" data-countrycode="+378">🇸🇲 San Marino (+378)</option>
      <option value="ST" data-countrycode="+239">🇸🇹 São Tomé &amp; Principe(+239)</option>
      <option value="SA" data-countrycode="+966">🇸🇦 Saudi Arabia (+966)</option>
      <option value="SN" data-countrycode="+221">🇸🇳 Senegal (+221)</option>
      <option value="CS" data-countrycode="+381">🇷🇸 Serbia (+381)</option>
      <option value="SC" data-countrycode="+248">🇸🇨 Seychelles (+248)</option>
      <option value="SL" data-countrycode="+232">🇸🇱 Sierra Leone (+232)</option>
      <option value="SG" data-countrycode="+65">🇸🇬 Singapore (+65)</option>
      <option value="SK" data-countrycode="+421">🇸🇰 Slovakia (+421)</option>
      <option value="SI" data-countrycode="+386">🇸🇮 Slovenia (+386)</option>
      <option value="SB" data-countrycode="+677">🇸🇧 Solomon Islands (+677)</option>
      <option value="SO" data-countrycode="+252">🇸🇴 Somalia (+252)</option>
      <option value="ZA" data-countrycode="+27">🇿🇦 South Africa (+27)</option>
      <option value="SS" data-countrycode="+211">🇸🇸 South Sudan (+211)</option>
      <option value="ES" data-countrycode="+34">🇪🇸 Spain (+34)</option>
      <option value="LK" data-countrycode="+94">🇱🇰 Sri Lanka (+94)</option>
      <option value="SH" data-countrycode="+290">🇸🇭 St. Helena (+290)</option>
      <option value="KN" data-countrycode="+1869">🇰🇳 St. Kitts and Nevis (+1869)</option>
      <option value="LC" data-countrycode="+1758">🇱🇨 St. Lucia (+1758)</option>
      <option value="PM" data-countrycode="+508">🇵🇲 St. Pierre and Miquelon (+508)</option>
      <option value="SD" data-countrycode="+249">🇸🇩 Sudan (+249)</option>
      <option value="SR" data-countrycode="+597">🇸🇷 Suriname (+597)</option>
      <option value="SE" data-countrycode="+46">🇸🇪 Sweden (+46)</option>
      <option value="CH" data-countrycode="+41">🇨🇭 Switzerland (+41)</option>
      <option value="SY" data-countrycode="+963">🇸🇾 Syria (+963)</option>
      <option value="TW" data-countrycode="+886">🇹🇼 Taiwan (+886)</option>
      <option value="TJ" data-countrycode="+992">🇹🇯 Tajikstan (+992)</option>
      <option value="TZ" data-countrycode="+255">🇹🇿 Tanzania (+255)</option>
      <option value="TH" data-countrycode="+66">🇹🇭 Thailand (+66)</option>
      <option value="TG" data-countrycode="+228">🇹🇬 Togo (+228)</option>
      <option value="TK" data-countrycode="+90">🇹🇰 Tokelau (+690)</option>
      <option value="TO" data-countrycode="+676">🇹🇴 Tonga (+676)</option>
      <option value="TT" data-countrycode="+1868">🇹🇹 Trinidad &amp; Tobago(+1868)</option>
      <option value="TN" data-countrycode="+216">🇹🇳 Tunisia (+216)</option>
      <option value="TR" data-countrycode="+90">🇹🇷 Turkey (+90)</option>
      <option value="TM" data-countrycode="+993">🇹🇲 Turkmenistan (+993)</option>
      <option value="TC" data-countrycode="+1649">🇹🇨 Turks &amp; Caicos Islands (+1649)</option>
      <option value="TV" data-countrycode="+688">🇹🇻 Tuvalu (+688)</option>
      <option value="UG" data-countrycode="+256">🇺🇬 Uganda (+256)</option>
      <option value="UA" data-countrycode="+380">🇺🇦 Ukraine (+380)</option>
      <option value="AE" data-countrycode="+971">🇦🇪 United Arab Emirates (+971)</option>
      <option value="GB" data-countrycode="+44">🇬🇧 United Kingdom (+44)</option>
      <option value="US" data-countrycode="+1">🇺🇸 United States of America (+1)</option>
      <option value="UY" data-countrycode="+598">🇺🇾 Uruguay (+598)</option>
      <option value="UZ" data-countrycode="+998">🇺🇿 Uzbekistan (+998)</option>
      <option value="VU" data-countrycode="+678">🇻🇺 Vanuatu (+678)</option>
      <option value="VA" data-countrycode="+39">🇻🇦 Vatican City (+39)</option>
      <option value="VE" data-countrycode="+58">🇻🇪 Venezuela (+58)</option>
      <option value="VN" data-countrycode="+84">🇻🇳 Vietnam (+84)</option>
      <option value="VG" data-countrycode="+1284">🇻🇬 Virgin Islands - British (+1284)</option>
      <option value="VI" data-countrycode="+1340">🇻🇮 Virgin Islands - US (+1340)</option>
      <option value="WF" data-countrycode="+681">🇼🇫 Wallis &amp; Futuna (+681)</option>
      <option value="EH" data-countrycode="+967">🇪🇭 Western Sahara (+212)</option>
      <option value="YE" data-countrycode="+967">🇾🇪 Yemen (+967)</option>
      <option value="ZM" data-countrycode="+260">🇿🇲 Zambia (+260)</option>
      <option value="ZW" data-countrycode="+263">🇿🇼 Zimbabwe (+263)</option>
    </Select>
  );
}

export default CountryCodes;
