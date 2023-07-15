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

              const M_ADD_SPACE = new RegExp(`([${CJK}])([a-zA-Z0-9]+|[a-zA-Z0-9]+[\x20-\xFF]+[a-zA-Z0-9]+|[a-zA-Z0-9][a-zA-Z0-9.,]*[a-zA-Z0-9][%°])([${CJK}])`, 'g')
              const P_ADD_SPACE = new RegExp(`(^|[\r\n])([a-zA-Z0-9]+|[a-zA-Z0-9]+[\x20-\xFF]+[a-zA-Z0-9]+)([${CJK}])`, 'g')
              const S_ADD_SPACE = new RegExp(`([${CJK}])([a-zA-Z0-9]+|[a-zA-Z0-9]+[\x20-\xFF]+[a-zA-Z0-9]+)([\r\n]|$)`, 'g')

              const CMB = "\uff01-\uff64\u3001\u3002";

              const M_ADD_SPACE_2 = new RegExp(`([${CMB}])([a-zA-Z0-9]+|[a-zA-Z0-9]+[\x20-\xFF]+[a-zA-Z0-9]+)([${CJK}])`, 'g')
              const M_ADD_SPACE_3 = new RegExp(`([${CJK}])([a-zA-Z0-9]+|[a-zA-Z0-9]+[\x20-\xFF]+[a-zA-Z0-9]+|[a-zA-Z0-9][a-zA-Z0-9.,]*[a-zA-Z0-9][%°])([${CMB}])`, 'g')

              const M_COV_SYMBOL = new RegExp(`([${CJK}])([~!;:,?])([${CJK}])`, 'g')
              const S_ADD_SPACE_2 = new RegExp(`([a-zA-Z0-9]+)([~!;:,?])([${CJK}])`, 'g')

              const A_ADD_SPACE = new RegExp(`([${CJK}])([\x21-\xFF]+)\x20([${CJK}])`, 'g')
              const Q_ADD_SPACE = new RegExp(`([${CJK}])(['"])([${CJK}]+)\\1([${CJK}])`, 'g')
              const Q_ADD_SPACE_2 = new RegExp(`([${CJK}])([“])([${CJK}]+)([”])([${CJK}])`, 'g')
              const Q_ADD_SPACE_3 = new RegExp(`([${CJK}])([‘])([${CJK}]+)([’])([${CJK}])`, 'g')

              function loopReplace(text, search, replacement) {
                let maxN = Math.round(text.length / 2) + 4;
                while (maxN-- > 0) {
                  const t = text.replace(search, replacement);
                  if (t === text) return t;
                  text = t;
                }
              }

              function firstChar(s) {
                return s.charAt(0);
              }

              function lastChar(s) {
                return s.charAt(s.length - 1);
              }

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

                  const textNodes = document.evaluate(xPathQuery, contextNode, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
                  let nextTextNode;

                  for (let i = textNodes.snapshotLength; --i >= 0;) {
                    const currentTextNode = textNodes.snapshotItem(i);
                    if (!(currentTextNode instanceof Text)) continue;

                    const textNodeParent = currentTextNode.parentNode;
                    if (this.isSpecificTag(textNodeParent, this.presentationalTags) && !this.isInsideSpecificTag(textNodeParent, this.ignoredTags)) {

                      let elementNode = textNodeParent;
                      const previousSibling = elementNode.previousSibling;
                      if (previousSibling) {

                        if (previousSibling.nodeType === Node.TEXT_NODE) {
                          let testText = lastChar(previousSibling.data) + firstChar(currentTextNode.data);
                          let testNewText = this.spacing(testText);

                          if (testText !== testNewText) {
                            previousSibling.data = "" + previousSibling.data + " ";
                          }
                        }
                      }

                      const nextSibling = elementNode.nextSibling;
                      if (nextSibling) {

                        if (nextSibling.nodeType === Node.TEXT_NODE) {
                          let _testText = lastChar(currentTextNode.data) + firstChar(nextSibling.data);

                          let _testNewText = this.spacing(_testText);

                          if (_testText !== _testNewText) {
                            nextSibling.data = " " + nextSibling.data;
                          }
                        }
                      }
                    }

                    if (this.canIgnoreNode(currentTextNode)) {
                      nextTextNode = currentTextNode;
                      continue;
                    }

                    const newText = this.spacing(currentTextNode.data);

                    if (currentTextNode.data !== newText) {
                      currentTextNode.data = newText;
                    }

                    if (nextTextNode instanceof Text) {
                      if (currentTextNode.nextSibling && currentTextNode.nextSibling.nodeName.search(this.spaceLikeTags) >= 0) {
                        nextTextNode = currentTextNode;
                        continue;
                      }

                      let _testText2 = lastChar(currentTextNode.data) + firstChar(nextTextNode.data);

                      let _testNewText2 = this.spacing(_testText2);

                      if (_testNewText2 !== _testText2) {

                        let currentNode = currentTextNode;

                        while (currentNode.parentNode && currentNode.nodeName.search(this.spaceSensitiveTags) === -1 && this.isLastTextChild(currentNode.parentNode, currentNode)) {
                          currentNode = currentNode.parentNode;
                        }

                        if (currentNode.nextSibling) {
                          if (currentNode.nextSibling.nodeName.search(this.spaceLikeTags) >= 0) {
                            nextTextNode = currentTextNode;
                            continue;
                          }
                        }



                        if (currentNode.nodeName.search(this.blockTags) === -1) {

                          let nextNode = nextTextNode;

                          while (nextNode.parentNode && nextNode.nodeName.search(this.spaceSensitiveTags) === -1 && this.isFirstTextChild(nextNode.parentNode, nextNode)) {
                            nextNode = nextNode.parentNode;
                          }

                          if (nextNode.nodeName.search(this.spaceSensitiveTags) === -1) {
                            if (nextNode.nodeName.search(this.ignoredTags) === -1 && nextNode.nodeName.search(this.blockTags) === -1) {
                              if (nextTextNode.previousSibling) {
                                if (nextTextNode.previousSibling.nodeName.search(this.spaceLikeTags) === -1) {
                                  nextTextNode.data = " " + nextTextNode.data;
                                }
                              } else {
                                if (!this.canIgnoreNode(nextTextNode)) {
                                  nextTextNode.data = " " + nextTextNode.data;
                                }
                              }
                            }
                          } else if (currentNode.nodeName.search(this.spaceSensitiveTags) === -1) {
                            currentTextNode.data = "" + currentTextNode.data + " ";
                          } else {
                            const panguSpace = document.createElement('pangu');
                            panguSpace.innerHTML = ' ';

                            if (nextNode.previousSibling) {
                              if (nextNode.previousSibling.nodeName.search(this.spaceLikeTags) === -1) {
                                nextNode.parentNode.insertBefore(panguSpace, nextNode);
                              }
                            } else {
                              nextNode.parentNode.insertBefore(panguSpace, nextNode);
                            }

                            if (!panguSpace.previousElementSibling) {
                              if (panguSpace.parentNode) {
                                panguSpace.parentNode.removeChild(panguSpace);
                              }
                            }
                          }
                        }
                      }
                    }

                    nextTextNode = currentTextNode;
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
                convertToFullwidth(symbols) {
                  return symbols.replace(/[~!;:,?]/g, (x) => String.fromCharCode(x.charCodeAt() + 65248)) // .replace(/\./g, '。')
                }
                spacing(text) {
                  if (typeof text !== 'string') {
                    console.warn("spacing(text) only accepts string but got " + _typeof(text));
                    return text;
                  }

                  if (text.length <= 1 || !ANY_CJK.test(text)) {
                    return text;
                  }

                  // let self = this;
                  let newText = text;
                  /*
                  newText = newText.replace(CONVERT_TO_FULLWIDTH_CJK_SYMBOLS_CJK, function (match, leftCjk, symbols, rightCjk) {
                    let fullwidthSymbols = self.convertToFullwidth(symbols);
                    return "" + leftCjk + fullwidthSymbols + rightCjk;
                  });
                  newText = newText.replace(CONVERT_TO_FULLWIDTH_CJK_SYMBOLS, function (match, cjk, symbols) {
                    let fullwidthSymbols = self.convertToFullwidth(symbols);
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

                    let d = this.convertToFullwidth(b);
                    if (typeof d === 'string' && d !== b) {
                      return a + d + c;
                    }
                    return _;
                  });

                  newText = loopReplace(newText, S_ADD_SPACE_2, '$1$2 $3');
                  newText = loopReplace(newText, A_ADD_SPACE, '$1 $2 $3');
                  newText = loopReplace(newText, Q_ADD_SPACE, '$1 $2$3$2 $4');
                  newText = loopReplace(newText, Q_ADD_SPACE_2, '$1 $2$3$4 $5');
                  newText = loopReplace(newText, Q_ADD_SPACE_3, '$1 $2$3$4 $5');

                  return newText;
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
