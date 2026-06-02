
import root from '../root.js';
import { set_building, set_prerendering } from '__sveltekit/environment';
import { set_assets } from '$app/paths/internal/server';
import { set_manifest, set_read_implementation } from '__sveltekit/server';
import { set_private_env, set_public_env } from '../../../node_modules/@sveltejs/kit/src/runtime/shared-server.js';

export const options = {
	app_template_contains_nonce: false,
	async: false,
	csp: {"mode":"auto","directives":{"upgrade-insecure-requests":false,"block-all-mixed-content":false},"reportOnly":{"upgrade-insecure-requests":false,"block-all-mixed-content":false}},
	csrf_check_origin: true,
	csrf_trusted_origins: [],
	embedded: false,
	env_public_prefix: 'PUBLIC_',
	env_private_prefix: '',
	hash_routing: false,
	hooks: null, // added lazily, via `get_hooks`
	preload_strategy: "modulepreload",
	root,
	service_worker: false,
	service_worker_options: undefined,
	templates: {
		app: ({ head, body, assets, nonce, env }) => "<!doctype html>\n<html lang=\"fr\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\t\t<meta name=\"author\" content=\"Adrien MOYAUX\" />\n\t\t<meta name=\"color-scheme\" content=\"light dark\" />\n\t\t<meta property=\"og:title\" content=\"Ergopti\">\n\t\t<meta property=\"og:type\" content=\"website\">\n\t\t<meta property=\"og:url\" content=\"https://ergopti.fr\">\n\t\t<meta property=\"og:image\" content=\"https://ergopti.fr/img/og_image.jpg\">\n\t\t<meta property=\"og:image:type\" content=\"image/jpg\">\n\t\t<meta property=\"og:image:width\" content=\"1440\">\n\t\t<meta property=\"og:image:height\" content=\"720\">\n\t\t<meta property=\"og:description\" content=\"Disposition de clavier ergonomique, optimisée pour le français, l’anglais et le code\">\n\t\t<link type=\"image/svg+xml\" rel=\"icon\" href=\"img/logo/logo_simple.svg\" sizes=\"any\" />\n\t\t<link rel=\"alternate icon\" type=\"image/x-icon\" href=\"favicon.ico\" />\n\t\t<link type=\"text/plain\" rel=\"author\" href=\"https://www.beseven.fr/humans.txt\" />\n\t\t" + head + "\n        <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n        <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\n        <link href=\"https://fonts.googleapis.com/css2?family=Noto+Sans:wght@100..900&display=swap\" rel=\"stylesheet\">\n        <link href=\"https://fonts.googleapis.com/css2?family=Noto+Sans+Symbols:wght@100..900&display=swap\" rel=\"stylesheet\">\n\t</head>\n\t\n\t<!-- Google tag (gtag.js) -->\n\t<script async src=\"https://www.googletagmanager.com/gtag/js?id=G-KG5MR2RZSH\"></script>\n\t<script>\n\twindow.dataLayer = window.dataLayer || [];\n\tfunction gtag(){dataLayer.push(arguments);}\n\tgtag('js', new Date());\n\tgtag('config', 'G-KG5MR2RZSH');\n\t</script>\n\n\t<body data-sveltekit-prefetch>\n\t\t<div style=\"display: contents\">" + body + "</div>\n\t</body>\n\t<script>\n\t\twindow.onload = function () {\n\t\t\tif (navigator.userAgent.match(/samsungbrowser/i)) {\n\t\t\t\talert(\n\t\t\t\t\t'Votre navigateur (Samsung Internet) peut mal afficher le contenu de ce site si le mode sombre est activé. Si c’est le cas chez vous, nous vous recommandons d’utiliser Google Chrome, Firefox ou Microsoft Edge. Une solution peut aussi être d’activer l’option « internet://flags/#enable-adaptive-force-dark » de votre navigateur Samsung. Votre navigateur impose le style de son mode sombre, même si le site consulté en a un de prévu. Modifier ce flag, qui n’est pas encore la valeur par défaut, vous évitera ce problème à l’avenir sur d’autres sites. Merci de votre compréhension.'\n\t\t\t\t);\n\t\t\t}\n\t\t};\n\t</script>\n</html>\n",
		error: ({ status, message }) => "<!doctype html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<title>" + message + "</title>\n\n\t\t<style>\n\t\t\tbody {\n\t\t\t\t--bg: white;\n\t\t\t\t--fg: #222;\n\t\t\t\t--divider: #ccc;\n\t\t\t\tbackground: var(--bg);\n\t\t\t\tcolor: var(--fg);\n\t\t\t\tfont-family:\n\t\t\t\t\tsystem-ui,\n\t\t\t\t\t-apple-system,\n\t\t\t\t\tBlinkMacSystemFont,\n\t\t\t\t\t'Segoe UI',\n\t\t\t\t\tRoboto,\n\t\t\t\t\tOxygen,\n\t\t\t\t\tUbuntu,\n\t\t\t\t\tCantarell,\n\t\t\t\t\t'Open Sans',\n\t\t\t\t\t'Helvetica Neue',\n\t\t\t\t\tsans-serif;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tjustify-content: center;\n\t\t\t\theight: 100vh;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t.error {\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tmax-width: 32rem;\n\t\t\t\tmargin: 0 1rem;\n\t\t\t}\n\n\t\t\t.status {\n\t\t\t\tfont-weight: 200;\n\t\t\t\tfont-size: 3rem;\n\t\t\t\tline-height: 1;\n\t\t\t\tposition: relative;\n\t\t\t\ttop: -0.05rem;\n\t\t\t}\n\n\t\t\t.message {\n\t\t\t\tborder-left: 1px solid var(--divider);\n\t\t\t\tpadding: 0 0 0 1rem;\n\t\t\t\tmargin: 0 0 0 1rem;\n\t\t\t\tmin-height: 2.5rem;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t}\n\n\t\t\t.message h1 {\n\t\t\t\tfont-weight: 400;\n\t\t\t\tfont-size: 1em;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t@media (prefers-color-scheme: dark) {\n\t\t\t\tbody {\n\t\t\t\t\t--bg: #222;\n\t\t\t\t\t--fg: #ddd;\n\t\t\t\t\t--divider: #666;\n\t\t\t\t}\n\t\t\t}\n\t\t</style>\n\t</head>\n\t<body>\n\t\t<div class=\"error\">\n\t\t\t<span class=\"status\">" + status + "</span>\n\t\t\t<div class=\"message\">\n\t\t\t\t<h1>" + message + "</h1>\n\t\t\t</div>\n\t\t</div>\n\t</body>\n</html>\n"
	},
	version_hash: "6n89sg"
};

export async function get_hooks() {
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

export { set_assets, set_building, set_manifest, set_prerendering, set_private_env, set_public_env, set_read_implementation };
