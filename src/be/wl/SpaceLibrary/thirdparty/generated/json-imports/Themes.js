sap.ui.define(['require', "sap/ui/webc/common/thirdparty/base/asset-registries/Themes"], function (require, _Themes) {
  "use strict";

  const loadThemeProperties = async themeName => {
    switch (themeName) {
      case "sap_belize":
        return (await Promise.resolve().then(() => new Promise(resolve => require(["../assets/themes/sap_belize/parameters-bundle.css.json"], resolve)))).default;
      case "sap_belize_hcb":
        return (await Promise.resolve().then(() => new Promise(resolve => require(["../assets/themes/sap_belize_hcb/parameters-bundle.css.json"], resolve)))).default;
      case "sap_belize_hcw":
        return (await Promise.resolve().then(() => new Promise(resolve => require(["../assets/themes/sap_belize_hcw/parameters-bundle.css.json"], resolve)))).default;
      case "sap_fiori_3":
        return (await Promise.resolve().then(() => new Promise(resolve => require(["../assets/themes/sap_fiori_3/parameters-bundle.css.json"], resolve)))).default;
      case "sap_fiori_3_dark":
        return (await Promise.resolve().then(() => new Promise(resolve => require(["../assets/themes/sap_fiori_3_dark/parameters-bundle.css.json"], resolve)))).default;
      case "sap_fiori_3_hcb":
        return (await Promise.resolve().then(() => new Promise(resolve => require(["../assets/themes/sap_fiori_3_hcb/parameters-bundle.css.json"], resolve)))).default;
      case "sap_fiori_3_hcw":
        return (await Promise.resolve().then(() => new Promise(resolve => require(["../assets/themes/sap_fiori_3_hcw/parameters-bundle.css.json"], resolve)))).default;
      default:
        throw "unknown theme";
    }
  };
  const loadAndCheck = async themeName => {
    const data = await loadThemeProperties(themeName);
    if (typeof data === "string" && data.endsWith(".json")) {
      throw new Error(`[themes] Invalid bundling detected - dynamic JSON imports bundled as URLs. Switch to inlining JSON files from the build or use 'import ".../Assets-static.js"'. Check the "Assets" documentation for more information.`);
    }
    return data;
  };
  ["sap_belize", "sap_belize_hcb", "sap_belize_hcw", "sap_fiori_3", "sap_fiori_3_dark", "sap_fiori_3_hcb", "sap_fiori_3_hcw"].forEach(themeName => (0, _Themes.registerThemePropertiesLoader)("SpacePackage", themeName, loadAndCheck));
});