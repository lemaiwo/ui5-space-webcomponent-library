sap.ui.define(["exports", "@ui5/webcomponents-base/dist/asset-registries/Themes", "@ui5/webcomponents-theming/dist/generated/themes/sap_fiori_3/parameters-bundle.css", "./sap_fiori_3/parameters-bundle.css"], function (_exports, _Themes, _parametersBundle, _parametersBundle2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _parametersBundle = _interopRequireDefault(_parametersBundle);
  _parametersBundle2 = _interopRequireDefault(_parametersBundle2);
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  (0, _Themes.registerThemePropertiesLoader)("@ui5/webcomponents-theming", "sap_fiori_3", async () => _parametersBundle.default);
  (0, _Themes.registerThemePropertiesLoader)("SpacePackage", "sap_fiori_3", async () => _parametersBundle2.default);
  const styleData = {
    packageName: "SpacePackage",
    fileName: "themes\SpaceItemComponent.css.ts",
    content: ".title-content{position:absolute;top:100%;animation:scroll 120s linear 4s forwards}.title-content>.content-header{text-align:center}"
  };
  var _default = styleData;
  _exports.default = _default;
});