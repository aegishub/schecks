!function(e) {
    var t = {};
    function r(n) {
        if (t[n])
            return t[n].exports;
        var i = t[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(i.exports, i, i.exports, r),
        i.l = !0,
        i.exports
    }
    r.m = e,
    r.c = t,
    r.d = function(e, t, n) {
        r.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }
    ,
    r.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    r.t = function(e, t) {
        if (1 & t && (e = r(e)),
        8 & t)
            return e;
        if (4 & t && "object" == typeof e && e && e.__esModule)
            return e;
        var n = Object.create(null);
        if (r.r(n),
        Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var i in e)
                r.d(n, i, function(t) {
                    return e[t]
                }
                .bind(null, i));
        return n
    }
    ,
    r.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return r.d(t, "a", t),
        t
    }
    ,
    r.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    r.p = "https://cdn.gravitec.net/",
    r(r.s = 0)
}({
    "./node_modules/idb-keyval/dist/idb-keyval.mjs": function(e, t, r) {
        "use strict";
        r.r(t),
        r.d(t, "Store", function() {
            return n
        }),
        r.d(t, "get", function() {
            return s
        }),
        r.d(t, "set", function() {
            return a
        }),
        r.d(t, "del", function() {
            return c
        }),
        r.d(t, "clear", function() {
            return u
        }),
        r.d(t, "keys", function() {
            return l
        });
        class n {
            constructor(e="keyval-store", t="keyval") {
                this.storeName = t,
                this._dbp = new Promise((r,n)=>{
                    const i = indexedDB.open(e, 1);
                    i.onerror = (()=>n(i.error)),
                    i.onsuccess = (()=>r(i.result)),
                    i.onupgradeneeded = (()=>{
                        i.result.createObjectStore(t)
                    }
                    )
                }
                )
            }
            _withIDBStore(e, t) {
                return this._dbp.then(r=>new Promise((n,i)=>{
                    const o = r.transaction(this.storeName, e);
                    o.oncomplete = (()=>n()),
                    o.onabort = o.onerror = (()=>i(o.error)),
                    t(o.objectStore(this.storeName))
                }
                ))
            }
        }
        let i;
        function o() {
            return i || (i = new n),
            i
        }
        function s(e, t=o()) {
            let r;
            return t._withIDBStore("readonly", t=>{
                r = t.get(e)
            }
            ).then(()=>r.result)
        }
        function a(e, t, r=o()) {
            return r._withIDBStore("readwrite", r=>{
                r.put(t, e)
            }
            )
        }
        function c(e, t=o()) {
            return t._withIDBStore("readwrite", t=>{
                t.delete(e)
            }
            )
        }
        function u(e=o()) {
            return e._withIDBStore("readwrite", e=>{
                e.clear()
            }
            )
        }
        function l(e=o()) {
            const t = [];
            return e._withIDBStore("readonly", e=>{
                (e.openKeyCursor || e.openCursor).call(e).onsuccess = function() {
                    this.result && (t.push(this.result.key),
                    this.result.continue())
                }
            }
            ).then(()=>t)
        }
    },
    "./node_modules/idb/build/esm/index.js": function(e, t, r) {
        "use strict";
        r.r(t);
        const n = (e,t)=>t.some(t=>e instanceof t);
        let i, o;
        const s = new WeakMap
          , a = new WeakMap
          , c = new WeakMap
          , u = new WeakMap
          , l = new WeakMap;
        let d = {
            get(e, t, r) {
                if (e instanceof IDBTransaction) {
                    if ("done" === t)
                        return a.get(e);
                    if ("objectStoreNames" === t)
                        return e.objectStoreNames || c.get(e);
                    if ("store" === t)
                        return r.objectStoreNames[1] ? void 0 : r.objectStore(r.objectStoreNames[0])
                }
                return f(e[t])
            },
            has: (e,t)=>e instanceof IDBTransaction && ("done" === t || "store" === t) || t in e
        };
        function p(e) {
            return e !== IDBDatabase.prototype.transaction || "objectStoreNames"in IDBTransaction.prototype ? (o || (o = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(e) ? function(...t) {
                return e.apply(g(this), t),
                f(s.get(this))
            }
            : function(...t) {
                return f(e.apply(g(this), t))
            }
            : function(t, ...r) {
                const n = e.call(g(this), t, ...r);
                return c.set(n, t.sort ? t.sort() : [t]),
                f(n)
            }
        }
        function h(e) {
            return "function" == typeof e ? p(e) : (e instanceof IDBTransaction && function(e) {
                if (a.has(e))
                    return;
                const t = new Promise((t,r)=>{
                    const n = ()=>{
                        e.removeEventListener("complete", i),
                        e.removeEventListener("error", o),
                        e.removeEventListener("abort", o)
                    }
                      , i = ()=>{
                        t(),
                        n()
                    }
                      , o = ()=>{
                        r(e.error),
                        n()
                    }
                    ;
                    e.addEventListener("complete", i),
                    e.addEventListener("error", o),
                    e.addEventListener("abort", o)
                }
                );
                a.set(e, t)
            }(e),
            n(e, i || (i = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])) ? new Proxy(e,d) : e)
        }
        function f(e) {
            if (e instanceof IDBRequest)
                return function(e) {
                    const t = new Promise((t,r)=>{
                        const n = ()=>{
                            e.removeEventListener("success", i),
                            e.removeEventListener("error", o)
                        }
                          , i = ()=>{
                            t(f(e.result)),
                            n()
                        }
                          , o = ()=>{
                            r(e.error),
                            n()
                        }
                        ;
                        e.addEventListener("success", i),
                        e.addEventListener("error", o)
                    }
                    );
                    return t.then(t=>{
                        t instanceof IDBCursor && s.set(t, e)
                    }
                    ).catch(()=>{}
                    ),
                    l.set(t, e),
                    t
                }(e);
            if (u.has(e))
                return u.get(e);
            const t = h(e);
            return t !== e && (u.set(e, t),
            l.set(t, e)),
            t
        }
        const g = e=>l.get(e);
        function b(e, t, {blocked: r, upgrade: n, blocking: i}={}) {
            const o = indexedDB.open(e, t)
              , s = f(o);
            return n && o.addEventListener("upgradeneeded", e=>{
                n(f(o.result), e.oldVersion, e.newVersion, f(o.transaction))
            }
            ),
            r && o.addEventListener("blocked", ()=>r()),
            i && s.then(e=>e.addEventListener("versionchange", i)).catch(()=>{}
            ),
            s
        }
        function m(e, {blocked: t}={}) {
            const r = indexedDB.deleteDatabase(e);
            return t && r.addEventListener("blocked", ()=>t()),
            f(r).then(()=>void 0)
        }
        r.d(t, "openDB", function() {
            return b
        }),
        r.d(t, "deleteDB", function() {
            return m
        }),
        r.d(t, "unwrap", function() {
            return g
        }),
        r.d(t, "wrap", function() {
            return f
        });
        const y = ["get", "getKey", "getAll", "getAllKeys", "count"]
          , E = ["put", "add", "delete", "clear"]
          , v = new Map;
        function S(e, t) {
            if (!(e instanceof IDBDatabase) || t in e || "string" != typeof t)
                return;
            if (v.get(t))
                return v.get(t);
            const r = t.replace(/FromIndex$/, "")
              , n = t !== r
              , i = E.includes(r);
            if (!(r in (n ? IDBIndex : IDBObjectStore).prototype) || !i && !y.includes(r))
                return;
            const o = async function(e, ...t) {
                const o = this.transaction(e, i ? "readwrite" : "readonly");
                let s = o.store;
                n && (s = s.index(t.shift()));
                const a = s[r](...t);
                return i && await o.done,
                a
            };
            return v.set(t, o),
            o
        }
        d = (e=>({
            get: (t,r,n)=>S(t, r) || e.get(t, r, n),
            has: (t,r)=>!!S(t, r) || e.has(t, r)
        }))(d)
    },
    "./src/sw-template/common-service-worker.ts": function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.CommonServiceWorker = class {
            constructor(e, t) {
                this.errorHandler = e,
                this.version = t
            }
        }
    },
    "./src/sw-template/models/notification-data.ts": function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        function(e) {
            e.open = "open",
            e.focus = "focus"
        }(t.NotificationActionType || (t.NotificationActionType = {}))
    },
    "./src/sw-template/modules/main/index.ts": function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        const n = r("./src/sw-template/utils/api.ts")
          , i = r("./src/sw-template/utils/error-handler.ts")
          , o = r("./src/sw-template/modules/main/main.ts")
          , s = r("./src/sw-template/utils/logger.ts");
        t.init = function() {
            const e = new n.ApiService(self.apiUrl,self.appKey,"1.2.6")
              , t = new i.ErrorHandler(e,o.MainWorker.globalKey);
            self[o.MainWorker.globalKey] = new o.MainWorker(t,"1.2.6"),
            self.addEventListener("install", e=>{
                s.Logger.debug("oninstall triggered"),
                e.waitUntil(self[o.MainWorker.globalKey].oninstall(e).then(()=>{
                    s.Logger.debug("oninstall finished")
                }
                ))
            }
            ),
            self.addEventListener("activate", e=>{
                s.Logger.debug("onactivate triggered"),
                e.waitUntil(self[o.MainWorker.globalKey].onactivate(e).then(()=>{
                    s.Logger.debug("onactivate finished")
                }
                ))
            }
            ),
            self.addEventListener("fetch", function(e) {})
        }
    },
    "./src/sw-template/modules/main/main.ts": function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        const n = r("./src/sw-template/common-service-worker.ts");
        class i extends n.CommonServiceWorker {
            constructor(e, t) {
                super(e, t)
            }
            oninstall() {
                return self.skipWaiting()
            }
            onactivate() {
                return self.clients.claim()
            }
        }
        t.MainWorker = i,
        i.globalKey = "main"
    },
    "./src/sw-template/modules/push/index.ts": function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        const n = r("./src/sw-template/utils/error-handler.ts")
          , i = r("./src/sw-template/modules/push/push.ts")
          , o = r("./src/sw-template/modules/push/utils/api.ts")
          , s = r("./src/sw-template/modules/push/utils/database.ts")
          , a = r("./src/sw-template/utils/logger.ts")
          , c = r("./node_modules/idb-keyval/dist/idb-keyval.mjs");
        t.init = function() {
            const e = new o.PushApiService(self.apiUrl,self.appKey,"1.2.6")
              , t = new n.ErrorHandler(e,i.PushWorker.globalKey)
              , r = new s.PushDatabase(t);
            self[i.PushWorker.globalKey] = new i.PushWorker(e,r,t,"1.2.6"),
            self.addEventListener("push", e=>{
                a.Logger.debug("onpush triggered"),
                e.waitUntil(self[i.PushWorker.globalKey].onpush(e))
            }
            ),
            self.addEventListener("notificationclose", e=>{
                a.Logger.debug("onnotificationclose triggered"),
                self.trackInactive && c.get("closesCounter").then(e=>{
                    let t = 1;
                    void 0 !== e && (t = +e,
                    t++),
                    c.set("closesCounter", t.toString())
                }
                ),
                e.waitUntil(self[i.PushWorker.globalKey].onnotificationclose(e))
            }
            ),
            self.addEventListener("notificationclick", e=>{
                a.Logger.debug("onnotificationclick triggered"),
                self.trackInactive && c.get("closesCounter").then(e=>{
                    let t = 1;
                    void 0 !== e && (t = +e,
                    t++),
                    c.set("closesCounter", t.toString())
                }
                ),
                e.waitUntil(self[i.PushWorker.globalKey].onnotificationclick(e))
            }
            ),
            self.addEventListener("pushsubscriptionchange", e=>{
                a.Logger.debug("onpushsubscriptionchange triggered"),
                e.waitUntil(self[i.PushWorker.globalKey].onpushsubscriptionchange(e))
            }
            )
        }
    },
    "./src/sw-template/modules/push/push.ts": function(e, t, r) {
        "use strict";
        var n = this && this.__awaiter || function(e, t, r, n) {
            return new (r || (r = Promise))(function(i, o) {
                function s(e) {
                    try {
                        c(n.next(e))
                    } catch (e) {
                        o(e)
                    }
                }
                function a(e) {
                    try {
                        c(n.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }
                function c(e) {
                    var t;
                    e.done ? i(e.value) : (t = e.value,
                    t instanceof r ? t : new r(function(e) {
                        e(t)
                    }
                    )).then(s, a)
                }
                c((n = n.apply(e, t || [])).next())
            }
            )
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        const i = r("./src/sw-template/models/notification-data.ts")
          , o = r("./src/sw-template/utils/index.ts")
          , s = r("./src/sw-template/common-service-worker.ts")
          , a = r("./src/sw-template/utils/logger.ts")
          , c = r("./node_modules/idb-keyval/dist/idb-keyval.mjs");
        var u;
        !function(e) {
            e[e.SUBSCRIPTION = 200] = "SUBSCRIPTION",
            e[e.CLOSE_NOTIFICATION = 201] = "CLOSE_NOTIFICATION",
            e[e.DISPLAY = 202] = "DISPLAY",
            e[e.SAVE_HISTORY = 203] = "SAVE_HISTORY",
            e[e.FETCH_LAST_MESSAGE = 300] = "FETCH_LAST_MESSAGE",
            e[e.EMPTY_LAST_MESSAGE = 301] = "EMPTY_LAST_MESSAGE",
            e[e.PARSE_LAST_MESSAGE = 302] = "PARSE_LAST_MESSAGE",
            e[e.PARSE_NOTIFICATION_NO_DATA = 303] = "PARSE_NOTIFICATION_NO_DATA",
            e[e.CONVERT = 304] = "CONVERT",
            e[e.RECEIVE = 400] = "RECEIVE",
            e[e.CLICK = 401] = "CLICK",
            e[e.CLICK_BUTTON = 402] = "CLICK_BUTTON",
            e[e.CLOSE = 403] = "CLOSE",
            e[e.UPDATE_SUBSCRIPTION = 500] = "UPDATE_SUBSCRIPTION"
        }(u || (u = {}));
        class l extends s.CommonServiceWorker {
            constructor(e, t, r, n) {
                super(r, n),
                this.api = e,
                this.db = t,
                this.defaultNotification = {
                    title: "Service notification",
                    body: "Your subscription has been updated. Thank you for staying with us!",
                    icon: "",
                    tag: "notification-error"
                },
                this.currentNotificationId = null,
                this.clickedNotificationIds = new Map,
                this.clickWorkaroundLifetime = 2e4
            }
            get normalNotificationTag() {
                return "real-push"
            }
            onpush(e) {
                return n(this, void 0, void 0, function*() {
                    let t, r;
                    try {
                        t = yield this.getSubscription()
                    } catch (e) {
                        return this.showDefaultNotification()
                    }
                    self.trackInactive && c.get("pushesCounter").then(e=>{
                        let r = 1;
                        void 0 !== e && (r = +e,
                        r++),
                        r >= 10 ? (c.get("closesCounter").then(e=>{
                            void 0 === e && fetch(`https://uapi.gravitec.net/innactive?regID=${t.regID}&appKey=${self.appKey}`)
                        }
                        ),
                        c.set("pushesCounter", void 0),
                        c.set("closesCounter", void 0)) : c.set("pushesCounter", r.toString())
                    }
                    ),
                    a.Logger.debug(`got subscription: ${JSON.stringify(t)}`);
                    try {
                        r = yield this.getNotifications(e, t)
                    } catch (e) {
                        return this.showDefaultNotification()
                    }
                    return a.Logger.debug(`got notifications: ${JSON.stringify(r)}`),
                    r.map(e=>()=>(a.Logger.debug(`showing notification: ${JSON.stringify(e)}`),
                    this.api.sendReceiveStat(e.data.message_id, t).catch(e=>{
                        this.errorHandler.sendError("Error fetching receive", e, u.RECEIVE, t)
                    }
                    ),
                    this.displayNotification(e))).reduce((e,t)=>e.then(t), Promise.resolve()).catch(e=>(this.errorHandler.sendError("Display notifications", e, u.DISPLAY),
                    this.showDefaultNotification()))
                })
            }
            onnotificationclick(e) {
                return n(this, void 0, void 0, function*() {
                    const t = e.notification
                      , r = t.data || {};
                    if (r.source !== this.normalNotificationTag)
                        return Promise.resolve();
                    if (this.clickedNotificationIds.has(r.message_id))
                        return Promise.resolve();
                    const n = r.url ? decodeURI(r.url) : null
                      , {message_id: i} = r;
                    this.currentNotificationId = i,
                    this.clickedNotificationIds.set(i, Date.now()),
                    this.db.interactWithPushMethod(self, i),
                    setTimeout(()=>{
                        this.clearOldClickedNotifications()
                    }
                    , this.clickWorkaroundLifetime + 1e3);
                    let o = null;
                    try {
                        o = yield this.getSubscription()
                    } catch (e) {
                        console.error("onnotificationclick", e)
                    }
                    const s = [];
                    if (a.Logger.debug("Notification click", r),
                    t.close(),
                    e.action && r.buttons) {
                        let n = r.buttons[e.action];
                        n.url && (s.push(this.executeClickAction(decodeURI(n.url), n.action)),
                        this.canSendAnalytics(t) && (r.tag ? s.push(this.api.sendReadStatWithTag(i, o, r.tag, n.id).catch(e=>{
                            this.errorHandler.sendError("Fetch button read", e, u.CLICK_BUTTON)
                        }
                        )) : s.push(this.api.sendReadStat(i, o, n.id).catch(e=>{
                            this.errorHandler.sendError("Fetch button read", e, u.CLICK_BUTTON)
                        }
                        )))),
                        n.request && s.push(self.fetch(decodeURI(n.request)))
                    } else
                        n && (s.push(this.executeClickAction(n, r.action)),
                        this.canSendAnalytics(t) && (r.tag ? s.push(this.api.sendReadStatWithTag(i, o, r.tag).catch(e=>{
                            this.errorHandler.sendError("Fetch button read", e, u.CLICK)
                        }
                        )) : s.push(this.api.sendReadStat(i, o).catch(e=>{
                            this.errorHandler.sendError("Fetch button read", e, u.CLICK)
                        }
                        ))));
                    return Promise.all(s)
                })
            }
            onnotificationclose(e) {
                const t = e.notification
                  , r = t.data || {}
                  , {message_id: n} = r;
                return n === this.currentNotificationId ? (this.currentNotificationId = null,
                Promise.resolve()) : (a.Logger.debug("closing notification", r),
                t.close(),
                this.canSendAnalytics(t) ? this.getSubscription().then(e=>this.api.sendCloseStat(n, e).catch(e=>{
                    this.errorHandler.sendError("Fetch close", e, u.CLOSE)
                }
                )) : Promise.resolve())
            }
            onpushsubscriptionchange({oldSubscription: e, newSubscription: t}) {
                let r = Promise.resolve();
                return e && (r = r.then(()=>this.api.fetch("/sites/followers", "put", {}, {
                    oldSubscription: o.prepareSubscription(e),
                    newSubscription: o.prepareSubscription(t)
                }).catch(e=>{
                    this.errorHandler.sendError("Error updating subscription on onpushsubscriptionchange", e, u.UPDATE_SUBSCRIPTION)
                }
                ))),
                r
            }
            clearOldClickedNotifications() {
                const e = Date.now() - this.clickWorkaroundLifetime;
                this.clickedNotificationIds.forEach((t,r)=>{
                    t < e && this.clickedNotificationIds.delete(r)
                }
                )
            }
            displayNotification(e) {
                let t = self.registration.showNotification(e.title, e);
                return e.data && (e.data.source === this.normalNotificationTag ? this.saveNotification(e).then(()=>{
                    self.clients.matchAll().then(e=>{
                        for (let t of e)
                            t.postMessage({
                                msg: "received"
                            })
                    }
                    )
                }
                ) : this.wait(50).then(()=>{
                    a.Logger.debug(`try closing notification ${e.data.message_id}`),
                    this.closeNotification(e.data.message_id)
                }
                )),
                t
            }
            isServiceNotification(e) {
                return "user_visible_auto_notification" === e.tag
            }
            closeNotification(e) {
                return self.registration.getNotifications().then(t=>{
                    const r = t.map(e=>this.isServiceNotification(e) ? "service_notification" : e.data && e.data.message_id).join(", ");
                    a.Logger.debug(`available notifications (${t.length}): ${r}`),
                    t.forEach(t=>{
                        try {
                            t.data && t.data.message_id === e && (a.Logger.debug(`closing notification ${e}`),
                            t.close()),
                            this.isServiceNotification(t) && (a.Logger.debug("closing service notification"),
                            t.close())
                        } catch (e) {
                            return this.errorHandler.sendError("Notification close exception", e, u.CLOSE_NOTIFICATION),
                            !1
                        }
                    }
                    )
                }
                )
            }
            wait(e) {
                return new Promise(t=>{
                    setTimeout(t, e)
                }
                )
            }
            showDefaultNotification() {
                return n(this, void 0, void 0, function*() {
                    let e;
                    a.Logger.debug("show last notification from db");
                    try {
                        e = yield this.db.getLastNotificationFromHistory()
                    } catch (e) {
                        a.Logger.error("Couldn't retrieve last notification from db, displaying default one")
                    }
                    return e || ((e = this.defaultNotification).silent = !0),
                    e.tag = this.defaultNotification.tag,
                    e.data = Object.assign(Object.assign({}, e.data), {
                        message_id: Date.now().toString()
                    }),
                    a.Logger.debug(`Displaying last notification from db: ${JSON.stringify(e)}`),
                    this.displayNotification(e)
                })
            }
            getSubscription() {
                return self.registration.pushManager.getSubscription().then(e=>{
                    if (!e)
                        throw new Error("No subscription for this user");
                    return o.prepareSubscription(e)
                }
                ).catch(e=>(this.errorHandler.sendError("Error during getSubscription()", e, u.SUBSCRIPTION, {}),
                Promise.reject(e)))
            }
            canSendAnalytics(e) {
                return e.tag !== this.defaultNotification.tag
            }
            executeClickAction(e, t=i.NotificationActionType.open) {
                return e ? "open" === t ? self.clients.openWindow(e) : self.clients.matchAll({
                    type: "window"
                }).then(r=>{
                    for (const t of r)
                        if (t.url === e)
                            return t.focus();
                    if (!t)
                        return self.clients.openWindow(e)
                }
                ) : Promise.resolve()
            }
            saveNotification(e) {
                return this.db.saveNotificationToHistory(e).catch(e=>{
                    this.errorHandler.sendError("Save to history", e, u.SAVE_HISTORY, {}),
                    a.Logger.error(e)
                }
                )
            }
            getNotifications(e, t) {
                try {
                    if (e.data) {
                        const t = e.data.json();
                        if (t)
                            return Promise.resolve([this.parseNotification(t)])
                    }
                } catch (e) {
                    a.Logger.error("error parsing notification data from push event")
                }
                return this.fetchNotifications(t)
            }
            fetchNotifications(e) {
                return this.api.getLastMessage(e).then(e=>e.status < 200 || e.status >= 300 ? (this.errorHandler.sendError("Last message", new Error("fetch error"), u.FETCH_LAST_MESSAGE),
                Promise.reject(`Last message response error status: ${e.status}, ${e.statusText}`)) : e.json().then(e=>!e || e instanceof Array && 0 == e.length ? (this.errorHandler.sendError("Last message", new Error("No data from last message"), u.EMPTY_LAST_MESSAGE),
                Promise.reject(`No notification data in last message response: ${JSON.stringify(e)}`)) : Promise.resolve(e instanceof Array ? e.map(e=>this.parseNotification(e)) : [this.parseNotification(e)])).catch(e=>(this.errorHandler.sendError("Last message", new Error("Failed to parse"), u.PARSE_LAST_MESSAGE),
                Promise.reject("Couldn't parse last message"))))
            }
            parseNotification(e) {
                if (e.tl && (e = this.convertNotificationToNewFormat(e)),
                !e.data && !e.notification.data)
                    throw this.errorHandler.sendError("Parse notification", new Error("No data property"), u.PARSE_NOTIFICATION_NO_DATA),
                    new Error("No data property in notification json");
                return e.notification && (e = this.parseNotification(e.notification.data)),
                e.data.source = this.normalNotificationTag,
                e
            }
            convertNotificationToNewFormat(e) {
                try {
                    const t = {
                        title: e.tl,
                        body: e.tx,
                        icon: this.getImageUrl(e.icon),
                        requireInteraction: !0,
                        silent: !1,
                        data: {
                            source: this.normalNotificationTag,
                            message_id: e.id,
                            url: e.redirect
                        }
                    };
                    e.badge && (t.badge = e.badge);
                    const r = this.getImageUrl(e.image);
                    return e.image && (t.image = r),
                    e.tag && (t.data.tag = e.tag),
                    e.buttons && (t.actions = e.buttons.map((e,t)=>{
                        const r = {
                            title: e.title,
                            action: e.id
                        }
                          , n = this.getImageUrl(e.icon);
                        return n && (r.icon = n),
                        r
                    }
                    ),
                    t.data.buttons = {},
                    e.buttons.forEach(e=>{
                        t.data.buttons[e.id] = {
                            url: e.url ? encodeURI(e.url) : null,
                            request: e.request ? encodeURI(e.request) : null,
                            action: i.NotificationActionType.open,
                            id: e.id
                        }
                    }
                    )),
                    t
                } catch (e) {
                    throw this.errorHandler.sendError("Convert message", e, u.CONVERT),
                    e
                }
            }
            getImageUrl(e) {
                return e && "null" !== e && "undefined" !== e ? e : null
            }
        }
        t.PushWorker = l,
        l.globalKey = "push",
        l.defaultNotifacationKey = "defaultNotification"
    },
    "./src/sw-template/modules/push/utils/api.ts": function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        const n = r("./src/sw-template/utils/api.ts");
        t.PushApiService = class extends n.ApiService {
            constructor(e, t, r) {
                super(e, t, r)
            }
            getLastMessage(e) {
                return this.fetch("/api/v2/callbacks/push/fetch/", "get", {
                    regID: e.regID
                })
            }
            sendReceiveStat(e, t) {
                return this.fetch(`/api/v2/callbacks/push/${e}/receive`, "get", {
                    regID: t.regID
                })
            }
            sendReadStat(e, t, r=null) {
                return this.fetch(`/api/v2/callbacks/push/${e}/click`, "get", {
                    regID: t.regID,
                    buttonId: r
                })
            }
            sendReadStatWithTag(e, t, r, n=null) {
                return this.fetch(`/api/v2/callbacks/push/${e}/click`, "get", {
                    regID: t.regID,
                    buttonId: n,
                    pushTag: r
                })
            }
            sendCloseStat(e, t) {
                return this.fetch(`/api/v2/callbacks/push/${e}/close`, "get", {
                    regID: t.regID
                })
            }
        }
    },
    "./src/sw-template/modules/push/utils/database.ts": function(e, t, r) {
        "use strict";
        var n = this && this.__awaiter || function(e, t, r, n) {
            return new (r || (r = Promise))(function(i, o) {
                function s(e) {
                    try {
                        c(n.next(e))
                    } catch (e) {
                        o(e)
                    }
                }
                function a(e) {
                    try {
                        c(n.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }
                function c(e) {
                    var t;
                    e.done ? i(e.value) : (t = e.value,
                    t instanceof r ? t : new r(function(e) {
                        e(t)
                    }
                    )).then(s, a)
                }
                c((n = n.apply(e, t || [])).next())
            }
            )
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        const i = r("./src/sw-template/utils/database.ts")
          , o = r("./node_modules/idb/build/esm/index.js");
        var s;
        r("./src/sw-template/modules/push/utils/tables.ts"),
        i.DB_TABLES.GET_NOTIFICATION = 150,
        i.DB_TABLES.GET_NOTIFICATION_CODE = 151,
        function(e) {
            e.displayDate = "display_date"
        }(s || (s = {}));
        t.PushDatabase = class extends i.Database {
            constructor(e) {
                super(e),
                this.dbName = "sw_push_db",
                this.maxHistoryLength = 20
            }
            onupgradeneeded(e) {
                const t = super.onupgradeneeded(e);
                return t.createObjectStore(i.DB_TABLES.history, {
                    keyPath: "id"
                }).createIndex(s.displayDate, s.displayDate, {
                    unique: !1
                }),
                t
            }
            saveNotificationToHistory(e) {
                return e.data && e.data.message_id ? (e.data.isInteracted = !1,
                this.count(i.DB_TABLES.history).then(t=>(t <= this.maxHistoryLength ? Promise.resolve() : this.removeOldestNotificationFromHistory()).then(()=>this.put(i.DB_TABLES.history, Object.assign(Object.assign({}, e), {
                    id: e.data.message_id,
                    [s.displayDate]: new Date
                }))))) : Promise.reject("No notification messageId to store in db")
            }
            removeOldestNotificationFromHistory() {
                return this.getNotification(!1).then(e=>e ? this.remove(i.DB_TABLES.history, e.id) : Promise.reject("Couldn't retrieve oldest notification from db"))
            }
            getLastNotificationFromHistory() {
                return this.getNotification(!0)
            }
            getNotification(e=!1) {
                return n(this, void 0, void 0, function*() {
                    return yield this.open(),
                    new Promise((t,r)=>{
                        try {
                            const n = this.db.transaction([i.DB_TABLES.history], "readonly").objectStore(i.DB_TABLES.history).index(s.displayDate).openCursor(null, e ? "prev" : "next");
                            n.onsuccess = (()=>{
                                t(n.result && n.result.value || null)
                            }
                            ),
                            n.onerror = (()=>{
                                this.logOperationError(`GET ${e ? "last" : "first"} from history`, n.error, i.ERROR_CODES.GET_NOTIFICATION, !0),
                                r(n.error)
                            }
                            )
                        } catch (t) {
                            this.logOperationError(`GET ${e ? "last" : "first"} from history`, t, i.ERROR_CODES.GET_NOTIFICATION_CODE),
                            r(t)
                        }
                    }
                    )
                })
            }
            interactWithPushMethod(e, t) {
                return n(this, void 0, void 0, function*() {
                    return yield this.open(),
                    new Promise((e,r)=>{
                        try {
                            const n = this.db.transaction([i.DB_TABLES.history], "readwrite").objectStore(i.DB_TABLES.history)
                              , o = n.get(t);
                            o.onsuccess = (()=>{
                                let t = o.result;
                                t.data.isInteracted = !0,
                                n.put(t),
                                e(o.result && o.result.value || null)
                            }
                            ),
                            o.onerror = (()=>{
                                console.log("error"),
                                r(o.error)
                            }
                            )
                        } catch (e) {
                            console.log(e),
                            r(e)
                        }
                    }
                    )
                })
            }
        }
        ,
        t.interactWithPush = ((e,t)=>n(void 0, void 0, void 0, function*() {
            let r = yield e.indexedDB.open("sw_push_db", 2);
            r.onsuccess = (e=>{
                let i = r.result;
                n(t, i)
            }
            ),
            r.onupgradeneeded = (e=>{
                e.target.result.createObjectStore("History", {
                    keyPath: "id"
                }).createIndex("display_date", "display_date", {
                    unique: !1
                })
            }
            );
            const n = (e,t)=>{
                let r = t.transaction(["History"], "readwrite");
                r.oncomplete = function(e) {}
                ,
                r.onerror = function(e) {}
                ;
                let n = r.objectStore("History")
                  , i = n.get(e);
                i.onsuccess = function(e) {
                    let t = i.result;
                    t.data.isInteracted = !0,
                    n.put(t)
                }
            }
        })),
        t.clearHistory = (e=>{
            let t = e.indexedDB.open("sw_push_db", 2);
            t.onsuccess = (e=>{
                let r = t.result.transaction(["History"], "readwrite");
                r.oncomplete = function(e) {}
                ,
                r.onerror = function(e) {}
                ,
                r.objectStore("History").clear().onsuccess = function(e) {}
            }
            ),
            t.onupgradeneeded = (e=>{
                e.target.result.createObjectStore("History", {
                    keyPath: "id"
                }).createIndex("display_date", "display_date", {
                    unique: !1
                })
            }
            )
        }
        ),
        t.getAllNotifications = (()=>n(void 0, void 0, void 0, function*() {
            const e = yield o.openDB("sw_push_db", 2, {
                upgrade(e, t, r, n) {
                    e.createObjectStore("History", {
                        keyPath: "id"
                    }).createIndex("display_date", "display_date", {
                        unique: !1
                    })
                }
            });
            return yield e.getAll("History")
        }))
    },
    "./src/sw-template/modules/push/utils/tables.ts": function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        r("./src/sw-template/utils/database.ts").DB_TABLES.history = "History"
    },
    "./src/sw-template/utils/api.ts": function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.ApiService = class {
            constructor(e, t, r) {
                this.apiUrl = e,
                this.appKey = t,
                this.version = r
            }
            fetch(e, t="get", r, n) {
                const i = {
                    method: t
                };
                r = Object.assign(this._getBasicRequestParams(), r);
                const o = this._getRequestUrl(e, r);
                return n && ("object" == typeof n && (n = JSON.stringify(n)),
                i.body = n),
                self.fetch(o.toString(), i)
            }
            _getRequestUrl(e, t={}) {
                let r;
                e.startsWith("http") || (e = `${this.apiUrl}${e}`),
                r = new URL(e);
                for (const e in t)
                    t.hasOwnProperty(e) && r.searchParams.append(e, t[e]);
                return r
            }
            _getBasicRequestParams() {
                return {
                    appKey: this.appKey,
                    version: this.version
                }
            }
        }
    },
    "./src/sw-template/utils/database.ts": function(e, t, r) {
        "use strict";
        var n = this && this.__awaiter || function(e, t, r, n) {
            return new (r || (r = Promise))(function(i, o) {
                function s(e) {
                    try {
                        c(n.next(e))
                    } catch (e) {
                        o(e)
                    }
                }
                function a(e) {
                    try {
                        c(n.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }
                function c(e) {
                    var t;
                    e.done ? i(e.value) : (t = e.value,
                    t instanceof r ? t : new r(function(e) {
                        e(t)
                    }
                    )).then(s, a)
                }
                c((n = n.apply(e, t || [])).next())
            }
            )
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        const i = r("./src/sw-template/utils/logger.ts");
        var o, s;
        !function(e) {
            e.ids = "Ids",
            e.settings = "Settings"
        }(o = t.DB_TABLES || (t.DB_TABLES = {})),
        function(e) {
            e[e.OPEN = 100] = "OPEN",
            e[e.OPEN_BLOCKED = 101] = "OPEN_BLOCKED",
            e[e.PUT = 102] = "PUT",
            e[e.PUT_CODE = 103] = "PUT_CODE",
            e[e.COUNT = 104] = "COUNT",
            e[e.COUNT_CODE = 105] = "COUNT_CODE",
            e[e.GET = 107] = "GET",
            e[e.GET_CODE = 107] = "GET_CODE",
            e[e.REMOVE = 108] = "REMOVE",
            e[e.REMOVE_CODE = 109] = "REMOVE_CODE",
            e[e.GET_ALL = 110] = "GET_ALL",
            e[e.GET_ALL_CODE = 111] = "GET_ALL_CODE"
        }(s = t.ERROR_CODES || (t.ERROR_CODES = {}));
        t.Database = class {
            constructor(e) {
                this.errorHandler = e,
                this.version = 2,
                this.dbName = "sw_db"
            }
            open(e=this.dbName, t=this.version) {
                return self.indexedDB ? this.db ? Promise.resolve(this.db) : new Promise((t,r)=>{
                    let n;
                    (n = self.indexedDB.open(e, this.version)).onerror = (()=>{
                        this.errorHandler.sendError("Client sw db", n.error, s.OPEN),
                        r(n.error)
                    }
                    ),
                    n.onblocked = (()=>{
                        this.errorHandler.sendError("Client sw db", n.error, s.OPEN_BLOCKED),
                        r(n.error)
                    }
                    ),
                    n.onupgradeneeded = (e=>this.onupgradeneeded(e)),
                    n.onsuccess = (()=>{
                        this.db = n.result,
                        t(this.db)
                    }
                    )
                }
                ) : Promise.reject(new Error("IndexedDB not supported"))
            }
            onupgradeneeded(e) {
                const t = e.target.result;
                return t.createObjectStore(o.ids, {
                    keyPath: "type"
                }),
                t.createObjectStore(o.settings, {
                    keyPath: "option"
                }),
                t
            }
            put(e, t) {
                return n(this, void 0, void 0, function*() {
                    return yield this.open(),
                    new Promise((r,n)=>{
                        try {
                            const i = this.db.transaction([e], "readwrite").objectStore(e).put(t);
                            i.onsuccess = (()=>{
                                r()
                            }
                            ),
                            i.onerror = (()=>{
                                this.logOperationError("PUT", i.error, s.PUT, !0),
                                n(i.error)
                            }
                            )
                        } catch (e) {
                            this.logOperationError("PUT", e, s.PUT_CODE),
                            n(e)
                        }
                    }
                    )
                })
            }
            count(e) {
                return n(this, void 0, void 0, function*() {
                    return yield this.open(),
                    new Promise((t,r)=>{
                        try {
                            const n = this.db.transaction([e], "readonly").objectStore(e).count();
                            n.onsuccess = (()=>{
                                t(n.result)
                            }
                            ),
                            n.onerror = (e=>{
                                this.logOperationError("COUNT", n.error, s.COUNT, !0),
                                r(n.error)
                            }
                            )
                        } catch (e) {
                            this.logOperationError("COUNT", e, s.COUNT_CODE),
                            r(e)
                        }
                    }
                    )
                })
            }
            get(e, t) {
                return n(this, void 0, void 0, function*() {
                    return yield this.open(),
                    new Promise((r,n)=>{
                        try {
                            const i = this.db.transaction([e], "readonly").objectStore(e).get(t);
                            i.onsuccess = (()=>{
                                r(i.result)
                            }
                            ),
                            i.onerror = (()=>{
                                this.logOperationError("GET", i.error, s.GET, !0),
                                n(i.error)
                            }
                            )
                        } catch (e) {
                            this.logOperationError("GET", e, s.GET_CODE),
                            n(e)
                        }
                    }
                    )
                })
            }
            remove(e, t) {
                return n(this, void 0, void 0, function*() {
                    return yield this.open(),
                    new Promise((r,n)=>{
                        try {
                            let i;
                            (i = t ? this.db.transaction([e], "readwrite").objectStore(e).delete(t) : this.db.transaction([e], "readwrite").objectStore(e).clear()).onsuccess = (()=>{
                                r(t)
                            }
                            ),
                            i.onerror = (()=>{
                                this.logOperationError("GET_ALL", i.error, s.REMOVE, !0),
                                n(i.error)
                            }
                            )
                        } catch (e) {
                            this.logOperationError("GET_ALL", e, s.REMOVE_CODE),
                            n(e)
                        }
                    }
                    )
                })
            }
            getAll(e) {
                return n(this, void 0, void 0, function*() {
                    return yield this.open(),
                    new Promise((t,r)=>{
                        try {
                            const n = {}
                              , i = this.db.transaction([e], "readonly").objectStore(e).openCursor();
                            i.onsuccess = (()=>{
                                const e = i.result;
                                e ? (n[e.key] = e.value,
                                e.continue()) : t(n)
                            }
                            ),
                            i.onerror = (()=>{
                                this.logOperationError("GET_ALL", i.error, s.GET_ALL, !0),
                                r(i.error)
                            }
                            )
                        } catch (e) {
                            this.logOperationError("GET_ALL", e, s.GET_ALL_CODE),
                            r(e)
                        }
                    }
                    )
                })
            }
            logOperationError(e, t, r, n=!1) {
                const o = `DB ${n ? " transaction" : ""} error ${e}`
                  , s = t;
                this.errorHandler.sendError(o, s, r),
                i.Logger.error(`${o}: ${s}`)
            }
        }
    },
    "./src/sw-template/utils/error-handler.ts": function(e, t, r) {
        "use strict";
        var n = this && this.__awaiter || function(e, t, r, n) {
            return new (r || (r = Promise))(function(i, o) {
                function s(e) {
                    try {
                        c(n.next(e))
                    } catch (e) {
                        o(e)
                    }
                }
                function a(e) {
                    try {
                        c(n.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }
                function c(e) {
                    var t;
                    e.done ? i(e.value) : (t = e.value,
                    t instanceof r ? t : new r(function(e) {
                        e(t)
                    }
                    )).then(s, a)
                }
                c((n = n.apply(e, t || [])).next())
            }
            )
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        const i = r("./src/sw-template/utils/index.ts")
          , o = r("./src/sw-template/utils/logger.ts");
        t.ErrorHandler = class {
            constructor(e, t) {
                this.api = e,
                this.moduleKey = t
            }
            sendError(e, t, r, s) {
                return n(this, void 0, void 0, function*() {
                    if (!s)
                        try {
                            s = i.prepareSubscription(yield self.registration.pushManager.getSubscription())
                        } catch (e) {
                            o.Logger.log("Couldn't retrieve subscription")
                        }
                    return Math.floor(Date.now() / 1e3),
                    this.moduleKey,
                    s.regID,
                    console.log(t)
                })
            }
            sendTrace(e, t, r) {
                return n(this, void 0, void 0, function*() {
                    if (!r)
                        try {
                            r = i.prepareSubscription(yield self.registration.pushManager.getSubscription())
                        } catch (e) {
                            o.Logger.log("Couldn't retrieve subscription")
                        }
                    Math.floor(Date.now() / 1e3),
                    this.moduleKey,
                    r.regID
                })
            }
        }
    },
    "./src/sw-template/utils/index.ts": function(e, t, r) {
        "use strict";
        var n = this && this.__awaiter || function(e, t, r, n) {
            return new (r || (r = Promise))(function(i, o) {
                function s(e) {
                    try {
                        c(n.next(e))
                    } catch (e) {
                        o(e)
                    }
                }
                function a(e) {
                    try {
                        c(n.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }
                function c(e) {
                    var t;
                    e.done ? i(e.value) : (t = e.value,
                    t instanceof r ? t : new r(function(e) {
                        e(t)
                    }
                    )).then(s, a)
                }
                c((n = n.apply(e, t || [])).next())
            }
            )
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        const i = r("./node_modules/idb/build/esm/index.js")
          , o = [/^https:\/\/fcm\.googleapis\.com\/fcm\/send\//, /^https:\/\/android\.googleapis\.com\/gcm\/send\//, /^https:\/\/updates\.push\.services\.mozilla\.com(?::443)?\//];
        function s(e=navigator) {
            var t = e.userAgent
              , r = t.match(/(opera|yabrowser|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i);
            return /trident/i.test(r[1]) ? "IE" : "CHROME" === r[1].toUpperCase() && null !== t.match(/\bOPR\/(\d+)/) ? "OPERA" : "CHROME" === r[1].toUpperCase() && null !== t.match(/\bYaBrowser\/(\d+)/) ? "YANDEX" : "CHROME" === r[1].toUpperCase() ? "CHROME" : r[2] ? r[1].toUpperCase() : e.appName.toUpperCase()
        }
        t.getSubscription = (()=>n(void 0, void 0, void 0, function*() {
            let e = null;
            try {
                const t = yield i.openDB("gravitec_client_db", 1, {
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
                    const r = yield t.get("Ids", "SubscriptionId");
                    r && r.value && (e = r.value)
                }
            } catch (e) {}
            return e
        })),
        t.prepareSubscriptionSW = function(e, t=navigator.userAgent, r=self) {
            const n = {
                regID: null,
                auth: null,
                p256dh: null,
                browser: null,
                subscriptionSpec: null,
                subscriptionStrategy: null,
                endpoint: null
            };
            try {
                for (const t of o)
                    t.test(e.endpoint) && Object.assign(n, {
                        regID: e.endpoint.split(t)[1]
                    });
                const {keys: t} = e.toJSON();
                Object.assign(n, {
                    auth: t.auth,
                    p256dh: t.p256dh,
                    browser: s(navigator),
                    subscriptionSpec: r._subscriptionSpec || 0,
                    subscriptionStrategy: r._subscriptionStrategy || 0,
                    endpoint: e.endpoint
                })
            } catch (e) {}
            return n
        }
        ,
        t.prepareSubscription = function(e) {
            const t = {
                regID: null,
                auth: null,
                p256dh: null,
                browser: null,
                subscriptionSpec: null,
                subscriptionStrategy: null
            };
            try {
                const {endpoint: r} = e;
                for (const e of o)
                    e.test(r) && Object.assign(t, {
                        regID: r.split(e)[1]
                    });
                const {keys: n} = e.toJSON();
                Object.assign(t, {
                    auth: n.auth,
                    p256dh: n.p256dh
                })
            } catch (e) {
                console.error(e)
            }
            return t
        }
        ,
        t.removeEmpty = function e(t) {
            return Object.keys(t).forEach(r=>t[r] && "object" == typeof t[r] && e(t[r]) || !t[r] && void 0 !== t[r] && delete t[r]),
            t
        }
        ,
        t.getOS = function() {
            let e;
            return -1 != navigator.appVersion.indexOf("Win") && (e = "Windows"),
            -1 != navigator.appVersion.indexOf("Mac") && (e = "MacOS"),
            -1 != navigator.appVersion.indexOf("X11") && (e = "Linux"),
            -1 != navigator.appVersion.indexOf("Linux") && (e = "Linux"),
            e
        }
    },
    "./src/sw-template/utils/logger.ts": function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.Logger = class {
            static log(e, ...t) {
                return console.log("🔔", e, ...t),
                e
            }
            static info(e, ...t) {
                return console.info("🔔", e, ...t),
                e
            }
            static warn(e, ...t) {
                return console.warn("🔔", e, ...t),
                e
            }
            static error(e, ...t) {
                return console.error("🔔", e, ...t),
                e
            }
            static debug(e, ...t) {
                return console.debug("🔔", e, ...t),
                e
            }
        }
    },
    "./src/sw-template/worker.ts": function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        const n = r("./src/sw-template/modules/main/index.ts")
          , i = r("./src/sw-template/modules/push/index.ts")
          , o = r("./src/sw-template/utils/index.ts");
        var s;
        !function(e) {
            e[e.PATCH = 0] = "PATCH"
        }(s || (s = {})),
        self.setGlobalUrl = ((e,t)=>{
            e && (self[e] = t.replace(/\/?$/, ""))
        }
        ),
        self.setGlobalUrl("hostUrl", "https://cdn.gravitec.net/sw"),
        self.setGlobalUrl("apiUrl", "https://api.gravitec.net");
        const a = "https://api.gravitec.net".includes("test") ? "https://test-uapi.gravitec.net" : "https://uapi.gravitec.net"
          , c = new URL(self.location.href);
        self.trackInactive = "true" === c.searchParams.get("track_inactive"),
        n.init(),
        i.init(),
        self.navigator.permissions && self.navigator.permissions.query({
            name: "notifications"
        }).then(function(e) {
            e.onchange = function() {
                "denied" === e.state && o.getSubscription().then(t=>(function(e) {
                    if (e)
                        return fetch(`${a}/api/sites/followers?&appKey=${self.appKey}&version=1.2.1`, {
                            method: "DELETE",
                            cache: "no-cache",
                            credentials: "same-origin",
                            headers: {
                                Accept: "*/*",
                                "Content-Type": "application/json",
                                "accept-encoding": "gzip, deflate"
                            },
                            redirect: "follow",
                            referrer: "no-referrer",
                            body: JSON.stringify(e)
                        })
                }
                )(t).then(()=>{
                    console.log("User decided to change his seettings. New permission: " + e.state)
                }
                ))
            }
        });
        const u = {
            AMP_SUBSCRIPTION_STATE: "amp-web-push-subscription-state",
            AMP_SUBSCRIBE: "amp-web-push-subscribe",
            AMP_UNSUBSCRIBE: "amp-web-push-unsubscribe"
        };
        function l(e, t) {
            self.clients.matchAll().then(r=>{
                for (let n = 0; n < r.length; n++) {
                    r[n].postMessage({
                        command: e,
                        payload: t
                    })
                }
            }
            )
        }
        function d(e) {
            const t = (e + "=".repeat((4 - e.length % 4) % 4)).replace(/\-/g, "+").replace(/_/g, "/")
              , r = atob(t)
              , n = new Uint8Array(r.length);
            for (let e = 0; e < r.length; ++e)
                n[e] = r.charCodeAt(e);
            return n
        }
        self.addEventListener("message", e=>{
            const {command: t} = e.data;
            switch (t) {
            case u.AMP_SUBSCRIPTION_STATE:
                !function() {
                    let e = null;
                    self.registration.pushManager.getSubscription().then(t=>(e = t,
                    t ? self.registration.pushManager.permissionState(t.options) : null)).then(t=>{
                        if (null == t)
                            l(u.AMP_SUBSCRIPTION_STATE, !1);
                        else {
                            const r = !!e && "granted" === t;
                            l(u.AMP_SUBSCRIPTION_STATE, r)
                        }
                    }
                    )
                }();
                break;
            case u.AMP_SUBSCRIBE:
                fetch(`${"https://cdn.gravitec.net/sw".slice(0, -3)}/sdk/web/configs?appKey=${self.appKey}`).then(e=>e.json().then(e=>{
                    const t = e.app.applicationServerKey;
                    self.registration.pushManager.subscribe({
                        userVisibleOnly: !0,
                        applicationServerKey: d(t)
                    }).then(e=>{
                        !function(e) {
                            if (e) {
                                const t = o.prepareSubscriptionSW(e);
                                fetch(`${a}/api/sites/followers?&appKey=${self.appKey}&version=1.2.1`, {
                                    method: "POST",
                                    cache: "no-cache",
                                    credentials: "same-origin",
                                    headers: {
                                        Accept: "*/*",
                                        "Content-Type": "application/json",
                                        "accept-encoding": "gzip, deflate"
                                    },
                                    redirect: "follow",
                                    referrer: "no-referrer",
                                    body: JSON.stringify(t)
                                }).then(e=>e.json())
                            }
                        }(e),
                        l(u.AMP_SUBSCRIBE, null)
                    }
                    )
                }
                ));
                break;
            case u.AMP_UNSUBSCRIBE:
                self.registration.pushManager.getSubscription().then(e=>e.unsubscribe()).then(()=>{
                    l(u.AMP_UNSUBSCRIBE, null)
                }
                )
            }
        }
        )
    },
    0: function(e, t, r) {
        e.exports = r("./src/sw-template/worker.ts")
    }
});
