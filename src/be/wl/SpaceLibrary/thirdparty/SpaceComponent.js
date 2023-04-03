sap.ui.define(["exports", "@ui5/webcomponents-base/dist/UI5Element", "@ui5/webcomponents-base/dist/decorators/customElement", "@ui5/webcomponents-base/dist/renderer/LitRenderer", "@ui5/webcomponents-base/dist/i18nBundle", "./generated/templates/SpaceComponentTemplate.lit", "./generated/themes/SpaceComponent.css", "./generated/i18n/i18n-defaults"], function (_exports, _UI5Element, _customElement, _LitRenderer, _i18nBundle, _SpaceComponentTemplate, _SpaceComponent, _i18nDefaults) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _UI5Element = _interopRequireDefault(_UI5Element);
  _customElement = _interopRequireDefault(_customElement);
  _LitRenderer = _interopRequireDefault(_LitRenderer);
  _SpaceComponentTemplate = _interopRequireDefault(_SpaceComponentTemplate);
  _SpaceComponent = _interopRequireDefault(_SpaceComponent);
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  var __decorate = void 0 && (void 0).__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var SpaceComponent_1;

  // Template

  // Styles

  const metadata = {
    tag: "ui5-space-component",
    properties: {
      intro: {
        type: String
      }
    },
    managedSlots: true,
    slots: {
      items: {
        "type": HTMLElement,
        "individualSlots": false
      }
    }
  };
  /**
   * @class
   *
   * <h3 class="comment-api-title">Overview</h3>
   *
   * The <code>space-component</code> component is a demo component that displays some text.
   *
   * @constructor
   * @alias be.wl.SpaceComponent
   * @extends sap.ui.webc.base.UI5Element
   * @tagname ui5-space-component
   * @public
   */
  let SpaceComponent = SpaceComponent_1 = class SpaceComponent extends _UI5Element.default {
    constructor() {
      super();
    }
    static get metadata() {
      return metadata;
    }
    static get render() {
      return _LitRenderer.default;
    }
    static get template() {
      return _SpaceComponentTemplate.default;
    }
    static get styles() {
      return _SpaceComponent.default;
    }
    static async onDefine() {
      SpaceComponent_1.i18nBundle = await (0, _i18nBundle.getI18nBundle)("SpacePackage");
    }
    get pleaseWaitText() {
      return SpaceComponent_1.i18nBundle.getText(_i18nDefaults.PLEASE_WAIT);
    }
  };
  SpaceComponent = SpaceComponent_1 = __decorate([(0, _customElement.default)("space-component")], SpaceComponent);
  SpaceComponent.define();
  var _default = SpaceComponent;
  _exports.default = _default;
});