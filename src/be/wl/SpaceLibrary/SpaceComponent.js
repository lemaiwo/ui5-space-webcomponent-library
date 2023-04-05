/*!
 * ${copyright}
 */

// Provides control be.wl.SpaceLibrary.SpaceComponent.
sap.ui.define([
	"sap/ui/webc/common/WebComponent",
	"./library",
	"./thirdparty/SpaceComponent"
], function(WebComponent, library) {
	"use strict";

	/**
	 * Constructor for a new <code>SpaceComponent</code>.
	 *
	 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
	 * @param {object} [mSettings] Initial settings for the new control
	 *
	 * @extends sap.ui.webc.common.WebComponent
	 * @class
	 *
	 * <h3>Overview</h3>
	 *
	 * The <code>space-component</code> component is a demo component that displays some text.
	 *
	 * @author SAP SE
	 * @version ${version}
	 *
	 * @constructor
	 * @public
	 * @since 1.92.0
	 * @experimental Since 1.92.0 This control is experimental and its API might change significantly.
	 * @alias be.wl.SpaceLibrary.SpaceComponent
	 */
	var SpaceComponent = WebComponent.extend("be.wl.SpaceLibrary.SpaceComponent", {
		metadata: {
			library: "be.wl.SpaceLibrary",
			// tag: "ui5-space-component-ui5",
			tag: "space-component",
			properties: {

				intro: {
					type: "string",
				},
				/**
				 * Defines the height of the control
				 */
				height: {
					type: "sap.ui.core.CSSSize",
					mapping: "style"
				},

				/**
				 * Defines the width of the control
				 */
				width: {
					type: "sap.ui.core.CSSSize",
					mapping: "style"
				}
			},
			defaultAggregation: "items",
			aggregations: {

				/**
				 * Defines the items of <code>sap.ui.webc.main.SegmentedButton</code>. <br>
				 * <br>
				 * <b>Note:</b> Multiple items are allowed. <br>
				 * <br>
				 * <b>Note:</b> Use the <code>sap.ui.webc.main.SegmentedButtonItem</code> for the intended design.
				 */
				items: {
					type: "be.wl.SpaceLibrary.ISpaceItemComponent",
					multiple: true
				}
			}
		}
	});

	/* CUSTOM CODE START */
	/* CUSTOM CODE END */

	return SpaceComponent;
});