(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/three/WoodScene.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WoodScene
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.module.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLenis$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useLenis.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function WoodScene() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "615e5a7499aab0260b5b981cc1b8981bf99b7eef2cd2d580120cd53214f54887") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "615e5a7499aab0260b5b981cc1b8981bf99b7eef2cd2d580120cd53214f54887";
    }
    const mountRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLenis$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLenis"])();
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "WoodScene[useEffect()]": ()=>{
                if (!mountRef.current) {
                    return;
                }
                const scene = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scene"]();
                scene.background = null;
                const camera = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PerspectiveCamera"](75, window.innerWidth / window.innerHeight, 0.1, 1000);
                camera.position.z = 5;
                const renderer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["WebGLRenderer"]({
                    alpha: true,
                    antialias: true,
                    powerPreference: "high-performance"
                });
                renderer.setSize(window.innerWidth, window.innerHeight);
                renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
                mountRef.current.appendChild(renderer.domElement);
                const geometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferGeometry"]();
                const positions = new Float32Array(1200);
                const speeds = new Float32Array(400);
                for(let i = 0; i < 400; i++){
                    positions[i * 3] = (Math.random() - 0.5) * 25;
                    positions[i * 3 + 1] = (Math.random() - 0.5) * 25;
                    positions[i * 3 + 2] = (Math.random() - 0.5) * 15;
                    speeds[i] = Math.random() * 0.005 + 0.002;
                }
                geometry.setAttribute("position", new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferAttribute"](positions, 3));
                const material = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointsMaterial"]({
                    color: 13019514,
                    size: 0.06,
                    transparent: true,
                    opacity: 0.6,
                    sizeAttenuation: true,
                    blending: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdditiveBlending"]
                });
                const particles = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Points"](geometry, material);
                scene.add(particles);
                let mouseX = 0;
                let mouseY = 0;
                const handleMouseMove = {
                    "WoodScene[useEffect() > handleMouseMove]": (e)=>{
                        mouseX = (e.clientX / window.innerWidth - 0.5) * 0.5;
                        mouseY = (e.clientY / window.innerHeight - 0.5) * 0.5;
                    }
                }["WoodScene[useEffect() > handleMouseMove]"];
                window.addEventListener("mousemove", handleMouseMove);
                let requestID;
                const animate = {
                    "WoodScene[useEffect() > animate]": ()=>{
                        requestID = requestAnimationFrame(animate);
                        const positions_0 = particles.geometry.attributes.position.array;
                        for(let i_0 = 0; i_0 < 400; i_0++){
                            positions_0[i_0 * 3 + 1] = positions_0[i_0 * 3 + 1] - speeds[i_0];
                            if (positions_0[i_0 * 3 + 1] < -12) {
                                positions_0[i_0 * 3 + 1] = 12;
                            }
                        }
                        particles.geometry.attributes.position.needsUpdate = true;
                        particles.rotation.y = particles.rotation.y + 0.001;
                        particles.rotation.x = particles.rotation.x + (mouseY - particles.rotation.x) * 0.05;
                        particles.rotation.y = particles.rotation.y + (mouseX - particles.rotation.y) * 0.05;
                        renderer.render(scene, camera);
                    }
                }["WoodScene[useEffect() > animate]"];
                animate();
                const handleResize = {
                    "WoodScene[useEffect() > handleResize]": ()=>{
                        camera.aspect = window.innerWidth / window.innerHeight;
                        camera.updateProjectionMatrix();
                        renderer.setSize(window.innerWidth, window.innerHeight);
                    }
                }["WoodScene[useEffect() > handleResize]"];
                window.addEventListener("resize", handleResize);
                return ()=>{
                    if (mountRef.current && renderer.domElement) {
                        mountRef.current.removeChild(renderer.domElement);
                    }
                    cancelAnimationFrame(requestID);
                    window.removeEventListener("resize", handleResize);
                    window.removeEventListener("mousemove", handleMouseMove);
                    renderer.dispose();
                    geometry.dispose();
                    material.dispose();
                };
            }
        })["WoodScene[useEffect()]"];
        t1 = [];
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: mountRef,
            className: "fixed inset-0 w-full h-full -z-10 pointer-events-none"
        }, void 0, false, {
            fileName: "[project]/src/components/three/WoodScene.tsx",
            lineNumber: 116,
            columnNumber: 10
        }, this);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    return t2;
}
_s(WoodScene, "uu48WuU4x0etEkTHvZh4zV5Zw8A=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLenis$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLenis"]
    ];
});
_c = WoodScene;
var _c;
__turbopack_context__.k.register(_c, "WoodScene");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/three/WoodScene.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/three/WoodScene.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=src_components_three_WoodScene_tsx_0974701c._.js.map