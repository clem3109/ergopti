import { g as getContext, s as store_get, e as ensure_array_like, a as escape_html, b as attr, u as unsubscribe_stores, h as head, c as slot, d as attr_style, f as stringify } from "../../chunks/index2.js";
import { E as Ergopti } from "../../chunks/Ergopti.js";
import "clsx";
import "@sveltejs/kit/internal";
import "../../chunks/url.js";
import "../../chunks/utils.js";
import "@sveltejs/kit/internal/server";
import "../../chunks/root.js";
import "../../chunks/exports.js";
import "../../chunks/state.svelte.js";
import { b as base } from "../../chunks/server.js";
import { v as version, a as versionsList, d as discordLink } from "../../chunks/stores_infos.js";
/* empty css                                                 */
import { K as KeyboardBasis } from "../../chunks/KeyboardBasis.js";
import { K as KeyboardControls } from "../../chunks/KeyboardControls.js";
import { d as detectDev } from "../../chunks/isDev.js";
import "aos";
import "tocbot";
const getStores = () => {
  const stores$1 = getContext("__svelte__");
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores$1.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores$1.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores$1.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
function Header($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    function isCurrent(path) {
      return store_get($$store_subs ??= {}, "$page", page).url && (store_get($$store_subs ??= {}, "$page", page).url.pathname === path || store_get($$store_subs ??= {}, "$page", page).url.pathname === base + path);
    }
    $$renderer2.push(`<header class="svelte-1elxaub"><div id="ergopti-header" class="svelte-1elxaub"><a href="./" aria-label="Accéder à la page d’accueil" class="svelte-1elxaub"><img src="img/logo/logo.svg" class="logo svelte-1elxaub" alt="Logo Ergopti"/></a> <div id="ergopti-title" class="svelte-1elxaub"><strong class="no-gradient text-white"><a href="./" aria-label="Accéder à la page d’accueil" class="svelte-1elxaub"><span class="min-width-300 svelte-1elxaub">Disposition</span> <span class="min-width-350 svelte-1elxaub">clavier</span></a> <a href="./" aria-label="Accéder à la page d’accueil" class="svelte-1elxaub">`);
    Ergopti($$renderer2);
    $$renderer2.push(`<!----></a> <div class="min-width-400 svelte-1elxaub">`);
    $$renderer2.select(
      {
        id: "version-selection",
        value: store_get($$store_subs ??= {}, "$version", version),
        class: ""
      },
      ($$renderer3) => {
        $$renderer3.push(`<!--[-->`);
        const each_array = ensure_array_like(versionsList);
        for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
          let v = each_array[$$index];
          $$renderer3.option(
            { value: v, class: "" },
            ($$renderer4) => {
              $$renderer4.push(`${escape_html(v)}`);
            },
            "svelte-1elxaub"
          );
        }
        $$renderer3.push(`<!--]-->`);
      },
      "svelte-1elxaub"
    );
    $$renderer2.push(` <a href="informations/#changelog" aria-label="Accéder à la page d’accueil" style="position:relative; left:-0.1em; top:-0.65em; font-size:0.8em" class="svelte-1elxaub"><i class="icon-circle-info"><span class="path1"></span><span class="path2"></span></i></a> <span style="display:inline-block; width:0.15em"></span> <span class="links svelte-1elxaub"><a href="https://github.com/adrienm7/ergopti" target="_blank" class="svelte-1elxaub"><i class="icon-github" style="transform: scale(0.927536)"></i></a> <span>–</span> <a${attr("href", discordLink)} target="_blank" class="svelte-1elxaub"><i class="icon-discord"></i></a></span></div></strong> <p id="ergopti-subtitle" class="svelte-1elxaub"><strong class="min-width-300 svelte-1elxaub" style="font-size:1.1em">Ergonomie optimisée</strong> <span class="min-width-600 svelte-1elxaub">pour le français, l’anglais et le code</span></p></div></div> <input class="menu-btn svelte-1elxaub" type="checkbox" id="menu-btn"/> <label class="menu-icon svelte-1elxaub" for="menu-btn"><span class="navicon svelte-1elxaub"></span></label> <nav id="menu" class="svelte-1elxaub"><div id="menu-pages" class="svelte-1elxaub"><a href="./" aria-label="Accéder à la page Ergopti"${attr("aria-current", isCurrent("/") ? "page" : void 0)} class="svelte-1elxaub"><i class="icon-keyboard-duotone svelte-1elxaub" style="margin-right:7px;"><span class="path1 svelte-1elxaub"></span><span class="path2 svelte-1elxaub"></span></i> <span class="title svelte-1elxaub">Ergopti</span></a> <a href="ergopti-plus" aria-label="Accéder à la page Ergopti+"${attr("aria-current", isCurrent("/ergopti-plus") ? "page" : void 0)} class="svelte-1elxaub"><i class="icon-circle-star svelte-1elxaub" style="margin-right:3px; margin-top:1px"><span class="path1 svelte-1elxaub"></span><span class="path2 svelte-1elxaub"></span></i> <span class="title svelte-1elxaub" style="margin-top:3px;">Ergopti<span class="glow plus svelte-1elxaub">+</span></span></a> <a href="benchmarks" aria-label="Accéder à la page Benchmarks"${attr("aria-current", isCurrent("/benchmarks") ? "page" : void 0)} class="svelte-1elxaub"><i class="icon-chart-mixed svelte-1elxaub" style="margin-right:7px;"><span class="path1 svelte-1elxaub"></span><span class="path2 svelte-1elxaub"></span></i> <span class="title svelte-1elxaub" style="margin-top:3px;">Benchmarks</span></a> <a href="utilisation" aria-label="Accéder à la page Utilisation"${attr("aria-current", isCurrent("/utilisation") ? "page" : void 0)} class="svelte-1elxaub"><i class="icon-download svelte-1elxaub" style="margin-right:5px"><span class="path1 svelte-1elxaub"></span><span class="path2 svelte-1elxaub"></span></i> <span class="title svelte-1elxaub">Utilisation</span></a> <a href="informations"${attr("aria-current", isCurrent("/informations") ? "page" : void 0)} aria-label="Accéder à la page Informations" class="svelte-1elxaub"><i class="icon-circle-info svelte-1elxaub" style="margin-right:5px; margin-top:2px"><span class="path1 svelte-1elxaub"></span><span class="path2 svelte-1elxaub"></span></i> <span class="title svelte-1elxaub">Informations</span></a></div> <div id="menu-page-content"><nav id="menu-page-content-title" class="svelte-1elxaub">Contenu de la page</nav> <hr/> <br/> <div id="page-toc-mobile" aria-label="Ouvrir le lien et fermer le menu"></div> <div style="height:70px"></div> <div class="links svelte-1elxaub"><a href="https://github.com/adrienm7/ergopti" target="_blank" class="svelte-1elxaub">Repo GitHub <i class="icon-github" style="transform: scale(0.927536)"></i></a> <span>—</span> <a${attr("href", discordLink)} target="_blank" class="svelte-1elxaub">Serveur Discord <i class="icon-discord"></i></a></div> <div style="height:70px"></div></div></nav></header> <div style="height: calc(var(--header-height) + var(--banner-height));"></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function Footer($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    (/* @__PURE__ */ new Date()).getFullYear();
    $$renderer2.push(`<footer class="svelte-jz8lnl"><div>— Disposition `);
    Ergopti($$renderer2);
    $$renderer2.push(`<!----> —</div> <div style="font-size: 0.8rem; margin-top: 0.2rem;"><a href="https://github.com/adrienm7/ergopti" target="_blank" class="text-white">Repo GitHub <i class="icon-github"></i></a> <span style="position:relative; bottom:0.05em;">|</span> <a${attr("href", discordLink)} target="_blank" class="text-white"><span class="min-width-600">Serveur</span> Discord <i class="icon-discord"></i></a></div></footer>`);
  });
}
function _layout($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let zIndex = -999;
    let affiche = "none";
    const isDev = detectDev();
    let devHref = "/";
    devHref = (store_get($$store_subs ??= {}, "$page", page).url && store_get($$store_subs ??= {}, "$page", page).url.pathname ? store_get($$store_subs ??= {}, "$page", page).url.pathname.replace(/^\/dev/, "") : "/") || "/";
    head("12qhfyh", $$renderer2, ($$renderer3) => {
      if (isDev) {
        $$renderer3.push("<!--[0-->");
        $$renderer3.push(`<meta name="robots" content="noindex, nofollow" class="svelte-12qhfyh"/> <link rel="canonical"${attr("href", base + "/")} class="svelte-12qhfyh"/>`);
      } else {
        $$renderer3.push("<!--[-1-->");
      }
      $$renderer3.push(`<!--]-->`);
    });
    $$renderer2.push(`<bloc-page id="page" class="bg-blue svelte-12qhfyh"><div style="flex-grow:1" class="svelte-12qhfyh">`);
    Header($$renderer2);
    $$renderer2.push(`<!----> <!--[-->`);
    slot($$renderer2, $$props, "default", {});
    $$renderer2.push(`<!--]--></div> `);
    Footer($$renderer2);
    $$renderer2.push(`<!----></bloc-page> <keyboard-reference class="svelte-12qhfyh"><button id="afficher-clavier-reference" aria-label="Afficher la référence clavier" class="svelte-12qhfyh"><i class="icon-keyboard-duotone svelte-12qhfyh"${attr_style(`width:100%; display:${stringify("block")}`)}><span class="path1 svelte-12qhfyh"></span><span class="path2 svelte-12qhfyh"></span></i> <i class="icon-square-xmark svelte-12qhfyh"${attr_style(`width:100%; display:${stringify(affiche)}`)}><span class="path1 svelte-12qhfyh"></span><span class="path2 svelte-12qhfyh"></span></i></button> <clavier-reference id="clavier-ref" class="bg-blue svelte-12qhfyh"${attr_style(`z-index: ${stringify(zIndex)}; display:${stringify(affiche)}`)}><div class="conteneur svelte-12qhfyh">`);
    KeyboardBasis($$renderer2, { id: "reference" });
    $$renderer2.push(`<!----> <tiny-space class="svelte-12qhfyh"></tiny-space> `);
    KeyboardControls($$renderer2, { id: "reference" });
    $$renderer2.push(`<!----></div></clavier-reference></keyboard-reference> <div class="banner svelte-12qhfyh">`);
    if (isDev) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<a${attr("href", devHref)} class="svelte-12qhfyh"><div class="dev-banner-content svelte-12qhfyh"><p class="svelte-12qhfyh">🚧 VERSION DE DEV 🚧</p> <p class="subtitle svelte-12qhfyh"><span class="button-link svelte-12qhfyh">➜ aller sur la version stable</span></p></div></a>`);
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<a${attr("href", base + "/informations#changelog")} class="svelte-12qhfyh"><p class="svelte-12qhfyh">NOUVEAU : Ergopti v2.2.1</p> <p class="subtitle svelte-12qhfyh">découvrez les nouveautés</p></a>`);
    }
    $$renderer2.push(`<!--]--></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
export {
  _layout as default
};
