(globalThis.webpackChunk_008_flip_type = globalThis.webpackChunk_008_flip_type || []).push([[736], {
    929: (t,e,n)=>{
        "use strict";
        n.d(e, {
            V: ()=>a
        });
        var i = n(203)
          , r = n(353);
        class a extends r.T {
            constructor() {
                super(),
                this.type = "Camera",
                this.matrixWorldInverse = new i.y,
                this.projectionMatrix = new i.y,
                this.projectionMatrixInverse = new i.y
            }
            copy(t, e) {
                return super.copy(t, e),
                this.matrixWorldInverse.copy(t.matrixWorldInverse),
                this.projectionMatrix.copy(t.projectionMatrix),
                this.projectionMatrixInverse.copy(t.projectionMatrixInverse),
                this
            }
            getWorldDirection(t) {
                this.updateWorldMatrix(!0, !1);
                const e = this.matrixWorld.elements;
                return t.set(-e[8], -e[9], -e[10]).normalize()
            }
            updateMatrixWorld(t) {
                super.updateMatrixWorld(t),
                this.matrixWorldInverse.copy(this.matrixWorld).invert()
            }
            updateWorldMatrix(t, e) {
                super.updateWorldMatrix(t, e),
                this.matrixWorldInverse.copy(this.matrixWorld).invert()
            }
            clone() {
                return (new this.constructor).copy(this)
            }
        }
        a.prototype.isCamera = !0
    }
    ,
    131: (t,e,n)=>{
        "use strict";
        n.d(e, {
            i: ()=>r
        });
        var i = n(929);
        class r extends i.V {
            constructor(t=-1, e=1, n=1, i=-1, r=.1, a=2e3) {
                super(),
                this.type = "OrthographicCamera",
                this.zoom = 1,
                this.view = null,
                this.left = t,
                this.right = e,
                this.top = n,
                this.bottom = i,
                this.near = r,
                this.far = a,
                this.updateProjectionMatrix()
            }
            copy(t, e) {
                return super.copy(t, e),
                this.left = t.left,
                this.right = t.right,
                this.top = t.top,
                this.bottom = t.bottom,
                this.near = t.near,
                this.far = t.far,
                this.zoom = t.zoom,
                this.view = null === t.view ? null : Object.assign({}, t.view),
                this
            }
            setViewOffset(t, e, n, i, r, a) {
                null === this.view && (this.view = {
                    enabled: !0,
                    fullWidth: 1,
                    fullHeight: 1,
                    offsetX: 0,
                    offsetY: 0,
                    width: 1,
                    height: 1
                }),
                this.view.enabled = !0,
                this.view.fullWidth = t,
                this.view.fullHeight = e,
                this.view.offsetX = n,
                this.view.offsetY = i,
                this.view.width = r,
                this.view.height = a,
                this.updateProjectionMatrix()
            }
            clearViewOffset() {
                null !== this.view && (this.view.enabled = !1),
                this.updateProjectionMatrix()
            }
            updateProjectionMatrix() {
                const t = (this.right - this.left) / (2 * this.zoom)
                  , e = (this.top - this.bottom) / (2 * this.zoom)
                  , n = (this.right + this.left) / 2
                  , i = (this.top + this.bottom) / 2;
                let r = n - t
                  , a = n + t
                  , s = i + e
                  , o = i - e;
                if (null !== this.view && this.view.enabled) {
                    const t = (this.right - this.left) / this.view.fullWidth / this.zoom
                      , e = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
                    r += t * this.view.offsetX,
                    a = r + t * this.view.width,
                    s -= e * this.view.offsetY,
                    o = s - e * this.view.height
                }
                this.projectionMatrix.makeOrthographic(r, a, s, o, this.near, this.far),
                this.projectionMatrixInverse.copy(this.projectionMatrix).invert()
            }
            toJSON(t) {
                const e = super.toJSON(t);
                return e.object.zoom = this.zoom,
                e.object.left = this.left,
                e.object.right = this.right,
                e.object.top = this.top,
                e.object.bottom = this.bottom,
                e.object.near = this.near,
                e.object.far = this.far,
                null !== this.view && (e.object.view = Object.assign({}, this.view)),
                e
            }
        }
        r.prototype.isOrthographicCamera = !0
    }
    ,
    661: (t,e,n)=>{
        "use strict";
        n.d(e, {
            UZH: ()=>i,
            PeU: ()=>r,
            tm_: ()=>a,
            S2y: ()=>s,
            _iA: ()=>o,
            ntZ: ()=>l,
            dwk: ()=>c,
            Wl3: ()=>u,
            _Li: ()=>h,
            ehD: ()=>d,
            esl: ()=>p,
            jFi: ()=>m,
            bdR: ()=>f,
            WMw: ()=>g,
            N4l: ()=>_,
            M5h: ()=>v,
            Xaj: ()=>x,
            bGH: ()=>y,
            Wbm: ()=>b,
            rOj: ()=>M,
            r_: ()=>S,
            Sm8: ()=>w,
            c8b: ()=>T,
            ghN: ()=>E,
            KhW: ()=>A,
            iWC: ()=>L,
            k74: ()=>R,
            LgZ: ()=>C,
            fSK: ()=>P,
            Hy8: ()=>D,
            Vdb: ()=>N,
            Wpd: ()=>I,
            RlZ: ()=>U,
            BVF: ()=>F,
            Se2: ()=>O,
            Zr5: ()=>z,
            vCF: ()=>B,
            eD: ()=>G,
            ksN: ()=>H,
            w$m: ()=>k,
            M6v: ()=>V,
            Ns1: ()=>W,
            qhX: ()=>X,
            NDo: ()=>q,
            uL9: ()=>j,
            EoG: ()=>Y,
            CdI: ()=>Z,
            YGz: ()=>K,
            LY2: ()=>J,
            dZ3: ()=>Q,
            xfE: ()=>$,
            fY$: ()=>tt,
            vxC: ()=>et,
            dSO: ()=>nt,
            Bf4: ()=>it,
            g8_: ()=>rt,
            SVc: ()=>at,
            rpg: ()=>st,
            uWy: ()=>ot,
            OoA: ()=>lt,
            TyD: ()=>ct,
            YLQ: ()=>ut,
            aH4: ()=>ht,
            wem: ()=>dt,
            qyh: ()=>pt,
            D1R: ()=>mt,
            ywz: ()=>ft,
            T95: ()=>gt,
            iAb: ()=>_t,
            LsT: ()=>vt,
            Kz5: ()=>xt,
            JQ4: ()=>yt,
            VzW: ()=>bt,
            cLu: ()=>Mt,
            k0A: ()=>St,
            irR: ()=>wt,
            XNv: ()=>Tt,
            wJv: ()=>Et,
            OTo: ()=>At,
            UCm: ()=>Lt,
            wk1: ()=>Rt,
            Y8D: ()=>Ct,
            cRx: ()=>Pt,
            qkB: ()=>Dt,
            brP: ()=>Nt,
            hEm: ()=>It,
            D9w: ()=>Ut,
            av9: ()=>Ft,
            CtA: ()=>Ot,
            F5G: ()=>zt,
            E2K: ()=>Bt,
            wuA: ()=>Gt,
            BFQ: ()=>Ht,
            v3W: ()=>kt,
            ILR: ()=>Vt,
            _AM: ()=>Wt,
            vCx: ()=>Xt,
            eaV: ()=>qt,
            CaW: ()=>jt,
            fto: ()=>Yt,
            l0P: ()=>Zt,
            ekQ: ()=>Kt,
            ptH: ()=>Jt,
            jZA: ()=>Qt,
            y2t: ()=>$t,
            gi4: ()=>te,
            Djp: ()=>ee,
            BG$: ()=>ne,
            NYV: ()=>ie,
            xJs: ()=>re,
            pKu: ()=>ae,
            GG6: ()=>se,
            Gih: ()=>oe,
            FUD: ()=>le,
            iiP: ()=>ce,
            SvJ: ()=>ue,
            bsb: ()=>he,
            APR: ()=>de,
            Abz: ()=>pe,
            v6B: ()=>me,
            pnl: ()=>fe,
            OS$: ()=>ge,
            _wO: ()=>_e,
            bcs: ()=>ve,
            Y5S: ()=>xe,
            Wso: ()=>ye,
            p1$: ()=>be,
            I0h: ()=>Me,
            Yjz: ()=>Se,
            ePn: ()=>we,
            HBG: ()=>Te,
            rnI: ()=>Ee,
            knz: ()=>Ae,
            z81: ()=>Le,
            mSO: ()=>Re,
            IOt: ()=>Ce,
            PA7: ()=>Pe,
            x5V: ()=>De,
            cum: ()=>Ne,
            W2J: ()=>Ie,
            LSk: ()=>Ue
        });
        const i = "136"
          , r = 0
          , a = 1
          , s = 2
          , o = 1
          , l = 2
          , c = 3
          , u = 0
          , h = 1
          , d = 2
          , p = 1
          , m = 0
          , f = 1
          , g = 2
          , _ = 3
          , v = 4
          , x = 5
          , y = 100
          , b = 101
          , M = 102
          , S = 103
          , w = 104
          , T = 200
          , E = 201
          , A = 202
          , L = 203
          , R = 204
          , C = 205
          , P = 206
          , D = 207
          , N = 208
          , I = 209
          , U = 210
          , F = 0
          , O = 1
          , z = 2
          , B = 3
          , G = 4
          , H = 5
          , k = 6
          , V = 7
          , W = 0
          , X = 1
          , q = 2
          , j = 0
          , Y = 1
          , Z = 2
          , K = 3
          , J = 4
          , Q = 5
          , $ = 300
          , tt = 301
          , et = 302
          , nt = 303
          , it = 304
          , rt = 306
          , at = 307
          , st = 1e3
          , ot = 1001
          , lt = 1002
          , ct = 1003
          , ut = 1004
          , ht = 1005
          , dt = 1006
          , pt = 1007
          , mt = 1008
          , ft = 1009
          , gt = 1010
          , _t = 1011
          , vt = 1012
          , xt = 1013
          , yt = 1014
          , bt = 1015
          , Mt = 1016
          , St = 1017
          , wt = 1018
          , Tt = 1019
          , Et = 1020
          , At = 1021
          , Lt = 1022
          , Rt = 1023
          , Ct = 1024
          , Pt = 1025
          , Dt = 1026
          , Nt = 1027
          , It = 1028
          , Ut = 1029
          , Ft = 1030
          , Ot = 1031
          , zt = 1032
          , Bt = 1033
          , Gt = 33776
          , Ht = 33777
          , kt = 33778
          , Vt = 33779
          , Wt = 35840
          , Xt = 35841
          , qt = 35842
          , jt = 35843
          , Yt = 36196
          , Zt = 37492
          , Kt = 37496
          , Jt = 37808
          , Qt = 37809
          , $t = 37810
          , te = 37811
          , ee = 37812
          , ne = 37813
          , ie = 37814
          , re = 37815
          , ae = 37816
          , se = 37817
          , oe = 37818
          , le = 37819
          , ce = 37820
          , ue = 37821
          , he = 36492
          , de = 37840
          , pe = 37841
          , me = 37842
          , fe = 37843
          , ge = 37844
          , _e = 37845
          , ve = 37846
          , xe = 37847
          , ye = 37848
          , be = 37849
          , Me = 37850
          , Se = 37851
          , we = 37852
          , Te = 37853
          , Ee = 3e3
          , Ae = 3001
          , Le = 3200
          , Re = 3201
          , Ce = 0
          , Pe = 1
          , De = 7680
          , Ne = 519
          , Ie = 35044
          , Ue = "300 es"
    }
    ,
    140: (t,e,n)=>{
        "use strict";
        n.d(e, {
            a$: ()=>p,
            lC: ()=>d,
            ql: ()=>h,
            Tl: ()=>u
        });
        var i = n(223)
          , r = n(881)
          , a = n(138)
          , s = n(662)
          , o = n(661);
        const l = new r.P
          , c = new a.F;
        class u {
            constructor(t, e, n) {
                if (Array.isArray(t))
                    throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
                this.name = "",
                this.array = t,
                this.itemSize = e,
                this.count = void 0 !== t ? t.length / e : 0,
                this.normalized = !0 === n,
                this.usage = o.W2J,
                this.updateRange = {
                    offset: 0,
                    count: -1
                },
                this.version = 0
            }
            onUploadCallback() {}
            set needsUpdate(t) {
                !0 === t && this.version++
            }
            setUsage(t) {
                return this.usage = t,
                this
            }
            copy(t) {
                return this.name = t.name,
                this.array = new t.array.constructor(t.array),
                this.itemSize = t.itemSize,
                this.count = t.count,
                this.normalized = t.normalized,
                this.usage = t.usage,
                this
            }
            copyAt(t, e, n) {
                t *= this.itemSize,
                n *= e.itemSize;
                for (let i = 0, r = this.itemSize; i < r; i++)
                    this.array[t + i] = e.array[n + i];
                return this
            }
            copyArray(t) {
                return this.array.set(t),
                this
            }
            copyColorsArray(t) {
                const e = this.array;
                let n = 0;
                for (let i = 0, r = t.length; i < r; i++) {
                    let r = t[i];
                    void 0 === r && (console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined", i),
                    r = new s.I),
                    e[n++] = r.r,
                    e[n++] = r.g,
                    e[n++] = r.b
                }
                return this
            }
            copyVector2sArray(t) {
                const e = this.array;
                let n = 0;
                for (let i = 0, r = t.length; i < r; i++) {
                    let r = t[i];
                    void 0 === r && (console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined", i),
                    r = new a.F),
                    e[n++] = r.x,
                    e[n++] = r.y
                }
                return this
            }
            copyVector3sArray(t) {
                const e = this.array;
                let n = 0;
                for (let i = 0, a = t.length; i < a; i++) {
                    let a = t[i];
                    void 0 === a && (console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined", i),
                    a = new r.P),
                    e[n++] = a.x,
                    e[n++] = a.y,
                    e[n++] = a.z
                }
                return this
            }
            copyVector4sArray(t) {
                const e = this.array;
                let n = 0;
                for (let r = 0, a = t.length; r < a; r++) {
                    let a = t[r];
                    void 0 === a && (console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined", r),
                    a = new i.L),
                    e[n++] = a.x,
                    e[n++] = a.y,
                    e[n++] = a.z,
                    e[n++] = a.w
                }
                return this
            }
            applyMatrix3(t) {
                if (2 === this.itemSize)
                    for (let e = 0, n = this.count; e < n; e++)
                        c.fromBufferAttribute(this, e),
                        c.applyMatrix3(t),
                        this.setXY(e, c.x, c.y);
                else if (3 === this.itemSize)
                    for (let e = 0, n = this.count; e < n; e++)
                        l.fromBufferAttribute(this, e),
                        l.applyMatrix3(t),
                        this.setXYZ(e, l.x, l.y, l.z);
                return this
            }
            applyMatrix4(t) {
                for (let e = 0, n = this.count; e < n; e++)
                    l.x = this.getX(e),
                    l.y = this.getY(e),
                    l.z = this.getZ(e),
                    l.applyMatrix4(t),
                    this.setXYZ(e, l.x, l.y, l.z);
                return this
            }
            applyNormalMatrix(t) {
                for (let e = 0, n = this.count; e < n; e++)
                    l.x = this.getX(e),
                    l.y = this.getY(e),
                    l.z = this.getZ(e),
                    l.applyNormalMatrix(t),
                    this.setXYZ(e, l.x, l.y, l.z);
                return this
            }
            transformDirection(t) {
                for (let e = 0, n = this.count; e < n; e++)
                    l.x = this.getX(e),
                    l.y = this.getY(e),
                    l.z = this.getZ(e),
                    l.transformDirection(t),
                    this.setXYZ(e, l.x, l.y, l.z);
                return this
            }
            set(t, e=0) {
                return this.array.set(t, e),
                this
            }
            getX(t) {
                return this.array[t * this.itemSize]
            }
            setX(t, e) {
                return this.array[t * this.itemSize] = e,
                this
            }
            getY(t) {
                return this.array[t * this.itemSize + 1]
            }
            setY(t, e) {
                return this.array[t * this.itemSize + 1] = e,
                this
            }
            getZ(t) {
                return this.array[t * this.itemSize + 2]
            }
            setZ(t, e) {
                return this.array[t * this.itemSize + 2] = e,
                this
            }
            getW(t) {
                return this.array[t * this.itemSize + 3]
            }
            setW(t, e) {
                return this.array[t * this.itemSize + 3] = e,
                this
            }
            setXY(t, e, n) {
                return t *= this.itemSize,
                this.array[t + 0] = e,
                this.array[t + 1] = n,
                this
            }
            setXYZ(t, e, n, i) {
                return t *= this.itemSize,
                this.array[t + 0] = e,
                this.array[t + 1] = n,
                this.array[t + 2] = i,
                this
            }
            setXYZW(t, e, n, i, r) {
                return t *= this.itemSize,
                this.array[t + 0] = e,
                this.array[t + 1] = n,
                this.array[t + 2] = i,
                this.array[t + 3] = r,
                this
            }
            onUpload(t) {
                return this.onUploadCallback = t,
                this
            }
            clone() {
                return new this.constructor(this.array,this.itemSize).copy(this)
            }
            toJSON() {
                const t = {
                    itemSize: this.itemSize,
                    type: this.array.constructor.name,
                    array: Array.prototype.slice.call(this.array),
                    normalized: this.normalized
                };
                return "" !== this.name && (t.name = this.name),
                this.usage !== o.W2J && (t.usage = this.usage),
                0 === this.updateRange.offset && -1 === this.updateRange.count || (t.updateRange = this.updateRange),
                t
            }
        }
        u.prototype.isBufferAttribute = !0;
        class h extends u {
            constructor(t, e, n) {
                super(new Uint16Array(t), e, n)
            }
        }
        class d extends u {
            constructor(t, e, n) {
                super(new Uint32Array(t), e, n)
            }
        }
        (class extends u {
            constructor(t, e, n) {
                super(new Uint16Array(t), e, n)
            }
        }
        ).prototype.isFloat16BufferAttribute = !0;
        class p extends u {
            constructor(t, e, n) {
                super(new Float32Array(t), e, n)
            }
        }
    }
    ,
    46: (t,e,n)=>{
        "use strict";
        n.d(e, {
            u: ()=>b
        });
        var i = n(881)
          , r = n(138)
          , a = n(898)
          , s = n(406)
          , o = n(140)
          , l = n(699)
          , c = n(353)
          , u = n(203)
          , h = n(273)
          , d = n(43)
          , p = n(392);
        let m = 0;
        const f = new u.y
          , g = new c.T
          , _ = new i.P
          , v = new a.Z
          , x = new a.Z
          , y = new i.P;
        class b extends s.p {
            constructor() {
                super(),
                Object.defineProperty(this, "id", {
                    value: m++
                }),
                this.uuid = d.DO(),
                this.name = "",
                this.type = "BufferGeometry",
                this.index = null,
                this.attributes = {},
                this.morphAttributes = {},
                this.morphTargetsRelative = !1,
                this.groups = [],
                this.boundingBox = null,
                this.boundingSphere = null,
                this.drawRange = {
                    start: 0,
                    count: 1 / 0
                },
                this.userData = {}
            }
            getIndex() {
                return this.index
            }
            setIndex(t) {
                return Array.isArray(t) ? this.index = new ((0,
                p.uH)(t) > 65535 ? o.lC : o.ql)(t,1) : this.index = t,
                this
            }
            getAttribute(t) {
                return this.attributes[t]
            }
            setAttribute(t, e) {
                return this.attributes[t] = e,
                this
            }
            deleteAttribute(t) {
                return delete this.attributes[t],
                this
            }
            hasAttribute(t) {
                return void 0 !== this.attributes[t]
            }
            addGroup(t, e, n=0) {
                this.groups.push({
                    start: t,
                    count: e,
                    materialIndex: n
                })
            }
            clearGroups() {
                this.groups = []
            }
            setDrawRange(t, e) {
                this.drawRange.start = t,
                this.drawRange.count = e
            }
            applyMatrix4(t) {
                const e = this.attributes.position;
                void 0 !== e && (e.applyMatrix4(t),
                e.needsUpdate = !0);
                const n = this.attributes.normal;
                if (void 0 !== n) {
                    const e = (new h.V).getNormalMatrix(t);
                    n.applyNormalMatrix(e),
                    n.needsUpdate = !0
                }
                const i = this.attributes.tangent;
                return void 0 !== i && (i.transformDirection(t),
                i.needsUpdate = !0),
                null !== this.boundingBox && this.computeBoundingBox(),
                null !== this.boundingSphere && this.computeBoundingSphere(),
                this
            }
            applyQuaternion(t) {
                return f.makeRotationFromQuaternion(t),
                this.applyMatrix4(f),
                this
            }
            rotateX(t) {
                return f.makeRotationX(t),
                this.applyMatrix4(f),
                this
            }
            rotateY(t) {
                return f.makeRotationY(t),
                this.applyMatrix4(f),
                this
            }
            rotateZ(t) {
                return f.makeRotationZ(t),
                this.applyMatrix4(f),
                this
            }
            translate(t, e, n) {
                return f.makeTranslation(t, e, n),
                this.applyMatrix4(f),
                this
            }
            scale(t, e, n) {
                return f.makeScale(t, e, n),
                this.applyMatrix4(f),
                this
            }
            lookAt(t) {
                return g.lookAt(t),
                g.updateMatrix(),
                this.applyMatrix4(g.matrix),
                this
            }
            center() {
                return this.computeBoundingBox(),
                this.boundingBox.getCenter(_).negate(),
                this.translate(_.x, _.y, _.z),
                this
            }
            setFromPoints(t) {
                const e = [];
                for (let n = 0, i = t.length; n < i; n++) {
                    const i = t[n];
                    e.push(i.x, i.y, i.z || 0)
                }
                return this.setAttribute("position", new o.a$(e,3)),
                this
            }
            computeBoundingBox() {
                null === this.boundingBox && (this.boundingBox = new a.Z);
                const t = this.attributes.position
                  , e = this.morphAttributes.position;
                if (t && t.isGLBufferAttribute)
                    return console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".', this),
                    void this.boundingBox.set(new i.P(-1 / 0,-1 / 0,-1 / 0), new i.P(1 / 0,1 / 0,1 / 0));
                if (void 0 !== t) {
                    if (this.boundingBox.setFromBufferAttribute(t),
                    e)
                        for (let t = 0, n = e.length; t < n; t++) {
                            const n = e[t];
                            v.setFromBufferAttribute(n),
                            this.morphTargetsRelative ? (y.addVectors(this.boundingBox.min, v.min),
                            this.boundingBox.expandByPoint(y),
                            y.addVectors(this.boundingBox.max, v.max),
                            this.boundingBox.expandByPoint(y)) : (this.boundingBox.expandByPoint(v.min),
                            this.boundingBox.expandByPoint(v.max))
                        }
                } else
                    this.boundingBox.makeEmpty();
                (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this)
            }
            computeBoundingSphere() {
                null === this.boundingSphere && (this.boundingSphere = new l.a);
                const t = this.attributes.position
                  , e = this.morphAttributes.position;
                if (t && t.isGLBufferAttribute)
                    return console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".', this),
                    void this.boundingSphere.set(new i.P, 1 / 0);
                if (t) {
                    const n = this.boundingSphere.center;
                    if (v.setFromBufferAttribute(t),
                    e)
                        for (let t = 0, n = e.length; t < n; t++) {
                            const n = e[t];
                            x.setFromBufferAttribute(n),
                            this.morphTargetsRelative ? (y.addVectors(v.min, x.min),
                            v.expandByPoint(y),
                            y.addVectors(v.max, x.max),
                            v.expandByPoint(y)) : (v.expandByPoint(x.min),
                            v.expandByPoint(x.max))
                        }
                    v.getCenter(n);
                    let i = 0;
                    for (let e = 0, r = t.count; e < r; e++)
                        y.fromBufferAttribute(t, e),
                        i = Math.max(i, n.distanceToSquared(y));
                    if (e)
                        for (let r = 0, a = e.length; r < a; r++) {
                            const a = e[r]
                              , s = this.morphTargetsRelative;
                            for (let e = 0, r = a.count; e < r; e++)
                                y.fromBufferAttribute(a, e),
                                s && (_.fromBufferAttribute(t, e),
                                y.add(_)),
                                i = Math.max(i, n.distanceToSquared(y))
                        }
                    this.boundingSphere.radius = Math.sqrt(i),
                    isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this)
                }
            }
            computeTangents() {
                const t = this.index
                  , e = this.attributes;
                if (null === t || void 0 === e.position || void 0 === e.normal || void 0 === e.uv)
                    return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
                const n = t.array
                  , a = e.position.array
                  , s = e.normal.array
                  , l = e.uv.array
                  , c = a.length / 3;
                void 0 === e.tangent && this.setAttribute("tangent", new o.Tl(new Float32Array(4 * c),4));
                const u = e.tangent.array
                  , h = []
                  , d = [];
                for (let t = 0; t < c; t++)
                    h[t] = new i.P,
                    d[t] = new i.P;
                const p = new i.P
                  , m = new i.P
                  , f = new i.P
                  , g = new r.F
                  , _ = new r.F
                  , v = new r.F
                  , x = new i.P
                  , y = new i.P;
                function b(t, e, n) {
                    p.fromArray(a, 3 * t),
                    m.fromArray(a, 3 * e),
                    f.fromArray(a, 3 * n),
                    g.fromArray(l, 2 * t),
                    _.fromArray(l, 2 * e),
                    v.fromArray(l, 2 * n),
                    m.sub(p),
                    f.sub(p),
                    _.sub(g),
                    v.sub(g);
                    const i = 1 / (_.x * v.y - v.x * _.y);
                    isFinite(i) && (x.copy(m).multiplyScalar(v.y).addScaledVector(f, -_.y).multiplyScalar(i),
                    y.copy(f).multiplyScalar(_.x).addScaledVector(m, -v.x).multiplyScalar(i),
                    h[t].add(x),
                    h[e].add(x),
                    h[n].add(x),
                    d[t].add(y),
                    d[e].add(y),
                    d[n].add(y))
                }
                let M = this.groups;
                0 === M.length && (M = [{
                    start: 0,
                    count: n.length
                }]);
                for (let t = 0, e = M.length; t < e; ++t) {
                    const e = M[t]
                      , i = e.start;
                    for (let t = i, r = i + e.count; t < r; t += 3)
                        b(n[t + 0], n[t + 1], n[t + 2])
                }
                const S = new i.P
                  , w = new i.P
                  , T = new i.P
                  , E = new i.P;
                function A(t) {
                    T.fromArray(s, 3 * t),
                    E.copy(T);
                    const e = h[t];
                    S.copy(e),
                    S.sub(T.multiplyScalar(T.dot(e))).normalize(),
                    w.crossVectors(E, e);
                    const n = w.dot(d[t]) < 0 ? -1 : 1;
                    u[4 * t] = S.x,
                    u[4 * t + 1] = S.y,
                    u[4 * t + 2] = S.z,
                    u[4 * t + 3] = n
                }
                for (let t = 0, e = M.length; t < e; ++t) {
                    const e = M[t]
                      , i = e.start;
                    for (let t = i, r = i + e.count; t < r; t += 3)
                        A(n[t + 0]),
                        A(n[t + 1]),
                        A(n[t + 2])
                }
            }
            computeVertexNormals() {
                const t = this.index
                  , e = this.getAttribute("position");
                if (void 0 !== e) {
                    let n = this.getAttribute("normal");
                    if (void 0 === n)
                        n = new o.Tl(new Float32Array(3 * e.count),3),
                        this.setAttribute("normal", n);
                    else
                        for (let t = 0, e = n.count; t < e; t++)
                            n.setXYZ(t, 0, 0, 0);
                    const r = new i.P
                      , a = new i.P
                      , s = new i.P
                      , l = new i.P
                      , c = new i.P
                      , u = new i.P
                      , h = new i.P
                      , d = new i.P;
                    if (t)
                        for (let i = 0, o = t.count; i < o; i += 3) {
                            const o = t.getX(i + 0)
                              , p = t.getX(i + 1)
                              , m = t.getX(i + 2);
                            r.fromBufferAttribute(e, o),
                            a.fromBufferAttribute(e, p),
                            s.fromBufferAttribute(e, m),
                            h.subVectors(s, a),
                            d.subVectors(r, a),
                            h.cross(d),
                            l.fromBufferAttribute(n, o),
                            c.fromBufferAttribute(n, p),
                            u.fromBufferAttribute(n, m),
                            l.add(h),
                            c.add(h),
                            u.add(h),
                            n.setXYZ(o, l.x, l.y, l.z),
                            n.setXYZ(p, c.x, c.y, c.z),
                            n.setXYZ(m, u.x, u.y, u.z)
                        }
                    else
                        for (let t = 0, i = e.count; t < i; t += 3)
                            r.fromBufferAttribute(e, t + 0),
                            a.fromBufferAttribute(e, t + 1),
                            s.fromBufferAttribute(e, t + 2),
                            h.subVectors(s, a),
                            d.subVectors(r, a),
                            h.cross(d),
                            n.setXYZ(t + 0, h.x, h.y, h.z),
                            n.setXYZ(t + 1, h.x, h.y, h.z),
                            n.setXYZ(t + 2, h.x, h.y, h.z);
                    this.normalizeNormals(),
                    n.needsUpdate = !0
                }
            }
            merge(t, e) {
                if (!t || !t.isBufferGeometry)
                    return void console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.", t);
                void 0 === e && (e = 0,
                console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));
                const n = this.attributes;
                for (const i in n) {
                    if (void 0 === t.attributes[i])
                        continue;
                    const r = n[i].array
                      , a = t.attributes[i]
                      , s = a.array
                      , o = a.itemSize * e
                      , l = Math.min(s.length, r.length - o);
                    for (let t = 0, e = o; t < l; t++,
                    e++)
                        r[e] = s[t]
                }
                return this
            }
            normalizeNormals() {
                const t = this.attributes.normal;
                for (let e = 0, n = t.count; e < n; e++)
                    y.fromBufferAttribute(t, e),
                    y.normalize(),
                    t.setXYZ(e, y.x, y.y, y.z)
            }
            toNonIndexed() {
                function t(t, e) {
                    const n = t.array
                      , i = t.itemSize
                      , r = t.normalized
                      , a = new n.constructor(e.length * i);
                    let s = 0
                      , l = 0;
                    for (let r = 0, o = e.length; r < o; r++) {
                        s = t.isInterleavedBufferAttribute ? e[r] * t.data.stride + t.offset : e[r] * i;
                        for (let t = 0; t < i; t++)
                            a[l++] = n[s++]
                    }
                    return new o.Tl(a,i,r)
                }
                if (null === this.index)
                    return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),
                    this;
                const e = new b
                  , n = this.index.array
                  , i = this.attributes;
                for (const r in i) {
                    const a = t(i[r], n);
                    e.setAttribute(r, a)
                }
                const r = this.morphAttributes;
                for (const i in r) {
                    const a = []
                      , s = r[i];
                    for (let e = 0, i = s.length; e < i; e++) {
                        const i = t(s[e], n);
                        a.push(i)
                    }
                    e.morphAttributes[i] = a
                }
                e.morphTargetsRelative = this.morphTargetsRelative;
                const a = this.groups;
                for (let t = 0, n = a.length; t < n; t++) {
                    const n = a[t];
                    e.addGroup(n.start, n.count, n.materialIndex)
                }
                return e
            }
            toJSON() {
                const t = {
                    metadata: {
                        version: 4.5,
                        type: "BufferGeometry",
                        generator: "BufferGeometry.toJSON"
                    }
                };
                if (t.uuid = this.uuid,
                t.type = this.type,
                "" !== this.name && (t.name = this.name),
                Object.keys(this.userData).length > 0 && (t.userData = this.userData),
                void 0 !== this.parameters) {
                    const e = this.parameters;
                    for (const n in e)
                        void 0 !== e[n] && (t[n] = e[n]);
                    return t
                }
                t.data = {
                    attributes: {}
                };
                const e = this.index;
                null !== e && (t.data.index = {
                    type: e.array.constructor.name,
                    array: Array.prototype.slice.call(e.array)
                });
                const n = this.attributes;
                for (const e in n) {
                    const i = n[e];
                    t.data.attributes[e] = i.toJSON(t.data)
                }
                const i = {};
                let r = !1;
                for (const e in this.morphAttributes) {
                    const n = this.morphAttributes[e]
                      , a = [];
                    for (let e = 0, i = n.length; e < i; e++) {
                        const i = n[e];
                        a.push(i.toJSON(t.data))
                    }
                    a.length > 0 && (i[e] = a,
                    r = !0)
                }
                r && (t.data.morphAttributes = i,
                t.data.morphTargetsRelative = this.morphTargetsRelative);
                const a = this.groups;
                a.length > 0 && (t.data.groups = JSON.parse(JSON.stringify(a)));
                const s = this.boundingSphere;
                return null !== s && (t.data.boundingSphere = {
                    center: s.center.toArray(),
                    radius: s.radius
                }),
                t
            }
            clone() {
                return (new this.constructor).copy(this)
            }
            copy(t) {
                this.index = null,
                this.attributes = {},
                this.morphAttributes = {},
                this.groups = [],
                this.boundingBox = null,
                this.boundingSphere = null;
                const e = {};
                this.name = t.name;
                const n = t.index;
                null !== n && this.setIndex(n.clone(e));
                const i = t.attributes;
                for (const t in i) {
                    const n = i[t];
                    this.setAttribute(t, n.clone(e))
                }
                const r = t.morphAttributes;
                for (const t in r) {
                    const n = []
                      , i = r[t];
                    for (let t = 0, r = i.length; t < r; t++)
                        n.push(i[t].clone(e));
                    this.morphAttributes[t] = n
                }
                this.morphTargetsRelative = t.morphTargetsRelative;
                const a = t.groups;
                for (let t = 0, e = a.length; t < e; t++) {
                    const e = a[t];
                    this.addGroup(e.start, e.count, e.materialIndex)
                }
                const s = t.boundingBox;
                null !== s && (this.boundingBox = s.clone());
                const o = t.boundingSphere;
                return null !== o && (this.boundingSphere = o.clone()),
                this.drawRange.start = t.drawRange.start,
                this.drawRange.count = t.drawRange.count,
                this.userData = t.userData,
                void 0 !== t.parameters && (this.parameters = Object.assign({}, t.parameters)),
                this
            }
            dispose() {
                this.dispatchEvent({
                    type: "dispose"
                })
            }
        }
        b.prototype.isBufferGeometry = !0
    }
    ,
    406: (t,e,n)=>{
        "use strict";
        n.d(e, {
            p: ()=>i
        });
        class i {
            addEventListener(t, e) {
                void 0 === this._listeners && (this._listeners = {});
                const n = this._listeners;
                void 0 === n[t] && (n[t] = []),
                -1 === n[t].indexOf(e) && n[t].push(e)
            }
            hasEventListener(t, e) {
                if (void 0 === this._listeners)
                    return !1;
                const n = this._listeners;
                return void 0 !== n[t] && -1 !== n[t].indexOf(e)
            }
            removeEventListener(t, e) {
                if (void 0 === this._listeners)
                    return;
                const n = this._listeners[t];
                if (void 0 !== n) {
                    const t = n.indexOf(e);
                    -1 !== t && n.splice(t, 1)
                }
            }
            dispatchEvent(t) {
                if (void 0 === this._listeners)
                    return;
                const e = this._listeners[t.type];
                if (void 0 !== e) {
                    t.target = this;
                    const n = e.slice(0);
                    for (let e = 0, i = n.length; e < i; e++)
                        n[e].call(this, t);
                    t.target = null
                }
            }
        }
    }
    ,
    204: (t,e,n)=>{
        "use strict";
        n.d(e, {
            S: ()=>i
        });
        class i {
            constructor() {
                this.mask = 1
            }
            set(t) {
                this.mask = (1 << t | 0) >>> 0
            }
            enable(t) {
                this.mask |= 1 << t | 0
            }
            enableAll() {
                this.mask = -1
            }
            toggle(t) {
                this.mask ^= 1 << t | 0
            }
            disable(t) {
                this.mask &= ~(1 << t | 0)
            }
            disableAll() {
                this.mask = 0
            }
            test(t) {
                return 0 != (this.mask & t.mask)
            }
            isEnabled(t) {
                return 0 != (this.mask & (1 << t | 0))
            }
        }
    }
    ,
    353: (t,e,n)=>{
        "use strict";
        n.d(e, {
            T: ()=>E
        });
        var i = n(92)
          , r = n(881)
          , a = n(203)
          , s = n(406)
          , o = n(43);
        const l = new a.y
          , c = new i._;
        class u {
            constructor(t=0, e=0, n=0, i=u.DefaultOrder) {
                this._x = t,
                this._y = e,
                this._z = n,
                this._order = i
            }
            get x() {
                return this._x
            }
            set x(t) {
                this._x = t,
                this._onChangeCallback()
            }
            get y() {
                return this._y
            }
            set y(t) {
                this._y = t,
                this._onChangeCallback()
            }
            get z() {
                return this._z
            }
            set z(t) {
                this._z = t,
                this._onChangeCallback()
            }
            get order() {
                return this._order
            }
            set order(t) {
                this._order = t,
                this._onChangeCallback()
            }
            set(t, e, n, i=this._order) {
                return this._x = t,
                this._y = e,
                this._z = n,
                this._order = i,
                this._onChangeCallback(),
                this
            }
            clone() {
                return new this.constructor(this._x,this._y,this._z,this._order)
            }
            copy(t) {
                return this._x = t._x,
                this._y = t._y,
                this._z = t._z,
                this._order = t._order,
                this._onChangeCallback(),
                this
            }
            setFromRotationMatrix(t, e=this._order, n=!0) {
                const i = t.elements
                  , r = i[0]
                  , a = i[4]
                  , s = i[8]
                  , l = i[1]
                  , c = i[5]
                  , u = i[9]
                  , h = i[2]
                  , d = i[6]
                  , p = i[10];
                switch (e) {
                case "XYZ":
                    this._y = Math.asin((0,
                    o.uZ)(s, -1, 1)),
                    Math.abs(s) < .9999999 ? (this._x = Math.atan2(-u, p),
                    this._z = Math.atan2(-a, r)) : (this._x = Math.atan2(d, c),
                    this._z = 0);
                    break;
                case "YXZ":
                    this._x = Math.asin(-(0,
                    o.uZ)(u, -1, 1)),
                    Math.abs(u) < .9999999 ? (this._y = Math.atan2(s, p),
                    this._z = Math.atan2(l, c)) : (this._y = Math.atan2(-h, r),
                    this._z = 0);
                    break;
                case "ZXY":
                    this._x = Math.asin((0,
                    o.uZ)(d, -1, 1)),
                    Math.abs(d) < .9999999 ? (this._y = Math.atan2(-h, p),
                    this._z = Math.atan2(-a, c)) : (this._y = 0,
                    this._z = Math.atan2(l, r));
                    break;
                case "ZYX":
                    this._y = Math.asin(-(0,
                    o.uZ)(h, -1, 1)),
                    Math.abs(h) < .9999999 ? (this._x = Math.atan2(d, p),
                    this._z = Math.atan2(l, r)) : (this._x = 0,
                    this._z = Math.atan2(-a, c));
                    break;
                case "YZX":
                    this._z = Math.asin((0,
                    o.uZ)(l, -1, 1)),
                    Math.abs(l) < .9999999 ? (this._x = Math.atan2(-u, c),
                    this._y = Math.atan2(-h, r)) : (this._x = 0,
                    this._y = Math.atan2(s, p));
                    break;
                case "XZY":
                    this._z = Math.asin(-(0,
                    o.uZ)(a, -1, 1)),
                    Math.abs(a) < .9999999 ? (this._x = Math.atan2(d, c),
                    this._y = Math.atan2(s, r)) : (this._x = Math.atan2(-u, p),
                    this._y = 0);
                    break;
                default:
                    console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + e)
                }
                return this._order = e,
                !0 === n && this._onChangeCallback(),
                this
            }
            setFromQuaternion(t, e, n) {
                return l.makeRotationFromQuaternion(t),
                this.setFromRotationMatrix(l, e, n)
            }
            setFromVector3(t, e=this._order) {
                return this.set(t.x, t.y, t.z, e)
            }
            reorder(t) {
                return c.setFromEuler(this),
                this.setFromQuaternion(c, t)
            }
            equals(t) {
                return t._x === this._x && t._y === this._y && t._z === this._z && t._order === this._order
            }
            fromArray(t) {
                return this._x = t[0],
                this._y = t[1],
                this._z = t[2],
                void 0 !== t[3] && (this._order = t[3]),
                this._onChangeCallback(),
                this
            }
            toArray(t=[], e=0) {
                return t[e] = this._x,
                t[e + 1] = this._y,
                t[e + 2] = this._z,
                t[e + 3] = this._order,
                t
            }
            toVector3(t) {
                return t ? t.set(this._x, this._y, this._z) : new r.P(this._x,this._y,this._z)
            }
            _onChange(t) {
                return this._onChangeCallback = t,
                this
            }
            _onChangeCallback() {}
        }
        u.prototype.isEuler = !0,
        u.DefaultOrder = "XYZ",
        u.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"];
        var h = n(204)
          , d = n(273);
        let p = 0;
        const m = new r.P
          , f = new i._
          , g = new a.y
          , _ = new r.P
          , v = new r.P
          , x = new r.P
          , y = new i._
          , b = new r.P(1,0,0)
          , M = new r.P(0,1,0)
          , S = new r.P(0,0,1)
          , w = {
            type: "added"
        }
          , T = {
            type: "removed"
        };
        class E extends s.p {
            constructor() {
                super(),
                Object.defineProperty(this, "id", {
                    value: p++
                }),
                this.uuid = o.DO(),
                this.name = "",
                this.type = "Object3D",
                this.parent = null,
                this.children = [],
                this.up = E.DefaultUp.clone();
                const t = new r.P
                  , e = new u
                  , n = new i._
                  , s = new r.P(1,1,1);
                e._onChange((function() {
                    n.setFromEuler(e, !1)
                }
                )),
                n._onChange((function() {
                    e.setFromQuaternion(n, void 0, !1)
                }
                )),
                Object.defineProperties(this, {
                    position: {
                        configurable: !0,
                        enumerable: !0,
                        value: t
                    },
                    rotation: {
                        configurable: !0,
                        enumerable: !0,
                        value: e
                    },
                    quaternion: {
                        configurable: !0,
                        enumerable: !0,
                        value: n
                    },
                    scale: {
                        configurable: !0,
                        enumerable: !0,
                        value: s
                    },
                    modelViewMatrix: {
                        value: new a.y
                    },
                    normalMatrix: {
                        value: new d.V
                    }
                }),
                this.matrix = new a.y,
                this.matrixWorld = new a.y,
                this.matrixAutoUpdate = E.DefaultMatrixAutoUpdate,
                this.matrixWorldNeedsUpdate = !1,
                this.layers = new h.S,
                this.visible = !0,
                this.castShadow = !1,
                this.receiveShadow = !1,
                this.frustumCulled = !0,
                this.renderOrder = 0,
                this.animations = [],
                this.userData = {}
            }
            onBeforeRender() {}
            onAfterRender() {}
            applyMatrix4(t) {
                this.matrixAutoUpdate && this.updateMatrix(),
                this.matrix.premultiply(t),
                this.matrix.decompose(this.position, this.quaternion, this.scale)
            }
            applyQuaternion(t) {
                return this.quaternion.premultiply(t),
                this
            }
            setRotationFromAxisAngle(t, e) {
                this.quaternion.setFromAxisAngle(t, e)
            }
            setRotationFromEuler(t) {
                this.quaternion.setFromEuler(t, !0)
            }
            setRotationFromMatrix(t) {
                this.quaternion.setFromRotationMatrix(t)
            }
            setRotationFromQuaternion(t) {
                this.quaternion.copy(t)
            }
            rotateOnAxis(t, e) {
                return f.setFromAxisAngle(t, e),
                this.quaternion.multiply(f),
                this
            }
            rotateOnWorldAxis(t, e) {
                return f.setFromAxisAngle(t, e),
                this.quaternion.premultiply(f),
                this
            }
            rotateX(t) {
                return this.rotateOnAxis(b, t)
            }
            rotateY(t) {
                return this.rotateOnAxis(M, t)
            }
            rotateZ(t) {
                return this.rotateOnAxis(S, t)
            }
            translateOnAxis(t, e) {
                return m.copy(t).applyQuaternion(this.quaternion),
                this.position.add(m.multiplyScalar(e)),
                this
            }
            translateX(t) {
                return this.translateOnAxis(b, t)
            }
            translateY(t) {
                return this.translateOnAxis(M, t)
            }
            translateZ(t) {
                return this.translateOnAxis(S, t)
            }
            localToWorld(t) {
                return t.applyMatrix4(this.matrixWorld)
            }
            worldToLocal(t) {
                return t.applyMatrix4(g.copy(this.matrixWorld).invert())
            }
            lookAt(t, e, n) {
                t.isVector3 ? _.copy(t) : _.set(t, e, n);
                const i = this.parent;
                this.updateWorldMatrix(!0, !1),
                v.setFromMatrixPosition(this.matrixWorld),
                this.isCamera || this.isLight ? g.lookAt(v, _, this.up) : g.lookAt(_, v, this.up),
                this.quaternion.setFromRotationMatrix(g),
                i && (g.extractRotation(i.matrixWorld),
                f.setFromRotationMatrix(g),
                this.quaternion.premultiply(f.invert()))
            }
            add(t) {
                if (arguments.length > 1) {
                    for (let t = 0; t < arguments.length; t++)
                        this.add(arguments[t]);
                    return this
                }
                return t === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", t),
                this) : (t && t.isObject3D ? (null !== t.parent && t.parent.remove(t),
                t.parent = this,
                this.children.push(t),
                t.dispatchEvent(w)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", t),
                this)
            }
            remove(t) {
                if (arguments.length > 1) {
                    for (let t = 0; t < arguments.length; t++)
                        this.remove(arguments[t]);
                    return this
                }
                const e = this.children.indexOf(t);
                return -1 !== e && (t.parent = null,
                this.children.splice(e, 1),
                t.dispatchEvent(T)),
                this
            }
            removeFromParent() {
                const t = this.parent;
                return null !== t && t.remove(this),
                this
            }
            clear() {
                for (let t = 0; t < this.children.length; t++) {
                    const e = this.children[t];
                    e.parent = null,
                    e.dispatchEvent(T)
                }
                return this.children.length = 0,
                this
            }
            attach(t) {
                return this.updateWorldMatrix(!0, !1),
                g.copy(this.matrixWorld).invert(),
                null !== t.parent && (t.parent.updateWorldMatrix(!0, !1),
                g.multiply(t.parent.matrixWorld)),
                t.applyMatrix4(g),
                this.add(t),
                t.updateWorldMatrix(!1, !0),
                this
            }
            getObjectById(t) {
                return this.getObjectByProperty("id", t)
            }
            getObjectByName(t) {
                return this.getObjectByProperty("name", t)
            }
            getObjectByProperty(t, e) {
                if (this[t] === e)
                    return this;
                for (let n = 0, i = this.children.length; n < i; n++) {
                    const i = this.children[n].getObjectByProperty(t, e);
                    if (void 0 !== i)
                        return i
                }
            }
            getWorldPosition(t) {
                return this.updateWorldMatrix(!0, !1),
                t.setFromMatrixPosition(this.matrixWorld)
            }
            getWorldQuaternion(t) {
                return this.updateWorldMatrix(!0, !1),
                this.matrixWorld.decompose(v, t, x),
                t
            }
            getWorldScale(t) {
                return this.updateWorldMatrix(!0, !1),
                this.matrixWorld.decompose(v, y, t),
                t
            }
            getWorldDirection(t) {
                this.updateWorldMatrix(!0, !1);
                const e = this.matrixWorld.elements;
                return t.set(e[8], e[9], e[10]).normalize()
            }
            raycast() {}
            traverse(t) {
                t(this);
                const e = this.children;
                for (let n = 0, i = e.length; n < i; n++)
                    e[n].traverse(t)
            }
            traverseVisible(t) {
                if (!1 === this.visible)
                    return;
                t(this);
                const e = this.children;
                for (let n = 0, i = e.length; n < i; n++)
                    e[n].traverseVisible(t)
            }
            traverseAncestors(t) {
                const e = this.parent;
                null !== e && (t(e),
                e.traverseAncestors(t))
            }
            updateMatrix() {
                this.matrix.compose(this.position, this.quaternion, this.scale),
                this.matrixWorldNeedsUpdate = !0
            }
            updateMatrixWorld(t) {
                this.matrixAutoUpdate && this.updateMatrix(),
                (this.matrixWorldNeedsUpdate || t) && (null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix),
                this.matrixWorldNeedsUpdate = !1,
                t = !0);
                const e = this.children;
                for (let n = 0, i = e.length; n < i; n++)
                    e[n].updateMatrixWorld(t)
            }
            updateWorldMatrix(t, e) {
                const n = this.parent;
                if (!0 === t && null !== n && n.updateWorldMatrix(!0, !1),
                this.matrixAutoUpdate && this.updateMatrix(),
                null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix),
                !0 === e) {
                    const t = this.children;
                    for (let e = 0, n = t.length; e < n; e++)
                        t[e].updateWorldMatrix(!1, !0)
                }
            }
            toJSON(t) {
                const e = void 0 === t || "string" == typeof t
                  , n = {};
                e && (t = {
                    geometries: {},
                    materials: {},
                    textures: {},
                    images: {},
                    shapes: {},
                    skeletons: {},
                    animations: {}
                },
                n.metadata = {
                    version: 4.5,
                    type: "Object",
                    generator: "Object3D.toJSON"
                });
                const i = {};
                function r(e, n) {
                    return void 0 === e[n.uuid] && (e[n.uuid] = n.toJSON(t)),
                    n.uuid
                }
                if (i.uuid = this.uuid,
                i.type = this.type,
                "" !== this.name && (i.name = this.name),
                !0 === this.castShadow && (i.castShadow = !0),
                !0 === this.receiveShadow && (i.receiveShadow = !0),
                !1 === this.visible && (i.visible = !1),
                !1 === this.frustumCulled && (i.frustumCulled = !1),
                0 !== this.renderOrder && (i.renderOrder = this.renderOrder),
                "{}" !== JSON.stringify(this.userData) && (i.userData = this.userData),
                i.layers = this.layers.mask,
                i.matrix = this.matrix.toArray(),
                !1 === this.matrixAutoUpdate && (i.matrixAutoUpdate = !1),
                this.isInstancedMesh && (i.type = "InstancedMesh",
                i.count = this.count,
                i.instanceMatrix = this.instanceMatrix.toJSON(),
                null !== this.instanceColor && (i.instanceColor = this.instanceColor.toJSON())),
                this.isScene)
                    this.background && (this.background.isColor ? i.background = this.background.toJSON() : this.background.isTexture && (i.background = this.background.toJSON(t).uuid)),
                    this.environment && this.environment.isTexture && (i.environment = this.environment.toJSON(t).uuid);
                else if (this.isMesh || this.isLine || this.isPoints) {
                    i.geometry = r(t.geometries, this.geometry);
                    const e = this.geometry.parameters;
                    if (void 0 !== e && void 0 !== e.shapes) {
                        const n = e.shapes;
                        if (Array.isArray(n))
                            for (let e = 0, i = n.length; e < i; e++) {
                                const i = n[e];
                                r(t.shapes, i)
                            }
                        else
                            r(t.shapes, n)
                    }
                }
                if (this.isSkinnedMesh && (i.bindMode = this.bindMode,
                i.bindMatrix = this.bindMatrix.toArray(),
                void 0 !== this.skeleton && (r(t.skeletons, this.skeleton),
                i.skeleton = this.skeleton.uuid)),
                void 0 !== this.material)
                    if (Array.isArray(this.material)) {
                        const e = [];
                        for (let n = 0, i = this.material.length; n < i; n++)
                            e.push(r(t.materials, this.material[n]));
                        i.material = e
                    } else
                        i.material = r(t.materials, this.material);
                if (this.children.length > 0) {
                    i.children = [];
                    for (let e = 0; e < this.children.length; e++)
                        i.children.push(this.children[e].toJSON(t).object)
                }
                if (this.animations.length > 0) {
                    i.animations = [];
                    for (let e = 0; e < this.animations.length; e++) {
                        const n = this.animations[e];
                        i.animations.push(r(t.animations, n))
                    }
                }
                if (e) {
                    const e = a(t.geometries)
                      , i = a(t.materials)
                      , r = a(t.textures)
                      , s = a(t.images)
                      , o = a(t.shapes)
                      , l = a(t.skeletons)
                      , c = a(t.animations);
                    e.length > 0 && (n.geometries = e),
                    i.length > 0 && (n.materials = i),
                    r.length > 0 && (n.textures = r),
                    s.length > 0 && (n.images = s),
                    o.length > 0 && (n.shapes = o),
                    l.length > 0 && (n.skeletons = l),
                    c.length > 0 && (n.animations = c)
                }
                return n.object = i,
                n;
                function a(t) {
                    const e = [];
                    for (const n in t) {
                        const i = t[n];
                        delete i.metadata,
                        e.push(i)
                    }
                    return e
                }
            }
            clone(t) {
                return (new this.constructor).copy(this, t)
            }
            copy(t, e=!0) {
                if (this.name = t.name,
                this.up.copy(t.up),
                this.position.copy(t.position),
                this.rotation.order = t.rotation.order,
                this.quaternion.copy(t.quaternion),
                this.scale.copy(t.scale),
                this.matrix.copy(t.matrix),
                this.matrixWorld.copy(t.matrixWorld),
                this.matrixAutoUpdate = t.matrixAutoUpdate,
                this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate,
                this.layers.mask = t.layers.mask,
                this.visible = t.visible,
                this.castShadow = t.castShadow,
                this.receiveShadow = t.receiveShadow,
                this.frustumCulled = t.frustumCulled,
                this.renderOrder = t.renderOrder,
                this.userData = JSON.parse(JSON.stringify(t.userData)),
                !0 === e)
                    for (let e = 0; e < t.children.length; e++) {
                        const n = t.children[e];
                        this.add(n.clone())
                    }
                return this
            }
        }
        E.DefaultUp = new r.P(0,1,0),
        E.DefaultMatrixAutoUpdate = !0,
        E.prototype.isObject3D = !0
    }
    ,
    557: (t,e,n)=>{
        "use strict";
        n.d(e, {
            i: ()=>a
        });
        var i = n(540)
          , r = n(204);
        class a {
            constructor(t, e, n=0, a=1 / 0) {
                this.ray = new i.z(t,e),
                this.near = n,
                this.far = a,
                this.camera = null,
                this.layers = new r.S,
                this.params = {
                    Mesh: {},
                    Line: {
                        threshold: 1
                    },
                    LOD: {},
                    Points: {
                        threshold: 1
                    },
                    Sprite: {}
                }
            }
            set(t, e) {
                this.ray.set(t, e)
            }
            setFromCamera(t, e) {
                e && e.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(e.matrixWorld),
                this.ray.direction.set(t.x, t.y, .5).unproject(e).sub(this.ray.origin).normalize(),
                this.camera = e) : e && e.isOrthographicCamera ? (this.ray.origin.set(t.x, t.y, (e.near + e.far) / (e.near - e.far)).unproject(e),
                this.ray.direction.set(0, 0, -1).transformDirection(e.matrixWorld),
                this.camera = e) : console.error("THREE.Raycaster: Unsupported camera type: " + e.type)
            }
            intersectObject(t, e=!0, n=[]) {
                return o(t, this, n, e),
                n.sort(s),
                n
            }
            intersectObjects(t, e=!0, n=[]) {
                for (let i = 0, r = t.length; i < r; i++)
                    o(t[i], this, n, e);
                return n.sort(s),
                n
            }
        }
        function s(t, e) {
            return t.distance - e.distance
        }
        function o(t, e, n, i) {
            if (t.layers.test(e.layers) && t.raycast(e, n),
            !0 === i) {
                const i = t.children;
                for (let t = 0, r = i.length; t < r; t++)
                    o(i[t], e, n, !0)
            }
        }
    }
    ,
    724: (t,e,n)=>{
        "use strict";
        n.d(e, {
            D: ()=>s
        });
        var i = n(46)
          , r = n(140)
          , a = n(881);
        class s extends i.u {
            constructor(t=1, e=1, n=1, i=1, s=1, o=1) {
                super(),
                this.type = "BoxGeometry",
                this.parameters = {
                    width: t,
                    height: e,
                    depth: n,
                    widthSegments: i,
                    heightSegments: s,
                    depthSegments: o
                };
                const l = this;
                i = Math.floor(i),
                s = Math.floor(s),
                o = Math.floor(o);
                const c = []
                  , u = []
                  , h = []
                  , d = [];
                let p = 0
                  , m = 0;
                function f(t, e, n, i, r, s, o, f, g, _, v) {
                    const x = s / g
                      , y = o / _
                      , b = s / 2
                      , M = o / 2
                      , S = f / 2
                      , w = g + 1
                      , T = _ + 1;
                    let E = 0
                      , A = 0;
                    const L = new a.P;
                    for (let a = 0; a < T; a++) {
                        const s = a * y - M;
                        for (let o = 0; o < w; o++) {
                            const l = o * x - b;
                            L[t] = l * i,
                            L[e] = s * r,
                            L[n] = S,
                            u.push(L.x, L.y, L.z),
                            L[t] = 0,
                            L[e] = 0,
                            L[n] = f > 0 ? 1 : -1,
                            h.push(L.x, L.y, L.z),
                            d.push(o / g),
                            d.push(1 - a / _),
                            E += 1
                        }
                    }
                    for (let t = 0; t < _; t++)
                        for (let e = 0; e < g; e++) {
                            const n = p + e + w * t
                              , i = p + e + w * (t + 1)
                              , r = p + (e + 1) + w * (t + 1)
                              , a = p + (e + 1) + w * t;
                            c.push(n, i, a),
                            c.push(i, r, a),
                            A += 6
                        }
                    l.addGroup(m, A, v),
                    m += A,
                    p += E
                }
                f("z", "y", "x", -1, -1, n, e, t, o, s, 0),
                f("z", "y", "x", 1, -1, n, e, -t, o, s, 1),
                f("x", "z", "y", 1, 1, t, n, e, i, o, 2),
                f("x", "z", "y", 1, -1, t, n, -e, i, o, 3),
                f("x", "y", "z", 1, -1, t, e, n, i, s, 4),
                f("x", "y", "z", -1, -1, t, e, -n, i, s, 5),
                this.setIndex(c),
                this.setAttribute("position", new r.a$(u,3)),
                this.setAttribute("normal", new r.a$(h,3)),
                this.setAttribute("uv", new r.a$(d,2))
            }
            static fromJSON(t) {
                return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)
            }
        }
    }
    ,
    164: (t,e,n)=>{
        "use strict";
        n.d(e, {
            F: ()=>o
        });
        var i = n(406)
          , r = n(661)
          , a = n(43);
        let s = 0;
        class o extends i.p {
            constructor() {
                super(),
                Object.defineProperty(this, "id", {
                    value: s++
                }),
                this.uuid = a.DO(),
                this.name = "",
                this.type = "Material",
                this.fog = !0,
                this.blending = r.bdR,
                this.side = r.Wl3,
                this.vertexColors = !1,
                this.opacity = 1,
                this.format = r.wk1,
                this.transparent = !1,
                this.blendSrc = r.k74,
                this.blendDst = r.LgZ,
                this.blendEquation = r.bGH,
                this.blendSrcAlpha = null,
                this.blendDstAlpha = null,
                this.blendEquationAlpha = null,
                this.depthFunc = r.vCF,
                this.depthTest = !0,
                this.depthWrite = !0,
                this.stencilWriteMask = 255,
                this.stencilFunc = r.cum,
                this.stencilRef = 0,
                this.stencilFuncMask = 255,
                this.stencilFail = r.x5V,
                this.stencilZFail = r.x5V,
                this.stencilZPass = r.x5V,
                this.stencilWrite = !1,
                this.clippingPlanes = null,
                this.clipIntersection = !1,
                this.clipShadows = !1,
                this.shadowSide = null,
                this.colorWrite = !0,
                this.precision = null,
                this.polygonOffset = !1,
                this.polygonOffsetFactor = 0,
                this.polygonOffsetUnits = 0,
                this.dithering = !1,
                this.alphaToCoverage = !1,
                this.premultipliedAlpha = !1,
                this.visible = !0,
                this.toneMapped = !0,
                this.userData = {},
                this.version = 0,
                this._alphaTest = 0
            }
            get alphaTest() {
                return this._alphaTest
            }
            set alphaTest(t) {
                this._alphaTest > 0 != t > 0 && this.version++,
                this._alphaTest = t
            }
            onBuild() {}
            onBeforeRender() {}
            onBeforeCompile() {}
            customProgramCacheKey() {
                return this.onBeforeCompile.toString()
            }
            setValues(t) {
                if (void 0 !== t)
                    for (const e in t) {
                        const n = t[e];
                        if (void 0 === n) {
                            console.warn("THREE.Material: '" + e + "' parameter is undefined.");
                            continue
                        }
                        if ("shading" === e) {
                            console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."),
                            this.flatShading = n === r.esl;
                            continue
                        }
                        const i = this[e];
                        void 0 !== i ? i && i.isColor ? i.set(n) : i && i.isVector3 && n && n.isVector3 ? i.copy(n) : this[e] = n : console.warn("THREE." + this.type + ": '" + e + "' is not a property of this material.")
                    }
            }
            toJSON(t) {
                const e = void 0 === t || "string" == typeof t;
                e && (t = {
                    textures: {},
                    images: {}
                });
                const n = {
                    metadata: {
                        version: 4.5,
                        type: "Material",
                        generator: "Material.toJSON"
                    }
                };
                function i(t) {
                    const e = [];
                    for (const n in t) {
                        const i = t[n];
                        delete i.metadata,
                        e.push(i)
                    }
                    return e
                }
                if (n.uuid = this.uuid,
                n.type = this.type,
                "" !== this.name && (n.name = this.name),
                this.color && this.color.isColor && (n.color = this.color.getHex()),
                void 0 !== this.roughness && (n.roughness = this.roughness),
                void 0 !== this.metalness && (n.metalness = this.metalness),
                void 0 !== this.sheen && (n.sheen = this.sheen),
                this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()),
                void 0 !== this.sheenRoughness && (n.sheenRoughness = this.sheenRoughness),
                this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()),
                this.emissiveIntensity && 1 !== this.emissiveIntensity && (n.emissiveIntensity = this.emissiveIntensity),
                this.specular && this.specular.isColor && (n.specular = this.specular.getHex()),
                void 0 !== this.specularIntensity && (n.specularIntensity = this.specularIntensity),
                this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()),
                void 0 !== this.shininess && (n.shininess = this.shininess),
                void 0 !== this.clearcoat && (n.clearcoat = this.clearcoat),
                void 0 !== this.clearcoatRoughness && (n.clearcoatRoughness = this.clearcoatRoughness),
                this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(t).uuid),
                this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(t).uuid),
                this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(t).uuid,
                n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()),
                this.map && this.map.isTexture && (n.map = this.map.toJSON(t).uuid),
                this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(t).uuid),
                this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(t).uuid),
                this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(t).uuid,
                n.lightMapIntensity = this.lightMapIntensity),
                this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(t).uuid,
                n.aoMapIntensity = this.aoMapIntensity),
                this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(t).uuid,
                n.bumpScale = this.bumpScale),
                this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(t).uuid,
                n.normalMapType = this.normalMapType,
                n.normalScale = this.normalScale.toArray()),
                this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(t).uuid,
                n.displacementScale = this.displacementScale,
                n.displacementBias = this.displacementBias),
                this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(t).uuid),
                this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(t).uuid),
                this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(t).uuid),
                this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(t).uuid),
                this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(t).uuid),
                this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(t).uuid),
                this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(t).uuid,
                void 0 !== this.combine && (n.combine = this.combine)),
                void 0 !== this.envMapIntensity && (n.envMapIntensity = this.envMapIntensity),
                void 0 !== this.reflectivity && (n.reflectivity = this.reflectivity),
                void 0 !== this.refractionRatio && (n.refractionRatio = this.refractionRatio),
                this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(t).uuid),
                void 0 !== this.transmission && (n.transmission = this.transmission),
                this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(t).uuid),
                void 0 !== this.thickness && (n.thickness = this.thickness),
                this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(t).uuid),
                void 0 !== this.attenuationDistance && (n.attenuationDistance = this.attenuationDistance),
                void 0 !== this.attenuationColor && (n.attenuationColor = this.attenuationColor.getHex()),
                void 0 !== this.size && (n.size = this.size),
                null !== this.shadowSide && (n.shadowSide = this.shadowSide),
                void 0 !== this.sizeAttenuation && (n.sizeAttenuation = this.sizeAttenuation),
                this.blending !== r.bdR && (n.blending = this.blending),
                this.side !== r.Wl3 && (n.side = this.side),
                this.vertexColors && (n.vertexColors = !0),
                this.opacity < 1 && (n.opacity = this.opacity),
                this.format !== r.wk1 && (n.format = this.format),
                !0 === this.transparent && (n.transparent = this.transparent),
                n.depthFunc = this.depthFunc,
                n.depthTest = this.depthTest,
                n.depthWrite = this.depthWrite,
                n.colorWrite = this.colorWrite,
                n.stencilWrite = this.stencilWrite,
                n.stencilWriteMask = this.stencilWriteMask,
                n.stencilFunc = this.stencilFunc,
                n.stencilRef = this.stencilRef,
                n.stencilFuncMask = this.stencilFuncMask,
                n.stencilFail = this.stencilFail,
                n.stencilZFail = this.stencilZFail,
                n.stencilZPass = this.stencilZPass,
                this.rotation && 0 !== this.rotation && (n.rotation = this.rotation),
                !0 === this.polygonOffset && (n.polygonOffset = !0),
                0 !== this.polygonOffsetFactor && (n.polygonOffsetFactor = this.polygonOffsetFactor),
                0 !== this.polygonOffsetUnits && (n.polygonOffsetUnits = this.polygonOffsetUnits),
                this.linewidth && 1 !== this.linewidth && (n.linewidth = this.linewidth),
                void 0 !== this.dashSize && (n.dashSize = this.dashSize),
                void 0 !== this.gapSize && (n.gapSize = this.gapSize),
                void 0 !== this.scale && (n.scale = this.scale),
                !0 === this.dithering && (n.dithering = !0),
                this.alphaTest > 0 && (n.alphaTest = this.alphaTest),
                !0 === this.alphaToCoverage && (n.alphaToCoverage = this.alphaToCoverage),
                !0 === this.premultipliedAlpha && (n.premultipliedAlpha = this.premultipliedAlpha),
                !0 === this.wireframe && (n.wireframe = this.wireframe),
                this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth),
                "round" !== this.wireframeLinecap && (n.wireframeLinecap = this.wireframeLinecap),
                "round" !== this.wireframeLinejoin && (n.wireframeLinejoin = this.wireframeLinejoin),
                !0 === this.flatShading && (n.flatShading = this.flatShading),
                !1 === this.visible && (n.visible = !1),
                !1 === this.toneMapped && (n.toneMapped = !1),
                "{}" !== JSON.stringify(this.userData) && (n.userData = this.userData),
                e) {
                    const e = i(t.textures)
                      , r = i(t.images);
                    e.length > 0 && (n.textures = e),
                    r.length > 0 && (n.images = r)
                }
                return n
            }
            clone() {
                return (new this.constructor).copy(this)
            }
            copy(t) {
                this.name = t.name,
                this.fog = t.fog,
                this.blending = t.blending,
                this.side = t.side,
                this.vertexColors = t.vertexColors,
                this.opacity = t.opacity,
                this.format = t.format,
                this.transparent = t.transparent,
                this.blendSrc = t.blendSrc,
                this.blendDst = t.blendDst,
                this.blendEquation = t.blendEquation,
                this.blendSrcAlpha = t.blendSrcAlpha,
                this.blendDstAlpha = t.blendDstAlpha,
                this.blendEquationAlpha = t.blendEquationAlpha,
                this.depthFunc = t.depthFunc,
                this.depthTest = t.depthTest,
                this.depthWrite = t.depthWrite,
                this.stencilWriteMask = t.stencilWriteMask,
                this.stencilFunc = t.stencilFunc,
                this.stencilRef = t.stencilRef,
                this.stencilFuncMask = t.stencilFuncMask,
                this.stencilFail = t.stencilFail,
                this.stencilZFail = t.stencilZFail,
                this.stencilZPass = t.stencilZPass,
                this.stencilWrite = t.stencilWrite;
                const e = t.clippingPlanes;
                let n = null;
                if (null !== e) {
                    const t = e.length;
                    n = new Array(t);
                    for (let i = 0; i !== t; ++i)
                        n[i] = e[i].clone()
                }
                return this.clippingPlanes = n,
                this.clipIntersection = t.clipIntersection,
                this.clipShadows = t.clipShadows,
                this.shadowSide = t.shadowSide,
                this.colorWrite = t.colorWrite,
                this.precision = t.precision,
                this.polygonOffset = t.polygonOffset,
                this.polygonOffsetFactor = t.polygonOffsetFactor,
                this.polygonOffsetUnits = t.polygonOffsetUnits,
                this.dithering = t.dithering,
                this.alphaTest = t.alphaTest,
                this.alphaToCoverage = t.alphaToCoverage,
                this.premultipliedAlpha = t.premultipliedAlpha,
                this.visible = t.visible,
                this.toneMapped = t.toneMapped,
                this.userData = JSON.parse(JSON.stringify(t.userData)),
                this
            }
            dispose() {
                this.dispatchEvent({
                    type: "dispose"
                })
            }
            set needsUpdate(t) {
                !0 === t && this.version++
            }
        }
        o.prototype.isMaterial = !0
    }
    ,
    173: (t,e,n)=>{
        "use strict";
        n.d(e, {
            v: ()=>s
        });
        var i = n(164)
          , r = n(661)
          , a = n(662);
        class s extends i.F {
            constructor(t) {
                super(),
                this.type = "MeshBasicMaterial",
                this.color = new a.I(16777215),
                this.map = null,
                this.lightMap = null,
                this.lightMapIntensity = 1,
                this.aoMap = null,
                this.aoMapIntensity = 1,
                this.specularMap = null,
                this.alphaMap = null,
                this.envMap = null,
                this.combine = r.Ns1,
                this.reflectivity = 1,
                this.refractionRatio = .98,
                this.wireframe = !1,
                this.wireframeLinewidth = 1,
                this.wireframeLinecap = "round",
                this.wireframeLinejoin = "round",
                this.setValues(t)
            }
            copy(t) {
                return super.copy(t),
                this.color.copy(t.color),
                this.map = t.map,
                this.lightMap = t.lightMap,
                this.lightMapIntensity = t.lightMapIntensity,
                this.aoMap = t.aoMap,
                this.aoMapIntensity = t.aoMapIntensity,
                this.specularMap = t.specularMap,
                this.alphaMap = t.alphaMap,
                this.envMap = t.envMap,
                this.combine = t.combine,
                this.reflectivity = t.reflectivity,
                this.refractionRatio = t.refractionRatio,
                this.wireframe = t.wireframe,
                this.wireframeLinewidth = t.wireframeLinewidth,
                this.wireframeLinecap = t.wireframeLinecap,
                this.wireframeLinejoin = t.wireframeLinejoin,
                this
            }
        }
        s.prototype.isMeshBasicMaterial = !0
    }
    ,
    898: (t,e,n)=>{
        "use strict";
        n.d(e, {
            Z: ()=>r
        });
        var i = n(881);
        class r {
            constructor(t=new i.P(1 / 0,1 / 0,1 / 0), e=new i.P(-1 / 0,-1 / 0,-1 / 0)) {
                this.min = t,
                this.max = e
            }
            set(t, e) {
                return this.min.copy(t),
                this.max.copy(e),
                this
            }
            setFromArray(t) {
                let e = 1 / 0
                  , n = 1 / 0
                  , i = 1 / 0
                  , r = -1 / 0
                  , a = -1 / 0
                  , s = -1 / 0;
                for (let o = 0, l = t.length; o < l; o += 3) {
                    const l = t[o]
                      , c = t[o + 1]
                      , u = t[o + 2];
                    l < e && (e = l),
                    c < n && (n = c),
                    u < i && (i = u),
                    l > r && (r = l),
                    c > a && (a = c),
                    u > s && (s = u)
                }
                return this.min.set(e, n, i),
                this.max.set(r, a, s),
                this
            }
            setFromBufferAttribute(t) {
                let e = 1 / 0
                  , n = 1 / 0
                  , i = 1 / 0
                  , r = -1 / 0
                  , a = -1 / 0
                  , s = -1 / 0;
                for (let o = 0, l = t.count; o < l; o++) {
                    const l = t.getX(o)
                      , c = t.getY(o)
                      , u = t.getZ(o);
                    l < e && (e = l),
                    c < n && (n = c),
                    u < i && (i = u),
                    l > r && (r = l),
                    c > a && (a = c),
                    u > s && (s = u)
                }
                return this.min.set(e, n, i),
                this.max.set(r, a, s),
                this
            }
            setFromPoints(t) {
                this.makeEmpty();
                for (let e = 0, n = t.length; e < n; e++)
                    this.expandByPoint(t[e]);
                return this
            }
            setFromCenterAndSize(t, e) {
                const n = s.copy(e).multiplyScalar(.5);
                return this.min.copy(t).sub(n),
                this.max.copy(t).add(n),
                this
            }
            setFromObject(t) {
                return this.makeEmpty(),
                this.expandByObject(t)
            }
            clone() {
                return (new this.constructor).copy(this)
            }
            copy(t) {
                return this.min.copy(t.min),
                this.max.copy(t.max),
                this
            }
            makeEmpty() {
                return this.min.x = this.min.y = this.min.z = 1 / 0,
                this.max.x = this.max.y = this.max.z = -1 / 0,
                this
            }
            isEmpty() {
                return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z
            }
            getCenter(t) {
                return this.isEmpty() ? t.set(0, 0, 0) : t.addVectors(this.min, this.max).multiplyScalar(.5)
            }
            getSize(t) {
                return this.isEmpty() ? t.set(0, 0, 0) : t.subVectors(this.max, this.min)
            }
            expandByPoint(t) {
                return this.min.min(t),
                this.max.max(t),
                this
            }
            expandByVector(t) {
                return this.min.sub(t),
                this.max.add(t),
                this
            }
            expandByScalar(t) {
                return this.min.addScalar(-t),
                this.max.addScalar(t),
                this
            }
            expandByObject(t) {
                t.updateWorldMatrix(!1, !1);
                const e = t.geometry;
                void 0 !== e && (null === e.boundingBox && e.computeBoundingBox(),
                o.copy(e.boundingBox),
                o.applyMatrix4(t.matrixWorld),
                this.union(o));
                const n = t.children;
                for (let t = 0, e = n.length; t < e; t++)
                    this.expandByObject(n[t]);
                return this
            }
            containsPoint(t) {
                return !(t.x < this.min.x || t.x > this.max.x || t.y < this.min.y || t.y > this.max.y || t.z < this.min.z || t.z > this.max.z)
            }
            containsBox(t) {
                return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y && this.min.z <= t.min.z && t.max.z <= this.max.z
            }
            getParameter(t, e) {
                return e.set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y), (t.z - this.min.z) / (this.max.z - this.min.z))
            }
            intersectsBox(t) {
                return !(t.max.x < this.min.x || t.min.x > this.max.x || t.max.y < this.min.y || t.min.y > this.max.y || t.max.z < this.min.z || t.min.z > this.max.z)
            }
            intersectsSphere(t) {
                return this.clampPoint(t.center, s),
                s.distanceToSquared(t.center) <= t.radius * t.radius
            }
            intersectsPlane(t) {
                let e, n;
                return t.normal.x > 0 ? (e = t.normal.x * this.min.x,
                n = t.normal.x * this.max.x) : (e = t.normal.x * this.max.x,
                n = t.normal.x * this.min.x),
                t.normal.y > 0 ? (e += t.normal.y * this.min.y,
                n += t.normal.y * this.max.y) : (e += t.normal.y * this.max.y,
                n += t.normal.y * this.min.y),
                t.normal.z > 0 ? (e += t.normal.z * this.min.z,
                n += t.normal.z * this.max.z) : (e += t.normal.z * this.max.z,
                n += t.normal.z * this.min.z),
                e <= -t.constant && n >= -t.constant
            }
            intersectsTriangle(t) {
                if (this.isEmpty())
                    return !1;
                this.getCenter(m),
                f.subVectors(this.max, m),
                l.subVectors(t.a, m),
                c.subVectors(t.b, m),
                u.subVectors(t.c, m),
                h.subVectors(c, l),
                d.subVectors(u, c),
                p.subVectors(l, u);
                let e = [0, -h.z, h.y, 0, -d.z, d.y, 0, -p.z, p.y, h.z, 0, -h.x, d.z, 0, -d.x, p.z, 0, -p.x, -h.y, h.x, 0, -d.y, d.x, 0, -p.y, p.x, 0];
                return !!v(e, l, c, u, f) && (e = [1, 0, 0, 0, 1, 0, 0, 0, 1],
                !!v(e, l, c, u, f) && (g.crossVectors(h, d),
                e = [g.x, g.y, g.z],
                v(e, l, c, u, f)))
            }
            clampPoint(t, e) {
                return e.copy(t).clamp(this.min, this.max)
            }
            distanceToPoint(t) {
                return s.copy(t).clamp(this.min, this.max).sub(t).length()
            }
            getBoundingSphere(t) {
                return this.getCenter(t.center),
                t.radius = .5 * this.getSize(s).length(),
                t
            }
            intersect(t) {
                return this.min.max(t.min),
                this.max.min(t.max),
                this.isEmpty() && this.makeEmpty(),
                this
            }
            union(t) {
                return this.min.min(t.min),
                this.max.max(t.max),
                this
            }
            applyMatrix4(t) {
                return this.isEmpty() || (a[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t),
                a[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t),
                a[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t),
                a[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t),
                a[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t),
                a[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t),
                a[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t),
                a[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t),
                this.setFromPoints(a)),
                this
            }
            translate(t) {
                return this.min.add(t),
                this.max.add(t),
                this
            }
            equals(t) {
                return t.min.equals(this.min) && t.max.equals(this.max)
            }
        }
        r.prototype.isBox3 = !0;
        const a = [new i.P, new i.P, new i.P, new i.P, new i.P, new i.P, new i.P, new i.P]
          , s = new i.P
          , o = new r
          , l = new i.P
          , c = new i.P
          , u = new i.P
          , h = new i.P
          , d = new i.P
          , p = new i.P
          , m = new i.P
          , f = new i.P
          , g = new i.P
          , _ = new i.P;
        function v(t, e, n, i, r) {
            for (let a = 0, s = t.length - 3; a <= s; a += 3) {
                _.fromArray(t, a);
                const s = r.x * Math.abs(_.x) + r.y * Math.abs(_.y) + r.z * Math.abs(_.z)
                  , o = e.dot(_)
                  , l = n.dot(_)
                  , c = i.dot(_);
                if (Math.max(-Math.max(o, l, c), Math.min(o, l, c)) > s)
                    return !1
            }
            return !0
        }
    }
    ,
    662: (t,e,n)=>{
        "use strict";
        n.d(e, {
            I: ()=>u
        });
        var i = n(43);
        const r = {
            aliceblue: 15792383,
            antiquewhite: 16444375,
            aqua: 65535,
            aquamarine: 8388564,
            azure: 15794175,
            beige: 16119260,
            bisque: 16770244,
            black: 0,
            blanchedalmond: 16772045,
            blue: 255,
            blueviolet: 9055202,
            brown: 10824234,
            burlywood: 14596231,
            cadetblue: 6266528,
            chartreuse: 8388352,
            chocolate: 13789470,
            coral: 16744272,
            cornflowerblue: 6591981,
            cornsilk: 16775388,
            crimson: 14423100,
            cyan: 65535,
            darkblue: 139,
            darkcyan: 35723,
            darkgoldenrod: 12092939,
            darkgray: 11119017,
            darkgreen: 25600,
            darkgrey: 11119017,
            darkkhaki: 12433259,
            darkmagenta: 9109643,
            darkolivegreen: 5597999,
            darkorange: 16747520,
            darkorchid: 10040012,
            darkred: 9109504,
            darksalmon: 15308410,
            darkseagreen: 9419919,
            darkslateblue: 4734347,
            darkslategray: 3100495,
            darkslategrey: 3100495,
            darkturquoise: 52945,
            darkviolet: 9699539,
            deeppink: 16716947,
            deepskyblue: 49151,
            dimgray: 6908265,
            dimgrey: 6908265,
            dodgerblue: 2003199,
            firebrick: 11674146,
            floralwhite: 16775920,
            forestgreen: 2263842,
            fuchsia: 16711935,
            gainsboro: 14474460,
            ghostwhite: 16316671,
            gold: 16766720,
            goldenrod: 14329120,
            gray: 8421504,
            green: 32768,
            greenyellow: 11403055,
            grey: 8421504,
            honeydew: 15794160,
            hotpink: 16738740,
            indianred: 13458524,
            indigo: 4915330,
            ivory: 16777200,
            khaki: 15787660,
            lavender: 15132410,
            lavenderblush: 16773365,
            lawngreen: 8190976,
            lemonchiffon: 16775885,
            lightblue: 11393254,
            lightcoral: 15761536,
            lightcyan: 14745599,
            lightgoldenrodyellow: 16448210,
            lightgray: 13882323,
            lightgreen: 9498256,
            lightgrey: 13882323,
            lightpink: 16758465,
            lightsalmon: 16752762,
            lightseagreen: 2142890,
            lightskyblue: 8900346,
            lightslategray: 7833753,
            lightslategrey: 7833753,
            lightsteelblue: 11584734,
            lightyellow: 16777184,
            lime: 65280,
            limegreen: 3329330,
            linen: 16445670,
            magenta: 16711935,
            maroon: 8388608,
            mediumaquamarine: 6737322,
            mediumblue: 205,
            mediumorchid: 12211667,
            mediumpurple: 9662683,
            mediumseagreen: 3978097,
            mediumslateblue: 8087790,
            mediumspringgreen: 64154,
            mediumturquoise: 4772300,
            mediumvioletred: 13047173,
            midnightblue: 1644912,
            mintcream: 16121850,
            mistyrose: 16770273,
            moccasin: 16770229,
            navajowhite: 16768685,
            navy: 128,
            oldlace: 16643558,
            olive: 8421376,
            olivedrab: 7048739,
            orange: 16753920,
            orangered: 16729344,
            orchid: 14315734,
            palegoldenrod: 15657130,
            palegreen: 10025880,
            paleturquoise: 11529966,
            palevioletred: 14381203,
            papayawhip: 16773077,
            peachpuff: 16767673,
            peru: 13468991,
            pink: 16761035,
            plum: 14524637,
            powderblue: 11591910,
            purple: 8388736,
            rebeccapurple: 6697881,
            red: 16711680,
            rosybrown: 12357519,
            royalblue: 4286945,
            saddlebrown: 9127187,
            salmon: 16416882,
            sandybrown: 16032864,
            seagreen: 3050327,
            seashell: 16774638,
            sienna: 10506797,
            silver: 12632256,
            skyblue: 8900331,
            slateblue: 6970061,
            slategray: 7372944,
            slategrey: 7372944,
            snow: 16775930,
            springgreen: 65407,
            steelblue: 4620980,
            tan: 13808780,
            teal: 32896,
            thistle: 14204888,
            tomato: 16737095,
            turquoise: 4251856,
            violet: 15631086,
            wheat: 16113331,
            white: 16777215,
            whitesmoke: 16119285,
            yellow: 16776960,
            yellowgreen: 10145074
        }
          , a = {
            h: 0,
            s: 0,
            l: 0
        }
          , s = {
            h: 0,
            s: 0,
            l: 0
        };
        function o(t, e, n) {
            return n < 0 && (n += 1),
            n > 1 && (n -= 1),
            n < 1 / 6 ? t + 6 * (e - t) * n : n < .5 ? e : n < 2 / 3 ? t + 6 * (e - t) * (2 / 3 - n) : t
        }
        function l(t) {
            return t < .04045 ? .0773993808 * t : Math.pow(.9478672986 * t + .0521327014, 2.4)
        }
        function c(t) {
            return t < .0031308 ? 12.92 * t : 1.055 * Math.pow(t, .41666) - .055
        }
        class u {
            constructor(t, e, n) {
                return void 0 === e && void 0 === n ? this.set(t) : this.setRGB(t, e, n)
            }
            set(t) {
                return t && t.isColor ? this.copy(t) : "number" == typeof t ? this.setHex(t) : "string" == typeof t && this.setStyle(t),
                this
            }
            setScalar(t) {
                return this.r = t,
                this.g = t,
                this.b = t,
                this
            }
            setHex(t) {
                return t = Math.floor(t),
                this.r = (t >> 16 & 255) / 255,
                this.g = (t >> 8 & 255) / 255,
                this.b = (255 & t) / 255,
                this
            }
            setRGB(t, e, n) {
                return this.r = t,
                this.g = e,
                this.b = n,
                this
            }
            setHSL(t, e, n) {
                if (t = i.kz(t, 1),
                e = i.uZ(e, 0, 1),
                n = i.uZ(n, 0, 1),
                0 === e)
                    this.r = this.g = this.b = n;
                else {
                    const i = n <= .5 ? n * (1 + e) : n + e - n * e
                      , r = 2 * n - i;
                    this.r = o(r, i, t + 1 / 3),
                    this.g = o(r, i, t),
                    this.b = o(r, i, t - 1 / 3)
                }
                return this
            }
            setStyle(t) {
                function e(e) {
                    void 0 !== e && parseFloat(e) < 1 && console.warn("THREE.Color: Alpha component of " + t + " will be ignored.")
                }
                let n;
                if (n = /^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t)) {
                    let t;
                    const i = n[1]
                      , r = n[2];
                    switch (i) {
                    case "rgb":
                    case "rgba":
                        if (t = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))
                            return this.r = Math.min(255, parseInt(t[1], 10)) / 255,
                            this.g = Math.min(255, parseInt(t[2], 10)) / 255,
                            this.b = Math.min(255, parseInt(t[3], 10)) / 255,
                            e(t[4]),
                            this;
                        if (t = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))
                            return this.r = Math.min(100, parseInt(t[1], 10)) / 100,
                            this.g = Math.min(100, parseInt(t[2], 10)) / 100,
                            this.b = Math.min(100, parseInt(t[3], 10)) / 100,
                            e(t[4]),
                            this;
                        break;
                    case "hsl":
                    case "hsla":
                        if (t = /^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r)) {
                            const n = parseFloat(t[1]) / 360
                              , i = parseInt(t[2], 10) / 100
                              , r = parseInt(t[3], 10) / 100;
                            return e(t[4]),
                            this.setHSL(n, i, r)
                        }
                    }
                } else if (n = /^\#([A-Fa-f\d]+)$/.exec(t)) {
                    const t = n[1]
                      , e = t.length;
                    if (3 === e)
                        return this.r = parseInt(t.charAt(0) + t.charAt(0), 16) / 255,
                        this.g = parseInt(t.charAt(1) + t.charAt(1), 16) / 255,
                        this.b = parseInt(t.charAt(2) + t.charAt(2), 16) / 255,
                        this;
                    if (6 === e)
                        return this.r = parseInt(t.charAt(0) + t.charAt(1), 16) / 255,
                        this.g = parseInt(t.charAt(2) + t.charAt(3), 16) / 255,
                        this.b = parseInt(t.charAt(4) + t.charAt(5), 16) / 255,
                        this
                }
                return t && t.length > 0 ? this.setColorName(t) : this
            }
            setColorName(t) {
                const e = r[t.toLowerCase()];
                return void 0 !== e ? this.setHex(e) : console.warn("THREE.Color: Unknown color " + t),
                this
            }
            clone() {
                return new this.constructor(this.r,this.g,this.b)
            }
            copy(t) {
                return this.r = t.r,
                this.g = t.g,
                this.b = t.b,
                this
            }
            copySRGBToLinear(t) {
                return this.r = l(t.r),
                this.g = l(t.g),
                this.b = l(t.b),
                this
            }
            copyLinearToSRGB(t) {
                return this.r = c(t.r),
                this.g = c(t.g),
                this.b = c(t.b),
                this
            }
            convertSRGBToLinear() {
                return this.copySRGBToLinear(this),
                this
            }
            convertLinearToSRGB() {
                return this.copyLinearToSRGB(this),
                this
            }
            getHex() {
                return 255 * this.r << 16 ^ 255 * this.g << 8 ^ 255 * this.b << 0
            }
            getHexString() {
                return ("000000" + this.getHex().toString(16)).slice(-6)
            }
            getHSL(t) {
                const e = this.r
                  , n = this.g
                  , i = this.b
                  , r = Math.max(e, n, i)
                  , a = Math.min(e, n, i);
                let s, o;
                const l = (a + r) / 2;
                if (a === r)
                    s = 0,
                    o = 0;
                else {
                    const t = r - a;
                    switch (o = l <= .5 ? t / (r + a) : t / (2 - r - a),
                    r) {
                    case e:
                        s = (n - i) / t + (n < i ? 6 : 0);
                        break;
                    case n:
                        s = (i - e) / t + 2;
                        break;
                    case i:
                        s = (e - n) / t + 4
                    }
                    s /= 6
                }
                return t.h = s,
                t.s = o,
                t.l = l,
                t
            }
            getStyle() {
                return "rgb(" + (255 * this.r | 0) + "," + (255 * this.g | 0) + "," + (255 * this.b | 0) + ")"
            }
            offsetHSL(t, e, n) {
                return this.getHSL(a),
                a.h += t,
                a.s += e,
                a.l += n,
                this.setHSL(a.h, a.s, a.l),
                this
            }
            add(t) {
                return this.r += t.r,
                this.g += t.g,
                this.b += t.b,
                this
            }
            addColors(t, e) {
                return this.r = t.r + e.r,
                this.g = t.g + e.g,
                this.b = t.b + e.b,
                this
            }
            addScalar(t) {
                return this.r += t,
                this.g += t,
                this.b += t,
                this
            }
            sub(t) {
                return this.r = Math.max(0, this.r - t.r),
                this.g = Math.max(0, this.g - t.g),
                this.b = Math.max(0, this.b - t.b),
                this
            }
            multiply(t) {
                return this.r *= t.r,
                this.g *= t.g,
                this.b *= t.b,
                this
            }
            multiplyScalar(t) {
                return this.r *= t,
                this.g *= t,
                this.b *= t,
                this
            }
            lerp(t, e) {
                return this.r += (t.r - this.r) * e,
                this.g += (t.g - this.g) * e,
                this.b += (t.b - this.b) * e,
                this
            }
            lerpColors(t, e, n) {
                return this.r = t.r + (e.r - t.r) * n,
                this.g = t.g + (e.g - t.g) * n,
                this.b = t.b + (e.b - t.b) * n,
                this
            }
            lerpHSL(t, e) {
                this.getHSL(a),
                t.getHSL(s);
                const n = i.t7(a.h, s.h, e)
                  , r = i.t7(a.s, s.s, e)
                  , o = i.t7(a.l, s.l, e);
                return this.setHSL(n, r, o),
                this
            }
            equals(t) {
                return t.r === this.r && t.g === this.g && t.b === this.b
            }
            fromArray(t, e=0) {
                return this.r = t[e],
                this.g = t[e + 1],
                this.b = t[e + 2],
                this
            }
            toArray(t=[], e=0) {
                return t[e] = this.r,
                t[e + 1] = this.g,
                t[e + 2] = this.b,
                t
            }
            fromBufferAttribute(t, e) {
                return this.r = t.getX(e),
                this.g = t.getY(e),
                this.b = t.getZ(e),
                !0 === t.normalized && (this.r /= 255,
                this.g /= 255,
                this.b /= 255),
                this
            }
            toJSON() {
                return this.getHex()
            }
        }
        u.NAMES = r,
        u.prototype.isColor = !0,
        u.prototype.r = 1,
        u.prototype.g = 1,
        u.prototype.b = 1
    }
    ,
    43: (t,e,n)=>{
        "use strict";
        n.d(e, {
            qW: ()=>r,
            I3: ()=>a,
            DO: ()=>s,
            uZ: ()=>o,
            kz: ()=>l,
            t7: ()=>c,
            wt: ()=>u,
            gy: ()=>h
        });
        const i = [];
        for (let t = 0; t < 256; t++)
            i[t] = (t < 16 ? "0" : "") + t.toString(16);
        const r = Math.PI / 180
          , a = 180 / Math.PI;
        function s() {
            const t = 4294967295 * Math.random() | 0
              , e = 4294967295 * Math.random() | 0
              , n = 4294967295 * Math.random() | 0
              , r = 4294967295 * Math.random() | 0;
            return (i[255 & t] + i[t >> 8 & 255] + i[t >> 16 & 255] + i[t >> 24 & 255] + "-" + i[255 & e] + i[e >> 8 & 255] + "-" + i[e >> 16 & 15 | 64] + i[e >> 24 & 255] + "-" + i[63 & n | 128] + i[n >> 8 & 255] + "-" + i[n >> 16 & 255] + i[n >> 24 & 255] + i[255 & r] + i[r >> 8 & 255] + i[r >> 16 & 255] + i[r >> 24 & 255]).toUpperCase()
        }
        function o(t, e, n) {
            return Math.max(e, Math.min(n, t))
        }
        function l(t, e) {
            return (t % e + e) % e
        }
        function c(t, e, n) {
            return (1 - n) * t + n * e
        }
        function u(t) {
            return 0 == (t & t - 1) && 0 !== t
        }
        function h(t) {
            return Math.pow(2, Math.floor(Math.log(t) / Math.LN2))
        }
    }
    ,
    273: (t,e,n)=>{
        "use strict";
        n.d(e, {
            V: ()=>i
        });
        class i {
            constructor() {
                this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1],
                arguments.length > 0 && console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")
            }
            set(t, e, n, i, r, a, s, o, l) {
                const c = this.elements;
                return c[0] = t,
                c[1] = i,
                c[2] = s,
                c[3] = e,
                c[4] = r,
                c[5] = o,
                c[6] = n,
                c[7] = a,
                c[8] = l,
                this
            }
            identity() {
                return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1),
                this
            }
            copy(t) {
                const e = this.elements
                  , n = t.elements;
                return e[0] = n[0],
                e[1] = n[1],
                e[2] = n[2],
                e[3] = n[3],
                e[4] = n[4],
                e[5] = n[5],
                e[6] = n[6],
                e[7] = n[7],
                e[8] = n[8],
                this
            }
            extractBasis(t, e, n) {
                return t.setFromMatrix3Column(this, 0),
                e.setFromMatrix3Column(this, 1),
                n.setFromMatrix3Column(this, 2),
                this
            }
            setFromMatrix4(t) {
                const e = t.elements;
                return this.set(e[0], e[4], e[8], e[1], e[5], e[9], e[2], e[6], e[10]),
                this
            }
            multiply(t) {
                return this.multiplyMatrices(this, t)
            }
            premultiply(t) {
                return this.multiplyMatrices(t, this)
            }
            multiplyMatrices(t, e) {
                const n = t.elements
                  , i = e.elements
                  , r = this.elements
                  , a = n[0]
                  , s = n[3]
                  , o = n[6]
                  , l = n[1]
                  , c = n[4]
                  , u = n[7]
                  , h = n[2]
                  , d = n[5]
                  , p = n[8]
                  , m = i[0]
                  , f = i[3]
                  , g = i[6]
                  , _ = i[1]
                  , v = i[4]
                  , x = i[7]
                  , y = i[2]
                  , b = i[5]
                  , M = i[8];
                return r[0] = a * m + s * _ + o * y,
                r[3] = a * f + s * v + o * b,
                r[6] = a * g + s * x + o * M,
                r[1] = l * m + c * _ + u * y,
                r[4] = l * f + c * v + u * b,
                r[7] = l * g + c * x + u * M,
                r[2] = h * m + d * _ + p * y,
                r[5] = h * f + d * v + p * b,
                r[8] = h * g + d * x + p * M,
                this
            }
            multiplyScalar(t) {
                const e = this.elements;
                return e[0] *= t,
                e[3] *= t,
                e[6] *= t,
                e[1] *= t,
                e[4] *= t,
                e[7] *= t,
                e[2] *= t,
                e[5] *= t,
                e[8] *= t,
                this
            }
            determinant() {
                const t = this.elements
                  , e = t[0]
                  , n = t[1]
                  , i = t[2]
                  , r = t[3]
                  , a = t[4]
                  , s = t[5]
                  , o = t[6]
                  , l = t[7]
                  , c = t[8];
                return e * a * c - e * s * l - n * r * c + n * s * o + i * r * l - i * a * o
            }
            invert() {
                const t = this.elements
                  , e = t[0]
                  , n = t[1]
                  , i = t[2]
                  , r = t[3]
                  , a = t[4]
                  , s = t[5]
                  , o = t[6]
                  , l = t[7]
                  , c = t[8]
                  , u = c * a - s * l
                  , h = s * o - c * r
                  , d = l * r - a * o
                  , p = e * u + n * h + i * d;
                if (0 === p)
                    return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
                const m = 1 / p;
                return t[0] = u * m,
                t[1] = (i * l - c * n) * m,
                t[2] = (s * n - i * a) * m,
                t[3] = h * m,
                t[4] = (c * e - i * o) * m,
                t[5] = (i * r - s * e) * m,
                t[6] = d * m,
                t[7] = (n * o - l * e) * m,
                t[8] = (a * e - n * r) * m,
                this
            }
            transpose() {
                let t;
                const e = this.elements;
                return t = e[1],
                e[1] = e[3],
                e[3] = t,
                t = e[2],
                e[2] = e[6],
                e[6] = t,
                t = e[5],
                e[5] = e[7],
                e[7] = t,
                this
            }
            getNormalMatrix(t) {
                return this.setFromMatrix4(t).invert().transpose()
            }
            transposeIntoArray(t) {
                const e = this.elements;
                return t[0] = e[0],
                t[1] = e[3],
                t[2] = e[6],
                t[3] = e[1],
                t[4] = e[4],
                t[5] = e[7],
                t[6] = e[2],
                t[7] = e[5],
                t[8] = e[8],
                this
            }
            setUvTransform(t, e, n, i, r, a, s) {
                const o = Math.cos(r)
                  , l = Math.sin(r);
                return this.set(n * o, n * l, -n * (o * a + l * s) + a + t, -i * l, i * o, -i * (-l * a + o * s) + s + e, 0, 0, 1),
                this
            }
            scale(t, e) {
                const n = this.elements;
                return n[0] *= t,
                n[3] *= t,
                n[6] *= t,
                n[1] *= e,
                n[4] *= e,
                n[7] *= e,
                this
            }
            rotate(t) {
                const e = Math.cos(t)
                  , n = Math.sin(t)
                  , i = this.elements
                  , r = i[0]
                  , a = i[3]
                  , s = i[6]
                  , o = i[1]
                  , l = i[4]
                  , c = i[7];
                return i[0] = e * r + n * o,
                i[3] = e * a + n * l,
                i[6] = e * s + n * c,
                i[1] = -n * r + e * o,
                i[4] = -n * a + e * l,
                i[7] = -n * s + e * c,
                this
            }
            translate(t, e) {
                const n = this.elements;
                return n[0] += t * n[2],
                n[3] += t * n[5],
                n[6] += t * n[8],
                n[1] += e * n[2],
                n[4] += e * n[5],
                n[7] += e * n[8],
                this
            }
            equals(t) {
                const e = this.elements
                  , n = t.elements;
                for (let t = 0; t < 9; t++)
                    if (e[t] !== n[t])
                        return !1;
                return !0
            }
            fromArray(t, e=0) {
                for (let n = 0; n < 9; n++)
                    this.elements[n] = t[n + e];
                return this
            }
            toArray(t=[], e=0) {
                const n = this.elements;
                return t[e] = n[0],
                t[e + 1] = n[1],
                t[e + 2] = n[2],
                t[e + 3] = n[3],
                t[e + 4] = n[4],
                t[e + 5] = n[5],
                t[e + 6] = n[6],
                t[e + 7] = n[7],
                t[e + 8] = n[8],
                t
            }
            clone() {
                return (new this.constructor).fromArray(this.elements)
            }
        }
        i.prototype.isMatrix3 = !0
    }
    ,
    203: (t,e,n)=>{
        "use strict";
        n.d(e, {
            y: ()=>r
        });
        var i = n(881);
        class r {
            constructor() {
                this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
                arguments.length > 0 && console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")
            }
            set(t, e, n, i, r, a, s, o, l, c, u, h, d, p, m, f) {
                const g = this.elements;
                return g[0] = t,
                g[4] = e,
                g[8] = n,
                g[12] = i,
                g[1] = r,
                g[5] = a,
                g[9] = s,
                g[13] = o,
                g[2] = l,
                g[6] = c,
                g[10] = u,
                g[14] = h,
                g[3] = d,
                g[7] = p,
                g[11] = m,
                g[15] = f,
                this
            }
            identity() {
                return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1),
                this
            }
            clone() {
                return (new r).fromArray(this.elements)
            }
            copy(t) {
                const e = this.elements
                  , n = t.elements;
                return e[0] = n[0],
                e[1] = n[1],
                e[2] = n[2],
                e[3] = n[3],
                e[4] = n[4],
                e[5] = n[5],
                e[6] = n[6],
                e[7] = n[7],
                e[8] = n[8],
                e[9] = n[9],
                e[10] = n[10],
                e[11] = n[11],
                e[12] = n[12],
                e[13] = n[13],
                e[14] = n[14],
                e[15] = n[15],
                this
            }
            copyPosition(t) {
                const e = this.elements
                  , n = t.elements;
                return e[12] = n[12],
                e[13] = n[13],
                e[14] = n[14],
                this
            }
            setFromMatrix3(t) {
                const e = t.elements;
                return this.set(e[0], e[3], e[6], 0, e[1], e[4], e[7], 0, e[2], e[5], e[8], 0, 0, 0, 0, 1),
                this
            }
            extractBasis(t, e, n) {
                return t.setFromMatrixColumn(this, 0),
                e.setFromMatrixColumn(this, 1),
                n.setFromMatrixColumn(this, 2),
                this
            }
            makeBasis(t, e, n) {
                return this.set(t.x, e.x, n.x, 0, t.y, e.y, n.y, 0, t.z, e.z, n.z, 0, 0, 0, 0, 1),
                this
            }
            extractRotation(t) {
                const e = this.elements
                  , n = t.elements
                  , i = 1 / a.setFromMatrixColumn(t, 0).length()
                  , r = 1 / a.setFromMatrixColumn(t, 1).length()
                  , s = 1 / a.setFromMatrixColumn(t, 2).length();
                return e[0] = n[0] * i,
                e[1] = n[1] * i,
                e[2] = n[2] * i,
                e[3] = 0,
                e[4] = n[4] * r,
                e[5] = n[5] * r,
                e[6] = n[6] * r,
                e[7] = 0,
                e[8] = n[8] * s,
                e[9] = n[9] * s,
                e[10] = n[10] * s,
                e[11] = 0,
                e[12] = 0,
                e[13] = 0,
                e[14] = 0,
                e[15] = 1,
                this
            }
            makeRotationFromEuler(t) {
                t && t.isEuler || console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
                const e = this.elements
                  , n = t.x
                  , i = t.y
                  , r = t.z
                  , a = Math.cos(n)
                  , s = Math.sin(n)
                  , o = Math.cos(i)
                  , l = Math.sin(i)
                  , c = Math.cos(r)
                  , u = Math.sin(r);
                if ("XYZ" === t.order) {
                    const t = a * c
                      , n = a * u
                      , i = s * c
                      , r = s * u;
                    e[0] = o * c,
                    e[4] = -o * u,
                    e[8] = l,
                    e[1] = n + i * l,
                    e[5] = t - r * l,
                    e[9] = -s * o,
                    e[2] = r - t * l,
                    e[6] = i + n * l,
                    e[10] = a * o
                } else if ("YXZ" === t.order) {
                    const t = o * c
                      , n = o * u
                      , i = l * c
                      , r = l * u;
                    e[0] = t + r * s,
                    e[4] = i * s - n,
                    e[8] = a * l,
                    e[1] = a * u,
                    e[5] = a * c,
                    e[9] = -s,
                    e[2] = n * s - i,
                    e[6] = r + t * s,
                    e[10] = a * o
                } else if ("ZXY" === t.order) {
                    const t = o * c
                      , n = o * u
                      , i = l * c
                      , r = l * u;
                    e[0] = t - r * s,
                    e[4] = -a * u,
                    e[8] = i + n * s,
                    e[1] = n + i * s,
                    e[5] = a * c,
                    e[9] = r - t * s,
                    e[2] = -a * l,
                    e[6] = s,
                    e[10] = a * o
                } else if ("ZYX" === t.order) {
                    const t = a * c
                      , n = a * u
                      , i = s * c
                      , r = s * u;
                    e[0] = o * c,
                    e[4] = i * l - n,
                    e[8] = t * l + r,
                    e[1] = o * u,
                    e[5] = r * l + t,
                    e[9] = n * l - i,
                    e[2] = -l,
                    e[6] = s * o,
                    e[10] = a * o
                } else if ("YZX" === t.order) {
                    const t = a * o
                      , n = a * l
                      , i = s * o
                      , r = s * l;
                    e[0] = o * c,
                    e[4] = r - t * u,
                    e[8] = i * u + n,
                    e[1] = u,
                    e[5] = a * c,
                    e[9] = -s * c,
                    e[2] = -l * c,
                    e[6] = n * u + i,
                    e[10] = t - r * u
                } else if ("XZY" === t.order) {
                    const t = a * o
                      , n = a * l
                      , i = s * o
                      , r = s * l;
                    e[0] = o * c,
                    e[4] = -u,
                    e[8] = l * c,
                    e[1] = t * u + r,
                    e[5] = a * c,
                    e[9] = n * u - i,
                    e[2] = i * u - n,
                    e[6] = s * c,
                    e[10] = r * u + t
                }
                return e[3] = 0,
                e[7] = 0,
                e[11] = 0,
                e[12] = 0,
                e[13] = 0,
                e[14] = 0,
                e[15] = 1,
                this
            }
            makeRotationFromQuaternion(t) {
                return this.compose(o, t, l)
            }
            lookAt(t, e, n) {
                const i = this.elements;
                return h.subVectors(t, e),
                0 === h.lengthSq() && (h.z = 1),
                h.normalize(),
                c.crossVectors(n, h),
                0 === c.lengthSq() && (1 === Math.abs(n.z) ? h.x += 1e-4 : h.z += 1e-4,
                h.normalize(),
                c.crossVectors(n, h)),
                c.normalize(),
                u.crossVectors(h, c),
                i[0] = c.x,
                i[4] = u.x,
                i[8] = h.x,
                i[1] = c.y,
                i[5] = u.y,
                i[9] = h.y,
                i[2] = c.z,
                i[6] = u.z,
                i[10] = h.z,
                this
            }
            multiply(t, e) {
                return void 0 !== e ? (console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),
                this.multiplyMatrices(t, e)) : this.multiplyMatrices(this, t)
            }
            premultiply(t) {
                return this.multiplyMatrices(t, this)
            }
            multiplyMatrices(t, e) {
                const n = t.elements
                  , i = e.elements
                  , r = this.elements
                  , a = n[0]
                  , s = n[4]
                  , o = n[8]
                  , l = n[12]
                  , c = n[1]
                  , u = n[5]
                  , h = n[9]
                  , d = n[13]
                  , p = n[2]
                  , m = n[6]
                  , f = n[10]
                  , g = n[14]
                  , _ = n[3]
                  , v = n[7]
                  , x = n[11]
                  , y = n[15]
                  , b = i[0]
                  , M = i[4]
                  , S = i[8]
                  , w = i[12]
                  , T = i[1]
                  , E = i[5]
                  , A = i[9]
                  , L = i[13]
                  , R = i[2]
                  , C = i[6]
                  , P = i[10]
                  , D = i[14]
                  , N = i[3]
                  , I = i[7]
                  , U = i[11]
                  , F = i[15];
                return r[0] = a * b + s * T + o * R + l * N,
                r[4] = a * M + s * E + o * C + l * I,
                r[8] = a * S + s * A + o * P + l * U,
                r[12] = a * w + s * L + o * D + l * F,
                r[1] = c * b + u * T + h * R + d * N,
                r[5] = c * M + u * E + h * C + d * I,
                r[9] = c * S + u * A + h * P + d * U,
                r[13] = c * w + u * L + h * D + d * F,
                r[2] = p * b + m * T + f * R + g * N,
                r[6] = p * M + m * E + f * C + g * I,
                r[10] = p * S + m * A + f * P + g * U,
                r[14] = p * w + m * L + f * D + g * F,
                r[3] = _ * b + v * T + x * R + y * N,
                r[7] = _ * M + v * E + x * C + y * I,
                r[11] = _ * S + v * A + x * P + y * U,
                r[15] = _ * w + v * L + x * D + y * F,
                this
            }
            multiplyScalar(t) {
                const e = this.elements;
                return e[0] *= t,
                e[4] *= t,
                e[8] *= t,
                e[12] *= t,
                e[1] *= t,
                e[5] *= t,
                e[9] *= t,
                e[13] *= t,
                e[2] *= t,
                e[6] *= t,
                e[10] *= t,
                e[14] *= t,
                e[3] *= t,
                e[7] *= t,
                e[11] *= t,
                e[15] *= t,
                this
            }
            determinant() {
                const t = this.elements
                  , e = t[0]
                  , n = t[4]
                  , i = t[8]
                  , r = t[12]
                  , a = t[1]
                  , s = t[5]
                  , o = t[9]
                  , l = t[13]
                  , c = t[2]
                  , u = t[6]
                  , h = t[10]
                  , d = t[14];
                return t[3] * (+r * o * u - i * l * u - r * s * h + n * l * h + i * s * d - n * o * d) + t[7] * (+e * o * d - e * l * h + r * a * h - i * a * d + i * l * c - r * o * c) + t[11] * (+e * l * u - e * s * d - r * a * u + n * a * d + r * s * c - n * l * c) + t[15] * (-i * s * c - e * o * u + e * s * h + i * a * u - n * a * h + n * o * c)
            }
            transpose() {
                const t = this.elements;
                let e;
                return e = t[1],
                t[1] = t[4],
                t[4] = e,
                e = t[2],
                t[2] = t[8],
                t[8] = e,
                e = t[6],
                t[6] = t[9],
                t[9] = e,
                e = t[3],
                t[3] = t[12],
                t[12] = e,
                e = t[7],
                t[7] = t[13],
                t[13] = e,
                e = t[11],
                t[11] = t[14],
                t[14] = e,
                this
            }
            setPosition(t, e, n) {
                const i = this.elements;
                return t.isVector3 ? (i[12] = t.x,
                i[13] = t.y,
                i[14] = t.z) : (i[12] = t,
                i[13] = e,
                i[14] = n),
                this
            }
            invert() {
                const t = this.elements
                  , e = t[0]
                  , n = t[1]
                  , i = t[2]
                  , r = t[3]
                  , a = t[4]
                  , s = t[5]
                  , o = t[6]
                  , l = t[7]
                  , c = t[8]
                  , u = t[9]
                  , h = t[10]
                  , d = t[11]
                  , p = t[12]
                  , m = t[13]
                  , f = t[14]
                  , g = t[15]
                  , _ = u * f * l - m * h * l + m * o * d - s * f * d - u * o * g + s * h * g
                  , v = p * h * l - c * f * l - p * o * d + a * f * d + c * o * g - a * h * g
                  , x = c * m * l - p * u * l + p * s * d - a * m * d - c * s * g + a * u * g
                  , y = p * u * o - c * m * o - p * s * h + a * m * h + c * s * f - a * u * f
                  , b = e * _ + n * v + i * x + r * y;
                if (0 === b)
                    return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                const M = 1 / b;
                return t[0] = _ * M,
                t[1] = (m * h * r - u * f * r - m * i * d + n * f * d + u * i * g - n * h * g) * M,
                t[2] = (s * f * r - m * o * r + m * i * l - n * f * l - s * i * g + n * o * g) * M,
                t[3] = (u * o * r - s * h * r - u * i * l + n * h * l + s * i * d - n * o * d) * M,
                t[4] = v * M,
                t[5] = (c * f * r - p * h * r + p * i * d - e * f * d - c * i * g + e * h * g) * M,
                t[6] = (p * o * r - a * f * r - p * i * l + e * f * l + a * i * g - e * o * g) * M,
                t[7] = (a * h * r - c * o * r + c * i * l - e * h * l - a * i * d + e * o * d) * M,
                t[8] = x * M,
                t[9] = (p * u * r - c * m * r - p * n * d + e * m * d + c * n * g - e * u * g) * M,
                t[10] = (a * m * r - p * s * r + p * n * l - e * m * l - a * n * g + e * s * g) * M,
                t[11] = (c * s * r - a * u * r - c * n * l + e * u * l + a * n * d - e * s * d) * M,
                t[12] = y * M,
                t[13] = (c * m * i - p * u * i + p * n * h - e * m * h - c * n * f + e * u * f) * M,
                t[14] = (p * s * i - a * m * i - p * n * o + e * m * o + a * n * f - e * s * f) * M,
                t[15] = (a * u * i - c * s * i + c * n * o - e * u * o - a * n * h + e * s * h) * M,
                this
            }
            scale(t) {
                const e = this.elements
                  , n = t.x
                  , i = t.y
                  , r = t.z;
                return e[0] *= n,
                e[4] *= i,
                e[8] *= r,
                e[1] *= n,
                e[5] *= i,
                e[9] *= r,
                e[2] *= n,
                e[6] *= i,
                e[10] *= r,
                e[3] *= n,
                e[7] *= i,
                e[11] *= r,
                this
            }
            getMaxScaleOnAxis() {
                const t = this.elements
                  , e = t[0] * t[0] + t[1] * t[1] + t[2] * t[2]
                  , n = t[4] * t[4] + t[5] * t[5] + t[6] * t[6]
                  , i = t[8] * t[8] + t[9] * t[9] + t[10] * t[10];
                return Math.sqrt(Math.max(e, n, i))
            }
            makeTranslation(t, e, n) {
                return this.set(1, 0, 0, t, 0, 1, 0, e, 0, 0, 1, n, 0, 0, 0, 1),
                this
            }
            makeRotationX(t) {
                const e = Math.cos(t)
                  , n = Math.sin(t);
                return this.set(1, 0, 0, 0, 0, e, -n, 0, 0, n, e, 0, 0, 0, 0, 1),
                this
            }
            makeRotationY(t) {
                const e = Math.cos(t)
                  , n = Math.sin(t);
                return this.set(e, 0, n, 0, 0, 1, 0, 0, -n, 0, e, 0, 0, 0, 0, 1),
                this
            }
            makeRotationZ(t) {
                const e = Math.cos(t)
                  , n = Math.sin(t);
                return this.set(e, -n, 0, 0, n, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1),
                this
            }
            makeRotationAxis(t, e) {
                const n = Math.cos(e)
                  , i = Math.sin(e)
                  , r = 1 - n
                  , a = t.x
                  , s = t.y
                  , o = t.z
                  , l = r * a
                  , c = r * s;
                return this.set(l * a + n, l * s - i * o, l * o + i * s, 0, l * s + i * o, c * s + n, c * o - i * a, 0, l * o - i * s, c * o + i * a, r * o * o + n, 0, 0, 0, 0, 1),
                this
            }
            makeScale(t, e, n) {
                return this.set(t, 0, 0, 0, 0, e, 0, 0, 0, 0, n, 0, 0, 0, 0, 1),
                this
            }
            makeShear(t, e, n, i, r, a) {
                return this.set(1, n, r, 0, t, 1, a, 0, e, i, 1, 0, 0, 0, 0, 1),
                this
            }
            compose(t, e, n) {
                const i = this.elements
                  , r = e._x
                  , a = e._y
                  , s = e._z
                  , o = e._w
                  , l = r + r
                  , c = a + a
                  , u = s + s
                  , h = r * l
                  , d = r * c
                  , p = r * u
                  , m = a * c
                  , f = a * u
                  , g = s * u
                  , _ = o * l
                  , v = o * c
                  , x = o * u
                  , y = n.x
                  , b = n.y
                  , M = n.z;
                return i[0] = (1 - (m + g)) * y,
                i[1] = (d + x) * y,
                i[2] = (p - v) * y,
                i[3] = 0,
                i[4] = (d - x) * b,
                i[5] = (1 - (h + g)) * b,
                i[6] = (f + _) * b,
                i[7] = 0,
                i[8] = (p + v) * M,
                i[9] = (f - _) * M,
                i[10] = (1 - (h + m)) * M,
                i[11] = 0,
                i[12] = t.x,
                i[13] = t.y,
                i[14] = t.z,
                i[15] = 1,
                this
            }
            decompose(t, e, n) {
                const i = this.elements;
                let r = a.set(i[0], i[1], i[2]).length();
                const o = a.set(i[4], i[5], i[6]).length()
                  , l = a.set(i[8], i[9], i[10]).length();
                this.determinant() < 0 && (r = -r),
                t.x = i[12],
                t.y = i[13],
                t.z = i[14],
                s.copy(this);
                const c = 1 / r
                  , u = 1 / o
                  , h = 1 / l;
                return s.elements[0] *= c,
                s.elements[1] *= c,
                s.elements[2] *= c,
                s.elements[4] *= u,
                s.elements[5] *= u,
                s.elements[6] *= u,
                s.elements[8] *= h,
                s.elements[9] *= h,
                s.elements[10] *= h,
                e.setFromRotationMatrix(s),
                n.x = r,
                n.y = o,
                n.z = l,
                this
            }
            makePerspective(t, e, n, i, r, a) {
                void 0 === a && console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");
                const s = this.elements
                  , o = 2 * r / (e - t)
                  , l = 2 * r / (n - i)
                  , c = (e + t) / (e - t)
                  , u = (n + i) / (n - i)
                  , h = -(a + r) / (a - r)
                  , d = -2 * a * r / (a - r);
                return s[0] = o,
                s[4] = 0,
                s[8] = c,
                s[12] = 0,
                s[1] = 0,
                s[5] = l,
                s[9] = u,
                s[13] = 0,
                s[2] = 0,
                s[6] = 0,
                s[10] = h,
                s[14] = d,
                s[3] = 0,
                s[7] = 0,
                s[11] = -1,
                s[15] = 0,
                this
            }
            makeOrthographic(t, e, n, i, r, a) {
                const s = this.elements
                  , o = 1 / (e - t)
                  , l = 1 / (n - i)
                  , c = 1 / (a - r)
                  , u = (e + t) * o
                  , h = (n + i) * l
                  , d = (a + r) * c;
                return s[0] = 2 * o,
                s[4] = 0,
                s[8] = 0,
                s[12] = -u,
                s[1] = 0,
                s[5] = 2 * l,
                s[9] = 0,
                s[13] = -h,
                s[2] = 0,
                s[6] = 0,
                s[10] = -2 * c,
                s[14] = -d,
                s[3] = 0,
                s[7] = 0,
                s[11] = 0,
                s[15] = 1,
                this
            }
            equals(t) {
                const e = this.elements
                  , n = t.elements;
                for (let t = 0; t < 16; t++)
                    if (e[t] !== n[t])
                        return !1;
                return !0
            }
            fromArray(t, e=0) {
                for (let n = 0; n < 16; n++)
                    this.elements[n] = t[n + e];
                return this
            }
            toArray(t=[], e=0) {
                const n = this.elements;
                return t[e] = n[0],
                t[e + 1] = n[1],
                t[e + 2] = n[2],
                t[e + 3] = n[3],
                t[e + 4] = n[4],
                t[e + 5] = n[5],
                t[e + 6] = n[6],
                t[e + 7] = n[7],
                t[e + 8] = n[8],
                t[e + 9] = n[9],
                t[e + 10] = n[10],
                t[e + 11] = n[11],
                t[e + 12] = n[12],
                t[e + 13] = n[13],
                t[e + 14] = n[14],
                t[e + 15] = n[15],
                t
            }
        }
        r.prototype.isMatrix4 = !0;
        const a = new i.P
          , s = new r
          , o = new i.P(0,0,0)
          , l = new i.P(1,1,1)
          , c = new i.P
          , u = new i.P
          , h = new i.P
    }
    ,
    92: (t,e,n)=>{
        "use strict";
        n.d(e, {
            _: ()=>r
        });
        var i = n(43);
        class r {
            constructor(t=0, e=0, n=0, i=1) {
                this._x = t,
                this._y = e,
                this._z = n,
                this._w = i
            }
            static slerp(t, e, n, i) {
                return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),
                n.slerpQuaternions(t, e, i)
            }
            static slerpFlat(t, e, n, i, r, a, s) {
                let o = n[i + 0]
                  , l = n[i + 1]
                  , c = n[i + 2]
                  , u = n[i + 3];
                const h = r[a + 0]
                  , d = r[a + 1]
                  , p = r[a + 2]
                  , m = r[a + 3];
                if (0 === s)
                    return t[e + 0] = o,
                    t[e + 1] = l,
                    t[e + 2] = c,
                    void (t[e + 3] = u);
                if (1 === s)
                    return t[e + 0] = h,
                    t[e + 1] = d,
                    t[e + 2] = p,
                    void (t[e + 3] = m);
                if (u !== m || o !== h || l !== d || c !== p) {
                    let t = 1 - s;
                    const e = o * h + l * d + c * p + u * m
                      , n = e >= 0 ? 1 : -1
                      , i = 1 - e * e;
                    if (i > Number.EPSILON) {
                        const r = Math.sqrt(i)
                          , a = Math.atan2(r, e * n);
                        t = Math.sin(t * a) / r,
                        s = Math.sin(s * a) / r
                    }
                    const r = s * n;
                    if (o = o * t + h * r,
                    l = l * t + d * r,
                    c = c * t + p * r,
                    u = u * t + m * r,
                    t === 1 - s) {
                        const t = 1 / Math.sqrt(o * o + l * l + c * c + u * u);
                        o *= t,
                        l *= t,
                        c *= t,
                        u *= t
                    }
                }
                t[e] = o,
                t[e + 1] = l,
                t[e + 2] = c,
                t[e + 3] = u
            }
            static multiplyQuaternionsFlat(t, e, n, i, r, a) {
                const s = n[i]
                  , o = n[i + 1]
                  , l = n[i + 2]
                  , c = n[i + 3]
                  , u = r[a]
                  , h = r[a + 1]
                  , d = r[a + 2]
                  , p = r[a + 3];
                return t[e] = s * p + c * u + o * d - l * h,
                t[e + 1] = o * p + c * h + l * u - s * d,
                t[e + 2] = l * p + c * d + s * h - o * u,
                t[e + 3] = c * p - s * u - o * h - l * d,
                t
            }
            get x() {
                return this._x
            }
            set x(t) {
                this._x = t,
                this._onChangeCallback()
            }
            get y() {
                return this._y
            }
            set y(t) {
                this._y = t,
                this._onChangeCallback()
            }
            get z() {
                return this._z
            }
            set z(t) {
                this._z = t,
                this._onChangeCallback()
            }
            get w() {
                return this._w
            }
            set w(t) {
                this._w = t,
                this._onChangeCallback()
            }
            set(t, e, n, i) {
                return this._x = t,
                this._y = e,
                this._z = n,
                this._w = i,
                this._onChangeCallback(),
                this
            }
            clone() {
                return new this.constructor(this._x,this._y,this._z,this._w)
            }
            copy(t) {
                return this._x = t.x,
                this._y = t.y,
                this._z = t.z,
                this._w = t.w,
                this._onChangeCallback(),
                this
            }
            setFromEuler(t, e) {
                if (!t || !t.isEuler)
                    throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");
                const n = t._x
                  , i = t._y
                  , r = t._z
                  , a = t._order
                  , s = Math.cos
                  , o = Math.sin
                  , l = s(n / 2)
                  , c = s(i / 2)
                  , u = s(r / 2)
                  , h = o(n / 2)
                  , d = o(i / 2)
                  , p = o(r / 2);
                switch (a) {
                case "XYZ":
                    this._x = h * c * u + l * d * p,
                    this._y = l * d * u - h * c * p,
                    this._z = l * c * p + h * d * u,
                    this._w = l * c * u - h * d * p;
                    break;
                case "YXZ":
                    this._x = h * c * u + l * d * p,
                    this._y = l * d * u - h * c * p,
                    this._z = l * c * p - h * d * u,
                    this._w = l * c * u + h * d * p;
                    break;
                case "ZXY":
                    this._x = h * c * u - l * d * p,
                    this._y = l * d * u + h * c * p,
                    this._z = l * c * p + h * d * u,
                    this._w = l * c * u - h * d * p;
                    break;
                case "ZYX":
                    this._x = h * c * u - l * d * p,
                    this._y = l * d * u + h * c * p,
                    this._z = l * c * p - h * d * u,
                    this._w = l * c * u + h * d * p;
                    break;
                case "YZX":
                    this._x = h * c * u + l * d * p,
                    this._y = l * d * u + h * c * p,
                    this._z = l * c * p - h * d * u,
                    this._w = l * c * u - h * d * p;
                    break;
                case "XZY":
                    this._x = h * c * u - l * d * p,
                    this._y = l * d * u - h * c * p,
                    this._z = l * c * p + h * d * u,
                    this._w = l * c * u + h * d * p;
                    break;
                default:
                    console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + a)
                }
                return !1 !== e && this._onChangeCallback(),
                this
            }
            setFromAxisAngle(t, e) {
                const n = e / 2
                  , i = Math.sin(n);
                return this._x = t.x * i,
                this._y = t.y * i,
                this._z = t.z * i,
                this._w = Math.cos(n),
                this._onChangeCallback(),
                this
            }
            setFromRotationMatrix(t) {
                const e = t.elements
                  , n = e[0]
                  , i = e[4]
                  , r = e[8]
                  , a = e[1]
                  , s = e[5]
                  , o = e[9]
                  , l = e[2]
                  , c = e[6]
                  , u = e[10]
                  , h = n + s + u;
                if (h > 0) {
                    const t = .5 / Math.sqrt(h + 1);
                    this._w = .25 / t,
                    this._x = (c - o) * t,
                    this._y = (r - l) * t,
                    this._z = (a - i) * t
                } else if (n > s && n > u) {
                    const t = 2 * Math.sqrt(1 + n - s - u);
                    this._w = (c - o) / t,
                    this._x = .25 * t,
                    this._y = (i + a) / t,
                    this._z = (r + l) / t
                } else if (s > u) {
                    const t = 2 * Math.sqrt(1 + s - n - u);
                    this._w = (r - l) / t,
                    this._x = (i + a) / t,
                    this._y = .25 * t,
                    this._z = (o + c) / t
                } else {
                    const t = 2 * Math.sqrt(1 + u - n - s);
                    this._w = (a - i) / t,
                    this._x = (r + l) / t,
                    this._y = (o + c) / t,
                    this._z = .25 * t
                }
                return this._onChangeCallback(),
                this
            }
            setFromUnitVectors(t, e) {
                let n = t.dot(e) + 1;
                return n < Number.EPSILON ? (n = 0,
                Math.abs(t.x) > Math.abs(t.z) ? (this._x = -t.y,
                this._y = t.x,
                this._z = 0,
                this._w = n) : (this._x = 0,
                this._y = -t.z,
                this._z = t.y,
                this._w = n)) : (this._x = t.y * e.z - t.z * e.y,
                this._y = t.z * e.x - t.x * e.z,
                this._z = t.x * e.y - t.y * e.x,
                this._w = n),
                this.normalize()
            }
            angleTo(t) {
                return 2 * Math.acos(Math.abs(i.uZ(this.dot(t), -1, 1)))
            }
            rotateTowards(t, e) {
                const n = this.angleTo(t);
                if (0 === n)
                    return this;
                const i = Math.min(1, e / n);
                return this.slerp(t, i),
                this
            }
            identity() {
                return this.set(0, 0, 0, 1)
            }
            invert() {
                return this.conjugate()
            }
            conjugate() {
                return this._x *= -1,
                this._y *= -1,
                this._z *= -1,
                this._onChangeCallback(),
                this
            }
            dot(t) {
                return this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w
            }
            lengthSq() {
                return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w
            }
            length() {
                return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w)
            }
            normalize() {
                let t = this.length();
                return 0 === t ? (this._x = 0,
                this._y = 0,
                this._z = 0,
                this._w = 1) : (t = 1 / t,
                this._x = this._x * t,
                this._y = this._y * t,
                this._z = this._z * t,
                this._w = this._w * t),
                this._onChangeCallback(),
                this
            }
            multiply(t, e) {
                return void 0 !== e ? (console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),
                this.multiplyQuaternions(t, e)) : this.multiplyQuaternions(this, t)
            }
            premultiply(t) {
                return this.multiplyQuaternions(t, this)
            }
            multiplyQuaternions(t, e) {
                const n = t._x
                  , i = t._y
                  , r = t._z
                  , a = t._w
                  , s = e._x
                  , o = e._y
                  , l = e._z
                  , c = e._w;
                return this._x = n * c + a * s + i * l - r * o,
                this._y = i * c + a * o + r * s - n * l,
                this._z = r * c + a * l + n * o - i * s,
                this._w = a * c - n * s - i * o - r * l,
                this._onChangeCallback(),
                this
            }
            slerp(t, e) {
                if (0 === e)
                    return this;
                if (1 === e)
                    return this.copy(t);
                const n = this._x
                  , i = this._y
                  , r = this._z
                  , a = this._w;
                let s = a * t._w + n * t._x + i * t._y + r * t._z;
                if (s < 0 ? (this._w = -t._w,
                this._x = -t._x,
                this._y = -t._y,
                this._z = -t._z,
                s = -s) : this.copy(t),
                s >= 1)
                    return this._w = a,
                    this._x = n,
                    this._y = i,
                    this._z = r,
                    this;
                const o = 1 - s * s;
                if (o <= Number.EPSILON) {
                    const t = 1 - e;
                    return this._w = t * a + e * this._w,
                    this._x = t * n + e * this._x,
                    this._y = t * i + e * this._y,
                    this._z = t * r + e * this._z,
                    this.normalize(),
                    this._onChangeCallback(),
                    this
                }
                const l = Math.sqrt(o)
                  , c = Math.atan2(l, s)
                  , u = Math.sin((1 - e) * c) / l
                  , h = Math.sin(e * c) / l;
                return this._w = a * u + this._w * h,
                this._x = n * u + this._x * h,
                this._y = i * u + this._y * h,
                this._z = r * u + this._z * h,
                this._onChangeCallback(),
                this
            }
            slerpQuaternions(t, e, n) {
                this.copy(t).slerp(e, n)
            }
            random() {
                const t = Math.random()
                  , e = Math.sqrt(1 - t)
                  , n = Math.sqrt(t)
                  , i = 2 * Math.PI * Math.random()
                  , r = 2 * Math.PI * Math.random();
                return this.set(e * Math.cos(i), n * Math.sin(r), n * Math.cos(r), e * Math.sin(i))
            }
            equals(t) {
                return t._x === this._x && t._y === this._y && t._z === this._z && t._w === this._w
            }
            fromArray(t, e=0) {
                return this._x = t[e],
                this._y = t[e + 1],
                this._z = t[e + 2],
                this._w = t[e + 3],
                this._onChangeCallback(),
                this
            }
            toArray(t=[], e=0) {
                return t[e] = this._x,
                t[e + 1] = this._y,
                t[e + 2] = this._z,
                t[e + 3] = this._w,
                t
            }
            fromBufferAttribute(t, e) {
                return this._x = t.getX(e),
                this._y = t.getY(e),
                this._z = t.getZ(e),
                this._w = t.getW(e),
                this
            }
            _onChange(t) {
                return this._onChangeCallback = t,
                this
            }
            _onChangeCallback() {}
        }
        r.prototype.isQuaternion = !0
    }
    ,
    540: (t,e,n)=>{
        "use strict";
        n.d(e, {
            z: ()=>h
        });
        var i = n(881);
        const r = new i.P
          , a = new i.P
          , s = new i.P
          , o = new i.P
          , l = new i.P
          , c = new i.P
          , u = new i.P;
        class h {
            constructor(t=new i.P, e=new i.P(0,0,-1)) {
                this.origin = t,
                this.direction = e
            }
            set(t, e) {
                return this.origin.copy(t),
                this.direction.copy(e),
                this
            }
            copy(t) {
                return this.origin.copy(t.origin),
                this.direction.copy(t.direction),
                this
            }
            at(t, e) {
                return e.copy(this.direction).multiplyScalar(t).add(this.origin)
            }
            lookAt(t) {
                return this.direction.copy(t).sub(this.origin).normalize(),
                this
            }
            recast(t) {
                return this.origin.copy(this.at(t, r)),
                this
            }
            closestPointToPoint(t, e) {
                e.subVectors(t, this.origin);
                const n = e.dot(this.direction);
                return n < 0 ? e.copy(this.origin) : e.copy(this.direction).multiplyScalar(n).add(this.origin)
            }
            distanceToPoint(t) {
                return Math.sqrt(this.distanceSqToPoint(t))
            }
            distanceSqToPoint(t) {
                const e = r.subVectors(t, this.origin).dot(this.direction);
                return e < 0 ? this.origin.distanceToSquared(t) : (r.copy(this.direction).multiplyScalar(e).add(this.origin),
                r.distanceToSquared(t))
            }
            distanceSqToSegment(t, e, n, i) {
                a.copy(t).add(e).multiplyScalar(.5),
                s.copy(e).sub(t).normalize(),
                o.copy(this.origin).sub(a);
                const r = .5 * t.distanceTo(e)
                  , l = -this.direction.dot(s)
                  , c = o.dot(this.direction)
                  , u = -o.dot(s)
                  , h = o.lengthSq()
                  , d = Math.abs(1 - l * l);
                let p, m, f, g;
                if (d > 0)
                    if (p = l * u - c,
                    m = l * c - u,
                    g = r * d,
                    p >= 0)
                        if (m >= -g)
                            if (m <= g) {
                                const t = 1 / d;
                                p *= t,
                                m *= t,
                                f = p * (p + l * m + 2 * c) + m * (l * p + m + 2 * u) + h
                            } else
                                m = r,
                                p = Math.max(0, -(l * m + c)),
                                f = -p * p + m * (m + 2 * u) + h;
                        else
                            m = -r,
                            p = Math.max(0, -(l * m + c)),
                            f = -p * p + m * (m + 2 * u) + h;
                    else
                        m <= -g ? (p = Math.max(0, -(-l * r + c)),
                        m = p > 0 ? -r : Math.min(Math.max(-r, -u), r),
                        f = -p * p + m * (m + 2 * u) + h) : m <= g ? (p = 0,
                        m = Math.min(Math.max(-r, -u), r),
                        f = m * (m + 2 * u) + h) : (p = Math.max(0, -(l * r + c)),
                        m = p > 0 ? r : Math.min(Math.max(-r, -u), r),
                        f = -p * p + m * (m + 2 * u) + h);
                else
                    m = l > 0 ? -r : r,
                    p = Math.max(0, -(l * m + c)),
                    f = -p * p + m * (m + 2 * u) + h;
                return n && n.copy(this.direction).multiplyScalar(p).add(this.origin),
                i && i.copy(s).multiplyScalar(m).add(a),
                f
            }
            intersectSphere(t, e) {
                r.subVectors(t.center, this.origin);
                const n = r.dot(this.direction)
                  , i = r.dot(r) - n * n
                  , a = t.radius * t.radius;
                if (i > a)
                    return null;
                const s = Math.sqrt(a - i)
                  , o = n - s
                  , l = n + s;
                return o < 0 && l < 0 ? null : o < 0 ? this.at(l, e) : this.at(o, e)
            }
            intersectsSphere(t) {
                return this.distanceSqToPoint(t.center) <= t.radius * t.radius
            }
            distanceToPlane(t) {
                const e = t.normal.dot(this.direction);
                if (0 === e)
                    return 0 === t.distanceToPoint(this.origin) ? 0 : null;
                const n = -(this.origin.dot(t.normal) + t.constant) / e;
                return n >= 0 ? n : null
            }
            intersectPlane(t, e) {
                const n = this.distanceToPlane(t);
                return null === n ? null : this.at(n, e)
            }
            intersectsPlane(t) {
                const e = t.distanceToPoint(this.origin);
                return 0 === e || t.normal.dot(this.direction) * e < 0
            }
            intersectBox(t, e) {
                let n, i, r, a, s, o;
                const l = 1 / this.direction.x
                  , c = 1 / this.direction.y
                  , u = 1 / this.direction.z
                  , h = this.origin;
                return l >= 0 ? (n = (t.min.x - h.x) * l,
                i = (t.max.x - h.x) * l) : (n = (t.max.x - h.x) * l,
                i = (t.min.x - h.x) * l),
                c >= 0 ? (r = (t.min.y - h.y) * c,
                a = (t.max.y - h.y) * c) : (r = (t.max.y - h.y) * c,
                a = (t.min.y - h.y) * c),
                n > a || r > i ? null : ((r > n || n != n) && (n = r),
                (a < i || i != i) && (i = a),
                u >= 0 ? (s = (t.min.z - h.z) * u,
                o = (t.max.z - h.z) * u) : (s = (t.max.z - h.z) * u,
                o = (t.min.z - h.z) * u),
                n > o || s > i ? null : ((s > n || n != n) && (n = s),
                (o < i || i != i) && (i = o),
                i < 0 ? null : this.at(n >= 0 ? n : i, e)))
            }
            intersectsBox(t) {
                return null !== this.intersectBox(t, r)
            }
            intersectTriangle(t, e, n, i, r) {
                l.subVectors(e, t),
                c.subVectors(n, t),
                u.crossVectors(l, c);
                let a, s = this.direction.dot(u);
                if (s > 0) {
                    if (i)
                        return null;
                    a = 1
                } else {
                    if (!(s < 0))
                        return null;
                    a = -1,
                    s = -s
                }
                o.subVectors(this.origin, t);
                const h = a * this.direction.dot(c.crossVectors(o, c));
                if (h < 0)
                    return null;
                const d = a * this.direction.dot(l.cross(o));
                if (d < 0)
                    return null;
                if (h + d > s)
                    return null;
                const p = -a * o.dot(u);
                return p < 0 ? null : this.at(p / s, r)
            }
            applyMatrix4(t) {
                return this.origin.applyMatrix4(t),
                this.direction.transformDirection(t),
                this
            }
            equals(t) {
                return t.origin.equals(this.origin) && t.direction.equals(this.direction)
            }
            clone() {
                return (new this.constructor).copy(this)
            }
        }
    }
    ,
    699: (t,e,n)=>{
        "use strict";
        n.d(e, {
            a: ()=>c
        });
        var i = n(898)
          , r = n(881);
        const a = new i.Z
          , s = new r.P
          , o = new r.P
          , l = new r.P;
        class c {
            constructor(t=new r.P, e=-1) {
                this.center = t,
                this.radius = e
            }
            set(t, e) {
                return this.center.copy(t),
                this.radius = e,
                this
            }
            setFromPoints(t, e) {
                const n = this.center;
                void 0 !== e ? n.copy(e) : a.setFromPoints(t).getCenter(n);
                let i = 0;
                for (let e = 0, r = t.length; e < r; e++)
                    i = Math.max(i, n.distanceToSquared(t[e]));
                return this.radius = Math.sqrt(i),
                this
            }
            copy(t) {
                return this.center.copy(t.center),
                this.radius = t.radius,
                this
            }
            isEmpty() {
                return this.radius < 0
            }
            makeEmpty() {
                return this.center.set(0, 0, 0),
                this.radius = -1,
                this
            }
            containsPoint(t) {
                return t.distanceToSquared(this.center) <= this.radius * this.radius
            }
            distanceToPoint(t) {
                return t.distanceTo(this.center) - this.radius
            }
            intersectsSphere(t) {
                const e = this.radius + t.radius;
                return t.center.distanceToSquared(this.center) <= e * e
            }
            intersectsBox(t) {
                return t.intersectsSphere(this)
            }
            intersectsPlane(t) {
                return Math.abs(t.distanceToPoint(this.center)) <= this.radius
            }
            clampPoint(t, e) {
                const n = this.center.distanceToSquared(t);
                return e.copy(t),
                n > this.radius * this.radius && (e.sub(this.center).normalize(),
                e.multiplyScalar(this.radius).add(this.center)),
                e
            }
            getBoundingBox(t) {
                return this.isEmpty() ? (t.makeEmpty(),
                t) : (t.set(this.center, this.center),
                t.expandByScalar(this.radius),
                t)
            }
            applyMatrix4(t) {
                return this.center.applyMatrix4(t),
                this.radius = this.radius * t.getMaxScaleOnAxis(),
                this
            }
            translate(t) {
                return this.center.add(t),
                this
            }
            expandByPoint(t) {
                l.subVectors(t, this.center);
                const e = l.lengthSq();
                if (e > this.radius * this.radius) {
                    const t = Math.sqrt(e)
                      , n = .5 * (t - this.radius);
                    this.center.add(l.multiplyScalar(n / t)),
                    this.radius += n
                }
                return this
            }
            union(t) {
                return !0 === this.center.equals(t.center) ? o.set(0, 0, 1).multiplyScalar(t.radius) : o.subVectors(t.center, this.center).normalize().multiplyScalar(t.radius),
                this.expandByPoint(s.copy(t.center).add(o)),
                this.expandByPoint(s.copy(t.center).sub(o)),
                this
            }
            equals(t) {
                return t.center.equals(this.center) && t.radius === this.radius
            }
            clone() {
                return (new this.constructor).copy(this)
            }
        }
    }
    ,
    138: (t,e,n)=>{
        "use strict";
        n.d(e, {
            F: ()=>i
        });
        class i {
            constructor(t=0, e=0) {
                this.x = t,
                this.y = e
            }
            get width() {
                return this.x
            }
            set width(t) {
                this.x = t
            }
            get height() {
                return this.y
            }
            set height(t) {
                this.y = t
            }
            set(t, e) {
                return this.x = t,
                this.y = e,
                this
            }
            setScalar(t) {
                return this.x = t,
                this.y = t,
                this
            }
            setX(t) {
                return this.x = t,
                this
            }
            setY(t) {
                return this.y = t,
                this
            }
            setComponent(t, e) {
                switch (t) {
                case 0:
                    this.x = e;
                    break;
                case 1:
                    this.y = e;
                    break;
                default:
                    throw new Error("index is out of range: " + t)
                }
                return this
            }
            getComponent(t) {
                switch (t) {
                case 0:
                    return this.x;
                case 1:
                    return this.y;
                default:
                    throw new Error("index is out of range: " + t)
                }
            }
            clone() {
                return new this.constructor(this.x,this.y)
            }
            copy(t) {
                return this.x = t.x,
                this.y = t.y,
                this
            }
            add(t, e) {
                return void 0 !== e ? (console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),
                this.addVectors(t, e)) : (this.x += t.x,
                this.y += t.y,
                this)
            }
            addScalar(t) {
                return this.x += t,
                this.y += t,
                this
            }
            addVectors(t, e) {
                return this.x = t.x + e.x,
                this.y = t.y + e.y,
                this
            }
            addScaledVector(t, e) {
                return this.x += t.x * e,
                this.y += t.y * e,
                this
            }
            sub(t, e) {
                return void 0 !== e ? (console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),
                this.subVectors(t, e)) : (this.x -= t.x,
                this.y -= t.y,
                this)
            }
            subScalar(t) {
                return this.x -= t,
                this.y -= t,
                this
            }
            subVectors(t, e) {
                return this.x = t.x - e.x,
                this.y = t.y - e.y,
                this
            }
            multiply(t) {
                return this.x *= t.x,
                this.y *= t.y,
                this
            }
            multiplyScalar(t) {
                return this.x *= t,
                this.y *= t,
                this
            }
            divide(t) {
                return this.x /= t.x,
                this.y /= t.y,
                this
            }
            divideScalar(t) {
                return this.multiplyScalar(1 / t)
            }
            applyMatrix3(t) {
                const e = this.x
                  , n = this.y
                  , i = t.elements;
                return this.x = i[0] * e + i[3] * n + i[6],
                this.y = i[1] * e + i[4] * n + i[7],
                this
            }
            min(t) {
                return this.x = Math.min(this.x, t.x),
                this.y = Math.min(this.y, t.y),
                this
            }
            max(t) {
                return this.x = Math.max(this.x, t.x),
                this.y = Math.max(this.y, t.y),
                this
            }
            clamp(t, e) {
                return this.x = Math.max(t.x, Math.min(e.x, this.x)),
                this.y = Math.max(t.y, Math.min(e.y, this.y)),
                this
            }
            clampScalar(t, e) {
                return this.x = Math.max(t, Math.min(e, this.x)),
                this.y = Math.max(t, Math.min(e, this.y)),
                this
            }
            clampLength(t, e) {
                const n = this.length();
                return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n)))
            }
            floor() {
                return this.x = Math.floor(this.x),
                this.y = Math.floor(this.y),
                this
            }
            ceil() {
                return this.x = Math.ceil(this.x),
                this.y = Math.ceil(this.y),
                this
            }
            round() {
                return this.x = Math.round(this.x),
                this.y = Math.round(this.y),
                this
            }
            roundToZero() {
                return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x),
                this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y),
                this
            }
            negate() {
                return this.x = -this.x,
                this.y = -this.y,
                this
            }
            dot(t) {
                return this.x * t.x + this.y * t.y
            }
            cross(t) {
                return this.x * t.y - this.y * t.x
            }
            lengthSq() {
                return this.x * this.x + this.y * this.y
            }
            length() {
                return Math.sqrt(this.x * this.x + this.y * this.y)
            }
            manhattanLength() {
                return Math.abs(this.x) + Math.abs(this.y)
            }
            normalize() {
                return this.divideScalar(this.length() || 1)
            }
            angle() {
                return Math.atan2(-this.y, -this.x) + Math.PI
            }
            distanceTo(t) {
                return Math.sqrt(this.distanceToSquared(t))
            }
            distanceToSquared(t) {
                const e = this.x - t.x
                  , n = this.y - t.y;
                return e * e + n * n
            }
            manhattanDistanceTo(t) {
                return Math.abs(this.x - t.x) + Math.abs(this.y - t.y)
            }
            setLength(t) {
                return this.normalize().multiplyScalar(t)
            }
            lerp(t, e) {
                return this.x += (t.x - this.x) * e,
                this.y += (t.y - this.y) * e,
                this
            }
            lerpVectors(t, e, n) {
                return this.x = t.x + (e.x - t.x) * n,
                this.y = t.y + (e.y - t.y) * n,
                this
            }
            equals(t) {
                return t.x === this.x && t.y === this.y
            }
            fromArray(t, e=0) {
                return this.x = t[e],
                this.y = t[e + 1],
                this
            }
            toArray(t=[], e=0) {
                return t[e] = this.x,
                t[e + 1] = this.y,
                t
            }
            fromBufferAttribute(t, e, n) {
                return void 0 !== n && console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),
                this.x = t.getX(e),
                this.y = t.getY(e),
                this
            }
            rotateAround(t, e) {
                const n = Math.cos(e)
                  , i = Math.sin(e)
                  , r = this.x - t.x
                  , a = this.y - t.y;
                return this.x = r * n - a * i + t.x,
                this.y = r * i + a * n + t.y,
                this
            }
            random() {
                return this.x = Math.random(),
                this.y = Math.random(),
                this
            }
            *[Symbol.iterator]() {
                yield this.x,
                yield this.y
            }
        }
        i.prototype.isVector2 = !0
    }
    ,
    881: (t,e,n)=>{
        "use strict";
        n.d(e, {
            P: ()=>a
        });
        var i = n(43)
          , r = n(92);
        class a {
            constructor(t=0, e=0, n=0) {
                this.x = t,
                this.y = e,
                this.z = n
            }
            set(t, e, n) {
                return void 0 === n && (n = this.z),
                this.x = t,
                this.y = e,
                this.z = n,
                this
            }
            setScalar(t) {
                return this.x = t,
                this.y = t,
                this.z = t,
                this
            }
            setX(t) {
                return this.x = t,
                this
            }
            setY(t) {
                return this.y = t,
                this
            }
            setZ(t) {
                return this.z = t,
                this
            }
            setComponent(t, e) {
                switch (t) {
                case 0:
                    this.x = e;
                    break;
                case 1:
                    this.y = e;
                    break;
                case 2:
                    this.z = e;
                    break;
                default:
                    throw new Error("index is out of range: " + t)
                }
                return this
            }
            getComponent(t) {
                switch (t) {
                case 0:
                    return this.x;
                case 1:
                    return this.y;
                case 2:
                    return this.z;
                default:
                    throw new Error("index is out of range: " + t)
                }
            }
            clone() {
                return new this.constructor(this.x,this.y,this.z)
            }
            copy(t) {
                return this.x = t.x,
                this.y = t.y,
                this.z = t.z,
                this
            }
            add(t, e) {
                return void 0 !== e ? (console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),
                this.addVectors(t, e)) : (this.x += t.x,
                this.y += t.y,
                this.z += t.z,
                this)
            }
            addScalar(t) {
                return this.x += t,
                this.y += t,
                this.z += t,
                this
            }
            addVectors(t, e) {
                return this.x = t.x + e.x,
                this.y = t.y + e.y,
                this.z = t.z + e.z,
                this
            }
            addScaledVector(t, e) {
                return this.x += t.x * e,
                this.y += t.y * e,
                this.z += t.z * e,
                this
            }
            sub(t, e) {
                return void 0 !== e ? (console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),
                this.subVectors(t, e)) : (this.x -= t.x,
                this.y -= t.y,
                this.z -= t.z,
                this)
            }
            subScalar(t) {
                return this.x -= t,
                this.y -= t,
                this.z -= t,
                this
            }
            subVectors(t, e) {
                return this.x = t.x - e.x,
                this.y = t.y - e.y,
                this.z = t.z - e.z,
                this
            }
            multiply(t, e) {
                return void 0 !== e ? (console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),
                this.multiplyVectors(t, e)) : (this.x *= t.x,
                this.y *= t.y,
                this.z *= t.z,
                this)
            }
            multiplyScalar(t) {
                return this.x *= t,
                this.y *= t,
                this.z *= t,
                this
            }
            multiplyVectors(t, e) {
                return this.x = t.x * e.x,
                this.y = t.y * e.y,
                this.z = t.z * e.z,
                this
            }
            applyEuler(t) {
                return t && t.isEuler || console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),
                this.applyQuaternion(o.setFromEuler(t))
            }
            applyAxisAngle(t, e) {
                return this.applyQuaternion(o.setFromAxisAngle(t, e))
            }
            applyMatrix3(t) {
                const e = this.x
                  , n = this.y
                  , i = this.z
                  , r = t.elements;
                return this.x = r[0] * e + r[3] * n + r[6] * i,
                this.y = r[1] * e + r[4] * n + r[7] * i,
                this.z = r[2] * e + r[5] * n + r[8] * i,
                this
            }
            applyNormalMatrix(t) {
                return this.applyMatrix3(t).normalize()
            }
            applyMatrix4(t) {
                const e = this.x
                  , n = this.y
                  , i = this.z
                  , r = t.elements
                  , a = 1 / (r[3] * e + r[7] * n + r[11] * i + r[15]);
                return this.x = (r[0] * e + r[4] * n + r[8] * i + r[12]) * a,
                this.y = (r[1] * e + r[5] * n + r[9] * i + r[13]) * a,
                this.z = (r[2] * e + r[6] * n + r[10] * i + r[14]) * a,
                this
            }
            applyQuaternion(t) {
                const e = this.x
                  , n = this.y
                  , i = this.z
                  , r = t.x
                  , a = t.y
                  , s = t.z
                  , o = t.w
                  , l = o * e + a * i - s * n
                  , c = o * n + s * e - r * i
                  , u = o * i + r * n - a * e
                  , h = -r * e - a * n - s * i;
                return this.x = l * o + h * -r + c * -s - u * -a,
                this.y = c * o + h * -a + u * -r - l * -s,
                this.z = u * o + h * -s + l * -a - c * -r,
                this
            }
            project(t) {
                return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)
            }
            unproject(t) {
                return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)
            }
            transformDirection(t) {
                const e = this.x
                  , n = this.y
                  , i = this.z
                  , r = t.elements;
                return this.x = r[0] * e + r[4] * n + r[8] * i,
                this.y = r[1] * e + r[5] * n + r[9] * i,
                this.z = r[2] * e + r[6] * n + r[10] * i,
                this.normalize()
            }
            divide(t) {
                return this.x /= t.x,
                this.y /= t.y,
                this.z /= t.z,
                this
            }
            divideScalar(t) {
                return this.multiplyScalar(1 / t)
            }
            min(t) {
                return this.x = Math.min(this.x, t.x),
                this.y = Math.min(this.y, t.y),
                this.z = Math.min(this.z, t.z),
                this
            }
            max(t) {
                return this.x = Math.max(this.x, t.x),
                this.y = Math.max(this.y, t.y),
                this.z = Math.max(this.z, t.z),
                this
            }
            clamp(t, e) {
                return this.x = Math.max(t.x, Math.min(e.x, this.x)),
                this.y = Math.max(t.y, Math.min(e.y, this.y)),
                this.z = Math.max(t.z, Math.min(e.z, this.z)),
                this
            }
            clampScalar(t, e) {
                return this.x = Math.max(t, Math.min(e, this.x)),
                this.y = Math.max(t, Math.min(e, this.y)),
                this.z = Math.max(t, Math.min(e, this.z)),
                this
            }
            clampLength(t, e) {
                const n = this.length();
                return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n)))
            }
            floor() {
                return this.x = Math.floor(this.x),
                this.y = Math.floor(this.y),
                this.z = Math.floor(this.z),
                this
            }
            ceil() {
                return this.x = Math.ceil(this.x),
                this.y = Math.ceil(this.y),
                this.z = Math.ceil(this.z),
                this
            }
            round() {
                return this.x = Math.round(this.x),
                this.y = Math.round(this.y),
                this.z = Math.round(this.z),
                this
            }
            roundToZero() {
                return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x),
                this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y),
                this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z),
                this
            }
            negate() {
                return this.x = -this.x,
                this.y = -this.y,
                this.z = -this.z,
                this
            }
            dot(t) {
                return this.x * t.x + this.y * t.y + this.z * t.z
            }
            lengthSq() {
                return this.x * this.x + this.y * this.y + this.z * this.z
            }
            length() {
                return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
            }
            manhattanLength() {
                return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z)
            }
            normalize() {
                return this.divideScalar(this.length() || 1)
            }
            setLength(t) {
                return this.normalize().multiplyScalar(t)
            }
            lerp(t, e) {
                return this.x += (t.x - this.x) * e,
                this.y += (t.y - this.y) * e,
                this.z += (t.z - this.z) * e,
                this
            }
            lerpVectors(t, e, n) {
                return this.x = t.x + (e.x - t.x) * n,
                this.y = t.y + (e.y - t.y) * n,
                this.z = t.z + (e.z - t.z) * n,
                this
            }
            cross(t, e) {
                return void 0 !== e ? (console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),
                this.crossVectors(t, e)) : this.crossVectors(this, t)
            }
            crossVectors(t, e) {
                const n = t.x
                  , i = t.y
                  , r = t.z
                  , a = e.x
                  , s = e.y
                  , o = e.z;
                return this.x = i * o - r * s,
                this.y = r * a - n * o,
                this.z = n * s - i * a,
                this
            }
            projectOnVector(t) {
                const e = t.lengthSq();
                if (0 === e)
                    return this.set(0, 0, 0);
                const n = t.dot(this) / e;
                return this.copy(t).multiplyScalar(n)
            }
            projectOnPlane(t) {
                return s.copy(this).projectOnVector(t),
                this.sub(s)
            }
            reflect(t) {
                return this.sub(s.copy(t).multiplyScalar(2 * this.dot(t)))
            }
            angleTo(t) {
                const e = Math.sqrt(this.lengthSq() * t.lengthSq());
                if (0 === e)
                    return Math.PI / 2;
                const n = this.dot(t) / e;
                return Math.acos(i.uZ(n, -1, 1))
            }
            distanceTo(t) {
                return Math.sqrt(this.distanceToSquared(t))
            }
            distanceToSquared(t) {
                const e = this.x - t.x
                  , n = this.y - t.y
                  , i = this.z - t.z;
                return e * e + n * n + i * i
            }
            manhattanDistanceTo(t) {
                return Math.abs(this.x - t.x) + Math.abs(this.y - t.y) + Math.abs(this.z - t.z)
            }
            setFromSpherical(t) {
                return this.setFromSphericalCoords(t.radius, t.phi, t.theta)
            }
            setFromSphericalCoords(t, e, n) {
                const i = Math.sin(e) * t;
                return this.x = i * Math.sin(n),
                this.y = Math.cos(e) * t,
                this.z = i * Math.cos(n),
                this
            }
            setFromCylindrical(t) {
                return this.setFromCylindricalCoords(t.radius, t.theta, t.y)
            }
            setFromCylindricalCoords(t, e, n) {
                return this.x = t * Math.sin(e),
                this.y = n,
                this.z = t * Math.cos(e),
                this
            }
            setFromMatrixPosition(t) {
                const e = t.elements;
                return this.x = e[12],
                this.y = e[13],
                this.z = e[14],
                this
            }
            setFromMatrixScale(t) {
                const e = this.setFromMatrixColumn(t, 0).length()
                  , n = this.setFromMatrixColumn(t, 1).length()
                  , i = this.setFromMatrixColumn(t, 2).length();
                return this.x = e,
                this.y = n,
                this.z = i,
                this
            }
            setFromMatrixColumn(t, e) {
                return this.fromArray(t.elements, 4 * e)
            }
            setFromMatrix3Column(t, e) {
                return this.fromArray(t.elements, 3 * e)
            }
            equals(t) {
                return t.x === this.x && t.y === this.y && t.z === this.z
            }
            fromArray(t, e=0) {
                return this.x = t[e],
                this.y = t[e + 1],
                this.z = t[e + 2],
                this
            }
            toArray(t=[], e=0) {
                return t[e] = this.x,
                t[e + 1] = this.y,
                t[e + 2] = this.z,
                t
            }
            fromBufferAttribute(t, e, n) {
                return void 0 !== n && console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),
                this.x = t.getX(e),
                this.y = t.getY(e),
                this.z = t.getZ(e),
                this
            }
            random() {
                return this.x = Math.random(),
                this.y = Math.random(),
                this.z = Math.random(),
                this
            }
            randomDirection() {
                const t = 2 * (Math.random() - .5)
                  , e = Math.random() * Math.PI * 2
                  , n = Math.sqrt(1 - t ** 2);
                return this.x = n * Math.cos(e),
                this.y = n * Math.sin(e),
                this.z = t,
                this
            }
            *[Symbol.iterator]() {
                yield this.x,
                yield this.y,
                yield this.z
            }
        }
        a.prototype.isVector3 = !0;
        const s = new a
          , o = new r._
    }
    ,
    223: (t,e,n)=>{
        "use strict";
        n.d(e, {
            L: ()=>i
        });
        class i {
            constructor(t=0, e=0, n=0, i=1) {
                this.x = t,
                this.y = e,
                this.z = n,
                this.w = i
            }
            get width() {
                return this.z
            }
            set width(t) {
                this.z = t
            }
            get height() {
                return this.w
            }
            set height(t) {
                this.w = t
            }
            set(t, e, n, i) {
                return this.x = t,
                this.y = e,
                this.z = n,
                this.w = i,
                this
            }
            setScalar(t) {
                return this.x = t,
                this.y = t,
                this.z = t,
                this.w = t,
                this
            }
            setX(t) {
                return this.x = t,
                this
            }
            setY(t) {
                return this.y = t,
                this
            }
            setZ(t) {
                return this.z = t,
                this
            }
            setW(t) {
                return this.w = t,
                this
            }
            setComponent(t, e) {
                switch (t) {
                case 0:
                    this.x = e;
                    break;
                case 1:
                    this.y = e;
                    break;
                case 2:
                    this.z = e;
                    break;
                case 3:
                    this.w = e;
                    break;
                default:
                    throw new Error("index is out of range: " + t)
                }
                return this
            }
            getComponent(t) {
                switch (t) {
                case 0:
                    return this.x;
                case 1:
                    return this.y;
                case 2:
                    return this.z;
                case 3:
                    return this.w;
                default:
                    throw new Error("index is out of range: " + t)
                }
            }
            clone() {
                return new this.constructor(this.x,this.y,this.z,this.w)
            }
            copy(t) {
                return this.x = t.x,
                this.y = t.y,
                this.z = t.z,
                this.w = void 0 !== t.w ? t.w : 1,
                this
            }
            add(t, e) {
                return void 0 !== e ? (console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),
                this.addVectors(t, e)) : (this.x += t.x,
                this.y += t.y,
                this.z += t.z,
                this.w += t.w,
                this)
            }
            addScalar(t) {
                return this.x += t,
                this.y += t,
                this.z += t,
                this.w += t,
                this
            }
            addVectors(t, e) {
                return this.x = t.x + e.x,
                this.y = t.y + e.y,
                this.z = t.z + e.z,
                this.w = t.w + e.w,
                this
            }
            addScaledVector(t, e) {
                return this.x += t.x * e,
                this.y += t.y * e,
                this.z += t.z * e,
                this.w += t.w * e,
                this
            }
            sub(t, e) {
                return void 0 !== e ? (console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),
                this.subVectors(t, e)) : (this.x -= t.x,
                this.y -= t.y,
                this.z -= t.z,
                this.w -= t.w,
                this)
            }
            subScalar(t) {
                return this.x -= t,
                this.y -= t,
                this.z -= t,
                this.w -= t,
                this
            }
            subVectors(t, e) {
                return this.x = t.x - e.x,
                this.y = t.y - e.y,
                this.z = t.z - e.z,
                this.w = t.w - e.w,
                this
            }
            multiply(t) {
                return this.x *= t.x,
                this.y *= t.y,
                this.z *= t.z,
                this.w *= t.w,
                this
            }
            multiplyScalar(t) {
                return this.x *= t,
                this.y *= t,
                this.z *= t,
                this.w *= t,
                this
            }
            applyMatrix4(t) {
                const e = this.x
                  , n = this.y
                  , i = this.z
                  , r = this.w
                  , a = t.elements;
                return this.x = a[0] * e + a[4] * n + a[8] * i + a[12] * r,
                this.y = a[1] * e + a[5] * n + a[9] * i + a[13] * r,
                this.z = a[2] * e + a[6] * n + a[10] * i + a[14] * r,
                this.w = a[3] * e + a[7] * n + a[11] * i + a[15] * r,
                this
            }
            divideScalar(t) {
                return this.multiplyScalar(1 / t)
            }
            setAxisAngleFromQuaternion(t) {
                this.w = 2 * Math.acos(t.w);
                const e = Math.sqrt(1 - t.w * t.w);
                return e < 1e-4 ? (this.x = 1,
                this.y = 0,
                this.z = 0) : (this.x = t.x / e,
                this.y = t.y / e,
                this.z = t.z / e),
                this
            }
            setAxisAngleFromRotationMatrix(t) {
                let e, n, i, r;
                const a = .01
                  , s = .1
                  , o = t.elements
                  , l = o[0]
                  , c = o[4]
                  , u = o[8]
                  , h = o[1]
                  , d = o[5]
                  , p = o[9]
                  , m = o[2]
                  , f = o[6]
                  , g = o[10];
                if (Math.abs(c - h) < a && Math.abs(u - m) < a && Math.abs(p - f) < a) {
                    if (Math.abs(c + h) < s && Math.abs(u + m) < s && Math.abs(p + f) < s && Math.abs(l + d + g - 3) < s)
                        return this.set(1, 0, 0, 0),
                        this;
                    e = Math.PI;
                    const t = (l + 1) / 2
                      , o = (d + 1) / 2
                      , _ = (g + 1) / 2
                      , v = (c + h) / 4
                      , x = (u + m) / 4
                      , y = (p + f) / 4;
                    return t > o && t > _ ? t < a ? (n = 0,
                    i = .707106781,
                    r = .707106781) : (n = Math.sqrt(t),
                    i = v / n,
                    r = x / n) : o > _ ? o < a ? (n = .707106781,
                    i = 0,
                    r = .707106781) : (i = Math.sqrt(o),
                    n = v / i,
                    r = y / i) : _ < a ? (n = .707106781,
                    i = .707106781,
                    r = 0) : (r = Math.sqrt(_),
                    n = x / r,
                    i = y / r),
                    this.set(n, i, r, e),
                    this
                }
                let _ = Math.sqrt((f - p) * (f - p) + (u - m) * (u - m) + (h - c) * (h - c));
                return Math.abs(_) < .001 && (_ = 1),
                this.x = (f - p) / _,
                this.y = (u - m) / _,
                this.z = (h - c) / _,
                this.w = Math.acos((l + d + g - 1) / 2),
                this
            }
            min(t) {
                return this.x = Math.min(this.x, t.x),
                this.y = Math.min(this.y, t.y),
                this.z = Math.min(this.z, t.z),
                this.w = Math.min(this.w, t.w),
                this
            }
            max(t) {
                return this.x = Math.max(this.x, t.x),
                this.y = Math.max(this.y, t.y),
                this.z = Math.max(this.z, t.z),
                this.w = Math.max(this.w, t.w),
                this
            }
            clamp(t, e) {
                return this.x = Math.max(t.x, Math.min(e.x, this.x)),
                this.y = Math.max(t.y, Math.min(e.y, this.y)),
                this.z = Math.max(t.z, Math.min(e.z, this.z)),
                this.w = Math.max(t.w, Math.min(e.w, this.w)),
                this
            }
            clampScalar(t, e) {
                return this.x = Math.max(t, Math.min(e, this.x)),
                this.y = Math.max(t, Math.min(e, this.y)),
                this.z = Math.max(t, Math.min(e, this.z)),
                this.w = Math.max(t, Math.min(e, this.w)),
                this
            }
            clampLength(t, e) {
                const n = this.length();
                return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n)))
            }
            floor() {
                return this.x = Math.floor(this.x),
                this.y = Math.floor(this.y),
                this.z = Math.floor(this.z),
                this.w = Math.floor(this.w),
                this
            }
            ceil() {
                return this.x = Math.ceil(this.x),
                this.y = Math.ceil(this.y),
                this.z = Math.ceil(this.z),
                this.w = Math.ceil(this.w),
                this
            }
            round() {
                return this.x = Math.round(this.x),
                this.y = Math.round(this.y),
                this.z = Math.round(this.z),
                this.w = Math.round(this.w),
                this
            }
            roundToZero() {
                return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x),
                this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y),
                this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z),
                this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w),
                this
            }
            negate() {
                return this.x = -this.x,
                this.y = -this.y,
                this.z = -this.z,
                this.w = -this.w,
                this
            }
            dot(t) {
                return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w
            }
            lengthSq() {
                return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
            }
            length() {
                return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
            }
            manhattanLength() {
                return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
            }
            normalize() {
                return this.divideScalar(this.length() || 1)
            }
            setLength(t) {
                return this.normalize().multiplyScalar(t)
            }
            lerp(t, e) {
                return this.x += (t.x - this.x) * e,
                this.y += (t.y - this.y) * e,
                this.z += (t.z - this.z) * e,
                this.w += (t.w - this.w) * e,
                this
            }
            lerpVectors(t, e, n) {
                return this.x = t.x + (e.x - t.x) * n,
                this.y = t.y + (e.y - t.y) * n,
                this.z = t.z + (e.z - t.z) * n,
                this.w = t.w + (e.w - t.w) * n,
                this
            }
            equals(t) {
                return t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w
            }
            fromArray(t, e=0) {
                return this.x = t[e],
                this.y = t[e + 1],
                this.z = t[e + 2],
                this.w = t[e + 3],
                this
            }
            toArray(t=[], e=0) {
                return t[e] = this.x,
                t[e + 1] = this.y,
                t[e + 2] = this.z,
                t[e + 3] = this.w,
                t
            }
            fromBufferAttribute(t, e, n) {
                return void 0 !== n && console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),
                this.x = t.getX(e),
                this.y = t.getY(e),
                this.z = t.getZ(e),
                this.w = t.getW(e),
                this
            }
            random() {
                return this.x = Math.random(),
                this.y = Math.random(),
                this.z = Math.random(),
                this.w = Math.random(),
                this
            }
            *[Symbol.iterator]() {
                yield this.x,
                yield this.y,
                yield this.z,
                yield this.w
            }
        }
        i.prototype.isVector4 = !0
    }
    ,
    10: (t,e,n)=>{
        "use strict";
        n.d(e, {
            Z: ()=>r
        });
        var i = n(353);
        class r extends i.T {
            constructor() {
                super(),
                this.type = "Group"
            }
        }
        r.prototype.isGroup = !0
    }
    ,
    457: (t,e,n)=>{
        "use strict";
        n.d(e, {
            K: ()=>G
        });
        var i = n(881)
          , r = n(138)
          , a = n(699)
          , s = n(540)
          , o = n(203)
          , l = n(353);
        const c = new i.P
          , u = new i.P
          , h = new i.P
          , d = new i.P
          , p = new i.P
          , m = new i.P
          , f = new i.P
          , g = new i.P
          , _ = new i.P
          , v = new i.P;
        class x {
            constructor(t=new i.P, e=new i.P, n=new i.P) {
                this.a = t,
                this.b = e,
                this.c = n
            }
            static getNormal(t, e, n, i) {
                i.subVectors(n, e),
                c.subVectors(t, e),
                i.cross(c);
                const r = i.lengthSq();
                return r > 0 ? i.multiplyScalar(1 / Math.sqrt(r)) : i.set(0, 0, 0)
            }
            static getBarycoord(t, e, n, i, r) {
                c.subVectors(i, e),
                u.subVectors(n, e),
                h.subVectors(t, e);
                const a = c.dot(c)
                  , s = c.dot(u)
                  , o = c.dot(h)
                  , l = u.dot(u)
                  , d = u.dot(h)
                  , p = a * l - s * s;
                if (0 === p)
                    return r.set(-2, -1, -1);
                const m = 1 / p
                  , f = (l * o - s * d) * m
                  , g = (a * d - s * o) * m;
                return r.set(1 - f - g, g, f)
            }
            static containsPoint(t, e, n, i) {
                return this.getBarycoord(t, e, n, i, d),
                d.x >= 0 && d.y >= 0 && d.x + d.y <= 1
            }
            static getUV(t, e, n, i, r, a, s, o) {
                return this.getBarycoord(t, e, n, i, d),
                o.set(0, 0),
                o.addScaledVector(r, d.x),
                o.addScaledVector(a, d.y),
                o.addScaledVector(s, d.z),
                o
            }
            static isFrontFacing(t, e, n, i) {
                return c.subVectors(n, e),
                u.subVectors(t, e),
                c.cross(u).dot(i) < 0
            }
            set(t, e, n) {
                return this.a.copy(t),
                this.b.copy(e),
                this.c.copy(n),
                this
            }
            setFromPointsAndIndices(t, e, n, i) {
                return this.a.copy(t[e]),
                this.b.copy(t[n]),
                this.c.copy(t[i]),
                this
            }
            setFromAttributeAndIndices(t, e, n, i) {
                return this.a.fromBufferAttribute(t, e),
                this.b.fromBufferAttribute(t, n),
                this.c.fromBufferAttribute(t, i),
                this
            }
            clone() {
                return (new this.constructor).copy(this)
            }
            copy(t) {
                return this.a.copy(t.a),
                this.b.copy(t.b),
                this.c.copy(t.c),
                this
            }
            getArea() {
                return c.subVectors(this.c, this.b),
                u.subVectors(this.a, this.b),
                .5 * c.cross(u).length()
            }
            getMidpoint(t) {
                return t.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3)
            }
            getNormal(t) {
                return x.getNormal(this.a, this.b, this.c, t)
            }
            getPlane(t) {
                return t.setFromCoplanarPoints(this.a, this.b, this.c)
            }
            getBarycoord(t, e) {
                return x.getBarycoord(t, this.a, this.b, this.c, e)
            }
            getUV(t, e, n, i, r) {
                return x.getUV(t, this.a, this.b, this.c, e, n, i, r)
            }
            containsPoint(t) {
                return x.containsPoint(t, this.a, this.b, this.c)
            }
            isFrontFacing(t) {
                return x.isFrontFacing(this.a, this.b, this.c, t)
            }
            intersectsBox(t) {
                return t.intersectsTriangle(this)
            }
            closestPointToPoint(t, e) {
                const n = this.a
                  , i = this.b
                  , r = this.c;
                let a, s;
                p.subVectors(i, n),
                m.subVectors(r, n),
                g.subVectors(t, n);
                const o = p.dot(g)
                  , l = m.dot(g);
                if (o <= 0 && l <= 0)
                    return e.copy(n);
                _.subVectors(t, i);
                const c = p.dot(_)
                  , u = m.dot(_);
                if (c >= 0 && u <= c)
                    return e.copy(i);
                const h = o * u - c * l;
                if (h <= 0 && o >= 0 && c <= 0)
                    return a = o / (o - c),
                    e.copy(n).addScaledVector(p, a);
                v.subVectors(t, r);
                const d = p.dot(v)
                  , x = m.dot(v);
                if (x >= 0 && d <= x)
                    return e.copy(r);
                const y = d * l - o * x;
                if (y <= 0 && l >= 0 && x <= 0)
                    return s = l / (l - x),
                    e.copy(n).addScaledVector(m, s);
                const b = c * x - d * u;
                if (b <= 0 && u - c >= 0 && d - x >= 0)
                    return f.subVectors(r, i),
                    s = (u - c) / (u - c + (d - x)),
                    e.copy(i).addScaledVector(f, s);
                const M = 1 / (b + y + h);
                return a = y * M,
                s = h * M,
                e.copy(n).addScaledVector(p, a).addScaledVector(m, s)
            }
            equals(t) {
                return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c)
            }
        }
        var y = n(661)
          , b = n(173)
          , M = n(46);
        const S = new o.y
          , w = new s.z
          , T = new a.a
          , E = new i.P
          , A = new i.P
          , L = new i.P
          , R = new i.P
          , C = new i.P
          , P = new i.P
          , D = new i.P
          , N = new i.P
          , I = new i.P
          , U = new r.F
          , F = new r.F
          , O = new r.F
          , z = new i.P
          , B = new i.P;
        class G extends l.T {
            constructor(t=new M.u, e=new b.v) {
                super(),
                this.type = "Mesh",
                this.geometry = t,
                this.material = e,
                this.updateMorphTargets()
            }
            copy(t) {
                return super.copy(t),
                void 0 !== t.morphTargetInfluences && (this.morphTargetInfluences = t.morphTargetInfluences.slice()),
                void 0 !== t.morphTargetDictionary && (this.morphTargetDictionary = Object.assign({}, t.morphTargetDictionary)),
                this.material = t.material,
                this.geometry = t.geometry,
                this
            }
            updateMorphTargets() {
                const t = this.geometry;
                if (t.isBufferGeometry) {
                    const e = t.morphAttributes
                      , n = Object.keys(e);
                    if (n.length > 0) {
                        const t = e[n[0]];
                        if (void 0 !== t) {
                            this.morphTargetInfluences = [],
                            this.morphTargetDictionary = {};
                            for (let e = 0, n = t.length; e < n; e++) {
                                const n = t[e].name || String(e);
                                this.morphTargetInfluences.push(0),
                                this.morphTargetDictionary[n] = e
                            }
                        }
                    }
                } else {
                    const e = t.morphTargets;
                    void 0 !== e && e.length > 0 && console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")
                }
            }
            raycast(t, e) {
                const n = this.geometry
                  , i = this.material
                  , r = this.matrixWorld;
                if (void 0 === i)
                    return;
                if (null === n.boundingSphere && n.computeBoundingSphere(),
                T.copy(n.boundingSphere),
                T.applyMatrix4(r),
                !1 === t.ray.intersectsSphere(T))
                    return;
                if (S.copy(r).invert(),
                w.copy(t.ray).applyMatrix4(S),
                null !== n.boundingBox && !1 === w.intersectsBox(n.boundingBox))
                    return;
                let a;
                if (n.isBufferGeometry) {
                    const r = n.index
                      , s = n.attributes.position
                      , o = n.morphAttributes.position
                      , l = n.morphTargetsRelative
                      , c = n.attributes.uv
                      , u = n.attributes.uv2
                      , h = n.groups
                      , d = n.drawRange;
                    if (null !== r)
                        if (Array.isArray(i))
                            for (let n = 0, p = h.length; n < p; n++) {
                                const p = h[n]
                                  , m = i[p.materialIndex];
                                for (let n = Math.max(p.start, d.start), i = Math.min(r.count, Math.min(p.start + p.count, d.start + d.count)); n < i; n += 3) {
                                    const i = r.getX(n)
                                      , h = r.getX(n + 1)
                                      , d = r.getX(n + 2);
                                    a = H(this, m, t, w, s, o, l, c, u, i, h, d),
                                    a && (a.faceIndex = Math.floor(n / 3),
                                    a.face.materialIndex = p.materialIndex,
                                    e.push(a))
                                }
                            }
                        else
                            for (let n = Math.max(0, d.start), h = Math.min(r.count, d.start + d.count); n < h; n += 3) {
                                const h = r.getX(n)
                                  , d = r.getX(n + 1)
                                  , p = r.getX(n + 2);
                                a = H(this, i, t, w, s, o, l, c, u, h, d, p),
                                a && (a.faceIndex = Math.floor(n / 3),
                                e.push(a))
                            }
                    else if (void 0 !== s)
                        if (Array.isArray(i))
                            for (let n = 0, r = h.length; n < r; n++) {
                                const r = h[n]
                                  , p = i[r.materialIndex];
                                for (let n = Math.max(r.start, d.start), i = Math.min(s.count, Math.min(r.start + r.count, d.start + d.count)); n < i; n += 3)
                                    a = H(this, p, t, w, s, o, l, c, u, n, n + 1, n + 2),
                                    a && (a.faceIndex = Math.floor(n / 3),
                                    a.face.materialIndex = r.materialIndex,
                                    e.push(a))
                            }
                        else
                            for (let n = Math.max(0, d.start), r = Math.min(s.count, d.start + d.count); n < r; n += 3)
                                a = H(this, i, t, w, s, o, l, c, u, n, n + 1, n + 2),
                                a && (a.faceIndex = Math.floor(n / 3),
                                e.push(a))
                } else
                    n.isGeometry && console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")
            }
        }
        function H(t, e, n, a, s, o, l, c, u, h, d, p) {
            E.fromBufferAttribute(s, h),
            A.fromBufferAttribute(s, d),
            L.fromBufferAttribute(s, p);
            const m = t.morphTargetInfluences;
            if (o && m) {
                D.set(0, 0, 0),
                N.set(0, 0, 0),
                I.set(0, 0, 0);
                for (let t = 0, e = o.length; t < e; t++) {
                    const e = m[t]
                      , n = o[t];
                    0 !== e && (R.fromBufferAttribute(n, h),
                    C.fromBufferAttribute(n, d),
                    P.fromBufferAttribute(n, p),
                    l ? (D.addScaledVector(R, e),
                    N.addScaledVector(C, e),
                    I.addScaledVector(P, e)) : (D.addScaledVector(R.sub(E), e),
                    N.addScaledVector(C.sub(A), e),
                    I.addScaledVector(P.sub(L), e)))
                }
                E.add(D),
                A.add(N),
                L.add(I)
            }
            t.isSkinnedMesh && (t.boneTransform(h, E),
            t.boneTransform(d, A),
            t.boneTransform(p, L));
            const f = function(t, e, n, i, r, a, s, o) {
                let l;
                if (l = e.side === y._Li ? i.intersectTriangle(s, a, r, !0, o) : i.intersectTriangle(r, a, s, e.side !== y.ehD, o),
                null === l)
                    return null;
                B.copy(o),
                B.applyMatrix4(t.matrixWorld);
                const c = n.ray.origin.distanceTo(B);
                return c < n.near || c > n.far ? null : {
                    distance: c,
                    point: B.clone(),
                    object: t
                }
            }(t, e, n, a, E, A, L, z);
            if (f) {
                c && (U.fromBufferAttribute(c, h),
                F.fromBufferAttribute(c, d),
                O.fromBufferAttribute(c, p),
                f.uv = x.getUV(z, E, A, L, U, F, O, new r.F)),
                u && (U.fromBufferAttribute(u, h),
                F.fromBufferAttribute(u, d),
                O.fromBufferAttribute(u, p),
                f.uv2 = x.getUV(z, E, A, L, U, F, O, new r.F));
                const t = {
                    a: h,
                    b: d,
                    c: p,
                    normal: new i.P,
                    materialIndex: 0
                };
                x.getNormal(E, A, L, t.normal),
                f.face = t
            }
            return f
        }
        G.prototype.isMesh = !0
    }
    ,
    9: (t,e,n)=>{
        "use strict";
        n.d(e, {
            C: ()=>Dn
        });
        var i = n(661)
          , r = n(881)
          , a = n(699)
          , s = n(273);
        const o = new r.P
          , l = new r.P
          , c = new s.V;
        class u {
            constructor(t=new r.P(1,0,0), e=0) {
                this.normal = t,
                this.constant = e
            }
            set(t, e) {
                return this.normal.copy(t),
                this.constant = e,
                this
            }
            setComponents(t, e, n, i) {
                return this.normal.set(t, e, n),
                this.constant = i,
                this
            }
            setFromNormalAndCoplanarPoint(t, e) {
                return this.normal.copy(t),
                this.constant = -e.dot(this.normal),
                this
            }
            setFromCoplanarPoints(t, e, n) {
                const i = o.subVectors(n, e).cross(l.subVectors(t, e)).normalize();
                return this.setFromNormalAndCoplanarPoint(i, t),
                this
            }
            copy(t) {
                return this.normal.copy(t.normal),
                this.constant = t.constant,
                this
            }
            normalize() {
                const t = 1 / this.normal.length();
                return this.normal.multiplyScalar(t),
                this.constant *= t,
                this
            }
            negate() {
                return this.constant *= -1,
                this.normal.negate(),
                this
            }
            distanceToPoint(t) {
                return this.normal.dot(t) + this.constant
            }
            distanceToSphere(t) {
                return this.distanceToPoint(t.center) - t.radius
            }
            projectPoint(t, e) {
                return e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)
            }
            intersectLine(t, e) {
                const n = t.delta(o)
                  , i = this.normal.dot(n);
                if (0 === i)
                    return 0 === this.distanceToPoint(t.start) ? e.copy(t.start) : null;
                const r = -(t.start.dot(this.normal) + this.constant) / i;
                return r < 0 || r > 1 ? null : e.copy(n).multiplyScalar(r).add(t.start)
            }
            intersectsLine(t) {
                const e = this.distanceToPoint(t.start)
                  , n = this.distanceToPoint(t.end);
                return e < 0 && n > 0 || n < 0 && e > 0
            }
            intersectsBox(t) {
                return t.intersectsPlane(this)
            }
            intersectsSphere(t) {
                return t.intersectsPlane(this)
            }
            coplanarPoint(t) {
                return t.copy(this.normal).multiplyScalar(-this.constant)
            }
            applyMatrix4(t, e) {
                const n = e || c.getNormalMatrix(t)
                  , i = this.coplanarPoint(o).applyMatrix4(t)
                  , r = this.normal.applyMatrix3(n).normalize();
                return this.constant = -i.dot(r),
                this
            }
            translate(t) {
                return this.constant -= t.dot(this.normal),
                this
            }
            equals(t) {
                return t.normal.equals(this.normal) && t.constant === this.constant
            }
            clone() {
                return (new this.constructor).copy(this)
            }
        }
        u.prototype.isPlane = !0;
        const h = new a.a
          , d = new r.P;
        class p {
            constructor(t=new u, e=new u, n=new u, i=new u, r=new u, a=new u) {
                this.planes = [t, e, n, i, r, a]
            }
            set(t, e, n, i, r, a) {
                const s = this.planes;
                return s[0].copy(t),
                s[1].copy(e),
                s[2].copy(n),
                s[3].copy(i),
                s[4].copy(r),
                s[5].copy(a),
                this
            }
            copy(t) {
                const e = this.planes;
                for (let n = 0; n < 6; n++)
                    e[n].copy(t.planes[n]);
                return this
            }
            setFromProjectionMatrix(t) {
                const e = this.planes
                  , n = t.elements
                  , i = n[0]
                  , r = n[1]
                  , a = n[2]
                  , s = n[3]
                  , o = n[4]
                  , l = n[5]
                  , c = n[6]
                  , u = n[7]
                  , h = n[8]
                  , d = n[9]
                  , p = n[10]
                  , m = n[11]
                  , f = n[12]
                  , g = n[13]
                  , _ = n[14]
                  , v = n[15];
                return e[0].setComponents(s - i, u - o, m - h, v - f).normalize(),
                e[1].setComponents(s + i, u + o, m + h, v + f).normalize(),
                e[2].setComponents(s + r, u + l, m + d, v + g).normalize(),
                e[3].setComponents(s - r, u - l, m - d, v - g).normalize(),
                e[4].setComponents(s - a, u - c, m - p, v - _).normalize(),
                e[5].setComponents(s + a, u + c, m + p, v + _).normalize(),
                this
            }
            intersectsObject(t) {
                const e = t.geometry;
                return null === e.boundingSphere && e.computeBoundingSphere(),
                h.copy(e.boundingSphere).applyMatrix4(t.matrixWorld),
                this.intersectsSphere(h)
            }
            intersectsSprite(t) {
                return h.center.set(0, 0, 0),
                h.radius = .7071067811865476,
                h.applyMatrix4(t.matrixWorld),
                this.intersectsSphere(h)
            }
            intersectsSphere(t) {
                const e = this.planes
                  , n = t.center
                  , i = -t.radius;
                for (let t = 0; t < 6; t++)
                    if (e[t].distanceToPoint(n) < i)
                        return !1;
                return !0
            }
            intersectsBox(t) {
                const e = this.planes;
                for (let n = 0; n < 6; n++) {
                    const i = e[n];
                    if (d.x = i.normal.x > 0 ? t.max.x : t.min.x,
                    d.y = i.normal.y > 0 ? t.max.y : t.min.y,
                    d.z = i.normal.z > 0 ? t.max.z : t.min.z,
                    i.distanceToPoint(d) < 0)
                        return !1
                }
                return !0
            }
            containsPoint(t) {
                const e = this.planes;
                for (let n = 0; n < 6; n++)
                    if (e[n].distanceToPoint(t) < 0)
                        return !1;
                return !0
            }
            clone() {
                return (new this.constructor).copy(this)
            }
        }
        var m = n(203)
          , f = n(223);
        function g() {
            let t = null
              , e = !1
              , n = null
              , i = null;
            function r(e, a) {
                n(e, a),
                i = t.requestAnimationFrame(r)
            }
            return {
                start: function() {
                    !0 !== e && null !== n && (i = t.requestAnimationFrame(r),
                    e = !0)
                },
                stop: function() {
                    t.cancelAnimationFrame(i),
                    e = !1
                },
                setAnimationLoop: function(t) {
                    n = t
                },
                setContext: function(e) {
                    t = e
                }
            }
        }
        function _(t, e) {
            const n = e.isWebGL2
              , i = new WeakMap;
            return {
                get: function(t) {
                    return t.isInterleavedBufferAttribute && (t = t.data),
                    i.get(t)
                },
                remove: function(e) {
                    e.isInterleavedBufferAttribute && (e = e.data);
                    const n = i.get(e);
                    n && (t.deleteBuffer(n.buffer),
                    i.delete(e))
                },
                update: function(e, r) {
                    if (e.isGLBufferAttribute) {
                        const t = i.get(e);
                        return void ((!t || t.version < e.version) && i.set(e, {
                            buffer: e.buffer,
                            type: e.type,
                            bytesPerElement: e.elementSize,
                            version: e.version
                        }))
                    }
                    e.isInterleavedBufferAttribute && (e = e.data);
                    const a = i.get(e);
                    void 0 === a ? i.set(e, function(e, i) {
                        const r = e.array
                          , a = e.usage
                          , s = t.createBuffer();
                        t.bindBuffer(i, s),
                        t.bufferData(i, r, a),
                        e.onUploadCallback();
                        let o = t.FLOAT;
                        return r instanceof Float32Array ? o = t.FLOAT : r instanceof Float64Array ? console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array.") : r instanceof Uint16Array ? e.isFloat16BufferAttribute ? n ? o = t.HALF_FLOAT : console.warn("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.") : o = t.UNSIGNED_SHORT : r instanceof Int16Array ? o = t.SHORT : r instanceof Uint32Array ? o = t.UNSIGNED_INT : r instanceof Int32Array ? o = t.INT : r instanceof Int8Array ? o = t.BYTE : (r instanceof Uint8Array || r instanceof Uint8ClampedArray) && (o = t.UNSIGNED_BYTE),
                        {
                            buffer: s,
                            type: o,
                            bytesPerElement: r.BYTES_PER_ELEMENT,
                            version: e.version
                        }
                    }(e, r)) : a.version < e.version && (function(e, i, r) {
                        const a = i.array
                          , s = i.updateRange;
                        t.bindBuffer(r, e),
                        -1 === s.count ? t.bufferSubData(r, 0, a) : (n ? t.bufferSubData(r, s.offset * a.BYTES_PER_ELEMENT, a, s.offset, s.count) : t.bufferSubData(r, s.offset * a.BYTES_PER_ELEMENT, a.subarray(s.offset, s.offset + s.count)),
                        s.count = -1)
                    }(a.buffer, e, r),
                    a.version = e.version)
                }
            }
        }
        var v = n(724)
          , x = n(46)
          , y = n(140);
        class b extends x.u {
            constructor(t=1, e=1, n=1, i=1) {
                super(),
                this.type = "PlaneGeometry",
                this.parameters = {
                    width: t,
                    height: e,
                    widthSegments: n,
                    heightSegments: i
                };
                const r = t / 2
                  , a = e / 2
                  , s = Math.floor(n)
                  , o = Math.floor(i)
                  , l = s + 1
                  , c = o + 1
                  , u = t / s
                  , h = e / o
                  , d = []
                  , p = []
                  , m = []
                  , f = [];
                for (let t = 0; t < c; t++) {
                    const e = t * h - a;
                    for (let n = 0; n < l; n++) {
                        const i = n * u - r;
                        p.push(i, -e, 0),
                        m.push(0, 0, 1),
                        f.push(n / s),
                        f.push(1 - t / o)
                    }
                }
                for (let t = 0; t < o; t++)
                    for (let e = 0; e < s; e++) {
                        const n = e + l * t
                          , i = e + l * (t + 1)
                          , r = e + 1 + l * (t + 1)
                          , a = e + 1 + l * t;
                        d.push(n, i, a),
                        d.push(i, r, a)
                    }
                this.setIndex(d),
                this.setAttribute("position", new y.a$(p,3)),
                this.setAttribute("normal", new y.a$(m,3)),
                this.setAttribute("uv", new y.a$(f,2))
            }
            static fromJSON(t) {
                return new b(t.width,t.height,t.widthSegments,t.heightSegments)
            }
        }
        var M = n(164);
        function S(t) {
            const e = {};
            for (const n in t) {
                e[n] = {};
                for (const i in t[n]) {
                    const r = t[n][i];
                    r && (r.isColor || r.isMatrix3 || r.isMatrix4 || r.isVector2 || r.isVector3 || r.isVector4 || r.isTexture || r.isQuaternion) ? e[n][i] = r.clone() : Array.isArray(r) ? e[n][i] = r.slice() : e[n][i] = r
                }
            }
            return e
        }
        function w(t) {
            const e = {};
            for (let n = 0; n < t.length; n++) {
                const i = S(t[n]);
                for (const t in i)
                    e[t] = i[t]
            }
            return e
        }
        const T = {
            clone: S,
            merge: w
        };
        class E extends M.F {
            constructor(t) {
                super(),
                this.type = "ShaderMaterial",
                this.defines = {},
                this.uniforms = {},
                this.vertexShader = "\nvoid main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}\n",
                this.fragmentShader = "\nvoid main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}\n",
                this.linewidth = 1,
                this.wireframe = !1,
                this.wireframeLinewidth = 1,
                this.fog = !1,
                this.lights = !1,
                this.clipping = !1,
                this.extensions = {
                    derivatives: !1,
                    fragDepth: !1,
                    drawBuffers: !1,
                    shaderTextureLOD: !1
                },
                this.defaultAttributeValues = {
                    color: [1, 1, 1],
                    uv: [0, 0],
                    uv2: [0, 0]
                },
                this.index0AttributeName = void 0,
                this.uniformsNeedUpdate = !1,
                this.glslVersion = null,
                void 0 !== t && (void 0 !== t.attributes && console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),
                this.setValues(t))
            }
            copy(t) {
                return super.copy(t),
                this.fragmentShader = t.fragmentShader,
                this.vertexShader = t.vertexShader,
                this.uniforms = S(t.uniforms),
                this.defines = Object.assign({}, t.defines),
                this.wireframe = t.wireframe,
                this.wireframeLinewidth = t.wireframeLinewidth,
                this.lights = t.lights,
                this.clipping = t.clipping,
                this.extensions = Object.assign({}, t.extensions),
                this.glslVersion = t.glslVersion,
                this
            }
            toJSON(t) {
                const e = super.toJSON(t);
                e.glslVersion = this.glslVersion,
                e.uniforms = {};
                for (const n in this.uniforms) {
                    const i = this.uniforms[n].value;
                    i && i.isTexture ? e.uniforms[n] = {
                        type: "t",
                        value: i.toJSON(t).uuid
                    } : i && i.isColor ? e.uniforms[n] = {
                        type: "c",
                        value: i.getHex()
                    } : i && i.isVector2 ? e.uniforms[n] = {
                        type: "v2",
                        value: i.toArray()
                    } : i && i.isVector3 ? e.uniforms[n] = {
                        type: "v3",
                        value: i.toArray()
                    } : i && i.isVector4 ? e.uniforms[n] = {
                        type: "v4",
                        value: i.toArray()
                    } : i && i.isMatrix3 ? e.uniforms[n] = {
                        type: "m3",
                        value: i.toArray()
                    } : i && i.isMatrix4 ? e.uniforms[n] = {
                        type: "m4",
                        value: i.toArray()
                    } : e.uniforms[n] = {
                        value: i
                    }
                }
                Object.keys(this.defines).length > 0 && (e.defines = this.defines),
                e.vertexShader = this.vertexShader,
                e.fragmentShader = this.fragmentShader;
                const n = {};
                for (const t in this.extensions)
                    !0 === this.extensions[t] && (n[t] = !0);
                return Object.keys(n).length > 0 && (e.extensions = n),
                e
            }
        }
        E.prototype.isShaderMaterial = !0;
        var A = n(662)
          , L = n(457);
        const R = {
            alphamap_fragment: "\n#ifdef USE_ALPHAMAP\n\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n\n#endif\n",
            alphamap_pars_fragment: "\n#ifdef USE_ALPHAMAP\n\n\tuniform sampler2D alphaMap;\n\n#endif\n",
            alphatest_fragment: "\n#ifdef USE_ALPHATEST\n\n\tif ( diffuseColor.a < alphaTest ) discard;\n\n#endif\n",
            alphatest_pars_fragment: "\n#ifdef USE_ALPHATEST\n\tuniform float alphaTest;\n#endif\n",
            aomap_fragment: "\n#ifdef USE_AOMAP\n\n\t// reads channel R, compatible with a combined OcclusionRoughnessMetallic (RGB) texture\n\tfloat ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\n\t#if defined( USE_ENVMAP ) && defined( STANDARD )\n\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );\n\n\t#endif\n\n#endif\n",
            aomap_pars_fragment: "\n#ifdef USE_AOMAP\n\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n\n#endif\n",
            begin_vertex: "\nvec3 transformed = vec3( position );\n",
            beginnormal_vertex: "\nvec3 objectNormal = vec3( normal );\n\n#ifdef USE_TANGENT\n\n\tvec3 objectTangent = vec3( tangent.xyz );\n\n#endif\n",
            bsdfs: '\n\nvec3 BRDF_Lambert( const in vec3 diffuseColor ) {\n\n\treturn RECIPROCAL_PI * diffuseColor;\n\n} // validated\n\nvec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {\n\n\t// Original approximation by Christophe Schlick \'94\n\t// float fresnel = pow( 1.0 - dotVH, 5.0 );\n\n\t// Optimized variant (presented by Epic at SIGGRAPH \'13)\n\t// https://cdn2.unrealengine.com/Resources/files/2013SiggraphPresentationsNotes-26915738.pdf\n\tfloat fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n\n\treturn f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n\n} // validated\n\n// Moving Frostbite to Physically Based Rendering 3.0 - page 12, listing 2\n// https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf\nfloat V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\n\tfloat a2 = pow2( alpha );\n\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\n\treturn 0.5 / max( gv + gl, EPSILON );\n\n}\n\n// Microfacet Models for Refraction through Rough Surfaces - equation (33)\n// http://graphicrants.blogspot.com/2013/08/specular-brdf-reference.html\n// alpha is "roughness squared" in Disney’s reparameterization\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\n\tfloat a2 = pow2( alpha );\n\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0; // avoid alpha = 0 with dotNH = 1\n\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n\n}\n\n// GGX Distribution, Schlick Fresnel, GGX_SmithCorrelated Visibility\nvec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {\n\n\tfloat alpha = pow2( roughness ); // UE4\'s roughness\n\n\tvec3 halfDir = normalize( lightDir + viewDir );\n\n\tfloat dotNL = saturate( dot( normal, lightDir ) );\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotVH = saturate( dot( viewDir, halfDir ) );\n\n\tvec3 F = F_Schlick( f0, f90, dotVH );\n\n\tfloat V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\n\tfloat D = D_GGX( alpha, dotNH );\n\n\treturn F * ( V * D );\n\n}\n\n// Rect Area Light\n\n// Real-Time Polygonal-Light Shading with Linearly Transformed Cosines\n// by Eric Heitz, Jonathan Dupuy, Stephen Hill and David Neubelt\n// code: https://github.com/selfshadow/ltc_code/\n\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n\n\tconst float LUT_SIZE = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS = 0.5 / LUT_SIZE;\n\n\tfloat dotNV = saturate( dot( N, V ) );\n\n\t// texture parameterized by sqrt( GGX alpha ) and sqrt( 1 - cos( theta ) )\n\tvec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\n\treturn uv;\n\n}\n\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n\n\t// Real-Time Area Lighting: a Journey from Research to Production (p.102)\n\t// An approximation of the form factor of a horizon-clipped rectangle.\n\n\tfloat l = length( f );\n\n\treturn max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n\n}\n\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n\n\tfloat x = dot( v1, v2 );\n\n\tfloat y = abs( x );\n\n\t// rational polynomial approximation to theta / sin( theta ) / 2PI\n\tfloat a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n\tfloat b = 3.4175940 + ( 4.1616724 + y ) * y;\n\tfloat v = a / b;\n\n\tfloat theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n\n\treturn cross( v1, v2 ) * theta_sintheta;\n\n}\n\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n\n\t// bail if point is on back side of plane of light\n\t// assumes ccw winding order of light vertices\n\tvec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n\tvec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n\tvec3 lightNormal = cross( v1, v2 );\n\n\tif( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n\n\t// construct orthonormal basis around N\n\tvec3 T1, T2;\n\tT1 = normalize( V - N * dot( V, N ) );\n\tT2 = - cross( N, T1 ); // negated from paper; possibly due to a different handedness of world coordinate system\n\n\t// compute transform\n\tmat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n\n\t// transform rect\n\tvec3 coords[ 4 ];\n\tcoords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n\tcoords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n\tcoords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n\tcoords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n\n\t// project rect onto sphere\n\tcoords[ 0 ] = normalize( coords[ 0 ] );\n\tcoords[ 1 ] = normalize( coords[ 1 ] );\n\tcoords[ 2 ] = normalize( coords[ 2 ] );\n\tcoords[ 3 ] = normalize( coords[ 3 ] );\n\n\t// calculate vector form factor\n\tvec3 vectorFormFactor = vec3( 0.0 );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n\n\t// adjust for horizon clipping\n\tfloat result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n\n/*\n\t// alternate method of adjusting for horizon clipping (see referece)\n\t// refactoring required\n\tfloat len = length( vectorFormFactor );\n\tfloat z = vectorFormFactor.z / len;\n\n\tconst float LUT_SIZE = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS = 0.5 / LUT_SIZE;\n\n\t// tabulated horizon-clipped sphere, apparently...\n\tvec2 uv = vec2( z * 0.5 + 0.5, len );\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\n\tfloat scale = texture2D( ltc_2, uv ).w;\n\n\tfloat result = len * scale;\n*/\n\n\treturn vec3( result );\n\n}\n\n// End Rect Area Light\n\n\nfloat G_BlinnPhong_Implicit( /* const in float dotNL, const in float dotNV */ ) {\n\n\t// geometry term is (n dot l)(n dot v) / 4(n dot l)(n dot v)\n\treturn 0.25;\n\n}\n\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n\n}\n\nvec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {\n\n\tvec3 halfDir = normalize( lightDir + viewDir );\n\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotVH = saturate( dot( viewDir, halfDir ) );\n\n\tvec3 F = F_Schlick( specularColor, 1.0, dotVH );\n\n\tfloat G = G_BlinnPhong_Implicit( /* dotNL, dotNV */ );\n\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\n\treturn F * ( G * D );\n\n} // validated\n\n#if defined( USE_SHEEN )\n\n// https://github.com/google/filament/blob/master/shaders/src/brdf.fs\nfloat D_Charlie( float roughness, float dotNH ) {\n\n\tfloat alpha = pow2( roughness );\n\n\t// Estevez and Kulla 2017, "Production Friendly Microfacet Sheen BRDF"\n\tfloat invAlpha = 1.0 / alpha;\n\tfloat cos2h = dotNH * dotNH;\n\tfloat sin2h = max( 1.0 - cos2h, 0.0078125 ); // 2^(-14/2), so sin2h^2 > 0 in fp16\n\n\treturn ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );\n\n}\n\n// https://github.com/google/filament/blob/master/shaders/src/brdf.fs\nfloat V_Neubelt( float dotNV, float dotNL ) {\n\n\t// Neubelt and Pettineo 2013, "Crafting a Next-gen Material Pipeline for The Order: 1886"\n\treturn saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );\n\n}\n\nvec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {\n\n\tvec3 halfDir = normalize( lightDir + viewDir );\n\n\tfloat dotNL = saturate( dot( normal, lightDir ) );\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\n\tfloat D = D_Charlie( sheenRoughness, dotNH );\n\tfloat V = V_Neubelt( dotNV, dotNL );\n\n\treturn sheenColor * ( D * V );\n\n}\n\n#endif\n',
            bumpmap_pars_fragment: "\n#ifdef USE_BUMPMAP\n\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\n\t// Bump Mapping Unparametrized Surfaces on the GPU by Morten S. Mikkelsen\n\t// https://mmikk.github.io/papers3d/mm_sfgrad_bump.pdf\n\n\t// Evaluate the derivative of the height w.r.t. screen-space using forward differencing (listing 2)\n\n\tvec2 dHdxy_fwd() {\n\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\n\t\treturn vec2( dBx, dBy );\n\n\t}\n\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {\n\n\t\t// Workaround for Adreno 3XX dFd*( vec3 ) bug. See #9988\n\n\t\tvec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );\n\t\tvec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );\n\t\tvec3 vN = surf_norm;\t\t// normalized\n\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\n\t\tfloat fDet = dot( vSigmaX, R1 ) * faceDirection;\n\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\n\t}\n\n#endif\n",
            clipping_planes_fragment: "\n#if NUM_CLIPPING_PLANES > 0\n\n\tvec4 plane;\n\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n\n\t\tplane = clippingPlanes[ i ];\n\t\tif ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;\n\n\t}\n\t#pragma unroll_loop_end\n\n\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\n\t\tbool clipped = true;\n\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n\n\t\t\tplane = clippingPlanes[ i ];\n\t\t\tclipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;\n\n\t\t}\n\t\t#pragma unroll_loop_end\n\n\t\tif ( clipped ) discard;\n\n\t#endif\n\n#endif\n",
            clipping_planes_pars_fragment: "\n#if NUM_CLIPPING_PLANES > 0\n\n\tvarying vec3 vClipPosition;\n\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n\n#endif\n",
            clipping_planes_pars_vertex: "\n#if NUM_CLIPPING_PLANES > 0\n\n\tvarying vec3 vClipPosition;\n\n#endif\n",
            clipping_planes_vertex: "\n#if NUM_CLIPPING_PLANES > 0\n\n\tvClipPosition = - mvPosition.xyz;\n\n#endif\n",
            color_fragment: "\n#if defined( USE_COLOR_ALPHA )\n\n\tdiffuseColor *= vColor;\n\n#elif defined( USE_COLOR )\n\n\tdiffuseColor.rgb *= vColor;\n\n#endif\n",
            color_pars_fragment: "\n#if defined( USE_COLOR_ALPHA )\n\n\tvarying vec4 vColor;\n\n#elif defined( USE_COLOR )\n\n\tvarying vec3 vColor;\n\n#endif\n",
            color_pars_vertex: "\n#if defined( USE_COLOR_ALPHA )\n\n\tvarying vec4 vColor;\n\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n\n\tvarying vec3 vColor;\n\n#endif\n",
            color_vertex: "\n#if defined( USE_COLOR_ALPHA )\n\n\tvColor = vec4( 1.0 );\n\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n\n\tvColor = vec3( 1.0 );\n\n#endif\n\n#ifdef USE_COLOR\n\n\tvColor *= color;\n\n#endif\n\n#ifdef USE_INSTANCING_COLOR\n\n\tvColor.xyz *= instanceColor.xyz;\n\n#endif\n",
            common: "\n#define PI 3.141592653589793\n#define PI2 6.283185307179586\n#define PI_HALF 1.5707963267948966\n#define RECIPROCAL_PI 0.3183098861837907\n#define RECIPROCAL_PI2 0.15915494309189535\n#define EPSILON 1e-6\n\n#ifndef saturate\n// <tonemapping_pars_fragment> may have defined saturate() already\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement( a ) ( 1.0 - saturate( a ) )\n\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\n\n// expects values in the range of [0,1]x[0,1], returns values in the [0,1] range.\n// do not collapse into a single function per: http://byteblacksmith.com/improvements-to-the-canonical-one-liner-glsl-rand-for-opengl-es-2-0/\nhighp float rand( const in vec2 uv ) {\n\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\n\treturn fract( sin( sn ) * c );\n\n}\n\n#ifdef HIGH_PRECISION\n\tfloat precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n\tfloat precisionSafeLength( vec3 v ) {\n\t\tfloat maxComponent = max3( abs( v ) );\n\t\treturn length( v / maxComponent ) * maxComponent;\n\t}\n#endif\n\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\n\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\n\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n#ifdef USE_CLEARCOAT\n\tvec3 clearcoatNormal;\n#endif\n};\n\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n\n}\n\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\n\t// dir can be either a direction vector or a normal vector\n\t// upper-left 3x3 of matrix is assumed to be orthogonal\n\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n\n}\n\nmat3 transposeMat3( const in mat3 m ) {\n\n\tmat3 tmp;\n\n\ttmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n\ttmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n\ttmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n\n\treturn tmp;\n\n}\n\n// https://en.wikipedia.org/wiki/Relative_luminance\nfloat linearToRelativeLuminance( const in vec3 color ) {\n\n\tvec3 weights = vec3( 0.2126, 0.7152, 0.0722 );\n\n\treturn dot( weights, color.rgb );\n\n}\n\nbool isPerspectiveMatrix( mat4 m ) {\n\n\treturn m[ 2 ][ 3 ] == - 1.0;\n\n}\n\nvec2 equirectUv( in vec3 dir ) {\n\n\t// dir is assumed to be unit length\n\n\tfloat u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;\n\n\tfloat v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\n\treturn vec2( u, v );\n\n}\n",
            cube_uv_reflection_fragment: "\n#ifdef ENVMAP_TYPE_CUBE_UV\n\n\t#define cubeUV_maxMipLevel 8.0\n\t#define cubeUV_minMipLevel 4.0\n\t#define cubeUV_maxTileSize 256.0\n\t#define cubeUV_minTileSize 16.0\n\n\t// These shader functions convert between the UV coordinates of a single face of\n\t// a cubemap, the 0-5 integer index of a cube face, and the direction vector for\n\t// sampling a textureCube (not generally normalized ).\n\n\tfloat getFace( vec3 direction ) {\n\n\t\tvec3 absDirection = abs( direction );\n\n\t\tfloat face = - 1.0;\n\n\t\tif ( absDirection.x > absDirection.z ) {\n\n\t\t\tif ( absDirection.x > absDirection.y )\n\n\t\t\t\tface = direction.x > 0.0 ? 0.0 : 3.0;\n\n\t\t\telse\n\n\t\t\t\tface = direction.y > 0.0 ? 1.0 : 4.0;\n\n\t\t} else {\n\n\t\t\tif ( absDirection.z > absDirection.y )\n\n\t\t\t\tface = direction.z > 0.0 ? 2.0 : 5.0;\n\n\t\t\telse\n\n\t\t\t\tface = direction.y > 0.0 ? 1.0 : 4.0;\n\n\t\t}\n\n\t\treturn face;\n\n\t}\n\n\t// RH coordinate system; PMREM face-indexing convention\n\tvec2 getUV( vec3 direction, float face ) {\n\n\t\tvec2 uv;\n\n\t\tif ( face == 0.0 ) {\n\n\t\t\tuv = vec2( direction.z, direction.y ) / abs( direction.x ); // pos x\n\n\t\t} else if ( face == 1.0 ) {\n\n\t\t\tuv = vec2( - direction.x, - direction.z ) / abs( direction.y ); // pos y\n\n\t\t} else if ( face == 2.0 ) {\n\n\t\t\tuv = vec2( - direction.x, direction.y ) / abs( direction.z ); // pos z\n\n\t\t} else if ( face == 3.0 ) {\n\n\t\t\tuv = vec2( - direction.z, direction.y ) / abs( direction.x ); // neg x\n\n\t\t} else if ( face == 4.0 ) {\n\n\t\t\tuv = vec2( - direction.x, direction.z ) / abs( direction.y ); // neg y\n\n\t\t} else {\n\n\t\t\tuv = vec2( direction.x, direction.y ) / abs( direction.z ); // neg z\n\n\t\t}\n\n\t\treturn 0.5 * ( uv + 1.0 );\n\n\t}\n\n\tvec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {\n\n\t\tfloat face = getFace( direction );\n\n\t\tfloat filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );\n\n\t\tmipInt = max( mipInt, cubeUV_minMipLevel );\n\n\t\tfloat faceSize = exp2( mipInt );\n\n\t\tfloat texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );\n\n\t\tvec2 uv = getUV( direction, face ) * ( faceSize - 1.0 ) + 0.5;\n\n\t\tif ( face > 2.0 ) {\n\n\t\t\tuv.y += faceSize;\n\n\t\t\tface -= 3.0;\n\n\t\t}\n\n\t\tuv.x += face * faceSize;\n\n\t\tif ( mipInt < cubeUV_maxMipLevel ) {\n\n\t\t\tuv.y += 2.0 * cubeUV_maxTileSize;\n\n\t\t}\n\n\t\tuv.y += filterInt * 2.0 * cubeUV_minTileSize;\n\n\t\tuv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );\n\n\t\tuv *= texelSize;\n\n\t\treturn texture2D( envMap, uv ).rgb;\n\n\t}\n\n\t// These defines must match with PMREMGenerator\n\n\t#define r0 1.0\n\t#define v0 0.339\n\t#define m0 - 2.0\n\t#define r1 0.8\n\t#define v1 0.276\n\t#define m1 - 1.0\n\t#define r4 0.4\n\t#define v4 0.046\n\t#define m4 2.0\n\t#define r5 0.305\n\t#define v5 0.016\n\t#define m5 3.0\n\t#define r6 0.21\n\t#define v6 0.0038\n\t#define m6 4.0\n\n\tfloat roughnessToMip( float roughness ) {\n\n\t\tfloat mip = 0.0;\n\n\t\tif ( roughness >= r1 ) {\n\n\t\t\tmip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;\n\n\t\t} else if ( roughness >= r4 ) {\n\n\t\t\tmip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;\n\n\t\t} else if ( roughness >= r5 ) {\n\n\t\t\tmip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;\n\n\t\t} else if ( roughness >= r6 ) {\n\n\t\t\tmip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;\n\n\t\t} else {\n\n\t\t\tmip = - 2.0 * log2( 1.16 * roughness ); // 1.16 = 1.79^0.25\n\t\t}\n\n\t\treturn mip;\n\n\t}\n\n\tvec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {\n\n\t\tfloat mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );\n\n\t\tfloat mipF = fract( mip );\n\n\t\tfloat mipInt = floor( mip );\n\n\t\tvec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );\n\n\t\tif ( mipF == 0.0 ) {\n\n\t\t\treturn vec4( color0, 1.0 );\n\n\t\t} else {\n\n\t\t\tvec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );\n\n\t\t\treturn vec4( mix( color0, color1, mipF ), 1.0 );\n\n\t\t}\n\n\t}\n\n#endif\n",
            defaultnormal_vertex: "\nvec3 transformedNormal = objectNormal;\n\n#ifdef USE_INSTANCING\n\n\t// this is in lieu of a per-instance normal-matrix\n\t// shear transforms in the instance matrix are not supported\n\n\tmat3 m = mat3( instanceMatrix );\n\n\ttransformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );\n\n\ttransformedNormal = m * transformedNormal;\n\n#endif\n\ntransformedNormal = normalMatrix * transformedNormal;\n\n#ifdef FLIP_SIDED\n\n\ttransformedNormal = - transformedNormal;\n\n#endif\n\n#ifdef USE_TANGENT\n\n\tvec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\n\t#ifdef FLIP_SIDED\n\n\t\ttransformedTangent = - transformedTangent;\n\n\t#endif\n\n#endif\n",
            displacementmap_pars_vertex: "\n#ifdef USE_DISPLACEMENTMAP\n\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n\n#endif\n",
            displacementmap_vertex: "\n#ifdef USE_DISPLACEMENTMAP\n\n\ttransformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );\n\n#endif\n",
            emissivemap_fragment: "\n#ifdef USE_EMISSIVEMAP\n\n\tvec4 emissiveColor = texture2D( emissiveMap, vUv );\n\n\temissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;\n\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n\n#endif\n",
            emissivemap_pars_fragment: "\n#ifdef USE_EMISSIVEMAP\n\n\tuniform sampler2D emissiveMap;\n\n#endif\n",
            encodings_fragment: "\ngl_FragColor = linearToOutputTexel( gl_FragColor );\n",
            encodings_pars_fragment: "\n\nvec4 LinearToLinear( in vec4 value ) {\n\treturn value;\n}\n\nvec4 sRGBToLinear( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );\n}\n\nvec4 LinearTosRGB( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}\n\n",
            envmap_fragment: "\n#ifdef USE_ENVMAP\n\n\t#ifdef ENV_WORLDPOS\n\n\t\tvec3 cameraToFrag;\n\n\t\tif ( isOrthographic ) {\n\n\t\t\tcameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\n\t\t} else {\n\n\t\t\tcameraToFrag = normalize( vWorldPosition - cameraPosition );\n\n\t\t}\n\n\t\t// Transforming Normal Vectors with the Inverse Transformation\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\n\t\t\tvec3 reflectVec = reflect( cameraToFrag, worldNormal );\n\n\t\t#else\n\n\t\t\tvec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );\n\n\t\t#endif\n\n\t#else\n\n\t\tvec3 reflectVec = vReflect;\n\n\t#endif\n\n\t#ifdef ENVMAP_TYPE_CUBE\n\n\t\tvec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\n\t\tenvColor = envMapTexelToLinear( envColor );\n\n\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\n\t\tvec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );\n\n\t#else\n\n\t\tvec4 envColor = vec4( 0.0 );\n\n\t#endif\n\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\n\t#endif\n\n#endif\n",
            envmap_common_pars_fragment: "\n#ifdef USE_ENVMAP\n\n\tuniform float envMapIntensity;\n\tuniform float flipEnvMap;\n\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\t\n#endif\n",
            envmap_pars_fragment: "\n#ifdef USE_ENVMAP\n\n\tuniform float reflectivity;\n\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\n\t\t#define ENV_WORLDPOS\n\n\t#endif\n\n\t#ifdef ENV_WORLDPOS\n\n\t\tvarying vec3 vWorldPosition;\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n\n#endif\n",
            envmap_pars_vertex: "\n#ifdef USE_ENVMAP\n\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )\n\n\t\t#define ENV_WORLDPOS\n\n\t#endif\n\n\t#ifdef ENV_WORLDPOS\n\t\t\n\t\tvarying vec3 vWorldPosition;\n\n\t#else\n\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\n\t#endif\n\n#endif\n",
            envmap_physical_pars_fragment: "\n#if defined( USE_ENVMAP )\n\n\t#ifdef ENVMAP_MODE_REFRACTION\n\n\t\tuniform float refractionRatio;\n\n\t#endif\n\n\tvec3 getIBLIrradiance( const in vec3 normal ) {\n\n\t\t#if defined( ENVMAP_TYPE_CUBE_UV )\n\n\t\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );\n\n\t\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\n\t\t#else\n\n\t\t\treturn vec3( 0.0 );\n\n\t\t#endif\n\n\t}\n\n\tvec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {\n\n\t\t#if defined( ENVMAP_TYPE_CUBE_UV )\n\n\t\t\tvec3 reflectVec;\n\n\t\t\t#ifdef ENVMAP_MODE_REFLECTION\n\n\t\t\t\treflectVec = reflect( - viewDir, normal );\n\n\t\t\t\t// Mixing the reflection with the normal is more accurate and keeps rough objects from gathering light from behind their tangent plane.\n\t\t\t\treflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );\n\n\t\t\t#else\n\n\t\t\t\treflectVec = refract( - viewDir, normal, refractionRatio );\n\n\t\t\t#endif\n\n\t\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );\n\n\t\t\treturn envMapColor.rgb * envMapIntensity;\n\n\t\t#else\n\n\t\t\treturn vec3( 0.0 );\n\n\t\t#endif\n\n\t}\n\n#endif\n",
            envmap_vertex: "\n#ifdef USE_ENVMAP\n\n\t#ifdef ENV_WORLDPOS\n\n\t\tvWorldPosition = worldPosition.xyz;\n\n\t#else\n\n\t\tvec3 cameraToVertex;\n\n\t\tif ( isOrthographic ) {\n\n\t\t\tcameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\n\t\t} else {\n\n\t\t\tcameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\n\t\t}\n\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\n\t\t#else\n\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\n\t\t#endif\n\n\t#endif\n\n#endif\n",
            fog_vertex: "\n#ifdef USE_FOG\n\n\tvFogDepth = - mvPosition.z;\n\n#endif\n",
            fog_pars_vertex: "\n#ifdef USE_FOG\n\n\tvarying float vFogDepth;\n\n#endif\n",
            fog_fragment: "\n#ifdef USE_FOG\n\n\t#ifdef FOG_EXP2\n\n\t\tfloat fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );\n\n\t#else\n\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, vFogDepth );\n\n\t#endif\n\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n\n#endif\n",
            fog_pars_fragment: "\n#ifdef USE_FOG\n\n\tuniform vec3 fogColor;\n\tvarying float vFogDepth;\n\n\t#ifdef FOG_EXP2\n\n\t\tuniform float fogDensity;\n\n\t#else\n\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\n\t#endif\n\n#endif\n",
            gradientmap_pars_fragment: "\n\n#ifdef USE_GRADIENTMAP\n\n\tuniform sampler2D gradientMap;\n\n#endif\n\nvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\n\t// dotNL will be from -1.0 to 1.0\n\tfloat dotNL = dot( normal, lightDirection );\n\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\n\t#ifdef USE_GRADIENTMAP\n\n\t\treturn vec3( texture2D( gradientMap, coord ).r );\n\n\t#else\n\n\t\treturn ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );\n\n\t#endif\n\n}\n",
            lightmap_fragment: "\n#ifdef USE_LIGHTMAP\n\n\tvec4 lightMapTexel = texture2D( lightMap, vUv2 );\n\tvec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;\n\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\n\t\tlightMapIrradiance *= PI;\n\n\t#endif\n\n\treflectedLight.indirectDiffuse += lightMapIrradiance;\n\n#endif\n",
            lightmap_pars_fragment: "\n#ifdef USE_LIGHTMAP\n\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n\n#endif\n",
            lights_lambert_vertex: "\nvec3 diffuse = vec3( 1.0 );\n\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );\n\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\n\nvLightFront = vec3( 0.0 );\nvIndirectFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\n\tvLightBack = vec3( 0.0 );\n\tvIndirectBack = vec3( 0.0 );\n#endif\n\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Diffuse;\n\nvIndirectFront += getAmbientLightIrradiance( ambientLightColor );\n\nvIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );\n\n#ifdef DOUBLE_SIDED\n\n\tvIndirectBack += getAmbientLightIrradiance( ambientLightColor );\n\n\tvIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );\n\n#endif\n\n#if NUM_POINT_LIGHTS > 0\n\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\n\t\tgetPointLightInfo( pointLights[ i ], geometry, directLight );\n\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = directLight.color;\n\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\n\t\t#ifdef DOUBLE_SIDED\n\n\t\t\tvLightBack += saturate( - dotNL ) * directLightColor_Diffuse;\n\n\t\t#endif\n\n\t}\n\t#pragma unroll_loop_end\n\n#endif\n\n#if NUM_SPOT_LIGHTS > 0\n\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\n\t\tgetSpotLightInfo( spotLights[ i ], geometry, directLight );\n\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = directLight.color;\n\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\n\t\t#ifdef DOUBLE_SIDED\n\n\t\t\tvLightBack += saturate( - dotNL ) * directLightColor_Diffuse;\n\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n\n#endif\n\n#if NUM_DIR_LIGHTS > 0\n\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\n\t\tgetDirectionalLightInfo( directionalLights[ i ], geometry, directLight );\n\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = directLight.color;\n\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\n\t\t#ifdef DOUBLE_SIDED\n\n\t\t\tvLightBack += saturate( - dotNL ) * directLightColor_Diffuse;\n\n\t\t#endif\n\n\t}\n\t#pragma unroll_loop_end\n\n#endif\n\n#if NUM_HEMI_LIGHTS > 0\n\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\n\t\tvIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );\n\n\t\t#ifdef DOUBLE_SIDED\n\n\t\t\tvIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );\n\n\t\t#endif\n\n\t}\n\t#pragma unroll_loop_end\n\n#endif\n",
            lights_pars_begin: "\nuniform bool receiveShadow;\nuniform vec3 ambientLightColor;\nuniform vec3 lightProbe[ 9 ];\n\n// get the irradiance (radiance convolved with cosine lobe) at the point 'normal' on the unit sphere\n// source: https://graphics.stanford.edu/papers/envmap/envmap.pdf\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n\n\t// normal is assumed to have unit length\n\n\tfloat x = normal.x, y = normal.y, z = normal.z;\n\n\t// band 0\n\tvec3 result = shCoefficients[ 0 ] * 0.886227;\n\n\t// band 1\n\tresult += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n\tresult += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n\tresult += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n\n\t// band 2\n\tresult += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n\tresult += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n\tresult += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n\tresult += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n\tresult += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n\n\treturn result;\n\n}\n\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {\n\n\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\n\tvec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n\n\treturn irradiance;\n\n}\n\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\n\tvec3 irradiance = ambientLightColor;\n\n\treturn irradiance;\n\n}\n\nfloat getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n\n\t#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n\n\t\t// based upon Frostbite 3 Moving to Physically-based Rendering\n\t\t// page 32, equation 26: E[window1]\n\t\t// https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf\n\t\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\n\t\tif ( cutoffDistance > 0.0 ) {\n\n\t\t\tdistanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\n\t\t}\n\n\t\treturn distanceFalloff;\n\n\t#else\n\n\t\tif ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {\n\n\t\t\treturn pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );\n\n\t\t}\n\n\t\treturn 1.0;\n\n\t#endif\n\n}\n\nfloat getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {\n\n\treturn smoothstep( coneCosine, penumbraCosine, angleCosine );\n\n}\n\n#if NUM_DIR_LIGHTS > 0\n\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t};\n\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\n\tvoid getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {\n\n\t\tlight.color = directionalLight.color;\n\t\tlight.direction = directionalLight.direction;\n\t\tlight.visible = true;\n\n\t}\n\n#endif\n\n\n#if NUM_POINT_LIGHTS > 0\n\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t};\n\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\n\t// light is an out parameter as having it as a return value caused compiler errors on some devices\n\tvoid getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {\n\n\t\tvec3 lVector = pointLight.position - geometry.position;\n\n\t\tlight.direction = normalize( lVector );\n\n\t\tfloat lightDistance = length( lVector );\n\n\t\tlight.color = pointLight.color;\n\t\tlight.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );\n\t\tlight.visible = ( light.color != vec3( 0.0 ) );\n\n\t}\n\n#endif\n\n\n#if NUM_SPOT_LIGHTS > 0\n\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t};\n\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\n\t// light is an out parameter as having it as a return value caused compiler errors on some devices\n\tvoid getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {\n\n\t\tvec3 lVector = spotLight.position - geometry.position;\n\n\t\tlight.direction = normalize( lVector );\n\n\t\tfloat angleCos = dot( light.direction, spotLight.direction );\n\n\t\tfloat spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\n\t\tif ( spotAttenuation > 0.0 ) {\n\n\t\t\tfloat lightDistance = length( lVector );\n\n\t\t\tlight.color = spotLight.color * spotAttenuation;\n\t\t\tlight.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tlight.visible = ( light.color != vec3( 0.0 ) );\n\n\t\t} else {\n\n\t\t\tlight.color = vec3( 0.0 );\n\t\t\tlight.visible = false;\n\n\t\t}\n\n\t}\n\n#endif\n\n\n#if NUM_RECT_AREA_LIGHTS > 0\n\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\n\t// Pre-computed values of LinearTransformedCosine approximation of BRDF\n\t// BRDF approximation Texture is 64x64\n\tuniform sampler2D ltc_1; // RGBA Float\n\tuniform sampler2D ltc_2; // RGBA Float\n\n\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n\n#endif\n\n\n#if NUM_HEMI_LIGHTS > 0\n\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {\n\n\t\tfloat dotNL = dot( normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\n\t\treturn irradiance;\n\n\t}\n\n#endif\n",
            lights_toon_fragment: "\nToonMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\n",
            lights_toon_pars_fragment: "\nvarying vec3 vViewPosition;\n\nstruct ToonMaterial {\n\n\tvec3 diffuseColor;\n\n};\n\nvoid RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\n\tvec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n\n}\n\nvoid RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n\n}\n\n#define RE_Direct\t\t\t\tRE_Direct_Toon\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Toon\n\n#define Material_LightProbeLOD( material )\t(0)\n",
            lights_phong_fragment: "\nBlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;\n",
            lights_phong_pars_fragment: "\nvarying vec3 vViewPosition;\n\nstruct BlinnPhongMaterial {\n\n\tvec3 diffuseColor;\n\tvec3 specularColor;\n\tfloat specularShininess;\n\tfloat specularStrength;\n\n};\n\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n\n\treflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;\n\n}\n\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n\n}\n\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong\n\n#define Material_LightProbeLOD( material )\t(0)\n",
            lights_physical_fragment: "\nPhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\n\nvec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );\nfloat geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );\n\nmaterial.roughness = max( roughnessFactor, 0.0525 );// 0.0525 corresponds to the base mip of a 256 cubemap.\nmaterial.roughness += geometryRoughness;\nmaterial.roughness = min( material.roughness, 1.0 );\n\n#ifdef IOR\n\n\t#ifdef SPECULAR\n\n\t\tfloat specularIntensityFactor = specularIntensity;\n\t\tvec3 specularColorFactor = specularColor;\n\n\t\t#ifdef USE_SPECULARINTENSITYMAP\n\n\t\t\tspecularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;\n\n\t\t#endif\n\n\t\t#ifdef USE_SPECULARCOLORMAP\n\n\t\t\tspecularColorFactor *= specularColorMapTexelToLinear( texture2D( specularColorMap, vUv ) ).rgb;\n\n\t\t#endif\n\n\t\tmaterial.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );\n\n\t#else\n\n\t\tfloat specularIntensityFactor = 1.0;\n\t\tvec3 specularColorFactor = vec3( 1.0 );\n\t\tmaterial.specularF90 = 1.0;\n\n\t#endif\n\n\tmaterial.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );\n\n#else\n\n\tmaterial.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );\n\tmaterial.specularF90 = 1.0;\n\n#endif\n\n#ifdef USE_CLEARCOAT\n\n\tmaterial.clearcoat = clearcoat;\n\tmaterial.clearcoatRoughness = clearcoatRoughness;\n\tmaterial.clearcoatF0 = vec3( 0.04 );\n\tmaterial.clearcoatF90 = 1.0;\n\n\t#ifdef USE_CLEARCOATMAP\n\n\t\tmaterial.clearcoat *= texture2D( clearcoatMap, vUv ).x;\n\n\t#endif\n\n\t#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\n\t\tmaterial.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;\n\n\t#endif\n\n\tmaterial.clearcoat = saturate( material.clearcoat ); // Burley clearcoat model\n\tmaterial.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );\n\tmaterial.clearcoatRoughness += geometryRoughness;\n\tmaterial.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );\n\n#endif\n\n#ifdef USE_SHEEN\n\n\tmaterial.sheenColor = sheenColor;\n\n\t#ifdef USE_SHEENCOLORMAP\n\n\t\tmaterial.sheenColor *= sheenColorMapTexelToLinear( texture2D( sheenColorMap, vUv ) ).rgb;\n\n\t#endif\n\n\tmaterial.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );\n\n\t#ifdef USE_SHEENROUGHNESSMAP\n\n\t\tmaterial.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;\n\n\t#endif\n\n#endif\n",
            lights_physical_pars_fragment: '\nstruct PhysicalMaterial {\n\n\tvec3 diffuseColor;\n\tfloat roughness;\n\tvec3 specularColor;\n\tfloat specularF90;\n\n\t#ifdef USE_CLEARCOAT\n\t\tfloat clearcoat;\n\t\tfloat clearcoatRoughness;\n\t\tvec3 clearcoatF0;\n\t\tfloat clearcoatF90;\n\t#endif\n\n\t#ifdef USE_SHEEN\n\t\tvec3 sheenColor;\n\t\tfloat sheenRoughness;\n\t#endif\n\n};\n\n// temporary\nvec3 clearcoatSpecular = vec3( 0.0 );\nvec3 sheenSpecular = vec3( 0.0 );\n\n// This is a curve-fit approxmation to the "Charlie sheen" BRDF integrated over the hemisphere from \n// Estevez and Kulla 2017, "Production Friendly Microfacet Sheen BRDF". The analysis can be found\n// in the Sheen section of https://drive.google.com/file/d/1T0D1VSyR4AllqIJTQAraEIzjlb5h4FKH/view?usp=sharing\nfloat IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {\n\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\n\tfloat r2 = roughness * roughness;\n\n\tfloat a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;\n\n\tfloat b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;\n\n\tfloat DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );\n\n\treturn saturate( DG * RECIPROCAL_PI );\n\n}\n\n// Analytical approximation of the DFG LUT, one half of the\n// split-sum approximation used in indirect specular lighting.\n// via \'environmentBRDF\' from "Physically Based Shading on Mobile"\n// https://www.unrealengine.com/blog/physically-based-shading-on-mobile\nvec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\n\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\n\tvec4 r = roughness * c0 + c1;\n\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\n\tvec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;\n\n\treturn fab;\n\n}\n\nvec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {\n\n\tvec2 fab = DFGApprox( normal, viewDir, roughness );\n\n\treturn specularColor * fab.x + specularF90 * fab.y;\n\n}\n\n// Fdez-Agüera\'s "Multiple-Scattering Microfacet Model for Real-Time Image Based Lighting"\n// Approximates multiscattering in order to preserve energy.\n// http://www.jcgt.org/published/0008/01/03/\nvoid computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n\n\tvec2 fab = DFGApprox( normal, viewDir, roughness );\n\n\tvec3 FssEss = specularColor * fab.x + specularF90 * fab.y;\n\n\tfloat Ess = fab.x + fab.y;\n\tfloat Ems = 1.0 - Ess;\n\n\tvec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619; // 1/21\n\tvec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n\n\tsingleScatter += FssEss;\n\tmultiScatter += Fms * Ems;\n\n}\n\n#if NUM_RECT_AREA_LIGHTS > 0\n\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\n\t\tvec3 normal = geometry.normal;\n\t\tvec3 viewDir = geometry.viewDir;\n\t\tvec3 position = geometry.position;\n\t\tvec3 lightPos = rectAreaLight.position;\n\t\tvec3 halfWidth = rectAreaLight.halfWidth;\n\t\tvec3 halfHeight = rectAreaLight.halfHeight;\n\t\tvec3 lightColor = rectAreaLight.color;\n\t\tfloat roughness = material.roughness;\n\n\t\tvec3 rectCoords[ 4 ];\n\t\trectCoords[ 0 ] = lightPos + halfWidth - halfHeight; // counterclockwise; light shines in local neg z direction\n\t\trectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n\t\trectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n\t\trectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n\n\t\tvec2 uv = LTC_Uv( normal, viewDir, roughness );\n\n\t\tvec4 t1 = texture2D( ltc_1, uv );\n\t\tvec4 t2 = texture2D( ltc_2, uv );\n\n\t\tmat3 mInv = mat3(\n\t\t\tvec3( t1.x, 0, t1.y ),\n\t\t\tvec3(    0, 1,    0 ),\n\t\t\tvec3( t1.z, 0, t1.w )\n\t\t);\n\n\t\t// LTC Fresnel Approximation by Stephen Hill\n\t\t// http://blog.selfshadow.com/publications/s2016-advances/s2016_ltc_fresnel.pdf\n\t\tvec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n\n\t\treflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n\n\t\treflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n\n\t}\n\n#endif\n\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\n\tvec3 irradiance = dotNL * directLight.color;\n\n\t#ifdef USE_CLEARCOAT\n\n\t\tfloat dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );\n\n\t\tvec3 ccIrradiance = dotNLcc * directLight.color;\n\n\t\tclearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );\n\n\t#endif\n\n\t#ifdef USE_SHEEN\n\n\t\tsheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );\n\n\t#endif\n\n\treflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );\n\n\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n\n}\n\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n\n\t#ifdef USE_CLEARCOAT\n\n\t\tclearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );\n\n\t#endif\n\n\t#ifdef USE_SHEEN\n\n\t\tsheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );\n\n\t#endif\n\n\t// Both indirect specular and indirect diffuse light accumulate here\n\n\tvec3 singleScattering = vec3( 0.0 );\n\tvec3 multiScattering = vec3( 0.0 );\n\tvec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n\n\tcomputeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );\n\n\tvec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );\n\n\treflectedLight.indirectSpecular += radiance * singleScattering;\n\treflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;\n\n\treflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;\n\n}\n\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\n\n// ref: https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n\n}\n',
            lights_fragment_begin: "\n/**\n * This is a template that can be used to light a material, it uses pluggable\n * RenderEquations (RE)for specific lighting scenarios.\n *\n * Instructions for use:\n * - Ensure that both RE_Direct, RE_IndirectDiffuse and RE_IndirectSpecular are defined\n * - If you have defined an RE_IndirectSpecular, you need to also provide a Material_LightProbeLOD. <---- ???\n * - Create a material parameter that is to be passed as the third parameter to your lighting functions.\n *\n * TODO:\n * - Add area light support.\n * - Add sphere light support.\n * - Add diffuse light probe (irradiance cubemap) support.\n */\n\nGeometricContext geometry;\n\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\n\n#ifdef USE_CLEARCOAT\n\n\tgeometry.clearcoatNormal = clearcoatNormal;\n\n#endif\n\nIncidentLight directLight;\n\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\n\tPointLight pointLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLightShadow;\n\t#endif\n\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\n\t\tpointLight = pointLights[ i ];\n\n\t\tgetPointLightInfo( pointLight, geometry, directLight );\n\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )\n\t\tpointLightShadow = pointLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;\n\t\t#endif\n\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\n\t}\n\t#pragma unroll_loop_end\n\n#endif\n\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\n\tSpotLight spotLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLightShadow;\n\t#endif\n\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\n\t\tspotLight = spotLights[ i ];\n\n\t\tgetSpotLightInfo( spotLight, geometry, directLight );\n\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\tspotLightShadow = spotLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\n\t}\n\t#pragma unroll_loop_end\n\n#endif\n\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\n\tDirectionalLight directionalLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLightShadow;\n\t#endif\n\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\n\t\tdirectionalLight = directionalLights[ i ];\n\n\t\tgetDirectionalLightInfo( directionalLight, geometry, directLight );\n\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n\t\tdirectionalLightShadow = directionalLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\n\t}\n\t#pragma unroll_loop_end\n\n#endif\n\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\n\tRectAreaLight rectAreaLight;\n\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n\n\t}\n\t#pragma unroll_loop_end\n\n#endif\n\n#if defined( RE_IndirectDiffuse )\n\n\tvec3 iblIrradiance = vec3( 0.0 );\n\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\n\tirradiance += getLightProbeIrradiance( lightProbe, geometry.normal );\n\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );\n\n\t\t}\n\t\t#pragma unroll_loop_end\n\n\t#endif\n\n#endif\n\n#if defined( RE_IndirectSpecular )\n\n\tvec3 radiance = vec3( 0.0 );\n\tvec3 clearcoatRadiance = vec3( 0.0 );\n\n#endif\n",
            lights_fragment_maps: "\n#if defined( RE_IndirectDiffuse )\n\n\t#ifdef USE_LIGHTMAP\n\n\t\tvec4 lightMapTexel = texture2D( lightMap, vUv2 );\n\t\tvec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;\n\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\n\t\t\tlightMapIrradiance *= PI;\n\n\t\t#endif\n\n\t\tirradiance += lightMapIrradiance;\n\n\t#endif\n\n\t#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )\n\n\t\tiblIrradiance += getIBLIrradiance( geometry.normal );\n\n\t#endif\n\n#endif\n\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\n\tradiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );\n\n\t#ifdef USE_CLEARCOAT\n\n\t\tclearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );\n\n\t#endif\n\n#endif\n",
            lights_fragment_end: "\n#if defined( RE_IndirectDiffuse )\n\n\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n\n#endif\n\n#if defined( RE_IndirectSpecular )\n\n\tRE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );\n\n#endif\n",
            logdepthbuf_fragment: "\n#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\n\t// Doing a strict comparison with == 1.0 can cause noise artifacts\n\t// on some platforms. See issue #17623.\n\tgl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;\n\n#endif\n",
            logdepthbuf_pars_fragment: "\n#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\n\tuniform float logDepthBufFC;\n\tvarying float vFragDepth;\n\tvarying float vIsPerspective;\n\n#endif\n",
            logdepthbuf_pars_vertex: "\n#ifdef USE_LOGDEPTHBUF\n\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\n\t\tvarying float vFragDepth;\n\t\tvarying float vIsPerspective;\n\n\t#else\n\n\t\tuniform float logDepthBufFC;\n\n\t#endif\n\n#endif\n",
            logdepthbuf_vertex: "\n#ifdef USE_LOGDEPTHBUF\n\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t\tvIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );\n\n\t#else\n\n\t\tif ( isPerspectiveMatrix( projectionMatrix ) ) {\n\n\t\t\tgl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;\n\n\t\t\tgl_Position.z *= gl_Position.w;\n\n\t\t}\n\n\t#endif\n\n#endif\n",
            map_fragment: "\n#ifdef USE_MAP\n\n\tvec4 texelColor = texture2D( map, vUv );\n\n\ttexelColor = mapTexelToLinear( texelColor );\n\tdiffuseColor *= texelColor;\n\n#endif\n",
            map_pars_fragment: "\n#ifdef USE_MAP\n\n\tuniform sampler2D map;\n\n#endif\n",
            map_particle_fragment: "\n#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\n\tvec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n\n#endif\n\n#ifdef USE_MAP\n\n\tvec4 mapTexel = texture2D( map, uv );\n\tdiffuseColor *= mapTexelToLinear( mapTexel );\n\n#endif\n\n#ifdef USE_ALPHAMAP\n\n\tdiffuseColor.a *= texture2D( alphaMap, uv ).g;\n\n#endif\n",
            map_particle_pars_fragment: "\n#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\n\tuniform mat3 uvTransform;\n\n#endif\n\n#ifdef USE_MAP\n\n\tuniform sampler2D map;\n\n#endif\n\n#ifdef USE_ALPHAMAP\n\n\tuniform sampler2D alphaMap;\n\n#endif\n",
            metalnessmap_fragment: "\nfloat metalnessFactor = metalness;\n\n#ifdef USE_METALNESSMAP\n\n\tvec4 texelMetalness = texture2D( metalnessMap, vUv );\n\n\t// reads channel B, compatible with a combined OcclusionRoughnessMetallic (RGB) texture\n\tmetalnessFactor *= texelMetalness.b;\n\n#endif\n",
            metalnessmap_pars_fragment: "\n#ifdef USE_METALNESSMAP\n\n\tuniform sampler2D metalnessMap;\n\n#endif\n",
            morphnormal_vertex: "\n#ifdef USE_MORPHNORMALS\n\n\t// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:\n\t// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in normal = sum((target - base) * influence)\n\t// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting\n\tobjectNormal *= morphTargetBaseInfluence;\n\n\t#ifdef MORPHTARGETS_TEXTURE\n\n\t\tfor ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\n\t\t\tif ( morphTargetInfluences[ i ] > 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1, 2 ) * morphTargetInfluences[ i ];\n\n\t\t}\n\n\t#else\n\n\t\tobjectNormal += morphNormal0 * morphTargetInfluences[ 0 ];\n\t\tobjectNormal += morphNormal1 * morphTargetInfluences[ 1 ];\n\t\tobjectNormal += morphNormal2 * morphTargetInfluences[ 2 ];\n\t\tobjectNormal += morphNormal3 * morphTargetInfluences[ 3 ];\n\n\t#endif\n\n#endif\n",
            morphtarget_pars_vertex: "\n#ifdef USE_MORPHTARGETS\n\n\tuniform float morphTargetBaseInfluence;\n\n\t#ifdef MORPHTARGETS_TEXTURE\n\n\t\tuniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];\n\t\tuniform sampler2DArray morphTargetsTexture;\n\t\tuniform vec2 morphTargetsTextureSize;\n\n\t\tvec3 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset, const in int stride ) {\n\n\t\t\tfloat texelIndex = float( vertexIndex * stride + offset );\n\t\t\tfloat y = floor( texelIndex / morphTargetsTextureSize.x );\n\t\t\tfloat x = texelIndex - y * morphTargetsTextureSize.x;\n\n\t\t\tvec3 morphUV = vec3( ( x + 0.5 ) / morphTargetsTextureSize.x, y / morphTargetsTextureSize.y, morphTargetIndex );\n\t\t\treturn texture( morphTargetsTexture, morphUV ).xyz;\n\n\t\t}\n\n\t#else\n\n\t\t#ifndef USE_MORPHNORMALS\n\n\t\t\tuniform float morphTargetInfluences[ 8 ];\n\n\t\t#else\n\n\t\t\tuniform float morphTargetInfluences[ 4 ];\n\n\t\t#endif\n\n\t#endif\n\n#endif\n",
            morphtarget_vertex: "\n#ifdef USE_MORPHTARGETS\n\n\t// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:\n\t// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in position = sum((target - base) * influence)\n\t// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting\n\ttransformed *= morphTargetBaseInfluence;\n\n\t#ifdef MORPHTARGETS_TEXTURE\n\n\t\tfor ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\n\t\t\t#ifndef USE_MORPHNORMALS\n\n\t\t\t\tif ( morphTargetInfluences[ i ] > 0.0 ) transformed += getMorph( gl_VertexID, i, 0, 1 ) * morphTargetInfluences[ i ];\n\n\t\t\t#else\n\n\t\t\t\tif ( morphTargetInfluences[ i ] > 0.0 ) transformed += getMorph( gl_VertexID, i, 0, 2 ) * morphTargetInfluences[ i ];\n\n\t\t\t#endif\n\n\t\t}\n\n\t#else\n\n\t\ttransformed += morphTarget0 * morphTargetInfluences[ 0 ];\n\t\ttransformed += morphTarget1 * morphTargetInfluences[ 1 ];\n\t\ttransformed += morphTarget2 * morphTargetInfluences[ 2 ];\n\t\ttransformed += morphTarget3 * morphTargetInfluences[ 3 ];\n\n\t\t#ifndef USE_MORPHNORMALS\n\n\t\t\ttransformed += morphTarget4 * morphTargetInfluences[ 4 ];\n\t\t\ttransformed += morphTarget5 * morphTargetInfluences[ 5 ];\n\t\t\ttransformed += morphTarget6 * morphTargetInfluences[ 6 ];\n\t\t\ttransformed += morphTarget7 * morphTargetInfluences[ 7 ];\n\n\t\t#endif\n\n\t#endif\n\n#endif\n",
            normal_fragment_begin: "\nfloat faceDirection = gl_FrontFacing ? 1.0 : - 1.0;\n\n#ifdef FLAT_SHADED\n\n\t// Workaround for Adreno GPUs not able to do dFdx( vViewPosition )\n\n\tvec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n\tvec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n\n#else\n\n\tvec3 normal = normalize( vNormal );\n\n\t#ifdef DOUBLE_SIDED\n\n\t\tnormal = normal * faceDirection;\n\n\t#endif\n\n\t#ifdef USE_TANGENT\n\n\t\tvec3 tangent = normalize( vTangent );\n\t\tvec3 bitangent = normalize( vBitangent );\n\n\t\t#ifdef DOUBLE_SIDED\n\n\t\t\ttangent = tangent * faceDirection;\n\t\t\tbitangent = bitangent * faceDirection;\n\n\t\t#endif\n\n\t\t#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )\n\n\t\t\tmat3 vTBN = mat3( tangent, bitangent, normal );\n\n\t\t#endif\n\n\t#endif\n\n#endif\n\n// non perturbed normal for clearcoat among others\n\nvec3 geometryNormal = normal;\n\n",
            normal_fragment_maps: "\n\n#ifdef OBJECTSPACE_NORMALMAP\n\n\tnormal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0; // overrides both flatShading and attribute normals\n\n\t#ifdef FLIP_SIDED\n\n\t\tnormal = - normal;\n\n\t#endif\n\n\t#ifdef DOUBLE_SIDED\n\n\t\tnormal = normal * faceDirection;\n\n\t#endif\n\n\tnormal = normalize( normalMatrix * normal );\n\n#elif defined( TANGENTSPACE_NORMALMAP )\n\n\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\tmapN.xy *= normalScale;\n\n\t#ifdef USE_TANGENT\n\n\t\tnormal = normalize( vTBN * mapN );\n\n\t#else\n\n\t\tnormal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );\n\n\t#endif\n\n#elif defined( USE_BUMPMAP )\n\n\tnormal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );\n\n#endif\n",
            normal_pars_fragment: "\n#ifndef FLAT_SHADED\n\n\tvarying vec3 vNormal;\n\n\t#ifdef USE_TANGENT\n\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\n\t#endif\n\n#endif\n",
            normal_pars_vertex: "\n#ifndef FLAT_SHADED\n\n\tvarying vec3 vNormal;\n\n\t#ifdef USE_TANGENT\n\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\n\t#endif\n\n#endif\n",
            normal_vertex: "\n#ifndef FLAT_SHADED // normal is computed with derivatives when FLAT_SHADED\n\n\tvNormal = normalize( transformedNormal );\n\n\t#ifdef USE_TANGENT\n\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\n\t#endif\n\n#endif\n",
            normalmap_pars_fragment: "\n#ifdef USE_NORMALMAP\n\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n\n#endif\n\n#ifdef OBJECTSPACE_NORMALMAP\n\n\tuniform mat3 normalMatrix;\n\n#endif\n\n#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )\n\n\t// Normal Mapping Without Precomputed Tangents\n\t// http://www.thetenthplanet.de/archives/1180\n\n\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {\n\n\t\t// Workaround for Adreno 3XX dFd*( vec3 ) bug. See #9988\n\n\t\tvec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );\n\t\tvec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );\n\t\tvec2 st0 = dFdx( vUv.st );\n\t\tvec2 st1 = dFdy( vUv.st );\n\n\t\tvec3 N = surf_norm; // normalized\n\n\t\tvec3 q1perp = cross( q1, N );\n\t\tvec3 q0perp = cross( N, q0 );\n\n\t\tvec3 T = q1perp * st0.x + q0perp * st1.x;\n\t\tvec3 B = q1perp * st0.y + q0perp * st1.y;\n\n\t\tfloat det = max( dot( T, T ), dot( B, B ) );\n\t\tfloat scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );\n\n\t\treturn normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );\n\n\t}\n\n#endif\n",
            clearcoat_normal_fragment_begin: "\n#ifdef USE_CLEARCOAT\n\n\tvec3 clearcoatNormal = geometryNormal;\n\n#endif\n",
            clearcoat_normal_fragment_maps: "\n#ifdef USE_CLEARCOAT_NORMALMAP\n\n\tvec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;\n\tclearcoatMapN.xy *= clearcoatNormalScale;\n\n\t#ifdef USE_TANGENT\n\n\t\tclearcoatNormal = normalize( vTBN * clearcoatMapN );\n\n\t#else\n\n\t\tclearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );\n\n\t#endif\n\n#endif\n",
            clearcoat_pars_fragment: "\n\n#ifdef USE_CLEARCOATMAP\n\n\tuniform sampler2D clearcoatMap;\n\n#endif\n\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\n\tuniform sampler2D clearcoatRoughnessMap;\n\n#endif\n\n#ifdef USE_CLEARCOAT_NORMALMAP\n\n\tuniform sampler2D clearcoatNormalMap;\n\tuniform vec2 clearcoatNormalScale;\n\n#endif\n",
            output_fragment: "\n#ifdef OPAQUE\ndiffuseColor.a = 1.0;\n#endif\n\n// https://github.com/mrdoob/three.js/pull/22425\n#ifdef USE_TRANSMISSION\ndiffuseColor.a *= transmissionAlpha + 0.1;\n#endif\n\ngl_FragColor = vec4( outgoingLight, diffuseColor.a );\n",
            packing: "\nvec3 packNormalToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\n}\n\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 2.0 * rgb.xyz - 1.0;\n}\n\nconst float PackUpscale = 256. / 255.; // fraction -> 0..1 (including 1)\nconst float UnpackDownscale = 255. / 256.; // 0..1 -> fraction (excluding 1)\n\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\n\nconst float ShiftRight8 = 1. / 256.;\n\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8; // tidy overflow\n\treturn r * PackUpscale;\n}\n\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\n\nvec4 pack2HalfToRGBA( vec2 v ) {\n\tvec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );\n\treturn vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );\n}\n\nvec2 unpackRGBATo2Half( vec4 v ) {\n\treturn vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\n\n// NOTE: viewZ/eyeZ is < 0 when in front of the camera per OpenGL conventions\n\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n\treturn linearClipZ * ( near - far ) - near;\n}\n\n// NOTE: https://twitter.com/gonnavis/status/1377183786949959682\n\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n\treturn ( near * far ) / ( ( far - near ) * invClipZ - far );\n}\n",
            premultiplied_alpha_fragment: "\n#ifdef PREMULTIPLIED_ALPHA\n\n\t// Get get normal blending with premultipled, use with CustomBlending, OneFactor, OneMinusSrcAlphaFactor, AddEquation.\n\tgl_FragColor.rgb *= gl_FragColor.a;\n\n#endif\n",
            project_vertex: "\nvec4 mvPosition = vec4( transformed, 1.0 );\n\n#ifdef USE_INSTANCING\n\n\tmvPosition = instanceMatrix * mvPosition;\n\n#endif\n\nmvPosition = modelViewMatrix * mvPosition;\n\ngl_Position = projectionMatrix * mvPosition;\n",
            dithering_fragment: "\n#ifdef DITHERING\n\n\tgl_FragColor.rgb = dithering( gl_FragColor.rgb );\n\n#endif\n",
            dithering_pars_fragment: "\n#ifdef DITHERING\n\n\t// based on https://www.shadertoy.com/view/MslGR8\n\tvec3 dithering( vec3 color ) {\n\t\t//Calculate grid position\n\t\tfloat grid_position = rand( gl_FragCoord.xy );\n\n\t\t//Shift the individual colors differently, thus making it even harder to see the dithering pattern\n\t\tvec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n\n\t\t//modify shift acording to grid position.\n\t\tdither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n\n\t\t//shift the color by dither_shift\n\t\treturn color + dither_shift_RGB;\n\t}\n\n#endif\n",
            roughnessmap_fragment: "\nfloat roughnessFactor = roughness;\n\n#ifdef USE_ROUGHNESSMAP\n\n\tvec4 texelRoughness = texture2D( roughnessMap, vUv );\n\n\t// reads channel G, compatible with a combined OcclusionRoughnessMetallic (RGB) texture\n\troughnessFactor *= texelRoughness.g;\n\n#endif\n",
            roughnessmap_pars_fragment: "\n#ifdef USE_ROUGHNESSMAP\n\n\tuniform sampler2D roughnessMap;\n\n#endif\n",
            shadowmap_pars_fragment: "\n#ifdef USE_SHADOWMAP\n\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\n\t#endif\n\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\n\t#endif\n\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\n\t#endif\n\n\t/*\n\t#if NUM_RECT_AREA_LIGHTS > 0\n\n\t\t// TODO (abelnation): create uniforms for area light shadows\n\n\t#endif\n\t*/\n\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\n\t}\n\n\tvec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {\n\n\t\treturn unpackRGBATo2Half( texture2D( shadow, uv ) );\n\n\t}\n\n\tfloat VSMShadow (sampler2D shadow, vec2 uv, float compare ){\n\n\t\tfloat occlusion = 1.0;\n\n\t\tvec2 distribution = texture2DDistribution( shadow, uv );\n\n\t\tfloat hard_shadow = step( compare , distribution.x ); // Hard Shadow\n\n\t\tif (hard_shadow != 1.0 ) {\n\n\t\t\tfloat distance = compare - distribution.x ;\n\t\t\tfloat variance = max( 0.00000, distribution.y * distribution.y );\n\t\t\tfloat softness_probability = variance / (variance + distance * distance ); // Chebeyshevs inequality\n\t\t\tsoftness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 ); // 0.3 reduces light bleed\n\t\t\tocclusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );\n\n\t\t}\n\t\treturn occlusion;\n\n\t}\n\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\n\t\tfloat shadow = 1.0;\n\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\n\t\t// if ( something && something ) breaks ATI OpenGL shader compiler\n\t\t// if ( all( something, something ) ) using this instead\n\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\n\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\n\t\tbool frustumTest = all( frustumTestVec );\n\n\t\tif ( frustumTest ) {\n\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tfloat dx2 = dx0 / 2.0;\n\t\t\tfloat dy2 = dy0 / 2.0;\n\t\t\tfloat dx3 = dx1 / 2.0;\n\t\t\tfloat dy3 = dy1 / 2.0;\n\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 17.0 );\n\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx = texelSize.x;\n\t\t\tfloat dy = texelSize.y;\n\n\t\t\tvec2 uv = shadowCoord.xy;\n\t\t\tvec2 f = fract( uv * shadowMapSize + 0.5 );\n\t\t\tuv -= f * texelSize;\n\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, uv, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), \n\t\t\t\t\t\t  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),\n\t\t\t\t\t\t  f.x ),\n\t\t\t\t\t mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), \n\t\t\t\t\t\t  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t\t  f.x ),\n\t\t\t\t\t f.y )\n\t\t\t) * ( 1.0 / 9.0 );\n\n\t\t#elif defined( SHADOWMAP_TYPE_VSM )\n\n\t\t\tshadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );\n\n\t\t#else // no percentage-closer filtering:\n\n\t\t\tshadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\n\t\t#endif\n\n\t\t}\n\n\t\treturn shadow;\n\n\t}\n\n\t// cubeToUV() maps a 3D direction vector suitable for cube texture mapping to a 2D\n\t// vector suitable for 2D texture mapping. This code uses the following layout for the\n\t// 2D texture:\n\t//\n\t// xzXZ\n\t//  y Y\n\t//\n\t// Y - Positive y direction\n\t// y - Negative y direction\n\t// X - Positive x direction\n\t// x - Negative x direction\n\t// Z - Positive z direction\n\t// z - Negative z direction\n\t//\n\t// Source and test bed:\n\t// https://gist.github.com/tschw/da10c43c467ce8afd0c4\n\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\n\t\t// Number of texels to avoid at the edge of each square\n\n\t\tvec3 absV = abs( v );\n\n\t\t// Intersect unit cube\n\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\n\t\t// Apply scale to avoid seams\n\n\t\t// two texels less per square (one texel will do for NEAREST)\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\n\t\t// Unwrap\n\n\t\t// space: -1 ... 1 range for each square\n\t\t//\n\t\t// #X##\t\tdim    := ( 4 , 2 )\n\t\t//  # #\t\tcenter := ( 1 , 1 )\n\n\t\tvec2 planar = v.xy;\n\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\n\t\tif ( absV.z >= almostOne ) {\n\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\n\t\t} else if ( absV.x >= almostOne ) {\n\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\n\t\t} else if ( absV.y >= almostOne ) {\n\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\n\t\t}\n\n\t\t// Transform to UV space\n\n\t\t// scale := 0.5 / dim\n\t\t// translate := ( center + 0.5 ) / dim\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\n\t}\n\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\n\t\t// for point lights, the uniform @vShadowCoord is re-purposed to hold\n\t\t// the vector from the light to the world-space position of the fragment.\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\n\t\t// dp = normalized distance from light to fragment position\n\t\tfloat dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear ); // need to clamp?\n\t\tdp += shadowBias;\n\n\t\t// bd3D = base direction 3D\n\t\tvec3 bd3D = normalize( lightToPosition );\n\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )\n\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\n\t\t#else // no percentage-closer filtering\n\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\n\t\t#endif\n\n\t}\n\n#endif\n",
            shadowmap_pars_vertex: "\n#ifdef USE_SHADOWMAP\n\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\n\t#endif\n\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\n\t\tuniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\n\t#endif\n\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\n\t#endif\n\n\t/*\n\t#if NUM_RECT_AREA_LIGHTS > 0\n\n\t\t// TODO (abelnation): uniforms for area light shadows\n\n\t#endif\n\t*/\n\n#endif\n",
            shadowmap_vertex: "\n#ifdef USE_SHADOWMAP\n\n\t#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0\n\n\t\t// Offsetting the position used for querying occlusion along the world normal can be used to reduce shadow acne.\n\t\tvec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\tvec4 shadowWorldPosition;\n\n\t#endif\n\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;\n\n\t}\n\t#pragma unroll_loop_end\n\n\t#endif\n\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;\n\n\t}\n\t#pragma unroll_loop_end\n\n\t#endif\n\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;\n\n\t}\n\t#pragma unroll_loop_end\n\n\t#endif\n\n\t/*\n\t#if NUM_RECT_AREA_LIGHTS > 0\n\n\t\t// TODO (abelnation): update vAreaShadowCoord with area light info\n\n\t#endif\n\t*/\n\n#endif\n",
            shadowmask_pars_fragment: "\nfloat getShadowMask() {\n\n\tfloat shadow = 1.0;\n\n\t#ifdef USE_SHADOWMAP\n\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\n\tDirectionalLightShadow directionalLight;\n\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\n\t\tdirectionalLight = directionalLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\n\t}\n\t#pragma unroll_loop_end\n\n\t#endif\n\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\n\tSpotLightShadow spotLight;\n\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\n\t\tspotLight = spotLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\n\t}\n\t#pragma unroll_loop_end\n\n\t#endif\n\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\n\tPointLightShadow pointLight;\n\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\n\t\tpointLight = pointLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\n\t}\n\t#pragma unroll_loop_end\n\n\t#endif\n\n\t/*\n\t#if NUM_RECT_AREA_LIGHTS > 0\n\n\t\t// TODO (abelnation): update shadow for Area light\n\n\t#endif\n\t*/\n\n\t#endif\n\n\treturn shadow;\n\n}\n",
            skinbase_vertex: "\n#ifdef USE_SKINNING\n\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n\n#endif\n",
            skinning_pars_vertex: "\n#ifdef USE_SKINNING\n\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\n\t#ifdef BONE_TEXTURE\n\n\t\tuniform highp sampler2D boneTexture;\n\t\tuniform int boneTextureSize;\n\n\t\tmat4 getBoneMatrix( const in float i ) {\n\n\t\t\tfloat j = i * 4.0;\n\t\t\tfloat x = mod( j, float( boneTextureSize ) );\n\t\t\tfloat y = floor( j / float( boneTextureSize ) );\n\n\t\t\tfloat dx = 1.0 / float( boneTextureSize );\n\t\t\tfloat dy = 1.0 / float( boneTextureSize );\n\n\t\t\ty = dy * ( y + 0.5 );\n\n\t\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\n\t\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\n\t\t\treturn bone;\n\n\t\t}\n\n\t#else\n\n\t\tuniform mat4 boneMatrices[ MAX_BONES ];\n\n\t\tmat4 getBoneMatrix( const in float i ) {\n\n\t\t\tmat4 bone = boneMatrices[ int(i) ];\n\t\t\treturn bone;\n\n\t\t}\n\n\t#endif\n\n#endif\n",
            skinning_vertex: "\n#ifdef USE_SKINNING\n\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\n\ttransformed = ( bindMatrixInverse * skinned ).xyz;\n\n#endif\n",
            skinnormal_vertex: "\n#ifdef USE_SKINNING\n\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;\n\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n\n\t#ifdef USE_TANGENT\n\n\t\tobjectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\n\t#endif\n\n#endif\n",
            specularmap_fragment: "\nfloat specularStrength;\n\n#ifdef USE_SPECULARMAP\n\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n\n#else\n\n\tspecularStrength = 1.0;\n\n#endif\n",
            specularmap_pars_fragment: "\n#ifdef USE_SPECULARMAP\n\n\tuniform sampler2D specularMap;\n\n#endif\n",
            tonemapping_fragment: "\n#if defined( TONE_MAPPING )\n\n\tgl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n\n#endif\n",
            tonemapping_pars_fragment: "\n#ifndef saturate\n// <common> may have defined saturate() already\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\n\nuniform float toneMappingExposure;\n\n// exposure only\nvec3 LinearToneMapping( vec3 color ) {\n\n\treturn toneMappingExposure * color;\n\n}\n\n// source: https://www.cs.utah.edu/docs/techreports/2002/pdf/UUCS-02-001.pdf\nvec3 ReinhardToneMapping( vec3 color ) {\n\n\tcolor *= toneMappingExposure;\n\treturn saturate( color / ( vec3( 1.0 ) + color ) );\n\n}\n\n// source: http://filmicworlds.com/blog/filmic-tonemapping-operators/\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\n\t// optimized filmic operator by Jim Hejl and Richard Burgess-Dawson\n\tcolor *= toneMappingExposure;\n\tcolor = max( vec3( 0.0 ), color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n\n}\n\n// source: https://github.com/selfshadow/ltc_code/blob/master/webgl/shaders/ltc/ltc_blit.fs\nvec3 RRTAndODTFit( vec3 v ) {\n\n\tvec3 a = v * ( v + 0.0245786 ) - 0.000090537;\n\tvec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;\n\treturn a / b;\n\n}\n\n// this implementation of ACES is modified to accommodate a brighter viewing environment.\n// the scale factor of 1/0.6 is subjective. see discussion in #19621.\n\nvec3 ACESFilmicToneMapping( vec3 color ) {\n\n\t// sRGB => XYZ => D65_2_D60 => AP1 => RRT_SAT\n\tconst mat3 ACESInputMat = mat3(\n\t\tvec3( 0.59719, 0.07600, 0.02840 ), // transposed from source\n\t\tvec3( 0.35458, 0.90834, 0.13383 ),\n\t\tvec3( 0.04823, 0.01566, 0.83777 )\n\t);\n\n\t// ODT_SAT => XYZ => D60_2_D65 => sRGB\n\tconst mat3 ACESOutputMat = mat3(\n\t\tvec3(  1.60475, -0.10208, -0.00327 ), // transposed from source\n\t\tvec3( -0.53108,  1.10813, -0.07276 ),\n\t\tvec3( -0.07367, -0.00605,  1.07602 )\n\t);\n\n\tcolor *= toneMappingExposure / 0.6;\n\n\tcolor = ACESInputMat * color;\n\n\t// Apply RRT and ODT\n\tcolor = RRTAndODTFit( color );\n\n\tcolor = ACESOutputMat * color;\n\n\t// Clamp to [0, 1]\n\treturn saturate( color );\n\n}\n\nvec3 CustomToneMapping( vec3 color ) { return color; }\n",
            transmission_fragment: "\n#ifdef USE_TRANSMISSION\n\n\tfloat transmissionAlpha = 1.0;\n\tfloat transmissionFactor = transmission;\n\tfloat thicknessFactor = thickness;\n\n\t#ifdef USE_TRANSMISSIONMAP\n\n\t\ttransmissionFactor *= texture2D( transmissionMap, vUv ).r;\n\n\t#endif\n\n\t#ifdef USE_THICKNESSMAP\n\n\t\tthicknessFactor *= texture2D( thicknessMap, vUv ).g;\n\n\t#endif\n\n\tvec3 pos = vWorldPosition;\n\tvec3 v = normalize( cameraPosition - pos );\n\tvec3 n = inverseTransformDirection( normal, viewMatrix );\n\n\tvec4 transmission = getIBLVolumeRefraction(\n\t\tn, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,\n\t\tpos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,\n\t\tattenuationColor, attenuationDistance );\n\n\ttotalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );\n\ttransmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );\n#endif\n",
            transmission_pars_fragment: "\n#ifdef USE_TRANSMISSION\n\n\t// Transmission code is based on glTF-Sampler-Viewer\n\t// https://github.com/KhronosGroup/glTF-Sample-Viewer\n\n\tuniform float transmission;\n\tuniform float thickness;\n\tuniform float attenuationDistance;\n\tuniform vec3 attenuationColor;\n\n\t#ifdef USE_TRANSMISSIONMAP\n\n\t\tuniform sampler2D transmissionMap;\n\n\t#endif\n\n\t#ifdef USE_THICKNESSMAP\n\n\t\tuniform sampler2D thicknessMap;\n\n\t#endif\n\n\tuniform vec2 transmissionSamplerSize;\n\tuniform sampler2D transmissionSamplerMap;\n\n\tuniform mat4 modelMatrix;\n\tuniform mat4 projectionMatrix;\n\n\tvarying vec3 vWorldPosition;\n\n\tvec3 getVolumeTransmissionRay( vec3 n, vec3 v, float thickness, float ior, mat4 modelMatrix ) {\n\n\t\t// Direction of refracted light.\n\t\tvec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );\n\n\t\t// Compute rotation-independant scaling of the model matrix.\n\t\tvec3 modelScale;\n\t\tmodelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );\n\t\tmodelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );\n\t\tmodelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );\n\n\t\t// The thickness is specified in local space.\n\t\treturn normalize( refractionVector ) * thickness * modelScale;\n\n\t}\n\n\tfloat applyIorToRoughness( float roughness, float ior ) {\n\n\t\t// Scale roughness with IOR so that an IOR of 1.0 results in no microfacet refraction and\n\t\t// an IOR of 1.5 results in the default amount of microfacet refraction.\n\t\treturn roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );\n\n\t}\n\n\tvec4 getTransmissionSample( vec2 fragCoord, float roughness, float ior ) {\n\n\t\tfloat framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );\n\n\t\t#ifdef TEXTURE_LOD_EXT\n\n\t\t\treturn texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );\n\n\t\t#else\n\n\t\t\treturn texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );\n\n\t\t#endif\n\n\t}\n\n\tvec3 applyVolumeAttenuation( vec3 radiance, float transmissionDistance, vec3 attenuationColor, float attenuationDistance ) {\n\n\t\tif ( attenuationDistance == 0.0 ) {\n\n\t\t\t// Attenuation distance is +∞ (which we indicate by zero), i.e. the transmitted color is not attenuated at all.\n\t\t\treturn radiance;\n\n\t\t} else {\n\n\t\t\t// Compute light attenuation using Beer's law.\n\t\t\tvec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;\n\t\t\tvec3 transmittance = exp( - attenuationCoefficient * transmissionDistance ); // Beer's law\n\t\t\treturn transmittance * radiance;\n\n\t\t}\n\n\t}\n\n\tvec4 getIBLVolumeRefraction( vec3 n, vec3 v, float roughness, vec3 diffuseColor, vec3 specularColor, float specularF90,\n\t\tvec3 position, mat4 modelMatrix, mat4 viewMatrix, mat4 projMatrix, float ior, float thickness,\n\t\tvec3 attenuationColor, float attenuationDistance ) {\n\n\t\tvec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );\n\t\tvec3 refractedRayExit = position + transmissionRay;\n\n\t\t// Project refracted vector on the framebuffer, while mapping to normalized device coordinates.\n\t\tvec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );\n\t\tvec2 refractionCoords = ndcPos.xy / ndcPos.w;\n\t\trefractionCoords += 1.0;\n\t\trefractionCoords /= 2.0;\n\n\t\t// Sample framebuffer to get pixel the refracted ray hits.\n\t\tvec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );\n\n\t\tvec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );\n\n\t\t// Get the specular component.\n\t\tvec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );\n\n\t\treturn vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );\n\n\t}\n#endif\n",
            uv_pars_fragment: "\n#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )\n\n\tvarying vec2 vUv;\n\n#endif\n",
            uv_pars_vertex: "\n#ifdef USE_UV\n\n\t#ifdef UVS_VERTEX_ONLY\n\n\t\tvec2 vUv;\n\n\t#else\n\n\t\tvarying vec2 vUv;\n\n\t#endif\n\n\tuniform mat3 uvTransform;\n\n#endif\n",
            uv_vertex: "\n#ifdef USE_UV\n\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n\n#endif\n",
            uv2_pars_fragment: "\n#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\n\tvarying vec2 vUv2;\n\n#endif\n",
            uv2_pars_vertex: "\n#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\n\tattribute vec2 uv2;\n\tvarying vec2 vUv2;\n\n\tuniform mat3 uv2Transform;\n\n#endif\n",
            uv2_vertex: "\n#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\n\tvUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;\n\n#endif\n",
            worldpos_vertex: "\n#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )\n\n\tvec4 worldPosition = vec4( transformed, 1.0 );\n\n\t#ifdef USE_INSTANCING\n\n\t\tworldPosition = instanceMatrix * worldPosition;\n\n\t#endif\n\n\tworldPosition = modelMatrix * worldPosition;\n\n#endif\n",
            background_vert: "\nvarying vec2 vUv;\nuniform mat3 uvTransform;\n\nvoid main() {\n\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n\n\tgl_Position = vec4( position.xy, 1.0, 1.0 );\n\n}\n",
            background_frag: "\nuniform sampler2D t2D;\n\nvarying vec2 vUv;\n\nvoid main() {\n\n\tvec4 texColor = texture2D( t2D, vUv );\n\n\tgl_FragColor = mapTexelToLinear( texColor );\n\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\n}\n",
            cube_vert: "\nvarying vec3 vWorldDirection;\n\n#include <common>\n\nvoid main() {\n\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\n\tgl_Position.z = gl_Position.w; // set z to camera.far\n\n}\n",
            cube_frag: "\n#include <envmap_common_pars_fragment>\nuniform float opacity;\n\nvarying vec3 vWorldDirection;\n\n#include <cube_uv_reflection_fragment>\n\nvoid main() {\n\n\tvec3 vReflect = vWorldDirection;\n\t#include <envmap_fragment>\n\n\tgl_FragColor = envColor;\n\tgl_FragColor.a *= opacity;\n\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\n}\n",
            depth_vert: "\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\n// This is used for computing an equivalent of gl_FragCoord.z that is as high precision as possible.\n// Some platforms compute gl_FragCoord at a lower precision which makes the manually computed value better for\n// depth-based postprocessing effects. Reproduced on iPad with A10 processor / iPadOS 13.3.1.\nvarying vec2 vHighPrecisionZW;\n\nvoid main() {\n\n\t#include <uv_vertex>\n\n\t#include <skinbase_vertex>\n\n\t#ifdef USE_DISPLACEMENTMAP\n\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\n\t#endif\n\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\n\tvHighPrecisionZW = gl_Position.zw;\n\n}\n",
            depth_frag: "\n#if DEPTH_PACKING == 3200\n\n\tuniform float opacity;\n\n#endif\n\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nvarying vec2 vHighPrecisionZW;\n\nvoid main() {\n\n\t#include <clipping_planes_fragment>\n\n\tvec4 diffuseColor = vec4( 1.0 );\n\n\t#if DEPTH_PACKING == 3200\n\n\t\tdiffuseColor.a = opacity;\n\n\t#endif\n\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\n\t#include <logdepthbuf_fragment>\n\n\t// Higher precision equivalent of gl_FragCoord.z. This assumes depthRange has been left to its default values.\n\tfloat fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;\n\n\t#if DEPTH_PACKING == 3200\n\n\t\tgl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );\n\n\t#elif DEPTH_PACKING == 3201\n\n\t\tgl_FragColor = packDepthToRGBA( fragCoordZ );\n\n\t#endif\n\n}\n",
            distanceRGBA_vert: "\n#define DISTANCE\n\nvarying vec3 vWorldPosition;\n\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\nvoid main() {\n\n\t#include <uv_vertex>\n\n\t#include <skinbase_vertex>\n\n\t#ifdef USE_DISPLACEMENTMAP\n\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\n\t#endif\n\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\n\tvWorldPosition = worldPosition.xyz;\n\n}\n",
            distanceRGBA_frag: "\n#define DISTANCE\n\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nvoid main () {\n\n\t#include <clipping_planes_fragment>\n\n\tvec4 diffuseColor = vec4( 1.0 );\n\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\n\tfloat dist = length( vWorldPosition - referencePosition );\n\tdist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n\tdist = saturate( dist ); // clamp to [ 0, 1 ]\n\n\tgl_FragColor = packDepthToRGBA( dist );\n\n}\n",
            equirect_vert: "\nvarying vec3 vWorldDirection;\n\n#include <common>\n\nvoid main() {\n\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\n}\n",
            equirect_frag: "\nuniform sampler2D tEquirect;\n\nvarying vec3 vWorldDirection;\n\n#include <common>\n\nvoid main() {\n\n\tvec3 direction = normalize( vWorldDirection );\n\n\tvec2 sampleUV = equirectUv( direction );\n\n\tvec4 texColor = texture2D( tEquirect, sampleUV );\n\n\tgl_FragColor = mapTexelToLinear( texColor );\n\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\n}\n",
            linedashed_vert: "\nuniform float scale;\nattribute float lineDistance;\n\nvarying float vLineDistance;\n\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\nvoid main() {\n\n\tvLineDistance = scale * lineDistance;\n\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n\n}\n",
            linedashed_frag: "\nuniform vec3 diffuse;\nuniform float opacity;\n\nuniform float dashSize;\nuniform float totalSize;\n\nvarying float vLineDistance;\n\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nvoid main() {\n\n\t#include <clipping_planes_fragment>\n\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\n\t\tdiscard;\n\n\t}\n\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\n\t#include <logdepthbuf_fragment>\n\t#include <color_fragment>\n\n\toutgoingLight = diffuseColor.rgb; // simple shader\n\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\n}\n",
            meshbasic_vert: "\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\nvoid main() {\n\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\n\t#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )\n\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinbase_vertex>\n\t\t#include <skinnormal_vertex>\n\t\t#include <defaultnormal_vertex>\n\n\t#endif\n\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <fog_vertex>\n\n}\n",
            meshbasic_frag: "\nuniform vec3 diffuse;\nuniform float opacity;\n\n#ifndef FLAT_SHADED\n\n\tvarying vec3 vNormal;\n\n#endif\n\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nvoid main() {\n\n\t#include <clipping_planes_fragment>\n\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\n\t// accumulation (baked indirect lighting only)\n\t#ifdef USE_LIGHTMAP\n\n\t\tvec4 lightMapTexel= texture2D( lightMap, vUv2 );\n\t\treflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;\n\n\t#else\n\n\t\treflectedLight.indirectDiffuse += vec3( 1.0 );\n\n\t#endif\n\n\t// modulation\n\t#include <aomap_fragment>\n\n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\n\t#include <envmap_fragment>\n\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n\n}\n",
            meshlambert_vert: "\n#define LAMBERT\n\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n\tvarying vec3 vIndirectBack;\n#endif\n\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\nvoid main() {\n\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <lights_lambert_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n",
            meshlambert_frag: "\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n\tvarying vec3 vIndirectBack;\n#endif\n\n\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nvoid main() {\n\n\t#include <clipping_planes_fragment>\n\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <emissivemap_fragment>\n\n\t// accumulation\n\n\t#ifdef DOUBLE_SIDED\n\n\t\treflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;\n\n\t#else\n\n\t\treflectedLight.indirectDiffuse += vIndirectFront;\n\n\t#endif\n\n\t#include <lightmap_fragment>\n\n\treflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );\n\n\t#ifdef DOUBLE_SIDED\n\n\t\treflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n\n\t#else\n\n\t\treflectedLight.directDiffuse = vLightFront;\n\n\t#endif\n\n\treflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();\n\n\t// modulation\n\n\t#include <aomap_fragment>\n\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\n\t#include <envmap_fragment>\n\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}\n",
            meshmatcap_vert: "\n#define MATCAP\n\nvarying vec3 vViewPosition;\n\n#include <common>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\nvoid main() {\n\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n\n\tvViewPosition = - mvPosition.xyz;\n\n}\n",
            meshmatcap_frag: "\n#define MATCAP\n\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\n\nvarying vec3 vViewPosition;\n\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <fog_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nvoid main() {\n\n\t#include <clipping_planes_fragment>\n\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\n\tvec3 viewDir = normalize( vViewPosition );\n\tvec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n\tvec3 y = cross( viewDir, x );\n\tvec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5; // 0.495 to remove artifacts caused by undersized matcap disks\n\n\t#ifdef USE_MATCAP\n\n\t\tvec4 matcapColor = texture2D( matcap, uv );\n\t\tmatcapColor = matcapTexelToLinear( matcapColor );\n\n\t#else\n\n\t\tvec4 matcapColor = vec4( 1.0 );\n\n\t#endif\n\n\tvec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n\n}\n",
            meshnormal_vert: "\n#define NORMAL\n\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\n\tvarying vec3 vViewPosition;\n\n#endif\n\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\nvoid main() {\n\n\t#include <uv_vertex>\n\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\n\tvViewPosition = - mvPosition.xyz;\n\n#endif\n\n}\n",
            meshnormal_frag: "\n#define NORMAL\n\nuniform float opacity;\n\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\n\tvarying vec3 vViewPosition;\n\n#endif\n\n#include <packing>\n#include <uv_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nvoid main() {\n\n\t#include <clipping_planes_fragment>\n\t#include <logdepthbuf_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\n\tgl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n\n}\n",
            meshphong_vert: "\n#define PHONG\n\nvarying vec3 vViewPosition;\n\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\nvoid main() {\n\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\n\tvViewPosition = - mvPosition.xyz;\n\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n\n}\n",
            meshphong_frag: "\n#define PHONG\n\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nvoid main() {\n\n\t#include <clipping_planes_fragment>\n\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\n\t// accumulation\n\t#include <lights_phong_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\n\t// modulation\n\t#include <aomap_fragment>\n\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\n\t#include <envmap_fragment>\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n\n}\n",
            meshphysical_vert: "\n#define STANDARD\n\nvarying vec3 vViewPosition;\n\n#ifdef USE_TRANSMISSION\n\n\tvarying vec3 vWorldPosition;\n\n#endif\n\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\nvoid main() {\n\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\n\tvViewPosition = - mvPosition.xyz;\n\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n\n#ifdef USE_TRANSMISSION\n\n\tvWorldPosition = worldPosition.xyz;\n\n#endif\n}\n",
            meshphysical_frag: "\n#define STANDARD\n\n#ifdef PHYSICAL\n\t#define IOR\n\t#define SPECULAR\n#endif\n\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n\n#ifdef IOR\n\tuniform float ior;\n#endif\n\n#ifdef SPECULAR\n\tuniform float specularIntensity;\n\tuniform vec3 specularColor;\n\n\t#ifdef USE_SPECULARINTENSITYMAP\n\t\tuniform sampler2D specularIntensityMap;\n\t#endif\n\n\t#ifdef USE_SPECULARCOLORMAP\n\t\tuniform sampler2D specularColorMap;\n\t#endif\n#endif\n\n#ifdef USE_CLEARCOAT\n\tuniform float clearcoat;\n\tuniform float clearcoatRoughness;\n#endif\n\n#ifdef USE_SHEEN\n\tuniform vec3 sheenColor;\n\tuniform float sheenRoughness;\n\n\t#ifdef USE_SHEENCOLORMAP\n\t\tuniform sampler2D sheenColorMap;\n\t#endif\n\n\t#ifdef USE_SHEENROUGHNESSMAP\n\t\tuniform sampler2D sheenRoughnessMap;\n\t#endif\n#endif\n\nvarying vec3 vViewPosition;\n\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_physical_pars_fragment>\n#include <transmission_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nvoid main() {\n\n\t#include <clipping_planes_fragment>\n\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <clearcoat_normal_fragment_begin>\n\t#include <clearcoat_normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\n\t// accumulation\n\t#include <lights_physical_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\n\t// modulation\n\t#include <aomap_fragment>\n\n\tvec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;\n\tvec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;\n\n\t#include <transmission_fragment>\n\n\tvec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;\n\n\t#ifdef USE_SHEEN\n\n\t\t// Sheen energy compensation approximation calculation can be found at the end of\n\t\t// https://drive.google.com/file/d/1T0D1VSyR4AllqIJTQAraEIzjlb5h4FKH/view?usp=sharing\n\t\tfloat sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );\n\n\t\toutgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;\n\n\t#endif\n\n\t#ifdef USE_CLEARCOAT\n\n\t\tfloat dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );\n\n\t\tvec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );\n\n\t\toutgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;\n\n\t#endif\n\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n\n}\n",
            meshtoon_vert: "\n#define TOON\n\nvarying vec3 vViewPosition;\n\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\nvoid main() {\n\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\n\tvViewPosition = - mvPosition.xyz;\n\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n\n}\n",
            meshtoon_frag: "\n#define TOON\n\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_toon_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nvoid main() {\n\n\t#include <clipping_planes_fragment>\n\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\n\t// accumulation\n\t#include <lights_toon_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\n\t// modulation\n\t#include <aomap_fragment>\n\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n\n}\n",
            points_vert: "\nuniform float size;\nuniform float scale;\n\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\nvoid main() {\n\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\n\tgl_PointSize = size;\n\n\t#ifdef USE_SIZEATTENUATION\n\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\n\t\tif ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n\n\t#endif\n\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <fog_vertex>\n\n}\n",
            points_frag: "\nuniform vec3 diffuse;\nuniform float opacity;\n\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nvoid main() {\n\n\t#include <clipping_planes_fragment>\n\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\n\toutgoingLight = diffuseColor.rgb;\n\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\n}\n",
            shadow_vert: "\n#include <common>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n\nvoid main() {\n\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n\n}\n",
            shadow_frag: "\nuniform vec3 color;\nuniform float opacity;\n\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n\nvoid main() {\n\n\tgl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\n}\n",
            sprite_vert: "\nuniform float rotation;\nuniform vec2 center;\n\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\nvoid main() {\n\n\t#include <uv_vertex>\n\n\tvec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\n\n\tvec2 scale;\n\tscale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );\n\tscale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );\n\n\t#ifndef USE_SIZEATTENUATION\n\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\n\t\tif ( isPerspective ) scale *= - mvPosition.z;\n\n\t#endif\n\n\tvec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n\n\tvec2 rotatedPosition;\n\trotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n\trotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n\n\tmvPosition.xy += rotatedPosition;\n\n\tgl_Position = projectionMatrix * mvPosition;\n\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n\n}\n",
            sprite_frag: "\nuniform vec3 diffuse;\nuniform float opacity;\n\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nvoid main() {\n\n\t#include <clipping_planes_fragment>\n\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\n\toutgoingLight = diffuseColor.rgb;\n\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\n}\n"
        };
        var C = n(138);
        const P = {
            common: {
                diffuse: {
                    value: new A.I(16777215)
                },
                opacity: {
                    value: 1
                },
                map: {
                    value: null
                },
                uvTransform: {
                    value: new s.V
                },
                uv2Transform: {
                    value: new s.V
                },
                alphaMap: {
                    value: null
                },
                alphaTest: {
                    value: 0
                }
            },
            specularmap: {
                specularMap: {
                    value: null
                }
            },
            envmap: {
                envMap: {
                    value: null
                },
                flipEnvMap: {
                    value: -1
                },
                reflectivity: {
                    value: 1
                },
                ior: {
                    value: 1.5
                },
                refractionRatio: {
                    value: .98
                }
            },
            aomap: {
                aoMap: {
                    value: null
                },
                aoMapIntensity: {
                    value: 1
                }
            },
            lightmap: {
                lightMap: {
                    value: null
                },
                lightMapIntensity: {
                    value: 1
                }
            },
            emissivemap: {
                emissiveMap: {
                    value: null
                }
            },
            bumpmap: {
                bumpMap: {
                    value: null
                },
                bumpScale: {
                    value: 1
                }
            },
            normalmap: {
                normalMap: {
                    value: null
                },
                normalScale: {
                    value: new C.F(1,1)
                }
            },
            displacementmap: {
                displacementMap: {
                    value: null
                },
                displacementScale: {
                    value: 1
                },
                displacementBias: {
                    value: 0
                }
            },
            roughnessmap: {
                roughnessMap: {
                    value: null
                }
            },
            metalnessmap: {
                metalnessMap: {
                    value: null
                }
            },
            gradientmap: {
                gradientMap: {
                    value: null
                }
            },
            fog: {
                fogDensity: {
                    value: 25e-5
                },
                fogNear: {
                    value: 1
                },
                fogFar: {
                    value: 2e3
                },
                fogColor: {
                    value: new A.I(16777215)
                }
            },
            lights: {
                ambientLightColor: {
                    value: []
                },
                lightProbe: {
                    value: []
                },
                directionalLights: {
                    value: [],
                    properties: {
                        direction: {},
                        color: {}
                    }
                },
                directionalLightShadows: {
                    value: [],
                    properties: {
                        shadowBias: {},
                        shadowNormalBias: {},
                        shadowRadius: {},
                        shadowMapSize: {}
                    }
                },
                directionalShadowMap: {
                    value: []
                },
                directionalShadowMatrix: {
                    value: []
                },
                spotLights: {
                    value: [],
                    properties: {
                        color: {},
                        position: {},
                        direction: {},
                        distance: {},
                        coneCos: {},
                        penumbraCos: {},
                        decay: {}
                    }
                },
                spotLightShadows: {
                    value: [],
                    properties: {
                        shadowBias: {},
                        shadowNormalBias: {},
                        shadowRadius: {},
                        shadowMapSize: {}
                    }
                },
                spotShadowMap: {
                    value: []
                },
                spotShadowMatrix: {
                    value: []
                },
                pointLights: {
                    value: [],
                    properties: {
                        color: {},
                        position: {},
                        decay: {},
                        distance: {}
                    }
                },
                pointLightShadows: {
                    value: [],
                    properties: {
                        shadowBias: {},
                        shadowNormalBias: {},
                        shadowRadius: {},
                        shadowMapSize: {},
                        shadowCameraNear: {},
                        shadowCameraFar: {}
                    }
                },
                pointShadowMap: {
                    value: []
                },
                pointShadowMatrix: {
                    value: []
                },
                hemisphereLights: {
                    value: [],
                    properties: {
                        direction: {},
                        skyColor: {},
                        groundColor: {}
                    }
                },
                rectAreaLights: {
                    value: [],
                    properties: {
                        color: {},
                        position: {},
                        width: {},
                        height: {}
                    }
                },
                ltc_1: {
                    value: null
                },
                ltc_2: {
                    value: null
                }
            },
            points: {
                diffuse: {
                    value: new A.I(16777215)
                },
                opacity: {
                    value: 1
                },
                size: {
                    value: 1
                },
                scale: {
                    value: 1
                },
                map: {
                    value: null
                },
                alphaMap: {
                    value: null
                },
                alphaTest: {
                    value: 0
                },
                uvTransform: {
                    value: new s.V
                }
            },
            sprite: {
                diffuse: {
                    value: new A.I(16777215)
                },
                opacity: {
                    value: 1
                },
                center: {
                    value: new C.F(.5,.5)
                },
                rotation: {
                    value: 0
                },
                map: {
                    value: null
                },
                alphaMap: {
                    value: null
                },
                alphaTest: {
                    value: 0
                },
                uvTransform: {
                    value: new s.V
                }
            }
        }
          , D = {
            basic: {
                uniforms: w([P.common, P.specularmap, P.envmap, P.aomap, P.lightmap, P.fog]),
                vertexShader: R.meshbasic_vert,
                fragmentShader: R.meshbasic_frag
            },
            lambert: {
                uniforms: w([P.common, P.specularmap, P.envmap, P.aomap, P.lightmap, P.emissivemap, P.fog, P.lights, {
                    emissive: {
                        value: new A.I(0)
                    }
                }]),
                vertexShader: R.meshlambert_vert,
                fragmentShader: R.meshlambert_frag
            },
            phong: {
                uniforms: w([P.common, P.specularmap, P.envmap, P.aomap, P.lightmap, P.emissivemap, P.bumpmap, P.normalmap, P.displacementmap, P.fog, P.lights, {
                    emissive: {
                        value: new A.I(0)
                    },
                    specular: {
                        value: new A.I(1118481)
                    },
                    shininess: {
                        value: 30
                    }
                }]),
                vertexShader: R.meshphong_vert,
                fragmentShader: R.meshphong_frag
            },
            standard: {
                uniforms: w([P.common, P.envmap, P.aomap, P.lightmap, P.emissivemap, P.bumpmap, P.normalmap, P.displacementmap, P.roughnessmap, P.metalnessmap, P.fog, P.lights, {
                    emissive: {
                        value: new A.I(0)
                    },
                    roughness: {
                        value: 1
                    },
                    metalness: {
                        value: 0
                    },
                    envMapIntensity: {
                        value: 1
                    }
                }]),
                vertexShader: R.meshphysical_vert,
                fragmentShader: R.meshphysical_frag
            },
            toon: {
                uniforms: w([P.common, P.aomap, P.lightmap, P.emissivemap, P.bumpmap, P.normalmap, P.displacementmap, P.gradientmap, P.fog, P.lights, {
                    emissive: {
                        value: new A.I(0)
                    }
                }]),
                vertexShader: R.meshtoon_vert,
                fragmentShader: R.meshtoon_frag
            },
            matcap: {
                uniforms: w([P.common, P.bumpmap, P.normalmap, P.displacementmap, P.fog, {
                    matcap: {
                        value: null
                    }
                }]),
                vertexShader: R.meshmatcap_vert,
                fragmentShader: R.meshmatcap_frag
            },
            points: {
                uniforms: w([P.points, P.fog]),
                vertexShader: R.points_vert,
                fragmentShader: R.points_frag
            },
            dashed: {
                uniforms: w([P.common, P.fog, {
                    scale: {
                        value: 1
                    },
                    dashSize: {
                        value: 1
                    },
                    totalSize: {
                        value: 2
                    }
                }]),
                vertexShader: R.linedashed_vert,
                fragmentShader: R.linedashed_frag
            },
            depth: {
                uniforms: w([P.common, P.displacementmap]),
                vertexShader: R.depth_vert,
                fragmentShader: R.depth_frag
            },
            normal: {
                uniforms: w([P.common, P.bumpmap, P.normalmap, P.displacementmap, {
                    opacity: {
                        value: 1
                    }
                }]),
                vertexShader: R.meshnormal_vert,
                fragmentShader: R.meshnormal_frag
            },
            sprite: {
                uniforms: w([P.sprite, P.fog]),
                vertexShader: R.sprite_vert,
                fragmentShader: R.sprite_frag
            },
            background: {
                uniforms: {
                    uvTransform: {
                        value: new s.V
                    },
                    t2D: {
                        value: null
                    }
                },
                vertexShader: R.background_vert,
                fragmentShader: R.background_frag
            },
            cube: {
                uniforms: w([P.envmap, {
                    opacity: {
                        value: 1
                    }
                }]),
                vertexShader: R.cube_vert,
                fragmentShader: R.cube_frag
            },
            equirect: {
                uniforms: {
                    tEquirect: {
                        value: null
                    }
                },
                vertexShader: R.equirect_vert,
                fragmentShader: R.equirect_frag
            },
            distanceRGBA: {
                uniforms: w([P.common, P.displacementmap, {
                    referencePosition: {
                        value: new r.P
                    },
                    nearDistance: {
                        value: 1
                    },
                    farDistance: {
                        value: 1e3
                    }
                }]),
                vertexShader: R.distanceRGBA_vert,
                fragmentShader: R.distanceRGBA_frag
            },
            shadow: {
                uniforms: w([P.lights, P.fog, {
                    color: {
                        value: new A.I(0)
                    },
                    opacity: {
                        value: 1
                    }
                }]),
                vertexShader: R.shadow_vert,
                fragmentShader: R.shadow_frag
            }
        };
        function N(t, e, n, r, a) {
            const s = new A.I(0);
            let o, l, c = 0, u = null, h = 0, d = null;
            function p(t, e) {
                n.buffers.color.setClear(t.r, t.g, t.b, e, a)
            }
            return {
                getClearColor: function() {
                    return s
                },
                setClearColor: function(t, e=1) {
                    s.set(t),
                    c = e,
                    p(s, c)
                },
                getClearAlpha: function() {
                    return c
                },
                setClearAlpha: function(t) {
                    c = t,
                    p(s, c)
                },
                render: function(n, a) {
                    let m = !1
                      , f = !0 === a.isScene ? a.background : null;
                    f && f.isTexture && (f = e.get(f));
                    const g = t.xr
                      , _ = g.getSession && g.getSession();
                    _ && "additive" === _.environmentBlendMode && (f = null),
                    null === f ? p(s, c) : f && f.isColor && (p(f, 1),
                    m = !0),
                    (t.autoClear || m) && t.clear(t.autoClearColor, t.autoClearDepth, t.autoClearStencil),
                    f && (f.isCubeTexture || f.mapping === i.g8_) ? (void 0 === l && (l = new L.K(new v.D(1,1,1),new E({
                        name: "BackgroundCubeMaterial",
                        uniforms: S(D.cube.uniforms),
                        vertexShader: D.cube.vertexShader,
                        fragmentShader: D.cube.fragmentShader,
                        side: i._Li,
                        depthTest: !1,
                        depthWrite: !1,
                        fog: !1
                    })),
                    l.geometry.deleteAttribute("normal"),
                    l.geometry.deleteAttribute("uv"),
                    l.onBeforeRender = function(t, e, n) {
                        this.matrixWorld.copyPosition(n.matrixWorld)
                    }
                    ,
                    Object.defineProperty(l.material, "envMap", {
                        get: function() {
                            return this.uniforms.envMap.value
                        }
                    }),
                    r.update(l)),
                    l.material.uniforms.envMap.value = f,
                    l.material.uniforms.flipEnvMap.value = f.isCubeTexture && !1 === f.isRenderTargetTexture ? -1 : 1,
                    u === f && h === f.version && d === t.toneMapping || (l.material.needsUpdate = !0,
                    u = f,
                    h = f.version,
                    d = t.toneMapping),
                    n.unshift(l, l.geometry, l.material, 0, 0, null)) : f && f.isTexture && (void 0 === o && (o = new L.K(new b(2,2),new E({
                        name: "BackgroundMaterial",
                        uniforms: S(D.background.uniforms),
                        vertexShader: D.background.vertexShader,
                        fragmentShader: D.background.fragmentShader,
                        side: i.Wl3,
                        depthTest: !1,
                        depthWrite: !1,
                        fog: !1
                    })),
                    o.geometry.deleteAttribute("normal"),
                    Object.defineProperty(o.material, "map", {
                        get: function() {
                            return this.uniforms.t2D.value
                        }
                    }),
                    r.update(o)),
                    o.material.uniforms.t2D.value = f,
                    !0 === f.matrixAutoUpdate && f.updateMatrix(),
                    o.material.uniforms.uvTransform.value.copy(f.matrix),
                    u === f && h === f.version && d === t.toneMapping || (o.material.needsUpdate = !0,
                    u = f,
                    h = f.version,
                    d = t.toneMapping),
                    n.unshift(o, o.geometry, o.material, 0, 0, null))
                }
            }
        }
        function I(t, e, n, i) {
            const r = t.getParameter(t.MAX_VERTEX_ATTRIBS)
              , a = i.isWebGL2 ? null : e.get("OES_vertex_array_object")
              , s = i.isWebGL2 || null !== a
              , o = {}
              , l = d(null);
            let c = l;
            function u(e) {
                return i.isWebGL2 ? t.bindVertexArray(e) : a.bindVertexArrayOES(e)
            }
            function h(e) {
                return i.isWebGL2 ? t.deleteVertexArray(e) : a.deleteVertexArrayOES(e)
            }
            function d(t) {
                const e = []
                  , n = []
                  , i = [];
                for (let t = 0; t < r; t++)
                    e[t] = 0,
                    n[t] = 0,
                    i[t] = 0;
                return {
                    geometry: null,
                    program: null,
                    wireframe: !1,
                    newAttributes: e,
                    enabledAttributes: n,
                    attributeDivisors: i,
                    object: t,
                    attributes: {},
                    index: null
                }
            }
            function p() {
                const t = c.newAttributes;
                for (let e = 0, n = t.length; e < n; e++)
                    t[e] = 0
            }
            function m(t) {
                f(t, 0)
            }
            function f(n, r) {
                const a = c.newAttributes
                  , s = c.enabledAttributes
                  , o = c.attributeDivisors;
                a[n] = 1,
                0 === s[n] && (t.enableVertexAttribArray(n),
                s[n] = 1),
                o[n] !== r && ((i.isWebGL2 ? t : e.get("ANGLE_instanced_arrays"))[i.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](n, r),
                o[n] = r)
            }
            function g() {
                const e = c.newAttributes
                  , n = c.enabledAttributes;
                for (let i = 0, r = n.length; i < r; i++)
                    n[i] !== e[i] && (t.disableVertexAttribArray(i),
                    n[i] = 0)
            }
            function _(e, n, r, a, s, o) {
                !0 !== i.isWebGL2 || r !== t.INT && r !== t.UNSIGNED_INT ? t.vertexAttribPointer(e, n, r, a, s, o) : t.vertexAttribIPointer(e, n, r, s, o)
            }
            function v() {
                x(),
                c !== l && (c = l,
                u(c.object))
            }
            function x() {
                l.geometry = null,
                l.program = null,
                l.wireframe = !1
            }
            return {
                setup: function(r, l, h, v, x) {
                    let y = !1;
                    if (s) {
                        const e = function(e, n, r) {
                            const s = !0 === r.wireframe;
                            let l = o[e.id];
                            void 0 === l && (l = {},
                            o[e.id] = l);
                            let c = l[n.id];
                            void 0 === c && (c = {},
                            l[n.id] = c);
                            let u = c[s];
                            return void 0 === u && (u = d(i.isWebGL2 ? t.createVertexArray() : a.createVertexArrayOES()),
                            c[s] = u),
                            u
                        }(v, h, l);
                        c !== e && (c = e,
                        u(c.object)),
                        y = function(t, e) {
                            const n = c.attributes
                              , i = t.attributes;
                            let r = 0;
                            for (const t in i) {
                                const e = n[t]
                                  , a = i[t];
                                if (void 0 === e)
                                    return !0;
                                if (e.attribute !== a)
                                    return !0;
                                if (e.data !== a.data)
                                    return !0;
                                r++
                            }
                            return c.attributesNum !== r || c.index !== e
                        }(v, x),
                        y && function(t, e) {
                            const n = {}
                              , i = t.attributes;
                            let r = 0;
                            for (const t in i) {
                                const e = i[t]
                                  , a = {};
                                a.attribute = e,
                                e.data && (a.data = e.data),
                                n[t] = a,
                                r++
                            }
                            c.attributes = n,
                            c.attributesNum = r,
                            c.index = e
                        }(v, x)
                    } else {
                        const t = !0 === l.wireframe;
                        c.geometry === v.id && c.program === h.id && c.wireframe === t || (c.geometry = v.id,
                        c.program = h.id,
                        c.wireframe = t,
                        y = !0)
                    }
                    !0 === r.isInstancedMesh && (y = !0),
                    null !== x && n.update(x, t.ELEMENT_ARRAY_BUFFER),
                    y && (function(r, a, s, o) {
                        if (!1 === i.isWebGL2 && (r.isInstancedMesh || o.isInstancedBufferGeometry) && null === e.get("ANGLE_instanced_arrays"))
                            return;
                        p();
                        const l = o.attributes
                          , c = s.getAttributes()
                          , u = a.defaultAttributeValues;
                        for (const e in c) {
                            const i = c[e];
                            if (i.location >= 0) {
                                let a = l[e];
                                if (void 0 === a && ("instanceMatrix" === e && r.instanceMatrix && (a = r.instanceMatrix),
                                "instanceColor" === e && r.instanceColor && (a = r.instanceColor)),
                                void 0 !== a) {
                                    const e = a.normalized
                                      , s = a.itemSize
                                      , l = n.get(a);
                                    if (void 0 === l)
                                        continue;
                                    const c = l.buffer
                                      , u = l.type
                                      , h = l.bytesPerElement;
                                    if (a.isInterleavedBufferAttribute) {
                                        const n = a.data
                                          , l = n.stride
                                          , d = a.offset;
                                        if (n && n.isInstancedInterleavedBuffer) {
                                            for (let t = 0; t < i.locationSize; t++)
                                                f(i.location + t, n.meshPerAttribute);
                                            !0 !== r.isInstancedMesh && void 0 === o._maxInstanceCount && (o._maxInstanceCount = n.meshPerAttribute * n.count)
                                        } else
                                            for (let t = 0; t < i.locationSize; t++)
                                                m(i.location + t);
                                        t.bindBuffer(t.ARRAY_BUFFER, c);
                                        for (let t = 0; t < i.locationSize; t++)
                                            _(i.location + t, s / i.locationSize, u, e, l * h, (d + s / i.locationSize * t) * h)
                                    } else {
                                        if (a.isInstancedBufferAttribute) {
                                            for (let t = 0; t < i.locationSize; t++)
                                                f(i.location + t, a.meshPerAttribute);
                                            !0 !== r.isInstancedMesh && void 0 === o._maxInstanceCount && (o._maxInstanceCount = a.meshPerAttribute * a.count)
                                        } else
                                            for (let t = 0; t < i.locationSize; t++)
                                                m(i.location + t);
                                        t.bindBuffer(t.ARRAY_BUFFER, c);
                                        for (let t = 0; t < i.locationSize; t++)
                                            _(i.location + t, s / i.locationSize, u, e, s * h, s / i.locationSize * t * h)
                                    }
                                } else if (void 0 !== u) {
                                    const n = u[e];
                                    if (void 0 !== n)
                                        switch (n.length) {
                                        case 2:
                                            t.vertexAttrib2fv(i.location, n);
                                            break;
                                        case 3:
                                            t.vertexAttrib3fv(i.location, n);
                                            break;
                                        case 4:
                                            t.vertexAttrib4fv(i.location, n);
                                            break;
                                        default:
                                            t.vertexAttrib1fv(i.location, n)
                                        }
                                }
                            }
                        }
                        g()
                    }(r, l, h, v),
                    null !== x && t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, n.get(x).buffer))
                },
                reset: v,
                resetDefaultState: x,
                dispose: function() {
                    v();
                    for (const t in o) {
                        const e = o[t];
                        for (const t in e) {
                            const n = e[t];
                            for (const t in n)
                                h(n[t].object),
                                delete n[t];
                            delete e[t]
                        }
                        delete o[t]
                    }
                },
                releaseStatesOfGeometry: function(t) {
                    if (void 0 === o[t.id])
                        return;
                    const e = o[t.id];
                    for (const t in e) {
                        const n = e[t];
                        for (const t in n)
                            h(n[t].object),
                            delete n[t];
                        delete e[t]
                    }
                    delete o[t.id]
                },
                releaseStatesOfProgram: function(t) {
                    for (const e in o) {
                        const n = o[e];
                        if (void 0 === n[t.id])
                            continue;
                        const i = n[t.id];
                        for (const t in i)
                            h(i[t].object),
                            delete i[t];
                        delete n[t.id]
                    }
                },
                initAttributes: p,
                enableAttribute: m,
                disableUnusedAttributes: g
            }
        }
        function U(t, e, n, i) {
            const r = i.isWebGL2;
            let a;
            this.setMode = function(t) {
                a = t
            }
            ,
            this.render = function(e, i) {
                t.drawArrays(a, e, i),
                n.update(i, a, 1)
            }
            ,
            this.renderInstances = function(i, s, o) {
                if (0 === o)
                    return;
                let l, c;
                if (r)
                    l = t,
                    c = "drawArraysInstanced";
                else if (l = e.get("ANGLE_instanced_arrays"),
                c = "drawArraysInstancedANGLE",
                null === l)
                    return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
                l[c](a, i, s, o),
                n.update(s, a, o)
            }
        }
        function F(t, e, n) {
            let i;
            function r(e) {
                if ("highp" === e) {
                    if (t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.HIGH_FLOAT).precision > 0 && t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.HIGH_FLOAT).precision > 0)
                        return "highp";
                    e = "mediump"
                }
                return "mediump" === e && t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.MEDIUM_FLOAT).precision > 0 && t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp"
            }
            const a = "undefined" != typeof WebGL2RenderingContext && t instanceof WebGL2RenderingContext || "undefined" != typeof WebGL2ComputeRenderingContext && t instanceof WebGL2ComputeRenderingContext;
            let s = void 0 !== n.precision ? n.precision : "highp";
            const o = r(s);
            o !== s && (console.warn("THREE.WebGLRenderer:", s, "not supported, using", o, "instead."),
            s = o);
            const l = a || e.has("WEBGL_draw_buffers")
              , c = !0 === n.logarithmicDepthBuffer
              , u = t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS)
              , h = t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS)
              , d = t.getParameter(t.MAX_TEXTURE_SIZE)
              , p = t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE)
              , m = t.getParameter(t.MAX_VERTEX_ATTRIBS)
              , f = t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS)
              , g = t.getParameter(t.MAX_VARYING_VECTORS)
              , _ = t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS)
              , v = h > 0
              , x = a || e.has("OES_texture_float");
            return {
                isWebGL2: a,
                drawBuffers: l,
                getMaxAnisotropy: function() {
                    if (void 0 !== i)
                        return i;
                    if (!0 === e.has("EXT_texture_filter_anisotropic")) {
                        const n = e.get("EXT_texture_filter_anisotropic");
                        i = t.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)
                    } else
                        i = 0;
                    return i
                },
                getMaxPrecision: r,
                precision: s,
                logarithmicDepthBuffer: c,
                maxTextures: u,
                maxVertexTextures: h,
                maxTextureSize: d,
                maxCubemapSize: p,
                maxAttributes: m,
                maxVertexUniforms: f,
                maxVaryings: g,
                maxFragmentUniforms: _,
                vertexTextures: v,
                floatFragmentTextures: x,
                floatVertexTextures: v && x,
                maxSamples: a ? t.getParameter(t.MAX_SAMPLES) : 0
            }
        }
        function O(t) {
            const e = this;
            let n = null
              , i = 0
              , r = !1
              , a = !1;
            const o = new u
              , l = new s.V
              , c = {
                value: null,
                needsUpdate: !1
            };
            function h() {
                c.value !== n && (c.value = n,
                c.needsUpdate = i > 0),
                e.numPlanes = i,
                e.numIntersection = 0
            }
            function d(t, n, i, r) {
                const a = null !== t ? t.length : 0;
                let s = null;
                if (0 !== a) {
                    if (s = c.value,
                    !0 !== r || null === s) {
                        const e = i + 4 * a
                          , r = n.matrixWorldInverse;
                        l.getNormalMatrix(r),
                        (null === s || s.length < e) && (s = new Float32Array(e));
                        for (let e = 0, n = i; e !== a; ++e,
                        n += 4)
                            o.copy(t[e]).applyMatrix4(r, l),
                            o.normal.toArray(s, n),
                            s[n + 3] = o.constant
                    }
                    c.value = s,
                    c.needsUpdate = !0
                }
                return e.numPlanes = a,
                e.numIntersection = 0,
                s
            }
            this.uniform = c,
            this.numPlanes = 0,
            this.numIntersection = 0,
            this.init = function(t, e, a) {
                const s = 0 !== t.length || e || 0 !== i || r;
                return r = e,
                n = d(t, a, 0),
                i = t.length,
                s
            }
            ,
            this.beginShadows = function() {
                a = !0,
                d(null)
            }
            ,
            this.endShadows = function() {
                a = !1,
                h()
            }
            ,
            this.setState = function(e, s, o) {
                const l = e.clippingPlanes
                  , u = e.clipIntersection
                  , p = e.clipShadows
                  , m = t.get(e);
                if (!r || null === l || 0 === l.length || a && !p)
                    a ? d(null) : h();
                else {
                    const t = a ? 0 : i
                      , e = 4 * t;
                    let r = m.clippingState || null;
                    c.value = r,
                    r = d(l, s, e, o);
                    for (let t = 0; t !== e; ++t)
                        r[t] = n[t];
                    m.clippingState = r,
                    this.numIntersection = u ? this.numPlanes : 0,
                    this.numPlanes += t
                }
            }
        }
        D.physical = {
            uniforms: w([D.standard.uniforms, {
                clearcoat: {
                    value: 0
                },
                clearcoatMap: {
                    value: null
                },
                clearcoatRoughness: {
                    value: 0
                },
                clearcoatRoughnessMap: {
                    value: null
                },
                clearcoatNormalScale: {
                    value: new C.F(1,1)
                },
                clearcoatNormalMap: {
                    value: null
                },
                sheen: {
                    value: 0
                },
                sheenColor: {
                    value: new A.I(0)
                },
                sheenColorMap: {
                    value: null
                },
                sheenRoughness: {
                    value: 0
                },
                sheenRoughnessMap: {
                    value: null
                },
                transmission: {
                    value: 0
                },
                transmissionMap: {
                    value: null
                },
                transmissionSamplerSize: {
                    value: new C.F
                },
                transmissionSamplerMap: {
                    value: null
                },
                thickness: {
                    value: 0
                },
                thicknessMap: {
                    value: null
                },
                attenuationDistance: {
                    value: 0
                },
                attenuationColor: {
                    value: new A.I(0)
                },
                specularIntensity: {
                    value: 0
                },
                specularIntensityMap: {
                    value: null
                },
                specularColor: {
                    value: new A.I(1,1,1)
                },
                specularColorMap: {
                    value: null
                }
            }]),
            vertexShader: R.meshphysical_vert,
            fragmentShader: R.meshphysical_frag
        };
        var z = n(406)
          , B = n(977);
        class G extends z.p {
            constructor(t, e, n={}) {
                super(),
                this.width = t,
                this.height = e,
                this.depth = 1,
                this.scissor = new f.L(0,0,t,e),
                this.scissorTest = !1,
                this.viewport = new f.L(0,0,t,e),
                this.texture = new B.x(void 0,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),
                this.texture.isRenderTargetTexture = !0,
                this.texture.image = {
                    width: t,
                    height: e,
                    depth: 1
                },
                this.texture.generateMipmaps = void 0 !== n.generateMipmaps && n.generateMipmaps,
                this.texture.internalFormat = void 0 !== n.internalFormat ? n.internalFormat : null,
                this.texture.minFilter = void 0 !== n.minFilter ? n.minFilter : i.wem,
                this.depthBuffer = void 0 === n.depthBuffer || n.depthBuffer,
                this.stencilBuffer = void 0 !== n.stencilBuffer && n.stencilBuffer,
                this.depthTexture = void 0 !== n.depthTexture ? n.depthTexture : null
            }
            setTexture(t) {
                t.image = {
                    width: this.width,
                    height: this.height,
                    depth: this.depth
                },
                this.texture = t
            }
            setSize(t, e, n=1) {
                this.width === t && this.height === e && this.depth === n || (this.width = t,
                this.height = e,
                this.depth = n,
                this.texture.image.width = t,
                this.texture.image.height = e,
                this.texture.image.depth = n,
                this.dispose()),
                this.viewport.set(0, 0, t, e),
                this.scissor.set(0, 0, t, e)
            }
            clone() {
                return (new this.constructor).copy(this)
            }
            copy(t) {
                return this.width = t.width,
                this.height = t.height,
                this.depth = t.depth,
                this.viewport.copy(t.viewport),
                this.texture = t.texture.clone(),
                this.texture.image = {
                    ...this.texture.image
                },
                this.depthBuffer = t.depthBuffer,
                this.stencilBuffer = t.stencilBuffer,
                this.depthTexture = t.depthTexture,
                this
            }
            dispose() {
                this.dispatchEvent({
                    type: "dispose"
                })
            }
        }
        G.prototype.isWebGLRenderTarget = !0;
        var H = n(353)
          , k = n(929)
          , V = n(43);
        class W extends k.V {
            constructor(t=50, e=1, n=.1, i=2e3) {
                super(),
                this.type = "PerspectiveCamera",
                this.fov = t,
                this.zoom = 1,
                this.near = n,
                this.far = i,
                this.focus = 10,
                this.aspect = e,
                this.view = null,
                this.filmGauge = 35,
                this.filmOffset = 0,
                this.updateProjectionMatrix()
            }
            copy(t, e) {
                return super.copy(t, e),
                this.fov = t.fov,
                this.zoom = t.zoom,
                this.near = t.near,
                this.far = t.far,
                this.focus = t.focus,
                this.aspect = t.aspect,
                this.view = null === t.view ? null : Object.assign({}, t.view),
                this.filmGauge = t.filmGauge,
                this.filmOffset = t.filmOffset,
                this
            }
            setFocalLength(t) {
                const e = .5 * this.getFilmHeight() / t;
                this.fov = 2 * V.I3 * Math.atan(e),
                this.updateProjectionMatrix()
            }
            getFocalLength() {
                const t = Math.tan(.5 * V.qW * this.fov);
                return .5 * this.getFilmHeight() / t
            }
            getEffectiveFOV() {
                return 2 * V.I3 * Math.atan(Math.tan(.5 * V.qW * this.fov) / this.zoom)
            }
            getFilmWidth() {
                return this.filmGauge * Math.min(this.aspect, 1)
            }
            getFilmHeight() {
                return this.filmGauge / Math.max(this.aspect, 1)
            }
            setViewOffset(t, e, n, i, r, a) {
                this.aspect = t / e,
                null === this.view && (this.view = {
                    enabled: !0,
                    fullWidth: 1,
                    fullHeight: 1,
                    offsetX: 0,
                    offsetY: 0,
                    width: 1,
                    height: 1
                }),
                this.view.enabled = !0,
                this.view.fullWidth = t,
                this.view.fullHeight = e,
                this.view.offsetX = n,
                this.view.offsetY = i,
                this.view.width = r,
                this.view.height = a,
                this.updateProjectionMatrix()
            }
            clearViewOffset() {
                null !== this.view && (this.view.enabled = !1),
                this.updateProjectionMatrix()
            }
            updateProjectionMatrix() {
                const t = this.near;
                let e = t * Math.tan(.5 * V.qW * this.fov) / this.zoom
                  , n = 2 * e
                  , i = this.aspect * n
                  , r = -.5 * i;
                const a = this.view;
                if (null !== this.view && this.view.enabled) {
                    const t = a.fullWidth
                      , s = a.fullHeight;
                    r += a.offsetX * i / t,
                    e -= a.offsetY * n / s,
                    i *= a.width / t,
                    n *= a.height / s
                }
                const s = this.filmOffset;
                0 !== s && (r += t * s / this.getFilmWidth()),
                this.projectionMatrix.makePerspective(r, r + i, e, e - n, t, this.far),
                this.projectionMatrixInverse.copy(this.projectionMatrix).invert()
            }
            toJSON(t) {
                const e = super.toJSON(t);
                return e.object.fov = this.fov,
                e.object.zoom = this.zoom,
                e.object.near = this.near,
                e.object.far = this.far,
                e.object.focus = this.focus,
                e.object.aspect = this.aspect,
                null !== this.view && (e.object.view = Object.assign({}, this.view)),
                e.object.filmGauge = this.filmGauge,
                e.object.filmOffset = this.filmOffset,
                e
            }
        }
        W.prototype.isPerspectiveCamera = !0;
        const X = 90;
        class q extends H.T {
            constructor(t, e, n) {
                if (super(),
                this.type = "CubeCamera",
                !0 !== n.isWebGLCubeRenderTarget)
                    return void console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");
                this.renderTarget = n;
                const i = new W(X,1,t,e);
                i.layers = this.layers,
                i.up.set(0, -1, 0),
                i.lookAt(new r.P(1,0,0)),
                this.add(i);
                const a = new W(X,1,t,e);
                a.layers = this.layers,
                a.up.set(0, -1, 0),
                a.lookAt(new r.P(-1,0,0)),
                this.add(a);
                const s = new W(X,1,t,e);
                s.layers = this.layers,
                s.up.set(0, 0, 1),
                s.lookAt(new r.P(0,1,0)),
                this.add(s);
                const o = new W(X,1,t,e);
                o.layers = this.layers,
                o.up.set(0, 0, -1),
                o.lookAt(new r.P(0,-1,0)),
                this.add(o);
                const l = new W(X,1,t,e);
                l.layers = this.layers,
                l.up.set(0, -1, 0),
                l.lookAt(new r.P(0,0,1)),
                this.add(l);
                const c = new W(X,1,t,e);
                c.layers = this.layers,
                c.up.set(0, -1, 0),
                c.lookAt(new r.P(0,0,-1)),
                this.add(c)
            }
            update(t, e) {
                null === this.parent && this.updateMatrixWorld();
                const n = this.renderTarget
                  , [i,r,a,s,o,l] = this.children
                  , c = t.xr.enabled
                  , u = t.getRenderTarget();
                t.xr.enabled = !1;
                const h = n.texture.generateMipmaps;
                n.texture.generateMipmaps = !1,
                t.setRenderTarget(n, 0),
                t.render(e, i),
                t.setRenderTarget(n, 1),
                t.render(e, r),
                t.setRenderTarget(n, 2),
                t.render(e, a),
                t.setRenderTarget(n, 3),
                t.render(e, s),
                t.setRenderTarget(n, 4),
                t.render(e, o),
                n.texture.generateMipmaps = h,
                t.setRenderTarget(n, 5),
                t.render(e, l),
                t.setRenderTarget(u),
                t.xr.enabled = c
            }
        }
        class j extends B.x {
            constructor(t, e, n, r, a, s, o, l, c, u) {
                super(t = void 0 !== t ? t : [], e = void 0 !== e ? e : i.fY$, n, r, a, s, o, l, c, u),
                this.flipY = !1
            }
            get images() {
                return this.image
            }
            set images(t) {
                this.image = t
            }
        }
        j.prototype.isCubeTexture = !0;
        class Y extends G {
            constructor(t, e, n) {
                Number.isInteger(e) && (console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"),
                e = n),
                super(t, t, e),
                e = e || {},
                this.texture = new j(void 0,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),
                this.texture.isRenderTargetTexture = !0,
                this.texture.generateMipmaps = void 0 !== e.generateMipmaps && e.generateMipmaps,
                this.texture.minFilter = void 0 !== e.minFilter ? e.minFilter : i.wem,
                this.texture._needsFlipEnvMap = !1
            }
            fromEquirectangularTexture(t, e) {
                this.texture.type = e.type,
                this.texture.format = i.wk1,
                this.texture.encoding = e.encoding,
                this.texture.generateMipmaps = e.generateMipmaps,
                this.texture.minFilter = e.minFilter,
                this.texture.magFilter = e.magFilter;
                const n = {
                    tEquirect: {
                        value: null
                    }
                }
                  , r = "\n\n\t\t\t\tvarying vec3 vWorldDirection;\n\n\t\t\t\tvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\n\t\t\t\t\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n\n\t\t\t\t}\n\n\t\t\t\tvoid main() {\n\n\t\t\t\t\tvWorldDirection = transformDirection( position, modelMatrix );\n\n\t\t\t\t\t#include <begin_vertex>\n\t\t\t\t\t#include <project_vertex>\n\n\t\t\t\t}\n\t\t\t"
                  , a = "\n\n\t\t\t\tuniform sampler2D tEquirect;\n\n\t\t\t\tvarying vec3 vWorldDirection;\n\n\t\t\t\t#include <common>\n\n\t\t\t\tvoid main() {\n\n\t\t\t\t\tvec3 direction = normalize( vWorldDirection );\n\n\t\t\t\t\tvec2 sampleUV = equirectUv( direction );\n\n\t\t\t\t\tgl_FragColor = texture2D( tEquirect, sampleUV );\n\n\t\t\t\t}\n\t\t\t"
                  , s = new v.D(5,5,5)
                  , o = new E({
                    name: "CubemapFromEquirect",
                    uniforms: S(n),
                    vertexShader: r,
                    fragmentShader: a,
                    side: i._Li,
                    blending: i.jFi
                });
                o.uniforms.tEquirect.value = e;
                const l = new L.K(s,o)
                  , c = e.minFilter;
                return e.minFilter === i.D1R && (e.minFilter = i.wem),
                new q(1,10,this).update(t, l),
                e.minFilter = c,
                l.geometry.dispose(),
                l.material.dispose(),
                this
            }
            clear(t, e, n, i) {
                const r = t.getRenderTarget();
                for (let r = 0; r < 6; r++)
                    t.setRenderTarget(this, r),
                    t.clear(e, n, i);
                t.setRenderTarget(r)
            }
        }
        function Z(t) {
            let e = new WeakMap;
            function n(t, e) {
                return e === i.dSO ? t.mapping = i.fY$ : e === i.Bf4 && (t.mapping = i.vxC),
                t
            }
            function r(t) {
                const n = t.target;
                n.removeEventListener("dispose", r);
                const i = e.get(n);
                void 0 !== i && (e.delete(n),
                i.dispose())
            }
            return {
                get: function(a) {
                    if (a && a.isTexture && !1 === a.isRenderTargetTexture) {
                        const s = a.mapping;
                        if (s === i.dSO || s === i.Bf4) {
                            if (e.has(a))
                                return n(e.get(a).texture, a.mapping);
                            {
                                const i = a.image;
                                if (i && i.height > 0) {
                                    const s = t.getRenderTarget()
                                      , o = new Y(i.height / 2);
                                    return o.fromEquirectangularTexture(t, a),
                                    e.set(a, o),
                                    t.setRenderTarget(s),
                                    a.addEventListener("dispose", r),
                                    n(o.texture, a.mapping)
                                }
                                return null
                            }
                        }
                    }
                    return a
                },
                dispose: function() {
                    e = new WeakMap
                }
            }
        }
        Y.prototype.isWebGLCubeRenderTarget = !0;
        var K = n(131);
        class J extends E {
            constructor(t) {
                super(t),
                this.type = "RawShaderMaterial"
            }
        }
        J.prototype.isRawShaderMaterial = !0;
        var Q = n(173);
        const $ = Math.pow(2, 8)
          , tt = [.125, .215, .35, .446, .526, .582]
          , et = 5 + tt.length
          , nt = {
            [i.rnI]: 0,
            [i.knz]: 1
        }
          , it = new K.i
          , {_lodPlanes: rt, _sizeLods: at, _sigmas: st} = pt()
          , ot = new A.I;
        let lt = null;
        const ct = (1 + Math.sqrt(5)) / 2
          , ut = 1 / ct
          , ht = [new r.P(1,1,1), new r.P(-1,1,1), new r.P(1,1,-1), new r.P(-1,1,-1), new r.P(0,ct,ut), new r.P(0,ct,-ut), new r.P(ut,0,ct), new r.P(-ut,0,ct), new r.P(ct,ut,0), new r.P(-ct,ut,0)];
        class dt {
            constructor(t) {
                this._renderer = t,
                this._pingPongRenderTarget = null,
                this._blurMaterial = function(t) {
                    const e = new Float32Array(20)
                      , n = new r.P(0,1,0);
                    return new J({
                        name: "SphericalGaussianBlur",
                        defines: {
                            n: 20
                        },
                        uniforms: {
                            envMap: {
                                value: null
                            },
                            samples: {
                                value: 1
                            },
                            weights: {
                                value: e
                            },
                            latitudinal: {
                                value: !1
                            },
                            dTheta: {
                                value: 0
                            },
                            mipInt: {
                                value: 0
                            },
                            poleAxis: {
                                value: n
                            }
                        },
                        vertexShader: "\n\n\t\tprecision mediump float;\n\t\tprecision mediump int;\n\n\t\tattribute vec3 position;\n\t\tattribute vec2 uv;\n\t\tattribute float faceIndex;\n\n\t\tvarying vec3 vOutputDirection;\n\n\t\t// RH coordinate system; PMREM face-indexing convention\n\t\tvec3 getDirection( vec2 uv, float face ) {\n\n\t\t\tuv = 2.0 * uv - 1.0;\n\n\t\t\tvec3 direction = vec3( uv, 1.0 );\n\n\t\t\tif ( face == 0.0 ) {\n\n\t\t\t\tdirection = direction.zyx; // ( 1, v, u ) pos x\n\n\t\t\t} else if ( face == 1.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xz *= -1.0; // ( -u, 1, -v ) pos y\n\n\t\t\t} else if ( face == 2.0 ) {\n\n\t\t\t\tdirection.x *= -1.0; // ( -u, v, 1 ) pos z\n\n\t\t\t} else if ( face == 3.0 ) {\n\n\t\t\t\tdirection = direction.zyx;\n\t\t\t\tdirection.xz *= -1.0; // ( -1, v, -u ) neg x\n\n\t\t\t} else if ( face == 4.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xy *= -1.0; // ( -u, -1, v ) neg y\n\n\t\t\t} else if ( face == 5.0 ) {\n\n\t\t\t\tdirection.z *= -1.0; // ( u, v, -1 ) neg z\n\n\t\t\t}\n\n\t\t\treturn direction;\n\n\t\t}\n\n\t\tvoid main() {\n\n\t\t\tvOutputDirection = getDirection( uv, faceIndex );\n\t\t\tgl_Position = vec4( position, 1.0 );\n\n\t\t}\n\t",
                        fragmentShader: "\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform sampler2D envMap;\n\t\t\tuniform int samples;\n\t\t\tuniform float weights[ n ];\n\t\t\tuniform bool latitudinal;\n\t\t\tuniform float dTheta;\n\t\t\tuniform float mipInt;\n\t\t\tuniform vec3 poleAxis;\n\n\t\t\t\n\n\t\tuniform int inputEncoding;\n\n\t\t#include <encodings_pars_fragment>\n\n\t\tvec4 inputTexelToLinear( vec4 value ) {\n\n\t\t\tif ( inputEncoding == 0 ) {\n\n\t\t\t\treturn value;\n\n\t\t\t} else {\n\n\t\t\t\treturn sRGBToLinear( value );\n\n\t\t\t}\n\n\t\t}\n\n\t\tvec4 envMapTexelToLinear( vec4 color ) {\n\n\t\t\treturn inputTexelToLinear( color );\n\n\t\t}\n\t\n\n\t\t\t#define ENVMAP_TYPE_CUBE_UV\n\t\t\t#include <cube_uv_reflection_fragment>\n\n\t\t\tvec3 getSample( float theta, vec3 axis ) {\n\n\t\t\t\tfloat cosTheta = cos( theta );\n\t\t\t\t// Rodrigues' axis-angle rotation\n\t\t\t\tvec3 sampleDirection = vOutputDirection * cosTheta\n\t\t\t\t\t+ cross( axis, vOutputDirection ) * sin( theta )\n\t\t\t\t\t+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );\n\n\t\t\t\treturn bilinearCubeUV( envMap, sampleDirection, mipInt );\n\n\t\t\t}\n\n\t\t\tvoid main() {\n\n\t\t\t\tvec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );\n\n\t\t\t\tif ( all( equal( axis, vec3( 0.0 ) ) ) ) {\n\n\t\t\t\t\taxis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );\n\n\t\t\t\t}\n\n\t\t\t\taxis = normalize( axis );\n\n\t\t\t\tgl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n\t\t\t\tgl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );\n\n\t\t\t\tfor ( int i = 1; i < n; i++ ) {\n\n\t\t\t\t\tif ( i >= samples ) {\n\n\t\t\t\t\t\tbreak;\n\n\t\t\t\t\t}\n\n\t\t\t\t\tfloat theta = dTheta * float( i );\n\t\t\t\t\tgl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );\n\t\t\t\t\tgl_FragColor.rgb += weights[ i ] * getSample( theta, axis );\n\n\t\t\t\t}\n\n\t\t\t}\n\t\t",
                        blending: i.jFi,
                        depthTest: !1,
                        depthWrite: !1
                    })
                }(),
                this._equirectShader = null,
                this._cubemapShader = null,
                this._compileMaterial(this._blurMaterial)
            }
            fromScene(t, e=0, n=.1, i=100) {
                lt = this._renderer.getRenderTarget();
                const r = this._allocateTargets();
                return this._sceneToCubeUV(t, n, i, r),
                e > 0 && this._blur(r, 0, 0, e),
                this._applyPMREM(r),
                this._cleanup(r),
                r
            }
            fromEquirectangular(t) {
                return this._fromTexture(t)
            }
            fromCubemap(t) {
                return this._fromTexture(t)
            }
            compileCubemapShader() {
                null === this._cubemapShader && (this._cubemapShader = _t(),
                this._compileMaterial(this._cubemapShader))
            }
            compileEquirectangularShader() {
                null === this._equirectShader && (this._equirectShader = gt(),
                this._compileMaterial(this._equirectShader))
            }
            dispose() {
                this._blurMaterial.dispose(),
                null !== this._cubemapShader && this._cubemapShader.dispose(),
                null !== this._equirectShader && this._equirectShader.dispose();
                for (let t = 0; t < rt.length; t++)
                    rt[t].dispose()
            }
            _cleanup(t) {
                this._pingPongRenderTarget.dispose(),
                this._renderer.setRenderTarget(lt),
                t.scissorTest = !1,
                ft(t, 0, 0, t.width, t.height)
            }
            _fromTexture(t) {
                lt = this._renderer.getRenderTarget();
                const e = this._allocateTargets(t);
                return this._textureToCubeUV(t, e),
                this._applyPMREM(e),
                this._cleanup(e),
                e
            }
            _allocateTargets(t) {
                const e = {
                    magFilter: i.wem,
                    minFilter: i.wem,
                    generateMipmaps: !1,
                    type: i.cLu,
                    format: i.wk1,
                    encoding: i.rnI,
                    depthBuffer: !1
                }
                  , n = mt(e);
                return n.depthBuffer = !t,
                this._pingPongRenderTarget = mt(e),
                n
            }
            _compileMaterial(t) {
                const e = new L.K(rt[0],t);
                this._renderer.compile(e, it)
            }
            _sceneToCubeUV(t, e, n, r) {
                const a = new W(90,1,e,n)
                  , s = [1, -1, 1, 1, 1, 1]
                  , o = [1, 1, 1, -1, -1, -1]
                  , l = this._renderer
                  , c = l.autoClear
                  , u = l.toneMapping;
                l.getClearColor(ot),
                l.toneMapping = i.uL9,
                l.autoClear = !1;
                const h = new Q.v({
                    name: "PMREM.Background",
                    side: i._Li,
                    depthWrite: !1,
                    depthTest: !1
                })
                  , d = new L.K(new v.D,h);
                let p = !1;
                const m = t.background;
                m ? m.isColor && (h.color.copy(m),
                t.background = null,
                p = !0) : (h.color.copy(ot),
                p = !0);
                for (let e = 0; e < 6; e++) {
                    const n = e % 3;
                    0 == n ? (a.up.set(0, s[e], 0),
                    a.lookAt(o[e], 0, 0)) : 1 == n ? (a.up.set(0, 0, s[e]),
                    a.lookAt(0, o[e], 0)) : (a.up.set(0, s[e], 0),
                    a.lookAt(0, 0, o[e])),
                    ft(r, n * $, e > 2 ? $ : 0, $, $),
                    l.setRenderTarget(r),
                    p && l.render(d, a),
                    l.render(t, a)
                }
                d.geometry.dispose(),
                d.material.dispose(),
                l.toneMapping = u,
                l.autoClear = c,
                t.background = m
            }
            _setEncoding(t, e) {
                !0 === this._renderer.capabilities.isWebGL2 && e.format === i.wk1 && e.type === i.ywz && e.encoding === i.knz ? t.value = nt[i.rnI] : t.value = nt[e.encoding]
            }
            _textureToCubeUV(t, e) {
                const n = this._renderer
                  , r = t.mapping === i.fY$ || t.mapping === i.vxC;
                r ? null == this._cubemapShader && (this._cubemapShader = _t()) : null == this._equirectShader && (this._equirectShader = gt());
                const a = r ? this._cubemapShader : this._equirectShader
                  , s = new L.K(rt[0],a)
                  , o = a.uniforms;
                o.envMap.value = t,
                r || o.texelSize.value.set(1 / t.image.width, 1 / t.image.height),
                this._setEncoding(o.inputEncoding, t),
                ft(e, 0, 0, 3 * $, 2 * $),
                n.setRenderTarget(e),
                n.render(s, it)
            }
            _applyPMREM(t) {
                const e = this._renderer
                  , n = e.autoClear;
                e.autoClear = !1;
                for (let e = 1; e < et; e++) {
                    const n = Math.sqrt(st[e] * st[e] - st[e - 1] * st[e - 1])
                      , i = ht[(e - 1) % ht.length];
                    this._blur(t, e - 1, e, n, i)
                }
                e.autoClear = n
            }
            _blur(t, e, n, i, r) {
                const a = this._pingPongRenderTarget;
                this._halfBlur(t, a, e, n, i, "latitudinal", r),
                this._halfBlur(a, t, n, n, i, "longitudinal", r)
            }
            _halfBlur(t, e, n, i, r, a, s) {
                const o = this._renderer
                  , l = this._blurMaterial;
                "latitudinal" !== a && "longitudinal" !== a && console.error("blur direction must be either latitudinal or longitudinal!");
                const c = new L.K(rt[i],l)
                  , u = l.uniforms
                  , h = at[n] - 1
                  , d = isFinite(r) ? Math.PI / (2 * h) : 2 * Math.PI / 39
                  , p = r / d
                  , m = isFinite(r) ? 1 + Math.floor(3 * p) : 20;
                m > 20 && console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to 20`);
                const f = [];
                let g = 0;
                for (let t = 0; t < 20; ++t) {
                    const e = t / p
                      , n = Math.exp(-e * e / 2);
                    f.push(n),
                    0 == t ? g += n : t < m && (g += 2 * n)
                }
                for (let t = 0; t < f.length; t++)
                    f[t] = f[t] / g;
                u.envMap.value = t.texture,
                u.samples.value = m,
                u.weights.value = f,
                u.latitudinal.value = "latitudinal" === a,
                s && (u.poleAxis.value = s),
                u.dTheta.value = d,
                u.mipInt.value = 8 - n;
                const _ = at[i];
                ft(e, 3 * Math.max(0, $ - 2 * _), (0 === i ? 0 : 2 * $) + 2 * _ * (i > 4 ? i - 8 + 4 : 0), 3 * _, 2 * _),
                o.setRenderTarget(e),
                o.render(c, it)
            }
        }
        function pt() {
            const t = []
              , e = []
              , n = [];
            let i = 8;
            for (let r = 0; r < et; r++) {
                const a = Math.pow(2, i);
                e.push(a);
                let s = 1 / a;
                r > 4 ? s = tt[r - 8 + 4 - 1] : 0 == r && (s = 0),
                n.push(s);
                const o = 1 / (a - 1)
                  , l = -o / 2
                  , c = 1 + o / 2
                  , u = [l, l, c, l, c, c, l, l, c, c, l, c]
                  , h = 6
                  , d = 6
                  , p = 3
                  , m = 2
                  , f = 1
                  , g = new Float32Array(p * d * h)
                  , _ = new Float32Array(m * d * h)
                  , v = new Float32Array(f * d * h);
                for (let t = 0; t < h; t++) {
                    const e = t % 3 * 2 / 3 - 1
                      , n = t > 2 ? 0 : -1
                      , i = [e, n, 0, e + 2 / 3, n, 0, e + 2 / 3, n + 1, 0, e, n, 0, e + 2 / 3, n + 1, 0, e, n + 1, 0];
                    g.set(i, p * d * t),
                    _.set(u, m * d * t);
                    const r = [t, t, t, t, t, t];
                    v.set(r, f * d * t)
                }
                const b = new x.u;
                b.setAttribute("position", new y.Tl(g,p)),
                b.setAttribute("uv", new y.Tl(_,m)),
                b.setAttribute("faceIndex", new y.Tl(v,f)),
                t.push(b),
                i > 4 && i--
            }
            return {
                _lodPlanes: t,
                _sizeLods: e,
                _sigmas: n
            }
        }
        function mt(t) {
            const e = new G(3 * $,3 * $,t);
            return e.texture.mapping = i.g8_,
            e.texture.name = "PMREM.cubeUv",
            e.scissorTest = !0,
            e
        }
        function ft(t, e, n, i, r) {
            t.viewport.set(e, n, i, r),
            t.scissor.set(e, n, i, r)
        }
        function gt() {
            const t = new C.F(1,1);
            return new J({
                name: "EquirectangularToCubeUV",
                uniforms: {
                    envMap: {
                        value: null
                    },
                    texelSize: {
                        value: t
                    },
                    inputEncoding: {
                        value: nt[i.rnI]
                    }
                },
                vertexShader: "\n\n\t\tprecision mediump float;\n\t\tprecision mediump int;\n\n\t\tattribute vec3 position;\n\t\tattribute vec2 uv;\n\t\tattribute float faceIndex;\n\n\t\tvarying vec3 vOutputDirection;\n\n\t\t// RH coordinate system; PMREM face-indexing convention\n\t\tvec3 getDirection( vec2 uv, float face ) {\n\n\t\t\tuv = 2.0 * uv - 1.0;\n\n\t\t\tvec3 direction = vec3( uv, 1.0 );\n\n\t\t\tif ( face == 0.0 ) {\n\n\t\t\t\tdirection = direction.zyx; // ( 1, v, u ) pos x\n\n\t\t\t} else if ( face == 1.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xz *= -1.0; // ( -u, 1, -v ) pos y\n\n\t\t\t} else if ( face == 2.0 ) {\n\n\t\t\t\tdirection.x *= -1.0; // ( -u, v, 1 ) pos z\n\n\t\t\t} else if ( face == 3.0 ) {\n\n\t\t\t\tdirection = direction.zyx;\n\t\t\t\tdirection.xz *= -1.0; // ( -1, v, -u ) neg x\n\n\t\t\t} else if ( face == 4.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xy *= -1.0; // ( -u, -1, v ) neg y\n\n\t\t\t} else if ( face == 5.0 ) {\n\n\t\t\t\tdirection.z *= -1.0; // ( u, v, -1 ) neg z\n\n\t\t\t}\n\n\t\t\treturn direction;\n\n\t\t}\n\n\t\tvoid main() {\n\n\t\t\tvOutputDirection = getDirection( uv, faceIndex );\n\t\t\tgl_Position = vec4( position, 1.0 );\n\n\t\t}\n\t",
                fragmentShader: "\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform sampler2D envMap;\n\t\t\tuniform vec2 texelSize;\n\n\t\t\t\n\n\t\tuniform int inputEncoding;\n\n\t\t#include <encodings_pars_fragment>\n\n\t\tvec4 inputTexelToLinear( vec4 value ) {\n\n\t\t\tif ( inputEncoding == 0 ) {\n\n\t\t\t\treturn value;\n\n\t\t\t} else {\n\n\t\t\t\treturn sRGBToLinear( value );\n\n\t\t\t}\n\n\t\t}\n\n\t\tvec4 envMapTexelToLinear( vec4 color ) {\n\n\t\t\treturn inputTexelToLinear( color );\n\n\t\t}\n\t\n\n\t\t\t#include <common>\n\n\t\t\tvoid main() {\n\n\t\t\t\tgl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n\n\t\t\t\tvec3 outputDirection = normalize( vOutputDirection );\n\t\t\t\tvec2 uv = equirectUv( outputDirection );\n\n\t\t\t\tvec2 f = fract( uv / texelSize - 0.5 );\n\t\t\t\tuv -= f * texelSize;\n\t\t\t\tvec3 tl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;\n\t\t\t\tuv.x += texelSize.x;\n\t\t\t\tvec3 tr = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;\n\t\t\t\tuv.y += texelSize.y;\n\t\t\t\tvec3 br = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;\n\t\t\t\tuv.x -= texelSize.x;\n\t\t\t\tvec3 bl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;\n\n\t\t\t\tvec3 tm = mix( tl, tr, f.x );\n\t\t\t\tvec3 bm = mix( bl, br, f.x );\n\t\t\t\tgl_FragColor.rgb = mix( tm, bm, f.y );\n\n\t\t\t}\n\t\t",
                blending: i.jFi,
                depthTest: !1,
                depthWrite: !1
            })
        }
        function _t() {
            return new J({
                name: "CubemapToCubeUV",
                uniforms: {
                    envMap: {
                        value: null
                    },
                    inputEncoding: {
                        value: nt[i.rnI]
                    }
                },
                vertexShader: "\n\n\t\tprecision mediump float;\n\t\tprecision mediump int;\n\n\t\tattribute vec3 position;\n\t\tattribute vec2 uv;\n\t\tattribute float faceIndex;\n\n\t\tvarying vec3 vOutputDirection;\n\n\t\t// RH coordinate system; PMREM face-indexing convention\n\t\tvec3 getDirection( vec2 uv, float face ) {\n\n\t\t\tuv = 2.0 * uv - 1.0;\n\n\t\t\tvec3 direction = vec3( uv, 1.0 );\n\n\t\t\tif ( face == 0.0 ) {\n\n\t\t\t\tdirection = direction.zyx; // ( 1, v, u ) pos x\n\n\t\t\t} else if ( face == 1.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xz *= -1.0; // ( -u, 1, -v ) pos y\n\n\t\t\t} else if ( face == 2.0 ) {\n\n\t\t\t\tdirection.x *= -1.0; // ( -u, v, 1 ) pos z\n\n\t\t\t} else if ( face == 3.0 ) {\n\n\t\t\t\tdirection = direction.zyx;\n\t\t\t\tdirection.xz *= -1.0; // ( -1, v, -u ) neg x\n\n\t\t\t} else if ( face == 4.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xy *= -1.0; // ( -u, -1, v ) neg y\n\n\t\t\t} else if ( face == 5.0 ) {\n\n\t\t\t\tdirection.z *= -1.0; // ( u, v, -1 ) neg z\n\n\t\t\t}\n\n\t\t\treturn direction;\n\n\t\t}\n\n\t\tvoid main() {\n\n\t\t\tvOutputDirection = getDirection( uv, faceIndex );\n\t\t\tgl_Position = vec4( position, 1.0 );\n\n\t\t}\n\t",
                fragmentShader: "\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform samplerCube envMap;\n\n\t\t\t\n\n\t\tuniform int inputEncoding;\n\n\t\t#include <encodings_pars_fragment>\n\n\t\tvec4 inputTexelToLinear( vec4 value ) {\n\n\t\t\tif ( inputEncoding == 0 ) {\n\n\t\t\t\treturn value;\n\n\t\t\t} else {\n\n\t\t\t\treturn sRGBToLinear( value );\n\n\t\t\t}\n\n\t\t}\n\n\t\tvec4 envMapTexelToLinear( vec4 color ) {\n\n\t\t\treturn inputTexelToLinear( color );\n\n\t\t}\n\t\n\n\t\t\tvoid main() {\n\n\t\t\t\tgl_FragColor = envMapTexelToLinear( textureCube( envMap, vec3( - vOutputDirection.x, vOutputDirection.yz ) ) );\n\n\t\t\t}\n\t\t",
                blending: i.jFi,
                depthTest: !1,
                depthWrite: !1
            })
        }
        function vt(t) {
            let e = new WeakMap
              , n = null;
            function r(t) {
                const n = t.target;
                n.removeEventListener("dispose", r);
                const i = e.get(n);
                void 0 !== i && (e.delete(n),
                i.dispose())
            }
            return {
                get: function(a) {
                    if (a && a.isTexture && !1 === a.isRenderTargetTexture) {
                        const s = a.mapping
                          , o = s === i.dSO || s === i.Bf4
                          , l = s === i.fY$ || s === i.vxC;
                        if (o || l) {
                            if (e.has(a))
                                return e.get(a).texture;
                            {
                                const i = a.image;
                                if (o && i && i.height > 0 || l && i && function(t) {
                                    let e = 0;
                                    for (let n = 0; n < 6; n++)
                                        void 0 !== t[n] && e++;
                                    return 6 === e
                                }(i)) {
                                    const i = t.getRenderTarget();
                                    null === n && (n = new dt(t));
                                    const s = o ? n.fromEquirectangular(a) : n.fromCubemap(a);
                                    return e.set(a, s),
                                    t.setRenderTarget(i),
                                    a.addEventListener("dispose", r),
                                    s.texture
                                }
                                return null
                            }
                        }
                    }
                    return a
                },
                dispose: function() {
                    e = new WeakMap,
                    null !== n && (n.dispose(),
                    n = null)
                }
            }
        }
        function xt(t) {
            const e = {};
            function n(n) {
                if (void 0 !== e[n])
                    return e[n];
                let i;
                switch (n) {
                case "WEBGL_depth_texture":
                    i = t.getExtension("WEBGL_depth_texture") || t.getExtension("MOZ_WEBGL_depth_texture") || t.getExtension("WEBKIT_WEBGL_depth_texture");
                    break;
                case "EXT_texture_filter_anisotropic":
                    i = t.getExtension("EXT_texture_filter_anisotropic") || t.getExtension("MOZ_EXT_texture_filter_anisotropic") || t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
                    break;
                case "WEBGL_compressed_texture_s3tc":
                    i = t.getExtension("WEBGL_compressed_texture_s3tc") || t.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
                    break;
                case "WEBGL_compressed_texture_pvrtc":
                    i = t.getExtension("WEBGL_compressed_texture_pvrtc") || t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
                    break;
                default:
                    i = t.getExtension(n)
                }
                return e[n] = i,
                i
            }
            return {
                has: function(t) {
                    return null !== n(t)
                },
                init: function(t) {
                    t.isWebGL2 ? n("EXT_color_buffer_float") : (n("WEBGL_depth_texture"),
                    n("OES_texture_float"),
                    n("OES_texture_half_float"),
                    n("OES_texture_half_float_linear"),
                    n("OES_standard_derivatives"),
                    n("OES_element_index_uint"),
                    n("OES_vertex_array_object"),
                    n("ANGLE_instanced_arrays")),
                    n("OES_texture_float_linear"),
                    n("EXT_color_buffer_half_float"),
                    n("WEBGL_multisampled_render_to_texture")
                },
                get: function(t) {
                    const e = n(t);
                    return null === e && console.warn("THREE.WebGLRenderer: " + t + " extension not supported."),
                    e
                }
            }
        }
        var yt = n(392);
        function bt(t, e, n, i) {
            const r = {}
              , a = new WeakMap;
            function s(t) {
                const o = t.target;
                null !== o.index && e.remove(o.index);
                for (const t in o.attributes)
                    e.remove(o.attributes[t]);
                o.removeEventListener("dispose", s),
                delete r[o.id];
                const l = a.get(o);
                l && (e.remove(l),
                a.delete(o)),
                i.releaseStatesOfGeometry(o),
                !0 === o.isInstancedBufferGeometry && delete o._maxInstanceCount,
                n.memory.geometries--
            }
            function o(t) {
                const n = []
                  , i = t.index
                  , r = t.attributes.position;
                let s = 0;
                if (null !== i) {
                    const t = i.array;
                    s = i.version;
                    for (let e = 0, i = t.length; e < i; e += 3) {
                        const i = t[e + 0]
                          , r = t[e + 1]
                          , a = t[e + 2];
                        n.push(i, r, r, a, a, i)
                    }
                } else {
                    const t = r.array;
                    s = r.version;
                    for (let e = 0, i = t.length / 3 - 1; e < i; e += 3) {
                        const t = e + 0
                          , i = e + 1
                          , r = e + 2;
                        n.push(t, i, i, r, r, t)
                    }
                }
                const o = new ((0,
                yt.uH)(n) > 65535 ? y.lC : y.ql)(n,1);
                o.version = s;
                const l = a.get(t);
                l && e.remove(l),
                a.set(t, o)
            }
            return {
                get: function(t, e) {
                    return !0 === r[e.id] || (e.addEventListener("dispose", s),
                    r[e.id] = !0,
                    n.memory.geometries++),
                    e
                },
                update: function(n) {
                    const i = n.attributes;
                    for (const n in i)
                        e.update(i[n], t.ARRAY_BUFFER);
                    const r = n.morphAttributes;
                    for (const n in r) {
                        const i = r[n];
                        for (let n = 0, r = i.length; n < r; n++)
                            e.update(i[n], t.ARRAY_BUFFER)
                    }
                },
                getWireframeAttribute: function(t) {
                    const e = a.get(t);
                    if (e) {
                        const n = t.index;
                        null !== n && e.version < n.version && o(t)
                    } else
                        o(t);
                    return a.get(t)
                }
            }
        }
        function Mt(t, e, n, i) {
            const r = i.isWebGL2;
            let a, s, o;
            this.setMode = function(t) {
                a = t
            }
            ,
            this.setIndex = function(t) {
                s = t.type,
                o = t.bytesPerElement
            }
            ,
            this.render = function(e, i) {
                t.drawElements(a, i, s, e * o),
                n.update(i, a, 1)
            }
            ,
            this.renderInstances = function(i, l, c) {
                if (0 === c)
                    return;
                let u, h;
                if (r)
                    u = t,
                    h = "drawElementsInstanced";
                else if (u = e.get("ANGLE_instanced_arrays"),
                h = "drawElementsInstancedANGLE",
                null === u)
                    return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
                u[h](a, l, s, i * o, c),
                n.update(l, a, c)
            }
        }
        function St(t) {
            const e = {
                frame: 0,
                calls: 0,
                triangles: 0,
                points: 0,
                lines: 0
            };
            return {
                memory: {
                    geometries: 0,
                    textures: 0
                },
                render: e,
                programs: null,
                autoReset: !0,
                reset: function() {
                    e.frame++,
                    e.calls = 0,
                    e.triangles = 0,
                    e.points = 0,
                    e.lines = 0
                },
                update: function(n, i, r) {
                    switch (e.calls++,
                    i) {
                    case t.TRIANGLES:
                        e.triangles += r * (n / 3);
                        break;
                    case t.LINES:
                        e.lines += r * (n / 2);
                        break;
                    case t.LINE_STRIP:
                        e.lines += r * (n - 1);
                        break;
                    case t.LINE_LOOP:
                        e.lines += r * n;
                        break;
                    case t.POINTS:
                        e.points += r * n;
                        break;
                    default:
                        console.error("THREE.WebGLInfo: Unknown draw mode:", i)
                    }
                }
            }
        }
        class wt extends B.x {
            constructor(t=null, e=1, n=1, r=1) {
                super(null),
                this.image = {
                    data: t,
                    width: e,
                    height: n,
                    depth: r
                },
                this.magFilter = i.TyD,
                this.minFilter = i.TyD,
                this.wrapR = i.uWy,
                this.generateMipmaps = !1,
                this.flipY = !1,
                this.unpackAlignment = 1
            }
        }
        function Tt(t, e) {
            return t[0] - e[0]
        }
        function Et(t, e) {
            return Math.abs(e[1]) - Math.abs(t[1])
        }
        function At(t, e) {
            let n = 1;
            const i = e.isInterleavedBufferAttribute ? e.data.array : e.array;
            i instanceof Int8Array ? n = 127 : i instanceof Int16Array ? n = 32767 : i instanceof Int32Array ? n = 2147483647 : console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ", i),
            t.divideScalar(n)
        }
        function Lt(t, e, n) {
            const a = {}
              , s = new Float32Array(8)
              , o = new WeakMap
              , l = new r.P
              , c = [];
            for (let t = 0; t < 8; t++)
                c[t] = [t, 0];
            return {
                update: function(r, u, h, d) {
                    const p = r.morphTargetInfluences;
                    if (!0 === e.isWebGL2) {
                        const r = u.morphAttributes.position.length;
                        let a = o.get(u);
                        if (void 0 === a || a.count !== r) {
                            void 0 !== a && a.texture.dispose();
                            const t = void 0 !== u.morphAttributes.normal
                              , n = u.morphAttributes.position
                              , s = u.morphAttributes.normal || []
                              , c = !0 === t ? 2 : 1;
                            let h = u.attributes.position.count * c
                              , d = 1;
                            h > e.maxTextureSize && (d = Math.ceil(h / e.maxTextureSize),
                            h = e.maxTextureSize);
                            const p = new Float32Array(h * d * 4 * r)
                              , m = new wt(p,h,d,r);
                            m.format = i.wk1,
                            m.type = i.VzW,
                            m.needsUpdate = !0;
                            const f = 4 * c;
                            for (let e = 0; e < r; e++) {
                                const i = n[e]
                                  , r = s[e]
                                  , a = h * d * 4 * e;
                                for (let e = 0; e < i.count; e++) {
                                    l.fromBufferAttribute(i, e),
                                    !0 === i.normalized && At(l, i);
                                    const n = e * f;
                                    p[a + n + 0] = l.x,
                                    p[a + n + 1] = l.y,
                                    p[a + n + 2] = l.z,
                                    p[a + n + 3] = 0,
                                    !0 === t && (l.fromBufferAttribute(r, e),
                                    !0 === r.normalized && At(l, r),
                                    p[a + n + 4] = l.x,
                                    p[a + n + 5] = l.y,
                                    p[a + n + 6] = l.z,
                                    p[a + n + 7] = 0)
                                }
                            }
                            a = {
                                count: r,
                                texture: m,
                                size: new C.F(h,d)
                            },
                            o.set(u, a)
                        }
                        let s = 0;
                        for (let t = 0; t < p.length; t++)
                            s += p[t];
                        const c = u.morphTargetsRelative ? 1 : 1 - s;
                        d.getUniforms().setValue(t, "morphTargetBaseInfluence", c),
                        d.getUniforms().setValue(t, "morphTargetInfluences", p),
                        d.getUniforms().setValue(t, "morphTargetsTexture", a.texture, n),
                        d.getUniforms().setValue(t, "morphTargetsTextureSize", a.size)
                    } else {
                        const e = void 0 === p ? 0 : p.length;
                        let n = a[u.id];
                        if (void 0 === n || n.length !== e) {
                            n = [];
                            for (let t = 0; t < e; t++)
                                n[t] = [t, 0];
                            a[u.id] = n
                        }
                        for (let t = 0; t < e; t++) {
                            const e = n[t];
                            e[0] = t,
                            e[1] = p[t]
                        }
                        n.sort(Et);
                        for (let t = 0; t < 8; t++)
                            t < e && n[t][1] ? (c[t][0] = n[t][0],
                            c[t][1] = n[t][1]) : (c[t][0] = Number.MAX_SAFE_INTEGER,
                            c[t][1] = 0);
                        c.sort(Tt);
                        const i = u.morphAttributes.position
                          , r = u.morphAttributes.normal;
                        let o = 0;
                        for (let t = 0; t < 8; t++) {
                            const e = c[t]
                              , n = e[0]
                              , a = e[1];
                            n !== Number.MAX_SAFE_INTEGER && a ? (i && u.getAttribute("morphTarget" + t) !== i[n] && u.setAttribute("morphTarget" + t, i[n]),
                            r && u.getAttribute("morphNormal" + t) !== r[n] && u.setAttribute("morphNormal" + t, r[n]),
                            s[t] = a,
                            o += a) : (i && !0 === u.hasAttribute("morphTarget" + t) && u.deleteAttribute("morphTarget" + t),
                            r && !0 === u.hasAttribute("morphNormal" + t) && u.deleteAttribute("morphNormal" + t),
                            s[t] = 0)
                        }
                        const l = u.morphTargetsRelative ? 1 : 1 - o;
                        d.getUniforms().setValue(t, "morphTargetBaseInfluence", l),
                        d.getUniforms().setValue(t, "morphTargetInfluences", s)
                    }
                }
            }
        }
        wt.prototype.isDataTexture2DArray = !0;
        class Rt extends G {
            constructor(t, e, n={}) {
                super(t, e, n),
                this.samples = 4,
                this.ignoreDepthForMultisampleCopy = void 0 === n.ignoreDepth || n.ignoreDepth,
                this.useRenderToTexture = void 0 !== n.useRenderToTexture && n.useRenderToTexture,
                this.useRenderbuffer = !1 === this.useRenderToTexture
            }
            copy(t) {
                return super.copy.call(this, t),
                this.samples = t.samples,
                this.useRenderToTexture = t.useRenderToTexture,
                this.useRenderbuffer = t.useRenderbuffer,
                this
            }
        }
        function Ct(t, e, n, i) {
            let r = new WeakMap;
            function a(t) {
                const e = t.target;
                e.removeEventListener("dispose", a),
                n.remove(e.instanceMatrix),
                null !== e.instanceColor && n.remove(e.instanceColor)
            }
            return {
                update: function(s) {
                    const o = i.render.frame
                      , l = s.geometry
                      , c = e.get(s, l);
                    return r.get(c) !== o && (e.update(c),
                    r.set(c, o)),
                    s.isInstancedMesh && (!1 === s.hasEventListener("dispose", a) && s.addEventListener("dispose", a),
                    n.update(s.instanceMatrix, t.ARRAY_BUFFER),
                    null !== s.instanceColor && n.update(s.instanceColor, t.ARRAY_BUFFER)),
                    c
                },
                dispose: function() {
                    r = new WeakMap
                }
            }
        }
        Rt.prototype.isWebGLMultisampleRenderTarget = !0;
        var Pt = n(204);
        class Dt extends B.x {
            constructor(t=null, e=1, n=1, r=1) {
                super(null),
                this.image = {
                    data: t,
                    width: e,
                    height: n,
                    depth: r
                },
                this.magFilter = i.TyD,
                this.minFilter = i.TyD,
                this.wrapR = i.uWy,
                this.generateMipmaps = !1,
                this.flipY = !1,
                this.unpackAlignment = 1
            }
        }
        Dt.prototype.isDataTexture3D = !0;
        const Nt = new B.x
          , It = new wt
          , Ut = new Dt
          , Ft = new j
          , Ot = []
          , zt = []
          , Bt = new Float32Array(16)
          , Gt = new Float32Array(9)
          , Ht = new Float32Array(4);
        function kt(t, e, n) {
            const i = t[0];
            if (i <= 0 || i > 0)
                return t;
            const r = e * n;
            let a = Ot[r];
            if (void 0 === a && (a = new Float32Array(r),
            Ot[r] = a),
            0 !== e) {
                i.toArray(a, 0);
                for (let i = 1, r = 0; i !== e; ++i)
                    r += n,
                    t[i].toArray(a, r)
            }
            return a
        }
        function Vt(t, e) {
            if (t.length !== e.length)
                return !1;
            for (let n = 0, i = t.length; n < i; n++)
                if (t[n] !== e[n])
                    return !1;
            return !0
        }
        function Wt(t, e) {
            for (let n = 0, i = e.length; n < i; n++)
                t[n] = e[n]
        }
        function Xt(t, e) {
            let n = zt[e];
            void 0 === n && (n = new Int32Array(e),
            zt[e] = n);
            for (let i = 0; i !== e; ++i)
                n[i] = t.allocateTextureUnit();
            return n
        }
        function qt(t, e) {
            const n = this.cache;
            n[0] !== e && (t.uniform1f(this.addr, e),
            n[0] = e)
        }
        function jt(t, e) {
            const n = this.cache;
            if (void 0 !== e.x)
                n[0] === e.x && n[1] === e.y || (t.uniform2f(this.addr, e.x, e.y),
                n[0] = e.x,
                n[1] = e.y);
            else {
                if (Vt(n, e))
                    return;
                t.uniform2fv(this.addr, e),
                Wt(n, e)
            }
        }
        function Yt(t, e) {
            const n = this.cache;
            if (void 0 !== e.x)
                n[0] === e.x && n[1] === e.y && n[2] === e.z || (t.uniform3f(this.addr, e.x, e.y, e.z),
                n[0] = e.x,
                n[1] = e.y,
                n[2] = e.z);
            else if (void 0 !== e.r)
                n[0] === e.r && n[1] === e.g && n[2] === e.b || (t.uniform3f(this.addr, e.r, e.g, e.b),
                n[0] = e.r,
                n[1] = e.g,
                n[2] = e.b);
            else {
                if (Vt(n, e))
                    return;
                t.uniform3fv(this.addr, e),
                Wt(n, e)
            }
        }
        function Zt(t, e) {
            const n = this.cache;
            if (void 0 !== e.x)
                n[0] === e.x && n[1] === e.y && n[2] === e.z && n[3] === e.w || (t.uniform4f(this.addr, e.x, e.y, e.z, e.w),
                n[0] = e.x,
                n[1] = e.y,
                n[2] = e.z,
                n[3] = e.w);
            else {
                if (Vt(n, e))
                    return;
                t.uniform4fv(this.addr, e),
                Wt(n, e)
            }
        }
        function Kt(t, e) {
            const n = this.cache
              , i = e.elements;
            if (void 0 === i) {
                if (Vt(n, e))
                    return;
                t.uniformMatrix2fv(this.addr, !1, e),
                Wt(n, e)
            } else {
                if (Vt(n, i))
                    return;
                Ht.set(i),
                t.uniformMatrix2fv(this.addr, !1, Ht),
                Wt(n, i)
            }
        }
        function Jt(t, e) {
            const n = this.cache
              , i = e.elements;
            if (void 0 === i) {
                if (Vt(n, e))
                    return;
                t.uniformMatrix3fv(this.addr, !1, e),
                Wt(n, e)
            } else {
                if (Vt(n, i))
                    return;
                Gt.set(i),
                t.uniformMatrix3fv(this.addr, !1, Gt),
                Wt(n, i)
            }
        }
        function Qt(t, e) {
            const n = this.cache
              , i = e.elements;
            if (void 0 === i) {
                if (Vt(n, e))
                    return;
                t.uniformMatrix4fv(this.addr, !1, e),
                Wt(n, e)
            } else {
                if (Vt(n, i))
                    return;
                Bt.set(i),
                t.uniformMatrix4fv(this.addr, !1, Bt),
                Wt(n, i)
            }
        }
        function $t(t, e) {
            const n = this.cache;
            n[0] !== e && (t.uniform1i(this.addr, e),
            n[0] = e)
        }
        function te(t, e) {
            const n = this.cache;
            Vt(n, e) || (t.uniform2iv(this.addr, e),
            Wt(n, e))
        }
        function ee(t, e) {
            const n = this.cache;
            Vt(n, e) || (t.uniform3iv(this.addr, e),
            Wt(n, e))
        }
        function ne(t, e) {
            const n = this.cache;
            Vt(n, e) || (t.uniform4iv(this.addr, e),
            Wt(n, e))
        }
        function ie(t, e) {
            const n = this.cache;
            n[0] !== e && (t.uniform1ui(this.addr, e),
            n[0] = e)
        }
        function re(t, e) {
            const n = this.cache;
            Vt(n, e) || (t.uniform2uiv(this.addr, e),
            Wt(n, e))
        }
        function ae(t, e) {
            const n = this.cache;
            Vt(n, e) || (t.uniform3uiv(this.addr, e),
            Wt(n, e))
        }
        function se(t, e) {
            const n = this.cache;
            Vt(n, e) || (t.uniform4uiv(this.addr, e),
            Wt(n, e))
        }
        function oe(t, e, n) {
            const i = this.cache
              , r = n.allocateTextureUnit();
            i[0] !== r && (t.uniform1i(this.addr, r),
            i[0] = r),
            n.safeSetTexture2D(e || Nt, r)
        }
        function le(t, e, n) {
            const i = this.cache
              , r = n.allocateTextureUnit();
            i[0] !== r && (t.uniform1i(this.addr, r),
            i[0] = r),
            n.setTexture3D(e || Ut, r)
        }
        function ce(t, e, n) {
            const i = this.cache
              , r = n.allocateTextureUnit();
            i[0] !== r && (t.uniform1i(this.addr, r),
            i[0] = r),
            n.safeSetTextureCube(e || Ft, r)
        }
        function ue(t, e, n) {
            const i = this.cache
              , r = n.allocateTextureUnit();
            i[0] !== r && (t.uniform1i(this.addr, r),
            i[0] = r),
            n.setTexture2DArray(e || It, r)
        }
        function he(t, e) {
            t.uniform1fv(this.addr, e)
        }
        function de(t, e) {
            const n = kt(e, this.size, 2);
            t.uniform2fv(this.addr, n)
        }
        function pe(t, e) {
            const n = kt(e, this.size, 3);
            t.uniform3fv(this.addr, n)
        }
        function me(t, e) {
            const n = kt(e, this.size, 4);
            t.uniform4fv(this.addr, n)
        }
        function fe(t, e) {
            const n = kt(e, this.size, 4);
            t.uniformMatrix2fv(this.addr, !1, n)
        }
        function ge(t, e) {
            const n = kt(e, this.size, 9);
            t.uniformMatrix3fv(this.addr, !1, n)
        }
        function _e(t, e) {
            const n = kt(e, this.size, 16);
            t.uniformMatrix4fv(this.addr, !1, n)
        }
        function ve(t, e) {
            t.uniform1iv(this.addr, e)
        }
        function xe(t, e) {
            t.uniform2iv(this.addr, e)
        }
        function ye(t, e) {
            t.uniform3iv(this.addr, e)
        }
        function be(t, e) {
            t.uniform4iv(this.addr, e)
        }
        function Me(t, e) {
            t.uniform1uiv(this.addr, e)
        }
        function Se(t, e) {
            t.uniform2uiv(this.addr, e)
        }
        function we(t, e) {
            t.uniform3uiv(this.addr, e)
        }
        function Te(t, e) {
            t.uniform4uiv(this.addr, e)
        }
        function Ee(t, e, n) {
            const i = e.length
              , r = Xt(n, i);
            t.uniform1iv(this.addr, r);
            for (let t = 0; t !== i; ++t)
                n.safeSetTexture2D(e[t] || Nt, r[t])
        }
        function Ae(t, e, n) {
            const i = e.length
              , r = Xt(n, i);
            t.uniform1iv(this.addr, r);
            for (let t = 0; t !== i; ++t)
                n.setTexture3D(e[t] || Ut, r[t])
        }
        function Le(t, e, n) {
            const i = e.length
              , r = Xt(n, i);
            t.uniform1iv(this.addr, r);
            for (let t = 0; t !== i; ++t)
                n.safeSetTextureCube(e[t] || Ft, r[t])
        }
        function Re(t, e, n) {
            const i = e.length
              , r = Xt(n, i);
            t.uniform1iv(this.addr, r);
            for (let t = 0; t !== i; ++t)
                n.setTexture2DArray(e[t] || It, r[t])
        }
        function Ce(t, e, n) {
            this.id = t,
            this.addr = n,
            this.cache = [],
            this.setValue = function(t) {
                switch (t) {
                case 5126:
                    return qt;
                case 35664:
                    return jt;
                case 35665:
                    return Yt;
                case 35666:
                    return Zt;
                case 35674:
                    return Kt;
                case 35675:
                    return Jt;
                case 35676:
                    return Qt;
                case 5124:
                case 35670:
                    return $t;
                case 35667:
                case 35671:
                    return te;
                case 35668:
                case 35672:
                    return ee;
                case 35669:
                case 35673:
                    return ne;
                case 5125:
                    return ie;
                case 36294:
                    return re;
                case 36295:
                    return ae;
                case 36296:
                    return se;
                case 35678:
                case 36198:
                case 36298:
                case 36306:
                case 35682:
                    return oe;
                case 35679:
                case 36299:
                case 36307:
                    return le;
                case 35680:
                case 36300:
                case 36308:
                case 36293:
                    return ce;
                case 36289:
                case 36303:
                case 36311:
                case 36292:
                    return ue
                }
            }(e.type)
        }
        function Pe(t, e, n) {
            this.id = t,
            this.addr = n,
            this.cache = [],
            this.size = e.size,
            this.setValue = function(t) {
                switch (t) {
                case 5126:
                    return he;
                case 35664:
                    return de;
                case 35665:
                    return pe;
                case 35666:
                    return me;
                case 35674:
                    return fe;
                case 35675:
                    return ge;
                case 35676:
                    return _e;
                case 5124:
                case 35670:
                    return ve;
                case 35667:
                case 35671:
                    return xe;
                case 35668:
                case 35672:
                    return ye;
                case 35669:
                case 35673:
                    return be;
                case 5125:
                    return Me;
                case 36294:
                    return Se;
                case 36295:
                    return we;
                case 36296:
                    return Te;
                case 35678:
                case 36198:
                case 36298:
                case 36306:
                case 35682:
                    return Ee;
                case 35679:
                case 36299:
                case 36307:
                    return Ae;
                case 35680:
                case 36300:
                case 36308:
                case 36293:
                    return Le;
                case 36289:
                case 36303:
                case 36311:
                case 36292:
                    return Re
                }
            }(e.type)
        }
        function De(t) {
            this.id = t,
            this.seq = [],
            this.map = {}
        }
        Pe.prototype.updateCache = function(t) {
            const e = this.cache;
            t instanceof Float32Array && e.length !== t.length && (this.cache = new Float32Array(t.length)),
            Wt(e, t)
        }
        ,
        De.prototype.setValue = function(t, e, n) {
            const i = this.seq;
            for (let r = 0, a = i.length; r !== a; ++r) {
                const a = i[r];
                a.setValue(t, e[a.id], n)
            }
        }
        ;
        const Ne = /(\w+)(\])?(\[|\.)?/g;
        function Ie(t, e) {
            t.seq.push(e),
            t.map[e.id] = e
        }
        function Ue(t, e, n) {
            const i = t.name
              , r = i.length;
            for (Ne.lastIndex = 0; ; ) {
                const a = Ne.exec(i)
                  , s = Ne.lastIndex;
                let o = a[1];
                const l = "]" === a[2]
                  , c = a[3];
                if (l && (o |= 0),
                void 0 === c || "[" === c && s + 2 === r) {
                    Ie(n, void 0 === c ? new Ce(o,t,e) : new Pe(o,t,e));
                    break
                }
                {
                    let t = n.map[o];
                    void 0 === t && (t = new De(o),
                    Ie(n, t)),
                    n = t
                }
            }
        }
        function Fe(t, e) {
            this.seq = [],
            this.map = {};
            const n = t.getProgramParameter(e, t.ACTIVE_UNIFORMS);
            for (let i = 0; i < n; ++i) {
                const n = t.getActiveUniform(e, i);
                Ue(n, t.getUniformLocation(e, n.name), this)
            }
        }
        function Oe(t, e, n) {
            const i = t.createShader(e);
            return t.shaderSource(i, n),
            t.compileShader(i),
            i
        }
        Fe.prototype.setValue = function(t, e, n, i) {
            const r = this.map[e];
            void 0 !== r && r.setValue(t, n, i)
        }
        ,
        Fe.prototype.setOptional = function(t, e, n) {
            const i = e[n];
            void 0 !== i && this.setValue(t, n, i)
        }
        ,
        Fe.upload = function(t, e, n, i) {
            for (let r = 0, a = e.length; r !== a; ++r) {
                const a = e[r]
                  , s = n[a.id];
                !1 !== s.needsUpdate && a.setValue(t, s.value, i)
            }
        }
        ,
        Fe.seqWithValue = function(t, e) {
            const n = [];
            for (let i = 0, r = t.length; i !== r; ++i) {
                const r = t[i];
                r.id in e && n.push(r)
            }
            return n
        }
        ;
        let ze = 0;
        function Be(t) {
            switch (t) {
            case i.rnI:
                return ["Linear", "( value )"];
            case i.knz:
                return ["sRGB", "( value )"];
            default:
                return console.warn("THREE.WebGLProgram: Unsupported encoding:", t),
                ["Linear", "( value )"]
            }
        }
        function Ge(t, e, n) {
            const i = t.getShaderParameter(e, t.COMPILE_STATUS)
              , r = t.getShaderInfoLog(e).trim();
            return i && "" === r ? "" : n.toUpperCase() + "\n\n" + r + "\n\n" + function(t) {
                const e = t.split("\n");
                for (let t = 0; t < e.length; t++)
                    e[t] = t + 1 + ": " + e[t];
                return e.join("\n")
            }(t.getShaderSource(e))
        }
        function He(t, e) {
            const n = Be(e);
            return "vec4 " + t + "( vec4 value ) { return " + n[0] + "ToLinear" + n[1] + "; }"
        }
        function ke(t, e) {
            const n = Be(e);
            return "vec4 " + t + "( vec4 value ) { return LinearTo" + n[0] + n[1] + "; }"
        }
        function Ve(t, e) {
            let n;
            switch (e) {
            case i.EoG:
                n = "Linear";
                break;
            case i.CdI:
                n = "Reinhard";
                break;
            case i.YGz:
                n = "OptimizedCineon";
                break;
            case i.LY2:
                n = "ACESFilmic";
                break;
            case i.dZ3:
                n = "Custom";
                break;
            default:
                console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e),
                n = "Linear"
            }
            return "vec3 " + t + "( vec3 color ) { return " + n + "ToneMapping( color ); }"
        }
        function We(t) {
            return "" !== t
        }
        function Xe(t, e) {
            return t.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows)
        }
        function qe(t, e) {
            return t.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection)
        }
        const je = /^[ \t]*#include +<([\w\d./]+)>/gm;
        function Ye(t) {
            return t.replace(je, Ze)
        }
        function Ze(t, e) {
            const n = R[e];
            if (void 0 === n)
                throw new Error("Can not resolve #include <" + e + ">");
            return Ye(n)
        }
        const Ke = /#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g
          , Je = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
        function Qe(t) {
            return t.replace(Je, tn).replace(Ke, $e)
        }
        function $e(t, e, n, i) {
            return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),
            tn(0, e, n, i)
        }
        function tn(t, e, n, i) {
            let r = "";
            for (let t = parseInt(e); t < parseInt(n); t++)
                r += i.replace(/\[\s*i\s*\]/g, "[ " + t + " ]").replace(/UNROLLED_LOOP_INDEX/g, t);
            return r
        }
        function en(t) {
            let e = "precision " + t.precision + " float;\nprecision " + t.precision + " int;";
            return "highp" === t.precision ? e += "\n#define HIGH_PRECISION" : "mediump" === t.precision ? e += "\n#define MEDIUM_PRECISION" : "lowp" === t.precision && (e += "\n#define LOW_PRECISION"),
            e
        }
        function nn(t, e, n, r) {
            const a = t.getContext()
              , s = n.defines;
            let o = n.vertexShader
              , l = n.fragmentShader;
            const c = function(t) {
                let e = "SHADOWMAP_TYPE_BASIC";
                return t.shadowMapType === i._iA ? e = "SHADOWMAP_TYPE_PCF" : t.shadowMapType === i.ntZ ? e = "SHADOWMAP_TYPE_PCF_SOFT" : t.shadowMapType === i.dwk && (e = "SHADOWMAP_TYPE_VSM"),
                e
            }(n)
              , u = function(t) {
                let e = "ENVMAP_TYPE_CUBE";
                if (t.envMap)
                    switch (t.envMapMode) {
                    case i.fY$:
                    case i.vxC:
                        e = "ENVMAP_TYPE_CUBE";
                        break;
                    case i.g8_:
                    case i.SVc:
                        e = "ENVMAP_TYPE_CUBE_UV"
                    }
                return e
            }(n)
              , h = function(t) {
                let e = "ENVMAP_MODE_REFLECTION";
                if (t.envMap)
                    switch (t.envMapMode) {
                    case i.vxC:
                    case i.SVc:
                        e = "ENVMAP_MODE_REFRACTION"
                    }
                return e
            }(n)
              , d = function(t) {
                let e = "ENVMAP_BLENDING_NONE";
                if (t.envMap)
                    switch (t.combine) {
                    case i.Ns1:
                        e = "ENVMAP_BLENDING_MULTIPLY";
                        break;
                    case i.qhX:
                        e = "ENVMAP_BLENDING_MIX";
                        break;
                    case i.NDo:
                        e = "ENVMAP_BLENDING_ADD"
                    }
                return e
            }(n)
              , p = n.isWebGL2 ? "" : function(t) {
                return [t.extensionDerivatives || t.envMapCubeUV || t.bumpMap || t.tangentSpaceNormalMap || t.clearcoatNormalMap || t.flatShading || "physical" === t.shaderID ? "#extension GL_OES_standard_derivatives : enable" : "", (t.extensionFragDepth || t.logarithmicDepthBuffer) && t.rendererExtensionFragDepth ? "#extension GL_EXT_frag_depth : enable" : "", t.extensionDrawBuffers && t.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "", (t.extensionShaderTextureLOD || t.envMap || t.transmission) && t.rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : ""].filter(We).join("\n")
            }(n)
              , m = function(t) {
                const e = [];
                for (const n in t) {
                    const i = t[n];
                    !1 !== i && e.push("#define " + n + " " + i)
                }
                return e.join("\n")
            }(s)
              , f = a.createProgram();
            let g, _, v = n.glslVersion ? "#version " + n.glslVersion + "\n" : "";
            n.isRawShaderMaterial ? (g = [m].filter(We).join("\n"),
            g.length > 0 && (g += "\n"),
            _ = [p, m].filter(We).join("\n"),
            _.length > 0 && (_ += "\n")) : (g = [en(n), "#define SHADER_NAME " + n.shaderName, m, n.instancing ? "#define USE_INSTANCING" : "", n.instancingColor ? "#define USE_INSTANCING_COLOR" : "", n.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "", "#define MAX_BONES " + n.maxBones, n.useFog && n.fog ? "#define USE_FOG" : "", n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "", n.map ? "#define USE_MAP" : "", n.envMap ? "#define USE_ENVMAP" : "", n.envMap ? "#define " + h : "", n.lightMap ? "#define USE_LIGHTMAP" : "", n.aoMap ? "#define USE_AOMAP" : "", n.emissiveMap ? "#define USE_EMISSIVEMAP" : "", n.bumpMap ? "#define USE_BUMPMAP" : "", n.normalMap ? "#define USE_NORMALMAP" : "", n.normalMap && n.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", n.normalMap && n.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "", n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", n.displacementMap && n.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "", n.specularMap ? "#define USE_SPECULARMAP" : "", n.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "", n.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "", n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", n.metalnessMap ? "#define USE_METALNESSMAP" : "", n.alphaMap ? "#define USE_ALPHAMAP" : "", n.transmission ? "#define USE_TRANSMISSION" : "", n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", n.thicknessMap ? "#define USE_THICKNESSMAP" : "", n.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "", n.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "", n.vertexTangents ? "#define USE_TANGENT" : "", n.vertexColors ? "#define USE_COLOR" : "", n.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", n.vertexUvs ? "#define USE_UV" : "", n.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "", n.flatShading ? "#define FLAT_SHADED" : "", n.skinning ? "#define USE_SKINNING" : "", n.useVertexTexture ? "#define BONE_TEXTURE" : "", n.morphTargets ? "#define USE_MORPHTARGETS" : "", n.morphNormals && !1 === n.flatShading ? "#define USE_MORPHNORMALS" : "", n.morphTargets && n.isWebGL2 ? "#define MORPHTARGETS_TEXTURE" : "", n.morphTargets && n.isWebGL2 ? "#define MORPHTARGETS_COUNT " + n.morphTargetsCount : "", n.doubleSided ? "#define DOUBLE_SIDED" : "", n.flipSided ? "#define FLIP_SIDED" : "", n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", n.shadowMapEnabled ? "#define " + c : "", n.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", n.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", n.logarithmicDepthBuffer && n.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", "#ifdef USE_INSTANCING", "\tattribute mat4 instanceMatrix;", "#endif", "#ifdef USE_INSTANCING_COLOR", "\tattribute vec3 instanceColor;", "#endif", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_TANGENT", "\tattribute vec4 tangent;", "#endif", "#if defined( USE_COLOR_ALPHA )", "\tattribute vec4 color;", "#elif defined( USE_COLOR )", "\tattribute vec3 color;", "#endif", "#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )", "\tattribute vec3 morphTarget0;", "\tattribute vec3 morphTarget1;", "\tattribute vec3 morphTarget2;", "\tattribute vec3 morphTarget3;", "\t#ifdef USE_MORPHNORMALS", "\t\tattribute vec3 morphNormal0;", "\t\tattribute vec3 morphNormal1;", "\t\tattribute vec3 morphNormal2;", "\t\tattribute vec3 morphNormal3;", "\t#else", "\t\tattribute vec3 morphTarget4;", "\t\tattribute vec3 morphTarget5;", "\t\tattribute vec3 morphTarget6;", "\t\tattribute vec3 morphTarget7;", "\t#endif", "#endif", "#ifdef USE_SKINNING", "\tattribute vec4 skinIndex;", "\tattribute vec4 skinWeight;", "#endif", "\n"].filter(We).join("\n"),
            _ = [p, en(n), "#define SHADER_NAME " + n.shaderName, m, n.useFog && n.fog ? "#define USE_FOG" : "", n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "", n.map ? "#define USE_MAP" : "", n.matcap ? "#define USE_MATCAP" : "", n.envMap ? "#define USE_ENVMAP" : "", n.envMap ? "#define " + u : "", n.envMap ? "#define " + h : "", n.envMap ? "#define " + d : "", n.lightMap ? "#define USE_LIGHTMAP" : "", n.aoMap ? "#define USE_AOMAP" : "", n.emissiveMap ? "#define USE_EMISSIVEMAP" : "", n.bumpMap ? "#define USE_BUMPMAP" : "", n.normalMap ? "#define USE_NORMALMAP" : "", n.normalMap && n.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", n.normalMap && n.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "", n.clearcoat ? "#define USE_CLEARCOAT" : "", n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", n.specularMap ? "#define USE_SPECULARMAP" : "", n.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "", n.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "", n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", n.metalnessMap ? "#define USE_METALNESSMAP" : "", n.alphaMap ? "#define USE_ALPHAMAP" : "", n.alphaTest ? "#define USE_ALPHATEST" : "", n.sheen ? "#define USE_SHEEN" : "", n.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "", n.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "", n.transmission ? "#define USE_TRANSMISSION" : "", n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", n.thicknessMap ? "#define USE_THICKNESSMAP" : "", n.vertexTangents ? "#define USE_TANGENT" : "", n.vertexColors || n.instancingColor ? "#define USE_COLOR" : "", n.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", n.vertexUvs ? "#define USE_UV" : "", n.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "", n.gradientMap ? "#define USE_GRADIENTMAP" : "", n.flatShading ? "#define FLAT_SHADED" : "", n.doubleSided ? "#define DOUBLE_SIDED" : "", n.flipSided ? "#define FLIP_SIDED" : "", n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", n.shadowMapEnabled ? "#define " + c : "", n.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", n.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "", n.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", n.logarithmicDepthBuffer && n.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "", (n.extensionShaderTextureLOD || n.envMap) && n.rendererExtensionShaderTextureLod ? "#define TEXTURE_LOD_EXT" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", n.toneMapping !== i.uL9 ? "#define TONE_MAPPING" : "", n.toneMapping !== i.uL9 ? R.tonemapping_pars_fragment : "", n.toneMapping !== i.uL9 ? Ve("toneMapping", n.toneMapping) : "", n.dithering ? "#define DITHERING" : "", n.format === i.UCm ? "#define OPAQUE" : "", R.encodings_pars_fragment, n.map ? He("mapTexelToLinear", n.mapEncoding) : "", n.matcap ? He("matcapTexelToLinear", n.matcapEncoding) : "", n.envMap ? He("envMapTexelToLinear", n.envMapEncoding) : "", n.emissiveMap ? He("emissiveMapTexelToLinear", n.emissiveMapEncoding) : "", n.specularColorMap ? He("specularColorMapTexelToLinear", n.specularColorMapEncoding) : "", n.sheenColorMap ? He("sheenColorMapTexelToLinear", n.sheenColorMapEncoding) : "", n.lightMap ? He("lightMapTexelToLinear", n.lightMapEncoding) : "", ke("linearToOutputTexel", n.outputEncoding), n.depthPacking ? "#define DEPTH_PACKING " + n.depthPacking : "", "\n"].filter(We).join("\n")),
            o = Ye(o),
            o = Xe(o, n),
            o = qe(o, n),
            l = Ye(l),
            l = Xe(l, n),
            l = qe(l, n),
            o = Qe(o),
            l = Qe(l),
            n.isWebGL2 && !0 !== n.isRawShaderMaterial && (v = "#version 300 es\n",
            g = ["precision mediump sampler2DArray;", "#define attribute in", "#define varying out", "#define texture2D texture"].join("\n") + "\n" + g,
            _ = ["#define varying in", n.glslVersion === i.LSk ? "" : "layout(location = 0) out highp vec4 pc_fragColor;", n.glslVersion === i.LSk ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join("\n") + "\n" + _);
            const x = v + g + o
              , y = v + _ + l
              , b = Oe(a, a.VERTEX_SHADER, x)
              , M = Oe(a, a.FRAGMENT_SHADER, y);
            if (a.attachShader(f, b),
            a.attachShader(f, M),
            void 0 !== n.index0AttributeName ? a.bindAttribLocation(f, 0, n.index0AttributeName) : !0 === n.morphTargets && a.bindAttribLocation(f, 0, "position"),
            a.linkProgram(f),
            t.debug.checkShaderErrors) {
                const t = a.getProgramInfoLog(f).trim()
                  , e = a.getShaderInfoLog(b).trim()
                  , n = a.getShaderInfoLog(M).trim();
                let i = !0
                  , r = !0;
                if (!1 === a.getProgramParameter(f, a.LINK_STATUS)) {
                    i = !1;
                    const e = Ge(a, b, "vertex")
                      , n = Ge(a, M, "fragment");
                    console.error("THREE.WebGLProgram: Shader Error " + a.getError() + " - VALIDATE_STATUS " + a.getProgramParameter(f, a.VALIDATE_STATUS) + "\n\nProgram Info Log: " + t + "\n" + e + "\n" + n)
                } else
                    "" !== t ? console.warn("THREE.WebGLProgram: Program Info Log:", t) : "" !== e && "" !== n || (r = !1);
                r && (this.diagnostics = {
                    runnable: i,
                    programLog: t,
                    vertexShader: {
                        log: e,
                        prefix: g
                    },
                    fragmentShader: {
                        log: n,
                        prefix: _
                    }
                })
            }
            let S, w;
            return a.deleteShader(b),
            a.deleteShader(M),
            this.getUniforms = function() {
                return void 0 === S && (S = new Fe(a,f)),
                S
            }
            ,
            this.getAttributes = function() {
                return void 0 === w && (w = function(t, e) {
                    const n = {}
                      , i = t.getProgramParameter(e, t.ACTIVE_ATTRIBUTES);
                    for (let r = 0; r < i; r++) {
                        const i = t.getActiveAttrib(e, r)
                          , a = i.name;
                        let s = 1;
                        i.type === t.FLOAT_MAT2 && (s = 2),
                        i.type === t.FLOAT_MAT3 && (s = 3),
                        i.type === t.FLOAT_MAT4 && (s = 4),
                        n[a] = {
                            type: i.type,
                            location: t.getAttribLocation(e, a),
                            locationSize: s
                        }
                    }
                    return n
                }(a, f)),
                w
            }
            ,
            this.destroy = function() {
                r.releaseStatesOfProgram(this),
                a.deleteProgram(f),
                this.program = void 0
            }
            ,
            this.name = n.shaderName,
            this.id = ze++,
            this.cacheKey = e,
            this.usedTimes = 1,
            this.program = f,
            this.vertexShader = b,
            this.fragmentShader = M,
            this
        }
        let rn = 0;
        class an {
            constructor() {
                this.shaderCache = new Map,
                this.materialCache = new Map
            }
            update(t) {
                const e = t.vertexShader
                  , n = t.fragmentShader
                  , i = this._getShaderStage(e)
                  , r = this._getShaderStage(n)
                  , a = this._getShaderCacheForMaterial(t);
                return !1 === a.has(i) && (a.add(i),
                i.usedTimes++),
                !1 === a.has(r) && (a.add(r),
                r.usedTimes++),
                this
            }
            remove(t) {
                const e = this.materialCache.get(t);
                for (const t of e)
                    t.usedTimes--,
                    0 === t.usedTimes && this.shaderCache.delete(t);
                return this.materialCache.delete(t),
                this
            }
            getVertexShaderID(t) {
                return this._getShaderStage(t.vertexShader).id
            }
            getFragmentShaderID(t) {
                return this._getShaderStage(t.fragmentShader).id
            }
            dispose() {
                this.shaderCache.clear(),
                this.materialCache.clear()
            }
            _getShaderCacheForMaterial(t) {
                const e = this.materialCache;
                return !1 === e.has(t) && e.set(t, new Set),
                e.get(t)
            }
            _getShaderStage(t) {
                const e = this.shaderCache;
                if (!1 === e.has(t)) {
                    const n = new sn;
                    e.set(t, n)
                }
                return e.get(t)
            }
        }
        class sn {
            constructor() {
                this.id = rn++,
                this.usedTimes = 0
            }
        }
        function on(t, e, n, r, a, s, o) {
            const l = new Pt.S
              , c = new an
              , u = []
              , h = a.isWebGL2
              , d = a.logarithmicDepthBuffer
              , p = a.floatVertexTextures
              , m = a.maxVertexUniforms
              , f = a.vertexTextures;
            let g = a.precision;
            const _ = {
                MeshDepthMaterial: "depth",
                MeshDistanceMaterial: "distanceRGBA",
                MeshNormalMaterial: "normal",
                MeshBasicMaterial: "basic",
                MeshLambertMaterial: "lambert",
                MeshPhongMaterial: "phong",
                MeshToonMaterial: "toon",
                MeshStandardMaterial: "physical",
                MeshPhysicalMaterial: "physical",
                MeshMatcapMaterial: "matcap",
                LineBasicMaterial: "basic",
                LineDashedMaterial: "dashed",
                PointsMaterial: "points",
                ShadowMaterial: "shadow",
                SpriteMaterial: "sprite"
            };
            function v(t) {
                let e;
                return t && t.isTexture ? e = t.encoding : t && t.isWebGLRenderTarget ? (console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),
                e = t.texture.encoding) : e = i.rnI,
                h && t && t.isTexture && t.format === i.wk1 && t.type === i.ywz && t.encoding === i.knz && (e = i.rnI),
                e
            }
            return {
                getParameters: function(s, l, u, x, y) {
                    const b = x.fog
                      , M = s.isMeshStandardMaterial ? x.environment : null
                      , S = (s.isMeshStandardMaterial ? n : e).get(s.envMap || M)
                      , w = _[s.type]
                      , T = y.isSkinnedMesh ? function(t) {
                        const e = t.skeleton.bones;
                        if (p)
                            return 1024;
                        {
                            const t = m
                              , n = Math.floor((t - 20) / 4)
                              , i = Math.min(n, e.length);
                            return i < e.length ? (console.warn("THREE.WebGLRenderer: Skeleton has " + e.length + " bones. This GPU supports " + i + "."),
                            0) : i
                        }
                    }(y) : 0;
                    let E, A, L, R;
                    if (null !== s.precision && (g = a.getMaxPrecision(s.precision),
                    g !== s.precision && console.warn("THREE.WebGLProgram.getParameters:", s.precision, "not supported, using", g, "instead.")),
                    w) {
                        const t = D[w];
                        E = t.vertexShader,
                        A = t.fragmentShader
                    } else
                        E = s.vertexShader,
                        A = s.fragmentShader,
                        c.update(s),
                        L = c.getVertexShaderID(s),
                        R = c.getFragmentShaderID(s);
                    const C = t.getRenderTarget()
                      , P = s.alphaTest > 0
                      , N = s.clearcoat > 0;
                    return {
                        isWebGL2: h,
                        shaderID: w,
                        shaderName: s.type,
                        vertexShader: E,
                        fragmentShader: A,
                        defines: s.defines,
                        customVertexShaderID: L,
                        customFragmentShaderID: R,
                        isRawShaderMaterial: !0 === s.isRawShaderMaterial,
                        glslVersion: s.glslVersion,
                        precision: g,
                        instancing: !0 === y.isInstancedMesh,
                        instancingColor: !0 === y.isInstancedMesh && null !== y.instanceColor,
                        supportsVertexTextures: f,
                        outputEncoding: null !== C ? v(C.texture) : t.outputEncoding,
                        map: !!s.map,
                        mapEncoding: v(s.map),
                        matcap: !!s.matcap,
                        matcapEncoding: v(s.matcap),
                        envMap: !!S,
                        envMapMode: S && S.mapping,
                        envMapEncoding: v(S),
                        envMapCubeUV: !!S && (S.mapping === i.g8_ || S.mapping === i.SVc),
                        lightMap: !!s.lightMap,
                        lightMapEncoding: v(s.lightMap),
                        aoMap: !!s.aoMap,
                        emissiveMap: !!s.emissiveMap,
                        emissiveMapEncoding: v(s.emissiveMap),
                        bumpMap: !!s.bumpMap,
                        normalMap: !!s.normalMap,
                        objectSpaceNormalMap: s.normalMapType === i.PA7,
                        tangentSpaceNormalMap: s.normalMapType === i.IOt,
                        clearcoat: N,
                        clearcoatMap: N && !!s.clearcoatMap,
                        clearcoatRoughnessMap: N && !!s.clearcoatRoughnessMap,
                        clearcoatNormalMap: N && !!s.clearcoatNormalMap,
                        displacementMap: !!s.displacementMap,
                        roughnessMap: !!s.roughnessMap,
                        metalnessMap: !!s.metalnessMap,
                        specularMap: !!s.specularMap,
                        specularIntensityMap: !!s.specularIntensityMap,
                        specularColorMap: !!s.specularColorMap,
                        specularColorMapEncoding: v(s.specularColorMap),
                        alphaMap: !!s.alphaMap,
                        alphaTest: P,
                        gradientMap: !!s.gradientMap,
                        sheen: s.sheen > 0,
                        sheenColorMap: !!s.sheenColorMap,
                        sheenColorMapEncoding: v(s.sheenColorMap),
                        sheenRoughnessMap: !!s.sheenRoughnessMap,
                        transmission: s.transmission > 0,
                        transmissionMap: !!s.transmissionMap,
                        thicknessMap: !!s.thicknessMap,
                        combine: s.combine,
                        vertexTangents: !!s.normalMap && !!y.geometry && !!y.geometry.attributes.tangent,
                        vertexColors: s.vertexColors,
                        vertexAlphas: !0 === s.vertexColors && !!y.geometry && !!y.geometry.attributes.color && 4 === y.geometry.attributes.color.itemSize,
                        vertexUvs: !!(s.map || s.bumpMap || s.normalMap || s.specularMap || s.alphaMap || s.emissiveMap || s.roughnessMap || s.metalnessMap || s.clearcoatMap || s.clearcoatRoughnessMap || s.clearcoatNormalMap || s.displacementMap || s.transmissionMap || s.thicknessMap || s.specularIntensityMap || s.specularColorMap || s.sheenColorMap || s.sheenRoughnessMap),
                        uvsVertexOnly: !(s.map || s.bumpMap || s.normalMap || s.specularMap || s.alphaMap || s.emissiveMap || s.roughnessMap || s.metalnessMap || s.clearcoatNormalMap || s.transmission > 0 || s.transmissionMap || s.thicknessMap || s.specularIntensityMap || s.specularColorMap || s.sheen > 0 || s.sheenColorMap || s.sheenRoughnessMap || !s.displacementMap),
                        fog: !!b,
                        useFog: s.fog,
                        fogExp2: b && b.isFogExp2,
                        flatShading: !!s.flatShading,
                        sizeAttenuation: s.sizeAttenuation,
                        logarithmicDepthBuffer: d,
                        skinning: !0 === y.isSkinnedMesh && T > 0,
                        maxBones: T,
                        useVertexTexture: p,
                        morphTargets: !!y.geometry && !!y.geometry.morphAttributes.position,
                        morphNormals: !!y.geometry && !!y.geometry.morphAttributes.normal,
                        morphTargetsCount: y.geometry && y.geometry.morphAttributes.position ? y.geometry.morphAttributes.position.length : 0,
                        numDirLights: l.directional.length,
                        numPointLights: l.point.length,
                        numSpotLights: l.spot.length,
                        numRectAreaLights: l.rectArea.length,
                        numHemiLights: l.hemi.length,
                        numDirLightShadows: l.directionalShadowMap.length,
                        numPointLightShadows: l.pointShadowMap.length,
                        numSpotLightShadows: l.spotShadowMap.length,
                        numClippingPlanes: o.numPlanes,
                        numClipIntersection: o.numIntersection,
                        format: s.format,
                        dithering: s.dithering,
                        shadowMapEnabled: t.shadowMap.enabled && u.length > 0,
                        shadowMapType: t.shadowMap.type,
                        toneMapping: s.toneMapped ? t.toneMapping : i.uL9,
                        physicallyCorrectLights: t.physicallyCorrectLights,
                        premultipliedAlpha: s.premultipliedAlpha,
                        doubleSided: s.side === i.ehD,
                        flipSided: s.side === i._Li,
                        depthPacking: void 0 !== s.depthPacking && s.depthPacking,
                        index0AttributeName: s.index0AttributeName,
                        extensionDerivatives: s.extensions && s.extensions.derivatives,
                        extensionFragDepth: s.extensions && s.extensions.fragDepth,
                        extensionDrawBuffers: s.extensions && s.extensions.drawBuffers,
                        extensionShaderTextureLOD: s.extensions && s.extensions.shaderTextureLOD,
                        rendererExtensionFragDepth: h || r.has("EXT_frag_depth"),
                        rendererExtensionDrawBuffers: h || r.has("WEBGL_draw_buffers"),
                        rendererExtensionShaderTextureLod: h || r.has("EXT_shader_texture_lod"),
                        customProgramCacheKey: s.customProgramCacheKey()
                    }
                },
                getProgramCacheKey: function(e) {
                    const n = [];
                    if (e.shaderID ? n.push(e.shaderID) : (n.push(e.customVertexShaderID),
                    n.push(e.customFragmentShaderID)),
                    void 0 !== e.defines)
                        for (const t in e.defines)
                            n.push(t),
                            n.push(e.defines[t]);
                    return !1 === e.isRawShaderMaterial && (function(t, e) {
                        t.push(e.precision),
                        t.push(e.outputEncoding),
                        t.push(e.mapEncoding),
                        t.push(e.matcapEncoding),
                        t.push(e.envMapMode),
                        t.push(e.envMapEncoding),
                        t.push(e.lightMapEncoding),
                        t.push(e.emissiveMapEncoding),
                        t.push(e.combine),
                        t.push(e.vertexUvs),
                        t.push(e.fogExp2),
                        t.push(e.sizeAttenuation),
                        t.push(e.maxBones),
                        t.push(e.morphTargetsCount),
                        t.push(e.numDirLights),
                        t.push(e.numPointLights),
                        t.push(e.numSpotLights),
                        t.push(e.numHemiLights),
                        t.push(e.numRectAreaLights),
                        t.push(e.numDirLightShadows),
                        t.push(e.numPointLightShadows),
                        t.push(e.numSpotLightShadows),
                        t.push(e.shadowMapType),
                        t.push(e.toneMapping),
                        t.push(e.numClippingPlanes),
                        t.push(e.numClipIntersection),
                        t.push(e.format),
                        t.push(e.specularColorMapEncoding),
                        t.push(e.sheenColorMapEncoding)
                    }(n, e),
                    function(t, e) {
                        l.disableAll(),
                        e.isWebGL2 && l.enable(0),
                        e.supportsVertexTextures && l.enable(1),
                        e.instancing && l.enable(2),
                        e.instancingColor && l.enable(3),
                        e.map && l.enable(4),
                        e.matcap && l.enable(5),
                        e.envMap && l.enable(6),
                        e.envMapCubeUV && l.enable(7),
                        e.lightMap && l.enable(8),
                        e.aoMap && l.enable(9),
                        e.emissiveMap && l.enable(10),
                        e.bumpMap && l.enable(11),
                        e.normalMap && l.enable(12),
                        e.objectSpaceNormalMap && l.enable(13),
                        e.tangentSpaceNormalMap && l.enable(14),
                        e.clearcoat && l.enable(15),
                        e.clearcoatMap && l.enable(16),
                        e.clearcoatRoughnessMap && l.enable(17),
                        e.clearcoatNormalMap && l.enable(18),
                        e.displacementMap && l.enable(19),
                        e.specularMap && l.enable(20),
                        e.roughnessMap && l.enable(21),
                        e.metalnessMap && l.enable(22),
                        e.gradientMap && l.enable(23),
                        e.alphaMap && l.enable(24),
                        e.alphaTest && l.enable(25),
                        e.vertexColors && l.enable(26),
                        e.vertexAlphas && l.enable(27),
                        e.vertexUvs && l.enable(28),
                        e.vertexTangents && l.enable(29),
                        e.uvsVertexOnly && l.enable(30),
                        e.fog && l.enable(31),
                        t.push(l.mask),
                        l.disableAll(),
                        e.useFog && l.enable(0),
                        e.flatShading && l.enable(1),
                        e.logarithmicDepthBuffer && l.enable(2),
                        e.skinning && l.enable(3),
                        e.useVertexTexture && l.enable(4),
                        e.morphTargets && l.enable(5),
                        e.morphNormals && l.enable(6),
                        e.premultipliedAlpha && l.enable(7),
                        e.shadowMapEnabled && l.enable(8),
                        e.physicallyCorrectLights && l.enable(9),
                        e.doubleSided && l.enable(10),
                        e.flipSided && l.enable(11),
                        e.depthPacking && l.enable(12),
                        e.dithering && l.enable(13),
                        e.specularIntensityMap && l.enable(14),
                        e.specularColorMap && l.enable(15),
                        e.transmission && l.enable(16),
                        e.transmissionMap && l.enable(17),
                        e.thicknessMap && l.enable(18),
                        e.sheen && l.enable(19),
                        e.sheenColorMap && l.enable(20),
                        e.sheenRoughnessMap && l.enable(21),
                        t.push(l.mask)
                    }(n, e),
                    n.push(t.outputEncoding)),
                    n.push(e.customProgramCacheKey),
                    n.join()
                },
                getUniforms: function(t) {
                    const e = _[t.type];
                    let n;
                    if (e) {
                        const t = D[e];
                        n = T.clone(t.uniforms)
                    } else
                        n = t.uniforms;
                    return n
                },
                acquireProgram: function(e, n) {
                    let i;
                    for (let t = 0, e = u.length; t < e; t++) {
                        const e = u[t];
                        if (e.cacheKey === n) {
                            i = e,
                            ++i.usedTimes;
                            break
                        }
                    }
                    return void 0 === i && (i = new nn(t,n,e,s),
                    u.push(i)),
                    i
                },
                releaseProgram: function(t) {
                    if (0 == --t.usedTimes) {
                        const e = u.indexOf(t);
                        u[e] = u[u.length - 1],
                        u.pop(),
                        t.destroy()
                    }
                },
                releaseShaderCache: function(t) {
                    c.remove(t)
                },
                programs: u,
                dispose: function() {
                    c.dispose()
                }
            }
        }
        function ln() {
            let t = new WeakMap;
            return {
                get: function(e) {
                    let n = t.get(e);
                    return void 0 === n && (n = {},
                    t.set(e, n)),
                    n
                },
                remove: function(e) {
                    t.delete(e)
                },
                update: function(e, n, i) {
                    t.get(e)[n] = i
                },
                dispose: function() {
                    t = new WeakMap
                }
            }
        }
        function cn(t, e) {
            return t.groupOrder !== e.groupOrder ? t.groupOrder - e.groupOrder : t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.material.id !== e.material.id ? t.material.id - e.material.id : t.z !== e.z ? t.z - e.z : t.id - e.id
        }
        function un(t, e) {
            return t.groupOrder !== e.groupOrder ? t.groupOrder - e.groupOrder : t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.z !== e.z ? e.z - t.z : t.id - e.id
        }
        function hn() {
            const t = [];
            let e = 0;
            const n = []
              , i = []
              , r = [];
            function a(n, i, r, a, s, o) {
                let l = t[e];
                return void 0 === l ? (l = {
                    id: n.id,
                    object: n,
                    geometry: i,
                    material: r,
                    groupOrder: a,
                    renderOrder: n.renderOrder,
                    z: s,
                    group: o
                },
                t[e] = l) : (l.id = n.id,
                l.object = n,
                l.geometry = i,
                l.material = r,
                l.groupOrder = a,
                l.renderOrder = n.renderOrder,
                l.z = s,
                l.group = o),
                e++,
                l
            }
            return {
                opaque: n,
                transmissive: i,
                transparent: r,
                init: function() {
                    e = 0,
                    n.length = 0,
                    i.length = 0,
                    r.length = 0
                },
                push: function(t, e, s, o, l, c) {
                    const u = a(t, e, s, o, l, c);
                    s.transmission > 0 ? i.push(u) : !0 === s.transparent ? r.push(u) : n.push(u)
                },
                unshift: function(t, e, s, o, l, c) {
                    const u = a(t, e, s, o, l, c);
                    s.transmission > 0 ? i.unshift(u) : !0 === s.transparent ? r.unshift(u) : n.unshift(u)
                },
                finish: function() {
                    for (let n = e, i = t.length; n < i; n++) {
                        const e = t[n];
                        if (null === e.id)
                            break;
                        e.id = null,
                        e.object = null,
                        e.geometry = null,
                        e.material = null,
                        e.group = null
                    }
                },
                sort: function(t, e) {
                    n.length > 1 && n.sort(t || cn),
                    i.length > 1 && i.sort(e || un),
                    r.length > 1 && r.sort(e || un)
                }
            }
        }
        function dn() {
            let t = new WeakMap;
            return {
                get: function(e, n) {
                    let i;
                    return !1 === t.has(e) ? (i = new hn,
                    t.set(e, [i])) : n >= t.get(e).length ? (i = new hn,
                    t.get(e).push(i)) : i = t.get(e)[n],
                    i
                },
                dispose: function() {
                    t = new WeakMap
                }
            }
        }
        function pn() {
            const t = {};
            return {
                get: function(e) {
                    if (void 0 !== t[e.id])
                        return t[e.id];
                    let n;
                    switch (e.type) {
                    case "DirectionalLight":
                        n = {
                            direction: new r.P,
                            color: new A.I
                        };
                        break;
                    case "SpotLight":
                        n = {
                            position: new r.P,
                            direction: new r.P,
                            color: new A.I,
                            distance: 0,
                            coneCos: 0,
                            penumbraCos: 0,
                            decay: 0
                        };
                        break;
                    case "PointLight":
                        n = {
                            position: new r.P,
                            color: new A.I,
                            distance: 0,
                            decay: 0
                        };
                        break;
                    case "HemisphereLight":
                        n = {
                            direction: new r.P,
                            skyColor: new A.I,
                            groundColor: new A.I
                        };
                        break;
                    case "RectAreaLight":
                        n = {
                            color: new A.I,
                            position: new r.P,
                            halfWidth: new r.P,
                            halfHeight: new r.P
                        }
                    }
                    return t[e.id] = n,
                    n
                }
            }
        }
        let mn = 0;
        function fn(t, e) {
            return (e.castShadow ? 1 : 0) - (t.castShadow ? 1 : 0)
        }
        function gn(t, e) {
            const n = new pn
              , i = function() {
                const t = {};
                return {
                    get: function(e) {
                        if (void 0 !== t[e.id])
                            return t[e.id];
                        let n;
                        switch (e.type) {
                        case "DirectionalLight":
                        case "SpotLight":
                            n = {
                                shadowBias: 0,
                                shadowNormalBias: 0,
                                shadowRadius: 1,
                                shadowMapSize: new C.F
                            };
                            break;
                        case "PointLight":
                            n = {
                                shadowBias: 0,
                                shadowNormalBias: 0,
                                shadowRadius: 1,
                                shadowMapSize: new C.F,
                                shadowCameraNear: 1,
                                shadowCameraFar: 1e3
                            }
                        }
                        return t[e.id] = n,
                        n
                    }
                }
            }()
              , a = {
                version: 0,
                hash: {
                    directionalLength: -1,
                    pointLength: -1,
                    spotLength: -1,
                    rectAreaLength: -1,
                    hemiLength: -1,
                    numDirectionalShadows: -1,
                    numPointShadows: -1,
                    numSpotShadows: -1
                },
                ambient: [0, 0, 0],
                probe: [],
                directional: [],
                directionalShadow: [],
                directionalShadowMap: [],
                directionalShadowMatrix: [],
                spot: [],
                spotShadow: [],
                spotShadowMap: [],
                spotShadowMatrix: [],
                rectArea: [],
                rectAreaLTC1: null,
                rectAreaLTC2: null,
                point: [],
                pointShadow: [],
                pointShadowMap: [],
                pointShadowMatrix: [],
                hemi: []
            };
            for (let t = 0; t < 9; t++)
                a.probe.push(new r.P);
            const s = new r.P
              , o = new m.y
              , l = new m.y;
            return {
                setup: function(r, s) {
                    let o = 0
                      , l = 0
                      , c = 0;
                    for (let t = 0; t < 9; t++)
                        a.probe[t].set(0, 0, 0);
                    let u = 0
                      , h = 0
                      , d = 0
                      , p = 0
                      , m = 0
                      , f = 0
                      , g = 0
                      , _ = 0;
                    r.sort(fn);
                    const v = !0 !== s ? Math.PI : 1;
                    for (let t = 0, e = r.length; t < e; t++) {
                        const e = r[t]
                          , s = e.color
                          , x = e.intensity
                          , y = e.distance
                          , b = e.shadow && e.shadow.map ? e.shadow.map.texture : null;
                        if (e.isAmbientLight)
                            o += s.r * x * v,
                            l += s.g * x * v,
                            c += s.b * x * v;
                        else if (e.isLightProbe)
                            for (let t = 0; t < 9; t++)
                                a.probe[t].addScaledVector(e.sh.coefficients[t], x);
                        else if (e.isDirectionalLight) {
                            const t = n.get(e);
                            if (t.color.copy(e.color).multiplyScalar(e.intensity * v),
                            e.castShadow) {
                                const t = e.shadow
                                  , n = i.get(e);
                                n.shadowBias = t.bias,
                                n.shadowNormalBias = t.normalBias,
                                n.shadowRadius = t.radius,
                                n.shadowMapSize = t.mapSize,
                                a.directionalShadow[u] = n,
                                a.directionalShadowMap[u] = b,
                                a.directionalShadowMatrix[u] = e.shadow.matrix,
                                f++
                            }
                            a.directional[u] = t,
                            u++
                        } else if (e.isSpotLight) {
                            const t = n.get(e);
                            if (t.position.setFromMatrixPosition(e.matrixWorld),
                            t.color.copy(s).multiplyScalar(x * v),
                            t.distance = y,
                            t.coneCos = Math.cos(e.angle),
                            t.penumbraCos = Math.cos(e.angle * (1 - e.penumbra)),
                            t.decay = e.decay,
                            e.castShadow) {
                                const t = e.shadow
                                  , n = i.get(e);
                                n.shadowBias = t.bias,
                                n.shadowNormalBias = t.normalBias,
                                n.shadowRadius = t.radius,
                                n.shadowMapSize = t.mapSize,
                                a.spotShadow[d] = n,
                                a.spotShadowMap[d] = b,
                                a.spotShadowMatrix[d] = e.shadow.matrix,
                                _++
                            }
                            a.spot[d] = t,
                            d++
                        } else if (e.isRectAreaLight) {
                            const t = n.get(e);
                            t.color.copy(s).multiplyScalar(x),
                            t.halfWidth.set(.5 * e.width, 0, 0),
                            t.halfHeight.set(0, .5 * e.height, 0),
                            a.rectArea[p] = t,
                            p++
                        } else if (e.isPointLight) {
                            const t = n.get(e);
                            if (t.color.copy(e.color).multiplyScalar(e.intensity * v),
                            t.distance = e.distance,
                            t.decay = e.decay,
                            e.castShadow) {
                                const t = e.shadow
                                  , n = i.get(e);
                                n.shadowBias = t.bias,
                                n.shadowNormalBias = t.normalBias,
                                n.shadowRadius = t.radius,
                                n.shadowMapSize = t.mapSize,
                                n.shadowCameraNear = t.camera.near,
                                n.shadowCameraFar = t.camera.far,
                                a.pointShadow[h] = n,
                                a.pointShadowMap[h] = b,
                                a.pointShadowMatrix[h] = e.shadow.matrix,
                                g++
                            }
                            a.point[h] = t,
                            h++
                        } else if (e.isHemisphereLight) {
                            const t = n.get(e);
                            t.skyColor.copy(e.color).multiplyScalar(x * v),
                            t.groundColor.copy(e.groundColor).multiplyScalar(x * v),
                            a.hemi[m] = t,
                            m++
                        }
                    }
                    p > 0 && (e.isWebGL2 || !0 === t.has("OES_texture_float_linear") ? (a.rectAreaLTC1 = P.LTC_FLOAT_1,
                    a.rectAreaLTC2 = P.LTC_FLOAT_2) : !0 === t.has("OES_texture_half_float_linear") ? (a.rectAreaLTC1 = P.LTC_HALF_1,
                    a.rectAreaLTC2 = P.LTC_HALF_2) : console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),
                    a.ambient[0] = o,
                    a.ambient[1] = l,
                    a.ambient[2] = c;
                    const x = a.hash;
                    x.directionalLength === u && x.pointLength === h && x.spotLength === d && x.rectAreaLength === p && x.hemiLength === m && x.numDirectionalShadows === f && x.numPointShadows === g && x.numSpotShadows === _ || (a.directional.length = u,
                    a.spot.length = d,
                    a.rectArea.length = p,
                    a.point.length = h,
                    a.hemi.length = m,
                    a.directionalShadow.length = f,
                    a.directionalShadowMap.length = f,
                    a.pointShadow.length = g,
                    a.pointShadowMap.length = g,
                    a.spotShadow.length = _,
                    a.spotShadowMap.length = _,
                    a.directionalShadowMatrix.length = f,
                    a.pointShadowMatrix.length = g,
                    a.spotShadowMatrix.length = _,
                    x.directionalLength = u,
                    x.pointLength = h,
                    x.spotLength = d,
                    x.rectAreaLength = p,
                    x.hemiLength = m,
                    x.numDirectionalShadows = f,
                    x.numPointShadows = g,
                    x.numSpotShadows = _,
                    a.version = mn++)
                },
                setupView: function(t, e) {
                    let n = 0
                      , i = 0
                      , r = 0
                      , c = 0
                      , u = 0;
                    const h = e.matrixWorldInverse;
                    for (let e = 0, d = t.length; e < d; e++) {
                        const d = t[e];
                        if (d.isDirectionalLight) {
                            const t = a.directional[n];
                            t.direction.setFromMatrixPosition(d.matrixWorld),
                            s.setFromMatrixPosition(d.target.matrixWorld),
                            t.direction.sub(s),
                            t.direction.transformDirection(h),
                            n++
                        } else if (d.isSpotLight) {
                            const t = a.spot[r];
                            t.position.setFromMatrixPosition(d.matrixWorld),
                            t.position.applyMatrix4(h),
                            t.direction.setFromMatrixPosition(d.matrixWorld),
                            s.setFromMatrixPosition(d.target.matrixWorld),
                            t.direction.sub(s),
                            t.direction.transformDirection(h),
                            r++
                        } else if (d.isRectAreaLight) {
                            const t = a.rectArea[c];
                            t.position.setFromMatrixPosition(d.matrixWorld),
                            t.position.applyMatrix4(h),
                            l.identity(),
                            o.copy(d.matrixWorld),
                            o.premultiply(h),
                            l.extractRotation(o),
                            t.halfWidth.set(.5 * d.width, 0, 0),
                            t.halfHeight.set(0, .5 * d.height, 0),
                            t.halfWidth.applyMatrix4(l),
                            t.halfHeight.applyMatrix4(l),
                            c++
                        } else if (d.isPointLight) {
                            const t = a.point[i];
                            t.position.setFromMatrixPosition(d.matrixWorld),
                            t.position.applyMatrix4(h),
                            i++
                        } else if (d.isHemisphereLight) {
                            const t = a.hemi[u];
                            t.direction.setFromMatrixPosition(d.matrixWorld),
                            t.direction.transformDirection(h),
                            t.direction.normalize(),
                            u++
                        }
                    }
                },
                state: a
            }
        }
        function _n(t, e) {
            const n = new gn(t,e)
              , i = []
              , r = [];
            return {
                init: function() {
                    i.length = 0,
                    r.length = 0
                },
                state: {
                    lightsArray: i,
                    shadowsArray: r,
                    lights: n
                },
                setupLights: function(t) {
                    n.setup(i, t)
                },
                setupLightsView: function(t) {
                    n.setupView(i, t)
                },
                pushLight: function(t) {
                    i.push(t)
                },
                pushShadow: function(t) {
                    r.push(t)
                }
            }
        }
        function vn(t, e) {
            let n = new WeakMap;
            return {
                get: function(i, r=0) {
                    let a;
                    return !1 === n.has(i) ? (a = new _n(t,e),
                    n.set(i, [a])) : r >= n.get(i).length ? (a = new _n(t,e),
                    n.get(i).push(a)) : a = n.get(i)[r],
                    a
                },
                dispose: function() {
                    n = new WeakMap
                }
            }
        }
        class xn extends M.F {
            constructor(t) {
                super(),
                this.type = "MeshDepthMaterial",
                this.depthPacking = i.z81,
                this.map = null,
                this.alphaMap = null,
                this.displacementMap = null,
                this.displacementScale = 1,
                this.displacementBias = 0,
                this.wireframe = !1,
                this.wireframeLinewidth = 1,
                this.fog = !1,
                this.setValues(t)
            }
            copy(t) {
                return super.copy(t),
                this.depthPacking = t.depthPacking,
                this.map = t.map,
                this.alphaMap = t.alphaMap,
                this.displacementMap = t.displacementMap,
                this.displacementScale = t.displacementScale,
                this.displacementBias = t.displacementBias,
                this.wireframe = t.wireframe,
                this.wireframeLinewidth = t.wireframeLinewidth,
                this
            }
        }
        xn.prototype.isMeshDepthMaterial = !0;
        class yn extends M.F {
            constructor(t) {
                super(),
                this.type = "MeshDistanceMaterial",
                this.referencePosition = new r.P,
                this.nearDistance = 1,
                this.farDistance = 1e3,
                this.map = null,
                this.alphaMap = null,
                this.displacementMap = null,
                this.displacementScale = 1,
                this.displacementBias = 0,
                this.fog = !1,
                this.setValues(t)
            }
            copy(t) {
                return super.copy(t),
                this.referencePosition.copy(t.referencePosition),
                this.nearDistance = t.nearDistance,
                this.farDistance = t.farDistance,
                this.map = t.map,
                this.alphaMap = t.alphaMap,
                this.displacementMap = t.displacementMap,
                this.displacementScale = t.displacementScale,
                this.displacementBias = t.displacementBias,
                this
            }
        }
        function bn(t, e, n) {
            let r = new p;
            const a = new C.F
              , s = new C.F
              , o = new f.L
              , l = new xn({
                depthPacking: i.mSO
            })
              , c = new yn
              , u = {}
              , h = n.maxTextureSize
              , d = {
                0: i._Li,
                1: i.Wl3,
                2: i.ehD
            }
              , m = new E({
                defines: {
                    VSM_SAMPLES: 8
                },
                uniforms: {
                    shadow_pass: {
                        value: null
                    },
                    resolution: {
                        value: new C.F
                    },
                    radius: {
                        value: 4
                    }
                },
                vertexShader: "\nvoid main() {\n\n\tgl_Position = vec4( position, 1.0 );\n\n}\n",
                fragmentShader: "\nuniform sampler2D shadow_pass;\nuniform vec2 resolution;\nuniform float radius;\n\n#include <packing>\n\nvoid main() {\n\n\tconst float samples = float( VSM_SAMPLES );\n\n\tfloat mean = 0.0;\n\tfloat squared_mean = 0.0;\n\n\t// This seems totally useless but it's a crazy work around for a Adreno compiler bug\n\t// float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy ) / resolution ) );\n\n\tfloat uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );\n\tfloat uvStart = samples <= 1.0 ? 0.0 : - 1.0;\n\tfor ( float i = 0.0; i < samples; i ++ ) {\n\n\t\tfloat uvOffset = uvStart + i * uvStride;\n\n\t\t#ifdef HORIZONTAL_PASS\n\n\t\t\tvec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );\n\t\t\tmean += distribution.x;\n\t\t\tsquared_mean += distribution.y * distribution.y + distribution.x * distribution.x;\n\n\t\t#else\n\n\t\t\tfloat depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );\n\t\t\tmean += depth;\n\t\t\tsquared_mean += depth * depth;\n\n\t\t#endif\n\n\t}\n\n\tmean = mean / samples;\n\tsquared_mean = squared_mean / samples;\n\n\tfloat std_dev = sqrt( squared_mean - mean * mean );\n\n\tgl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );\n\n}\n"
            })
              , g = m.clone();
            g.defines.HORIZONTAL_PASS = 1;
            const _ = new x.u;
            _.setAttribute("position", new y.Tl(new Float32Array([-1, -1, .5, 3, -1, .5, -1, 3, .5]),3));
            const v = new L.K(_,m)
              , b = this;
            function M(n, i) {
                const r = e.update(v);
                m.defines.VSM_SAMPLES !== n.blurSamples && (m.defines.VSM_SAMPLES = n.blurSamples,
                g.defines.VSM_SAMPLES = n.blurSamples,
                m.needsUpdate = !0,
                g.needsUpdate = !0),
                m.uniforms.shadow_pass.value = n.map.texture,
                m.uniforms.resolution.value = n.mapSize,
                m.uniforms.radius.value = n.radius,
                t.setRenderTarget(n.mapPass),
                t.clear(),
                t.renderBufferDirect(i, null, r, m, v, null),
                g.uniforms.shadow_pass.value = n.mapPass.texture,
                g.uniforms.resolution.value = n.mapSize,
                g.uniforms.radius.value = n.radius,
                t.setRenderTarget(n.map),
                t.clear(),
                t.renderBufferDirect(i, null, r, g, v, null)
            }
            function S(e, n, r, a, s, o, h) {
                let p = null;
                const m = !0 === a.isPointLight ? e.customDistanceMaterial : e.customDepthMaterial;
                if (p = void 0 !== m ? m : !0 === a.isPointLight ? c : l,
                t.localClippingEnabled && !0 === r.clipShadows && 0 !== r.clippingPlanes.length || r.displacementMap && 0 !== r.displacementScale || r.alphaMap && r.alphaTest > 0) {
                    const t = p.uuid
                      , e = r.uuid;
                    let n = u[t];
                    void 0 === n && (n = {},
                    u[t] = n);
                    let i = n[e];
                    void 0 === i && (i = p.clone(),
                    n[e] = i),
                    p = i
                }
                return p.visible = r.visible,
                p.wireframe = r.wireframe,
                h === i.dwk ? p.side = null !== r.shadowSide ? r.shadowSide : r.side : p.side = null !== r.shadowSide ? r.shadowSide : d[r.side],
                p.alphaMap = r.alphaMap,
                p.alphaTest = r.alphaTest,
                p.clipShadows = r.clipShadows,
                p.clippingPlanes = r.clippingPlanes,
                p.clipIntersection = r.clipIntersection,
                p.displacementMap = r.displacementMap,
                p.displacementScale = r.displacementScale,
                p.displacementBias = r.displacementBias,
                p.wireframeLinewidth = r.wireframeLinewidth,
                p.linewidth = r.linewidth,
                !0 === a.isPointLight && !0 === p.isMeshDistanceMaterial && (p.referencePosition.setFromMatrixPosition(a.matrixWorld),
                p.nearDistance = s,
                p.farDistance = o),
                p
            }
            function w(n, a, s, o, l) {
                if (!1 === n.visible)
                    return;
                if (n.layers.test(a.layers) && (n.isMesh || n.isLine || n.isPoints) && (n.castShadow || n.receiveShadow && l === i.dwk) && (!n.frustumCulled || r.intersectsObject(n))) {
                    n.modelViewMatrix.multiplyMatrices(s.matrixWorldInverse, n.matrixWorld);
                    const i = e.update(n)
                      , r = n.material;
                    if (Array.isArray(r)) {
                        const e = i.groups;
                        for (let a = 0, c = e.length; a < c; a++) {
                            const c = e[a]
                              , u = r[c.materialIndex];
                            if (u && u.visible) {
                                const e = S(n, 0, u, o, s.near, s.far, l);
                                t.renderBufferDirect(s, null, i, e, n, c)
                            }
                        }
                    } else if (r.visible) {
                        const e = S(n, 0, r, o, s.near, s.far, l);
                        t.renderBufferDirect(s, null, i, e, n, null)
                    }
                }
                const c = n.children;
                for (let t = 0, e = c.length; t < e; t++)
                    w(c[t], a, s, o, l)
            }
            this.enabled = !1,
            this.autoUpdate = !0,
            this.needsUpdate = !1,
            this.type = i._iA,
            this.render = function(e, n, l) {
                if (!1 === b.enabled)
                    return;
                if (!1 === b.autoUpdate && !1 === b.needsUpdate)
                    return;
                if (0 === e.length)
                    return;
                const c = t.getRenderTarget()
                  , u = t.getActiveCubeFace()
                  , d = t.getActiveMipmapLevel()
                  , p = t.state;
                p.setBlending(i.jFi),
                p.buffers.color.setClear(1, 1, 1, 1),
                p.buffers.depth.setTest(!0),
                p.setScissorTest(!1);
                for (let c = 0, u = e.length; c < u; c++) {
                    const u = e[c]
                      , d = u.shadow;
                    if (void 0 === d) {
                        console.warn("THREE.WebGLShadowMap:", u, "has no shadow.");
                        continue
                    }
                    if (!1 === d.autoUpdate && !1 === d.needsUpdate)
                        continue;
                    a.copy(d.mapSize);
                    const m = d.getFrameExtents();
                    if (a.multiply(m),
                    s.copy(d.mapSize),
                    (a.x > h || a.y > h) && (a.x > h && (s.x = Math.floor(h / m.x),
                    a.x = s.x * m.x,
                    d.mapSize.x = s.x),
                    a.y > h && (s.y = Math.floor(h / m.y),
                    a.y = s.y * m.y,
                    d.mapSize.y = s.y)),
                    null === d.map && !d.isPointLightShadow && this.type === i.dwk) {
                        const t = {
                            minFilter: i.wem,
                            magFilter: i.wem,
                            format: i.wk1
                        };
                        d.map = new G(a.x,a.y,t),
                        d.map.texture.name = u.name + ".shadowMap",
                        d.mapPass = new G(a.x,a.y,t),
                        d.camera.updateProjectionMatrix()
                    }
                    if (null === d.map) {
                        const t = {
                            minFilter: i.TyD,
                            magFilter: i.TyD,
                            format: i.wk1
                        };
                        d.map = new G(a.x,a.y,t),
                        d.map.texture.name = u.name + ".shadowMap",
                        d.camera.updateProjectionMatrix()
                    }
                    t.setRenderTarget(d.map),
                    t.clear();
                    const f = d.getViewportCount();
                    for (let t = 0; t < f; t++) {
                        const e = d.getViewport(t);
                        o.set(s.x * e.x, s.y * e.y, s.x * e.z, s.y * e.w),
                        p.viewport(o),
                        d.updateMatrices(u, t),
                        r = d.getFrustum(),
                        w(n, l, d.camera, u, this.type)
                    }
                    d.isPointLightShadow || this.type !== i.dwk || M(d, l),
                    d.needsUpdate = !1
                }
                b.needsUpdate = !1,
                t.setRenderTarget(c, u, d)
            }
        }
        function Mn(t, e, n) {
            const r = n.isWebGL2
              , a = new function() {
                let e = !1;
                const n = new f.L;
                let i = null;
                const r = new f.L(0,0,0,0);
                return {
                    setMask: function(n) {
                        i === n || e || (t.colorMask(n, n, n, n),
                        i = n)
                    },
                    setLocked: function(t) {
                        e = t
                    },
                    setClear: function(e, i, a, s, o) {
                        !0 === o && (e *= s,
                        i *= s,
                        a *= s),
                        n.set(e, i, a, s),
                        !1 === r.equals(n) && (t.clearColor(e, i, a, s),
                        r.copy(n))
                    },
                    reset: function() {
                        e = !1,
                        i = null,
                        r.set(-1, 0, 0, 0)
                    }
                }
            }
              , s = new function() {
                let e = !1
                  , n = null
                  , r = null
                  , a = null;
                return {
                    setTest: function(e) {
                        e ? z(t.DEPTH_TEST) : B(t.DEPTH_TEST)
                    },
                    setMask: function(i) {
                        n === i || e || (t.depthMask(i),
                        n = i)
                    },
                    setFunc: function(e) {
                        if (r !== e) {
                            if (e)
                                switch (e) {
                                case i.BVF:
                                    t.depthFunc(t.NEVER);
                                    break;
                                case i.Se2:
                                    t.depthFunc(t.ALWAYS);
                                    break;
                                case i.Zr5:
                                    t.depthFunc(t.LESS);
                                    break;
                                case i.vCF:
                                    t.depthFunc(t.LEQUAL);
                                    break;
                                case i.eD:
                                    t.depthFunc(t.EQUAL);
                                    break;
                                case i.ksN:
                                    t.depthFunc(t.GEQUAL);
                                    break;
                                case i.w$m:
                                    t.depthFunc(t.GREATER);
                                    break;
                                case i.M6v:
                                    t.depthFunc(t.NOTEQUAL);
                                    break;
                                default:
                                    t.depthFunc(t.LEQUAL)
                                }
                            else
                                t.depthFunc(t.LEQUAL);
                            r = e
                        }
                    },
                    setLocked: function(t) {
                        e = t
                    },
                    setClear: function(e) {
                        a !== e && (t.clearDepth(e),
                        a = e)
                    },
                    reset: function() {
                        e = !1,
                        n = null,
                        r = null,
                        a = null
                    }
                }
            }
              , o = new function() {
                let e = !1
                  , n = null
                  , i = null
                  , r = null
                  , a = null
                  , s = null
                  , o = null
                  , l = null
                  , c = null;
                return {
                    setTest: function(n) {
                        e || (n ? z(t.STENCIL_TEST) : B(t.STENCIL_TEST))
                    },
                    setMask: function(i) {
                        n === i || e || (t.stencilMask(i),
                        n = i)
                    },
                    setFunc: function(e, n, s) {
                        i === e && r === n && a === s || (t.stencilFunc(e, n, s),
                        i = e,
                        r = n,
                        a = s)
                    },
                    setOp: function(e, n, i) {
                        s === e && o === n && l === i || (t.stencilOp(e, n, i),
                        s = e,
                        o = n,
                        l = i)
                    },
                    setLocked: function(t) {
                        e = t
                    },
                    setClear: function(e) {
                        c !== e && (t.clearStencil(e),
                        c = e)
                    },
                    reset: function() {
                        e = !1,
                        n = null,
                        i = null,
                        r = null,
                        a = null,
                        s = null,
                        o = null,
                        l = null,
                        c = null
                    }
                }
            }
            ;
            let l = {}
              , c = {}
              , u = null
              , h = !1
              , d = null
              , p = null
              , m = null
              , g = null
              , _ = null
              , v = null
              , x = null
              , y = !1
              , b = null
              , M = null
              , S = null
              , w = null
              , T = null;
            const E = t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
            let A = !1
              , L = 0;
            const R = t.getParameter(t.VERSION);
            -1 !== R.indexOf("WebGL") ? (L = parseFloat(/^WebGL (\d)/.exec(R)[1]),
            A = L >= 1) : -1 !== R.indexOf("OpenGL ES") && (L = parseFloat(/^OpenGL ES (\d)/.exec(R)[1]),
            A = L >= 2);
            let C = null
              , P = {};
            const D = t.getParameter(t.SCISSOR_BOX)
              , N = t.getParameter(t.VIEWPORT)
              , I = (new f.L).fromArray(D)
              , U = (new f.L).fromArray(N);
            function F(e, n, i) {
                const r = new Uint8Array(4)
                  , a = t.createTexture();
                t.bindTexture(e, a),
                t.texParameteri(e, t.TEXTURE_MIN_FILTER, t.NEAREST),
                t.texParameteri(e, t.TEXTURE_MAG_FILTER, t.NEAREST);
                for (let e = 0; e < i; e++)
                    t.texImage2D(n + e, 0, t.RGBA, 1, 1, 0, t.RGBA, t.UNSIGNED_BYTE, r);
                return a
            }
            const O = {};
            function z(e) {
                !0 !== l[e] && (t.enable(e),
                l[e] = !0)
            }
            function B(e) {
                !1 !== l[e] && (t.disable(e),
                l[e] = !1)
            }
            O[t.TEXTURE_2D] = F(t.TEXTURE_2D, t.TEXTURE_2D, 1),
            O[t.TEXTURE_CUBE_MAP] = F(t.TEXTURE_CUBE_MAP, t.TEXTURE_CUBE_MAP_POSITIVE_X, 6),
            a.setClear(0, 0, 0, 1),
            s.setClear(1),
            o.setClear(0),
            z(t.DEPTH_TEST),
            s.setFunc(i.vCF),
            V(!1),
            W(i.tm_),
            z(t.CULL_FACE),
            k(i.jFi);
            const G = {
                [i.bGH]: t.FUNC_ADD,
                [i.Wbm]: t.FUNC_SUBTRACT,
                [i.rOj]: t.FUNC_REVERSE_SUBTRACT
            };
            if (r)
                G[i.r_] = t.MIN,
                G[i.Sm8] = t.MAX;
            else {
                const t = e.get("EXT_blend_minmax");
                null !== t && (G[i.r_] = t.MIN_EXT,
                G[i.Sm8] = t.MAX_EXT)
            }
            const H = {
                [i.c8b]: t.ZERO,
                [i.ghN]: t.ONE,
                [i.KhW]: t.SRC_COLOR,
                [i.k74]: t.SRC_ALPHA,
                [i.RlZ]: t.SRC_ALPHA_SATURATE,
                [i.Vdb]: t.DST_COLOR,
                [i.fSK]: t.DST_ALPHA,
                [i.iWC]: t.ONE_MINUS_SRC_COLOR,
                [i.LgZ]: t.ONE_MINUS_SRC_ALPHA,
                [i.Wpd]: t.ONE_MINUS_DST_COLOR,
                [i.Hy8]: t.ONE_MINUS_DST_ALPHA
            };
            function k(e, n, r, a, s, o, l, c) {
                if (e !== i.jFi) {
                    if (!1 === h && (z(t.BLEND),
                    h = !0),
                    e === i.Xaj)
                        s = s || n,
                        o = o || r,
                        l = l || a,
                        n === p && s === _ || (t.blendEquationSeparate(G[n], G[s]),
                        p = n,
                        _ = s),
                        r === m && a === g && o === v && l === x || (t.blendFuncSeparate(H[r], H[a], H[o], H[l]),
                        m = r,
                        g = a,
                        v = o,
                        x = l),
                        d = e,
                        y = null;
                    else if (e !== d || c !== y) {
                        if (p === i.bGH && _ === i.bGH || (t.blendEquation(t.FUNC_ADD),
                        p = i.bGH,
                        _ = i.bGH),
                        c)
                            switch (e) {
                            case i.bdR:
                                t.blendFuncSeparate(t.ONE, t.ONE_MINUS_SRC_ALPHA, t.ONE, t.ONE_MINUS_SRC_ALPHA);
                                break;
                            case i.WMw:
                                t.blendFunc(t.ONE, t.ONE);
                                break;
                            case i.N4l:
                                t.blendFuncSeparate(t.ZERO, t.ZERO, t.ONE_MINUS_SRC_COLOR, t.ONE_MINUS_SRC_ALPHA);
                                break;
                            case i.M5h:
                                t.blendFuncSeparate(t.ZERO, t.SRC_COLOR, t.ZERO, t.SRC_ALPHA);
                                break;
                            default:
                                console.error("THREE.WebGLState: Invalid blending: ", e)
                            }
                        else
                            switch (e) {
                            case i.bdR:
                                t.blendFuncSeparate(t.SRC_ALPHA, t.ONE_MINUS_SRC_ALPHA, t.ONE, t.ONE_MINUS_SRC_ALPHA);
                                break;
                            case i.WMw:
                                t.blendFunc(t.SRC_ALPHA, t.ONE);
                                break;
                            case i.N4l:
                                t.blendFunc(t.ZERO, t.ONE_MINUS_SRC_COLOR);
                                break;
                            case i.M5h:
                                t.blendFunc(t.ZERO, t.SRC_COLOR);
                                break;
                            default:
                                console.error("THREE.WebGLState: Invalid blending: ", e)
                            }
                        m = null,
                        g = null,
                        v = null,
                        x = null,
                        d = e,
                        y = c
                    }
                } else
                    !0 === h && (B(t.BLEND),
                    h = !1)
            }
            function V(e) {
                b !== e && (e ? t.frontFace(t.CW) : t.frontFace(t.CCW),
                b = e)
            }
            function W(e) {
                e !== i.PeU ? (z(t.CULL_FACE),
                e !== M && (e === i.tm_ ? t.cullFace(t.BACK) : e === i.S2y ? t.cullFace(t.FRONT) : t.cullFace(t.FRONT_AND_BACK))) : B(t.CULL_FACE),
                M = e
            }
            function X(e, n, i) {
                e ? (z(t.POLYGON_OFFSET_FILL),
                w === n && T === i || (t.polygonOffset(n, i),
                w = n,
                T = i)) : B(t.POLYGON_OFFSET_FILL)
            }
            function q(e) {
                void 0 === e && (e = t.TEXTURE0 + E - 1),
                C !== e && (t.activeTexture(e),
                C = e)
            }
            return {
                buffers: {
                    color: a,
                    depth: s,
                    stencil: o
                },
                enable: z,
                disable: B,
                bindFramebuffer: function(e, n) {
                    return c[e] !== n && (t.bindFramebuffer(e, n),
                    c[e] = n,
                    r && (e === t.DRAW_FRAMEBUFFER && (c[t.FRAMEBUFFER] = n),
                    e === t.FRAMEBUFFER && (c[t.DRAW_FRAMEBUFFER] = n)),
                    !0)
                },
                useProgram: function(e) {
                    return u !== e && (t.useProgram(e),
                    u = e,
                    !0)
                },
                setBlending: k,
                setMaterial: function(e, n) {
                    e.side === i.ehD ? B(t.CULL_FACE) : z(t.CULL_FACE);
                    let r = e.side === i._Li;
                    n && (r = !r),
                    V(r),
                    e.blending === i.bdR && !1 === e.transparent ? k(i.jFi) : k(e.blending, e.blendEquation, e.blendSrc, e.blendDst, e.blendEquationAlpha, e.blendSrcAlpha, e.blendDstAlpha, e.premultipliedAlpha),
                    s.setFunc(e.depthFunc),
                    s.setTest(e.depthTest),
                    s.setMask(e.depthWrite),
                    a.setMask(e.colorWrite);
                    const l = e.stencilWrite;
                    o.setTest(l),
                    l && (o.setMask(e.stencilWriteMask),
                    o.setFunc(e.stencilFunc, e.stencilRef, e.stencilFuncMask),
                    o.setOp(e.stencilFail, e.stencilZFail, e.stencilZPass)),
                    X(e.polygonOffset, e.polygonOffsetFactor, e.polygonOffsetUnits),
                    !0 === e.alphaToCoverage ? z(t.SAMPLE_ALPHA_TO_COVERAGE) : B(t.SAMPLE_ALPHA_TO_COVERAGE)
                },
                setFlipSided: V,
                setCullFace: W,
                setLineWidth: function(e) {
                    e !== S && (A && t.lineWidth(e),
                    S = e)
                },
                setPolygonOffset: X,
                setScissorTest: function(e) {
                    e ? z(t.SCISSOR_TEST) : B(t.SCISSOR_TEST)
                },
                activeTexture: q,
                bindTexture: function(e, n) {
                    null === C && q();
                    let i = P[C];
                    void 0 === i && (i = {
                        type: void 0,
                        texture: void 0
                    },
                    P[C] = i),
                    i.type === e && i.texture === n || (t.bindTexture(e, n || O[e]),
                    i.type = e,
                    i.texture = n)
                },
                unbindTexture: function() {
                    const e = P[C];
                    void 0 !== e && void 0 !== e.type && (t.bindTexture(e.type, null),
                    e.type = void 0,
                    e.texture = void 0)
                },
                compressedTexImage2D: function() {
                    try {
                        t.compressedTexImage2D.apply(t, arguments)
                    } catch (t) {
                        console.error("THREE.WebGLState:", t)
                    }
                },
                texImage2D: function() {
                    try {
                        t.texImage2D.apply(t, arguments)
                    } catch (t) {
                        console.error("THREE.WebGLState:", t)
                    }
                },
                texImage3D: function() {
                    try {
                        t.texImage3D.apply(t, arguments)
                    } catch (t) {
                        console.error("THREE.WebGLState:", t)
                    }
                },
                texStorage2D: function() {
                    try {
                        t.texStorage2D.apply(t, arguments)
                    } catch (t) {
                        console.error("THREE.WebGLState:", t)
                    }
                },
                texStorage3D: function() {
                    try {
                        t.texStorage3D.apply(t, arguments)
                    } catch (t) {
                        console.error("THREE.WebGLState:", t)
                    }
                },
                texSubImage2D: function() {
                    try {
                        t.texSubImage2D.apply(t, arguments)
                    } catch (t) {
                        console.error("THREE.WebGLState:", t)
                    }
                },
                texSubImage3D: function() {
                    try {
                        t.texSubImage3D.apply(t, arguments)
                    } catch (t) {
                        console.error("THREE.WebGLState:", t)
                    }
                },
                compressedTexSubImage2D: function() {
                    try {
                        t.compressedTexSubImage2D.apply(t, arguments)
                    } catch (t) {
                        console.error("THREE.WebGLState:", t)
                    }
                },
                scissor: function(e) {
                    !1 === I.equals(e) && (t.scissor(e.x, e.y, e.z, e.w),
                    I.copy(e))
                },
                viewport: function(e) {
                    !1 === U.equals(e) && (t.viewport(e.x, e.y, e.z, e.w),
                    U.copy(e))
                },
                reset: function() {
                    t.disable(t.BLEND),
                    t.disable(t.CULL_FACE),
                    t.disable(t.DEPTH_TEST),
                    t.disable(t.POLYGON_OFFSET_FILL),
                    t.disable(t.SCISSOR_TEST),
                    t.disable(t.STENCIL_TEST),
                    t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),
                    t.blendEquation(t.FUNC_ADD),
                    t.blendFunc(t.ONE, t.ZERO),
                    t.blendFuncSeparate(t.ONE, t.ZERO, t.ONE, t.ZERO),
                    t.colorMask(!0, !0, !0, !0),
                    t.clearColor(0, 0, 0, 0),
                    t.depthMask(!0),
                    t.depthFunc(t.LESS),
                    t.clearDepth(1),
                    t.stencilMask(4294967295),
                    t.stencilFunc(t.ALWAYS, 0, 4294967295),
                    t.stencilOp(t.KEEP, t.KEEP, t.KEEP),
                    t.clearStencil(0),
                    t.cullFace(t.BACK),
                    t.frontFace(t.CCW),
                    t.polygonOffset(0, 0),
                    t.activeTexture(t.TEXTURE0),
                    t.bindFramebuffer(t.FRAMEBUFFER, null),
                    !0 === r && (t.bindFramebuffer(t.DRAW_FRAMEBUFFER, null),
                    t.bindFramebuffer(t.READ_FRAMEBUFFER, null)),
                    t.useProgram(null),
                    t.lineWidth(1),
                    t.scissor(0, 0, t.canvas.width, t.canvas.height),
                    t.viewport(0, 0, t.canvas.width, t.canvas.height),
                    l = {},
                    C = null,
                    P = {},
                    c = {},
                    u = null,
                    h = !1,
                    d = null,
                    p = null,
                    m = null,
                    g = null,
                    _ = null,
                    v = null,
                    x = null,
                    y = !1,
                    b = null,
                    M = null,
                    S = null,
                    w = null,
                    T = null,
                    I.set(0, 0, t.canvas.width, t.canvas.height),
                    U.set(0, 0, t.canvas.width, t.canvas.height),
                    a.reset(),
                    s.reset(),
                    o.reset()
                }
            }
        }
        function Sn(t, e, n, r, a, s, o) {
            const l = a.isWebGL2
              , c = a.maxTextures
              , u = a.maxCubemapSize
              , h = a.maxTextureSize
              , d = a.maxSamples
              , p = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : void 0
              , m = new WeakMap;
            let f, g = !1;
            try {
                g = "undefined" != typeof OffscreenCanvas && null !== new OffscreenCanvas(1,1).getContext("2d")
            } catch (t) {}
            function _(t, e) {
                return g ? new OffscreenCanvas(t,e) : (0,
                yt.c)("canvas")
            }
            function v(t, e, n, i) {
                let r = 1;
                if ((t.width > i || t.height > i) && (r = i / Math.max(t.width, t.height)),
                r < 1 || !0 === e) {
                    if ("undefined" != typeof HTMLImageElement && t instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && t instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && t instanceof ImageBitmap) {
                        const i = e ? V.gy : Math.floor
                          , a = i(r * t.width)
                          , s = i(r * t.height);
                        void 0 === f && (f = _(a, s));
                        const o = n ? _(a, s) : f;
                        return o.width = a,
                        o.height = s,
                        o.getContext("2d").drawImage(t, 0, 0, a, s),
                        console.warn("THREE.WebGLRenderer: Texture has been resized from (" + t.width + "x" + t.height + ") to (" + a + "x" + s + ")."),
                        o
                    }
                    return "data"in t && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + t.width + "x" + t.height + ")."),
                    t
                }
                return t
            }
            function x(t) {
                return V.wt(t.width) && V.wt(t.height)
            }
            function y(t, e) {
                return t.generateMipmaps && e && t.minFilter !== i.TyD && t.minFilter !== i.wem
            }
            function b(e) {
                t.generateMipmap(e)
            }
            function M(n, r, a, s) {
                if (!1 === l)
                    return r;
                if (null !== n) {
                    if (void 0 !== t[n])
                        return t[n];
                    console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + n + "'")
                }
                let o = r;
                return r === t.RED && (a === t.FLOAT && (o = t.R32F),
                a === t.HALF_FLOAT && (o = t.R16F),
                a === t.UNSIGNED_BYTE && (o = t.R8)),
                r === t.RGB && (a === t.FLOAT && (o = t.RGB32F),
                a === t.HALF_FLOAT && (o = t.RGB16F),
                a === t.UNSIGNED_BYTE && (o = t.RGB8)),
                r === t.RGBA && (a === t.FLOAT && (o = t.RGBA32F),
                a === t.HALF_FLOAT && (o = t.RGBA16F),
                a === t.UNSIGNED_BYTE && (o = s === i.knz ? t.SRGB8_ALPHA8 : t.RGBA8)),
                o !== t.R16F && o !== t.R32F && o !== t.RGBA16F && o !== t.RGBA32F || e.get("EXT_color_buffer_float"),
                o
            }
            function S(t, e, n) {
                return !0 === y(t, n) || t.isFramebufferTexture && t.minFilter !== i.TyD && t.minFilter !== i.wem ? Math.log2(Math.max(e.width, e.height)) + 1 : void 0 !== t.mipmaps && t.mipmaps.length > 0 ? t.mipmaps.length : t.isCompressedTexture && Array.isArray(t.image) ? e.mipmaps.length : 1
            }
            function w(e) {
                return e === i.TyD || e === i.YLQ || e === i.aH4 ? t.NEAREST : t.LINEAR
            }
            function T(e) {
                const n = e.target;
                n.removeEventListener("dispose", T),
                function(e) {
                    const n = r.get(e);
                    void 0 !== n.__webglInit && (t.deleteTexture(n.__webglTexture),
                    r.remove(e))
                }(n),
                n.isVideoTexture && m.delete(n),
                o.memory.textures--
            }
            function E(e) {
                const n = e.target;
                n.removeEventListener("dispose", E),
                function(e) {
                    const n = e.texture
                      , i = r.get(e)
                      , a = r.get(n);
                    if (e) {
                        if (void 0 !== a.__webglTexture && (t.deleteTexture(a.__webglTexture),
                        o.memory.textures--),
                        e.depthTexture && e.depthTexture.dispose(),
                        e.isWebGLCubeRenderTarget)
                            for (let e = 0; e < 6; e++)
                                t.deleteFramebuffer(i.__webglFramebuffer[e]),
                                i.__webglDepthbuffer && t.deleteRenderbuffer(i.__webglDepthbuffer[e]);
                        else
                            t.deleteFramebuffer(i.__webglFramebuffer),
                            i.__webglDepthbuffer && t.deleteRenderbuffer(i.__webglDepthbuffer),
                            i.__webglMultisampledFramebuffer && t.deleteFramebuffer(i.__webglMultisampledFramebuffer),
                            i.__webglColorRenderbuffer && t.deleteRenderbuffer(i.__webglColorRenderbuffer),
                            i.__webglDepthRenderbuffer && t.deleteRenderbuffer(i.__webglDepthRenderbuffer);
                        if (e.isWebGLMultipleRenderTargets)
                            for (let e = 0, i = n.length; e < i; e++) {
                                const i = r.get(n[e]);
                                i.__webglTexture && (t.deleteTexture(i.__webglTexture),
                                o.memory.textures--),
                                r.remove(n[e])
                            }
                        r.remove(n),
                        r.remove(e)
                    }
                }(n)
            }
            let A = 0;
            function L(e, i) {
                const a = r.get(e);
                if (e.isVideoTexture && function(t) {
                    const e = o.render.frame;
                    m.get(t) !== e && (m.set(t, e),
                    t.update())
                }(e),
                e.version > 0 && a.__version !== e.version) {
                    const t = e.image;
                    if (void 0 === t)
                        console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");
                    else {
                        if (!1 !== t.complete)
                            return void I(a, e, i);
                        console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")
                    }
                }
                n.activeTexture(t.TEXTURE0 + i),
                n.bindTexture(t.TEXTURE_2D, a.__webglTexture)
            }
            function R(e, a) {
                const o = r.get(e);
                e.version > 0 && o.__version !== e.version ? function(e, r, a) {
                    if (6 !== r.image.length)
                        return;
                    N(e, r),
                    n.activeTexture(t.TEXTURE0 + a),
                    n.bindTexture(t.TEXTURE_CUBE_MAP, e.__webglTexture),
                    t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, r.flipY),
                    t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL, r.premultiplyAlpha),
                    t.pixelStorei(t.UNPACK_ALIGNMENT, r.unpackAlignment),
                    t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL, t.NONE);
                    const o = r && (r.isCompressedTexture || r.image[0].isCompressedTexture)
                      , c = r.image[0] && r.image[0].isDataTexture
                      , h = [];
                    for (let t = 0; t < 6; t++)
                        h[t] = o || c ? c ? r.image[t].image : r.image[t] : v(r.image[t], !1, !0, u);
                    const d = h[0]
                      , p = x(d) || l
                      , m = s.convert(r.format)
                      , f = s.convert(r.type)
                      , g = M(r.internalFormat, m, f, r.encoding)
                      , _ = l && !0 !== r.isVideoTexture
                      , w = void 0 === e.__version;
                    let T, E = S(r, d, p);
                    if (D(t.TEXTURE_CUBE_MAP, r, p),
                    o) {
                        _ && w && n.texStorage2D(t.TEXTURE_CUBE_MAP, E, g, d.width, d.height);
                        for (let e = 0; e < 6; e++) {
                            T = h[e].mipmaps;
                            for (let a = 0; a < T.length; a++) {
                                const s = T[a];
                                r.format !== i.wk1 && r.format !== i.UCm ? null !== m ? _ ? n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + e, a, 0, 0, s.width, s.height, m, s.data) : n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + e, a, g, s.width, s.height, 0, s.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : _ ? n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + e, a, 0, 0, s.width, s.height, m, f, s.data) : n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + e, a, g, s.width, s.height, 0, m, f, s.data)
                            }
                        }
                    } else {
                        T = r.mipmaps,
                        _ && w && (T.length > 0 && E++,
                        n.texStorage2D(t.TEXTURE_CUBE_MAP, E, g, h[0].width, h[0].height));
                        for (let e = 0; e < 6; e++)
                            if (c) {
                                _ ? n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + e, 0, 0, 0, h[e].width, h[e].height, m, f, h[e].data) : n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + e, 0, g, h[e].width, h[e].height, 0, m, f, h[e].data);
                                for (let i = 0; i < T.length; i++) {
                                    const r = T[i].image[e].image;
                                    _ ? n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + e, i + 1, 0, 0, r.width, r.height, m, f, r.data) : n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + e, i + 1, g, r.width, r.height, 0, m, f, r.data)
                                }
                            } else {
                                _ ? n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + e, 0, 0, 0, m, f, h[e]) : n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + e, 0, g, m, f, h[e]);
                                for (let i = 0; i < T.length; i++) {
                                    const r = T[i];
                                    _ ? n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + e, i + 1, 0, 0, m, f, r.image[e]) : n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + e, i + 1, g, m, f, r.image[e])
                                }
                            }
                    }
                    y(r, p) && b(t.TEXTURE_CUBE_MAP),
                    e.__version = r.version,
                    r.onUpdate && r.onUpdate(r)
                }(o, e, a) : (n.activeTexture(t.TEXTURE0 + a),
                n.bindTexture(t.TEXTURE_CUBE_MAP, o.__webglTexture))
            }
            const C = {
                [i.rpg]: t.REPEAT,
                [i.uWy]: t.CLAMP_TO_EDGE,
                [i.OoA]: t.MIRRORED_REPEAT
            }
              , P = {
                [i.TyD]: t.NEAREST,
                [i.YLQ]: t.NEAREST_MIPMAP_NEAREST,
                [i.aH4]: t.NEAREST_MIPMAP_LINEAR,
                [i.wem]: t.LINEAR,
                [i.qyh]: t.LINEAR_MIPMAP_NEAREST,
                [i.D1R]: t.LINEAR_MIPMAP_LINEAR
            };
            function D(n, s, o) {
                if (o ? (t.texParameteri(n, t.TEXTURE_WRAP_S, C[s.wrapS]),
                t.texParameteri(n, t.TEXTURE_WRAP_T, C[s.wrapT]),
                n !== t.TEXTURE_3D && n !== t.TEXTURE_2D_ARRAY || t.texParameteri(n, t.TEXTURE_WRAP_R, C[s.wrapR]),
                t.texParameteri(n, t.TEXTURE_MAG_FILTER, P[s.magFilter]),
                t.texParameteri(n, t.TEXTURE_MIN_FILTER, P[s.minFilter])) : (t.texParameteri(n, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE),
                t.texParameteri(n, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE),
                n !== t.TEXTURE_3D && n !== t.TEXTURE_2D_ARRAY || t.texParameteri(n, t.TEXTURE_WRAP_R, t.CLAMP_TO_EDGE),
                s.wrapS === i.uWy && s.wrapT === i.uWy || console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),
                t.texParameteri(n, t.TEXTURE_MAG_FILTER, w(s.magFilter)),
                t.texParameteri(n, t.TEXTURE_MIN_FILTER, w(s.minFilter)),
                s.minFilter !== i.TyD && s.minFilter !== i.wem && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),
                !0 === e.has("EXT_texture_filter_anisotropic")) {
                    const o = e.get("EXT_texture_filter_anisotropic");
                    if (s.type === i.VzW && !1 === e.has("OES_texture_float_linear"))
                        return;
                    if (!1 === l && s.type === i.cLu && !1 === e.has("OES_texture_half_float_linear"))
                        return;
                    (s.anisotropy > 1 || r.get(s).__currentAnisotropy) && (t.texParameterf(n, o.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(s.anisotropy, a.getMaxAnisotropy())),
                    r.get(s).__currentAnisotropy = s.anisotropy)
                }
            }
            function N(e, n) {
                void 0 === e.__webglInit && (e.__webglInit = !0,
                n.addEventListener("dispose", T),
                e.__webglTexture = t.createTexture(),
                o.memory.textures++)
            }
            function I(e, r, a) {
                let o = t.TEXTURE_2D;
                r.isDataTexture2DArray && (o = t.TEXTURE_2D_ARRAY),
                r.isDataTexture3D && (o = t.TEXTURE_3D),
                N(e, r),
                n.activeTexture(t.TEXTURE0 + a),
                n.bindTexture(o, e.__webglTexture),
                t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, r.flipY),
                t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL, r.premultiplyAlpha),
                t.pixelStorei(t.UNPACK_ALIGNMENT, r.unpackAlignment),
                t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL, t.NONE);
                const c = function(t) {
                    return !l && (t.wrapS !== i.uWy || t.wrapT !== i.uWy || t.minFilter !== i.TyD && t.minFilter !== i.wem)
                }(r) && !1 === x(r.image)
                  , u = v(r.image, c, !1, h)
                  , d = x(u) || l
                  , p = s.convert(r.format);
                let m, f = s.convert(r.type), g = M(r.internalFormat, p, f, r.encoding);
                D(o, r, d);
                const _ = r.mipmaps
                  , w = l && !0 !== r.isVideoTexture
                  , T = void 0 === e.__version
                  , E = S(r, u, d);
                if (r.isDepthTexture)
                    g = t.DEPTH_COMPONENT,
                    l ? g = r.type === i.VzW ? t.DEPTH_COMPONENT32F : r.type === i.JQ4 ? t.DEPTH_COMPONENT24 : r.type === i.wJv ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT16 : r.type === i.VzW && console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),
                    r.format === i.qkB && g === t.DEPTH_COMPONENT && r.type !== i.LsT && r.type !== i.JQ4 && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),
                    r.type = i.LsT,
                    f = s.convert(r.type)),
                    r.format === i.brP && g === t.DEPTH_COMPONENT && (g = t.DEPTH_STENCIL,
                    r.type !== i.wJv && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),
                    r.type = i.wJv,
                    f = s.convert(r.type))),
                    w && T ? n.texStorage2D(t.TEXTURE_2D, 1, g, u.width, u.height) : n.texImage2D(t.TEXTURE_2D, 0, g, u.width, u.height, 0, p, f, null);
                else if (r.isDataTexture)
                    if (_.length > 0 && d) {
                        w && T && n.texStorage2D(t.TEXTURE_2D, E, g, _[0].width, _[0].height);
                        for (let e = 0, i = _.length; e < i; e++)
                            m = _[e],
                            w ? n.texSubImage2D(t.TEXTURE_2D, 0, 0, 0, m.width, m.height, p, f, m.data) : n.texImage2D(t.TEXTURE_2D, e, g, m.width, m.height, 0, p, f, m.data);
                        r.generateMipmaps = !1
                    } else
                        w ? (T && n.texStorage2D(t.TEXTURE_2D, E, g, u.width, u.height),
                        n.texSubImage2D(t.TEXTURE_2D, 0, 0, 0, u.width, u.height, p, f, u.data)) : n.texImage2D(t.TEXTURE_2D, 0, g, u.width, u.height, 0, p, f, u.data);
                else if (r.isCompressedTexture) {
                    w && T && n.texStorage2D(t.TEXTURE_2D, E, g, _[0].width, _[0].height);
                    for (let e = 0, a = _.length; e < a; e++)
                        m = _[e],
                        r.format !== i.wk1 && r.format !== i.UCm ? null !== p ? w ? n.compressedTexSubImage2D(t.TEXTURE_2D, e, 0, 0, m.width, m.height, p, m.data) : n.compressedTexImage2D(t.TEXTURE_2D, e, g, m.width, m.height, 0, m.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : w ? n.texSubImage2D(t.TEXTURE_2D, e, 0, 0, m.width, m.height, p, f, m.data) : n.texImage2D(t.TEXTURE_2D, e, g, m.width, m.height, 0, p, f, m.data)
                } else if (r.isDataTexture2DArray)
                    w ? (T && n.texStorage3D(t.TEXTURE_2D_ARRAY, E, g, u.width, u.height, u.depth),
                    n.texSubImage3D(t.TEXTURE_2D_ARRAY, 0, 0, 0, 0, u.width, u.height, u.depth, p, f, u.data)) : n.texImage3D(t.TEXTURE_2D_ARRAY, 0, g, u.width, u.height, u.depth, 0, p, f, u.data);
                else if (r.isDataTexture3D)
                    w ? (T && n.texStorage3D(t.TEXTURE_3D, E, g, u.width, u.height, u.depth),
                    n.texSubImage3D(t.TEXTURE_3D, 0, 0, 0, 0, u.width, u.height, u.depth, p, f, u.data)) : n.texImage3D(t.TEXTURE_3D, 0, g, u.width, u.height, u.depth, 0, p, f, u.data);
                else if (r.isFramebufferTexture)
                    w && T ? n.texStorage2D(t.TEXTURE_2D, E, g, u.width, u.height) : n.texImage2D(t.TEXTURE_2D, 0, g, u.width, u.height, 0, p, f, null);
                else if (_.length > 0 && d) {
                    w && T && n.texStorage2D(t.TEXTURE_2D, E, g, _[0].width, _[0].height);
                    for (let e = 0, i = _.length; e < i; e++)
                        m = _[e],
                        w ? n.texSubImage2D(t.TEXTURE_2D, e, 0, 0, p, f, m) : n.texImage2D(t.TEXTURE_2D, e, g, p, f, m);
                    r.generateMipmaps = !1
                } else
                    w ? (T && n.texStorage2D(t.TEXTURE_2D, E, g, u.width, u.height),
                    n.texSubImage2D(t.TEXTURE_2D, 0, 0, 0, p, f, u)) : n.texImage2D(t.TEXTURE_2D, 0, g, p, f, u);
                y(r, d) && b(o),
                e.__version = r.version,
                r.onUpdate && r.onUpdate(r)
            }
            function U(e, i, a, o, l) {
                const c = s.convert(a.format)
                  , u = s.convert(a.type)
                  , h = M(a.internalFormat, c, u, a.encoding);
                r.get(i).__hasExternalTextures || (l === t.TEXTURE_3D || l === t.TEXTURE_2D_ARRAY ? n.texImage3D(l, 0, h, i.width, i.height, i.depth, 0, c, u, null) : n.texImage2D(l, 0, h, i.width, i.height, 0, c, u, null)),
                n.bindFramebuffer(t.FRAMEBUFFER, e),
                i.useRenderToTexture ? p.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER, o, l, r.get(a).__webglTexture, 0, z(i)) : t.framebufferTexture2D(t.FRAMEBUFFER, o, l, r.get(a).__webglTexture, 0),
                n.bindFramebuffer(t.FRAMEBUFFER, null)
            }
            function F(e, n, r) {
                if (t.bindRenderbuffer(t.RENDERBUFFER, e),
                n.depthBuffer && !n.stencilBuffer) {
                    let a = t.DEPTH_COMPONENT16;
                    if (r || n.useRenderToTexture) {
                        const e = n.depthTexture;
                        e && e.isDepthTexture && (e.type === i.VzW ? a = t.DEPTH_COMPONENT32F : e.type === i.JQ4 && (a = t.DEPTH_COMPONENT24));
                        const r = z(n);
                        n.useRenderToTexture ? p.renderbufferStorageMultisampleEXT(t.RENDERBUFFER, r, a, n.width, n.height) : t.renderbufferStorageMultisample(t.RENDERBUFFER, r, a, n.width, n.height)
                    } else
                        t.renderbufferStorage(t.RENDERBUFFER, a, n.width, n.height);
                    t.framebufferRenderbuffer(t.FRAMEBUFFER, t.DEPTH_ATTACHMENT, t.RENDERBUFFER, e)
                } else if (n.depthBuffer && n.stencilBuffer) {
                    const i = z(n);
                    r && n.useRenderbuffer ? t.renderbufferStorageMultisample(t.RENDERBUFFER, i, t.DEPTH24_STENCIL8, n.width, n.height) : n.useRenderToTexture ? p.renderbufferStorageMultisampleEXT(t.RENDERBUFFER, i, t.DEPTH24_STENCIL8, n.width, n.height) : t.renderbufferStorage(t.RENDERBUFFER, t.DEPTH_STENCIL, n.width, n.height),
                    t.framebufferRenderbuffer(t.FRAMEBUFFER, t.DEPTH_STENCIL_ATTACHMENT, t.RENDERBUFFER, e)
                } else {
                    const e = !0 === n.isWebGLMultipleRenderTargets ? n.texture[0] : n.texture
                      , i = s.convert(e.format)
                      , a = s.convert(e.type)
                      , o = M(e.internalFormat, i, a, e.encoding)
                      , l = z(n);
                    r && n.useRenderbuffer ? t.renderbufferStorageMultisample(t.RENDERBUFFER, l, o, n.width, n.height) : n.useRenderToTexture ? p.renderbufferStorageMultisampleEXT(t.RENDERBUFFER, l, o, n.width, n.height) : t.renderbufferStorage(t.RENDERBUFFER, o, n.width, n.height)
                }
                t.bindRenderbuffer(t.RENDERBUFFER, null)
            }
            function O(e) {
                const a = r.get(e)
                  , s = !0 === e.isWebGLCubeRenderTarget;
                if (e.depthTexture && !a.__autoAllocateDepthBuffer) {
                    if (s)
                        throw new Error("target.depthTexture not supported in Cube render targets");
                    !function(e, a) {
                        if (a && a.isWebGLCubeRenderTarget)
                            throw new Error("Depth Texture with cube render targets is not supported");
                        if (n.bindFramebuffer(t.FRAMEBUFFER, e),
                        !a.depthTexture || !a.depthTexture.isDepthTexture)
                            throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
                        r.get(a.depthTexture).__webglTexture && a.depthTexture.image.width === a.width && a.depthTexture.image.height === a.height || (a.depthTexture.image.width = a.width,
                        a.depthTexture.image.height = a.height,
                        a.depthTexture.needsUpdate = !0),
                        L(a.depthTexture, 0);
                        const s = r.get(a.depthTexture).__webglTexture
                          , o = z(a);
                        if (a.depthTexture.format === i.qkB)
                            a.useRenderToTexture ? p.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER, t.DEPTH_ATTACHMENT, t.TEXTURE_2D, s, 0, o) : t.framebufferTexture2D(t.FRAMEBUFFER, t.DEPTH_ATTACHMENT, t.TEXTURE_2D, s, 0);
                        else {
                            if (a.depthTexture.format !== i.brP)
                                throw new Error("Unknown depthTexture format");
                            a.useRenderToTexture ? p.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER, t.DEPTH_STENCIL_ATTACHMENT, t.TEXTURE_2D, s, 0, o) : t.framebufferTexture2D(t.FRAMEBUFFER, t.DEPTH_STENCIL_ATTACHMENT, t.TEXTURE_2D, s, 0)
                        }
                    }(a.__webglFramebuffer, e)
                } else if (s) {
                    a.__webglDepthbuffer = [];
                    for (let i = 0; i < 6; i++)
                        n.bindFramebuffer(t.FRAMEBUFFER, a.__webglFramebuffer[i]),
                        a.__webglDepthbuffer[i] = t.createRenderbuffer(),
                        F(a.__webglDepthbuffer[i], e, !1)
                } else
                    n.bindFramebuffer(t.FRAMEBUFFER, a.__webglFramebuffer),
                    a.__webglDepthbuffer = t.createRenderbuffer(),
                    F(a.__webglDepthbuffer, e, !1);
                n.bindFramebuffer(t.FRAMEBUFFER, null)
            }
            function z(t) {
                return l && (t.useRenderbuffer || t.useRenderToTexture) ? Math.min(d, t.samples) : 0
            }
            let B = !1
              , G = !1;
            this.allocateTextureUnit = function() {
                const t = A;
                return t >= c && console.warn("THREE.WebGLTextures: Trying to use " + t + " texture units while this GPU supports only " + c),
                A += 1,
                t
            }
            ,
            this.resetTextureUnits = function() {
                A = 0
            }
            ,
            this.setTexture2D = L,
            this.setTexture2DArray = function(e, i) {
                const a = r.get(e);
                e.version > 0 && a.__version !== e.version ? I(a, e, i) : (n.activeTexture(t.TEXTURE0 + i),
                n.bindTexture(t.TEXTURE_2D_ARRAY, a.__webglTexture))
            }
            ,
            this.setTexture3D = function(e, i) {
                const a = r.get(e);
                e.version > 0 && a.__version !== e.version ? I(a, e, i) : (n.activeTexture(t.TEXTURE0 + i),
                n.bindTexture(t.TEXTURE_3D, a.__webglTexture))
            }
            ,
            this.setTextureCube = R,
            this.rebindTextures = function(e, n, i) {
                const a = r.get(e);
                void 0 !== n && U(a.__webglFramebuffer, e, e.texture, t.COLOR_ATTACHMENT0, t.TEXTURE_2D),
                void 0 !== i && O(e)
            }
            ,
            this.setupRenderTarget = function(e) {
                const c = e.texture
                  , u = r.get(e)
                  , h = r.get(c);
                e.addEventListener("dispose", E),
                !0 !== e.isWebGLMultipleRenderTargets && (void 0 === h.__webglTexture && (h.__webglTexture = t.createTexture()),
                h.__version = c.version,
                o.memory.textures++);
                const d = !0 === e.isWebGLCubeRenderTarget
                  , p = !0 === e.isWebGLMultipleRenderTargets
                  , m = c.isDataTexture3D || c.isDataTexture2DArray
                  , f = x(e) || l;
                if (!l || c.format !== i.UCm || c.type !== i.VzW && c.type !== i.cLu || (c.format = i.wk1,
                console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.")),
                d) {
                    u.__webglFramebuffer = [];
                    for (let e = 0; e < 6; e++)
                        u.__webglFramebuffer[e] = t.createFramebuffer()
                } else if (u.__webglFramebuffer = t.createFramebuffer(),
                p)
                    if (a.drawBuffers) {
                        const n = e.texture;
                        for (let e = 0, i = n.length; e < i; e++) {
                            const i = r.get(n[e]);
                            void 0 === i.__webglTexture && (i.__webglTexture = t.createTexture(),
                            o.memory.textures++)
                        }
                    } else
                        console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");
                else if (e.useRenderbuffer)
                    if (l) {
                        u.__webglMultisampledFramebuffer = t.createFramebuffer(),
                        u.__webglColorRenderbuffer = t.createRenderbuffer(),
                        t.bindRenderbuffer(t.RENDERBUFFER, u.__webglColorRenderbuffer);
                        const i = s.convert(c.format)
                          , r = s.convert(c.type)
                          , a = M(c.internalFormat, i, r, c.encoding)
                          , o = z(e);
                        t.renderbufferStorageMultisample(t.RENDERBUFFER, o, a, e.width, e.height),
                        n.bindFramebuffer(t.FRAMEBUFFER, u.__webglMultisampledFramebuffer),
                        t.framebufferRenderbuffer(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.RENDERBUFFER, u.__webglColorRenderbuffer),
                        t.bindRenderbuffer(t.RENDERBUFFER, null),
                        e.depthBuffer && (u.__webglDepthRenderbuffer = t.createRenderbuffer(),
                        F(u.__webglDepthRenderbuffer, e, !0)),
                        n.bindFramebuffer(t.FRAMEBUFFER, null)
                    } else
                        console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");
                if (d) {
                    n.bindTexture(t.TEXTURE_CUBE_MAP, h.__webglTexture),
                    D(t.TEXTURE_CUBE_MAP, c, f);
                    for (let n = 0; n < 6; n++)
                        U(u.__webglFramebuffer[n], e, c, t.COLOR_ATTACHMENT0, t.TEXTURE_CUBE_MAP_POSITIVE_X + n);
                    y(c, f) && b(t.TEXTURE_CUBE_MAP),
                    n.unbindTexture()
                } else if (p) {
                    const i = e.texture;
                    for (let a = 0, s = i.length; a < s; a++) {
                        const s = i[a]
                          , o = r.get(s);
                        n.bindTexture(t.TEXTURE_2D, o.__webglTexture),
                        D(t.TEXTURE_2D, s, f),
                        U(u.__webglFramebuffer, e, s, t.COLOR_ATTACHMENT0 + a, t.TEXTURE_2D),
                        y(s, f) && b(t.TEXTURE_2D)
                    }
                    n.unbindTexture()
                } else {
                    let i = t.TEXTURE_2D;
                    m && (l ? i = c.isDataTexture3D ? t.TEXTURE_3D : t.TEXTURE_2D_ARRAY : console.warn("THREE.DataTexture3D and THREE.DataTexture2DArray only supported with WebGL2.")),
                    n.bindTexture(i, h.__webglTexture),
                    D(i, c, f),
                    U(u.__webglFramebuffer, e, c, t.COLOR_ATTACHMENT0, i),
                    y(c, f) && b(i),
                    n.unbindTexture()
                }
                e.depthBuffer && O(e)
            }
            ,
            this.updateRenderTargetMipmap = function(e) {
                const i = x(e) || l
                  , a = !0 === e.isWebGLMultipleRenderTargets ? e.texture : [e.texture];
                for (let s = 0, o = a.length; s < o; s++) {
                    const o = a[s];
                    if (y(o, i)) {
                        const i = e.isWebGLCubeRenderTarget ? t.TEXTURE_CUBE_MAP : t.TEXTURE_2D
                          , a = r.get(o).__webglTexture;
                        n.bindTexture(i, a),
                        b(i),
                        n.unbindTexture()
                    }
                }
            }
            ,
            this.updateMultisampleRenderTarget = function(e) {
                if (e.useRenderbuffer)
                    if (l) {
                        const i = e.width
                          , a = e.height;
                        let s = t.COLOR_BUFFER_BIT;
                        const o = [t.COLOR_ATTACHMENT0]
                          , l = e.stencilBuffer ? t.DEPTH_STENCIL_ATTACHMENT : t.DEPTH_ATTACHMENT;
                        e.depthBuffer && o.push(l),
                        e.ignoreDepthForMultisampleCopy || (e.depthBuffer && (s |= t.DEPTH_BUFFER_BIT),
                        e.stencilBuffer && (s |= t.STENCIL_BUFFER_BIT));
                        const c = r.get(e);
                        n.bindFramebuffer(t.READ_FRAMEBUFFER, c.__webglMultisampledFramebuffer),
                        n.bindFramebuffer(t.DRAW_FRAMEBUFFER, c.__webglFramebuffer),
                        e.ignoreDepthForMultisampleCopy && (t.invalidateFramebuffer(t.READ_FRAMEBUFFER, [l]),
                        t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER, [l])),
                        t.blitFramebuffer(0, 0, i, a, 0, 0, i, a, s, t.NEAREST),
                        t.invalidateFramebuffer(t.READ_FRAMEBUFFER, o),
                        n.bindFramebuffer(t.READ_FRAMEBUFFER, null),
                        n.bindFramebuffer(t.DRAW_FRAMEBUFFER, c.__webglMultisampledFramebuffer)
                    } else
                        console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")
            }
            ,
            this.setupDepthRenderbuffer = O,
            this.setupFrameBufferTexture = U,
            this.safeSetTexture2D = function(t, e) {
                t && t.isWebGLRenderTarget && (!1 === B && (console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."),
                B = !0),
                t = t.texture),
                L(t, e)
            }
            ,
            this.safeSetTextureCube = function(t, e) {
                t && t.isWebGLCubeRenderTarget && (!1 === G && (console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."),
                G = !0),
                t = t.texture),
                R(t, e)
            }
        }
        function wn(t, e, n) {
            const r = n.isWebGL2;
            return {
                convert: function(n) {
                    let a;
                    if (n === i.ywz)
                        return t.UNSIGNED_BYTE;
                    if (n === i.k0A)
                        return t.UNSIGNED_SHORT_4_4_4_4;
                    if (n === i.irR)
                        return t.UNSIGNED_SHORT_5_5_5_1;
                    if (n === i.XNv)
                        return t.UNSIGNED_SHORT_5_6_5;
                    if (n === i.T95)
                        return t.BYTE;
                    if (n === i.iAb)
                        return t.SHORT;
                    if (n === i.LsT)
                        return t.UNSIGNED_SHORT;
                    if (n === i.Kz5)
                        return t.INT;
                    if (n === i.JQ4)
                        return t.UNSIGNED_INT;
                    if (n === i.VzW)
                        return t.FLOAT;
                    if (n === i.cLu)
                        return r ? t.HALF_FLOAT : (a = e.get("OES_texture_half_float"),
                        null !== a ? a.HALF_FLOAT_OES : null);
                    if (n === i.OTo)
                        return t.ALPHA;
                    if (n === i.UCm)
                        return t.RGB;
                    if (n === i.wk1)
                        return t.RGBA;
                    if (n === i.Y8D)
                        return t.LUMINANCE;
                    if (n === i.cRx)
                        return t.LUMINANCE_ALPHA;
                    if (n === i.qkB)
                        return t.DEPTH_COMPONENT;
                    if (n === i.brP)
                        return t.DEPTH_STENCIL;
                    if (n === i.hEm)
                        return t.RED;
                    if (n === i.D9w)
                        return t.RED_INTEGER;
                    if (n === i.av9)
                        return t.RG;
                    if (n === i.CtA)
                        return t.RG_INTEGER;
                    if (n === i.F5G)
                        return t.RGB_INTEGER;
                    if (n === i.E2K)
                        return t.RGBA_INTEGER;
                    if (n === i.wuA || n === i.BFQ || n === i.v3W || n === i.ILR) {
                        if (a = e.get("WEBGL_compressed_texture_s3tc"),
                        null === a)
                            return null;
                        if (n === i.wuA)
                            return a.COMPRESSED_RGB_S3TC_DXT1_EXT;
                        if (n === i.BFQ)
                            return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;
                        if (n === i.v3W)
                            return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;
                        if (n === i.ILR)
                            return a.COMPRESSED_RGBA_S3TC_DXT5_EXT
                    }
                    if (n === i._AM || n === i.vCx || n === i.eaV || n === i.CaW) {
                        if (a = e.get("WEBGL_compressed_texture_pvrtc"),
                        null === a)
                            return null;
                        if (n === i._AM)
                            return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
                        if (n === i.vCx)
                            return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
                        if (n === i.eaV)
                            return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
                        if (n === i.CaW)
                            return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG
                    }
                    if (n === i.fto)
                        return a = e.get("WEBGL_compressed_texture_etc1"),
                        null !== a ? a.COMPRESSED_RGB_ETC1_WEBGL : null;
                    if ((n === i.l0P || n === i.ekQ) && (a = e.get("WEBGL_compressed_texture_etc"),
                    null !== a)) {
                        if (n === i.l0P)
                            return a.COMPRESSED_RGB8_ETC2;
                        if (n === i.ekQ)
                            return a.COMPRESSED_RGBA8_ETC2_EAC
                    }
                    return n === i.ptH || n === i.jZA || n === i.y2t || n === i.gi4 || n === i.Djp || n === i.BG$ || n === i.NYV || n === i.xJs || n === i.pKu || n === i.GG6 || n === i.Gih || n === i.FUD || n === i.iiP || n === i.SvJ || n === i.APR || n === i.Abz || n === i.v6B || n === i.pnl || n === i.OS$ || n === i._wO || n === i.bcs || n === i.Y5S || n === i.Wso || n === i.p1$ || n === i.I0h || n === i.Yjz || n === i.ePn || n === i.HBG ? (a = e.get("WEBGL_compressed_texture_astc"),
                    null !== a ? n : null) : n === i.bsb ? (a = e.get("EXT_texture_compression_bptc"),
                    null !== a ? n : null) : n === i.wJv ? r ? t.UNSIGNED_INT_24_8 : (a = e.get("WEBGL_depth_texture"),
                    null !== a ? a.UNSIGNED_INT_24_8_WEBGL : null) : void 0
                }
            }
        }
        yn.prototype.isMeshDistanceMaterial = !0;
        class Tn extends W {
            constructor(t=[]) {
                super(),
                this.cameras = t
            }
        }
        Tn.prototype.isArrayCamera = !0;
        var En = n(10);
        const An = {
            type: "move"
        };
        class Ln {
            constructor() {
                this._targetRay = null,
                this._grip = null,
                this._hand = null
            }
            getHandSpace() {
                return null === this._hand && (this._hand = new En.Z,
                this._hand.matrixAutoUpdate = !1,
                this._hand.visible = !1,
                this._hand.joints = {},
                this._hand.inputState = {
                    pinching: !1
                }),
                this._hand
            }
            getTargetRaySpace() {
                return null === this._targetRay && (this._targetRay = new En.Z,
                this._targetRay.matrixAutoUpdate = !1,
                this._targetRay.visible = !1,
                this._targetRay.hasLinearVelocity = !1,
                this._targetRay.linearVelocity = new r.P,
                this._targetRay.hasAngularVelocity = !1,
                this._targetRay.angularVelocity = new r.P),
                this._targetRay
            }
            getGripSpace() {
                return null === this._grip && (this._grip = new En.Z,
                this._grip.matrixAutoUpdate = !1,
                this._grip.visible = !1,
                this._grip.hasLinearVelocity = !1,
                this._grip.linearVelocity = new r.P,
                this._grip.hasAngularVelocity = !1,
                this._grip.angularVelocity = new r.P),
                this._grip
            }
            dispatchEvent(t) {
                return null !== this._targetRay && this._targetRay.dispatchEvent(t),
                null !== this._grip && this._grip.dispatchEvent(t),
                null !== this._hand && this._hand.dispatchEvent(t),
                this
            }
            disconnect(t) {
                return this.dispatchEvent({
                    type: "disconnected",
                    data: t
                }),
                null !== this._targetRay && (this._targetRay.visible = !1),
                null !== this._grip && (this._grip.visible = !1),
                null !== this._hand && (this._hand.visible = !1),
                this
            }
            update(t, e, n) {
                let i = null
                  , r = null
                  , a = null;
                const s = this._targetRay
                  , o = this._grip
                  , l = this._hand;
                if (t && "visible-blurred" !== e.session.visibilityState)
                    if (null !== s && (i = e.getPose(t.targetRaySpace, n),
                    null !== i && (s.matrix.fromArray(i.transform.matrix),
                    s.matrix.decompose(s.position, s.rotation, s.scale),
                    i.linearVelocity ? (s.hasLinearVelocity = !0,
                    s.linearVelocity.copy(i.linearVelocity)) : s.hasLinearVelocity = !1,
                    i.angularVelocity ? (s.hasAngularVelocity = !0,
                    s.angularVelocity.copy(i.angularVelocity)) : s.hasAngularVelocity = !1,
                    this.dispatchEvent(An))),
                    l && t.hand) {
                        a = !0;
                        for (const i of t.hand.values()) {
                            const t = e.getJointPose(i, n);
                            if (void 0 === l.joints[i.jointName]) {
                                const t = new En.Z;
                                t.matrixAutoUpdate = !1,
                                t.visible = !1,
                                l.joints[i.jointName] = t,
                                l.add(t)
                            }
                            const r = l.joints[i.jointName];
                            null !== t && (r.matrix.fromArray(t.transform.matrix),
                            r.matrix.decompose(r.position, r.rotation, r.scale),
                            r.jointRadius = t.radius),
                            r.visible = null !== t
                        }
                        const i = l.joints["index-finger-tip"]
                          , r = l.joints["thumb-tip"]
                          , s = i.position.distanceTo(r.position)
                          , o = .02
                          , c = .005;
                        l.inputState.pinching && s > o + c ? (l.inputState.pinching = !1,
                        this.dispatchEvent({
                            type: "pinchend",
                            handedness: t.handedness,
                            target: this
                        })) : !l.inputState.pinching && s <= o - c && (l.inputState.pinching = !0,
                        this.dispatchEvent({
                            type: "pinchstart",
                            handedness: t.handedness,
                            target: this
                        }))
                    } else
                        null !== o && t.gripSpace && (r = e.getPose(t.gripSpace, n),
                        null !== r && (o.matrix.fromArray(r.transform.matrix),
                        o.matrix.decompose(o.position, o.rotation, o.scale),
                        r.linearVelocity ? (o.hasLinearVelocity = !0,
                        o.linearVelocity.copy(r.linearVelocity)) : o.hasLinearVelocity = !1,
                        r.angularVelocity ? (o.hasAngularVelocity = !0,
                        o.angularVelocity.copy(r.angularVelocity)) : o.hasAngularVelocity = !1));
                return null !== s && (s.visible = null !== i),
                null !== o && (o.visible = null !== r),
                null !== l && (l.visible = null !== a),
                this
            }
        }
        class Rn extends B.x {
            constructor(t, e, n, r, a, s, o, l, c, u) {
                if ((u = void 0 !== u ? u : i.qkB) !== i.qkB && u !== i.brP)
                    throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
                void 0 === n && u === i.qkB && (n = i.LsT),
                void 0 === n && u === i.brP && (n = i.wJv),
                super(null, r, a, s, o, l, u, n, c),
                this.image = {
                    width: t,
                    height: e
                },
                this.magFilter = void 0 !== o ? o : i.TyD,
                this.minFilter = void 0 !== l ? l : i.TyD,
                this.flipY = !1,
                this.generateMipmaps = !1
            }
        }
        Rn.prototype.isDepthTexture = !0;
        class Cn extends z.p {
            constructor(t, e) {
                super();
                const n = this;
                let a = null
                  , s = 1
                  , o = null
                  , l = "local-floor";
                const c = t.extensions.has("WEBGL_multisampled_render_to_texture");
                let u = null
                  , h = null
                  , d = null
                  , p = null
                  , m = !1
                  , _ = null;
                const v = e.getContextAttributes();
                let x = null
                  , y = null;
                const b = []
                  , M = new Map
                  , S = new W;
                S.layers.enable(1),
                S.viewport = new f.L;
                const w = new W;
                w.layers.enable(2),
                w.viewport = new f.L;
                const T = [S, w]
                  , E = new Tn;
                E.layers.enable(1),
                E.layers.enable(2);
                let A = null
                  , L = null;
                function R(t) {
                    const e = M.get(t.inputSource);
                    e && e.dispatchEvent({
                        type: t.type,
                        data: t.inputSource
                    })
                }
                function C() {
                    M.forEach((function(t, e) {
                        t.disconnect(e)
                    }
                    )),
                    M.clear(),
                    A = null,
                    L = null,
                    t.setRenderTarget(x),
                    p = null,
                    d = null,
                    h = null,
                    a = null,
                    y = null,
                    F.stop(),
                    n.isPresenting = !1,
                    n.dispatchEvent({
                        type: "sessionend"
                    })
                }
                function P(t) {
                    const e = a.inputSources;
                    for (let t = 0; t < b.length; t++)
                        M.set(e[t], b[t]);
                    for (let e = 0; e < t.removed.length; e++) {
                        const n = t.removed[e]
                          , i = M.get(n);
                        i && (i.dispatchEvent({
                            type: "disconnected",
                            data: n
                        }),
                        M.delete(n))
                    }
                    for (let e = 0; e < t.added.length; e++) {
                        const n = t.added[e]
                          , i = M.get(n);
                        i && i.dispatchEvent({
                            type: "connected",
                            data: n
                        })
                    }
                }
                this.cameraAutoUpdate = !0,
                this.enabled = !1,
                this.isPresenting = !1,
                this.getController = function(t) {
                    let e = b[t];
                    return void 0 === e && (e = new Ln,
                    b[t] = e),
                    e.getTargetRaySpace()
                }
                ,
                this.getControllerGrip = function(t) {
                    let e = b[t];
                    return void 0 === e && (e = new Ln,
                    b[t] = e),
                    e.getGripSpace()
                }
                ,
                this.getHand = function(t) {
                    let e = b[t];
                    return void 0 === e && (e = new Ln,
                    b[t] = e),
                    e.getHandSpace()
                }
                ,
                this.setFramebufferScaleFactor = function(t) {
                    s = t,
                    !0 === n.isPresenting && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")
                }
                ,
                this.setReferenceSpaceType = function(t) {
                    l = t,
                    !0 === n.isPresenting && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")
                }
                ,
                this.getReferenceSpace = function() {
                    return o
                }
                ,
                this.getBaseLayer = function() {
                    return null !== d ? d : p
                }
                ,
                this.getBinding = function() {
                    return h
                }
                ,
                this.getFrame = function() {
                    return _
                }
                ,
                this.getSession = function() {
                    return a
                }
                ,
                this.setSession = async function(r) {
                    if (a = r,
                    null !== a) {
                        if (x = t.getRenderTarget(),
                        a.addEventListener("select", R),
                        a.addEventListener("selectstart", R),
                        a.addEventListener("selectend", R),
                        a.addEventListener("squeeze", R),
                        a.addEventListener("squeezestart", R),
                        a.addEventListener("squeezeend", R),
                        a.addEventListener("end", C),
                        a.addEventListener("inputsourceschange", P),
                        !0 !== v.xrCompatible && await e.makeXRCompatible(),
                        void 0 === a.renderState.layers || !1 === t.capabilities.isWebGL2) {
                            const n = {
                                antialias: void 0 !== a.renderState.layers || v.antialias,
                                alpha: v.alpha,
                                depth: v.depth,
                                stencil: v.stencil,
                                framebufferScaleFactor: s
                            };
                            p = new XRWebGLLayer(a,e,n),
                            a.updateRenderState({
                                baseLayer: p
                            }),
                            y = new G(p.framebufferWidth,p.framebufferHeight,{
                                format: i.wk1,
                                type: i.ywz,
                                encoding: t.outputEncoding
                            })
                        } else {
                            m = v.antialias;
                            let n = null
                              , r = null
                              , o = null;
                            v.depth && (o = v.stencil ? e.DEPTH24_STENCIL8 : e.DEPTH_COMPONENT24,
                            n = v.stencil ? i.brP : i.qkB,
                            r = v.stencil ? i.wJv : i.LsT);
                            const l = {
                                colorFormat: v.alpha || m ? e.RGBA8 : e.RGB8,
                                depthFormat: o,
                                scaleFactor: s
                            };
                            h = new XRWebGLBinding(a,e),
                            d = h.createProjectionLayer(l),
                            a.updateRenderState({
                                layers: [d]
                            }),
                            y = m ? new Rt(d.textureWidth,d.textureHeight,{
                                format: i.wk1,
                                type: i.ywz,
                                depthTexture: new Rn(d.textureWidth,d.textureHeight,r,void 0,void 0,void 0,void 0,void 0,void 0,n),
                                stencilBuffer: v.stencil,
                                ignoreDepth: d.ignoreDepthValues,
                                useRenderToTexture: c,
                                encoding: t.outputEncoding
                            }) : new G(d.textureWidth,d.textureHeight,{
                                format: v.alpha ? i.wk1 : i.UCm,
                                type: i.ywz,
                                depthTexture: new Rn(d.textureWidth,d.textureHeight,r,void 0,void 0,void 0,void 0,void 0,void 0,n),
                                stencilBuffer: v.stencil,
                                ignoreDepth: d.ignoreDepthValues,
                                encoding: t.outputEncoding
                            })
                        }
                        this.setFoveation(1),
                        o = await a.requestReferenceSpace(l),
                        F.setContext(a),
                        F.start(),
                        n.isPresenting = !0,
                        n.dispatchEvent({
                            type: "sessionstart"
                        })
                    }
                }
                ;
                const D = new r.P
                  , N = new r.P;
                function I(t, e) {
                    null === e ? t.matrixWorld.copy(t.matrix) : t.matrixWorld.multiplyMatrices(e.matrixWorld, t.matrix),
                    t.matrixWorldInverse.copy(t.matrixWorld).invert()
                }
                this.updateCamera = function(t) {
                    if (null === a)
                        return;
                    E.near = w.near = S.near = t.near,
                    E.far = w.far = S.far = t.far,
                    A === E.near && L === E.far || (a.updateRenderState({
                        depthNear: E.near,
                        depthFar: E.far
                    }),
                    A = E.near,
                    L = E.far);
                    const e = t.parent
                      , n = E.cameras;
                    I(E, e);
                    for (let t = 0; t < n.length; t++)
                        I(n[t], e);
                    E.matrixWorld.decompose(E.position, E.quaternion, E.scale),
                    t.position.copy(E.position),
                    t.quaternion.copy(E.quaternion),
                    t.scale.copy(E.scale),
                    t.matrix.copy(E.matrix),
                    t.matrixWorld.copy(E.matrixWorld);
                    const i = t.children;
                    for (let t = 0, e = i.length; t < e; t++)
                        i[t].updateMatrixWorld(!0);
                    2 === n.length ? function(t, e, n) {
                        D.setFromMatrixPosition(e.matrixWorld),
                        N.setFromMatrixPosition(n.matrixWorld);
                        const i = D.distanceTo(N)
                          , r = e.projectionMatrix.elements
                          , a = n.projectionMatrix.elements
                          , s = r[14] / (r[10] - 1)
                          , o = r[14] / (r[10] + 1)
                          , l = (r[9] + 1) / r[5]
                          , c = (r[9] - 1) / r[5]
                          , u = (r[8] - 1) / r[0]
                          , h = (a[8] + 1) / a[0]
                          , d = s * u
                          , p = s * h
                          , m = i / (-u + h)
                          , f = m * -u;
                        e.matrixWorld.decompose(t.position, t.quaternion, t.scale),
                        t.translateX(f),
                        t.translateZ(m),
                        t.matrixWorld.compose(t.position, t.quaternion, t.scale),
                        t.matrixWorldInverse.copy(t.matrixWorld).invert();
                        const g = s + m
                          , _ = o + m
                          , v = d - f
                          , x = p + (i - f)
                          , y = l * o / _ * g
                          , b = c * o / _ * g;
                        t.projectionMatrix.makePerspective(v, x, y, b, g, _)
                    }(E, S, w) : E.projectionMatrix.copy(S.projectionMatrix)
                }
                ,
                this.getCamera = function() {
                    return E
                }
                ,
                this.getFoveation = function() {
                    return null !== d ? d.fixedFoveation : null !== p ? p.fixedFoveation : void 0
                }
                ,
                this.setFoveation = function(t) {
                    null !== d && (d.fixedFoveation = t),
                    null !== p && void 0 !== p.fixedFoveation && (p.fixedFoveation = t)
                }
                ;
                let U = null;
                const F = new g;
                F.setAnimationLoop((function(e, n) {
                    if (u = n.getViewerPose(o),
                    _ = n,
                    null !== u) {
                        const e = u.views;
                        null !== p && (t.setRenderTargetFramebuffer(y, p.framebuffer),
                        t.setRenderTarget(y));
                        let n = !1;
                        e.length !== E.cameras.length && (E.cameras.length = 0,
                        n = !0);
                        for (let i = 0; i < e.length; i++) {
                            const r = e[i];
                            let a = null;
                            if (null !== p)
                                a = p.getViewport(r);
                            else {
                                const e = h.getViewSubImage(d, r);
                                a = e.viewport,
                                0 === i && (t.setRenderTargetTextures(y, e.colorTexture, d.ignoreDepthValues ? void 0 : e.depthStencilTexture),
                                t.setRenderTarget(y))
                            }
                            const s = T[i];
                            s.matrix.fromArray(r.transform.matrix),
                            s.projectionMatrix.fromArray(r.projectionMatrix),
                            s.viewport.set(a.x, a.y, a.width, a.height),
                            0 === i && E.matrix.copy(s.matrix),
                            !0 === n && E.cameras.push(s)
                        }
                    }
                    const i = a.inputSources;
                    for (let t = 0; t < b.length; t++) {
                        const e = b[t]
                          , r = i[t];
                        e.update(r, n, o)
                    }
                    U && U(e, n),
                    _ = null
                }
                )),
                this.setAnimationLoop = function(t) {
                    U = t
                }
                ,
                this.dispose = function() {}
            }
        }
        function Pn(t) {
            function e(e, n) {
                e.opacity.value = n.opacity,
                n.color && e.diffuse.value.copy(n.color),
                n.emissive && e.emissive.value.copy(n.emissive).multiplyScalar(n.emissiveIntensity),
                n.map && (e.map.value = n.map),
                n.alphaMap && (e.alphaMap.value = n.alphaMap),
                n.specularMap && (e.specularMap.value = n.specularMap),
                n.alphaTest > 0 && (e.alphaTest.value = n.alphaTest);
                const i = t.get(n).envMap;
                let r, a;
                i && (e.envMap.value = i,
                e.flipEnvMap.value = i.isCubeTexture && !1 === i.isRenderTargetTexture ? -1 : 1,
                e.reflectivity.value = n.reflectivity,
                e.ior.value = n.ior,
                e.refractionRatio.value = n.refractionRatio),
                n.lightMap && (e.lightMap.value = n.lightMap,
                e.lightMapIntensity.value = n.lightMapIntensity),
                n.aoMap && (e.aoMap.value = n.aoMap,
                e.aoMapIntensity.value = n.aoMapIntensity),
                n.map ? r = n.map : n.specularMap ? r = n.specularMap : n.displacementMap ? r = n.displacementMap : n.normalMap ? r = n.normalMap : n.bumpMap ? r = n.bumpMap : n.roughnessMap ? r = n.roughnessMap : n.metalnessMap ? r = n.metalnessMap : n.alphaMap ? r = n.alphaMap : n.emissiveMap ? r = n.emissiveMap : n.clearcoatMap ? r = n.clearcoatMap : n.clearcoatNormalMap ? r = n.clearcoatNormalMap : n.clearcoatRoughnessMap ? r = n.clearcoatRoughnessMap : n.specularIntensityMap ? r = n.specularIntensityMap : n.specularColorMap ? r = n.specularColorMap : n.transmissionMap ? r = n.transmissionMap : n.thicknessMap ? r = n.thicknessMap : n.sheenColorMap ? r = n.sheenColorMap : n.sheenRoughnessMap && (r = n.sheenRoughnessMap),
                void 0 !== r && (r.isWebGLRenderTarget && (r = r.texture),
                !0 === r.matrixAutoUpdate && r.updateMatrix(),
                e.uvTransform.value.copy(r.matrix)),
                n.aoMap ? a = n.aoMap : n.lightMap && (a = n.lightMap),
                void 0 !== a && (a.isWebGLRenderTarget && (a = a.texture),
                !0 === a.matrixAutoUpdate && a.updateMatrix(),
                e.uv2Transform.value.copy(a.matrix))
            }
            function n(e, n) {
                e.roughness.value = n.roughness,
                e.metalness.value = n.metalness,
                n.roughnessMap && (e.roughnessMap.value = n.roughnessMap),
                n.metalnessMap && (e.metalnessMap.value = n.metalnessMap),
                n.emissiveMap && (e.emissiveMap.value = n.emissiveMap),
                n.bumpMap && (e.bumpMap.value = n.bumpMap,
                e.bumpScale.value = n.bumpScale,
                n.side === i._Li && (e.bumpScale.value *= -1)),
                n.normalMap && (e.normalMap.value = n.normalMap,
                e.normalScale.value.copy(n.normalScale),
                n.side === i._Li && e.normalScale.value.negate()),
                n.displacementMap && (e.displacementMap.value = n.displacementMap,
                e.displacementScale.value = n.displacementScale,
                e.displacementBias.value = n.displacementBias),
                t.get(n).envMap && (e.envMapIntensity.value = n.envMapIntensity)
            }
            return {
                refreshFogUniforms: function(t, e) {
                    t.fogColor.value.copy(e.color),
                    e.isFog ? (t.fogNear.value = e.near,
                    t.fogFar.value = e.far) : e.isFogExp2 && (t.fogDensity.value = e.density)
                },
                refreshMaterialUniforms: function(t, r, a, s, o) {
                    r.isMeshBasicMaterial ? e(t, r) : r.isMeshLambertMaterial ? (e(t, r),
                    function(t, e) {
                        e.emissiveMap && (t.emissiveMap.value = e.emissiveMap)
                    }(t, r)) : r.isMeshToonMaterial ? (e(t, r),
                    function(t, e) {
                        e.gradientMap && (t.gradientMap.value = e.gradientMap),
                        e.emissiveMap && (t.emissiveMap.value = e.emissiveMap),
                        e.bumpMap && (t.bumpMap.value = e.bumpMap,
                        t.bumpScale.value = e.bumpScale,
                        e.side === i._Li && (t.bumpScale.value *= -1)),
                        e.normalMap && (t.normalMap.value = e.normalMap,
                        t.normalScale.value.copy(e.normalScale),
                        e.side === i._Li && t.normalScale.value.negate()),
                        e.displacementMap && (t.displacementMap.value = e.displacementMap,
                        t.displacementScale.value = e.displacementScale,
                        t.displacementBias.value = e.displacementBias)
                    }(t, r)) : r.isMeshPhongMaterial ? (e(t, r),
                    function(t, e) {
                        t.specular.value.copy(e.specular),
                        t.shininess.value = Math.max(e.shininess, 1e-4),
                        e.emissiveMap && (t.emissiveMap.value = e.emissiveMap),
                        e.bumpMap && (t.bumpMap.value = e.bumpMap,
                        t.bumpScale.value = e.bumpScale,
                        e.side === i._Li && (t.bumpScale.value *= -1)),
                        e.normalMap && (t.normalMap.value = e.normalMap,
                        t.normalScale.value.copy(e.normalScale),
                        e.side === i._Li && t.normalScale.value.negate()),
                        e.displacementMap && (t.displacementMap.value = e.displacementMap,
                        t.displacementScale.value = e.displacementScale,
                        t.displacementBias.value = e.displacementBias)
                    }(t, r)) : r.isMeshStandardMaterial ? (e(t, r),
                    r.isMeshPhysicalMaterial ? function(t, e, r) {
                        n(t, e),
                        t.ior.value = e.ior,
                        e.sheen > 0 && (t.sheenColor.value.copy(e.sheenColor).multiplyScalar(e.sheen),
                        t.sheenRoughness.value = e.sheenRoughness,
                        e.sheenColorMap && (t.sheenColorMap.value = e.sheenColorMap),
                        e.sheenRoughnessMap && (t.sheenRoughnessMap.value = e.sheenRoughnessMap)),
                        e.clearcoat > 0 && (t.clearcoat.value = e.clearcoat,
                        t.clearcoatRoughness.value = e.clearcoatRoughness,
                        e.clearcoatMap && (t.clearcoatMap.value = e.clearcoatMap),
                        e.clearcoatRoughnessMap && (t.clearcoatRoughnessMap.value = e.clearcoatRoughnessMap),
                        e.clearcoatNormalMap && (t.clearcoatNormalScale.value.copy(e.clearcoatNormalScale),
                        t.clearcoatNormalMap.value = e.clearcoatNormalMap,
                        e.side === i._Li && t.clearcoatNormalScale.value.negate())),
                        e.transmission > 0 && (t.transmission.value = e.transmission,
                        t.transmissionSamplerMap.value = r.texture,
                        t.transmissionSamplerSize.value.set(r.width, r.height),
                        e.transmissionMap && (t.transmissionMap.value = e.transmissionMap),
                        t.thickness.value = e.thickness,
                        e.thicknessMap && (t.thicknessMap.value = e.thicknessMap),
                        t.attenuationDistance.value = e.attenuationDistance,
                        t.attenuationColor.value.copy(e.attenuationColor)),
                        t.specularIntensity.value = e.specularIntensity,
                        t.specularColor.value.copy(e.specularColor),
                        e.specularIntensityMap && (t.specularIntensityMap.value = e.specularIntensityMap),
                        e.specularColorMap && (t.specularColorMap.value = e.specularColorMap)
                    }(t, r, o) : n(t, r)) : r.isMeshMatcapMaterial ? (e(t, r),
                    function(t, e) {
                        e.matcap && (t.matcap.value = e.matcap),
                        e.bumpMap && (t.bumpMap.value = e.bumpMap,
                        t.bumpScale.value = e.bumpScale,
                        e.side === i._Li && (t.bumpScale.value *= -1)),
                        e.normalMap && (t.normalMap.value = e.normalMap,
                        t.normalScale.value.copy(e.normalScale),
                        e.side === i._Li && t.normalScale.value.negate()),
                        e.displacementMap && (t.displacementMap.value = e.displacementMap,
                        t.displacementScale.value = e.displacementScale,
                        t.displacementBias.value = e.displacementBias)
                    }(t, r)) : r.isMeshDepthMaterial ? (e(t, r),
                    function(t, e) {
                        e.displacementMap && (t.displacementMap.value = e.displacementMap,
                        t.displacementScale.value = e.displacementScale,
                        t.displacementBias.value = e.displacementBias)
                    }(t, r)) : r.isMeshDistanceMaterial ? (e(t, r),
                    function(t, e) {
                        e.displacementMap && (t.displacementMap.value = e.displacementMap,
                        t.displacementScale.value = e.displacementScale,
                        t.displacementBias.value = e.displacementBias),
                        t.referencePosition.value.copy(e.referencePosition),
                        t.nearDistance.value = e.nearDistance,
                        t.farDistance.value = e.farDistance
                    }(t, r)) : r.isMeshNormalMaterial ? (e(t, r),
                    function(t, e) {
                        e.bumpMap && (t.bumpMap.value = e.bumpMap,
                        t.bumpScale.value = e.bumpScale,
                        e.side === i._Li && (t.bumpScale.value *= -1)),
                        e.normalMap && (t.normalMap.value = e.normalMap,
                        t.normalScale.value.copy(e.normalScale),
                        e.side === i._Li && t.normalScale.value.negate()),
                        e.displacementMap && (t.displacementMap.value = e.displacementMap,
                        t.displacementScale.value = e.displacementScale,
                        t.displacementBias.value = e.displacementBias)
                    }(t, r)) : r.isLineBasicMaterial ? (function(t, e) {
                        t.diffuse.value.copy(e.color),
                        t.opacity.value = e.opacity
                    }(t, r),
                    r.isLineDashedMaterial && function(t, e) {
                        t.dashSize.value = e.dashSize,
                        t.totalSize.value = e.dashSize + e.gapSize,
                        t.scale.value = e.scale
                    }(t, r)) : r.isPointsMaterial ? function(t, e, n, i) {
                        let r;
                        t.diffuse.value.copy(e.color),
                        t.opacity.value = e.opacity,
                        t.size.value = e.size * n,
                        t.scale.value = .5 * i,
                        e.map && (t.map.value = e.map),
                        e.alphaMap && (t.alphaMap.value = e.alphaMap),
                        e.alphaTest > 0 && (t.alphaTest.value = e.alphaTest),
                        e.map ? r = e.map : e.alphaMap && (r = e.alphaMap),
                        void 0 !== r && (!0 === r.matrixAutoUpdate && r.updateMatrix(),
                        t.uvTransform.value.copy(r.matrix))
                    }(t, r, a, s) : r.isSpriteMaterial ? function(t, e) {
                        let n;
                        t.diffuse.value.copy(e.color),
                        t.opacity.value = e.opacity,
                        t.rotation.value = e.rotation,
                        e.map && (t.map.value = e.map),
                        e.alphaMap && (t.alphaMap.value = e.alphaMap),
                        e.alphaTest > 0 && (t.alphaTest.value = e.alphaTest),
                        e.map ? n = e.map : e.alphaMap && (n = e.alphaMap),
                        void 0 !== n && (!0 === n.matrixAutoUpdate && n.updateMatrix(),
                        t.uvTransform.value.copy(n.matrix))
                    }(t, r) : r.isShadowMaterial ? (t.color.value.copy(r.color),
                    t.opacity.value = r.opacity) : r.isShaderMaterial && (r.uniformsNeedUpdate = !1)
                }
            }
        }
        function Dn(t={}) {
            const e = void 0 !== t.canvas ? t.canvas : function() {
                const t = (0,
                yt.c)("canvas");
                return t.style.display = "block",
                t
            }()
              , n = void 0 !== t.context ? t.context : null
              , a = void 0 !== t.alpha && t.alpha
              , s = void 0 === t.depth || t.depth
              , o = void 0 === t.stencil || t.stencil
              , l = void 0 !== t.antialias && t.antialias
              , c = void 0 === t.premultipliedAlpha || t.premultipliedAlpha
              , u = void 0 !== t.preserveDrawingBuffer && t.preserveDrawingBuffer
              , h = void 0 !== t.powerPreference ? t.powerPreference : "default"
              , d = void 0 !== t.failIfMajorPerformanceCaveat && t.failIfMajorPerformanceCaveat;
            let v = null
              , x = null;
            const y = []
              , b = [];
            this.domElement = e,
            this.debug = {
                checkShaderErrors: !0
            },
            this.autoClear = !0,
            this.autoClearColor = !0,
            this.autoClearDepth = !0,
            this.autoClearStencil = !0,
            this.sortObjects = !0,
            this.clippingPlanes = [],
            this.localClippingEnabled = !1,
            this.outputEncoding = i.rnI,
            this.physicallyCorrectLights = !1,
            this.toneMapping = i.uL9,
            this.toneMappingExposure = 1;
            const M = this;
            let S = !1
              , w = 0
              , T = 0
              , E = null
              , A = -1
              , L = null;
            const R = new f.L
              , C = new f.L;
            let P = null
              , D = e.width
              , z = e.height
              , B = 1
              , H = null
              , k = null;
            const V = new f.L(0,0,D,z)
              , W = new f.L(0,0,D,z);
            let X = !1;
            const q = []
              , j = new p;
            let Y = !1
              , K = !1
              , J = null;
            const Q = new m.y
              , $ = new r.P
              , tt = {
                background: null,
                fog: null,
                environment: null,
                overrideMaterial: null,
                isScene: !0
            };
            function et() {
                return null === E ? B : 1
            }
            let nt, it, rt, at, st, ot, lt, ct, ut, ht, dt, pt, mt, ft, gt, _t, wt, Tt, Et, At, Pt, Dt, Nt, It = n;
            function Ut(t, n) {
                for (let i = 0; i < t.length; i++) {
                    const r = t[i]
                      , a = e.getContext(r, n);
                    if (null !== a)
                        return a
                }
                return null
            }
            try {
                const t = {
                    alpha: a,
                    depth: s,
                    stencil: o,
                    antialias: l,
                    premultipliedAlpha: c,
                    preserveDrawingBuffer: u,
                    powerPreference: h,
                    failIfMajorPerformanceCaveat: d
                };
                if ("setAttribute"in e && e.setAttribute("data-engine", `three.js r${i.UZH}`),
                e.addEventListener("webglcontextlost", zt, !1),
                e.addEventListener("webglcontextrestored", Bt, !1),
                null === It) {
                    const e = ["webgl2", "webgl", "experimental-webgl"];
                    if (!0 === M.isWebGL1Renderer && e.shift(),
                    It = Ut(e, t),
                    null === It)
                        throw Ut(e) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.")
                }
                void 0 === It.getShaderPrecisionFormat && (It.getShaderPrecisionFormat = function() {
                    return {
                        rangeMin: 1,
                        rangeMax: 1,
                        precision: 1
                    }
                }
                )
            } catch (t) {
                throw console.error("THREE.WebGLRenderer: " + t.message),
                t
            }
            function Ft() {
                nt = new xt(It),
                it = new F(It,nt,t),
                nt.init(it),
                Dt = new wn(It,nt,it),
                rt = new Mn(It,nt,it),
                q[0] = It.BACK,
                at = new St(It),
                st = new ln,
                ot = new Sn(It,nt,rt,st,it,Dt,at),
                lt = new Z(M),
                ct = new vt(M),
                ut = new _(It,it),
                Nt = new I(It,nt,ut,it),
                ht = new bt(It,ut,at,Nt),
                dt = new Ct(It,ht,ut,at),
                Et = new Lt(It,it,ot),
                _t = new O(st),
                pt = new on(M,lt,ct,nt,it,Nt,_t),
                mt = new Pn(st),
                ft = new dn,
                gt = new vn(nt,it),
                Tt = new N(M,lt,rt,dt,c),
                wt = new bn(M,dt,it),
                At = new U(It,nt,at,it),
                Pt = new Mt(It,nt,at,it),
                at.programs = pt.programs,
                M.capabilities = it,
                M.extensions = nt,
                M.properties = st,
                M.renderLists = ft,
                M.shadowMap = wt,
                M.state = rt,
                M.info = at
            }
            Ft();
            const Ot = new Cn(M,It);
            function zt(t) {
                t.preventDefault(),
                console.log("THREE.WebGLRenderer: Context Lost."),
                S = !0
            }
            function Bt() {
                console.log("THREE.WebGLRenderer: Context Restored."),
                S = !1;
                const t = at.autoReset
                  , e = wt.enabled
                  , n = wt.autoUpdate
                  , i = wt.needsUpdate
                  , r = wt.type;
                Ft(),
                at.autoReset = t,
                wt.enabled = e,
                wt.autoUpdate = n,
                wt.needsUpdate = i,
                wt.type = r
            }
            function Gt(t) {
                const e = t.target;
                e.removeEventListener("dispose", Gt),
                function(t) {
                    (function(t) {
                        const e = st.get(t).programs;
                        void 0 !== e && (e.forEach((function(t) {
                            pt.releaseProgram(t)
                        }
                        )),
                        t.isShaderMaterial && pt.releaseShaderCache(t))
                    }
                    )(t),
                    st.remove(t)
                }(e)
            }
            this.xr = Ot,
            this.getContext = function() {
                return It
            }
            ,
            this.getContextAttributes = function() {
                return It.getContextAttributes()
            }
            ,
            this.forceContextLoss = function() {
                const t = nt.get("WEBGL_lose_context");
                t && t.loseContext()
            }
            ,
            this.forceContextRestore = function() {
                const t = nt.get("WEBGL_lose_context");
                t && t.restoreContext()
            }
            ,
            this.getPixelRatio = function() {
                return B
            }
            ,
            this.setPixelRatio = function(t) {
                void 0 !== t && (B = t,
                this.setSize(D, z, !1))
            }
            ,
            this.getSize = function(t) {
                return t.set(D, z)
            }
            ,
            this.setSize = function(t, n, i) {
                Ot.isPresenting ? console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.") : (D = t,
                z = n,
                e.width = Math.floor(t * B),
                e.height = Math.floor(n * B),
                !1 !== i && (e.style.width = t + "px",
                e.style.height = n + "px"),
                this.setViewport(0, 0, t, n))
            }
            ,
            this.getDrawingBufferSize = function(t) {
                return t.set(D * B, z * B).floor()
            }
            ,
            this.setDrawingBufferSize = function(t, n, i) {
                D = t,
                z = n,
                B = i,
                e.width = Math.floor(t * i),
                e.height = Math.floor(n * i),
                this.setViewport(0, 0, t, n)
            }
            ,
            this.getCurrentViewport = function(t) {
                return t.copy(R)
            }
            ,
            this.getViewport = function(t) {
                return t.copy(V)
            }
            ,
            this.setViewport = function(t, e, n, i) {
                t.isVector4 ? V.set(t.x, t.y, t.z, t.w) : V.set(t, e, n, i),
                rt.viewport(R.copy(V).multiplyScalar(B).floor())
            }
            ,
            this.getScissor = function(t) {
                return t.copy(W)
            }
            ,
            this.setScissor = function(t, e, n, i) {
                t.isVector4 ? W.set(t.x, t.y, t.z, t.w) : W.set(t, e, n, i),
                rt.scissor(C.copy(W).multiplyScalar(B).floor())
            }
            ,
            this.getScissorTest = function() {
                return X
            }
            ,
            this.setScissorTest = function(t) {
                rt.setScissorTest(X = t)
            }
            ,
            this.setOpaqueSort = function(t) {
                H = t
            }
            ,
            this.setTransparentSort = function(t) {
                k = t
            }
            ,
            this.getClearColor = function(t) {
                return t.copy(Tt.getClearColor())
            }
            ,
            this.setClearColor = function() {
                Tt.setClearColor.apply(Tt, arguments)
            }
            ,
            this.getClearAlpha = function() {
                return Tt.getClearAlpha()
            }
            ,
            this.setClearAlpha = function() {
                Tt.setClearAlpha.apply(Tt, arguments)
            }
            ,
            this.clear = function(t, e, n) {
                let i = 0;
                (void 0 === t || t) && (i |= It.COLOR_BUFFER_BIT),
                (void 0 === e || e) && (i |= It.DEPTH_BUFFER_BIT),
                (void 0 === n || n) && (i |= It.STENCIL_BUFFER_BIT),
                It.clear(i)
            }
            ,
            this.clearColor = function() {
                this.clear(!0, !1, !1)
            }
            ,
            this.clearDepth = function() {
                this.clear(!1, !0, !1)
            }
            ,
            this.clearStencil = function() {
                this.clear(!1, !1, !0)
            }
            ,
            this.dispose = function() {
                e.removeEventListener("webglcontextlost", zt, !1),
                e.removeEventListener("webglcontextrestored", Bt, !1),
                ft.dispose(),
                gt.dispose(),
                st.dispose(),
                lt.dispose(),
                ct.dispose(),
                dt.dispose(),
                Nt.dispose(),
                pt.dispose(),
                Ot.dispose(),
                Ot.removeEventListener("sessionstart", kt),
                Ot.removeEventListener("sessionend", Vt),
                J && (J.dispose(),
                J = null),
                Wt.stop()
            }
            ,
            this.renderBufferDirect = function(t, e, n, r, a, s) {
                null === e && (e = tt);
                const o = a.isMesh && a.matrixWorld.determinant() < 0
                  , l = function(t, e, n, r, a) {
                    !0 !== e.isScene && (e = tt),
                    ot.resetTextureUnits();
                    const s = e.fog
                      , o = r.isMeshStandardMaterial ? e.environment : null
                      , l = null === E ? M.outputEncoding : E.texture.encoding
                      , c = (r.isMeshStandardMaterial ? ct : lt).get(r.envMap || o)
                      , u = !0 === r.vertexColors && !!n.attributes.color && 4 === n.attributes.color.itemSize
                      , h = !!r.normalMap && !!n.attributes.tangent
                      , d = !!n.morphAttributes.position
                      , p = !!n.morphAttributes.normal
                      , m = n.morphAttributes.position ? n.morphAttributes.position.length : 0
                      , f = r.toneMapped ? M.toneMapping : i.uL9
                      , g = st.get(r)
                      , _ = x.state.lights;
                    if (!0 === Y && (!0 === K || t !== L)) {
                        const e = t === L && r.id === A;
                        _t.setState(r, t, e)
                    }
                    let v = !1;
                    r.version === g.__version ? g.needsLights && g.lightsStateVersion !== _.state.version || g.outputEncoding !== l || a.isInstancedMesh && !1 === g.instancing ? v = !0 : a.isInstancedMesh || !0 !== g.instancing ? a.isSkinnedMesh && !1 === g.skinning ? v = !0 : a.isSkinnedMesh || !0 !== g.skinning ? g.envMap !== c || r.fog && g.fog !== s ? v = !0 : void 0 === g.numClippingPlanes || g.numClippingPlanes === _t.numPlanes && g.numIntersection === _t.numIntersection ? (g.vertexAlphas !== u || g.vertexTangents !== h || g.morphTargets !== d || g.morphNormals !== p || g.toneMapping !== f || !0 === it.isWebGL2 && g.morphTargetsCount !== m) && (v = !0) : v = !0 : v = !0 : v = !0 : (v = !0,
                    g.__version = r.version);
                    let y = g.currentProgram;
                    !0 === v && (y = Zt(r, e, a));
                    let b = !1
                      , S = !1
                      , w = !1;
                    const T = y.getUniforms()
                      , R = g.uniforms;
                    if (rt.useProgram(y.program) && (b = !0,
                    S = !0,
                    w = !0),
                    r.id !== A && (A = r.id,
                    S = !0),
                    b || L !== t) {
                        if (T.setValue(It, "projectionMatrix", t.projectionMatrix),
                        it.logarithmicDepthBuffer && T.setValue(It, "logDepthBufFC", 2 / (Math.log(t.far + 1) / Math.LN2)),
                        L !== t && (L = t,
                        S = !0,
                        w = !0),
                        r.isShaderMaterial || r.isMeshPhongMaterial || r.isMeshToonMaterial || r.isMeshStandardMaterial || r.envMap) {
                            const e = T.map.cameraPosition;
                            void 0 !== e && e.setValue(It, $.setFromMatrixPosition(t.matrixWorld))
                        }
                        (r.isMeshPhongMaterial || r.isMeshToonMaterial || r.isMeshLambertMaterial || r.isMeshBasicMaterial || r.isMeshStandardMaterial || r.isShaderMaterial) && T.setValue(It, "isOrthographic", !0 === t.isOrthographicCamera),
                        (r.isMeshPhongMaterial || r.isMeshToonMaterial || r.isMeshLambertMaterial || r.isMeshBasicMaterial || r.isMeshStandardMaterial || r.isShaderMaterial || r.isShadowMaterial || a.isSkinnedMesh) && T.setValue(It, "viewMatrix", t.matrixWorldInverse)
                    }
                    if (a.isSkinnedMesh) {
                        T.setOptional(It, a, "bindMatrix"),
                        T.setOptional(It, a, "bindMatrixInverse");
                        const t = a.skeleton;
                        t && (it.floatVertexTextures ? (null === t.boneTexture && t.computeBoneTexture(),
                        T.setValue(It, "boneTexture", t.boneTexture, ot),
                        T.setValue(It, "boneTextureSize", t.boneTextureSize)) : T.setOptional(It, t, "boneMatrices"))
                    }
                    var C, P;
                    return !n || void 0 === n.morphAttributes.position && void 0 === n.morphAttributes.normal || Et.update(a, n, r, y),
                    (S || g.receiveShadow !== a.receiveShadow) && (g.receiveShadow = a.receiveShadow,
                    T.setValue(It, "receiveShadow", a.receiveShadow)),
                    S && (T.setValue(It, "toneMappingExposure", M.toneMappingExposure),
                    g.needsLights && (P = w,
                    (C = R).ambientLightColor.needsUpdate = P,
                    C.lightProbe.needsUpdate = P,
                    C.directionalLights.needsUpdate = P,
                    C.directionalLightShadows.needsUpdate = P,
                    C.pointLights.needsUpdate = P,
                    C.pointLightShadows.needsUpdate = P,
                    C.spotLights.needsUpdate = P,
                    C.spotLightShadows.needsUpdate = P,
                    C.rectAreaLights.needsUpdate = P,
                    C.hemisphereLights.needsUpdate = P),
                    s && r.fog && mt.refreshFogUniforms(R, s),
                    mt.refreshMaterialUniforms(R, r, B, z, J),
                    Fe.upload(It, g.uniformsList, R, ot)),
                    r.isShaderMaterial && !0 === r.uniformsNeedUpdate && (Fe.upload(It, g.uniformsList, R, ot),
                    r.uniformsNeedUpdate = !1),
                    r.isSpriteMaterial && T.setValue(It, "center", a.center),
                    T.setValue(It, "modelViewMatrix", a.modelViewMatrix),
                    T.setValue(It, "normalMatrix", a.normalMatrix),
                    T.setValue(It, "modelMatrix", a.matrixWorld),
                    y
                }(t, e, n, r, a);
                rt.setMaterial(r, o);
                let c = n.index;
                const u = n.attributes.position;
                if (null === c) {
                    if (void 0 === u || 0 === u.count)
                        return
                } else if (0 === c.count)
                    return;
                let h, d = 1;
                !0 === r.wireframe && (c = ht.getWireframeAttribute(n),
                d = 2),
                Nt.setup(a, r, l, n, c);
                let p = At;
                null !== c && (h = ut.get(c),
                p = Pt,
                p.setIndex(h));
                const m = null !== c ? c.count : u.count
                  , f = n.drawRange.start * d
                  , g = n.drawRange.count * d
                  , _ = null !== s ? s.start * d : 0
                  , v = null !== s ? s.count * d : 1 / 0
                  , y = Math.max(f, _)
                  , b = Math.min(m, f + g, _ + v) - 1
                  , S = Math.max(0, b - y + 1);
                if (0 !== S) {
                    if (a.isMesh)
                        !0 === r.wireframe ? (rt.setLineWidth(r.wireframeLinewidth * et()),
                        p.setMode(It.LINES)) : p.setMode(It.TRIANGLES);
                    else if (a.isLine) {
                        let t = r.linewidth;
                        void 0 === t && (t = 1),
                        rt.setLineWidth(t * et()),
                        a.isLineSegments ? p.setMode(It.LINES) : a.isLineLoop ? p.setMode(It.LINE_LOOP) : p.setMode(It.LINE_STRIP)
                    } else
                        a.isPoints ? p.setMode(It.POINTS) : a.isSprite && p.setMode(It.TRIANGLES);
                    if (a.isInstancedMesh)
                        p.renderInstances(y, S, a.count);
                    else if (n.isInstancedBufferGeometry) {
                        const t = Math.min(n.instanceCount, n._maxInstanceCount);
                        p.renderInstances(y, S, t)
                    } else
                        p.render(y, S)
                }
            }
            ,
            this.compile = function(t, e) {
                x = gt.get(t),
                x.init(),
                b.push(x),
                t.traverseVisible((function(t) {
                    t.isLight && t.layers.test(e.layers) && (x.pushLight(t),
                    t.castShadow && x.pushShadow(t))
                }
                )),
                x.setupLights(M.physicallyCorrectLights),
                t.traverse((function(e) {
                    const n = e.material;
                    if (n)
                        if (Array.isArray(n))
                            for (let i = 0; i < n.length; i++)
                                Zt(n[i], t, e);
                        else
                            Zt(n, t, e)
                }
                )),
                b.pop(),
                x = null
            }
            ;
            let Ht = null;
            function kt() {
                Wt.stop()
            }
            function Vt() {
                Wt.start()
            }
            const Wt = new g;
            function Xt(t, e, n, i) {
                if (!1 === t.visible)
                    return;
                if (t.layers.test(e.layers))
                    if (t.isGroup)
                        n = t.renderOrder;
                    else if (t.isLOD)
                        !0 === t.autoUpdate && t.update(e);
                    else if (t.isLight)
                        x.pushLight(t),
                        t.castShadow && x.pushShadow(t);
                    else if (t.isSprite) {
                        if (!t.frustumCulled || j.intersectsSprite(t)) {
                            i && $.setFromMatrixPosition(t.matrixWorld).applyMatrix4(Q);
                            const e = dt.update(t)
                              , r = t.material;
                            r.visible && v.push(t, e, r, n, $.z, null)
                        }
                    } else if ((t.isMesh || t.isLine || t.isPoints) && (t.isSkinnedMesh && t.skeleton.frame !== at.render.frame && (t.skeleton.update(),
                    t.skeleton.frame = at.render.frame),
                    !t.frustumCulled || j.intersectsObject(t))) {
                        i && $.setFromMatrixPosition(t.matrixWorld).applyMatrix4(Q);
                        const e = dt.update(t)
                          , r = t.material;
                        if (Array.isArray(r)) {
                            const i = e.groups;
                            for (let a = 0, s = i.length; a < s; a++) {
                                const s = i[a]
                                  , o = r[s.materialIndex];
                                o && o.visible && v.push(t, e, o, n, $.z, s)
                            }
                        } else
                            r.visible && v.push(t, e, r, n, $.z, null)
                    }
                const r = t.children;
                for (let t = 0, a = r.length; t < a; t++)
                    Xt(r[t], e, n, i)
            }
            function qt(t, e, n, r) {
                const a = t.opaque
                  , s = t.transmissive
                  , o = t.transparent;
                x.setupLightsView(n),
                s.length > 0 && function(t, e, n) {
                    if (null === J) {
                        const t = !0 === l && !0 === it.isWebGL2;
                        J = new (t ? Rt : G)(1024,1024,{
                            generateMipmaps: !0,
                            type: null !== Dt.convert(i.cLu) ? i.cLu : i.ywz,
                            minFilter: i.D1R,
                            magFilter: i.TyD,
                            wrapS: i.uWy,
                            wrapT: i.uWy,
                            useRenderToTexture: nt.has("WEBGL_multisampled_render_to_texture")
                        })
                    }
                    const r = M.getRenderTarget();
                    M.setRenderTarget(J),
                    M.clear();
                    const a = M.toneMapping;
                    M.toneMapping = i.uL9,
                    jt(t, e, n),
                    M.toneMapping = a,
                    ot.updateMultisampleRenderTarget(J),
                    ot.updateRenderTargetMipmap(J),
                    M.setRenderTarget(r)
                }(a, e, n),
                r && rt.viewport(R.copy(r)),
                a.length > 0 && jt(a, e, n),
                s.length > 0 && jt(s, e, n),
                o.length > 0 && jt(o, e, n)
            }
            function jt(t, e, n) {
                const i = !0 === e.isScene ? e.overrideMaterial : null;
                for (let r = 0, a = t.length; r < a; r++) {
                    const a = t[r]
                      , s = a.object
                      , o = a.geometry
                      , l = null === i ? a.material : i
                      , c = a.group;
                    s.layers.test(n.layers) && Yt(s, e, n, o, l, c)
                }
            }
            function Yt(t, e, n, r, a, s) {
                t.onBeforeRender(M, e, n, r, a, s),
                t.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse, t.matrixWorld),
                t.normalMatrix.getNormalMatrix(t.modelViewMatrix),
                a.onBeforeRender(M, e, n, r, t, s),
                !0 === a.transparent && a.side === i.ehD ? (a.side = i._Li,
                a.needsUpdate = !0,
                M.renderBufferDirect(n, e, r, a, t, s),
                a.side = i.Wl3,
                a.needsUpdate = !0,
                M.renderBufferDirect(n, e, r, a, t, s),
                a.side = i.ehD) : M.renderBufferDirect(n, e, r, a, t, s),
                t.onAfterRender(M, e, n, r, a, s)
            }
            function Zt(t, e, n) {
                !0 !== e.isScene && (e = tt);
                const i = st.get(t)
                  , r = x.state.lights
                  , a = x.state.shadowsArray
                  , s = r.state.version
                  , o = pt.getParameters(t, r.state, a, e, n)
                  , l = pt.getProgramCacheKey(o);
                let c = i.programs;
                i.environment = t.isMeshStandardMaterial ? e.environment : null,
                i.fog = e.fog,
                i.envMap = (t.isMeshStandardMaterial ? ct : lt).get(t.envMap || i.environment),
                void 0 === c && (t.addEventListener("dispose", Gt),
                c = new Map,
                i.programs = c);
                let u = c.get(l);
                if (void 0 !== u) {
                    if (i.currentProgram === u && i.lightsStateVersion === s)
                        return Kt(t, o),
                        u
                } else
                    o.uniforms = pt.getUniforms(t),
                    t.onBuild(n, o, M),
                    t.onBeforeCompile(o, M),
                    u = pt.acquireProgram(o, l),
                    c.set(l, u),
                    i.uniforms = o.uniforms;
                const h = i.uniforms;
                (t.isShaderMaterial || t.isRawShaderMaterial) && !0 !== t.clipping || (h.clippingPlanes = _t.uniform),
                Kt(t, o),
                i.needsLights = function(t) {
                    return t.isMeshLambertMaterial || t.isMeshToonMaterial || t.isMeshPhongMaterial || t.isMeshStandardMaterial || t.isShadowMaterial || t.isShaderMaterial && !0 === t.lights
                }(t),
                i.lightsStateVersion = s,
                i.needsLights && (h.ambientLightColor.value = r.state.ambient,
                h.lightProbe.value = r.state.probe,
                h.directionalLights.value = r.state.directional,
                h.directionalLightShadows.value = r.state.directionalShadow,
                h.spotLights.value = r.state.spot,
                h.spotLightShadows.value = r.state.spotShadow,
                h.rectAreaLights.value = r.state.rectArea,
                h.ltc_1.value = r.state.rectAreaLTC1,
                h.ltc_2.value = r.state.rectAreaLTC2,
                h.pointLights.value = r.state.point,
                h.pointLightShadows.value = r.state.pointShadow,
                h.hemisphereLights.value = r.state.hemi,
                h.directionalShadowMap.value = r.state.directionalShadowMap,
                h.directionalShadowMatrix.value = r.state.directionalShadowMatrix,
                h.spotShadowMap.value = r.state.spotShadowMap,
                h.spotShadowMatrix.value = r.state.spotShadowMatrix,
                h.pointShadowMap.value = r.state.pointShadowMap,
                h.pointShadowMatrix.value = r.state.pointShadowMatrix);
                const d = u.getUniforms()
                  , p = Fe.seqWithValue(d.seq, h);
                return i.currentProgram = u,
                i.uniformsList = p,
                u
            }
            function Kt(t, e) {
                const n = st.get(t);
                n.outputEncoding = e.outputEncoding,
                n.instancing = e.instancing,
                n.skinning = e.skinning,
                n.morphTargets = e.morphTargets,
                n.morphNormals = e.morphNormals,
                n.morphTargetsCount = e.morphTargetsCount,
                n.numClippingPlanes = e.numClippingPlanes,
                n.numIntersection = e.numClipIntersection,
                n.vertexAlphas = e.vertexAlphas,
                n.vertexTangents = e.vertexTangents,
                n.toneMapping = e.toneMapping
            }
            Wt.setAnimationLoop((function(t) {
                Ht && Ht(t)
            }
            )),
            "undefined" != typeof window && Wt.setContext(window),
            this.setAnimationLoop = function(t) {
                Ht = t,
                Ot.setAnimationLoop(t),
                null === t ? Wt.stop() : Wt.start()
            }
            ,
            Ot.addEventListener("sessionstart", kt),
            Ot.addEventListener("sessionend", Vt),
            this.render = function(t, e) {
                if (void 0 !== e && !0 !== e.isCamera)
                    return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
                if (!0 === S)
                    return;
                !0 === t.autoUpdate && t.updateMatrixWorld(),
                null === e.parent && e.updateMatrixWorld(),
                !0 === Ot.enabled && !0 === Ot.isPresenting && (!0 === Ot.cameraAutoUpdate && Ot.updateCamera(e),
                e = Ot.getCamera()),
                !0 === t.isScene && t.onBeforeRender(M, t, e, E),
                x = gt.get(t, b.length),
                x.init(),
                b.push(x),
                Q.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse),
                j.setFromProjectionMatrix(Q),
                K = this.localClippingEnabled,
                Y = _t.init(this.clippingPlanes, K, e),
                v = ft.get(t, y.length),
                v.init(),
                y.push(v),
                Xt(t, e, 0, M.sortObjects),
                v.finish(),
                !0 === M.sortObjects && v.sort(H, k),
                !0 === Y && _t.beginShadows();
                const n = x.state.shadowsArray;
                if (wt.render(n, t, e),
                !0 === Y && _t.endShadows(),
                !0 === this.info.autoReset && this.info.reset(),
                Tt.render(v, t),
                x.setupLights(M.physicallyCorrectLights),
                e.isArrayCamera) {
                    const n = e.cameras;
                    for (let e = 0, i = n.length; e < i; e++) {
                        const i = n[e];
                        qt(v, t, i, i.viewport)
                    }
                } else
                    qt(v, t, e);
                null !== E && (ot.updateMultisampleRenderTarget(E),
                ot.updateRenderTargetMipmap(E)),
                !0 === t.isScene && t.onAfterRender(M, t, e),
                rt.buffers.depth.setTest(!0),
                rt.buffers.depth.setMask(!0),
                rt.buffers.color.setMask(!0),
                rt.setPolygonOffset(!1),
                Nt.resetDefaultState(),
                A = -1,
                L = null,
                b.pop(),
                x = b.length > 0 ? b[b.length - 1] : null,
                y.pop(),
                v = y.length > 0 ? y[y.length - 1] : null
            }
            ,
            this.getActiveCubeFace = function() {
                return w
            }
            ,
            this.getActiveMipmapLevel = function() {
                return T
            }
            ,
            this.getRenderTarget = function() {
                return E
            }
            ,
            this.setRenderTargetTextures = function(t, e, n) {
                st.get(t.texture).__webglTexture = e,
                st.get(t.depthTexture).__webglTexture = n;
                const i = st.get(t);
                i.__hasExternalTextures = !0,
                i.__hasExternalTextures && (i.__autoAllocateDepthBuffer = void 0 === n,
                i.__autoAllocateDepthBuffer || t.useRenderToTexture && (console.warn("render-to-texture extension was disabled because an external texture was provided"),
                t.useRenderToTexture = !1,
                t.useRenderbuffer = !0))
            }
            ,
            this.setRenderTargetFramebuffer = function(t, e) {
                const n = st.get(t);
                n.__webglFramebuffer = e,
                n.__useDefaultFramebuffer = void 0 === e
            }
            ,
            this.setRenderTarget = function(t, e=0, n=0) {
                E = t,
                w = e,
                T = n;
                let i = !0;
                if (t) {
                    const e = st.get(t);
                    void 0 !== e.__useDefaultFramebuffer ? (rt.bindFramebuffer(It.FRAMEBUFFER, null),
                    i = !1) : void 0 === e.__webglFramebuffer ? ot.setupRenderTarget(t) : e.__hasExternalTextures && ot.rebindTextures(t, st.get(t.texture).__webglTexture, st.get(t.depthTexture).__webglTexture)
                }
                let r = null
                  , a = !1
                  , s = !1;
                if (t) {
                    const n = t.texture;
                    (n.isDataTexture3D || n.isDataTexture2DArray) && (s = !0);
                    const i = st.get(t).__webglFramebuffer;
                    t.isWebGLCubeRenderTarget ? (r = i[e],
                    a = !0) : r = t.useRenderbuffer ? st.get(t).__webglMultisampledFramebuffer : i,
                    R.copy(t.viewport),
                    C.copy(t.scissor),
                    P = t.scissorTest
                } else
                    R.copy(V).multiplyScalar(B).floor(),
                    C.copy(W).multiplyScalar(B).floor(),
                    P = X;
                if (rt.bindFramebuffer(It.FRAMEBUFFER, r) && it.drawBuffers && i) {
                    let e = !1;
                    if (t)
                        if (t.isWebGLMultipleRenderTargets) {
                            const n = t.texture;
                            if (q.length !== n.length || q[0] !== It.COLOR_ATTACHMENT0) {
                                for (let t = 0, e = n.length; t < e; t++)
                                    q[t] = It.COLOR_ATTACHMENT0 + t;
                                q.length = n.length,
                                e = !0
                            }
                        } else
                            1 === q.length && q[0] === It.COLOR_ATTACHMENT0 || (q[0] = It.COLOR_ATTACHMENT0,
                            q.length = 1,
                            e = !0);
                    else
                        1 === q.length && q[0] === It.BACK || (q[0] = It.BACK,
                        q.length = 1,
                        e = !0);
                    e && (it.isWebGL2 ? It.drawBuffers(q) : nt.get("WEBGL_draw_buffers").drawBuffersWEBGL(q))
                }
                if (rt.viewport(R),
                rt.scissor(C),
                rt.setScissorTest(P),
                a) {
                    const i = st.get(t.texture);
                    It.framebufferTexture2D(It.FRAMEBUFFER, It.COLOR_ATTACHMENT0, It.TEXTURE_CUBE_MAP_POSITIVE_X + e, i.__webglTexture, n)
                } else if (s) {
                    const i = st.get(t.texture)
                      , r = e || 0;
                    It.framebufferTextureLayer(It.FRAMEBUFFER, It.COLOR_ATTACHMENT0, i.__webglTexture, n || 0, r)
                }
                A = -1
            }
            ,
            this.readRenderTargetPixels = function(t, e, n, r, a, s, o) {
                if (!t || !t.isWebGLRenderTarget)
                    return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
                let l = st.get(t).__webglFramebuffer;
                if (t.isWebGLCubeRenderTarget && void 0 !== o && (l = l[o]),
                l) {
                    rt.bindFramebuffer(It.FRAMEBUFFER, l);
                    try {
                        const o = t.texture
                          , l = o.format
                          , c = o.type;
                        if (l !== i.wk1 && Dt.convert(l) !== It.getParameter(It.IMPLEMENTATION_COLOR_READ_FORMAT))
                            return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
                        const u = c === i.cLu && (nt.has("EXT_color_buffer_half_float") || it.isWebGL2 && nt.has("EXT_color_buffer_float"));
                        if (!(c === i.ywz || Dt.convert(c) === It.getParameter(It.IMPLEMENTATION_COLOR_READ_TYPE) || c === i.VzW && (it.isWebGL2 || nt.has("OES_texture_float") || nt.has("WEBGL_color_buffer_float")) || u))
                            return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
                        It.checkFramebufferStatus(It.FRAMEBUFFER) === It.FRAMEBUFFER_COMPLETE ? e >= 0 && e <= t.width - r && n >= 0 && n <= t.height - a && It.readPixels(e, n, r, a, Dt.convert(l), Dt.convert(c), s) : console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")
                    } finally {
                        const t = null !== E ? st.get(E).__webglFramebuffer : null;
                        rt.bindFramebuffer(It.FRAMEBUFFER, t)
                    }
                }
            }
            ,
            this.copyFramebufferToTexture = function(t, e, n=0) {
                if (!0 !== e.isFramebufferTexture)
                    return void console.error("THREE.WebGLRenderer: copyFramebufferToTexture() can only be used with FramebufferTexture.");
                const i = Math.pow(2, -n)
                  , r = Math.floor(e.image.width * i)
                  , a = Math.floor(e.image.height * i);
                ot.setTexture2D(e, 0),
                It.copyTexSubImage2D(It.TEXTURE_2D, n, 0, 0, t.x, t.y, r, a),
                rt.unbindTexture()
            }
            ,
            this.copyTextureToTexture = function(t, e, n, i=0) {
                const r = e.image.width
                  , a = e.image.height
                  , s = Dt.convert(n.format)
                  , o = Dt.convert(n.type);
                ot.setTexture2D(n, 0),
                It.pixelStorei(It.UNPACK_FLIP_Y_WEBGL, n.flipY),
                It.pixelStorei(It.UNPACK_PREMULTIPLY_ALPHA_WEBGL, n.premultiplyAlpha),
                It.pixelStorei(It.UNPACK_ALIGNMENT, n.unpackAlignment),
                e.isDataTexture ? It.texSubImage2D(It.TEXTURE_2D, i, t.x, t.y, r, a, s, o, e.image.data) : e.isCompressedTexture ? It.compressedTexSubImage2D(It.TEXTURE_2D, i, t.x, t.y, e.mipmaps[0].width, e.mipmaps[0].height, s, e.mipmaps[0].data) : It.texSubImage2D(It.TEXTURE_2D, i, t.x, t.y, s, o, e.image),
                0 === i && n.generateMipmaps && It.generateMipmap(It.TEXTURE_2D),
                rt.unbindTexture()
            }
            ,
            this.copyTextureToTexture3D = function(t, e, n, i, r=0) {
                if (M.isWebGL1Renderer)
                    return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");
                const a = t.max.x - t.min.x + 1
                  , s = t.max.y - t.min.y + 1
                  , o = t.max.z - t.min.z + 1
                  , l = Dt.convert(i.format)
                  , c = Dt.convert(i.type);
                let u;
                if (i.isDataTexture3D)
                    ot.setTexture3D(i, 0),
                    u = It.TEXTURE_3D;
                else {
                    if (!i.isDataTexture2DArray)
                        return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
                    ot.setTexture2DArray(i, 0),
                    u = It.TEXTURE_2D_ARRAY
                }
                It.pixelStorei(It.UNPACK_FLIP_Y_WEBGL, i.flipY),
                It.pixelStorei(It.UNPACK_PREMULTIPLY_ALPHA_WEBGL, i.premultiplyAlpha),
                It.pixelStorei(It.UNPACK_ALIGNMENT, i.unpackAlignment);
                const h = It.getParameter(It.UNPACK_ROW_LENGTH)
                  , d = It.getParameter(It.UNPACK_IMAGE_HEIGHT)
                  , p = It.getParameter(It.UNPACK_SKIP_PIXELS)
                  , m = It.getParameter(It.UNPACK_SKIP_ROWS)
                  , f = It.getParameter(It.UNPACK_SKIP_IMAGES)
                  , g = n.isCompressedTexture ? n.mipmaps[0] : n.image;
                It.pixelStorei(It.UNPACK_ROW_LENGTH, g.width),
                It.pixelStorei(It.UNPACK_IMAGE_HEIGHT, g.height),
                It.pixelStorei(It.UNPACK_SKIP_PIXELS, t.min.x),
                It.pixelStorei(It.UNPACK_SKIP_ROWS, t.min.y),
                It.pixelStorei(It.UNPACK_SKIP_IMAGES, t.min.z),
                n.isDataTexture || n.isDataTexture3D ? It.texSubImage3D(u, r, e.x, e.y, e.z, a, s, o, l, c, g.data) : n.isCompressedTexture ? (console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),
                It.compressedTexSubImage3D(u, r, e.x, e.y, e.z, a, s, o, l, g.data)) : It.texSubImage3D(u, r, e.x, e.y, e.z, a, s, o, l, c, g),
                It.pixelStorei(It.UNPACK_ROW_LENGTH, h),
                It.pixelStorei(It.UNPACK_IMAGE_HEIGHT, d),
                It.pixelStorei(It.UNPACK_SKIP_PIXELS, p),
                It.pixelStorei(It.UNPACK_SKIP_ROWS, m),
                It.pixelStorei(It.UNPACK_SKIP_IMAGES, f),
                0 === r && i.generateMipmaps && It.generateMipmap(u),
                rt.unbindTexture()
            }
            ,
            this.initTexture = function(t) {
                ot.setTexture2D(t, 0),
                rt.unbindTexture()
            }
            ,
            this.resetState = function() {
                w = 0,
                T = 0,
                E = null,
                rt.reset(),
                Nt.reset()
            }
            ,
            "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{
                detail: this
            }))
        }
        Dn.prototype.isWebGLRenderer = !0
    }
    ,
    365: (t,e,n)=>{
        "use strict";
        n.d(e, {
            x: ()=>r
        });
        var i = n(353);
        class r extends i.T {
            constructor() {
                super(),
                this.type = "Scene",
                this.background = null,
                this.environment = null,
                this.fog = null,
                this.overrideMaterial = null,
                this.autoUpdate = !0,
                "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{
                    detail: this
                }))
            }
            copy(t, e) {
                return super.copy(t, e),
                null !== t.background && (this.background = t.background.clone()),
                null !== t.environment && (this.environment = t.environment.clone()),
                null !== t.fog && (this.fog = t.fog.clone()),
                null !== t.overrideMaterial && (this.overrideMaterial = t.overrideMaterial.clone()),
                this.autoUpdate = t.autoUpdate,
                this.matrixAutoUpdate = t.matrixAutoUpdate,
                this
            }
            toJSON(t) {
                const e = super.toJSON(t);
                return null !== this.fog && (e.object.fog = this.fog.toJSON()),
                e
            }
        }
        r.prototype.isScene = !0
    }
    ,
    309: (t,e,n)=>{
        "use strict";
        n.d(e, {
            R: ()=>r
        });
        var i = n(977);
        class r extends i.x {
            constructor(t, e, n, i, r, a, s, o, l) {
                super(t, e, n, i, r, a, s, o, l),
                this.needsUpdate = !0
            }
        }
        r.prototype.isCanvasTexture = !0
    }
    ,
    977: (t,e,n)=>{
        "use strict";
        n.d(e, {
            x: ()=>h
        });
        var i = n(406)
          , r = n(661)
          , a = n(43)
          , s = n(138)
          , o = n(273)
          , l = n(392);
        let c, u = 0;
        class h extends i.p {
            constructor(t=h.DEFAULT_IMAGE, e=h.DEFAULT_MAPPING, n=r.uWy, i=r.uWy, l=r.wem, c=r.D1R, d=r.wk1, p=r.ywz, m=1, f=r.rnI) {
                super(),
                Object.defineProperty(this, "id", {
                    value: u++
                }),
                this.uuid = a.DO(),
                this.name = "",
                this.image = t,
                this.mipmaps = [],
                this.mapping = e,
                this.wrapS = n,
                this.wrapT = i,
                this.magFilter = l,
                this.minFilter = c,
                this.anisotropy = m,
                this.format = d,
                this.internalFormat = null,
                this.type = p,
                this.offset = new s.F(0,0),
                this.repeat = new s.F(1,1),
                this.center = new s.F(0,0),
                this.rotation = 0,
                this.matrixAutoUpdate = !0,
                this.matrix = new o.V,
                this.generateMipmaps = !0,
                this.premultiplyAlpha = !1,
                this.flipY = !0,
                this.unpackAlignment = 4,
                this.encoding = f,
                this.userData = {},
                this.version = 0,
                this.onUpdate = null,
                this.isRenderTargetTexture = !1
            }
            updateMatrix() {
                this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y)
            }
            clone() {
                return (new this.constructor).copy(this)
            }
            copy(t) {
                return this.name = t.name,
                this.image = t.image,
                this.mipmaps = t.mipmaps.slice(0),
                this.mapping = t.mapping,
                this.wrapS = t.wrapS,
                this.wrapT = t.wrapT,
                this.magFilter = t.magFilter,
                this.minFilter = t.minFilter,
                this.anisotropy = t.anisotropy,
                this.format = t.format,
                this.internalFormat = t.internalFormat,
                this.type = t.type,
                this.offset.copy(t.offset),
                this.repeat.copy(t.repeat),
                this.center.copy(t.center),
                this.rotation = t.rotation,
                this.matrixAutoUpdate = t.matrixAutoUpdate,
                this.matrix.copy(t.matrix),
                this.generateMipmaps = t.generateMipmaps,
                this.premultiplyAlpha = t.premultiplyAlpha,
                this.flipY = t.flipY,
                this.unpackAlignment = t.unpackAlignment,
                this.encoding = t.encoding,
                this.userData = JSON.parse(JSON.stringify(t.userData)),
                this
            }
            toJSON(t) {
                const e = void 0 === t || "string" == typeof t;
                if (!e && void 0 !== t.textures[this.uuid])
                    return t.textures[this.uuid];
                const n = {
                    metadata: {
                        version: 4.5,
                        type: "Texture",
                        generator: "Texture.toJSON"
                    },
                    uuid: this.uuid,
                    name: this.name,
                    mapping: this.mapping,
                    repeat: [this.repeat.x, this.repeat.y],
                    offset: [this.offset.x, this.offset.y],
                    center: [this.center.x, this.center.y],
                    rotation: this.rotation,
                    wrap: [this.wrapS, this.wrapT],
                    format: this.format,
                    type: this.type,
                    encoding: this.encoding,
                    minFilter: this.minFilter,
                    magFilter: this.magFilter,
                    anisotropy: this.anisotropy,
                    flipY: this.flipY,
                    premultiplyAlpha: this.premultiplyAlpha,
                    unpackAlignment: this.unpackAlignment
                };
                if (void 0 !== this.image) {
                    const i = this.image;
                    if (void 0 === i.uuid && (i.uuid = a.DO()),
                    !e && void 0 === t.images[i.uuid]) {
                        let e;
                        if (Array.isArray(i)) {
                            e = [];
                            for (let t = 0, n = i.length; t < n; t++)
                                i[t].isDataTexture ? e.push(d(i[t].image)) : e.push(d(i[t]))
                        } else
                            e = d(i);
                        t.images[i.uuid] = {
                            uuid: i.uuid,
                            url: e
                        }
                    }
                    n.image = i.uuid
                }
                return "{}" !== JSON.stringify(this.userData) && (n.userData = this.userData),
                e || (t.textures[this.uuid] = n),
                n
            }
            dispose() {
                this.dispatchEvent({
                    type: "dispose"
                })
            }
            transformUv(t) {
                if (this.mapping !== r.xfE)
                    return t;
                if (t.applyMatrix3(this.matrix),
                t.x < 0 || t.x > 1)
                    switch (this.wrapS) {
                    case r.rpg:
                        t.x = t.x - Math.floor(t.x);
                        break;
                    case r.uWy:
                        t.x = t.x < 0 ? 0 : 1;
                        break;
                    case r.OoA:
                        1 === Math.abs(Math.floor(t.x) % 2) ? t.x = Math.ceil(t.x) - t.x : t.x = t.x - Math.floor(t.x)
                    }
                if (t.y < 0 || t.y > 1)
                    switch (this.wrapT) {
                    case r.rpg:
                        t.y = t.y - Math.floor(t.y);
                        break;
                    case r.uWy:
                        t.y = t.y < 0 ? 0 : 1;
                        break;
                    case r.OoA:
                        1 === Math.abs(Math.floor(t.y) % 2) ? t.y = Math.ceil(t.y) - t.y : t.y = t.y - Math.floor(t.y)
                    }
                return this.flipY && (t.y = 1 - t.y),
                t
            }
            set needsUpdate(t) {
                !0 === t && this.version++
            }
        }
        function d(t) {
            return "undefined" != typeof HTMLImageElement && t instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && t instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && t instanceof ImageBitmap ? class {
                static getDataURL(t) {
                    if (/^data:/i.test(t.src))
                        return t.src;
                    if ("undefined" == typeof HTMLCanvasElement)
                        return t.src;
                    let e;
                    if (t instanceof HTMLCanvasElement)
                        e = t;
                    else {
                        void 0 === c && (c = (0,
                        l.c)("canvas")),
                        c.width = t.width,
                        c.height = t.height;
                        const n = c.getContext("2d");
                        t instanceof ImageData ? n.putImageData(t, 0, 0) : n.drawImage(t, 0, 0, t.width, t.height),
                        e = c
                    }
                    return e.width > 2048 || e.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", t),
                    e.toDataURL("image/jpeg", .6)) : e.toDataURL("image/png")
                }
            }
            .getDataURL(t) : t.data ? {
                data: Array.prototype.slice.call(t.data),
                width: t.width,
                height: t.height,
                type: t.data.constructor.name
            } : (console.warn("THREE.Texture: Unable to serialize Texture."),
            {})
        }
        h.DEFAULT_IMAGE = void 0,
        h.DEFAULT_MAPPING = r.xfE,
        h.prototype.isTexture = !0
    }
    ,
    392: (t,e,n)=>{
        "use strict";
        function i(t) {
            if (0 === t.length)
                return -1 / 0;
            let e = t[0];
            for (let n = 1, i = t.length; n < i; ++n)
                t[n] > e && (e = t[n]);
            return e
        }
        function r(t) {
            return document.createElementNS("http://www.w3.org/1999/xhtml", t)
        }
        n.d(e, {
            uH: ()=>i,
            c: ()=>r
        }),
        Int8Array,
        Uint8Array,
        Uint8ClampedArray,
        Int16Array,
        Uint16Array,
        Int32Array,
        Uint32Array,
        Float32Array,
        Float64Array
    }
    ,
    238: function(t, e, n) {
        var i;
        !function(r, a) {
            "use strict";
            var s = "function"
              , o = "undefined"
              , l = "object"
              , c = "string"
              , u = "model"
              , h = "name"
              , d = "type"
              , p = "vendor"
              , m = "version"
              , f = "architecture"
              , g = "console"
              , _ = "mobile"
              , v = "tablet"
              , x = "smarttv"
              , y = "wearable"
              , b = "embedded"
              , M = "Amazon"
              , S = "Apple"
              , w = "ASUS"
              , T = "BlackBerry"
              , E = "Google"
              , A = "Huawei"
              , L = "LG"
              , R = "Microsoft"
              , C = "Motorola"
              , P = "Samsung"
              , D = "Sony"
              , N = "Xiaomi"
              , I = "Zebra"
              , U = "Facebook"
              , F = function(t) {
                for (var e = {}, n = 0; n < t.length; n++)
                    e[t[n].toUpperCase()] = t[n];
                return e
            }
              , O = function(t, e) {
                return typeof t === c && -1 !== z(e).indexOf(z(t))
            }
              , z = function(t) {
                return t.toLowerCase()
            }
              , B = function(t, e) {
                if (typeof t === c)
                    return t = t.replace(/^\s\s*/, "").replace(/\s\s*$/, ""),
                    typeof e === o ? t : t.substring(0, 255)
            }
              , G = function(t, e) {
                for (var n, i, r, o, c, u, h = 0; h < e.length && !c; ) {
                    var d = e[h]
                      , p = e[h + 1];
                    for (n = i = 0; n < d.length && !c; )
                        if (c = d[n++].exec(t))
                            for (r = 0; r < p.length; r++)
                                u = c[++i],
                                typeof (o = p[r]) === l && o.length > 0 ? 2 === o.length ? typeof o[1] == s ? this[o[0]] = o[1].call(this, u) : this[o[0]] = o[1] : 3 === o.length ? typeof o[1] !== s || o[1].exec && o[1].test ? this[o[0]] = u ? u.replace(o[1], o[2]) : a : this[o[0]] = u ? o[1].call(this, u, o[2]) : a : 4 === o.length && (this[o[0]] = u ? o[3].call(this, u.replace(o[1], o[2])) : a) : this[o] = u || a;
                    h += 2
                }
            }
              , H = function(t, e) {
                for (var n in e)
                    if (typeof e[n] === l && e[n].length > 0) {
                        for (var i = 0; i < e[n].length; i++)
                            if (O(e[n][i], t))
                                return "?" === n ? a : n
                    } else if (O(e[n], t))
                        return "?" === n ? a : n;
                return t
            }
              , k = {
                ME: "4.90",
                "NT 3.11": "NT3.51",
                "NT 4.0": "NT4.0",
                2e3: "NT 5.0",
                XP: ["NT 5.1", "NT 5.2"],
                Vista: "NT 6.0",
                7: "NT 6.1",
                8: "NT 6.2",
                8.1: "NT 6.3",
                10: ["NT 6.4", "NT 10.0"],
                RT: "ARM"
            }
              , V = {
                browser: [[/\b(?:crmo|crios)\/([\w\.]+)/i], [m, [h, "Chrome"]], [/edg(?:e|ios|a)?\/([\w\.]+)/i], [m, [h, "Edge"]], [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i], [h, m], [/opios[\/ ]+([\w\.]+)/i], [m, [h, "Opera Mini"]], [/\bopr\/([\w\.]+)/i], [m, [h, "Opera"]], [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i, /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i, /(ba?idubrowser)[\/ ]?([\w\.]+)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([-\w\.]+)/i, /(weibo)__([\d\.]+)/i], [h, m], [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i], [m, [h, "UCBrowser"]], [/\bqbcore\/([\w\.]+)/i], [m, [h, "WeChat(Win) Desktop"]], [/micromessenger\/([\w\.]+)/i], [m, [h, "WeChat"]], [/konqueror\/([\w\.]+)/i], [m, [h, "Konqueror"]], [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i], [m, [h, "IE"]], [/yabrowser\/([\w\.]+)/i], [m, [h, "Yandex"]], [/(avast|avg)\/([\w\.]+)/i], [[h, /(.+)/, "$1 Secure Browser"], m], [/\bfocus\/([\w\.]+)/i], [m, [h, "Firefox Focus"]], [/\bopt\/([\w\.]+)/i], [m, [h, "Opera Touch"]], [/coc_coc\w+\/([\w\.]+)/i], [m, [h, "Coc Coc"]], [/dolfin\/([\w\.]+)/i], [m, [h, "Dolphin"]], [/coast\/([\w\.]+)/i], [m, [h, "Opera Coast"]], [/miuibrowser\/([\w\.]+)/i], [m, [h, "MIUI Browser"]], [/fxios\/([-\w\.]+)/i], [m, [h, "Firefox"]], [/\bqihu|(qi?ho?o?|360)browser/i], [[h, "360 Browser"]], [/(oculus|samsung|sailfish)browser\/([\w\.]+)/i], [[h, /(.+)/, "$1 Browser"], m], [/(comodo_dragon)\/([\w\.]+)/i], [[h, /_/g, " "], m], [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i], [h, m], [/(metasr)[\/ ]?([\w\.]+)/i, /(lbbrowser)/i], [h], [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i], [[h, U], m], [/safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(chromium|instagram)[\/ ]([-\w\.]+)/i], [h, m], [/\bgsa\/([\w\.]+) .*safari\//i], [m, [h, "GSA"]], [/headlesschrome(?:\/([\w\.]+)| )/i], [m, [h, "Chrome Headless"]], [/ wv\).+(chrome)\/([\w\.]+)/i], [[h, "Chrome WebView"], m], [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i], [m, [h, "Android Browser"]], [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i], [h, m], [/version\/([\w\.]+) .*mobile\/\w+ (safari)/i], [m, [h, "Mobile Safari"]], [/version\/([\w\.]+) .*(mobile ?safari|safari)/i], [m, h], [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i], [h, [m, H, {
                    "1.0": "/8",
                    1.2: "/1",
                    1.3: "/3",
                    "2.0": "/412",
                    "2.0.2": "/416",
                    "2.0.3": "/417",
                    "2.0.4": "/419",
                    "?": "/"
                }]], [/(webkit|khtml)\/([\w\.]+)/i], [h, m], [/(navigator|netscape\d?)\/([-\w\.]+)/i], [[h, "Netscape"], m], [/mobile vr; rv:([\w\.]+)\).+firefox/i], [m, [h, "Firefox Reality"]], [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i], [h, m]],
                cpu: [[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i], [[f, "amd64"]], [/(ia32(?=;))/i], [[f, z]], [/((?:i[346]|x)86)[;\)]/i], [[f, "ia32"]], [/\b(aarch64|arm(v?8e?l?|_?64))\b/i], [[f, "arm64"]], [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i], [[f, "armhf"]], [/windows (ce|mobile); ppc;/i], [[f, "arm"]], [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i], [[f, /ower/, "", z]], [/(sun4\w)[;\)]/i], [[f, "sparc"]], [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i], [[f, z]]],
                device: [[/\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i], [u, [p, P], [d, v]], [/\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i], [u, [p, P], [d, _]], [/\((ip(?:hone|od)[\w ]*);/i], [u, [p, S], [d, _]], [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i], [u, [p, S], [d, v]], [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i], [u, [p, A], [d, v]], [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}-[atu]?[ln][01259x][012359][an]?)\b(?!.+d\/s)/i], [u, [p, A], [d, _]], [/\b(poco[\w ]+)(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i], [[u, /_/g, " "], [p, N], [d, _]], [/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i], [[u, /_/g, " "], [p, N], [d, v]], [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i], [u, [p, "OPPO"], [d, _]], [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i], [u, [p, "Vivo"], [d, _]], [/\b(rmx[12]\d{3})(?: bui|;|\))/i], [u, [p, "Realme"], [d, _]], [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i], [u, [p, C], [d, _]], [/\b(mz60\d|xoom[2 ]{0,2}) build\//i], [u, [p, C], [d, v]], [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i], [u, [p, L], [d, v]], [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i], [u, [p, L], [d, _]], [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i], [u, [p, "Lenovo"], [d, v]], [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i], [[u, /_/g, " "], [p, "Nokia"], [d, _]], [/(pixel c)\b/i], [u, [p, E], [d, v]], [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i], [u, [p, E], [d, _]], [/droid.+ ([c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i], [u, [p, D], [d, _]], [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i], [[u, "Xperia Tablet"], [p, D], [d, v]], [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i], [u, [p, "OnePlus"], [d, _]], [/(alexa)webm/i, /(kf[a-z]{2}wi)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i], [u, [p, M], [d, v]], [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i], [[u, /(.+)/g, "Fire Phone $1"], [p, M], [d, _]], [/(playbook);[-\w\),; ]+(rim)/i], [u, p, [d, v]], [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i], [u, [p, T], [d, _]], [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i], [u, [p, w], [d, v]], [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i], [u, [p, w], [d, _]], [/(nexus 9)/i], [u, [p, "HTC"], [d, v]], [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic|sony)[-_ ]?([-\w]*)/i], [p, [u, /_/g, " "], [d, _]], [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i], [u, [p, "Acer"], [d, v]], [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i], [u, [p, "Meizu"], [d, _]], [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i], [u, [p, "Sharp"], [d, _]], [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i], [p, u, [d, _]], [/(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i], [p, u, [d, v]], [/(surface duo)/i], [u, [p, R], [d, v]], [/droid [\d\.]+; (fp\du?)(?: b|\))/i], [u, [p, "Fairphone"], [d, _]], [/(u304aa)/i], [u, [p, "AT&T"], [d, _]], [/\bsie-(\w*)/i], [u, [p, "Siemens"], [d, _]], [/\b(rct\w+) b/i], [u, [p, "RCA"], [d, v]], [/\b(venue[\d ]{2,7}) b/i], [u, [p, "Dell"], [d, v]], [/\b(q(?:mv|ta)\w+) b/i], [u, [p, "Verizon"], [d, v]], [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i], [u, [p, "Barnes & Noble"], [d, v]], [/\b(tm\d{3}\w+) b/i], [u, [p, "NuVision"], [d, v]], [/\b(k88) b/i], [u, [p, "ZTE"], [d, v]], [/\b(nx\d{3}j) b/i], [u, [p, "ZTE"], [d, _]], [/\b(gen\d{3}) b.+49h/i], [u, [p, "Swiss"], [d, _]], [/\b(zur\d{3}) b/i], [u, [p, "Swiss"], [d, v]], [/\b((zeki)?tb.*\b) b/i], [u, [p, "Zeki"], [d, v]], [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i], [[p, "Dragon Touch"], u, [d, v]], [/\b(ns-?\w{0,9}) b/i], [u, [p, "Insignia"], [d, v]], [/\b((nxa|next)-?\w{0,9}) b/i], [u, [p, "NextBook"], [d, v]], [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i], [[p, "Voice"], u, [d, _]], [/\b(lvtel\-)?(v1[12]) b/i], [[p, "LvTel"], u, [d, _]], [/\b(ph-1) /i], [u, [p, "Essential"], [d, _]], [/\b(v(100md|700na|7011|917g).*\b) b/i], [u, [p, "Envizen"], [d, v]], [/\b(trio[-\w\. ]+) b/i], [u, [p, "MachSpeed"], [d, v]], [/\btu_(1491) b/i], [u, [p, "Rotor"], [d, v]], [/(shield[\w ]+) b/i], [u, [p, "Nvidia"], [d, v]], [/(sprint) (\w+)/i], [p, u, [d, _]], [/(kin\.[onetw]{3})/i], [[u, /\./g, " "], [p, R], [d, _]], [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i], [u, [p, I], [d, v]], [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i], [u, [p, I], [d, _]], [/(ouya)/i, /(nintendo) ([wids3utch]+)/i], [p, u, [d, g]], [/droid.+; (shield) bui/i], [u, [p, "Nvidia"], [d, g]], [/(playstation [345portablevi]+)/i], [u, [p, D], [d, g]], [/\b(xbox(?: one)?(?!; xbox))[\); ]/i], [u, [p, R], [d, g]], [/smart-tv.+(samsung)/i], [p, [d, x]], [/hbbtv.+maple;(\d+)/i], [[u, /^/, "SmartTV"], [p, P], [d, x]], [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i], [[p, L], [d, x]], [/(apple) ?tv/i], [p, [u, "Apple TV"], [d, x]], [/crkey/i], [[u, "Chromecast"], [p, E], [d, x]], [/droid.+aft(\w)( bui|\))/i], [u, [p, M], [d, x]], [/\(dtv[\);].+(aquos)/i], [u, [p, "Sharp"], [d, x]], [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i], [[p, B], [u, B], [d, x]], [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i], [[d, x]], [/((pebble))app/i], [p, u, [d, y]], [/droid.+; (glass) \d/i], [u, [p, E], [d, y]], [/droid.+; (wt63?0{2,3})\)/i], [u, [p, I], [d, y]], [/(quest( 2)?)/i], [u, [p, U], [d, y]], [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i], [p, [d, b]], [/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i], [u, [d, _]], [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i], [u, [d, v]], [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i], [[d, v]], [/(phone|mobile(?:[;\/]| safari)|pda(?=.+windows ce))/i], [[d, _]], [/(android[-\w\. ]{0,9});.+buil/i], [u, [p, "Generic"]]],
                engine: [[/windows.+ edge\/([\w\.]+)/i], [m, [h, "EdgeHTML"]], [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i], [m, [h, "Blink"]], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i], [h, m], [/rv\:([\w\.]{1,9})\b.+(gecko)/i], [m, h]],
                os: [[/microsoft (windows) (vista|xp)/i], [h, m], [/(windows) nt 6\.2; (arm)/i, /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i, /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i], [h, [m, H, k]], [/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i], [[h, "Windows"], [m, H, k]], [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /cfnetwork\/.+darwin/i], [[m, /_/g, "."], [h, "iOS"]], [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i], [[h, "Mac OS"], [m, /_/g, "."]], [/droid ([\w\.]+)\b.+(android[- ]x86)/i], [m, h], [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i], [h, m], [/\(bb(10);/i], [m, [h, T]], [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i], [m, [h, "Symbian"]], [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i], [m, [h, "Firefox OS"]], [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i], [m, [h, "webOS"]], [/crkey\/([\d\.]+)/i], [m, [h, "Chromecast"]], [/(cros) [\w]+ ([\w\.]+\w)/i], [[h, "Chromium OS"], m], [/(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i], [h, m], [/(sunos) ?([\w\.\d]*)/i], [[h, "Solaris"], m], [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i, /(unix) ?([\w\.]*)/i], [h, m]]
            }
              , W = function(t, e) {
                if (typeof t === l && (e = t,
                t = a),
                !(this instanceof W))
                    return new W(t,e).getResult();
                var n = t || (typeof r !== o && r.navigator && r.navigator.userAgent ? r.navigator.userAgent : "")
                  , i = e ? function(t, e) {
                    var n = {};
                    for (var i in t)
                        e[i] && e[i].length % 2 == 0 ? n[i] = e[i].concat(t[i]) : n[i] = t[i];
                    return n
                }(V, e) : V;
                return this.getBrowser = function() {
                    var t, e = {};
                    return e.name = a,
                    e.version = a,
                    G.call(e, n, i.browser),
                    e.major = typeof (t = e.version) === c ? t.replace(/[^\d\.]/g, "").split(".")[0] : a,
                    e
                }
                ,
                this.getCPU = function() {
                    var t = {};
                    return t.architecture = a,
                    G.call(t, n, i.cpu),
                    t
                }
                ,
                this.getDevice = function() {
                    var t = {};
                    return t.vendor = a,
                    t.model = a,
                    t.type = a,
                    G.call(t, n, i.device),
                    t
                }
                ,
                this.getEngine = function() {
                    var t = {};
                    return t.name = a,
                    t.version = a,
                    G.call(t, n, i.engine),
                    t
                }
                ,
                this.getOS = function() {
                    var t = {};
                    return t.name = a,
                    t.version = a,
                    G.call(t, n, i.os),
                    t
                }
                ,
                this.getResult = function() {
                    return {
                        ua: this.getUA(),
                        browser: this.getBrowser(),
                        engine: this.getEngine(),
                        os: this.getOS(),
                        device: this.getDevice(),
                        cpu: this.getCPU()
                    }
                }
                ,
                this.getUA = function() {
                    return n
                }
                ,
                this.setUA = function(t) {
                    return n = typeof t === c && t.length > 255 ? B(t, 255) : t,
                    this
                }
                ,
                this.setUA(n),
                this
            };
            W.VERSION = "1.0.2",
            W.BROWSER = F([h, m, "major"]),
            W.CPU = F([f]),
            W.DEVICE = F([u, p, d, g, _, x, v, y, b]),
            W.ENGINE = W.OS = F([h, m]),
            typeof e !== o ? (t.exports && (e = t.exports = W),
            e.UAParser = W) : n.amdO ? (i = function() {
                return W
            }
            .call(e, n, e, t)) === a || (t.exports = i) : typeof r !== o && (r.UAParser = W);
            var X = typeof r !== o && (r.jQuery || r.Zepto);
            if (X && !X.ua) {
                var q = new W;
                X.ua = q.getResult(),
                X.ua.get = function() {
                    return q.getUA()
                }
                ,
                X.ua.set = function(t) {
                    q.setUA(t);
                    var e = q.getResult();
                    for (var n in e)
                        X.ua[n] = e[n]
                }
            }
        }("object" == typeof window ? window : this)
    }
}]);
