/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//in order to add functions to the global scope, you have to
//add them to the window. object, this is a Webpack thing

window.data = [];
var techIcons = {
    getPin: function getPin(pin) {
        return techIcons[pin] ? '<img class="pin" src="' + techIcons[pin] + '"/>' : "";
    },
    wordpress: 'http://simpleicon.com/wp-content/uploads/wordpress.svg',
    larvel: 'http://go-labs.net/wp-content/themes/golabs/css/template/images/laravel.png',
    angular: 'https://cdn.worldvectorlogo.com/logos/angular-icon-1.svg',
    html: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1000px-HTML5_logo_and_wordmark.svg.png',
    php: 'http://freevector.co/wp-content/uploads/2010/10/php-1.png',
    scss: 'https://cdn.worldvectorlogo.com/logos/node-sass.svg',
    javascript: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2000px-Unofficial_JavaScript_logo_2.svg.png',
    typescript: 'https://s3-us-west-2.amazonaws.com/svgporn.com/logos/typescript-icon.svg',
    jquery: 'http://www.webdesigncolors.com/jquery.gif',
    phonegap: 'https://onesignal.com/assets/common/platform-icons/cordova-9b984d676cd2d8d0278ded3834e741e12a1cb7eda6776cc897c125e817e85dab.svg',
    node: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Node.js_logo_2015.svg/2000px-Node.js_logo_2015.svg.png',
    express: 'https://coligo.io/images/express.svg',
    mongo: 'https://bajcmartinez.com/assets/icons/mongodb/mongodb-original-wordmark.svg'
};

fetch('/data.json').then(function (res) {
    return res.json();
}).then(function (res) {
    return window.data = res;
}).then(function (res) {
    return populateProjects('["website", "app"]');
});

