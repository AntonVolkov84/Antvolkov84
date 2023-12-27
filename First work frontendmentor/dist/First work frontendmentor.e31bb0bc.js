// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"index.js":[function(require,module,exports) {
function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure " + obj); }
// data because of NO server
var data = {
  "currentUser": {
    "image": {
      "png": "./images/avatars/image-juliusomo.png",
      "webp": "./images/avatars/image-juliusomo.webp"
    },
    "username": "juliusomo"
  },
  "comments": [{
    "id": 1,
    "content": "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
    "createdAt": "1 month ago",
    "score": 12,
    "user": {
      "image": {
        "png": "./images/avatars/image-amyrobson.png",
        "webp": "./images/avatars/image-amyrobson.webp"
      },
      "username": "amyrobson"
    },
    "replies": []
  }, {
    "id": 2,
    "content": "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
    "createdAt": "2 weeks ago",
    "score": 5,
    "user": {
      "image": {
        "png": "./images/avatars/image-maxblagun.png",
        "webp": "./images/avatars/image-maxblagun.webp"
      },
      "username": "maxblagun"
    },
    "replies": [{
      "id": 3,
      "content": "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
      "createdAt": "1 week ago",
      "score": 4,
      "replyingTo": "maxblagun",
      "user": {
        "image": {
          "png": "./images/avatars/image-ramsesmiron.png",
          "webp": "./images/avatars/image-ramsesmiron.webp"
        },
        "username": "ramsesmiron"
      }
    }, {
      "id": 4,
      "content": "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
      "createdAt": "2 days ago",
      "score": 2,
      "replyingTo": "ramsesmiron",
      "user": {
        "image": {
          "png": "./images/avatars/image-juliusomo.png",
          "webp": "./images/avatars/image-juliusomo.webp"
        },
        "username": "juliusomo"
      }
    }]
  }]
};
var comments = data.comments;
_objectDestructuringEmpty(data);
console.log(data);
comments.forEach(function (element) {
  return createReplyElement(element);
});
// function fn1(element){

// console.log(element);
// console.log(element.user.image.png);
// console.log(element.user.username);
// console.log(element.score);
// console.log(element.content);
// }

// Body of js 
var blockComment = document.querySelector('.comment');
var blockReply = document.querySelector('.reply');
var replyInput = document.querySelector('.reply__form__input');
var replySubmit = document.getElementById('form');
var clickReplyForReply = document.querySelector('.replyto__comment__body__title__reply__all');
var clickReply = document.querySelector('.comment__body__title__reply__all');
console.log(blockComment);
clickReply.addEventListener('click', enableReply);
replySubmit.addEventListener('submit', createReplyEvent);
clickReplyForReply.addEventListener('click', enableReply);
function disebleReply() {
  blockReply.classList.remove('activeflex');
}
function enableReply() {
  blockReply.classList.add('activeflex');
  clickReply.removeEventListener('click', enableReply);
}
function createReplyElement(element) {
  blockComment.insertAdjacentHTML('afterend', "\n\t\t<div class=\"replyto\">\n\t      \t<div class=\"replyto__vl\">\n\t      \t</div>\n\t      \t<div class=\"replyto__comment\">\n\t\t        <div class=\"replyto__comment__points\">\n\t\t\t        <img class=\"replyto__comment__points__img\" src=\"images/icon-plus.svg\" alt=\"minus\"></img>\n\t\t\t        <span class=\"replyto__comment__points__point\">".concat(element.score, "</span>\n\t\t\t        <img class='replyto__comment__points__img' src='images/icon-minus.svg' alt=\"minus\"></img>\n\t\t    \t</div>\n\t        \t<div class=\"replyto__comment__body\">\n\t          \t\t<div class=\"replyto__comment__body__title\">\n\t\t\t            <img class=\"replyto__comment__body__title__img\" src=\"").concat(element.user.image.png, "\" alt=\"amy\">\n\t\t\t            <span class=\"replyto__comment__body__title__name\">").concat(element.user.username, "</span>\n\t\t\t            <span class=\"replyto__comment__body__title__time\">").concat(element.createdAt, "</span>\n\t\t\t            <div class=\"replyto__comment__body__title__reply__all\">\n\t\t\t\t            <img src=\"images/icon-reply.svg\" alt=\"reply\">\n\t\t\t\t            <span class=\"replyto__comment__body__title__reply\">Reply</span>\n\t            \t\t</div>  \n\t          \t\t</div>\n\t          \t\t<p class=\"replyto__comment__body__text\">").concat(element.content, "</p>\n\t        \t</div>\n\t      \t</div> \n    \t</div> \n\t\t"));
  disebleReply();
}
function createReplyEvent(event) {
  event.preventDefault();
  blockComment.insertAdjacentHTML('afterend', "\n\t\t<div class=\"replyto\">\n\t      \t<div class=\"replyto__vl\">\n\t      \t</div>\n\t      \t<div class=\"replyto__comment\">\n\t\t        <div class=\"replyto__comment__points\">\n\t\t\t        <img class=\"replyto__comment__points__img\" src=\"images/icon-plus.svg\" alt=\"minus\"></img>\n\t\t\t        <span class=\"replyto__comment__points__point\">0</span>\n\t\t\t        <img class='replyto__comment__points__img' src='images/icon-minus.svg' alt=\"minus\"></img>\n\t\t    \t</div>\n\t        \t<div class=\"replyto__comment__body\">\n\t          \t\t<div class=\"replyto__comment__body__title\">\n\t\t\t            <img class=\"replyto__comment__body__title__img\" src=\"".concat(data.currentUser.png, "\" alt=\"amy\">\n\t\t\t            <span class=\"replyto__comment__body__title__name\">").concat(data.currentUser.username, "</span>\n\t\t\t            <span class=\"replyto__comment__body__title__time\">Now</span>\n\t\t\t            <div class=\"replyto__comment__body__title__reply__all\">\n\t\t\t\t            <img src=\"images/icon-reply.svg\" alt=\"reply\">\n\t\t\t\t            <span class=\"replyto__comment__body__title__reply\">Reply</span>\n\t            \t\t</div>  \n\t          \t\t</div>\n\t          \t\t<p class=\"replyto__comment__body__text\">").concat(replyInput.value, "</p>\n\t        \t</div>\n\t      \t</div> \n    \t</div> \n\t\t"));
  disebleReply();
}
;
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50024" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/First%20work%20frontendmentor.e31bb0bc.js.map