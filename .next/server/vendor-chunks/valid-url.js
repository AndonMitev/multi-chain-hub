/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/valid-url";
exports.ids = ["vendor-chunks/valid-url"];
exports.modules = {

/***/ "(ssr)/./node_modules/valid-url/index.js":
/*!*****************************************!*\
  !*** ./node_modules/valid-url/index.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\n(function(module) {\n    'use strict';\n\n    module.exports.is_uri = is_iri;\n    module.exports.is_http_uri = is_http_iri;\n    module.exports.is_https_uri = is_https_iri;\n    module.exports.is_web_uri = is_web_iri;\n    // Create aliases\n    module.exports.isUri = is_iri;\n    module.exports.isHttpUri = is_http_iri;\n    module.exports.isHttpsUri = is_https_iri;\n    module.exports.isWebUri = is_web_iri;\n\n\n    // private function\n    // internal URI spitter method - direct from RFC 3986\n    var splitUri = function(uri) {\n        var splitted = uri.match(/(?:([^:\\/?#]+):)?(?:\\/\\/([^\\/?#]*))?([^?#]*)(?:\\?([^#]*))?(?:#(.*))?/);\n        return splitted;\n    };\n\n    function is_iri(value) {\n        if (!value) {\n            return;\n        }\n\n        // check for illegal characters\n        if (/[^a-z0-9\\:\\/\\?\\#\\[\\]\\@\\!\\$\\&\\'\\(\\)\\*\\+\\,\\;\\=\\.\\-\\_\\~\\%]/i.test(value)) return;\n\n        // check for hex escapes that aren't complete\n        if (/%[^0-9a-f]/i.test(value)) return;\n        if (/%[0-9a-f](:?[^0-9a-f]|$)/i.test(value)) return;\n\n        var splitted = [];\n        var scheme = '';\n        var authority = '';\n        var path = '';\n        var query = '';\n        var fragment = '';\n        var out = '';\n\n        // from RFC 3986\n        splitted = splitUri(value);\n        scheme = splitted[1]; \n        authority = splitted[2];\n        path = splitted[3];\n        query = splitted[4];\n        fragment = splitted[5];\n\n        // scheme and path are required, though the path can be empty\n        if (!(scheme && scheme.length && path.length >= 0)) return;\n\n        // if authority is present, the path must be empty or begin with a /\n        if (authority && authority.length) {\n            if (!(path.length === 0 || /^\\//.test(path))) return;\n        } else {\n            // if authority is not present, the path must not start with //\n            if (/^\\/\\//.test(path)) return;\n        }\n\n        // scheme must begin with a letter, then consist of letters, digits, +, ., or -\n        if (!/^[a-z][a-z0-9\\+\\-\\.]*$/.test(scheme.toLowerCase()))  return;\n\n        // re-assemble the URL per section 5.3 in RFC 3986\n        out += scheme + ':';\n        if (authority && authority.length) {\n            out += '//' + authority;\n        }\n\n        out += path;\n\n        if (query && query.length) {\n            out += '?' + query;\n        }\n\n        if (fragment && fragment.length) {\n            out += '#' + fragment;\n        }\n\n        return out;\n    }\n\n    function is_http_iri(value, allowHttps) {\n        if (!is_iri(value)) {\n            return;\n        }\n\n        var splitted = [];\n        var scheme = '';\n        var authority = '';\n        var path = '';\n        var port = '';\n        var query = '';\n        var fragment = '';\n        var out = '';\n\n        // from RFC 3986\n        splitted = splitUri(value);\n        scheme = splitted[1]; \n        authority = splitted[2];\n        path = splitted[3];\n        query = splitted[4];\n        fragment = splitted[5];\n\n        if (!scheme)  return;\n\n        if(allowHttps) {\n            if (scheme.toLowerCase() != 'https') return;\n        } else {\n            if (scheme.toLowerCase() != 'http') return;\n        }\n\n        // fully-qualified URIs must have an authority section that is\n        // a valid host\n        if (!authority) {\n            return;\n        }\n\n        // enable port component\n        if (/:(\\d+)$/.test(authority)) {\n            port = authority.match(/:(\\d+)$/)[0];\n            authority = authority.replace(/:\\d+$/, '');\n        }\n\n        out += scheme + ':';\n        out += '//' + authority;\n        \n        if (port) {\n            out += port;\n        }\n        \n        out += path;\n        \n        if(query && query.length){\n            out += '?' + query;\n        }\n\n        if(fragment && fragment.length){\n            out += '#' + fragment;\n        }\n        \n        return out;\n    }\n\n    function is_https_iri(value) {\n        return is_http_iri(value, true);\n    }\n\n    function is_web_iri(value) {\n        return (is_http_iri(value) || is_https_iri(value));\n    }\n\n})(module);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdmFsaWQtdXJsL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdURBQXVEOztBQUV2RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2ViMy10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy92YWxpZC11cmwvaW5kZXguanM/ZjE5MiJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24obW9kdWxlKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgbW9kdWxlLmV4cG9ydHMuaXNfdXJpID0gaXNfaXJpO1xuICAgIG1vZHVsZS5leHBvcnRzLmlzX2h0dHBfdXJpID0gaXNfaHR0cF9pcmk7XG4gICAgbW9kdWxlLmV4cG9ydHMuaXNfaHR0cHNfdXJpID0gaXNfaHR0cHNfaXJpO1xuICAgIG1vZHVsZS5leHBvcnRzLmlzX3dlYl91cmkgPSBpc193ZWJfaXJpO1xuICAgIC8vIENyZWF0ZSBhbGlhc2VzXG4gICAgbW9kdWxlLmV4cG9ydHMuaXNVcmkgPSBpc19pcmk7XG4gICAgbW9kdWxlLmV4cG9ydHMuaXNIdHRwVXJpID0gaXNfaHR0cF9pcmk7XG4gICAgbW9kdWxlLmV4cG9ydHMuaXNIdHRwc1VyaSA9IGlzX2h0dHBzX2lyaTtcbiAgICBtb2R1bGUuZXhwb3J0cy5pc1dlYlVyaSA9IGlzX3dlYl9pcmk7XG5cblxuICAgIC8vIHByaXZhdGUgZnVuY3Rpb25cbiAgICAvLyBpbnRlcm5hbCBVUkkgc3BpdHRlciBtZXRob2QgLSBkaXJlY3QgZnJvbSBSRkMgMzk4NlxuICAgIHZhciBzcGxpdFVyaSA9IGZ1bmN0aW9uKHVyaSkge1xuICAgICAgICB2YXIgc3BsaXR0ZWQgPSB1cmkubWF0Y2goLyg/OihbXjpcXC8/I10rKTopPyg/OlxcL1xcLyhbXlxcLz8jXSopKT8oW14/I10qKSg/OlxcPyhbXiNdKikpPyg/OiMoLiopKT8vKTtcbiAgICAgICAgcmV0dXJuIHNwbGl0dGVkO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBpc19pcmkodmFsdWUpIHtcbiAgICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY2hlY2sgZm9yIGlsbGVnYWwgY2hhcmFjdGVyc1xuICAgICAgICBpZiAoL1teYS16MC05XFw6XFwvXFw/XFwjXFxbXFxdXFxAXFwhXFwkXFwmXFwnXFwoXFwpXFwqXFwrXFwsXFw7XFw9XFwuXFwtXFxfXFx+XFwlXS9pLnRlc3QodmFsdWUpKSByZXR1cm47XG5cbiAgICAgICAgLy8gY2hlY2sgZm9yIGhleCBlc2NhcGVzIHRoYXQgYXJlbid0IGNvbXBsZXRlXG4gICAgICAgIGlmICgvJVteMC05YS1mXS9pLnRlc3QodmFsdWUpKSByZXR1cm47XG4gICAgICAgIGlmICgvJVswLTlhLWZdKDo/W14wLTlhLWZdfCQpL2kudGVzdCh2YWx1ZSkpIHJldHVybjtcblxuICAgICAgICB2YXIgc3BsaXR0ZWQgPSBbXTtcbiAgICAgICAgdmFyIHNjaGVtZSA9ICcnO1xuICAgICAgICB2YXIgYXV0aG9yaXR5ID0gJyc7XG4gICAgICAgIHZhciBwYXRoID0gJyc7XG4gICAgICAgIHZhciBxdWVyeSA9ICcnO1xuICAgICAgICB2YXIgZnJhZ21lbnQgPSAnJztcbiAgICAgICAgdmFyIG91dCA9ICcnO1xuXG4gICAgICAgIC8vIGZyb20gUkZDIDM5ODZcbiAgICAgICAgc3BsaXR0ZWQgPSBzcGxpdFVyaSh2YWx1ZSk7XG4gICAgICAgIHNjaGVtZSA9IHNwbGl0dGVkWzFdOyBcbiAgICAgICAgYXV0aG9yaXR5ID0gc3BsaXR0ZWRbMl07XG4gICAgICAgIHBhdGggPSBzcGxpdHRlZFszXTtcbiAgICAgICAgcXVlcnkgPSBzcGxpdHRlZFs0XTtcbiAgICAgICAgZnJhZ21lbnQgPSBzcGxpdHRlZFs1XTtcblxuICAgICAgICAvLyBzY2hlbWUgYW5kIHBhdGggYXJlIHJlcXVpcmVkLCB0aG91Z2ggdGhlIHBhdGggY2FuIGJlIGVtcHR5XG4gICAgICAgIGlmICghKHNjaGVtZSAmJiBzY2hlbWUubGVuZ3RoICYmIHBhdGgubGVuZ3RoID49IDApKSByZXR1cm47XG5cbiAgICAgICAgLy8gaWYgYXV0aG9yaXR5IGlzIHByZXNlbnQsIHRoZSBwYXRoIG11c3QgYmUgZW1wdHkgb3IgYmVnaW4gd2l0aCBhIC9cbiAgICAgICAgaWYgKGF1dGhvcml0eSAmJiBhdXRob3JpdHkubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoIShwYXRoLmxlbmd0aCA9PT0gMCB8fCAvXlxcLy8udGVzdChwYXRoKSkpIHJldHVybjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGlmIGF1dGhvcml0eSBpcyBub3QgcHJlc2VudCwgdGhlIHBhdGggbXVzdCBub3Qgc3RhcnQgd2l0aCAvL1xuICAgICAgICAgICAgaWYgKC9eXFwvXFwvLy50ZXN0KHBhdGgpKSByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBzY2hlbWUgbXVzdCBiZWdpbiB3aXRoIGEgbGV0dGVyLCB0aGVuIGNvbnNpc3Qgb2YgbGV0dGVycywgZGlnaXRzLCArLCAuLCBvciAtXG4gICAgICAgIGlmICghL15bYS16XVthLXowLTlcXCtcXC1cXC5dKiQvLnRlc3Qoc2NoZW1lLnRvTG93ZXJDYXNlKCkpKSAgcmV0dXJuO1xuXG4gICAgICAgIC8vIHJlLWFzc2VtYmxlIHRoZSBVUkwgcGVyIHNlY3Rpb24gNS4zIGluIFJGQyAzOTg2XG4gICAgICAgIG91dCArPSBzY2hlbWUgKyAnOic7XG4gICAgICAgIGlmIChhdXRob3JpdHkgJiYgYXV0aG9yaXR5Lmxlbmd0aCkge1xuICAgICAgICAgICAgb3V0ICs9ICcvLycgKyBhdXRob3JpdHk7XG4gICAgICAgIH1cblxuICAgICAgICBvdXQgKz0gcGF0aDtcblxuICAgICAgICBpZiAocXVlcnkgJiYgcXVlcnkubGVuZ3RoKSB7XG4gICAgICAgICAgICBvdXQgKz0gJz8nICsgcXVlcnk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZnJhZ21lbnQgJiYgZnJhZ21lbnQubGVuZ3RoKSB7XG4gICAgICAgICAgICBvdXQgKz0gJyMnICsgZnJhZ21lbnQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gb3V0O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzX2h0dHBfaXJpKHZhbHVlLCBhbGxvd0h0dHBzKSB7XG4gICAgICAgIGlmICghaXNfaXJpKHZhbHVlKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHNwbGl0dGVkID0gW107XG4gICAgICAgIHZhciBzY2hlbWUgPSAnJztcbiAgICAgICAgdmFyIGF1dGhvcml0eSA9ICcnO1xuICAgICAgICB2YXIgcGF0aCA9ICcnO1xuICAgICAgICB2YXIgcG9ydCA9ICcnO1xuICAgICAgICB2YXIgcXVlcnkgPSAnJztcbiAgICAgICAgdmFyIGZyYWdtZW50ID0gJyc7XG4gICAgICAgIHZhciBvdXQgPSAnJztcblxuICAgICAgICAvLyBmcm9tIFJGQyAzOTg2XG4gICAgICAgIHNwbGl0dGVkID0gc3BsaXRVcmkodmFsdWUpO1xuICAgICAgICBzY2hlbWUgPSBzcGxpdHRlZFsxXTsgXG4gICAgICAgIGF1dGhvcml0eSA9IHNwbGl0dGVkWzJdO1xuICAgICAgICBwYXRoID0gc3BsaXR0ZWRbM107XG4gICAgICAgIHF1ZXJ5ID0gc3BsaXR0ZWRbNF07XG4gICAgICAgIGZyYWdtZW50ID0gc3BsaXR0ZWRbNV07XG5cbiAgICAgICAgaWYgKCFzY2hlbWUpICByZXR1cm47XG5cbiAgICAgICAgaWYoYWxsb3dIdHRwcykge1xuICAgICAgICAgICAgaWYgKHNjaGVtZS50b0xvd2VyQ2FzZSgpICE9ICdodHRwcycpIHJldHVybjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChzY2hlbWUudG9Mb3dlckNhc2UoKSAhPSAnaHR0cCcpIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGZ1bGx5LXF1YWxpZmllZCBVUklzIG11c3QgaGF2ZSBhbiBhdXRob3JpdHkgc2VjdGlvbiB0aGF0IGlzXG4gICAgICAgIC8vIGEgdmFsaWQgaG9zdFxuICAgICAgICBpZiAoIWF1dGhvcml0eSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZW5hYmxlIHBvcnQgY29tcG9uZW50XG4gICAgICAgIGlmICgvOihcXGQrKSQvLnRlc3QoYXV0aG9yaXR5KSkge1xuICAgICAgICAgICAgcG9ydCA9IGF1dGhvcml0eS5tYXRjaCgvOihcXGQrKSQvKVswXTtcbiAgICAgICAgICAgIGF1dGhvcml0eSA9IGF1dGhvcml0eS5yZXBsYWNlKC86XFxkKyQvLCAnJyk7XG4gICAgICAgIH1cblxuICAgICAgICBvdXQgKz0gc2NoZW1lICsgJzonO1xuICAgICAgICBvdXQgKz0gJy8vJyArIGF1dGhvcml0eTtcbiAgICAgICAgXG4gICAgICAgIGlmIChwb3J0KSB7XG4gICAgICAgICAgICBvdXQgKz0gcG9ydDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgb3V0ICs9IHBhdGg7XG4gICAgICAgIFxuICAgICAgICBpZihxdWVyeSAmJiBxdWVyeS5sZW5ndGgpe1xuICAgICAgICAgICAgb3V0ICs9ICc/JyArIHF1ZXJ5O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoZnJhZ21lbnQgJiYgZnJhZ21lbnQubGVuZ3RoKXtcbiAgICAgICAgICAgIG91dCArPSAnIycgKyBmcmFnbWVudDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIG91dDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc19odHRwc19pcmkodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGlzX2h0dHBfaXJpKHZhbHVlLCB0cnVlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc193ZWJfaXJpKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiAoaXNfaHR0cF9pcmkodmFsdWUpIHx8IGlzX2h0dHBzX2lyaSh2YWx1ZSkpO1xuICAgIH1cblxufSkobW9kdWxlKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/valid-url/index.js\n");

/***/ })

};
;