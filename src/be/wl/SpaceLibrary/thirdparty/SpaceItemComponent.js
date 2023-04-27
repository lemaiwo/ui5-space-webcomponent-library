sap.ui.define(["exports", "sap/ui/webc/common/thirdparty/base/UI5Element", "sap/ui/webc/common/thirdparty/base/decorators/customElement", "sap/ui/webc/common/thirdparty/base/renderer/LitRenderer", "sap/ui/webc/common/thirdparty/base/decorators/property", "./generated/templates/SpaceItemComponentTemplate.lit", "./generated/themes/SpaceItemComponent.css"], function (_exports, _UI5Element, _customElement, _LitRenderer, _property, _SpaceItemComponentTemplate, _SpaceItemComponent) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _UI5Element = _interopRequireDefault(_UI5Element);
  _customElement = _interopRequireDefault(_customElement);
  _LitRenderer = _interopRequireDefault(_LitRenderer);
  _property = _interopRequireDefault(_property);
  _SpaceItemComponentTemplate = _interopRequireDefault(_SpaceItemComponentTemplate);
  _SpaceItemComponent = _interopRequireDefault(_SpaceItemComponent);
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  var __decorate = void 0 && (void 0).__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };

  // Template

  // Styles

  /**
   * @class
   *
   * <h3 class="comment-api-title">Overview</h3>
   *
   *
   * <h3>Usage</h3>
   *
   * For the <code>ui5-space-item-component</code>
   * <h3>ES6 Module Import</h3>
   *
   * <code>import SpacePackage/dist/SpaceItemComponent.js";</code>
   *
   * @constructor
   * @alias be.wl.SpaceLibrary.SpaceItemComponent
   * @extends sap.ui.webc.base.UI5Element
   * @tagname space-item-component
   * @public
   */
  let SpaceItemComponent = class SpaceItemComponent extends _UI5Element.default {
    constructor() {
      super();
    }
    static get render() {
      return _LitRenderer.default;
    }
    static get styles() {
      return _SpaceItemComponent.default;
    }
    static get template() {
      return _SpaceItemComponentTemplate.default;
    }
    static get dependencies() {
      return [];
    }
    static async onDefine() {}
  };
  __decorate([(0, _property.default)()], SpaceItemComponent.prototype, "title", void 0);
  __decorate([(0, _property.default)()], SpaceItemComponent.prototype, "description", void 0);
  SpaceItemComponent = __decorate([(0, _customElement.default)("space-item-component")], SpaceItemComponent);
  SpaceItemComponent.define();
  var _default = SpaceItemComponent;
  _exports.default = _default;
});