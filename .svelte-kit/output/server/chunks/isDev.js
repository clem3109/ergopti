function detectDev() {
  if (typeof window === "undefined") return false;
  if (window.location.pathname.startsWith("/dev")) return true;
  const host = window.location.hostname;
  if (host === "localhost" || host === "127.0.0.1") return true;
  return false;
}
function branchForInstall() {
  if (typeof window === "undefined") return "main";
  if (window.location.pathname.startsWith("/dev")) return "dev";
  const host = window.location.hostname;
  if (host === "localhost" || host === "127.0.0.1") {
    const candidates = [
      "/version.json",
      "/static/version.json",
      "/build/_app/version.json",
      "/_app/version.json"
    ];
    for (let i = 0; i < candidates.length; i++) {
      const url = candidates[i];
      try {
        const req = new XMLHttpRequest();
        req.open("GET", url, false);
        req.send(null);
        if (req.status === 200) {
          try {
            const json = JSON.parse(req.responseText);
            if (json.branch && typeof json.branch === "string") return json.branch;
            if (json.version && typeof json.version === "string") {
              if (json.version.includes("dev")) return "dev";
            }
          } catch (e) {
          }
        }
      } catch (e) {
      }
    }
    return "dev";
  }
  return "main";
}
export {
  branchForInstall as b,
  detectDev as d
};
