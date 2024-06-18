"use strict";
exports.__esModule = true;
exports.PasswordValidator = void 0;
var password_module_js_1 = require("./password.module.js");
var PasswordValidator = /** @class */ (function () {
    function PasswordValidator() {
        this.rules = [];
        this.errorMessages = [];
    }
    PasswordValidator.prototype.minlet = function (length) {
        if (length <= 0) {
            throw new Error(password_module_js_1.validationConfig.error.length);
        }
        this.rules.push("minlet:".concat(length));
        return this;
    };
    PasswordValidator.prototype.maxlet = function (length) {
        if (length <= 0) {
            throw new Error(password_module_js_1.validationConfig.error.length);
        }
        this.rules.push("maxlet:".concat(length));
        return this;
    };
    PasswordValidator.prototype.hasdigit = function (count) {
        if (count <= 0) {
            throw new Error(password_module_js_1.validationConfig.error.length);
        }
        this.rules.push("hasdigit:".concat(count));
        return this;
    };
    PasswordValidator.prototype.hasspec = function (count) {
        if (count <= 0) {
            throw new Error(password_module_js_1.validationConfig.error.length);
        }
        this.rules.push("hasspec:".concat(count));
        return this;
    };
    PasswordValidator.prototype.hasupper = function (count) {
        if (count <= 0) {
            throw new Error(password_module_js_1.validationConfig.error.length);
        }
        this.rules.push("hasupper:".concat(count));
        return this;
    };
    PasswordValidator.prototype.validate = function (password) {
        var _this = this;
        this.errorMessages = [];
        if (typeof password !== 'string') {
            this.errorMessages.push(password_module_js_1.validationConfig.error.password);
            return { isValid: false, errors: this.errorMessages };
        }
        this.rules.forEach(function (rule) {
            var _a = rule.split(':'), ruleName = _a[0], ruleValue = _a[1];
            var value = parseInt(ruleValue, 10);
            switch (ruleName) {
                case 'minlet':
                    if (password.length < value) {
                        _this.errorMessages.push("Password should be at least ".concat(value, " characters long"));
                    }
                    break;
                case 'maxlet':
                    if (password.length > value) {
                        _this.errorMessages.push("Password should be at most ".concat(value, " characters long"));
                    }
                    break;
                case 'hasdigit':
                    var digitCount = (password.match(/\d/g) || []).length;
                    if (digitCount < value) {
                        _this.errorMessages.push("Password should have at least ".concat(value, " digit(s)"));
                    }
                    break;
                case 'hasspec':
                    var specialCount = (password.match(new RegExp(password_module_js_1.validationConfig.regex.symbols, 'g')) ||
                        []).length;
                    if (specialCount < value) {
                        _this.errorMessages.push("Password should have at least ".concat(value, " special character(s)"));
                    }
                    break;
                case 'hasupper':
                    var upperCount = (password.match(/[A-Z]/g) || []).length;
                    if (upperCount < value) {
                        _this.errorMessages.push("Password should have at least ".concat(value, " uppercase letter(s)"));
                    }
                    break;
            }
        });
        return {
            isValid: this.errorMessages.length === 0,
            errors: this.errorMessages
        };
    };
    return PasswordValidator;
}());
exports.PasswordValidator = PasswordValidator;
