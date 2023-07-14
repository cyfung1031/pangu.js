/*!
 * pangu.js
 * --------
 * @version: ???
 * @homepage: https://github.com/vinta/pangu.js
 * @license: MIT
 * @author: Vinta Chen <vinta.chen@gmail.com> (https://github.com/vinta)
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

let __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { let mod; }
})(this, function () {
  "use strict";



  let WebPangu = function () {


    let CJK = "\u2E80-\u2EFF\u2F00-\u2FDF\u3040-\u309F\u30A0-\u30FA\u30FC-\u30FF\u3100-\u312F\u3200-\u32FF\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFAFF";
    let ANY_CJK = new RegExp("[" + CJK + "]");
    let CONVERT_TO_FULLWIDTH_CJK_SYMBOLS_CJK = new RegExp("([" + CJK + "])[ ]*([\\:]+|\\.)[ ]*([" + CJK + "])", 'g');
    let CONVERT_TO_FULLWIDTH_CJK_SYMBOLS = new RegExp("([" + CJK + "])[ ]*([~\\!;,\\?]+)[ ]*", 'g');
    let DOTS_CJK = new RegExp("([\\.]{2,}|\u2026)([" + CJK + "])", 'g');
    let FIX_CJK_COLON_ANS = new RegExp("([" + CJK + "])\\:([A-Z0-9\\(\\)])", 'g');
    let CJK_QUOTE = new RegExp("([" + CJK + "])([`\"\u05F4])", 'g');
    let QUOTE_CJK = new RegExp("([`\"\u05F4])([" + CJK + "])", 'g');
    let FIX_QUOTE_ANY_QUOTE = /([`"\u05f4]+)[ ]*(.+?)[ ]*([`"\u05f4]+)/g;
    let CJK_SINGLE_QUOTE_BUT_POSSESSIVE = new RegExp("([" + CJK + "])('[^s])", 'g');
    let SINGLE_QUOTE_CJK = new RegExp("(')([" + CJK + "])", 'g');
    let FIX_POSSESSIVE_SINGLE_QUOTE = new RegExp("([A-Za-z0-9" + CJK + "])( )('s)", 'g');
    let HASH_ANS_CJK_HASH = new RegExp("([" + CJK + "])(#)([" + CJK + "]+)(#)([" + CJK + "])", 'g');
    let CJK_HASH = new RegExp("([" + CJK + "])(#([^ ]))", 'g');
    let HASH_CJK = new RegExp("(([^ ])#)([" + CJK + "])", 'g');
    let CJK_OPERATOR_ANS = new RegExp("([" + CJK + "])([\\+\\-\\*\\/=&\\|<>])([A-Za-z0-9])", 'g');
    let ANS_OPERATOR_CJK = new RegExp("([A-Za-z0-9])([\\+\\-\\*\\/=&\\|<>])([" + CJK + "])", 'g');
    let FIX_SLASH_AS = /([/]) ([a-z\-_\./]+)/g;
    let FIX_SLASH_AS_SLASH = /([/\.])([A-Za-z\-_\./]+) ([/])/g;
    let CJK_LEFT_BRACKET = new RegExp("([" + CJK + "])([\\(\\[\\{<>\u201C])", 'g');
    let RIGHT_BRACKET_CJK = new RegExp("([\\)\\]\\}<>\u201D])([" + CJK + "])", 'g');
    let FIX_LEFT_BRACKET_ANY_RIGHT_BRACKET = /([\(\[\{<\u201c]+)[ ]*(.+?)[ ]*([\)\]\}>\u201d]+)/;
    let ANS_CJK_LEFT_BRACKET_ANY_RIGHT_BRACKET = new RegExp("([A-Za-z0-9" + CJK + "])[ ]*([\u201C])([A-Za-z0-9" + CJK + "\\-_ ]+)([\u201D])", 'g');
    let LEFT_BRACKET_ANY_RIGHT_BRACKET_ANS_CJK = new RegExp("([\u201C])([A-Za-z0-9" + CJK + "\\-_ ]+)([\u201D])[ ]*([A-Za-z0-9" + CJK + "])", 'g');
    let AN_LEFT_BRACKET = /([A-Za-z0-9])([\(\[\{])/g;
    let RIGHT_BRACKET_AN = /([\)\]\}])([A-Za-z0-9])/g;
    let CJK_ANS = new RegExp("([" + CJK + "])([A-Za-z\u0370-\u03FF0-9@\\$%\\^&\\*\\-\\+\\\\=\\|/\xA1-\xFF\u2150-\u218F\u2700\u2014\u27BF])", 'g');
    let ANS_CJK = new RegExp("([A-Za-z\u0370-\u03FF0-9~\\$%\\^&\\*\\-\\+\\\\=\\|/!;:,\\.\\?\xA1-\xFF\u2150-\u218F\u2700\u2014\u27BF])([" + CJK + "])", 'g');
    let S_A = /(%)([A-Za-z])/g;
    let MIDDLE_DOT = /([ ]*)([\u00b7\u2022\u2027])([ ]*)/g;


    class WebPangu {
      constructor(){
        let _this3 = this;
        _this3.blockTags = /^(div|p|h1|h2|h3|h4|h5|h6)$/i;
        _this3.ignoredTags = /^(script|code|pre|textarea)$/i;
        _this3.presentationalTags = /^(b|code|del|em|i|s|strong|kbd)$/i;
        _this3.spaceLikeTags = /^(br|hr|i|img|pangu)$/i;
        _this3.spaceSensitiveTags = /^(a|del|pre|s|strike|u)$/i;
      }
      isContentEditable(node){
        return node.isContentEditable || node.getAttribute && node.getAttribute('g_editable') === 'true';
      }
      isSpecificTag(node, tagRegex) {
        return node && node.nodeName && node.nodeName.search(tagRegex) >= 0;
      }
      isInsideSpecificTag(node, tagRegex) {
        while (node = node.parentNode) {
          if (this.isSpecificTag(node, tagRegex)) {
            return true;
          }
        }
        return false;
      }
      canIgnoreNode(node) {
        while(node instanceof Node) {
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

        let textNodes = document.evaluate(xPathQuery, contextNode, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
        let currentTextNode;
        let nextTextNode;

        for (let i = textNodes.snapshotLength - 1; i > -1; --i) {
          currentTextNode = textNodes.snapshotItem(i);

          const textNodeParent = currentTextNode.parentNode;
          if (this.isSpecificTag(textNodeParent, this.presentationalTags) && !this.isInsideSpecificTag(textNodeParent, this.ignoredTags)) {

            let elementNode = textNodeParent;
            const previousSibling = elementNode.previousSibling;
            if (previousSibling) {

              if (previousSibling.nodeType === Node.TEXT_NODE) {
                let testText = previousSibling.data.substr(-1) + currentTextNode.data.toString().charAt(0);
                let testNewText = this.spacing(testText);

                if (testText !== testNewText) {
                  previousSibling.data = "" + previousSibling.data + " ";
                }
              }
            }

            if (elementNode.nextSibling) {
              let nextSibling = elementNode.nextSibling;

              if (nextSibling.nodeType === Node.TEXT_NODE) {
                let _testText = currentTextNode.data.substr(-1) + nextSibling.data.toString().charAt(0);

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

          let newText = this.spacing(currentTextNode.data);

          if (currentTextNode.data !== newText) {
            currentTextNode.data = newText;
          }

          if (nextTextNode) {
            if (currentTextNode.nextSibling && currentTextNode.nextSibling.nodeName.search(this.spaceLikeTags) >= 0) {
              nextTextNode = currentTextNode;
              continue;
            }

            let _testText2 = currentTextNode.data.toString().substr(-1) + nextTextNode.data.toString().substr(0, 1);

            let _testNewText2 = this.spacing(_testText2);

            if (_testNewText2 !== _testText2) {
              let nextNode = nextTextNode;

              while (nextNode.parentNode && nextNode.nodeName.search(this.spaceSensitiveTags) === -1 && this.isFirstTextChild(nextNode.parentNode, nextNode)) {
                nextNode = nextNode.parentNode;
              }

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
                  let panguSpace = document.createElement('pangu');
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
        for(const tag of ['script', 'style', 'textarea']){
          xPathQueryArr.push("[translate(name(..),\"ABCDEFGHIJKLMNOPQRSTUVWXYZ\",\"abcdefghijklmnopqrstuvwxyz\")!=\"", tag, "\"]");
        }
        const xPathQuery = xPathQueryArr.join('');
        this.spacingNodeByXPath(xPathQuery, document);
      }
      spacing(text) {
        if (typeof text !== 'string') {
          console.warn("spacing(text) only accepts string but got "+_typeof(text));
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

        newText = newText.replace(DOTS_CJK, '$1 $2');
        // newText = newText.replace(FIX_CJK_COLON_ANS, '$1：$2');
        newText = newText.replace(CJK_QUOTE, '$1 $2');
        newText = newText.replace(QUOTE_CJK, '$1 $2');
        newText = newText.replace(FIX_QUOTE_ANY_QUOTE, '$1$2$3');
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
        newText = newText.replace(FIX_LEFT_BRACKET_ANY_RIGHT_BRACKET, '$1$2$3');
        newText = newText.replace(ANS_CJK_LEFT_BRACKET_ANY_RIGHT_BRACKET, '$1 $2$3$4');
        newText = newText.replace(LEFT_BRACKET_ANY_RIGHT_BRACKET_ANS_CJK, '$1$2$3 $4');
        // newText = newText.replace(AN_LEFT_BRACKET, '$1 $2');


        // newText = newText.replace(RIGHT_BRACKET_AN, '$1 $2');
        newText = newText.replace(CJK_ANS, '$1 $2');
        newText = newText.replace(ANS_CJK, '$1 $2');
        // newText = newText.replace(S_A, '$1 $2');

        /*
        newText = newText.replace(MIDDLE_DOT, '・');
        */
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
