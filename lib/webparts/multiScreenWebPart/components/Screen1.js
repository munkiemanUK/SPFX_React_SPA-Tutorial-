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
var Screen1 = /** @class */ (function (_super) {
    __extends(Screen1, _super);
    function Screen1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Screen1.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("h2", null, "Screen 1")));
    };
    return Screen1;
}(React.Component));
export { Screen1 };
//# sourceMappingURL=Screen1.js.map