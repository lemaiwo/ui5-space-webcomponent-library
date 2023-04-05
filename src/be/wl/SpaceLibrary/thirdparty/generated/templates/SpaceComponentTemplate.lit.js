sap.ui.define(["exports", "@ui5/webcomponents-base/dist/renderer/LitRenderer"], function (_exports, _LitRenderer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  /* eslint no-unused-vars: 0 */

  const block0 = (context, tags, suffix) => (0, _LitRenderer.html)`<div class="star-wars-intro"><!-- Blue Intro Text --><p class="intro-text">${(0, _LitRenderer.ifDefined)(context.intro)}</p><!-- Logo Image or Text goes in here --><h2 class="main-logo"><img src="img/star-wars-intro.png"></h2><!-- All Scrolling Content Goes in here --><div class="main-content"><div class="title-content"><slot></slot></div></div></div>`;
  var _default = block0;
  _exports.default = _default;
});