/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(91)
	__webpack_require__(96)
	__webpack_require__(100)
	var __weex_template__ = __webpack_require__(105)
	var __weex_style__ = __webpack_require__(106)
	var __weex_script__ = __webpack_require__(107)

	__weex_define__('@weex-component/e6904ec4fa034cdd032ec60157910992', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})

	__weex_bootstrap__('@weex-component/e6904ec4fa034cdd032ec60157910992',undefined,undefined)

/***/ },

/***/ 91:
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(92)
	var __weex_style__ = __webpack_require__(93)
	var __weex_script__ = __webpack_require__(94)

	__weex_define__('@weex-component/banner-view', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ },

/***/ 92:
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "wrap"
	  ],
	  "children": [
	    {
	      "type": "slider",
	      "classList": [
	        "slider"
	      ],
	      "attr": {
	        "interval": function () {return this.intervalValue},
	        "autoPlay": function () {return this.isAutoPlay}
	      },
	      "children": [
	        {
	          "type": "indicator",
	          "classList": [
	            "indicator"
	          ]
	        },
	        {
	          "type": "div",
	          "repeat": {
	            "expression": function () {return this.banners},
	            "value": "item"
	          },
	          "attr": {
	            "url": function () {return this.item.url}
	          },
	          "events": {
	            "click": "goNext"
	          },
	          "children": [
	            {
	              "type": "image",
	              "classList": [
	                "iamge"
	              ],
	              "attr": {
	                "src": function () {return this.item.img_url},
	                "resize": "stretch"
	              }
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },

/***/ 93:
/***/ function(module, exports) {

	module.exports = {
	  "slider": {
	    "width": 750,
	    "height": 210
	  },
	  "iamge": {
	    "width": 750,
	    "height": 210,
	    "alignItems": "center"
	  },
	  "indicator": {
	    "position": "absolute",
	    "bottom": 20,
	    "right": 0,
	    "width": 100,
	    "height": 12,
	    "itemColor": "#dddddd",
	    "itemSelectedColor": "#ffffff",
	    "itemSize": 12
	  }
	}

/***/ },

/***/ 94:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	var event = __weex_require__('@weex-module/event');
	var base64 = __webpack_require__(95);
	module.exports = {
	  data: function () {return {
	    intervalValue: "5000",
	    isAutoPlay: "true",
	    banners: []
	  }},
	  ready: function ready() {},
	  methods: {
	    goNext: function goNext(e) {
	      var params = '{"destClass":"h5","segueParams":{"url":"' + e.target.attr.url + '","isShowTitle":false}}';
	      event.openSpecifiedPage('emlive://haitunlive.com/first?params=' + encodeURI(base64.encode(params)), null);
	    }
	  }
	};}
	/* generated by weex-loader */


/***/ },

/***/ 95:
/***/ function(module, exports) {

	/**
	 *create by 2016-11-27
	 *@author weiqi
	 *BASE64 Encode and Decode By UTF-8 unicode
	 *可以和java的BASE64编码和解码互相转化
	 */

	  // 转码表
	  var table = [
	      'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
	      'I', 'J', 'K', 'L', 'M', 'N', 'O' ,'P',
	      'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
	      'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f',
	      'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
	      'o', 'p', 'q', 'r', 's', 't', 'u', 'v',
	      'w', 'x', 'y', 'z', '0', '1', '2', '3',
	      '4', '5', '6', '7', '8', '9', '+', '/'
	  ];

	  exports.getBannerList = function (callback) {
	    getData(apiURL.baseCdnUrl + apiURL.bannerList, callback);
	  };

	  function UTF16ToUTF8(str) {
	    var res = [], len = str.length;
	    for (var i = 0; i < len; i++) {
	      var code = str.charCodeAt(i);
	      if (code > 0x0000 && code <= 0x007F) {
	        // 单字节，这里并不考虑0x0000，因为它是空字节
	        // U+00000000 – U+0000007F  0xxxxxxx
	        res.push(str.charAt(i));
	      } else if (code >= 0x0080 && code <= 0x07FF) {
	        // 双字节
	        // U+00000080 – U+000007FF  110xxxxx 10xxxxxx
	        // 110xxxxx
	        var byte1 = 0xC0 | ((code >> 6) & 0x1F);
	        // 10xxxxxx
	        var byte2 = 0x80 | (code & 0x3F);
	        res.push(
	          String.fromCharCode(byte1), 
	          String.fromCharCode(byte2)
	        );
	      } else if (code >= 0x0800 && code <= 0xFFFF) {
	        // 三字节
	        // U+00000800 – U+0000FFFF  1110xxxx 10xxxxxx 10xxxxxx
	        // 1110xxxx
	        var byte1 = 0xE0 | ((code >> 12) & 0x0F);
	        // 10xxxxxx
	        var byte2 = 0x80 | ((code >> 6) & 0x3F);
	        // 10xxxxxx
	        var byte3 = 0x80 | (code & 0x3F);
	        res.push(
	          String.fromCharCode(byte1), 
	          String.fromCharCode(byte2), 
	          String.fromCharCode(byte3)
	        );
	      } else if (code >= 0x00010000 && code <= 0x001FFFFF) {
	        // 四字节
	        // U+00010000 – U+001FFFFF  11110xxx 10xxxxxx 10xxxxxx 10xxxxxx
	      } else if (code >= 0x00200000 && code <= 0x03FFFFFF) {
	        // 五字节
	        // U+00200000 – U+03FFFFFF  111110xx 10xxxxxx 10xxxxxx 10xxxxxx 10xxxxxx
	      } else /** if (code >= 0x04000000 && code <= 0x7FFFFFFF)*/ {
	        // 六字节
	        // U+04000000 – U+7FFFFFFF  1111110x 10xxxxxx 10xxxxxx 10xxxxxx 10xxxxxx 10xxxxxx
	      }
	    }

	    return res.join('');
	  };

	  function UTF8ToUTF16(str) {
	    var res = [], len = str.length;
	    var i = 0;
	    for (var i = 0; i < len; i++) {
	      var code = str.charCodeAt(i);
	      // 对第一个字节进行判断
	      if (((code >> 7) & 0xFF) == 0x0) {
	        // 单字节
	        // 0xxxxxxx
	        res.push(str.charAt(i));
	      } else if (((code >> 5) & 0xFF) == 0x6) {
	        // 双字节
	        // 110xxxxx 10xxxxxx
	        var code2 = str.charCodeAt(++i);
	        var byte1 = (code & 0x1F) << 6;
	        var byte2 = code2 & 0x3F;
	        var utf16 = byte1 | byte2;
	        res.push(Sting.fromCharCode(utf16));
	      } else if (((code >> 4) & 0xFF) == 0xE) {
	        // 三字节
	        // 1110xxxx 10xxxxxx 10xxxxxx
	        var code2 = str.charCodeAt(++i);
	        var code3 = str.charCodeAt(++i);
	        var byte1 = (code << 4) | ((code2 >> 2) & 0x0F);
	        var byte2 = ((code2 & 0x03) << 6) | (code3 & 0x3F);
	        var utf16 = ((byte1 & 0x00FF) << 8) | byte2
	        res.push(String.fromCharCode(utf16));
	      } else if (((code >> 3) & 0xFF) == 0x1E) {
	        // 四字节
	        // 11110xxx 10xxxxxx 10xxxxxx 10xxxxxx
	      } else if (((code >> 2) & 0xFF) == 0x3E) {
	        // 五字节
	        // 111110xx 10xxxxxx 10xxxxxx 10xxxxxx 10xxxxxx
	      } else /** if (((code >> 1) & 0xFF) == 0x7E)*/ {
	        // 六字节
	        // 1111110x 10xxxxxx 10xxxxxx 10xxxxxx 10xxxxxx 10xxxxxx
	      }
	    }

	    return res.join('');
	  };

	  exports.encode = function(str) {
	    if (!str) {
	      return '';
	    }
	    var utf8  = UTF16ToUTF8(str); // 转成UTF8
	    var i = 0; // 遍历索引
	    var len = utf8.length;
	    var res = [];
	    while (i < len) {
	      var c1 = utf8.charCodeAt(i++) & 0xFF;
	      res.push(table[c1 >> 2]);
	      // 需要补2个=
	      if (i == len) {
	        res.push(table[(c1 & 0x3) << 4]);
	        res.push('==');
	        break;
	      }
	      var c2 = utf8.charCodeAt(i++);
	      // 需要补1个=
	      if (i == len) {
	        res.push(table[((c1 & 0x3) << 4) | ((c2 >> 4) & 0x0F)]);
	        res.push(table[(c2 & 0x0F) << 2]);
	        res.push('=');
	        break;
	      }
	      var c3 = utf8.charCodeAt(i++);
	      res.push(table[((c1 & 0x3) << 4) | ((c2 >> 4) & 0x0F)]);
	      res.push(table[((c2 & 0x0F) << 2) | ((c3 & 0xC0) >> 6)]);
	      res.push(table[c3 & 0x3F]);
	    }

	    return res.join('');
	  };

	  exports.decode = function(str) {
	    if (!str) {
	      return '';
	    }

	    var len = str.length;
	    var i   = 0;
	    var res = [];

	    while (i < len) {
	      var code1 = table.indexOf(str.charAt(i++));
	      var code2 = table.indexOf(str.charAt(i++));
	      var code3 = table.indexOf(str.charAt(i++));
	      var code4 = table.indexOf(str.charAt(i++));

	      var c1 = (code1 << 2) | (code2 >> 4);
	      var c2 = ((code2 & 0xF) << 4) | (code3 >> 2);
	      var c3 = ((code3 & 0x3) << 6) | code4;

	      res.push(String.fromCharCode(c1));

	      if (code3 != 64) {
	        res.push(String.fromCharCode(c2));
	      }
	      if (code4 != 64) {
	        res.push(String.fromCharCode(c3));
	      }

	    }

	    return UTF8ToUTF16(res.join(''));
	  }

/***/ },

/***/ 96:
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(97)
	var __weex_style__ = __webpack_require__(98)
	var __weex_script__ = __webpack_require__(99)

	__weex_define__('@weex-component/page-ad', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ },

/***/ 97:
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "root"
	  ],
	  "children": [
	    {
	      "type": "div",
	      "classList": [
	        "item"
	      ],
	      "repeat": {
	        "expression": function () {return this.items},
	        "value": "item"
	      },
	      "attr": {
	        "url": function () {return this.item.and_link_url}
	      },
	      "events": {
	        "click": "onItemClick"
	      },
	      "children": [
	        {
	          "type": "image",
	          "classList": [
	            "image"
	          ],
	          "attr": {
	            "src": function () {return this.item.img_url},
	            "quality": "normal"
	          }
	        },
	        {
	          "type": "text",
	          "classList": [
	            "title"
	          ],
	          "attr": {
	            "value": function () {return this.item.name}
	          }
	        }
	      ]
	    }
	  ]
	}

/***/ },

