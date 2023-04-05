/*!
 * ${copyright}
 */

/**
 * Initialization Code and shared classes of library be.wl.SpaceLibrary
 */
sap.ui.define([
		"sap/ui/webc/common/library",
		"./thirdparty/Assets",
		"./library.config"
	], // library dependency
	function(commonLibrary) {

		"use strict";

		/**
		 * SAPUI5 library with controls based on UI5 Web Components
		 *
		 * @namespace
		 * @alias be.wl.SpaceLibrary
		 * @author SAP SE
		 * @version ${version}
		 * @public
		 * @since 1.92.0
		 * @experimental Since 1.92.0 This API is experimental and might change significantly.
		 */
		var thisLib = sap.ui.getCore().initLibrary({
			name: "be.wl.SpaceLibrary",
			version: "${version}",
			dependencies: ["sap.ui.core", "sap.ui.webc.common"],
			noLibraryCSS: true,
			designtime: "be/wl/SpaceLibrary/designtime/library.designtime",
			interfaces: [

			],
			types: [

			],
			controls: [
				"be.wl.SpaceLibrary.SpaceComponent",
				"be.wl.SpaceLibrary.SpaceItemComponent"
			],
			elements: [],
			extensions: {}
		});
		return thisLib;

	});