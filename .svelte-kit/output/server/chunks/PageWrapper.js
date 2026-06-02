import { c as slot, b as attr } from "./index2.js";
import { d as discordLink } from "./stores_infos.js";
function PageWrapper($$renderer, $$props) {
  $$renderer.push(`<!--[-->`);
  slot($$renderer, $$props, "introduction", {});
  $$renderer.push(`<!--]--> <bloc-main><nav id="sidebar"><div><p style="text-align:center; color:white; margin:0; padding:0; font-weight: bold">Contenu de la page</p> <div id="page-toc-pc"><div id="page-toc"></div></div> <hr style="margin:0; margin-top:20px"/> <p style="text-align:center; margin: 0; padding-top: 10px;"><a href="https://github.com/adrienm7/ergopti" target="_blank" style="font-size:0.9em!important; color:white">Repo GitHub <i class="icon-github"></i></a> — <a${attr("href", discordLink)} style="position:relative; bottom:-0.1em; font-size:0.9em!important; color:white">Serveur Discord <i class="icon-discord"></i></a></p></div></nav> <div id="main-content"><main><!--[-->`);
  slot($$renderer, $$props, "default", {});
  $$renderer.push(`<!--]--></main></div></bloc-main> <!--[-->`);
  slot($$renderer, $$props, "bloc-fin", {});
  $$renderer.push(`<!--]-->`);
}
export {
  PageWrapper as P
};
