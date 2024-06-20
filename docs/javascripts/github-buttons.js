
function apply_pallet(){
    /* Retrieve color palette for system preference */
    if (palette.color.media === "(prefers-color-scheme)") {
        var media = matchMedia("(prefers-color-scheme: light)")
        var input = document.querySelector(media.matches
          ? "[data-md-color-media='(prefers-color-scheme: light)']"
          : "[data-md-color-media='(prefers-color-scheme: dark)']"
        )
  
        /* Retrieve colors for system preference */
        palette.color.media   = input.getAttribute("data-md-color-media"),
        palette.color.scheme  = input.getAttribute("data-md-color-scheme"),
        palette.color.primary = input.getAttribute("data-md-color-primary"),
        palette.color.accent  = input.getAttribute("data-md-color-accent")
      }
  
      console.log(palette);
  
      const prefersColorScheme = palette.color.media.match(/\(prefers-color-scheme: (\w+)\)/)[1];
      console.log(prefersColorScheme);
  
      var attrib = `"no-preference: ${prefersColorScheme}; light: ${prefersColorScheme}; dark: ${prefersColorScheme};"`;
      console.log(attrib);
  
      const elements = document.querySelectorAll('.github-button');
  
      elements.forEach(element => {
          element.setAttribute('data-color-scheme', attrib);
      });
}

var palette = __md_get("__palette")
if (palette && palette.color) {
    apply_pallet();
}


document.querySelectorAll('.md-option').forEach(element => {
    element.addEventListener('click', () => {
        window.location.reload();
    });
});


/*!
 * github-buttons v2.28.0
 * (c) 2024 なつき
 * @license BSD-2-Clause
 */
