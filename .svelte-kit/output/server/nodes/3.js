import * as universal from '../entries/pages/benchmarks/_page.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/benchmarks/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/benchmarks/+page.js";
export const imports = ["_app/immutable/nodes/3.CTG9dzUp.js","_app/immutable/chunks/BJlL0-Sw.js","_app/immutable/chunks/jmuzHjgz.js","_app/immutable/chunks/BTyc-JLB.js","_app/immutable/chunks/DoS8hReC.js","_app/immutable/chunks/BTEXbN4H.js","_app/immutable/chunks/lXnObdeJ.js","_app/immutable/chunks/vcCtZRDX.js","_app/immutable/chunks/BWvAs9YZ.js","_app/immutable/chunks/DsAeEPd9.js","_app/immutable/chunks/CIuX9R6V.js","_app/immutable/chunks/DLF4ccXQ.js","_app/immutable/chunks/DY6x2aWE.js","_app/immutable/chunks/uUVrmSwv.js","_app/immutable/chunks/Dl2NJAAt.js","_app/immutable/chunks/CkKE8iJ9.js","_app/immutable/chunks/CZDbLwOt.js","_app/immutable/chunks/PPVm8Dsz.js"];
export const stylesheets = ["_app/immutable/assets/PageWrapper.B0WO4h2k.css"];
export const fonts = [];
