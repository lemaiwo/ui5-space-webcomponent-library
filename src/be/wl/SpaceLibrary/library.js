/*!
 * ${copyright}
 */

/**
 * Initialization Code and shared classes of library be.wl.SpaceLibrary.
 */
sap.ui.define([
	"sap/ui/core/library"
], function () {
	"use strict";

	// delegate further initialization of this library to the Core
	// Hint: sap.ui.getCore() must still be used to support preload with sync bootstrap!
	sap.ui.getCore().initLibrary({
		name: "be.wl.SpaceLibrary",
		version: "${version}",
		dependencies: [ // keep in sync with the ui5.yaml and .library files
			"sap.ui.core"
		],
		types: [
			"be.wl.SpaceLibrary.ExampleColor"
		],
		interfaces: [],
		controls: [
			"be.wl.SpaceLibrary.Example"
		],
		elements: [],
		noLibraryCSS: false // if no CSS is provided, you can disable the library.css load here
	});

	/**
	 * Some description about <code>SpaceLibrary</code>
	 *
	 * @namespace
	 * @name be.wl.SpaceLibrary
	 * @author lemaiwo
	 * @version ${version}
	 * @public
	 */
	var thisLib = be.wl.SpaceLibrary;

	/**
	 * Semantic Colors of the <code>be.wl.SpaceLibrary.Example</code>.
	 *
	 * @enum {string}
	 * @public
	 */
	thisLib.ExampleColor = {

		/**
		 * Default color (brand color)
		 * @public
		 */
		Default : "Default",

		/**
		 * Highlight color
		 * @public
		 */
		Highlight : "Highlight"

	};

	return thisLib;

});
