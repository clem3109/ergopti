import * as server from '../entries/pages/ergopti-plus/_page.server.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/ergopti-plus/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/ergopti-plus/+page.server.js";
export const imports = ["_app/immutable/nodes/4.CxecjYN7.js","_app/immutable/chunks/BJlL0-Sw.js","_app/immutable/chunks/jmuzHjgz.js","_app/immutable/chunks/DoS8hReC.js","_app/immutable/chunks/BTEXbN4H.js","_app/immutable/chunks/lXnObdeJ.js","_app/immutable/chunks/vcCtZRDX.js","_app/immutable/chunks/BWvAs9YZ.js","_app/immutable/chunks/BTyc-JLB.js","_app/immutable/chunks/BPWAtOn3.js","_app/immutable/chunks/C7YJlRmi.js","_app/immutable/chunks/BIyeAHj5.js","_app/immutable/chunks/CkKE8iJ9.js","_app/immutable/chunks/0rd7nram.js","_app/immutable/chunks/BrMzX8rW.js"];
export const stylesheets = ["_app/immutable/assets/4.B3EZL9-y.css"];
export const fonts = [];