/***/ 98:
/***/ function(module, exports) {

	module.exports = {
	  "root": {
	    "flexDirection": "row"
	  },
	  "item": {
	    "alignItems": "center",
	    "padding": 10,
	    "flex": 1
	  },
	  "image": {
	    "justifyContent": "center",
	    "width": 80,
	    "height": 80
	  },
	  "title": {
	    "justifyContent": "center",
	    "fontSize": 22,
	    "color": "#333333",
	    "paddingTop": 10
	  }
	}

/***/ },

/***/ 99:
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){"use strict";

	var event = __weex_require__('@weex-module/event');
	module.exports = {
	  data: function () {return {
	    items: []
	  }},
	  methods: {
	    onItemClick: function onItemClick(e) {
	      console.log("mothod onItemClick and_link_url:" + e.target.attr.url);
	      event.openSpecifiedPage(e.target.attr.url, null);
	    }
	  }
	};}
	/* generated by weex-loader */


/***/ },

/***/ 100:
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(101)
	var __weex_style__ = __webpack_require__(102)
	var __weex_script__ = __webpack_require__(103)

	__weex_define__('@weex-component/channel-item', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ },

/***/ 101:
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "channel"
	  ],
	  "events": {
	    "click": "onChannelClick"
	  },
	  "children": [
	    {
	      "type": "image",
	      "classList": [
	        "image"
	      ],
	      "attr": {
	        "src": function () {return this.channel.anchor.avatar_url}
	      }
	    },
	    {
	      "type": "image",
	      "classList": [
	        "shadow-top"
	      ],
	      "attr": {
	        "src": function () {return this.img_shadow_top}
	      }
	    },
	    {
	      "type": "image",
	      "classList": [
	        "shadow-bottom"
	      ],
	      "attr": {
	        "src": function () {return this.img_shadow_bottom}
	      }
	    },
	    {
	      "type": "div",
	      "classList": [
	        "count"
	      ],
	      "children": [
	        {
	          "type": "image",
	          "classList": [
	            "iamge-count"
	          ],
	          "attr": {
	            "src": function () {return this.img_count},
	            "quality": "high"
	          }
	        },
	        {
	          "type": "text",
	          "classList": [
	            "text-count"
	          ],
	          "attr": {
	            "value": function () {return (this.channel.viewer_count) + '人'}
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "time"
	      ],
	      "children": [
	        {
	          "type": "image",
	          "classList": [
	            "iamge-time"
	          ],
	          "shown": function () {return this.channel.type==0},
	          "attr": {
	            "src": function () {return this.img_time},
	            "quality": "high"
	          }
	        },
	        {
	          "type": "text",
	          "classList": [
	            "text-time"
	          ],
	          "shown": function () {return this.channel.type==0},
	          "attr": {
	            "value": "直播"
	          }
	        },
	        {
	          "type": "text",
	          "classList": [
	            "text-time"
	          ],
	          "shown": function () {return this.channel.type!=0},
	          "attr": {
	            "value": function () {return this.channel.live_start_time}
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "name"
	      ],
	      "children": [
	        {
	          "type": "div",
	          "classList": [
	            "channel-name"
	          ],
	          "children": [
	            {
	              "type": "image",
	              "shown": function () {return (this.index==0)},
	              "classList": [
	                "image-channel-label"
	              ],
	              "attr": {
	                "src": function () {return this.img_label},
	                "quality": "high"
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "text-channel-name"
	              ],
	              "attr": {
	                "value": function () {return this.channel.name}
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "anchor-name"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "text-anchor-name"
	              ],
	              "attr": {
	                "value": function () {return this.channel.anchor.nickname}
	              }
	            },
	            {
	              "type": "image",
	              "shown": function () {return (this.channel.anchor.identify==1)},
	              "classList": [
	                "iamge-anchor-name"
	              ],
	              "attr": {
	                "src": function () {return this.img_vip},
	                "quality": "high"
	              }
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "location"
	      ],
	      "children": [
	        {
	          "type": "image",
	          "classList": [
	            "iamge-location"
	          ],
	          "attr": {
	            "src": function () {return this.img_location},
	            "quality": "high"
	          }
	        },
	        {
	          "type": "text",
	          "classList": [
	            "text-location"
	          ],
	          "attr": {
	            "value": function () {return this.channel.location}
	          }
	        }
	      ]
	    }
	  ]
	}

/***/ },

/***/ 102:
/***/ function(module, exports) {

	module.exports = {
	  "channel": {
	    "width": 373,
	    "height": 373
	  },
	  "shadow-top": {
	    "width": 373,
	    "height": 90,
	    "position": "absolute",
	    "top": 5
	  },
	  "shadow-bottom": {
	    "width": 373,
	    "height": 140,
	    "position": "absolute",
	    "bottom": 0
	  },
	  "image": {
	    "top": 3,
	    "height": 370
	  },
	  "count": {
	    "position": "absolute",
	    "left": 10,
	    "top": 20,
	    "paddingTop": 6,
	    "paddingBottom": 6,
	    "flexDirection": "row",
	    "alignItems": "center"
	  },
	  "iamge-count": {
	    "width": 26,
	    "height": 16
	  },
	  "text-count": {
	    "color": "#ffffff",
	    "fontSize": 20,
	    "textAlign": "center",
	    "marginLeft": 5
	  },
	  "time": {
	    "position": "absolute",
	    "right": 10,
	    "top": 20,
	    "paddingLeft": 13,
	    "paddingRight": 13,
	    "paddingTop": 2,
	    "paddingBottom": 2,
	    "borderRadius": 40,
	    "borderWidth": 2,
	    "borderColor": "#ffffff",
	    "alignItems": "center",
	    "flexDirection": "row"
	  },
	  "iamge-time": {
	    "width": 10,
	    "height": 10,
	    "marginRight": 10
	  },
	  "text-time": {
	    "color": "#ffffff",
	    "fontSize": 23
	  },
	  "name": {
	    "position": "absolute",
	    "left": 10,
	    "bottom": 20
	  },
	  "channel-name": {
	    "flexDirection": "row",
	    "alignItems": "center"
	  },
	  "image-channel-label": {
	    "width": 50,
	    "height": 25
	  },
	  "text-channel-name": {
	    "color": "#ffffff",
	    "fontSize": 23,
	    "paddingTop": 1,
	    "marginLeft": 3,
	    "width": 280,
	    "lines": 1
	  },
	  "anchor-name": {
	    "marginTop": 5,
	    "flexDirection": "row",
	    "alignItems": "center"
	  },
	  "iamge-anchor-name": {
	    "width": 28,
	    "height": 28,
	    "marginLeft": 5
	  },
	  "text-anchor-name": {
	    "color": "#ffffff",
	    "fontSize": 28,
	    "fontWeight": "bold",
	    "maxWidth": 180,
	    "textOverflow": "ellipsis",
	    "lines": 1
	  },
	  "location": {
	    "position": "absolute",
	    "right": 20,
	    "bottom": 20,
	    "flexDirection": "row",
	    "alignItems": "center"
	  },
	  "iamge-location": {
	    "width": 16,
	    "height": 21
	  },
	  "text-location": {
	    "color": "#ffffff",
	    "fontSize": 25,
	    "textAlign": "center",
	    "marginLeft": 5
	  }
	}

/***/ },

/***/ 103:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	var event = __weex_require__('@weex-module/event');
	var homeConstants = __webpack_require__(104);
	var base64 = __webpack_require__(95);
	module.exports = {
	  data: function () {return {
	    channel: {
	      anchor: {
	        avatar_url: '',
	        nickname: '',
	        identify: 0,
	        level: '',
	        is_follow: false
	      },
	      id: '',
	      state: '',
	      type: 0,
	      viewer_count: 0,
	      like_count: 0,
	      live_start_time: '',
	      name: '',
	      location: '',
	      hls_downstream_address: '',
	      rtmp_downstream_address: '',
	      flv_downstream_address: '',
	      play_count: 0,
	      record_file_set: [],
	      record_file_duration: [],
	      record_img_url: '',
	      top_type: 0,
	      live_ticket: 0,
	      shared_url: '',
	      shared_title: '',
	      shared_intro: '',
	      shared_describe: '',
	      width: 0,
	      height: 0,
	      trailer_message: '',
	      record_hls: {
	        video_files: [],
	        live_time: 0
	      },
	      subject_id: 1,
	      screen_type: 0
	    },
	    index: 0,
	    img_label: '',
	    img_count: 'data:img/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAUCAYAAADskT9PAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpEQ0JERDExQjlGM0IxMUU2QkQwNkYxQTFGREVCQTc2QyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpEQ0JERDExQzlGM0IxMUU2QkQwNkYxQTFGREVCQTc2QyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkRDQkREMTE5OUYzQjExRTZCRDA2RjFBMUZERUJBNzZDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkRDQkREMTFBOUYzQjExRTZCRDA2RjFBMUZERUJBNzZDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+snTGXQAAAgVJREFUeNqUlksohUEUx93rUbq3JI8NWbGkyLtQwk7IRsTGYyMbsbay8MgSW3lFiaXHjkKRvBbKRhISyYLC7Y7/5K8+t5n5Zk79Nt+c+Z8z882cMwEhRJyDlYBmUAHyQRq/v4ALcAA2wJGtYMAigSDoAEOgAHyBfXAKnumTCYpAOUgA52ASLIKoUV0mYKASnItfuwDdIMXgL8d66Cs4t9IUQzeQCMZBFDyCThD0SdaL9O0A99QYp6ZVAhlgjytYAakKnzowDbbBJpgCpZodmafWLrWNCeSAaxABA5rkdoTelkFYMa8XfFE7R5dALrgDH6BRIRICp8LftjW/qx68M0ZubALZ4IYO1Zr/OiLsrVujUQbeGCv7L4EwT+snqDUcrFuHBPYMOlXcZRkzLD+scVKbYVJIuNmrzy1ppd9a0FMSvg3lIhrnZhGf8SRvIZKrO+O2VBmyvnLYgU2DTi1vhIwZij2EbzwoqokDDgk0aTRquNB/h1B1DRsUkxPAlkXwOU3wRmorr2FsIZJb1KcQSQYzLK+xJueMgnjN7kX8CpG32u1SdEHTfPLAIJhlSe4HWQo/WcZXXUqxtxmNcaUPbCyuzaiLjSxKrUSXbqhqx5f8LTbt+NK2Hds+SNrBMB8k8o4fghPwRJ90UMiXUhIfJBNgya+GBByfZMWgxedJtg6ObQV/BBgAwb1tcs/QtdEAAAAASUVORK5CYII=',
	    img_location: 'data:img/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAzCAYAAAD/06q7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxOEVFNDNFRDJDNTcxMUU2QkRFNkQ3MERBM0FGQzlENyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoxOEVFNDNFRTJDNTcxMUU2QkRFNkQ3MERBM0FGQzlENyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjE4RUU0M0VCMkM1NzExRTZCREU2RDcwREEzQUZDOUQ3IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjE4RUU0M0VDMkM1NzExRTZCREU2RDcwREEzQUZDOUQ3Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+B8xS5AAAAzZJREFUeNrEmc9rE1EQx3fXpEgEq1VRCo2I4o9W8TcKEkUq2IJ/QBEFD6I9efTmJSJ4UhCP/qIH8aDQikppDxYq9QeoNaitiqCiRcSiFVsrUdfvhAmsMbuZeZvsDnygSd6b/Wbee5OZV9t1XUtpK0A7yIBm0ARm8WeT4B0YAYPgFnip8k6CBCTAXvDA1ds90AEcybMkYlrBCze8jYKdYQTVgbNu9e0M+1YJqgdDbu1skJ/x37PtMpu6njfkGqu29hC0ggnvm07JoCTojkAM2UZwFSSCTtlJN3o77rdkW8BdYFvR2h+wCTymF0VBJOI+2Kx0Rk56wVt+vRi0gfVKP0Ngm3fJ2pRhfgIyASkjw2M0tst77HsVE2+AlCChpnisxm9B0CLwWzgpJxTjFZUT+s6DBQ6vuSNc6yNgSrE3pniOxOj47yYh24UTnoMBg1M0wHMltsNRJMH+EEdbOnc1CVoiHPwhhCDp3GUkqEE4OBlCkHRug6PIzCtDCJLOdShT/8AfMwWDP4NGkDeIzhiYLxj70+EHSYwcdhpEp1Mohmxcm6UnQIsiMbbwHKn1U4Ryim87G/RxLSOpd/p4jtRy9C3aDWqYaXAKpMtEJc2fTRv43UObOgVlX0Cd4QkaKSk/Vhn6+VVIQfytrrvx203SUvxRvWzFb1e8FSMt23swNyYx3zjHTTqeMqErxuh08b3AP0X+UvAqhiLf5UuL0dK+7DW4FkN0uotiSiNkcbfwKGJBW7njKdu5UlvTE6GYHq+YchEqVG38c2JHsHc2gOGg3p7sKbgY0ckaLn3T9rnSa+QTl6qRGEozy8uVtn7tDxVU2RpGJ+tXZ9sBl55JDmlzlcVQS7TOr/IMahDzhhViJTscVAZX6ljpJu1CFcWcB3eCBtiCe+p54BlYGFLMR04p44Fth6jwtqxDVYjOwUpiNBfnxKUQxdc56XMkS1a0OZzBm5SReQPWcs1TuVNUOP4KDvCdoOb+cL9UjHbJipxQLNUxrX8TQQnhLf9tMEPrX7OHvJbmLO5Xg3/i2mpM69gxPML0P7F9Afumw0SM6R7yki2zVEfD+AwriPbIabrSAd95w9thfP4VYADMRH5QB7eRbgAAAABJRU5ErkJggg==',
	    img_vip: 'data:img/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpENDA2MUMyNTZDMkQxMUU2OTM0NTg3OTdFQ0RBNzcxRCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpENDA2MUMyNjZDMkQxMUU2OTM0NTg3OTdFQ0RBNzcxRCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkQ0MDYxQzIzNkMyRDExRTY5MzQ1ODc5N0VDREE3NzFEIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkQ0MDYxQzI0NkMyRDExRTY5MzQ1ODc5N0VDREE3NzFEIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+xiSYvwAAApRJREFUeNq0V99LFFEUPrOSQYEW1PokmKQ+VCtIgVQQCq4SBBH0w156DC0o8DkC+wdUUumtp9p82BchaBOfKoQwaPuBuRHB0stWpEFBG+t2vr3n2jjMzL0jOx98zMCeOd+cb+45e6+zcYdssIM5yBxgHmO2M/fIb2vMT8yXzKfMJ8y/poSOQRjJbzJHmfvJDt+Y08wJeSlfJEISXGKuMG9HEAX2yTMrksNauIE5w3zIbKHto0VyzEjOUGEEzDFHqH4YkZwNYcL4Lueo/kDOySDhi8zrFB+uicYWYazeKYofU7oNtTBaJunbb0Nz5Fx5XbuGYlenimNS962gqKRo1YQbpU99UV0rErWmiI6e50bpDxZOXVVx4JfnYa8IrUYIp0P7NH+P6M8vdX/4cvAkautVN8U8j5DFMGFopbVwMH6vEhWeqeRdfYE208HjyqEPCzbfehDCPaao6vt5edd2f7thMwBn4JAZPRDuNIat8uj9WQq02+k+q27gDBwyowPCzTaR1byq2kmd8UzmfuUEYpbv27ZVc8K6A98+UNcm7ohW1+zXDsCRYsY6HYTX7f7sFtWKRdWH/k9V7YB2xBLrEC7YRm+u2COn1RWVNyW3OmKHAoSXrcN1T+/cXZtOm5V/fGHqXS9eQThnHe7u6QMnuB9OKSc+L0Wd2Tkt/N3abt3THSeVzXBgaSyK6FfsyyBcZt61fkz3NOwG3jyOWi12JOWEawNQsq7atYKr77JRq53w7jLxJ52heDGsNdwD5JFsS+PCtLsw7+S6wczGIJqV3IGbvQrzAnO2jqKzkrNi2ldXZJcwHGXB+aAkOUa9oqaTBL5HF3M8Sp9L7Lg8m9nu2cl7aEu7Dm175bcfrkNbTlg2JfwnwADRJKzPlxnVywAAAABJRU5ErkJggg==',
	    img_label_money: 'data:img/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAAEUAAAAkCAYAAADfJffWAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo2NUFDOUUwNDlGM0MxMUU2ODg1MENEN0I0NTE0MkU4OSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2NUFDOUUwNTlGM0MxMUU2ODg1MENEN0I0NTE0MkU4OSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjY1QUM5RTAyOUYzQzExRTY4ODUwQ0Q3QjQ1MTQyRTg5IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjY1QUM5RTAzOUYzQzExRTY4ODUwQ0Q3QjQ1MTQyRTg5Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+uCjS5gAAA39JREFUeNrsmllIVFEYx48Wle0LFbSQUQ3NQ1C0QGBF0EoF5UNKRRRFCRlt2GLQAvkSWA9ZPUQkRaRQMRHUQ5svKUQFSVBICzFtggVmmZo2/T/8Z3cGz93mzjjh/eDHXO45c+69//Od73zn3JsWiUQUrA/IB9lgLOihuo+1gTC4DkpAUxpEycBBOZihfHsMckSUAhzs8vXosGIRpRIHmb4WHfZORAl3sxhiGWNElI++DtGW3kXXzQEFcbZxBswEpV7fnFNPucCZyszmg30WdUaBILgXx72/AAvAJPBAnsUrUXo6rP8JVIMBGi+rBxM8uK9toM5GPcmvasAq0Nuibl92quei/LUQe7ozD/DCHoFaMNqi3gj+1lrU+0BRVCJFSYaNBFUetSWxpyFZoqxnr77spOwA+GrRe1t5LB5xSFOvDHxxeX/DQG6iY4oTu8sH19k3cJPHQZN65xhU3Vgw1USRmSUSc+4XyKIgAXBDkxqEYtqJ16S936kgysBOzt2nIIpZ9CDNf2MDbLGsXl3cw0FNeykVaC+DyZoYpCyG0A/Q32Z9qdtqEEWlqijvwR2wHxxz8f+Ag6G0khNAyqf5p9gJuSrFLVme8pZT6zow1GUbNRazVOzw6TJRWm2Oc8lBeoGdLq9zlDPXf+EpDZpZxmjljAV7wHAHbTfRO5QDD4m1av5m2rhPz0SR5GyiSfkreolMiXkuhtwSjzr/IlfUCRdF8o3PYLGmXFLzDeA7OA/6ubzOQrDZZDXdaLL6laTtSqKHzzQGyyHgIc9NNZQfp6vKmmc1eMM4khWH+LLynqMpk+2CFpPyZ8mIKUuJ2DVu7MwFt8EYCibvUZZxvbKIsSQek/cxFZqyWqbvszXl9ckMtJUUYh6Q90Y7mPOU0XMC3L84q+LfFB/H6+hiRTNYril/6mb7wY0oz8EWirAbDFbt+6WbwBpwCxxR7btiGR4Eyekm6XqIM6CuvCTRokhOcokp+k9QqP69VZTIfhJsB2vpRcadrhbmKWKvDQtCu51w2iQlaDYpr0r08MmjF8jDFYGNMeXZzAtKueCbZSgT8eq4Km7kuSk2r/uEmFlRVyVv+eyVQpNkStx4BV3eaDmGREpsPNhr87qyVjrs8vlkdX3C6Z/8l2EaUfzXptHWJjNI2NcheumSrqL3Q31T6qr/0U60dXy0o5T/eVfU511/BBgAeOLNqULuzTkAAAAASUVORK5CYII=',
	    img_label_life: 'data:img/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAAEUAAAAkCAYAAADfJffWAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1QjIyNEU5MkExQTgxMUU2OTEzQUFCRTZGRTAyQUQzQSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1QjIyNEU5M0ExQTgxMUU2OTEzQUFCRTZGRTAyQUQzQSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjVCMjI0RTkwQTFBODExRTY5MTNBQUJFNkZFMDJBRDNBIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjVCMjI0RTkxQTFBODExRTY5MTNBQUJFNkZFMDJBRDNBIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+kyOQHAAAA6JJREFUeNrsmm9oTWEcx8/mmn/DGtnSDKEt3EXzYmleTERoKFZSksR4gRdreOPPSv6WeKFopLQWYuWFFwg1/2oU00rGxmK0hJk2++f4/rrfbWfXvfc895x7jmnnW5/O3c5znnPO9/6e3/M7z7lxuq5r0AiwB6wHU8AQbfCoG7wDZeAIaIuDKSPx4TaYr3l6BBbHM0I8QwISH4olUt7gwzTPj17ViSldgyyHmOYYMUX3fOiveBvHtof5/ytQAPbZ6LsFPIjRPb4Ex8FF1QN8Ni56HMgAL4LM/QKuglyLfXeCJeAJ2AEOs2Qwk5z3M7+UappRBT5yfyJYClKdMuUxLz7JZrSF0lBwCGwEp8AdUAFmgFqwne2+cdtEQkWu5Mq5YDlYASY4GSm3uM1zaFjnMQILwWWQw+1CUAM+GW46GUymmTW88YNgFg1JjPbkVkzR+c1pdN8pSRSWg0xQAp6BReA1GEYTgnNHFkihmZZlZfZ5aMgXU6WPoP2/QCMYDiaa9JUPTiomS79Cmyy2q7ZjipVIOW34XB+hnZhTZ9JXk+I5/ZqLitYUyezXQQLHfEqINjJrLGMeuGnSX0KI/8lssRrs5dZ96dEpX0YbKIzQppJtcnVrOgt8QIZ2Meg07Etn33bYZnYB0UTKFXCDCXC/g9/TFibXteAYZxSZeUaB9AjR3QE+MPrSIvQ/PlaRUgvG0ukzJm3tRkqPGkAm+1oAWkzaV7Ot3+Z5dZXCS2anVaAZrLQ73UWhSeA+mM0o8Q2kRCtT7k5wnqtTcS6mvBQak8jaxBVFU6f85MXVc9yH03fwlLlnnkmfZaqlt2ItE5M6xUrx1nPyWOg9k2ckVTDJ7wZzwA8tsI781zoI90npPybE/jRVs6yM0+mMhHB6DjbzBkpN+kpVOF8p650C9qnzYTDULBNqZvmtBRamRztZ0cpjfHaE/W2GR/Vsm5HUyIfPJBaERmUofvPNPN6VRSY3JMm9izWLa4l2IJvSbRh+m/6X5UindQ00cF0kxzMloBOGst9V+QaoIVKwVTFZbwjT5is4p9BXm1OmXABFim27DEsIyYrHyM2tMfx9lNt1EWYOWWLY+i8jpV3rWyjWojBH9ZiOoGn4Hod2kUmNs0uhb1nsOuB0ReuGZGH6rhb4FUSweiramZrau6EWFn2yNFqpaor32jSoFIhnCeypTw1iSrnnQz9d8n6001+9P9pp1QIvmeSF01uW14Mqh/C+S+hD6x8BBgBY9c9JgkEEUgAAAABJRU5ErkJggg==',
	    img_shadow_top: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXIAAABaCAYAAAClrN3mAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo2NDYzMmEwMC1hNTY2LTU4NDUtOGZiZC1iNzI2MzU1OTIxM2EiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QTRGQjAyQjlDNzI0MTFFNkIyQTk5MUI5NERCNUE4Q0QiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QTRGQjAyQjhDNzI0MTFFNkIyQTk5MUI5NERCNUE4Q0QiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjY0NjMyYTAwLWE1NjYtNTg0NS04ZmJkLWI3MjYzNTU5MjEzYSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo2NDYzMmEwMC1hNTY2LTU4NDUtOGZiZC1iNzI2MzU1OTIxM2EiLz4gPC9y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',
	    img_shadow_bottom: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXIAAABaCAYAAAClrN3mAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo2NDYzMmEwMC1hNTY2LTU4NDUtOGZiZC1iNzI2MzU1OTIxM2EiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6REQyN0I3NEJDNzI0MTFFNjg0OEZFMTM2NDU0OUFGNkMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6REQyN0I3NEFDNzI0MTFFNjg0OEZFMTM2NDU0OUFGNkMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjY0NjMyYTAwLWE1NjYtNTg0NS04ZmJkLWI3MjYzNTU5MjEzYSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo2NDYzMmEwMC1hNTY2LTU4NDUtOGZiZC1iNzI2MzU1OTIxM2EiLz4gPC9y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',
	    img_time: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAYAAADgkQYQAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFMjAyMzEwOTYzNTMxMUU2QjU3MkU2QkY2M0NCQjgwRSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFMjAyMzEwQTYzNTMxMUU2QjU3MkU2QkY2M0NCQjgwRSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkUyMDIzMTA3NjM1MzExRTZCNTcyRTZCRjYzQ0JCODBFIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkUyMDIzMTA4NjM1MzExRTZCNTcyRTZCRjYzQ0JCODBFIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+EJz+HQAAAHBJREFUeNpiZPgvwQAEnEBcAcTRQCwLxI+BeCkQdwDxd0agIi4gYzcQWzFggmNA7MoENQGbAgaoeBnIpDtAhjIDbnAPpOgnkMGGR9EvJqgj8YGnIEXLCShaTLTvvgGxCxA3AfFdkBugdBNU/BtAgAEA7RccC4Nb6nQAAAAASUVORK5CYII='
	  }},
	  created: function created() {
	    if (this.channel.subject_id == 1) {
	      this.img_label = this.img_label_money;
	    } else {
	      this.img_label = this.img_label_life;
	    }
	  },
	  methods: {
	    onChannelClick: function onChannelClick(e) {
	      var params = '';
	      if (this.channel.type == homeConstants.CHANNEL_TYPE_LIVE) {
	        params = '{"destClass":"live","segueParams":{"channelId":"' + this.channel.id + '","extraLiveType":1}}';
	      } else {
	        params = '{"destClass":"vodplayer","segueParams":{"channelId":"' + this.channel.id + '"}}';
	      }
	      console.log("channel item params=" + params);
	      event.openSpecifiedPage('emlive://haitunlive.com/first?params=' + encodeURI(base64.encode(params)), null);
	    }
	  }
	};}
	/* generated by weex-loader */


/***/ },

/***/ 104:
/***/ function(module, exports) {

	/**
	 *create by 2016-11-28
	 *@author weiqi
	 *BASE64 Encode and Decode By UTF-8 unicode
	 *可以和java的BASE64编码和解码互相转化
	 */
	exports.CHANNEL_TYPE_LIVE = 0;
	exports.CHANNEL_TYPE_VOD = 1;

/***/ },

/***/ 105:
/***/ function(module, exports) {

	module.exports = {
	  "type": "list",
	  "classList": [
	    "list"
	  ],
	  "attr": {
	    "pageCount": "2",
	    "refreshType": "swipe"
	  },
	  "children": [
	    {
	      "type": "refresh",
	      "classList": [
	        "refresh-view"
	      ],
	      "attr": {
	        "display": function () {return this.refresh_display}
	      },
	      "events": {
	        "refresh": "onrefresh"
	      },
	      "children": [
	        {
	          "type": "text",
	          "classList": [
	            "text-indicator"
	          ],
	          "shown": function () {return (this.refresh_display==='hide')},
	          "attr": {
	            "value": "↓ 下拉刷新"
	          }
	        },
	        {
	          "type": "loading-indicator",
	          "classList": [
	            "indicator"
	          ]
	        }
	      ]
	    },
	    {
	      "type": "header",
	      "children": [
	        {
	          "type": "banner-view",
	          "attr": {
	            "banners": function () {return this.banners}
	          }
	        },
	        {
	          "type": "page-ad",
	          "shown": function () {return (this.adItems!=null)},
	          "attr": {
	            "items": function () {return this.adItems}
	          }
	        },
	        {
	          "type": "div",
	          "classList": [
	            "row"
	          ]
	        }
	      ]
	    },
	    {
	      "type": "cell",
	      "append": "tree",
	      "classList": [
	        "cell"
	      ],
	      "repeat": {
	        "expression": function () {return this.channelList},
	        "value": "item"
	      },
	      "children": [
	        {
	          "type": "channel-item",
	          "classList": [
	            "item-left"
	          ],
	          "attr": {
	            "channel": function () {return this.item.left},
	            "index": function () {return this.index}
	          }
	        },
	        {
	          "type": "channel-item",
	          "classList": [
	            "item-right"
	          ],
	          "shown": function () {return (this.item.right!=null)},
	          "attr": {
	            "channel": function () {return this.item.right},
	            "index": function () {return this.index}
	          }
	        }
	      ]
	    },
	    {
	      "type": "loading",
	      "classList": [
	        "loading-view"
	      ],
	      "attr": {
	        "display": function () {return this.loading_display}
	      },
	      "events": {
	        "loading": "onloading"
	      },
	      "children": [
	        {
	          "type": "text",
	          "classList": [
	            "text-indicator"
	          ],
	          "shown": function () {return (this.loading_display==='hide')},
	          "attr": {
	            "value": "↑ 上拉加载"
	          }
	        },
	        {
	          "type": "loading-indicator",
	          "classList": [
	            "indicator"
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },

/***/ 106:
/***/ function(module, exports) {

	module.exports = {
	  "refresh-view": {
	    "width": 750,
	    "height": 130,
	    "display": "flex",
	    "MsFlexAlign": "center",
	    "WebkitAlignItems": "center",
	    "WebkitBoxAlign": "center",
	    "alignItems": "center",
	    "backgroundColor": "#1da2ff"
	  },
	  "row": {
	    "height": 0,
	    "backgroundColor": "#eeeeee"
	  },
	  "cell": {
	    "width": 750
	  },
	  "item-left": {
	    "justifyContent": "center",
	    "width": 373,
	    "height": 373
	  },
	  "item-right": {
	    "position": "absolute",
	    "top": 0,
	    "right": 0,
	    "justifyContent": "center",
	    "width": 373,
	    "height": 373
	  },
	  "loading-view": {
	    "width": 750,
	    "height": 130,
	    "display": "flex",
	    "MsFlexAlign": "center",
	    "WebkitAlignItems": "center",
	    "WebkitBoxAlign": "center",
	    "alignItems": "center",
	    "backgroundColor": "#dddddd"
	  },
	  "indicator": {
	    "height": 60,
	    "width": 60,
	    "color": "#889967"
	  },
	  "text_footer": {
	    "width": 750,
	    "height": 100,
	    "padding": 30,
	    "color": "#888888",
	    "fontSize": 28,
	    "textAlign": "center"
	  },
	  "text-indicator": {
	    "color": "#3381e3",
	    "fontSize": 30,
	    "padding": 5
	  }
	}

/***/ },

/***/ 107:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	var modal = __weex_require__('@weex-module/modal');
	var apis = __webpack_require__(108);
	module.exports = {
	  data: function () {return {
	    refresh_display: 'hide',
	    loading_display: '',
	    title: '',
	    flag: '',
	    index: 0,
	    banners: [],
	    channelList: [],
	    adItems: [],
	    testCount: 0
	  }},
	  ready: function ready() {
	    this.onrefresh();
	  },
	  methods: {
	    onrefresh: function onrefresh(e) {
	      var self = this;
	      self.refresh_display = 'show';

	      apis.getMostHotLive(this.$getConfig().endPointCdn, self.flag, function (ret) {
	        self.refresh_display = 'hide';
	        self.loading_display = 'hide';
	        if (typeof ret != "undefined" && ret != null && ret.result == 1) {
	          console.log("request channellist successed count:" + ret.data.length + " result:" + ret.result + " message:" + ret.message);
	          self.channelList = new Array();
	          var lenght = parseInt(ret.data.length / 2);
	          for (var i = 0; i < lenght; i++) {
	            var channelItem = {};
	            channelItem.left = ret.data[i * 2];
	            channelItem.right = ret.data[i * 2 + 1];
	            self.channelList[i] = channelItem;
	          }
	          if (Math.round(ret.data.length % 2) == 1) {
	            var channelItem = {};
	            channelItem.left = ret.data[ret.data.length - 1];
	            channelItem.right = null;
	            self.channelList[lenght] = channelItem;
	          }
	        } else {
	          console.log("request failed");
	        }
	      });

	      apis.getBannerList(this.$getConfig().endPointCdn, function (ret) {
	        if (typeof ret != "undefined" && ret != null && ret.result == 1) {
	          self.banners = ret.data;
	        } else {
	          console.log("request failed");
	        }
	      });

	      apis.getHomePageOperation(this.$getConfig().endPointCdn, function (ret) {
	        if (typeof ret != "undefined" && ret != null && ret.result == 1) {
	          self.adItems = ret.data;
	        } else {
	          console.log("request failed");
	        }
	      });
	    },
	    onloading: function onloading() {
	      var self = this;
	      self.loading_display = 'show';

	      apis.getMostHotLive(this.$getConfig().endPointCdn, self.flag, function (ret) {

	        if (typeof ret != "undefined" && ret != null && ret.result == 1) {

	          console.log("loadmore channellist successed count:" + ret.data.length + " result:" + ret.result + " message:" + ret.message + " length:" + self.channelList.length);

	          self.testCount++;
	          if (self.testCount < 5) {
	            self.loading_display = 'hide';
	          } else {
	            self.loading_display = 'end';
	          }

	          var start = self.channelList.length;
	          var lenght = parseInt(ret.data.length / 2);
	          var newList = new Array();
	          for (var i = 0; i < start; i++) {
	            newList[i] = self.channelList[i];
	          }

	          for (var i = 0; i < lenght; i++) {
	            var channelItem = {};
	            channelItem.left = ret.data[i * 2];
	            channelItem.right = ret.data[i * 2 + 1];
	            var index = start + i;
	            newList[index] = channelItem;
	          }
	          if (Math.round(ret.data.length % 2) == 1) {
	            var channelItem = {};
	            channelItem.left = ret.data[ret.data.length - 1];
	            channelItem.right = null;
	            var end = start + lenght;
	            newList[end] = channelItem;
	          }
	          self.channelList = newList;

	          console.log("loadmore end Listlength:" + self.channelList.length + " newLength:" + newList.length + " testCount:" + self.testCount);
	        } else {
	          console.log("loadmore failed");
	          self.loading_display = 'error';
	        }
	      });
	    }
	  }
	};}
	/* generated by weex-loader */


/***/ },

/***/ 108:
/***/ function(module, exports) {

	/**
	 * Created by weiqi on 16/6/8.
	＊ 网络接口
	 */


	// var stream = require('@weex-module/stream');//说是0.15已经支持,但是我没生效

	var stream
	__weex_define__('@weex-temp/api', function (__weex_require__) {
	    stream = __weex_require__('@weex-module/stream')
	});

	var endPointCdn = {
	        baseUrlOfficial: 'https://sns..com',
	        baseUrlTest: 'https://qas..com:8101',
	        baseCdnUrlOfficial: 'http://cdn..com',
	        baseCdnUrlTest: 'http://51jinyi.top'
	    };

	var apiURL = {
	    feedBack: '/LVBPages/api/ApiSuggest/Suggest?reqtype=Server',
	    mostHotLive: '/Home/Channel/GetMostHotLive',
	    bannerList: '/Home/Channel/GetBannerList',
	    getHomePageOperation: '/Home/Channel/GetHomePageOperation'
	};

	exports.postFeedback = function (env, body, callback) {
	    postData(getEndPoint(env, endPointCdn.baseUrlOfficial, endPointCdn.baseUrlTest) + apiURL.feedBack, body, callback);
	};
	exports.getMostHotLive = function (env, flag, callback) {
	    getData(getEndPoint(env, endPointCdn.baseCdnUrlOfficial, endPointCdn.baseCdnUrlTest) + apiURL.mostHotLive + flag, callback);
	};
	exports.getBannerList = function (env, callback) {
	    getData(getEndPoint(env, endPointCdn.baseCdnUrlOfficial, endPointCdn.baseCdnUrlTest) + apiURL.bannerList, callback);
	};
	exports.getHomePageOperation = function (env, callback) {
	    getData(getEndPoint(env, endPointCdn.baseCdnUrlOfficial, endPointCdn.baseCdnUrlTest)+ apiURL.getHomePageOperation, callback);
	};
	exports.postPayPageInfo = function (env, body, callback) {
	    postData(getEndPoint(env, endPointCdn.basePayUrlOfficial, endPointCdn.basePayUrlTest) + apiURL.payPageInfo, body, callback);
	};
	exports.postCreateOrderInfoAli = function (env, body, callback) {
	    postData(getEndPoint(env, endPointCdn.basePayUrlOfficial, endPointCdn.basePayUrlTest) + apiURL.createOrderInfoAli, body, callback);
	};
	exports.postCreateOrderInfoWechat = function (env, body, callback) {
	    postData(getEndPoint(env, endPointCdn.basePayUrlOfficial, endPointCdn.basePayUrlTest)+ apiURL.createOrderInfoWechat, body, callback);
	};
	exports.postPayCallBackAli = function (env, body, callback) {
	    postData(getEndPoint(env, endPointCdn.basePayUrlOfficial, endPointCdn.basePayUrlTest) + apiURL.payCallBackAli, body, callback);
	};
	exports.postPayCallBackWechat = function (env, body, callback) {
	    postData(getEndPoint(env, endPointCdn.basePayUrlOfficial, endPointCdn.basePayUrlTest) + apiURL.payCallBackWechat, body, callback);
	};

	function getData(url, callback) {
	    console.log("https get url="+url);
	    stream.fetch({
	        method: 'GET',
	        type:'json',
	        url: url
	    }, function (ret) {
	        // var retdata = JSON.parse(ret);
	        callback(ret.data);
	    });
	}
	function postData(url, body, callback) {
	    console.log("https post url="+url+" body="+body);
	    stream.fetch({
	        method: 'POST',
	        url: url,
	        type:'json',
	        body: body
	    }, function (ret) {
	        //var retdata = JSON.stringify(ret.data);
	        callback(ret.data);
	    });
	}

	function getEndPoint(env, officialUrl, testUrl) {
	    env = new String(env);
	    if('official' == env){
	        return officialUrl;
	    }else{
	        return testUrl;
	    }
	}

	exports.getBaseUrl = function (bundleUrl, isnav) {
	    bundleUrl = new String(bundleUrl);
	    var nativeBase;
	    var isAndroidAssets = bundleUrl.indexOf('file://assets/') >= 0;

	    var isiOSAssets = bundleUrl.indexOf('file:///') >= 0 && bundleUrl.indexOf('WeexFeed.app') > 0;
	    if (isAndroidAssets) {
	        nativeBase = 'file://assets/dist/';
	    }
	    else if (isiOSAssets) {
	        nativeBase = bundleUrl.substring(0, bundleUrl.lastIndexOf('/') + 1);
	    }
	    else {
	        var host = 'localhost:8888';
	        var matches = /\/\/([^\/]+?)\//.exec(bundleUrl);
	        if (matches && matches.length >= 2) {
	            host = matches[1];
	        }

	        //此处需注意一下,tabbar 用的直接是jsbundle 的路径,但是navigator是直接跳转到新页面上的.
	        if (typeof window === 'object') {
	            nativeBase = isnav ? 'http://' + host + '/index.html?page=./dist/' : '/dist/';
	        } else {
	            nativeBase = 'http://' + host + '/dist/';
	        }
	    }

	    return nativeBase;
	};

/***/ }

/******/ });