(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{421:function(e,t,a){"use strict";a.r(t);var s=a(46),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"using-with-python"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-with-python"}},[e._v("#")]),e._v(" Using with Python")]),e._v(" "),a("h2",{attrs:{id:"dependencies"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dependencies"}},[e._v("#")]),e._v(" Dependencies")]),e._v(" "),a("p",[e._v("Building this module it requires scikit-build and cmake, if not already installed you will need to open a terminal and execute:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("pip install scikit-build\napt-get install cmake\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("h2",{attrs:{id:"installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[e._v("#")]),e._v(" Installation")]),e._v(" "),a("p",[e._v("From a terminal cd to "),a("code",[e._v("DECODER_FOLDER/python")]),e._v(" folder and execute:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("pip install .\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h2",{attrs:{id:"using"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using"}},[e._v("#")]),e._v(" Using")]),e._v(" "),a("p",[a("code",[e._v("import TheengsDecoder")])]),e._v(" "),a("p",[e._v("The library includes a BLE decoder "),a("a",{attrs:{href:"./../../examples/python/ScanAndDecode.py"}},[e._v("example")]),e._v(". To run the example, open the folder "),a("a",{attrs:{href:"./../../examples/python/ScanAndDecode.py"}},[e._v("ScanAndDecode")]),e._v(" in a terminal and type 'python ScanAndDecode.py`")]),e._v(" "),a("p",[e._v("If Theengs Decoder recognized a device, it will print a message like the example below, otherwise None.")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('TheengsDecoder found device: {"brand":"Xiaomi","model":"LYWSD03MMC","model_id":"LYWSD03MMC_ATC","tempc":26.3,"tempf":79.34,"hum":49,"batt":29,"volt":2.487}\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("Additionally the example will print the properties of the device as well as the brand and model using the "),a("code",[e._v("getProperties")]),e._v(" and "),a("code",[e._v("getAttributes")]),e._v(" methods. The output of these looks like:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('{"properties":{"volt":{"unit":"V","name":"voltage"},"x_axis":{"unit":"int","name":"x_axis"},"y_axis":{"unit":"int","name":"y_axis"},"z_axis":{"unit":"int","name":"z_axis"},"tempc":{"unit":"°C","name":"temperature"},"hum":{"unit":"%","name":"humidity"}}}\n\nbrand: Mokosmart , model: BeaconX Pro\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("p",[e._v("These functions are useful for passing the data to HomeAssistant or other home automation/monitoring services.")]),e._v(" "),a("h2",{attrs:{id:"methods"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#methods"}},[e._v("#")]),e._v(" Methods")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("decodeBLE(string)")]),e._v(" Returns a string with the decoded data in JSON format or None.")]),e._v(" "),a("li",[a("code",[e._v("getProperties('model_id string')")]),e._v(" Returns the properties (string) of the given model ID or None")]),e._v(" "),a("li",[a("code",[e._v("getAttribute('model_id string', 'attribute string')")]),e._v(" Return the value (string) of named attrubte of the model ID or None.")])])])}),[],!1,null,null,null);t.default=n.exports}}]);