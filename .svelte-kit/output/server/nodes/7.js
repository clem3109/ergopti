import * as universal from '../entries/pages/utilisation/_page.js';

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/utilisation/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/utilisation/+page.js";
export const imports = ["_app/immutable/nodes/7.mSK0fnay.js","_app/immutable/chunks/BJlL0-Sw.js","_app/immutable/chunks/jmuzHjgz.js","_app/immutable/chunks/BTyc-JLB.js","_app/immutable/chunks/BWvAs9YZ.js","_app/immutable/chunks/CIuX9R6V.js","_app/immutable/chunks/DLF4ccXQ.js","_app/immutable/chunks/DY6x2aWE.js","_app/immutable/chunks/uUVrmSwv.js","_app/immutable/chunks/DoS8hReC.js","_app/immutable/chunks/BTEXbN4H.js","_app/immutable/chunks/lXnObdeJ.js","_app/immutable/chunks/DsAeEPd9.js","_app/immutable/chunks/CkKE8iJ9.js","_app/immutable/chunks/BiZdC78W.js","_app/immutable/chunks/BIyeAHj5.js","_app/immutable/chunks/C7YJlRmi.js","_app/immutable/chunks/oZPnEnlq.js","_app/immutable/chunks/Dl2NJAAt.js","_app/immutable/chunks/0rd7nram.js","_app/immutable/chunks/BrMzX8rW.js"];
export const stylesheets = ["_app/immutable/assets/PageWrapper.B0WO4h2k.css","_app/immutable/assets/KeyboardBasis.CGkxsXn2.css","_app/immutable/assets/7.D5x94ouR.css"];
export const fonts = [];
