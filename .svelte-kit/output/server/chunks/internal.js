import { r as root } from "./root.js";
import "./environment.js";
import "./server.js";
let public_env = {};
function set_private_env(environment) {
}
function set_public_env(environment) {
  public_env = environment;
}
let read_implementation = null;
function set_read_implementation(fn) {
  read_implementation = fn;
}
function set_manifest(_) {
}
const options = {
  app_template_contains_nonce: false,
  async: false,
  csp: { "mode": "auto", "directives": { "upgrade-insecure-requests": false, "block-all-mixed-content": false }, "reportOnly": { "upgrade-insecure-requests": false, "block-all-mixed-content": false } },
  csrf_check_origin: true,
  csrf_trusted_origins: [],
  embedded: false,
  env_public_prefix: "PUBLIC_",
  env_private_prefix: "",
  hash_routing: false,
  hooks: null,
  // added lazily, via `get_hooks`
  preload_strategy: "modulepreload",
  root,
  service_worker: false,
  service_worker_options: void 0,
  templates: {
    app: ({ head, body, assets, nonce, env }) => '<!doctype html>\n<html lang="fr">\n	<head>\n		<meta charset="utf-8" />\n		<meta name="viewport" content="width=device-width, initial-scale=1.0" />\n		<meta name="author" content="Adrien MOYAUX" />\n		<meta name="color-scheme" content="light dark" />\n		<meta property="og:title" content="Ergopti">\n		<meta property="og:type" content="website">\n		<meta property="og:url" content="https://ergopti.fr">\n		<meta property="og:image" content="https://ergopti.fr/img/og_image.jpg">\n		<meta property="og:image:type" content="image/jpg">\n		<meta property="og:image:width" content="1440">\n		<meta property="og:image:height" content="720">\n		<meta property="og:description" content="Disposition de clavier ergonomique, optimisée pour le français, l’anglais et le code">\n		<link type="image/svg+xml" rel="icon" href="img/logo/logo_simple.svg" sizes="any" />\n		<link rel="alternate icon" type="image/x-icon" href="favicon.ico" />\n		<link type="text/plain" rel="author" href="https://www.beseven.fr/humans.txt" />\n		' + head + `
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@100..900&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Symbols:wght@100..900&display=swap" rel="stylesheet">
	</head>
	
	<!-- Google tag (gtag.js) -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-KG5MR2RZSH"><\/script>
	<script>
	window.dataLayer = window.dataLayer || [];
	function gtag(){dataLayer.push(arguments);}
	gtag('js', new Date());
	gtag('config', 'G-KG5MR2RZSH');
	<\/script>

	<body data-sveltekit-prefetch>
		<div style="display: contents">` + body + "</div>\n	</body>\n	<script>\n		window.onload = function () {\n			if (navigator.userAgent.match(/samsungbrowser/i)) {\n				alert(\n					'Votre navigateur (Samsung Internet) peut mal afficher le contenu de ce site si le mode sombre est activé. Si c’est le cas chez vous, nous vous recommandons d’utiliser Google Chrome, Firefox ou Microsoft Edge. Une solution peut aussi être d’activer l’option « internet://flags/#enable-adaptive-force-dark » de votre navigateur Samsung. Votre navigateur impose le style de son mode sombre, même si le site consulté en a un de prévu. Modifier ce flag, qui n’est pas encore la valeur par défaut, vous évitera ce problème à l’avenir sur d’autres sites. Merci de votre compréhension.'\n				);\n			}\n		};\n	<\/script>\n</html>\n",
    error: ({ status, message }) => '<!doctype html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n		<title>' + message + `</title>

		<style>
			body {
				--bg: white;
				--fg: #222;
				--divider: #ccc;
				background: var(--bg);
				color: var(--fg);
				font-family:
					system-ui,
					-apple-system,
					BlinkMacSystemFont,
					'Segoe UI',
					Roboto,
					Oxygen,
					Ubuntu,
					Cantarell,
					'Open Sans',
					'Helvetica Neue',
					sans-serif;
				display: flex;
				align-items: center;
				justify-content: center;
				height: 100vh;
				margin: 0;
			}

			.error {
				display: flex;
				align-items: center;
				max-width: 32rem;
				margin: 0 1rem;
			}

			.status {
				font-weight: 200;
				font-size: 3rem;
				line-height: 1;
				position: relative;
				top: -0.05rem;
			}

			.message {
				border-left: 1px solid var(--divider);
				padding: 0 0 0 1rem;
				margin: 0 0 0 1rem;
				min-height: 2.5rem;
				display: flex;
				align-items: center;
			}

			.message h1 {
				font-weight: 400;
				font-size: 1em;
				margin: 0;
			}

			@media (prefers-color-scheme: dark) {
				body {
					--bg: #222;
					--fg: #ddd;
					--divider: #666;
				}
			}
		</style>
	</head>
	<body>
		<div class="error">
			<span class="status">` + status + '</span>\n			<div class="message">\n				<h1>' + message + "</h1>\n			</div>\n		</div>\n	</body>\n</html>\n"
  },
  version_hash: "6n89sg"
};
async function get_hooks() {
  let handle;
  let handleFetch;
  let handleError;
  let handleValidationError;
  let init;
  let reroute;
  let transport;
  return {
    handle,
    handleFetch,
    handleError,
    handleValidationError,
    init,
    reroute,
    transport
  };
}
export {
  set_public_env as a,
  set_read_implementation as b,
  set_manifest as c,
  get_hooks as g,
  options as o,
  public_env as p,
  read_implementation as r,
  set_private_env as s
};
