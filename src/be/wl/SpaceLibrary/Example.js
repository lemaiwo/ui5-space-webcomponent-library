/*!
 * ${copyright}
 */

// Provides control be.wl.SpaceLibrary.Example.
sap.ui.define([
	"./library", 
	"sap/ui/core/Control", 
	"./ExampleRenderer"
], function (library, Control, ExampleRenderer) {
	"use strict";

	// refer to library types
	var ExampleColor = library.ExampleColor;

	/**
	 * Constructor for a new <code>be.wl.SpaceLibrary.Example</code> control.
	 *
	 * @param {string} [sId] id for the new control, generated automatically if no id is given
	 * @param {object} [mSettings] initial settings for the new control
	 *
	 * @class
	 * Some class description goes here.
	 * @extends sap.ui.core.Control
	 *
	 * @author lemaiwo
	 * @version ${version}
	 *
	 * @constructor
	 * @public
	 * @alias be.wl.SpaceLibrary.Example
	 */
	var Example = Control.extend("be.wl.SpaceLibrary.Example", /** @lends be.wl.SpaceLibrary.Example.prototype */ {
		metadata: {
			library: "be.wl.SpaceLibrary",
			properties: {
				/**
				 * The text to display.
				 */
				text: {
					type: "string",
					group: "Data",
					defaultValue: null
				},
				/**
				 * The color to use (default to "Default" color).
				 */
				color: {
					type: "be.wl.SpaceLibrary.ExampleColor",
					group: "Appearance",
					defaultValue: ExampleColor.Default
				}
			},
			events: {
				/**
				 * Event is fired when the user clicks the control.
				 */
				press: {}
			}
		},
		renderer: ExampleRenderer,
    onclick: function() {
      this.firePress();
    }
	});
	return Example;

});
