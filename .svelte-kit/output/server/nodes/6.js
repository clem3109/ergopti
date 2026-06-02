import * as universal from '../entries/pages/informations/_page.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/informations/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/informations/+page.js";
export const imports = ["_app/immutable/nodes/6.BW0z07Ak.js","_app/immutable/chunks/BJlL0-Sw.js","_app/immutable/chunks/jmuzHjgz.js","_app/immutable/chunks/BTyc-JLB.js","_app/immutable/chunks/BWvAs9YZ.js","_app/immutable/chunks/DLF4ccXQ.js","_app/immutable/chunks/DY6x2aWE.js","_app/immutable/chunks/uUVrmSwv.js","_app/immutable/chunks/BPWAtOn3.js","_app/immutable/chunks/C7YJlRmi.js","_app/immutable/chunks/CkKE8iJ9.js","_app/immutable/chunks/CZDbLwOt.js","_app/immutable/chunks/Dl2NJAAt.js"];
export const stylesheets = ["_app/immutable/assets/PageWrapper.B0WO4h2k.css"];
export const fonts = [];
