# -*- coding: utf-8 -*-
countries = [{"dialCode":"1","countryCode":"us","name":"United States", "preferred": true},{"dialCode":"1","countryCode":"ca","name":"Canada", "preferred": true},{"dialCode":"44","countryCode":"gb","name":"United Kingdom", "preferred": true},{"dialCode":"93","countryCode":"af","name":"Afghanistan (‫افغانستان‬‎)"},{"dialCode":"355","countryCode":"al","name":"Albania (Shqipëri)"},{"dialCode":"213","countryCode":"dz","name":"Algeria (‫الجزائر‬‎)"},{"dialCode":"1684","countryCode":"as","name":"American Samoa"},{"dialCode":"376","countryCode":"ad","name":"Andorra"},{"dialCode":"244","countryCode":"ao","name":"Angola"},{"dialCode":"1264","countryCode":"ai","name":"Anguilla"},{"dialCode":"1268","countryCode":"ag","name":"Antigua and Barbuda"},{"dialCode":"54","countryCode":"ar","name":"Argentina"},{"dialCode":"374","countryCode":"am","name":"Armenia (Հայաստան)"},{"dialCode":"297","countryCode":"aw","name":"Aruba"},{"dialCode":"61","countryCode":"au","name":"Australia"},{"dialCode":"43","countryCode":"at","name":"Austria (Österreich)"},{"dialCode":"994","countryCode":"az","name":"Azerbaijan (Azərbaycan)"},{"dialCode":"1242","countryCode":"bs","name":"Bahamas"},{"dialCode":"973","countryCode":"bh","name":"Bahrain (‫البحرين‬‎)"},{"dialCode":"880","countryCode":"bd","name":"Bangladesh (বাংলাদেশ)"},{"dialCode":"1246","countryCode":"bb","name":"Barbados"},{"dialCode":"375","countryCode":"by","name":"Belarus (Беларусь)"},{"dialCode":"32","countryCode":"be","name":"Belgium (België)"},{"dialCode":"501","countryCode":"bz","name":"Belize"},{"dialCode":"229","countryCode":"bj","name":"Benin (Bénin)"},{"dialCode":"1441","countryCode":"bm","name":"Bermuda"},{"dialCode":"975","countryCode":"bt","name":"Bhutan (འབྲུག)"},{"dialCode":"591","countryCode":"bo","name":"Bolivia"},{"dialCode":"387","countryCode":"ba","name":"Bosnia and Herzegovina (Босна и Херцеговина)"},{"dialCode":"267","countryCode":"bw","name":"Botswana"},{"dialCode":"55","countryCode":"br","name":"Brazil (Brasil)"},{"dialCode":"246","countryCode":"io","name":"British Indian Ocean Territory"},{"dialCode":"1284","countryCode":"vg","name":"British Virgin Islands"},{"dialCode":"673","countryCode":"bn","name":"Brunei"},{"dialCode":"359","countryCode":"bg","name":"Bulgaria (България)"},{"dialCode":"226","countryCode":"bf","name":"Burkina Faso"},{"dialCode":"257","countryCode":"bi","name":"Burundi (Uburundi)"},{"dialCode":"855","countryCode":"kh","name":"Cambodia (កម្ពុជា)"},{"dialCode":"237","countryCode":"cm","name":"Cameroon (Cameroun)"},{"dialCode":"1","countryCode":"ca","name":"Canada"},{"dialCode":"238","countryCode":"cv","name":"Cape Verde (Kabu Verdi)"},{"dialCode":"599","countryCode":"bq","name":"Caribbean Netherlands"},{"dialCode":"1345","countryCode":"ky","name":"Cayman Islands"},{"dialCode":"236","countryCode":"cf","name":"Central African Republic (République centrafricaine)"},{"dialCode":"235","countryCode":"td","name":"Chad (Tchad)"},{"dialCode":"56","countryCode":"cl","name":"Chile"},{"dialCode":"86","countryCode":"cn","name":"China (中国)"},{"dialCode":"61","countryCode":"cx","name":"Christmas Island"},{"dialCode":"61","countryCode":"cc","name":"Cocos (Keeling) Islands"},{"dialCode":"57","countryCode":"co","name":"Colombia"},{"dialCode":"269","countryCode":"km","name":"Comoros (‫جزر القمر‬‎)"},{"dialCode":"243","countryCode":"cd","name":"Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)"},{"dialCode":"242","countryCode":"cg","name":"Congo (Republic) (Congo-Brazzaville)"},{"dialCode":"682","countryCode":"ck","name":"Cook Islands"},{"dialCode":"506","countryCode":"cr","name":"Costa Rica"},{"dialCode":"225","countryCode":"ci","name":"Côte d’Ivoire"},{"dialCode":"385","countryCode":"hr","name":"Croatia (Hrvatska)"},{"dialCode":"53","countryCode":"cu","name":"Cuba"},{"dialCode":"599","countryCode":"cw","name":"Curaçao"},{"dialCode":"357","countryCode":"cy","name":"Cyprus (Κύπρος)"},{"dialCode":"420","countryCode":"cz","name":"Czech Republic (Česká republika)"},{"dialCode":"45","countryCode":"dk","name":"Denmark (Danmark)"},{"dialCode":"253","countryCode":"dj","name":"Djibouti"},{"dialCode":"1767","countryCode":"dm","name":"Dominica"},{"dialCode":"1","countryCode":"do","name":"Dominican Republic (República Dominicana)"},{"dialCode":"593","countryCode":"ec","name":"Ecuador"},{"dialCode":"20","countryCode":"eg","name":"Egypt (‫مصر‬‎)"},{"dialCode":"503","countryCode":"sv","name":"El Salvador"},{"dialCode":"240","countryCode":"gq","name":"Equatorial Guinea (Guinea Ecuatorial)"},{"dialCode":"291","countryCode":"er","name":"Eritrea"},{"dialCode":"372","countryCode":"ee","name":"Estonia (Eesti)"},{"dialCode":"251","countryCode":"et","name":"Ethiopia"},{"dialCode":"500","countryCode":"fk","name":"Falkland Islands (Islas Malvinas)"},{"dialCode":"298","countryCode":"fo","name":"Faroe Islands (Føroyar)"},{"dialCode":"679","countryCode":"fj","name":"Fiji"},{"dialCode":"358","countryCode":"fi","name":"Finland (Suomi)"},{"dialCode":"33","countryCode":"fr","name":"France"},{"dialCode":"594","countryCode":"gf","name":"French Guiana (Guyane française)"},{"dialCode":"689","countryCode":"pf","name":"French Polynesia (Polynésie française)"},{"dialCode":"241","countryCode":"ga","name":"Gabon"},{"dialCode":"220","countryCode":"gm","name":"Gambia"},{"dialCode":"995","countryCode":"ge","name":"Georgia (საქართველო)"},{"dialCode":"49","countryCode":"de","name":"Germany (Deutschland)"},{"dialCode":"233","countryCode":"gh","name":"Ghana (Gaana)"},{"dialCode":"350","countryCode":"gi","name":"Gibraltar"},{"dialCode":"30","countryCode":"gr","name":"Greece (Ελλάδα)"},{"dialCode":"299","countryCode":"gl","name":"Greenland (Kalaallit Nunaat)"},{"dialCode":"1473","countryCode":"gd","name":"Grenada"},{"dialCode":"590","countryCode":"gp","name":"Guadeloupe"},{"dialCode":"1671","countryCode":"gu","name":"Guam"},{"dialCode":"502","countryCode":"gt","name":"Guatemala"},{"dialCode":"44","countryCode":"gg","name":"Guernsey"},{"dialCode":"224","countryCode":"gn","name":"Guinea (Guinée)"},{"dialCode":"245","countryCode":"gw","name":"Guinea-Bissau (Guiné Bissau)"},{"dialCode":"592","countryCode":"gy","name":"Guyana"},{"dialCode":"509","countryCode":"ht","name":"Haiti"},{"dialCode":"504","countryCode":"hn","name":"Honduras"},{"dialCode":"852","countryCode":"hk","name":"Hong Kong (香港)"},{"dialCode":"36","countryCode":"hu","name":"Hungary (Magyarország)"},{"dialCode":"354","countryCode":"is","name":"Iceland (Ísland)"},{"dialCode":"91","countryCode":"in","name":"India (भारत)"},{"dialCode":"62","countryCode":"id","name":"Indonesia"},{"dialCode":"98","countryCode":"ir","name":"Iran (‫ایران‬‎)"},{"dialCode":"964","countryCode":"iq","name":"Iraq (‫العراق‬‎)"},{"dialCode":"353","countryCode":"ie","name":"Ireland"},{"dialCode":"44","countryCode":"im","name":"Isle of Man"},{"dialCode":"972","countryCode":"il","name":"Israel (‫ישראל‬‎)"},{"dialCode":"39","countryCode":"it","name":"Italy (Italia)"},{"dialCode":"1876","countryCode":"jm","name":"Jamaica"},{"dialCode":"81","countryCode":"jp","name":"Japan (日本)"},{"dialCode":"44","countryCode":"je","name":"Jersey"},{"dialCode":"962","countryCode":"jo","name":"Jordan (‫الأردن‬‎)"},{"dialCode":"7","countryCode":"kz","name":"Kazakhstan (Казахстан)"},{"dialCode":"254","countryCode":"ke","name":"Kenya"},{"dialCode":"686","countryCode":"ki","name":"Kiribati"},{"dialCode":"383","countryCode":"xk","name":"Kosovo"},{"dialCode":"965","countryCode":"kw","name":"Kuwait (‫الكويت‬‎)"},{"dialCode":"996","countryCode":"kg","name":"Kyrgyzstan (Кыргызстан)"},{"dialCode":"856","countryCode":"la","name":"Laos (ລາວ)"},{"dialCode":"371","countryCode":"lv","name":"Latvia (Latvija)"},{"dialCode":"961","countryCode":"lb","name":"Lebanon (‫لبنان‬‎)"},{"dialCode":"266","countryCode":"ls","name":"Lesotho"},{"dialCode":"231","countryCode":"lr","name":"Liberia"},{"dialCode":"218","countryCode":"ly","name":"Libya (‫ليبيا‬‎)"},{"dialCode":"423","countryCode":"li","name":"Liechtenstein"},{"dialCode":"370","countryCode":"lt","name":"Lithuania (Lietuva)"},{"dialCode":"352","countryCode":"lu","name":"Luxembourg"},{"dialCode":"853","countryCode":"mo","name":"Macau (澳門)"},{"dialCode":"389","countryCode":"mk","name":"Macedonia (FYROM) (Македонија)"},{"dialCode":"261","countryCode":"mg","name":"Madagascar (Madagasikara)"},{"dialCode":"265","countryCode":"mw","name":"Malawi"},{"dialCode":"60","countryCode":"my","name":"Malaysia"},{"dialCode":"960","countryCode":"mv","name":"Maldives"},{"dialCode":"223","countryCode":"ml","name":"Mali"},{"dialCode":"356","countryCode":"mt","name":"Malta"},{"dialCode":"692","countryCode":"mh","name":"Marshall Islands"},{"dialCode":"596","countryCode":"mq","name":"Martinique"},{"dialCode":"222","countryCode":"mr","name":"Mauritania (‫موريتانيا‬‎)"},{"dialCode":"230","countryCode":"mu","name":"Mauritius (Moris)"},{"dialCode":"262","countryCode":"yt","name":"Mayotte"},{"dialCode":"52","countryCode":"mx","name":"Mexico (México)"},{"dialCode":"691","countryCode":"fm","name":"Micronesia"},{"dialCode":"373","countryCode":"md","name":"Moldova (Republica Moldova)"},{"dialCode":"377","countryCode":"mc","name":"Monaco"},{"dialCode":"976","countryCode":"mn","name":"Mongolia (Монгол)"},{"dialCode":"382","countryCode":"me","name":"Montenegro (Crna Gora)"},{"dialCode":"1664","countryCode":"ms","name":"Montserrat"},{"dialCode":"212","countryCode":"ma","name":"Morocco (‫المغرب‬‎)"},{"dialCode":"258","countryCode":"mz","name":"Mozambique (Moçambique)"},{"dialCode":"95","countryCode":"mm","name":"Myanmar (Burma) (မြန်မာ)"},{"dialCode":"264","countryCode":"na","name":"Namibia (Namibië)"},{"dialCode":"674","countryCode":"nr","name":"Nauru"},{"dialCode":"977","countryCode":"np","name":"Nepal (नेपाल)"},{"dialCode":"31","countryCode":"nl","name":"Netherlands (Nederland)"},{"dialCode":"687","countryCode":"nc","name":"New Caledonia (Nouvelle-Calédonie)"},{"dialCode":"64","countryCode":"nz","name":"New Zealand"},{"dialCode":"505","countryCode":"ni","name":"Nicaragua"},{"dialCode":"227","countryCode":"ne","name":"Niger (Nijar)"},{"dialCode":"234","countryCode":"ng","name":"Nigeria"},{"dialCode":"683","countryCode":"nu","name":"Niue"},{"dialCode":"672","countryCode":"nf","name":"Norfolk Island"},{"dialCode":"850","countryCode":"kp","name":"North Korea (조선 민주주의 인민 공화국)"},{"dialCode":"1670","countryCode":"mp","name":"Northern Mariana Islands"},{"dialCode":"47","countryCode":"no","name":"Norway (Norge)"},{"dialCode":"968","countryCode":"om","name":"Oman (‫عُمان‬‎)"},{"dialCode":"92","countryCode":"pk","name":"Pakistan (‫پاکستان‬‎)"},{"dialCode":"680","countryCode":"pw","name":"Palau"},{"dialCode":"970","countryCode":"ps","name":"Palestine (‫فلسطين‬‎)"},{"dialCode":"507","countryCode":"pa","name":"Panama (Panamá)"},{"dialCode":"675","countryCode":"pg","name":"Papua New Guinea"},{"dialCode":"595","countryCode":"py","name":"Paraguay"},{"dialCode":"51","countryCode":"pe","name":"Peru (Perú)"},{"dialCode":"63","countryCode":"ph","name":"Philippines"},{"dialCode":"48","countryCode":"pl","name":"Poland (Polska)"},{"dialCode":"351","countryCode":"pt","name":"Portugal"},{"dialCode":"1","countryCode":"pr","name":"Puerto Rico"},{"dialCode":"974","countryCode":"qa","name":"Qatar (‫قطر‬‎)"},{"dialCode":"262","countryCode":"re","name":"Réunion (La Réunion)"},{"dialCode":"40","countryCode":"ro","name":"Romania (România)"},{"dialCode":"7","countryCode":"ru","name":"Russia (Россия)"},{"dialCode":"250","countryCode":"rw","name":"Rwanda"},{"dialCode":"590","countryCode":"bl","name":"Saint Barthélemy (Saint-Barthélemy)"},{"dialCode":"290","countryCode":"sh","name":"Saint Helena"},{"dialCode":"1869","countryCode":"kn","name":"Saint Kitts and Nevis"},{"dialCode":"1758","countryCode":"lc","name":"Saint Lucia"},{"dialCode":"590","countryCode":"mf","name":"Saint Martin (Saint-Martin (partie française))"},{"dialCode":"508","countryCode":"pm","name":"Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)"},{"dialCode":"1784","countryCode":"vc","name":"Saint Vincent and the Grenadines"},{"dialCode":"685","countryCode":"ws","name":"Samoa"},{"dialCode":"378","countryCode":"sm","name":"San Marino"},{"dialCode":"239","countryCode":"st","name":"São Tomé and Príncipe (São Tomé e Príncipe)"},{"dialCode":"966","countryCode":"sa","name":"Saudi Arabia (‫المملكة العربية السعودية‬‎)"},{"dialCode":"221","countryCode":"sn","name":"Senegal (Sénégal)"},{"dialCode":"381","countryCode":"rs","name":"Serbia (Србија)"},{"dialCode":"248","countryCode":"sc","name":"Seychelles"},{"dialCode":"232","countryCode":"sl","name":"Sierra Leone"},{"dialCode":"65","countryCode":"sg","name":"Singapore"},{"dialCode":"1721","countryCode":"sx","name":"Sint Maarten"},{"dialCode":"421","countryCode":"sk","name":"Slovakia (Slovensko)"},{"dialCode":"386","countryCode":"si","name":"Slovenia (Slovenija)"},{"dialCode":"677","countryCode":"sb","name":"Solomon Islands"},{"dialCode":"252","countryCode":"so","name":"Somalia (Soomaaliya)"},{"dialCode":"27","countryCode":"za","name":"South Africa"},{"dialCode":"82","countryCode":"kr","name":"South Korea (대한민국)"},{"dialCode":"211","countryCode":"ss","name":"South Sudan (‫جنوب السودان‬‎)"},{"dialCode":"34","countryCode":"es","name":"Spain (España)"},{"dialCode":"94","countryCode":"lk","name":"Sri Lanka (ශ්‍රී ලංකාව)"},{"dialCode":"249","countryCode":"sd","name":"Sudan (‫السودان‬‎)"},{"dialCode":"597","countryCode":"sr","name":"Suriname"},{"dialCode":"47","countryCode":"sj","name":"Svalbard and Jan Mayen"},{"dialCode":"268","countryCode":"sz","name":"Swaziland"},{"dialCode":"46","countryCode":"se","name":"Sweden (Sverige)"},{"dialCode":"41","countryCode":"ch","name":"Switzerland (Schweiz)"},{"dialCode":"963","countryCode":"sy","name":"Syria (‫سوريا‬‎)"},{"dialCode":"886","countryCode":"tw","name":"Taiwan (台灣)"},{"dialCode":"992","countryCode":"tj","name":"Tajikistan"},{"dialCode":"255","countryCode":"tz","name":"Tanzania"},{"dialCode":"66","countryCode":"th","name":"Thailand (ไทย)"},{"dialCode":"670","countryCode":"tl","name":"Timor-Leste"},{"dialCode":"228","countryCode":"tg","name":"Togo"},{"dialCode":"690","countryCode":"tk","name":"Tokelau"},{"dialCode":"676","countryCode":"to","name":"Tonga"},{"dialCode":"1868","countryCode":"tt","name":"Trinidad and Tobago"},{"dialCode":"216","countryCode":"tn","name":"Tunisia (‫تونس‬‎)"},{"dialCode":"90","countryCode":"tr","name":"Turkey (Türkiye)"},{"dialCode":"993","countryCode":"tm","name":"Turkmenistan"},{"dialCode":"1649","countryCode":"tc","name":"Turks and Caicos Islands"},{"dialCode":"688","countryCode":"tv","name":"Tuvalu"},{"dialCode":"1340","countryCode":"vi","name":"U.S. Virgin Islands"},{"dialCode":"256","countryCode":"ug","name":"Uganda"},{"dialCode":"380","countryCode":"ua","name":"Ukraine (Україна)"},{"dialCode":"971","countryCode":"ae","name":"United Arab Emirates (‫الإمارات العربية المتحدة‬‎)"},{"dialCode":"44","countryCode":"gb","name":"United Kingdom"},{"dialCode":"1","countryCode":"us","name":"United States"},{"dialCode":"598","countryCode":"uy","name":"Uruguay"},{"dialCode":"998","countryCode":"uz","name":"Uzbekistan (Oʻzbekiston)"},{"dialCode":"678","countryCode":"vu","name":"Vanuatu"},{"dialCode":"39","countryCode":"va","name":"Vatican City (Città del Vaticano)"},{"dialCode":"58","countryCode":"ve","name":"Venezuela"},{"dialCode":"84","countryCode":"vn","name":"Vietnam (Việt Nam)"},{"dialCode":"681","countryCode":"wf","name":"Wallis and Futuna"},{"dialCode":"212","countryCode":"eh","name":"Western Sahara (‫الصحراء الغربية‬‎)"},{"dialCode":"967","countryCode":"ye","name":"Yemen (‫اليمن‬‎)"},{"dialCode":"260","countryCode":"zm","name":"Zambia"},{"dialCode":"263","countryCode":"zw","name":"Zimbabwe"},{"dialCode":"358","countryCode":"ax","name":"Åland Islands"}]

countries.each do |c|
  Country.create(name: c[:name], dial_code: c[:dialCode].to_i, country_code: c[:countryCode], is_preferred: c[:preferred].present?)
end
