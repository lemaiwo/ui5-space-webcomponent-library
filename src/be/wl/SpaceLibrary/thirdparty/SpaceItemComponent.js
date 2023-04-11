sap.ui.define(["exports", "sap/ui/webc/common/thirdparty/base/UI5Element", "sap/ui/webc/common/thirdparty/base/decorators/customElement", "sap/ui/webc/common/thirdparty/base/renderer/LitRenderer", "./generated/templates/SpaceItemComponentTemplate.lit", "./generated/themes/SpaceItemComponent.css"], function (_exports, _UI5Element, _customElement, _LitRenderer, _SpaceItemComponentTemplate, _SpaceItemComponent) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _UI5Element = _interopRequireDefault(_UI5Element);
  _customElement = _interopRequireDefault(_customElement);
  _LitRenderer = _interopRequireDefault(_LitRenderer);
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
   * @public
   */
  const metadata = {
    tag: "space-item-component",
    properties: /** @lends sap.ui.webc.SpacePackage.SpaceItemComponent.prototype */{
      title: {
        type: String
      },
      description: {
        type: String
      }
    },
    slots: /** @lends sap.ui.webc.SpacePackage.SpaceItemComponent.prototype */{
      //
    },
    events: /** @lends sap.ui.webc.SpacePackage.SpaceItemComponent.prototype */{
      //
    }
  };
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
    static get metadata() {
      return metadata;
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
  SpaceItemComponent = __decorate([(0, _customElement.default)("space-item-component")], SpaceItemComponent);
  SpaceItemComponent.define();
  var _default = SpaceItemComponent;
  _exports.default = _default;
});