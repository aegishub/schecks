!function(e) {
    function t(t) {
        for (var i, o, s = t[0], r = t[1], a = 0, u = []; a < s.length; a++)
            o = s[a],
            n[o] && u.push(n[o][0]),
            n[o] = 0;
        for (i in r)
            Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
        for (c && c(t); u.length; )
            u.shift()()
    }
    var i = {}
      , n = {
        https: 0
    };
    function o(t) {
        if (i[t])
            return i[t].exports;
        var n = i[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(n.exports, n, n.exports, o),
        n.l = !0,
        n.exports
    }
    o.e = function(e) {
        var t = []
          , i = n[e];
        if (0 !== i)
            if (i)
                t.push(i[2]);
            else {
                var s = new Promise(function(t, o) {
                    i = n[e] = [t, o]
                }
                );
                t.push(i[2] = s);
                var r, a = document.createElement("script");
                a.charset = "utf-8",
                a.timeout = 120,
                o.nc && a.setAttribute("nonce", o.nc),
                a.src = function(e) {
                    return o.p + "modules/" + ({}[e] || e) + ".bundle.js"
                }(e),
                r = function(t) {
                    a.onerror = a.onload = null,
                    clearTimeout(c);
                    var i = n[e];
                    if (0 !== i) {
                        if (i) {
                            var o = t && ("load" === t.type ? "missing" : t.type)
                              , s = t && t.target && t.target.src
                              , r = new Error("Loading chunk " + e + " failed.\n(" + o + ": " + s + ")");
                            r.type = o,
                            r.request = s,
                            i[1](r)
                        }
                        n[e] = void 0
                    }
                }
                ;
                var c = setTimeout(function() {
                    r({
                        type: "timeout",
                        target: a
                    })
                }, 12e4);
                a.onerror = a.onload = r,
                document.head.appendChild(a)
            }
        return Promise.all(t)
    }
    ,
    o.m = e,
    o.c = i,
    o.d = function(e, t, i) {
        o.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: i
        })
    }
    ,
    o.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    o.t = function(e, t) {
        if (1 & t && (e = o(e)),
        8 & t)
            return e;
        if (4 & t && "object" == typeof e && e && e.__esModule)
            return e;
        var i = Object.create(null);
        if (o.r(i),
        Object.defineProperty(i, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var n in e)
                o.d(i, n, function(t) {
                    return e[t]
                }
                .bind(null, n));
        return i
    }
    ,
    o.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return o.d(t, "a", t),
        t
    }
    ,
    o.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    o.p = "https://cdn.gravitec.net/",
    o.oe = function(e) {
        throw console.error(e),
        e
    };
    var s = window.gravitecWebpackJsonp = window.gravitecWebpackJsonp || []
      , r = s.push.bind(s);
    s.push = t,
    s = s.slice();
    for (var a = 0; a < s.length; a++)
        t(s[a]);
    var c = r;
    o(o.s = 1)
}({
    "./node_modules/idb/build/esm/index.js": function(e, t, i) {
        "use strict";
        const n = (e,t)=>t.some(t=>e instanceof t);
        let o, s;
        const r = new WeakMap
          , a = new WeakMap
          , c = new WeakMap
          , u = new WeakMap
          , d = new WeakMap;
        let l = {
            get(e, t, i) {
                if (e instanceof IDBTransaction) {
                    if ("done" === t)
                        return a.get(e);
                    if ("objectStoreNames" === t)
                        return e.objectStoreNames || c.get(e);
                    if ("store" === t)
                        return i.objectStoreNames[1] ? void 0 : i.objectStore(i.objectStoreNames[0])
                }
                return g(e[t])
            },
            has: (e,t)=>e instanceof IDBTransaction && ("done" === t || "store" === t) || t in e
        };
        function p(e) {
            return e !== IDBDatabase.prototype.transaction || "objectStoreNames"in IDBTransaction.prototype ? (s || (s = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(e) ? function(...t) {
                return e.apply(b(this), t),
                g(r.get(this))
            }
            : function(...t) {
                return g(e.apply(b(this), t))
            }
            : function(t, ...i) {
                const n = e.call(b(this), t, ...i);
                return c.set(n, t.sort ? t.sort() : [t]),
                g(n)
            }
        }
        function h(e) {
            return "function" == typeof e ? p(e) : (e instanceof IDBTransaction && function(e) {
                if (a.has(e))
                    return;
                const t = new Promise((t,i)=>{
                    const n = ()=>{
                        e.removeEventListener("complete", o),
                        e.removeEventListener("error", s),
                        e.removeEventListener("abort", s)
                    }
                      , o = ()=>{
                        t(),
                        n()
                    }
                      , s = ()=>{
                        i(e.error),
                        n()
                    }
                    ;
                    e.addEventListener("complete", o),
                    e.addEventListener("error", s),
                    e.addEventListener("abort", s)
                }
                );
                a.set(e, t)
            }(e),
            n(e, o || (o = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])) ? new Proxy(e,l) : e)
        }
        function g(e) {
            if (e instanceof IDBRequest)
                return function(e) {
                    const t = new Promise((t,i)=>{
                        const n = ()=>{
                            e.removeEventListener("success", o),
                            e.removeEventListener("error", s)
                        }
                          , o = ()=>{
                            t(g(e.result)),
                            n()
                        }
                          , s = ()=>{
                            i(e.error),
                            n()
                        }
                        ;
                        e.addEventListener("success", o),
                        e.addEventListener("error", s)
                    }
                    );
                    return t.then(t=>{
                        t instanceof IDBCursor && r.set(t, e)
                    }
                    ).catch(()=>{}
                    ),
                    d.set(t, e),
                    t
                }(e);
            if (u.has(e))
                return u.get(e);
            const t = h(e);
            return t !== e && (u.set(e, t),
            d.set(t, e)),
            t
        }
        const b = e=>d.get(e);
        function m(e, t, {blocked: i, upgrade: n, blocking: o}={}) {
            const s = indexedDB.open(e, t)
              , r = g(s);
            return n && s.addEventListener("upgradeneeded", e=>{
                n(g(s.result), e.oldVersion, e.newVersion, g(s.transaction))
            }
            ),
            i && s.addEventListener("blocked", ()=>i()),
            o && r.then(e=>e.addEventListener("versionchange", o)).catch(()=>{}
            ),
            r
        }
        i.d(t, "a", function() {
            return m
        });
        const f = ["get", "getKey", "getAll", "getAllKeys", "count"]
          , w = ["put", "add", "delete", "clear"]
          , v = new Map;
        function y(e, t) {
            if (!(e instanceof IDBDatabase) || t in e || "string" != typeof t)
                return;
            if (v.get(t))
                return v.get(t);
            const i = t.replace(/FromIndex$/, "")
              , n = t !== i
              , o = w.includes(i);
            if (!(i in (n ? IDBIndex : IDBObjectStore).prototype) || !o && !f.includes(i))
                return;
            const s = async function(e, ...t) {
                const s = this.transaction(e, o ? "readwrite" : "readonly");
                let r = s.store;
                n && (r = r.index(t.shift()));
                const a = r[i](...t);
                return o && await s.done,
                a
            };
            return v.set(t, s),
            s
        }
        l = (e=>({
            get: (t,i,n)=>y(t, i) || e.get(t, i, n),
            has: (t,i)=>!!y(t, i) || e.has(t, i)
        }))(l)
    },
    "./src/sdk-template/client/base.client.ts": function(e, t, i) {
        "use strict";
        var n = i("./src/sdk-template/enums.ts")
          , o = i("./src/sdk-template/utils/index.ts")
          , s = i("./src/sdk-template/utils/logger.ts")
          , r = i("./src/sdk-template/client/browser-subscription-managers/browser-subscription-manager.ts")
          , a = function(e, t, i, n) {
            return new (i || (i = Promise))(function(o, s) {
                function r(e) {
                    try {
                        c(n.next(e))
                    } catch (e) {
                        s(e)
                    }
                }
                function a(e) {
                    try {
                        c(n.throw(e))
                    } catch (e) {
                        s(e)
                    }
                }
                function c(e) {
                    var t;
                    e.done ? o(e.value) : (t = e.value,
                    t instanceof i ? t : new i(function(e) {
                        e(t)
                    }
                    )).then(r, a)
                }
                c((n = n.apply(e, t || [])).next())
            }
            )
        };
        i.d(t, "a", function() {
            return u
        });
        var c = function(e, t, i, n) {
            return new (i || (i = Promise))(function(o, s) {
                function r(e) {
                    try {
                        c(n.next(e))
                    } catch (e) {
                        s(e)
                    }
                }
                function a(e) {
                    try {
                        c(n.throw(e))
                    } catch (e) {
                        s(e)
                    }
                }
                function c(e) {
                    var t;
                    e.done ? o(e.value) : (t = e.value,
                    t instanceof i ? t : new i(function(e) {
                        e(t)
                    }
                    )).then(r, a)
                }
                c((n = n.apply(e, t || [])).next())
            }
            )
        };
        class u {
            constructor(e, t, i, n) {
                this._db = t,
                this._api = i,
                this._modules = n,
                this._Notification = window.Notification,
                this._autoRegister = !0,
                this._mode = null,
                this._commandsPermittedWithoutInit = [{
                    module: this,
                    commands: ["init", "getSubscription", "getSubscriptionData", "afterSubscription", "subscriptionResult", "isSubscribed", "testMethod", "subscribe"]
                }],
                this._subscriptionPromise = new Promise(e=>{
                    this._subscriptionResolve = e
                }
                ),
                this.config = e
            }
            _checkSubscriptionOwn(e) {
                return Promise.resolve(!0)
            }
            _unsubscribeForeign() {
                return Promise.resolve(!1)
            }
            init(e={}) {
                return this._initPromise || (this._initPromise = this._init(e),
                this._initPromise.then(()=>{
                    this._onInit()
                }
                ).catch(()=>{}
                )),
                this._initPromise
            }
            _init(e={}) {
                return c(this, void 0, void 0, function*() {
                    const t = e.onInit || (()=>{}
                    );
                    try {
                        yield this._checkSupport()
                    } catch (e) {
                        throw "Notifications API is not supported" === e.message || e.message === "You must use this SDK only for " + this.config.app.siteUrl ? s.a.warn(e.message) : s.a.error(e.message),
                        e.permission && t(!0),
                        e
                    }
                    if (this._setMode(this._detectMode()),
                    this._subscriptionManager.getSubscription().then(e=>{
                        switch (e.permission) {
                        case n.c.granted:
                            if (!e.subscription)
                                break;
                            this._subscriptionResolve(e);
                            break;
                        case n.c.denied:
                            this._subscriptionResolve(e)
                        }
                    }
                    ),
                    !this._subscriptionManager.isNotificationPermitted())
                        throw t(!1, !0),
                        s.a.info("notifications are blocked"),
                        new Error("notifications are blocked");
                    return !1 === e.autoRegister && (this._autoRegister = !1),
                    new Promise(e=>{
                        const i = ()=>{
                            t(),
                            e()
                        }
                        ;
                        "loading" !== document.readyState ? i() : window.addEventListener("DOMContentLoaded", i)
                    }
                    )
                })
            }
            _onInit() {
                return c(this, void 0, void 0, function*() {
                    if (this._autoRegister && this.config.app.subscriptionAllowed) {
                        (yield this.registerUserForPush(void 0, {
                            ignoreBlockedCookie: !1
                        })).permission === n.c.granted && this.config.taggingRules && this.config.taggingRules.map(e=>{
                            document.location.href.includes(e.categoryPattern) && (window.localStorage.setItem(e.categoryPattern, (Number(window.localStorage.getItem(`${e.categoryPattern}`)) + 1).toString()),
                            Number(window.localStorage.getItem(e.categoryPattern)) === e.clicksAmount && (this.push(["addTag", e.tagName]),
                            window.localStorage.removeItem(e.categoryPattern)))
                        }
                        )
                    }
                })
            }
            getSubscriptionData(e) {
                this._getSubscription().then(t=>{
                    e(t)
                }
                ).catch(t=>{
                    e({
                        permission: t,
                        subscription: null
                    })
                }
                )
            }
            getSubscription(e) {
                this.getSubscriptionData(t=>{
                    e(t.subscription || null)
                }
                )
            }
            subscribe(e) {
                console.log(e),
                window.addEventListener("ready-to-ask-permission-event", t=>c(this, void 0, void 0, function*() {
                    if ("CUSTOM" === t.detail.type) {
                        (yield e()) ? window.dispatchEvent(new CustomEvent("grv-permission-event")) : window.dispatchEvent(new CustomEvent("grv-block-event"))
                    }
                }))
            }
            subscriptionResult(e) {
                this._subscriptionPromise.then(t=>{
                    e(t)
                }
                )
            }
            afterSubscription(e) {
                this.subscriptionResult(t=>{
                    t.newSubscription && e(t.subscription || null)
                }
                )
            }
            isSubscribed(e) {
                return this._getSubscription().then(t=>{
                    const i = Boolean(t.subscription);
                    return e(i),
                    i
                }
                )
            }
            isSubMatchIdb(e) {
                return c(this, void 0, void 0, function*() {
                    return s.a.log("Matching subscriptions with idb..."),
                    (yield this._subscriptionManager.checkSubscriptionState(e)).state === r.b.not_changed
                })
            }
            isSubNeedsToBeUpdatedInDb(e) {
                return c(this, void 0, void 0, function*() {
                    return s.a.log("Matching subscriptions with idb..."),
                    (yield this._subscriptionManager.checkSubscriptionState(e)).state === r.b.updated
                })
            }
            isSubExistOnServer(e) {
                return c(this, void 0, void 0, function*() {
                    return yield this._checkSubscriptionOwn(e)
                })
            }
            saveSubscriptionInDb(e) {
                return c(this, void 0, void 0, function*() {
                    try {
                        s.a.debug("saving subscription to db..."),
                        yield this._subscriptionManager.saveSubscription(e),
                        s.a.debug("saved subscription to db")
                    } catch (t) {
                        s.a.warn(`Gravitec: couldn't store subscription to db (${e.regID})`)
                    }
                })
            }
            updateSubscription(e) {
                return c(this, void 0, void 0, function*() {
                    const t = yield this._subscriptionManager.checkSubscriptionState(e);
                    yield this._updateSubscription(t.storedSubscription, e).then(()=>c(this, void 0, void 0, function*() {
                        s.a.debug(`subscription updated: ${e.regID}`),
                        this.saveSubscriptionInDb(e)
                    }))
                })
            }
            insertSubscription(e) {
                return c(this, void 0, void 0, function*() {
                    yield this._sendSubscription(e).then(()=>c(this, void 0, void 0, function*() {
                        s.a.debug(`subscription sent: ${e.regID}`),
                        yield this.saveSubscriptionInDb(e)
                    }))
                })
            }
            isPushSubCreatedWithValidVapid() {
                return c(this, void 0, void 0, function*() {
                    return yield function(e) {
                        return a(this, void 0, void 0, function*() {
                            try {
                                const t = yield navigator.serviceWorker.ready
                                  , i = (yield t.pushManager.getSubscription()).options.applicationServerKey
                                  , n = new Uint8Array(i)
                                  , o = String.fromCharCode.apply(null, n)
                                  , r = window.btoa(o).replace(/\=/g, "").replace(/\+/g, "-").replace(/\//g, "_") === e;
                                return s.a.log("Vapid validation done"),
                                r
                            } catch (e) {
                                return !1
                            }
                        })
                    }(this.config.app.applicationServerKey)
                })
            }
            registerUserForPush(e=(()=>{}
            ), t={
                ignoreBlockedCookie: !0
            }) {
                return c(this, void 0, void 0, function*() {
                    s.a.debug("registering user for web push");
                    let i = yield this._subscriptionManager.getSubscription()
                      , r = i.subscription;
                    if (t && delete t.brandingEnabled,
                    !t || void 0 !== t.ignoreBlockedCookie && !0 !== t.ignoreBlockedCookie || Object(o.o)("gravitecOptInBlocked"),
                    r)
                        if (yield this.isPushSubCreatedWithValidVapid())
                            if (yield this.isSubMatchIdb(r))
                                s.a.log("Subscription not changed");
                            else
                                try {
                                    (yield this.isSubExistOnServer(r)) ? (s.a.log("Subscription exist on server"),
                                    yield this.saveSubscriptionInDb(r)) : (s.a.log("Subscription does not exist on server"),
                                    yield this.upsertSubscription(r))
                                } catch (e) {
                                    s.a.error(e)
                                }
                        else {
                            if (s.a.warn("current subscription is been used with foreign subscription keys. Unsubscribing..."),
                            yield this._unsubscribeForeign()) {
                                s.a.info("unsubscribed from foreign subscription keys"),
                                i.permission = n.c.granted,
                                i.newSubscription = !0;
                                try {
                                    r = yield this._subscriptionManager.subscribe(),
                                    yield this.upsertSubscription(r),
                                    i.subscription = r
                                } catch (e) {
                                    e.permission ? i.permission = e.permission : s.a.error(e)
                                }
                            }
                        }
                    else
                        try {
                            r = yield this._subscriptionManager.subscribe(t),
                            i.permission = n.c.granted,
                            i.subscription = r,
                            i.newSubscription = !0,
                            yield this.upsertSubscription(r)
                        } catch (e) {
                            e.permission ? i.permission = e.permission : s.a.error(e)
                        }
                    return i.subscription = r,
                    this._subscriptionResolve(i),
                    e(i),
                    i
                })
            }
            upsertSubscription(e) {
                return c(this, void 0, void 0, function*() {
                    this._mode !== n.a.safari && ((yield this.isSubNeedsToBeUpdatedInDb(e)) ? yield this.updateSubscription(e) : yield this.insertSubscription(e))
                })
            }
            _getSubscription() {
                return this._subscriptionManager.getSubscription()
            }
            _processSubscriptionIfChanged(e) {
                return c(this, void 0, void 0, function*() {
                    if (this._mode === n.a.safari)
                        return !0;
                    const t = yield this._subscriptionManager.checkSubscriptionState(e);
                    s.a.debug(`subscription state: ${t.state}`);
                    let i = Promise.resolve();
                    switch (t.state) {
                    case r.b.not_changed:
                        return !1;
                    case r.b.updated:
                        i = this._updateSubscription(t.storedSubscription, e).then(()=>{
                            s.a.debug(`subscription updated: ${e.regID}`)
                        }
                        );
                        break;
                    case r.b.new:
                        i = this._sendSubscription(e).then(()=>{
                            s.a.debug(`subscription sent: ${e.regID}`)
                        }
                        )
                    }
                    try {
                        return yield i,
                        !0
                    } catch (e) {
                        return !1
                    }
                })
            }
            _updateSubscription(e, t) {
                return this._api.updateSubscription(e, t).then(i=>{
                    if (i && i.error)
                        throw new Error(`couldn't update subscriber (old subscription - ${e.regID}, new subscription - ${t.regID}) - ${i.message}`);
                    return i
                }
                )
            }
            _sendSubscription(e) {
                return this._api.subscribe(e).then(t=>{
                    if (!t || !t.error)
                        return t;
                    throw new Error(`couldn't store subscriber (${e.regID}) - ${t.message}`)
                }
                )
            }
            _checkSupport() {
                return c(this, void 0, void 0, function*() {
                    if (!(document.baseURI || window.location && window.location.href || "").includes(this.config.app.siteUrl))
                        throw new Error("You must use this SDK only for " + this.config.app.siteUrl);
                    if (window.navigator.userAgent.indexOf("MSIE ") > 0)
                        throw new Error("IE doesn't support Web Push");
                    if (Object(o.b)()) {
                        if (!this.config.app.applePushId)
                            throw new Error("Safari project ID not provided. Unable to use Safari subscription");
                        return !0
                    }
                    if (!this._Notification)
                        throw new Error("Notifications API is not supported");
                    if (!Object(o.l)())
                        throw new Error("Push messaging isn't supported");
                    if (yield Object(o.k)())
                        throw new Error("Web push not supported in incognito mode");
                    return !0
                })
            }
            _detectMode() {
                return Object(o.b)() ? n.a.safari : n.a.chrome
            }
            _setMode(e) {
                this._mode = e,
                this._initModeSpecifics()
            }
            push(e) {
                return c(this, void 0, void 0, function*() {
                    let t, i = e[0];
                    if (i.includes(".") ? [t,i] = i.split(".") : ["addTag", "addTags", "setTags", "removeTag", "removeAllTags", "setAlias", "getTags"].includes(i) && (t = "segmentation"),
                    t && !this._modules[t])
                        return void s.a.error(`Gravitec: No module ${t}`);
                    const n = t ? this._modules[t] : this;
                    if (!(i in n && n[i]instanceof Function))
                        return void s.a.error(`Gravitec: No command ${i} ${t ? ` in ${t} module` : ""}`);
                    if (n !== this || "init" !== i) {
                        const e = this._commandsPermittedWithoutInit.some(e=>e.module === n && e.commands.includes(i));
                        try {
                            yield this.init()
                        } catch (t) {
                            if (!e)
                                return
                        }
                    }
                    if ("segmentation" === t) {
                        const t = yield this._getSubscription();
                        if (!t.subscription)
                            return void s.a.log(`No subscription found to execute '${i}' on segmentation module`);
                        let n = ["removeAllTags", "getTags", "getAlias"].includes(i) ? 1 : 2;
                        e.splice(n, 0, t.subscription.regID)
                    }
                    const o = n[i].apply(n, e.slice(1));
                    o && "object" == typeof o && "catch"in o && o.catch(()=>{}
                    )
                })
            }
            processPushes(e) {
                e.forEach(e=>this.push(e))
            }
        }
    },
    "./src/sdk-template/client/browser-subscription-managers/browser-subscription-manager.ts": function(e, t, i) {
        "use strict";
        i.d(t, "b", function() {
            return n
        }),
        i.d(t, "a", function() {
            return r
        });
        var n, o = i("./src/sdk-template/utils/database.ts"), s = function(e, t, i, n) {
            return new (i || (i = Promise))(function(o, s) {
                function r(e) {
                    try {
                        c(n.next(e))
                    } catch (e) {
                        s(e)
                    }
                }
                function a(e) {
                    try {
                        c(n.throw(e))
                    } catch (e) {
                        s(e)
                    }
                }
                function c(e) {
                    var t;
                    e.done ? o(e.value) : (t = e.value,
                    t instanceof i ? t : new i(function(e) {
                        e(t)
                    }
                    )).then(r, a)
                }
                c((n = n.apply(e, t || [])).next())
            }
            )
        };
        !function(e) {
            e.updated = "updated",
            e.new = "new",
            e.not_changed = "not changed"
        }(n || (n = {}));
        class r {
            constructor(e, t, i) {
                this.config = e,
                this._db = t,
                this._Notification = i
            }
            getSubscription() {
                return s(this, void 0, void 0, function*() {
                    return yield this._getSubscription()
                })
            }
            subscribe(e) {
                return this._subscribe(e)
            }
            saveSubscription(e) {
                return s(this, void 0, void 0, function*() {
                    return yield this._db.put(o.a.ids, {
                        type: "SubscriptionId",
                        value: e
                    }),
                    e
                })
            }
            _retrieveSubscription() {
                return s(this, void 0, void 0, function*() {
                    try {
                        const e = yield this._db.get(o.a.ids, "SubscriptionId");
                        return e && e.value
                    } catch (e) {
                        return null
                    }
                })
            }
            checkSubscriptionState(e) {
                return s(this, void 0, void 0, function*() {
                    const t = yield this._retrieveSubscription();
                    return t ? t.regID === e.regID ? {
                        state: n.not_changed
                    } : {
                        state: n.updated,
                        storedSubscription: t
                    } : {
                        state: n.new
                    }
                })
            }
        }
    },
    "./src/sdk-template/client/browser-subscription-managers/chrome-like-subscription-manager.ts": function(e, t, i) {
        "use strict";
        i.d(t, "a", function() {
            return l
        }),
        i.d(t, "b", function() {
            return p
        });
        var n = i("./src/sdk-template/enums.ts")
          , o = i("./src/sdk-template/exceptions/subscribe.exception.ts")
          , s = i("./src/sdk-template/utils/index.ts")
          , r = i("./src/sdk-template/client/browser-subscription-managers/browser-subscription-manager.ts")
          , a = i("./src/sdk-template/utils/logger.ts")
          , c = i("./src/sdk-template/utils/database.ts")
          , u = function(e, t, i, n) {
            return new (i || (i = Promise))(function(o, s) {
                function r(e) {
                    try {
                        c(n.next(e))
                    } catch (e) {
                        s(e)
                    }
                }
                function a(e) {
                    try {
                        c(n.throw(e))
                    } catch (e) {
                        s(e)
                    }
                }
                function c(e) {
                    var t;
                    e.done ? o(e.value) : (t = e.value,
                    t instanceof i ? t : new i(function(e) {
                        e(t)
                    }
                    )).then(r, a)
                }
                c((n = n.apply(e, t || [])).next())
            }
            )
        };
        function d(e) {
            const t = (e + "=".repeat((4 - e.length % 4) % 4)).replace(/\-/g, "+").replace(/_/g, "/")
              , i = window.atob(t)
              , n = new Uint8Array(i.length);
            for (let e = 0; e < i.length; ++e)
                n[e] = i.charCodeAt(e);
            return n
        }
        class l extends r.a {
            constructor(e, t, i) {
                super(e, t, i),
                this.trackingLink = `https://api.gravitec.media/api/stats/event?app_key=${this.config.app.appKey}`,
                this.nativeSubscription = (()=>new Promise(e=>{
                    const t = new CustomEvent("subscribed",{
                        detail: {
                            subscribed: !0
                        }
                    })
                      , i = new CustomEvent("unsubscribed",{
                        detail: {
                            unsubscribed: !0
                        }
                    });
                    this._Notification.requestPermission(()=>{
                        e(this._Notification.permission),
                        this._Notification.permission === n.c.denied ? (dispatchEvent(i),
                        m()) : this._Notification.permission === n.c.granted ? (dispatchEvent(t),
                        m()) : this._Notification.permission === n.c.default && m()
                    }
                    ),
                    this._Notification.permission === n.c.default && ("complete" == document.readyState ? f(this.config) : document.onreadystatechange = (()=>{
                        "complete" == document.readyState && f(this.config)
                    }
                    ))
                }
                )),
                this._addServiceWorker()
            }
            _addServiceWorker() {
                if ("serviceWorker"in navigator) {
                    const e = window.navigator.serviceWorker.controller;
                    if (e && e.scriptURL.endsWith(`${this.config.app.swPath}?version=${this.config.app.sdkVersion}`))
                        return;
                    return this._db.get(c.a.ids, "sw_version").then(e=>0 !== e.value ? this._tryToRegisterWorkerWithVersion() : this._tryToRegisterWorkerWithoutVersion()).catch(e=>this._tryToRegisterWorkerWithVersion())
                }
                throw new Error("Service workers are not supported")
            }
            _tryToRegisterWorkerWithVersion() {
                const e = h(this.config.app.appKey);
                return e && (this.config.app.swPath = e),
                window.navigator.serviceWorker.register(`${this.config.app.swPath}?version=${this.config.app.sdkVersion}&appKey=${this.config.app.appKey}&track_inactive=${this.config.app.trackInactive}`, {
                    scope: this.config.app.swScope
                }).then(()=>{
                    this._db.put(c.a.ids, {
                        type: "sw_version",
                        value: this.config.app.sdkVersion
                    }),
                    a.a.log("service worker registered")
                }
                ).catch(e=>{
                    this._tryToRegisterWorkerWithoutVersion(),
                    a.a.error(e)
                }
                )
            }
            _tryToRegisterWorkerWithoutVersion() {
                return window.navigator.serviceWorker.register(`${this.config.app.swPath}`, {
                    scope: this.config.app.swScope
                }).then(e=>{
                    this._db.put(c.a.ids, {
                        type: "sw_version",
                        value: 0
                    }),
                    a.a.log("service worker registered")
                }
                ).catch(e=>{
                    a.a.error(e)
                }
                )
            }
            getNativeSubscription() {
                return u(this, void 0, void 0, function*() {
                    const e = yield window.navigator.serviceWorker.ready;
                    try {
                        return yield e.pushManager.getSubscription()
                    } catch (e) {
                        return a.a.error(`Error during getSubscription(): ${e}`),
                        null
                    }
                })
            }
            _getSubscription() {
                return u(this, void 0, void 0, function*() {
                    const e = yield this.getNativeSubscription();
                    if (!e)
                        return {
                            permission: this._Notification.permission
                        };
                    try {
                        return {
                            permission: n.c.granted,
                            subscription: yield Object(s.n)(e)
                        }
                    } catch (e) {
                        return a.a.error(`Couldn't parse subscription: ${e}`),
                        {
                            permission: this._Notification.permission
                        }
                    }
                })
            }
            _subscribe(e) {
                return u(this, void 0, void 0, function*() {
                    const t = yield window.navigator.serviceWorker.ready
                      , i = yield this._localSubscribe(e);
                    if (i !== n.c.granted)
                        return Promise.reject(new o.a(i));
                    const r = yield t.pushManager.subscribe({
                        userVisibleOnly: !0,
                        applicationServerKey: d(this.config.app.applicationServerKey)
                    });
                    try {
                        return yield Object(s.n)(r)
                    } catch (e) {}
                })
            }
            _localSubscribe(e) {
                return u(this, void 0, void 0, function*() {
                    if (this.config.app.subDomain && -1 === navigator.userAgent.indexOf("Firefox") || -1 !== navigator.userAgent.indexOf(" UCBrowser/") || "default" !== Notification.permission)
                        return this.nativeSubscription();
                    {
                        const {default: t} = yield Promise.all([i.e(0), i.e(1)]).then(i.bind(null, "./src/sdk-template/client/widgets/optIn/optIn.ts"))
                          , o = new t;
                        return p(this.config) && Object(s.o)("gravitecOptInBlocked"),
                        (yield o.requestPermission(this.config, !1, e)) === n.c.deniedFromCustom ? Promise.resolve(n.c.deniedFromCustom) : this.nativeSubscription()
                    }
                })
            }
            isNotificationPermitted() {
                return this._Notification.permission !== n.c.denied
            }
            getNotificationPermission() {
                return this._Notification.permission
            }
            isNotificationBlockedFromCustomWidget() {
                return !!Object(s.a)("gravitecOptInBlocked")
            }
        }
        const p = e=>{
            const t = Object(s.i)() ? e.opt.mobileProps : e.opt.desktopProps;
            if (t.reengagement) {
                let e = Number(window.localStorage.getItem("optInBlockedTime"))
                  , i = b(g, e)
                  , n = Number(window.localStorage.getItem("views-counter"))
                  , o = t.reengagement.timeoutHours
                  , s = t.reengagement.viewDepth;
                return !!(o && i >= o || s && n >= s)
            }
            return !1
        }
          , h = e=>{
            const t = document.querySelector(`script[src*="${e}/client.js"]`);
            if (!t)
                return "";
            {
                const e = t.getAttribute("src");
                try {
                    const t = new URL(e);
                    return "wp" === t.searchParams.get("service") ? t.searchParams.get("wpath") : ""
                } catch (e) {
                    return ""
                }
            }
        }
        ;
        function g(e, t) {
            return (t - e) / 1e3 / 60 / 60
        }
        const b = (e,t)=>{
            if (!t)
                return null;
            return e(t, (new Date).getTime())
        }
          , m = ()=>{
            document.querySelector(".grv-unblock-label-host") && document.body.removeChild(document.querySelector(".grv-unblock-label-host"))
        }
          , f = e=>{
            if (!Object(s.i)()) {
                const t = document.createElement("div")
                  , i = document.createElement("div")
                  , n = document.createElement("span");
                n.innerText = "✕";
                const o = document.createElement("div");
                o.style.display = "flex";
                const s = document.createElement("div")
                  , r = document.createElement("div")
                  , a = document.createElement("h1");
                a.innerText = w().unblockWidgetTitle,
                a.className = "unblock-text-main";
                const c = document.createElement("p");
                c.innerText = w().unblockWidgetBody,
                c.className = "unblock-text-secondary";
                const u = document.createElement("img");
                u.src = u.src = `${e.app.cdnUrl}/img/unblockGuide.svg`;
                const d = document.createElement("style");
                d.innerHTML = "\n  .unblock-root {\n    position: fixed;\n    z-index: 2147483647;\n    background-color: #fff;\n    top: 0;\n    padding: 10px 14px 12px;\n    background: rgba(250,250,250,.94);\n    border-radius: 0 0 4px 4px;\n    border: none;\n    -webkit-box-shadow: none;\n    box-shadow: none;\n    left: 115px;\n    width: 286px;\n    max-width: 286px;\n    min-height: 94px;\n    color: #444;\n    text-align: left;\n    display: flex;\n    flex-direction: column;\n    font-weight: 400;\n    box-sizing: border-box;\n  }\n\n  span {\n    margin-top: -9px;\n    margin-right: -6px;\n    cursor: pointer;\n    height: fit-content;\n    align-self: flex-end;\n    font-size: 18px;\n  }\n\n  .unblock-text {\n    width: 190px;\n    font-family: Arial,Helvetica,'Helvetica Neue','Dejavu Sans',sans-serif;\n  }\n\n  .unblock-text-main {\n    font-size: 14px;\n    line-height: 16px;\n    color: #000!important;\n    margin-block-end: 0;\n    margin-block-start: 0;\n  }\n\n  .unblock-text-secondary {\n    font-size: 12px!important;\n    color: #484848!important;\n    line-height: 16px!important;\n    font-weight: 400;\n    margin-bottom: 0;\n  }\n  ",
                s.appendChild(a),
                s.appendChild(c),
                s.className = "unblock-text",
                r.appendChild(u),
                t.appendChild(n),
                o.appendChild(s),
                o.appendChild(r),
                t.appendChild(o),
                t.className = "unblock-root",
                i.className = "grv-unblock-label-host",
                document.body.appendChild(i);
                const l = i.attachShadow({
                    mode: "open"
                });
                l.appendChild(d),
                l.appendChild(t),
                n.addEventListener("click", m)
            }
        }
          , w = ()=>{
            const e = i("./src/sdk-template/client/widgets/translations.json");
            return Object.assign({}, e[(()=>{
                let e = Object(s.f)();
                switch (e) {
                case n.b.russian:
                case n.b.ukrainian:
                case n.b.polish:
                case n.b.portuguese:
                case n.b.spanish:
                    break;
                default:
                    e = n.b.english
                }
                return e
            }
            )()])
        }
    },
    "./src/sdk-template/client/browser-subscription-managers/safari-subscription-manager.ts": function(e, t, i) {
        "use strict";
        var n = i("./src/sdk-template/utils/index.ts")
          , o = i("./src/sdk-template/client/browser-subscription-managers/browser-subscription-manager.ts")
          , s = i("./src/sdk-template/enums.ts")
          , r = i("./src/sdk-template/exceptions/subscribe.exception.ts");
        var a = {
            en: {
                desktopWidgetText: {
                    wantsTo: "wants to",
                    showNotifications: "Show notifications",
                    allow: "Allow",
                    block: "Block"
                },
                mobileWidgetText: {
                    wantsTo: "wants to",
                    showNotifications: "send you notifications",
                    allow: "Allow",
                    block: "Block"
                },
                slidedownWidgetText: {
                    promptTextHeader: "This website would like to send you push notifications.",
                    promptTextBody: "Notifications can be turned off anytime from browser settings.",
                    allow: "Allow",
                    block: "Don't Allow"
                },
                slidedownPromptForHttps: {
                    promptTextHeader: "This website would like to send you push notifications.",
                    promptTextBody: "Notifications can be turned off anytime from browser settings.",
                    allow: "Allow",
                    block: "Don't Allow"
                }
            },
            ru: {
                desktopWidgetText: {
                    wantsTo: "запрашивает разрешение на:",
                    showNotifications: "Показывать оповещения",
                    allow: "Разрешить",
                    block: "Блокировать"
                },
                mobileWidgetText: {
                    wantsTo: "запрашивает разрешение",
                    showNotifications: "показывать оповещения",
                    allow: "Разрешить",
                    block: "Блокировать"
                },
                slidedownWidgetText: {
                    promptTextHeader: "Этот веб-сайт запрашивает разрешение на отправку push-уведомлений в Центре уведомлений.",
                    promptTextBody: 'Уведомлениями веб-сайтов можно управлять в разделе "Веб-сайты" настроек Safari.',
                    allow: "Разрешить",
                    block: "Не разрешать"
                },
                slidedownPromptForHttps: {
                    promptTextHeader: "This website would like to send you push notifications.",
                    promptTextBody: "Notifications can be turned off anytime from browser settings.",
                    allow: "Allow",
                    block: "Don't Allow"
                }
            },
            uk: {
                desktopWidgetText: {
                    wantsTo: "хоче",
                    showNotifications: "показувати сповіщення",
                    allow: "Дозволити",
                    block: "Блокувати"
                },
                mobileWidgetText: {
                    wantsTo: "хоче",
                    showNotifications: "показувати сповіщення",
                    allow: "Дозволити",
                    block: "Блокувати"
                },
                slidedownWidgetText: {
                    promptTextHeader: "Цей веб-сайт хоче надсилати вам push-сповіщення у Центрі сповіщень.",
                    promptTextBody: "Сповіщення для веб-сайтів можна настроїти в параметрах веб-сайтів Safari.",
                    allow: "Дозволити",
                    block: "Заборонити"
                },
                slidedownPromptForHttps: {
                    promptTextHeader: "This website would like to send you push notifications.",
                    promptTextBody: "Notifications can be turned off anytime from browser settings.",
                    allow: "Allow",
                    block: "Don't Allow"
                }
            },
            pl: {
                desktopWidgetText: {
                    wantsTo: "prosi o pozwolenie na",
                    showNotifications: "Pokazywanie powiadomień",
                    allow: "Zezwalaj",
                    block: "Blokuj"
                },
                mobileWidgetText: {
                    wantsTo: "prosi o pozwolenie na",
                    showNotifications: "Pokazywanie powiadomień",
                    allow: "Zezwalaj",
                    block: "Blokuj"
                },
                slidedownWidgetText: {
                    promptTextHeader: "This website would like to send you push notifications.",
                    promptTextBody: "Notifications can be turned off anytime from browser settings.",
                    allow: "Allow",
                    block: "Don't Allow"
                },
                slidedownPromptForHttps: {
                    promptTextHeader: "This website would like to send you push notifications.",
                    promptTextBody: "Notifications can be turned off anytime from browser settings.",
                    allow: "Allow",
                    block: "Don't Allow"
                }
            },
            es: {
                desktopWidgetText: {
                    wantsTo: "quiere",
                    showNotifications: "Mostrar notificaciones",
                    allow: "Permitir",
                    block: "Bloquear"
                },
                mobileWidgetText: {
                    wantsTo: "quiere",
                    showNotifications: "enviar notificaciones",
                    allow: "Permitir",
                    block: "Bloquear"
                },
                slidedownWidgetText: {
                    promptTextHeader: "Este sitio web desea enviarle notificaciones push",
                    promptTextBody: "Las notificaciones se pueden desactivar en cualquier momento desde la configuración del navegador.",
                    allow: "Permitir",
                    block: "Ahora no"
                },
                slidedownPromptForHttps: {
                    promptTextHeader: "Este sitio web desea enviarle notificaciones push",
                    promptTextBody: "Las notificaciones se pueden desactivar en cualquier momento desde la configuración del navegador.",
                    allow: "¡Si, quiero!",
                    block: "No, gracias"
                }
            }
        };
        i.d(t, "a", function() {
            return u
        });
        var c = function(e, t, i, n) {
            return new (i || (i = Promise))(function(o, s) {
                function r(e) {
                    try {
                        c(n.next(e))
                    } catch (e) {
                        s(e)
                    }
                }
                function a(e) {
                    try {
                        c(n.throw(e))
                    } catch (e) {
                        s(e)
                    }
                }
                function c(e) {
                    var t;
                    e.done ? o(e.value) : (t = e.value,
                    t instanceof i ? t : new i(function(e) {
                        e(t)
                    }
                    )).then(r, a)
                }
                c((n = n.apply(e, t || [])).next())
            }
            )
        };
        class u extends o.a {
            constructor(e, t, i) {
                super(e, t, i),
                this._cookieKeys = {
                    shown: "gravitecPromptShowed",
                    blocked: "gravitecBlocked",
                    blockedByWidget: "dontShowPrompt"
                }
            }
            _getSubscription() {
                return c(this, void 0, void 0, function*() {
                    const e = window.safari.pushNotification.permission(this.config.app.applePushId);
                    return e.permission === s.c.granted ? (Object(n.a)(this._cookieKeys.shown) || Object(n.p)(this._cookieKeys.shown, !0, 60),
                    {
                        permission: s.c.granted,
                        subscription: {
                            regID: e.deviceToken,
                            browser: "SAFARI"
                        }
                    }) : e.permission === s.c.default && Object(n.a)(this._cookieKeys.shown) ? (Object(n.o)(this._cookieKeys.shown),
                    {
                        permission: e.permission
                    }) : {
                        permission: e.permission
                    }
                })
            }
            _subscribeAfterUserGesture() {
                const e = window.safari.pushNotification.permission(this.config.app.applePushId);
                return this._checkRemotePermission(e)
            }
            _subscribe() {
                return c(this, void 0, void 0, function*() {
                    if (!Object(n.a)(this._cookieKeys.shown) && this.isNotificationPermitted()) {
                        const {default: e} = yield Promise.all([i.e(0), i.e(1)]).then(i.bind(null, "./src/sdk-template/client/widgets/optIn/optIn.ts"));
                        return (new e).requestPermission(this.config).then(e=>e !== s.c.granted ? (e === s.c.denied && (Object(n.p)(this._cookieKeys.blockedByWidget, !0, 7),
                        console.log("Blocked")),
                        Promise.reject(new r.a(e))) : this._subscribeAfterUserGesture())
                    }
                })
            }
            _checkRemotePermission(e) {
                return c(this, void 0, void 0, function*() {
                    if (e.permission === s.c.denied)
                        throw Object(n.p)(this._cookieKeys.blockedByWidget, !0, 30),
                        new r.a(e.permission);
                    if (e.permission === s.c.granted) {
                        Object(n.p)(this._cookieKeys.shown, !0, 60);
                        let t = Object(n.f)()
                          , i = `${this.config.app.safariUrl}/v2/devices/${e.deviceToken}/registrations/${this.config.app.applePushId}?lang=${t}`;
                        return fetch(i, {
                            method: "PATCH"
                        }),
                        {
                            regID: e.deviceToken,
                            browser: "SAFARI"
                        }
                    }
                    return yield new Promise((e,t)=>{
                        window.safari.pushNotification.requestPermission(this.config.app.safariUrl, this.config.app.applePushId, {}, i=>{
                            i.permission === s.c.default ? t(new Error("Recursive safari subscription...")) : this._checkRemotePermission(i).then(e, t)
                        }
                        )
                    }
                    )
                })
            }
            isNotificationPermitted() {
                const e = window.safari.pushNotification.permission(this.config.app.applePushId);
                return !Object(n.a)(this._cookieKeys.blocked) && !Object(n.a)(this._cookieKeys.blockedByWidget) && e.permission !== s.c.denied
            }
            _getWidgetText(e) {
                let t = Object(n.d)();
                switch (t) {
                case s.b.russian:
                case s.b.ukrainian:
                case s.b.polish:
                case s.b.spanish:
                    break;
                default:
                    t = s.b.english
                }
                const i = a[t][e];
                return Object.assign(Object.assign({}, i), {
                    url: "https://gravitec.net/rf/"
                })
            }
        }
    },
    "./src/sdk-template/client/http.client.ts": function(e, t, i) {
        "use strict";
        var n = i("./src/sdk-template/enums.ts")
          , o = i("./src/sdk-template/client/base.client.ts")
          , s = i("./src/sdk-template/utils/index.ts")
          , r = i("./src/sdk-template/utils/database.ts")
          , a = i("./src/sdk-template/exceptions/subscribe.exception.ts")
          , c = i("./src/sdk-template/client/browser-subscription-managers/browser-subscription-manager.ts")
          , u = i("./src/sdk-template/client/browser-subscription-managers/chrome-like-subscription-manager.ts")
          , d = function(e, t, i, n) {
            return new (i || (i = Promise))(function(o, s) {
                function r(e) {
                    try {
                        c(n.next(e))
                    } catch (e) {
                        s(e)
                    }
                }
                function a(e) {
                    try {
                        c(n.throw(e))
                    } catch (e) {
                        s(e)
                    }
                }
                function c(e) {
                    var t;
                    e.done ? o(e.value) : (t = e.value,
                    t instanceof i ? t : new i(function(e) {
                        e(t)
                    }
                    )).then(r, a)
                }
                c((n = n.apply(e, t || [])).next())
            }
            )
        };
        class l extends c.a {
            constructor(e, t, i) {
                super(e, t, i),
                this._timeToCheckSubscription = 5184e3,
                this._cookieKeys = {
                    shown: "gravitecPromptShowed",
                    blocked: "gravitecBlocked",
                    blockedByWidget: "dontShowPrompt"
                },
                this._poweredBy = "Powered by Gravitec.net",
                this._subdomainFull = e.app.subDomain,
                this._subdomainUrl = new URL(this._subdomainFull),
                this._websiteDomain = window.location.hostname
            }
            _getSubscription() {
                return d(this, void 0, void 0, function*() {
                    if (!this.isNotificationPermitted())
                        return Promise.resolve({
                            permission: n.c.denied,
                            subscription: null
                        });
                    let e;
                    const t = yield this._db.get(r.a.ids, "SubscriptionId");
                    if (t && (e = t.value),
                    e) {
                        const t = Object(s.e)()
                          , i = yield this._db.get(r.a.httpCreated, "subscribedTime");
                        if (i && t - i.value < this._timeToCheckSubscription)
                            return {
                                subscription: e,
                                permission: n.c.granted
                            };
                        const o = [this._db.remove(r.a.httpCreated, "subscribedTime"), this._db.remove(r.a.ids, "SubscriptionId")];
                        yield Promise.all(o),
                        Object(s.o)(this._cookieKeys.shown)
                    }
                    return Object(s.o)(this._cookieKeys.shown),
                    {
                        subscription: null,
                        permission: n.c.default
                    }
                })
            }
            _subscribe() {
                return d(this, void 0, void 0, function*() {
                    if (!this.isNotificationPermitted())
                        return Promise.reject(new a.a(n.c.denied));
                    if (!Object(s.a)(this._cookieKeys.shown)) {
                        if (this._subdomainFull) {
                            const {default: e} = yield Promise.all([i.e(0), i.e(1)]).then(i.bind(null, "./src/sdk-template/client/widgets/optIn/optIn.ts"));
                            let t = new e;
                            return Object(u.b)(this.config) && Object(s.o)("gravitecOptInBlocked"),
                            t.requestPermission(this.config, !1).then(e=>e !== n.c.granted ? (e === n.c.denied && Object(s.p)(this._cookieKeys.blockedByWidget, !0, 7),
                            Promise.reject(new a.a(e))) : this._subscribeOnHttpsNewWindow())
                        }
                        throw "No subdomain found to subscribe"
                    }
                })
            }
            isNotificationPermitted() {
                return !Object(s.a)(this._cookieKeys.blocked) && !Object(s.a)(this._cookieKeys.blockedByWidget)
            }
            _subscribeOnHttpsNewWindow() {
                return d(this, void 0, void 0, function*() {
                    const e = null != window.screenLeft ? window.screenLeft : screen.left
                      , t = null != window.screenTop ? window.screenTop : screen.top
                      , i = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : window.screen.width
                      , o = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : window.screen.height;
                    Object(s.c)();
                    let r, c, u, d;
                    r = 640,
                    c = 661,
                    u = i / 2 - 320 + e,
                    d = o / 2 - 330.5 + t;
                    const l = window.open(this._subdomainFull, "_blank", `scrollbars=yes, width=640, height=661, top=${d}, left=${u}`);
                    if (l) {
                        l.focus();
                        const e = this._listenSubscription();
                        l.onbeforeunload = (()=>setTimeout(()=>e.cancel()));
                        const t = yield e.promise;
                        if (t.permission === n.c.granted && t.subscription)
                            return Object(s.p)(this._cookieKeys.shown, !0, 60),
                            t.subscription;
                        throw t.permission === n.c.denied && Object(s.p)(this._cookieKeys.blocked, !0, 30),
                        new a.a(t.permission)
                    }
                    return Promise.reject("Couldn't open https window")
                })
            }
            saveSubscription(e) {
                const t = Object.create(null, {
                    saveSubscription: {
                        get: ()=>super.saveSubscription
                    }
                });
                return d(this, void 0, void 0, function*() {
                    return yield Promise.all([t.saveSubscription.call(this, e), this._db.put(r.a.httpCreated, {
                        type: "subscribedTime",
                        value: Object(s.e)()
                    })]),
                    e
                })
            }
            _listenSubscription() {
                let e, t;
                t = new Promise(t=>e = t);
                const i = t=>{
                    t.origin === this._subdomainUrl.origin && (o(),
                    e(t.data))
                }
                  , o = ()=>{
                    window.removeEventListener("message", i, !1)
                }
                ;
                return window.addEventListener("message", i, !1),
                {
                    promise: t,
                    cancel: ()=>{
                        o(),
                        e({
                            permission: n.c.default
                        })
                    }
                }
            }
        }
        var p = i("./src/sdk-template/client/browser-subscription-managers/safari-subscription-manager.ts")
          , h = (i("./src/sdk-template/client/utils/database.ts"),
        i("./src/sdk-template/utils/logger.ts"));
        i.d(t, "a", function() {
            return b
        });
        var g = function(e, t, i, n) {
            return new (i || (i = Promise))(function(o, s) {
                function r(e) {
                    try {
                        c(n.next(e))
                    } catch (e) {
                        s(e)
                    }
                }
                function a(e) {
                    try {
                        c(n.throw(e))
                    } catch (e) {
                        s(e)
                    }
                }
                function c(e) {
                    var t;
                    e.done ? o(e.value) : (t = e.value,
                    t instanceof i ? t : new i(function(e) {
                        e(t)
                    }
                    )).then(r, a)
                }
                c((n = n.apply(e, t || [])).next())
            }
            )
        };
        class b extends o.a {
            constructor(e, t, i, n) {
                super(e, t, i, n),
                this._subdomainFull = new URL(e.app.subDomain),
                this._poweredBy = e.app.poweredBy,
                console.log("check subdomain:", e.app.subDomain, new URL(e.app.subDomain))
            }
            _init(e) {
                return super._init(e)
            }
            _initModeSpecifics() {
                switch (this._mode) {
                case n.a.safari:
                    this._subscriptionManager = new p.a(this.config,this._db,this._Notification);
                    break;
                case n.a.chrome:
                    this._subscriptionManager = new l(this.config,this._db,this._Notification)
                }
            }
            isPushSubCreatedWithValidVapid() {
                return g(this, void 0, void 0, function*() {
                    return !0
                })
            }
            _processSubscriptionIfChanged(e) {
                return this._mode === n.a.safari ? super._processSubscriptionIfChanged(e) : (h.a.info(`subscription: ${e.regID}`),
                Promise.resolve(!0))
            }
            _updateCharset(e) {
                e.toUpperCase() !== document.characterSet.toUpperCase() && this._api.updateCharset({
                    appKey: this.config.app.appKey,
                    charset: document.characterSet
                })
            }
        }
    },
    "./src/sdk-template/client/segmentation/segmentation.ts": function(e, t, i) {
        "use strict";
        i.d(t, "a", function() {
            return s
        });
        var n = i("./src/sdk-template/utils/logger.ts")
          , o = i("./src/sdk-template/utils/index.ts");
        class s {
            constructor(e) {
                this._api = e,
                this._endpoints = {
                    tags: "/api/sites/followers/tags",
                    aliases: "/api/sites/followers/aliases"
                }
            }
            addTag(e, t, i=o.m, s=o.m) {
                return t ? "string" != typeof e ? s({
                    message: n.a.error("tag names argument is not a string")
                }) : e && e.trim() ? void this._api.send(`${this._endpoints.tags}?regID=${t}`, "POST", [e]).then(()=>{
                    n.a.debug(`tag (${e}) has been added`),
                    i()
                }
                , t=>{
                    n.a.debug(`failed to add tag (${e})`),
                    s(t)
                }
                ) : s({
                    message: n.a.error("tag name is empty")
                }) : s({
                    message: n.a.error("no subscriber token to add tag")
                })
            }
            addTags(e, t, i=o.m, s=o.m) {
                return t ? e instanceof Array ? (e = e.map(e=>e.trim()).filter(Boolean)).length ? void this._api.send(`${this._endpoints.tags}?regID=${t}`, "PATCH", e).then(()=>{
                    n.a.debug(`tags (${e.join(", ")}) have been added`),
                    i()
                }
                , t=>{
                    n.a.debug(`failed to add tags (${e.join(", ")})`),
                    s(t)
                }
                ) : s({
                    message: n.a.error("no tags to add")
                }) : s({
                    message: n.a.error("tag names argument is not an array type")
                }) : s({
                    message: n.a.error("no subscriber token to add tags")
                })
            }
            setTags(e, t, i=o.m, s=o.m) {
                return t ? e instanceof Array ? (e = e.map(e=>e.trim()).filter(Boolean)).length ? void this._api.send(`${this._endpoints.tags}?regID=${t}`, "PUT", e).then(()=>{
                    n.a.debug(`tags (${e.join(", ")}) have been set`),
                    i()
                }
                , t=>{
                    n.a.debug(`failed to set tags (${e.join(", ")})`),
                    s(t)
                }
                ) : s({
                    message: n.a.error("no tags to set")
                }) : s({
                    message: n.a.error("tag names argument is not an array type")
                }) : s({
                    message: n.a.error("no subscriber token to set tags")
                })
            }
            removeTag(e, t, i=o.m, s=o.m) {
                return t ? "string" != typeof e ? s({
                    message: n.a.error("tag names argument is not a string")
                }) : e && e.trim() ? void this.removeTags([e], t, i, s) : s({
                    message: n.a.error("tag name is empty. Cannot remove")
                }) : s({
                    message: n.a.error("no subscriber token to remove tag")
                })
            }
            removeTags(e, t, i=o.m, s=o.m) {
                return t ? e instanceof Array ? (e = e.map(e=>e.trim()).filter(Boolean)).length ? void this._api.send(`${this._endpoints.tags}?regID=${t}`, "DELETE", e).then(()=>{
                    n.a.debug(`tags (${e.join(", ")}) have been removed`),
                    i()
                }
                , t=>{
                    n.a.debug(`failed to remove tags (${e.join(", ")})`),
                    s(t)
                }
                ) : s({
                    message: n.a.error("no tags to remove")
                }) : s({
                    message: n.a.error("tag names argument is not an array type")
                }) : s({
                    message: n.a.error("no subscriber token to set tags")
                })
            }
            removeAllTags(e, t=o.m, i=o.m) {
                if (!e)
                    return i({
                        message: n.a.error("no subscriber token to remove all tags")
                    });
                this._api.send(`${this._endpoints.tags}?regID=${e}`, "DELETE", []).then(()=>{
                    n.a.debug("tags have been removed"),
                    t()
                }
                , e=>{
                    n.a.debug("failed to remove tags"),
                    i(e)
                }
                )
            }
            setAlias(e, t, i=o.m, s=o.m) {
                return t ? "string" != typeof e ? s({
                    message: n.a.error("alias is not a string")
                }) : e && e.trim() ? e.length > 255 ? s({
                    message: n.a.error("alias length is over 255 sumbols")
                }) : void this._api.send(`${this._endpoints.aliases}?regID=${t}`, "POST", e).then(()=>{
                    n.a.debug(`alias (${e}) has been added`),
                    i()
                }
                , t=>{
                    n.a.debug(`failed to add alias (${e})`),
                    s(t)
                }
                ) : s({
                    message: n.a.error("alias is empty")
                }) : s({
                    message: n.a.error("no subscriber token to remove alias")
                })
            }
            getTags(e, t=o.m, i=o.m) {
                this._api.send(`${this._endpoints.tags}?regID=${e}`, "GET").then(e=>{
                    const i = e.map(e=>e.name);
                    n.a.debug(`tags have been retrieved: ${i.join(", ")}`),
                    t(i)
                }
                ).catch(e=>{
                    n.a.debug("failed to get tags"),
                    i(e)
                }
                )
            }
            getAlias(e, t=o.m, i=o.m) {
                i({
                    message: n.a.error("getAlias segmentation method is currently not available")
                })
            }
        }
    },
    "./src/sdk-template/client/utils/api.ts": function(e, t, i) {
        "use strict";
        var n = i("./src/sdk-template/utils/logger.ts")
          , o = function(e, t, i, n) {
            return new (i || (i = Promise))(function(o, s) {
                function r(e) {
                    try {
                        c(n.next(e))
                    } catch (e) {
                        s(e)
                    }
                }
                function a(e) {
                    try {
                        c(n.throw(e))
                    } catch (e) {
                        s(e)
                    }
                }
                function c(e) {
                    var t;
                    e.done ? o(e.value) : (t = e.value,
                    t instanceof i ? t : new i(function(e) {
                        e(t)
                    }
                    )).then(r, a)
                }
                c((n = n.apply(e, t || [])).next())
            }
            )
        };
        class s {
            constructor(e, t) {
                this.version = "1.2.1",
                this._apiUrl = e,
                this._appKey = t
            }
            send(e, t, i=null, s=new Headers) {
                let r = e.split("?")[0]
                  , a = e.split("?")[1] || "";
                a && (a += "&");
                let c = `${this._apiUrl}${r}?${a}appKey=${this._appKey}&version=${this.version}`;
                if (s.append("Content-Type", "application/json"),
                null !== i && (i = JSON.stringify(i)),
                "fetch"in window) {
                    const e = {
                        method: t,
                        headers: s
                    };
                    return i && (e.body = i),
                    fetch(c.toString(), e).then(e=>o(this, void 0, void 0, function*() {
                        if (e.status > 304) {
                            const t = yield e.text();
                            return Promise.reject(new Error(`fetch error ${t}`))
                        }
                        return e.json().then(e=>e && "object" == typeof e && "error"in e ? Promise.reject(e) : e).catch(()=>{}
                        )
                    })).catch(e=>{
                        throw console.log(e),
                        e
                    }
                    )
                }
                return new Promise((e,o)=>{
                    const r = new XMLHttpRequest;
                    r.open(t, c.toString(), !0),
                    s.forEach((e,t)=>{
                        r.setRequestHeader(t, e)
                    }
                    ),
                    r.onreadystatechange = function() {
                        if (4 == r.readyState) {
                            if (r.status > 304) {
                                let e;
                                n.a.log(`Looks like there was a problem. Status Code: ${r.status}`);
                                try {
                                    e = JSON.parse(r.responseText)
                                } catch (t) {
                                    n.a.debug(JSON.stringify(t)),
                                    e = {
                                        message: r.responseText
                                    }
                                }
                                return o(e)
                            }
                            return n.a.debug("data successfully sent"),
                            e(JSON.parse(r.responseText))
                        }
                    }
                    ,
                    r.onerror = o,
                    r.send(i || null)
                }
                )
            }
        }
        i.d(t, "a", function() {
            return r
        });
        class r extends s {
            constructor(e, t) {
                super(e, t)
            }
            checkOwnSubscription(e) {
                return this.send(`/api/sites/followers/exist?regID=${e.regID}`, "get")
            }
            subscribe(e) {
                return this.send("/api/sites/followers", "post", e)
            }
            updateSubscription(e, t) {
                return this.send("/api/sites/followers", "put", {
                    oldSubscription: e,
                    newSubscription: t
                })
            }
            updateCharset(e) {
                return this.send("/api/sites/charset", "post", e)
            }
            deleteSubscription(e) {
                return this.send("/api/sites/followers", "delete", e)
            }
        }
    },
    "./src/sdk-template/client/utils/database.ts": function(e, t, i) {
        "use strict";
        i.d(t, "a", function() {
            return o
        });
        var n = i("./src/sdk-template/utils/database.ts");
        n.a.httpCreated = "HttpCreated";
        class o extends n.b {
            constructor() {
                super(...arguments),
                this.dbName = "gravitec_client_db"
            }
            onupgradeneeded(e) {
                const t = super.onupgradeneeded(e);
                return t.createObjectStore(n.a.httpCreated, {
                    keyPath: "type"
                }),
                t
            }
        }
    },
    "./src/sdk-template/client/widgets/translations.json": function(e) {
        e.exports = {
            en: {
                bubbleText: "Click to configure notifications",
                notificationAreBlocked: "Notifications are blocked!",
                tagWindowTitle: "Configure notifications",
                submit: "Submit",
                cancel: "Cancel",
                pushHistory: "Push History",
                configuration: "Configuration",
                emptyHistory: "Notifications history is empty",
                markAllAsRead: "Mark all as read",
                clearAll: "Clear all",
                optInText: "Will you allow sitename.com to send notifications?",
                optInAllow: "Allow",
                optInBlock: "No, thanks",
                unblockWidgetTitle: "Subscribe to our notifications!",
                unblockWidgetBody: "Click the bell icon to enable notifications"
            },
            es: {
                bubbleText: "Configura la suscripción",
                notificationAreBlocked: "¡Notificaciones están bloqueadas!",
                tagWindowTitle: "Configuración de notificaciones",
                submit: "Aceptar",
                cancel: "Cancelar",
                pushHistory: "Historia push",
                configuration: "Configuración",
                emptyHistory: "La historia está vacía",
                markAllAsRead: "Marcar todo como leído",
                clearAll: "Borrar todo",
                optInText: "¿Va a permitir a sitename.com enviar notificaciones?",
                optInAllow: "Permitir",
                optInBlock: "No, gracias",
                unblockWidgetTitle: "Recibe notificaciones importantes!",
                unblockWidgetBody: "Haga clic en el icono de la campana para activar las notificaciones"
            },
            ru: {
                bubbleText: "Нажмите, чтобы настроить уведомления",
                notificationAreBlocked: "Уведомления заблокированы!",
                tagWindowTitle: "Настройте уведомления",
                submit: "Принять",
                cancel: "Отменить",
                pushHistory: "История",
                configuration: "Настройки",
                emptyHistory: "История уведомлений пуста",
                markAllAsRead: "Пометить как прочитанное",
                clearAll: "Очистить",
                optInText: "Вы разрешаете sitename.com отправлять уведомления?",
                optInAllow: "Разрешить",
                optInBlock: "Нет, спасибо",
                unblockWidgetTitle: "Подпишитесь на наши уведомления!",
                unblockWidgetBody: "Нажмите на иконку колокольчика, чтобы включить уведомления"
            },
            uk: {
                bubbleText: "Натисніть, щоб налаштувати сповіщення",
                notificationAreBlocked: "Сповіщення заблоковані!",
                tagWindowTitle: "Налаштуйте сповіщення",
                submit: "Прийняти",
                cancel: "Відмінити",
                pushHistory: "Історія",
                configuration: "Налаштування",
                emptyHistory: "Історія сповіщень пуста",
                markAllAsRead: "Позначити як прочитане",
                clearAll: "Очистити",
                optInText: "Дозволити sitename.com відправляти сповіщення?",
                optInAllow: "Дозволити",
                optInBlock: "Ні, дякую",
                unblockWidgetTitle: "Отримуй важливі сповіщення від нас!",
                unblockWidgetBody: "Натисни на значок дзвіночка, щоб дозволити отримання повідомлень"
            },
            pl: {
                bubbleText: "Kliknij, aby skonfigurować subskrypcję",
                notificationAreBlocked: "Notifications are blocked!",
                tagWindowTitle: "Skonfiguruj subskrypcję",
                submit: "Zatwierdź",
                cancel: "Anulować",
                pushHistory: "Historia push",
                configuration: "Konfiguracja",
                emptyHistory: "Brak zapisów w historii ",
                markAllAsRead: "Oznacz jako przeczytane",
                clearAll: "Usuń wszystkie",
                optInText: "Czy zezwalasz sitename.com na wysyłanie powiadomień?",
                optInAllow: "Pozwalam",
                optInBlock: "Nie, dziękuję",
                unblockWidgetTitle: "Subskrybuj nasze powiadomienia!",
                unblockWidgetBody: "Kliknij ikonę dzwonka, aby włączyć powiadomienia"
            },
            pt: {
                bubbleText: "Clique para configurar notificações",
                notificationAreBlocked: "Notificações estão bloqueadas!",
                tagWindowTitle: "Configurar notificações",
                submit: "Enviar",
                cancel: "Cancelar",
                pushHistory: "Histórico de push",
                configuration: "Configuração",
                emptyHistory: "O histórico de notificações está vazio",
                markAllAsRead: "marcar tudo como lido",
                clearAll: "Limpar tudo",
                optInText: "Você permite que sitename.com envie notificações?",
                optInAllow: "Permitir",
                optInBlock: "Não, obrigado",
                unblockWidgetTitle: "Inscreva-se para receber nossas notificações!",
                unblockWidgetBody: "Clique no ícone de sino para habilitar notificações"
            }
        }
    },
    "./src/sdk-template/enums.ts": function(e, t, i) {
        "use strict";
        var n, o, s;
        i.d(t, "a", function() {
            return n
        }),
        i.d(t, "c", function() {
            return o
        }),
        i.d(t, "b", function() {
            return s
        }),
        function(e) {
            e.chrome = "CHROME",
            e.safari = "SAFARI"
        }(n || (n = {})),
        function(e) {
            e.granted = "granted",
            e.default = "default",
            e.denied = "denied",
            e.deniedFromCustom = "deniedFromCustom"
        }(o || (o = {})),
        function(e) {
            e.ukrainian = "uk",
            e.russian = "ru",
            e.english = "en",
            e.polish = "pl",
            e.spanish = "es",
            e.portuguese = "pt"
        }(s || (s = {}))
    },
    "./src/sdk-template/exceptions/subscribe.exception.ts": function(e, t, i) {
        "use strict";
        i.d(t, "a", function() {
            return n
        });
        class n extends Error {
            constructor(e) {
                super(`SubscribeError: permission ${e}`),
                this.permission = e
            }
        }
    },
    "./src/sdk-template/https.ts": function(e, t, i) {
        "use strict";
        i.r(t);
        var n = i("./src/sdk-template/enums.ts")
          , o = i("./src/sdk-template/client/browser-subscription-managers/chrome-like-subscription-manager.ts")
          , s = i("./src/sdk-template/client/browser-subscription-managers/safari-subscription-manager.ts")
          , r = i("./src/sdk-template/utils/index.ts")
          , a = i("./src/sdk-template/client/base.client.ts")
          , c = function(e, t, i, n) {
            return new (i || (i = Promise))(function(o, s) {
                function r(e) {
                    try {
                        c(n.next(e))
                    } catch (e) {
                        s(e)
                    }
                }
                function a(e) {
                    try {
                        c(n.throw(e))
                    } catch (e) {
                        s(e)
                    }
                }
                function c(e) {
                    var t;
                    e.done ? o(e.value) : (t = e.value,
                    t instanceof i ? t : new i(function(e) {
                        e(t)
                    }
                    )).then(r, a)
                }
                c((n = n.apply(e, t || [])).next())
            }
            )
        };
        class u extends a.a {
            constructor(e, t, i, n) {
                super(e, t, i, n)
            }
            _init(e={}) {
                return this.config.app.swScope = e.serviceWorkerScope || "/",
                super._init(e)
            }
            _initModeSpecifics() {
                switch (this._mode) {
                case n.a.chrome:
                    this._subscriptionManager = new o.a(this.config,this._db,this._Notification);
                    break;
                case n.a.safari:
                    this._subscriptionManager = new s.a(this.config,this._db,this._Notification)
                }
            }
            _checkSubscriptionOwn(e) {
                return c(this, void 0, void 0, function*() {
                    const {value: t} = yield this._api.checkOwnSubscription(e);
                    return t
                })
            }
            _unsubscribeForeign() {
                return c(this, void 0, void 0, function*() {
                    if (this._subscriptionManager instanceof o.a) {
                        const e = yield this._subscriptionManager.getNativeSubscription();
                        return !!e && (yield e.unsubscribe())
                    }
                    return !1
                })
            }
            _checkSupport() {
                const e = Object.create(null, {
                    _checkSupport: {
                        get: ()=>super._checkSupport
                    }
                });
                return c(this, void 0, void 0, function*() {
                    const t = yield e._checkSupport.call(this);
                    if (!t)
                        return t;
                    if (!Object(r.b)() && !Object(r.j)())
                        throw new Error("Notifications aren't supported.");
                    return !0
                })
            }
        }
        var d = i("./src/sdk-template/client/segmentation/segmentation.ts")
          , l = i("./src/sdk-template/client/utils/database.ts")
          , p = i("./src/sdk-template/client/utils/api.ts")
          , h = i("./src/sdk-template/client/http.client.ts")
          , g = i("./src/sdk-template/utils/logger.ts")
          , b = function(e, t, i, n) {
            return new (i || (i = Promise))(function(o, s) {
                function r(e) {
                    try {
                        c(n.next(e))
                    } catch (e) {
                        s(e)
                    }
                }
                function a(e) {
                    try {
                        c(n.throw(e))
                    } catch (e) {
                        s(e)
                    }
                }
                function c(e) {
                    var t;
                    e.done ? o(e.value) : (t = e.value,
                    t instanceof i ? t : new i(function(e) {
                        e(t)
                    }
                    )).then(r, a)
                }
                c((n = n.apply(e, t || [])).next())
            }
            )
        };
        function m({appKey: e, cdnUrl: t, callbacksUrl: n}) {
            return b(this, void 0, void 0, function*() {
                const o = new URLSearchParams(window.location.search);
                if (o.get("frequency")) {
                    const s = o.get("hash")
                      , a = o.get("frequency")
                      , {default: c} = yield Promise.all([i.e(0), i.e(2)]).then(i.bind(null, "./src/sdk-template/client/widgets/digest/digestTemplate.ts"));
                    (function(e, t, i, n) {
                        return b(this, void 0, void 0, function*() {
                            let o = yield fetch(`${e}/open-api/digests?appKey=${t}&frequency=${n}&hash=${i}`);
                            if (o.status > 304) {
                                const e = yield o.text();
                                return Promise.reject(new Error(`fetch error ${e}`))
                            }
                            return o.json().then(e=>e && "object" == typeof e && "error"in e ? Promise.reject(e) : null === e || 0 === Object.keys(e).length ? Promise.reject(new Error(`Digest response: ${JSON.stringify(e)}`)) : e)
                        })
                    }
                    )(t, e, s, a.toUpperCase()).then(e=>b(this, void 0, void 0, function*() {
                        if (e.unique) {
                            const t = [];
                            for (const i of e.campaigns)
                                t.push(i.hash);
                            let i = yield Object(r.g)();
                            o.get("regid") && (i = o.get("regid"));
                            const s = {
                                id: i,
                                link_hashes: t
                            };
                            try {
                                const t = yield function(e, t, i=new Headers, n="POST") {
                                    return b(this, void 0, void 0, function*() {
                                        i.append("Content-Type", "application/json");
                                        const o = {
                                            method: n,
                                            headers: i
                                        };
                                        e && (o.body = e);
                                        try {
                                            let i = null;
                                            if (!JSON.parse(e).id)
                                                return Promise.reject("hash error");
                                            if ((i = yield fetch(t, o)).status > 304) {
                                                const e = yield i.text();
                                                return Promise.reject(new Error(`fetch error ${e}`))
                                            }
                                            return i.json().then(e=>e && "object" == typeof e && "error"in e ? Promise.reject(e) : e)
                                        } catch (e) {
                                            throw e
                                        }
                                    })
                                }(JSON.stringify(s), `${window.grvTatooineHost ? window.grvTatooineHost : "https://api.gravitec.media"}/api/stats/v1/filter-viewed-page`);
                                let i = e.campaigns.filter(e=>t.includes(e.hash))
                                  , o = e.campaigns.filter(e=>!t.includes(e.hash));
                                if (i.length >= e.size) {
                                    e.campaigns = i.slice(0, e.size),
                                    new c(e,a,n).generate()
                                } else {
                                    e.campaigns = i.concat(o.slice(0, e.size - i.length)),
                                    new c(e,a,n).generate()
                                }
                            } catch (t) {
                                e.campaigns = e.campaigns.slice(0, e.size),
                                new c(e,a,n).generate()
                            }
                        } else {
                            e.campaigns = e.campaigns.slice(0, e.size),
                            new c(e,a,n).generate()
                        }
                    })).catch(e=>{
                        g.a.error(e)
                    }
                    )
                }
            })
        }
        var f = function(e, t, i, n) {
            return new (i || (i = Promise))(function(o, s) {
                function r(e) {
                    try {
                        c(n.next(e))
                    } catch (e) {
                        s(e)
                    }
                }
                function a(e) {
                    try {
                        c(n.throw(e))
                    } catch (e) {
                        s(e)
                    }
                }
                function c(e) {
                    var t;
                    e.done ? o(e.value) : (t = e.value,
                    t instanceof i ? t : new i(function(e) {
                        e(t)
                    }
                    )).then(r, a)
                }
                c((n = n.apply(e, t || [])).next())
            }
            )
        };
        Object(r.q)(),
        window._subscriptionStrategy = 0;
        const w = window.Gravitec || window.WLPush || [];
        fetch("https://cdn.gravitec.net/sdk/web/configs?appKey=4feb3e65a747e66190ccf6e453a1546a").then(e=>e.status > 304 ? Promise.reject(new Error("fetch error")) : e.json()).then(e=>{
            e.app.isHttpToHttps = !1,
            e.app.sdkVersion = 6,
            e.app.appKey = "4feb3e65a747e66190ccf6e453a1546a",
            v(e)
        }
        ).catch(e=>{
            console.log(e)
        }
        );
        const v = e=>{
            window.GravitecConfig = e;
            const t = new l.a
              , n = new p.a(e.app.userApiUrl,e.app.appKey)
              , s = new d.a(n);
            let a;
            a = e.app.subDomain ? new h.a(e,t,n,{
                segmentation: s
            }) : new u(e,t,n,{
                segmentation: s
            }),
            window.Gravitec = a,
            window.WLPush = a,
            m(e.app),
            w.some(([e],t)=>{
                if ("init" === e)
                    return t > 0 && w.unshift(...w.splice(t, 1)),
                    !0
            }
            ) || window.Gravitec.push(["init"]),
            window.Gravitec.processPushes(w);
            if (["addTag", "addTags", "setTags", "removeTag", "removeTags", "removeAllTags", "setAlias", "getTags"].forEach(e=>{
                window.Gravitec[e] = ((...t)=>window.Gravitec.push([`segmentation.${e}`].concat(t)))
            }
            ),
            e.app.trackUnique) {
                const t = function e(t) {
                    if (document.body) {
                        const e = document.createElement("iframe");
                        return e.src = t,
                        e.style.display = "none",
                        e.className = "grv-iframe",
                        document.body.appendChild(e),
                        e
                    }
                    window.requestAnimationFrame(()=>e(t))
                }(e.app.identifyUrl);
                window.addEventListener("message", e=>{
                    "IFRAME" === e.data.type && localStorage.setItem("wasIdentified", "true")
                }
                ),
                a.push(["subscriptionResult", i=>{
                    i.subscription && i.newSubscription ? t.contentWindow.postMessage({
                        type: "IDENTIFY_EVENT",
                        regId: i.subscription.regID,
                        appKey: e.app.appKey,
                        siteUrl: e.app.siteUrl
                    }, e.app.identifyUrl) : !i.subscription || i.newSubscription || Boolean(localStorage.getItem("wasIdentified")) || setTimeout(()=>t.contentWindow.postMessage({
                        type: "IDENTIFY_EVENT",
                        regId: i.subscription.regID,
                        appKey: e.app.appKey,
                        siteUrl: e.app.siteUrl
                    }, e.app.identifyUrl), 1e3)
                }
                ])
            }
            e.app.trackStat && (e.app.tatooineUrl && (window.grvTatooineHost = e.app.tatooineUrl),
            function() {
                f(this, void 0, void 0, function*() {
                    let e = yield Object(r.g)();
                    window.GravitecNetNewsConfig = {
                        appKey: "4feb3e65a747e66190ccf6e453a1546a",
                        regId: e
                    };
                    var t = document.createElement("script");
                    t.type = "text/javascript",
                    t.src = "//cdn.gravitec.media/track.min.js",
                    t.async = !0,
                    document.getElementsByTagName("script")[0].parentNode.appendChild(t)
                })
            }()),
            function t() {
                window.GravitecNews ? window.Gravitec.push(["subscriptionResult", t=>f(this, void 0, void 0, function*() {
                    if (window.Gravitec._subscriptionManager instanceof o.a) {
                        if (e.bell.enabled && ("denied" !== Notification.permission || !Object(r.i)()) && (!Object(r.i)() || !e.opt.desktopProps.reengagement.bellHelper.enabled || e.bell.functional.includes("CONF") || e.bell.functional.includes("HISTORY")) && !Object(r.a)("gravitecOptInBlocked")) {
                            const {default: n} = yield Promise.all([i.e(0), i.e(1), i.e(4)]).then(i.bind(null, "./src/sdk-template/client/widgets/bell/index.ts"));
                            n.renderBellElement(n.createShadow("grv-bell-host", document.body), e.bell, e.app, e.opt, t.permission)
                        }
                        if ("denied" === window.localStorage.permission && "granted" === Notification.permission)
                            try {
                                fetch(`${window.grvTatooineHost ? window.grvTatooineHost : "https://api.gravitec.media"}/api/stats/event?app_key=${e.app.appKey}&user_id=${window.GravitecNews.getUserId()}&event_type=unblock&event_source=sub`)
                            } catch (e) {}
                        window.localStorage.setItem("permission", Notification.permission)
                    }
                })]) : window.requestAnimationFrame(t)
            }()
        }
    },
    "./src/sdk-template/utils/database.ts": function(e, t, i) {
        "use strict";
        i.d(t, "a", function() {
            return n
        }),
        i.d(t, "b", function() {
            return r
        });
        var n, o = i("./src/sdk-template/utils/logger.ts"), s = function(e, t, i, n) {
            return new (i || (i = Promise))(function(o, s) {
                function r(e) {
                    try {
                        c(n.next(e))
                    } catch (e) {
                        s(e)
                    }
                }
                function a(e) {
                    try {
                        c(n.throw(e))
                    } catch (e) {
                        s(e)
                    }
                }
                function c(e) {
                    var t;
                    e.done ? o(e.value) : (t = e.value,
                    t instanceof i ? t : new i(function(e) {
                        e(t)
                    }
                    )).then(r, a)
                }
                c((n = n.apply(e, t || [])).next())
            }
            )
        };
        !function(e) {
            e.ids = "Ids",
            e.settings = "Settings"
        }(n || (n = {}));
        class r {
            constructor() {
                this.version = 1,
                this.dbName = "gravitec_db"
            }
            open(e=this.dbName, t=this.version) {
                return this.db ? Promise.resolve(this.db) : new Promise((i,n)=>{
                    let s;
                    try {
                        s = window.indexedDB.open(e, this.version)
                    } catch (i) {
                        return void o.a.debug(`Error opening indexeddb. \nDb name: ${e}\ndb version: ${t}`)
                    }
                    s.onerror = n,
                    s.onblocked = n,
                    s.onupgradeneeded = (e=>this.onupgradeneeded(e)),
                    s.onsuccess = (()=>{
                        this.db = s.result,
                        i(this.db)
                    }
                    )
                }
                )
            }
            onupgradeneeded(e) {
                const t = e.target.result;
                return t.createObjectStore(n.ids, {
                    keyPath: "type"
                }),
                t.createObjectStore(n.settings, {
                    keyPath: "option"
                }),
                t
            }
            put(e, t) {
                return s(this, void 0, void 0, function*() {
                    return yield this.open(),
                    new Promise((i,n)=>{
                        try {
                            const o = this.db.transaction([e], "readwrite").objectStore(e).put(t);
                            o.onsuccess = (()=>{
                                i()
                            }
                            ),
                            o.onerror = (e=>{
                                this.logOperationError("PUT", e, !0),
                                n(e)
                            }
                            )
                        } catch (e) {
                            this.logOperationError("PUT", e),
                            n(e)
                        }
                    }
                    )
                })
            }
            count(e) {
                return s(this, void 0, void 0, function*() {
                    return yield this.open(),
                    new Promise((t,i)=>{
                        try {
                            const n = this.db.transaction([e], "readonly").objectStore(e).count();
                            n.onsuccess = (()=>{
                                t(n.result)
                            }
                            ),
                            n.onerror = (e=>{
                                this.logOperationError("COUNT", e, !0),
                                i(e)
                            }
                            )
                        } catch (e) {
                            this.logOperationError("COUNT", e),
                            i(e)
                        }
                    }
                    )
                })
            }
            get(e, t) {
                return s(this, void 0, void 0, function*() {
                    return yield this.open(),
                    new Promise((i,n)=>{
                        try {
                            const o = this.db.transaction([e], "readonly").objectStore(e).get(t);
                            o.onsuccess = (()=>{
                                i(o.result)
                            }
                            ),
                            o.onerror = (e=>{
                                this.logOperationError("GET", e, !0),
                                n(e)
                            }
                            )
                        } catch (e) {
                            this.logOperationError("GET", e),
                            n(e)
                        }
                    }
                    )
                })
            }
            remove(e, t) {
                return s(this, void 0, void 0, function*() {
                    return yield this.open(),
                    new Promise((i,n)=>{
                        try {
                            let o;
                            (o = t ? this.db.transaction([e], "readwrite").objectStore(e).delete(t) : this.db.transaction([e], "readwrite").objectStore(e).clear()).onsuccess = (()=>{
                                i(t)
                            }
                            ),
                            o.onerror = (e=>{
                                this.logOperationError("GET_ALL", e, !0),
                                n(e)
                            }
                            )
                        } catch (e) {
                            this.logOperationError("GET_ALL", e),
                            n(e)
                        }
                    }
                    )
                })
            }
            getAll(e) {
                return s(this, void 0, void 0, function*() {
                    return yield this.open(),
                    new Promise((t,i)=>{
                        try {
                            const n = {}
                              , o = this.db.transaction([e], "readonly").objectStore(e).openCursor();
                            o.onsuccess = (()=>{
                                const e = o.result;
                                e ? (n[e.key] = e.value,
                                e.continue()) : t(n)
                            }
                            ),
                            o.onerror = (e=>{
                                this.logOperationError("GET_ALL", e, !0),
                                i(e)
                            }
                            )
                        } catch (e) {
                            this.logOperationError("GET_ALL", e),
                            i(e)
                        }
                    }
                    )
                })
            }
            logOperationError(e, t, i=!1) {
                o.a.error(`DB ${i ? " transaction" : ""} error ${e}: ${t}`)
            }
        }
    },
    "./src/sdk-template/utils/index.ts": function(e, t, i) {
        "use strict";
        i.d(t, "c", function() {
            return s
        }),
        i.d(t, "n", function() {
            return a
        }),
        i.d(t, "j", function() {
            return c
        }),
        i.d(t, "l", function() {
            return u
        }),
        i.d(t, "b", function() {
            return d
        }),
        i.d(t, "a", function() {
            return l
        }),
        i.d(t, "e", function() {
            return p
        }),
        i.d(t, "i", function() {
            return h
        }),
        i.d(t, "o", function() {
            return g
        }),
        i.d(t, "p", function() {
            return b
        }),
        i.d(t, "d", function() {
            return m
        }),
        i.d(t, "h", function() {
            return f
        }),
        i.d(t, "f", function() {
            return w
        }),
        i.d(t, "m", function() {
            return v
        }),
        i.d(t, "k", function() {
            return y
        }),
        i.d(t, "q", function() {
            return k
        }),
        i.d(t, "g", function() {
            return _
        });
        var n = i("./node_modules/idb/build/esm/index.js")
          , o = function(e, t, i, n) {
            return new (i || (i = Promise))(function(o, s) {
                function r(e) {
                    try {
                        c(n.next(e))
                    } catch (e) {
                        s(e)
                    }
                }
                function a(e) {
                    try {
                        c(n.throw(e))
                    } catch (e) {
                        s(e)
                    }
                }
                function c(e) {
                    var t;
                    e.done ? o(e.value) : (t = e.value,
                    t instanceof i ? t : new i(function(e) {
                        e(t)
                    }
                    )).then(r, a)
                }
                c((n = n.apply(e, t || [])).next())
            }
            )
        };
        function s(e=navigator.userAgent) {
            return o(this, void 0, void 0, function*() {
                try {
                    const {parse: t} = yield i.e(3).then(i.t.bind(null, "./node_modules/bowser/es5.js", 7));
                    switch (t(e).browser.name) {
                    case "Chrome":
                        return "CHROME";
                    case "Firefox":
                        return "FIREFOX";
                    case "Microsoft Edge":
                        return "EDGE";
                    case "Opera":
                        return "OPERA";
                    case "Safari":
                        return "SAFARI";
                    case "UC Browser":
                        return "UC_BROWSER";
                    case "Yandex Browser":
                        return "YANDEX";
                    case "Internet Explorer":
                        return "IE";
                    default:
                        return "CHROME"
                    }
                } catch (e) {
                    return function(e=navigator) {
                        var t = e.userAgent
                          , i = t.match(/(opera|yabrowser|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i);
                        return /trident/i.test(i[1]) ? "IE" : "CHROME" === i[1].toUpperCase() && null !== t.match(/\bOPR\/(\d+)/) ? "OPERA" : "CHROME" === i[1].toUpperCase() && null !== t.match(/\bYaBrowser\/(\d+)/) ? "YANDEX" : "CHROME" === i[1].toUpperCase() ? "CHROME" : i[2] ? i[1].toUpperCase() : e.appName.toUpperCase()
                    }(navigator)
                }
            })
        }
        const r = [/^https:\/\/fcm\.googleapis\.com\/fcm\/send\//, /^https:\/\/android\.googleapis\.com\/gcm\/send\//, /^https:\/\/updates\.push\.services\.mozilla\.com(?::443)?\//, /\.notify\.windows\.com\/w\/\?token\=/];
        function a(e, t=navigator.userAgent, i=self) {
            return o(this, void 0, void 0, function*() {
                const n = {
                    regID: null,
                    auth: null,
                    p256dh: null,
                    browser: null,
                    subscriptionSpec: null,
                    subscriptionStrategy: null,
                    endpoint: null,
                    lang: null
                };
                try {
                    for (const t of r)
                        t.test(e.endpoint) && Object.assign(n, {
                            regID: e.endpoint.split(t)[1]
                        });
                    const {keys: o} = e.toJSON();
                    let a;
                    try {
                        a = w()
                    } catch (e) {
                        a = null
                    }
                    Object.assign(n, {
                        auth: o.auth,
                        p256dh: o.p256dh,
                        browser: yield s(t),
                        subscriptionSpec: i._subscriptionSpec || 0,
                        subscriptionStrategy: i._subscriptionStrategy || 0,
                        endpoint: e.endpoint,
                        lang: a
                    })
                } catch (e) {
                    console.log(e)
                }
                return n
            })
        }
        function c() {
            return "showNotification"in (ServiceWorkerRegistration && ServiceWorkerRegistration.prototype)
        }
        function u() {
            return "PushManager"in window
        }
        function d() {
            return "safari"in window && "pushNotification"in window.safari
        }
        function l(e) {
            const t = e + "="
              , i = document.cookie.split(";");
            for (let e = 0; e < i.length; e++) {
                let n = i[e];
                for (; " " == n.charAt(0); )
                    n = n.substring(1);
                if (0 == n.indexOf(t))
                    return n.substring(t.length, n.length)
            }
            return ""
        }
        function p() {
            return Math.round(Date.now() / 1e3)
        }
        function h() {
            var e, t = !1;
            return e = navigator.userAgent || navigator.vendor || window.opera,
            (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4))) && (t = !0),
            t
        }
        function g(e) {
            b(e, null, -1)
        }
        function b(e, t, i=30) {
            var n = new Date;
            n.setTime(n.getTime() + 864e5 * i);
            var o = "; expires=" + n.toUTCString();
            document.cookie = encodeURIComponent(e) + "=" + encodeURIComponent(t) + o + "; path=/"
        }
        function m() {
            return window.navigator.language.substring(0, 2).toLowerCase()
        }
        function f(e) {
            let t = w()
              , i = e.find(e=>e.lang === t);
            return i ? i.value : e.find(e=>"default" === e.lang).value
        }
        function w() {
            let e, t = document.querySelector("html").getAttribute("lang");
            if (t) {
                e = t.split("-")[0]
            } else
                e = m();
            return e
        }
        function v() {}
        function y() {
            return new Promise(e=>{
                const t = ()=>e(!0)
                  , i = ()=>e(!1);
                if (window.webkitRequestFileSystem)
                    return void window.webkitRequestFileSystem(0, 0, i, t);
                if ("MozAppearance"in document.documentElement.style) {
                    if (null === indexedDB)
                        return t();
                    const e = indexedDB.open("test");
                    return e.onerror = t,
                    void (e.onsuccess = i)
                }
                const n = navigator.userAgent.match(/Version\/([0-9\._]+).*Safari/);
                if (n) {
                    if (parseInt(n[1], 10) < 11)
                        return (()=>{
                            try {
                                localStorage.length ? i() : (localStorage.x = 1,
                                localStorage.removeItem("x"),
                                i())
                            } catch (e) {
                                navigator.cookieEnabled ? t() : i()
                            }
                        }
                        )();
                    try {
                        return window.openDatabase(null, null, null, null),
                        i()
                    } catch (e) {
                        return t()
                    }
                }
                return window.indexedDB || !window.PointerEvent && !window.MSPointerEvent ? i() : t()
            }
            )
        }
        const k = ()=>{
            let e = Number(window.localStorage.getItem("views-counter"));
            null === e ? e = 1 : e++,
            window.localStorage.setItem("views-counter", e.toString())
        }
        ;
        function _() {
            return o(this, void 0, void 0, function*() {
                let e = null;
                try {
                    const t = yield navigator.serviceWorker.getRegistration();
                    if (t) {
                        const i = yield t.pushManager.getSubscription();
                        for (const t of r)
                            t.test(i.endpoint) && (e = i.endpoint.split(t)[1])
                    }
                } catch (t) {
                    try {
                        e = yield S()
                    } catch (t) {
                        e = null
                    }
                }
                return e
            })
        }
        const S = ()=>o(void 0, void 0, void 0, function*() {
            let e = null;
            try {
                const t = yield Object(n.a)("gravitec_client_db", 1, {
                    upgrade(e) {
                        e.createObjectStore("Ids", {
                            keyPath: "type"
                        }),
                        e.createObjectStore("HttpCreated", {
                            keyPath: "type"
                        })
                    }
                });
                if (t) {
                    const i = yield t.get("Ids", "SubscriptionId");
                    if (i && i.value) {
                        const t = i.value.regID;
                        t && (e = t)
                    }
                }
            } catch (e) {}
            return e
        })
    },
    "./src/sdk-template/utils/logger.ts": function(e, t, i) {
        "use strict";
        i.d(t, "a", function() {
            return n
        });
        class n {
            static log(e) {
                return console.log("🔔", e),
                e
            }
            static info(e) {
                return console.info("🔔", e),
                e
            }
            static warn(e) {
                return console.warn("🔔", e),
                e
            }
            static error(e) {
                return console.error("🔔", e),
                e
            }
            static debug(e) {
                return console.debug("🔔", e),
                e
            }
        }
    },
    1: function(e, t, i) {
        e.exports = i("./src/sdk-template/https.ts")
    }
});
