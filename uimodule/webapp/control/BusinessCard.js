sap.ui.define([
	"sap/ui/core/Control"
], (Control) => {
	"use strict";
	return Control.extend("be.wl.DemoCustomControlGenerator.control.BusinessCard", {
 		"metadata":{
			"properties":{
				"src1":"string",
				"prop1":"string",
				"prop2":"string",
				"href1":"string",
				"href2":"string",
				"href3":"string",
				"href4":"string",
				"href5":"string",
				"href6":"string"
			},
			"events":{}
		} ,

 		init() { } ,

 		onAfterRendering(event) { } ,

 		setSrc1: function(value) { this.setProperty("src1", value, true); return this;},
		setProp1: function(value) { this.setProperty("prop1", value, true); return this;},
		setProp2: function(value) { this.setProperty("prop2", value, true); return this;},
		setHref1: function(value) { this.setProperty("href1", value, true); return this;},
		setHref2: function(value) { this.setProperty("href2", value, true); return this;},
		setHref3: function(value) { this.setProperty("href3", value, true); return this;},
		setHref4: function(value) { this.setProperty("href4", value, true); return this;},
		setHref5: function(value) { this.setProperty("href5", value, true); return this;},
		setHref6: function(value) { this.setProperty("href6", value, true); return this;} 	});
});
