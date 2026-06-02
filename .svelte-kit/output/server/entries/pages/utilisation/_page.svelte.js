import { e as ensure_array_like, a as escape_html, b as attr, h as head } from "../../../chunks/index2.js";
import { P as PageWrapper } from "../../../chunks/PageWrapper.js";
import { E as Ergopti } from "../../../chunks/Ergopti.js";
import { E as ErgoptiPlus } from "../../../chunks/ErgoptiPlus.js";
import "clsx";
import { a as Keyboard, K as KeyboardBasis } from "../../../chunks/KeyboardBasis.js";
import { s as stores_infos, l as layoutData, v as version, d as discordLink } from "../../../chunks/stores_infos.js";
import { g as get } from "../../../chunks/index.js";
import { b as base } from "../../../chunks/server.js";
import "../../../chunks/url.js";
import "@sveltejs/kit/internal/server";
import "../../../chunks/root.js";
import { b as branchForInstall } from "../../../chunks/isDev.js";
const REPO = "adrienm7/ergopti";
function getRawUrl(repoPath) {
  const branch = branchForInstall();
  return `https://raw.githubusercontent.com/${REPO}/${branch}/${repoPath}`;
}
let magic = {};
function unescapeTomlString(s) {
  if (!s && s !== "") return s;
  return s.replace(/\\\\/g, "\\").replace(/\\n/g, "\n").replace(/\\r/g, "\r").replace(/\\t/g, "	").replace(/\\"/g, '"').replace(/\\'/g, "'").replace(/\r\n/g, "\n").replace(/\r/g, "\n");
}
function parseTomlMagic(toml) {
  const result = {};
  const lines = toml.split(/\r?\n/);
  let currentSection = null;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;
    const arrMatch = line.match(/^\[\[([^\]]+)\]\]/);
    if (arrMatch) {
      currentSection = arrMatch[1];
      continue;
    }
    const secMatch = line.match(/^\[([^\]]+)\]/);
    if (secMatch) {
      currentSection = secMatch[1];
      continue;
    }
    if (currentSection === "repeat") continue;
    const objLineMatch = line.match(/^"([^"]+)"\s*=\s*\{(.*)\}\s*$/);
    if (objLineMatch) {
      const key = objLineMatch[1];
      const body = objLineMatch[2];
      const outMatch = body.match(/output\s*=\s*("(?:\\.|[^\"])*")/);
      if (outMatch) {
        let val = outMatch[1].slice(1, -1);
        val = unescapeTomlString(val);
        result[key] = val;
      }
      continue;
    }
    const kvMatch = line.match(/^([A-Za-z0-9_\-]+)\s*=\s*("(?:\\.|[^\"])*")\s*$/);
    if (kvMatch) {
      const key = kvMatch[1];
      let val = kvMatch[2].slice(1, -1);
      val = unescapeTomlString(val);
      result[key] = val;
    }
  }
  return result;
}
if (typeof window !== "undefined") {
  fetch("/hotstrings/magickey.toml").then((response) => response.text()).then((text) => {
    const parsed = parseTomlMagic(text);
    magic = {};
    for (const [k, v] of Object.entries(parsed)) {
      const cleanKey = k.replace(/★/g, "");
      if (cleanKey.indexOf("\\") !== -1) continue;
      magic[cleanKey.toLowerCase()] = v;
    }
  }).catch(() => {
  });
}
class KeyboardEmulation extends Keyboard {
  constructor(id) {
    super(id);
    this["layer"] = "Primary";
    this["modifiers"] = {
      Shift: false,
      Alt: false,
      AltGr: false,
      Ctrl: false,
      Circonflexe: false,
      Trema: false,
      Exposant: false,
      Indice: false,
      R: false,
      Currency: false,
      À: false,
      ",": false
    };
    this.emulateKey = this.emulateKey.bind(this);
    this.releaseKey = this.releaseKey.bind(this);
  }
  layerUpdate() {
    const priorities = [
      { cond: this["modifiers"]["AltGr"] && this["modifiers"]["Shift"], value: "ShiftAltGr" },
      {
        cond: this["modifiers"]["Circonflexe"] && this["modifiers"]["Shift"],
        value: "CirconflexeShift"
      },
      { cond: this["modifiers"]["Circonflexe"], value: "Circonflexe" },
      { cond: this["modifiers"]["Trema"] && this["modifiers"]["Shift"], value: "TremaShift" },
      { cond: this["modifiers"]["Trema"], value: "Trema" },
      { cond: this["modifiers"]["Exposant"] && this["modifiers"]["Shift"], value: "ExposantShift" },
      { cond: this["modifiers"]["Exposant"], value: "Exposant" },
      { cond: this["modifiers"]["Indice"] && this["modifiers"]["Shift"], value: "IndiceShift" },
      { cond: this["modifiers"]["Indice"], value: "Indice" },
      { cond: this["modifiers"]["R"] && this["modifiers"]["Shift"], value: "RShift" },
      { cond: this["modifiers"]["R"], value: "R" },
      { cond: this["modifiers"]["Currency"] && this["modifiers"]["Shift"], value: "CurrencyShift" },
      { cond: this["modifiers"]["Currency"], value: "Currency" },
      { cond: this["modifiers"]["AltGr"], value: "AltGr" },
      { cond: this["modifiers"]["Shift"], value: "Shift" },
      { cond: this["modifiers"]["Ctrl"], value: "Ctrl" },
      { cond: this["modifiers"]["R"], value: "R" },
      { cond: this["modifiers"]["À"], value: "À" },
      { cond: this["modifiers"][","], value: "," }
    ];
    const match = priorities.find((p) => p.cond);
    this["layer"] = match ? match.value : "Primary";
    stores_infos[this.id].update((currentData) => {
      currentData["layer"] = this["layer"];
      return currentData;
    });
    this.updateKeyboard();
  }
  emulateKey(event) {
    const layoutData$1 = get(layoutData);
    const plus = get(stores_infos[this.id])["plus"] === "yes";
    const type = get(stores_infos[this.id])["type"];
    const activeModifier = this.determineActiveModifier(event);
    if (activeModifier) {
      this["modifiers"][activeModifier] = true;
      this.layerUpdate();
      if (plus && activeModifier === "Alt") {
        this.sendResult("BackSpace");
      }
      return;
    }
    if (this["modifiers"]["Ctrl"] && !this["modifiers"]["AltGr"]) {
      return;
    }
    const keyCodePressed = event.code;
    const keyIdentifier = layoutData$1[type].find((el) => el["code"] === keyCodePressed);
    this.pressKey(keyIdentifier["key"]);
    if (keyIdentifier !== void 0) {
      event.preventDefault();
      const keyContent = layoutData$1["keys"].find((el) => el["key"] === keyIdentifier["key"]);
      const activeDeadKey = this.determineActiveDeadKey(keyContent);
      if (activeDeadKey) {
        this["modifiers"][activeDeadKey] = true;
        this.layerUpdate();
        return;
      }
      const [resultToSend, charactersToDelete] = this.getResultToSendFinal(keyContent);
      this.sendResult(resultToSend, charactersToDelete);
    }
  }
  pressKey(key) {
    const keyboardLocation = this.location;
    const pressedKeys = keyboardLocation.querySelectorAll(".pressed-key");
    [].forEach.call(pressedKeys, function(el) {
      if (el.dataset["type"] !== "special" || el.dataset["key"] === "BackSpace" || el.dataset["key"] === "Tab") {
        el.classList.remove("pressed-key");
      }
    });
    keyboardLocation.querySelector(`keyboard-key[data-key='${key}']`).classList.add("pressed-key");
  }
  determineActiveModifier(event) {
    const plus = get(stores_infos[this.id])["plus"] === "yes";
    if (event.code === "AltRight" || event.code === "AltGraph") {
      return "AltGr";
    } else if (event.code === "ShiftLeft" || event.code === "ShiftRight" || plus && event.code === "ControlRight") {
      return "Shift";
    } else if (event.code === "AltLeft") {
      return "Alt";
    } else if (event.code === "ControlLeft" || !plus && event.code === "ControlRight") {
      return "Ctrl";
    }
    return false;
  }
  determineActiveDeadKey(keyContent) {
    const keyPressed = this.getResultToSend(keyContent);
    const deadKeys = {
      "◌̂": "Circonflexe",
      "◌̈": "Trema",
      "ᵉ": "Exposant",
      "ᵢ": "Indice",
      ℝ: "R",
      "¤": "Currency"
    };
    return deadKeys[keyPressed];
  }
  getResultToSend(keyContent) {
    const plus = get(stores_infos[this.id])["plus"] === "yes";
    let resultToSend = "";
    if (plus) {
      if (keyContent[this["layer"] + "+"] !== void 0) {
        resultToSend = keyContent[this["layer"] + "+"];
      } else {
        resultToSend = keyContent[this["layer"]];
      }
    } else {
      resultToSend = keyContent[this["layer"]];
    }
    return resultToSend;
  }
  getResultToSendFinal(keyContent) {
    const plus = get(stores_infos[this.id])["plus"] === "yes";
    const keyPressed = keyContent["key"];
    let resultToSend = this.getResultToSend(keyContent);
    let charactersToDelete = 0;
    for (const layerName of [
      "Circonflexe",
      "Trema",
      "Exposant",
      "Indice",
      "R",
      "Currency",
      "À",
      ","
    ]) {
      if (this["modifiers"][layerName]) {
        if (layerName === "À" || layerName === ",") {
          charactersToDelete = 1;
        }
        this["modifiers"][layerName] = false;
        this.layerUpdate();
        break;
      }
    }
    if (resultToSend === "à") {
      this["modifiers"]["À"] = true;
      this.layerUpdate();
    }
    if (resultToSend === ",") {
      this["modifiers"][","] = true;
      this.layerUpdate();
    }
    if (keyPressed === "BackSpace") {
      resultToSend = "BackSpace";
    } else if (this["modifiers"]["Ctrl"] && (keyPressed === "BackSpace" || plus && keyPressed === "LAlt")) {
      resultToSend = "Ctrl-BackSpace";
    } else if (this["modifiers"]["Ctrl"] & keyPressed === "Delete" || resultToSend === '"Ctrl + ⌦"') {
      resultToSend = "Ctrl-Delete";
    } else if (keyPressed === "Delete" || plus && this["modifiers"]["Shift"] && keyPressed === "LAlt") {
      resultToSend = "Delete";
    } else if (keyPressed === "Enter" || plus && keyPressed === "CapsLock") {
      resultToSend = "Enter";
    }
    return [resultToSend, charactersToDelete];
  }
  sendResult(resultToSend, charactersToDelete = 0) {
    const plus = get(stores_infos[this.id])["plus"] === "yes";
    let newTextAreaValue = this.textarea.value;
    if (charactersToDelete > 0) {
      newTextAreaValue = newTextAreaValue.slice(0, -charactersToDelete);
    }
    resultToSend = resultToSend.replace(/<nbsp><\/nbsp>/g, " ");
    resultToSend = resultToSend.replace(/<tap-hold>.*<\/tap-hold>/g, "");
    resultToSend = resultToSend.replace("␣", " ");
    const cursorPosition = this.textarea.selectionStart;
    const textBeforeCursor = newTextAreaValue.substring(0, cursorPosition);
    const textAfterCursor = newTextAreaValue.substring(cursorPosition);
    let newCursorPosition = cursorPosition + 1;
    if (resultToSend === "BackSpace") {
      newTextAreaValue = textBeforeCursor.substring(0, cursorPosition - 1) + textAfterCursor;
      newCursorPosition = cursorPosition - 1;
    } else if (resultToSend === "Ctrl-BackSpace") {
      const textBeforeSuppression = textBeforeCursor;
      const textAfterSuppression = textBeforeCursor.replace(/\s*\S*$/, "");
      newTextAreaValue = textAfterSuppression + textAfterCursor;
      const suppressedCharactersNumber = textBeforeSuppression.length - textAfterSuppression.length;
      newCursorPosition = cursorPosition - suppressedCharactersNumber;
    } else if (resultToSend === "Ctrl-Delete") {
      const textAfterSuppression = textAfterCursor.replace(/^\S*\s*/, "");
      newTextAreaValue = textBeforeCursor + textAfterSuppression;
      newCursorPosition = cursorPosition;
    } else if (resultToSend === "Delete") {
      newTextAreaValue = textBeforeCursor + textAfterCursor.substring(1, textAfterCursor.length);
      newCursorPosition = cursorPosition;
    } else if (resultToSend === "Enter") {
      newTextAreaValue = textBeforeCursor + "\n" + textAfterCursor;
    } else if (resultToSend === "Tab") {
      newTextAreaValue = textBeforeCursor + "	" + textAfterCursor;
    } else if (resultToSend === "★") {
      const currentWord = textBeforeCursor.split(/\s+/).slice(-1)[0];
      if (currentWord.toLowerCase() in magic) {
        let replacement = magic[currentWord.toLowerCase()];
        if (currentWord === currentWord.toUpperCase() && currentWord.length > 1) {
          replacement = replacement.toUpperCase();
        } else if (currentWord === currentWord.charAt(0).toUpperCase() + currentWord.slice(1).toLowerCase()) {
          replacement = replacement.charAt(0).toUpperCase() + replacement.slice(1).toLowerCase();
        } else {
          replacement = replacement.toLowerCase();
        }
        let regex = /(\s*)(\S+)$/;
        let match = textBeforeCursor.match(regex);
        let prefix = match ? match[1] : "";
        newTextAreaValue = textBeforeCursor.replace(regex, prefix + replacement) + textAfterCursor;
        newCursorPosition = cursorPosition + replacement.length;
      } else {
        newTextAreaValue = textBeforeCursor + textBeforeCursor.slice(-1) + textAfterCursor;
      }
    } else {
      newTextAreaValue = textBeforeCursor + resultToSend + textAfterCursor;
      newCursorPosition = cursorPosition + resultToSend.length;
    }
    if (plus) {
      [newTextAreaValue, newCursorPosition] = this.ergoptiPlusFeatures(
        newTextAreaValue,
        newCursorPosition
      );
    }
    this.textarea.value = newTextAreaValue;
    this.textarea.setSelectionRange(newCursorPosition, newCursorPosition);
  }
  ergoptiPlusFeatures(TextAreaValue, CursorPosition) {
    let newTextAreaValue = TextAreaValue;
    let newCursorPosition = CursorPosition;
    function regexReplaceCursor(regex, replacement) {
      const matches = [...newTextAreaValue.matchAll(regex)];
      newTextAreaValue = newTextAreaValue.replace(regex, replacement);
      const charactersAddedCount = matches.reduce(
        (acc, m) => acc + (replacement.length - m[0].length),
        0
      );
      newCursorPosition = newCursorPosition + charactersAddedCount;
    }
    regexReplaceCursor(/([^\Wr]){2}ê/g, "$1$1u");
    regexReplaceCursor(/([cdjlmnst])'/gi, "$1’");
    const replacementsSFBs = [
      [/èy/g, "aî"],
      [/yè/g, "â"],
      [/êé/g, "oe"],
      [/éê/g, "eo"],
      [/éà/g, "ié"],
      [/àé/g, "éi"],
      [/ê\./g, "u."],
      [/ê,/g, "u,"]
    ];
    const replacementsRolls = [
      [/hc/g, "wh"],
      [/sx/g, "sk"],
      [/cx/g, "ck"],
      [/eé/g, "ez"],
      [/p'/g, "ct"],
      [/<@/g, "</"],
      [/<%/g, "<="],
      [/>%/g, ">="],
      [/#!/g, " := "],
      [/!#/g, " != "],
      [/\(#/g, '("'],
      [/\[#/g, '["'],
      [/#\]/g, '"]'],
      [/#\[/g, '"]'],
      [/#\(/g, '")'],
      [/\[\)/g, ' = ""'],
      [/\\\"/g, "/*"],
      [/\"\\/g, "*\\"],
      [/\$=/g, " => "],
      [/=\$/g, " <= "],
      [/\+\?/g, " -> "],
      [/\?\+/g, " <- "]
    ];
    const replacementsDeadKeyECirc = [
      [/êa/g, "â"],
      [/êi/g, "î"],
      [/êo/g, "ô"],
      [/êu/g, "û"],
      [/êe/g, "œ"]
    ];
    function* caseHandling(list) {
      for (const [regex, replacement] of list) {
        yield [regex, replacement];
        yield [new RegExp(regex.source.toUpperCase(), regex.flags), replacement.toUpperCase()];
        const titleSrc = regex.source.charAt(0).toUpperCase() + regex.source.slice(1);
        const titleRepl = replacement.charAt(0).toUpperCase() + replacement.slice(1);
        yield [new RegExp(titleSrc, regex.flags), titleRepl];
      }
    }
    for (const [regex, replacement] of [
      ...caseHandling(replacementsSFBs),
      ...caseHandling(replacementsRolls),
      ...caseHandling(replacementsDeadKeyECirc)
    ]) {
      regexReplaceCursor(regex, replacement);
    }
    return [newTextAreaValue, newCursorPosition];
  }
  releaseKey(event) {
    const modifier = this.determineActiveModifier(event);
    if (modifier) {
      this["modifiers"][modifier] = false;
      this.layerUpdate();
    }
  }
}
function KeyboardEmulation_1($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    new KeyboardEmulation("emulation");
    KeyboardBasis($$renderer2, { id: "emulation" });
    $$renderer2.push(`<!----> <tiny-space></tiny-space> <div class="main svelte-6ae7e2"><textarea id="input-text" placeholder="Tapez ici" class="svelte-6ae7e2">
	</textarea></div>`);
  });
}
const magicSampleToml = '# Text Expansion - Magic Sample\n# Format: [[section]]\n# All entries use: trigger = { output = "replacement", is_word = true/false, auto_expand = true/false }\n\n"a★" = { output = "ainsi", is_word = true, auto_expand = true }\n"avv★" = { output = "avez-vous", is_word = true, auto_expand = true }\n"b★" = { output = "bonjour", is_word = true, auto_expand = true }\n"bcp★" = { output = "beaucoup", is_word = true, auto_expand = true }\n"c★" = { output = "c’est", is_word = true, auto_expand = true }\n"cad★" = { output = "c’est-à-dire", is_word = true, auto_expand = true }\n"cb★" = { output = "combien", is_word = true, auto_expand = true }\n"ct★" = { output = "c’était", is_word = true, auto_expand = true }\n"dé★" = { output = "déjà", is_word = true, auto_expand = true }\n"ê★" = { output = "être", is_word = true, auto_expand = true }\n"ecq★" = { output = "est-ce que", is_word = true, auto_expand = true }\n"eef★" = { output = "en effet", is_word = true, auto_expand = true }\n"ex★" = { output = "exemple", is_word = true, auto_expand = true }\n"f★" = { output = "faire", is_word = true, auto_expand = true }\n"g★" = { output = "j’ai", is_word = true, auto_expand = true }\n"gf★" = { output = "j’ai fait", is_word = true, auto_expand = true }\n"gt★" = { output = "j’étais", is_word = true, auto_expand = true }\n"h★" = { output = "heure", is_word = true, auto_expand = true }\n"ia★" = { output = "intelligence artificielle", is_word = true, auto_expand = true }\n"m★" = { output = "mais", is_word = true, auto_expand = true }\n"mr★" = { output = "monsieur", is_word = true, auto_expand = true }\n"n★" = { output = "nouveau", is_word = true, auto_expand = true }\n"nb★" = { output = "nombre", is_word = true, auto_expand = true }\n"new★" = { output = "nouveau", is_word = true, auto_expand = true }\n"orga★" = { output = "organisation", is_word = true, auto_expand = true }\n"p★" = { output = "prendre", is_word = true, auto_expand = true }\n"pb★" = { output = "problème", is_word = true, auto_expand = true }\n"pcq★" = { output = "parce que", is_word = true, auto_expand = true }\n"pd★" = { output = "pendant", is_word = true, auto_expand = true }\n"pê★" = { output = "peut-être", is_word = true, auto_expand = true }\n"pex★" = { output = "par exemple", is_word = true, auto_expand = true }\n"pg★" = { output = "pas grave", is_word = true, auto_expand = true }\n"q★" = { output = "question", is_word = true, auto_expand = true }\n"qcq★" = { output = "qu’est-ce que", is_word = true, auto_expand = true }\n"qqch★" = { output = "quelque chose", is_word = true, auto_expand = true }\n"r★" = { output = "rien", is_word = true, auto_expand = true }\n"rdv★" = { output = "rendez-vous", is_word = true, auto_expand = true }\n"rs★" = { output = "résultat", is_word = true, auto_expand = true }\n"s★" = { output = "sous", is_word = true, auto_expand = true }\n"stp★" = { output = "s’il te plaît", is_word = true, auto_expand = true }\n"svp★" = { output = "s’il vous plaît", is_word = true, auto_expand = true }\n"t★" = { output = "très", is_word = true, auto_expand = true }\n"tb★" = { output = "très bien", is_word = true, auto_expand = true }\n"tt★" = { output = "télétravail", is_word = true, auto_expand = true }\n"tv★" = { output = "télévision", is_word = true, auto_expand = true }\n"usa★" = { output = "États-Unis", is_word = true, auto_expand = true }\n"v★" = { output = "version", is_word = true, auto_expand = true }\n"wk★" = { output = "week-end", is_word = true, auto_expand = true }\n"wiki★" = { output = "Wikipédia", is_word = true, auto_expand = true }\n"x★" = { output = "exemple", is_word = true, auto_expand = true }\n"yc★" = { output = "y compris", is_word = true, auto_expand = true }\n"yt★" = { output = "YouTube", is_word = true, auto_expand = true }\n';
function Introduction_telechargements($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let displayedEntries, otherMatches;
    function parseTomlSimple(toml) {
      const result = {};
      for (const line of toml.split("\n")) {
        const match = line.match(/^"([^"]+)"\s*=\s*\{\s*output\s*=\s*"([^"]+)"/);
        if (match) {
          const k = unescapeTomlString2(match[1].trim());
          const v = unescapeTomlString2(match[2]);
          result[k] = v;
        }
      }
      return result;
    }
    function unescapeTomlString2(s) {
      if (!s) return "";
      return s.replace(/\\r/g, "\r").replace(/\\n/g, "\n").replace(/\\t/g, "	").replace(/\\'/g, "'").replace(/\\"/g, '"').replace(/\\\\/g, "\\").replace(/\r|\n/g, " ").trim();
    }
    parseTomlSimple(magicSampleToml);
    if (typeof window !== "undefined") {
      fetch(base + "/hotstrings/magic.toml").then((response) => response.text()).then((text) => {
        parseTomlSimple(text);
      });
    }
    let tomlSections = [];
    let orderedSections = [];
    let selectedSection = "";
    let sectionEntries = [];
    let searchQuery = "";
    let sortDir = 1;
    function selectSection(name) {
      selectedSection = name;
      const sec = orderedSections.find((s) => s.name === name) || tomlSections.find((s) => s.name === name);
      sectionEntries = sec ? sec.entries : [];
    }
    displayedEntries = (() => {
      if (!sectionEntries) return [];
      const q = "".toLowerCase();
      const filtered = sectionEntries.filter((e) => {
        return (e.key || "").toLowerCase().includes(q) || (e.output || "").toLowerCase().includes(q);
      });
      const sorted = filtered.slice().sort((a, b) => {
        const A = a.key || "";
        const B = b.key || "";
        return A.localeCompare(B, "fr", { sensitivity: "base", ignorePunctuation: true }) * sortDir;
      });
      return sorted;
    })();
    otherMatches = (() => {
      const q = "".toLowerCase().trim();
      if (!q) return [];
      const others = [];
      for (const s of orderedSections) {
        if (s.name === selectedSection) continue;
        const matches = (s.entries || []).filter((e) => {
          return (e.key || "").toLowerCase().includes(q) || (e.output || "").toLowerCase().includes(q);
        }).slice().sort((a, b) => {
          const A = a.key || "";
          const B = b.key || "";
          return A.localeCompare(B, "fr", { sensitivity: "base", ignorePunctuation: true }) * sortDir;
        });
        if (matches.length) others.push({ name: s.name, title: s.title, entries: matches });
      }
      return others;
    })();
    $$renderer2.push(`<div class="main"><h1 data-aos="zoom-in">Utiliser `);
    Ergopti($$renderer2);
    $$renderer2.push(`<!----></h1> <hr class="margin-h1"/></div> <div style="overflow-x: hidden;"><h2 class="first-h2">Essayer la disposition en ligne</h2></div> `);
    KeyboardEmulation_1($$renderer2);
    $$renderer2.push(`<!----> <div class="main">`);
    if (
      // build orderedSections using meta.sections_order (skip "-")
      // append any sections not listed in order
      // prepend sample selection as first option
      // extract meta (_meta and _meta.sections)
      // parse lines like sections_order = ["replace", "repeat", "-"]
      // merge same-name normal sections
      // Variable pour contrôler l'affichage du tableau d’abréviations
      orderedSections.length
    ) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<section style="margin-top:1rem;"><h3>Remplacements de texte `);
      ErgoptiPlus($$renderer2);
      $$renderer2.push(`<!----></h3> <div style="display:flex; gap:0.5rem; align-items:center; flex-wrap:wrap; margin-top:0.25rem;">`);
      $$renderer2.select(
        {
          value: selectedSection,
          onchange: () => selectSection(selectedSection),
          style: "min-width:220px;"
        },
        ($$renderer3) => {
          $$renderer3.push(`<!--[-->`);
          const each_array = ensure_array_like(orderedSections);
          for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
            let s = each_array[$$index];
            $$renderer3.option({ value: s.name }, ($$renderer4) => {
              $$renderer4.push(`${escape_html(s.title)}`);
            });
          }
          $$renderer3.push(`<!--]-->`);
        }
      );
      $$renderer2.push(` <input placeholder="Rechercher..."${attr("value", searchQuery)} style="flex:1; min-width:160px; padding:0.35rem; color:#000; background: rgba(255,255,255,0.8); border:1px solid #ccc; border-radius:3px;"/></div> `);
      if (displayedEntries.length) {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<div style="max-height:20rem; overflow:auto; margin-top:0.5rem;"><table style="width:100%; border-collapse:collapse; table-layout:fixed;" class="svelte-phj58a"><thead class="svelte-phj58a"><tr><th style="text-align:center; padding:8px; border-bottom:1px solid #ddd; cursor:pointer;" class="svelte-phj58a">Abréviation ${escape_html("▲")}</th><th style="text-align:center; padding:8px; border-bottom:1px solid #ddd; cursor:pointer;" class="svelte-phj58a">Remplacement ${escape_html("")}</th></tr></thead><tbody><!--[-->`);
        const each_array_1 = ensure_array_like(displayedEntries);
        for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
          let e = each_array_1[$$index_1];
          $$renderer2.push(`<tr><td style="padding:6px; border-bottom:1px solid #eee; word-break:break-word;" class="svelte-phj58a">${escape_html(e.key)}</td><td style="padding:6px; border-bottom:1px solid #eee; word-break:break-word;" class="svelte-phj58a">${escape_html(e.output)}</td></tr>`);
        }
        $$renderer2.push(`<!--]--></tbody></table></div>`);
      } else {
        $$renderer2.push("<!--[-1-->");
        $$renderer2.push(`<p style="margin-top:0.5rem;">Aucun élément correspondant.</p>`);
      }
      $$renderer2.push(`<!--]--> `);
      if (otherMatches.length) {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<div style="margin-top:1rem;"><!--[-->`);
        const each_array_2 = ensure_array_like(otherMatches);
        for (let $$index_3 = 0, $$length = each_array_2.length; $$index_3 < $$length; $$index_3++) {
          let m = each_array_2[$$index_3];
          $$renderer2.push(`<div style="margin-top:0.6rem;"><h4 style="margin:0 0 0.25rem 0; font-size:0.95rem;">Dans ${escape_html(m.title)} <span style="color:#666; font-size:0.9rem;">(autre section)</span></h4> <table style="width:100%; border-collapse:collapse; table-layout:fixed; font-size:0.95rem;" class="svelte-phj58a"><thead class="svelte-phj58a"><tr><th style="text-align:center; padding:6px; border-bottom:1px solid #ddd;" class="svelte-phj58a">Abréviation</th><th style="text-align:center; padding:6px; border-bottom:1px solid #ddd;" class="svelte-phj58a">Remplacement</th></tr></thead><tbody><!--[-->`);
          const each_array_3 = ensure_array_like(m.entries);
          for (let $$index_2 = 0, $$length2 = each_array_3.length; $$index_2 < $$length2; $$index_2++) {
            let e = each_array_3[$$index_2];
            $$renderer2.push(`<tr><td style="padding:6px; border-bottom:1px solid #eee;" class="svelte-phj58a">${escape_html(e.key)}</td><td style="padding:6px; border-bottom:1px solid #eee;" class="svelte-phj58a">${escape_html(e.output)}</td></tr>`);
          }
          $$renderer2.push(`<!--]--></tbody></table></div>`);
        }
        $$renderer2.push(`<!--]--></div>`);
      } else {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]--></section>`);
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<p style="margin-top:1rem;">Chargement de magickey.toml…</p>`);
    }
    $$renderer2.push(`<!--]--></div>`);
  });
}
function Installation_windows($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let tag, urlKbdEdit;
    tag = "…";
    urlKbdEdit = "#";
    $$renderer2.push(`<h2 id="windows"><i class="icon-windows purple" style="vertical-align:-0.05em"></i> Installation Windows</h2> <p>Le pilote ci-dessous a été réalisé à l'aide de <a class="link" href="https://www.kbdedit.com/" target="_blank">KbdEdit</a>. C'est un logiciel très complet qui permet de modifier des dispositions de clavier sur Windows.
	Il est en mesure de créer des pilotes pour Windows, et depuis peu pour Mac. Seul Linux n'est pas
	supporté.</p> <div class="download-buttons"><a${attr("href", urlKbdEdit)}${attr("download", false)}><button${attr("disabled", true, true)}><i class="icon-windows" style="vertical-align:-0.05em"></i> Installateur KbdEdit d'Ergopti ${escape_html(tag)}</button></a></div> <small-space></small-space> <p>Il suffit d'exécuter le fichier <code>Ergopti_windows.exe</code> et de cliquer
	sur le bouton d'installation pour installer le pilote sur Windows. Ensuite, il est conseillé de redémarrer
	l'ordinateur pour être sûr que le pilote soit bien pris en compte.</p> <picture><source srcset="/dev/_app/immutable/assets/windows_installation_1.CXFSSTuj.avif 1x, /dev/_app/immutable/assets/windows_installation_1.Dunz6aUV.avif 1.9940119760479043x" type="image/avif"/><source srcset="/dev/_app/immutable/assets/windows_installation_1.ChahaDar.webp 1x, /dev/_app/immutable/assets/windows_installation_1.DcJ7_Xks.webp 1.9940119760479043x" type="image/webp"/><source srcset="/dev/_app/immutable/assets/windows_installation_1.DMCwLi05.jpg 1x, /dev/_app/immutable/assets/windows_installation_1.ClKihwYu.jpg 1.9940119760479043x" type="image/jpeg"/><img class="no-upscale" style="width: min(400px, 100%)!important;" src="/dev/_app/immutable/assets/windows_installation_1.ClKihwYu.jpg" alt="Screenshot d'installation du pilote KbdEdit" width="333" height="418"/></picture> <div style="margin-top:15px"></div> <p>Après l'installation, se rendre dans <code>Paramètres</code> > <code>Heure et langue</code> > <code>Langue et région</code> et cliquer sur le <code>…</code> de
	la langue installée (ici <code>Français (France)</code>) :</p> <picture><source srcset="/dev/_app/immutable/assets/windows_installation_2.uGtLgs6G.avif 1x, /dev/_app/immutable/assets/windows_installation_2.9U29oU_h.avif 2x" type="image/avif"/><source srcset="/dev/_app/immutable/assets/windows_installation_2.DYPJiPqm.webp 1x, /dev/_app/immutable/assets/windows_installation_2.k2Z84m7c.webp 2x" type="image/webp"/><source srcset="/dev/_app/immutable/assets/windows_installation_2.CMBSWqYC.jpg 1x, /dev/_app/immutable/assets/windows_installation_2.Sp1JlQXt.jpg 2x" type="image/jpeg"/><img src="/dev/_app/immutable/assets/windows_installation_2.Sp1JlQXt.jpg" alt="Screenshot 1/2 des paramètres Windows 11 pour changer sa disposition de clavier" width="1920" height="1080"/></picture> <div style="margin-top:15px"></div> <p>Cliquer ensuite sur <code>Ajouter un clavier</code> et sélectionner la version qui vient d'être ajoutée
	par l'installateur de KbdEdit :</p> <picture><source srcset="/dev/_app/immutable/assets/windows_installation_3.CUcJ2JPU.avif 1x, /dev/_app/immutable/assets/windows_installation_3.BSq_lpyq.avif 2x" type="image/avif"/><source srcset="/dev/_app/immutable/assets/windows_installation_3.BoYy8fk8.webp 1x, /dev/_app/immutable/assets/windows_installation_3.DbhTM6cN.webp 2x" type="image/webp"/><source srcset="/dev/_app/immutable/assets/windows_installation_3.DT6W-_H5.jpg 1x, /dev/_app/immutable/assets/windows_installation_3.B0Rr5HUe.jpg 2x" type="image/jpeg"/><img src="/dev/_app/immutable/assets/windows_installation_3.B0Rr5HUe.jpg" alt="Screenshot 2/2 des paramètres Windows 11 pour changer sa disposition de clavier" width="1920" height="1080"/></picture> <p>Il est conseillé de supprimer tous les claviers de cette liste avant d'ajouter celui d'`);
    Ergopti($$renderer2);
    $$renderer2.push(`<!----> et ensuite éventuellement rajouter vos autres claviers comme AZERTY. Cela permettra de
	l'avoir comme clavier par défaut, étant en première position de la liste.</p> <div style="margin-top:15px"></div> <p>La disposition sera ensuite disponible dans le menu linguistique de la barre des tâches :</p> <picture><source srcset="/dev/_app/immutable/assets/windows_installation_4.DBxUPtVe.avif 1x, /dev/_app/immutable/assets/windows_installation_4.6kvefM_s.avif 2x" type="image/avif"/><source srcset="/dev/_app/immutable/assets/windows_installation_4.B1lCKKr7.webp 1x, /dev/_app/immutable/assets/windows_installation_4.DZTreOm-.webp 2x" type="image/webp"/><source srcset="/dev/_app/immutable/assets/windows_installation_4.BSslvsGM.jpg 1x, /dev/_app/immutable/assets/windows_installation_4.rI3pIZoU.jpg 2x" type="image/jpeg"/><img class="no-upscale" style="width: min(400px, 100%)!important;" src="/dev/_app/immutable/assets/windows_installation_4.rI3pIZoU.jpg" alt="Screenshot du menu menu linguistique de la barre des tâches" width="472" height="342"/></picture> <h3 id="windows-solutions">Résolution de problèmes connus</h3> <p>Certains problèmes ont été rapportés avec le pilote Windows d'`);
    Ergopti($$renderer2);
    $$renderer2.push(`<!----> dans quelques logiciels :</p> <ul><li><b>Microsoft Excel :</b> Taper un <kbd-output>+</kbd-output> avec <kbd>AltGr</kbd> + <kbd>P</kbd> cause des problèmes d'édition de la cellule : tout ce qui est tapé avant disparaît et est remplacé
		par un <kbd-output>+</kbd-output>.<br/>➜ Ce problème se résout en utilisant le driver <a href="ergopti-plus" class="link">`);
    ErgoptiPlus($$renderer2);
    $$renderer2.push(`<!----></a> pour émuler la disposition et garantir que ce soit bien un symbole <kbd-output>+</kbd-output> qui
		soit envoyé et non un raccourci interne d'Excel qui interfère.</li></ul>`);
  });
}
function Installation_macos($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let tag, urlMacosBundle;
    tag = "…";
    urlMacosBundle = "#";
    $$renderer2.push(`<h2 id="macos"><i class="icon-appleinc purple" style="font-size:0.8em; vertical-align:0; margin-right:0.25em"></i>Installation macOS</h2> <tiny-space></tiny-space> <div class="download-buttons"><a${attr("href", urlMacosBundle)}${attr("download", false)}><button${attr("disabled", true, true)}><i class="icon-appleinc" style="font-size:0.8em; vertical-align:0"></i> Ergopti ${escape_html(tag)}.bundle</button></a></div> <tiny-space></tiny-space> <p>Ce bundle doit être dézippé puis placé dans le dossier des extensions de clavier de macOS :</p> <code>/Library/Keyboard Layouts/</code> <p>Il est également possible de l'installer sans droits d'administrateur en plaçant le bundle dans le
	dossier utilisateur :</p> <code>~/Library/Keyboard Layouts/</code> <p>Pour naviguer rapidement vers ce chemin, il existe le raccourci <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>G</kbd> dans le Finder. Cela ouvre directement l'emplacement spécifié.</p> <tiny-space></tiny-space> <p>Après avoir placé le bundle dans le bon dossier, redémarrer la session (ou l'ordinateur) pour que
	macOS prenne en compte la nouvelle disposition. Ensuite, aller dans <code>Préférences Système</code> > <code>Clavier</code> > <code>Méthodes de saisie</code> > <code>Modifier…</code> et ajouter une disposition en appuyant
	sur <code>+</code> en bas à gauche. Généralement, la disposition se trouvera dans la section « Français »,
	mais elle peut aussi parfois se trouver dans « Autres ».</p> <picture><source srcset="/dev/_app/immutable/assets/macos_installation_1.DHygMQ5x.avif 1x, /dev/_app/immutable/assets/macos_installation_1.zn854vRT.avif 2x" type="image/avif"/><source srcset="/dev/_app/immutable/assets/macos_installation_1.dVJIEhtb.webp 1x, /dev/_app/immutable/assets/macos_installation_1.DisDiFvj.webp 2x" type="image/webp"/><source srcset="/dev/_app/immutable/assets/macos_installation_1.TYG3qrNV.jpg 1x, /dev/_app/immutable/assets/macos_installation_1.Dil17oqc.jpg 2x" type="image/jpeg"/><img src="/dev/_app/immutable/assets/macos_installation_1.Dil17oqc.jpg" alt="Screenshot 1/4 des paramètres macOS pour changer sa disposition de clavier" width="1806" height="1386"/></picture> <div style="margin-top:15px"></div> <picture><source srcset="/dev/_app/immutable/assets/macos_installation_2.By292Pcy.avif 1x, /dev/_app/immutable/assets/macos_installation_2.H5YY4r2F.avif 2x" type="image/avif"/><source srcset="/dev/_app/immutable/assets/macos_installation_2.DW4_Ep2G.webp 1x, /dev/_app/immutable/assets/macos_installation_2.CjHLxrwF.webp 2x" type="image/webp"/><source srcset="/dev/_app/immutable/assets/macos_installation_2.DQSIpVHm.jpg 1x, /dev/_app/immutable/assets/macos_installation_2.Dxd7bzWP.jpg 2x" type="image/jpeg"/><img src="/dev/_app/immutable/assets/macos_installation_2.Dxd7bzWP.jpg" alt="Screenshot 2/4 des paramètres macOS pour changer sa disposition de clavier" width="1894" height="1474"/></picture> <div style="margin-top:15px"></div> <picture><source srcset="/dev/_app/immutable/assets/macos_installation_3.DVZzHwpK.avif 1x, /dev/_app/immutable/assets/macos_installation_3.D_Y3YeSt.avif 2x" type="image/avif"/><source srcset="/dev/_app/immutable/assets/macos_installation_3.CxcRhjqT.webp 1x, /dev/_app/immutable/assets/macos_installation_3.DOwSe_xv.webp 2x" type="image/webp"/><source srcset="/dev/_app/immutable/assets/macos_installation_3.B-IzcGiX.jpg 1x, /dev/_app/immutable/assets/macos_installation_3.raX05133.jpg 2x" type="image/jpeg"/><img src="/dev/_app/immutable/assets/macos_installation_3.raX05133.jpg" alt="Screenshot 3/4 des paramètres macOS pour changer sa disposition de clavier" width="1894" height="1474"/></picture> <div style="margin-top:15px"></div> <picture><source srcset="/dev/_app/immutable/assets/macos_installation_4.DI2lmgUz.avif 1x, /dev/_app/immutable/assets/macos_installation_4.xWDU3ZQg.avif 2x" type="image/avif"/><source srcset="/dev/_app/immutable/assets/macos_installation_4.QrveXJs6.webp 1x, /dev/_app/immutable/assets/macos_installation_4.BRaPl4QW.webp 2x" type="image/webp"/><source srcset="/dev/_app/immutable/assets/macos_installation_4.BPqzulyw.jpg 1x, /dev/_app/immutable/assets/macos_installation_4.Cq7_4npA.jpg 2x" type="image/jpeg"/><img src="/dev/_app/immutable/assets/macos_installation_4.Cq7_4npA.jpg" alt="Screenshot 4/4 des paramètres macOS pour changer sa disposition de clavier" width="1894" height="1474"/></picture> <div style="margin-top:15px"></div> <p>La disposition pourra ensuite être sélectionnée depuis la barre des tâches :</p> <picture><source srcset="/dev/_app/immutable/assets/macos_language_bar.DB5d2o3-.avif 1x, /dev/_app/immutable/assets/macos_language_bar.CiTWatiD.avif 2x" type="image/avif"/><source srcset="/dev/_app/immutable/assets/macos_language_bar.BTmcdvvi.webp 1x, /dev/_app/immutable/assets/macos_language_bar.DaUcRIO0.webp 2x" type="image/webp"/><source srcset="/dev/_app/immutable/assets/macos_language_bar.2Y6Jw5f9.jpg 1x, /dev/_app/immutable/assets/macos_language_bar.x-dCqrns.jpg 2x" type="image/jpeg"/><img src="/dev/_app/immutable/assets/macos_language_bar.x-dCqrns.jpg" alt="Screenshot de la sélection de clavier dans la barre des tâches" width="3456" height="478"/></picture> <div style="margin-top:15px"></div> <tiny-space></tiny-space> <p>Le bundle contient plusieurs variantes de la disposition :</p> <ul><li><strong>Ergopti</strong> : version standard, la même que le KbdEdit sur Windows ;</li> <li><strong>Ergopti+</strong> : version standard incluant la touche <kbd-output>★</kbd-output> à la
		place de <kbd>J</kbd> ainsi que les petites modifications en <kbd>AltGr</kbd> (<kbd-output>%</kbd-output> à la place de <kbd>œ</kbd>, <kbd-output>!</kbd-output> à la place de <kbd>ç</kbd>, etc.) ;</li> <li><strong>Ergopti++</strong> : Ergopti+ avec l'ajout de nombreuses touches mortes pour avoir
		directement les roulements personnalisés dans le keylayout ;</li></ul> <p><strong>Ergopti++</strong> permet de rapidement tester les roulements personnalisés comme <kbd>hc</kbd> donnant <kbd-output>wh</kbd-output> ou encore <kbd>(#</kbd> donnant <kbd-output>("</kbd-output>.
	Toutefois, elle entraîne certains petits problèmes. Parmi ceux-ci, il y a le fait qu'il faut
	appuyer 2 fois sur <kbd>Entrée</kbd> pour valider la touche morte et envoyer <kbd-output>Entrée</kbd-output>. Les touches mortes ne fonctionnent pas non plus sur l'écran de
	verrouillage, ce qui peut carrément empêcher la saisie de son mot de passe. Enfin, la fermeture
	automatique des parenthèses ne fonctionne pas dans les éditeurs de code. Pour toutes ces raisons,
	il est donc conseillé de plutôt utiliser <strong>Ergopti+</strong> avec le driver <a href="ergopti-plus" class="link">`);
    ErgoptiPlus($$renderer2);
    $$renderer2.push(`<!----></a> pour y définir ces roulements.</p> <p>Des <strong>variantes ANSI</strong> de ces dispositions sont également disponibles. En effet, sur
	macOS, un clavier ANSI entraîne de petites différences dans l'arrangement des codes de touches. Si
	aucun pilote dédié n'était disponible, le <kbd>ê</kbd> se verrait être échangé de place avec le <kbd>$</kbd> de la rangée des chiffres. En outre, la touche morte <kbd class="deadkey">◌̂</kbd> se verrait être
	échangée avec <kbd class="deadkey">◌̈</kbd> et donc être encore moins accessible.</p> <h3 id="macos-solutions">Résolution de problèmes connus</h3> <p>Certains problèmes ont été rapportés avec le keylayout d'`);
    Ergopti($$renderer2);
    $$renderer2.push(`<!----> dans quelques logiciels :</p> <ul><li>Les touches mortes suivies d'<kbd>Entrée</kbd> nécessitent un double appui sur <kbd>Entrée</kbd>. En effet, il faut un premier appui pour valider la touche morte, puis un
		second appui pour envoyer <kbd>Entrée</kbd>. Ce problème peut se résoudre avec le driver <a href="ergopti-plus" class="link">`);
    ErgoptiPlus($$renderer2);
    $$renderer2.push(`<!----></a>.</li> <li>Les touches mortes ne fonctionnent pas sur l'écran de verrouillage, ni les touches envoyant plus
		d'un caractère d'un coup, comme <kbd><nbsp></nbsp>:</kbd>. Ce problème cause surtout des
		difficultés avec ErgoptiPlus qui contient beaucoup de nouvelles touches mortes. Le keylayout
		Ergopti standard ne présente pas ce problème n'ayant que des touches mortes simples.</li> <li>Parfois, Ergopti peut ne pas s'afficher dans la liste des dispositions clavier. Pour résoudre ce
		problème, extraire le fichier keylayout du bundle et le placer dans le même dossier que celui-ci
		(en supprimant le bundle, pour ne pas avoir de doublon d'ids). Le bundle n'est qu'un moyen un
		peu plus complexe d'installer des fichiers keylayouts, en permettant d'ajouter une traduction
		des noms, installer plusieurs variantes d'un coup, etc. <br/>Si, après redémarrage, Ergopti ne
		s'affiche pas dans « Autres », alors c'est que le keylayout pose problème. C'est grâce au bundle
		que la disposition peut s'afficher dans la catégorie « Français », ici il est certain que la
		disposition sera dans « Autres » si elle est reconnue. <br/> En dernier recours, on peut essayer d'ouvrir le keylayout avec le logiciel Ukulele, pour vérifier
		sa validité. Il est aussi possible de le modifier directement avec un éditeur de texte, car il s'agit
		d'un simple fichier XML. <br/> Ce problème ne devrait cependant a priori jamais exister, car le fichier keylayout est toujours testé
		avant d'être partagé. Ces tests sont à la fois manuels et automatisés par de nombreux tests unitaires
		Python.</li> <picture><source srcset="/dev/_app/immutable/assets/macos_open_bundle.D7os1G9W.avif 1x, /dev/_app/immutable/assets/macos_open_bundle.BVhHiWNI.avif 2x" type="image/avif"/><source srcset="/dev/_app/immutable/assets/macos_open_bundle.D8D4YMf4.webp 1x, /dev/_app/immutable/assets/macos_open_bundle.27ko_CeJ.webp 2x" type="image/webp"/><source srcset="/dev/_app/immutable/assets/macos_open_bundle.BVnraMot.jpg 1x, /dev/_app/immutable/assets/macos_open_bundle.DJHe603H.jpg 2x" type="image/jpeg"/><img src="/dev/_app/immutable/assets/macos_open_bundle.DJHe603H.jpg" alt="Ouverture du bundle" width="2064" height="1260"/></picture></ul>`);
  });
}
function Installation_linux($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const branch = branchForInstall();
    const cmd = `branch="${branch}"; curl -fsSL "https://raw.githubusercontent.com/adrienm7/ergopti/$branch/static/ergopti/linux/xkb_installation/install.sh" | BRANCH="$branch" bash`;
    const urlInstallSh = getRawUrl("static/ergopti/linux/xkb_installation/install.sh");
    const urlDetectSh = getRawUrl("static/ergopti/linux/xkb_installation/detect_installation_method.sh");
    const urlInstallerClean = getRawUrl("static/ergopti/linux/xkb_installation/xkb_files_installer_clean.py");
    const urlInstallerLegacy = getRawUrl("static/ergopti/linux/xkb_installation/xkb_files_installer_legacy.py");
    $$renderer2.push(`<h2 id="linux"><i class="icon-linux purple" style="margin-right:0.15em"></i>Installation Linux</h2> <code style="display:inline-block; width:100%; padding:1em; border-bottom-left-radius:0; border-bottom-right-radius:0; text-align:left">${escape_html(cmd)}</code> <button id="copy-install-cmd" style="width:100%; border-top-left-radius:0; border-top-right-radius:0;" class="download-buttons"><i class="icon-linux"></i> Copier le code bash d'installation</button> <p>Après l'installation, <strong>redémarrer l'ordinateur</strong> pour que les changements prennent effet.</p> <p>Modifier ensuite la disposition clavier dans les paramètres de votre environnement de bureau. La
	disposition `);
    Ergopti($$renderer2);
    $$renderer2.push(`<!----> devrait désormais être sélectionnable dans le groupe de langues Français,
	ou en tant que groupe de langue à part entière selon la méthode d'installation choisie. <strong>À noter :</strong> Les scripts d'installation tentent d'appliquer la disposition automatiquement,
	ce qui rend cette étape de sélection de la disposition après redémarrage parfois inutile.</p> <tiny-space></tiny-space> <hr/> <tiny-space></tiny-space> <p>Le processus d'installation utilise un script bash unique qui gère la sélection interactive
	(version, variante, options) puis lance automatiquement l'installateur approprié. Deux méthodes
	d'installation sont disponibles :</p> <ul><li><strong>Méthode "Clean"</strong> (recommandée) : utilise un répertoire d'extensions utilisateur
		non invasif (<code>/usr/share/xkeyboard-config.d/</code>). Cette méthode n'existe que depuis fin
		2025 et n'est disponible que sur les distributions les plus à jour comme Arch ou Fedora. En
		effet, elle nécessite libxkbcommon ≥ 1.13.0.</li> <li><strong>Méthode "Legacy"</strong> : modifie directement les fichiers système XKB (<code>/usr/share/X11/xkb/</code>). Compatible avec toutes les versions, mais moins propre. C'est la méthode qui était utilisée
		historiquement.</li></ul> <p>Le script de détection choisit automatiquement la méthode optimale selon votre système.
	L'installation nécessite <code>sudo</code>.</p> <div class="download-buttons"><a${attr("href", urlInstallSh)} download="install.sh"><button class="alt-button"><i class="icon-linux"></i> Script complet d'installation</button></a> <a${attr("href", urlDetectSh)} download="detect_installation_method.sh"><button class="alt-button"><i class="icon-linux"></i> Script de détection de méthode</button></a></div> <div class="download-buttons" style="margin-top: 1em;"><a${attr("href", urlInstallerClean)} download="xkb_files_installer_clean.py"><button><i class="icon-linux"></i> Installateur Clean</button></a> <a${attr("href", urlInstallerLegacy)} download="xkb_files_installer_legacy.py"><button><i class="icon-linux"></i> Installateur Legacy</button></a></div> <h3>Détails techniques de l'installation</h3> <h4>Méthode Clean (recommandée)</h4> <p>Voici un résumé de ce que réalise l'installateur Clean :</p> <ul><li><strong>Installation non invasive</strong> : crée un répertoire d'extension dans <code>/usr/share/xkeyboard-config.d/ergopti/</code> contenant les fichiers de définition du layout (symbols, types, règles). Cette méthode ne modifie
		aucun fichier système existant.</li> <li><strong>.XCompose</strong> : création (ou remplacement s'il existe déjà) du fichier <code>.XCompose</code> dans le home de l'utilisateur (<code>~/.XCompose</code>). Cela permet d'utiliser les touches
		mortes ainsi que les sorties en plusieurs caractères, comme les ponctuations avec espaces
		insécables automatiques.</li> <li><strong>Activation</strong> : le script tente d'appliquer la disposition via <code>setxkbmap</code> et de purger le cache XKB pour une application immédiate des changements.</li></ul> <h4>Méthode Legacy (compatibilité)</h4> <p>Voici un résumé de ce que réalise l'installateur Legacy :</p> <ul><li><strong>Sauvegarde</strong> : création d'une copie de sauvegarde pour chaque fichier modifié.
		Par exemple, <code>fichier.ext.1</code> est créé comme copie de <code>fichier.ext</code> avant toute modification
		de celui-ci. Ainsi, il sera toujours possible de revenir en arrière si besoin.</li> <li><strong>XKB Symbols</strong> : ajout (ou mise à jour si elle existe déjà) d'une section <code>xkb_symbols "..."</code> dans le fichier <code>/usr/share/X11/xkb/symbols/fr</code>. Ces définitions décrivent ce que
		fait chaque touche sur chacune des couches (Shift, CapsLock, AltGr, etc.).</li> <li><strong>XKB Types</strong> : ajout (ou mise à jour si elles existent déjà) des définitions de
		types personnalisées d'`);
    Ergopti($$renderer2);
    $$renderer2.push(`<!----> dans le fichier <code>/usr/share/X11/xkb/types/extra</code>. Les types définissent l'association entre le numéro
		de couche défini dans XKB Symbols avec les modificateurs qui doivent être pressés pour atterrir
		sur cette couche.</li> <li><strong>XKB Rules &amp; Menus</strong> : ajout (ou mise à jour si l'entrée existe déjà) des fichiers <code>/usr/share/X11/xkb/rules/evdev.lst</code> et <code>/usr/share/X11/xkb/rules/evdev.xml</code>. Cela permet de faire apparaître la disposition
		dans la liste des dispositions système, et donc de la sélectionner.</li> <li><strong>.XCompose</strong> : création (ou remplacement s'il existe déjà) du fichier <code>.XCompose</code> dans le home de l'utilisateur (<code>~/.XCompose</code>). Cela permet d'utiliser les touches
		mortes ainsi que les sorties en plusieurs caractères, comme les ponctuations avec espaces
		insécables automatiques.</li> <li><strong>Activation</strong> : enfin, le script tente d'appliquer la disposition : d'abord via <code>localectl set-x11-keymap</code> (si disponible), puis via <code>setxkbmap</code> dans la session
		X de l'utilisateur. Ces actions sont « best‑effort » et peuvent échouer sans annuler l'installation.</li></ul> <p>En bref : la méthode Clean installe dans un répertoire d'extensions sans toucher aux fichiers
	système, tandis que la méthode Legacy modifie directement les fichiers système XKB.</p> <h3 id="linux-solutions">Résolution de problèmes connus</h3> <p>Certains problèmes ont été rapportés avec le pilote XKB d'`);
    Ergopti($$renderer2);
    $$renderer2.push(`<!----> dans quelques logiciels :</p> <ul><li>Le raccourci <kbd-output>Ctrl+Z</kbd-output> en <kbd>Ctrl</kbd> + <kbd>È</kbd> ne semble pas fonctionner.
		Pourtant, tous les autres raccourcis sur les lettres accentuées fonctionnent, alors qu'ils sont définis
		de la même manière.</li> <li>Sur Wayland, XCompose ne fonctionne pas dans certains programmes. C'est notamment le cas des
		applications Electron comme VSCode. Ce problème implique que les touches mortes ne vont pas
		fonctionner, de même pour les output de plusieurs caractères comme les ponctuations avec espaces
		insécables automatiques. Il existe peut-être des workarounds.</li> <li>Avec la version `);
    ErgoptiPlus($$renderer2);
    $$renderer2.push(`<!----> directement intégrée au driver clavier (« Ergopti++ »),
		il y a les mêmes problèmes que sur cette même version sur macOS. Cela inclut le fait qu'un appui
		sur <kbd>Entrée</kbd> en état de touche morte envoie la touche morte, mais pas directement <kbd-output>Entrée</kbd-output>. Pour cela, il est nécessaire d'appuyer une deuxième fois sur la
		touche. Ce problème peut probablement être résolu en utilisant un autre logiciel de remappage de
		clavier, comme cela a été corrigé sur macOS. <br/> Un autre problème plus embêtant est que la
		répétition de deux lettres ne fonctionne pas, notamment pour la lettre <kbd>P</kbd> où pour tapper <kbd-output>PP</kbd-output>, il faut appuyer quatre fois sur la touche <kbd>P</kbd>. Par conséquent, il est plutôt recommandé d'utiliser la version standard d'`);
    Ergopti($$renderer2);
    $$renderer2.push(`<!----> ou « Ergopti+ » (un seul +) avec le driver <a href="ergopti-plus" class="link">`);
    ErgoptiPlus($$renderer2);
    $$renderer2.push(`<!----></a>.</li></ul>`);
  });
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    version.subscribe((value) => {
    });
    head("1u35tkm", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Utiliser Ergopti</title>`);
      });
      $$renderer3.push(`<meta name="description" content="Fichiers pour utiliser Ergopti"/>`);
    });
    PageWrapper($$renderer2, {
      children: ($$renderer3) => {
        $$renderer3.push(`<p><span style="font-weight:bold;">Note :</span> Après toute installation ou réinstallation, il est
		important de <strong>toujours penser à redémarrer son ordinateur</strong>. Cela permet d’être
		certain que la nouvelle version soit prise en compte et évite bien des problèmes.</p> <p>Pour tout problème, vous pouvez être aidé sur le <a${attr("href", discordLink)} target="_blank" class="text-white"><strong>Serveur Discord</strong> <i class="icon-discord"></i></a>.</p> <tiny-space></tiny-space> <div style="display: flex; gap: 1rem; justify-content:center; font-size:1.5rem"><a href="#windows"><button class="alt-button"><i class="icon-windows" style="vertical-align:0"></i> Windows</button></a> <a href="#macos"><button class="alt-button"><i class="icon-appleinc" style="vertical-align:-0.05em"></i> macOS</button></a> <a href="#linux"><button class="alt-button"><i class="icon-linux"></i> Linux</button></a></div> <div style="height:1rem"></div> <div style="display: flex; gap: 1rem; justify-content:center;"><a href="documents/printable_layout_v2.2.pdf" download=""><button>Layout à imprimer</button></a> <a href="documents/printable_layout_v2.2_full.pdf" download=""><button>Layout à imprimer complet</button></a></div> `);
        Installation_windows($$renderer3);
        $$renderer3.push(`<!----> `);
        Installation_macos($$renderer3);
        $$renderer3.push(`<!----> `);
        Installation_linux($$renderer3);
        $$renderer3.push(`<!---->`);
      },
      $$slots: {
        default: true,
        introduction: ($$renderer3) => {
          {
            $$renderer3.push(`<bloc-introduction>`);
            Introduction_telechargements($$renderer3);
            $$renderer3.push(`<!----></bloc-introduction>`);
          }
        }
      }
    });
  });
}
export {
  _page as default
};
