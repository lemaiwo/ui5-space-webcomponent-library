sap.ui.define(["exports", "sap/ui/webc/common/thirdparty/base/UI5Element", "sap/ui/webc/common/thirdparty/base/decorators/customElement", "sap/ui/webc/common/thirdparty/base/renderer/LitRenderer", "sap/ui/webc/common/thirdparty/base/i18nBundle", "./generated/templates/SpaceComponentTemplate.lit", "./generated/themes/SpaceComponent.css", "./generated/i18n/i18n-defaults"], function (_exports, _UI5Element, _customElement, _LitRenderer, _i18nBundle, _SpaceComponentTemplate, _SpaceComponent, _i18nDefaults) {
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
    tag: "space-component",
    properties: {
      /**
       * Defines the intro.
       * <br><br>
       *
       * @type {string}
       * @defaultvalue ""
       * @public
       */
      intro: {
        type: String
      },
      /**
       * Defines the intro.
       * <br><br>
       *
       * @type {string}
       * @defaultvalue ""
       * @public
       */
      logo: {
        type: String
      }
    },
    managedSlots: true,
    slots: {
      /**
       * Defines the items.
       * <br><br>
       * <b>Note:</b> Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.
       *
       * @type {HTMLElement[]}
       * @slot
       * @public
       */
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
   * @alias be.wl.SpaceLibrary.SpaceComponent
   * @extends sap.ui.webc.base.UI5Element
   * @tagname space-component
   * @public
   */
  let SpaceComponent = SpaceComponent_1 = class SpaceComponent extends _UI5Element.default {
    // private intro: string = '';
    constructor() {
      super();
    }
    // static get observedAttributes() {
    // 	return ['intro','logo'];
    // }
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
    onAfterRendering() {
      const numStars = 100;
      // this.shadowRoot!.addEventListener('click', e => {
      // 	const event = new CustomEvent('doSomething', {
      // 		composed: true,
      // 		bubbles: true,
      // 		detail: { intro: this.intro }
      // 	});
      // 	this.shadowRoot!.dispatchEvent(event);
      // });
      const mainDiv = this.shadowRoot.querySelector(".star-wars-intro");
      // For every star we want to display
      for (let i = 0; i < numStars; i++) {
        const star = document.createElement("div");
        star.className = "star";
        const xy = this.getRandomPosition(mainDiv);
        star.style.top = `${xy[0]}px`;
        star.style.left = `${xy[1]}px`;
        mainDiv.append(star);
      }
    }
    getRandomPosition(element) {
      const y = element.offsetWidth;
      const x = element.offsetHeight;
      const randomX = Math.floor(Math.random() * x);
      const randomY = Math.floor(Math.random() * y);
      return [randomX, randomY];
    }
  };
  SpaceComponent = SpaceComponent_1 = __decorate([(0, _customElement.default)("space-component")], SpaceComponent);
  SpaceComponent.define();
  var _default = SpaceComponent;
  _exports.default = _default;
});