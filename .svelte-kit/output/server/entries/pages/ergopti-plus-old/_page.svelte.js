import { h as head } from "../../../chunks/index2.js";
import { P as PageWrapper } from "../../../chunks/PageWrapper.js";
import "clsx";
import { E as Ergopti } from "../../../chunks/Ergopti.js";
import { E as ErgoptiPlus } from "../../../chunks/ErgoptiPlus.js";
import { S as SFB } from "../../../chunks/SFB.js";
import { K as KeyboardBasis } from "../../../chunks/KeyboardBasis.js";
import { K as KeyboardControls } from "../../../chunks/KeyboardControls.js";
function Introduction_ergopti_plus($$renderer) {
  $$renderer.push(`<section><div><h1 data-aos="zoom-in" class="ergopti-title">Disposition clavier<br/><span style="line-height: 0.75!important;">`);
  ErgoptiPlus($$renderer);
  $$renderer.push(`<!----></span></h1> `);
  KeyboardBasis($$renderer, { id: "presentation_plus" });
  $$renderer.push(`<!----> <tiny-space></tiny-space> `);
  KeyboardControls($$renderer, { id: "presentation_plus" });
  $$renderer.push(`<!----></div> <small-space></small-space> <hr/> <p class="main text-center">`);
  ErgoptiPlus($$renderer);
  $$renderer.push(`<!----> est une variante améliorée de la disposition `);
  Ergopti($$renderer);
  $$renderer.push(`<!----> qui tire parti des meilleures
		fonctionnalités des claviers programmables et outils d’automatisation. Elle se rapproche de très
		près <span class="nowrap">de la <strong>disposition clavier idéale</strong> :</span></p> <div class="cards"><div class="card"><i class="icon-circle-1"><span class="path1"></span><span class="path2"></span></i> Ajout de <span class="text-bold">nouveaux roulements</span> extrêmement confortables.</div> <div class="card"><i class="icon-circle-2"><span class="path1"></span><span class="path2"></span></i> <strong>Éradication de la quasi-totalité des <span class="nowrap">`);
  SFB($$renderer);
  $$renderer.push(`<!---->s</span></strong> pour
			une frappe ultra-fluide et sans inconfort.</div> <div class="card"><i class="icon-circle-3"><span class="path1"></span><span class="path2"></span></i> <span class="text-bold">Réduction des distances parcourues par les doigts</span>, en
			particulier l’auriculaire droit.</div> <div class="card"><i class="icon-circle-4"><span class="path1"></span><span class="path2"></span></i> Ajout de <strong>nombreux raccourcis</strong> tels qu’un layer de navigation, des tap-holds et des touches <kbd-output>Alt + Tab</kbd-output>, <kbd-output>OneShotShift</kbd-output> et <kbd-output>CapsWord</kbd-output>.</div> <div class="card"><i class="icon-circle-5"><span class="path1"></span><span class="path2"></span></i> Fonctionnalités d’<span class="text-bold">autocorrection et de snippets</span>. Cela permet
			également d’écrire des <span class="text-bold">symboles complexes et des emojis</span>.</div> <div class="card"><i class="icon-circle-6"><span class="path1"></span><span class="path2"></span></i> Chaque
			fonctionnalité est optionnelle, désactivable et <strong>peut être intégrée au fil du temps</strong>. Nul besoin de chercher à tout apprendre
			ou utiliser dès le départ.</div></div> <tiny-space></tiny-space> <hr/> <small-space></small-space> <div class="main"><div class="encadre">Cependant, l’utilisation d’`);
  ErgoptiPlus($$renderer);
  $$renderer.push(`<!----> nécessite des <strong>programmes spécifiques :</strong> <ul><li>Windows : <a class="link" href="https://www.autohotkey.com/" target="_blank">AutoHotkey</a> ;</li> <li>macOS : <a href="https://www.hammerspoon.org/" target="_blank" class="link">Hammerspoon</a> (tap-holds, autocorrection, snippets, raccourcis, gestes trackpad, etc.) ;</li> <li>Linux : les meilleurs outils sont actuellement <a class="link" href="https://github.com/jtroo/kanata/" target="_blank">Kanata</a> (tap-holds et layer de navigation) + <a href="https://espanso.org/" target="_blank" class="link">Espanso</a> (autocorrection et
					snippets), mais ils ne sont pas aussi puissants que les outils sur Windows et macOS.</li></ul> <p>Il est aussi possible de programmer le firmware de son clavier (avec <a class="link" href="https://qmk.fm/" target="_blank">QMK</a> ou <a href="https://zmk.dev/" target="_blank" class="link">ZMK</a>) pour bénéficier de ce
				genre de fonctionnalités quelle que soit la plateforme (Windows, Mac, Linux, etc.).
				Cependant, cela nécessiterait beaucoup de travail et le résultat serait très imparfait.</p></div> <tiny-space></tiny-space> <p>Voici maintenant les nombreuses fonctionnalités d’`);
  ErgoptiPlus($$renderer);
  $$renderer.push(`<!----> :</p></div></section>`);
}
function Menu($$renderer) {
  $$renderer.push(`<section><h2 class="first-h2">Menu de gestion des fonctionnalités</h2> <p>Sur Windows et macOS, les versions `);
  ErgoptiPlus($$renderer);
  $$renderer.push(`<!----> possèdent même désormais un menu de
		gestion de chacune des fonctionnalités implémentées :</p> <picture><source srcset="/dev/_app/immutable/assets/ergopti_plus_windows.EcNTLyz2.avif 1x, /dev/_app/immutable/assets/ergopti_plus_windows.DZscPoEx.avif 1.9982578397212543x" type="image/avif"/><source srcset="/dev/_app/immutable/assets/ergopti_plus_windows.B03WzHM3.webp 1x, /dev/_app/immutable/assets/ergopti_plus_windows.BrL_pqLP.webp 1.9982578397212543x" type="image/webp"/><source srcset="/dev/_app/immutable/assets/ergopti_plus_windows.DKF6nwGY.jpg 1x, /dev/_app/immutable/assets/ergopti_plus_windows.CdH9R9ea.jpg 1.9982578397212543x" type="image/jpeg"/><img src="/dev/_app/immutable/assets/ergopti_plus_windows.CdH9R9ea.jpg" alt="Screenshot du menu du script Ergopti+" width="1147" height="912"/></picture> <tiny-space></tiny-space> <picture><source srcset="/dev/_app/immutable/assets/ergopti_plus_macos.D09LQbPb.avif 1x, /dev/_app/immutable/assets/ergopti_plus_macos.DzLn5Maw.avif 2x" type="image/avif"/><source srcset="/dev/_app/immutable/assets/ergopti_plus_macos.B08Cm1l_.webp 1x, /dev/_app/immutable/assets/ergopti_plus_macos.BMpcnlVm.webp 2x" type="image/webp"/><source srcset="/dev/_app/immutable/assets/ergopti_plus_macos.BnTQhB_M.jpg 1x, /dev/_app/immutable/assets/ergopti_plus_macos.OfPmFkAh.jpg 2x" type="image/jpeg"/><img src="/dev/_app/immutable/assets/ergopti_plus_macos.OfPmFkAh.jpg" alt="Screenshot du menu du script Ergopti+ sur macOS" width="686" height="1212"/></picture> <p>Un clic droit sur l’icône du script dans la barre des tâches permet d’ouvrir le menu du script.
		Chaque fonctionnalité y est visible et peut être activée ou désactivée, avec toutes les autres
		features activées qui restent fonctionnelles. Ce menu permet de voir rapidement toutes les
		possibilités d’`);
  ErgoptiPlus($$renderer);
  $$renderer.push(`<!----> et de désactiver les fonctionnalités dont vous ne voulez
		pas.</p></section>`);
}
function Abreviations($$renderer) {
  $$renderer.push(`<section><h2>Abréviations</h2> <h3>Remplacement de texte avec <kbd class="glow">★</kbd></h3> <p>Le comportement par défaut de la touche <kbd class="glow">★</kbd> est de répéter dernière touche
		tapée. Cependant, dans le cas où une abréviation terminant par cette touche existe dans la liste
		d’abréviations, alors celle-ci sera renvoyée à la place. Ainsi, <kbd>r★</kbd> envoie le raccourci <kbd-output>rien</kbd-output>, tandis que <kbd>ar★iver</kbd> enverra <kbd-output>arriver</kbd-output>. De même, <kbd>av★</kbd> enverra <kbd-output>avv</kbd-output> et <kbd>avv★</kbd> enverra <kbd-output>avez-vous</kbd-output>.</p> <tiny-space></tiny-space> <p class="text-bold">Liste de quelques-unes des abréviations (liste modifiable par vos soins) :</p> <ul><li><kbd>a★</kbd> ➜ <kbd-output>ainsi</kbd-output> ;</li> <li><kbd>avv★</kbd> ➜ <kbd-output>avez-vous</kbd-output> ;</li> <li><kbd>c★</kbd> ➜ <kbd-output>c’est</kbd-output> ;</li> <li><kbd>ct★</kbd> ➜ <kbd-output>c’était</kbd-output> ;</li> <li><kbd>dé★</kbd> ➜ <kbd-output>déjà</kbd-output> ;</li> <li><kbd>ê★</kbd> ➜ <kbd-output>être</kbd-output> ;</li> <li><kbd>eef★</kbd> ➜ <kbd-output>en effet</kbd-output> ;</li> <li><kbd>f★</kbd> ➜ <kbd-output>faire</kbd-output> ;</li> <li><kbd>g★</kbd> ➜ <kbd-output>j’ai</kbd-output> ;</li> <li><kbd>gt★</kbd> ➜ <kbd-output>j’étais</kbd-output> ;</li> <li><kbd>m★</kbd> ➜ <kbd-output>mais</kbd-output> ;</li> <li><kbd>pcq★</kbd> ➜ <kbd-output>parce que</kbd-output> ;</li> <li><kbd>pê★</kbd> ➜ <kbd-output>peut-être</kbd-output> ;</li> <li><kbd>pex★</kbd> ➜ <kbd-output>par exemple</kbd-output> ;</li> <li><kbd>r★</kbd> ➜ <kbd-output>rien</kbd-output> ;</li> <li>etc.</li></ul> <p>Avec cette fonction d’abréviations, `);
  ErgoptiPlus($$renderer);
  $$renderer.push(`<!----> <strong>devient plus qu’une disposition clavier</strong>. Elle se transforme en un outil de
		productivité permettant d’automatiser l’écriture des mots, voire phrases ou même textes les plus
		fréquents.</p> <p>C’est une fonctionnalité tout à fait optionnelle, libre à vous de ne pas utiliser les
		abréviations et de seulement utiliser la touche <kbd class="glow">★</kbd> afin de doubler la précédente
		lettre. Cependant, bien utilisée, cette touche peut être encore plus puissante.</p> <h3>Ajout des suffixes les plus communs en <kbd>À</kbd></h3> <p>Il y a toujours un espace ou une ponctuation après un <kbd>à</kbd>, car les seuls mots
		l’utilisant sont <kbd-output>à</kbd-output>, <kbd-output>là</kbd-output> et <kbd-output>déjà</kbd-output>. Par conséquent, toute combinaison de type <kbd>às</kbd> ou <kbd>àc</kbd> n’est jamais tapée. Cela donne une opportunité extraordinaire de raccourcis pour augmenter
		sa vitesse et son confort de frappe.</p> <p>Par exemple, au lieu de taper 5 lettres pour écrire le suffixe <kbd-output>ement</kbd-output>, très souvent utilisé en français, deux frappes suffisent : <kbd>às</kbd>. Ces raccourcis vont diviser par deux le nombre de touches nécessaires pour écrire
		les suffixes les plus communs, <strong>entraînant une augmentation de vitesse</strong>.</p> `);
  KeyboardBasis($$renderer, { id: "a" });
  $$renderer.push(`<!----></section>`);
}
function Confort($$renderer) {
  $$renderer.push(`<section><h2>Confort</h2> <h3>Touche <kbd>BackSpace</kbd> à la place de <kbd>"LAlt"</kbd></h3> <p>La touche <kbd>BackSpace</kbd> est l’une des touches les plus utilisées sur un clavier. En
		effet, elle permet de corriger une erreur, ce qui est très fréquent lors de la frappe d’un
		texte. Pourtant, sur les claviers standards, elle est extrêmement loin, étant placée tout en
		haut à droite. Par conséquent, il est logique de vouloir la mettre sur un emplacement très
		accessible. C’est pour cela que la touche <kbd>BackSpace</kbd> a été dupliquée sur la touche <kbd>"LAlt"</kbd> avec `);
  ErgoptiPlus($$renderer);
  $$renderer.push(`<!---->.</p> <p>La touche <kbd-output>Delete</kbd-output> se trouve quant à elle sur la combinaison <kbd>Shift</kbd> + <kbd>"LAlt"</kbd>.</p> <p>Pour être encore plus confortable et rapide, deux raccourcis optionnels ont en outre été
		implémentés :</p> <ul><li><kbd>AltGr</kbd> + <kbd>"LAlt"</kbd> ➜ <kbd-output>Ctrl</kbd-output> + <kbd-output>BackSpace</kbd-output> ;</li> <li><kbd>AltGr</kbd> + <kbd>"CapsLock"</kbd> ➜ <kbd-output>Ctrl</kbd-output> + <kbd-output>Delete</kbd-output>.</li></ul> <h3>[QU] automatiques avant les voyelles</h3> <p>La touche <kbd>Q</kbd> est à 99% du temps suivie d’un <kbd>U</kbd> si une voyelle vient ensuite.
		Par conséquent, lors de la frappe de <kbd>Q</kbd> + <kbd>Voyelle</kbd>, un <kbd>U</kbd> s’intercale automatiquement entre les deux pour donner <kbd-output>Q</kbd-output> + <kbd-output>U</kbd-output> + <kbd-output>Voyelle</kbd-output>.</p> <p>Ainsi, pour écrire <kbd-output>que</kbd-output>, il suffira d’écrire <kbd>qe</kbd>. De même,
		pour écrire <kbd-output>pourquoi</kbd-output>, il suffira d’écrire <kbd>pourqoi</kbd>.</p> <h3>Touche [OÙ]</h3> <p>La touche <kbd>Ù</kbd> n’est utilisée que pour écrire <kbd-output>où</kbd-output>. Ainsi, autant
		transformer cette touche en raccourci pour écrire <kbd-output>où</kbd-output> afin d’économiser
		une frappe certaine sur la touche <kbd>O</kbd> et améliorer l’alternance des mains.</p> <p>Ainsi, le <kbd-output>ù</kbd-output> en <kbd>AltGr</kbd> + <kbd>W</kbd> se transforme en <kbd-output>où</kbd-output> si `);
  ErgoptiPlus($$renderer);
  $$renderer.push(`<!----> est activé.</p> <h3><kbd>Ê</kbd> fait office de <kbd class="deadkey">◌̂</kbd></h3> <p>La touche morte <kbd class="deadkey">◌̂</kbd> est utilisée la majorité du temps suivie de <kbd>E</kbd> afin d’écrire <kbd-output>Ê</kbd-output>. C’est pour cela qu’une touche <kbd>Ê</kbd> a été placée sur l’auriculaire gauche afin d’éviter un appui sur deux touches pour cette lettre circonflexe
		très commune. Elle demeure une touche optionnelle, ce qui explique son emplacement sur la 105e touche,
		qui n’existe pas sur les claviers ANSI. Ainsi, sur ce genre de claviers où cette touche n’existe
		pas, on peut toujours écrire <kbd-output>ê</kbd-output> en utilisant la touche morte.</p> <p>Toutefois, dans de rares cas, il est nécessaire d’écrire <kbd>Â</kbd>, <kbd>Î</kbd>, <kbd>Ô</kbd> ou encore <kbd>Û</kbd>. Ainsi, <kbd>ÊA</kbd> va donner <kbd-output>Â</kbd-output>, <kbd>ÊI</kbd> va donner <kbd-output>Î</kbd-output>, etc. Cela permet
		de ne plus du tout avoir à utiliser la touche morte <kbd class="deadkey">◌̂</kbd>, et donc bouger
		encore moins les mains.</p> <tiny-space></tiny-space> <p>Les plus attentifs d’entre vous remarqueront que l’écriture de <kbd-output>Â</kbd-output> et de <kbd-output>AÎ</kbd-output> (par exemple pour écrire « paraît ») engendre des `);
  SFB($$renderer);
  $$renderer.push(`<!---->s avec cette nouvelle méthode.
		C’est pour cela qu’il est aussi possible de réaliser <kbd>éê</kbd> pour obtenir <kbd-output>â</kbd-output> et <kbd>êé</kbd> pour <kbd-output>aî</kbd-output>. Ces options offrent en outre des roulements
		extrêmement confortables sur des bigrammes qui n’existent pas et donc ne posent aucun problème.</p> <p>En outre, le mécanisme de correction automatique d’`);
  ErgoptiPlus($$renderer);
  $$renderer.push(`<!----> permet de donner <kbd-output>paraît</kbd-output> lors de l’écriture de <kbd>parait</kbd>, rendant ce `);
  SFB($$renderer);
  $$renderer.push(`<!----> encore plus inoffensif.</p> <h3>Remplacement automatique des <kbd>'</kbd> par <kbd>’</kbd></h3> <p>Lorsqu’on écrit en français ou anglais, il faudrait idéalement utiliser l’apostrophe
		typographique plutôt que l’apostrophe droite. C’est pour cette raison qu’`);
  ErgoptiPlus($$renderer);
  $$renderer.push(`<!----> va automatiquement
		l’utiliser à la place de l’apostrophe droite lors de l’écriture de texte. Cette apostrophe est d’ailleurs
		plus jolie et présente l’avantage de ne pas avoir à être échappée en programmation si une chaîne
		de caractères est écrite avec ce caractère à l’intérieur. Il n’y a pas besoin de réfléchir : il suffit
		d’écrire normalement et l’apostrophe typographique apparaîtra automatiquement si c’est du texte qui
		est écrit et non du code. Les faux positifs devraient être extrêmement rares.</p> <p>Un autre raccourci a aussi été ajouté pour avoir la possibilité d’écrire <kbd-output>N'T</kbd-output> par un roulement. Effectivement, <kbd>nt'</kbd> se transforme en <kbd-output>n't</kbd-output> pour pouvoir faire [majeur, annulaire, auriculaire] plutôt que
		[majeur, auriculaire, annulaire]. Ce raccourci est utile pour réaliser les négations en anglais
		telles que <kbd-output>don't</kbd-output>, <kbd-output>won't</kbd-output> ou <kbd-output>can't</kbd-output>.</p> <h3>Utilisation de la touche <kbd>,</kbd> + <kbd>voyelle</kbd> en tant que <kbd>j</kbd></h3> <p>La touche <kbd>j</kbd> minuscule se fait remplacer par <kbd class="glow">★</kbd> avec `);
  ErgoptiPlus($$renderer);
  $$renderer.push(`<!---->. Cette nouvelle touche possède plusieurs fonctionnalités extrêmement utiles qui
		seront détaillées par la suite. Toutefois, elle prend la place du <kbd>j</kbd> et il convient
		donc de replacer ce caractère autre part. Il convient de noter que seul le caractère <kbd-output>j</kbd-output> change de place, la touche <kbd class="glow">j/★</kbd> restant une touche <kbd>J</kbd> dans tous
		les autres cas, que ce soit pour les raccourcis avec <kbd>Ctrl</kbd> (<kbd-output>Ctrl</kbd-output> + <kbd-output>J</kbd-output>), avec <kbd>Alt</kbd> (<kbd-output>Alt</kbd-output> + <kbd-output>J</kbd-output>), ou simplement les caractères en <kbd>AltGr</kbd> (<kbd-output>"</kbd-output>) ou en <kbd>Shift</kbd> (<kbd-output>J</kbd-output>).</p> <p>La touche <kbd>,</kbd> est alors utilisée pour réaliser cette substitution, celle-ci étant sur
		le même doigt que l’ancienne touche <kbd>J</kbd> et juste à côté de son ancien emplacement. Les
		combinaisons <kbd>,i</kbd>, <kbd>,e</kbd>, etc. n’existent pas en français. En réalité, la
		lettre <kbd>,</kbd> est systématiquement suivie d’un espace. Cela fournit une formidable opportunité
		d’utiliser cette touche comme un <kbd-output>j</kbd-output> lorsqu’elle est suivie d’une
		voyelle, et donc de remplacer efficacement la touche <kbd>j</kbd>.</p> <p>Dans les rares cas où l’on souhaite écrire <kbd>j</kbd> + <kbd>consonne</kbd>, il est possible
		d’écrire par exemple <kbd>ja</kbd> et de supprimer la voyelle. Une autre possibilité est de
		réaliser la suite de touches <kbd>,</kbd> + <kbd>à</kbd> qui donne la lettre <kbd-output>j</kbd-output>. Dernière possibilité, <kbd-output>j</kbd-output> est aussi présente
		nativement en <kbd>Shift</kbd> + <kbd>AltGr</kbd> + <kbd class="glow">j/★</kbd>. En fait, on pourrait même toujours utiliser cet emplacement en <kbd>Shift</kbd> + <kbd>AltGr</kbd> sans utiliser l’astuce de la touche <kbd>,</kbd>, mais utiliser cette
		dernière permet une frappe plus rapide et plus fluide, car il suffit de taper sur <kbd>,</kbd> et
		non d’activer plusieurs modificateurs en même temps.</p> <p class="text-bold">En résumé :</p> <ul class="margin-top-2"><li><kbd>,a</kbd> ➜ <kbd-output>ja</kbd-output> ;</li> <li><kbd>,i</kbd> ➜ <kbd-output>ji</kbd-output> ;</li> <li><kbd>,e</kbd> ➜ <kbd-output>je</kbd-output> ;</li> <li><kbd>,é</kbd> ➜ <kbd-output>jé</kbd-output> ;</li> <li><kbd>,o</kbd> ➜ <kbd-output>jo</kbd-output> ;</li> <li><kbd>,u</kbd> ➜ <kbd-output>ju</kbd-output> ;</li> <li><kbd>,ê</kbd> ➜ <kbd-output>ju</kbd-output> pour éviter un `);
  SFB($$renderer);
  $$renderer.push(`<!----> ;</li> <li><kbd>,'</kbd> ➜ <kbd-output>j’</kbd-output> ;</li> <li><kbd>,à</kbd> ➜ <kbd-output>j</kbd-output> ;</li> <li><kbd>Shift</kbd> + <kbd class="glow">j/★</kbd> ➜ <kbd-output>J</kbd-output> ;</li> <li><kbd>Shift</kbd> + <kbd>AltGr</kbd> + <kbd class="glow">j/★</kbd> ➜ <kbd-output>j</kbd-output>.</li></ul> <p>L’avantage de ce choix en <kbd>,</kbd> est aussi que contrairement à une touche morte, il n’y a
		pas besoin ici de frapper sur deux touches pour n’en donner qu’une seule. Nul besoin de taper
		sur <kbd>touche morte</kbd> + <kbd>j sur la touche morte</kbd> + <kbd>voyelle</kbd>, il suffit de faire <kbd>,</kbd> + <kbd>voyelle</kbd>. Ainsi, la frappe n’est
		absolument pas ralentie, car on ne rajoute pas de touches supplémentaires à taper.</p> <h3>Utilisation de la touche <kbd>,</kbd> + <kbd>consonne</kbd> pour avoir une disposition 1DFH</h3> <p>La disposition `);
  Ergopti($$renderer);
  $$renderer.push(`<!----> n’est pas 1DFH de base. En effet, il y a trop de lettres à placer,
		notamment les voyelles accentuées du français, pour que toutes les touches soient à une distance
		maximale d’une touche de la position de repos de chaque doigt (« 1u Distance From Home »). C’est
		pourquoi il y a les lettres <kbd>Q</kbd> et <kbd>Z</kbd> sur l’auriculaire droit, non sur la
		colonne de repos de ce doigt, mais à droite de celle-ci. De même pour la touche <kbd>K</kbd> qui
		est pile au milieu du clavier, mais trop loin de chacun des deux index pour être considérée 1DFH.</p> <p>En outre, réaliser un <kbd-output>ç</kbd-output> ou un <kbd-output>où</kbd-output> est un peu
		inconfortable, car il faut utiliser <kbd>AltGr</kbd> pour les obtenir. La frappe serait encore plus
		fluide en utilisant une touche morte au lieu d’un modificateur. En effet, celui-ci qui peut dans
		certains cas demeurer activé pour la lettre d’après, et donc entraîner des erreurs de frappe.</p> <p>C’est pour toutes ces raisons qu’il est possible d’utiliser la touche <kbd>,</kbd> comme une
		super touche morte avec `);
  ErgoptiPlus($$renderer);
  $$renderer.push(`<!----> :</p> <ul><li><kbd>,</kbd> + <kbd>è</kbd> = <kbd-output>z</kbd-output> ;</li> <li><kbd>,</kbd> + <kbd>y</kbd> = <kbd-output>k</kbd-output> ;</li> <li><kbd>,</kbd> + <kbd>s</kbd> = <kbd-output>q</kbd-output> ;</li> <li><kbd>,</kbd> + <kbd>c</kbd> = <kbd-output>ç</kbd-output> ;</li> <li><kbd>,</kbd> + <kbd>x</kbd> = <kbd-output>où</kbd-output>.</li></ul></section>`);
}
function Raccourcis($$renderer) {
  $$renderer.push(`<section><h2>Raccourcis</h2> <h3>Tap-holds</h3> <p>Un tap-hold permet d’assigner deux fonctions à une même touche : une lors d’un bref appui, et
		une lors de son maintien. C’est particulièrement adapté pour les touches modificatrices (<kbd>Shift</kbd>, <kbd>Control</kbd>, <kbd>Alt</kbd>, <kbd>AltGr</kbd>). Ainsi, il est possible d’utiliser la
		touche <kbd>AltGr</kbd> normalement, tout en y assignant une autre fonction lors d’un simple appui, par
		exemple <kbd>Tab</kbd>.</p> <p>Ces tap-holds ont été introduits afin de diminuer la distance parcourue par les doigts et
		améliorer le confort. Par exemple, la touche <kbd>Entrée</kbd> est régulièrement utilisée, mais est
		pourtant très loin. Elle nécessite de plus d’être pressée par l’auriculaire (droit), qui est le doigt
		le plus faible de notre main.</p> <ul><li>Tap hold en <kbd>AltGr</kbd> ➜ <kbd-output>Tab</kbd-output> sur le tap ;</li> <li>Tap hold en <kbd>"CapsLock"</kbd> ➜ <kbd-output>Ctrl</kbd-output> sur le hold et <kbd-output>Enter</kbd-output> sur le tap ;</li> <p>La touche <kbd>Entrée</kbd> est très utilisée sur un clavier, elle l’est même plus que
			certaines lettres. Toutefois, elle est peu accessible sur un clavier standard, nécessitant que
			l’auriculaire droit traverse 3 colonnes de touches avant de l’atteindre. Par conséquent,
			placer cette touche sur <kbd>"CapsLock"</kbd> la ramène à un endroit extrêmement accessible.
			Cela supprime aussi beaucoup de `);
  SFB($$renderer);
  $$renderer.push(`<!---->s. À noter que les raccourcis comme ou <kbd>Shift</kbd> + <kbd>Entrée</kbd> par exemple sont également fonctionnels avec cette nouvelle touche <kbd>Entrée</kbd>.</p> <li>Tap hold en <kbd>"RCtrl"</kbd> ➜ <kbd-output>Shift</kbd-output> sur le hold et <kbd-output>One-Shot Shift</kbd-output> sur le tap ;</li> <p>Il est beaucoup plus judicieux de mettre <kbd>Shift</kbd> sous un pouce, afin d’éviter
			d’utiliser un auriculaire qui est le doigt le plus faible. Cela évite également beaucoup de `);
  SFB($$renderer);
  $$renderer.push(`<!---->s.</p> <li>Tap hold en <kbd>"Tab"</kbd> ➜ <kbd-output>Alt</kbd-output> sur le hold et <kbd-output>Alt+Tab</kbd-output> sur le tap ;</li> <p>Ce raccourci est extrêmement pratique. Avec lui, il n’y a plus besoin de faire la combinaison <kbd>Alt</kbd> + <kbd>Tab</kbd>. Seul un appui sur <kbd>Alt</kbd> suffit, ce qui transforme cette touche en sorte
			de toggle entre les fenêtres.</p> <small-space></small-space> <li>Tap hold en <kbd>Alt</kbd> ➜ <kbd-output>Layer de navigation</kbd-output> en hold et <kbd-output>BackSpace</kbd-output> en tap ;</li> `);
  KeyboardBasis($$renderer, { id: "layer" });
  $$renderer.push(`<!----> <p>Le <kbd>Layer</kbd> de navigation contient quant à lui les flèches directionnelles pour
			naviguer rapidement dans un texte, mais aussi toutes les combinaisons de ces flèches avec des
			modificateurs. Ainsi, il y a des raccourcis <kbd>Ctrl</kbd> + <kbd>Flèche</kbd>, <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Flèche</kbd>, <kbd>Alt</kbd> + <kbd>Flèche</kbd>, <kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>Flèche</kbd>, <kbd>Windows</kbd> + <kbd>Flèche</kbd>, etc. En outre, les raccourcis <kbd>Page Up</kbd>, <kbd>Page Down</kbd>, <kbd>Home</kbd> et <kbd>End</kbd> sont ajoutés. Ce layer
			de navigation évite donc des positions inconfortables nécessitant de presser plusieurs modificateurs
			en même temps ainsi que les touches de flèches qui sont peu accessibles.</p> <small-space></small-space> <li>Tap hold en <kbd>LShift</kbd> ➜ <kbd-output>Ctrl</kbd-output> + <kbd-output>C</kbd-output> sur
			le tap ;</li> <li>Tap hold en <kbd>LCtrl</kbd> ➜ <kbd-output>Ctrl</kbd-output> + <kbd-output>V</kbd-output> sur le
			tap ;</li> <p>Avoir la possibilité de <kbd-output>Coller</kbd-output> par appui de la main gauche sur une touche
			est très utile, particulièrement lorsque la souris est utilisée en même temps par la main droite.
			Cela permet de remplacer à la volée des parties de texte.</p></ul> <h3>Raccourcis avec AltGr</h3> <ul><li><kbd>AltGr</kbd> + <kbd>"LAlt"</kbd> ➜ <kbd-output>Ctrl</kbd-output> + <kbd-output>BackSpace</kbd-output> ;</li> <p>La combinaison <kbd>Ctrl</kbd> + <kbd>BackSpace</kbd> permet de supprimer d’un coup le mot
			vers la gauche. <kbd>AltGr</kbd> est un modificateur très accessible, étant sous le pouce droit.
			Par conséquent, ce raccourci permet de très rapidement corriger des erreurs de frappe.</p> <li><kbd>AltGr</kbd> + <kbd>"CapsLock"</kbd> ➜ <kbd-output>Ctrl</kbd-output> + <kbd-output>Delete</kbd-output>.</li> <p>Le principe est le même, sauf qu’ici on supprime le mot à droite.</p></ul> <h3>Raccourcis avec <kbd>"CapsLock"</kbd> (transformé en <kbd>Enter</kbd>)</h3> <ul><li><kbd>"LAlt"</kbd> + <kbd>"CapsLock"</kbd> ➜ <kbd-output>CapsWord</kbd-output> ;</li> <p><kbd>CapsWord</kbd> est une sorte de <strong>CapsLock qui se désactive automatiquement</strong> à la fin d’un "mot". Ainsi, CapsLock se désactive lors de la pression de <kbd>Espace</kbd>, <kbd>,</kbd> ou encore <kbd>Entrée</kbd>. Cette fonctionnalité peut être
			très utile pour écrire des abréviations telles que <kbd-output>QMK</kbd-output>, <kbd-output>ASCII</kbd-output>, <kbd-output>FAQ</kbd-output>, etc. De plus, elle permet
			d’écrire plus aisément les noms des variables et constantes en programmation comme <kbd-output>KC_SPC</kbd-output>, <kbd-output>SERVER_NAME</kbd-output>, etc.</p> <li><kbd>Windows</kbd> + <kbd>"CapsLock"</kbd> ➜ <kbd-output>CapsLock</kbd-output>, pour ne pas
			perdre la fonctionnalité.</li></ul></section>`);
}
function Roulements($$renderer) {
  $$renderer.push(`<section><h2>Ajout d’excellents roulements</h2> <div class="encadre"><p class="margin0"><b>Note :</b> Dans de très rares cas, ces raccourcis vous empêcheront d’écrire ce que vous
			voulez réellement écrire. En effet, avec `);
  ErgoptiPlus($$renderer);
  $$renderer.push(`<!---->, les combinaisons de touches
			extrêmement rares comme <kbd>HC</kbd> sont transformées en d’autres bien plus utiles comme <kbd-output>WH</kbd-output>. Cela
			signifie que dans les cas où vous voulez vraiment écrire <kbd>HC</kbd>, il faudra remettre à zéro le remplacement de texte.</p> <br/> <p class="margin0">➜ La remise à zéro du remplacement de texte peut notamment se réaliser en utilisant les
			flèches de navigation, la touche <kbd>Échap</kbd>, en cliquant quelque part, etc. Ces
			manipulations ne devraient arriver que très rarement, mais tout dépend de votre utilisation.
			Par exemple, l’enchaînement <kbd>XG</kbd> est très peu commun, mais les Data Scientists l’utiliseront régulièrement pour écrire <em>XGBoost</em>. Si c’est le cas, il est possible de désactiver certains des ajouts d’`);
  ErgoptiPlus($$renderer);
  $$renderer.push(`<!---->, de les modifier, ou d’ajouter des raccourcis pour les contourner (par exemple avec une
			macro/remplacement de texte qui écrit <em>XGBoost</em>). À noter que le raccourci transformant
			XG en quelque chose d’autre n’est pas implémenté justement pour cette raison ; ce n’était
			qu’un exemple illustratif.</p></div> <small-space></small-space> <p>Des roulements pour plus de confort ont été ajoutés :</p> <h3>Roulements avec des lettres</h3> <ul class="margin-top-2"><li><kbd>hc</kbd> ➜ <kbd-output>wh</kbd-output> ;</li> <p>Le roulement <kbd>CH</kbd> était déjà l’un des grands atouts de la disposition `);
  Ergopti($$renderer);
  $$renderer.push(`<!---->,
			car cette combinaison est très fréquente et se produit en roulement, ce qui la rend
			extrêmement confortable. L’ajout du roulement donnant <kbd-output>WH</kbd-output> permet d’avoir
			une frappe en anglais encore plus fluide.</p> <li><kbd>p'</kbd> ➜ <kbd-output>ct</kbd-output> ;</li> <p>Ce roulement donnant <kbd-output>ct</kbd-output> permet d’éviter le pire `);
  SFB($$renderer);
  $$renderer.push(`<!----> de la disposition
			pour le transformer en roulement très confortable.</p> <li><kbd>sx</kbd> ➜ <kbd-output>sk</kbd-output> et <kbd>cx</kbd> ➜ <kbd-output>ck</kbd-output> ;</li> <p>La lettre <kbd>K</kbd> est rarement utilisée. Lorsqu’elle l’est, c’est souvent pour réaliser
			les combinaisons <kbd-output>SK</kbd-output> et <kbd-output>CK</kbd-output>. Ainsi, ces
			roulements permettent d’éviter d’aller appuyer sur la vraie touche <kbd>K</kbd> pour une frappe
			beaucoup plus confortable.</p> <li><kbd>à★</kbd> ➜ <kbd-output>bu</kbd-output> et <kbd>àu</kbd> ➜ <kbd-output>ub</kbd-output>.</li> <p>Ces roulements très confortables suppriment le plus gros `);
  SFB($$renderer);
  $$renderer.push(`<!----> présent sur la main gauche.</p></ul> <h3>Roulements avec des symboles</h3> `);
  KeyboardBasis($$renderer, { id: "symboles_plus" });
  $$renderer.push(`<!----> <tiny-space></tiny-space> <ul class="margin-top-2"><li><kbd>#!</kbd> ➜ <kbd-output>:=</kbd-output> et <kbd>!#</kbd> ➜ <kbd-output>!=</kbd-output> ;</li> <li><kbd>(#</kbd> ➜ <kbd-output>("</kbd-output> et <kbd>[#</kbd> ➜ <kbd-output>["</kbd-output> ;</li> <p>Une fois qu’on a l’habitude de ce roulement, on ne peut plus s’en passer. Le <kbd>#</kbd> devient un <kbd-output>"</kbd-output>, ce qui permet d’avoir des roulements très logiques et
			ultra-confortables.</p> <li><kbd>&lt;@</kbd> ➜ <kbd-output>&lt;/</kbd-output> ;</li> <li><kbd>&lt;%</kbd> ➜ <kbd-output>&lt;=</kbd-output> et <kbd>>%</kbd> ➜ <kbd-output>>=</kbd-output> ;</li> <li><kbd>[)</kbd> ➜ <kbd-output>=""</kbd-output> ;</li> <p>Cette suite de symboles est extrêmement utilisée en programmation, où elle permet généralement
			d’assigner un texte à une variable. L’avoir en roulement vers l’intérieur, sur la homerow en
			plus, est un véritable luxe.</p> <li><kbd>\\"</kbd> ➜ <kbd-output>/*</kbd-output> et <kbd>"\\</kbd> ➜ <kbd-output>*/</kbd-output> ;</li> <p>Ce roulement permet de réaliser un commentaire en programmation, et ce extrêmement
			confortablement.</p> <li><kbd>$=</kbd> ➜ <kbd-output>=></kbd-output> et <kbd>=$</kbd> ➜ <kbd-output>&lt;=</kbd-output> ;</li> <li><kbd>+?</kbd> ➜ <kbd-output>-></kbd-output> et <kbd>?+</kbd> ➜ <kbd-output>&lt;-</kbd-output> ;</li> <li><kbd>=+</kbd> ➜ <kbd-output>➜</kbd-output>.</li></ul></section>`);
}
function Reduction_sfbs($$renderer) {
  $$renderer.push(`<section><h2>Diminution des SFBs</h2> <p>L’un des avantages majeurs d’`);
  ErgoptiPlus($$renderer);
  $$renderer.push(`<!----> est qu’il réduit presque totalement les `);
  SFB($$renderer);
  $$renderer.push(`<!---->s.</p> <p>Les `);
  SFB($$renderer);
  $$renderer.push(`<!---->s les plus fréquents de la disposition sont : <kbd>ct</kbd>, <kbd>pt</kbd>, <kbd>eo</kbd>, <kbd>oe</kbd>, <kbd>ub</kbd>, <kbd>bu</kbd> et <kbd>ds</kbd>. <kbd>ct</kbd> est de loin le plus fréquent. <kbd>eo</kbd> et <kbd>oe</kbd> sont aussi relativement fréquents en anglais (pour écrire <kbd-output>does</kbd-output>, <kbd-output>people</kbd-output>, etc.) Tous ces `);
  SFB($$renderer);
  $$renderer.push(`<!---->s sont supprimés avec `);
  ErgoptiPlus($$renderer);
  $$renderer.push(`<!---->,
		plus de nombreux autres encore plus rares.</p> <h3>Utilisation de la touche <kbd>,</kbd> + <kbd>Consonne</kbd></h3> <p>La touche <kbd>,</kbd> est l’une des plus importantes d’`);
  ErgoptiPlus($$renderer);
  $$renderer.push(`<!---->. C’est grâce à elle que
		la plupart des `);
  SFB($$renderer);
  $$renderer.push(`<!---->s restants sont supprimés. De plus, certaines combinaisons ont aussi été
		ajoutées pour plus de confort, afin d’éviter de devoir sauter de 2 rangées avec des doigts
		consécutifs pour écrire un bigramme (donc éviter les <em>ciseaux</em>). C’est le cas de <kbd>cl</kbd> ou encore de <kbd>ph</kbd>.</p> `);
  KeyboardBasis($$renderer, { id: "virgule" });
  $$renderer.push(`<!----> <p>Comme vous pouvez le constater, la touche <kbd>,</kbd> est vraiment pour supprimer les derniers
		petits `);
  SFB($$renderer);
  $$renderer.push(`<!---->s restants. La disposition `);
  Ergopti($$renderer);
  $$renderer.push(`<!----> éliminait déjà la majorité d’entre eux.</p> <h3>Utilisation des touches <kbd>É</kbd>, <kbd>È</kbd> et <kbd>Ê</kbd></h3> <p>Les touches <kbd>É</kbd> , <kbd>È</kbd> et <kbd>Ê</kbd> permettent de se débarrasser des
		quelques `);
  SFB($$renderer);
  $$renderer.push(`<!---->s se trouvant sur la main gauche. Plus particulièrement, ce sont les `);
  SFB($$renderer);
  $$renderer.push(`<!---->s
		sur les touches <kbd>I</kbd>, <kbd>E</kbd> ainsi qu’en <kbd>U</kbd> :</p> <ul class="margin-top-2"><li><kbd>êe</kbd> ➜ <kbd-output>œ</kbd-output> ;</li> <li><kbd>êé</kbd> ➜ <kbd-output>oe</kbd-output> ;</li> <li><kbd>éê</kbd> ➜ <kbd-output>eo</kbd-output> ;</li> <li><kbd>ê,</kbd> ➜ <kbd-output>u,</kbd-output> ;</li> <li><kbd>ê.</kbd> ➜ <kbd-output>u.</kbd-output> ;</li> <tiny-space></tiny-space> <li><kbd>èy</kbd> ➜ <kbd-output>aî</kbd-output> ;</li> <li><kbd>yè</kbd> ➜ <kbd-output>â</kbd-output>.</li> <tiny-space></tiny-space> <li><kbd>éà</kbd> ➜ <kbd-output>ié</kbd-output> ;</li> <li><kbd>àé</kbd> ➜ <kbd-output>éi</kbd-output>.</li></ul> <h3>Utilisation de roulements</h3> <ul class="margin-top-2"><li><kbd>p'</kbd> ➜ <kbd-output>ct</kbd-output> ;</li> <li><kbd>à★</kbd> ➜ <kbd-output>bu</kbd-output> ;</li> <li><kbd>àu</kbd> ➜ <kbd-output>ub</kbd-output>.</li></ul> <h3>Touche <kbd class="glow">★</kbd> de répétition</h3> <p>De nombreux `);
  SFB($$renderer);
  $$renderer.push(`<!---->s se produisent non pas à cause de deux touches devant être tapées par le
		même doigt, mais lors de la répétition de la même touche. C’est par exemple le cas avec <kbd>ll</kbd> (elle, pelle, telle, etc.) ou encore <kbd>rr</kbd> (terre, erreur, etc.).</p> <p>Sur le logiciel Excel, la touche <kbd>F4</kbd> permet de répéter la dernière action. Ne pourrait-on
		pas avoir la même chose sur sa disposition clavier ?</p> <tiny-space></tiny-space> `);
  KeyboardBasis($$renderer, { id: "magique" });
  $$renderer.push(`<!----> <tiny-space></tiny-space> <p>La touche <kbd class="glow">★</kbd> est <strong>l’ajout principal</strong> d’`);
  ErgoptiPlus($$renderer);
  $$renderer.push(`<!----> et mérite son excellent emplacement sous l’index gauche. Elle vient en remplacement
		de la touche <kbd>J</kbd> (mais pas le contenu des autres couches de la touche <kbd>J</kbd> tel qu’en <kbd>AltGr</kbd> ou en <kbd>Ctrl</kbd>). Le <kbd>J</kbd> se retrouve quant à lui en <kbd>,</kbd> + <kbd>Voyelle</kbd>.</p> <p>La nouvelle touche <kbd class="glow">★</kbd> <strong>va répéter la dernière touche tapée</strong>. Ainsi, <kbd>l★</kbd> va envoyer <kbd-output>ll</kbd-output>, tandis que <kbd>r★</kbd> va envoyer <kbd-output>rr</kbd-output>. Cela engendrera cependant un petit `);
  SFB($$renderer);
  $$renderer.push(`<!----> pour les lettres doublées
		suivies d’un <kbd>U</kbd>, tel que « connu » ou « battu ». La combinaison <kbd>★ê</kbd> permet
		d’éviter ce problème. Ainsi, « connu » pourra s’écrire <kbd>con★ê</kbd> et « battu » pourra
		s’écrire <kbd>bat★ê</kbd>.</p> <p>L’utilisation de la touche <kbd class="glow">★</kbd> va instantanément fluidifier la fra<kbd>p★</kbd>e et réduire le nombre de `);
  SFB($$renderer);
  $$renderer.push(`<!---->s. Une fois qu’on y est habitué, l’écriture au clavier devient
		encore un peu plus rapide et efficace, car même les lettres doublées peuvent être parallélisées.
		D’autant que <strong>doubler les lettres est loin d’être la seule fonction de la touche</strong> <kbd class="glow">★</kbd>…</p></section>`);
}
function _page($$renderer) {
  head("1eoja3o", $$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>Ergopti+</title>`);
    });
    $$renderer2.push(`<meta name="description" content="Disposition Ergopti+"/>`);
  });
  PageWrapper($$renderer, {
    children: ($$renderer2) => {
      Menu($$renderer2);
      $$renderer2.push(`<!----> `);
      Confort($$renderer2);
      $$renderer2.push(`<!----> `);
      Roulements($$renderer2);
      $$renderer2.push(`<!----> `);
      Reduction_sfbs($$renderer2);
      $$renderer2.push(`<!----> `);
      Abreviations($$renderer2);
      $$renderer2.push(`<!----> `);
      Raccourcis($$renderer2);
      $$renderer2.push(`<!---->`);
    },
    $$slots: {
      default: true,
      introduction: ($$renderer2) => {
        {
          $$renderer2.push(`<bloc-introduction>`);
          Introduction_ergopti_plus($$renderer2);
          $$renderer2.push(`<!----></bloc-introduction>`);
        }
      }
    }
  });
}
export {
  _page as default
};
