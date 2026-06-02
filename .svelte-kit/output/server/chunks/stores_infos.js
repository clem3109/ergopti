import { w as writable } from "./index.js";
const versionsList = ["1.1", "2.0", "2.1", "2.2"].reverse();
const latestVersion = versionsList[0];
let version = writable(latestVersion);
const layoutData = writable();
const discordLink = "https://discord.gg/ptxRzBqcQP";
const presentation = writable({
  emplacement: "keyboard_presentation",
  plus: "no",
  type: "iso",
  layer: "Visuel",
  color: "yes",
  controls: "yes"
});
const presentation_plus = writable({
  emplacement: "keyboard_presentation_plus",
  plus: "yes",
  type: "iso",
  layer: "Visuel",
  color: "yes",
  controls: "yes"
});
const reference = writable({
  emplacement: "keyboard_reference",
  plus: "yes",
  type: "ergodox",
  layer: "Visuel",
  color: "yes",
  controls: "yes"
});
const emulation = writable({
  emplacement: "keyboard_emulation",
  plus: "yes",
  type: "iso",
  layer: "Primary",
  color: "yes",
  controls: "no"
});
const frequences = writable({
  emplacement: "keyboard_frequences",
  plus: "no",
  type: "iso",
  layer: "Primary",
  color: "freq",
  controls: "no"
});
const roulements = writable({
  emplacement: "keyboard_roulements",
  plus: "no",
  type: "iso",
  layer: "Visuel",
  color: "no",
  controls: "no"
});
const controle = writable({
  emplacement: "keyboard_controle",
  plus: "no",
  type: "ergodox",
  layer: "Ctrl",
  color: "yes",
  controls: "yes"
});
const raccourcis_ergodox = writable({
  emplacement: "keyboard_raccourcis_ergodox",
  plus: "no",
  type: "ergodox",
  layer: "Ctrl",
  color: "yes",
  controls: "yes"
});
const symboles = writable({
  emplacement: "keyboard_symboles",
  plus: "no",
  type: "iso",
  layer: "AltGr",
  color: "no",
  controls: "yes"
});
const symboles_plus = writable({
  emplacement: "keyboard_symboles_plus",
  plus: "yes",
  type: "ergodox",
  layer: "AltGr",
  color: "no",
  controls: "no"
});
const magique = writable({
  emplacement: "keyboard_magique",
  plus: "yes",
  type: "iso",
  layer: "Visuel",
  color: "no",
  controls: "no"
});
const layer = writable({
  emplacement: "keyboard_layer",
  plus: "yes",
  type: "iso",
  layer: "Layer",
  color: "no",
  controls: "yes"
});
const a = writable({
  emplacement: "keyboard_a",
  plus: "yes",
  type: "iso",
  layer: "À",
  color: "no",
  controls: "yes"
});
const virgule = writable({
  emplacement: "keyboard_virgule",
  plus: "yes",
  type: "iso",
  layer: ",",
  color: "no",
  controls: "yes"
});
const stores_infos = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  a,
  controle,
  discordLink,
  emulation,
  frequences,
  latestVersion,
  layer,
  layoutData,
  magique,
  presentation,
  presentation_plus,
  raccourcis_ergodox,
  reference,
  roulements,
  symboles,
  symboles_plus,
  version,
  versionsList,
  virgule
}, Symbol.toStringTag, { value: "Module" }));
export {
  versionsList as a,
  discordLink as d,
  layoutData as l,
  stores_infos as s,
  version as v
};
