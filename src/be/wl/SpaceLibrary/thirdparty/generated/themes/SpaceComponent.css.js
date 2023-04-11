sap.ui.define(["exports", "sap/ui/webc/common/thirdparty/base/asset-registries/Themes", "sap/ui/webc/common/thirdparty/theming/generated/themes/sap_fiori_3/parameters-bundle.css", "./sap_fiori_3/parameters-bundle.css"], function (_exports, _Themes, _parametersBundle, _parametersBundle2) {
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
    fileName: "themes\SpaceComponent.css.ts",
    content: ":host{border:2px solid var(--my-component-border-color);background-color:var(--sapBackgroundColor);color:var(--sapTextColor);display:block;text-align:center;vertical-align:middle;line-height:3rem}.star{position:absolute;width:1px;height:1px;background-color:#fff}.star-wars-intro{width:100%;height:100%;font-family:Droid Sans,arial,verdana,sans-serif;font-weight:700;color:#ebd71c;background-color:#000;overflow:hidden;position:relative}.star-wars-intro p.intro-text{position:relative;max-width:16em;font-size:200%;font-weight:400;margin:20% auto;color:#4ee;opacity:0;z-index:1;text-align:center;-webkit-animation:intro 2s ease-out;-moz-animation:intro 2s ease-out;-ms-animation:intro 2s ease-out;-o-animation:intro 2s ease-out;animation:intro 2s ease-out}.star-wars-intro .main-content{margin-left:auto;margin-right:auto;position:absolute;z-index:3;width:98%;height:50em;bottom:0;font-size:80px;font-weight:700;text-align:justify;overflow:hidden;transform-origin:50% 100%;transform:perspective(350px) rotateX(25deg)}.star-wars-intro .main-content:after{position:absolute;content:\" \";top:0;bottom:60%;background-image:linear-gradient(top,#000,transparent);pointer-events:none}.star-wars-intro .main-logo{position:absolute;width:2.6em;left:50%;top:20vh;font-size:10em;text-align:center;margin-left:-1.3em;line-height:.8em;letter-spacing:-.05em;color:#000;text-shadow:-2px -2px 0 #ebd71c,2px -2px 0 #ebd71c,-2px 2px 0 #ebd71c,2px 2px 0 #ebd71c;opacity:0;z-index:1;-webkit-animation:logo 5s ease-out 2.5s;-moz-animation:logo 5s ease-out 2.5s;-ms-animation:logo 5s ease-out 2.5s;-o-animation:logo 5s ease-out 2.5s;animation:logo 5s ease-out 2.5s}.star-wars-intro .main-logo>img{max-width:100%}@-webkit-keyframes intro{0%{opacity:1}90%{opacity:1}to{opacity:0}}@-moz-keyframes intro{0%{opacity:1}90%{opacity:1}to{opacity:0}}@-ms-keyframes intro{0%{opacity:1}90%{opacity:1}to{opacity:0}}@-o-keyframes intro{0%{opacity:1}90%{opacity:1}to{opacity:0}}@keyframes intro{0%{opacity:1}90%{opacity:1}to{opacity:0}}@-webkit-keyframes logo{0%{-webkit-transform:scale(1);opacity:1}50%{opacity:1}to{-webkit-transform:scale(.1);opacity:0}}@-moz-keyframes logo{0%{-moz-transform:scale(1);opacity:1}50%{opacity:1}to{-moz-transform:scale(.1);opacity:0}}@-ms-keyframes logo{0%{-ms-transform:scale(1);opacity:1}50%{opacity:1}to{-ms-transform:scale(.1);opacity:0}}@-o-keyframes logo{0%{-o-transform:scale(1);opacity:1}50%{opacity:1}to{-o-transform:scale(.1);opacity:0}}@keyframes logo{0%{transform:scale(1);opacity:1}50%{opacity:1}to{transform:scale(.1);opacity:0}}@keyframes scroll{0%{top:100%}to{top:-170%}}.star-wars-intro .main-content{font-size:35px}.star-wars-intro .title-content{position:absolute;top:100%;animation:scroll 100s linear 4s forwards}"
  };
  var _default = styleData;
  _exports.default = _default;
});