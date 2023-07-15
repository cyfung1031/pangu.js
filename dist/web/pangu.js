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

              const M_ADD_SPACE = new RegExp(`([${CJK}])([a-zA-Z0-9]+|[a-zA-Z0-9]+[\\x20-\\xFF]+[a-zA-Z0-9]+|[a-zA-Z0-9][a-zA-Z0-9.,]*[a-zA-Z0-9][%°])([${CJK}])`, 'g')
              const P_ADD_SPACE = new RegExp(`(^|[\\r\\n])([a-zA-Z0-9]+|[a-zA-Z0-9]+[\\x20-\\xFF]+[a-zA-Z0-9]+)([${CJK}])`, 'g')
              const S_ADD_SPACE = new RegExp(`([${CJK}])([a-zA-Z0-9]+|[a-zA-Z0-9]+[\\x20-\\xFF]+[a-zA-Z0-9]+)([\\r\\n]|$)`, 'g')

              const CMB = "\uff01-\uff64\u3001\u3002";
              const CMB2 = `${CMB}」》】〉｝］）〗〕』`;

              const M_ADD_SPACE_2 = new RegExp(`([${CMB}])([a-zA-Z0-9]+|[a-zA-Z0-9]+[\\x20-\\xFF]+[a-zA-Z0-9]+)([${CJK}])`, 'g')
              const M_ADD_SPACE_3 = new RegExp(`([${CJK}])([a-zA-Z0-9]+|[a-zA-Z0-9]+[\\x20-\\xFF]+[a-zA-Z0-9]+|[a-zA-Z0-9][a-zA-Z0-9.,]*[a-zA-Z0-9][%°])([${CMB}])`, 'g')

              const M_COV_SYMBOL = new RegExp(`([${CJK}])([~!;:,?])([${CJK}])`, 'g')
              const S_ADD_SPACE_2 = new RegExp(`([a-zA-Z0-9]+)([~!;:,?])([${CJK}])`, 'g')

              const CJK2 = `${CJK}\\d,.`;

              const A_ADD_SPACE = new RegExp(`([${CJK}])([!#$%&\\x2A-\\x5A\\x5E\\x5F\\x61-\\x7A~\\x80-\\xFF]+)\\x20([${CJK}])`, 'g')
              const Q_ADD_SPACE = new RegExp(`([${CJK}])(['"])([${CJK2}]+)\\1([${CJK}])`, 'g')
              const Q_ADD_SPACE_2 = new RegExp(`([${CJK}])([“])([${CJK2}]+)([”])([${CJK}])`, 'g')
              const Q_ADD_SPACE_3 = new RegExp(`([${CJK}])([‘])([${CJK2}]+)([’])([${CJK}])`, 'g')
              const Q_ADD_SPACE_4 = new RegExp(`([${CJK}])([(])([${CJK2}]+)([)])([${CJK}])`, 'g')
              const Q_ADD_SPACE_5 = new RegExp(`([${CJK}])([\\[])([${CJK2}]+)([\\]])([${CJK}])`, 'g')
              const Q_ADD_SPACE_6 = new RegExp(`([${CJK}])([\\{])([${CJK2}]+)([\\}])([${CJK}])`, 'g')

              const QA_ADD_SPACE = new RegExp(`([${CJK}])(['"“”‘’(){}\\[\\]])([^'"“”‘’(){}\\[\\]]+)(['"“”‘’(){}\\[\\]])([${CMB2}])`)
              const QA_ADD_SPACE_2 = new RegExp(`([${CJK}])(['"“”‘’(){}\\[\\]])([a-zA-Z0-9.,]+)(['"“”‘’(){}\\[\\]])([${CJK}])`)


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



                newText = loopReplace(newText, M_ADD_SPACE, '$1 $2 $3');
                newText = loopReplace(newText, P_ADD_SPACE, '$1$2 $3');
                newText = loopReplace(newText, S_ADD_SPACE, '$1 $2$3');

                newText = loopReplace(newText, M_ADD_SPACE_2, '$1$2 $3');
                newText = loopReplace(newText, M_ADD_SPACE_3, '$1 $2$3');

                newText = loopReplace(newText, M_COV_SYMBOL, (_, a, b, c) => {

                  let d = convertToFullwidth(b);
                  if (typeof d === 'string' && d !== b) {
                    return a + d + c;
                  }
                  return _;
                });

                newText = loopReplace(newText, S_ADD_SPACE_2, '$1$2 $3');
                newText = loopReplace(newText, A_ADD_SPACE, '$1 $2 $3');
                if (/['"“”‘’(){}\[\]]/.test(newText)) {
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
                }

                return newText;
              }

              function firstChar(s) {
                return s.charAt(0);
              }

              function lastChar(s) {
                return s.charAt(s.length - 1);
              }

              function anyPossibleCJK(s) {
                for (let i = 0, l = s.length; i < l; i++) {
                  if (s[i] >= '\u2E80') return true;
                }
                return false;
              }

              const weakSet = new WeakSet();

              class WebPangu {
                constructor() {
                  this.blockTags = /^(div|p|h1|h2|h3|h4|h5|h6)$/i;
                  this.ignoredTags = /^(script|code|pre|textarea)$/i;
                  this.presentationalTags = /^(b|code|del|em|i|s|strong|kbd)$/i;
                  this.spaceLikeTags = /^(br|hr|i|img|pangu)$/i;
                  this.spaceSensitiveTags = /^(a|del|pre|s|strike|u)$/i;
                }
                isContentEditable(node) {
                  return node.isContentEditable || node.getAttribute && node.getAttribute('g_editable') === 'true';
                }
                isSpecificTag(node, tagRegex) {
                  return node && node.nodeName && node.nodeName.search(tagRegex) >= 0;
                }
                isInsideSpecificTag(node, tagRegex) {
                  while ((node = node.parentNode) instanceof Element) {
                    if (this.isSpecificTag(node, tagRegex)) {
                      return true;
                    }
                  }
                  return false;
                }
                canIgnoreNode(node) {
                  node = node.parentNode;
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
                  let nextTextNode;

                  for (let i = textNodes.snapshotLength; --i >= 0;) {
                    const currentTextNode = textNodes.snapshotItem(i);
                    if (!(currentTextNode instanceof Text)) continue;
                    const sNextTextNode = nextTextNode;
                    nextTextNode = currentTextNode;
                    if (weakSet.has(currentTextNode)) {
                      continue;
                    }
                    weakSet.add(currentTextNode);
                    const currentTextNodeData = currentTextNode.data;
                    if (!anyPossibleCJK(currentTextNodeData)) {
                      continue;
                    }

                    const textNodeParent = currentTextNode.parentNode;
                    if (this.isSpecificTag(textNodeParent, this.presentationalTags) && !this.isInsideSpecificTag(textNodeParent, this.ignoredTags)) {

                      const previousSibling = textNodeParent.previousSibling;
                      if (previousSibling instanceof Text) {
                        const testRes = this.spacing(lastChar(previousSibling.data) + firstChar(currentTextNodeData));
                        if (testRes !== null) {
                          previousSibling.data = "" + previousSibling.data + " ";
                        }
                      }

                      const nextSibling = textNodeParent.nextSibling;
                      if (nextSibling instanceof Text) {
                        const testRes = this.spacing(lastChar(currentTextNodeData) + firstChar(nextSibling.data));
                        if (testRes !== null) {
                          nextSibling.data = " " + nextSibling.data;
                        }
                      }
                    }

                    if (this.canIgnoreNode(currentTextNode)) {
                      continue;
                    }

                    const currentTextNodeNewText = this.spacing(currentTextNodeData);

                    if (currentTextNodeNewText !== null) {
                      currentTextNode.data = currentTextNodeNewText;
                    }

                    if (sNextTextNode instanceof Text) {
                      if ((currentTextNode.nextSibling instanceof Element) && currentTextNode.nextSibling.nodeName.search(this.spaceLikeTags) >= 0) {
                        continue;
                      }

                      const testRes = this.spacing(lastChar(currentTextNode.data) + firstChar(sNextTextNode.data));

                      if (testRes !== null) {

                        let currentNode = currentTextNode;

                        while ((currentNode.parentNode instanceof Element) && currentNode.nodeName.search(this.spaceSensitiveTags) === -1 && this.isLastTextChild(currentNode.parentNode, currentNode)) {
                          currentNode = currentNode.parentNode;
                        }

                        if ((currentNode.nextSibling instanceof Element) && currentNode.nextSibling.nodeName.search(this.spaceLikeTags) >= 0) {
                          continue;
                        }

                        if (currentNode.nodeName.search(this.blockTags) === -1) {

                          let nextNode = sNextTextNode;

                          while ((nextNode.parentNode instanceof Element) && nextNode.nodeName.search(this.spaceSensitiveTags) === -1 && this.isFirstTextChild(nextNode.parentNode, nextNode)) {
                            nextNode = nextNode.parentNode;
                          }

                          if (nextNode.nodeName.search(this.spaceSensitiveTags) === -1) {
                            if (nextNode.nodeName.search(this.ignoredTags) === -1 && nextNode.nodeName.search(this.blockTags) === -1) {
                              const b = sNextTextNode.previousSibling
                                ? sNextTextNode.previousSibling.nodeName.search(this.spaceLikeTags) === -1
                                : !this.canIgnoreNode(sNextTextNode);
                              if (b) {
                                sNextTextNode.data = " " + sNextTextNode.data;
                              }
                            }
                          } else if (currentNode.nodeName.search(this.spaceSensitiveTags) === -1) {
                            currentTextNode.data = "" + currentTextNode.data + " ";
                          } else {
                            const panguSpace = document.createElement('pangu');
                            panguSpace.appendChild(document.createTextNode(' '));

                            const b = !(nextNode.previousSibling instanceof Node) || (nextNode.previousSibling.nodeName.search(this.spaceLikeTags) === -1);

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
                  for (const tag of ['script', 'style', 'textarea']) {
                    xPathQueryArr.push("[translate(name(..),\"ABCDEFGHIJKLMNOPQRSTUVWXYZ\",\"abcdefghijklmnopqrstuvwxyz\")!=\"" + tag + "\"]");
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

                  const nText = replacer(text);
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
