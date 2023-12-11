/*!
 * pangu.js
 * --------
 * @version: ???
 * @homepage: https://github.com/vinta/pangu.js
 * @license: MIT
 * @author: Vinta Chen <vinta.chen@gmail.com> (https://github.com/vinta)
 */
/* Modified by CY Fung; Follow MIT License */
/*
Copyright (c) 2013 Vinta
Copyright (c) 2023 CY Fung
This software is released under the MIT License, see LICENSE.
*/
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("pangu", [], factory);
	else if(typeof exports === 'object')
		exports["pangu"] = factory();
	else
		root["pangu"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	let installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		let module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		let ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(let key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		let getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

          let __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__; (function (global, factory) {
            if (true) {
              !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
                __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
                  (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
                __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
            } else { let mod; }
          })(this, function () {
            "use strict";



            let WebPangu = function () {

              const CJK = "\u2E80-\u2EFF\u2F00-\u2FDF\u3040-\u309F\u30A0-\u30FA\u30FC-\u30FF\u3100-\u312F\u3200-\u32FF\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFAFF";
              const ANY_CJK = new RegExp("[" + CJK + "]");
              // const CONVERT_TO_FULLWIDTH_CJK_SYMBOLS_CJK = new RegExp("([" + CJK + "])[ ]*([\\:]+|\\.)[ ]*([" + CJK + "])", 'g');
              // const CONVERT_TO_FULLWIDTH_CJK_SYMBOLS = new RegExp("([" + CJK + "])[ ]*([~\\!;,\\?]+)[ ]*", 'g');
              // const DOTS_CJK = new RegExp("([\\.]{2,}|\u2026)([" + CJK + "])", 'g');
              // const FIX_CJK_COLON_ANS = new RegExp("([" + CJK + "])\\:([A-Z0-9\\(\\)])", 'g');
              // const CJK_QUOTE = new RegExp("([" + CJK + "])([`\"\u05F4])", 'g');
              // const QUOTE_CJK = new RegExp("([`\"\u05F4])([" + CJK + "])", 'g');
              // const FIX_QUOTE_ANY_QUOTE = /([`"\u05f4]+)[ ]*(.+?)[ ]*([`"\u05f4]+)/g;
              // const CJK_SINGLE_QUOTE_BUT_POSSESSIVE = new RegExp("([" + CJK + "])('[^s])", 'g');
              // const SINGLE_QUOTE_CJK = new RegExp("(')([" + CJK + "])", 'g');
              // const FIX_POSSESSIVE_SINGLE_QUOTE = new RegExp("([A-Za-z0-9" + CJK + "])( )('s)", 'g');
              // const HASH_ANS_CJK_HASH = new RegExp("([" + CJK + "])(#)([" + CJK + "]+)(#)([" + CJK + "])", 'g');
              // const CJK_HASH = new RegExp("([" + CJK + "])(#([^ ]))", 'g');
              // const HASH_CJK = new RegExp("(([^ ])#)([" + CJK + "])", 'g');
              // const CJK_OPERATOR_ANS = new RegExp("([" + CJK + "])([\\+\\-\\*\\/=&\\|<>])([A-Za-z0-9])", 'g');
              // const ANS_OPERATOR_CJK = new RegExp("([A-Za-z0-9])([\\+\\-\\*\\/=&\\|<>])([" + CJK + "])", 'g');
              // const FIX_SLASH_AS = /([/]) ([a-z\-_\./]+)/g;
              // const FIX_SLASH_AS_SLASH = /([/\.])([A-Za-z\-_\./]+) ([/])/g;
              // const CJK_LEFT_BRACKET = new RegExp("([" + CJK + "])([\\(\\[\\{<>\u201C])", 'g');
              // const RIGHT_BRACKET_CJK = new RegExp("([\\)\\]\\}<>\u201D])([" + CJK + "])", 'g');
              // const FIX_LEFT_BRACKET_ANY_RIGHT_BRACKET = /([\(\[\{<\u201c]+)[ ]*(.+?)[ ]*([\)\]\}>\u201d]+)/;
              // const ANS_CJK_LEFT_BRACKET_ANY_RIGHT_BRACKET = new RegExp("([A-Za-z0-9" + CJK + "])[ ]*([\u201C])([A-Za-z0-9" + CJK + "\\-_ ]+)([\u201D])", 'g');
              // const LEFT_BRACKET_ANY_RIGHT_BRACKET_ANS_CJK = new RegExp("([\u201C])([A-Za-z0-9" + CJK + "\\-_ ]+)([\u201D])[ ]*([A-Za-z0-9" + CJK + "])", 'g');
              // const AN_LEFT_BRACKET = /([A-Za-z0-9])([\(\[\{])/g;
              // const RIGHT_BRACKET_AN = /([\)\]\}])([A-Za-z0-9])/g;
              // const CJK_ANS = new RegExp("([" + CJK + "])([A-Za-z\u0370-\u03FF0-9@\\$%\\^&\\*\\-\\+\\\\=\\|/\xA1-\xFF\u2150-\u218F\u2700\u2014\u27BF])", 'g');
              // const ANS_CJK = new RegExp("([A-Za-z\u0370-\u03FF0-9~\\$%\\^&\\*\\-\\+\\\\=\\|/!;:,\\.\\?\xA1-\xFF\u2150-\u218F\u2700\u2014\u27BF])([" + CJK + "])", 'g');
              // const S_A = /(%)([A-Za-z])/g;
              // const MIDDLE_DOT = /([ ]*)([\u00b7\u2022\u2027])([ ]*)/g;

              const M_ADD_SPACE = new RegExp(`([${CJK}])([a-zA-Z0-9]+|[a-zA-Z0-9]+[\\x20-\\xFF]+[a-zA-Z0-9]+|[a-zA-Z0-9][a-zA-Z0-9.,]*[a-zA-Z0-9][%°]|[a-zA-Z0-9][%°]|[a-zA-Z0-9][a-zA-Z0-9\/,.]+[a-zA-Z0-9])([${CJK}])`, 'g')
              const P_ADD_SPACE = new RegExp(`(^|[\\r\\n])([a-zA-Z0-9]+|[a-zA-Z0-9]+[\\x20-\\xFF]+[a-zA-Z0-9]+)([${CJK}])`, 'g')
              const S_ADD_SPACE = new RegExp(`([${CJK}])([a-zA-Z0-9]+|[a-zA-Z0-9]+[\\x20-\\xFF]+[a-zA-Z0-9]+)([\\r\\n]|$)`, 'g')

              const CMB = "\uff01-\uff64\u3001\u3002";
              const CMB2 = `${CMB}」》】〉｝］）〗〕』`;

              const M_ADD_SPACE_2 = new RegExp(`([${CMB}])([a-zA-Z0-9]+|[a-zA-Z0-9]+[\\x20-\\xFF]+[a-zA-Z0-9]+)([${CJK}])`, 'g')
              const M_ADD_SPACE_3 = new RegExp(`([${CJK}])([a-zA-Z0-9]+|[a-zA-Z0-9]+[\\x20-\\xFF]+[a-zA-Z0-9]+|[a-zA-Z0-9][a-zA-Z0-9.,]*[a-zA-Z0-9][%°]|[a-zA-Z0-9][%°])([${CMB}])`, 'g')

              const M_COV_SYMBOL = new RegExp(`([${CJK}])([~!;:,?])([${CJK}])`, 'g')
              const S_ADD_SPACE_2 = new RegExp(`([a-zA-Z0-9]+)([~!;:,?])([${CJK}])`, 'g')

              const CJK2 = `${CJK}\\d,.\\/\\\\`;

              const A_ADD_SPACE = new RegExp(`([${CJK}])([!#$%&\\x2A-\\x5A\\x5E\\x5F\\x61-\\x7A~\\x80-\\xFF]+)\\x20([${CJK}])`, 'g')
              const Q_ADD_SPACE = new RegExp(`([${CJK}])(['"])([${CJK2}]+)\\2([${CJK}])`, 'g')
              const Q_ADD_SPACE_2 = new RegExp(`([${CJK}])([“])([${CJK2}]+)([”])([${CJK}])`, 'g')
              const Q_ADD_SPACE_3 = new RegExp(`([${CJK}])([‘])([${CJK2}]+)([’])([${CJK}])`, 'g')
              const Q_ADD_SPACE_4 = new RegExp(`([${CJK}])([(])([${CJK2}]+)([)])([${CJK}])`, 'g')
              const Q_ADD_SPACE_5 = new RegExp(`([${CJK}])([\\[])([${CJK2}]+)([\\]])([${CJK}])`, 'g')
              const Q_ADD_SPACE_6 = new RegExp(`([${CJK}])([\\{])([${CJK2}]+)([\\}])([${CJK}])`, 'g')

              const Q_ADD_SPACE_1b = new RegExp(`([${CMB}])(['"])([${CJK2}]+)\\2([${CJK}])`, 'g')
              const Q_ADD_SPACE_2b = new RegExp(`([${CMB}])([“])([${CJK2}]+)([”])([${CJK}])`, 'g')
              const Q_ADD_SPACE_3b = new RegExp(`([${CMB}])([‘])([${CJK2}]+)([’])([${CJK}])`, 'g')
              const Q_ADD_SPACE_4b = new RegExp(`([${CMB}])([(])([${CJK2}]+)([)])([${CJK}])`, 'g')
              const Q_ADD_SPACE_5b = new RegExp(`([${CMB}])([\\[])([${CJK2}]+)([\\]])([${CJK}])`, 'g')
              const Q_ADD_SPACE_6b = new RegExp(`([${CMB}])([\\{])([${CJK2}]+)([\\}])([${CJK}])`, 'g')

              const QA_ADD_SPACE = new RegExp(`([${CJK}])(['"“”‘’(){}\\[\\]])([^'"“”‘’(){}\\[\\]]+)(['"“”‘’(){}\\[\\]])([${CMB2}])`)
              const QA_ADD_SPACE_2 = new RegExp(`([${CJK}])(['"“”‘’(){}\\[\\]])([a-zA-Z0-9.,]+)(['"“”‘’(){}\\[\\]])([${CJK}])`)

              // const M_ADD_SPACE_4 = new RegExp(`([${CJK}${CMB}]\\x20\\d+\\x20[${CJK}])(\\d+)`, 'g') // to be reviewed; 将火药用棉布包裹起来，用铁板夹住，以 60 至120Kgf/cm2的速度挤压，以增加比重密度。

              function loopReplace(text, search, replacement) {
                let maxN = Math.round(text.length / 2) + 4;
                while (maxN-- > 0) {
                  const t = text.replace(search, replacement);
                  if (t === text) return t;
                  text = t;
                }
              }

              function convertToFullwidth(symbols) {
                return symbols.replace(/[~!;:,?]/g, (x) => String.fromCharCode(x.charCodeAt() + 65248)) // .replace(/\./g, '。')
              }

              function bracket(b, d) {
                let z = false;
                if (b === '\'' || b === '"') {
                  if (d === b) z = true;
                } else if (b === '“') {
                  if (d === '”') z = true;
                } else if (b === '‘') {
                  if (d === '’') z = true;
                } else if (b === '(') {
                  if (d === ')') z = true;
                } else if (b === '[') {
                  if (d === ']') z = true;
                } else if (b === '{') {
                  if (d === '}') z = true;
                }
                return z;
              }

              /**
               * 
               * @param {string} text 
               * @returns {string}
               */
              function replacer(text) {

                // let self = this;
                let newText = text;
                /*
                newText = newText.replace(CONVERT_TO_FULLWIDTH_CJK_SYMBOLS_CJK, function (match, leftCjk, symbols, rightCjk) {
                  let fullwidthSymbols = convertToFullwidth(symbols);
                  return "" + leftCjk + fullwidthSymbols + rightCjk;
                });
                newText = newText.replace(CONVERT_TO_FULLWIDTH_CJK_SYMBOLS, function (match, cjk, symbols) {
                  let fullwidthSymbols = convertToFullwidth(symbols);
                  return "" + cjk + fullwidthSymbols;
                });
                */

                /*
                newText = newText.replace(DOTS_CJK, '$1 $2');
                // newText = newText.replace(FIX_CJK_COLON_ANS, '$1：$2');
                newText = newText.replace(CJK_QUOTE, '$1 $2');
                newText = newText.replace(QUOTE_CJK, '$1 $2');
                // newText = newText.replace(FIX_QUOTE_ANY_QUOTE, '$1$2$3');
                newText = newText.replace(CJK_SINGLE_QUOTE_BUT_POSSESSIVE, '$1 $2');
                newText = newText.replace(SINGLE_QUOTE_CJK, '$1 $2');
                newText = newText.replace(FIX_POSSESSIVE_SINGLE_QUOTE, "$1's");
                newText = newText.replace(HASH_ANS_CJK_HASH, '$1 $2$3$4 $5');
                newText = newText.replace(CJK_HASH, '$1 $2');
                newText = newText.replace(HASH_CJK, '$1 $3');
                newText = newText.replace(CJK_OPERATOR_ANS, '$1 $2 $3');
                newText = newText.replace(ANS_OPERATOR_CJK, '$1 $2 $3');
                // newText = newText.replace(FIX_SLASH_AS, '$1$2');
                // newText = newText.replace(FIX_SLASH_AS_SLASH, '$1$2$3');
                newText = newText.replace(CJK_LEFT_BRACKET, '$1 $2');
                newText = newText.replace(RIGHT_BRACKET_CJK, '$1 $2');
                // newText = newText.replace(FIX_LEFT_BRACKET_ANY_RIGHT_BRACKET, '$1$2$3');
                newText = newText.replace(ANS_CJK_LEFT_BRACKET_ANY_RIGHT_BRACKET, '$1 $2$3$4');
                newText = newText.replace(LEFT_BRACKET_ANY_RIGHT_BRACKET_ANS_CJK, '$1$2$3 $4');
                // newText = newText.replace(AN_LEFT_BRACKET, '$1 $2');
                // newText = newText.replace(RIGHT_BRACKET_AN, '$1 $2');
                newText = newText.replace(CJK_ANS, '$1 $2');
                newText = newText.replace(ANS_CJK, '$1 $2');
                // newText = newText.replace(S_A, '$1 $2');
                // newText = newText.replace(MIDDLE_DOT, '・');

                */


                const nLen = text.length;
                if (nLen <= 1) return text;

                if (nLen >= 3) newText = loopReplace(newText, M_ADD_SPACE, '$1 $2 $3');
                newText = loopReplace(newText, P_ADD_SPACE, '$1$2 $3');
                newText = loopReplace(newText, S_ADD_SPACE, '$1 $2$3');

                if (nLen >= 3) newText = loopReplace(newText, M_ADD_SPACE_2, '$1$2 $3');
                if (nLen >= 3) newText = loopReplace(newText, M_ADD_SPACE_3, '$1 $2$3');
                // if (nLen >= 4) newText = loopReplace(newText, M_ADD_SPACE_4, '$1 $2');

                if (nLen >= 3) newText = loopReplace(newText, M_COV_SYMBOL, (_, a, b, c) => {

                  let d = convertToFullwidth(b);
                  if (typeof d === 'string' && d !== b) {
                    return a + d + c;
                  }
                  return _;
                });

                if (nLen >= 3) newText = loopReplace(newText, S_ADD_SPACE_2, '$1$2 $3');
                if (nLen >= 3) newText = loopReplace(newText, A_ADD_SPACE, '$1 $2 $3');

                if (nLen >= 5 && /['"“”‘’(){}\[\]]/.test(newText)) {

                  newText = loopReplace(newText, Q_ADD_SPACE, '$1 $2$3$2 $4');
                  newText = loopReplace(newText, Q_ADD_SPACE_2, '$1 $2$3$4 $5');
                  newText = loopReplace(newText, Q_ADD_SPACE_3, '$1 $2$3$4 $5');
                  newText = loopReplace(newText, Q_ADD_SPACE_4, '$1 $2$3$4 $5');
                  newText = loopReplace(newText, Q_ADD_SPACE_5, '$1 $2$3$4 $5');
                  newText = loopReplace(newText, Q_ADD_SPACE_6, '$1 $2$3$4 $5');
                  newText = loopReplace(newText, QA_ADD_SPACE, (_, a, b, c, d, e) => {
                    let z = bracket(b, d);
                    return z ? `${a} ${b}${c}${d}${e}` : _;
                  })
                  newText = loopReplace(newText, QA_ADD_SPACE_2, (_, a, b, c, d, e) => {
                    let z = bracket(b, d);
                    return z ? `${a} ${b}${c}${d} ${e}` : _;
                  })

                  newText = loopReplace(newText, Q_ADD_SPACE_1b, '$1$2$3$2 $4');
                  newText = loopReplace(newText, Q_ADD_SPACE_2b, '$1$2$3$4 $5');
                  newText = loopReplace(newText, Q_ADD_SPACE_3b, '$1$2$3$4 $5');
                  newText = loopReplace(newText, Q_ADD_SPACE_4b, '$1$2$3$4 $5');
                  newText = loopReplace(newText, Q_ADD_SPACE_5b, '$1$2$3$4 $5');
                  newText = loopReplace(newText, Q_ADD_SPACE_6b, '$1$2$3$4 $5');

                }

                return newText;
              }

              function replacerM(text) {

                let s = text.split(/([a-z0-9]+\:\/\/[^\s]+)/);
                if (s.length >= 3) {
                  for (let i = 0; i < s.length; i++) {
                    if ((i % 2) === 0) {
                      let t = s[i];
                      if (t.length >= 2) s[i] = replacer(t);
                    }
                  }
                  return s.join('');
                } else {
                  return replacer(text);
                }

              }

              function anyPossibleCJK(s) {
                for (let i = 0, l = s.length; i < l; i++) {
                  if (s[i] >= '\u2E80') return true;
                }
                return false;
              }

              function anyPossibleCJK_(s, a, b) {
                for (let i = a; i < b; i++) {
                  if (s[i] >= '\u2E80') return true;
                }
                return false;
              }

              function trimTextStart(s) {
                // "  ab cd ef  " => ["  ab", " cd ef  "]
                if (typeof s !== 'string') return [s, ""];
                if (!s.length) return ["", ""];
                let j = 0;
                for (let i = 0; i < s.length; i++) {
                  if (s[i] === ' ') j = i + 1;
                  else break;
                }
                let idx1 = s.indexOf(' ', j);
                if (idx1 < 0) return [s, ""];
                return [`${s.substring(0, idx1)}`, `${s.substring(idx1)}`];
              }

              function trimTextEnd(s) {
                // "  ab cd ef  " => ["  ab cd ", "ef  "]
                if (typeof s !== 'string') return ["", s];
                if (!s.length) return ["", ""];
                let j = s.length;
                for (let i = s.length - 1; i >= 0; i--) {
                  if (s[i] === ' ') j = i;
                  else break;
                }
                let idx2 = s.lastIndexOf(' ', j - 1);
                if (idx2 < 0) return ["", s];
                return [`${s.substring(0, idx2 + 1)}`, `${s.substring(idx2 + 1)}`];
              }

              function trimTextMiddle(s) {
                if (typeof s !== 'string') return s;

                if (!s.length) return s;

                let j1 = 0;
                for (let i = 0; i < s.length; i++) {
                  if (s[i] === ' ') j1 = i + 1;
                  else break;
                }


                let j2 = s.length;
                for (let i = s.length - 1; i >= 0; i--) {
                  if (s[i] === ' ') j2 = i;
                  else break;
                }

                let idx1 = s.indexOf(' ', j1);
                if (idx1 < 0) return s;
                if (idx1 >= j2) return s;
                let idx2 = s.substring(0, j2).lastIndexOf(' ');
                if (idx2 < idx1) return s;
                return `${s.substring(0, idx1)} ${s.substring(idx2 + 1)}`;
              }

              const weakSet = new WeakSet();

              /** 
               * @param {Node} node
               */
              function extract(node) {
                if (node.previousSibling === null && node.nextSibling === null) {
                  node = node.parentNode;
                }
                let prevNode = node.previousSibling;
                let nextNode = node.nextSibling;
                return { prevNode, nextNode, middleNode: node }
              }


              function getText(node) {

                let textNode = null;
                if (node instanceof Element) {
                  if (node.firstChild === node.lastChild) textNode = node;
                } else {
                  textNode = node;
                }
                textNode = textNode instanceof Text ? textNode : null;
                return textNode;
              }


              const skipExecutor = new Set([
                'HTML', 'BODY', 'HEAD', 'META', 'SCRIPT', 'STYLE', 'LINK', 'TITLE', 'BASE',
                'DIV', 'P', 'UL', 'OL',
                'BR', 'HR', 'SELECT',
                'VIDEO', 'AUDIO', 'IFRAME', 'EMBED', 'DIALOG',
                'LI',
                'TEXTAREA', 'PRE', 'BLOCKQUOTE', 'INPUT', 'FORM',
                'SVG', 'PATH', 'SHAPE', 'SOLID', 'SLOT', 'SOURCE',
                'MAIN', 'ARTICLE', 'FOOTER', 'HEADER', 'MENU',
                'H1', 'H2', 'H3', 'H4', 'H5', 'H6',
                'TBODY', 'TR', 'TD', 'TFOOT', 'TH', 'THEAD',
                'SUP', 'SUB',
                'DD', 'DT', 'DL', 'MARK', 'RP', 'RT'
              ]);

              const tagsNotForContent = new Set([

                'IMG', 'INPUT', 'BR', 'META', 'LINK', 'HR', 'SOURCE', 'TRACK', 'IFRAME', 'VIDEO', 'CANVAS', 'SELECT',
                'AREA', 'BASE', 'EMBED', 'COMMAND', 'KEYGEN', 'MENUITEM', 'BASEFONT', 'BGSOUND', 'ISINDEX', 'NEXTID', 'TEMPLATE', 'NOFRAMES',
                'COL', 'WBR', 'MEDIA', 'FRAME', 'APPLET', 'OBJECT', 'SVG', 'MATH', 'SCRIPT', 'STYLE', 'AUDIO',

                'SLOT', 'DEFINE', 'DIALOG', 'MARK', 'MAP', 'COLGROUP', 'FIGURE', 'DATALIST',
                // 'ABBR', 'DATA', 'BUTTON',

                'svg', 'g', 'rect', 'circle', 'ellipse', 'line', 'polyline', 'polygon', 'path', 'text', 'tspan', 'image', 'use',
                'defs', 'pattern', 'linearGradient', 'radialGradient', 'mask', 'clipPath', 'symbol', 'marker', 'animate', 'filter',
                'foreignObject', 'metadata'

              ]);

              function textContentFn(node) {
                if (node instanceof HTMLElement) {
                  if (tagsNotForContent.has(node.nodeName)) return null;
                  return node.textContent;
                }
                return null;
              }

              function executor(node, spacing, adjSet) {

                if (!node) return;
                if (adjSet.has(node)) return;
                adjSet.add(node);

                const elementNode = node.nodeType === 1 ? node : node.parentNode;
                if (!(elementNode instanceof Element)) return;

                if (skipExecutor.has(elementNode.nodeName)) return;

                const prevNode = node.previousSibling;
                const nextNode = node.nextSibling;

                const middTextNode = getText(node);
                const prevTextNode = getText(prevNode);
                const nextTextNode = getText(nextNode);

                if ((prevTextNode || nextTextNode)) {

                  let prevTextNodeNewText = null;
                  let middTextNodeNewText = null;
                  let nextTextNodeNewText = null;
                  if (prevTextNode && !this.isIgnored(prevTextNode.parentNode)) prevTextNodeNewText = spacing(prevTextNode.data);
                  if (middTextNode && elementNode === middTextNode.parentNode && !this.isIgnored(elementNode)) middTextNodeNewText = spacing(middTextNode.data);
                  if (nextTextNode && !this.isIgnored(nextTextNode.parentNode)) nextTextNodeNewText = spacing(nextTextNode.data);

                  const textMiddle = trimTextMiddle(!middTextNode ? (textContentFn(node) || '') : (middTextNodeNewText || middTextNode.data));

                  if (textMiddle) {

                    const [textPrevTr, textPrev] = trimTextEnd(!prevTextNode ? (textContentFn(prevNode) || '') : (prevTextNodeNewText || prevTextNode.data));
                    const [textNext, textNextTr] = trimTextStart(!nextTextNode ? (textContentFn(nextNode) || '') : (nextTextNodeNewText || nextTextNode.data));

                    const testRes = this.spacing(textPrev + textMiddle + textNext);

                    if (testRes) {

                      if (textPrev && prevTextNode) {
                        const tz = textPrev.trim();
                        let targetLen = tz.length;
                        if (targetLen > 0) {
                          let z = 0;
                          for (let k = 0; k < testRes.length; k++) {
                            if (testRes[k] !== ' ') {
                              z++;
                              if (z === targetLen) {
                                const base = testRes.substring(0, k + 1);
                                if (base.replace(/\x20/g, '') === tz) {
                                  const space = testRes[k + 1] === ' ' && !textMiddle.startsWith(' ') && !textPrev.endsWith(' ');
                                  prevTextNodeNewText = textPrevTr + base + (space ? ' ' : '');
                                }
                                break;
                              }
                            }
                          }
                        }
                      }

                      if (textNext && nextTextNode) {
                        const tz = textNext.trim();
                        let targetLen = tz.length;
                        if (targetLen > 0) {
                          let z = 0;
                          for (let k = testRes.length - 1; k >= 0; k--) {
                            if (testRes[k] !== ' ') {
                              z++;
                              if (z === targetLen) {
                                const base = testRes.substring(k);
                                if (base.replace(/\x20/g, '') === tz) {
                                  const space = (k >= 1 && testRes[k - 1] === ' ' && !textMiddle.endsWith(' ') && !textNext.startsWith(' '));
                                  nextTextNodeNewText = (space ? ' ' : '') + base + textNextTr;
                                }
                                break;
                              }
                            }
                          }
                        }
                      }

                    }

                  }


                  if (prevTextNodeNewText) prevTextNode.data = prevTextNodeNewText;
                  if (middTextNodeNewText) middTextNode.data = middTextNodeNewText;
                  if (nextTextNodeNewText) nextTextNode.data = nextTextNodeNewText;
                }


              }

              class WebPangu {
                constructor() {
                  // this.blockTags = ["DIV", "P", "H1", "H2", "H3", "H4", "H5", "H6"];
                  this.ignoredTags = new Set([
                    "SCRIPT", "STYLE", "TEXTAREA", "PRE", "SVG", "CODE",

                    'IMG', 'INPUT', 'BR', 'META', 'LINK', 'HR', 'SOURCE', 'TRACK', 'IFRAME', 'VIDEO', 'CANVAS', 'SELECT',
                    'AREA', 'BASE', 'EMBED', 'COMMAND', 'KEYGEN', 'MENUITEM', 'BASEFONT', 'BGSOUND', 'ISINDEX', 'NEXTID', 'TEMPLATE', 'NOFRAMES',
                    'COL', 'WBR', 'MEDIA', 'FRAME', 'APPLET', 'OBJECT', 'MATH', 'AUDIO',

                    'SLOT', 'DEFINE', 'DIALOG', 'MARK', 'MAP', 'COLGROUP', 'FIGURE', 'DATALIST',
                    // 'ABBR', 'DATA', 'BUTTON',

                    'svg', 'g', 'rect', 'circle', 'ellipse', 'line', 'polyline', 'polygon', 'path', 'text', 'tspan', 'image', 'use',
                    'defs', 'pattern', 'linearGradient', 'radialGradient', 'mask', 'clipPath', 'symbol', 'marker', 'animate', 'filter',
                    'foreignObject', 'metadata'

                  ]);
                  // this.presentationalTags = ["B", "CODE", "DEL", "EM", "I", "S", "STRONG", "KBD", "U", "INS"];
                  // this.spaceLikeTags = ["BR", "HR", "I", "IMG", "PANGU"];
                  // this.spaceSensitiveTags = ["A", "DEL", "PRE", "S", "STRIKE", "U"];

                  const xPathQueryArr = ['/html/body//*//text()[normalize-space(.)]'];
                  for (const tag of ['script', 'style', 'textarea', 'pre', 'svg']) {
                    xPathQueryArr.push(`[translate(name(..),"${tag.toUpperCase()}","${tag.toLowerCase()}")!="${tag}"]`);
                  }
                  const xPathQuery = xPathQueryArr.join('');

                  this.bodyXpath = xPathQuery;
                }
                isIgnored(node) {
                  return node instanceof HTMLElement && (this.ignoredTags.has(node.nodeName) || node.isContentEditable || node.getAttribute('g_editable') === 'true');
                }
                canIgnoreNode(node) {
                  while (node instanceof HTMLElement) {
                    if (this.isIgnored(node)) return true;
                    node = node.parentNode;
                  }
                  return false;
                }
                isFirstTextChild(parentNode, targetNode) {
                  for (let childNode = parentNode.firstChild; childNode instanceof Node; childNode = childNode.nextSibling) {
                    if (childNode.nodeType !== Node.COMMENT_NODE && (textContentFn(childNode) || '')) {
                      return childNode === targetNode;
                    }
                  }
                  return false;
                }
                isLastTextChild(parentNode, targetNode) {
                  for (let childNode = parentNode.lastChild; childNode instanceof Node; childNode = childNode.previousSibling) {
                    if (childNode.nodeType !== Node.COMMENT_NODE && (textContentFn(childNode) || '')) {
                      return childNode === targetNode;
                    }
                  }
                  return false;
                }
                spacingNodeByXPathSnapShots(...snapshots) {


                  const strCache = new Map();
                  const adjSet = new WeakSet();

                  const spacing = (s) => {

                    let j1 = 0;
                    for (let i = 0; i < s.length; i++) {
                      if (s[i] === ' ') j1 = i + 1;
                      else break;
                    }

                    let j2 = s.length;
                    for (let i = s.length - 1; i >= 0; i--) {
                      if (s[i] === ' ') j2 = i;
                      else break;
                    }

                    if (j1 === j2) return null;
                    if (!anyPossibleCJK_(s, j1, j2)) return null;

                    let trimmed = s.substring(j1, j2);

                    let r = strCache.get(trimmed);

                    if (r === undefined) {
                      r = this.spacing(trimmed);
                      strCache.set(trimmed, r);
                      if (r !== null) strCache.set(r, r);
                    }
                    return r ? s.substring(0, j1) + r + s.substring(j2) : null;

                  }


                  const snapshotsLen = snapshots.length;

                  for (let si = 0; si < snapshotsLen; si++) {
                    const snapshot = snapshots[si];
                    for (let sj = 0, shLen = snapshot.snapshotLength; sj < shLen; sj++) {

                      const currentTextNode = snapshot.snapshotItem(sj);

                      if (!(currentTextNode instanceof Text)) continue;
                      if (weakSet.has(currentTextNode)) continue;
                      weakSet.add(currentTextNode);

                      const currentTextNodeData = currentTextNode.data;

                      if (!anyPossibleCJK(currentTextNodeData)) continue;

                      const elementNode = currentTextNode.parentNode;

                      let currentTextNodeNewText = null;
                      if (!this.canIgnoreNode(elementNode)) {
                        currentTextNodeNewText = spacing(currentTextNodeData);
                        if (currentTextNodeNewText !== null) {
                          currentTextNode.data = currentTextNodeNewText;
                        }
                      }

                      const { prevNode, nextNode, middleNode } = extract(currentTextNode);

                      const eitherSibling = prevNode || nextNode;
                      if (eitherSibling && !this.canIgnoreNode(eitherSibling.parentNode) && eitherSibling.parentNode instanceof HTMLElement) {
                        executor.call(this, middleNode, spacing, adjSet);
                        executor.call(this, prevNode, spacing, adjSet);
                        executor.call(this, nextNode, spacing, adjSet);
                      }

                    }
                  }



                }
                spacingNode(contextNode) {
                  if (!(contextNode instanceof Node) || contextNode instanceof DocumentFragment) return;
                  const document = contextNode.ownerDocument;
                  if (!(document instanceof Document)) return;
                  const xPathQuery = contextNode.firstElementChild === null ? './/text()[normalize-space(.)]' : './/*//text()[normalize-space(.)]';
                  const snapshot = document.evaluate(xPathQuery, contextNode, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
                  this.spacingNodeByXPathSnapShots(snapshot);
                }
                spacingPageTitle() {
                  const xPathQuery = '/html/head/title/text()';
                  const snapshot = document.evaluate(xPathQuery, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
                  this.spacingNodeByXPathSnapShots(snapshot);
                }
                spacingPageBody() {
                  const snapshot1 = document.evaluate('/html/body//text()[normalize-space(.)]', document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
                  const snapshot2 = document.evaluate(this.bodyXpath, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
                  this.spacingNodeByXPathSnapShots(snapshot1, snapshot2);
                }
                spacing(text) {
                  if (typeof text !== 'string') {
                    console.warn("spacing(text) only accepts string but got " + _typeof(text));
                    return null;
                  }
                  if (text.length <= 1 || !ANY_CJK.test(text)) {
                    return null;
                  }
                  const nText = replacerM(text);
                  if (nText === text) return null;
                  return nText;
                }

              }

              return WebPangu;
            }();

            let pangu = new WebPangu();
            module.exports = pangu;
            module.exports.default = pangu;
            module.exports.Pangu = WebPangu;
          });

/***/ })
/******/ ]);
});
