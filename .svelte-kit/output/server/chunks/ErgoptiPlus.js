import "clsx";
import { E as Ergopti } from "./Ergopti.js";
function ErgoptiPlus($$renderer) {
  $$renderer.push(`<name-ergopti-plus>`);
  Ergopti($$renderer);
  $$renderer.push(`<!----><span class="glow plus">+</span></name-ergopti-plus>`);
}
export {
  ErgoptiPlus as E
};
