"use strict";
exports.__esModule = true;
exports.validationConfig = void 0;
exports.validationConfig = {
    error: {
        length: 'Length should be a valid positive number',
        password: 'Password should be a valid string',
        invalidPlugin: 'Plugin should be a valid function',
        minlet: function (length) {
            return "Password should be at least ".concat(length, " characters long");
        },
        maxlet: function (length) {
            return "Password should be at most ".concat(length, " characters long");
        },
        hasdigit: function (count) {
            return "Password should have at least ".concat(count, " digit(s)");
        },
        hasspec: function (count) {
            return "Password should have at least ".concat(count, " special character(s)");
        },
        hasupper: function (count) {
            return "Password should have at least ".concat(count, " uppercase letter(s)");
        }
    },
    regex: {
        digits: '(\\d.*)',
        letters: '([a-zA-Z].*)',
        symbols: '([`~\\!@#\\$%\\^\\&\\*\\(\\)\\-_\\=\\+\\[\\{\\}\\]\\\\|;:\\\'",<.>\\/\\?€£¥₹§±].*)',
        spaces: '([\\s].*)',
        tags: '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).$',
        minlength: 6,
        maxlength: 30
    }
};
