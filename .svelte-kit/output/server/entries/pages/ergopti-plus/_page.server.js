import { readFileSync } from "node:fs";
import { resolve } from "node:path";
const prerender = true;
const MODELS_PATH = resolve(process.cwd(), "static/ergopti_plus/shared/llm/models.json");
function parseParams(raw) {
  if (typeof raw !== "string" || raw === "") return 0;
  const m = raw.match(/([\d.]+)\s*([BMK]?)/i);
  if (!m) return 0;
  const value = parseFloat(m[1]);
  const unit = (m[2] || "B").toUpperCase();
  if (unit === "B") return value;
  if (unit === "M") return value / 1e3;
  if (unit === "K") return value / 1e6;
  return value;
}
function fmtParams(b) {
  if (b < 1) return `${Math.round(b * 1e3)} M`;
  if (b >= 10) return `${Math.round(b)} B`;
  return `${b.toFixed(1).replace(".0", "")} B`;
}
function load() {
  const raw = readFileSync(MODELS_PATH, "utf-8");
  const catalog = JSON.parse(raw);
  const aiProviders = catalog.map((provider) => {
    let modelCount = 0;
    let min = Infinity;
    let max = 0;
    const familyLabels = [];
    for (const family of provider.families ?? []) {
      familyLabels.push(family.label);
      for (const model of family.models ?? []) {
        modelCount++;
        const v = parseParams(model.parameters?.total);
        if (v > 0) {
          if (v < min) min = v;
          if (v > max) max = v;
        }
      }
    }
    return {
      name: provider.label,
      modelCount,
      familyCount: familyLabels.length,
      families: familyLabels.join(", "),
      range: min === Infinity ? null : `${fmtParams(min)} → ${fmtParams(max)}`
    };
  }).sort((a, b) => b.modelCount - a.modelCount);
  const aiTotalProviders = aiProviders.length;
  const aiTotalModels = aiProviders.reduce((s, p) => s + p.modelCount, 0);
  const aiTotalFamilies = aiProviders.reduce((s, p) => s + p.familyCount, 0);
  return { aiProviders, aiTotalProviders, aiTotalModels, aiTotalFamilies };
}
export {
  load,
  prerender
};
