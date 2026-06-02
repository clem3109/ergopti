import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.DMIs_yqT.js","_app/immutable/chunks/D3TV2xAF.js","_app/immutable/chunks/BJlL0-Sw.js","_app/immutable/chunks/jmuzHjgz.js","_app/immutable/chunks/BTyc-JLB.js","_app/immutable/chunks/DoS8hReC.js","_app/immutable/chunks/BTEXbN4H.js","_app/immutable/chunks/DY6x2aWE.js","_app/immutable/chunks/uUVrmSwv.js","_app/immutable/chunks/BWvAs9YZ.js","_app/immutable/chunks/BPWAtOn3.js","_app/immutable/chunks/C7YJlRmi.js","_app/immutable/chunks/BIyeAHj5.js","_app/immutable/chunks/CIuX9R6V.js","_app/immutable/chunks/oZPnEnlq.js","_app/immutable/chunks/lXnObdeJ.js","_app/immutable/chunks/DsAeEPd9.js","_app/immutable/chunks/CF79PsVf.js","_app/immutable/chunks/Dl2NJAAt.js","_app/immutable/chunks/BiZdC78W.js","_app/immutable/chunks/B70JfeE_.js","_app/immutable/chunks/BrMzX8rW.js"];
export const stylesheets = ["_app/immutable/assets/KeyboardBasis.CGkxsXn2.css","_app/immutable/assets/KeyboardControls.DImc0yao.css","_app/immutable/assets/_layout.CDwOY5Gt.css"];
export const fonts = ["_app/immutable/assets/icomoon.CbQiC5IS.ttf","_app/immutable/assets/icomoon.DUbCb_eQ.woff"];
