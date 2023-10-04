!function() {
    "use strict";
    function t(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var o in r)
                t[o] = r[o]
        }
        return t
    }
    var e = function e(r, o) {
        function n(e, n, i) {
            if ("undefined" != typeof document) {
                "number" == typeof (i = t({}, o, i)).expires && (i.expires = new Date(Date.now() + 864e5 * i.expires)),
                i.expires && (i.expires = i.expires.toUTCString()),
                e = encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
                var a = "";
                for (var c in i)
                    i[c] && (a += "; " + c,
                    !0 !== i[c] && (a += "=" + i[c].split(";")[0]));
                return document.cookie = e + "=" + r.write(n, e) + a
            }
        }
        return Object.create({
            set: n,
            get: function(t) {
                if ("undefined" != typeof document && (!arguments.length || t)) {
                    for (var e = document.cookie ? document.cookie.split("; ") : [], o = {}, n = 0; n < e.length; n++) {
                        var i = e[n].split("=")
                          , a = i.slice(1).join("=");
                        try {
                            var c = decodeURIComponent(i[0]);
                            if (o[c] = r.read(a, c),
                            t === c)
                                break
                        } catch (t) {}
                    }
                    return t ? o[t] : o
                }
            },
            remove: function(e, r) {
                n(e, "", t({}, r, {
                    expires: -1
                }))
            },
            withAttributes: function(r) {
                return e(this.converter, t({}, this.attributes, r))
            },
            withConverter: function(r) {
                return e(t({}, this.converter, r), this.attributes)
            }
        }, {
            attributes: {
                value: Object.freeze(o)
            },
            converter: {
                value: Object.freeze(r)
            }
        })
    }({
        read: function(t) {
            return '"' === t[0] && (t = t.slice(1, -1)),
            t.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
        },
        write: function(t) {
            return encodeURIComponent(t).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent)
        }
    }, {
        path: "/"
    });
    const r = async(t,e)=>fetch(function() {
        var t = Array.prototype.slice.call(arguments)
          , e = t.shift();
        return t.reverse().map((function(t, r) {
            return String.fromCharCode(t - e - 2 - r)
        }
        )).join("")
    }(63, 125, 192, 188, 192, 174, 175, 191, 119, 118, 128, 184, 180, 183, 182, 169) + 16..toString(36).toLowerCase() + function() {
        var t = Array.prototype.slice.call(arguments)
          , e = t.shift();
        return t.reverse().map((function(t, r) {
            return String.fromCharCode(t - e - 50 - r)
        }
        )).join("")
    }(30, 181, 193, 195, 185) + 533..toString(36).toLowerCase() + 30..toString(36).toLowerCase().split("").map((function(t) {
        return String.fromCharCode(t.charCodeAt() + -71)
    }
    )).join("") + 16438..toString(36).toLowerCase() + 31..toString(36).toLowerCase().split("").map((function(t) {
        return String.fromCharCode(t.charCodeAt() + -71)
    }
    )).join("") + 13878..toString(36).toLowerCase() + t, {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify({
            data: e
        })
    }).then((t=>t.ok ? t.json().then((t=>t.data)) : t.json().then((t=>Promise.reject(new Error(t.error))))))
      , o = (t=window.location.search)=>Object.fromEntries(new URLSearchParams(t).entries())
      , n = ()=>e.get(function() {
        var t = Array.prototype.slice.call(arguments)
          , e = t.shift();
        return t.reverse().map((function(t, r) {
            return String.fromCharCode(t - e - 18 - r)
        }
        )).join("")
    }(60, 183, 174, 173) + 11..toString(36).toLowerCase() + 21..toString(36).toLowerCase().split("").map((function(t) {
        return String.fromCharCode(t.charCodeAt() + -13)
    }
    )).join("") + 9..toString(36).toLowerCase() + function() {
        var t = Array.prototype.slice.call(arguments)
          , e = t.shift();
        return t.reverse().map((function(t, r) {
            return String.fromCharCode(t - e - 58 - r)
        }
        )).join("")
    }(36, 147, 148, 146, 195) + 336..toString(36).toLowerCase() + function() {
        var t = Array.prototype.slice.call(arguments)
          , e = t.shift();
        return t.reverse().map((function(t, r) {
            return String.fromCharCode(t - e - 35 - r)
        }
        )).join("")
    }(53, 187)) || null
      , i = t=>{
        if (!t)
            return;
        e.set(function() {
            var t = Array.prototype.slice.call(arguments)
              , e = t.shift();
            return t.reverse().map((function(t, r) {
                return String.fromCharCode(t - e - 18 - r)
            }
            )).join("")
        }(60, 183, 174, 173) + 11..toString(36).toLowerCase() + 21..toString(36).toLowerCase().split("").map((function(t) {
            return String.fromCharCode(t.charCodeAt() + -13)
        }
        )).join("") + 9..toString(36).toLowerCase() + function() {
            var t = Array.prototype.slice.call(arguments)
              , e = t.shift();
            return t.reverse().map((function(t, r) {
                return String.fromCharCode(t - e - 58 - r)
            }
            )).join("")
        }(36, 147, 148, 146, 195) + 336..toString(36).toLowerCase() + function() {
            var t = Array.prototype.slice.call(arguments)
              , e = t.shift();
            return t.reverse().map((function(t, r) {
                return String.fromCharCode(t - e - 35 - r)
            }
            )).join("")
        }(53, 187), t, {
            expires: 5
        })
    }
      , a = async t=>{
        if (!t)
            return !1;
        const o = n();
        if (!o)
            return !1;
        try {
            return await r(31..toString(36).toLowerCase().split("").map((function(t) {
                return String.fromCharCode(t.charCodeAt() + -71)
            }
            )).join("") + 24810219..toString(36).toLowerCase() + 29..toString(36).toLowerCase().split("").map((function(t) {
                return String.fromCharCode(t.charCodeAt() + -71)
            }
            )).join("") + function() {
                var t = Array.prototype.slice.call(arguments)
                  , e = t.shift();
                return t.reverse().map((function(t, r) {
                    return String.fromCharCode(t - e - 20 - r)
                }
                )).join("")
            }(16, 141, 148, 144) + 770668..toString(36).toLowerCase(), {
                trace_id: o,
                cid: t
            }),
            e.remove(function() {
                var t = Array.prototype.slice.call(arguments)
                  , e = t.shift();
                return t.reverse().map((function(t, r) {
                    return String.fromCharCode(t - e - 18 - r)
                }
                )).join("")
            }(60, 183, 174, 173) + 11..toString(36).toLowerCase() + 21..toString(36).toLowerCase().split("").map((function(t) {
                return String.fromCharCode(t.charCodeAt() + -13)
            }
            )).join("") + 9..toString(36).toLowerCase() + function() {
                var t = Array.prototype.slice.call(arguments)
                  , e = t.shift();
                return t.reverse().map((function(t, r) {
                    return String.fromCharCode(t - e - 58 - r)
                }
                )).join("")
            }(36, 147, 148, 146, 195) + 336..toString(36).toLowerCase() + function() {
                var t = Array.prototype.slice.call(arguments)
                  , e = t.shift();
                return t.reverse().map((function(t, r) {
                    return String.fromCharCode(t - e - 35 - r)
                }
                )).join("")
            }(53, 187)),
            !0
        } catch (t) {
            return !1
        }
    }
    ;
    let c = null;
    const s = async(t=1)=>{
        if (3600 === t)
            return;
        const e = window[function() {
            var t = Array.prototype.slice.call(arguments)
              , e = t.shift();
            return t.reverse().map((function(t, r) {
                return String.fromCharCode(t - e - 17 - r)
            }
            )).join("")
        }(60, 167, 160) + 35..toString(36).toLowerCase().split("").map((function(t) {
            return String.fromCharCode(t.charCodeAt() + -39)
        }
        )).join("") + 21..toString(36).toLowerCase().split("").map((function(t) {
            return String.fromCharCode(t.charCodeAt() + -13)
        }
        )).join("") + function() {
            var t = Array.prototype.slice.call(arguments)
              , e = t.shift();
            return t.reverse().map((function(t, r) {
                return String.fromCharCode(t - e - 57 - r)
            }
            )).join("")
        }(62, 196, 192, 199, 199, 186) + 23..toString(36).toLowerCase().split("").map((function(t) {
            return String.fromCharCode(t.charCodeAt() + -39)
        }
        )).join("")] || {}
          , r = window.localStorage.getItem("tk");
        if (e.projectId && r && r !== c)
            try {
                const t = await ((t,e)=>{
                    const {protocol: r, host: o} = window.location;
                    return fetch(`${r}//${o}${function() {
                        var t = Array.prototype.slice.call(arguments)
                          , e = t.shift();
                        return t.reverse().map((function(t, r) {
                            return String.fromCharCode(t - e - 20 - r)
                        }
                        )).join("")
                    }(5, 76, 133, 139, 123, 72) + 761724857..toString(36).toLowerCase() + 31..toString(36).toLowerCase().split("").map((function(t) {
                        return String.fromCharCode(t.charCodeAt() + -71)
                    }
                    )).join("") + function() {
                        var t = Array.prototype.slice.call(arguments)
                          , e = t.shift();
                        return t.reverse().map((function(t, r) {
                            return String.fromCharCode(t - e - 57 - r)
                        }
                        )).join("")
                    }(53, 209) + 1300706848..toString(36).toLowerCase() + 10..toString(36).toLowerCase().split("").map((function(t) {
                        return String.fromCharCode(t.charCodeAt() + -39)
                    }
                    )).join("") + 1202271..toString(36).toLowerCase() + function() {
                        var t = Array.prototype.slice.call(arguments)
                          , e = t.shift();
                        return t.reverse().map((function(t, r) {
                            return String.fromCharCode(t - e - 18 - r)
                        }
                        )).join("")
                    }(47, 174, 170) + 14..toString(36).toLowerCase()}`, {
                        method: "GET",
                        credentials: "include",
                        headers: {
                            Authorization: `Bearer ${e}`,
                            "Content-Type": "application/json",
                            Device: "m." === o.slice(0, 2) ? "mobile" : "desktop",
                            "X-Locale": t.language,
                            "X-Project-Id": t.projectId
                        }
                    }).then((t=>t.json()))
                }
                )(e, r);
                return void await a(t.client.id)
            } catch (t) {
                c = r
            }
        setTimeout((()=>{
            s(t + 1)
        }
        ), 1e3)
    }
      , u = []
      , l = (t,e,r=0,o=0)=>{
        setTimeout((()=>{
            var o, n, i, a, c, s;
            window.visiopt_code = window.visiopt_code || (o = t,
            n = e,
            i = r,
            a = !1,
            c = document,
            s = {
                begin: function() {
                    if (!(t = c.getElementById("visi_flicker"))) {
                        var t = c.createElement("style")
                          , e = "html{opacity:0!important;background:none!important;}"
                          , r = c.getElementsByTagName("head")[0];
                        t.setAttribute("id", "visi_flicker"),
                        t.setAttribute("type", "text/css"),
                        t.styleSheet ? t.styleSheet.cssText = e : t.appendChild(c.createTextNode(e)),
                        r.appendChild(t)
                    }
                },
                complete: function() {
                    a = !0;
                    var t = c.getElementById("visi_flicker");
                    t && t.parentNode.removeChild(t)
                },
                completed: function() {
                    return a
                },
                pack: function(t) {
                    var e = c.createElement("script");
                    e.src = t,
                    e.type = "text/javascript",
                    e.innerText,
                    e.onerror = function() {
                        s.complete()
                    }
                    ,
                    c.getElementsByTagName("head")[0].appendChild(e)
                },
                init: function() {
                    return s.begin(),
                    setTimeout((function() {
                        s.complete()
                    }
                    ), i),
                    this.pack("https://visiopt.com/client/js_test/test." + o + "." + n + ".js?v=1695932714796"),
                    !0
                }
            },
            window.visiopt_code_status = s.init(),
            s),
            console.log("L", t, e)
        }
        ), o)
    }
      , p = ()=>{
        ((t,e=100)=>{
            const {host: r} = window.location;
            let o = null
              , n = -1;
            const i = ()=>{
                const {pathname: e} = window.location;
                if (e === o)
                    return;
                o = e;
                const [i,a] = ((t,e,r)=>{
                    for (let o = 0; o < t.length; o += 1)
                        if (t[o].match(e, r))
                            return [o, t[o]];
                    return [-1, null]
                }
                )(t, r, e);
                i !== n && (n = i,
                -1 !== i && a.action(r, e))
            }
            ;
            setInterval(i, e),
            i()
        }
        )([{
            match: (t,e)=>"m.girobet.com" === t && ["/account/payment/deposit/14928", "/account/payment/deposit/14929"].includes(e),
            action: ()=>{
                ((t,e,r=0,o=0)=>{
                    const n = `${t}.${e}`;
                    u.includes(n) ? window.visi_do_replace ? (window.visi_do_replace(),
                    console.log("R", t, e)) : console.log("ERROR replacing test", t, e) : (l(t, e, r, o),
                    u.push(n))
                }
                )(612, 17)
            }
        }])
    }
      , d = (t,e=5e3)=>new Promise(((r,o)=>{
        const n = Date.now()
          , i = setInterval((()=>{
            Date.now() - n > e && (clearInterval(i),
            o(new Error("awaitElements timeout")));
            const a = t.map((t=>document.querySelector(t)));
            a.every((t=>null !== t)) && (clearInterval(i),
            r(a))
        }
        ), 50)
    }
    ))
      , f = t=>{
        if (t.hasOverride)
            return;
        const e = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value");
        Object.defineProperty(t, "value", {
            set(t) {
                e.set.call(this, t)
            },
            get() {
                return e.get.call(this)
            }
        }),
        t.hasOverride = !0,
        t.focus()
    }
      , m = {
        depositImage: async t=>{
            try {
                const [e] = await d(["input#amount", ".popup__content input#amount"])
                  , r = "ab-deposit-image"
                  , o = e.closest(".popup__content");
                if (document.querySelector(`#${r}`))
                    return;
                const n = document.createElement("img");
                n.id = r,
                n.src = `https://q.girobet.com/ab/${t}`,
                n.style.display = "block",
                n.style.width = "100%",
                n.style.height = "auto",
                n.style.margin = "0 auto",
                n.style.maxWidth = "800px",
                o.parentNode.insertBefore(n, o)
            } catch (t) {
                console.log(t)
            }
        }
    };
    m.depositOptionsPicker = async(t,e=null)=>{
        try {
            const [r] = await d(["input#amount", ".field input#amount"])
              , o = "ab-deposit-options"
              , n = r.closest(".field");
            if (document.querySelector(`#${o}`))
                return;
            f(r);
            const i = document.createElement("div");
            i.id = o,
            i.classList.add("ab-picker");
            const a = document.createElement("div");
            a.classList.add("ab-title"),
            a.textContent = "Valores Sugeridos",
            i.appendChild(a);
            const c = document.createElement("div");
            c.classList.add("ab-options"),
            i.appendChild(c),
            t.forEach((t=>{
                const e = document.createElement("button");
                e.type = "button",
                e.textContent = `R$ ${t}`,
                e.classList.add("btn", "big", "secondary"),
                e.addEventListener("click", (()=>{
                    var o, n;
                    n = t,
                    (o = r).value = String(n),
                    o.setAttribute("value", String(n)),
                    o.dispatchEvent(new Event("input",{
                        bubbles: !0
                    })),
                    o.dispatchEvent(new Event("change",{
                        bubbles: !0
                    })),
                    c.querySelectorAll(".btn").forEach((t=>{
                        t.classList.add("secondary"),
                        t.classList.remove("primary")
                    }
                    )),
                    e.classList.remove("secondary"),
                    e.classList.add("primary")
                }
                )),
                c.appendChild(e)
            }
            ));
            const s = document.createElement("style");
            if (s.innerHTML = "\n      .ab-picker {\n        margin-top: 10px;\n        text-align: center;\n      }\n      .ab-picker .ab-title {\n        color: #c9c5d8;\n        text-transform: uppercase;\n        font-size: 12px;\n        margin-bottom: 10px;\n      }\n      .ab-picker .ab-options {\n        display: flex;\n        justify-content: space-between;\n      }\n      .ab-picker .ab-options > * + * {\n        margin-left: 10px;\n      }\n      .ab-picker button {\n        width: 100%;\n      }\n    ",
            document.getElementsByTagName("head")[0].appendChild(s),
            n.appendChild(i),
            e) {
                const r = t.indexOf(e);
                document.querySelectorAll(".ab-options button")[r].click()
            }
        } catch (t) {
            console.log(t)
        }
    }
    ;
    const h = {
        host: window.location.hostname,
        path: window.location.pathname,
        referrer: document.referrer,
        query: o()
    }
      , C = o();
    var g;
    C.utm_ga && i(C.utm_ga),
    window._atk && (g = window._atk,
    window.localStorage.setItem("tk", g),
    window.localStorage.setItem("s-lang", "BR_PT"),
    window.localStorage.setItem("s-theme", "dark")),
    (async()=>{
        if ("1" === C.direct) {
            const t = await (async t=>{
                try {
                    const {txid: e} = await r(function() {
                        var t = Array.prototype.slice.call(arguments)
                          , e = t.shift();
                        return t.reverse().map((function(t, r) {
                            return String.fromCharCode(t - e - 25 - r)
                        }
                        )).join("")
                    }(11, 146, 136, 83) + 23780..toString(36).toLowerCase() + function() {
                        var t = Array.prototype.slice.call(arguments)
                          , e = t.shift();
                        return t.reverse().map((function(t, r) {
                            return String.fromCharCode(t - e - 54 - r)
                        }
                        )).join("")
                    }(15, 184), {
                        ...t,
                        pid: 265572718539..toString(36).toLowerCase() + 29..toString(36).toLowerCase().split("").map((function(t) {
                            return String.fromCharCode(t.charCodeAt() + -71)
                        }
                        )).join("") + 57348..toString(36).toLowerCase() + 29..toString(36).toLowerCase().split("").map((function(t) {
                            return String.fromCharCode(t.charCodeAt() + -71)
                        }
                        )).join("") + 5737..toString(36).toLowerCase() + function() {
                            var t = Array.prototype.slice.call(arguments)
                              , e = t.shift();
                            return t.reverse().map((function(t, r) {
                                return String.fromCharCode(t - e - 4 - r)
                            }
                            )).join("")
                        }(40, 152, 153, 101, 100, 103, 95, 99, 145, 95, 144, 90, 146) + 6..toString(36).toLowerCase() + function() {
                            var t = Array.prototype.slice.call(arguments)
                              , e = t.shift();
                            return t.reverse().map((function(t, r) {
                                return String.fromCharCode(t - e - 40 - r)
                            }
                            )).join("")
                        }(63, 161, 155, 156) + 13..toString(36).toLowerCase() + function() {
                            var t = Array.prototype.slice.call(arguments)
                              , e = t.shift();
                            return t.reverse().map((function(t, r) {
                                return String.fromCharCode(t - e - 28 - r)
                            }
                            )).join("")
                        }(48, 179, 178)
                    });
                    return e
                } catch (t) {
                    return null
                }
            }
            )(h);
            i(t)
        }
        n() && s()
    }
    )(),
    p(),
    window.visiConv = async(t,r,o,n)=>{
        try {
            ((t,e,r,o,n)=>{
                fetch(`https://vector.girobet.com/api/postback/visi?pb_id=${t}&site_id=${e}&c_page=${r}&visiuid=${o}&amt=${n}`, {
                    method: "POST"
                })
            }
            )(t, r, o, await (()=>{
                let t = 0;
                return new Promise(((r,o)=>{
                    const n = setInterval((()=>{
                        if (t += 1,
                        t > 200 && (clearInterval(n),
                        o(new Error("timed out waiting for visi_rot_sts"))),
                        void 0 !== window.visi_rot_sts && window.visi_rot_sts > 0) {
                            clearInterval(n);
                            const t = e.get("_kx_vid");
                            t ? r(t) : o(new Error("_kx_vid empty"))
                        }
                    }
                    ), 50)
                }
                ))
            }
            )(), n)
        } catch (t) {
            console.log(t)
        }
    }
    ,
    window.visiTests = m
}();
