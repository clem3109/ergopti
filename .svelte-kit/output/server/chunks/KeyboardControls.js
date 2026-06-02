import { l as bind_props, e as ensure_array_like, a as escape_html, b as attr } from "./index2.js";
import { s as stores_infos } from "./stores_infos.js";
function KeyboardControlButtonType($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let id = $$props["id"];
    let typeValue;
    stores_infos[id].subscribe((config) => {
      typeValue = config.type;
    });
    $$renderer2.push(`<keyboard-control-type><button>`);
    if (typeValue === "ergodox") {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<p><span class="ergodox-text-gradient">Ergodox</span> ➜ ISO</p>`);
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<p>ISO ➜ <span class="ergodox-text-gradient">Ergodox</span></p>`);
    }
    $$renderer2.push(`<!--]--></button></keyboard-control-type>`);
    bind_props($$props, { id });
  });
}
function KeyboardControlButtonColor($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let id = $$props["id"];
    let colorValue;
    stores_infos[id].subscribe((config) => {
      colorValue = config.color;
    });
    $$renderer2.push(`<keyboard-control-color><button>`);
    if (colorValue === "yes") {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<p><span class="color-text-gradient">Couleur</span> ➜ Bicolore</p>`);
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<p>Bicolore ➜ <span class="color-text-gradient">Couleur</span></p>`);
    }
    $$renderer2.push(`<!--]--></button></keyboard-control-color>`);
    bind_props($$props, { id });
  });
}
function KeyboardControlButtonPlus($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let id = $$props["id"];
    let plusValue;
    stores_infos[id].subscribe((config) => {
      plusValue = config.plus;
      config.layer;
    });
    $$renderer2.push(`<keyboard-control-plus><button>`);
    if (plusValue === "yes") {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<p><strong>Plus</strong> ➜ Standard</p>`);
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<p>Standard ➜ <strong style="padding:0; margin:0">Plus</strong></p>`);
    }
    $$renderer2.push(`<!--]--></button></keyboard-control-plus>`);
    bind_props($$props, { id });
  });
}
function KeyboardControlButtonLayer($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let id = $$props["id"];
    const baseLayers = [
      ["Visuel", "Visuel"],
      ["➀ Primaire", "Primary"],
      ["➁ Shift", "Shift"],
      ["➂ AltGr", "AltGr"],
      ["➃ Shift + AltGr", "ShiftAltGr"],
      ["Ctrl", "Ctrl"],
      ["Circonflexe", "Circonflexe"],
      ["Circonflexe ⇧", "CirconflexeShift"],
      ["Tréma", "Trema"],
      ["Tréma ⇧", "TremaShift"],
      ["Exposant", "Exposant"],
      ["Exposant ⇧", "ExposantShift"],
      ["Indice", "Indice"],
      ["Indice ⇧", "IndiceShift"],
      ["Grec", "Greek"],
      ["Grec ⇧", "GreekShift"],
      ["ℝ", "R"],
      ["ℝ ⇧", "RShift"],
      ["Monnaie", "Currency"],
      ["Monnaie ⇧", "CurrencyShift"]
    ];
    const extraLayers = [
      ["★ Navigation", "Layer"],
      ["★ Virgule", ","],
      ["★ Suffixes (À)", "À"]
    ];
    let layerValue;
    let availableLayers;
    stores_infos[id].subscribe((config) => {
      layerValue = config.layer;
      availableLayers = config.plus === "yes" ? baseLayers.concat(extraLayers) : baseLayers;
    });
    function changeLayer(newLayer) {
      stores_infos[id].update((current) => ({ ...current, layer: newLayer }));
    }
    $$renderer2.push(`<keyboard-control-layer>`);
    $$renderer2.select({ value: layerValue, onchange: () => changeLayer(layerValue) }, ($$renderer3) => {
      $$renderer3.push(`<!--[-->`);
      const each_array = ensure_array_like(availableLayers);
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let [label, value] = each_array[$$index];
        $$renderer3.option({ value }, ($$renderer4) => {
          $$renderer4.push(`${escape_html(label)}`);
        });
      }
      $$renderer3.push(`<!--]-->`);
    });
    $$renderer2.push(`</keyboard-control-layer>`);
    bind_props($$props, { id });
  });
}
function KeyboardControls($$renderer, $$props) {
  let id = $$props["id"];
  $$renderer.push(`<keyboard-controls${attr("id", `controls_${id}`)}>`);
  KeyboardControlButtonPlus($$renderer, { id });
  $$renderer.push(`<!----> `);
  KeyboardControlButtonType($$renderer, { id });
  $$renderer.push(`<!----> `);
  KeyboardControlButtonColor($$renderer, { id });
  $$renderer.push(`<!----> `);
  KeyboardControlButtonLayer($$renderer, { id });
  $$renderer.push(`<!----></keyboard-controls>`);
  bind_props($$props, { id });
}
export {
  KeyboardControls as K
};
