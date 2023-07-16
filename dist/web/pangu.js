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

              const NO_BACKWARD_MATCHING = true; // BACKWARD_MATCHING TO BE CONFIRMED

              const CJK = "\u2E80-\u2EFF\u2F00-\u2FDF\u3040-\u309F\u30A0-\u30FA\u30FC-\u30FF\u3100-\u312F\u3200-\u32FF\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFAFF";
              const ANY_CJK = new RegExp("[" + CJK + "]");
              const CONVERT_TO_FULLWIDTH_CJK_SYMBOLS_CJK = new RegExp("([" + CJK + "])[ ]*([\\:]+|\\.)[ ]*([" + CJK + "])", 'g');
              const CONVERT_TO_FULLWIDTH_CJK_SYMBOLS = new RegExp("([" + CJK + "])[ ]*([~\\!;,\\?]+)[ ]*", 'g');
              const DOTS_CJK = new RegExp("([\\.]{2,}|\u2026)([" + CJK + "])", 'g');
              const FIX_CJK_COLON_ANS = new RegExp("([" + CJK + "])\\:([A-Z0-9\\(\\)])", 'g');
              const CJK_QUOTE = new RegExp("([" + CJK + "])([`\"\u05F4])", 'g');
              const QUOTE_CJK = new RegExp("([`\"\u05F4])([" + CJK + "])", 'g');
              const FIX_QUOTE_ANY_QUOTE = /([`"\u05f4]+)[ ]*(.+?)[ ]*([`"\u05f4]+)/g;
              const CJK_SINGLE_QUOTE_BUT_POSSESSIVE = new RegExp("([" + CJK + "])('[^s])", 'g');
              const SINGLE_QUOTE_CJK = new RegExp("(')([" + CJK + "])", 'g');
              const FIX_POSSESSIVE_SINGLE_QUOTE = new RegExp("([A-Za-z0-9" + CJK + "])( )('s)", 'g');
              const HASH_ANS_CJK_HASH = new RegExp("([" + CJK + "])(#)([" + CJK + "]+)(#)([" + CJK + "])", 'g');
              const CJK_HASH = new RegExp("([" + CJK + "])(#([^ ]))", 'g');
              const HASH_CJK = new RegExp("(([^ ])#)([" + CJK + "])", 'g');
              const CJK_OPERATOR_ANS = new RegExp("([" + CJK + "])([\\+\\-\\*\\/=&\\|<>])([A-Za-z0-9])", 'g');
              const ANS_OPERATOR_CJK = new RegExp("([A-Za-z0-9])([\\+\\-\\*\\/=&\\|<>])([" + CJK + "])", 'g');
              const FIX_SLASH_AS = /([/]) ([a-z\-_\./]+)/g;
              const FIX_SLASH_AS_SLASH = /([/\.])([A-Za-z\-_\./]+) ([/])/g;
              const CJK_LEFT_BRACKET = new RegExp("([" + CJK + "])([\\(\\[\\{<>\u201C])", 'g');
              const RIGHT_BRACKET_CJK = new RegExp("([\\)\\]\\}<>\u201D])([" + CJK + "])", 'g');
              const FIX_LEFT_BRACKET_ANY_RIGHT_BRACKET = /([\(\[\{<\u201c]+)[ ]*(.+?)[ ]*([\)\]\}>\u201d]+)/;
              const ANS_CJK_LEFT_BRACKET_ANY_RIGHT_BRACKET = new RegExp("([A-Za-z0-9" + CJK + "])[ ]*([\u201C])([A-Za-z0-9" + CJK + "\\-_ ]+)([\u201D])", 'g');
              const LEFT_BRACKET_ANY_RIGHT_BRACKET_ANS_CJK = new RegExp("([\u201C])([A-Za-z0-9" + CJK + "\\-_ ]+)([\u201D])[ ]*([A-Za-z0-9" + CJK + "])", 'g');
              const AN_LEFT_BRACKET = /([A-Za-z0-9])([\(\[\{])/g;
              const RIGHT_BRACKET_AN = /([\)\]\}])([A-Za-z0-9])/g;
              const CJK_ANS = new RegExp("([" + CJK + "])([A-Za-z\u0370-\u03FF0-9@\\$%\\^&\\*\\-\\+\\\\=\\|/\xA1-\xFF\u2150-\u218F\u2700\u2014\u27BF])", 'g');
              const ANS_CJK = new RegExp("([A-Za-z\u0370-\u03FF0-9~\\$%\\^&\\*\\-\\+\\\\=\\|/!;:,\\.\\?\xA1-\xFF\u2150-\u218F\u2700\u2014\u27BF])([" + CJK + "])", 'g');
              const S_A = /(%)([A-Za-z])/g;
              const MIDDLE_DOT = /([ ]*)([\u00b7\u2022\u2027])([ ]*)/g;

              const M_ADD_SPACE = new RegExp(`([${CJK}])([a-zA-Z0-9]+|[a-zA-Z0-9]+[\\x20-\\xFF]+[a-zA-Z0-9]+|[a-zA-Z0-9][a-zA-Z0-9.,]*[a-zA-Z0-9][%°]|[a-zA-Z0-9][%°])([${CJK}])`, 'g')
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
              const Q_ADD_SPACE = new RegExp(`([${CJK}])(['"])([${CJK2}]+)\\1([${CJK}])`, 'g')
              const Q_ADD_SPACE_2 = new RegExp(`([${CJK}])([“])([${CJK2}]+)([”])([${CJK}])`, 'g')
              const Q_ADD_SPACE_3 = new RegExp(`([${CJK}])([‘])([${CJK2}]+)([’])([${CJK}])`, 'g')
              const Q_ADD_SPACE_4 = new RegExp(`([${CJK}])([(])([${CJK2}]+)([)])([${CJK}])`, 'g')
              const Q_ADD_SPACE_5 = new RegExp(`([${CJK}])([\\[])([${CJK2}]+)([\\]])([${CJK}])`, 'g')
              const Q_ADD_SPACE_6 = new RegExp(`([${CJK}])([\\{])([${CJK2}]+)([\\}])([${CJK}])`, 'g')

              const Q_ADD_SPACE_1b = new RegExp(`([${CMB}])(['"])([${CJK2}]+)\\1([${CJK}])`, 'g')
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

              function firstChar(s) {
                if (s.length === 0) return '\x00';
                return s.charAt(0);
              }

              function lastChar(s) {
                if (s.length === 0) return '\x00';
                return s.charAt(s.length - 1);
              }

              function anyPossibleCJK(s) {
                for (let i = 0, l = s.length; i < l; i++) {
                  if (s[i] >= '\u2E80') return true;
                }
                return false;
              }

              function trimTextMiddle(s) {
                if (typeof s !== 'string') return s;
                let idx1 = s.indexOf(' ');
                if (idx1 < 0) return s;
                let idx2 = s.lastIndexOf(' ');
                return `${s.substring(0, idx1)} ${s.substring(idx2 + 1)}`;
              }

              const weakSet = new WeakSet();

              class WebPangu {
                constructor() {
                  this.blockTags = ["DIV", "P", "H1", "H2", "H3", "H4", "H5", "H6"];
                  this.ignoredTags = ["SCRIPT", "STYLE", "TEXTAREA", "PRE", "SVG", "CODE"];
                  this.presentationalTags = ["B", "CODE", "DEL", "EM", "I", "S", "STRONG", "KBD", "U", "INS"];
                  this.spaceLikeTags = ["BR", "HR", "I", "IMG", "PANGU"];
                  this.spaceSensitiveTags = ["A", "DEL", "PRE", "S", "STRIKE", "U"];
                }                
                isContentEditable(node) {
                  return node.isContentEditable || node.getAttribute && node.getAttribute('g_editable') === 'true';
                }
                isSpecificTag(node, tagArray) {
                  return node && node.nodeName && tagArray.includes(node.nodeName);
                }
                isInsideSpecificTag(node, tagArray) {
                  while ((node = node.parentNode) instanceof Element) {
                    if (this.isSpecificTag(node, tagArray)) {
                      return true;
                    }
                  }
                  return false;
                }
                isPresentationElementNode(node) {
                  if (typeof (node || 0).nodeName !== 'string') return false;
                  if (node.firstChild !== node.lastChild) return false;
                  if (node.nodeName === "CODE") {
                    return node.textContent.search(/[\r\n]/) < 0
                  }
                  return this.isSpecificTag(node, this.presentationalTags);
                }
                canIgnoreNode(node) {
                  while (node instanceof Element) {
                    if (this.isSpecificTag(node, this.ignoredTags) || this.isContentEditable(node)) {
                      return true;
                    }
                    node = node.parentNode;
                  }
                  return false;
                }
                isFirstTextChild(parentNode, targetNode) {
                  for (let childNode = parentNode.firstChild; childNode instanceof Node; childNode = childNode.nextSibling) {
                    if (childNode.nodeType !== Node.COMMENT_NODE && childNode.textContent) {
                      return childNode === targetNode;
                    }
                  }
                  return false;
                }
                isLastTextChild(parentNode, targetNode) {
                  for (let childNode = parentNode.lastChild; childNode instanceof Node; childNode = childNode.previousSibling) {
                    if (childNode.nodeType !== Node.COMMENT_NODE && childNode.textContent) {
                      return childNode === targetNode;
                    }
                  }
                  return false;
                }
                spacingNodeByXPath(xPathQuery, contextNode) {
                  if (!(contextNode instanceof Node) || contextNode instanceof DocumentFragment) {
                    return;
                  }

                  const document = contextNode.ownerDocument || contextNode;

                  if (!(document instanceof Document)) {
                    return;
                  }

                  const textNodes = document.evaluate(xPathQuery, contextNode, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
                  let tNextTextNode;

                  const cache = new Map();

                  const spacing = (contents) => {

                    if (!anyPossibleCJK(contents)) null;

                    let r = cache.get(contents);
                    if (r !== undefined) return r;
                    r = this.spacing(contents);
                    cache.set(contents, r);

                    if (r !== null) {
                      cache.set(r, r);
                    }
                    return r;
                  }

                  for (let i = textNodes.snapshotLength; --i >= 0;) {
                    const currentTextNode = textNodes.snapshotItem(i);
                    if (!(currentTextNode instanceof Text)) continue;
                    const sNextTextNode = tNextTextNode;
                    tNextTextNode = currentTextNode;
                    if (weakSet.has(currentTextNode)) continue;

                    weakSet.add(currentTextNode);
                    const currentTextNodeData = currentTextNode.data;

                    const elementNode = currentTextNode.parentNode;

                    const isPresentationNode = this.isPresentationElementNode(elementNode);

                    let ignoreMode = !this.canIgnoreNode(elementNode) ? 0 : !isPresentationNode ? 1 : 2;
                    // 0 - span, b
                    // 1 - pre, textarea
                    // 2 - code

                    let currentTextNodeNewText = null;
                    if (ignoreMode === 0) {
                      currentTextNodeNewText = spacing(currentTextNodeData);
                      if (currentTextNodeNewText !== null) {
                        currentTextNode.data = currentTextNodeNewText;
                      }
                    }

                    let prevTextNode = null;
                    let nextTextNode = null;

                    if (isPresentationNode) {

                      const previousSibling = elementNode.previousSibling;
                      if (previousSibling instanceof Text) prevTextNode = previousSibling;

                      const nextSibling = elementNode.nextSibling;
                      if (nextSibling instanceof Text) nextTextNode = nextSibling;

                    }

                    if ((prevTextNode || nextTextNode) && (ignoreMode === 0 ? true : !this.canIgnoreNode(elementNode.parentNode))) {

                      let prevTextNodeNewText = null;
                      let nextTextNodeNewText = null;
                      if (prevTextNode) prevTextNodeNewText = spacing(prevTextNode.data);
                      if (nextTextNode) nextTextNodeNewText = spacing(nextTextNode.data);

                      const textPrev = !prevTextNode ? '' : prevTextNodeNewText || prevTextNode.data;
                      const textNext = !nextTextNode ? '' : nextTextNodeNewText || nextTextNode.data;
                      const textMiddle = trimTextMiddle(currentTextNodeNewText || currentTextNode.data);

                      const testRes = this.spacing(textPrev + textMiddle + textNext);

                      if (testRes) {
                        if (textPrev && testRes.startsWith(textPrev + ' ' + textMiddle)) prevTextNodeNewText = textPrev + ' ';
                        if (textNext && testRes.endsWith(textMiddle + ' ' + textNext)) nextTextNodeNewText = ' ' + textNext;
                      }

                      if (prevTextNodeNewText) prevTextNode.data = prevTextNodeNewText;
                      if (nextTextNodeNewText) nextTextNode.data = nextTextNodeNewText;
                    }

                    if (ignoreMode === 0 && sNextTextNode instanceof Text) {
                      if ((currentTextNode.nextSibling instanceof Element) && this.spaceLikeTags.includes(currentTextNode.nextSibling.nodeName)) {
                        continue;
                      }

                      const testRes = NO_BACKWARD_MATCHING ? null : this.spacing(lastChar(currentTextNode.data) + firstChar(sNextTextNode.data));

                      if (testRes !== null) {

                        let currentNode = currentTextNode;

                        while ((currentNode.parentNode instanceof Element) && !this.spaceSensitiveTags.includes(currentNode.nodeName) && this.isLastTextChild(currentNode.parentNode, currentNode)) {
                          currentNode = currentNode.parentNode;
                        }

                        if ((currentNode.nextSibling instanceof Element) && this.spaceLikeTags.includes(currentNode.nextSibling.nodeName)) {
                          continue;
                        }

                        if (!this.blockTags.includes(currentNode.nodeName)) {

                          let nextNode = sNextTextNode;

                          while ((nextNode.parentNode instanceof Element) && !this.spaceSensitiveTags.includes(nextNode.nodeName) && this.isFirstTextChild(nextNode.parentNode, nextNode)) {
                            nextNode = nextNode.parentNode;
                          }

                          if (!this.spaceSensitiveTags.includes(nextNode.nodeName)) {
                            if (!this.ignoredTags.includes(nextNode.nodeName) && !this.blockTags.includes(nextNode.nodeName)) {
                              const b = sNextTextNode.previousSibling
                                ? !this.spaceLikeTags.includes(sNextTextNode.previousSibling.nodeName)
                                : !this.canIgnoreNode(sNextTextNode.parentElement);
                              if (b) {
                                sNextTextNode.data = " " + sNextTextNode.data;
                              }
                            }
                          } else if (!this.spaceSensitiveTags.includes(currentNode.nodeName)) {
                            currentTextNode.data = "" + currentTextNode.data + " ";
                          } else {
                            const panguSpace = document.createElement('pangu');
                            panguSpace.appendChild(document.createTextNode(' '));

                            const b = !(nextNode.previousSibling instanceof Node) || !this.spaceLikeTags.includes(nextNode.previousSibling.nodeName);

                            if (b && nextNode.previousElementSibling !== null) {
                              nextNode.parentNode.insertBefore(panguSpace, nextNode);
                            }

                          }
                        }
                      }
                    }
                  }
                }
                spacingNode(contextNode) {
                  const xPathQuery = contextNode.firstElementChild === null ? './/text()[normalize-space(.)]' : './/*/text()[normalize-space(.)]';
                  this.spacingNodeByXPath(xPathQuery, contextNode);
                }
                spacingPageTitle() {
                  const xPathQuery = '/html/head/title/text()';
                  this.spacingNodeByXPath(xPathQuery, document);
                }
                spacingPageBody() {
                  const xPathQueryArr = ['/html/body//*/text()[normalize-space(.)]'];
                  for (const tag of ['script', 'style', 'textarea', 'pre', 'svg']) {
                    xPathQueryArr.push(`[translate(name(..),"${tag.toUpperCase()}","${tag.toLowerCase()}")!="${tag}"]`);
                  }
                  const xPathQuery = xPathQueryArr.join('');
                  this.spacingNodeByXPath(xPathQuery, document);
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
