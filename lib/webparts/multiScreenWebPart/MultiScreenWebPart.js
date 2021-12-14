var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { App } from './components/App';
var MultiScreenWebPart = /** @class */ (function (_super) {
    __extends(MultiScreenWebPart, _super);
    function MultiScreenWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MultiScreenWebPart.prototype.render = function () {
        ReactDom.render(React.createElement(App), this.domElement);
    };
    MultiScreenWebPart.prototype.onDispose = function () {
        ReactDom.unmountComponentAtNode(this.domElement);
    };
    Object.defineProperty(MultiScreenWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    return MultiScreenWebPart;
}(BaseClientSideWebPart));
export default MultiScreenWebPart;
//# sourceMappingURL=MultiScreenWebPart.js.map