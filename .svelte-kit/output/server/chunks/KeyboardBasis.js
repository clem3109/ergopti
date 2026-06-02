import { b as attr, e as ensure_array_like, l as bind_props } from "./index2.js";
import { l as layoutData, s as stores_infos } from "./stores_infos.js";
import { g as get } from "./index.js";
const e = 13.001;
const t = 7.958;
const a = 7.584;
const n = 6.702;
const s = 6.671;
const o = 6.648;
const i = 6.615;
const r = 5.888;
const u = 4.316;
const l = 4.209;
const h = 4.056;
const d = 3.971;
const c = 2.622;
const m = 2.572;
const p = 1.931;
const f = 1.61;
const g = 1.384;
const v = 1.342;
const w = 1.151;
const b = 1.098;
const y = 1.057;
const q = 0.816;
const k = 0.355;
const j = 0.33;
const x = 0.285;
const z = 0.115;
const _ = 0.03;
const characterFrequencies = {
  e,
  t,
  a,
  n,
  s,
  o,
  i,
  r,
  u,
  l,
  h,
  d,
  c,
  m,
  ",": 1.997,
  p,
  f,
  g,
  v,
  w,
  b,
  y,
  q,
  "'": 0.756,
  "é": 0.716,
  ".": 0.494,
  k,
  j,
  ";": 0.302,
  x,
  "à": 0.236,
  "-": 0.175,
  "“": 0.152,
  "”": 0.15,
  "è": 0.13,
  z,
  "ê": 0.092,
  ":": 0.061,
  "?": 0.061,
  "â": 0.054,
  "!": 0.047,
  "î": 0.047,
  "ô": 0.036,
  _,
  "û": 0.024,
  "ç": 0.023,
  "ñ": 0.023,
  "ù": 0.022,
  "‘": 0.013,
  "—": 0.012,
  "œ": 0.011,
  "]": 9e-3,
  "[": 9e-3,
  "(": 8e-3,
  ")": 8e-3,
  "ï": 5e-3,
  "«": 4e-3,
  "ë": 2e-3,
  "»": 2e-3,
  "á": 1e-3,
  "æ": 1e-3,
  "í": 1e-3
};
characterFrequencies.max = Math.max(...Object.values(characterFrequencies));
characterFrequencies.min = Math.min(...Object.values(characterFrequencies));
function logarithmicTransformation(value, scaleFactor) {
  return Math.log(1 + scaleFactor * value) / Math.log(1 + scaleFactor);
}
class Keyboard {
  constructor(id) {
    this.id = id;
    layoutData.subscribe((value) => {
      this.updateKeyboard();
    });
    stores_infos[this.id].subscribe((value) => {
      this.updateKeyboard();
    });
  }
  getKeyboardLocation() {
    if (typeof document === "undefined") {
      console.error("[Keyboard] Document not defined (likely running outside the browser)");
      return null;
    }
    const idKeyboard = `keyboard_${this.id}`;
    const location = document.getElementById(idKeyboard);
    if (!location) {
      console.error(`[Keyboard] Element with id "${idKeyboard}" not found in the DOM`);
      return null;
    }
    return location;
  }
  updateKeyboard() {
    console.info("[Keyboard] Update of the keyboard");
    if (!this.location) {
      this.location = this.getKeyboardLocation();
    }
    this.updateKeys();
    this.updateKeyboardConfiguration();
    this.pressCurrentLayerModifiers();
  }
  updateKeys() {
    if (!get(layoutData) || !get(stores_infos[this.id]) || !this.location) {
      return;
    }
    for (let row = 1; row <= 7; row++) {
      for (let column = 0; column <= 15; column++) {
        const key = this.cleanKey(this.location, row, column);
        const keyIdentifier = get(layoutData)[get(stores_infos[this.id])["type"]].find((el) => el["row"] == row && el["column"] == column);
        if (keyIdentifier !== void 0) {
          const keyContent = get(layoutData)["keys"].find(
            (el) => el["key"] === keyIdentifier["key"]
          );
          this.fillKey(key, keyContent, row);
          this.setKeyProperties(key, keyIdentifier, keyContent, column);
          this.postProcessingKey(key);
          if (get(stores_infos[this.id])["controls"] === "yes") {
            key.addEventListener(
              "click",
              () => {
                this.layerSwitch(key);
              },
              { passive: true }
            );
          }
        }
      }
    }
  }
  cleanKey(location, row, column) {
    const keySelector = `keyboard-key[data-row='${row}'][data-column='${column}']`;
    const oldKey = location.querySelector(keySelector);
    let newKey = oldKey.cloneNode(true);
    oldKey.parentNode.replaceChild(newKey, oldKey);
    const keyAttributes = newKey.getAttributeNames();
    const keyAttributesToKeep = ["data-row", "data-column"];
    keyAttributes.forEach((attribute) => {
      if (attribute.startsWith("data-") && !keyAttributesToKeep.includes(attribute)) {
        newKey.removeAttribute(attribute);
      }
    });
    newKey.dataset["key"] = "";
    newKey.replaceChildren(document.createElement("div"));
    newKey.className = "";
    newKey.style = "";
    return newKey;
  }
  fillKey(key, keyContent, row) {
    const keyDiv = key.querySelector("div");
    if (!get(stores_infos[this.id])) {
      return;
    }
    if (get(stores_infos[this.id])["layer"] !== "Visuel" && (keyContent[get(stores_infos[this.id])["layer"]] === "" || keyContent[get(stores_infos[this.id])["layer"]] === void 0)) {
      return;
    }
    const plus = get(stores_infos[this.id])["plus"] === "yes";
    if (get(stores_infos[this.id])["layer"] === "Visuel") {
      if (keyContent["type"] === "ponctuation") {
        keyDiv.innerHTML = `<output-altgr>${keyContent["AltGr"]}</output-altgr><br/><output-primary>${keyContent["Primary"]}</output-primary>`;
      } else {
        if (plus && keyContent["Primary+"] !== void 0 && row < 6) {
          keyDiv.innerHTML = keyContent["Primary+"];
          key.dataset["plus"] = "yes";
        } else {
          keyDiv.innerHTML = keyContent["Primary"];
        }
      }
    } else {
      if (plus && keyContent[get(stores_infos[this.id])["layer"] + "+"] !== void 0 && row < 6) {
        keyDiv.innerHTML = keyContent[get(stores_infos[this.id])["layer"] + "+"];
        key.dataset["plus"] = "yes";
      } else {
        keyDiv.innerHTML = keyContent[get(stores_infos[this.id])["layer"]];
      }
    }
  }
  setKeyProperties(key, keyIdentifier, keyContent, column) {
    if (!get(stores_infos[this.id])) {
      return;
    }
    key.dataset["key"] = keyIdentifier["key"];
    key.dataset["content"] = key.querySelector("div").innerHTML;
    key.dataset["finger"] = keyIdentifier["finger"];
    key.dataset["hand"] = keyIdentifier["hand"];
    key.dataset["type"] = keyContent["type"];
    key.dataset["column"] = column;
    if (get(stores_infos[this.id])["layer"] === "Visuel" && keyContent["Primary-style"] !== void 0) {
      key.dataset["style"] = keyContent["Primary-style"];
    } else {
      if (get(stores_infos[this.id])["plus"] === "yes" && keyContent[get(stores_infos[this.id])["layer"] + "+-style"] !== void 0) {
        key.dataset["style"] = keyContent[get(stores_infos[this.id])["layer"] + "+-style"];
      } else if (keyContent[get(stores_infos[this.id])["layer"] + "-style"] !== void 0) {
        key.dataset["style"] = keyContent[get(stores_infos[this.id])["layer"] + "-style"];
      }
    }
    key.style.setProperty("--size", keyIdentifier["size"]);
    const frequency = characterFrequencies[keyContent[get(stores_infos[this.id])["layer"]]];
    key.style.setProperty("--frequency", frequency);
    const frequency_normalized = (
      // Between 0 et 1 with 1 for the most frequent key
      (characterFrequencies[keyContent[get(stores_infos[this.id])["layer"]]] - characterFrequencies["min"]) / (characterFrequencies["max"] - characterFrequencies["min"])
    );
    key.style.setProperty(
      "--frequency_normalized",
      logarithmicTransformation(frequency_normalized, 40)
    );
  }
  postProcessingKey(key) {
    if (!get(layoutData) || !get(stores_infos[this.id])) {
      return;
    }
    const keyName = key.dataset["key"];
    const plus = get(stores_infos[this.id])["plus"] === "yes";
    const type = get(stores_infos[this.id])["type"];
    const layer = get(stores_infos[this.id])["layer"];
    const plusSymbol = plus ? '<span class="glow plus" style = "position:relative; margin-left:0.1em">+</span>' : "";
    if (type === "iso" && layer === "Visuel" && keyName === "Space") {
      if (plusSymbol) {
        key.innerHTML = `<span style="position:relative; top:-0.05em;">${get(layoutData)["name"] + plusSymbol}</span>`;
      } else {
        key.innerHTML = get(layoutData)["name"];
      }
    }
    if (plus && layer === "Visuel" && keyName === "j") {
      key.innerHTML = '<span class="glow" style = "position:initial">★</span>';
    }
    if (plus && type === "iso" && layer === "Layer" && keyName === "LAlt") {
      key.innerHTML = "Layer";
    }
    if (plus && type === "ergodox" && layer === "Layer" && keyName === "Space") {
      key.innerHTML = "Layer";
    }
  }
  layerSwitch(pressedKey) {
    if (!get(layoutData) || !get(stores_infos[this.id])) {
      return;
    }
    const plus = get(stores_infos[this.id])["plus"] === "yes";
    const type = get(stores_infos[this.id])["type"];
    const layer = get(stores_infos[this.id])["layer"];
    let pressedKeyName = pressedKey.dataset["key"];
    let pressedKeyContent = pressedKey.dataset["content"];
    let deadKey = pressedKey.dataset["style"] === "deadkey";
    let newLayer = layer;
    if (pressedKeyName === "LShift" || pressedKeyName === "RShift" || // RCtrl becomes Shift in Ergopti+ ISO
    plus && type === "iso" && pressedKeyName === "RCtrl") {
      pressedKeyName = "Shift";
    }
    const layerTransitions = {
      Shift: {
        Shift: "Visuel",
        AltGr: "ShiftAltGr",
        ShiftAltGr: "AltGr",
        CirconflexeShift: "Circonflexe",
        Circonflexe: "CirconflexeShift",
        TremaShift: "Trema",
        Trema: "TremaShift",
        ExposantShift: "Exposant",
        Exposant: "ExposantShift",
        IndiceShift: "Indice",
        Indice: "IndiceShift",
        GreekShift: "Greek",
        Greek: "GreekShift",
        RShift: "R",
        R: "RShift",
        CurrencyShift: "Currency",
        Currency: "CurrencyShift",
        À: "Shift",
        ",": "Shift",
        default: "Shift"
      },
      RAlt: {
        AltGr: "Visuel",
        Shift: "ShiftAltGr",
        ShiftAltGr: "Shift",
        default: "AltGr"
      },
      LCtrl: {
        Ctrl: "Visuel",
        default: "Ctrl"
      },
      RCtrl: {
        Ctrl: "Visuel",
        default: "Ctrl"
      }
    };
    if (pressedKeyName in layerTransitions) {
      const transitionRules = layerTransitions[pressedKeyName];
      let newLayerTemp;
      if (transitionRules) {
        newLayerTemp = transitionRules[layer] || transitionRules.default;
      }
      const keyContent = get(layoutData)["keys"].find(
        (el) => el["key"] === "Option"
      );
      const keyContentOnNewLayer = keyContent[newLayerTemp];
      if (keyContentOnNewLayer) {
        newLayer = newLayerTemp;
      } else {
        newLayer = "Visuel";
      }
    }
    if (pressedKeyContent === "◌̂" && deadKey) {
      newLayer = "Circonflexe";
    }
    if (pressedKeyContent === "◌̈" && deadKey) {
      newLayer = "Trema";
    }
    if (pressedKeyContent === "ᵉ" && deadKey) {
      newLayer = "Exposant";
    }
    if (pressedKeyContent === "ᵢ" && deadKey) {
      newLayer = "Indice";
    }
    if (["µ", "δ"].includes(pressedKeyContent) && deadKey) {
      newLayer = "Greek";
    }
    if (pressedKeyContent === "ℝ" && deadKey) {
      newLayer = "R";
    }
    if (pressedKeyContent === "¤" && deadKey) {
      newLayer = "Currency";
    }
    if (plus) {
      if (pressedKeyName === ",") {
        if (["Visuel", "Primary", "Shift"].includes(layer)) {
          newLayer = ",";
        }
      }
      if (pressedKeyName === "à") {
        if (["Visuel", "Primary", "Shift"].includes(layer)) {
          newLayer = "À";
        } else if (layer === "À") {
          newLayer = "Visuel";
        }
      }
      if (pressedKeyName === "CapsLock") {
        if (layer !== "Ctrl") {
          newLayer = "Ctrl";
        } else {
          newLayer = "Visuel";
        }
      }
      if (pressedKeyName === "Space" && type === "ergodox") {
        if (["Visuel", "Primary"].includes(layer)) {
          newLayer = "Layer";
        } else if (layer === "Layer") {
          newLayer = "Visuel";
        }
      }
      if (pressedKeyName === "LAlt" && type === "iso") {
        if (layer === "Layer") {
          newLayer = "Visuel";
        } else {
          newLayer = "Layer";
        }
      }
    }
    if (newLayer !== layer) {
      stores_infos[this.id].update((currentData) => {
        currentData["layer"] = newLayer;
        return currentData;
      });
      this.updateKeyboard();
    }
  }
  updateKeyboardConfiguration() {
    if (!get(stores_infos[this.id]) || !this.location) {
      return;
    }
    this.location.dataset["type"] = get(stores_infos[this.id])["type"];
    this.location.dataset["layer"] = get(stores_infos[this.id])["layer"];
    this.location.dataset["plus"] = get(stores_infos[this.id])["plus"];
    this.location.dataset["color"] = get(stores_infos[this.id])["color"];
  }
  pressCurrentLayerModifiers() {
    if (!get(layoutData) || !get(stores_infos[this.id]) || !this.location) {
      return;
    }
    function getKeyContent(layoutData2, key, layer2) {
      const keyContent = layoutData2["keys"].find((el) => el["key"] === key);
      if (!keyContent) {
        return "";
      }
      const contentOnLayer = keyContent[layer2];
      return contentOnLayer || "";
    }
    const plus = get(stores_infos[this.id])["plus"] === "yes";
    const type = get(stores_infos[this.id])["type"];
    const layer = get(stores_infos[this.id])["layer"];
    const keys = {
      LShift: this.location.querySelector("[data-key='LShift']"),
      RShift: this.location.querySelector("[data-key='RShift']"),
      LCtrl: this.location.querySelector("[data-key='LCtrl']"),
      RCtrl: this.location.querySelector("[data-key='RCtrl']"),
      LAlt: this.location.querySelector("[data-key='LAlt']"),
      RAlt: this.location.querySelector("[data-key='RAlt']"),
      CapsLock: this.location.querySelector("[data-key='CapsLock']"),
      Space: this.location.querySelector("[data-key='Space']")
    };
    function pressKey(key) {
      if (keys[key] !== null) {
        keys[key].classList.add("pressed-key");
      }
    }
    const layerMap = {
      Shift: ["LShift", "RShift"],
      Ctrl: ["LCtrl"],
      // RCtrl is a special case
      AltGr: ["RAlt"],
      ShiftAltGr: ["LShift", "RShift", "RAlt"],
      CirconflexeShift: ["LShift", "RShift"],
      TremaShift: ["LShift", "RShift"],
      ExposantShift: ["LShift", "RShift"],
      IndiceShift: ["LShift", "RShift"],
      GreekShift: ["LShift", "RShift"],
      RShift: ["LShift", "RShift"],
      CurrencyShift: ["LShift", "RShift"]
    };
    const keysToActivate = layerMap[layer];
    if (keysToActivate !== void 0) {
      for (const key of keysToActivate) {
        pressKey(key);
      }
    }
    if (plus && type === "iso" && getKeyContent(get(layoutData), "RCtrl", layer + (plus ? "+" : "")).includes(
      "Shift"
    ) && [
      "Shift",
      "ShiftAltGr",
      "CirconflexeShift",
      "TremaShift",
      "ExposantShift",
      "IndiceShift",
      "GreekShift",
      "RShift",
      "CurrencyShift"
    ].includes(layer)) {
      pressKey("RCtrl");
    }
    if (layer === "Ctrl") {
      if (type === "ergodox") {
        pressKey("RCtrl");
      }
      if (type === "iso" && plus && getKeyContent(
        get(layoutData),
        "CapsLock",
        layer + (plus ? "+" : "")
      ).includes("Ctrl") && !getKeyContent(
        get(layoutData),
        "CapsLock",
        layer + (plus ? "+" : "")
      ).includes("Ctrl +")) {
        pressKey("CapsLock");
      }
      if (type === "iso" && getKeyContent(get(layoutData), "RCtrl", layer + (plus ? "+" : "")).includes(
        "Ctrl"
      ) && !getKeyContent(
        get(layoutData),
        "RCtrl",
        layer + (plus ? "+" : "")
      ).includes("Ctrl +")) {
        pressKey("RCtrl");
      }
    }
    if (layer === "Layer") {
      if (type === "iso") {
        pressKey("LAlt");
      }
      if (type === "ergodox") {
        pressKey("Space");
      }
    }
  }
  typeText(text, speed, makePreviousKeysDisappear) {
    const location = this.getKeyboardLocation();
    if (!location) {
      return;
    }
    const pressedKeys = location.querySelectorAll(".pressed-key");
    pressedKeys.forEach(function(el) {
      el.classList.remove("pressed-key");
    });
    function writeNext(i2) {
      if (i2 >= text.length) return;
      const nextLetter = text.charAt(i2);
      const nextKey = location.querySelector(`keyboard-key[data-key='${nextLetter}']`);
      if (nextKey) {
        nextKey.classList.add("pressed-key");
      }
      if (makePreviousKeysDisappear && i2 > 0) {
        const previousLetter = text.charAt(i2 - 1);
        const previousKey = location.querySelector(`keyboard-key[data-key='${previousLetter}']`);
        if (previousKey) {
          previousKey.classList.remove("pressed-key");
        }
      }
      setTimeout(function() {
        writeNext(i2 + 1);
      }, speed);
    }
    writeNext(0);
  }
}
function KeyboardBasis($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let id = $$props["id"];
    new Keyboard(id);
    $$renderer2.push(`<keyboard${attr("id", "keyboard_" + id)}><!--[-->`);
    const each_array = ensure_array_like(Array(7));
    for (let i2 = 0, $$length = each_array.length; i2 < $$length; i2++) {
      each_array[i2];
      $$renderer2.push(`<keyboard-row${attr("data-row", i2 + 1)}><!--[-->`);
      const each_array_1 = ensure_array_like(Array(16));
      for (let j2 = 0, $$length2 = each_array_1.length; j2 < $$length2; j2++) {
        each_array_1[j2];
        $$renderer2.push(`<keyboard-key data-key="none"${attr("data-row", i2 + 1)}${attr("data-column", j2)} style="--size: 1;"></keyboard-key>`);
      }
      $$renderer2.push(`<!--]--></keyboard-row>`);
    }
    $$renderer2.push(`<!--]--></keyboard>`);
    bind_props($$props, { id });
  });
}
export {
  KeyboardBasis as K,
  Keyboard as a
};
