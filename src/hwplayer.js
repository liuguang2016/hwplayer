!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define([], t)
    : "object" == typeof exports
    ? (exports.testplayer = t())
    : (e.testplayer = t());
})(window, function () {
  return (function (e) {
    function t(t) {
      for (var n, i, o = t[0], a = t[1], s = 0, l = []; s < o.length; s++)
        (i = o[s]), r[i] && l.push(r[i][0]), (r[i] = 0);
      for (n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
      for (u && u(t); l.length; ) l.shift()();
    }
    var n = {},
      r = { 1: 0 };
    function i(t) {
      if (n[t]) return n[t].exports;
      var r = (n[t] = { i: t, l: !1, exports: {} });
      return e[t].call(r.exports, r, r.exports, i), (r.l = !0), r.exports;
    }
    (i.e = function (e) {
      var t = [],
        n = r[e];
      if (0 !== n)
        if (n) t.push(n[2]);
        else {
          var o = new Promise(function (t, i) {
            n = r[e] = [t, i];
          });
          t.push((n[2] = o));
          var a,
            s = document.getElementsByTagName("head")[0],
            u = document.createElement("script");
          (u.charset = "utf-8"),
            (u.timeout = 120),
            i.nc && u.setAttribute("nonce", i.nc),
            (u.src = (function (e) {
              return i.p + "" + ({}[e] || e) + ".bundle.js";
            })(e)),
            (a = function (t) {
              (u.onerror = u.onload = null), clearTimeout(l);
              var n = r[e];
              if (0 !== n) {
                if (n) {
                  var i = t && ("load" === t.type ? "missing" : t.type),
                    o = t && t.target && t.target.src,
                    a = new Error(
                      "Loading chunk " + e + " failed.\n(" + i + ": " + o + ")"
                    );
                  (a.type = i), (a.request = o), n[1](a);
                }
                r[e] = undefined;
              }
            });
          var l = setTimeout(function () {
            a({ type: "timeout", target: u });
          }, 12e4);
          (u.onerror = u.onload = a), s.appendChild(u);
        }
      return Promise.all(t);
    }),
      (i.m = e),
      (i.c = n),
      (i.d = function (e, t, n) {
        i.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
      }),
      (i.r = function (e) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      }),
      (i.t = function (e, t) {
        if ((1 & t && (e = i(e)), 8 & t)) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (
          (i.r(n),
          Object.defineProperty(n, "default", { enumerable: !0, value: e }),
          2 & t && "string" != typeof e)
        )
          for (var r in e)
            i.d(
              n,
              r,
              function (t) {
                return e[t];
              }.bind(null, r)
            );
        return n;
      }),
      (i.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e["default"];
              }
            : function () {
                return e;
              };
        return i.d(t, "a", t), t;
      }),
      (i.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (i.p = "https://media-cache.huaweicloud.com/video/hwplayer/1.3.0/dist/"),
      (i.oe = function (e) {
        throw (console.error(e), e);
      });
    var o = (window.webpackJsonptestplayer =
        window.webpackJsonptestplayer || []),
      a = o.push.bind(o);
    (o.push = t), (o = o.slice());
    for (var s = 0; s < o.length; s++) t(o[s]);
    var u = a;
    return i((i.s = 3));
  })([
    function (e, t, n) {
      "use strict";
      var r = {
        utf8: {
          stringToBytes: function (e) {
            return r.bin.stringToBytes(unescape(encodeURIComponent(e)));
          },
          bytesToString: function (e) {
            return decodeURIComponent(escape(r.bin.bytesToString(e)));
          },
        },
        bin: {
          stringToBytes: function (e) {
            for (var t = [], n = 0; n < e.length; n++)
              t.push(255 & e.charCodeAt(n));
            return t;
          },
          bytesToString: function (e) {
            for (var t = [], n = 0; n < e.length; n++)
              t.push(String.fromCharCode(e[n]));
            return t.join("");
          },
        },
      };
      e.exports = r;
    },
    function (e, t, n) {
      "use strict";
      var r,
        i =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              };
      r = (function () {
        return this;
      })();
      try {
        r = r || Function("return this")() || (0, eval)("this");
      } catch (o) {
        "object" === ("undefined" == typeof window ? "undefined" : i(window)) &&
          (r = window);
      }
      e.exports = r;
    },
    function (e, t, n) {
      "use strict";
      e.exports = function (e) {
        return (
          e.webpackPolyfill ||
            ((e.deprecate = function () {}),
            (e.paths = []),
            e.children || (e.children = []),
            Object.defineProperty(e, "loaded", {
              enumerable: !0,
              get: function () {
                return e.l;
              },
            }),
            Object.defineProperty(e, "id", {
              enumerable: !0,
              get: function () {
                return e.i;
              },
            }),
            (e.webpackPolyfill = 1)),
          e
        );
      };
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r,
        i,
        o = void 0,
        a =
          (function (e) {
            var t = new RegExp("(^|&)" + e + "=([^&]*)(&|$)"),
              n = window.location.search.substr(1).match(t);
            return null != n ? unescape(n[2]) : null;
          })("hwplayerLibPath") ||
          b("hwplayerLibPath") ||
          "https://media-cache.huaweicloud.com/video/hwplayer/1.3.0/lib/",
        s = {},
        u = {},
        l = function () {
          (u = {
            switcher: a + "plugins/js/videojs-resolution-switcher.js",
            thumbnails: a + "plugins/js/videojs.thumbnails.js",
            flvjs: a + "flv-1.4.2.min.js",
            dashjs: a + "dash-2.9.2.all.min.js",
            flvjsPlugin: a + "plugins/js/videojs-flv-0.2.0.min.js",
            dashjsPlugin: a + "plugins/js/videojs-dash-2.9.1.min.js",
          }),
            (i =
              "new" === h
                ? !1 !== c
                  ? !1 !== d
                    ? 7
                    : 5
                  : !1 !== d
                  ? 5
                  : 3
                : 2);
        },
        c = (b("flvjs") && "false" !== b("flvjs")) || !1,
        d = (b("dashjs") && "false" !== b("dashjs")) || !1,
        f = document.getElementsByTagName("head").item(0),
        p = {
          isIeAndIeVersion: function () {
            if (window.ActiveXObject || "ActiveXObject" in window) {
              var e,
                t = new RegExp("MSIE (\\d+\\.\\d+);"),
                n = navigator.userAgent;
              return (
                t.test(n),
                (e = parseFloat(RegExp.$1)),
                isNaN(e) && (e = window.XMLHttpRequest ? 11 : 6),
                e
              );
            }
            return !1;
          },
          getVideojsType: function () {
            return !1 === p.isIeAndIeVersion() ? "new" : "old";
          },
          getVideojsUrl: function () {
            return "new" === p.getVideojsType()
              ? a + "video-js-7.5.4/video.js"
              : a + "video-js-5.20.5/video.min.js";
          },
          getVideojsCssUrl: function () {
            return "new" === p.getVideojsType()
              ? a + "video-js-7.5.4/video-js.css"
              : a + "video-js-5.20.5/video-js.css";
          },
          getSwfUrl: function () {
            return a + "player.swf";
          },
          loadCss: function (e) {
            var t = document.createElement("link");
            return (
              (t.type = "text/css"),
              (t.rel = "stylesheet"),
              (t.href = e),
              f.appendChild(t),
              t
            );
          },
          loadScript: function (e, t, n) {
            return (
              (t.type = "text/javascript"),
              (t.src = n),
              (t.charset = "utf-8"),
              t.setAttribute("data-hwplayerId", e),
              f.appendChild(t),
              t
            );
          },
          getScript: function (e) {
            var t = document.querySelector("script[data-hwplayerId=" + e + "]");
            return (
              !!t && {
                script: t,
                loaded: "true" === t.getAttribute("data-hwplayerLoaded"),
              }
            );
          },
          deleteScript: function (e) {
            var t = document.querySelector("script[data-hwplayerId=" + e + "]");
            return t
              ? (t.parentNode.removeChild(t),
                (t.onload = null),
                (t.onreadystatechange = null),
                !0)
              : (console.warn(
                  "HWPLAYER: warn: script[data-hwplayerId=" + e + "]涓嶅瓨鍦�"
                ),
                !1);
          },
          scriptLoadedCallback: function (e, t) {
            (t =
              "function" == typeof t
                ? t
                : function () {
                    console.warn(
                      "HWPLAYER: warn: 鎮ㄦ病鏈夎缃洖璋冨嚱鏁版垨鑰呭洖璋冨嚱鏁拌缃敊璇�"
                    );
                  }),
              e.readyState
                ? "complete" === e.readyState
                  ? ((e.onreadystatechange = null), t())
                  : (e.onreadystatechange = function () {
                      ("loaded" != e.readyState &&
                        "complete" != e.readyState) ||
                        ((e.onreadystatechange = null), t());
                    })
                : (e.onload = function () {
                    t();
                  });
          },
          hwplayerInit: function () {
            var e,
              t = window.define;
            return (
              t && "function" == typeof t && t.amd
                ? ((o = window.hwplayerloaded = p.amdHwplayerloaded),
                  (e = "amd"))
                : ((o = window.hwplayerloaded = p.hwplayerloaded), (e = "tag")),
              e
            );
          },
          amdHwplayerloaded: function (e) {
            var t = void 0,
              n = void 0;
            "function" == typeof e
              ? (t = e)
              : null != e &&
                ((t = e.success),
                (c = !!e.flv),
                (d = !!e.dash),
                (n = e.plugins),
                e.libPath && (a = e.libPath)),
              p.loadCss(p.getVideojsCssUrl()),
              p.loadCss(a + "plugins/css/videojs-allPlugins.css"),
              l(),
              (t =
                "function" == typeof t
                  ? t
                  : function () {
                      console.warn(
                        "HWPLAYER: warn: 鎮ㄦ病鏈夎缃洖璋冨嚱鏁版垨鑰呭洖璋冨嚱鏁拌缃敊璇�"
                      );
                    }),
              m && (s = { timestamp: new Date().getTime() });
            var r = window.require,
              i = [p.getVideojsUrl()];
            r(i, function (e, i) {
              var o = p.getVideojsType(),
                a = [u.switcher, u.thumbnails],
                s = [];
              "new" === o &&
                !1 !== c &&
                (a.push(u.flvjsPlugin), s.push(u.flvjs)),
                "new" === o &&
                  !1 !== d &&
                  (a.push(u.dashjsPlugin), s.push(u.dashjs)),
                (window.videojs = e),
                void 0 !== i && (window.flvjs = i),
                r(s, function () {
                  r(a, function () {
                    v(n).then(function () {
                      t();
                    });
                  });
                });
            });
          },
          hwplayerloaded: function (e) {
            var t = void 0,
              n = void 0;
            "function" == typeof e
              ? (t = e)
              : null != e &&
                ((t = e.success),
                (c = !!e.flv),
                (d = !!e.dash),
                (n = e.plugins),
                e.libPath && (a = e.libPath)),
              p.loadCss(p.getVideojsCssUrl()),
              p.loadCss(a + "plugins/css/videojs-allPlugins.css"),
              l(),
              (t =
                "function" == typeof t
                  ? t
                  : function () {
                      console.warn(
                        "HWPLAYER: warn: 鎮ㄦ病鏈夎缃洖璋冨嚱鏁版垨鑰呭洖璋冨嚱鏁拌缃敊璇�"
                      );
                    }),
              m && (s = { timestamp: new Date().getTime() }),
              p.hwplayerLoad("videojs", p.getVideojsUrl(), function () {
                v(n).then(function () {
                  var e = !0;
                  p.hwplayerLoad("switcher", u.switcher, function () {
                    e && g === i && t(), g === i && (e = !1);
                  }),
                    p.hwplayerLoad("thumbnails", u.thumbnails, function () {
                      e && g === i && t(), g === i && (e = !1);
                    }),
                    "new" === h &&
                      !1 !== c &&
                      p.hwplayerLoad("flvjs", u.flvjs, function () {
                        p.hwplayerLoad(
                          "flvjsPlugin",
                          u.flvjsPlugin,
                          function () {
                            e && g === i && t(), g === i && (e = !1);
                          }
                        );
                      }),
                    "new" === h &&
                      !1 !== d &&
                      p.hwplayerLoad("dashjs", u.dashjs, function () {
                        p.hwplayerLoad(
                          "dashjsPlugin",
                          u.dashjsPlugin,
                          function () {
                            e && g === i && t(), g === i && (e = !1);
                          }
                        );
                      });
                });
              });
          },
          hwplayerLoad: function (e, t, n) {
            var r = p.getScript(e),
              i = p.scriptLoadedCallback;
            r && !0 === r.loaded
              ? n()
              : (r && p.deleteScript(e),
                i((r = document.createElement("script")), function () {
                  g++, r.setAttribute("data-hwplayerLoaded", "true"), n();
                }),
                p.loadScript(e, r, t));
          },
          addHlsFlashSource: function () {
            var e = videojs.getTech("Flash").sourceHandlers;
            for (var t in e)
              if (
                e.hasOwnProperty(t) &&
                e[t].supportType &&
                "M3U8" === e[t].supportType
              )
                return;
            var n = {},
              r = /^(audio|video|application)\/(x-|vnd\.apple\.)?mpegurl/i;
            (n.canPlayType = function (e) {
              return r.test(e) ? "maybe" : "";
            }),
              (n.canHandleSource = function (e, t) {
                return "maybe" === n.canPlayType(e.type);
              }),
              (n.handleSource = function (e, t, n) {
                t.setSrc(e.src);
              }),
              (n.dispose = function () {}),
              videojs.getTech("Flash").registerSourceHandler(n, 0),
              (n.VERSION = "__VERSION__"),
              (n.supportType = "M3U8"),
              (videojs.options.flash.swf = p.getSwfUrl());
          },
        },
        h = p.getVideojsType(),
        g = 0,
        m = n(4),
        y = {
          "Now Playing": "姝ｅ湪鎾斁",
          "Up Next": "涓嬩竴涓�",
          Play: "鎾斁",
          Pause: "鏆傚仠",
          "Current Time": "褰撳墠鏃堕棿",
          Duration: "鏃堕暱",
          "Remaining Time": "鍓╀綑鏃堕棿",
          "Stream Type": "濯掍綋娴佺被鍨�",
          LIVE: "鐩存挱",
          Loaded: "鍔犺浇瀹屾瘯",
          Progress: "杩涘害",
          Fullscreen: "鍏ㄥ睆",
          "Non-Fullscreen": "閫€鍑哄叏灞�",
          Mute: "闈欓煶",
          Unmute: "鍙栨秷闈欓煶",
          "Playback Rate": "鎾斁閫熷害",
          Subtitles: "瀛楀箷",
          "subtitles off": "鍏抽棴瀛楀箷",
          Captions: "鍐呭祵瀛楀箷",
          "captions off": "鍏抽棴鍐呭祵瀛楀箷",
          Chapters: "鑺傜洰娈佃惤",
          "Close Modal Dialog": "鍏抽棴寮圭獥",
          Descriptions: "鎻忚堪",
          "descriptions off": "鍏抽棴鎻忚堪",
          "Audio Track": "闊宠建",
          "You aborted the media playback": "瑙嗛鎾斁琚粓姝�",
          "A network error caused the media download to fail part-way.":
            "缃戠粶閿欒瀵艰嚧瑙嗛涓嬭浇涓€斿け璐ャ€�",
          "The media could not be loaded, either because the server or network failed or because the format is not supported.":
            "瑙嗛鍥犳牸寮忎笉鏀寔鎴栬€呮湇鍔″櫒鎴栫綉缁滅殑闂鏃犳硶鍔犺浇銆�",
          "The media playback was aborted due to a corruption problem or because the media used features your browser did not support.":
            "鐢变簬瑙嗛鏂囦欢鎹熷潖鎴栨槸璇ヨ棰戜娇鐢ㄤ簡浣犵殑娴忚鍣ㄤ笉鏀寔鐨勫姛鑳斤紝鎾斁缁堟銆�",
          "No compatible source was found for this media.":
            "鏃犳硶鎵惧埌姝よ棰戝吋瀹圭殑婧愩€�",
          "The media is encrypted and we do not have the keys to decrypt it.":
            "瑙嗛宸插姞瀵嗭紝鏃犳硶瑙ｅ瘑銆�",
          "Play Video": "鎾斁瑙嗛",
          Close: "鍏抽棴",
          "Modal Window": "寮圭獥",
          "This is a modal window": "杩欐槸涓€涓脊绐�",
          "This modal can be closed by pressing the Escape key or activating the close button.":
            "鍙互鎸塃SC鎸夐敭鎴栧惎鐢ㄥ叧闂寜閽潵鍏抽棴姝ゅ脊绐椼€�",
          ", opens captions settings dialog": ", 寮€鍚爣棰樿缃脊绐�",
          ", opens subtitles settings dialog": ", 寮€鍚瓧骞曡缃脊绐�",
          ", opens descriptions settings dialog": ", 寮€鍚弿杩拌缃脊绐�",
          ", selected": ", 閫夋嫨",
          "captions settings": "瀛楀箷璁惧畾",
          "Audio Player": "闊抽鎾斁鍣�",
          "Video Player": "瑙嗛鎾斁鍣�",
          Replay: "閲嶆挱",
          "Progress Bar": "杩涘害灏忚妭",
          "Volume Level": "闊抽噺",
          "subtitles settings": "瀛楀箷璁惧畾",
          "descriptions settings": "鎻忚堪璁惧畾",
          Text: "鏂囧瓧",
          White: "鐧�",
          Black: "榛�",
          Red: "绾�",
          Green: "缁�",
          Blue: "钃�",
          Yellow: "榛�",
          Magenta: "绱孩",
          Cyan: "闈�",
          Background: "鑳屾櫙",
          Window: "瑙嗙獥",
          Transparent: "閫忔槑",
          "Semi-Transparent": "鍗婇€忔槑",
          Opaque: "涓嶉€忔槑",
          "Font Size": "瀛椾綋灏哄",
          "Text Edge Style": "瀛椾綋杈圭紭鏍峰紡",
          None: "鏃�",
          Raised: "娴洉",
          Depressed: "鍘嬩綆",
          Uniform: "鍧囧寑",
          Dropshadow: "涓嬮槾褰�",
          "Font Family": "瀛椾綋搴�",
          "Proportional Sans-Serif": "姣斾緥鏃犵粏浣�",
          "Monospace Sans-Serif": "鍗曢棿闅旀棤缁嗕綋",
          "Proportional Serif": "姣斾緥缁嗕綋",
          "Monospace Serif": "鍗曢棿闅旂粏浣�",
          Casual: "鑸掗€�",
          Script: "鎵嬪啓浣�",
          "Small Caps": "灏忓瀷澶у啓瀛椾綋",
          Reset: "閲嶅惎",
          "restore all settings to the default values":
            "鎭㈠鍏ㄩ儴璁惧畾鑷抽璁惧€�",
          Done: "瀹屾垚",
          "Caption Settings Dialog": "瀛楀箷璁惧畾瑙嗙獥",
          "Beginning of dialog window. Escape will cancel and close the window.":
            "寮€濮嬪璇濊绐椼€傜寮€浼氬彇娑堝強鍏抽棴瑙嗙獥",
          "End of dialog window.": "缁撴潫瀵硅瘽瑙嗙獥",
          Quality: "娓呮櫚搴�",
        };
      p.hwplayerInit();
      var v = function (e) {
        var t = Promise.resolve();
        if (null == e) return t;
        var r = void 0,
          i = void 0,
          o = void 0;
        return (
          e.danmaku &&
            (r = Promise.all([n.e(7), n.e(2)])
              .then(n.t.bind(null, 10, 7))
              .then(function (e) {
                (0, e.addDanmuPlugin)(videojs);
              })),
          e.playlist &&
            (i = Promise.all([n.e(0), n.e(3)])
              .then(n.t.bind(null, 11, 7))
              .then(function (e) {
                return (
                  videojs.registerPlugin("playlist", e["default"]),
                  Promise.all([n.e(0), n.e(6), n.e(4)])
                    .then(n.t.bind(null, 12, 7))
                    .then(function (e) {
                      var t = e.playlistUi;
                      videojs.registerPlugin("hwplaylist", t);
                    })
                );
              })),
          e.preview &&
            (o = n
              .e(5)
              .then(n.t.bind(null, 13, 7))
              .then(function (e) {
                var t = e.preview;
                videojs.registerPlugin("preview", t);
              })),
          Promise.all([r, i, o])
        );
      };
      function b(e) {
        var t = document.getElementsByTagName("script");
        return (t[t.length - 1].src.match(
          new RegExp("(?:\\?|&)" + e + "=(.*?)(?=&|$)")
        ) || ["", null])[1];
      }
      (r = window.HWPlayer = function (e, t, n) {
        t = t || {};
        var r = videojs.mergeOptions(
          {
            preload: "auto",
            controls: !0,
            stat: !1,
            isLive: !1,
            controlBar: {
              fullscreenToggle: !0,
              volumePanel: { inline: !1, vertical: !0 },
            },
            playbackRates: [0.5, 1, 1.5, 2],
            language: "zh-CN",
            html5: { hlsjsConfig: {} },
            flvjs: { mediaDataSource: {} },
            plugins: {
              videoJsResolutionSwitcher: { default: "high", dynamicLabel: !0 },
            },
          },
          t
        );
        "old" === p.getVideojsType() && p.addHlsFlashSource(),
          videojs.addLanguage("zh-CN", y);
        var i = videojs(e, r, function () {
          n && n.apply(this);
        });
        (i.getDomainId = function () {
          return i.options_.domainId;
        }),
          (i.getUserId = function () {
            return i.options_.userId;
          }),
          (i.loadSubtitles = function (e) {
            var t = new videojs.TextTrack({
              tech: i,
              kind: "subtitles",
              src: e,
              mode: "showing",
              label: "鎵撳紑瀛楀箷",
              default: !0,
            });
            t.on("loadeddata", function () {
              i.textTracks().addTrack(t);
            });
          }),
          m && r.stat && (m.collectData("20", s), m.collectData("10", {}));
        try {
          r.stat && m.bindPlayer && m.bindPlayer(i, { elementId: e });
        } catch (o) {
          console.error(o);
        }
        return i;
      }),
        (t["default"] = { HWPlayer: r, hwplayerloaded: o });
    },
    function (e, t, n) {
      "use strict";
      (function (t) {
        var r = a(n(5)),
          i = a(n(6)),
          o = a(n(7));
        function a(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var s = {},
          u = (s.playingState = {}),
          l = "",
          c = !1,
          d = "1.0.1",
          f = null,
          p = [],
          h = {
            bindEvent: function (e, t, n, r) {
              r
                ? e.addEventListener
                  ? e.addEventListener(t, n)
                  : e.attachEvent("on" + t, n)
                : (e["on" + t] = n);
            },
            getOsInfo: function () {
              var e = navigator.userAgent.toLowerCase(),
                t = "Unknown",
                n = "Unknown";
              e.indexOf("win") > -1
                ? ((t = "Windows"),
                  (n =
                    e.indexOf("windows nt 5.0") > -1
                      ? "2000"
                      : e.indexOf("windows nt 5.1") > -1 ||
                        e.indexOf("windows nt 5.2") > -1
                      ? "XP"
                      : e.indexOf("windows nt 6.0") > -1
                      ? "Vista"
                      : e.indexOf("windows nt 6.1") > -1 ||
                        e.indexOf("windows 7") > -1
                      ? "7"
                      : e.indexOf("windows nt 6.2") > -1 ||
                        e.indexOf("windows 8") > -1
                      ? "8"
                      : e.indexOf("windows nt 6.3") > -1
                      ? "8.1"
                      : e.indexOf("windows nt 6.2") > -1 ||
                        e.indexOf("windows nt 10.0") > -1
                      ? "10"
                      : "Unknown"))
                : e.indexOf("iphone") > -1
                ? (t = "Iphone")
                : e.indexOf("mac") > -1
                ? (t = "Mac")
                : e.indexOf("x11") > -1 ||
                  e.indexOf("unix") > -1 ||
                  e.indexOf("sunname") > -1 ||
                  e.indexOf("bsd") > -1
                ? (t = "Unix")
                : e.indexOf("linux") > -1
                ? e.indexOf("android") > -1
                  ? ((t = "Android"),
                    (n =
                      e.indexOf("Android 4") > -1
                        ? "4"
                        : e.indexOf("Android 5") > -1
                        ? "5"
                        : e.indexOf("Android 6") > -1
                        ? "6"
                        : e.indexOf("Android 7") > -1
                        ? "7"
                        : e.indexOf("Android 8") > -1
                        ? "8"
                        : e.indexOf("Android 9") > -1
                        ? "9"
                        : e.indexOf("Android 10") > -1
                        ? "10"
                        : "Unknown"))
                  : (t = "Linux")
                : (t = "Unknown");
              var r = new Object();
              return (r.name = t), (r.version = n), r;
            },
            getNetworkType: function () {
              if (navigator.connection)
                switch (navigator.connection.effectiveType) {
                  case "2G":
                    return 1;
                  case "3G":
                  case "4G":
                    return 2;
                  case "5G":
                    return 4;
                  case "wifi":
                  case "WIFI":
                    return 5;
                  default:
                    return 6;
                }
              return 6;
            },
            getVideoType: function (e) {
              return e.duration() ? 0 : 1;
            },
            getBrowerInfo: function () {
              var e =
                e ||
                (function (e) {
                  var t = e.document,
                    n = e.navigator.userAgent.toLowerCase(),
                    r = t.documentMode,
                    i = e.chrome || !1,
                    o = {
                      agent: n,
                      isIE: /trident/.test(n),
                      isGecko:
                        n.indexOf("gecko") > 0 && n.indexOf("like gecko") < 0,
                      isWebkit: n.indexOf("webkit") > 0,
                      isStrict: "CSS1Compat" === t.compatMode,
                      supportSubTitle: function () {
                        return "track" in t.createElement("track");
                      },
                      ieVersion: function () {
                        var t = e.navigator.userAgent.toLowerCase(),
                          n = /(msie\s|trident.*rv:)([\w.]+)/.exec(t);
                        try {
                          return n[2];
                        } catch (i) {
                          return r;
                        }
                      },
                      operaVersion: function () {
                        try {
                          if (e.opera) return n.match(/opera.([\d.]+)/)[1];
                          if (n.indexOf("opr") > 0)
                            return n.match(/opr\/([\d.]+)/)[1];
                        } catch (t) {
                          return 0;
                        }
                      },
                    };
                  try {
                    (o.type = o.isIE
                      ? "IE"
                      : e.opera || n.indexOf("opr") > 0
                      ? "Opera"
                      : n.indexOf("chrome") > 0
                      ? "Chrome"
                      : e.openDatabase
                      ? "Safari"
                      : n.indexOf("firefox") > 0
                      ? "Firefox"
                      : "unknow"),
                      (o.version =
                        "IE" === o.type
                          ? o.ieVersion()
                          : "Firefox" === o.type
                          ? n.match(/firefox\/([\d.]+)/)[1]
                          : "Chrome" === o.type
                          ? n.match(/chrome\/([\d.]+)/)[1]
                          : "Opera" === o.type
                          ? o.operaVersion()
                          : "Safari" === o.type
                          ? n.match(/version\/([\d.]+)/)[1]
                          : "0"),
                      (o.shell = function () {
                        if (n.indexOf("edge") > 0)
                          return (
                            (o.version =
                              n.match(/edge\/([\d.]+)/)[1] || o.version),
                            "edge娴忚鍣�"
                          );
                        if (n.indexOf("maxthon") > 0)
                          return (
                            (o.version =
                              n.match(/maxthon\/([\d.]+)/)[1] || o.version),
                            "鍌叉父娴忚鍣�"
                          );
                        if (n.indexOf("qqbrowser") > 0)
                          return (
                            (o.version =
                              n.match(/qqbrowser\/([\d.]+)/)[1] || o.version),
                            "QQ娴忚鍣�"
                          );
                        if (n.indexOf("se 2.x") > 0) return "鎼滅嫍娴忚鍣�";
                        if (i && "Opera" !== o.type) {
                          var t = e.external,
                            r = e.clientInformation.languages;
                          if (t && "LiebaoGetVersion" in t)
                            return "鐚庤惫娴忚鍣�";
                          if (n.indexOf("bidubrowser") > 0)
                            return (
                              (o.version =
                                n.match(/bidubrowser\/([\d.]+)/)[1] ||
                                n.match(/chrome\/([\d.]+)/)[1]),
                              "鐧惧害娴忚鍣�"
                            );
                          if (o.supportSubTitle() && void 0 === r) {
                            var a = Object.keys(i.webstore).length;
                            return a > 1
                              ? "360鏋侀€熸祻瑙堝櫒"
                              : "360瀹夊叏娴忚鍣�";
                          }
                          return "Chrome";
                        }
                        return o.type;
                      }),
                      (o.name = o.shell());
                  } catch (a) {}
                  return { client: o };
                })(window);
              return (
                e.client.name == undefined || "" == e.client.name
                  ? ((e.client.name = "Unknown"),
                    (e.client.version = "Unknown"))
                  : e.client.version == undefined &&
                    (e.client.version = "Unknown"),
                e
              );
            },
            zipData: function (e) {
              return r["default"].gzip(e);
            },
            generateUUID: function () {
              if (l) return l;
              var e = new Date().getTime(),
                t = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
                  /[xy]/g,
                  function (t) {
                    var n = (e + 16 * Math.random()) % 16 | 0;
                    return (
                      (e = Math.floor(e / 16)),
                      ("x" == t ? n : (7 & n) | 8).toString(16)
                    );
                  }
                );
              return (l = t);
            },
            base64Polyfill: function () {
              var e = t || window,
                n =
                  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
              function r(e) {
                this.message = e;
              }
              (r.prototype = new Error()),
                (r.prototype.name = "InvalidCharacterError"),
                e.btoa ||
                  (e.btoa = function (e) {
                    for (
                      var t, i, o = String(e), a = "", s = 0, u = n;
                      o.charAt(0 | s) || ((u = "="), s % 1);
                      a += u.charAt(63 & (t >> (8 - (s % 1) * 8)))
                    ) {
                      if ((i = o.charCodeAt((s += 0.75))) > 255)
                        throw new r(
                          '"btoa" failed: The string to be encoded contains characters outside of the Latin1 range.'
                        );
                      t = (t << 8) | i;
                    }
                    return a;
                  }),
                e.atob ||
                  (e.atob = function (e) {
                    var t = String(e).replace(/[=]+$/, ""),
                      i = "";
                    if (t.length % 4 == 1)
                      throw new r(
                        '"atob" failed: The string to be decoded is not correctly encoded.'
                      );
                    for (
                      var o, a, s = 0, u = 0;
                      (a = t.charAt(u++));
                      ~a && ((o = s % 4 ? 64 * o + a : a), s++ % 4)
                        ? (i += String.fromCharCode(
                            255 & (o >> ((-2 * s) & 6))
                          ))
                        : 0
                    )
                      a = n.indexOf(a);
                    return i;
                  });
            },
            dateFormat: function (e, t) {
              var n = {
                "M+": e.getMonth() + 1,
                "d+": e.getDate(),
                "h+": e.getHours(),
                "m+": e.getMinutes(),
                "s+": e.getSeconds(),
                "q+": Math.floor((e.getMonth() + 3) / 3),
                S: e.getMilliseconds(),
              };
              for (var r in (/(y+)/.test(t) &&
                (t = t.replace(
                  RegExp.$1,
                  (e.getFullYear() + "").substr(4 - RegExp.$1.length)
                )),
              n))
                new RegExp("(" + r + ")").test(t) &&
                  (t = t.replace(
                    RegExp.$1,
                    1 == RegExp.$1.length
                      ? n[r]
                      : ("00" + n[r]).substr(("" + n[r]).length)
                  ));
              return t;
            },
          };
        function g() {
          return s;
        }
        function m(e) {
          p &&
            p.length > 0 &&
            null != f &&
            (p.forEach(function (e) {
              y(e);
            }),
            (p = [])),
            y(e);
        }
        function y(e) {
          var t = void 0,
            n = void 0;
          switch (f) {
            case !1:
              (t = "https://vdrp.hwcloudlive.com/api/v1/sdk/report"),
                (n = "vod");
              break;
            case !0:
              t = "https://lvrp.hwcloudlive.com/api/v1/sdk/report";
              break;
            default:
              return void p.push(e);
          }
          (t +=
            "?token=" +
            (0, o["default"])(
              "9fd56232aa91fdf98fb88ab97fcd9567-" +
                h.dateFormat(new Date(), "yyyy-MM-dd:hh")
            ) +
            "&type=player" +
            e.event_id),
            n && (t += "&service=" + n),
            i["default"].ajax({
              type: "post",
              url: t,
              data: JSON.stringify(e),
              success: function (e, t) {
                console.log("鏁版嵁涓婃姤鎴愬姛锛屽搷搴斿涓嬶細", e);
              },
              error: function (e, t) {
                console.warn("鏁版嵁涓婃姤寮傚父锛�", t);
              },
              dataType: "json",
            });
        }
        function v(e, t) {
          var n = t && t.timestamp ? t.timestamp : new Date().getTime();
          (s[e] = Object.assign(t || {}, {
            flow_id: h.generateUUID(),
            timestamp: n,
            event_id: e,
            deviceOS_type: "h5",
          })),
            m(s[e]);
        }
        function b(e) {
          var t = u[e];
          t
            ? t.length < 9 && u[e].push(new Date().getTime())
            : (u[e] = [new Date().getTime()]);
        }
        h.base64Polyfill(),
          (e.exports = {
            bindPlayer: function (e) {
              var t =
                  arguments.length > 1 && arguments[1] !== undefined
                    ? arguments[1]
                    : {},
                n = h.generateUUID(),
                r = !document
                  .getElementById(t.elementId)
                  .getAttribute("data-setup");
              (s[n] = ""),
                (e.getStatOptions = function () {
                  return { sessionId: n, stat: g() };
                }),
                (e.getStat = function () {
                  return g();
                }),
                r &&
                  (function (e) {
                    e.getStatOptions().sessionId;
                    var t = [],
                      n = [],
                      r = !1,
                      i = 0,
                      o = 0,
                      a = !1,
                      s = 0,
                      g = 0,
                      y = 0,
                      w = 0,
                      _ = 0,
                      x = 0,
                      k = 0,
                      T = 0,
                      S = function (r) {
                        if (x && 0 != x) {
                          y = -1;
                          var i = e.currentSources(),
                            a = "";
                          (a = btoa(i[0].src)),
                            v("35", {
                              up_time: T,
                              reason: r || 0,
                              cpu_model: "NULL",
                              player_version: d,
                              project_id: "hwplayer",
                              deviceOS_version: navigator.userAgent,
                              NetworkType: h.getNetworkType(),
                              network_operators: "NULL",
                              periodicTimes: w,
                              bufferTimesSum: g,
                              seekTimesSum: o,
                              seekDurationSum:
                                n &&
                                n.length &&
                                n.reduce(function (e, t) {
                                  return e + t;
                                }),
                              bufferDurationSum:
                                t &&
                                t.length &&
                                t.reduce(function (e, t) {
                                  return e + t;
                                }),
                              playtime: x,
                              domain_id: e.getDomainId() || "default",
                              user_id: e.getUserId() || "default",
                              url: a,
                            }),
                            e.clearInterval(j),
                            (j = null),
                            (x = 0);
                        } else p = [];
                      },
                      C = !1,
                      j = void Number(new Date());
                    e.on("ready", function () {}),
                      e.on("loadstart", function () {
                        if (((f = null), !C)) {
                          (y = 1), (C = !0);
                          var t = e.currentSources();
                          v("15", { url: btoa(t[0].src) }),
                            h.bindEvent(
                              window,
                              "beforeunload",
                              function () {
                                e && S(1);
                              },
                              !0
                            );
                        }
                      }),
                      e.on("loadeddata", function () {
                        y = 2;
                      }),
                      e.on("canplay", function () {}),
                      e.on("texttrackchange", function () {}),
                      e.on("pause", function () {
                        var t = e.seeking(),
                          n = e.ended();
                        c && (x += new Date().getTime() - _),
                          (c = !1),
                          (y = 4),
                          n ||
                            (t
                              ? r ||
                                (o++,
                                (r = !0),
                                (i = new Date().getTime()),
                                b("seek"))
                              : b("pause"));
                      }),
                      e.on("play", function () {
                        c ||
                          ((k = Date.now()),
                          v("5", {
                            cpu_model: "NULL",
                            player_version: d,
                            project_id: "hwplayer",
                            deviceOS_version: navigator.userAgent,
                            NetworkType: h.getNetworkType(),
                            network_operators: "NULL",
                            domain_id: e.getDomainId() || "default",
                            user_id: e.getUserId() || "default",
                          }),
                          b("play"));
                      }),
                      e.on("ratechange", function () {
                        b("playRate");
                      }),
                      e.on("dispose", function () {
                        e.clearInterval(j), (j = null);
                      }),
                      e.on("waiting", function () {
                        a ||
                          ((a = !0), (s = new Date().getTime()), g++, (y = 6));
                      }),
                      e.on("playing", function () {
                        if (
                          ((y = 3),
                          null == f && (f = e.duration() == Infinity),
                          !c)
                        ) {
                          r
                            ? ((r = !1), (n[o - 1] = new Date().getTime() - i))
                            : a &&
                              ((a = !1), (t[g - 1] = new Date().getTime() - s)),
                            (c = !0),
                            (_ = new Date().getTime());
                          var p = e.currentSources(),
                            b = "";
                          if (
                            ((b = btoa(p[0].src)),
                            v("25", {
                              up_time: (T = Date.now() - k),
                              url: b,
                              video_decode_mode: 0,
                              Bitrate: "NULL",
                              VGA: "NULL",
                              content_name: "NULL",
                              StreamType: h.getVideoType(e),
                              Duration: e.duration(),
                              VideoCodec: e.currentSource().type,
                              cpu_model: "NULL",
                              player_version: d,
                              project_id: "hwplayer",
                              deviceOS_version: navigator.userAgent,
                              NetworkType: h.getNetworkType(),
                              network_operators: "NULL",
                              domain_id: e.getDomainId() || "default",
                              user_id: e.getUserId() || "default",
                            }),
                            !j)
                          ) {
                            var x = function () {
                              m({
                                flow_id: l,
                                timestamp: new Date().getTime(),
                                event_id: 30,
                                CPULoad: -1,
                                mem_Load: -1,
                                FPS: -1,
                                PlayerStatus: y,
                                bufferTimes: g,
                                bufferDuration: t.join(","),
                                seekTimes: o,
                                seekDuration: n.join(","),
                                pause: u.pause && u.pause.join(","),
                                Play: u.play && u.play.join(","),
                                Seek: u.seek && u.seek.join(","),
                                PlayRate: u.playRate && u.playRate.join(","),
                                cpu_model: "NULL",
                                player_version: d,
                                project_id: "hwplayer",
                                deviceOS_type: "h5",
                                deviceOS_version: navigator.userAgent,
                                NetworkType: h.getNetworkType(),
                                network_operators: "NULL",
                                domain_id: e.getDomainId() || "default",
                                user_id: e.getUserId() || "default",
                              }),
                                w++;
                            };
                            x(),
                              (j = e.setInterval(function () {
                                x();
                              }, 6e4));
                          }
                        }
                      }),
                      e.on("suspend", function () {
                        y = 7;
                      }),
                      e.on("ended", function () {
                        S(0);
                      }),
                      e.on("abort", function () {
                        S(1);
                      }),
                      e.on("error", function () {
                        var t = e.error(),
                          n = void 0,
                          r = void 0;
                        if (t)
                          switch (t.code) {
                            case 1:
                              (n = "12"), (r = "10");
                              break;
                            case 2:
                              (n = "11"), (r = "11");
                              break;
                            case 3:
                            case 4:
                              (n = "10"), (r = "13");
                              break;
                            default:
                              (n = "12"), (r = "10");
                          }
                        S(1011 + n + "12" + r);
                      });
                  })(e);
            },
            collectData: v,
          });
      }.call(this, n(1)));
    },
    function (e, t, n) {
      "use strict";
      var r,
        i,
        o,
        a,
        s =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              };
      !(function (n) {
        "object" === s(t) && void 0 !== e
          ? (e.exports = n())
          : ((i = []),
            (o = "function" == typeof (r = n) ? r.apply(t, i) : r) ===
              undefined || (e.exports = o));
      })(function () {
        return (function () {
          return function e(t, n, r) {
            function i(s, u) {
              if (!n[s]) {
                if (!t[s]) {
                  if (!u && "function" == typeof a && a) return a(s, !0);
                  if (o) return o(s, !0);
                  var l = new Error("Cannot find module '" + s + "'");
                  throw ((l.code = "MODULE_NOT_FOUND"), l);
                }
                var c = (n[s] = { exports: {} });
                t[s][0].call(
                  c.exports,
                  function (e) {
                    return i(t[s][1][e] || e);
                  },
                  c,
                  c.exports,
                  e,
                  t,
                  n,
                  r
                );
              }
              return n[s].exports;
            }
            for (var o = "function" == typeof a && a, s = 0; s < r.length; s++)
              i(r[s]);
            return i;
          };
        })()(
          {
            1: [
              function (e, t, n) {
                var r =
                  "undefined" != typeof Uint8Array &&
                  "undefined" != typeof Uint16Array &&
                  "undefined" != typeof Int32Array;
                function i(e, t) {
                  return Object.prototype.hasOwnProperty.call(e, t);
                }
                (n.assign = function (e) {
                  for (
                    var t = Array.prototype.slice.call(arguments, 1);
                    t.length;

                  ) {
                    var n = t.shift();
                    if (n) {
                      if ("object" !== (void 0 === n ? "undefined" : s(n)))
                        throw new TypeError(n + "must be non-object");
                      for (var r in n) i(n, r) && (e[r] = n[r]);
                    }
                  }
                  return e;
                }),
                  (n.shrinkBuf = function (e, t) {
                    return e.length === t
                      ? e
                      : e.subarray
                      ? e.subarray(0, t)
                      : ((e.length = t), e);
                  });
                var o = {
                    arraySet: function (e, t, n, r, i) {
                      if (t.subarray && e.subarray)
                        e.set(t.subarray(n, n + r), i);
                      else for (var o = 0; o < r; o++) e[i + o] = t[n + o];
                    },
                    flattenChunks: function (e) {
                      var t, n, r, i, o, a;
                      for (r = 0, t = 0, n = e.length; t < n; t++)
                        r += e[t].length;
                      for (
                        a = new Uint8Array(r), i = 0, t = 0, n = e.length;
                        t < n;
                        t++
                      )
                        (o = e[t]), a.set(o, i), (i += o.length);
                      return a;
                    },
                  },
                  a = {
                    arraySet: function (e, t, n, r, i) {
                      for (var o = 0; o < r; o++) e[i + o] = t[n + o];
                    },
                    flattenChunks: function (e) {
                      return [].concat.apply([], e);
                    },
                  };
                (n.setTyped = function (e) {
                  e
                    ? ((n.Buf8 = Uint8Array),
                      (n.Buf16 = Uint16Array),
                      (n.Buf32 = Int32Array),
                      n.assign(n, o))
                    : ((n.Buf8 = Array),
                      (n.Buf16 = Array),
                      (n.Buf32 = Array),
                      n.assign(n, a));
                }),
                  n.setTyped(r);
              },
              {},
            ],
            2: [
              function (e, t, n) {
                var r = e("./common"),
                  i = !0,
                  o = !0;
                try {
                  String.fromCharCode.apply(null, [0]);
                } catch (l) {
                  i = !1;
                }
                try {
                  String.fromCharCode.apply(null, new Uint8Array(1));
                } catch (l) {
                  o = !1;
                }
                for (var a = new r.Buf8(256), s = 0; s < 256; s++)
                  a[s] =
                    s >= 252
                      ? 6
                      : s >= 248
                      ? 5
                      : s >= 240
                      ? 4
                      : s >= 224
                      ? 3
                      : s >= 192
                      ? 2
                      : 1;
                function u(e, t) {
                  if (t < 65534 && ((e.subarray && o) || (!e.subarray && i)))
                    return String.fromCharCode.apply(null, r.shrinkBuf(e, t));
                  for (var n = "", a = 0; a < t; a++)
                    n += String.fromCharCode(e[a]);
                  return n;
                }
                (a[254] = a[254] = 1),
                  (n.string2buf = function (e) {
                    var t,
                      n,
                      i,
                      o,
                      a,
                      s = e.length,
                      u = 0;
                    for (o = 0; o < s; o++)
                      55296 == (64512 & (n = e.charCodeAt(o))) &&
                        o + 1 < s &&
                        56320 == (64512 & (i = e.charCodeAt(o + 1))) &&
                        ((n = 65536 + ((n - 55296) << 10) + (i - 56320)), o++),
                        (u += n < 128 ? 1 : n < 2048 ? 2 : n < 65536 ? 3 : 4);
                    for (t = new r.Buf8(u), a = 0, o = 0; a < u; o++)
                      55296 == (64512 & (n = e.charCodeAt(o))) &&
                        o + 1 < s &&
                        56320 == (64512 & (i = e.charCodeAt(o + 1))) &&
                        ((n = 65536 + ((n - 55296) << 10) + (i - 56320)), o++),
                        n < 128
                          ? (t[a++] = n)
                          : n < 2048
                          ? ((t[a++] = 192 | (n >>> 6)),
                            (t[a++] = 128 | (63 & n)))
                          : n < 65536
                          ? ((t[a++] = 224 | (n >>> 12)),
                            (t[a++] = 128 | ((n >>> 6) & 63)),
                            (t[a++] = 128 | (63 & n)))
                          : ((t[a++] = 240 | (n >>> 18)),
                            (t[a++] = 128 | ((n >>> 12) & 63)),
                            (t[a++] = 128 | ((n >>> 6) & 63)),
                            (t[a++] = 128 | (63 & n)));
                    return t;
                  }),
                  (n.buf2binstring = function (e) {
                    return u(e, e.length);
                  }),
                  (n.binstring2buf = function (e) {
                    for (
                      var t = new r.Buf8(e.length), n = 0, i = t.length;
                      n < i;
                      n++
                    )
                      t[n] = e.charCodeAt(n);
                    return t;
                  }),
                  (n.buf2string = function (e, t) {
                    var n,
                      r,
                      i,
                      o,
                      s = t || e.length,
                      l = new Array(2 * s);
                    for (r = 0, n = 0; n < s; )
                      if ((i = e[n++]) < 128) l[r++] = i;
                      else if ((o = a[i]) > 4) (l[r++] = 65533), (n += o - 1);
                      else {
                        for (
                          i &= 2 === o ? 31 : 3 === o ? 15 : 7;
                          o > 1 && n < s;

                        )
                          (i = (i << 6) | (63 & e[n++])), o--;
                        o > 1
                          ? (l[r++] = 65533)
                          : i < 65536
                          ? (l[r++] = i)
                          : ((i -= 65536),
                            (l[r++] = 55296 | ((i >> 10) & 1023)),
                            (l[r++] = 56320 | (1023 & i)));
                      }
                    return u(l, r);
                  }),
                  (n.utf8border = function (e, t) {
                    var n;
                    for (
                      (t = t || e.length) > e.length && (t = e.length),
                        n = t - 1;
                      n >= 0 && 128 == (192 & e[n]);

                    )
                      n--;
                    return n < 0 ? t : 0 === n ? t : n + a[e[n]] > t ? n : t;
                  });
              },
              { "./common": 1 },
            ],
            3: [
              function (e, t, n) {
                t.exports = function (e, t, n, r) {
                  for (
                    var i = (65535 & e) | 0,
                      o = ((e >>> 16) & 65535) | 0,
                      a = 0;
                    0 !== n;

                  ) {
                    n -= a = n > 2e3 ? 2e3 : n;
                    do {
                      o = (o + (i = (i + t[r++]) | 0)) | 0;
                    } while (--a);
                    (i %= 65521), (o %= 65521);
                  }
                  return i | (o << 16) | 0;
                };
              },
              {},
            ],
            4: [
              function (e, t, n) {
                var r = (function () {
                  for (var e, t = [], n = 0; n < 256; n++) {
                    e = n;
                    for (var r = 0; r < 8; r++)
                      e = 1 & e ? 3988292384 ^ (e >>> 1) : e >>> 1;
                    t[n] = e;
                  }
                  return t;
                })();
                t.exports = function (e, t, n, i) {
                  var o = r,
                    a = i + n;
                  e ^= -1;
                  for (var s = i; s < a; s++)
                    e = (e >>> 8) ^ o[255 & (e ^ t[s])];
                  return -1 ^ e;
                };
              },
              {},
            ],
            5: [
              function (e, t, n) {
                var r,
                  i = e("../utils/common"),
                  o = e("./trees"),
                  a = e("./adler32"),
                  s = e("./crc32"),
                  u = e("./messages"),
                  l = 0,
                  c = 1,
                  d = 3,
                  f = 4,
                  p = 5,
                  h = 0,
                  g = 1,
                  m = -2,
                  y = -3,
                  v = -5,
                  b = -1,
                  w = 1,
                  _ = 2,
                  x = 3,
                  k = 4,
                  T = 0,
                  S = 2,
                  C = 8,
                  j = 9,
                  A = 15,
                  E = 8,
                  D = 286,
                  N = 30,
                  L = 19,
                  O = 2 * D + 1,
                  P = 15,
                  z = 3,
                  q = 258,
                  I = q + z + 1,
                  H = 32,
                  B = 42,
                  R = 69,
                  M = 73,
                  U = 91,
                  F = 103,
                  W = 113,
                  $ = 666,
                  V = 1,
                  X = 2,
                  G = 3,
                  Y = 4,
                  Q = 3;
                function J(e, t) {
                  return (e.msg = u[t]), t;
                }
                function K(e) {
                  return (e << 1) - (e > 4 ? 9 : 0);
                }
                function Z(e) {
                  for (var t = e.length; --t >= 0; ) e[t] = 0;
                }
                function ee(e) {
                  var t = e.state,
                    n = t.pending;
                  n > e.avail_out && (n = e.avail_out),
                    0 !== n &&
                      (i.arraySet(
                        e.output,
                        t.pending_buf,
                        t.pending_out,
                        n,
                        e.next_out
                      ),
                      (e.next_out += n),
                      (t.pending_out += n),
                      (e.total_out += n),
                      (e.avail_out -= n),
                      (t.pending -= n),
                      0 === t.pending && (t.pending_out = 0));
                }
                function te(e, t) {
                  o._tr_flush_block(
                    e,
                    e.block_start >= 0 ? e.block_start : -1,
                    e.strstart - e.block_start,
                    t
                  ),
                    (e.block_start = e.strstart),
                    ee(e.strm);
                }
                function ne(e, t) {
                  e.pending_buf[e.pending++] = t;
                }
                function re(e, t) {
                  (e.pending_buf[e.pending++] = (t >>> 8) & 255),
                    (e.pending_buf[e.pending++] = 255 & t);
                }
                function ie(e, t, n, r) {
                  var o = e.avail_in;
                  return (
                    o > r && (o = r),
                    0 === o
                      ? 0
                      : ((e.avail_in -= o),
                        i.arraySet(t, e.input, e.next_in, o, n),
                        1 === e.state.wrap
                          ? (e.adler = a(e.adler, t, o, n))
                          : 2 === e.state.wrap &&
                            (e.adler = s(e.adler, t, o, n)),
                        (e.next_in += o),
                        (e.total_in += o),
                        o)
                  );
                }
                function oe(e, t) {
                  var n,
                    r,
                    i = e.max_chain_length,
                    o = e.strstart,
                    a = e.prev_length,
                    s = e.nice_match,
                    u =
                      e.strstart > e.w_size - I
                        ? e.strstart - (e.w_size - I)
                        : 0,
                    l = e.window,
                    c = e.w_mask,
                    d = e.prev,
                    f = e.strstart + q,
                    p = l[o + a - 1],
                    h = l[o + a];
                  e.prev_length >= e.good_match && (i >>= 2),
                    s > e.lookahead && (s = e.lookahead);
                  do {
                    if (
                      l[(n = t) + a] === h &&
                      l[n + a - 1] === p &&
                      l[n] === l[o] &&
                      l[++n] === l[o + 1]
                    ) {
                      (o += 2), n++;
                      do {} while (
                        l[++o] === l[++n] &&
                        l[++o] === l[++n] &&
                        l[++o] === l[++n] &&
                        l[++o] === l[++n] &&
                        l[++o] === l[++n] &&
                        l[++o] === l[++n] &&
                        l[++o] === l[++n] &&
                        l[++o] === l[++n] &&
                        o < f
                      );
                      if (((r = q - (f - o)), (o = f - q), r > a)) {
                        if (((e.match_start = t), (a = r), r >= s)) break;
                        (p = l[o + a - 1]), (h = l[o + a]);
                      }
                    }
                  } while ((t = d[t & c]) > u && 0 != --i);
                  return a <= e.lookahead ? a : e.lookahead;
                }
                function ae(e) {
                  var t,
                    n,
                    r,
                    o,
                    a,
                    s = e.w_size;
                  do {
                    if (
                      ((o = e.window_size - e.lookahead - e.strstart),
                      e.strstart >= s + (s - I))
                    ) {
                      i.arraySet(e.window, e.window, s, s, 0),
                        (e.match_start -= s),
                        (e.strstart -= s),
                        (e.block_start -= s),
                        (t = n = e.hash_size);
                      do {
                        (r = e.head[--t]), (e.head[t] = r >= s ? r - s : 0);
                      } while (--n);
                      t = n = s;
                      do {
                        (r = e.prev[--t]), (e.prev[t] = r >= s ? r - s : 0);
                      } while (--n);
                      o += s;
                    }
                    if (0 === e.strm.avail_in) break;
                    if (
                      ((n = ie(e.strm, e.window, e.strstart + e.lookahead, o)),
                      (e.lookahead += n),
                      e.lookahead + e.insert >= z)
                    )
                      for (
                        a = e.strstart - e.insert,
                          e.ins_h = e.window[a],
                          e.ins_h =
                            ((e.ins_h << e.hash_shift) ^ e.window[a + 1]) &
                            e.hash_mask;
                        e.insert &&
                        ((e.ins_h =
                          ((e.ins_h << e.hash_shift) ^ e.window[a + z - 1]) &
                          e.hash_mask),
                        (e.prev[a & e.w_mask] = e.head[e.ins_h]),
                        (e.head[e.ins_h] = a),
                        a++,
                        e.insert--,
                        !(e.lookahead + e.insert < z));

                      );
                  } while (e.lookahead < I && 0 !== e.strm.avail_in);
                }
                function se(e, t) {
                  for (var n, r; ; ) {
                    if (e.lookahead < I) {
                      if ((ae(e), e.lookahead < I && t === l)) return V;
                      if (0 === e.lookahead) break;
                    }
                    if (
                      ((n = 0),
                      e.lookahead >= z &&
                        ((e.ins_h =
                          ((e.ins_h << e.hash_shift) ^
                            e.window[e.strstart + z - 1]) &
                          e.hash_mask),
                        (n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h]),
                        (e.head[e.ins_h] = e.strstart)),
                      0 !== n &&
                        e.strstart - n <= e.w_size - I &&
                        (e.match_length = oe(e, n)),
                      e.match_length >= z)
                    )
                      if (
                        ((r = o._tr_tally(
                          e,
                          e.strstart - e.match_start,
                          e.match_length - z
                        )),
                        (e.lookahead -= e.match_length),
                        e.match_length <= e.max_lazy_match && e.lookahead >= z)
                      ) {
                        e.match_length--;
                        do {
                          e.strstart++,
                            (e.ins_h =
                              ((e.ins_h << e.hash_shift) ^
                                e.window[e.strstart + z - 1]) &
                              e.hash_mask),
                            (n = e.prev[e.strstart & e.w_mask] =
                              e.head[e.ins_h]),
                            (e.head[e.ins_h] = e.strstart);
                        } while (0 != --e.match_length);
                        e.strstart++;
                      } else
                        (e.strstart += e.match_length),
                          (e.match_length = 0),
                          (e.ins_h = e.window[e.strstart]),
                          (e.ins_h =
                            ((e.ins_h << e.hash_shift) ^
                              e.window[e.strstart + 1]) &
                            e.hash_mask);
                    else
                      (r = o._tr_tally(e, 0, e.window[e.strstart])),
                        e.lookahead--,
                        e.strstart++;
                    if (r && (te(e, !1), 0 === e.strm.avail_out)) return V;
                  }
                  return (
                    (e.insert = e.strstart < z - 1 ? e.strstart : z - 1),
                    t === f
                      ? (te(e, !0), 0 === e.strm.avail_out ? G : Y)
                      : e.last_lit && (te(e, !1), 0 === e.strm.avail_out)
                      ? V
                      : X
                  );
                }
                function ue(e, t) {
                  for (var n, r, i; ; ) {
                    if (e.lookahead < I) {
                      if ((ae(e), e.lookahead < I && t === l)) return V;
                      if (0 === e.lookahead) break;
                    }
                    if (
                      ((n = 0),
                      e.lookahead >= z &&
                        ((e.ins_h =
                          ((e.ins_h << e.hash_shift) ^
                            e.window[e.strstart + z - 1]) &
                          e.hash_mask),
                        (n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h]),
                        (e.head[e.ins_h] = e.strstart)),
                      (e.prev_length = e.match_length),
                      (e.prev_match = e.match_start),
                      (e.match_length = z - 1),
                      0 !== n &&
                        e.prev_length < e.max_lazy_match &&
                        e.strstart - n <= e.w_size - I &&
                        ((e.match_length = oe(e, n)),
                        e.match_length <= 5 &&
                          (e.strategy === w ||
                            (e.match_length === z &&
                              e.strstart - e.match_start > 4096)) &&
                          (e.match_length = z - 1)),
                      e.prev_length >= z && e.match_length <= e.prev_length)
                    ) {
                      (i = e.strstart + e.lookahead - z),
                        (r = o._tr_tally(
                          e,
                          e.strstart - 1 - e.prev_match,
                          e.prev_length - z
                        )),
                        (e.lookahead -= e.prev_length - 1),
                        (e.prev_length -= 2);
                      do {
                        ++e.strstart <= i &&
                          ((e.ins_h =
                            ((e.ins_h << e.hash_shift) ^
                              e.window[e.strstart + z - 1]) &
                            e.hash_mask),
                          (n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h]),
                          (e.head[e.ins_h] = e.strstart));
                      } while (0 != --e.prev_length);
                      if (
                        ((e.match_available = 0),
                        (e.match_length = z - 1),
                        e.strstart++,
                        r && (te(e, !1), 0 === e.strm.avail_out))
                      )
                        return V;
                    } else if (e.match_available) {
                      if (
                        ((r = o._tr_tally(e, 0, e.window[e.strstart - 1])) &&
                          te(e, !1),
                        e.strstart++,
                        e.lookahead--,
                        0 === e.strm.avail_out)
                      )
                        return V;
                    } else (e.match_available = 1), e.strstart++, e.lookahead--;
                  }
                  return (
                    e.match_available &&
                      ((r = o._tr_tally(e, 0, e.window[e.strstart - 1])),
                      (e.match_available = 0)),
                    (e.insert = e.strstart < z - 1 ? e.strstart : z - 1),
                    t === f
                      ? (te(e, !0), 0 === e.strm.avail_out ? G : Y)
                      : e.last_lit && (te(e, !1), 0 === e.strm.avail_out)
                      ? V
                      : X
                  );
                }
                function le(e, t, n, r, i) {
                  (this.good_length = e),
                    (this.max_lazy = t),
                    (this.nice_length = n),
                    (this.max_chain = r),
                    (this.func = i);
                }
                function ce(e) {
                  var t;
                  return e && e.state
                    ? ((e.total_in = e.total_out = 0),
                      (e.data_type = S),
                      ((t = e.state).pending = 0),
                      (t.pending_out = 0),
                      t.wrap < 0 && (t.wrap = -t.wrap),
                      (t.status = t.wrap ? B : W),
                      (e.adler = 2 === t.wrap ? 0 : 1),
                      (t.last_flush = l),
                      o._tr_init(t),
                      h)
                    : J(e, m);
                }
                function de(e) {
                  var t = ce(e);
                  return (
                    t === h &&
                      (function (e) {
                        (e.window_size = 2 * e.w_size),
                          Z(e.head),
                          (e.max_lazy_match = r[e.level].max_lazy),
                          (e.good_match = r[e.level].good_length),
                          (e.nice_match = r[e.level].nice_length),
                          (e.max_chain_length = r[e.level].max_chain),
                          (e.strstart = 0),
                          (e.block_start = 0),
                          (e.lookahead = 0),
                          (e.insert = 0),
                          (e.match_length = e.prev_length = z - 1),
                          (e.match_available = 0),
                          (e.ins_h = 0);
                      })(e.state),
                    t
                  );
                }
                function fe(e, t, n, r, o, a) {
                  if (!e) return m;
                  var s = 1;
                  if (
                    (t === b && (t = 6),
                    r < 0
                      ? ((s = 0), (r = -r))
                      : r > 15 && ((s = 2), (r -= 16)),
                    o < 1 ||
                      o > j ||
                      n !== C ||
                      r < 8 ||
                      r > 15 ||
                      t < 0 ||
                      t > 9 ||
                      a < 0 ||
                      a > k)
                  )
                    return J(e, m);
                  8 === r && (r = 9);
                  var u = new (function () {
                    (this.strm = null),
                      (this.status = 0),
                      (this.pending_buf = null),
                      (this.pending_buf_size = 0),
                      (this.pending_out = 0),
                      (this.pending = 0),
                      (this.wrap = 0),
                      (this.gzhead = null),
                      (this.gzindex = 0),
                      (this.method = C),
                      (this.last_flush = -1),
                      (this.w_size = 0),
                      (this.w_bits = 0),
                      (this.w_mask = 0),
                      (this.window = null),
                      (this.window_size = 0),
                      (this.prev = null),
                      (this.head = null),
                      (this.ins_h = 0),
                      (this.hash_size = 0),
                      (this.hash_bits = 0),
                      (this.hash_mask = 0),
                      (this.hash_shift = 0),
                      (this.block_start = 0),
                      (this.match_length = 0),
                      (this.prev_match = 0),
                      (this.match_available = 0),
                      (this.strstart = 0),
                      (this.match_start = 0),
                      (this.lookahead = 0),
                      (this.prev_length = 0),
                      (this.max_chain_length = 0),
                      (this.max_lazy_match = 0),
                      (this.level = 0),
                      (this.strategy = 0),
                      (this.good_match = 0),
                      (this.nice_match = 0),
                      (this.dyn_ltree = new i.Buf16(2 * O)),
                      (this.dyn_dtree = new i.Buf16(2 * (2 * N + 1))),
                      (this.bl_tree = new i.Buf16(2 * (2 * L + 1))),
                      Z(this.dyn_ltree),
                      Z(this.dyn_dtree),
                      Z(this.bl_tree),
                      (this.l_desc = null),
                      (this.d_desc = null),
                      (this.bl_desc = null),
                      (this.bl_count = new i.Buf16(P + 1)),
                      (this.heap = new i.Buf16(2 * D + 1)),
                      Z(this.heap),
                      (this.heap_len = 0),
                      (this.heap_max = 0),
                      (this.depth = new i.Buf16(2 * D + 1)),
                      Z(this.depth),
                      (this.l_buf = 0),
                      (this.lit_bufsize = 0),
                      (this.last_lit = 0),
                      (this.d_buf = 0),
                      (this.opt_len = 0),
                      (this.static_len = 0),
                      (this.matches = 0),
                      (this.insert = 0),
                      (this.bi_buf = 0),
                      (this.bi_valid = 0);
                  })();
                  return (
                    (e.state = u),
                    (u.strm = e),
                    (u.wrap = s),
                    (u.gzhead = null),
                    (u.w_bits = r),
                    (u.w_size = 1 << u.w_bits),
                    (u.w_mask = u.w_size - 1),
                    (u.hash_bits = o + 7),
                    (u.hash_size = 1 << u.hash_bits),
                    (u.hash_mask = u.hash_size - 1),
                    (u.hash_shift = ~~((u.hash_bits + z - 1) / z)),
                    (u.window = new i.Buf8(2 * u.w_size)),
                    (u.head = new i.Buf16(u.hash_size)),
                    (u.prev = new i.Buf16(u.w_size)),
                    (u.lit_bufsize = 1 << (o + 6)),
                    (u.pending_buf_size = 4 * u.lit_bufsize),
                    (u.pending_buf = new i.Buf8(u.pending_buf_size)),
                    (u.d_buf = 1 * u.lit_bufsize),
                    (u.l_buf = 3 * u.lit_bufsize),
                    (u.level = t),
                    (u.strategy = a),
                    (u.method = n),
                    de(e)
                  );
                }
                (r = [
                  new le(0, 0, 0, 0, function (e, t) {
                    var n = 65535;
                    for (
                      n > e.pending_buf_size - 5 &&
                      (n = e.pending_buf_size - 5);
                      ;

                    ) {
                      if (e.lookahead <= 1) {
                        if ((ae(e), 0 === e.lookahead && t === l)) return V;
                        if (0 === e.lookahead) break;
                      }
                      (e.strstart += e.lookahead), (e.lookahead = 0);
                      var r = e.block_start + n;
                      if (
                        (0 === e.strstart || e.strstart >= r) &&
                        ((e.lookahead = e.strstart - r),
                        (e.strstart = r),
                        te(e, !1),
                        0 === e.strm.avail_out)
                      )
                        return V;
                      if (
                        e.strstart - e.block_start >= e.w_size - I &&
                        (te(e, !1), 0 === e.strm.avail_out)
                      )
                        return V;
                    }
                    return (
                      (e.insert = 0),
                      t === f
                        ? (te(e, !0), 0 === e.strm.avail_out ? G : Y)
                        : (e.strstart > e.block_start &&
                            (te(e, !1), e.strm.avail_out),
                          V)
                    );
                  }),
                  new le(4, 4, 8, 4, se),
                  new le(4, 5, 16, 8, se),
                  new le(4, 6, 32, 32, se),
                  new le(4, 4, 16, 16, ue),
                  new le(8, 16, 32, 32, ue),
                  new le(8, 16, 128, 128, ue),
                  new le(8, 32, 128, 256, ue),
                  new le(32, 128, 258, 1024, ue),
                  new le(32, 258, 258, 4096, ue),
                ]),
                  (n.deflateInit = function (e, t) {
                    return fe(e, t, C, A, E, T);
                  }),
                  (n.deflateInit2 = fe),
                  (n.deflateReset = de),
                  (n.deflateResetKeep = ce),
                  (n.deflateSetHeader = function (e, t) {
                    return e && e.state
                      ? 2 !== e.state.wrap
                        ? m
                        : ((e.state.gzhead = t), h)
                      : m;
                  }),
                  (n.deflate = function (e, t) {
                    var n, i, a, u;
                    if (!e || !e.state || t > p || t < 0)
                      return e ? J(e, m) : m;
                    if (
                      ((i = e.state),
                      !e.output ||
                        (!e.input && 0 !== e.avail_in) ||
                        (i.status === $ && t !== f))
                    )
                      return J(e, 0 === e.avail_out ? v : m);
                    if (
                      ((i.strm = e),
                      (n = i.last_flush),
                      (i.last_flush = t),
                      i.status === B)
                    )
                      if (2 === i.wrap)
                        (e.adler = 0),
                          ne(i, 31),
                          ne(i, 139),
                          ne(i, 8),
                          i.gzhead
                            ? (ne(
                                i,
                                (i.gzhead.text ? 1 : 0) +
                                  (i.gzhead.hcrc ? 2 : 0) +
                                  (i.gzhead.extra ? 4 : 0) +
                                  (i.gzhead.name ? 8 : 0) +
                                  (i.gzhead.comment ? 16 : 0)
                              ),
                              ne(i, 255 & i.gzhead.time),
                              ne(i, (i.gzhead.time >> 8) & 255),
                              ne(i, (i.gzhead.time >> 16) & 255),
                              ne(i, (i.gzhead.time >> 24) & 255),
                              ne(
                                i,
                                9 === i.level
                                  ? 2
                                  : i.strategy >= _ || i.level < 2
                                  ? 4
                                  : 0
                              ),
                              ne(i, 255 & i.gzhead.os),
                              i.gzhead.extra &&
                                i.gzhead.extra.length &&
                                (ne(i, 255 & i.gzhead.extra.length),
                                ne(i, (i.gzhead.extra.length >> 8) & 255)),
                              i.gzhead.hcrc &&
                                (e.adler = s(
                                  e.adler,
                                  i.pending_buf,
                                  i.pending,
                                  0
                                )),
                              (i.gzindex = 0),
                              (i.status = R))
                            : (ne(i, 0),
                              ne(i, 0),
                              ne(i, 0),
                              ne(i, 0),
                              ne(i, 0),
                              ne(
                                i,
                                9 === i.level
                                  ? 2
                                  : i.strategy >= _ || i.level < 2
                                  ? 4
                                  : 0
                              ),
                              ne(i, Q),
                              (i.status = W));
                      else {
                        var y = (C + ((i.w_bits - 8) << 4)) << 8;
                        (y |=
                          (i.strategy >= _ || i.level < 2
                            ? 0
                            : i.level < 6
                            ? 1
                            : 6 === i.level
                            ? 2
                            : 3) << 6),
                          0 !== i.strstart && (y |= H),
                          (y += 31 - (y % 31)),
                          (i.status = W),
                          re(i, y),
                          0 !== i.strstart &&
                            (re(i, e.adler >>> 16), re(i, 65535 & e.adler)),
                          (e.adler = 1);
                      }
                    if (i.status === R)
                      if (i.gzhead.extra) {
                        for (
                          a = i.pending;
                          i.gzindex < (65535 & i.gzhead.extra.length) &&
                          (i.pending !== i.pending_buf_size ||
                            (i.gzhead.hcrc &&
                              i.pending > a &&
                              (e.adler = s(
                                e.adler,
                                i.pending_buf,
                                i.pending - a,
                                a
                              )),
                            ee(e),
                            (a = i.pending),
                            i.pending !== i.pending_buf_size));

                        )
                          ne(i, 255 & i.gzhead.extra[i.gzindex]), i.gzindex++;
                        i.gzhead.hcrc &&
                          i.pending > a &&
                          (e.adler = s(
                            e.adler,
                            i.pending_buf,
                            i.pending - a,
                            a
                          )),
                          i.gzindex === i.gzhead.extra.length &&
                            ((i.gzindex = 0), (i.status = M));
                      } else i.status = M;
                    if (i.status === M)
                      if (i.gzhead.name) {
                        a = i.pending;
                        do {
                          if (
                            i.pending === i.pending_buf_size &&
                            (i.gzhead.hcrc &&
                              i.pending > a &&
                              (e.adler = s(
                                e.adler,
                                i.pending_buf,
                                i.pending - a,
                                a
                              )),
                            ee(e),
                            (a = i.pending),
                            i.pending === i.pending_buf_size)
                          ) {
                            u = 1;
                            break;
                          }
                          (u =
                            i.gzindex < i.gzhead.name.length
                              ? 255 & i.gzhead.name.charCodeAt(i.gzindex++)
                              : 0),
                            ne(i, u);
                        } while (0 !== u);
                        i.gzhead.hcrc &&
                          i.pending > a &&
                          (e.adler = s(
                            e.adler,
                            i.pending_buf,
                            i.pending - a,
                            a
                          )),
                          0 === u && ((i.gzindex = 0), (i.status = U));
                      } else i.status = U;
                    if (i.status === U)
                      if (i.gzhead.comment) {
                        a = i.pending;
                        do {
                          if (
                            i.pending === i.pending_buf_size &&
                            (i.gzhead.hcrc &&
                              i.pending > a &&
                              (e.adler = s(
                                e.adler,
                                i.pending_buf,
                                i.pending - a,
                                a
                              )),
                            ee(e),
                            (a = i.pending),
                            i.pending === i.pending_buf_size)
                          ) {
                            u = 1;
                            break;
                          }
                          (u =
                            i.gzindex < i.gzhead.comment.length
                              ? 255 & i.gzhead.comment.charCodeAt(i.gzindex++)
                              : 0),
                            ne(i, u);
                        } while (0 !== u);
                        i.gzhead.hcrc &&
                          i.pending > a &&
                          (e.adler = s(
                            e.adler,
                            i.pending_buf,
                            i.pending - a,
                            a
                          )),
                          0 === u && (i.status = F);
                      } else i.status = F;
                    if (
                      (i.status === F &&
                        (i.gzhead.hcrc
                          ? (i.pending + 2 > i.pending_buf_size && ee(e),
                            i.pending + 2 <= i.pending_buf_size &&
                              (ne(i, 255 & e.adler),
                              ne(i, (e.adler >> 8) & 255),
                              (e.adler = 0),
                              (i.status = W)))
                          : (i.status = W)),
                      0 !== i.pending)
                    ) {
                      if ((ee(e), 0 === e.avail_out))
                        return (i.last_flush = -1), h;
                    } else if (0 === e.avail_in && K(t) <= K(n) && t !== f)
                      return J(e, v);
                    if (i.status === $ && 0 !== e.avail_in) return J(e, v);
                    if (
                      0 !== e.avail_in ||
                      0 !== i.lookahead ||
                      (t !== l && i.status !== $)
                    ) {
                      var b =
                        i.strategy === _
                          ? (function (e, t) {
                              for (var n; ; ) {
                                if (
                                  0 === e.lookahead &&
                                  (ae(e), 0 === e.lookahead)
                                ) {
                                  if (t === l) return V;
                                  break;
                                }
                                if (
                                  ((e.match_length = 0),
                                  (n = o._tr_tally(e, 0, e.window[e.strstart])),
                                  e.lookahead--,
                                  e.strstart++,
                                  n && (te(e, !1), 0 === e.strm.avail_out))
                                )
                                  return V;
                              }
                              return (
                                (e.insert = 0),
                                t === f
                                  ? (te(e, !0), 0 === e.strm.avail_out ? G : Y)
                                  : e.last_lit &&
                                    (te(e, !1), 0 === e.strm.avail_out)
                                  ? V
                                  : X
                              );
                            })(i, t)
                          : i.strategy === x
                          ? (function (e, t) {
                              for (var n, r, i, a, s = e.window; ; ) {
                                if (e.lookahead <= q) {
                                  if ((ae(e), e.lookahead <= q && t === l))
                                    return V;
                                  if (0 === e.lookahead) break;
                                }
                                if (
                                  ((e.match_length = 0),
                                  e.lookahead >= z &&
                                    e.strstart > 0 &&
                                    (r = s[(i = e.strstart - 1)]) === s[++i] &&
                                    r === s[++i] &&
                                    r === s[++i])
                                ) {
                                  a = e.strstart + q;
                                  do {} while (
                                    r === s[++i] &&
                                    r === s[++i] &&
                                    r === s[++i] &&
                                    r === s[++i] &&
                                    r === s[++i] &&
                                    r === s[++i] &&
                                    r === s[++i] &&
                                    r === s[++i] &&
                                    i < a
                                  );
                                  (e.match_length = q - (a - i)),
                                    e.match_length > e.lookahead &&
                                      (e.match_length = e.lookahead);
                                }
                                if (
                                  (e.match_length >= z
                                    ? ((n = o._tr_tally(
                                        e,
                                        1,
                                        e.match_length - z
                                      )),
                                      (e.lookahead -= e.match_length),
                                      (e.strstart += e.match_length),
                                      (e.match_length = 0))
                                    : ((n = o._tr_tally(
                                        e,
                                        0,
                                        e.window[e.strstart]
                                      )),
                                      e.lookahead--,
                                      e.strstart++),
                                  n && (te(e, !1), 0 === e.strm.avail_out))
                                )
                                  return V;
                              }
                              return (
                                (e.insert = 0),
                                t === f
                                  ? (te(e, !0), 0 === e.strm.avail_out ? G : Y)
                                  : e.last_lit &&
                                    (te(e, !1), 0 === e.strm.avail_out)
                                  ? V
                                  : X
                              );
                            })(i, t)
                          : r[i.level].func(i, t);
                      if (
                        ((b !== G && b !== Y) || (i.status = $),
                        b === V || b === G)
                      )
                        return 0 === e.avail_out && (i.last_flush = -1), h;
                      if (
                        b === X &&
                        (t === c
                          ? o._tr_align(i)
                          : t !== p &&
                            (o._tr_stored_block(i, 0, 0, !1),
                            t === d &&
                              (Z(i.head),
                              0 === i.lookahead &&
                                ((i.strstart = 0),
                                (i.block_start = 0),
                                (i.insert = 0)))),
                        ee(e),
                        0 === e.avail_out)
                      )
                        return (i.last_flush = -1), h;
                    }
                    return t !== f
                      ? h
                      : i.wrap <= 0
                      ? g
                      : (2 === i.wrap
                          ? (ne(i, 255 & e.adler),
                            ne(i, (e.adler >> 8) & 255),
                            ne(i, (e.adler >> 16) & 255),
                            ne(i, (e.adler >> 24) & 255),
                            ne(i, 255 & e.total_in),
                            ne(i, (e.total_in >> 8) & 255),
                            ne(i, (e.total_in >> 16) & 255),
                            ne(i, (e.total_in >> 24) & 255))
                          : (re(i, e.adler >>> 16), re(i, 65535 & e.adler)),
                        ee(e),
                        i.wrap > 0 && (i.wrap = -i.wrap),
                        0 !== i.pending ? h : g);
                  }),
                  (n.deflateEnd = function (e) {
                    var t;
                    return e && e.state
                      ? (t = e.state.status) !== B &&
                        t !== R &&
                        t !== M &&
                        t !== U &&
                        t !== F &&
                        t !== W &&
                        t !== $
                        ? J(e, m)
                        : ((e.state = null), t === W ? J(e, y) : h)
                      : m;
                  }),
                  (n.deflateSetDictionary = function (e, t) {
                    var n,
                      r,
                      o,
                      s,
                      u,
                      l,
                      c,
                      d,
                      f = t.length;
                    if (!e || !e.state) return m;
                    if (
                      2 === (s = (n = e.state).wrap) ||
                      (1 === s && n.status !== B) ||
                      n.lookahead
                    )
                      return m;
                    for (
                      1 === s && (e.adler = a(e.adler, t, f, 0)),
                        n.wrap = 0,
                        f >= n.w_size &&
                          (0 === s &&
                            (Z(n.head),
                            (n.strstart = 0),
                            (n.block_start = 0),
                            (n.insert = 0)),
                          (d = new i.Buf8(n.w_size)),
                          i.arraySet(d, t, f - n.w_size, n.w_size, 0),
                          (t = d),
                          (f = n.w_size)),
                        u = e.avail_in,
                        l = e.next_in,
                        c = e.input,
                        e.avail_in = f,
                        e.next_in = 0,
                        e.input = t,
                        ae(n);
                      n.lookahead >= z;

                    ) {
                      (r = n.strstart), (o = n.lookahead - (z - 1));
                      do {
                        (n.ins_h =
                          ((n.ins_h << n.hash_shift) ^ n.window[r + z - 1]) &
                          n.hash_mask),
                          (n.prev[r & n.w_mask] = n.head[n.ins_h]),
                          (n.head[n.ins_h] = r),
                          r++;
                      } while (--o);
                      (n.strstart = r), (n.lookahead = z - 1), ae(n);
                    }
                    return (
                      (n.strstart += n.lookahead),
                      (n.block_start = n.strstart),
                      (n.insert = n.lookahead),
                      (n.lookahead = 0),
                      (n.match_length = n.prev_length = z - 1),
                      (n.match_available = 0),
                      (e.next_in = l),
                      (e.input = c),
                      (e.avail_in = u),
                      (n.wrap = s),
                      h
                    );
                  }),
                  (n.deflateInfo = "pako deflate (from Nodeca project)");
              },
              {
                "../utils/common": 1,
                "./adler32": 3,
                "./crc32": 4,
                "./messages": 6,
                "./trees": 7,
              },
            ],
            6: [
              function (e, t, n) {
                t.exports = {
                  2: "need dictionary",
                  1: "stream end",
                  0: "",
                  "-1": "file error",
                  "-2": "stream error",
                  "-3": "data error",
                  "-4": "insufficient memory",
                  "-5": "buffer error",
                  "-6": "incompatible version",
                };
              },
              {},
            ],
            7: [
              function (e, t, n) {
                var r = e("../utils/common"),
                  i = 4,
                  o = 0,
                  a = 1,
                  s = 2;
                function u(e) {
                  for (var t = e.length; --t >= 0; ) e[t] = 0;
                }
                var l = 0,
                  c = 1,
                  d = 2,
                  f = 29,
                  p = 256,
                  h = p + 1 + f,
                  g = 30,
                  m = 19,
                  y = 2 * h + 1,
                  v = 15,
                  b = 16,
                  w = 7,
                  _ = 256,
                  x = 16,
                  k = 17,
                  T = 18,
                  S = [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    1,
                    1,
                    1,
                    1,
                    2,
                    2,
                    2,
                    2,
                    3,
                    3,
                    3,
                    3,
                    4,
                    4,
                    4,
                    4,
                    5,
                    5,
                    5,
                    5,
                    0,
                  ],
                  C = [
                    0,
                    0,
                    0,
                    0,
                    1,
                    1,
                    2,
                    2,
                    3,
                    3,
                    4,
                    4,
                    5,
                    5,
                    6,
                    6,
                    7,
                    7,
                    8,
                    8,
                    9,
                    9,
                    10,
                    10,
                    11,
                    11,
                    12,
                    12,
                    13,
                    13,
                  ],
                  j = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7],
                  A = [
                    16,
                    17,
                    18,
                    0,
                    8,
                    7,
                    9,
                    6,
                    10,
                    5,
                    11,
                    4,
                    12,
                    3,
                    13,
                    2,
                    14,
                    1,
                    15,
                  ],
                  E = new Array(2 * (h + 2));
                u(E);
                var D = new Array(2 * g);
                u(D);
                var N = new Array(512);
                u(N);
                var L = new Array(256);
                u(L);
                var O = new Array(f);
                u(O);
                var P,
                  z,
                  q,
                  I = new Array(g);
                function H(e, t, n, r, i) {
                  (this.static_tree = e),
                    (this.extra_bits = t),
                    (this.extra_base = n),
                    (this.elems = r),
                    (this.max_length = i),
                    (this.has_stree = e && e.length);
                }
                function B(e, t) {
                  (this.dyn_tree = e),
                    (this.max_code = 0),
                    (this.stat_desc = t);
                }
                function R(e) {
                  return e < 256 ? N[e] : N[256 + (e >>> 7)];
                }
                function M(e, t) {
                  (e.pending_buf[e.pending++] = 255 & t),
                    (e.pending_buf[e.pending++] = (t >>> 8) & 255);
                }
                function U(e, t, n) {
                  e.bi_valid > b - n
                    ? ((e.bi_buf |= (t << e.bi_valid) & 65535),
                      M(e, e.bi_buf),
                      (e.bi_buf = t >> (b - e.bi_valid)),
                      (e.bi_valid += n - b))
                    : ((e.bi_buf |= (t << e.bi_valid) & 65535),
                      (e.bi_valid += n));
                }
                function F(e, t, n) {
                  U(e, n[2 * t], n[2 * t + 1]);
                }
                function W(e, t) {
                  var n = 0;
                  do {
                    (n |= 1 & e), (e >>>= 1), (n <<= 1);
                  } while (--t > 0);
                  return n >>> 1;
                }
                function $(e, t, n) {
                  var r,
                    i,
                    o = new Array(v + 1),
                    a = 0;
                  for (r = 1; r <= v; r++) o[r] = a = (a + n[r - 1]) << 1;
                  for (i = 0; i <= t; i++) {
                    var s = e[2 * i + 1];
                    0 !== s && (e[2 * i] = W(o[s]++, s));
                  }
                }
                function V(e) {
                  var t;
                  for (t = 0; t < h; t++) e.dyn_ltree[2 * t] = 0;
                  for (t = 0; t < g; t++) e.dyn_dtree[2 * t] = 0;
                  for (t = 0; t < m; t++) e.bl_tree[2 * t] = 0;
                  (e.dyn_ltree[2 * _] = 1),
                    (e.opt_len = e.static_len = 0),
                    (e.last_lit = e.matches = 0);
                }
                function X(e) {
                  e.bi_valid > 8
                    ? M(e, e.bi_buf)
                    : e.bi_valid > 0 && (e.pending_buf[e.pending++] = e.bi_buf),
                    (e.bi_buf = 0),
                    (e.bi_valid = 0);
                }
                function G(e, t, n, r) {
                  var i = 2 * t,
                    o = 2 * n;
                  return e[i] < e[o] || (e[i] === e[o] && r[t] <= r[n]);
                }
                function Y(e, t, n) {
                  for (
                    var r = e.heap[n], i = n << 1;
                    i <= e.heap_len &&
                    (i < e.heap_len &&
                      G(t, e.heap[i + 1], e.heap[i], e.depth) &&
                      i++,
                    !G(t, r, e.heap[i], e.depth));

                  )
                    (e.heap[n] = e.heap[i]), (n = i), (i <<= 1);
                  e.heap[n] = r;
                }
                function Q(e, t, n) {
                  var r,
                    i,
                    o,
                    a,
                    s = 0;
                  if (0 !== e.last_lit)
                    do {
                      (r =
                        (e.pending_buf[e.d_buf + 2 * s] << 8) |
                        e.pending_buf[e.d_buf + 2 * s + 1]),
                        (i = e.pending_buf[e.l_buf + s]),
                        s++,
                        0 === r
                          ? F(e, i, t)
                          : (F(e, (o = L[i]) + p + 1, t),
                            0 !== (a = S[o]) && U(e, (i -= O[o]), a),
                            F(e, (o = R(--r)), n),
                            0 !== (a = C[o]) && U(e, (r -= I[o]), a));
                    } while (s < e.last_lit);
                  F(e, _, t);
                }
                function J(e, t) {
                  var n,
                    r,
                    i,
                    o = t.dyn_tree,
                    a = t.stat_desc.static_tree,
                    s = t.stat_desc.has_stree,
                    u = t.stat_desc.elems,
                    l = -1;
                  for (e.heap_len = 0, e.heap_max = y, n = 0; n < u; n++)
                    0 !== o[2 * n]
                      ? ((e.heap[++e.heap_len] = l = n), (e.depth[n] = 0))
                      : (o[2 * n + 1] = 0);
                  for (; e.heap_len < 2; )
                    (o[2 * (i = e.heap[++e.heap_len] = l < 2 ? ++l : 0)] = 1),
                      (e.depth[i] = 0),
                      e.opt_len--,
                      s && (e.static_len -= a[2 * i + 1]);
                  for (t.max_code = l, n = e.heap_len >> 1; n >= 1; n--)
                    Y(e, o, n);
                  i = u;
                  do {
                    (n = e.heap[1]),
                      (e.heap[1] = e.heap[e.heap_len--]),
                      Y(e, o, 1),
                      (r = e.heap[1]),
                      (e.heap[--e.heap_max] = n),
                      (e.heap[--e.heap_max] = r),
                      (o[2 * i] = o[2 * n] + o[2 * r]),
                      (e.depth[i] =
                        (e.depth[n] >= e.depth[r] ? e.depth[n] : e.depth[r]) +
                        1),
                      (o[2 * n + 1] = o[2 * r + 1] = i),
                      (e.heap[1] = i++),
                      Y(e, o, 1);
                  } while (e.heap_len >= 2);
                  (e.heap[--e.heap_max] = e.heap[1]),
                    (function (e, t) {
                      var n,
                        r,
                        i,
                        o,
                        a,
                        s,
                        u = t.dyn_tree,
                        l = t.max_code,
                        c = t.stat_desc.static_tree,
                        d = t.stat_desc.has_stree,
                        f = t.stat_desc.extra_bits,
                        p = t.stat_desc.extra_base,
                        h = t.stat_desc.max_length,
                        g = 0;
                      for (o = 0; o <= v; o++) e.bl_count[o] = 0;
                      for (
                        u[2 * e.heap[e.heap_max] + 1] = 0, n = e.heap_max + 1;
                        n < y;
                        n++
                      )
                        (o = u[2 * u[2 * (r = e.heap[n]) + 1] + 1] + 1) > h &&
                          ((o = h), g++),
                          (u[2 * r + 1] = o),
                          r > l ||
                            (e.bl_count[o]++,
                            (a = 0),
                            r >= p && (a = f[r - p]),
                            (s = u[2 * r]),
                            (e.opt_len += s * (o + a)),
                            d && (e.static_len += s * (c[2 * r + 1] + a)));
                      if (0 !== g) {
                        do {
                          for (o = h - 1; 0 === e.bl_count[o]; ) o--;
                          e.bl_count[o]--,
                            (e.bl_count[o + 1] += 2),
                            e.bl_count[h]--,
                            (g -= 2);
                        } while (g > 0);
                        for (o = h; 0 !== o; o--)
                          for (r = e.bl_count[o]; 0 !== r; )
                            (i = e.heap[--n]) > l ||
                              (u[2 * i + 1] !== o &&
                                ((e.opt_len += (o - u[2 * i + 1]) * u[2 * i]),
                                (u[2 * i + 1] = o)),
                              r--);
                      }
                    })(e, t),
                    $(o, l, e.bl_count);
                }
                function K(e, t, n) {
                  var r,
                    i,
                    o = -1,
                    a = t[1],
                    s = 0,
                    u = 7,
                    l = 4;
                  for (
                    0 === a && ((u = 138), (l = 3)),
                      t[2 * (n + 1) + 1] = 65535,
                      r = 0;
                    r <= n;
                    r++
                  )
                    (i = a),
                      (a = t[2 * (r + 1) + 1]),
                      (++s < u && i === a) ||
                        (s < l
                          ? (e.bl_tree[2 * i] += s)
                          : 0 !== i
                          ? (i !== o && e.bl_tree[2 * i]++, e.bl_tree[2 * x]++)
                          : s <= 10
                          ? e.bl_tree[2 * k]++
                          : e.bl_tree[2 * T]++,
                        (s = 0),
                        (o = i),
                        0 === a
                          ? ((u = 138), (l = 3))
                          : i === a
                          ? ((u = 6), (l = 3))
                          : ((u = 7), (l = 4)));
                }
                function Z(e, t, n) {
                  var r,
                    i,
                    o = -1,
                    a = t[1],
                    s = 0,
                    u = 7,
                    l = 4;
                  for (0 === a && ((u = 138), (l = 3)), r = 0; r <= n; r++)
                    if (
                      ((i = a), (a = t[2 * (r + 1) + 1]), !(++s < u && i === a))
                    ) {
                      if (s < l) {
                        do {
                          F(e, i, e.bl_tree);
                        } while (0 != --s);
                      } else
                        0 !== i
                          ? (i !== o && (F(e, i, e.bl_tree), s--),
                            F(e, x, e.bl_tree),
                            U(e, s - 3, 2))
                          : s <= 10
                          ? (F(e, k, e.bl_tree), U(e, s - 3, 3))
                          : (F(e, T, e.bl_tree), U(e, s - 11, 7));
                      (s = 0),
                        (o = i),
                        0 === a
                          ? ((u = 138), (l = 3))
                          : i === a
                          ? ((u = 6), (l = 3))
                          : ((u = 7), (l = 4));
                    }
                }
                u(I);
                var ee = !1;
                function te(e, t, n, i) {
                  U(e, (l << 1) + (i ? 1 : 0), 3),
                    (function (e, t, n, i) {
                      X(e),
                        i && (M(e, n), M(e, ~n)),
                        r.arraySet(e.pending_buf, e.window, t, n, e.pending),
                        (e.pending += n);
                    })(e, t, n, !0);
                }
                (n._tr_init = function (e) {
                  ee ||
                    ((function () {
                      var e,
                        t,
                        n,
                        r,
                        i,
                        o = new Array(v + 1);
                      for (n = 0, r = 0; r < f - 1; r++)
                        for (O[r] = n, e = 0; e < 1 << S[r]; e++) L[n++] = r;
                      for (L[n - 1] = r, i = 0, r = 0; r < 16; r++)
                        for (I[r] = i, e = 0; e < 1 << C[r]; e++) N[i++] = r;
                      for (i >>= 7; r < g; r++)
                        for (I[r] = i << 7, e = 0; e < 1 << (C[r] - 7); e++)
                          N[256 + i++] = r;
                      for (t = 0; t <= v; t++) o[t] = 0;
                      for (e = 0; e <= 143; ) (E[2 * e + 1] = 8), e++, o[8]++;
                      for (; e <= 255; ) (E[2 * e + 1] = 9), e++, o[9]++;
                      for (; e <= 279; ) (E[2 * e + 1] = 7), e++, o[7]++;
                      for (; e <= 287; ) (E[2 * e + 1] = 8), e++, o[8]++;
                      for ($(E, h + 1, o), e = 0; e < g; e++)
                        (D[2 * e + 1] = 5), (D[2 * e] = W(e, 5));
                      (P = new H(E, S, p + 1, h, v)),
                        (z = new H(D, C, 0, g, v)),
                        (q = new H(new Array(0), j, 0, m, w));
                    })(),
                    (ee = !0)),
                    (e.l_desc = new B(e.dyn_ltree, P)),
                    (e.d_desc = new B(e.dyn_dtree, z)),
                    (e.bl_desc = new B(e.bl_tree, q)),
                    (e.bi_buf = 0),
                    (e.bi_valid = 0),
                    V(e);
                }),
                  (n._tr_stored_block = te),
                  (n._tr_flush_block = function (e, t, n, r) {
                    var u,
                      l,
                      f = 0;
                    e.level > 0
                      ? (e.strm.data_type === s &&
                          (e.strm.data_type = (function (e) {
                            var t,
                              n = 4093624447;
                            for (t = 0; t <= 31; t++, n >>>= 1)
                              if (1 & n && 0 !== e.dyn_ltree[2 * t]) return o;
                            if (
                              0 !== e.dyn_ltree[18] ||
                              0 !== e.dyn_ltree[20] ||
                              0 !== e.dyn_ltree[26]
                            )
                              return a;
                            for (t = 32; t < p; t++)
                              if (0 !== e.dyn_ltree[2 * t]) return a;
                            return o;
                          })(e)),
                        J(e, e.l_desc),
                        J(e, e.d_desc),
                        (f = (function (e) {
                          var t;
                          for (
                            K(e, e.dyn_ltree, e.l_desc.max_code),
                              K(e, e.dyn_dtree, e.d_desc.max_code),
                              J(e, e.bl_desc),
                              t = m - 1;
                            t >= 3 && 0 === e.bl_tree[2 * A[t] + 1];
                            t--
                          );
                          return (e.opt_len += 3 * (t + 1) + 5 + 5 + 4), t;
                        })(e)),
                        (u = (e.opt_len + 3 + 7) >>> 3),
                        (l = (e.static_len + 3 + 7) >>> 3) <= u && (u = l))
                      : (u = l = n + 5),
                      n + 4 <= u && -1 !== t
                        ? te(e, t, n, r)
                        : e.strategy === i || l === u
                        ? (U(e, (c << 1) + (r ? 1 : 0), 3), Q(e, E, D))
                        : (U(e, (d << 1) + (r ? 1 : 0), 3),
                          (function (e, t, n, r) {
                            var i;
                            for (
                              U(e, t - 257, 5),
                                U(e, n - 1, 5),
                                U(e, r - 4, 4),
                                i = 0;
                              i < r;
                              i++
                            )
                              U(e, e.bl_tree[2 * A[i] + 1], 3);
                            Z(e, e.dyn_ltree, t - 1), Z(e, e.dyn_dtree, n - 1);
                          })(
                            e,
                            e.l_desc.max_code + 1,
                            e.d_desc.max_code + 1,
                            f + 1
                          ),
                          Q(e, e.dyn_ltree, e.dyn_dtree)),
                      V(e),
                      r && X(e);
                  }),
                  (n._tr_tally = function (e, t, n) {
                    return (
                      (e.pending_buf[e.d_buf + 2 * e.last_lit] =
                        (t >>> 8) & 255),
                      (e.pending_buf[e.d_buf + 2 * e.last_lit + 1] = 255 & t),
                      (e.pending_buf[e.l_buf + e.last_lit] = 255 & n),
                      e.last_lit++,
                      0 === t
                        ? e.dyn_ltree[2 * n]++
                        : (e.matches++,
                          t--,
                          e.dyn_ltree[2 * (L[n] + p + 1)]++,
                          e.dyn_dtree[2 * R(t)]++),
                      e.last_lit === e.lit_bufsize - 1
                    );
                  }),
                  (n._tr_align = function (e) {
                    U(e, c << 1, 3),
                      F(e, _, E),
                      (function (e) {
                        16 === e.bi_valid
                          ? (M(e, e.bi_buf), (e.bi_buf = 0), (e.bi_valid = 0))
                          : e.bi_valid >= 8 &&
                            ((e.pending_buf[e.pending++] = 255 & e.bi_buf),
                            (e.bi_buf >>= 8),
                            (e.bi_valid -= 8));
                      })(e);
                  });
              },
              { "../utils/common": 1 },
            ],
            8: [
              function (e, t, n) {
                t.exports = function () {
                  (this.input = null),
                    (this.next_in = 0),
                    (this.avail_in = 0),
                    (this.total_in = 0),
                    (this.output = null),
                    (this.next_out = 0),
                    (this.avail_out = 0),
                    (this.total_out = 0),
                    (this.msg = ""),
                    (this.state = null),
                    (this.data_type = 2),
                    (this.adler = 0);
                };
              },
              {},
            ],
            "/lib/deflate.js": [
              function (e, t, n) {
                var r = e("./zlib/deflate"),
                  i = e("./utils/common"),
                  o = e("./utils/strings"),
                  a = e("./zlib/messages"),
                  s = e("./zlib/zstream"),
                  u = Object.prototype.toString,
                  l = 0,
                  c = -1,
                  d = 0,
                  f = 8;
                function p(e) {
                  if (!(this instanceof p)) return new p(e);
                  this.options = i.assign(
                    {
                      level: c,
                      method: f,
                      chunkSize: 16384,
                      windowBits: 15,
                      memLevel: 8,
                      strategy: d,
                      to: "",
                    },
                    e || {}
                  );
                  var t = this.options;
                  t.raw && t.windowBits > 0
                    ? (t.windowBits = -t.windowBits)
                    : t.gzip &&
                      t.windowBits > 0 &&
                      t.windowBits < 16 &&
                      (t.windowBits += 16),
                    (this.err = 0),
                    (this.msg = ""),
                    (this.ended = !1),
                    (this.chunks = []),
                    (this.strm = new s()),
                    (this.strm.avail_out = 0);
                  var n = r.deflateInit2(
                    this.strm,
                    t.level,
                    t.method,
                    t.windowBits,
                    t.memLevel,
                    t.strategy
                  );
                  if (n !== l) throw new Error(a[n]);
                  if (
                    (t.header && r.deflateSetHeader(this.strm, t.header),
                    t.dictionary)
                  ) {
                    var h;
                    if (
                      ((h =
                        "string" == typeof t.dictionary
                          ? o.string2buf(t.dictionary)
                          : "[object ArrayBuffer]" === u.call(t.dictionary)
                          ? new Uint8Array(t.dictionary)
                          : t.dictionary),
                      (n = r.deflateSetDictionary(this.strm, h)) !== l)
                    )
                      throw new Error(a[n]);
                    this._dict_set = !0;
                  }
                }
                function h(e, t) {
                  var n = new p(t);
                  if ((n.push(e, !0), n.err)) throw n.msg || a[n.err];
                  return n.result;
                }
                (p.prototype.push = function (e, t) {
                  var n,
                    a,
                    s = this.strm,
                    c = this.options.chunkSize;
                  if (this.ended) return !1;
                  (a = t === ~~t ? t : !0 === t ? 4 : 0),
                    "string" == typeof e
                      ? (s.input = o.string2buf(e))
                      : "[object ArrayBuffer]" === u.call(e)
                      ? (s.input = new Uint8Array(e))
                      : (s.input = e),
                    (s.next_in = 0),
                    (s.avail_in = s.input.length);
                  do {
                    if (
                      (0 === s.avail_out &&
                        ((s.output = new i.Buf8(c)),
                        (s.next_out = 0),
                        (s.avail_out = c)),
                      1 !== (n = r.deflate(s, a)) && n !== l)
                    )
                      return this.onEnd(n), (this.ended = !0), !1;
                    (0 !== s.avail_out &&
                      (0 !== s.avail_in || (4 !== a && 2 !== a))) ||
                      ("string" === this.options.to
                        ? this.onData(
                            o.buf2binstring(i.shrinkBuf(s.output, s.next_out))
                          )
                        : this.onData(i.shrinkBuf(s.output, s.next_out)));
                  } while ((s.avail_in > 0 || 0 === s.avail_out) && 1 !== n);
                  return 4 === a
                    ? ((n = r.deflateEnd(this.strm)),
                      this.onEnd(n),
                      (this.ended = !0),
                      n === l)
                    : 2 !== a || (this.onEnd(l), (s.avail_out = 0), !0);
                }),
                  (p.prototype.onData = function (e) {
                    this.chunks.push(e);
                  }),
                  (p.prototype.onEnd = function (e) {
                    e === l &&
                      ("string" === this.options.to
                        ? (this.result = this.chunks.join(""))
                        : (this.result = i.flattenChunks(this.chunks))),
                      (this.chunks = []),
                      (this.err = e),
                      (this.msg = this.strm.msg);
                  }),
                  (n.Deflate = p),
                  (n.deflate = h),
                  (n.deflateRaw = function (e, t) {
                    return ((t = t || {}).raw = !0), h(e, t);
                  }),
                  (n.gzip = function (e, t) {
                    return ((t = t || {}).gzip = !0), h(e, t);
                  });
              },
              {
                "./utils/common": 1,
                "./utils/strings": 2,
                "./zlib/deflate": 5,
                "./zlib/messages": 6,
                "./zlib/zstream": 8,
              },
            ],
          },
          {},
          []
        )("/lib/deflate.js");
      });
    },
    function (e, t, n) {
      "use strict";
      (function (e) {
        var n,
          r =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                };
        !(function (t, n) {
          "object" === r(e) && "object" === r(e.exports)
            ? (e.exports = t.document
                ? n(t, !0)
                : function (e) {
                    if (!e.document)
                      throw new Error(
                        "jQuery requires a window with a document"
                      );
                    return n(e);
                  })
            : n(t);
        })("undefined" != typeof window ? window : undefined, function (i, o) {
          var a = [],
            s = i.document,
            u = Object.getPrototypeOf,
            l = a.slice,
            c = a.concat,
            d = a.push,
            f = a.indexOf,
            p = {},
            h = p.toString,
            g = p.hasOwnProperty,
            m = g.toString,
            y = m.call(Object),
            v = {},
            b = function (e) {
              return "function" == typeof e && "number" != typeof e.nodeType;
            },
            w = function (e) {
              return null != e && e === e.window;
            },
            _ = { type: !0, src: !0, nonce: !0, noModule: !0 };
          function x(e, t, n) {
            var r,
              i,
              o = (n = n || s).createElement("script");
            if (((o.text = e), t))
              for (r in _)
                (i = t[r] || (t.getAttribute && t.getAttribute(r))) &&
                  o.setAttribute(r, i);
            n.head.appendChild(o).parentNode.removeChild(o);
          }
          function k(e) {
            return null == e
              ? e + ""
              : "object" === (void 0 === e ? "undefined" : r(e)) ||
                "function" == typeof e
              ? p[h.call(e)] || "object"
              : void 0 === e
              ? "undefined"
              : r(e);
          }
          var T = function Kt(e, t) {
              return new Kt.fn.init(e, t);
            },
            S = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
          function C(e) {
            var t = !!e && "length" in e && e.length,
              n = k(e);
            return (
              !b(e) &&
              !w(e) &&
              ("array" === n ||
                0 === t ||
                ("number" == typeof t && t > 0 && t - 1 in e))
            );
          }
          (T.fn = T.prototype = {
            jquery: "3.4.1",
            constructor: T,
            length: 0,
            toArray: function () {
              return l.call(this);
            },
            get: function (e) {
              return null == e
                ? l.call(this)
                : e < 0
                ? this[e + this.length]
                : this[e];
            },
            pushStack: function (e) {
              var t = T.merge(this.constructor(), e);
              return (t.prevObject = this), t;
            },
            each: function (e) {
              return T.each(this, e);
            },
            map: function (e) {
              return this.pushStack(
                T.map(this, function (t, n) {
                  return e.call(t, n, t);
                })
              );
            },
            slice: function () {
              return this.pushStack(l.apply(this, arguments));
            },
            first: function () {
              return this.eq(0);
            },
            last: function () {
              return this.eq(-1);
            },
            eq: function (e) {
              var t = this.length,
                n = +e + (e < 0 ? t : 0);
              return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
            },
            end: function () {
              return this.prevObject || this.constructor();
            },
            push: d,
            sort: a.sort,
            splice: a.splice,
          }),
            (T.extend = T.fn.extend = function () {
              var e,
                t,
                n,
                i,
                o,
                a,
                s = arguments[0] || {},
                u = 1,
                l = arguments.length,
                c = !1;
              for (
                "boolean" == typeof s &&
                  ((c = s), (s = arguments[u] || {}), u++),
                  "object" === (void 0 === s ? "undefined" : r(s)) ||
                    b(s) ||
                    (s = {}),
                  u === l && ((s = this), u--);
                u < l;
                u++
              )
                if (null != (e = arguments[u]))
                  for (t in e)
                    (i = e[t]),
                      "__proto__" !== t &&
                        s !== i &&
                        (c &&
                        i &&
                        (T.isPlainObject(i) || (o = Array.isArray(i)))
                          ? ((n = s[t]),
                            (a =
                              o && !Array.isArray(n)
                                ? []
                                : o || T.isPlainObject(n)
                                ? n
                                : {}),
                            (o = !1),
                            (s[t] = T.extend(c, a, i)))
                          : i !== undefined && (s[t] = i));
              return s;
            }),
            T.extend({
              expando: "jQuery" + ("3.4.1" + Math.random()).replace(/\D/g, ""),
              isReady: !0,
              error: function (e) {
                throw new Error(e);
              },
              noop: function () {},
              isPlainObject: function (e) {
                var t, n;
                return (
                  !(!e || "[object Object]" !== h.call(e)) &&
                  (!(t = u(e)) ||
                    ("function" ==
                      typeof (n = g.call(t, "constructor") && t.constructor) &&
                      m.call(n) === y))
                );
              },
              isEmptyObject: function (e) {
                var t;
                for (t in e) return !1;
                return !0;
              },
              globalEval: function (e, t) {
                x(e, { nonce: t && t.nonce });
              },
              each: function (e, t) {
                var n,
                  r = 0;
                if (C(e))
                  for (
                    n = e.length;
                    r < n && !1 !== t.call(e[r], r, e[r]);
                    r++
                  );
                else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
                return e;
              },
              trim: function (e) {
                return null == e ? "" : (e + "").replace(S, "");
              },
              makeArray: function (e, t) {
                var n = t || [];
                return (
                  null != e &&
                    (C(Object(e))
                      ? T.merge(n, "string" == typeof e ? [e] : e)
                      : d.call(n, e)),
                  n
                );
              },
              inArray: function (e, t, n) {
                return null == t ? -1 : f.call(t, e, n);
              },
              merge: function (e, t) {
                for (var n = +t.length, r = 0, i = e.length; r < n; r++)
                  e[i++] = t[r];
                return (e.length = i), e;
              },
              grep: function (e, t, n) {
                for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
                  !t(e[i], i) !== a && r.push(e[i]);
                return r;
              },
              map: function (e, t, n) {
                var r,
                  i,
                  o = 0,
                  a = [];
                if (C(e))
                  for (r = e.length; o < r; o++)
                    null != (i = t(e[o], o, n)) && a.push(i);
                else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
                return c.apply([], a);
              },
              guid: 1,
              support: v,
            }),
            "function" == typeof Symbol &&
              (T.fn[Symbol.iterator] = a[Symbol.iterator]),
            T.each(
              "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
                " "
              ),
              function (e, t) {
                p["[object " + t + "]"] = t.toLowerCase();
              }
            );
          var j = (function (e) {
            var t,
              n,
              r,
              i,
              o,
              a,
              s,
              u,
              l,
              c,
              d,
              f,
              p,
              h,
              g,
              m,
              y,
              v,
              b,
              w = "sizzle" + 1 * new Date(),
              _ = e.document,
              x = 0,
              k = 0,
              T = ue(),
              S = ue(),
              C = ue(),
              j = ue(),
              A = function (e, t) {
                return e === t && (d = !0), 0;
              },
              E = {}.hasOwnProperty,
              D = [],
              N = D.pop,
              L = D.push,
              O = D.push,
              P = D.slice,
              z = function (e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                  if (e[n] === t) return n;
                return -1;
              },
              q =
                "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
              I = "[\\x20\\t\\r\\n\\f]",
              H = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
              B =
                "\\[" +
                I +
                "*(" +
                H +
                ")(?:" +
                I +
                "*([*^$|!~]?=)" +
                I +
                "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
                H +
                "))|)" +
                I +
                "*\\]",
              R =
                ":(" +
                H +
                ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
                B +
                ")*)|.*)\\)|)",
              M = new RegExp(I + "+", "g"),
              U = new RegExp(
                "^" + I + "+|((?:^|[^\\\\])(?:\\\\.)*)" + I + "+$",
                "g"
              ),
              F = new RegExp("^" + I + "*," + I + "*"),
              W = new RegExp("^" + I + "*([>+~]|" + I + ")" + I + "*"),
              $ = new RegExp(I + "|>"),
              V = new RegExp(R),
              X = new RegExp("^" + H + "$"),
              G = {
                ID: new RegExp("^#(" + H + ")"),
                CLASS: new RegExp("^\\.(" + H + ")"),
                TAG: new RegExp("^(" + H + "|[*])"),
                ATTR: new RegExp("^" + B),
                PSEUDO: new RegExp("^" + R),
                CHILD: new RegExp(
                  "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                    I +
                    "*(even|odd|(([+-]|)(\\d*)n|)" +
                    I +
                    "*(?:([+-]|)" +
                    I +
                    "*(\\d+)|))" +
                    I +
                    "*\\)|)",
                  "i"
                ),
                bool: new RegExp("^(?:" + q + ")$", "i"),
                needsContext: new RegExp(
                  "^" +
                    I +
                    "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                    I +
                    "*((?:-\\d)?\\d*)" +
                    I +
                    "*\\)|)(?=[^-]|$)",
                  "i"
                ),
              },
              Y = /HTML$/i,
              Q = /^(?:input|select|textarea|button)$/i,
              J = /^h\d$/i,
              K = /^[^{]+\{\s*\[native \w/,
              Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
              ee = /[+~]/,
              te = new RegExp(
                "\\\\([\\da-f]{1,6}" + I + "?|(" + I + ")|.)",
                "ig"
              ),
              ne = function (e, t, n) {
                var r = "0x" + t - 65536;
                return r != r || n
                  ? t
                  : r < 0
                  ? String.fromCharCode(r + 65536)
                  : String.fromCharCode((r >> 10) | 55296, (1023 & r) | 56320);
              },
              re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
              ie = function (e, t) {
                return t
                  ? "\0" === e
                    ? "锟�"
                    : e.slice(0, -1) +
                      "\\" +
                      e.charCodeAt(e.length - 1).toString(16) +
                      " "
                  : "\\" + e;
              },
              oe = function () {
                f();
              },
              ae = we(
                function (e) {
                  return (
                    !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
                  );
                },
                { dir: "parentNode", next: "legend" }
              );
            try {
              O.apply((D = P.call(_.childNodes)), _.childNodes),
                D[_.childNodes.length].nodeType;
            } catch (Se) {
              O = {
                apply: D.length
                  ? function (e, t) {
                      L.apply(e, P.call(t));
                    }
                  : function (e, t) {
                      for (var n = e.length, r = 0; (e[n++] = t[r++]); );
                      e.length = n - 1;
                    },
              };
            }
            function se(e, t, r, i) {
              var o,
                s,
                l,
                c,
                d,
                h,
                y,
                v = t && t.ownerDocument,
                x = t ? t.nodeType : 9;
              if (
                ((r = r || []),
                "string" != typeof e || !e || (1 !== x && 9 !== x && 11 !== x))
              )
                return r;
              if (
                !i &&
                ((t ? t.ownerDocument || t : _) !== p && f(t), (t = t || p), g)
              ) {
                if (11 !== x && (d = Z.exec(e)))
                  if ((o = d[1])) {
                    if (9 === x) {
                      if (!(l = t.getElementById(o))) return r;
                      if (l.id === o) return r.push(l), r;
                    } else if (
                      v &&
                      (l = v.getElementById(o)) &&
                      b(t, l) &&
                      l.id === o
                    )
                      return r.push(l), r;
                  } else {
                    if (d[2]) return O.apply(r, t.getElementsByTagName(e)), r;
                    if (
                      (o = d[3]) &&
                      n.getElementsByClassName &&
                      t.getElementsByClassName
                    )
                      return O.apply(r, t.getElementsByClassName(o)), r;
                  }
                if (
                  n.qsa &&
                  !j[e + " "] &&
                  (!m || !m.test(e)) &&
                  (1 !== x || "object" !== t.nodeName.toLowerCase())
                ) {
                  if (((y = e), (v = t), 1 === x && $.test(e))) {
                    for (
                      (c = t.getAttribute("id"))
                        ? (c = c.replace(re, ie))
                        : t.setAttribute("id", (c = w)),
                        s = (h = a(e)).length;
                      s--;

                    )
                      h[s] = "#" + c + " " + be(h[s]);
                    (y = h.join(",")),
                      (v = (ee.test(e) && ye(t.parentNode)) || t);
                  }
                  try {
                    return O.apply(r, v.querySelectorAll(y)), r;
                  } catch (k) {
                    j(e, !0);
                  } finally {
                    c === w && t.removeAttribute("id");
                  }
                }
              }
              return u(e.replace(U, "$1"), t, r, i);
            }
            function ue() {
              var e = [];
              return function t(n, i) {
                return (
                  e.push(n + " ") > r.cacheLength && delete t[e.shift()],
                  (t[n + " "] = i)
                );
              };
            }
            function le(e) {
              return (e[w] = !0), e;
            }
            function ce(e) {
              var t = p.createElement("fieldset");
              try {
                return !!e(t);
              } catch (Se) {
                return !1;
              } finally {
                t.parentNode && t.parentNode.removeChild(t), (t = null);
              }
            }
            function de(e, t) {
              for (var n = e.split("|"), i = n.length; i--; )
                r.attrHandle[n[i]] = t;
            }
            function fe(e, t) {
              var n = t && e,
                r =
                  n &&
                  1 === e.nodeType &&
                  1 === t.nodeType &&
                  e.sourceIndex - t.sourceIndex;
              if (r) return r;
              if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
              return e ? 1 : -1;
            }
            function pe(e) {
              return function (t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e;
              };
            }
            function he(e) {
              return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e;
              };
            }
            function ge(e) {
              return function (t) {
                return "form" in t
                  ? t.parentNode && !1 === t.disabled
                    ? "label" in t
                      ? "label" in t.parentNode
                        ? t.parentNode.disabled === e
                        : t.disabled === e
                      : t.isDisabled === e ||
                        (t.isDisabled !== !e && ae(t) === e)
                    : t.disabled === e
                  : "label" in t && t.disabled === e;
              };
            }
            function me(e) {
              return le(function (t) {
                return (
                  (t = +t),
                  le(function (n, r) {
                    for (var i, o = e([], n.length, t), a = o.length; a--; )
                      n[(i = o[a])] && (n[i] = !(r[i] = n[i]));
                  })
                );
              });
            }
            function ye(e) {
              return e && "undefined" != typeof e.getElementsByTagName && e;
            }
            for (t in ((n = se.support = {}),
            (o = se.isXML = function (e) {
              var t = e.namespaceURI,
                n = (e.ownerDocument || e).documentElement;
              return !Y.test(t || (n && n.nodeName) || "HTML");
            }),
            (f = se.setDocument = function (e) {
              var t,
                i,
                a = e ? e.ownerDocument || e : _;
              return a !== p && 9 === a.nodeType && a.documentElement
                ? ((h = (p = a).documentElement),
                  (g = !o(p)),
                  _ !== p &&
                    (i = p.defaultView) &&
                    i.top !== i &&
                    (i.addEventListener
                      ? i.addEventListener("unload", oe, !1)
                      : i.attachEvent && i.attachEvent("onunload", oe)),
                  (n.attributes = ce(function (e) {
                    return (e.className = "i"), !e.getAttribute("className");
                  })),
                  (n.getElementsByTagName = ce(function (e) {
                    return (
                      e.appendChild(p.createComment("")),
                      !e.getElementsByTagName("*").length
                    );
                  })),
                  (n.getElementsByClassName = K.test(p.getElementsByClassName)),
                  (n.getById = ce(function (e) {
                    return (
                      (h.appendChild(e).id = w),
                      !p.getElementsByName || !p.getElementsByName(w).length
                    );
                  })),
                  n.getById
                    ? ((r.filter.ID = function (e) {
                        var t = e.replace(te, ne);
                        return function (e) {
                          return e.getAttribute("id") === t;
                        };
                      }),
                      (r.find.ID = function (e, t) {
                        if ("undefined" != typeof t.getElementById && g) {
                          var n = t.getElementById(e);
                          return n ? [n] : [];
                        }
                      }))
                    : ((r.filter.ID = function (e) {
                        var t = e.replace(te, ne);
                        return function (e) {
                          var n =
                            "undefined" != typeof e.getAttributeNode &&
                            e.getAttributeNode("id");
                          return n && n.value === t;
                        };
                      }),
                      (r.find.ID = function (e, t) {
                        if ("undefined" != typeof t.getElementById && g) {
                          var n,
                            r,
                            i,
                            o = t.getElementById(e);
                          if (o) {
                            if ((n = o.getAttributeNode("id")) && n.value === e)
                              return [o];
                            for (
                              i = t.getElementsByName(e), r = 0;
                              (o = i[r++]);

                            )
                              if (
                                (n = o.getAttributeNode("id")) &&
                                n.value === e
                              )
                                return [o];
                          }
                          return [];
                        }
                      })),
                  (r.find.TAG = n.getElementsByTagName
                    ? function (e, t) {
                        return "undefined" != typeof t.getElementsByTagName
                          ? t.getElementsByTagName(e)
                          : n.qsa
                          ? t.querySelectorAll(e)
                          : void 0;
                      }
                    : function (e, t) {
                        var n,
                          r = [],
                          i = 0,
                          o = t.getElementsByTagName(e);
                        if ("*" === e) {
                          for (; (n = o[i++]); ) 1 === n.nodeType && r.push(n);
                          return r;
                        }
                        return o;
                      }),
                  (r.find.CLASS =
                    n.getElementsByClassName &&
                    function (e, t) {
                      if ("undefined" != typeof t.getElementsByClassName && g)
                        return t.getElementsByClassName(e);
                    }),
                  (y = []),
                  (m = []),
                  (n.qsa = K.test(p.querySelectorAll)) &&
                    (ce(function (e) {
                      (h.appendChild(e).innerHTML =
                        "<a id='" +
                        w +
                        "'></a><select id='" +
                        w +
                        "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                        e.querySelectorAll("[msallowcapture^='']").length &&
                          m.push("[*^$]=" + I + "*(?:''|\"\")"),
                        e.querySelectorAll("[selected]").length ||
                          m.push("\\[" + I + "*(?:value|" + q + ")"),
                        e.querySelectorAll("[id~=" + w + "-]").length ||
                          m.push("~="),
                        e.querySelectorAll(":checked").length ||
                          m.push(":checked"),
                        e.querySelectorAll("a#" + w + "+*").length ||
                          m.push(".#.+[+~]");
                    }),
                    ce(function (e) {
                      e.innerHTML =
                        "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                      var t = p.createElement("input");
                      t.setAttribute("type", "hidden"),
                        e.appendChild(t).setAttribute("name", "D"),
                        e.querySelectorAll("[name=d]").length &&
                          m.push("name" + I + "*[*^$|!~]?="),
                        2 !== e.querySelectorAll(":enabled").length &&
                          m.push(":enabled", ":disabled"),
                        (h.appendChild(e).disabled = !0),
                        2 !== e.querySelectorAll(":disabled").length &&
                          m.push(":enabled", ":disabled"),
                        e.querySelectorAll("*,:x"),
                        m.push(",.*:");
                    })),
                  (n.matchesSelector = K.test(
                    (v =
                      h.matches ||
                      h.webkitMatchesSelector ||
                      h.mozMatchesSelector ||
                      h.oMatchesSelector ||
                      h.msMatchesSelector)
                  )) &&
                    ce(function (e) {
                      (n.disconnectedMatch = v.call(e, "*")),
                        v.call(e, "[s!='']:x"),
                        y.push("!=", R);
                    }),
                  (m = m.length && new RegExp(m.join("|"))),
                  (y = y.length && new RegExp(y.join("|"))),
                  (t = K.test(h.compareDocumentPosition)),
                  (b =
                    t || K.test(h.contains)
                      ? function (e, t) {
                          var n = 9 === e.nodeType ? e.documentElement : e,
                            r = t && t.parentNode;
                          return (
                            e === r ||
                            !(
                              !r ||
                              1 !== r.nodeType ||
                              !(n.contains
                                ? n.contains(r)
                                : e.compareDocumentPosition &&
                                  16 & e.compareDocumentPosition(r))
                            )
                          );
                        }
                      : function (e, t) {
                          if (t)
                            for (; (t = t.parentNode); ) if (t === e) return !0;
                          return !1;
                        }),
                  (A = t
                    ? function (e, t) {
                        if (e === t) return (d = !0), 0;
                        var r =
                          !e.compareDocumentPosition -
                          !t.compareDocumentPosition;
                        return (
                          r ||
                          (1 &
                            (r =
                              (e.ownerDocument || e) === (t.ownerDocument || t)
                                ? e.compareDocumentPosition(t)
                                : 1) ||
                          (!n.sortDetached &&
                            t.compareDocumentPosition(e) === r)
                            ? e === p || (e.ownerDocument === _ && b(_, e))
                              ? -1
                              : t === p || (t.ownerDocument === _ && b(_, t))
                              ? 1
                              : c
                              ? z(c, e) - z(c, t)
                              : 0
                            : 4 & r
                            ? -1
                            : 1)
                        );
                      }
                    : function (e, t) {
                        if (e === t) return (d = !0), 0;
                        var n,
                          r = 0,
                          i = e.parentNode,
                          o = t.parentNode,
                          a = [e],
                          s = [t];
                        if (!i || !o)
                          return e === p
                            ? -1
                            : t === p
                            ? 1
                            : i
                            ? -1
                            : o
                            ? 1
                            : c
                            ? z(c, e) - z(c, t)
                            : 0;
                        if (i === o) return fe(e, t);
                        for (n = e; (n = n.parentNode); ) a.unshift(n);
                        for (n = t; (n = n.parentNode); ) s.unshift(n);
                        for (; a[r] === s[r]; ) r++;
                        return r
                          ? fe(a[r], s[r])
                          : a[r] === _
                          ? -1
                          : s[r] === _
                          ? 1
                          : 0;
                      }),
                  p)
                : p;
            }),
            (se.matches = function (e, t) {
              return se(e, null, null, t);
            }),
            (se.matchesSelector = function (e, t) {
              if (
                ((e.ownerDocument || e) !== p && f(e),
                n.matchesSelector &&
                  g &&
                  !j[t + " "] &&
                  (!y || !y.test(t)) &&
                  (!m || !m.test(t)))
              )
                try {
                  var r = v.call(e, t);
                  if (
                    r ||
                    n.disconnectedMatch ||
                    (e.document && 11 !== e.document.nodeType)
                  )
                    return r;
                } catch (Se) {
                  j(t, !0);
                }
              return se(t, p, null, [e]).length > 0;
            }),
            (se.contains = function (e, t) {
              return (e.ownerDocument || e) !== p && f(e), b(e, t);
            }),
            (se.attr = function (e, t) {
              (e.ownerDocument || e) !== p && f(e);
              var i = r.attrHandle[t.toLowerCase()],
                o =
                  i && E.call(r.attrHandle, t.toLowerCase())
                    ? i(e, t, !g)
                    : undefined;
              return o !== undefined
                ? o
                : n.attributes || !g
                ? e.getAttribute(t)
                : (o = e.getAttributeNode(t)) && o.specified
                ? o.value
                : null;
            }),
            (se.escape = function (e) {
              return (e + "").replace(re, ie);
            }),
            (se.error = function (e) {
              throw new Error("Syntax error, unrecognized expression: " + e);
            }),
            (se.uniqueSort = function (e) {
              var t,
                r = [],
                i = 0,
                o = 0;
              if (
                ((d = !n.detectDuplicates),
                (c = !n.sortStable && e.slice(0)),
                e.sort(A),
                d)
              ) {
                for (; (t = e[o++]); ) t === e[o] && (i = r.push(o));
                for (; i--; ) e.splice(r[i], 1);
              }
              return (c = null), e;
            }),
            (i = se.getText = function (e) {
              var t,
                n = "",
                r = 0,
                o = e.nodeType;
              if (o) {
                if (1 === o || 9 === o || 11 === o) {
                  if ("string" == typeof e.textContent) return e.textContent;
                  for (e = e.firstChild; e; e = e.nextSibling) n += i(e);
                } else if (3 === o || 4 === o) return e.nodeValue;
              } else for (; (t = e[r++]); ) n += i(t);
              return n;
            }),
            ((r = se.selectors = {
              cacheLength: 50,
              createPseudo: le,
              match: G,
              attrHandle: {},
              find: {},
              relative: {
                ">": { dir: "parentNode", first: !0 },
                " ": { dir: "parentNode" },
                "+": { dir: "previousSibling", first: !0 },
                "~": { dir: "previousSibling" },
              },
              preFilter: {
                ATTR: function (e) {
                  return (
                    (e[1] = e[1].replace(te, ne)),
                    (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                  );
                },
                CHILD: function (e) {
                  return (
                    (e[1] = e[1].toLowerCase()),
                    "nth" === e[1].slice(0, 3)
                      ? (e[3] || se.error(e[0]),
                        (e[4] = +(e[4]
                          ? e[5] + (e[6] || 1)
                          : 2 * ("even" === e[3] || "odd" === e[3]))),
                        (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                      : e[3] && se.error(e[0]),
                    e
                  );
                },
                PSEUDO: function (e) {
                  var t,
                    n = !e[6] && e[2];
                  return G.CHILD.test(e[0])
                    ? null
                    : (e[3]
                        ? (e[2] = e[4] || e[5] || "")
                        : n &&
                          V.test(n) &&
                          (t = a(n, !0)) &&
                          (t = n.indexOf(")", n.length - t) - n.length) &&
                          ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                      e.slice(0, 3));
                },
              },
              filter: {
                TAG: function (e) {
                  var t = e.replace(te, ne).toLowerCase();
                  return "*" === e
                    ? function () {
                        return !0;
                      }
                    : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t;
                      };
                },
                CLASS: function (e) {
                  var t = T[e + " "];
                  return (
                    t ||
                    ((t = new RegExp("(^|" + I + ")" + e + "(" + I + "|$)")) &&
                      T(e, function (e) {
                        return t.test(
                          ("string" == typeof e.className && e.className) ||
                            ("undefined" != typeof e.getAttribute &&
                              e.getAttribute("class")) ||
                            ""
                        );
                      }))
                  );
                },
                ATTR: function (e, t, n) {
                  return function (r) {
                    var i = se.attr(r, e);
                    return null == i
                      ? "!=" === t
                      : !t ||
                          ((i += ""),
                          "=" === t
                            ? i === n
                            : "!=" === t
                            ? i !== n
                            : "^=" === t
                            ? n && 0 === i.indexOf(n)
                            : "*=" === t
                            ? n && i.indexOf(n) > -1
                            : "$=" === t
                            ? n && i.slice(-n.length) === n
                            : "~=" === t
                            ? (" " + i.replace(M, " ") + " ").indexOf(n) > -1
                            : "|=" === t &&
                              (i === n ||
                                i.slice(0, n.length + 1) === n + "-"));
                  };
                },
                CHILD: function (e, t, n, r, i) {
                  var o = "nth" !== e.slice(0, 3),
                    a = "last" !== e.slice(-4),
                    s = "of-type" === t;
                  return 1 === r && 0 === i
                    ? function (e) {
                        return !!e.parentNode;
                      }
                    : function (t, n, u) {
                        var l,
                          c,
                          d,
                          f,
                          p,
                          h,
                          g = o !== a ? "nextSibling" : "previousSibling",
                          m = t.parentNode,
                          y = s && t.nodeName.toLowerCase(),
                          v = !u && !s,
                          b = !1;
                        if (m) {
                          if (o) {
                            for (; g; ) {
                              for (f = t; (f = f[g]); )
                                if (
                                  s
                                    ? f.nodeName.toLowerCase() === y
                                    : 1 === f.nodeType
                                )
                                  return !1;
                              h = g = "only" === e && !h && "nextSibling";
                            }
                            return !0;
                          }
                          if (
                            ((h = [a ? m.firstChild : m.lastChild]), a && v)
                          ) {
                            for (
                              b =
                                (p =
                                  (l =
                                    (c =
                                      (d = (f = m)[w] || (f[w] = {}))[
                                        f.uniqueID
                                      ] || (d[f.uniqueID] = {}))[e] ||
                                    [])[0] === x && l[1]) && l[2],
                                f = p && m.childNodes[p];
                              (f =
                                (++p && f && f[g]) || (b = p = 0) || h.pop());

                            )
                              if (1 === f.nodeType && ++b && f === t) {
                                c[e] = [x, p, b];
                                break;
                              }
                          } else if (
                            (v &&
                              (b = p =
                                (l =
                                  (c =
                                    (d = (f = t)[w] || (f[w] = {}))[
                                      f.uniqueID
                                    ] || (d[f.uniqueID] = {}))[e] || [])[0] ===
                                  x && l[1]),
                            !1 === b)
                          )
                            for (
                              ;
                              (f =
                                (++p && f && f[g]) || (b = p = 0) || h.pop()) &&
                              ((s
                                ? f.nodeName.toLowerCase() !== y
                                : 1 !== f.nodeType) ||
                                !++b ||
                                (v &&
                                  ((c =
                                    (d = f[w] || (f[w] = {}))[f.uniqueID] ||
                                    (d[f.uniqueID] = {}))[e] = [x, b]),
                                f !== t));

                            );
                          return (b -= i) === r || (b % r == 0 && b / r >= 0);
                        }
                      };
                },
                PSEUDO: function (e, t) {
                  var n,
                    i =
                      r.pseudos[e] ||
                      r.setFilters[e.toLowerCase()] ||
                      se.error("unsupported pseudo: " + e);
                  return i[w]
                    ? i(t)
                    : i.length > 1
                    ? ((n = [e, e, "", t]),
                      r.setFilters.hasOwnProperty(e.toLowerCase())
                        ? le(function (e, n) {
                            for (var r, o = i(e, t), a = o.length; a--; )
                              e[(r = z(e, o[a]))] = !(n[r] = o[a]);
                          })
                        : function (e) {
                            return i(e, 0, n);
                          })
                    : i;
                },
              },
              pseudos: {
                not: le(function (e) {
                  var t = [],
                    n = [],
                    r = s(e.replace(U, "$1"));
                  return r[w]
                    ? le(function (e, t, n, i) {
                        for (var o, a = r(e, null, i, []), s = e.length; s--; )
                          (o = a[s]) && (e[s] = !(t[s] = o));
                      })
                    : function (e, i, o) {
                        return (
                          (t[0] = e), r(t, null, o, n), (t[0] = null), !n.pop()
                        );
                      };
                }),
                has: le(function (e) {
                  return function (t) {
                    return se(e, t).length > 0;
                  };
                }),
                contains: le(function (e) {
                  return (
                    (e = e.replace(te, ne)),
                    function (t) {
                      return (t.textContent || i(t)).indexOf(e) > -1;
                    }
                  );
                }),
                lang: le(function (e) {
                  return (
                    X.test(e || "") || se.error("unsupported lang: " + e),
                    (e = e.replace(te, ne).toLowerCase()),
                    function (t) {
                      var n;
                      do {
                        if (
                          (n = g
                            ? t.lang
                            : t.getAttribute("xml:lang") ||
                              t.getAttribute("lang"))
                        )
                          return (
                            (n = n.toLowerCase()) === e ||
                            0 === n.indexOf(e + "-")
                          );
                      } while ((t = t.parentNode) && 1 === t.nodeType);
                      return !1;
                    }
                  );
                }),
                target: function (t) {
                  var n = e.location && e.location.hash;
                  return n && n.slice(1) === t.id;
                },
                root: function (e) {
                  return e === h;
                },
                focus: function (e) {
                  return (
                    e === p.activeElement &&
                    (!p.hasFocus || p.hasFocus()) &&
                    !!(e.type || e.href || ~e.tabIndex)
                  );
                },
                enabled: ge(!1),
                disabled: ge(!0),
                checked: function (e) {
                  var t = e.nodeName.toLowerCase();
                  return (
                    ("input" === t && !!e.checked) ||
                    ("option" === t && !!e.selected)
                  );
                },
                selected: function (e) {
                  return (
                    e.parentNode && e.parentNode.selectedIndex,
                    !0 === e.selected
                  );
                },
                empty: function (e) {
                  for (e = e.firstChild; e; e = e.nextSibling)
                    if (e.nodeType < 6) return !1;
                  return !0;
                },
                parent: function (e) {
                  return !r.pseudos.empty(e);
                },
                header: function (e) {
                  return J.test(e.nodeName);
                },
                input: function (e) {
                  return Q.test(e.nodeName);
                },
                button: function (e) {
                  var t = e.nodeName.toLowerCase();
                  return (
                    ("input" === t && "button" === e.type) || "button" === t
                  );
                },
                text: function (e) {
                  var t;
                  return (
                    "input" === e.nodeName.toLowerCase() &&
                    "text" === e.type &&
                    (null == (t = e.getAttribute("type")) ||
                      "text" === t.toLowerCase())
                  );
                },
                first: me(function () {
                  return [0];
                }),
                last: me(function (e, t) {
                  return [t - 1];
                }),
                eq: me(function (e, t, n) {
                  return [n < 0 ? n + t : n];
                }),
                even: me(function (e, t) {
                  for (var n = 0; n < t; n += 2) e.push(n);
                  return e;
                }),
                odd: me(function (e, t) {
                  for (var n = 1; n < t; n += 2) e.push(n);
                  return e;
                }),
                lt: me(function (e, t, n) {
                  for (var r = n < 0 ? n + t : n > t ? t : n; --r >= 0; )
                    e.push(r);
                  return e;
                }),
                gt: me(function (e, t, n) {
                  for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
                  return e;
                }),
              },
            }).pseudos.nth = r.pseudos.eq),
            { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
              r.pseudos[t] = pe(t);
            for (t in { submit: !0, reset: !0 }) r.pseudos[t] = he(t);
            function ve() {}
            function be(e) {
              for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
              return r;
            }
            function we(e, t, n) {
              var r = t.dir,
                i = t.next,
                o = i || r,
                a = n && "parentNode" === o,
                s = k++;
              return t.first
                ? function (t, n, i) {
                    for (; (t = t[r]); )
                      if (1 === t.nodeType || a) return e(t, n, i);
                    return !1;
                  }
                : function (t, n, u) {
                    var l,
                      c,
                      d,
                      f = [x, s];
                    if (u) {
                      for (; (t = t[r]); )
                        if ((1 === t.nodeType || a) && e(t, n, u)) return !0;
                    } else
                      for (; (t = t[r]); )
                        if (1 === t.nodeType || a)
                          if (
                            ((c =
                              (d = t[w] || (t[w] = {}))[t.uniqueID] ||
                              (d[t.uniqueID] = {})),
                            i && i === t.nodeName.toLowerCase())
                          )
                            t = t[r] || t;
                          else {
                            if ((l = c[o]) && l[0] === x && l[1] === s)
                              return (f[2] = l[2]);
                            if (((c[o] = f), (f[2] = e(t, n, u)))) return !0;
                          }
                    return !1;
                  };
            }
            function _e(e) {
              return e.length > 1
                ? function (t, n, r) {
                    for (var i = e.length; i--; ) if (!e[i](t, n, r)) return !1;
                    return !0;
                  }
                : e[0];
            }
            function xe(e, t, n, r, i) {
              for (
                var o, a = [], s = 0, u = e.length, l = null != t;
                s < u;
                s++
              )
                (o = e[s]) &&
                  ((n && !n(o, r, i)) || (a.push(o), l && t.push(s)));
              return a;
            }
            function ke(e, t, n, r, i, o) {
              return (
                r && !r[w] && (r = ke(r)),
                i && !i[w] && (i = ke(i, o)),
                le(function (o, a, s, u) {
                  var l,
                    c,
                    d,
                    f = [],
                    p = [],
                    h = a.length,
                    g =
                      o ||
                      (function (e, t, n) {
                        for (var r = 0, i = t.length; r < i; r++)
                          se(e, t[r], n);
                        return n;
                      })(t || "*", s.nodeType ? [s] : s, []),
                    m = !e || (!o && t) ? g : xe(g, f, e, s, u),
                    y = n ? (i || (o ? e : h || r) ? [] : a) : m;
                  if ((n && n(m, y, s, u), r))
                    for (l = xe(y, p), r(l, [], s, u), c = l.length; c--; )
                      (d = l[c]) && (y[p[c]] = !(m[p[c]] = d));
                  if (o) {
                    if (i || e) {
                      if (i) {
                        for (l = [], c = y.length; c--; )
                          (d = y[c]) && l.push((m[c] = d));
                        i(null, (y = []), l, u);
                      }
                      for (c = y.length; c--; )
                        (d = y[c]) &&
                          (l = i ? z(o, d) : f[c]) > -1 &&
                          (o[l] = !(a[l] = d));
                    }
                  } else (y = xe(y === a ? y.splice(h, y.length) : y)), i ? i(null, a, y, u) : O.apply(a, y);
                })
              );
            }
            function Te(e) {
              for (
                var t,
                  n,
                  i,
                  o = e.length,
                  a = r.relative[e[0].type],
                  s = a || r.relative[" "],
                  u = a ? 1 : 0,
                  c = we(
                    function (e) {
                      return e === t;
                    },
                    s,
                    !0
                  ),
                  d = we(
                    function (e) {
                      return z(t, e) > -1;
                    },
                    s,
                    !0
                  ),
                  f = [
                    function (e, n, r) {
                      var i =
                        (!a && (r || n !== l)) ||
                        ((t = n).nodeType ? c(e, n, r) : d(e, n, r));
                      return (t = null), i;
                    },
                  ];
                u < o;
                u++
              )
                if ((n = r.relative[e[u].type])) f = [we(_e(f), n)];
                else {
                  if ((n = r.filter[e[u].type].apply(null, e[u].matches))[w]) {
                    for (i = ++u; i < o && !r.relative[e[i].type]; i++);
                    return ke(
                      u > 1 && _e(f),
                      u > 1 &&
                        be(
                          e
                            .slice(0, u - 1)
                            .concat({ value: " " === e[u - 2].type ? "*" : "" })
                        ).replace(U, "$1"),
                      n,
                      u < i && Te(e.slice(u, i)),
                      i < o && Te((e = e.slice(i))),
                      i < o && be(e)
                    );
                  }
                  f.push(n);
                }
              return _e(f);
            }
            return (
              (ve.prototype = r.filters = r.pseudos),
              (r.setFilters = new ve()),
              (a = se.tokenize = function (e, t) {
                var n,
                  i,
                  o,
                  a,
                  s,
                  u,
                  l,
                  c = S[e + " "];
                if (c) return t ? 0 : c.slice(0);
                for (s = e, u = [], l = r.preFilter; s; ) {
                  for (a in ((n && !(i = F.exec(s))) ||
                    (i && (s = s.slice(i[0].length) || s), u.push((o = []))),
                  (n = !1),
                  (i = W.exec(s)) &&
                    ((n = i.shift()),
                    o.push({ value: n, type: i[0].replace(U, " ") }),
                    (s = s.slice(n.length))),
                  r.filter))
                    !(i = G[a].exec(s)) ||
                      (l[a] && !(i = l[a](i))) ||
                      ((n = i.shift()),
                      o.push({ value: n, type: a, matches: i }),
                      (s = s.slice(n.length)));
                  if (!n) break;
                }
                return t ? s.length : s ? se.error(e) : S(e, u).slice(0);
              }),
              (s = se.compile = function (e, t) {
                var n,
                  i = [],
                  o = [],
                  s = C[e + " "];
                if (!s) {
                  for (t || (t = a(e)), n = t.length; n--; )
                    (s = Te(t[n]))[w] ? i.push(s) : o.push(s);
                  (s = C(
                    e,
                    (function (e, t) {
                      var n = t.length > 0,
                        i = e.length > 0,
                        o = function (o, a, s, u, c) {
                          var d,
                            h,
                            m,
                            y = 0,
                            v = "0",
                            b = o && [],
                            w = [],
                            _ = l,
                            k = o || (i && r.find.TAG("*", c)),
                            T = (x += null == _ ? 1 : Math.random() || 0.1),
                            S = k.length;
                          for (
                            c && (l = a === p || a || c);
                            v !== S && null != (d = k[v]);
                            v++
                          ) {
                            if (i && d) {
                              for (
                                h = 0,
                                  a ||
                                    d.ownerDocument === p ||
                                    (f(d), (s = !g));
                                (m = e[h++]);

                              )
                                if (m(d, a || p, s)) {
                                  u.push(d);
                                  break;
                                }
                              c && (x = T);
                            }
                            n && ((d = !m && d) && y--, o && b.push(d));
                          }
                          if (((y += v), n && v !== y)) {
                            for (h = 0; (m = t[h++]); ) m(b, w, a, s);
                            if (o) {
                              if (y > 0)
                                for (; v--; )
                                  b[v] || w[v] || (w[v] = N.call(u));
                              w = xe(w);
                            }
                            O.apply(u, w),
                              c &&
                                !o &&
                                w.length > 0 &&
                                y + t.length > 1 &&
                                se.uniqueSort(u);
                          }
                          return c && ((x = T), (l = _)), b;
                        };
                      return n ? le(o) : o;
                    })(o, i)
                  )).selector = e;
                }
                return s;
              }),
              (u = se.select = function (e, t, n, i) {
                var o,
                  u,
                  l,
                  c,
                  d,
                  f = "function" == typeof e && e,
                  p = !i && a((e = f.selector || e));
                if (((n = n || []), 1 === p.length)) {
                  if (
                    (u = p[0] = p[0].slice(0)).length > 2 &&
                    "ID" === (l = u[0]).type &&
                    9 === t.nodeType &&
                    g &&
                    r.relative[u[1].type]
                  ) {
                    if (
                      !(t = (r.find.ID(l.matches[0].replace(te, ne), t) ||
                        [])[0])
                    )
                      return n;
                    f && (t = t.parentNode),
                      (e = e.slice(u.shift().value.length));
                  }
                  for (
                    o = G.needsContext.test(e) ? 0 : u.length;
                    o-- && ((l = u[o]), !r.relative[(c = l.type)]);

                  )
                    if (
                      (d = r.find[c]) &&
                      (i = d(
                        l.matches[0].replace(te, ne),
                        (ee.test(u[0].type) && ye(t.parentNode)) || t
                      ))
                    ) {
                      if ((u.splice(o, 1), !(e = i.length && be(u))))
                        return O.apply(n, i), n;
                      break;
                    }
                }
                return (
                  (f || s(e, p))(
                    i,
                    t,
                    !g,
                    n,
                    !t || (ee.test(e) && ye(t.parentNode)) || t
                  ),
                  n
                );
              }),
              (n.sortStable = w.split("").sort(A).join("") === w),
              (n.detectDuplicates = !!d),
              f(),
              (n.sortDetached = ce(function (e) {
                return (
                  1 & e.compareDocumentPosition(p.createElement("fieldset"))
                );
              })),
              ce(function (e) {
                return (
                  (e.innerHTML = "<a href='#'></a>"),
                  "#" === e.firstChild.getAttribute("href")
                );
              }) ||
                de("type|href|height|width", function (e, t, n) {
                  if (!n)
                    return e.getAttribute(
                      t,
                      "type" === t.toLowerCase() ? 1 : 2
                    );
                }),
              (n.attributes &&
                ce(function (e) {
                  return (
                    (e.innerHTML = "<input/>"),
                    e.firstChild.setAttribute("value", ""),
                    "" === e.firstChild.getAttribute("value")
                  );
                })) ||
                de("value", function (e, t, n) {
                  if (!n && "input" === e.nodeName.toLowerCase())
                    return e.defaultValue;
                }),
              ce(function (e) {
                return null == e.getAttribute("disabled");
              }) ||
                de(q, function (e, t, n) {
                  var r;
                  if (!n)
                    return !0 === e[t]
                      ? t.toLowerCase()
                      : (r = e.getAttributeNode(t)) && r.specified
                      ? r.value
                      : null;
                }),
              se
            );
          })(i);
          (T.find = j),
            (T.expr = j.selectors),
            (T.expr[":"] = T.expr.pseudos),
            (T.uniqueSort = T.unique = j.uniqueSort),
            (T.text = j.getText),
            (T.isXMLDoc = j.isXML),
            (T.contains = j.contains),
            (T.escapeSelector = j.escape);
          var A = function (e, t, n) {
              for (
                var r = [], i = n !== undefined;
                (e = e[t]) && 9 !== e.nodeType;

              )
                if (1 === e.nodeType) {
                  if (i && T(e).is(n)) break;
                  r.push(e);
                }
              return r;
            },
            E = function (e, t) {
              for (var n = []; e; e = e.nextSibling)
                1 === e.nodeType && e !== t && n.push(e);
              return n;
            },
            D = T.expr.match.needsContext;
          function N(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
          }
          var L = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
          function O(e, t, n) {
            return b(t)
              ? T.grep(e, function (e, r) {
                  return !!t.call(e, r, e) !== n;
                })
              : t.nodeType
              ? T.grep(e, function (e) {
                  return (e === t) !== n;
                })
              : "string" != typeof t
              ? T.grep(e, function (e) {
                  return f.call(t, e) > -1 !== n;
                })
              : T.filter(t, e, n);
          }
          (T.filter = function (e, t, n) {
            var r = t[0];
            return (
              n && (e = ":not(" + e + ")"),
              1 === t.length && 1 === r.nodeType
                ? T.find.matchesSelector(r, e)
                  ? [r]
                  : []
                : T.find.matches(
                    e,
                    T.grep(t, function (e) {
                      return 1 === e.nodeType;
                    })
                  )
            );
          }),
            T.fn.extend({
              find: function (e) {
                var t,
                  n,
                  r = this.length,
                  i = this;
                if ("string" != typeof e)
                  return this.pushStack(
                    T(e).filter(function () {
                      for (t = 0; t < r; t++)
                        if (T.contains(i[t], this)) return !0;
                    })
                  );
                for (n = this.pushStack([]), t = 0; t < r; t++)
                  T.find(e, i[t], n);
                return r > 1 ? T.uniqueSort(n) : n;
              },
              filter: function (e) {
                return this.pushStack(O(this, e || [], !1));
              },
              not: function (e) {
                return this.pushStack(O(this, e || [], !0));
              },
              is: function (e) {
                return !!O(
                  this,
                  "string" == typeof e && D.test(e) ? T(e) : e || [],
                  !1
                ).length;
              },
            });
          var P,
            z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
          ((T.fn.init = function (e, t, n) {
            var r, i;
            if (!e) return this;
            if (((n = n || P), "string" == typeof e)) {
              if (
                !(r =
                  "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
                    ? [null, e, null]
                    : z.exec(e)) ||
                (!r[1] && t)
              )
                return !t || t.jquery
                  ? (t || n).find(e)
                  : this.constructor(t).find(e);
              if (r[1]) {
                if (
                  ((t = t instanceof T ? t[0] : t),
                  T.merge(
                    this,
                    T.parseHTML(
                      r[1],
                      t && t.nodeType ? t.ownerDocument || t : s,
                      !0
                    )
                  ),
                  L.test(r[1]) && T.isPlainObject(t))
                )
                  for (r in t) b(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this;
              }
              return (
                (i = s.getElementById(r[2])) &&
                  ((this[0] = i), (this.length = 1)),
                this
              );
            }
            return e.nodeType
              ? ((this[0] = e), (this.length = 1), this)
              : b(e)
              ? n.ready !== undefined
                ? n.ready(e)
                : e(T)
              : T.makeArray(e, this);
          }).prototype = T.fn),
            (P = T(s));
          var q = /^(?:parents|prev(?:Until|All))/,
            I = { children: !0, contents: !0, next: !0, prev: !0 };
          function H(e, t) {
            for (; (e = e[t]) && 1 !== e.nodeType; );
            return e;
          }
          T.fn.extend({
            has: function (e) {
              var t = T(e, this),
                n = t.length;
              return this.filter(function () {
                for (var e = 0; e < n; e++)
                  if (T.contains(this, t[e])) return !0;
              });
            },
            closest: function (e, t) {
              var n,
                r = 0,
                i = this.length,
                o = [],
                a = "string" != typeof e && T(e);
              if (!D.test(e))
                for (; r < i; r++)
                  for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (
                      n.nodeType < 11 &&
                      (a
                        ? a.index(n) > -1
                        : 1 === n.nodeType && T.find.matchesSelector(n, e))
                    ) {
                      o.push(n);
                      break;
                    }
              return this.pushStack(o.length > 1 ? T.uniqueSort(o) : o);
            },
            index: function (e) {
              return e
                ? "string" == typeof e
                  ? f.call(T(e), this[0])
                  : f.call(this, e.jquery ? e[0] : e)
                : this[0] && this[0].parentNode
                ? this.first().prevAll().length
                : -1;
            },
            add: function (e, t) {
              return this.pushStack(T.uniqueSort(T.merge(this.get(), T(e, t))));
            },
            addBack: function (e) {
              return this.add(
                null == e ? this.prevObject : this.prevObject.filter(e)
              );
            },
          }),
            T.each(
              {
                parent: function (e) {
                  var t = e.parentNode;
                  return t && 11 !== t.nodeType ? t : null;
                },
                parents: function (e) {
                  return A(e, "parentNode");
                },
                parentsUntil: function (e, t, n) {
                  return A(e, "parentNode", n);
                },
                next: function (e) {
                  return H(e, "nextSibling");
                },
                prev: function (e) {
                  return H(e, "previousSibling");
                },
                nextAll: function (e) {
                  return A(e, "nextSibling");
                },
                prevAll: function (e) {
                  return A(e, "previousSibling");
                },
                nextUntil: function (e, t, n) {
                  return A(e, "nextSibling", n);
                },
                prevUntil: function (e, t, n) {
                  return A(e, "previousSibling", n);
                },
                siblings: function (e) {
                  return E((e.parentNode || {}).firstChild, e);
                },
                children: function (e) {
                  return E(e.firstChild);
                },
                contents: function (e) {
                  return "undefined" != typeof e.contentDocument
                    ? e.contentDocument
                    : (N(e, "template") && (e = e.content || e),
                      T.merge([], e.childNodes));
                },
              },
              function (e, t) {
                T.fn[e] = function (n, r) {
                  var i = T.map(this, t, n);
                  return (
                    "Until" !== e.slice(-5) && (r = n),
                    r && "string" == typeof r && (i = T.filter(r, i)),
                    this.length > 1 &&
                      (I[e] || T.uniqueSort(i), q.test(e) && i.reverse()),
                    this.pushStack(i)
                  );
                };
              }
            );
          var B = /[^\x20\t\r\n\f]+/g;
          function R(e) {
            return e;
          }
          function M(e) {
            throw e;
          }
          function U(e, t, n, r) {
            var i;
            try {
              e && b((i = e.promise))
                ? i.call(e).done(t).fail(n)
                : e && b((i = e.then))
                ? i.call(e, t, n)
                : t.apply(undefined, [e].slice(r));
            } catch (e) {
              n.apply(undefined, [e]);
            }
          }
          (T.Callbacks = function (e) {
            e =
              "string" == typeof e
                ? (function (e) {
                    var t = {};
                    return (
                      T.each(e.match(B) || [], function (e, n) {
                        t[n] = !0;
                      }),
                      t
                    );
                  })(e)
                : T.extend({}, e);
            var t,
              n,
              r,
              i,
              o = [],
              a = [],
              s = -1,
              u = function () {
                for (i = i || e.once, r = t = !0; a.length; s = -1)
                  for (n = a.shift(); ++s < o.length; )
                    !1 === o[s].apply(n[0], n[1]) &&
                      e.stopOnFalse &&
                      ((s = o.length), (n = !1));
                e.memory || (n = !1), (t = !1), i && (o = n ? [] : "");
              },
              l = {
                add: function () {
                  return (
                    o &&
                      (n && !t && ((s = o.length - 1), a.push(n)),
                      (function r(t) {
                        T.each(t, function (t, n) {
                          b(n)
                            ? (e.unique && l.has(n)) || o.push(n)
                            : n && n.length && "string" !== k(n) && r(n);
                        });
                      })(arguments),
                      n && !t && u()),
                    this
                  );
                },
                remove: function () {
                  return (
                    T.each(arguments, function (e, t) {
                      for (var n; (n = T.inArray(t, o, n)) > -1; )
                        o.splice(n, 1), n <= s && s--;
                    }),
                    this
                  );
                },
                has: function (e) {
                  return e ? T.inArray(e, o) > -1 : o.length > 0;
                },
                empty: function () {
                  return o && (o = []), this;
                },
                disable: function () {
                  return (i = a = []), (o = n = ""), this;
                },
                disabled: function () {
                  return !o;
                },
                lock: function () {
                  return (i = a = []), n || t || (o = n = ""), this;
                },
                locked: function () {
                  return !!i;
                },
                fireWith: function (e, n) {
                  return (
                    i ||
                      ((n = [e, (n = n || []).slice ? n.slice() : n]),
                      a.push(n),
                      t || u()),
                    this
                  );
                },
                fire: function () {
                  return l.fireWith(this, arguments), this;
                },
                fired: function () {
                  return !!r;
                },
              };
            return l;
          }),
            T.extend({
              Deferred: function (e) {
                var t = [
                    [
                      "notify",
                      "progress",
                      T.Callbacks("memory"),
                      T.Callbacks("memory"),
                      2,
                    ],
                    [
                      "resolve",
                      "done",
                      T.Callbacks("once memory"),
                      T.Callbacks("once memory"),
                      0,
                      "resolved",
                    ],
                    [
                      "reject",
                      "fail",
                      T.Callbacks("once memory"),
                      T.Callbacks("once memory"),
                      1,
                      "rejected",
                    ],
                  ],
                  n = "pending",
                  o = {
                    state: function () {
                      return n;
                    },
                    always: function () {
                      return a.done(arguments).fail(arguments), this;
                    },
                    catch: function (e) {
                      return o.then(null, e);
                    },
                    pipe: function () {
                      var e = arguments;
                      return T.Deferred(function (n) {
                        T.each(t, function (t, r) {
                          var i = b(e[r[4]]) && e[r[4]];
                          a[r[1]](function () {
                            var e = i && i.apply(this, arguments);
                            e && b(e.promise)
                              ? e
                                  .promise()
                                  .progress(n.notify)
                                  .done(n.resolve)
                                  .fail(n.reject)
                              : n[r[0] + "With"](this, i ? [e] : arguments);
                          });
                        }),
                          (e = null);
                      }).promise();
                    },
                    then: function (e, n, o) {
                      var a = 0;
                      function s(e, t, n, o) {
                        return function () {
                          var u = this,
                            l = arguments,
                            c = function () {
                              var i, c;
                              if (!(e < a)) {
                                if ((i = n.apply(u, l)) === t.promise())
                                  throw new TypeError(
                                    "Thenable self-resolution"
                                  );
                                (c =
                                  i &&
                                  ("object" ===
                                    (void 0 === i ? "undefined" : r(i)) ||
                                    "function" == typeof i) &&
                                  i.then),
                                  b(c)
                                    ? o
                                      ? c.call(i, s(a, t, R, o), s(a, t, M, o))
                                      : (a++,
                                        c.call(
                                          i,
                                          s(a, t, R, o),
                                          s(a, t, M, o),
                                          s(a, t, R, t.notifyWith)
                                        ))
                                    : (n !== R && ((u = undefined), (l = [i])),
                                      (o || t.resolveWith)(u, l));
                              }
                            },
                            d = o
                              ? c
                              : function () {
                                  try {
                                    c();
                                  } catch (r) {
                                    T.Deferred.exceptionHook &&
                                      T.Deferred.exceptionHook(r, d.stackTrace),
                                      e + 1 >= a &&
                                        (n !== M &&
                                          ((u = undefined), (l = [r])),
                                        t.rejectWith(u, l));
                                  }
                                };
                          e
                            ? d()
                            : (T.Deferred.getStackHook &&
                                (d.stackTrace = T.Deferred.getStackHook()),
                              i.setTimeout(d));
                        };
                      }
                      return T.Deferred(function (r) {
                        t[0][3].add(s(0, r, b(o) ? o : R, r.notifyWith)),
                          t[1][3].add(s(0, r, b(e) ? e : R)),
                          t[2][3].add(s(0, r, b(n) ? n : M));
                      }).promise();
                    },
                    promise: function (e) {
                      return null != e ? T.extend(e, o) : o;
                    },
                  },
                  a = {};
                return (
                  T.each(t, function (e, r) {
                    var i = r[2],
                      s = r[5];
                    (o[r[1]] = i.add),
                      s &&
                        i.add(
                          function () {
                            n = s;
                          },
                          t[3 - e][2].disable,
                          t[3 - e][3].disable,
                          t[0][2].lock,
                          t[0][3].lock
                        ),
                      i.add(r[3].fire),
                      (a[r[0]] = function () {
                        return (
                          a[r[0] + "With"](
                            this === a ? undefined : this,
                            arguments
                          ),
                          this
                        );
                      }),
                      (a[r[0] + "With"] = i.fireWith);
                  }),
                  o.promise(a),
                  e && e.call(a, a),
                  a
                );
              },
              when: function (e) {
                var t = arguments.length,
                  n = t,
                  r = Array(n),
                  i = l.call(arguments),
                  o = T.Deferred(),
                  a = function (e) {
                    return function (n) {
                      (r[e] = this),
                        (i[e] = arguments.length > 1 ? l.call(arguments) : n),
                        --t || o.resolveWith(r, i);
                    };
                  };
                if (
                  t <= 1 &&
                  (U(e, o.done(a(n)).resolve, o.reject, !t),
                  "pending" === o.state() || b(i[n] && i[n].then))
                )
                  return o.then();
                for (; n--; ) U(i[n], a(n), o.reject);
                return o.promise();
              },
            });
          var F = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
          (T.Deferred.exceptionHook = function (e, t) {
            i.console &&
              i.console.warn &&
              e &&
              F.test(e.name) &&
              i.console.warn(
                "jQuery.Deferred exception: " + e.message,
                e.stack,
                t
              );
          }),
            (T.readyException = function (e) {
              i.setTimeout(function () {
                throw e;
              });
            });
          var W = T.Deferred();
          function $() {
            s.removeEventListener("DOMContentLoaded", $),
              i.removeEventListener("load", $),
              T.ready();
          }
          (T.fn.ready = function (e) {
            return (
              W.then(e)["catch"](function (e) {
                T.readyException(e);
              }),
              this
            );
          }),
            T.extend({
              isReady: !1,
              readyWait: 1,
              ready: function (e) {
                (!0 === e ? --T.readyWait : T.isReady) ||
                  ((T.isReady = !0),
                  (!0 !== e && --T.readyWait > 0) || W.resolveWith(s, [T]));
              },
            }),
            (T.ready.then = W.then),
            "complete" === s.readyState ||
            ("loading" !== s.readyState && !s.documentElement.doScroll)
              ? i.setTimeout(T.ready)
              : (s.addEventListener("DOMContentLoaded", $),
                i.addEventListener("load", $));
          var V = function Zt(e, t, n, r, i, o, a) {
              var s = 0,
                u = e.length,
                l = null == n;
              if ("object" === k(n))
                for (s in ((i = !0), n)) Zt(e, t, s, n[s], !0, o, a);
              else if (
                r !== undefined &&
                ((i = !0),
                b(r) || (a = !0),
                l &&
                  (a
                    ? (t.call(e, r), (t = null))
                    : ((l = t),
                      (t = function (e, t, n) {
                        return l.call(T(e), n);
                      }))),
                t)
              )
                for (; s < u; s++)
                  t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
              return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
            },
            X = /^-ms-/,
            G = /-([a-z])/g;
          function Y(e, t) {
            return t.toUpperCase();
          }
          function Q(e) {
            return e.replace(X, "ms-").replace(G, Y);
          }
          var J = function (e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
          };
          function K() {
            this.expando = T.expando + K.uid++;
          }
          (K.uid = 1),
            (K.prototype = {
              cache: function (e) {
                var t = e[this.expando];
                return (
                  t ||
                    ((t = {}),
                    J(e) &&
                      (e.nodeType
                        ? (e[this.expando] = t)
                        : Object.defineProperty(e, this.expando, {
                            value: t,
                            configurable: !0,
                          }))),
                  t
                );
              },
              set: function (e, t, n) {
                var r,
                  i = this.cache(e);
                if ("string" == typeof t) i[Q(t)] = n;
                else for (r in t) i[Q(r)] = t[r];
                return i;
              },
              get: function (e, t) {
                return t === undefined
                  ? this.cache(e)
                  : e[this.expando] && e[this.expando][Q(t)];
              },
              access: function (e, t, n) {
                return t === undefined ||
                  (t && "string" == typeof t && n === undefined)
                  ? this.get(e, t)
                  : (this.set(e, t, n), n !== undefined ? n : t);
              },
              remove: function (e, t) {
                var n,
                  r = e[this.expando];
                if (r !== undefined) {
                  if (t !== undefined) {
                    n = (t = Array.isArray(t)
                      ? t.map(Q)
                      : (t = Q(t)) in r
                      ? [t]
                      : t.match(B) || []).length;
                    for (; n--; ) delete r[t[n]];
                  }
                  (t === undefined || T.isEmptyObject(r)) &&
                    (e.nodeType
                      ? (e[this.expando] = undefined)
                      : delete e[this.expando]);
                }
              },
              hasData: function (e) {
                var t = e[this.expando];
                return t !== undefined && !T.isEmptyObject(t);
              },
            });
          var Z = new K(),
            ee = new K(),
            te = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            ne = /[A-Z]/g;
          function re(e, t, n) {
            var r;
            if (n === undefined && 1 === e.nodeType)
              if (
                ((r = "data-" + t.replace(ne, "-$&").toLowerCase()),
                "string" == typeof (n = e.getAttribute(r)))
              ) {
                try {
                  n = (function (e) {
                    return (
                      "true" === e ||
                      ("false" !== e &&
                        ("null" === e
                          ? null
                          : e === +e + ""
                          ? +e
                          : te.test(e)
                          ? JSON.parse(e)
                          : e))
                    );
                  })(n);
                } catch (i) {}
                ee.set(e, t, n);
              } else n = undefined;
            return n;
          }
          T.extend({
            hasData: function (e) {
              return ee.hasData(e) || Z.hasData(e);
            },
            data: function (e, t, n) {
              return ee.access(e, t, n);
            },
            removeData: function (e, t) {
              ee.remove(e, t);
            },
            _data: function (e, t, n) {
              return Z.access(e, t, n);
            },
            _removeData: function (e, t) {
              Z.remove(e, t);
            },
          }),
            T.fn.extend({
              data: function (e, t) {
                var n,
                  i,
                  o,
                  a = this[0],
                  s = a && a.attributes;
                if (e === undefined) {
                  if (
                    this.length &&
                    ((o = ee.get(a)),
                    1 === a.nodeType && !Z.get(a, "hasDataAttrs"))
                  ) {
                    for (n = s.length; n--; )
                      s[n] &&
                        0 === (i = s[n].name).indexOf("data-") &&
                        ((i = Q(i.slice(5))), re(a, i, o[i]));
                    Z.set(a, "hasDataAttrs", !0);
                  }
                  return o;
                }
                return "object" === (void 0 === e ? "undefined" : r(e))
                  ? this.each(function () {
                      ee.set(this, e);
                    })
                  : V(
                      this,
                      function (t) {
                        var n;
                        if (a && t === undefined)
                          return (n = ee.get(a, e)) !== undefined
                            ? n
                            : (n = re(a, e)) !== undefined
                            ? n
                            : void 0;
                        this.each(function () {
                          ee.set(this, e, t);
                        });
                      },
                      null,
                      t,
                      arguments.length > 1,
                      null,
                      !0
                    );
              },
              removeData: function (e) {
                return this.each(function () {
                  ee.remove(this, e);
                });
              },
            }),
            T.extend({
              queue: function (e, t, n) {
                var r;
                if (e)
                  return (
                    (t = (t || "fx") + "queue"),
                    (r = Z.get(e, t)),
                    n &&
                      (!r || Array.isArray(n)
                        ? (r = Z.access(e, t, T.makeArray(n)))
                        : r.push(n)),
                    r || []
                  );
              },
              dequeue: function (e, t) {
                t = t || "fx";
                var n = T.queue(e, t),
                  r = n.length,
                  i = n.shift(),
                  o = T._queueHooks(e, t);
                "inprogress" === i && ((i = n.shift()), r--),
                  i &&
                    ("fx" === t && n.unshift("inprogress"),
                    delete o.stop,
                    i.call(
                      e,
                      function () {
                        T.dequeue(e, t);
                      },
                      o
                    )),
                  !r && o && o.empty.fire();
              },
              _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return (
                  Z.get(e, n) ||
                  Z.access(e, n, {
                    empty: T.Callbacks("once memory").add(function () {
                      Z.remove(e, [t + "queue", n]);
                    }),
                  })
                );
              },
            }),
            T.fn.extend({
              queue: function (e, t) {
                var n = 2;
                return (
                  "string" != typeof e && ((t = e), (e = "fx"), n--),
                  arguments.length < n
                    ? T.queue(this[0], e)
                    : t === undefined
                    ? this
                    : this.each(function () {
                        var n = T.queue(this, e, t);
                        T._queueHooks(this, e),
                          "fx" === e &&
                            "inprogress" !== n[0] &&
                            T.dequeue(this, e);
                      })
                );
              },
              dequeue: function (e) {
                return this.each(function () {
                  T.dequeue(this, e);
                });
              },
              clearQueue: function (e) {
                return this.queue(e || "fx", []);
              },
              promise: function (e, t) {
                var n,
                  r = 1,
                  i = T.Deferred(),
                  o = this,
                  a = this.length,
                  s = function () {
                    --r || i.resolveWith(o, [o]);
                  };
                for (
                  "string" != typeof e && ((t = e), (e = undefined)),
                    e = e || "fx";
                  a--;

                )
                  (n = Z.get(o[a], e + "queueHooks")) &&
                    n.empty &&
                    (r++, n.empty.add(s));
                return s(), i.promise(t);
              },
            });
          var ie = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            oe = new RegExp("^(?:([+-])=|)(" + ie + ")([a-z%]*)$", "i"),
            ae = ["Top", "Right", "Bottom", "Left"],
            se = s.documentElement,
            ue = function (e) {
              return T.contains(e.ownerDocument, e);
            },
            le = { composed: !0 };
          se.getRootNode &&
            (ue = function (e) {
              return (
                T.contains(e.ownerDocument, e) ||
                e.getRootNode(le) === e.ownerDocument
              );
            });
          var ce = function (e, t) {
              return (
                "none" === (e = t || e).style.display ||
                ("" === e.style.display &&
                  ue(e) &&
                  "none" === T.css(e, "display"))
              );
            },
            de = function (e, t, n, r) {
              var i,
                o,
                a = {};
              for (o in t) (a[o] = e.style[o]), (e.style[o] = t[o]);
              for (o in ((i = n.apply(e, r || [])), t)) e.style[o] = a[o];
              return i;
            };
          function fe(e, t, n, r) {
            var i,
              o,
              a = 20,
              s = r
                ? function () {
                    return r.cur();
                  }
                : function () {
                    return T.css(e, t, "");
                  },
              u = s(),
              l = (n && n[3]) || (T.cssNumber[t] ? "" : "px"),
              c =
                e.nodeType &&
                (T.cssNumber[t] || ("px" !== l && +u)) &&
                oe.exec(T.css(e, t));
            if (c && c[3] !== l) {
              for (u /= 2, l = l || c[3], c = +u || 1; a--; )
                T.style(e, t, c + l),
                  (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0),
                  (c /= o);
              (c *= 2), T.style(e, t, c + l), (n = n || []);
            }
            return (
              n &&
                ((c = +c || +u || 0),
                (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
                r && ((r.unit = l), (r.start = c), (r.end = i))),
              i
            );
          }
          var pe = {};
          function he(e) {
            var t,
              n = e.ownerDocument,
              r = e.nodeName,
              i = pe[r];
            return (
              i ||
              ((t = n.body.appendChild(n.createElement(r))),
              (i = T.css(t, "display")),
              t.parentNode.removeChild(t),
              "none" === i && (i = "block"),
              (pe[r] = i),
              i)
            );
          }
          function ge(e, t) {
            for (var n, r, i = [], o = 0, a = e.length; o < a; o++)
              (r = e[o]).style &&
                ((n = r.style.display),
                t
                  ? ("none" === n &&
                      ((i[o] = Z.get(r, "display") || null),
                      i[o] || (r.style.display = "")),
                    "" === r.style.display && ce(r) && (i[o] = he(r)))
                  : "none" !== n && ((i[o] = "none"), Z.set(r, "display", n)));
            for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);
            return e;
          }
          T.fn.extend({
            show: function () {
              return ge(this, !0);
            },
            hide: function () {
              return ge(this);
            },
            toggle: function (e) {
              return "boolean" == typeof e
                ? e
                  ? this.show()
                  : this.hide()
                : this.each(function () {
                    ce(this) ? T(this).show() : T(this).hide();
                  });
            },
          });
          var me = /^(?:checkbox|radio)$/i,
            ye = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
            ve = /^$|^module$|\/(?:java|ecma)script/i,
            be = {
              option: [1, "<select multiple='multiple'>", "</select>"],
              thead: [1, "<table>", "</table>"],
              col: [2, "<table><colgroup>", "</colgroup></table>"],
              tr: [2, "<table><tbody>", "</tbody></table>"],
              td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
              _default: [0, "", ""],
            };
          function we(e, t) {
            var n;
            return (
              (n =
                "undefined" != typeof e.getElementsByTagName
                  ? e.getElementsByTagName(t || "*")
                  : "undefined" != typeof e.querySelectorAll
                  ? e.querySelectorAll(t || "*")
                  : []),
              t === undefined || (t && N(e, t)) ? T.merge([e], n) : n
            );
          }
          function _e(e, t) {
            for (var n = 0, r = e.length; n < r; n++)
              Z.set(e[n], "globalEval", !t || Z.get(t[n], "globalEval"));
          }
          (be.optgroup = be.option),
            (be.tbody = be.tfoot = be.colgroup = be.caption = be.thead),
            (be.th = be.td);
          var xe = /<|&#?\w+;/;
          function ke(e, t, n, r, i) {
            for (
              var o,
                a,
                s,
                u,
                l,
                c,
                d = t.createDocumentFragment(),
                f = [],
                p = 0,
                h = e.length;
              p < h;
              p++
            )
              if ((o = e[p]) || 0 === o)
                if ("object" === k(o)) T.merge(f, o.nodeType ? [o] : o);
                else if (xe.test(o)) {
                  for (
                    a = a || d.appendChild(t.createElement("div")),
                      s = (ye.exec(o) || ["", ""])[1].toLowerCase(),
                      u = be[s] || be._default,
                      a.innerHTML = u[1] + T.htmlPrefilter(o) + u[2],
                      c = u[0];
                    c--;

                  )
                    a = a.lastChild;
                  T.merge(f, a.childNodes),
                    ((a = d.firstChild).textContent = "");
                } else f.push(t.createTextNode(o));
            for (d.textContent = "", p = 0; (o = f[p++]); )
              if (r && T.inArray(o, r) > -1) i && i.push(o);
              else if (
                ((l = ue(o)),
                (a = we(d.appendChild(o), "script")),
                l && _e(a),
                n)
              )
                for (c = 0; (o = a[c++]); ) ve.test(o.type || "") && n.push(o);
            return d;
          }
          !(function () {
            var e = s
                .createDocumentFragment()
                .appendChild(s.createElement("div")),
              t = s.createElement("input");
            t.setAttribute("type", "radio"),
              t.setAttribute("checked", "checked"),
              t.setAttribute("name", "t"),
              e.appendChild(t),
              (v.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked),
              (e.innerHTML = "<textarea>x</textarea>"),
              (v.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue);
          })();
          var Te = /^key/,
            Se = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            Ce = /^([^.]*)(?:\.(.+)|)/;
          function je() {
            return !0;
          }
          function Ae() {
            return !1;
          }
          function Ee(e, t) {
            return (
              (e ===
                (function () {
                  try {
                    return s.activeElement;
                  } catch (e) {}
                })()) ==
              ("focus" === t)
            );
          }
          function De(e, t, n, i, o, a) {
            var s, u;
            if ("object" === (void 0 === t ? "undefined" : r(t))) {
              for (u in ("string" != typeof n &&
                ((i = i || n), (n = undefined)),
              t))
                De(e, u, n, i, t[u], a);
              return e;
            }
            if (
              (null == i && null == o
                ? ((o = n), (i = n = undefined))
                : null == o &&
                  ("string" == typeof n
                    ? ((o = i), (i = undefined))
                    : ((o = i), (i = n), (n = undefined))),
              !1 === o)
            )
              o = Ae;
            else if (!o) return e;
            return (
              1 === a &&
                ((s = o),
                ((o = function (e) {
                  return T().off(e), s.apply(this, arguments);
                }).guid = s.guid || (s.guid = T.guid++))),
              e.each(function () {
                T.event.add(this, t, o, i, n);
              })
            );
          }
          function Ne(e, t, n) {
            n
              ? (Z.set(e, t, !1),
                T.event.add(e, t, {
                  namespace: !1,
                  handler: function (e) {
                    var r,
                      i,
                      o = Z.get(this, t);
                    if (1 & e.isTrigger && this[t]) {
                      if (o.length)
                        (T.event.special[t] || {}).delegateType &&
                          e.stopPropagation();
                      else if (
                        ((o = l.call(arguments)),
                        Z.set(this, t, o),
                        (r = n(this, t)),
                        this[t](),
                        o !== (i = Z.get(this, t)) || r
                          ? Z.set(this, t, !1)
                          : (i = {}),
                        o !== i)
                      )
                        return (
                          e.stopImmediatePropagation(),
                          e.preventDefault(),
                          i.value
                        );
                    } else
                      o.length &&
                        (Z.set(this, t, {
                          value: T.event.trigger(
                            T.extend(o[0], T.Event.prototype),
                            o.slice(1),
                            this
                          ),
                        }),
                        e.stopImmediatePropagation());
                  },
                }))
              : Z.get(e, t) === undefined && T.event.add(e, t, je);
          }
          (T.event = {
            global: {},
            add: function (e, t, n, r, i) {
              var o,
                a,
                s,
                u,
                l,
                c,
                d,
                f,
                p,
                h,
                g,
                m = Z.get(e);
              if (m)
                for (
                  n.handler && ((n = (o = n).handler), (i = o.selector)),
                    i && T.find.matchesSelector(se, i),
                    n.guid || (n.guid = T.guid++),
                    (u = m.events) || (u = m.events = {}),
                    (a = m.handle) ||
                      (a = m.handle = function (t) {
                        return void 0 !== T && T.event.triggered !== t.type
                          ? T.event.dispatch.apply(e, arguments)
                          : undefined;
                      }),
                    l = (t = (t || "").match(B) || [""]).length;
                  l--;

                )
                  (p = g = (s = Ce.exec(t[l]) || [])[1]),
                    (h = (s[2] || "").split(".").sort()),
                    p &&
                      ((d = T.event.special[p] || {}),
                      (p = (i ? d.delegateType : d.bindType) || p),
                      (d = T.event.special[p] || {}),
                      (c = T.extend(
                        {
                          type: p,
                          origType: g,
                          data: r,
                          handler: n,
                          guid: n.guid,
                          selector: i,
                          needsContext: i && T.expr.match.needsContext.test(i),
                          namespace: h.join("."),
                        },
                        o
                      )),
                      (f = u[p]) ||
                        (((f = u[p] = []).delegateCount = 0),
                        (d.setup && !1 !== d.setup.call(e, r, h, a)) ||
                          (e.addEventListener && e.addEventListener(p, a))),
                      d.add &&
                        (d.add.call(e, c),
                        c.handler.guid || (c.handler.guid = n.guid)),
                      i ? f.splice(f.delegateCount++, 0, c) : f.push(c),
                      (T.event.global[p] = !0));
            },
            remove: function (e, t, n, r, i) {
              var o,
                a,
                s,
                u,
                l,
                c,
                d,
                f,
                p,
                h,
                g,
                m = Z.hasData(e) && Z.get(e);
              if (m && (u = m.events)) {
                for (l = (t = (t || "").match(B) || [""]).length; l--; )
                  if (
                    ((p = g = (s = Ce.exec(t[l]) || [])[1]),
                    (h = (s[2] || "").split(".").sort()),
                    p)
                  ) {
                    for (
                      d = T.event.special[p] || {},
                        f =
                          u[(p = (r ? d.delegateType : d.bindType) || p)] || [],
                        s =
                          s[2] &&
                          new RegExp(
                            "(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"
                          ),
                        a = o = f.length;
                      o--;

                    )
                      (c = f[o]),
                        (!i && g !== c.origType) ||
                          (n && n.guid !== c.guid) ||
                          (s && !s.test(c.namespace)) ||
                          (r &&
                            r !== c.selector &&
                            ("**" !== r || !c.selector)) ||
                          (f.splice(o, 1),
                          c.selector && f.delegateCount--,
                          d.remove && d.remove.call(e, c));
                    a &&
                      !f.length &&
                      ((d.teardown && !1 !== d.teardown.call(e, h, m.handle)) ||
                        T.removeEvent(e, p, m.handle),
                      delete u[p]);
                  } else for (p in u) T.event.remove(e, p + t[l], n, r, !0);
                T.isEmptyObject(u) && Z.remove(e, "handle events");
              }
            },
            dispatch: function (e) {
              var t,
                n,
                r,
                i,
                o,
                a,
                s = T.event.fix(e),
                u = new Array(arguments.length),
                l = (Z.get(this, "events") || {})[s.type] || [],
                c = T.event.special[s.type] || {};
              for (u[0] = s, t = 1; t < arguments.length; t++)
                u[t] = arguments[t];
              if (
                ((s.delegateTarget = this),
                !c.preDispatch || !1 !== c.preDispatch.call(this, s))
              ) {
                for (
                  a = T.event.handlers.call(this, s, l), t = 0;
                  (i = a[t++]) && !s.isPropagationStopped();

                )
                  for (
                    s.currentTarget = i.elem, n = 0;
                    (o = i.handlers[n++]) && !s.isImmediatePropagationStopped();

                  )
                    (s.rnamespace &&
                      !1 !== o.namespace &&
                      !s.rnamespace.test(o.namespace)) ||
                      ((s.handleObj = o),
                      (s.data = o.data),
                      (r = (
                        (T.event.special[o.origType] || {}).handle || o.handler
                      ).apply(i.elem, u)) !== undefined &&
                        !1 === (s.result = r) &&
                        (s.preventDefault(), s.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, s), s.result;
              }
            },
            handlers: function (e, t) {
              var n,
                r,
                i,
                o,
                a,
                s = [],
                u = t.delegateCount,
                l = e.target;
              if (u && l.nodeType && !("click" === e.type && e.button >= 1))
                for (; l !== this; l = l.parentNode || this)
                  if (
                    1 === l.nodeType &&
                    ("click" !== e.type || !0 !== l.disabled)
                  ) {
                    for (o = [], a = {}, n = 0; n < u; n++)
                      a[(i = (r = t[n]).selector + " ")] === undefined &&
                        (a[i] = r.needsContext
                          ? T(i, this).index(l) > -1
                          : T.find(i, this, null, [l]).length),
                        a[i] && o.push(r);
                    o.length && s.push({ elem: l, handlers: o });
                  }
              return (
                (l = this),
                u < t.length && s.push({ elem: l, handlers: t.slice(u) }),
                s
              );
            },
            addProp: function (e, t) {
              Object.defineProperty(T.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: b(t)
                  ? function () {
                      if (this.originalEvent) return t(this.originalEvent);
                    }
                  : function () {
                      if (this.originalEvent) return this.originalEvent[e];
                    },
                set: function (t) {
                  Object.defineProperty(this, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: t,
                  });
                },
              });
            },
            fix: function (e) {
              return e[T.expando] ? e : new T.Event(e);
            },
            special: {
              load: { noBubble: !0 },
              click: {
                setup: function (e) {
                  var t = this || e;
                  return (
                    me.test(t.type) &&
                      t.click &&
                      N(t, "input") &&
                      Ne(t, "click", je),
                    !1
                  );
                },
                trigger: function (e) {
                  var t = this || e;
                  return (
                    me.test(t.type) &&
                      t.click &&
                      N(t, "input") &&
                      Ne(t, "click"),
                    !0
                  );
                },
                _default: function (e) {
                  var t = e.target;
                  return (
                    (me.test(t.type) &&
                      t.click &&
                      N(t, "input") &&
                      Z.get(t, "click")) ||
                    N(t, "a")
                  );
                },
              },
              beforeunload: {
                postDispatch: function (e) {
                  e.result !== undefined &&
                    e.originalEvent &&
                    (e.originalEvent.returnValue = e.result);
                },
              },
            },
          }),
            (T.removeEvent = function (e, t, n) {
              e.removeEventListener && e.removeEventListener(t, n);
            }),
            (T.Event = function (e, t) {
              if (!(this instanceof T.Event)) return new T.Event(e, t);
              e && e.type
                ? ((this.originalEvent = e),
                  (this.type = e.type),
                  (this.isDefaultPrevented =
                    e.defaultPrevented ||
                    (e.defaultPrevented === undefined && !1 === e.returnValue)
                      ? je
                      : Ae),
                  (this.target =
                    e.target && 3 === e.target.nodeType
                      ? e.target.parentNode
                      : e.target),
                  (this.currentTarget = e.currentTarget),
                  (this.relatedTarget = e.relatedTarget))
                : (this.type = e),
                t && T.extend(this, t),
                (this.timeStamp = (e && e.timeStamp) || Date.now()),
                (this[T.expando] = !0);
            }),
            (T.Event.prototype = {
              constructor: T.Event,
              isDefaultPrevented: Ae,
              isPropagationStopped: Ae,
              isImmediatePropagationStopped: Ae,
              isSimulated: !1,
              preventDefault: function () {
                var e = this.originalEvent;
                (this.isDefaultPrevented = je),
                  e && !this.isSimulated && e.preventDefault();
              },
              stopPropagation: function () {
                var e = this.originalEvent;
                (this.isPropagationStopped = je),
                  e && !this.isSimulated && e.stopPropagation();
              },
              stopImmediatePropagation: function () {
                var e = this.originalEvent;
                (this.isImmediatePropagationStopped = je),
                  e && !this.isSimulated && e.stopImmediatePropagation(),
                  this.stopPropagation();
              },
            }),
            T.each(
              {
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                code: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: function (e) {
                  var t = e.button;
                  return null == e.which && Te.test(e.type)
                    ? null != e.charCode
                      ? e.charCode
                      : e.keyCode
                    : !e.which && t !== undefined && Se.test(e.type)
                    ? 1 & t
                      ? 1
                      : 2 & t
                      ? 3
                      : 4 & t
                      ? 2
                      : 0
                    : e.which;
                },
              },
              T.event.addProp
            ),
            T.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
              T.event.special[e] = {
                setup: function () {
                  return Ne(this, e, Ee), !1;
                },
                trigger: function () {
                  return Ne(this, e), !0;
                },
                delegateType: t,
              };
            }),
            T.each(
              {
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout",
              },
              function (e, t) {
                T.event.special[e] = {
                  delegateType: t,
                  bindType: t,
                  handle: function (e) {
                    var n,
                      r = e.relatedTarget,
                      i = e.handleObj;
                    return (
                      (r && (r === this || T.contains(this, r))) ||
                        ((e.type = i.origType),
                        (n = i.handler.apply(this, arguments)),
                        (e.type = t)),
                      n
                    );
                  },
                };
              }
            ),
            T.fn.extend({
              on: function (e, t, n, r) {
                return De(this, e, t, n, r);
              },
              one: function (e, t, n, r) {
                return De(this, e, t, n, r, 1);
              },
              off: function (e, t, n) {
                var i, o;
                if (e && e.preventDefault && e.handleObj)
                  return (
                    (i = e.handleObj),
                    T(e.delegateTarget).off(
                      i.namespace ? i.origType + "." + i.namespace : i.origType,
                      i.selector,
                      i.handler
                    ),
                    this
                  );
                if ("object" === (void 0 === e ? "undefined" : r(e))) {
                  for (o in e) this.off(o, t, e[o]);
                  return this;
                }
                return (
                  (!1 !== t && "function" != typeof t) ||
                    ((n = t), (t = undefined)),
                  !1 === n && (n = Ae),
                  this.each(function () {
                    T.event.remove(this, e, n, t);
                  })
                );
              },
            });
          var Le = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
            Oe = /<script|<style|<link/i,
            Pe = /checked\s*(?:[^=]|=\s*.checked.)/i,
            ze = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
          function qe(e, t) {
            return (
              (N(e, "table") &&
                N(11 !== t.nodeType ? t : t.firstChild, "tr") &&
                T(e).children("tbody")[0]) ||
              e
            );
          }
          function Ie(e) {
            return (
              (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e
            );
          }
          function He(e) {
            return (
              "true/" === (e.type || "").slice(0, 5)
                ? (e.type = e.type.slice(5))
                : e.removeAttribute("type"),
              e
            );
          }
          function Be(e, t) {
            var n, r, i, o, a, s, u, l;
            if (1 === t.nodeType) {
              if (
                Z.hasData(e) &&
                ((o = Z.access(e)), (a = Z.set(t, o)), (l = o.events))
              )
                for (i in (delete a.handle, (a.events = {}), l))
                  for (n = 0, r = l[i].length; n < r; n++)
                    T.event.add(t, i, l[i][n]);
              ee.hasData(e) &&
                ((s = ee.access(e)), (u = T.extend({}, s)), ee.set(t, u));
            }
          }
          function Re(e, t) {
            var n = t.nodeName.toLowerCase();
            "input" === n && me.test(e.type)
              ? (t.checked = e.checked)
              : ("input" !== n && "textarea" !== n) ||
                (t.defaultValue = e.defaultValue);
          }
          function Me(e, t, n, r) {
            t = c.apply([], t);
            var i,
              o,
              a,
              s,
              u,
              l,
              d = 0,
              f = e.length,
              p = f - 1,
              h = t[0],
              g = b(h);
            if (
              g ||
              (f > 1 && "string" == typeof h && !v.checkClone && Pe.test(h))
            )
              return e.each(function (i) {
                var o = e.eq(i);
                g && (t[0] = h.call(this, i, o.html())), Me(o, t, n, r);
              });
            if (
              f &&
              ((o = (i = ke(t, e[0].ownerDocument, !1, e, r)).firstChild),
              1 === i.childNodes.length && (i = o),
              o || r)
            ) {
              for (s = (a = T.map(we(i, "script"), Ie)).length; d < f; d++)
                (u = i),
                  d !== p &&
                    ((u = T.clone(u, !0, !0)),
                    s && T.merge(a, we(u, "script"))),
                  n.call(e[d], u, d);
              if (s)
                for (
                  l = a[a.length - 1].ownerDocument, T.map(a, He), d = 0;
                  d < s;
                  d++
                )
                  (u = a[d]),
                    ve.test(u.type || "") &&
                      !Z.access(u, "globalEval") &&
                      T.contains(l, u) &&
                      (u.src && "module" !== (u.type || "").toLowerCase()
                        ? T._evalUrl &&
                          !u.noModule &&
                          T._evalUrl(u.src, {
                            nonce: u.nonce || u.getAttribute("nonce"),
                          })
                        : x(u.textContent.replace(ze, ""), u, l));
            }
            return e;
          }
          function Ue(e, t, n) {
            for (
              var r, i = t ? T.filter(t, e) : e, o = 0;
              null != (r = i[o]);
              o++
            )
              n || 1 !== r.nodeType || T.cleanData(we(r)),
                r.parentNode &&
                  (n && ue(r) && _e(we(r, "script")),
                  r.parentNode.removeChild(r));
            return e;
          }
          T.extend({
            htmlPrefilter: function (e) {
              return e.replace(Le, "<$1></$2>");
            },
            clone: function (e, t, n) {
              var r,
                i,
                o,
                a,
                s = e.cloneNode(!0),
                u = ue(e);
              if (
                !(
                  v.noCloneChecked ||
                  (1 !== e.nodeType && 11 !== e.nodeType) ||
                  T.isXMLDoc(e)
                )
              )
                for (a = we(s), r = 0, i = (o = we(e)).length; r < i; r++)
                  Re(o[r], a[r]);
              if (t)
                if (n)
                  for (
                    o = o || we(e), a = a || we(s), r = 0, i = o.length;
                    r < i;
                    r++
                  )
                    Be(o[r], a[r]);
                else Be(e, s);
              return (
                (a = we(s, "script")).length > 0 &&
                  _e(a, !u && we(e, "script")),
                s
              );
            },
            cleanData: function (e) {
              for (
                var t, n, r, i = T.event.special, o = 0;
                (n = e[o]) !== undefined;
                o++
              )
                if (J(n)) {
                  if ((t = n[Z.expando])) {
                    if (t.events)
                      for (r in t.events)
                        i[r]
                          ? T.event.remove(n, r)
                          : T.removeEvent(n, r, t.handle);
                    n[Z.expando] = undefined;
                  }
                  n[ee.expando] && (n[ee.expando] = undefined);
                }
            },
          }),
            T.fn.extend({
              detach: function (e) {
                return Ue(this, e, !0);
              },
              remove: function (e) {
                return Ue(this, e);
              },
              text: function (e) {
                return V(
                  this,
                  function (e) {
                    return e === undefined
                      ? T.text(this)
                      : this.empty().each(function () {
                          (1 !== this.nodeType &&
                            11 !== this.nodeType &&
                            9 !== this.nodeType) ||
                            (this.textContent = e);
                        });
                  },
                  null,
                  e,
                  arguments.length
                );
              },
              append: function () {
                return Me(this, arguments, function (e) {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    qe(this, e).appendChild(e);
                });
              },
              prepend: function () {
                return Me(this, arguments, function (e) {
                  if (
                    1 === this.nodeType ||
                    11 === this.nodeType ||
                    9 === this.nodeType
                  ) {
                    var t = qe(this, e);
                    t.insertBefore(e, t.firstChild);
                  }
                });
              },
              before: function () {
                return Me(this, arguments, function (e) {
                  this.parentNode && this.parentNode.insertBefore(e, this);
                });
              },
              after: function () {
                return Me(this, arguments, function (e) {
                  this.parentNode &&
                    this.parentNode.insertBefore(e, this.nextSibling);
                });
              },
              empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++)
                  1 === e.nodeType &&
                    (T.cleanData(we(e, !1)), (e.textContent = ""));
                return this;
              },
              clone: function (e, t) {
                return (
                  (e = null != e && e),
                  (t = null == t ? e : t),
                  this.map(function () {
                    return T.clone(this, e, t);
                  })
                );
              },
              html: function (e) {
                return V(
                  this,
                  function (e) {
                    var t = this[0] || {},
                      n = 0,
                      r = this.length;
                    if (e === undefined && 1 === t.nodeType) return t.innerHTML;
                    if (
                      "string" == typeof e &&
                      !Oe.test(e) &&
                      !be[(ye.exec(e) || ["", ""])[1].toLowerCase()]
                    ) {
                      e = T.htmlPrefilter(e);
                      try {
                        for (; n < r; n++)
                          1 === (t = this[n] || {}).nodeType &&
                            (T.cleanData(we(t, !1)), (t.innerHTML = e));
                        t = 0;
                      } catch (i) {}
                    }
                    t && this.empty().append(e);
                  },
                  null,
                  e,
                  arguments.length
                );
              },
              replaceWith: function () {
                var e = [];
                return Me(
                  this,
                  arguments,
                  function (t) {
                    var n = this.parentNode;
                    T.inArray(this, e) < 0 &&
                      (T.cleanData(we(this)), n && n.replaceChild(t, this));
                  },
                  e
                );
              },
            }),
            T.each(
              {
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith",
              },
              function (e, t) {
                T.fn[e] = function (e) {
                  for (
                    var n, r = [], i = T(e), o = i.length - 1, a = 0;
                    a <= o;
                    a++
                  )
                    (n = a === o ? this : this.clone(!0)),
                      T(i[a])[t](n),
                      d.apply(r, n.get());
                  return this.pushStack(r);
                };
              }
            );
          var Fe = new RegExp("^(" + ie + ")(?!px)[a-z%]+$", "i"),
            We = function (e) {
              var t = e.ownerDocument.defaultView;
              return (t && t.opener) || (t = i), t.getComputedStyle(e);
            },
            $e = new RegExp(ae.join("|"), "i");
          function Ve(e, t, n) {
            var r,
              i,
              o,
              a,
              s = e.style;
            return (
              (n = n || We(e)) &&
                ("" !== (a = n.getPropertyValue(t) || n[t]) ||
                  ue(e) ||
                  (a = T.style(e, t)),
                !v.pixelBoxStyles() &&
                  Fe.test(a) &&
                  $e.test(t) &&
                  ((r = s.width),
                  (i = s.minWidth),
                  (o = s.maxWidth),
                  (s.minWidth = s.maxWidth = s.width = a),
                  (a = n.width),
                  (s.width = r),
                  (s.minWidth = i),
                  (s.maxWidth = o))),
              a !== undefined ? a + "" : a
            );
          }
          function Xe(e, t) {
            return {
              get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get;
              },
            };
          }
          !(function () {
            function e() {
              if (c) {
                (l.style.cssText =
                  "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                  (c.style.cssText =
                    "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                  se.appendChild(l).appendChild(c);
                var e = i.getComputedStyle(c);
                (n = "1%" !== e.top),
                  (u = 12 === t(e.marginLeft)),
                  (c.style.right = "60%"),
                  (a = 36 === t(e.right)),
                  (r = 36 === t(e.width)),
                  (c.style.position = "absolute"),
                  (o = 12 === t(c.offsetWidth / 3)),
                  se.removeChild(l),
                  (c = null);
              }
            }
            function t(e) {
              return Math.round(parseFloat(e));
            }
            var n,
              r,
              o,
              a,
              u,
              l = s.createElement("div"),
              c = s.createElement("div");
            c.style &&
              ((c.style.backgroundClip = "content-box"),
              (c.cloneNode(!0).style.backgroundClip = ""),
              (v.clearCloneStyle = "content-box" === c.style.backgroundClip),
              T.extend(v, {
                boxSizingReliable: function () {
                  return e(), r;
                },
                pixelBoxStyles: function () {
                  return e(), a;
                },
                pixelPosition: function () {
                  return e(), n;
                },
                reliableMarginLeft: function () {
                  return e(), u;
                },
                scrollboxSize: function () {
                  return e(), o;
                },
              }));
          })();
          var Ge = ["Webkit", "Moz", "ms"],
            Ye = s.createElement("div").style,
            Qe = {};
          function Je(e) {
            var t = T.cssProps[e] || Qe[e];
            return (
              t ||
              (e in Ye
                ? e
                : (Qe[e] =
                    (function (e) {
                      for (
                        var t = e[0].toUpperCase() + e.slice(1), n = Ge.length;
                        n--;

                      )
                        if ((e = Ge[n] + t) in Ye) return e;
                    })(e) || e))
            );
          }
          var Ke = /^(none|table(?!-c[ea]).+)/,
            Ze = /^--/,
            et = {
              position: "absolute",
              visibility: "hidden",
              display: "block",
            },
            tt = { letterSpacing: "0", fontWeight: "400" };
          function nt(e, t, n) {
            var r = oe.exec(t);
            return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
          }
          function rt(e, t, n, r, i, o) {
            var a = "width" === t ? 1 : 0,
              s = 0,
              u = 0;
            if (n === (r ? "border" : "content")) return 0;
            for (; a < 4; a += 2)
              "margin" === n && (u += T.css(e, n + ae[a], !0, i)),
                r
                  ? ("content" === n &&
                      (u -= T.css(e, "padding" + ae[a], !0, i)),
                    "margin" !== n &&
                      (u -= T.css(e, "border" + ae[a] + "Width", !0, i)))
                  : ((u += T.css(e, "padding" + ae[a], !0, i)),
                    "padding" !== n
                      ? (u += T.css(e, "border" + ae[a] + "Width", !0, i))
                      : (s += T.css(e, "border" + ae[a] + "Width", !0, i)));
            return (
              !r &&
                o >= 0 &&
                (u +=
                  Math.max(
                    0,
                    Math.ceil(
                      e["offset" + t[0].toUpperCase() + t.slice(1)] -
                        o -
                        u -
                        s -
                        0.5
                    )
                  ) || 0),
              u
            );
          }
          function it(e, t, n) {
            var r = We(e),
              i =
                (!v.boxSizingReliable() || n) &&
                "border-box" === T.css(e, "boxSizing", !1, r),
              o = i,
              a = Ve(e, t, r),
              s = "offset" + t[0].toUpperCase() + t.slice(1);
            if (Fe.test(a)) {
              if (!n) return a;
              a = "auto";
            }
            return (
              ((!v.boxSizingReliable() && i) ||
                "auto" === a ||
                (!parseFloat(a) && "inline" === T.css(e, "display", !1, r))) &&
                e.getClientRects().length &&
                ((i = "border-box" === T.css(e, "boxSizing", !1, r)),
                (o = s in e) && (a = e[s])),
              (a = parseFloat(a) || 0) +
                rt(e, t, n || (i ? "border" : "content"), o, r, a) +
                "px"
            );
          }
          function ot(e, t, n, r, i) {
            return new ot.prototype.init(e, t, n, r, i);
          }
          T.extend({
            cssHooks: {
              opacity: {
                get: function (e, t) {
                  if (t) {
                    var n = Ve(e, "opacity");
                    return "" === n ? "1" : n;
                  }
                },
              },
            },
            cssNumber: {
              animationIterationCount: !0,
              columnCount: !0,
              fillOpacity: !0,
              flexGrow: !0,
              flexShrink: !0,
              fontWeight: !0,
              gridArea: !0,
              gridColumn: !0,
              gridColumnEnd: !0,
              gridColumnStart: !0,
              gridRow: !0,
              gridRowEnd: !0,
              gridRowStart: !0,
              lineHeight: !0,
              opacity: !0,
              order: !0,
              orphans: !0,
              widows: !0,
              zIndex: !0,
              zoom: !0,
            },
            cssProps: {},
            style: function (e, t, n, i) {
              if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o,
                  a,
                  s,
                  u = Q(t),
                  l = Ze.test(t),
                  c = e.style;
                if (
                  (l || (t = Je(u)),
                  (s = T.cssHooks[t] || T.cssHooks[u]),
                  n === undefined)
                )
                  return s && "get" in s && (o = s.get(e, !1, i)) !== undefined
                    ? o
                    : c[t];
                "string" === (a = void 0 === n ? "undefined" : r(n)) &&
                  (o = oe.exec(n)) &&
                  o[1] &&
                  ((n = fe(e, t, o)), (a = "number")),
                  null != n &&
                    n == n &&
                    ("number" !== a ||
                      l ||
                      (n += (o && o[3]) || (T.cssNumber[u] ? "" : "px")),
                    v.clearCloneStyle ||
                      "" !== n ||
                      0 !== t.indexOf("background") ||
                      (c[t] = "inherit"),
                    (s && "set" in s && (n = s.set(e, n, i)) === undefined) ||
                      (l ? c.setProperty(t, n) : (c[t] = n)));
              }
            },
            css: function (e, t, n, r) {
              var i,
                o,
                a,
                s = Q(t);
              return (
                Ze.test(t) || (t = Je(s)),
                (a = T.cssHooks[t] || T.cssHooks[s]) &&
                  "get" in a &&
                  (i = a.get(e, !0, n)),
                i === undefined && (i = Ve(e, t, r)),
                "normal" === i && t in tt && (i = tt[t]),
                "" === n || n
                  ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i)
                  : i
              );
            },
          }),
            T.each(["height", "width"], function (e, t) {
              T.cssHooks[t] = {
                get: function (e, n, r) {
                  if (n)
                    return !Ke.test(T.css(e, "display")) ||
                      (e.getClientRects().length &&
                        e.getBoundingClientRect().width)
                      ? it(e, t, r)
                      : de(e, et, function () {
                          return it(e, t, r);
                        });
                },
                set: function (e, n, r) {
                  var i,
                    o = We(e),
                    a = !v.scrollboxSize() && "absolute" === o.position,
                    s =
                      (a || r) && "border-box" === T.css(e, "boxSizing", !1, o),
                    u = r ? rt(e, t, r, s, o) : 0;
                  return (
                    s &&
                      a &&
                      (u -= Math.ceil(
                        e["offset" + t[0].toUpperCase() + t.slice(1)] -
                          parseFloat(o[t]) -
                          rt(e, t, "border", !1, o) -
                          0.5
                      )),
                    u &&
                      (i = oe.exec(n)) &&
                      "px" !== (i[3] || "px") &&
                      ((e.style[t] = n), (n = T.css(e, t))),
                    nt(0, n, u)
                  );
                },
              };
            }),
            (T.cssHooks.marginLeft = Xe(v.reliableMarginLeft, function (e, t) {
              if (t)
                return (
                  (parseFloat(Ve(e, "marginLeft")) ||
                    e.getBoundingClientRect().left -
                      de(e, { marginLeft: 0 }, function () {
                        return e.getBoundingClientRect().left;
                      })) + "px"
                );
            })),
            T.each({ margin: "", padding: "", border: "Width" }, function (
              e,
              t
            ) {
              (T.cssHooks[e + t] = {
                expand: function (n) {
                  for (
                    var r = 0,
                      i = {},
                      o = "string" == typeof n ? n.split(" ") : [n];
                    r < 4;
                    r++
                  )
                    i[e + ae[r] + t] = o[r] || o[r - 2] || o[0];
                  return i;
                },
              }),
                "margin" !== e && (T.cssHooks[e + t].set = nt);
            }),
            T.fn.extend({
              css: function (e, t) {
                return V(
                  this,
                  function (e, t, n) {
                    var r,
                      i,
                      o = {},
                      a = 0;
                    if (Array.isArray(t)) {
                      for (r = We(e), i = t.length; a < i; a++)
                        o[t[a]] = T.css(e, t[a], !1, r);
                      return o;
                    }
                    return n !== undefined ? T.style(e, t, n) : T.css(e, t);
                  },
                  e,
                  t,
                  arguments.length > 1
                );
              },
            }),
            (T.Tween = ot),
            (ot.prototype = {
              constructor: ot,
              init: function (e, t, n, r, i, o) {
                (this.elem = e),
                  (this.prop = n),
                  (this.easing = i || T.easing._default),
                  (this.options = t),
                  (this.start = this.now = this.cur()),
                  (this.end = r),
                  (this.unit = o || (T.cssNumber[n] ? "" : "px"));
              },
              cur: function () {
                var e = ot.propHooks[this.prop];
                return e && e.get
                  ? e.get(this)
                  : ot.propHooks._default.get(this);
              },
              run: function (e) {
                var t,
                  n = ot.propHooks[this.prop];
                return (
                  this.options.duration
                    ? (this.pos = t = T.easing[this.easing](
                        e,
                        this.options.duration * e,
                        0,
                        1,
                        this.options.duration
                      ))
                    : (this.pos = t = e),
                  (this.now = (this.end - this.start) * t + this.start),
                  this.options.step &&
                    this.options.step.call(this.elem, this.now, this),
                  n && n.set ? n.set(this) : ot.propHooks._default.set(this),
                  this
                );
              },
            }),
            (ot.prototype.init.prototype = ot.prototype),
            (ot.propHooks = {
              _default: {
                get: function (e) {
                  var t;
                  return 1 !== e.elem.nodeType ||
                    (null != e.elem[e.prop] && null == e.elem.style[e.prop])
                    ? e.elem[e.prop]
                    : (t = T.css(e.elem, e.prop, "")) && "auto" !== t
                    ? t
                    : 0;
                },
                set: function (e) {
                  T.fx.step[e.prop]
                    ? T.fx.step[e.prop](e)
                    : 1 !== e.elem.nodeType ||
                      (!T.cssHooks[e.prop] && null == e.elem.style[Je(e.prop)])
                    ? (e.elem[e.prop] = e.now)
                    : T.style(e.elem, e.prop, e.now + e.unit);
                },
              },
            }),
            (ot.propHooks.scrollTop = ot.propHooks.scrollLeft = {
              set: function (e) {
                e.elem.nodeType &&
                  e.elem.parentNode &&
                  (e.elem[e.prop] = e.now);
              },
            }),
            (T.easing = {
              linear: function (e) {
                return e;
              },
              swing: function (e) {
                return 0.5 - Math.cos(e * Math.PI) / 2;
              },
              _default: "swing",
            }),
            (T.fx = ot.prototype.init),
            (T.fx.step = {});
          var at,
            st,
            ut = /^(?:toggle|show|hide)$/,
            lt = /queueHooks$/;
          function ct() {
            st &&
              (!1 === s.hidden && i.requestAnimationFrame
                ? i.requestAnimationFrame(ct)
                : i.setTimeout(ct, T.fx.interval),
              T.fx.tick());
          }
          function dt() {
            return (
              i.setTimeout(function () {
                at = undefined;
              }),
              (at = Date.now())
            );
          }
          function ft(e, t) {
            var n,
              r = 0,
              i = { height: e };
            for (t = t ? 1 : 0; r < 4; r += 2 - t)
              i["margin" + (n = ae[r])] = i["padding" + n] = e;
            return t && (i.opacity = i.width = e), i;
          }
          function pt(e, t, n) {
            for (
              var r,
                i = (ht.tweeners[t] || []).concat(ht.tweeners["*"]),
                o = 0,
                a = i.length;
              o < a;
              o++
            )
              if ((r = i[o].call(n, t, e))) return r;
          }
          function ht(e, t, n) {
            var r,
              i,
              o = 0,
              a = ht.prefilters.length,
              s = T.Deferred().always(function () {
                delete u.elem;
              }),
              u = function () {
                if (i) return !1;
                for (
                  var t = at || dt(),
                    n = Math.max(0, l.startTime + l.duration - t),
                    r = 1 - (n / l.duration || 0),
                    o = 0,
                    a = l.tweens.length;
                  o < a;
                  o++
                )
                  l.tweens[o].run(r);
                return (
                  s.notifyWith(e, [l, r, n]),
                  r < 1 && a
                    ? n
                    : (a || s.notifyWith(e, [l, 1, 0]),
                      s.resolveWith(e, [l]),
                      !1)
                );
              },
              l = s.promise({
                elem: e,
                props: T.extend({}, t),
                opts: T.extend(
                  !0,
                  { specialEasing: {}, easing: T.easing._default },
                  n
                ),
                originalProperties: t,
                originalOptions: n,
                startTime: at || dt(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                  var r = T.Tween(
                    e,
                    l.opts,
                    t,
                    n,
                    l.opts.specialEasing[t] || l.opts.easing
                  );
                  return l.tweens.push(r), r;
                },
                stop: function (t) {
                  var n = 0,
                    r = t ? l.tweens.length : 0;
                  if (i) return this;
                  for (i = !0; n < r; n++) l.tweens[n].run(1);
                  return (
                    t
                      ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t]))
                      : s.rejectWith(e, [l, t]),
                    this
                  );
                },
              }),
              c = l.props;
            for (
              !(function (e, t) {
                var n, r, i, o, a;
                for (n in e)
                  if (
                    ((i = t[(r = Q(n))]),
                    (o = e[n]),
                    Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
                    n !== r && ((e[r] = o), delete e[n]),
                    (a = T.cssHooks[r]) && ("expand" in a))
                  )
                    for (n in ((o = a.expand(o)), delete e[r], o))
                      (n in e) || ((e[n] = o[n]), (t[n] = i));
                  else t[r] = i;
              })(c, l.opts.specialEasing);
              o < a;
              o++
            )
              if ((r = ht.prefilters[o].call(l, e, c, l.opts)))
                return (
                  b(r.stop) &&
                    (T._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)),
                  r
                );
            return (
              T.map(c, pt, l),
              b(l.opts.start) && l.opts.start.call(e, l),
              l
                .progress(l.opts.progress)
                .done(l.opts.done, l.opts.complete)
                .fail(l.opts.fail)
                .always(l.opts.always),
              T.fx.timer(
                T.extend(u, { elem: e, anim: l, queue: l.opts.queue })
              ),
              l
            );
          }
          (T.Animation = T.extend(ht, {
            tweeners: {
              "*": [
                function (e, t) {
                  var n = this.createTween(e, t);
                  return fe(n.elem, e, oe.exec(t), n), n;
                },
              ],
            },
            tweener: function (e, t) {
              b(e) ? ((t = e), (e = ["*"])) : (e = e.match(B));
              for (var n, r = 0, i = e.length; r < i; r++)
                (n = e[r]),
                  (ht.tweeners[n] = ht.tweeners[n] || []),
                  ht.tweeners[n].unshift(t);
            },
            prefilters: [
              function (e, t, n) {
                var r,
                  i,
                  o,
                  a,
                  s,
                  u,
                  l,
                  c,
                  d = "width" in t || "height" in t,
                  f = this,
                  p = {},
                  h = e.style,
                  g = e.nodeType && ce(e),
                  m = Z.get(e, "fxshow");
                for (r in (n.queue ||
                  (null == (a = T._queueHooks(e, "fx")).unqueued &&
                    ((a.unqueued = 0),
                    (s = a.empty.fire),
                    (a.empty.fire = function () {
                      a.unqueued || s();
                    })),
                  a.unqueued++,
                  f.always(function () {
                    f.always(function () {
                      a.unqueued--, T.queue(e, "fx").length || a.empty.fire();
                    });
                  })),
                t))
                  if (((i = t[r]), ut.test(i))) {
                    if (
                      (delete t[r],
                      (o = o || "toggle" === i),
                      i === (g ? "hide" : "show"))
                    ) {
                      if ("show" !== i || !m || m[r] === undefined) continue;
                      g = !0;
                    }
                    p[r] = (m && m[r]) || T.style(e, r);
                  }
                if ((u = !T.isEmptyObject(t)) || !T.isEmptyObject(p))
                  for (r in (d &&
                    1 === e.nodeType &&
                    ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
                    null == (l = m && m.display) && (l = Z.get(e, "display")),
                    "none" === (c = T.css(e, "display")) &&
                      (l
                        ? (c = l)
                        : (ge([e], !0),
                          (l = e.style.display || l),
                          (c = T.css(e, "display")),
                          ge([e]))),
                    ("inline" === c || ("inline-block" === c && null != l)) &&
                      "none" === T.css(e, "float") &&
                      (u ||
                        (f.done(function () {
                          h.display = l;
                        }),
                        null == l &&
                          ((c = h.display), (l = "none" === c ? "" : c))),
                      (h.display = "inline-block"))),
                  n.overflow &&
                    ((h.overflow = "hidden"),
                    f.always(function () {
                      (h.overflow = n.overflow[0]),
                        (h.overflowX = n.overflow[1]),
                        (h.overflowY = n.overflow[2]);
                    })),
                  (u = !1),
                  p))
                    u ||
                      (m
                        ? "hidden" in m && (g = m.hidden)
                        : (m = Z.access(e, "fxshow", { display: l })),
                      o && (m.hidden = !g),
                      g && ge([e], !0),
                      f.done(function () {
                        for (r in (g || ge([e]), Z.remove(e, "fxshow"), p))
                          T.style(e, r, p[r]);
                      })),
                      (u = pt(g ? m[r] : 0, r, f)),
                      r in m ||
                        ((m[r] = u.start),
                        g && ((u.end = u.start), (u.start = 0)));
              },
            ],
            prefilter: function (e, t) {
              t ? ht.prefilters.unshift(e) : ht.prefilters.push(e);
            },
          })),
            (T.speed = function (e, t, n) {
              var i =
                e && "object" === (void 0 === e ? "undefined" : r(e))
                  ? T.extend({}, e)
                  : {
                      complete: n || (!n && t) || (b(e) && e),
                      duration: e,
                      easing: (n && t) || (t && !b(t) && t),
                    };
              return (
                T.fx.off
                  ? (i.duration = 0)
                  : "number" != typeof i.duration &&
                    (i.duration in T.fx.speeds
                      ? (i.duration = T.fx.speeds[i.duration])
                      : (i.duration = T.fx.speeds._default)),
                (null != i.queue && !0 !== i.queue) || (i.queue = "fx"),
                (i.old = i.complete),
                (i.complete = function () {
                  b(i.old) && i.old.call(this),
                    i.queue && T.dequeue(this, i.queue);
                }),
                i
              );
            }),
            T.fn.extend({
              fadeTo: function (e, t, n, r) {
                return this.filter(ce)
                  .css("opacity", 0)
                  .show()
                  .end()
                  .animate({ opacity: t }, e, n, r);
              },
              animate: function (e, t, n, r) {
                var i = T.isEmptyObject(e),
                  o = T.speed(t, n, r),
                  a = function () {
                    var t = ht(this, T.extend({}, e), o);
                    (i || Z.get(this, "finish")) && t.stop(!0);
                  };
                return (
                  (a.finish = a),
                  i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
                );
              },
              stop: function (e, t, n) {
                var r = function (e) {
                  var t = e.stop;
                  delete e.stop, t(n);
                };
                return (
                  "string" != typeof e && ((n = t), (t = e), (e = undefined)),
                  t && !1 !== e && this.queue(e || "fx", []),
                  this.each(function () {
                    var t = !0,
                      i = null != e && e + "queueHooks",
                      o = T.timers,
                      a = Z.get(this);
                    if (i) a[i] && a[i].stop && r(a[i]);
                    else
                      for (i in a) a[i] && a[i].stop && lt.test(i) && r(a[i]);
                    for (i = o.length; i--; )
                      o[i].elem !== this ||
                        (null != e && o[i].queue !== e) ||
                        (o[i].anim.stop(n), (t = !1), o.splice(i, 1));
                    (!t && n) || T.dequeue(this, e);
                  })
                );
              },
              finish: function (e) {
                return (
                  !1 !== e && (e = e || "fx"),
                  this.each(function () {
                    var t,
                      n = Z.get(this),
                      r = n[e + "queue"],
                      i = n[e + "queueHooks"],
                      o = T.timers,
                      a = r ? r.length : 0;
                    for (
                      n.finish = !0,
                        T.queue(this, e, []),
                        i && i.stop && i.stop.call(this, !0),
                        t = o.length;
                      t--;

                    )
                      o[t].elem === this &&
                        o[t].queue === e &&
                        (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; t < a; t++)
                      r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish;
                  })
                );
              },
            }),
            T.each(["toggle", "show", "hide"], function (e, t) {
              var n = T.fn[t];
              T.fn[t] = function (e, r, i) {
                return null == e || "boolean" == typeof e
                  ? n.apply(this, arguments)
                  : this.animate(ft(t, !0), e, r, i);
              };
            }),
            T.each(
              {
                slideDown: ft("show"),
                slideUp: ft("hide"),
                slideToggle: ft("toggle"),
                fadeIn: { opacity: "show" },
                fadeOut: { opacity: "hide" },
                fadeToggle: { opacity: "toggle" },
              },
              function (e, t) {
                T.fn[e] = function (e, n, r) {
                  return this.animate(t, e, n, r);
                };
              }
            ),
            (T.timers = []),
            (T.fx.tick = function () {
              var e,
                t = 0,
                n = T.timers;
              for (at = Date.now(); t < n.length; t++)
                (e = n[t])() || n[t] !== e || n.splice(t--, 1);
              n.length || T.fx.stop(), (at = undefined);
            }),
            (T.fx.timer = function (e) {
              T.timers.push(e), T.fx.start();
            }),
            (T.fx.interval = 13),
            (T.fx.start = function () {
              st || ((st = !0), ct());
            }),
            (T.fx.stop = function () {
              st = null;
            }),
            (T.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
            (T.fn.delay = function (e, t) {
              return (
                (e = (T.fx && T.fx.speeds[e]) || e),
                (t = t || "fx"),
                this.queue(t, function (t, n) {
                  var r = i.setTimeout(t, e);
                  n.stop = function () {
                    i.clearTimeout(r);
                  };
                })
              );
            }),
            (function () {
              var e = s.createElement("input"),
                t = s
                  .createElement("select")
                  .appendChild(s.createElement("option"));
              (e.type = "checkbox"),
                (v.checkOn = "" !== e.value),
                (v.optSelected = t.selected),
                ((e = s.createElement("input")).value = "t"),
                (e.type = "radio"),
                (v.radioValue = "t" === e.value);
            })();
          var gt,
            mt = T.expr.attrHandle;
          T.fn.extend({
            attr: function (e, t) {
              return V(this, T.attr, e, t, arguments.length > 1);
            },
            removeAttr: function (e) {
              return this.each(function () {
                T.removeAttr(this, e);
              });
            },
          }),
            T.extend({
              attr: function (e, t, n) {
                var r,
                  i,
                  o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                  return "undefined" == typeof e.getAttribute
                    ? T.prop(e, t, n)
                    : ((1 === o && T.isXMLDoc(e)) ||
                        (i =
                          T.attrHooks[t.toLowerCase()] ||
                          (T.expr.match.bool.test(t) ? gt : undefined)),
                      n !== undefined
                        ? null === n
                          ? void T.removeAttr(e, t)
                          : i &&
                            "set" in i &&
                            (r = i.set(e, n, t)) !== undefined
                          ? r
                          : (e.setAttribute(t, n + ""), n)
                        : i && "get" in i && null !== (r = i.get(e, t))
                        ? r
                        : null == (r = T.find.attr(e, t))
                        ? undefined
                        : r);
              },
              attrHooks: {
                type: {
                  set: function (e, t) {
                    if (!v.radioValue && "radio" === t && N(e, "input")) {
                      var n = e.value;
                      return e.setAttribute("type", t), n && (e.value = n), t;
                    }
                  },
                },
              },
              removeAttr: function (e, t) {
                var n,
                  r = 0,
                  i = t && t.match(B);
                if (i && 1 === e.nodeType)
                  for (; (n = i[r++]); ) e.removeAttribute(n);
              },
            }),
            (gt = {
              set: function (e, t, n) {
                return !1 === t ? T.removeAttr(e, n) : e.setAttribute(n, n), n;
              },
            }),
            T.each(T.expr.match.bool.source.match(/\w+/g), function (e, t) {
              var n = mt[t] || T.find.attr;
              mt[t] = function (e, t, r) {
                var i,
                  o,
                  a = t.toLowerCase();
                return (
                  r ||
                    ((o = mt[a]),
                    (mt[a] = i),
                    (i = null != n(e, t, r) ? a : null),
                    (mt[a] = o)),
                  i
                );
              };
            });
          var yt = /^(?:input|select|textarea|button)$/i,
            vt = /^(?:a|area)$/i;
          function bt(e) {
            return (e.match(B) || []).join(" ");
          }
          function wt(e) {
            return (e.getAttribute && e.getAttribute("class")) || "";
          }
          function _t(e) {
            return Array.isArray(e)
              ? e
              : ("string" == typeof e && e.match(B)) || [];
          }
          T.fn.extend({
            prop: function (e, t) {
              return V(this, T.prop, e, t, arguments.length > 1);
            },
            removeProp: function (e) {
              return this.each(function () {
                delete this[T.propFix[e] || e];
              });
            },
          }),
            T.extend({
              prop: function (e, t, n) {
                var r,
                  i,
                  o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                  return (
                    (1 === o && T.isXMLDoc(e)) ||
                      ((t = T.propFix[t] || t), (i = T.propHooks[t])),
                    n !== undefined
                      ? i && "set" in i && (r = i.set(e, n, t)) !== undefined
                        ? r
                        : (e[t] = n)
                      : i && "get" in i && null !== (r = i.get(e, t))
                      ? r
                      : e[t]
                  );
              },
              propHooks: {
                tabIndex: {
                  get: function (e) {
                    var t = T.find.attr(e, "tabindex");
                    return t
                      ? parseInt(t, 10)
                      : yt.test(e.nodeName) || (vt.test(e.nodeName) && e.href)
                      ? 0
                      : -1;
                  },
                },
              },
              propFix: { for: "htmlFor", class: "className" },
            }),
            v.optSelected ||
              (T.propHooks.selected = {
                get: function (e) {
                  var t = e.parentNode;
                  return t && t.parentNode && t.parentNode.selectedIndex, null;
                },
                set: function (e) {
                  var t = e.parentNode;
                  t &&
                    (t.selectedIndex,
                    t.parentNode && t.parentNode.selectedIndex);
                },
              }),
            T.each(
              [
                "tabIndex",
                "readOnly",
                "maxLength",
                "cellSpacing",
                "cellPadding",
                "rowSpan",
                "colSpan",
                "useMap",
                "frameBorder",
                "contentEditable",
              ],
              function () {
                T.propFix[this.toLowerCase()] = this;
              }
            ),
            T.fn.extend({
              addClass: function (e) {
                var t,
                  n,
                  r,
                  i,
                  o,
                  a,
                  s,
                  u = 0;
                if (b(e))
                  return this.each(function (t) {
                    T(this).addClass(e.call(this, t, wt(this)));
                  });
                if ((t = _t(e)).length)
                  for (; (n = this[u++]); )
                    if (
                      ((i = wt(n)), (r = 1 === n.nodeType && " " + bt(i) + " "))
                    ) {
                      for (a = 0; (o = t[a++]); )
                        r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                      i !== (s = bt(r)) && n.setAttribute("class", s);
                    }
                return this;
              },
              removeClass: function (e) {
                var t,
                  n,
                  r,
                  i,
                  o,
                  a,
                  s,
                  u = 0;
                if (b(e))
                  return this.each(function (t) {
                    T(this).removeClass(e.call(this, t, wt(this)));
                  });
                if (!arguments.length) return this.attr("class", "");
                if ((t = _t(e)).length)
                  for (; (n = this[u++]); )
                    if (
                      ((i = wt(n)), (r = 1 === n.nodeType && " " + bt(i) + " "))
                    ) {
                      for (a = 0; (o = t[a++]); )
                        for (; r.indexOf(" " + o + " ") > -1; )
                          r = r.replace(" " + o + " ", " ");
                      i !== (s = bt(r)) && n.setAttribute("class", s);
                    }
                return this;
              },
              toggleClass: function (e, t) {
                var n = void 0 === e ? "undefined" : r(e),
                  i = "string" === n || Array.isArray(e);
                return "boolean" == typeof t && i
                  ? t
                    ? this.addClass(e)
                    : this.removeClass(e)
                  : b(e)
                  ? this.each(function (n) {
                      T(this).toggleClass(e.call(this, n, wt(this), t), t);
                    })
                  : this.each(function () {
                      var t, r, o, a;
                      if (i)
                        for (r = 0, o = T(this), a = _t(e); (t = a[r++]); )
                          o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                      else
                        (e !== undefined && "boolean" !== n) ||
                          ((t = wt(this)) && Z.set(this, "__className__", t),
                          this.setAttribute &&
                            this.setAttribute(
                              "class",
                              t || !1 === e
                                ? ""
                                : Z.get(this, "__className__") || ""
                            ));
                    });
              },
              hasClass: function (e) {
                var t,
                  n,
                  r = 0;
                for (t = " " + e + " "; (n = this[r++]); )
                  if (
                    1 === n.nodeType &&
                    (" " + bt(wt(n)) + " ").indexOf(t) > -1
                  )
                    return !0;
                return !1;
              },
            });
          var xt = /\r/g;
          T.fn.extend({
            val: function (e) {
              var t,
                n,
                r,
                i = this[0];
              return arguments.length
                ? ((r = b(e)),
                  this.each(function (n) {
                    var i;
                    1 === this.nodeType &&
                      (null == (i = r ? e.call(this, n, T(this).val()) : e)
                        ? (i = "")
                        : "number" == typeof i
                        ? (i += "")
                        : Array.isArray(i) &&
                          (i = T.map(i, function (e) {
                            return null == e ? "" : e + "";
                          })),
                      ((t =
                        T.valHooks[this.type] ||
                        T.valHooks[this.nodeName.toLowerCase()]) &&
                        "set" in t &&
                        t.set(this, i, "value") !== undefined) ||
                        (this.value = i));
                  }))
                : i
                ? (t =
                    T.valHooks[i.type] ||
                    T.valHooks[i.nodeName.toLowerCase()]) &&
                  "get" in t &&
                  (n = t.get(i, "value")) !== undefined
                  ? n
                  : "string" == typeof (n = i.value)
                  ? n.replace(xt, "")
                  : null == n
                  ? ""
                  : n
                : void 0;
            },
          }),
            T.extend({
              valHooks: {
                option: {
                  get: function (e) {
                    var t = T.find.attr(e, "value");
                    return null != t ? t : bt(T.text(e));
                  },
                },
                select: {
                  get: function (e) {
                    var t,
                      n,
                      r,
                      i = e.options,
                      o = e.selectedIndex,
                      a = "select-one" === e.type,
                      s = a ? null : [],
                      u = a ? o + 1 : i.length;
                    for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                      if (
                        ((n = i[r]).selected || r === o) &&
                        !n.disabled &&
                        (!n.parentNode.disabled || !N(n.parentNode, "optgroup"))
                      ) {
                        if (((t = T(n).val()), a)) return t;
                        s.push(t);
                      }
                    return s;
                  },
                  set: function (e, t) {
                    for (
                      var n, r, i = e.options, o = T.makeArray(t), a = i.length;
                      a--;

                    )
                      ((r = i[a]).selected =
                        T.inArray(T.valHooks.option.get(r), o) > -1) &&
                        (n = !0);
                    return n || (e.selectedIndex = -1), o;
                  },
                },
              },
            }),
            T.each(["radio", "checkbox"], function () {
              (T.valHooks[this] = {
                set: function (e, t) {
                  if (Array.isArray(t))
                    return (e.checked = T.inArray(T(e).val(), t) > -1);
                },
              }),
                v.checkOn ||
                  (T.valHooks[this].get = function (e) {
                    return null === e.getAttribute("value") ? "on" : e.value;
                  });
            }),
            (v.focusin = "onfocusin" in i);
          var kt = /^(?:focusinfocus|focusoutblur)$/,
            Tt = function (e) {
              e.stopPropagation();
            };
          T.extend(T.event, {
            trigger: function (e, t, n, o) {
              var a,
                u,
                l,
                c,
                d,
                f,
                p,
                h,
                m = [n || s],
                y = g.call(e, "type") ? e.type : e,
                v = g.call(e, "namespace") ? e.namespace.split(".") : [];
              if (
                ((u = h = l = n = n || s),
                3 !== n.nodeType &&
                  8 !== n.nodeType &&
                  !kt.test(y + T.event.triggered) &&
                  (y.indexOf(".") > -1 &&
                    ((y = (v = y.split(".")).shift()), v.sort()),
                  (d = y.indexOf(":") < 0 && "on" + y),
                  ((e = e[T.expando]
                    ? e
                    : new T.Event(
                        y,
                        "object" === (void 0 === e ? "undefined" : r(e)) && e
                      )).isTrigger = o ? 2 : 3),
                  (e.namespace = v.join(".")),
                  (e.rnamespace = e.namespace
                    ? new RegExp(
                        "(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)"
                      )
                    : null),
                  (e.result = undefined),
                  e.target || (e.target = n),
                  (t = null == t ? [e] : T.makeArray(t, [e])),
                  (p = T.event.special[y] || {}),
                  o || !p.trigger || !1 !== p.trigger.apply(n, t)))
              ) {
                if (!o && !p.noBubble && !w(n)) {
                  for (
                    c = p.delegateType || y,
                      kt.test(c + y) || (u = u.parentNode);
                    u;
                    u = u.parentNode
                  )
                    m.push(u), (l = u);
                  l === (n.ownerDocument || s) &&
                    m.push(l.defaultView || l.parentWindow || i);
                }
                for (a = 0; (u = m[a++]) && !e.isPropagationStopped(); )
                  (h = u),
                    (e.type = a > 1 ? c : p.bindType || y),
                    (f =
                      (Z.get(u, "events") || {})[e.type] &&
                      Z.get(u, "handle")) && f.apply(u, t),
                    (f = d && u[d]) &&
                      f.apply &&
                      J(u) &&
                      ((e.result = f.apply(u, t)),
                      !1 === e.result && e.preventDefault());
                return (
                  (e.type = y),
                  o ||
                    e.isDefaultPrevented() ||
                    (p._default && !1 !== p._default.apply(m.pop(), t)) ||
                    !J(n) ||
                    (d &&
                      b(n[y]) &&
                      !w(n) &&
                      ((l = n[d]) && (n[d] = null),
                      (T.event.triggered = y),
                      e.isPropagationStopped() && h.addEventListener(y, Tt),
                      n[y](),
                      e.isPropagationStopped() && h.removeEventListener(y, Tt),
                      (T.event.triggered = undefined),
                      l && (n[d] = l))),
                  e.result
                );
              }
            },
            simulate: function (e, t, n) {
              var r = T.extend(new T.Event(), n, { type: e, isSimulated: !0 });
              T.event.trigger(r, null, t);
            },
          }),
            T.fn.extend({
              trigger: function (e, t) {
                return this.each(function () {
                  T.event.trigger(e, t, this);
                });
              },
              triggerHandler: function (e, t) {
                var n = this[0];
                if (n) return T.event.trigger(e, t, n, !0);
              },
            }),
            v.focusin ||
              T.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
                var n = function (e) {
                  T.event.simulate(t, e.target, T.event.fix(e));
                };
                T.event.special[t] = {
                  setup: function () {
                    var r = this.ownerDocument || this,
                      i = Z.access(r, t);
                    i || r.addEventListener(e, n, !0),
                      Z.access(r, t, (i || 0) + 1);
                  },
                  teardown: function () {
                    var r = this.ownerDocument || this,
                      i = Z.access(r, t) - 1;
                    i
                      ? Z.access(r, t, i)
                      : (r.removeEventListener(e, n, !0), Z.remove(r, t));
                  },
                };
              });
          var St = i.location,
            Ct = Date.now(),
            jt = /\?/;
          T.parseXML = function (e) {
            var t;
            if (!e || "string" != typeof e) return null;
            try {
              t = new i.DOMParser().parseFromString(e, "text/xml");
            } catch (n) {
              t = undefined;
            }
            return (
              (t && !t.getElementsByTagName("parsererror").length) ||
                T.error("Invalid XML: " + e),
              t
            );
          };
          var At = /\[\]$/,
            Et = /\r?\n/g,
            Dt = /^(?:submit|button|image|reset|file)$/i,
            Nt = /^(?:input|select|textarea|keygen)/i;
          function Lt(e, t, n, i) {
            var o;
            if (Array.isArray(t))
              T.each(t, function (t, o) {
                n || At.test(e)
                  ? i(e, o)
                  : Lt(
                      e +
                        "[" +
                        ("object" === (void 0 === o ? "undefined" : r(o)) &&
                        null != o
                          ? t
                          : "") +
                        "]",
                      o,
                      n,
                      i
                    );
              });
            else if (n || "object" !== k(t)) i(e, t);
            else for (o in t) Lt(e + "[" + o + "]", t[o], n, i);
          }
          (T.param = function (e, t) {
            var n,
              r = [],
              i = function (e, t) {
                var n = b(t) ? t() : t;
                r[r.length] =
                  encodeURIComponent(e) +
                  "=" +
                  encodeURIComponent(null == n ? "" : n);
              };
            if (null == e) return "";
            if (Array.isArray(e) || (e.jquery && !T.isPlainObject(e)))
              T.each(e, function () {
                i(this.name, this.value);
              });
            else for (n in e) Lt(n, e[n], t, i);
            return r.join("&");
          }),
            T.fn.extend({
              serialize: function () {
                return T.param(this.serializeArray());
              },
              serializeArray: function () {
                return this.map(function () {
                  var e = T.prop(this, "elements");
                  return e ? T.makeArray(e) : this;
                })
                  .filter(function () {
                    var e = this.type;
                    return (
                      this.name &&
                      !T(this).is(":disabled") &&
                      Nt.test(this.nodeName) &&
                      !Dt.test(e) &&
                      (this.checked || !me.test(e))
                    );
                  })
                  .map(function (e, t) {
                    var n = T(this).val();
                    return null == n
                      ? null
                      : Array.isArray(n)
                      ? T.map(n, function (e) {
                          return { name: t.name, value: e.replace(Et, "\r\n") };
                        })
                      : { name: t.name, value: n.replace(Et, "\r\n") };
                  })
                  .get();
              },
            });
          var Ot = /%20/g,
            Pt = /#.*$/,
            zt = /([?&])_=[^&]*/,
            qt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            It = /^(?:GET|HEAD)$/,
            Ht = /^\/\//,
            Bt = {},
            Rt = {},
            Mt = "*/".concat("*"),
            Ut = s.createElement("a");
          function Ft(e) {
            return function (t, n) {
              "string" != typeof t && ((n = t), (t = "*"));
              var r,
                i = 0,
                o = t.toLowerCase().match(B) || [];
              if (b(n))
                for (; (r = o[i++]); )
                  "+" === r[0]
                    ? ((r = r.slice(1) || "*"), (e[r] = e[r] || []).unshift(n))
                    : (e[r] = e[r] || []).push(n);
            };
          }
          function Wt(e, t, n, r) {
            var i = {},
              o = e === Rt;
            function a(s) {
              var u;
              return (
                (i[s] = !0),
                T.each(e[s] || [], function (e, s) {
                  var l = s(t, n, r);
                  return "string" != typeof l || o || i[l]
                    ? o
                      ? !(u = l)
                      : void 0
                    : (t.dataTypes.unshift(l), a(l), !1);
                }),
                u
              );
            }
            return a(t.dataTypes[0]) || (!i["*"] && a("*"));
          }
          function $t(e, t) {
            var n,
              r,
              i = T.ajaxSettings.flatOptions || {};
            for (n in t)
              t[n] !== undefined && ((i[n] ? e : r || (r = {}))[n] = t[n]);
            return r && T.extend(!0, e, r), e;
          }
          (Ut.href = St.href),
            T.extend({
              active: 0,
              lastModified: {},
              etag: {},
              ajaxSettings: {
                url: St.href,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
                  St.protocol
                ),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                  "*": Mt,
                  text: "text/plain",
                  html: "text/html",
                  xml: "application/xml, text/xml",
                  json: "application/json, text/javascript",
                },
                contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
                responseFields: {
                  xml: "responseXML",
                  text: "responseText",
                  json: "responseJSON",
                },
                converters: {
                  "* text": String,
                  "text html": !0,
                  "text json": JSON.parse,
                  "text xml": T.parseXML,
                },
                flatOptions: { url: !0, context: !0 },
              },
              ajaxSetup: function (e, t) {
                return t ? $t($t(e, T.ajaxSettings), t) : $t(T.ajaxSettings, e);
              },
              ajaxPrefilter: Ft(Bt),
              ajaxTransport: Ft(Rt),
              ajax: function (e, t) {
                "object" === (void 0 === e ? "undefined" : r(e)) &&
                  ((t = e), (e = undefined)),
                  (t = t || {});
                var n,
                  o,
                  a,
                  u,
                  l,
                  c,
                  d,
                  f,
                  p,
                  h,
                  g = T.ajaxSetup({}, t),
                  m = g.context || g,
                  y = g.context && (m.nodeType || m.jquery) ? T(m) : T.event,
                  v = T.Deferred(),
                  b = T.Callbacks("once memory"),
                  w = g.statusCode || {},
                  _ = {},
                  x = {},
                  k = "canceled",
                  S = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                      var t;
                      if (d) {
                        if (!u)
                          for (u = {}; (t = qt.exec(a)); )
                            u[t[1].toLowerCase() + " "] = (
                              u[t[1].toLowerCase() + " "] || []
                            ).concat(t[2]);
                        t = u[e.toLowerCase() + " "];
                      }
                      return null == t ? null : t.join(", ");
                    },
                    getAllResponseHeaders: function () {
                      return d ? a : null;
                    },
                    setRequestHeader: function (e, t) {
                      return (
                        null == d &&
                          ((e = x[e.toLowerCase()] = x[e.toLowerCase()] || e),
                          (_[e] = t)),
                        this
                      );
                    },
                    overrideMimeType: function (e) {
                      return null == d && (g.mimeType = e), this;
                    },
                    statusCode: function (e) {
                      var t;
                      if (e)
                        if (d) S.always(e[S.status]);
                        else for (t in e) w[t] = [w[t], e[t]];
                      return this;
                    },
                    abort: function (e) {
                      var t = e || k;
                      return n && n.abort(t), C(0, t), this;
                    },
                  };
                if (
                  (v.promise(S),
                  (g.url = ((e || g.url || St.href) + "").replace(
                    Ht,
                    St.protocol + "//"
                  )),
                  (g.type = t.method || t.type || g.method || g.type),
                  (g.dataTypes = (g.dataType || "*").toLowerCase().match(B) || [
                    "",
                  ]),
                  null == g.crossDomain)
                ) {
                  c = s.createElement("a");
                  try {
                    (c.href = g.url),
                      (c.href = c.href),
                      (g.crossDomain =
                        Ut.protocol + "//" + Ut.host !=
                        c.protocol + "//" + c.host);
                  } catch (j) {
                    g.crossDomain = !0;
                  }
                }
                if (
                  (g.data &&
                    g.processData &&
                    "string" != typeof g.data &&
                    (g.data = T.param(g.data, g.traditional)),
                  Wt(Bt, g, t, S),
                  d)
                )
                  return S;
                for (p in ((f = T.event && g.global) &&
                  0 == T.active++ &&
                  T.event.trigger("ajaxStart"),
                (g.type = g.type.toUpperCase()),
                (g.hasContent = !It.test(g.type)),
                (o = g.url.replace(Pt, "")),
                g.hasContent
                  ? g.data &&
                    g.processData &&
                    0 ===
                      (g.contentType || "").indexOf(
                        "application/x-www-form-urlencoded"
                      ) &&
                    (g.data = g.data.replace(Ot, "+"))
                  : ((h = g.url.slice(o.length)),
                    g.data &&
                      (g.processData || "string" == typeof g.data) &&
                      ((o += (jt.test(o) ? "&" : "?") + g.data), delete g.data),
                    !1 === g.cache &&
                      ((o = o.replace(zt, "$1")),
                      (h = (jt.test(o) ? "&" : "?") + "_=" + Ct++ + h)),
                    (g.url = o + h)),
                g.ifModified &&
                  (T.lastModified[o] &&
                    S.setRequestHeader("If-Modified-Since", T.lastModified[o]),
                  T.etag[o] && S.setRequestHeader("If-None-Match", T.etag[o])),
                ((g.data && g.hasContent && !1 !== g.contentType) ||
                  t.contentType) &&
                  S.setRequestHeader("Content-Type", g.contentType),
                S.setRequestHeader(
                  "Accept",
                  g.dataTypes[0] && g.accepts[g.dataTypes[0]]
                    ? g.accepts[g.dataTypes[0]] +
                        ("*" !== g.dataTypes[0] ? ", " + Mt + "; q=0.01" : "")
                    : g.accepts["*"]
                ),
                g.headers))
                  S.setRequestHeader(p, g.headers[p]);
                if (g.beforeSend && (!1 === g.beforeSend.call(m, S, g) || d))
                  return S.abort();
                if (
                  ((k = "abort"),
                  b.add(g.complete),
                  S.done(g.success),
                  S.fail(g.error),
                  (n = Wt(Rt, g, t, S)))
                ) {
                  if (
                    ((S.readyState = 1), f && y.trigger("ajaxSend", [S, g]), d)
                  )
                    return S;
                  g.async &&
                    g.timeout > 0 &&
                    (l = i.setTimeout(function () {
                      S.abort("timeout");
                    }, g.timeout));
                  try {
                    (d = !1), n.send(_, C);
                  } catch (j) {
                    if (d) throw j;
                    C(-1, j);
                  }
                } else C(-1, "No Transport");
                function C(e, t, r, s) {
                  var u,
                    c,
                    p,
                    h,
                    _,
                    x = t;
                  d ||
                    ((d = !0),
                    l && i.clearTimeout(l),
                    (n = undefined),
                    (a = s || ""),
                    (S.readyState = e > 0 ? 4 : 0),
                    (u = (e >= 200 && e < 300) || 304 === e),
                    r &&
                      (h = (function (e, t, n) {
                        for (
                          var r, i, o, a, s = e.contents, u = e.dataTypes;
                          "*" === u[0];

                        )
                          u.shift(),
                            r === undefined &&
                              (r =
                                e.mimeType ||
                                t.getResponseHeader("Content-Type"));
                        if (r)
                          for (i in s)
                            if (s[i] && s[i].test(r)) {
                              u.unshift(i);
                              break;
                            }
                        if (u[0] in n) o = u[0];
                        else {
                          for (i in n) {
                            if (!u[0] || e.converters[i + " " + u[0]]) {
                              o = i;
                              break;
                            }
                            a || (a = i);
                          }
                          o = o || a;
                        }
                        if (o) return o !== u[0] && u.unshift(o), n[o];
                      })(g, S, r)),
                    (h = (function (e, t, n, r) {
                      var i,
                        o,
                        a,
                        s,
                        u,
                        l = {},
                        c = e.dataTypes.slice();
                      if (c[1])
                        for (a in e.converters)
                          l[a.toLowerCase()] = e.converters[a];
                      for (o = c.shift(); o; )
                        if (
                          (e.responseFields[o] && (n[e.responseFields[o]] = t),
                          !u &&
                            r &&
                            e.dataFilter &&
                            (t = e.dataFilter(t, e.dataType)),
                          (u = o),
                          (o = c.shift()))
                        )
                          if ("*" === o) o = u;
                          else if ("*" !== u && u !== o) {
                            if (!(a = l[u + " " + o] || l["* " + o]))
                              for (i in l)
                                if (
                                  (s = i.split(" "))[1] === o &&
                                  (a = l[u + " " + s[0]] || l["* " + s[0]])
                                ) {
                                  !0 === a
                                    ? (a = l[i])
                                    : !0 !== l[i] &&
                                      ((o = s[0]), c.unshift(s[1]));
                                  break;
                                }
                            if (!0 !== a)
                              if (a && e.throws) t = a(t);
                              else
                                try {
                                  t = a(t);
                                } catch (j) {
                                  return {
                                    state: "parsererror",
                                    error: a
                                      ? j
                                      : "No conversion from " + u + " to " + o,
                                  };
                                }
                          }
                      return { state: "success", data: t };
                    })(g, h, S, u)),
                    u
                      ? (g.ifModified &&
                          ((_ = S.getResponseHeader("Last-Modified")) &&
                            (T.lastModified[o] = _),
                          (_ = S.getResponseHeader("etag")) && (T.etag[o] = _)),
                        204 === e || "HEAD" === g.type
                          ? (x = "nocontent")
                          : 304 === e
                          ? (x = "notmodified")
                          : ((x = h.state), (c = h.data), (u = !(p = h.error))))
                      : ((p = x),
                        (!e && x) || ((x = "error"), e < 0 && (e = 0))),
                    (S.status = e),
                    (S.statusText = (t || x) + ""),
                    u
                      ? v.resolveWith(m, [c, x, S])
                      : v.rejectWith(m, [S, x, p]),
                    S.statusCode(w),
                    (w = undefined),
                    f &&
                      y.trigger(u ? "ajaxSuccess" : "ajaxError", [
                        S,
                        g,
                        u ? c : p,
                      ]),
                    b.fireWith(m, [S, x]),
                    f &&
                      (y.trigger("ajaxComplete", [S, g]),
                      --T.active || T.event.trigger("ajaxStop")));
                }
                return S;
              },
              getJSON: function (e, t, n) {
                return T.get(e, t, n, "json");
              },
              getScript: function (e, t) {
                return T.get(e, undefined, t, "script");
              },
            }),
            T.each(["get", "post"], function (e, t) {
              T[t] = function (e, n, r, i) {
                return (
                  b(n) && ((i = i || r), (r = n), (n = undefined)),
                  T.ajax(
                    T.extend(
                      { url: e, type: t, dataType: i, data: n, success: r },
                      T.isPlainObject(e) && e
                    )
                  )
                );
              };
            }),
            (T._evalUrl = function (e, t) {
              return T.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: { "text script": function () {} },
                dataFilter: function (e) {
                  T.globalEval(e, t);
                },
              });
            }),
            T.fn.extend({
              wrapAll: function (e) {
                var t;
                return (
                  this[0] &&
                    (b(e) && (e = e.call(this[0])),
                    (t = T(e, this[0].ownerDocument).eq(0).clone(!0)),
                    this[0].parentNode && t.insertBefore(this[0]),
                    t
                      .map(function () {
                        for (var e = this; e.firstElementChild; )
                          e = e.firstElementChild;
                        return e;
                      })
                      .append(this)),
                  this
                );
              },
              wrapInner: function (e) {
                return b(e)
                  ? this.each(function (t) {
                      T(this).wrapInner(e.call(this, t));
                    })
                  : this.each(function () {
                      var t = T(this),
                        n = t.contents();
                      n.length ? n.wrapAll(e) : t.append(e);
                    });
              },
              wrap: function (e) {
                var t = b(e);
                return this.each(function (n) {
                  T(this).wrapAll(t ? e.call(this, n) : e);
                });
              },
              unwrap: function (e) {
                return (
                  this.parent(e)
                    .not("body")
                    .each(function () {
                      T(this).replaceWith(this.childNodes);
                    }),
                  this
                );
              },
            }),
            (T.expr.pseudos.hidden = function (e) {
              return !T.expr.pseudos.visible(e);
            }),
            (T.expr.pseudos.visible = function (e) {
              return !!(
                e.offsetWidth ||
                e.offsetHeight ||
                e.getClientRects().length
              );
            }),
            (T.ajaxSettings.xhr = function () {
              try {
                return new i.XMLHttpRequest();
              } catch (e) {}
            });
          var Vt = { 0: 200, 1223: 204 },
            Xt = T.ajaxSettings.xhr();
          (v.cors = !!Xt && "withCredentials" in Xt),
            (v.ajax = Xt = !!Xt),
            T.ajaxTransport(function (e) {
              var t, n;
              if (v.cors || (Xt && !e.crossDomain))
                return {
                  send: function (r, o) {
                    var a,
                      s = e.xhr();
                    if (
                      (s.open(e.type, e.url, e.async, e.username, e.password),
                      e.xhrFields)
                    )
                      for (a in e.xhrFields) s[a] = e.xhrFields[a];
                    for (a in (e.mimeType &&
                      s.overrideMimeType &&
                      s.overrideMimeType(e.mimeType),
                    e.crossDomain ||
                      r["X-Requested-With"] ||
                      (r["X-Requested-With"] = "XMLHttpRequest"),
                    r))
                      s.setRequestHeader(a, r[a]);
                    (t = function (e) {
                      return function () {
                        t &&
                          ((t = n = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null),
                          "abort" === e
                            ? s.abort()
                            : "error" === e
                            ? "number" != typeof s.status
                              ? o(0, "error")
                              : o(s.status, s.statusText)
                            : o(
                                Vt[s.status] || s.status,
                                s.statusText,
                                "text" !== (s.responseType || "text") ||
                                  "string" != typeof s.responseText
                                  ? { binary: s.response }
                                  : { text: s.responseText },
                                s.getAllResponseHeaders()
                              ));
                      };
                    }),
                      (s.onload = t()),
                      (n = s.onerror = s.ontimeout = t("error")),
                      s.onabort !== undefined
                        ? (s.onabort = n)
                        : (s.onreadystatechange = function () {
                            4 === s.readyState &&
                              i.setTimeout(function () {
                                t && n();
                              });
                          }),
                      (t = t("abort"));
                    try {
                      s.send((e.hasContent && e.data) || null);
                    } catch (u) {
                      if (t) throw u;
                    }
                  },
                  abort: function () {
                    t && t();
                  },
                };
            }),
            T.ajaxPrefilter(function (e) {
              e.crossDomain && (e.contents.script = !1);
            }),
            T.ajaxSetup({
              accepts: {
                script:
                  "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
              },
              contents: { script: /\b(?:java|ecma)script\b/ },
              converters: {
                "text script": function (e) {
                  return T.globalEval(e), e;
                },
              },
            }),
            T.ajaxPrefilter("script", function (e) {
              e.cache === undefined && (e.cache = !1),
                e.crossDomain && (e.type = "GET");
            }),
            T.ajaxTransport("script", function (e) {
              var t, n;
              if (e.crossDomain || e.scriptAttrs)
                return {
                  send: function (r, i) {
                    (t = T("<script>")
                      .attr(e.scriptAttrs || {})
                      .prop({ charset: e.scriptCharset, src: e.url })
                      .on(
                        "load error",
                        (n = function (e) {
                          t.remove(),
                            (n = null),
                            e && i("error" === e.type ? 404 : 200, e.type);
                        })
                      )),
                      s.head.appendChild(t[0]);
                  },
                  abort: function () {
                    n && n();
                  },
                };
            });
          var Gt = [],
            Yt = /(=)\?(?=&|$)|\?\?/;
          T.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function () {
              var e = Gt.pop() || T.expando + "_" + Ct++;
              return (this[e] = !0), e;
            },
          }),
            T.ajaxPrefilter("json jsonp", function (e, t, n) {
              var r,
                o,
                a,
                s =
                  !1 !== e.jsonp &&
                  (Yt.test(e.url)
                    ? "url"
                    : "string" == typeof e.data &&
                      0 ===
                        (e.contentType || "").indexOf(
                          "application/x-www-form-urlencoded"
                        ) &&
                      Yt.test(e.data) &&
                      "data");
              if (s || "jsonp" === e.dataTypes[0])
                return (
                  (r = e.jsonpCallback = b(e.jsonpCallback)
                    ? e.jsonpCallback()
                    : e.jsonpCallback),
                  s
                    ? (e[s] = e[s].replace(Yt, "$1" + r))
                    : !1 !== e.jsonp &&
                      (e.url +=
                        (jt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
                  (e.converters["script json"] = function () {
                    return a || T.error(r + " was not called"), a[0];
                  }),
                  (e.dataTypes[0] = "json"),
                  (o = i[r]),
                  (i[r] = function () {
                    a = arguments;
                  }),
                  n.always(function () {
                    o === undefined ? T(i).removeProp(r) : (i[r] = o),
                      e[r] && ((e.jsonpCallback = t.jsonpCallback), Gt.push(r)),
                      a && b(o) && o(a[0]),
                      (a = o = undefined);
                  }),
                  "script"
                );
            }),
            (v.createHTMLDocument = (function () {
              var e = s.implementation.createHTMLDocument("").body;
              return (
                (e.innerHTML = "<form></form><form></form>"),
                2 === e.childNodes.length
              );
            })()),
            (T.parseHTML = function (e, t, n) {
              return "string" != typeof e
                ? []
                : ("boolean" == typeof t && ((n = t), (t = !1)),
                  t ||
                    (v.createHTMLDocument
                      ? (((r = (t = s.implementation.createHTMLDocument(
                          ""
                        )).createElement("base")).href = s.location.href),
                        t.head.appendChild(r))
                      : (t = s)),
                  (i = L.exec(e)),
                  (o = !n && []),
                  i
                    ? [t.createElement(i[1])]
                    : ((i = ke([e], t, o)),
                      o && o.length && T(o).remove(),
                      T.merge([], i.childNodes)));
              var r, i, o;
            }),
            (T.fn.load = function (e, t, n) {
              var i,
                o,
                a,
                s = this,
                u = e.indexOf(" ");
              return (
                u > -1 && ((i = bt(e.slice(u))), (e = e.slice(0, u))),
                b(t)
                  ? ((n = t), (t = undefined))
                  : t &&
                    "object" === (void 0 === t ? "undefined" : r(t)) &&
                    (o = "POST"),
                s.length > 0 &&
                  T.ajax({
                    url: e,
                    type: o || "GET",
                    dataType: "html",
                    data: t,
                  })
                    .done(function (e) {
                      (a = arguments),
                        s.html(
                          i ? T("<div>").append(T.parseHTML(e)).find(i) : e
                        );
                    })
                    .always(
                      n &&
                        function (e, t) {
                          s.each(function () {
                            n.apply(this, a || [e.responseText, t, e]);
                          });
                        }
                    ),
                this
              );
            }),
            T.each(
              [
                "ajaxStart",
                "ajaxStop",
                "ajaxComplete",
                "ajaxError",
                "ajaxSuccess",
                "ajaxSend",
              ],
              function (e, t) {
                T.fn[t] = function (e) {
                  return this.on(t, e);
                };
              }
            ),
            (T.expr.pseudos.animated = function (e) {
              return T.grep(T.timers, function (t) {
                return e === t.elem;
              }).length;
            }),
            (T.offset = {
              setOffset: function (e, t, n) {
                var r,
                  i,
                  o,
                  a,
                  s,
                  u,
                  l = T.css(e, "position"),
                  c = T(e),
                  d = {};
                "static" === l && (e.style.position = "relative"),
                  (s = c.offset()),
                  (o = T.css(e, "top")),
                  (u = T.css(e, "left")),
                  ("absolute" === l || "fixed" === l) &&
                  (o + u).indexOf("auto") > -1
                    ? ((a = (r = c.position()).top), (i = r.left))
                    : ((a = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
                  b(t) && (t = t.call(e, n, T.extend({}, s))),
                  null != t.top && (d.top = t.top - s.top + a),
                  null != t.left && (d.left = t.left - s.left + i),
                  "using" in t ? t.using.call(e, d) : c.css(d);
              },
            }),
            T.fn.extend({
              offset: function (e) {
                if (arguments.length)
                  return e === undefined
                    ? this
                    : this.each(function (t) {
                        T.offset.setOffset(this, e, t);
                      });
                var t,
                  n,
                  r = this[0];
                return r
                  ? r.getClientRects().length
                    ? ((t = r.getBoundingClientRect()),
                      (n = r.ownerDocument.defaultView),
                      {
                        top: t.top + n.pageYOffset,
                        left: t.left + n.pageXOffset,
                      })
                    : { top: 0, left: 0 }
                  : void 0;
              },
              position: function () {
                if (this[0]) {
                  var e,
                    t,
                    n,
                    r = this[0],
                    i = { top: 0, left: 0 };
                  if ("fixed" === T.css(r, "position"))
                    t = r.getBoundingClientRect();
                  else {
                    for (
                      t = this.offset(),
                        n = r.ownerDocument,
                        e = r.offsetParent || n.documentElement;
                      e &&
                      (e === n.body || e === n.documentElement) &&
                      "static" === T.css(e, "position");

                    )
                      e = e.parentNode;
                    e &&
                      e !== r &&
                      1 === e.nodeType &&
                      (((i = T(e).offset()).top += T.css(
                        e,
                        "borderTopWidth",
                        !0
                      )),
                      (i.left += T.css(e, "borderLeftWidth", !0)));
                  }
                  return {
                    top: t.top - i.top - T.css(r, "marginTop", !0),
                    left: t.left - i.left - T.css(r, "marginLeft", !0),
                  };
                }
              },
              offsetParent: function () {
                return this.map(function () {
                  for (
                    var e = this.offsetParent;
                    e && "static" === T.css(e, "position");

                  )
                    e = e.offsetParent;
                  return e || se;
                });
              },
            }),
            T.each(
              { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
              function (e, t) {
                var n = "pageYOffset" === t;
                T.fn[e] = function (r) {
                  return V(
                    this,
                    function (e, r, i) {
                      var o;
                      if (
                        (w(e)
                          ? (o = e)
                          : 9 === e.nodeType && (o = e.defaultView),
                        i === undefined)
                      )
                        return o ? o[t] : e[r];
                      o
                        ? o.scrollTo(
                            n ? o.pageXOffset : i,
                            n ? i : o.pageYOffset
                          )
                        : (e[r] = i);
                    },
                    e,
                    r,
                    arguments.length
                  );
                };
              }
            ),
            T.each(["top", "left"], function (e, t) {
              T.cssHooks[t] = Xe(v.pixelPosition, function (e, n) {
                if (n)
                  return (
                    (n = Ve(e, t)), Fe.test(n) ? T(e).position()[t] + "px" : n
                  );
              });
            }),
            T.each({ Height: "height", Width: "width" }, function (e, t) {
              T.each(
                { padding: "inner" + e, content: t, "": "outer" + e },
                function (n, r) {
                  T.fn[r] = function (i, o) {
                    var a = arguments.length && (n || "boolean" != typeof i),
                      s = n || (!0 === i || !0 === o ? "margin" : "border");
                    return V(
                      this,
                      function (t, n, i) {
                        var o;
                        return w(t)
                          ? 0 === r.indexOf("outer")
                            ? t["inner" + e]
                            : t.document.documentElement["client" + e]
                          : 9 === t.nodeType
                          ? ((o = t.documentElement),
                            Math.max(
                              t.body["scroll" + e],
                              o["scroll" + e],
                              t.body["offset" + e],
                              o["offset" + e],
                              o["client" + e]
                            ))
                          : i === undefined
                          ? T.css(t, n, s)
                          : T.style(t, n, i, s);
                      },
                      t,
                      a ? i : undefined,
                      a
                    );
                  };
                }
              );
            }),
            T.each(
              "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
                " "
              ),
              function (e, t) {
                T.fn[t] = function (e, n) {
                  return arguments.length > 0
                    ? this.on(t, null, e, n)
                    : this.trigger(t);
                };
              }
            ),
            T.fn.extend({
              hover: function (e, t) {
                return this.mouseenter(e).mouseleave(t || e);
              },
            }),
            T.fn.extend({
              bind: function (e, t, n) {
                return this.on(e, null, t, n);
              },
              unbind: function (e, t) {
                return this.off(e, null, t);
              },
              delegate: function (e, t, n, r) {
                return this.on(t, e, n, r);
              },
              undelegate: function (e, t, n) {
                return 1 === arguments.length
                  ? this.off(e, "**")
                  : this.off(t, e || "**", n);
              },
            }),
            (T.proxy = function (e, t) {
              var n, r, i;
              return (
                "string" == typeof t && ((n = e[t]), (t = e), (e = n)),
                b(e)
                  ? ((r = l.call(arguments, 2)),
                    ((i = function () {
                      return e.apply(t || this, r.concat(l.call(arguments)));
                    }).guid = e.guid = e.guid || T.guid++),
                    i)
                  : undefined
              );
            }),
            (T.holdReady = function (e) {
              e ? T.readyWait++ : T.ready(!0);
            }),
            (T.isArray = Array.isArray),
            (T.parseJSON = JSON.parse),
            (T.nodeName = N),
            (T.isFunction = b),
            (T.isWindow = w),
            (T.camelCase = Q),
            (T.type = k),
            (T.now = Date.now),
            (T.isNumeric = function (e) {
              var t = T.type(e);
              return (
                ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
              );
            }),
            (n = function () {
              return T;
            }.apply(t, [])) === undefined || (e.exports = n);
          var Qt = i.jQuery,
            Jt = i.$;
          return (
            (T.noConflict = function (e) {
              return (
                i.$ === T && (i.$ = Jt),
                e && i.jQuery === T && (i.jQuery = Qt),
                T
              );
            }),
            o || (i.jQuery = i.$ = T),
            T
          );
        });
      }.call(this, n(2)(e)));
    },
    function (e, t, n) {
      "use strict";
      !(function () {
        var t = n(8),
          r = n(0).utf8,
          i = n(9),
          o = n(0).bin,
          a = function s(e, n) {
            e.constructor == String
              ? (e =
                  n && "binary" === n.encoding
                    ? o.stringToBytes(e)
                    : r.stringToBytes(e))
              : i(e)
              ? (e = Array.prototype.slice.call(e, 0))
              : Array.isArray(e) || (e = e.toString());
            for (
              var a = t.bytesToWords(e),
                u = 8 * e.length,
                l = 1732584193,
                c = -271733879,
                d = -1732584194,
                f = 271733878,
                p = 0;
              p < a.length;
              p++
            )
              a[p] =
                (16711935 & ((a[p] << 8) | (a[p] >>> 24))) |
                (4278255360 & ((a[p] << 24) | (a[p] >>> 8)));
            (a[u >>> 5] |= 128 << u % 32),
              (a[14 + (((u + 64) >>> 9) << 4)] = u);
            var h = s._ff,
              g = s._gg,
              m = s._hh,
              y = s._ii;
            for (p = 0; p < a.length; p += 16) {
              var v = l,
                b = c,
                w = d,
                _ = f;
              (c = y(
                (c = y(
                  (c = y(
                    (c = y(
                      (c = m(
                        (c = m(
                          (c = m(
                            (c = m(
                              (c = g(
                                (c = g(
                                  (c = g(
                                    (c = g(
                                      (c = h(
                                        (c = h(
                                          (c = h(
                                            (c = h(
                                              c,
                                              (d = h(
                                                d,
                                                (f = h(
                                                  f,
                                                  (l = h(
                                                    l,
                                                    c,
                                                    d,
                                                    f,
                                                    a[p + 0],
                                                    7,
                                                    -680876936
                                                  )),
                                                  c,
                                                  d,
                                                  a[p + 1],
                                                  12,
                                                  -389564586
                                                )),
                                                l,
                                                c,
                                                a[p + 2],
                                                17,
                                                606105819
                                              )),
                                              f,
                                              l,
                                              a[p + 3],
                                              22,
                                              -1044525330
                                            )),
                                            (d = h(
                                              d,
                                              (f = h(
                                                f,
                                                (l = h(
                                                  l,
                                                  c,
                                                  d,
                                                  f,
                                                  a[p + 4],
                                                  7,
                                                  -176418897
                                                )),
                                                c,
                                                d,
                                                a[p + 5],
                                                12,
                                                1200080426
                                              )),
                                              l,
                                              c,
                                              a[p + 6],
                                              17,
                                              -1473231341
                                            )),
                                            f,
                                            l,
                                            a[p + 7],
                                            22,
                                            -45705983
                                          )),
                                          (d = h(
                                            d,
                                            (f = h(
                                              f,
                                              (l = h(
                                                l,
                                                c,
                                                d,
                                                f,
                                                a[p + 8],
                                                7,
                                                1770035416
                                              )),
                                              c,
                                              d,
                                              a[p + 9],
                                              12,
                                              -1958414417
                                            )),
                                            l,
                                            c,
                                            a[p + 10],
                                            17,
                                            -42063
                                          )),
                                          f,
                                          l,
                                          a[p + 11],
                                          22,
                                          -1990404162
                                        )),
                                        (d = h(
                                          d,
                                          (f = h(
                                            f,
                                            (l = h(
                                              l,
                                              c,
                                              d,
                                              f,
                                              a[p + 12],
                                              7,
                                              1804603682
                                            )),
                                            c,
                                            d,
                                            a[p + 13],
                                            12,
                                            -40341101
                                          )),
                                          l,
                                          c,
                                          a[p + 14],
                                          17,
                                          -1502002290
                                        )),
                                        f,
                                        l,
                                        a[p + 15],
                                        22,
                                        1236535329
                                      )),
                                      (d = g(
                                        d,
                                        (f = g(
                                          f,
                                          (l = g(
                                            l,
                                            c,
                                            d,
                                            f,
                                            a[p + 1],
                                            5,
                                            -165796510
                                          )),
                                          c,
                                          d,
                                          a[p + 6],
                                          9,
                                          -1069501632
                                        )),
                                        l,
                                        c,
                                        a[p + 11],
                                        14,
                                        643717713
                                      )),
                                      f,
                                      l,
                                      a[p + 0],
                                      20,
                                      -373897302
                                    )),
                                    (d = g(
                                      d,
                                      (f = g(
                                        f,
                                        (l = g(
                                          l,
                                          c,
                                          d,
                                          f,
                                          a[p + 5],
                                          5,
                                          -701558691
                                        )),
                                        c,
                                        d,
                                        a[p + 10],
                                        9,
                                        38016083
                                      )),
                                      l,
                                      c,
                                      a[p + 15],
                                      14,
                                      -660478335
                                    )),
                                    f,
                                    l,
                                    a[p + 4],
                                    20,
                                    -405537848
                                  )),
                                  (d = g(
                                    d,
                                    (f = g(
                                      f,
                                      (l = g(
                                        l,
                                        c,
                                        d,
                                        f,
                                        a[p + 9],
                                        5,
                                        568446438
                                      )),
                                      c,
                                      d,
                                      a[p + 14],
                                      9,
                                      -1019803690
                                    )),
                                    l,
                                    c,
                                    a[p + 3],
                                    14,
                                    -187363961
                                  )),
                                  f,
                                  l,
                                  a[p + 8],
                                  20,
                                  1163531501
                                )),
                                (d = g(
                                  d,
                                  (f = g(
                                    f,
                                    (l = g(
                                      l,
                                      c,
                                      d,
                                      f,
                                      a[p + 13],
                                      5,
                                      -1444681467
                                    )),
                                    c,
                                    d,
                                    a[p + 2],
                                    9,
                                    -51403784
                                  )),
                                  l,
                                  c,
                                  a[p + 7],
                                  14,
                                  1735328473
                                )),
                                f,
                                l,
                                a[p + 12],
                                20,
                                -1926607734
                              )),
                              (d = m(
                                d,
                                (f = m(
                                  f,
                                  (l = m(l, c, d, f, a[p + 5], 4, -378558)),
                                  c,
                                  d,
                                  a[p + 8],
                                  11,
                                  -2022574463
                                )),
                                l,
                                c,
                                a[p + 11],
                                16,
                                1839030562
                              )),
                              f,
                              l,
                              a[p + 14],
                              23,
                              -35309556
                            )),
                            (d = m(
                              d,
                              (f = m(
                                f,
                                (l = m(l, c, d, f, a[p + 1], 4, -1530992060)),
                                c,
                                d,
                                a[p + 4],
                                11,
                                1272893353
                              )),
                              l,
                              c,
                              a[p + 7],
                              16,
                              -155497632
                            )),
                            f,
                            l,
                            a[p + 10],
                            23,
                            -1094730640
                          )),
                          (d = m(
                            d,
                            (f = m(
                              f,
                              (l = m(l, c, d, f, a[p + 13], 4, 681279174)),
                              c,
                              d,
                              a[p + 0],
                              11,
                              -358537222
                            )),
                            l,
                            c,
                            a[p + 3],
                            16,
                            -722521979
                          )),
                          f,
                          l,
                          a[p + 6],
                          23,
                          76029189
                        )),
                        (d = m(
                          d,
                          (f = m(
                            f,
                            (l = m(l, c, d, f, a[p + 9], 4, -640364487)),
                            c,
                            d,
                            a[p + 12],
                            11,
                            -421815835
                          )),
                          l,
                          c,
                          a[p + 15],
                          16,
                          530742520
                        )),
                        f,
                        l,
                        a[p + 2],
                        23,
                        -995338651
                      )),
                      (d = y(
                        d,
                        (f = y(
                          f,
                          (l = y(l, c, d, f, a[p + 0], 6, -198630844)),
                          c,
                          d,
                          a[p + 7],
                          10,
                          1126891415
                        )),
                        l,
                        c,
                        a[p + 14],
                        15,
                        -1416354905
                      )),
                      f,
                      l,
                      a[p + 5],
                      21,
                      -57434055
                    )),
                    (d = y(
                      d,
                      (f = y(
                        f,
                        (l = y(l, c, d, f, a[p + 12], 6, 1700485571)),
                        c,
                        d,
                        a[p + 3],
                        10,
                        -1894986606
                      )),
                      l,
                      c,
                      a[p + 10],
                      15,
                      -1051523
                    )),
                    f,
                    l,
                    a[p + 1],
                    21,
                    -2054922799
                  )),
                  (d = y(
                    d,
                    (f = y(
                      f,
                      (l = y(l, c, d, f, a[p + 8], 6, 1873313359)),
                      c,
                      d,
                      a[p + 15],
                      10,
                      -30611744
                    )),
                    l,
                    c,
                    a[p + 6],
                    15,
                    -1560198380
                  )),
                  f,
                  l,
                  a[p + 13],
                  21,
                  1309151649
                )),
                (d = y(
                  d,
                  (f = y(
                    f,
                    (l = y(l, c, d, f, a[p + 4], 6, -145523070)),
                    c,
                    d,
                    a[p + 11],
                    10,
                    -1120210379
                  )),
                  l,
                  c,
                  a[p + 2],
                  15,
                  718787259
                )),
                f,
                l,
                a[p + 9],
                21,
                -343485551
              )),
                (l = (l + v) >>> 0),
                (c = (c + b) >>> 0),
                (d = (d + w) >>> 0),
                (f = (f + _) >>> 0);
            }
            return t.endian([l, c, d, f]);
          };
        (a._ff = function (e, t, n, r, i, o, a) {
          var s = e + ((t & n) | (~t & r)) + (i >>> 0) + a;
          return ((s << o) | (s >>> (32 - o))) + t;
        }),
          (a._gg = function (e, t, n, r, i, o, a) {
            var s = e + ((t & r) | (n & ~r)) + (i >>> 0) + a;
            return ((s << o) | (s >>> (32 - o))) + t;
          }),
          (a._hh = function (e, t, n, r, i, o, a) {
            var s = e + (t ^ n ^ r) + (i >>> 0) + a;
            return ((s << o) | (s >>> (32 - o))) + t;
          }),
          (a._ii = function (e, t, n, r, i, o, a) {
            var s = e + (n ^ (t | ~r)) + (i >>> 0) + a;
            return ((s << o) | (s >>> (32 - o))) + t;
          }),
          (a._blocksize = 16),
          (a._digestsize = 16),
          (e.exports = function (e, n) {
            if (e === undefined || null === e)
              throw new Error("Illegal argument " + e);
            var r = t.wordsToBytes(a(e, n));
            return n && n.asBytes
              ? r
              : n && n.asString
              ? o.bytesToString(r)
              : t.bytesToHex(r);
          });
      })();
    },
    function (e, t, n) {
      "use strict";
      !(function () {
        var t =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          n = {
            rotl: function (e, t) {
              return (e << t) | (e >>> (32 - t));
            },
            rotr: function (e, t) {
              return (e << (32 - t)) | (e >>> t);
            },
            endian: function (e) {
              if (e.constructor == Number)
                return (16711935 & n.rotl(e, 8)) | (4278255360 & n.rotl(e, 24));
              for (var t = 0; t < e.length; t++) e[t] = n.endian(e[t]);
              return e;
            },
            randomBytes: function (e) {
              for (var t = []; e > 0; e--)
                t.push(Math.floor(256 * Math.random()));
              return t;
            },
            bytesToWords: function (e) {
              for (var t = [], n = 0, r = 0; n < e.length; n++, r += 8)
                t[r >>> 5] |= e[n] << (24 - (r % 32));
              return t;
            },
            wordsToBytes: function (e) {
              for (var t = [], n = 0; n < 32 * e.length; n += 8)
                t.push((e[n >>> 5] >>> (24 - (n % 32))) & 255);
              return t;
            },
            bytesToHex: function (e) {
              for (var t = [], n = 0; n < e.length; n++)
                t.push((e[n] >>> 4).toString(16)),
                  t.push((15 & e[n]).toString(16));
              return t.join("");
            },
            hexToBytes: function (e) {
              for (var t = [], n = 0; n < e.length; n += 2)
                t.push(parseInt(e.substr(n, 2), 16));
              return t;
            },
            bytesToBase64: function (e) {
              for (var n = [], r = 0; r < e.length; r += 3)
                for (
                  var i = (e[r] << 16) | (e[r + 1] << 8) | e[r + 2], o = 0;
                  o < 4;
                  o++
                )
                  8 * r + 6 * o <= 8 * e.length
                    ? n.push(t.charAt((i >>> (6 * (3 - o))) & 63))
                    : n.push("=");
              return n.join("");
            },
            base64ToBytes: function (e) {
              e = e.replace(/[^A-Z0-9+\/]/gi, "");
              for (var n = [], r = 0, i = 0; r < e.length; i = ++r % 4)
                0 != i &&
                  n.push(
                    ((t.indexOf(e.charAt(r - 1)) &
                      (Math.pow(2, -2 * i + 8) - 1)) <<
                      (2 * i)) |
                      (t.indexOf(e.charAt(r)) >>> (6 - 2 * i))
                  );
              return n;
            },
          };
        e.exports = n;
      })();
    },
    function (e, t, n) {
      "use strict";
      function r(e) {
        return (
          !!e.constructor &&
          "function" == typeof e.constructor.isBuffer &&
          e.constructor.isBuffer(e)
        );
      }
      e.exports = function (e) {
        return (
          null != e &&
          (r(e) ||
            (function (e) {
              return (
                "function" == typeof e.readFloatLE &&
                "function" == typeof e.slice &&
                r(e.slice(0, 0))
              );
            })(e) ||
            !!e._isBuffer)
        );
      };
    },
  ])["default"];
});