var genArray = function genArray(str) {
    return JSON.parse(JSON.stringify(str).replace(/'/g, '"').replace(/`/g, '"'));
};

//Select a tab
window.openTab = function (tabName) {
    //get all tabs that are part of the index page
    var tabs = document.getElementById('page-index').querySelectorAll('.tab');

    //loop through the tabs and if the tab data-tab value is the
    //same as the desired tab, add open to it otherwise remove else
    tabs.forEach(function (tab) {
        return tab.attributes['data-tab']['value'] == tabName ? tab.classList.add('open') : tab.classList.remove('open');
    });
};

window.selectTabItem = function (event) {
    document.querySelectorAll('nav a').forEach(function (el) {
        return el.classList.remove('active');
    });
    event.target.classList.add('active');
};

//Open the project side panel 
window.openProject = function (projectName) {
    var sidePanel = document.getElementById("side-panel");
    var innerPanel = document.getElementById("inner-panel");

    if (sidePanel.attributes['data-open']['value'] == "true") {
        sidePanel.attributes['data-open']['value'] = false;
        innerPanel.classList.remove('open');
        window.setTimeout(function (_) {
            sidePanel.classList.remove('open');
            innerPanel.innerHTML = "";
        }, 500);
    } else {
        var project = data.find(function (x) {
            return x.name == projectName;
        });
        innerPanel.style.backgroundColor = project.colors.brand;
        innerPanel.style.color = project.colors.text;

        innerPanel.innerHTML = '\n            \n            <div class="main-body">\n                <div class="title">\n                    <div class="content-max-widthh">\n                        <div class="exit" onclick="openProject()">CLOSE</div>\n                        <h1>' + project.name + '<span>' + project.subtitle + '</span></h1>\n                    </div>\n                </div>\n                <div class="hero">\n                    <div class="content-max-width" id="feature-outlet"></div>\n                </div>\n                <div class="content-max-width text-body">\n                    <article>\n                        <h3>Details</h3>\n                        ' + project.description + '\n                    </article>\n                </div>\n            </div>\n            <div class="tags">\n                <div class="content-max-widthh">\n                    <div id="tags-outlet"></div>\n                </div>\n            </div>\n        ';

        if (project.feature.type == 'video') {
            document.getElementById('feature-outlet').innerHTML = '\n                <video class="feature" autoplay="" loop="" autobuffer="" muted="" poster="' + project.thumb + '">\n                    <source src="' + project.feature.href + '" type="video/mp4">\n                </video>\n            ';
        }

        if (project.feature.type == 'image') {
            document.getElementById('feature-outlet').innerHTML = '\n                <div class="feature-image" style="background-image: url(\'' + project.feature.href + '\')"/>\n            ';
        }

        var pins = "";
        project['technologies'].forEach(function (tech) {
            return pins = pins + techIcons.getPin(tech);
        });

        document.getElementById("tags-outlet").innerHTML = pins;
        //<img src="` + project.thumb + `"></img>
        sidePanel.attributes['data-open']['value'] = true;
        sidePanel.classList.add('open');
        window.setTimeout(function (_) {
            innerPanel.classList.add('open');
        }, 700);
    }
};

//Generate project list from data array
var populateProjects = function populateProjects(filterList) {
    var projectOutlet = document.getElementById('project-outlet');
    projectOutlet.innerHTML = "";

    filterList = genArray(filterList);
    var selected = [];

    data.forEach(function (project) {
        for (var i = 0; i < project.type.length; i++) {
            if (filterList.indexOf(project.type[i]) !== -1) {
                if (selected.indexOf(project)) {
                    selected.push(project);
                }
            }
        }
    });

    selected.forEach(function (project) {
        var el = document.createElement('article');
        el.innerHTML = '\n            <div style="height: 100%;" onclick="openProject(\'' + project.name + '\')">\n                <div \n                    class="thumb"\n                    style="background-image: url(\' ' + project.thumb + ' \')"\n                ></div>\n            </div>\n        ';
        //el.style.height = (window.innerWidth / 4) + "px"
        projectOutlet.appendChild(el);
    });
};
window.populateProjects = populateProjects;

function scrollIt(destination) {
    var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 700;
    var easing = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'linear';
    var callback = arguments[3];


    var easings = {
        linear: function linear(t) {
            return t;
        },
        easeInQuad: function easeInQuad(t) {
            return t * t;
        },
        easeOutQuad: function easeOutQuad(t) {
            return t * (2 - t);
        },
        easeInOutQuad: function easeInOutQuad(t) {
            return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        },
        easeInCubic: function easeInCubic(t) {
            return t * t * t;
        },
        easeOutCubic: function easeOutCubic(t) {
            return --t * t * t + 1;
        },
        easeInOutCubic: function easeInOutCubic(t) {
            return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
        },
        easeInQuart: function easeInQuart(t) {
            return t * t * t * t;
        },
        easeOutQuart: function easeOutQuart(t) {
            return 1 - --t * t * t * t;
        },
        easeInOutQuart: function easeInOutQuart(t) {
            return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
        },
        easeInQuint: function easeInQuint(t) {
            return t * t * t * t * t;
        },
        easeOutQuint: function easeOutQuint(t) {
            return 1 + --t * t * t * t * t;
        },
        easeInOutQuint: function easeInOutQuint(t) {
            return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
        }
    };

    var start = window.pageYOffset;
    var startTime = 'now' in window.performance ? performance.now() : new Date().getTime();

    var documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
    var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
    var destinationOffset = typeof destination === 'number' ? destination : destination.offsetTop;
    var destinationOffsetToScroll = Math.round(documentHeight - destinationOffset < windowHeight ? documentHeight - windowHeight : destinationOffset);

    if ('requestAnimationFrame' in window === false) {
        window.scroll(0, destinationOffsetToScroll);
        if (callback) {
            callback();
        }
        return;
    }

    function scroll() {
        var now = 'now' in window.performance ? performance.now() : new Date().getTime();
        var time = Math.min(1, (now - startTime) / duration);
        var timeFunction = easings[easing](time);
        window.scroll(0, Math.ceil(timeFunction * (destinationOffsetToScroll - start) + start));

        if (window.pageYOffset === destinationOffsetToScroll) {
            if (callback) {
                callback();
            }
            return;
        }

        requestAnimationFrame(scroll);
    }

    scroll();
}

document.querySelector('#main-nav').addEventListener('click', function () {
    return scrollIt(document.querySelector('#main-nav').offsetTop);
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(4)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/postcss-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./styles.scss", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/postcss-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./styles.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, "body {\n  background: black; }\n\n* {\n  -webkit-tap-highlight-color: transparent; }\n\n* {\n  margin: 0;\n  padding: 0;\n  font-family: \"Roboto\", sans-serif;\n  box-sizing: border-box;\n  list-style-type: none;\n  text-decoration: none;\n  color: white; }\n\nselect {\n  float: right;\n  color: white;\n  border: white;\n  padding: 10px 20px;\n  border: 1px white solid;\n  background: black;\n  border-radius: 4px;\n  cursor: pointer; }\n\n.content-max-width {\n  max-width: 1000px;\n  display: block;\n  margin: 0 auto;\n  position: relative; }\n\n@media (max-width: 1024px) {\n    .content-max-width {\n      margin: 0 3%; } }\n\n.content-max-width:after {\n    content: '';\n    display: block;\n    clear: both; }\n\n.text-body {\n  box-shadow: 0px 0px 81px -7px rgba(0, 0, 0, 0.5);\n  background: white;\n  color: #333;\n  padding: 80px 100px;\n  margin-bottom: 140px;\n  border-radius: 4px; }\n\n.text-body * {\n    color: #666; }\n\n@media (max-width: 700px) {\n    .text-body {\n      padding: 40px 6%; } }\n\n.slide {\n  cursor: url(https://ssl.gstatic.com/ui/v1/icons/mail/images/2/openhand.cur), default !important; }\n\n.slide:active {\n    cursor: url(https://ssl.gstatic.com/ui/v1/icons/mail/images/2/closedhand.cur), default !important; }\n\n.slide:hover, .slide:active, .slide:focus {\n    outline: none;\n    border: none; }\n\n._page {\n  position: relative; }\n\n@media (min-width: 1024px) {\n  .left {\n    float: left; } }\n\n@media (min-width: 1024px) {\n  .right {\n    float: right; } }\n\n.clear {\n  clear: both; }\n\n@media (max-width: 1024px) {\n  .desktop {\n    display: none !important; } }\n\n@media (min-width: 1024px) {\n  .mobile {\n    display: none !important; } }\n\n@media screen and (min-width: 700px) {\n  .tablet-and-down {\n    display: none !important; } }\n\n@media screen and (min-width: 400px) {\n  .mobile-and-down {\n    display: none !important; } }\n\n@media screen and (max-width: 1024px) {\n  .desktop-and-up {\n    display: none !important; } }\n\n@media screen and (max-width: 700px) {\n  .tablet-and-up {\n    display: none !important; } }\n\n@-webkit-keyframes kf_fadeup {\n  0% {\n    -webkit-transform: translateY(100px);\n            transform: translateY(100px);\n    opacity: 0; }\n  100% {\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px);\n    opacity: 1; } }\n\n@keyframes kf_fadeup {\n  0% {\n    -webkit-transform: translateY(100px);\n            transform: translateY(100px);\n    opacity: 0; }\n  100% {\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px);\n    opacity: 1; } }\n\n.animate.fadeup {\n  -webkit-animation: kf_fadeup 2s forwards;\n          animation: kf_fadeup 2s forwards; }\n\n#page-index .hero {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  overflow: hidden; }\n\n#page-index .hero:after {\n    content: '';\n    display: block;\n    position: absolute;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    height: 100px;\n    /* FF3.6-15 */\n    /* Chrome10-25,Safari5.1-6 */\n    background: linear-gradient(to bottom, transparent 0%, black 100%);\n    /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00000000', endColorstr='#000000',GradientType=0 );\n    /* IE6-9 */ }\n\n#page-index .hero .hero-image {\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    opacity: 0.3;\n    background-position: center;\n    background-size: cover;\n    background-image: url(\"http://www.aucklandbushire.co.nz/wp-content/uploads/2014/10/cityscape.jpg\"); }\n\n#page-index .hero .video-container {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0; }\n\n#page-index .hero .video-container video {\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      min-width: 100%;\n      min-height: 100%;\n      width: auto;\n      height: auto;\n      z-index: -100;\n      -webkit-transform: translateX(-50%) translateY(-50%);\n      transform: translateX(-50%) translateY(-50%);\n      background-size: cover;\n      opacity: 0.2; }\n\n#page-index .hero .me {\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    white-space: nowrap; }\n\n@media (min-width: 700px) {\n      #page-index .hero .me {\n        display: block;\n        margin: 0 auto; } }\n\n#page-index .hero .me .photo {\n      height: 170px;\n      width: 170px;\n      display: inline-block;\n      vertical-align: middle;\n      border-radius: 50%;\n      border: 2px white solid;\n      background-position: center;\n      background-size: cover;\n      background-image: url(\"/assets/images/me.jpg\"); }\n\n@media (max-width: 700px) {\n        #page-index .hero .me .photo {\n          display: block;\n          margin: 0 auto 20px; } }\n\n#page-index .hero .me .text {\n      display: inline-block;\n      vertical-align: middle;\n      margin-left: 20px; }\n\n@media (max-width: 700px) {\n        #page-index .hero .me .text {\n          display: block;\n          text-align: center; } }\n\n#page-index .hero .me * {\n      font-weight: 300;\n      letter-spacing: 1px; }\n\n#page-index .hero .me h1 {\n      font-weight: 400;\n      padding-bottom: 10px; }\n\n#page-index .hero .me h2 {\n      font-weight: 300; }\n\n@media (max-width: 700px) {\n        #page-index .hero .me h2 span {\n          display: block; } }\n\n#page-index .hero .me h3 {\n      padding-top: 20px;\n      font-weight: 300; }\n\n#page-index nav {\n  position: relative;\n  z-index: 99;\n  height: 80px;\n  margin: calc(100vh - 80px) auto 0;\n  line-height: 80px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  max-width: 940px; }\n\n#page-index nav a {\n    letter-spacing: 1.5px;\n    font-weight: 300;\n    cursor: pointer; }\n\n#page-index .tabs nav {\n  margin: 0 auto;\n  max-width: 840px;\n  display: block;\n  font-size: 0; }\n\n@media (max-width: 700px) {\n    #page-index .tabs nav {\n      height: auto;\n      line-height: 50px; } }\n\n#page-index .tabs nav a {\n    display: inline-block;\n    vertical-align: top;\n    width: calc(100% / 4);\n    text-align: center;\n    font-size: 16px;\n    padding: 0 10px; }\n\n@media (max-width: 700px) {\n      #page-index .tabs nav a {\n        width: calc(100% / 2); } }\n\n@media (max-width: 350px) {\n      #page-index .tabs nav a {\n        font-size: 14px; } }\n\n#page-index .tabs nav a.active {\n    background: rgba(255, 255, 255, 0.2); }\n\n#page-index .tabs .tab {\n  position: relative;\n  display: none;\n  min-height: 100vh; }\n\n#page-index .tabs .tab.open {\n    display: block;\n    -webkit-animation: .35s kf_fadein forwards;\n            animation: .35s kf_fadein forwards; }\n\n#page-index .tabs select {\n  margin: 0px 0 30px; }\n\n#page-index .contact {\n  min-height: calc(100vh - 160px);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row wrap;\n          flex-flow: row wrap;\n  text-align: center; }\n\n@media (max-width: 700px) {\n    #page-index .contact {\n      min-height: calc(100vh - 120px); } }\n\n#page-index .contact a {\n    font-size: 30px;\n    padding: 20px 0;\n    display: block; }\n\n#page-index .contact .resume {\n    font-size: 15px; }\n\n@-webkit-keyframes kf_fadein {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@keyframes kf_fadein {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n#project-outlet {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row wrap;\n          flex-flow: row wrap;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n@media (min-width: 1024px) {\n    #project-outlet {\n      max-width: 80vw;\n      margin: 70px auto; } }\n\n@media (max-width: 1024px) {\n    #project-outlet {\n      margin: 0 auto; } }\n\n#project-outlet article {\n    width: calc(100% / 3);\n    position: relative;\n    height: 300px;\n    -webkit-animation: .35s kf_fadein forwards;\n            animation: .35s kf_fadein forwards;\n    cursor: pointer; }\n\n@media (max-width: 1024px) {\n      #project-outlet article {\n        width: calc(100% / 2); } }\n\n@media (max-width: 700px) {\n      #project-outlet article {\n        width: 100%; } }\n\n#project-outlet article span {\n      display: inline-block;\n      vertical-align: top;\n      font-weight: 300;\n      padding: 10px 20px;\n      font-size: 20px;\n      letter-spacing: 1px; }\n\n#project-outlet article .thumb {\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      border: 11px solid black;\n      display: inline-block;\n      vertical-align: top;\n      background-position: center;\n      background-size: cover;\n      background-image: url(\"https://www.scandichotels.com/Static/img/placeholders/image-placeholder_3x2.svg\");\n      transition: .25s opacity; }\n\n#project-outlet article .thumb:hover {\n        opacity: 0.8; }\n\n#project-outlet article .thumb:active {\n        opacity: 0.5; }\n\n.slide-about {\n  font-weight: 300;\n  letter-spacing: 0.5px;\n  line-height: 22px;\n  margin-top: 25px; }\n\n.slide-about strong {\n    font-weight: 400; }\n\n.slide-about h4 {\n    font-weight: 400;\n    font-size: 18px;\n    text-align: center; }\n\n#side-panel {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: white;\n  z-index: 999;\n  -webkit-transform: translateX(-100%);\n          transform: translateX(-100%);\n  transition: 0.5s -webkit-transform cubic-bezier(0.63, 0.01, 0, 1.03);\n  transition: 0.5s transform cubic-bezier(0.63, 0.01, 0, 1.03);\n  transition: 0.5s transform cubic-bezier(0.63, 0.01, 0, 1.03), 0.5s -webkit-transform cubic-bezier(0.63, 0.01, 0, 1.03);\n  display: block !important; }\n\n#side-panel.open {\n    -webkit-transform: translateX(0%);\n            transform: translateX(0%); }\n\n#side-panel #inner-panel {\n    overflow: hidden;\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background: #eee;\n    -webkit-transform: translateY(-100%);\n            transform: translateY(-100%);\n    transition: 0.5s -webkit-transform cubic-bezier(0.63, 0.01, 0, 1.03);\n    transition: 0.5s transform cubic-bezier(0.63, 0.01, 0, 1.03);\n    transition: 0.5s transform cubic-bezier(0.63, 0.01, 0, 1.03), 0.5s -webkit-transform cubic-bezier(0.63, 0.01, 0, 1.03); }\n\n#side-panel #inner-panel * {\n      opacity: 0;\n      transition: .8s opacity;\n      transition-delay: .2s; }\n\n#side-panel #inner-panel.open {\n      -webkit-transform: translateY(0%);\n              transform: translateY(0%); }\n\n#side-panel #inner-panel.open * {\n        opacity: 1; }\n\n#side-panel #feature-outlet {\n    width: 100%; }\n\n#side-panel .hero {\n    height: 100vh;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n\n@media (max-width: 700px) {\n      #side-panel .hero {\n        padding-bottom: 60px; } }\n\n#side-panel .feature {\n    width: 100%;\n    max-height: 80vh;\n    box-shadow: 0px 0px 81px -7px rgba(0, 0, 0, 0.5);\n    border-radius: 6px; }\n\n#side-panel .feature-image {\n    width: 100%;\n    height: 70vh;\n    box-shadow: 0px 0px 81px -7px rgba(0, 0, 0, 0.5);\n    border-radius: 6px;\n    background-position: center;\n    background-size: cover;\n    background-image: url(\"https://www.scandichotels.com/Static/img/placeholders/image-placeholder_3x2.svg\"); }\n\n@media (max-width: 1024px) {\n      #side-panel .feature-image {\n        height: 50vh; } }\n\n#side-panel .pin {\n    max-height: 40px;\n    max-width: 50px;\n    margin: 20px auto;\n    display: block;\n    vertical-align: middle; }\n\n@media (max-width: 1024px) {\n      #side-panel .pin {\n        display: inline-block;\n        margin: 5px 10px; } }\n\n#side-panel h1 {\n    padding: 15px 0;\n    font-weight: 400;\n    letter-spacing: 1px;\n    font-size: 18px; }\n\n#side-panel h1 span {\n      padding-top: 5px;\n      font-weight: 300;\n      font-size: 15px;\n      display: block; }\n\n#side-panel h3 {\n    font-weight: 400;\n    padding: 0 0 10px 0; }\n\n#side-panel article {\n    font-weight: 300;\n    letter-spacing: 0.5px;\n    line-height: 27px; }\n\n#side-panel .main-body {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    overflow-y: scroll;\n    -ms-overflow-style: none;\n    overflow: -moz-scrollbars-none; }\n\n#side-panel .main-body::-webkit-scrollbar {\n      width: 0 !important;\n      cursor: url(https://ssl.gstatic.com/ui/v1/icons/mail/images/2/openhand.cur), default !important; }\n\n#side-panel .main-body::-webkit-scrollbar:active {\n        cursor: url(https://ssl.gstatic.com/ui/v1/icons/mail/images/2/closedhand.cur), default !important; }\n\n#side-panel .tags, #side-panel .title {\n    margin-bottom: 80px;\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    z-index: 99999;\n    padding: 0 3%; }\n\n#side-panel .tags {\n    padding: 10px;\n    text-align: center;\n    top: 50%;\n    /* bottom: 0; */\n    left: auto;\n    margin: 0;\n    box-shadow: 0px 0px 81px -7px rgba(0, 0, 0, 0.75);\n    background-color: rgba(255, 255, 255, 0.9);\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%); }\n\n@media (max-width: 1024px) {\n      #side-panel .tags {\n        bottom: 0;\n        top: auto;\n        -webkit-transform: none;\n                transform: none;\n        left: 0;\n        right: 0; } }\n\n#side-panel .exit {\n    position: absolute;\n    right: 3%;\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n    cursor: pointer; }\n", ""]);

// exports


/***/ }),
/* 3 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		// Test for IE <= 9 as proposed by Browserhacks
		// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
		// Tests for existence of standard globals is to allow style-loader 
		// to operate correctly into non-standard environments
		// @see https://github.com/webpack-contrib/style-loader/issues/177
		return window && document && document.all && !window.atob;
	}),
	getElement = (function(fn) {
		var memo = {};
		return function(selector) {
			if (typeof memo[selector] === "undefined") {
				memo[selector] = fn.call(this, selector);
			}
			return memo[selector]
		};
	})(function (styleTarget) {
		return document.querySelector(styleTarget)
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [],
	fixUrls = __webpack_require__(5);

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (typeof options.insertInto === "undefined") options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var styleTarget = getElement(options.insertInto)
	if (!styleTarget) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			styleTarget.insertBefore(styleElement, styleTarget.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			styleTarget.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			styleTarget.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		styleTarget.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	options.attrs.type = "text/css";

	attachTagAttrs(styleElement, options.attrs);
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	attachTagAttrs(linkElement, options.attrs);
	insertStyleElement(options, linkElement);
	return linkElement;
}

function attachTagAttrs(element, attrs) {
	Object.keys(attrs).forEach(function (key) {
		element.setAttribute(key, attrs[key]);
	});
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement, options);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/* If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
	and there is no publicPath defined then lets turn convertToAbsoluteUrls
	on by default.  Otherwise default to the convertToAbsoluteUrls option
	directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls){
		css = fixUrls(css);
	}

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 5 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0);
module.exports = __webpack_require__(1);


/***/ })
/******/ ]);