define(['runtime'], function(runtime) { if(runtime && runtime !== undefined) { jade = runtime; }

this["JST"] = this["JST"] || {};

this["JST"]["sample_template"] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (label) {
buf.push("<div class=\"sample-button\">" + (jade.escape(null == (jade_interp = label) ? "" : jade_interp)) + "</div>");}("label" in locals_for_with?locals_for_with.label:typeof label!=="undefined"?label:undefined));;return buf.join("");
};

return this["JST"];

});