! function() {
    "use strict";
    var e = window.document,
        o = e.location,
        t = window.Math,
        r = window.HTMLElement,
        a = window.XMLHttpRequest,
        n = "github-button",
        i = "https://buttons.github.io/buttons.html",
        c = "github.com",
        c2 = "pypi.org",
        l = "https://api." + c,
        d = a && "prototype" in a && "withCredentials" in a.prototype,
        s = d && r && "attachShadow" in r.prototype && !("prototype" in r.prototype.attachShadow),
        u = function(e, o) { for (var t = 0, r = e.length; t < r; t++) o(e[t]) },
        h = function(e) {
            return function(o, t, r) {
                var a = e.createElement(o);
                if (null != t)
                    for (var n in t) {
                        var i = t[n];
                        null != i && (null != a[n] ? a[n] = i : a.setAttribute(n, i))
                    }
                return null != r && u(r, (function(o) { a.appendChild("string" == typeof o ? e.createTextNode(o) : o) })), a
            }
        },
        f = h(e),
        g = function(e) { var o; return function() { o || (o = 1, e.apply(this, arguments)) } },
        p = function(e, o) { return {}.hasOwnProperty.call(e, o) },
        b = function(e) { return ("" + e).toLowerCase() },
        v = function(e, o, t, r) {
            null == o && (o = "&"), null == t && (t = "="), null == r && (r = window.decodeURIComponent);
            var a = {};
            return u(e.split(o), (function(e) {
                if ("" !== e) {
                    var o = e.split(t);
                    a[r(o[0])] = null != o[1] ? r(o.slice(1).join(t)) : void 0
                }
            })), a
        },
        m = function(e, o, t) { e.addEventListener ? e.addEventListener(o, t, !1) : e.attachEvent("on" + o, t) },
        w = function(e, o, t) { e.removeEventListener ? e.removeEventListener(o, t, !1) : e.detachEvent("on" + o, t) },
        k = function(e, o, t) {
            var r = function() { return w(e, o, r), t.apply(this, arguments) };
            m(e, o, r)
        },
        x = function(e, o, t) {
            if (null != e.readyState) {
                var r = "readystatechange",
                    a = function() { if (o.test(e.readyState)) return w(e, r, a), t.apply(this, arguments) };
                m(e, r, a)
            }
        },
        y = { light: ".btn:focus-visible,.social-count:focus-visible{outline:2px solid #0969da;outline-offset:-2px}.btn{color:#24292f;background-color:#ebf0f4;border-color:#d0d7de;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%23f6f8fa'/%3e%3cstop offset='90%25' stop-color='%23ebf0f4'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #f6f8fa, #ebf0f4 90%);background-image:linear-gradient(180deg, #f6f8fa, #ebf0f4 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FFF6F8FA', endColorstr='#FFEAEFF3')}:root .btn{filter:none}.btn:hover,.btn:focus{background-color:#e4e9ed;background-position:0 -0.5em;border-color:#d0d7de;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%23eef1f4'/%3e%3cstop offset='90%25' stop-color='%23e4e9ed'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #eef1f4, #e4e9ed 90%);background-image:linear-gradient(180deg, #eef1f4, #e4e9ed 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FFEEF1F4', endColorstr='#FFE3E8EC')}:root .btn:hover,:root .btn:focus{filter:none}.btn:active{background-color:#e7ebef;border-color:#d0d7de;background-image:none;filter:none}.social-count{color:#24292f;background-color:#fff;border-color:#d0d7de}.social-count:hover,.social-count:focus{color:#0969da}.octicon-heart{color:#bf3989}", light_high_contrast: ".btn:focus-visible,.social-count:focus-visible{outline:2px solid #0349b4;outline-offset:-2px}.btn{color:#0e1116;background-color:#e7ecf0;border-color:#20252c;background-image:none;filter:none}.btn:hover,.btn:focus{background-color:#d1d9df;background-position:0 -0.5em;border-color:#20252c;background-image:none;filter:none}.btn:active{background-color:#cfd6dd;border-color:#20252c}.social-count{color:#0e1116;background-color:#fff;border-color:#20252c}.social-count:hover,.social-count:focus{color:#023b95}.octicon-heart{color:#971368}", dark: ".btn:focus-visible,.social-count:focus-visible{outline:2px solid #1f6feb;outline-offset:-2px}.btn{color:#c9d1d9;background-color:#1a1e23;border-color:#30363d;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%2321262d'/%3e%3cstop offset='90%25' stop-color='%231a1e23'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #21262d, #1a1e23 90%);background-image:linear-gradient(180deg, #21262d, #1a1e23 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FF21262D', endColorstr='#FF191D22')}:root .btn{filter:none}.btn:hover,.btn:focus{background-color:#22262c;background-position:0 -0.5em;border-color:#30363d;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%23292e36'/%3e%3cstop offset='90%25' stop-color='%2322262c'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #292e36, #22262c 90%);background-image:linear-gradient(180deg, #292e36, #22262c 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FF292E36', endColorstr='#FF21252B')}:root .btn:hover,:root .btn:focus{filter:none}.btn:active{background-color:#31363e;border-color:#30363d;background-image:none;filter:none}.social-count{color:#c9d1d9;background-color:#0d1117;border-color:#30363d}.social-count:hover,.social-count:focus{color:#388bfd}.octicon-heart{color:#db61a2}", dark_dimmed: ".btn:focus-visible,.social-count:focus-visible{outline:2px solid #316dca;outline-offset:-2px}.btn{color:#adbac7;background-color:#30363d;border-color:#444c56;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%23373e47'/%3e%3cstop offset='90%25' stop-color='%2330363d'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #373e47, #30363d 90%);background-image:linear-gradient(180deg, #373e47, #30363d 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FF373E47', endColorstr='#FF2F353C')}:root .btn{filter:none}.btn:hover,.btn:focus{background-color:#363c44;background-position:0 -0.5em;border-color:#444c56;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%233d444e'/%3e%3cstop offset='90%25' stop-color='%23363c44'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #3d444e, #363c44 90%);background-image:linear-gradient(180deg, #3d444e, #363c44 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FF3D444E', endColorstr='#FF353B43')}:root .btn:hover,:root .btn:focus{filter:none}.btn:active{background-color:#434a54;border-color:#444c56;background-image:none;filter:none}.social-count{color:#adbac7;background-color:#22272e;border-color:#444c56}.social-count:hover,.social-count:focus{color:#4184e4}.octicon-heart{color:#c96198}", dark_high_contrast: ".btn:focus-visible,.social-count:focus-visible{outline:2px solid #409eff;outline-offset:-2px}.btn{color:#f0f3f6;background-color:#3d424d;border-color:#7a828e;background-image:none;filter:none}.btn:hover,.btn:focus{background-color:#414751;background-position:0 -0.5em;border-color:#7a828e;background-image:none;filter:none}.btn:active{background-color:#555c67;border-color:#7a828e}.social-count{color:#f0f3f6;background-color:#0a0c10;border-color:#7a828e}.social-count:hover,.social-count:focus{color:#5cacff}.octicon-heart{color:#f87cbd}" },
        C = function(e, o) { return "@media(prefers-color-scheme:" + e + "){" + y[p(y, o) ? o : e] + "}" },
        M = { "comment-discussion": { heights: { 16: { width: 16, path: '<path d="M1.75 1h8.5c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0 1 10.25 10H7.061l-2.574 2.573A1.458 1.458 0 0 1 2 11.543V10h-.25A1.75 1.75 0 0 1 0 8.25v-5.5C0 1.784.784 1 1.75 1ZM1.5 2.75v5.5c0 .138.112.25.25.25h1a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h3.5a.25.25 0 0 0 .25-.25v-5.5a.25.25 0 0 0-.25-.25h-8.5a.25.25 0 0 0-.25.25Zm13 2a.25.25 0 0 0-.25-.25h-.5a.75.75 0 0 1 0-1.5h.5c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0 1 14.25 12H14v1.543a1.458 1.458 0 0 1-2.487 1.03L9.22 12.28a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l2.22 2.22v-2.19a.75.75 0 0 1 .75-.75h1a.25.25 0 0 0 .25-.25Z"></path>' } } }, download: { heights: { 16: { width: 16, path: '<path d="M2.75 14A1.75 1.75 0 0 1 1 12.25v-2.5a.75.75 0 0 1 1.5 0v2.5c0 .138.112.25.25.25h10.5a.25.25 0 0 0 .25-.25v-2.5a.75.75 0 0 1 1.5 0v2.5A1.75 1.75 0 0 1 13.25 14Z"></path><path d="M7.25 7.689V2a.75.75 0 0 1 1.5 0v5.689l1.97-1.969a.749.749 0 1 1 1.06 1.06l-3.25 3.25a.749.749 0 0 1-1.06 0L4.22 6.78a.749.749 0 1 1 1.06-1.06l1.97 1.969Z"></path>' } } }, eye: { heights: { 16: { width: 16, path: '<path d="M8 2c1.981 0 3.671.992 4.933 2.078 1.27 1.091 2.187 2.345 2.637 3.023a1.62 1.62 0 0 1 0 1.798c-.45.678-1.367 1.932-2.637 3.023C11.67 13.008 9.981 14 8 14c-1.981 0-3.671-.992-4.933-2.078C1.797 10.83.88 9.576.43 8.898a1.62 1.62 0 0 1 0-1.798c.45-.677 1.367-1.931 2.637-3.022C4.33 2.992 6.019 2 8 2ZM1.679 7.932a.12.12 0 0 0 0 .136c.411.622 1.241 1.75 2.366 2.717C5.176 11.758 6.527 12.5 8 12.5c1.473 0 2.825-.742 3.955-1.715 1.124-.967 1.954-2.096 2.366-2.717a.12.12 0 0 0 0-.136c-.412-.621-1.242-1.75-2.366-2.717C10.824 4.242 9.473 3.5 8 3.5c-1.473 0-2.825.742-3.955 1.715-1.124.967-1.954 2.096-2.366 2.717ZM8 10a2 2 0 1 1-.001-3.999A2 2 0 0 1 8 10Z"></path>' } } }, heart: { heights: { 16: { width: 16, path: '<path d="m8 14.25.345.666a.75.75 0 0 1-.69 0l-.008-.004-.018-.01a7.152 7.152 0 0 1-.31-.17 22.055 22.055 0 0 1-3.434-2.414C2.045 10.731 0 8.35 0 5.5 0 2.836 2.086 1 4.25 1 5.797 1 7.153 1.802 8 3.02 8.847 1.802 10.203 1 11.75 1 13.914 1 16 2.836 16 5.5c0 2.85-2.045 5.231-3.885 6.818a22.066 22.066 0 0 1-3.744 2.584l-.018.01-.006.003h-.002ZM4.25 2.5c-1.336 0-2.75 1.164-2.75 3 0 2.15 1.58 4.144 3.365 5.682A20.58 20.58 0 0 0 8 13.393a20.58 20.58 0 0 0 3.135-2.211C12.92 9.644 14.5 7.65 14.5 5.5c0-1.836-1.414-3-2.75-3-1.373 0-2.609.986-3.029 2.456a.749.749 0 0 1-1.442 0C6.859 3.486 5.623 2.5 4.25 2.5Z"></path>' } } }, "issue-opened": { heights: { 16: { width: 16, path: '<path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"></path>' } } }, "mark-github": { heights: { 16: { width: 16, path: '<path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>' } } }, package: { heights: { 16: { width: 16, path: '<path d="m8.878.392 5.25 3.045c.54.314.872.89.872 1.514v6.098a1.75 1.75 0 0 1-.872 1.514l-5.25 3.045a1.75 1.75 0 0 1-1.756 0l-5.25-3.045A1.75 1.75 0 0 1 1 11.049V4.951c0-.624.332-1.201.872-1.514L7.122.392a1.75 1.75 0 0 1 1.756 0ZM7.875 1.69l-4.63 2.685L8 7.133l4.755-2.758-4.63-2.685a.248.248 0 0 0-.25 0ZM2.5 5.677v5.372c0 .09.047.171.125.216l4.625 2.683V8.432Zm6.25 8.271 4.625-2.683a.25.25 0 0 0 .125-.216V5.677L8.75 8.432Z"></path>' } } }, play: { heights: { 16: { width: 16, path: '<path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"></path>' } } }, "repo-forked": { heights: { 16: { width: 16, path: '<path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"></path>' } } }, "repo-template": { heights: { 16: { width: 16, path: '<path d="M13.25 8a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-.75a.75.75 0 0 1 0-1.5h.75v-.25a.75.75 0 0 1 .75-.75ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2ZM2.75 8a.75.75 0 0 1 .75.75v.268c.083-.012.166-.018.25-.018h.5a.75.75 0 0 1 0 1.5h-.5a.25.25 0 0 0-.25.25v.75c0 .28.114.532.3.714a.75.75 0 1 1-1.05 1.072A2.495 2.495 0 0 1 2 11.5V8.75A.75.75 0 0 1 2.75 8ZM11 .75a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0V1.5h-.75A.75.75 0 0 1 11 .75Zm-5 0A.75.75 0 0 1 6.75 0h2.5a.75.75 0 0 1 0 1.5h-2.5A.75.75 0 0 1 6 .75Zm0 9A.75.75 0 0 1 6.75 9h2.5a.75.75 0 0 1 0 1.5h-2.5A.75.75 0 0 1 6 9.75ZM4.992.662a.75.75 0 0 1-.636.848c-.436.063-.783.41-.846.846a.751.751 0 0 1-1.485-.212A2.501 2.501 0 0 1 4.144.025a.75.75 0 0 1 .848.637ZM2.75 4a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 2.75 4Zm10.5 0a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5a.75.75 0 0 1 .75-.75Z"></path>' } } }, star: { heights: { 16: { width: 16, path: '<path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>' } } } },
        Z = function(e, o) {
            e = b(e).replace(/^octicon-/, ""), p(M, e) || (e = "mark-github");
            var t = o >= 24 && 24 in M[e].heights ? 24 : 16,
                r = M[e].heights[t];
            return '<svg viewBox="0 0 ' + r.width + " " + t + '" width="' + o * r.width / t + '" height="' + o + '" class="octicon octicon-' + e + '" aria-hidden="true">' + r.path + "</svg>"
        },
        A = {},
        F = function(e, o) {
            var t = A[e] || (A[e] = []);
            if (!(t.push(o) > 1)) {
                var r = g((function() { for (delete A[e]; o = t.shift();) o.apply(null, arguments) }));
                if (d) {
                    var n = new a;
                    m(n, "abort", r), m(n, "error", r), m(n, "load", (function() {
                        var e;
                        try { e = JSON.parse(this.responseText) } catch (e) { return void r(e) }
                        r(200 !== this.status, e)
                    })), n.open("GET", e), n.send()
                } else {
                    var i = this || window;
                    i._ = function(e) { i._ = null, r(200 !== e.meta.status, e.data) };
                    var c = h(i.document)("script", { async: !0, src: e + (-1 !== e.indexOf("?") ? "&" : "?") + "callback=_" }),
                        l = function() { i._ && i._({ meta: {} }) };
                    m(c, "load", l), m(c, "error", l), x(c, /de|m/, l), i.document.getElementsByTagName("head")[0].appendChild(c)
                }
            }
        },
        E = function(e, o, t) {
            var r = h(e.ownerDocument),
                a = e.appendChild(r("style", { type: "text/css" })),
                n = "body{margin:0}a{text-decoration:none;outline:0}.widget{display:inline-block;overflow:hidden;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif;font-size:0;line-height:0;white-space:nowrap}.btn,.social-count{position:relative;display:inline-block;display:inline-flex;height:14px;padding:2px 5px;font-size:11px;font-weight:600;line-height:14px;vertical-align:bottom;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-repeat:repeat-x;background-position:-1px -1px;background-size:110% 110%;border:1px solid}.btn{border-radius:.25em}.btn:not(:last-child){border-radius:.25em 0 0 .25em}.social-count{border-left:0;border-radius:0 .25em .25em 0}.widget-lg .btn,.widget-lg .social-count{height:16px;padding:5px 10px;font-size:12px;line-height:16px}.octicon{display:inline-block;vertical-align:text-top;fill:currentColor;overflow:visible}" + function(e) { if (null == e) return y.light; if (p(y, e)) return y[e]; var o = v(e, ";", ":", (function(e) { return e.replace(/^[ \t\n\f\r]+|[ \t\n\f\r]+$/g, "") })); return y[p(y, o["no-preference"]) ? o["no-preference"] : "light"] + C("light", o.light) + C("dark", o.dark) }(o["data-color-scheme"]);
            a.styleSheet ? a.styleSheet.cssText = n : a.appendChild(e.ownerDocument.createTextNode(n));
            var i = "large" === b(o["data-size"]),
                d = r("a", { className: "btn", href: o.href, rel: "noopener", target: "_blank", title: o.title || void 0, "aria-label": o["aria-label"] || void 0, innerHTML: Z(o["data-icon"], i ? 16 : 14) + "&nbsp;" }, [r("span", {}, [o["data-text"] || ""])]),
                s = e.appendChild(r("div", { className: "widget" + (i ? " widget-lg" : "") }, [d])),
                u = d.hostname.replace(/\.$/, "");
            // if (("." + u).substring(u.length - 10) !== "." + c) return d.removeAttribute("href"), void t(s);
            // if (("." + u).substring(u.length - 10) !== "." + c2) return d.removeAttribute("href"), void t(s);

            var f = (" /" + d.pathname).split(/\/+/);
            if (((u === c || u === "gist." + c) && "archive" === f[3] || u === c && "releases" === f[3] && ("download" === f[4] || "latest" === f[4] && "download" === f[5]) || u === "codeload." + c) && (d.target = "_top"), "true" === b(o["data-show-count"]) && u === c && "marketplace" !== f[1] && "sponsors" !== f[1] && "orgs" !== f[1] && "users" !== f[1] && "-" !== f[1]) {
                var g, m;
                if (!f[2] && f[1]) m = "followers", g = "?tab=followers";
                else if (!f[3] && f[2]) m = "stargazers_count", g = "/stargazers";
                else if (f[4] || "subscription" !== f[3])
                    if (f[4] || "fork" !== f[3]) {
                        if ("issues" !== f[3]) return void t(s);
                        m = "open_issues_count", g = "/issues"
                    } else m = "forks_count", g = "/forks";
                else m = "subscribers_count", g = "/watchers";
                var w = f[2] ? "/repos/" + f[1] + "/" + f[2] : "/users/" + f[1];
                F.call(this, l + w, (function(e, o) {
                    if (!e) {
                        var a = o[m];
                        s.appendChild(r("a", { className: "social-count", href: o.html_url + g, rel: "noopener", target: "_blank", "aria-label": a + " " + m.replace(/_count$/, "").replace("_", " ").slice(0, a < 2 ? -1 : void 0) + " on GitHub" }, [("" + a).replace(/\B(?=(\d{3})+(?!\d))/g, ",")]))
                    }
                    t(s)
                }))
            } else t(s)
        },
        L = window.devicePixelRatio || 1,
        _ = function(e) { return (L > 1 ? t.ceil(t.round(e * L) / L * 2) / 2 : t.ceil(e)) || 0 },
        G = function(e, o) { e.style.width = o[0] + "px", e.style.height = o[1] + "px" },
        T = function(o, r) {
            if (null != o && null != r)
                if (o.getAttribute && (o = function(e) {
                        var o = { href: e.href, title: e.title, "aria-label": e.getAttribute("aria-label") };
                        return u(["icon", "color-scheme", "text", "size", "show-count"], (function(t) {
                            var r = "data-" + t;
                            o[r] = e.getAttribute(r)
                        })), null == o["data-text"] && (o["data-text"] = e.textContent || e.innerText), o
                    }(o)), s) {
                    var a = f("span");
                    E(a.attachShadow({ mode: "closed" }), o, (function() { r(a) }))
                } else {
                    var n = f("iframe", { src: "javascript:0", title: o.title || void 0, allowtransparency: !0, scrolling: "no", frameBorder: 0 });
                    G(n, [0, 0]), n.style.border = "none";
                    var c = function() {
                        var a, l = n.contentWindow;
                        try { a = l.document.body } catch (o) { return void e.body.appendChild(n.parentNode.removeChild(n)) }
                        w(n, "load", c), E.call(l, a, o, (function(e) {
                            var a = function(e) {
                                var o = e.offsetWidth,
                                    r = e.offsetHeight;
                                if (e.getBoundingClientRect) {
                                    var a = e.getBoundingClientRect();
                                    o = t.max(o, _(a.width)), r = t.max(r, _(a.height))
                                }
                                return [o, r]
                            }(e);
                            n.parentNode.removeChild(n), k(n, "load", (function() { G(n, a) })), n.src = i + "#" + (n.name = function(e, o, t, r) {
                                null == o && (o = "&"), null == t && (t = "="), null == r && (r = window.encodeURIComponent);
                                var a = [];
                                for (var n in e) {
                                    var i = e[n];
                                    null != i && a.push(r(n) + t + r(i))
                                }
                                return a.join(o)
                            }(o)), r(n)
                        }))
                    };
                    m(n, "load", c), e.body.appendChild(n)
                }
        };
    o.protocol + "//" + o.host + o.pathname === i ? E(e.body, v(window.name || o.hash.replace(/^#/, "")), (function() {})) : function(o) {
        if ("complete" === e.readyState || "loading" !== e.readyState && !e.documentElement.doScroll) setTimeout(o);
        else if (e.addEventListener) {
            var t = g(o);
            k(e, "DOMContentLoaded", t), k(window, "load", t)
        } else x(e, /m/, o)
    }((function() {
        function makebtn(cls) {
            var o, t = e.querySelectorAll ? e.querySelectorAll("a." + cls) : (o = [], u(e.getElementsByTagName("a"), (function(e) {-1 !== (" " + e.className + " ").replace(/[ \t\n\f\r]+/g, " ").indexOf(" " + cls + " ") && o.push(e) })), o);
            u(t, (function(e) { T(e, (function(o) { e.parentNode.replaceChild(o, e) })) }))
        }
        makebtn(n);

    }))
}();