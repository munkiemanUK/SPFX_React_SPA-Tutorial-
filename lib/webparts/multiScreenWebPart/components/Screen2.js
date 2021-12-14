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
import { Link } from 'react-router-dom';
var Screen2 = /** @class */ (function (_super) {
    __extends(Screen2, _super);
    function Screen2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Screen2.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("h2", null, "Screen 2"),
            React.createElement("ul", null,
                React.createElement("li", null,
                    React.createElement(Link, { to: "/products/1" }, "Product 1")),
                React.createElement("li", null,
                    React.createElement(Link, { to: "/products/2" }, "Product 2")))));
    };
    return Screen2;
}(React.Component));
export { Screen2 };
//# sourceMappingURL=Screen2.js.map