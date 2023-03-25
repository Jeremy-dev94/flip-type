(()=>{
    "use strict";
    var t, e = {
        839: (t,e,i)=>{
            let s = null;
            class n {
                constructor() {
                    if (s)
                        return s;
                    this.fps = 65,
                    this.lastTimestamp = 0,
                    this.updateFunctions = [],
                    this.updateFunctionsLength = 0,
                    s = this,
                    this.init()
                }
                static getInstance() {
                    return s || (s = new n),
                    s
                }
                static add(t) {
                    n.getInstance().add(t)
                }
                static remove(t) {
                    n.getInstance().remove(t)
                }
                static reset() {
                    n.getInstance().reset()
                }
                init() {
                    this.animFunction = this.update.bind(this),
                    requestAnimationFrame(this.animFunction)
                }
                add(t) {
                    this.updateFunctions.push(t),
                    this.updateFunctionsLength = this.updateFunctions.length
                }
                remove(t) {
                    let e;
                    for (let i = 0; i < this.updateFunctionsLength; i++)
                        if (e = this.updateFunctions[i],
                        e === t) {
                            this.updateFunctions.splice(i, 1);
                            break
                        }
                    this.updateFunctionsLength = this.updateFunctions.length
                }
                update(t) {
                    if (requestAnimationFrame(this.animFunction),
                    t - this.lastTimestamp < 1e3 / this.fps)
                        return;
                    let e;
                    for (let i = 0; i < this.updateFunctionsLength; i++)
                        e = this.updateFunctions[i],
                        e(t);
                    this.lastTimestamp = t
                }
                reset() {
                    for (let t = 0; t < this.updateFunctionsLength; t++)
                        delete this.updateFunctions[t];
                    this.updateFunctions = [],
                    this.updateFunctions.length = 0,
                    this.updateFunctionsLength = 0
                }
            }
            class r {
                constructor() {
                    this.prevSize = {
                        w: 0,
                        h: 0
                    },
                    this.checkTime = 0,
                    this.interval = 500
                }
                check() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    const e = performance.now();
                    return !(e - this.checkTime < this.interval || (this.checkTime = e,
                    !t && (window.innerWidth === this.prevSize.w && window.innerHeight === this.prevSize.h || (this.prevSize.w = window.innerWidth,
                    this.prevSize.h = window.innerHeight,
                    0))))
                }
            }
            var o = i(365)
              , a = i(131)
              , h = i(9);
            const c = {
                width: 100,
                height: 100,
                halfWidth: 50,
                halfHeight: 50,
                sceneWidth: 2,
                sceneHeight: 2,
                fov: 60,
                cameraZ: 1e3,
                dpr: 1,
                aspectRatio: 1
            };
            var u = i(10)
              , d = i(309)
              , p = i(138)
              , l = i(881)
              , g = i(661)
              , m = i(557)
              , v = i(238)
              , w = i.n(v);
            let f = null;
            class _ {
                constructor() {
                    if (f)
                        return f;
                    this._uaParser = new (w()),
                    this._isDesktop = null,
                    this._isMobile = null,
                    this._isIos = null,
                    this._isAndroid = null,
                    this._isSafari = null,
                    this._device = null,
                    this._events = {
                        pointerdown: null,
                        pointermove: null,
                        pointerup: null
                    },
                    f = this
                }
                static getInstance() {
                    return f || (f = new _),
                    f
                }
                static logInfo() {
                    console.log("----------"),
                    console.log("Device"),
                    console.dir(_.getInstance()._uaParser.getDevice()),
                    console.log("----------"),
                    console.log("OS"),
                    console.dir(_.getInstance()._uaParser.getOS()),
                    console.log("----------"),
                    console.log("Browser"),
                    console.dir(_.getInstance()._uaParser.getBrowser()),
                    console.log("----------")
                }
                static get isDesktop() {
                    return _.getInstance().isDesktop
                }
                static get isMobile() {
                    return _.getInstance().isMobile
                }
                static get isIos() {
                    return _.getInstance().isIos
                }
                static get isAndroid() {
                    return _.getInstance().isAndroid
                }
                static get isSafari() {
                    return _.getInstance().isSafari
                }
                static get device() {
                    return _.getInstance().device
                }
                static get pointerdownEvent() {
                    return _.getInstance().pointerdownEvent
                }
                static get pointermoveEvent() {
                    return _.getInstance().pointermoveEvent
                }
                static get pointerupEvent() {
                    return _.getInstance().pointerupEvent
                }
                get isDesktop() {
                    if (this._isDesktop)
                        return this._isDesktop;
                    const t = this._uaParser.getDevice();
                    return this._isDesktop = void 0 === t.type,
                    this._isDesktop && _.isSafari && (this._isDesktop = !("ontouchstart"in document)),
                    this._isDesktop
                }
                get isMobile() {
                    if (this._isMobile)
                        return this._isMobile;
                    const t = this._uaParser.getDevice();
                    return this._isMobile = "mobile" === t.type || "tablet" === t.type,
                    !this._isMobile && _.isSafari && (this._isMobile = "ontouchstart"in document),
                    this._isMobile
                }
                get isIos() {
                    if (this._isIos)
                        return this._isIos;
                    const t = this._uaParser.getOS();
                    return this._isIos = t.name.toLowerCase().includes("ios"),
                    this._isIos
                }
                get isAndroid() {
                    if (this._isAndroid)
                        return this._isAndroid;
                    const t = this._uaParser.getOS();
                    return this._isAndroid = t.name.toLowerCase().includes("android"),
                    this._isAndroid
                }
                get isSafari() {
                    if (this._isSafari)
                        return this._isSafari;
                    const t = this._uaParser.getBrowser();
                    return this._isSafari = t.name.toLowerCase().includes("safari"),
                    this._isSafari
                }
                get device() {
                    return this._device || (_.isDesktop ? this._device = "desktop" : _.isMobile && (this._device = "mobile")),
                    this._device
                }
                get pointerdownEvent() {
                    return this._events.pointerdown || (this._events.pointerdown = this.isDesktop ? "pointerdown" : "touchstart"),
                    this._events.pointerdown
                }
                get pointermoveEvent() {
                    return this._events.pointermove || (this._events.pointermove = this.isDesktop ? "pointermove" : "touchmove"),
                    this._events.pointermove
                }
                get pointerupEvent() {
                    return this._events.pointerup || (this._events.pointerup = this.isDesktop ? "pointerup" : "touchend"),
                    this._events.pointerup
                }
            }
            let M = null;
            class y {
                constructor() {
                    if (M)
                        return M;
                    this.mouseX = 0,
                    this.mouseY = 0,
                    M = this,
                    this.init()
                }
                static getInstance() {
                    return M || (M = new y),
                    M
                }
                static get x() {
                    return y.getInstance().mouseX
                }
                static get y() {
                    return y.getInstance().mouseY
                }
                init() {
                    window.addEventListener(_.pointermoveEvent, this.onMouseMove.bind(this), {
                        capture: !0,
                        passive: !1
                    })
                }
                onMouseMove(t) {
                    t.preventDefault(),
                    this.mouseX = this.getMoveX(t),
                    this.mouseY = this.getMoveY(t)
                }
                getMoveX(t) {
                    return _.isDesktop ? t.pageX : t.changedTouches[0].pageX
                }
                getMoveY(t) {
                    return _.isDesktop ? t.pageY : t.changedTouches[0].pageY
                }
            }
            class I {
                static random(t, e) {
                    return void 0 === t ? Math.random() : void 0 === e ? Math.random() * t : t + Math.random() * (e - t)
                }
                static randomInt(t, e) {
                    return Math.floor(I.random(t, e))
                }
                static constrain(t, e, i) {
                    return Math.max(Math.min(t, i), e)
                }
                static map(t, e, i, s, n) {
                    return (t - e) / (i - e) * (n - s) + s
                }
                static radians(t) {
                    return t * (2 * Math.PI / 360)
                }
                static dist(t, e, i, s) {
                    return Math.sqrt((t - i) * (t - i) + (e - s) * (e - s))
                }
                static lerp(t, e, i) {
                    return t + (e - t) * i
                }
                static calcViewportFov(t, e) {
                    return 2 * Math.atan(t / e) * (180 / Math.PI)
                }
            }
            var b = i(457)
              , k = i(724)
              , x = i(173);
            class S {
                constructor(t, e, i) {
                    this.position = t,
                    this.prevPosition = t,
                    this.velocity = 0,
                    this.alphaSpeed = e,
                    this.omega = i
                }
                step(t) {
                    this.prevPosition = this.position;
                    const e = this.alphaSpeed * (1 / 60)
                      , i = this.velocity - (this.position - t) * (this.omega * this.omega * e)
                      , s = 1 + this.omega * e;
                    this.velocity = i / (s * s),
                    this.position += this.velocity
                }
                reset() {
                    this.position = 0,
                    this.velocity = 0
                }
            }
            class F extends b.K {
                constructor(t) {
                    let {size: e, position: i, textures: s} = t;
                    super(),
                    this.geometry = new k.D(e,e,.15 * e);
                    const n = [];
                    for (let t = 0; t < 6; t++)
                        n.push(new x.v({
                            map: s[t],
                            transparent: !1
                        }));
                    this.material = n,
                    this.position.copy(i),
                    this.tween = new S(0,15,.2),
                    this.targetRot = 0,
                    this.isAnimating = !1
                }
                async animate(t, e) {
                    this.isAnimating = !0;
                    const i = Math.ceil(.025 * t);
                    this.targetRot += e * i,
                    await (1,
                    new Promise((t=>{
                        setTimeout((()=>{
                            t()
                        }
                        ), 1e3)
                    }
                    ))),
                    this.isAnimating = !1
                }
                update() {
                    this.tween.step(this.targetRot),
                    this.rotation.y = this.tween.position * Math.PI
                }
            }
            class C extends u.Z {
                constructor() {
                    super(),
                    this.casts = [],
                    this.rotation.x = .32 * -Math.PI,
                    this.rotation.z = .1 * Math.PI,
                    this.raycaster = new m.i,
                    this.mouse = new p.F,
                    this.prevX = 0,
                    this.prevY = 0
                }
                create() {
                    const t = window.innerWidth >= 960 ? 20 : 10
                      , e = .01
                      , i = 2.8 / t - e
                      , s = this.createTexture({
                        w: 64,
                        h: Math.ceil(9.6)
                    })
                      , n = this.createTexture({
                        w: Math.ceil(9.6),
                        h: 64
                    })
                      , r = [];
                    for (let t = 0; t < 26; t++)
                        r.push(this.createTexture({
                            w: 64,
                            h: 64,
                            char: String.fromCharCode(65 + t)
                        }));
                    for (let o = 0; o < t; o++)
                        for (let a = 0; a < t; a++) {
                            const t = .5 * i - 1.4 + o * (i + e)
                              , h = .5 * i - 1.4 + a * (i + e)
                              , c = r[I.randomInt(0, 26)]
                              , u = [n, n, s, s, r[I.randomInt(0, 26)], c]
                              , d = new F({
                                size: i,
                                position: new l.P(t,h,0),
                                textures: u
                            });
                            this.add(d),
                            this.casts.push(d)
                        }
                    this.numCasts = this.casts.length
                }
                createTexture(t) {
                    let {w: e, h: i, char: s=""} = t;
                    const n = document.createElement("canvas")
                      , r = e * c.dpr
                      , o = i * c.dpr;
                    n.width = r,
                    n.height = o;
                    const a = n.getContext("2d");
                    if (a.fillStyle = "#0000ff",
                    a.fillRect(0, 0, r, o),
                    a.lineWidth = 2 * c.dpr,
                    a.strokeStyle = "rgba(255, 255, 255, 0.9)",
                    a.strokeRect(0, 0, r, o),
                    "" !== s) {
                        const t = .8 * r;
                        a.textAlign = "center",
                        a.textBaseline = "middle",
                        a.fillStyle = "#fff",
                        a.font = `${t}px 'Array'`,
                        a.fillText(s, r / 2, o / 2)
                    }
                    const h = new d.R(n);
                    return h.needsUpdate = !1,
                    h.format = g.UCm,
                    h
                }
                update(t, e) {
                    this.mouse.x = y.x / window.innerWidth * 2 - 1,
                    this.mouse.y = 1 - y.y / window.innerHeight * 2,
                    this.raycaster.setFromCamera(this.mouse, e);
                    const i = this.raycaster.intersectObjects(this.children)
                      , s = y.x - this.prevX
                      , n = y.y - this.prevY
                      , r = Math.min(I.dist(0, 0, s, n), 100)
                      , o = Math.sign(s);
                    for (let t = 0; t < i.length; t++) {
                        const e = i[t].object;
                        e.isAnimating || e.animate(r, o)
                    }
                    for (let e = 0; e < this.numCasts; e++)
                        this.casts[e].update(t);
                    this.prevX = y.x,
                    this.prevY = y.y
                }
            }
            class P extends class {
                constructor() {
                    this.container = document.getElementById("CanvasContainer"),
                    this.setConfig(),
                    this.scene = new o.x,
                    this.camera = new a.i(-1,1,1,-1,.1,1e4),
                    this.camera.position.set(0, 0, 10),
                    this.renderer = new h.C({
                        canvas: this.container.querySelector("canvas"),
                        alpha: !1,
                        antialias: !0
                    }),
                    this.renderer.setClearColor(13428479),
                    this.renderer.setSize(c.width, c.height),
                    this.renderer.setPixelRatio(c.dpr)
                }
                setConfig() {
                    const {width: t, height: e} = this.container.getBoundingClientRect();
                    c.dpr = Math.min(window.devicePixelRatio, 2),
                    c.width = t,
                    c.height = e,
                    c.halfWidth = c.width / 2,
                    c.halfHeight = c.height / 2,
                    c.aspectRatio = c.width / c.height
                }
                resizeScene() {
                    window.innerWidth > window.innerHeight ? (this.camera.left = -1,
                    this.camera.right = 1,
                    this.camera.top = 1 / c.aspectRatio,
                    this.camera.bottom = -1 / c.aspectRatio,
                    c.sceneWidth = 2,
                    c.sceneHeight = 2 / c.aspectRatio) : (this.camera.left = -1 * c.aspectRatio,
                    this.camera.right = 1 * c.aspectRatio,
                    this.camera.top = 1,
                    this.camera.bottom = -1,
                    c.sceneWidth = 2 * c.aspectRatio,
                    c.sceneHeight = 2),
                    this.camera.aspect = c.aspectRatio,
                    this.camera.updateProjectionMatrix(),
                    this.renderer.setSize(c.width, c.height)
                }
            }
            {
                constructor() {
                    super(),
                    this.resizeChecker = new r,
                    this.init()
                }
                async init() {
                    const t = new FontFace("Array","url(./fonts/Array-Regular.woff2)")
                      , e = [t.load()];
                    await Promise.all(e),
                    document.fonts.add(t),
                    this.typo = new C,
                    this.scene.add(this.typo),
                    this.resize(),
                    this.typo.create(),
                    n.add(this.update.bind(this))
                }
                resize() {
                    this.setConfig(),
                    this.resizeScene()
                }
                update(t) {
                    this.resizeChecker.check() && this.resize();
                    const e = .001 * t;
                    this.typo.update(e, this.camera),
                    this.renderer.render(this.scene, this.camera)
                }
            }
            document.addEventListener("DOMContentLoaded", (()=>{
                new P
            }
            ))
        }
    }, i = {};
    function s(t) {
        var n = i[t];
        if (void 0 !== n)
            return n.exports;
        var r = i[t] = {
            exports: {}
        };
        return e[t].call(r.exports, r, r.exports, s),
        r.exports
    }
    s.m = e,
    s.amdO = {},
    t = [],
    s.O = (e,i,n,r)=>{
        if (!i) {
            var o = 1 / 0;
            for (u = 0; u < t.length; u++) {
                for (var [i,n,r] = t[u], a = !0, h = 0; h < i.length; h++)
                    (!1 & r || o >= r) && Object.keys(s.O).every((t=>s.O[t](i[h]))) ? i.splice(h--, 1) : (a = !1,
                    r < o && (o = r));
                if (a) {
                    t.splice(u--, 1);
                    var c = n();
                    void 0 !== c && (e = c)
                }
            }
            return e
        }
        r = r || 0;
        for (var u = t.length; u > 0 && t[u - 1][2] > r; u--)
            t[u] = t[u - 1];
        t[u] = [i, n, r]
    }
    ,
    s.n = t=>{
        var e = t && t.__esModule ? ()=>t.default : ()=>t;
        return s.d(e, {
            a: e
        }),
        e
    }
    ,
    s.d = (t,e)=>{
        for (var i in e)
            s.o(e, i) && !s.o(t, i) && Object.defineProperty(t, i, {
                enumerable: !0,
                get: e[i]
            })
    }
    ,
    s.o = (t,e)=>Object.prototype.hasOwnProperty.call(t, e),
    (()=>{
        var t = {
            179: 0
        };
        s.O.j = e=>0 === t[e];
        var e = (e,i)=>{
            var n, r, [o,a,h] = i, c = 0;
            if (o.some((e=>0 !== t[e]))) {
                for (n in a)
                    s.o(a, n) && (s.m[n] = a[n]);
                if (h)
                    var u = h(s)
            }
            for (e && e(i); c < o.length; c++)
                r = o[c],
                s.o(t, r) && t[r] && t[r][0](),
                t[r] = 0;
            return s.O(u)
        }
          , i = globalThis.webpackChunk_008_flip_type = globalThis.webpackChunk_008_flip_type || [];
        i.forEach(e.bind(null, 0)),
        i.push = e.bind(null, i.push.bind(i))
    }
    )();
    var n = s.O(void 0, [736], (()=>s(839)));
    n = s.O(n)
}
)();
