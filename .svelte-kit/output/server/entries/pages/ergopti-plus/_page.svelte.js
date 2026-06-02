import { h as head, i as attr_class, b as attr, j as clsx, a as escape_html, e as ensure_array_like, f as stringify, d as attr_style, k as derived } from "../../../chunks/index2.js";
import { E as ErgoptiPlus } from "../../../chunks/ErgoptiPlus.js";
import { h as html } from "../../../chunks/html.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data } = $$props;
    let urlAhkExe = derived(() => "#");
    let urlMacosApp = derived(() => "#");
    let urlKanata = derived(() => "#");
    const {
      aiProviders,
      aiTotalProviders,
      aiTotalModels,
      aiTotalFamilies
    } = data;
    const demos = [
      {
        input: "ct★",
        output: "c’était",
        group: "Magic Key",
        color: "#e53935"
      },
      {
        input: "qa",
        output: "qua",
        group: "Roulements",
        color: "#fb8c00"
      },
      {
        input: "taiwan",
        output: "Taïwan",
        group: "Autocorrection",
        color: "#43a047"
      },
      {
        input: "np★",
        output: "Adrien Moyaux",
        group: "Personal Info",
        color: "#1e88e5"
      },
      {
        input: ",t",
        output: "pt",
        group: "Réduction SFBs",
        color: "#fb8c00"
      },
      {
        input: "jusqu",
        output: "jusqu’",
        group: "Autocorrection",
        color: "#43a047"
      },
      {
        input: "pex★",
        output: "par exemple",
        group: "Magic Key",
        color: "#e53935"
      },
      {
        input: "sx",
        output: "sk",
        group: "Roulements",
        color: "#fb8c00"
      }
    ];
    let demoIndex = 0;
    let typed = "";
    let osStyle = "windows";
    const kpis = [
      {
        value: 3e3,
        suffix: "+",
        label: "hotstrings prêts à l’emploi"
      },
      { value: 6, suffix: "", label: "catégories paramétrables" },
      { value: 10, suffix: "", label: "gestes trackpad" },
      { value: 2, suffix: "", label: "drivers natifs (macOS + Win)" }
    ];
    let counters = kpis.map(() => 0);
    let sessionText = "";
    const features = [
      {
        icon: "★",
        color: "#e53935",
        title: "Touche magique",
        body: "Une touche dédiée pour expanser des centaines d’abréviations : <code>ct★</code> devient <em>c’était</em>, <code>pex★</code> devient <em>par exemple</em>."
      },
      {
        icon: "✓",
        color: "#43a047",
        title: "Autocorrection",
        body: "Apostrophes typographiques, majuscules sur les noms propres, accents oubliés — les fautes les plus fréquentes sont rattrapées au vol."
      },
      {
        icon: "⟶",
        color: "#fb8c00",
        title: "Roulements",
        body: 'Des bigrammes inconfortables réécrits à la volée : <code>hc</code> → <em>wh</em>, <code>qa</code> → <em>qua</em>, <code>(#</code> → <em>("</em>.'
      },
      {
        icon: "⌨",
        color: "#1e88e5",
        title: "Hotstrings personnels",
        body: "Vos snippets, signatures, IBAN, numéros récurrents — édités depuis un fichier TOML ou directement depuis le menu."
      },
      {
        icon: "✥",
        color: "#8e44ad",
        title: "Tap-holds",
        body: "<kbd>CapsLock</kbd> en <em>Entrée</em> en tap, <em>Cmd/Ctrl</em> en hold. <kbd>LShift</kbd> = Copier. <kbd>LCtrl</kbd> = Coller. Pas de touche perdue."
      },
      {
        icon: "◐",
        color: "#00838f",
        title: "Gestes trackpad",
        body: "10 slots de gestes (taps et swipes à 3 ou 4 doigts) configurables, mappés à n’importe quelle action système ou personnalisée."
      },
      {
        icon: "◇",
        color: "#fdd835",
        title: "Tooltip temps réel",
        body: "Aperçu visuel coloré pendant la saisie : vous voyez l’expansion <em>avant</em> qu’elle ne se déclenche."
      },
      {
        icon: "⌬",
        color: "#ec407a",
        title: "Prédictions IA",
        body: "Bridge LLM intégré côté Hammerspoon : suggestions contextuelles à la frappe, validables avec la touche magique."
      }
    ];
    const hotstringDetails = [
      {
        title: "Autocorrection",
        color: "#43a047",
        tag: "Les fautes les plus fréquentes, balayées",
        lead: "Apostrophes typographiques, capitalisation des marques, accents oubliés sur les noms propres et expressions courantes. Ce n’est pas du correcteur post-coup : c’est appliqué à la frappe.",
        rows: [
          {
            trig: "chatgpt",
            out: "ChatGPT",
            words: ["ChatGPT m’a aidé sur…"]
          },
          { trig: "alexei", out: "Alexeï", words: ["Alexeï Navalny"] },
          { trig: "OUi", out: "Oui", words: ["Oui, je viens."] },
          {
            trig: "jusqu",
            out: "jusqu’",
            words: ["jusqu’à demain", "jusqu’ici"]
          }
        ]
      },
      {
        title: "Touche magique ★",
        color: "#e53935",
        tag: "Un suffixe explicite pour les expansions longues",
        lead: "Pour vos snippets fréquents — formules de politesse, signatures, identifiants — la touche ★ déclenche l’expansion de manière non ambiguë. Aucun risque de collision avec la frappe normale.",
        rows: [
          {
            trig: "ct★",
            out: "c’était",
            words: ["ct★ génial", "→ c’était génial"]
          },
          {
            trig: "pex★",
            out: "par exemple",
            words: ["pex★ ce matin", "→ par exemple ce matin"]
          },
          {
            trig: "np★",
            out: "Adrien Moyaux",
            words: ["Cordialement,\nnp★", "→ …\nAdrien Moyaux"]
          },
          {
            trig: "dt★",
            out: "07/05/2026",
            words: ["Le dt★ à 14h", "→ Le 07/05/2026 à 14h"]
          }
        ]
      }
    ];
    const ergoptiBigrams = [
      {
        title: "Roulements de bigrammes",
        color: "#fb8c00",
        tag: "Des combinaisons inconfortables remplacées par des roulements",
        lead: "Quelques bigrammes naturellement inconfortables sur Ergopti sont remappés vers des séquences fluides qui glissent sur des doigts adjacents. Vous tapez ce qui est confortable, le mot correct sort.",
        rows: [
          {
            trig: "p'",
            out: "ct",
            words: ["acteur", "docteur", "docteurs"]
          },
          {
            trig: "sx",
            out: "sk",
            words: ["ask", "task", "desk", "risk"]
          },
          { trig: "cx", out: "ck", words: ["back", "check", "dock"] },
          {
            trig: "hc",
            out: "wh",
            words: ["what", "when", "where", "while"]
          }
        ]
      },
      {
        title: "Réduction des SFBs",
        color: "#e53935",
        tag: "Les Same-Finger Bigrams d’Ergopti, neutralisés",
        lead: "La , devient une super touche morte qui supprime les derniers SFBs résiduels. Les touches É/È/Ê s’en chargent côté main gauche.",
        rows: [
          { trig: ",t", out: "pt", words: ["ap,tement → aptement"] },
          { trig: "éà", out: "ié", words: ["c-éà-l → ciel"] },
          { trig: "àé", out: "éi", words: ["ant-àé-r → antérieur"] },
          { trig: "êe", out: "œ", words: ["s-êe-ur → sœur"] }
        ]
      },
      {
        title: "Hotstrings via touche magique ★",
        color: "#8e44ad",
        tag: "Doublons et SFBs neutralisés via ★",
        lead: "La touche ★ a deux comportements : répéter la dernière lettre, ou déclencher une expansion. Quelques expansions exclusivement Ergopti tirent profit de la position de ★ sous l’index gauche.",
        rows: [
          { trig: "à★", out: "bu", words: ["dé-à★-t → début"] },
          { trig: "àu", out: "ub", words: ["t-àu-e → tube"] },
          {
            trig: "★ê",
            out: "u",
            words: ["con★ê → connu", "bat★ê → battu"]
          }
        ]
      }
    ];
    const powerMoves = [
      {
        icon: "⇪",
        title: "CapsWord",
        body: "Tapez en MAJUSCULES uniquement le mot en cours. Dès que vous appuyez sur espace ou ponctuation, le shift virtuel se relâche. Idéal pour les acronymes (USA, NASA, TODO)."
      },
      {
        icon: "⌫",
        title: "Suppression de mot",
        body: "<kbd>LAlt</kbd> + <kbd>Backspace</kbd> efface le mot entier au lieu d’un caractère. Pour annuler une expansion ratée d’un seul geste."
      },
      {
        icon: "✎",
        title: "Hotstrings perso 1-clic",
        body: "Sélectionnez du texte, ouvrez le menu, donnez un trigger : votre nouveau hotstring est ajouté à <code>personal_hotstrings.toml</code> et chargé sans recharger le driver."
      },
      {
        icon: "★",
        title: "Touche magique = répéteur",
        body: "Pas d’expansion à valider ? La touche magique répète simplement le caractère précédent — utile pour les <em>aaaaa</em> ou les <em>...</em>."
      }
    ];
    const navLayer = [
      { keys: ["j"], label: "←", desc: "Gauche" },
      { keys: ["k"], label: "↓", desc: "Bas" },
      { keys: ["l"], label: "↑", desc: "Haut" },
      { keys: ["m"], label: "→", desc: "Droite" },
      { keys: ["u"], label: "⇱", desc: "Début ligne" },
      { keys: [","], label: "⇲", desc: "Fin ligne" },
      { keys: ["i"], label: "⇞", desc: "Page haut" },
      { keys: ["o"], label: "⇟", desc: "Page bas" },
      { keys: ["h"], label: "⌫", desc: "Effacer mot" },
      { keys: [";"], label: "⌦", desc: "Suppr droite" }
    ];
    const aiSuggestions = [
      "vous proposer un rendez-vous mardi prochain.",
      "faire suite à notre échange de la semaine dernière.",
      "accuser réception de votre dossier complet."
    ];
    const metrics = [
      {
        label: "Mots tapés cette semaine",
        value: "34 218",
        accent: "#1e88e5",
        delta: "+12 %"
      },
      {
        label: "Vitesse moyenne",
        value: "78 wpm",
        accent: "#43a047",
        delta: "+4 wpm"
      },
      {
        label: "Précision",
        value: "97,8 %",
        accent: "#fb8c00",
        delta: "+0,3 pt"
      },
      {
        label: "SFBs évités",
        value: "1 247",
        accent: "#e53935",
        delta: "roulements"
      },
      {
        label: "Hotstrings déclenchés",
        value: "892",
        accent: "#8e44ad",
        delta: "147 uniques"
      },
      {
        label: "Doigts dominants",
        value: "I-D 51 / 49",
        accent: "#00838f",
        delta: "équilibré"
      }
    ];
    const tapHolds = [
      {
        key: "CapsLock",
        tap: { label: "Entrée", icon: "↩" },
        hold: { label: "Cmd / Ctrl", icon: "⌘" },
        color: "#e53935",
        note: "La touche la plus à plat de la maison-row devient à la fois validation et modificateur d’OS."
      },
      {
        key: "LShift",
        tap: { label: "Copier", icon: "⧉" },
        hold: { label: "Shift", icon: "⇧" },
        color: "#1e88e5",
        note: "Plus besoin d’aller chercher Ctrl/Cmd + C : un simple appui sur la touche que vous tenez déjà."
      },
      {
        key: "LCtrl",
        tap: { label: "Coller", icon: "↧" },
        hold: { label: "Ctrl", icon: "⌃" },
        color: "#43a047",
        note: "Coller au pouce gauche, sans changer la position de la main droite ni interrompre le flux."
      },
      {
        key: "LAlt",
        tap: { label: "Retour arrière", icon: "⌫" },
        hold: { label: "Layer navigation", icon: "☷" },
        color: "#fb8c00",
        note: "Backspace devient un voisin direct du repos des doigts ; en hold, un layer de flèches et navigation."
      }
    ];
    const promises = [
      {
        icon: "⏱",
        title: "Vous gagnez du temps dès la 1ʳᵉ heure",
        body: "Apostrophes, accents, expansions classiques : 80 % du gain est livré <strong>par défaut</strong>, sans rien apprendre. Vous tapez normalement, le reste se règle tout seul."
      },
      {
        icon: "🌱",
        title: "Apprentissage progressif, jamais imposé",
        body: "Chaque fonctionnalité est <strong>activable indépendamment</strong>. Démarrez avec les hotstrings, ajoutez les tap-holds quand vous êtes prêt, l’IA en bonus. Aucune obligation."
      },
      {
        icon: "🌐",
        title: "Fonctionne sur <strong>toutes</strong> les dispositions",
        body: "AZERTY, QWERTY, Bépo, Dvorak, Colemak… Le driver agit sur le texte, pas sur la touche physique. Restez sur votre layout actuel — ou adoptez Ergopti pour le combo idéal."
      }
    ];
    const aiBackends = [
      {
        name: "Ollama",
        icon: "🦙",
        audience: "Mac Intel & Apple Silicon",
        port: "11434",
        pro: "Le plus simple à installer (brew install ollama). Catalogue de modèles immense."
      },
      {
        name: "MLX",
        icon: "⚡",
        audience: "Apple Silicon (M1, M2, M3, M4)",
        port: "8080",
        pro: "Inference accélérée par le Neural Engine. Sub-100 ms sur les petits modèles."
      }
    ];
    const aiProfiles = [
      {
        name: "Raw",
        tag: "Continuation littérale",
        desc: "Aucune instruction injectée — le modèle reçoit juste le contexte brut <code>{context}</code> et continue. Idéal pour le code, les listes, les formats stricts."
      },
      {
        name: "Basic",
        tag: "Profil par défaut",
        desc: "Instruction française minimale qui contraint le modèle à produire entre N et M mots, sans commentaires. Le compromis vitesse/qualité standard."
      },
      {
        name: "Advanced",
        tag: "Correction + prédiction",
        desc: "Format à deux lignes : <code>TAIL_CORRECTED</code> (correction) puis <code>NEXT_WORDS</code> (prédiction). Bilingue FR/EN, accompagné d’exemples few-shot pour les petits modèles."
      },
      {
        name: "Batch Advanced",
        tag: "N suggestions en 1 requête",
        desc: "Une seule requête réseau qui produit N continuations alternatives séparées par <code>===</code>. Beaucoup plus économique qu’N requêtes séquentielles."
      }
    ];
    const trackpadGestures = [
      {
        fingers: "3 doigts",
        type: "Tap",
        defaut: "Définition du mot",
        color: "#00838f",
        note: "Pose 3 doigts sur un mot, sa définition apparaît instantanément. Plus naturel qu’un Cmd+Ctrl+D."
      },
      {
        fingers: "3 doigts",
        type: "Swipe ←/→",
        defaut: "Mot précédent / mot suivant",
        color: "#1e88e5",
        note: "Glissement horizontal léger pour avancer mot par mot dans n’importe quel champ texte."
      },
      {
        fingers: "3 doigts",
        type: "Swipe ↑",
        defaut: "Volume +",
        color: "#43a047",
        note: "Le trackpad devient un axe continu : plus le geste est long, plus le volume monte."
      },
      {
        fingers: "3 doigts",
        type: "Swipe ↓",
        defaut: "Volume −",
        color: "#43a047",
        note: "Symétrique au précédent."
      },
      {
        fingers: "4 doigts",
        type: "Tap",
        defaut: "Copier",
        color: "#fb8c00",
        note: "Sélectionnez du texte avec deux doigts puis tapez à 4 — c’est plus rapide que Cmd+C."
      },
      {
        fingers: "4 doigts",
        type: "Swipe ←/→",
        defaut: "Onglet précédent / suivant",
        color: "#8e44ad",
        note: "Navigation entre onglets de navigateur sans toucher au clavier."
      },
      {
        fingers: "5 doigts",
        type: "Swipe ↑",
        defaut: "Mission Control",
        color: "#ec407a",
        note: "Aperçu de toutes les fenêtres, sans Cmd+Tab."
      },
      {
        fingers: "5 doigts",
        type: "Swipe ↓",
        defaut: "App Switcher",
        color: "#ec407a",
        note: "Cmd+Tab natif, mais un geste à la place du raccourci."
      }
    ];
    const commaVowels = [
      { keys: ",a", out: "ja" },
      { keys: ",e", out: "je" },
      { keys: ",i", out: "ji" },
      { keys: ",o", out: "jo" },
      { keys: ",u", out: "ju" },
      { keys: ",é", out: "jé" },
      { keys: ",'", out: "j’" }
    ];
    const commaConsonants = [
      { keys: ",è", out: "z", note: "Lettre Z" },
      { keys: ",y", out: "k", note: "Lettre K" },
      { keys: ",s", out: "q", note: "Lettre Q" },
      { keys: ",c", out: "ç", note: "Cédille" },
      { keys: ",x", out: "où", note: "Mot complet" }
    ];
    const suffixesA = [
      { keys: "às", out: "ement" },
      { keys: "àt", out: "ation" },
      { keys: "àn", out: "ment" },
      { keys: "àr", out: "eur" },
      { keys: "àl", out: "elle" },
      { keys: "àp", out: "isme" }
    ];
    const personalExamples = [
      { trig: "np★", out: "Adrien Moyaux", desc: "Nom complet" },
      {
        trig: "em★",
        out: "adrien@example.com",
        desc: "E-mail principal"
      },
      {
        trig: "tel★",
        out: "+33 6 12 34 56 78",
        desc: "Numéro de téléphone"
      },
      {
        trig: "sig★",
        out: "Cordialement,\nAdrien",
        desc: "Signature email"
      },
      {
        trig: "ad★",
        out: "15 rue Lafayette, Paris",
        desc: "Adresse postale"
      },
      {
        trig: "iban★",
        out: "FR76 1234 5678 9012 3456 7890 123",
        desc: "IBAN"
      }
    ];
    const dynamicExamples = [
      { prefix: "@dt", desc: "Date du jour (FR)", out: "07/05/2026" },
      {
        prefix: "@dtL",
        desc: "Date du jour en lettres",
        out: "7 mai 2026"
      },
      {
        prefix: "@ph",
        desc: "Téléphone configuré",
        out: "06 12 34 56 78"
      },
      { prefix: "@iban", desc: "IBAN configuré", out: "FR76 1234 …" }
    ];
    const repeaterExamples = [
      { trig: "l★", out: "ll", word: "elle" },
      { trig: "r★", out: "rr", word: "erreur" },
      { trig: "t★", out: "tt", word: "attendre" },
      { trig: "p★", out: "pp", word: "frappe" },
      { trig: "n★", out: "nn", word: "année" }
    ];
    const symbolRolls = [
      { trig: "#!", out: ":=", note: "Affectation (Go, Pascal)" },
      { trig: "!#", out: "!=", note: "Différent de" },
      { trig: "<@", out: "</", note: "Fermeture HTML/JSX" },
      { trig: "<%", out: "<=", note: "Inférieur ou égal" },
      { trig: "$=", out: "=>", note: "Fat arrow (JS)" },
      { trig: "+?", out: "->", note: "Flèche (Rust, types)" },
      { trig: '\\"', out: "/*", note: "Début commentaire bloc" },
      { trig: '"\\', out: "*/", note: "Fin commentaire bloc" },
      { trig: "(#", out: '("', note: "Ouverture string en argument" },
      { trig: "[)", out: '=""', note: "Attribut HTML vide" }
    ];
    const personalizationCards = [
      {
        icon: "⏯",
        title: "Pause & rechargement",
        body: "Un raccourci pour mettre <strong>tout</strong> en pause (gaming, démos, partage d’écran). Un autre pour recharger le driver après un changement de TOML, sans relancer Hammerspoon ou AHK."
      },
      {
        icon: "🚫",
        title: "Apps ignorées",
        body: "Listez les applications dans lesquelles aucun hotstring ne doit se déclencher (gestionnaire de mots de passe, terminal sécurisé, jeu vidéo). Reconnaissance par nom ou expression régulière."
      },
      {
        icon: "🎨",
        title: "Couleurs personnalisables",
        body: "Chaque famille a sa teinte de tooltip. Vert pour l’autocorrection, rouge pour la touche magique, bleu pour vos hotstrings perso. Tout est éditable depuis le menu, ou désactivable."
      },
      {
        icon: "⏱",
        title: "Délais par groupe",
        body: "Tapez vite ? Réduisez le délai d’expansion pour les roulements à 200 ms. Plus posé ? Montez à 800 ms. Chaque famille est réglable indépendamment."
      },
      {
        icon: "📁",
        title: "Chemins de configuration",
        body: "Stockez vos hotstrings où vous voulez : dans iCloud, sur un Dropbox partagé, dans un dotfiles repo Git. L’éditeur de chemins du menu repositionne tous les fichiers en un clic."
      },
      {
        icon: "🔐",
        title: "Aucune donnée ne quitte la machine",
        body: "Toutes les expansions, prédictions IA et métriques sont calculées localement. Pas de cloud, pas de télémétrie, pas de compte à créer."
      }
    ];
    const compareFeatures = [
      { label: "Hotstrings + autocorrection", mac: true, win: true },
      { label: "Touche magique ★", mac: true, win: true },
      { label: "Roulements personnalisés", mac: true, win: true },
      { label: "Hotstrings personnels (TOML)", mac: true, win: true },
      { label: "Tap-holds modificateurs", mac: true, win: true },
      { label: "Tooltip temps réel teinté", mac: true, win: true },
      { label: "Gestes trackpad", mac: true, win: true },
      { label: "Menu de configuration intégré", mac: true, win: true },
      { label: "Prédictions IA (bridge LLM)", mac: true, win: false },
      { label: "Métriques de frappe", mac: true, win: false }
    ];
    head("1alcgfk", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Ergopti+ — la disposition qui frappe juste</title>`);
      });
      $$renderer3.push(`<meta name="description" content="Ergopti+ est une disposition clavier optimisée pour le français, l’anglais et le code, accompagnée d’un driver complet sur macOS (Hammerspoon) et Windows (AutoHotkey)." class="svelte-1alcgfk"/>`);
    });
    $$renderer2.push(`<div id="main-content" class="svelte-1alcgfk"><div id="page-toc-pc" style="display: none" class="svelte-1alcgfk"><div id="page-toc" class="svelte-1alcgfk"></div></div> <div class="legacy-banner svelte-1alcgfk"><a href="ergopti-plus-old" class="svelte-1alcgfk">← Ancienne version de cette page</a></div> <main class="ep-main svelte-1alcgfk"><div class="ep-root svelte-1alcgfk"><section class="hero svelte-1alcgfk"><div class="hero-glow svelte-1alcgfk"></div> <div class="os-toggle svelte-1alcgfk"><button type="button"${attr_class(clsx("os-btn active"), "svelte-1alcgfk")} title="Afficher les fenêtres au style Windows (AutoHotkey)"${attr("aria-pressed", "true")} aria-label="Style Windows"><i class="icon-windows svelte-1alcgfk"></i><span class="svelte-1alcgfk">Windows</span></button> <button type="button"${attr_class(clsx("os-btn"), "svelte-1alcgfk")} title="Afficher les fenêtres au style macOS (Hammerspoon)"${attr("aria-pressed", "false")} aria-label="Style macOS"><i class="icon-appleinc svelte-1alcgfk"></i><span class="svelte-1alcgfk">macOS</span></button></div> <p class="eyebrow svelte-1alcgfk">Disposition clavier <span class="dot svelte-1alcgfk">•</span> macOS &amp; Windows</p> <h1 class="hero-title svelte-1alcgfk">Tapez moins.<br class="svelte-1alcgfk"/><span class="grad svelte-1alcgfk">Écrivez plus.</span></h1> <p class="hero-sub svelte-1alcgfk">`);
    ErgoptiPlus($$renderer2);
    $$renderer2.push(`<!----> ajoute à <strong class="svelte-1alcgfk">Ergopti</strong> une couche logicielle complète
					: expansions de texte, autocorrection, roulements, tap-holds, gestes — pensés pour le français,
					l’anglais et le code.</p> <div class="hero-cta svelte-1alcgfk">`);
    {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<a class="btn btn-primary svelte-1alcgfk"${attr("href", urlAhkExe())}${attr("download", false)}><i class="icon-autohotkey svelte-1alcgfk"></i> <span class="svelte-1alcgfk">Télécharger pour Windows</span></a>`);
    }
    $$renderer2.push(`<!--]--> <a class="btn btn-secondary svelte-1alcgfk" href="utilisation"><span class="svelte-1alcgfk">Installer la disposition clavier</span></a></div> <div class="demo-stage svelte-1alcgfk"><div${attr_class(`demo-window os-${stringify(osStyle)}`, "svelte-1alcgfk")} aria-hidden="true"><div class="chrome svelte-1alcgfk">`);
    {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<span class="chrome-title chrome-title--win svelte-1alcgfk">~/notes/draft.md</span> <span class="win-buttons svelte-1alcgfk"><span class="win-btn svelte-1alcgfk" aria-hidden="true">─</span> <span class="win-btn svelte-1alcgfk" aria-hidden="true">▢</span> <span class="win-btn close svelte-1alcgfk" aria-hidden="true">✕</span></span>`);
    }
    $$renderer2.push(`<!--]--></div> <div class="demo-viewport svelte-1alcgfk"><!---->`);
    {
      $$renderer2.push(`<div class="demo-body svelte-1alcgfk"><span class="demo-typed svelte-1alcgfk">${escape_html(typed)}</span><span class="caret svelte-1alcgfk"></span> `);
      {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]--></div>`);
    }
    $$renderer2.push(`<!----></div></div> <ul class="demo-pager svelte-1alcgfk" aria-label="Sélectionner une démo"><!--[-->`);
    const each_array = ensure_array_like(demos);
    for (let i = 0, $$length = each_array.length; i < $$length; i++) {
      let d = each_array[i];
      $$renderer2.push(`<li class="svelte-1alcgfk"><button type="button"${attr("title", `${stringify(d.input)} → ${stringify(d.output)} (${stringify(d.group)})`)}${attr("aria-label", `Démo ${stringify(i + 1)} sur ${stringify(demos.length)} : ${stringify(d.input)} devient ${stringify(d.output)}`)}${attr_class("svelte-1alcgfk", void 0, { "active": i === demoIndex })}><span class="pager-input svelte-1alcgfk">${escape_html(d.input)}</span> <span class="pager-arrow svelte-1alcgfk">→</span> <span class="pager-output svelte-1alcgfk">${escape_html(d.output)}</span></button></li>`);
    }
    $$renderer2.push(`<!--]--></ul></div></section> <section class="kpi-strip svelte-1alcgfk"><!--[-->`);
    const each_array_1 = ensure_array_like(kpis);
    for (let i = 0, $$length = each_array_1.length; i < $$length; i++) {
      let kpi = each_array_1[i];
      $$renderer2.push(`<div class="kpi svelte-1alcgfk"><div class="kpi-num svelte-1alcgfk">${escape_html(counters[i])}${escape_html(kpi.suffix)}</div> <div class="kpi-label svelte-1alcgfk">${escape_html(kpi.label)}</div></div>`);
    }
    $$renderer2.push(`<!--]--></section> <section class="promises svelte-1alcgfk"><header class="section-head svelte-1alcgfk"><p class="kicker svelte-1alcgfk">Trois promesses</p> <h2 class="svelte-1alcgfk">Une suite riche, jamais imposante.</h2> <p class="lead svelte-1alcgfk">`);
    ErgoptiPlus($$renderer2);
    $$renderer2.push(`<!----> embarque <strong class="svelte-1alcgfk">une trentaine de fonctionnalités</strong>.
						Pas de panique : aucune n’est obligatoire, tout est désactivable, et le bénéfice arrive
						dès la première session.</p></header> <div class="promise-grid svelte-1alcgfk"><!--[-->`);
    const each_array_2 = ensure_array_like(promises);
    for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
      let p = each_array_2[$$index_2];
      $$renderer2.push(`<article class="promise-card svelte-1alcgfk"><div class="promise-icon svelte-1alcgfk" aria-hidden="true">${escape_html(p.icon)}</div> <h3 class="svelte-1alcgfk">${html(p.title)}</h3> <p class="svelte-1alcgfk">${html(p.body)}</p></article>`);
    }
    $$renderer2.push(`<!--]--></div></section> <section class="session svelte-1alcgfk"><header class="section-head svelte-1alcgfk"><p class="kicker svelte-1alcgfk">Au fil de la frappe</p> <h2 class="svelte-1alcgfk">Une vraie phrase, plusieurs expansions.</h2> <p class="lead svelte-1alcgfk">Voici ce qui se passe à l’écran quand vous tapez naturellement. Les expansions
						s’enchaînent sans rompre le flux.</p></header> <div${attr_class(`session-window os-${stringify(osStyle)}`, "svelte-1alcgfk")}><div class="chrome svelte-1alcgfk">`);
    {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<span class="chrome-title chrome-title--win svelte-1alcgfk">message.txt</span> <span class="win-buttons svelte-1alcgfk"><span class="win-btn svelte-1alcgfk" aria-hidden="true">─</span> <span class="win-btn svelte-1alcgfk" aria-hidden="true">▢</span> <span class="win-btn close svelte-1alcgfk" aria-hidden="true">✕</span></span>`);
    }
    $$renderer2.push(`<!--]--></div> <div class="session-body svelte-1alcgfk"><p class="session-line svelte-1alcgfk">${escape_html(sessionText)}<span class="caret svelte-1alcgfk"></span></p> `);
    {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></div></div></section> <section class="features svelte-1alcgfk"><header class="section-head svelte-1alcgfk"><p class="kicker svelte-1alcgfk">Tout dans un seul driver</p> <h2 class="svelte-1alcgfk">Une fonctionnalité, un raccourci, une couleur.</h2> <p class="lead svelte-1alcgfk">Chaque famille d’expansion a sa teinte dans le tooltip. Vous savez d’un coup d’œil ce
						qui va se déclencher.</p></header> <div class="feat-grid svelte-1alcgfk"><!--[-->`);
    const each_array_3 = ensure_array_like(features);
    for (let $$index_3 = 0, $$length = each_array_3.length; $$index_3 < $$length; $$index_3++) {
      let f = each_array_3[$$index_3];
      $$renderer2.push(`<article class="feat-card svelte-1alcgfk"${attr_style(`--accent: ${stringify(f.color)};`)}><div class="feat-glyph svelte-1alcgfk" aria-hidden="true">${escape_html(f.icon)}</div> <h3 class="svelte-1alcgfk">${escape_html(f.title)}</h3> <p class="svelte-1alcgfk">${html(f.body)}</p></article>`);
    }
    $$renderer2.push(`<!--]--></div></section> <section class="tapholds svelte-1alcgfk"><header class="section-head svelte-1alcgfk"><p class="kicker svelte-1alcgfk" style="color:#fb8c00">Confort × 2</p> <h2 class="svelte-1alcgfk">Une touche, deux comportements.</h2> <p class="lead svelte-1alcgfk">Les modificateurs de la rangée des pouces et de la maison récupèrent une seconde vie. Un
						appui bref envoie une action, un maintien renvoie à leur rôle d’origine. Plus jamais
						besoin d’aller chercher <kbd class="svelte-1alcgfk">Ctrl</kbd> + <kbd class="svelte-1alcgfk">C</kbd> avec la main droite.</p></header> <div class="tap-grid svelte-1alcgfk"><!--[-->`);
    const each_array_4 = ensure_array_like(tapHolds);
    for (let $$index_4 = 0, $$length = each_array_4.length; $$index_4 < $$length; $$index_4++) {
      let t = each_array_4[$$index_4];
      $$renderer2.push(`<article class="tap-card svelte-1alcgfk"${attr_style(`--accent: ${stringify(t.color)};`)}><div class="tap-key svelte-1alcgfk"><span class="tap-keycap svelte-1alcgfk">${escape_html(t.key)}</span></div> <div class="tap-rows svelte-1alcgfk"><div class="tap-row tap-row-tap svelte-1alcgfk"><span class="tap-pill svelte-1alcgfk">Tap</span> <span class="tap-glyph svelte-1alcgfk">${escape_html(t.tap.icon)}</span> <span class="tap-action svelte-1alcgfk">${escape_html(t.tap.label)}</span></div> <div class="tap-row tap-row-hold svelte-1alcgfk"><span class="tap-pill tap-pill-hold svelte-1alcgfk">Hold</span> <span class="tap-glyph svelte-1alcgfk">${escape_html(t.hold.icon)}</span> <span class="tap-action svelte-1alcgfk">${escape_html(t.hold.label)}</span></div></div> <p class="tap-note svelte-1alcgfk">${escape_html(t.note)}</p></article>`);
    }
    $$renderer2.push(`<!--]--></div></section> <section class="hotdetail svelte-1alcgfk"><header class="section-head svelte-1alcgfk"><p class="kicker svelte-1alcgfk">Au cœur de la frappe</p> <h2 class="svelte-1alcgfk">Quatre familles, un même réflexe.</h2> <p class="lead svelte-1alcgfk">Voici à quoi ressemble chaque catégorie d’expansion <strong class="svelte-1alcgfk">en contexte réel</strong> — pas
						des triggers isolés. Vous tapez un mot, le mot que vous vouliez sort.</p></header> <div class="hotdetail-grid svelte-1alcgfk"><!--[-->`);
    const each_array_5 = ensure_array_like(hotstringDetails);
    for (let $$index_7 = 0, $$length = each_array_5.length; $$index_7 < $$length; $$index_7++) {
      let cat = each_array_5[$$index_7];
      $$renderer2.push(`<article class="hotdetail-card svelte-1alcgfk"${attr_style(`--accent: ${stringify(cat.color)};`)}><header class="hotdetail-head svelte-1alcgfk"><span class="hotdetail-dot svelte-1alcgfk"></span> <div class="svelte-1alcgfk"><h3 class="svelte-1alcgfk">${escape_html(cat.title)}</h3> <p class="hotdetail-tag svelte-1alcgfk">${escape_html(cat.tag)}</p></div></header> <p class="hotdetail-lead svelte-1alcgfk">${escape_html(cat.lead)}</p> <ul class="hotdetail-rows svelte-1alcgfk"><!--[-->`);
      const each_array_6 = ensure_array_like(cat.rows);
      for (let $$index_6 = 0, $$length2 = each_array_6.length; $$index_6 < $$length2; $$index_6++) {
        let r = each_array_6[$$index_6];
        $$renderer2.push(`<li class="svelte-1alcgfk"><div class="hot-trig svelte-1alcgfk"><span class="hot-key svelte-1alcgfk">${escape_html(r.trig)}</span> <span class="hot-arrow svelte-1alcgfk">→</span> <span class="hot-out svelte-1alcgfk">${escape_html(r.out)}</span></div> <div class="hot-context svelte-1alcgfk"><!--[-->`);
        const each_array_7 = ensure_array_like(r.words);
        for (let $$index_5 = 0, $$length3 = each_array_7.length; $$index_5 < $$length3; $$index_5++) {
          let w = each_array_7[$$index_5];
          $$renderer2.push(`<span class="hot-word svelte-1alcgfk">${escape_html(w)}</span>`);
        }
        $$renderer2.push(`<!--]--></div></li>`);
      }
      $$renderer2.push(`<!--]--></ul></article>`);
    }
    $$renderer2.push(`<!--]--></div></section> <section class="hsmore svelte-1alcgfk"><header class="section-head svelte-1alcgfk"><p class="kicker svelte-1alcgfk" style="color:#1e88e5">Vos propres hotstrings</p> <h2 class="svelte-1alcgfk">Et ceux que <em class="svelte-1alcgfk">vous</em> tapez tous les jours.</h2> <p class="lead svelte-1alcgfk">Les +3 000 hotstrings livrés sont une base. Au-dessus, ajoutez votre signature, votre
						IBAN, vos formules récurrentes — sans toucher à un seul fichier de code.</p></header> <div class="hsmore-grid svelte-1alcgfk"><article class="hsmore-card svelte-1alcgfk"><header class="hsmore-head svelte-1alcgfk"><h3 class="svelte-1alcgfk">Hotstrings personnels</h3> <p class="hsmore-sub svelte-1alcgfk">Édités depuis le menu, stockés en TOML, rechargés à la volée.</p></header> <h4 class="svelte-1alcgfk">Ajouter un raccourci en 5 secondes</h4> <ol class="hsmore-steps svelte-1alcgfk"><li class="svelte-1alcgfk">Sélectionnez le texte que vous voulez transformer en hotstring.</li> <li class="svelte-1alcgfk">Ouvrez le menu → <strong class="svelte-1alcgfk">Hotstrings perso</strong>.</li> <li class="svelte-1alcgfk">Donnez un trigger (ex : <code class="svelte-1alcgfk">sig★</code>).</li> <li class="svelte-1alcgfk">C’est en place, sans relancer le driver.</li></ol> <h4 class="svelte-1alcgfk">Quelques exemples typiques</h4> <ul class="hsmore-rows svelte-1alcgfk"><!--[-->`);
    const each_array_8 = ensure_array_like(personalExamples);
    for (let $$index_8 = 0, $$length = each_array_8.length; $$index_8 < $$length; $$index_8++) {
      let p = each_array_8[$$index_8];
      $$renderer2.push(`<li class="svelte-1alcgfk"><span class="hs-key svelte-1alcgfk">${escape_html(p.trig)}</span> <span class="hs-arrow svelte-1alcgfk">→</span> <span class="hs-out svelte-1alcgfk">${escape_html(p.out)}</span> <span class="hs-desc svelte-1alcgfk">${escape_html(p.desc)}</span></li>`);
    }
    $$renderer2.push(`<!--]--></ul></article> <article class="hsmore-card svelte-1alcgfk"><header class="hsmore-head svelte-1alcgfk"><h3 class="svelte-1alcgfk">Hotstrings dynamiques</h3> <p class="hsmore-sub svelte-1alcgfk">Calculés au moment du déclenchement — date du jour, IBAN, infos perso.</p></header> <h4 class="svelte-1alcgfk">Préfixe <code class="svelte-1alcgfk">@</code> pour les données vivantes</h4> <p class="hsmore-text svelte-1alcgfk">Certaines valeurs changent chaque jour (la date) ou ne doivent pas être codées en dur
							(numéro de téléphone, IBAN). Les hotstrings dynamiques lisent ces valeurs au moment de
							l’expansion.</p> <ul class="hsmore-rows svelte-1alcgfk"><!--[-->`);
    const each_array_9 = ensure_array_like(dynamicExamples);
    for (let $$index_9 = 0, $$length = each_array_9.length; $$index_9 < $$length; $$index_9++) {
      let d = each_array_9[$$index_9];
      $$renderer2.push(`<li class="svelte-1alcgfk"><span class="hs-key svelte-1alcgfk">${escape_html(d.prefix)}</span> <span class="hs-arrow svelte-1alcgfk">→</span> <span class="hs-out svelte-1alcgfk">${escape_html(d.out)}</span> <span class="hs-desc svelte-1alcgfk">${escape_html(d.desc)}</span></li>`);
    }
    $$renderer2.push(`<!--]--></ul> <h4 class="svelte-1alcgfk">Vos infos en un seul endroit</h4> <p class="hsmore-text svelte-1alcgfk">L’éditeur d’infos personnelles centralise nom, e-mail, téléphone, adresse, IBAN. Les
							hotstrings dynamiques s’en servent automatiquement.</p></article></div></section> <section class="magic svelte-1alcgfk"><header class="section-head svelte-1alcgfk"><p class="kicker svelte-1alcgfk" style="color:#e53935">★ — la touche signature</p> <h2 class="svelte-1alcgfk">Une touche, deux comportements.</h2> <p class="lead svelte-1alcgfk">La touche <kbd class="glow svelte-1alcgfk">★</kbd> a deux modes : <strong class="svelte-1alcgfk">répéter la lettre précédente</strong> ou <strong class="svelte-1alcgfk">déclencher une expansion (hotstring)</strong>. Les deux sont décidés au
						moment du déclenchement selon le contexte — sans configuration.</p></header> <div class="magic-grid magic-grid-2 svelte-1alcgfk"><article class="magic-card svelte-1alcgfk"><h3 class="svelte-1alcgfk">1. Répéteur de lettre</h3> <p class="svelte-1alcgfk">Si aucune abréviation ne correspond, <kbd class="glow svelte-1alcgfk">★</kbd> double simplement la
							lettre précédente. <strong class="svelte-1alcgfk">Plus de SFB sur les doublons.</strong></p> <ul class="magic-rows svelte-1alcgfk"><!--[-->`);
    const each_array_10 = ensure_array_like(repeaterExamples);
    for (let $$index_10 = 0, $$length = each_array_10.length; $$index_10 < $$length; $$index_10++) {
      let r = each_array_10[$$index_10];
      $$renderer2.push(`<li class="svelte-1alcgfk"><span class="hs-key svelte-1alcgfk">${escape_html(r.trig)}</span> <span class="hs-arrow svelte-1alcgfk">→</span> <span class="hs-out svelte-1alcgfk">${escape_html(r.out)}</span> <span class="hs-desc svelte-1alcgfk">${escape_html(r.word)}</span></li>`);
    }
    $$renderer2.push(`<!--]--></ul></article> <article class="magic-card svelte-1alcgfk"><h3 class="svelte-1alcgfk">2. Déclencheur d’abréviations</h3> <p class="svelte-1alcgfk">Si la lettre précédente forme un trigger connu, <kbd class="glow svelte-1alcgfk">★</kbd> expanse à la
							place. Aucun risque de collision avec la frappe normale.</p> <ul class="magic-rows svelte-1alcgfk"><li class="svelte-1alcgfk"><span class="hs-key svelte-1alcgfk">a★</span><span class="hs-arrow svelte-1alcgfk">→</span><span class="hs-out svelte-1alcgfk">ainsi</span></li> <li class="svelte-1alcgfk"><span class="hs-key svelte-1alcgfk">c★</span><span class="hs-arrow svelte-1alcgfk">→</span><span class="hs-out svelte-1alcgfk">c’est</span></li> <li class="svelte-1alcgfk"><span class="hs-key svelte-1alcgfk">ct★</span><span class="hs-arrow svelte-1alcgfk">→</span><span class="hs-out svelte-1alcgfk">c’était</span></li> <li class="svelte-1alcgfk"><span class="hs-key svelte-1alcgfk">dé★</span><span class="hs-arrow svelte-1alcgfk">→</span><span class="hs-out svelte-1alcgfk">déjà</span></li> <li class="svelte-1alcgfk"><span class="hs-key svelte-1alcgfk">ê★</span><span class="hs-arrow svelte-1alcgfk">→</span><span class="hs-out svelte-1alcgfk">être</span></li> <li class="svelte-1alcgfk"><span class="hs-key svelte-1alcgfk">eef★</span><span class="hs-arrow svelte-1alcgfk">→</span><span class="hs-out svelte-1alcgfk">en effet</span></li> <li class="svelte-1alcgfk"><span class="hs-key svelte-1alcgfk">f★</span><span class="hs-arrow svelte-1alcgfk">→</span><span class="hs-out svelte-1alcgfk">faire</span></li> <li class="svelte-1alcgfk"><span class="hs-key svelte-1alcgfk">m★</span><span class="hs-arrow svelte-1alcgfk">→</span><span class="hs-out svelte-1alcgfk">mais</span></li> <li class="svelte-1alcgfk"><span class="hs-key svelte-1alcgfk">pcq★</span><span class="hs-arrow svelte-1alcgfk">→</span><span class="hs-out svelte-1alcgfk">parce que</span></li> <li class="svelte-1alcgfk"><span class="hs-key svelte-1alcgfk">pê★</span><span class="hs-arrow svelte-1alcgfk">→</span><span class="hs-out svelte-1alcgfk">peut-être</span></li> <li class="svelte-1alcgfk"><span class="hs-key svelte-1alcgfk">pex★</span><span class="hs-arrow svelte-1alcgfk">→</span><span class="hs-out svelte-1alcgfk">par exemple</span></li> <li class="svelte-1alcgfk"><span class="hs-key svelte-1alcgfk">r★</span><span class="hs-arrow svelte-1alcgfk">→</span><span class="hs-out svelte-1alcgfk">rien</span></li></ul></article></div></section> <section class="power svelte-1alcgfk"><header class="section-head svelte-1alcgfk"><p class="kicker svelte-1alcgfk" style="color:#8e44ad">Petits réflexes, gros gain</p> <h2 class="svelte-1alcgfk">Les détails qui changent la frappe.</h2> <p class="lead svelte-1alcgfk">Quatre fonctions discrètes mais qu’on ne lâche plus une fois adoptées.</p></header> <div class="power-grid svelte-1alcgfk"><!--[-->`);
    const each_array_11 = ensure_array_like(powerMoves);
    for (let $$index_11 = 0, $$length = each_array_11.length; $$index_11 < $$length; $$index_11++) {
      let p = each_array_11[$$index_11];
      $$renderer2.push(`<div class="power-card svelte-1alcgfk"><div class="power-icon svelte-1alcgfk">${escape_html(p.icon)}</div> <h3 class="svelte-1alcgfk">${escape_html(p.title)}</h3> <p class="svelte-1alcgfk">${html(p.body)}</p></div>`);
    }
    $$renderer2.push(`<!--]--></div></section> <section class="navlayer svelte-1alcgfk"><header class="section-head svelte-1alcgfk"><p class="kicker svelte-1alcgfk" style="color:#fb8c00">Layer maintien</p> <h2 class="svelte-1alcgfk">Naviguer sans quitter la maison-row.</h2> <p class="lead svelte-1alcgfk">Maintenez <kbd class="svelte-1alcgfk">LAlt</kbd> et la moitié droite du clavier devient un cluster de navigation
						complet. Plus de zigzag vers les flèches, le pavé numérique ou la souris.</p></header> <div class="navlayer-window svelte-1alcgfk"><div class="navlayer-hold svelte-1alcgfk"><span class="navlayer-pill svelte-1alcgfk">Hold</span> <span class="navlayer-key svelte-1alcgfk">LAlt</span> <span class="navlayer-plus svelte-1alcgfk">+</span></div> <div class="navlayer-grid svelte-1alcgfk"><!--[-->`);
    const each_array_12 = ensure_array_like(navLayer);
    for (let $$index_13 = 0, $$length = each_array_12.length; $$index_13 < $$length; $$index_13++) {
      let n = each_array_12[$$index_13];
      $$renderer2.push(`<div class="navlayer-cell svelte-1alcgfk"><div class="navlayer-base svelte-1alcgfk"><!--[-->`);
      const each_array_13 = ensure_array_like(n.keys);
      for (let $$index_12 = 0, $$length2 = each_array_13.length; $$index_12 < $$length2; $$index_12++) {
        let k = each_array_13[$$index_12];
        $$renderer2.push(`<kbd class="svelte-1alcgfk">${escape_html(k)}</kbd>`);
      }
      $$renderer2.push(`<!--]--></div> <div class="navlayer-arrow svelte-1alcgfk">becomes</div> <div class="navlayer-target svelte-1alcgfk"><span class="navlayer-glyph svelte-1alcgfk">${escape_html(n.label)}</span> <span class="navlayer-desc svelte-1alcgfk">${escape_html(n.desc)}</span></div></div>`);
    }
    $$renderer2.push(`<!--]--></div></div></section> <section class="ai svelte-1alcgfk"><header class="section-head svelte-1alcgfk"><p class="kicker svelte-1alcgfk" style="color:#ec407a">Pont LLM intégré · macOS</p> <h2 class="svelte-1alcgfk">Une IA locale qui prédit ce que vous voulez écrire.</h2> <p class="lead svelte-1alcgfk">Hammerspoon embarque un pont vers un modèle de langage qui tourne <strong class="svelte-1alcgfk">sur votre Mac</strong>, pas dans le cloud. Aucune donnée n’est envoyée à l’extérieur, le modèle est rapide,
						et il apprend votre style sans rien stocker.</p></header> <div${attr_class(`ai-window os-${stringify(osStyle)}`, "svelte-1alcgfk")}><div class="chrome svelte-1alcgfk">`);
    {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<span class="chrome-title chrome-title--win svelte-1alcgfk">~/inbox/draft.eml</span> <span class="win-buttons svelte-1alcgfk"><span class="win-btn svelte-1alcgfk" aria-hidden="true">─</span> <span class="win-btn svelte-1alcgfk" aria-hidden="true">▢</span> <span class="win-btn close svelte-1alcgfk" aria-hidden="true">✕</span></span>`);
    }
    $$renderer2.push(`<!--]--></div> <div class="ai-body svelte-1alcgfk"><p class="ai-context svelte-1alcgfk">Bonjour Madame, je vous écris pour <span class="caret svelte-1alcgfk"></span></p> <div class="ai-tooltip svelte-1alcgfk"><div class="ai-tooltip-head svelte-1alcgfk"><span class="ai-bolt svelte-1alcgfk">⚡</span> <span class="svelte-1alcgfk">Suggestions IA</span> <span class="ai-shortcut svelte-1alcgfk"><kbd class="svelte-1alcgfk">Tab</kbd> pour valider</span></div> <ul class="ai-list svelte-1alcgfk"><!--[-->`);
    const each_array_14 = ensure_array_like(aiSuggestions);
    for (let i = 0, $$length = each_array_14.length; i < $$length; i++) {
      let s = each_array_14[i];
      $$renderer2.push(`<li${attr_class("svelte-1alcgfk", void 0, { "active": i === 0 })}><span class="ai-num svelte-1alcgfk">${escape_html(i + 1)}</span> <span class="svelte-1alcgfk">${escape_html(s)}</span></li>`);
    }
    $$renderer2.push(`<!--]--></ul></div></div></div> <div class="ai-section svelte-1alcgfk"><h3 class="svelte-1alcgfk">1. Choisissez votre moteur d’inférence</h3> <p class="ai-text svelte-1alcgfk">Deux backends sont supportés en natif. Le driver détecte automatiquement le plus
						performant pour votre matériel, mais vous pouvez toujours forcer votre choix depuis le
						menu.</p> <div class="ai-backends svelte-1alcgfk"><!--[-->`);
    const each_array_15 = ensure_array_like(aiBackends);
    for (let $$index_15 = 0, $$length = each_array_15.length; $$index_15 < $$length; $$index_15++) {
      let b = each_array_15[$$index_15];
      $$renderer2.push(`<article class="ai-backend svelte-1alcgfk"><div class="ai-backend-icon svelte-1alcgfk">${escape_html(b.icon)}</div> <div class="ai-backend-body svelte-1alcgfk"><h4 class="svelte-1alcgfk">${escape_html(b.name)} <span class="ai-port svelte-1alcgfk">port ${escape_html(b.port)}</span></h4> <p class="ai-backend-aud svelte-1alcgfk">${escape_html(b.audience)}</p> <p class="ai-backend-pro svelte-1alcgfk">${escape_html(b.pro)}</p></div></article>`);
    }
    $$renderer2.push(`<!--]--></div></div> <div class="ai-section svelte-1alcgfk"><h3 class="svelte-1alcgfk">2. Choisissez votre modèle parmi <strong class="svelte-1alcgfk">${escape_html(aiTotalModels)}</strong></h3> <p class="ai-text svelte-1alcgfk">Le menu <em class="svelte-1alcgfk">Modèles</em> propose un catalogue curé qui regroupe à ce jour <strong class="svelte-1alcgfk">${escape_html(aiTotalModels)} modèles open-weights</strong> issus de <strong class="svelte-1alcgfk">${escape_html(aiTotalProviders)} fournisseurs</strong> (${escape_html(aiTotalFamilies)} familles). Du nano 350
						M qui répond en 50 ms au 70 B qui produit des phrases parfaitement contextuelles — vous choisissez
						selon votre matériel et votre besoin. Le menu vous indique la RAM et l’espace disque requis
						avant tout téléchargement.</p> <p class="ai-text-small svelte-1alcgfk">Cette liste est <strong class="svelte-1alcgfk">générée automatiquement</strong> depuis le fichier de configuration
						du driver — elle est toujours à jour avec ce que vous installerez réellement.</p> <div class="ai-providers svelte-1alcgfk"><!--[-->`);
    const each_array_16 = ensure_array_like(aiProviders);
    for (let $$index_16 = 0, $$length = each_array_16.length; $$index_16 < $$length; $$index_16++) {
      let p = each_array_16[$$index_16];
      $$renderer2.push(`<article class="ai-provider svelte-1alcgfk"><div class="ai-provider-name svelte-1alcgfk">${escape_html(p.name)}</div> <div class="ai-provider-family svelte-1alcgfk">${escape_html(p.families)}</div> <div class="ai-provider-meta svelte-1alcgfk"><span class="ai-provider-count svelte-1alcgfk">${escape_html(p.modelCount)} modèle${escape_html(p.modelCount > 1 ? "s" : "")}</span> `);
      if (p.range) {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<span class="ai-provider-range svelte-1alcgfk">${escape_html(p.range)}</span>`);
      } else {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]--></div></article>`);
    }
    $$renderer2.push(`<!--]--></div> <article class="ai-custom svelte-1alcgfk"><div class="ai-custom-icon svelte-1alcgfk">＋</div> <div class="ai-custom-body svelte-1alcgfk"><h4 class="svelte-1alcgfk">Ajoutez n’importe quel autre modèle</h4> <p class="svelte-1alcgfk">Une option <em class="svelte-1alcgfk">« Ajouter un modèle personnalisé »</em> accepte n’importe quel <strong class="svelte-1alcgfk">identifiant HuggingFace</strong> (pour MLX) ou <strong class="svelte-1alcgfk">tag Ollama</strong>.
								Exemple : <code class="svelte-1alcgfk">mlx-community/Qwen2.5-3B-Instruct-4bit</code> ou <code class="svelte-1alcgfk">llama3.2:3b</code>. Le modèle apparaît immédiatement dans la liste, et reste
								persisté entre les sessions.</p> <p class="ai-custom-foot svelte-1alcgfk">Vous pouvez littéralement utiliser <strong class="svelte-1alcgfk">n’importe quel modèle</strong> publié sur
								HuggingFace au format MLX, ou n’importe quel modèle disponible dans la bibliothèque Ollama.</p></div></article></div> <div class="ai-section svelte-1alcgfk"><h3 class="svelte-1alcgfk">3. Choisissez (ou écrivez) votre profil de prompt</h3> <p class="ai-text svelte-1alcgfk">Quatre profils intégrés couvrent les usages courants — chacun avec un prompt système
						précis, rédigé pour fonctionner sur les petits modèles aussi bien que sur les gros.</p> <div class="ai-profiles svelte-1alcgfk"><!--[-->`);
    const each_array_17 = ensure_array_like(aiProfiles);
    for (let $$index_17 = 0, $$length = each_array_17.length; $$index_17 < $$length; $$index_17++) {
      let p = each_array_17[$$index_17];
      $$renderer2.push(`<article class="ai-profile svelte-1alcgfk"><header class="svelte-1alcgfk"><span class="ai-profile-name svelte-1alcgfk">${escape_html(p.name)}</span> <span class="ai-profile-tag svelte-1alcgfk">${escape_html(p.tag)}</span></header> <p class="svelte-1alcgfk">${html(p.desc)}</p></article>`);
    }
    $$renderer2.push(`<!--]--></div> <article class="ai-custom svelte-1alcgfk"><div class="ai-custom-icon svelte-1alcgfk">✎</div> <div class="ai-custom-body svelte-1alcgfk"><h4 class="svelte-1alcgfk">Ou rédigez votre propre prompt</h4> <p class="svelte-1alcgfk">L’éditeur de prompts intégré (<em class="svelte-1alcgfk">Menu IA → Profils → Ajouter</em>) accepte
								n’importe quel prompt système avec les variables <code class="svelte-1alcgfk">{context}</code>, <code class="svelte-1alcgfk">{min_words}</code>, <code class="svelte-1alcgfk">{max_words}</code>. Imposez un ton, une
								langue, une longueur, des contraintes métier. Vos profils sont persistés et
								réutilisables.</p> <p class="ai-custom-foot svelte-1alcgfk">Exemples d’usages : <em class="svelte-1alcgfk">« Réponds toujours en québécois soutenu »</em>, <em class="svelte-1alcgfk">« Génère du code TypeScript strict »</em>, <em class="svelte-1alcgfk">« Termine ma phrase comme Hemingway »</em>.</p></div></article></div> <div class="ai-section svelte-1alcgfk"><h3 class="svelte-1alcgfk">4. Trois modes d’usage, un seul tooltip</h3> <p class="ai-text svelte-1alcgfk">Le tooltip IA est <strong class="svelte-1alcgfk">une seule fenêtre sombre</strong> qui contient toute la phrase
						suggérée, avec un code couleur précis : <span style="color:#7f7f7f" class="svelte-1alcgfk">gris</span> pour le
						contexte inchangé, <span style="color:#41e566;font-weight:700" class="svelte-1alcgfk">vert</span> pour les
						corrections orthographiques, <span style="color:#ff9d1c;font-weight:700" class="svelte-1alcgfk">orange</span> pour la suite prédite, <span style="color:#fae138;font-weight:700" class="svelte-1alcgfk">jaune</span> pour le marqueur
						de ligne active (✨).</p> <article class="ai-example svelte-1alcgfk"><header class="ai-example-head svelte-1alcgfk"><span class="ai-example-num svelte-1alcgfk">A</span> <div class="svelte-1alcgfk"><h4 class="svelte-1alcgfk">Prédiction simple</h4> <p class="ai-example-tag svelte-1alcgfk">Aucune faute détectée. Seule la <em class="svelte-1alcgfk">continuation</em> apparaît, en orange.</p></div></header> <div class="ai-example-context svelte-1alcgfk">Bonjour Madame, je vous écris pour <span class="ai-caret svelte-1alcgfk"></span></div> <div class="hs-tooltip svelte-1alcgfk"><div class="hs-tt-line hs-tt-line--selected svelte-1alcgfk"><span class="hs-tt-spark svelte-1alcgfk">✨</span> <span class="hs-tt-eq svelte-1alcgfk">Bonjour Madame, je vous écris pour</span> <span class="hs-tt-nw svelte-1alcgfk">vous proposer un rendez-vous mardi prochain.</span> <span class="hs-tt-shortcut svelte-1alcgfk">⌥1</span></div> <div class="hs-tt-line svelte-1alcgfk"><span class="hs-tt-eq hs-tt-eq--dim svelte-1alcgfk">Bonjour Madame, je vous écris pour</span> <span class="hs-tt-nw hs-tt-nw--dim svelte-1alcgfk">faire suite à notre échange de la semaine dernière.</span> <span class="hs-tt-shortcut hs-tt-shortcut--dim svelte-1alcgfk">⌥2</span></div> <div class="hs-tt-line svelte-1alcgfk"><span class="hs-tt-eq hs-tt-eq--dim svelte-1alcgfk">Bonjour Madame, je vous écris pour</span> <span class="hs-tt-nw hs-tt-nw--dim svelte-1alcgfk">accuser réception de votre dossier complet.</span> <span class="hs-tt-shortcut hs-tt-shortcut--dim svelte-1alcgfk">⌥3</span></div> <div class="hs-tt-hint svelte-1alcgfk">⇧G + Tab    ◀    Tab =
								accepter    ▶    ⇧D + Tab</div> <div class="hs-tt-info svelte-1alcgfk">Llama 3.2 3B · Basic — ⏱ 0.18 s — 0.42 s</div></div></article> <article class="ai-example svelte-1alcgfk"><header class="ai-example-head svelte-1alcgfk"><span class="ai-example-num ai-example-num-green svelte-1alcgfk">B</span> <div class="svelte-1alcgfk"><h4 class="svelte-1alcgfk">Correction seule</h4> <p class="ai-example-tag svelte-1alcgfk">Une faute détectée, pas de continuation. Seul le mot corrigé est en <strong style="color:#41e566" class="svelte-1alcgfk">vert</strong>.</p></div></header> <div class="ai-example-context svelte-1alcgfk">Je vous remercie de me <span class="ai-example-typo svelte-1alcgfk">recevoire</span> demain matin.<span class="ai-caret svelte-1alcgfk"></span></div> <div class="hs-tooltip svelte-1alcgfk"><div class="hs-tt-line hs-tt-line--selected svelte-1alcgfk"><span class="hs-tt-spark svelte-1alcgfk">✨</span> <span class="hs-tt-eq svelte-1alcgfk">Je vous remercie de me</span> <span class="hs-tt-corr svelte-1alcgfk">recevoir</span> <span class="hs-tt-eq svelte-1alcgfk">demain matin.</span> <span class="hs-tt-shortcut svelte-1alcgfk">⌥1</span></div> <div class="hs-tt-hint svelte-1alcgfk">Tab pour accepter</div> <div class="hs-tt-info svelte-1alcgfk">Llama 3.2 3B · Advanced — ⏱ 0.21 s — 0.51 s</div></div></article> <article class="ai-example svelte-1alcgfk"><header class="ai-example-head svelte-1alcgfk"><span class="ai-example-num ai-example-num-mixed svelte-1alcgfk">C</span> <div class="svelte-1alcgfk"><h4 class="svelte-1alcgfk">Correction + prédiction</h4> <p class="ai-example-tag svelte-1alcgfk">Le modèle <strong class="svelte-1alcgfk">corrige</strong> ce que vous avez tapé <em class="svelte-1alcgfk">et</em> <strong class="svelte-1alcgfk">continue</strong> la phrase. Tout en une seule ligne, en couleurs.</p></div></header> <div class="ai-example-context svelte-1alcgfk">Le projet est <span class="ai-example-typo svelte-1alcgfk">paralèle</span> à <span class="ai-caret svelte-1alcgfk"></span></div> <div class="hs-tooltip svelte-1alcgfk"><div class="hs-tt-line hs-tt-line--selected svelte-1alcgfk"><span class="hs-tt-spark svelte-1alcgfk">✨</span> <span class="hs-tt-eq svelte-1alcgfk">Le projet est</span> <span class="hs-tt-corr svelte-1alcgfk">parallèle</span> <span class="hs-tt-eq svelte-1alcgfk">à</span> <span class="hs-tt-nw svelte-1alcgfk">celui de l’an dernier, mais avec un budget revu à la hausse.</span> <span class="hs-tt-shortcut svelte-1alcgfk">⌥1</span></div> <div class="hs-tt-line svelte-1alcgfk"><span class="hs-tt-eq hs-tt-eq--dim svelte-1alcgfk">Le projet est</span> <span class="hs-tt-corr hs-tt-corr--dim svelte-1alcgfk">parallèle</span> <span class="hs-tt-eq hs-tt-eq--dim svelte-1alcgfk">à</span> <span class="hs-tt-nw hs-tt-nw--dim svelte-1alcgfk">ceux que nous avons livrés en 2024.</span> <span class="hs-tt-shortcut hs-tt-shortcut--dim svelte-1alcgfk">⌥2</span></div> <div class="hs-tt-hint svelte-1alcgfk">⇧G + Tab    ◀    Tab =
								accepter    ▶    ⇧D + Tab</div> <div class="hs-tt-info svelte-1alcgfk">Mistral 7B · Advanced — ⏱ 0.34 s — 0.78 s</div></div> <p class="ai-example-foot svelte-1alcgfk">Un seul <kbd class="svelte-1alcgfk">Tab</kbd> insère la correction <strong class="svelte-1alcgfk">et</strong> la suite — vous écrivez
							80 caractères en appuyant sur 1 touche.</p></article> <p class="ai-text-small svelte-1alcgfk">Le code couleur des tooltips est entièrement personnalisable depuis le menu (ou
						désactivable si vous préférez l’affichage neutre).</p></div> <div class="ai-section svelte-1alcgfk"><h3 class="svelte-1alcgfk">5. Validez en une touche</h3> <p class="ai-text svelte-1alcgfk">Une suggestion vous plaît ? Une seule pression sur <kbd class="svelte-1alcgfk">Tab</kbd> et elle est insérée. Plusieurs
						suggestions ? Naviguez avec les flèches haut/bas, validez celle que vous voulez. Aucune souris,
						aucun pop-up à fermer.</p> <ul class="ai-shortcuts-list svelte-1alcgfk"><li class="svelte-1alcgfk"><kbd class="svelte-1alcgfk">Tab</kbd> — Valider la suggestion en surbrillance</li> <li class="svelte-1alcgfk"><kbd class="svelte-1alcgfk">↑</kbd> / <kbd class="svelte-1alcgfk">↓</kbd> — Naviguer entre les suggestions</li> <li class="svelte-1alcgfk"><kbd class="svelte-1alcgfk">Échap</kbd> ou <strong class="svelte-1alcgfk">n’importe quelle frappe</strong> — Ignorer</li></ul></div></section> <section class="trackpad svelte-1alcgfk"><header class="section-head svelte-1alcgfk"><p class="kicker svelte-1alcgfk" style="color:#00838f">Gestes trackpad · macOS</p> <h2 class="svelte-1alcgfk">Le clavier ne fait pas tout. Le trackpad non plus, seul.</h2> <p class="lead svelte-1alcgfk">Le driver intercepte les <strong class="svelte-1alcgfk">gestes bruts</strong> du trackpad (pas les événements de
						souris) et les associe à n’importe quelle action. Plus de zigzag main droite/clavier — vos
						doigts restent là où ils sont.</p></header> <div class="trackpad-grid svelte-1alcgfk"><!--[-->`);
    const each_array_18 = ensure_array_like(trackpadGestures);
    for (let $$index_18 = 0, $$length = each_array_18.length; $$index_18 < $$length; $$index_18++) {
      let g = each_array_18[$$index_18];
      $$renderer2.push(`<article class="trackpad-card svelte-1alcgfk"${attr_style(`--accent:${stringify(g.color)};`)}><div class="trackpad-meta svelte-1alcgfk"><span class="trackpad-fingers svelte-1alcgfk">${escape_html(g.fingers)}</span> <span class="trackpad-type svelte-1alcgfk">${escape_html(g.type)}</span></div> <div class="trackpad-action svelte-1alcgfk">${escape_html(g.defaut)}</div> <p class="trackpad-note svelte-1alcgfk">${escape_html(g.note)}</p></article>`);
    }
    $$renderer2.push(`<!--]--></div> <div class="trackpad-callout svelte-1alcgfk"><h3 class="svelte-1alcgfk">Tap 3 doigts = définition instantanée</h3> <p class="svelte-1alcgfk">Posez 3 doigts sur un mot dans n’importe quel texte (Safari, Mail, Pages, Slack, VS
						Code…) : sa définition apparaît dans une popover. <strong class="svelte-1alcgfk">C’est le geste le plus utilisé d’`);
    ErgoptiPlus($$renderer2);
    $$renderer2.push(`<!----></strong> selon nos métriques internes — plus rapide qu’ouvrir un onglet vers un dictionnaire.</p></div> <div class="trackpad-extras svelte-1alcgfk"><h3 class="svelte-1alcgfk">Tout est réassignable</h3> <p class="svelte-1alcgfk">Le menu <em class="svelte-1alcgfk">Trackpad → Gestes</em> propose une liste déroulante par geste. Une trentaine
						d’actions sont fournies : navigation entre fenêtres, contrôle du volume, mots/lignes/paragraphes,
						copier/coller, captures d’écran, raccourcis applicatifs… Vous pouvez aussi pointer vers un
						script Lua pour des actions sur-mesure.</p></div></section> <section class="metrics svelte-1alcgfk"><header class="section-head svelte-1alcgfk"><p class="kicker svelte-1alcgfk" style="color:#00838f">Métriques de frappe</p> <h2 class="svelte-1alcgfk">Mesurer pour progresser.</h2> <p class="lead svelte-1alcgfk">Le keylogger interne (n’envoie rien dehors) compte les frappes, mots, déclenchements et
						bigrammes inconfortables. De quoi voir d’une semaine sur l’autre où vous gagnez.</p></header> <div class="metrics-grid svelte-1alcgfk"><!--[-->`);
    const each_array_19 = ensure_array_like(metrics);
    for (let $$index_19 = 0, $$length = each_array_19.length; $$index_19 < $$length; $$index_19++) {
      let m = each_array_19[$$index_19];
      $$renderer2.push(`<div class="metric-card svelte-1alcgfk"${attr_style(`--accent: ${stringify(m.accent)};`)}><div class="metric-label svelte-1alcgfk">${escape_html(m.label)}</div> <div class="metric-value svelte-1alcgfk">${escape_html(m.value)}</div> <div class="metric-delta svelte-1alcgfk">${escape_html(m.delta)}</div></div>`);
    }
    $$renderer2.push(`<!--]--></div></section> <section class="showcase svelte-1alcgfk"><header class="section-head svelte-1alcgfk"><p class="kicker svelte-1alcgfk">Configuration unifiée</p> <h2 class="svelte-1alcgfk">Un panneau. Tous vos délais et couleurs.</h2> <p class="lead svelte-1alcgfk">Le menu intégré (macOS et Windows) lit et écrit le même fichier <code class="svelte-1alcgfk">~/.config/ergopti_plus/hotstrings_config.toml</code>. Réglez une fois, profitez partout.</p></header> <div${attr_class(`mac-window os-${stringify(osStyle)}`, "svelte-1alcgfk")}><div class="chrome svelte-1alcgfk">`);
    {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<span class="chrome-title chrome-title--win svelte-1alcgfk">Délais et couleurs des hotstrings</span> <span class="win-buttons svelte-1alcgfk"><span class="win-btn svelte-1alcgfk" aria-hidden="true">─</span> <span class="win-btn svelte-1alcgfk" aria-hidden="true">▢</span> <span class="win-btn close svelte-1alcgfk" aria-hidden="true">✕</span></span>`);
    }
    $$renderer2.push(`<!--]--></div> <div class="mac-body svelte-1alcgfk"><div class="mac-toolbar svelte-1alcgfk"><button class="mac-btn svelte-1alcgfk">Tout en gris</button> <button class="mac-btn ghost svelte-1alcgfk">Tout réinitialiser</button> <span class="spacer svelte-1alcgfk"></span> <span class="mac-hint svelte-1alcgfk">édité dans <code class="svelte-1alcgfk">hotstrings_config.toml</code></span></div> <!--[-->`);
    const each_array_20 = ensure_array_like([
      {
        name: "Magic Key",
        delay: 2e3,
        color: "#e53935",
        sections: 4
      },
      {
        name: "Autocorrection",
        delay: 1e3,
        color: "#43a047",
        sections: 6
      },
      {
        name: "Roulements",
        delay: 500,
        color: "#fb8c00",
        sections: 5
      },
      { name: "SFBs", delay: 500, color: "#fb8c00", sections: 3 },
      { name: "Distances", delay: 500, color: "#fb8c00", sections: 4 },
      { name: "Personal", delay: 2e3, color: "#1e88e5", sections: 0 }
    ]);
    for (let $$index_20 = 0, $$length = each_array_20.length; $$index_20 < $$length; $$index_20++) {
      let row = each_array_20[$$index_20];
      $$renderer2.push(`<div class="mac-row svelte-1alcgfk"><span class="mac-swatch svelte-1alcgfk"${attr_style(`background:${stringify(row.color)}`)}></span> <span class="mac-name svelte-1alcgfk">${escape_html(row.name)}</span> <span class="mac-meta svelte-1alcgfk">${escape_html(row.sections)} section${escape_html(row.sections > 1 ? "s" : "")}</span> <span class="mac-delay svelte-1alcgfk">${escape_html(row.delay)} ms</span> <span class="mac-arrow svelte-1alcgfk">›</span></div>`);
    }
    $$renderer2.push(`<!--]--></div></div></section> <section class="custo svelte-1alcgfk"><header class="section-head svelte-1alcgfk"><p class="kicker svelte-1alcgfk">Tout sous votre contrôle</p> <h2 class="svelte-1alcgfk">Absolument tout est personnalisable. Et désactivable.</h2> <p class="lead svelte-1alcgfk"><strong class="svelte-1alcgfk">Aucune fonctionnalité n’est imposée.</strong> Chaque expansion, chaque tap-hold,
						chaque geste, chaque tooltip, chaque délai, chaque couleur peut être modifié, désactivé,
						réinitialisé. Vous décidez. Le menu est là pour vous mettre à l’aise — <strong class="svelte-1alcgfk">jamais pour vous piéger</strong>.</p></header> <div class="custo-pillars svelte-1alcgfk"><div class="custo-pillar svelte-1alcgfk"><span class="custo-pillar-num svelte-1alcgfk">1</span> <div class="svelte-1alcgfk"><h3 class="svelte-1alcgfk">Activez fonction par fonction</h3> <p class="svelte-1alcgfk">Chaque catégorie de hotstrings, chaque tap-hold, chaque geste trackpad a sa case à
								cocher. Démarrez avec 3 fonctions, ajoutez-en 2 le mois suivant, jamais
								d’obligation.</p></div></div> <div class="custo-pillar svelte-1alcgfk"><span class="custo-pillar-num svelte-1alcgfk">2</span> <div class="svelte-1alcgfk"><h3 class="svelte-1alcgfk">Réglez les valeurs</h3> <p class="svelte-1alcgfk">Délais, couleurs, modèle d’IA, raccourcis, prompt, longueur de contexte, apps
								ignorées, chemins de fichiers — chaque paramètre est exposé dans le menu, réversible
								d’un clic.</p></div></div> <div class="custo-pillar svelte-1alcgfk"><span class="custo-pillar-num svelte-1alcgfk">3</span> <div class="svelte-1alcgfk"><h3 class="svelte-1alcgfk">Réécrivez les hotstrings</h3> <p class="svelte-1alcgfk">Un trigger livré ne vous convient pas ? Modifiez la valeur dans le TOML, le driver
								recharge tout seul. Vous voulez en ajouter ? Le menu écrit le fichier pour vous.</p></div></div></div> <h3 class="custo-h3 svelte-1alcgfk">Quelques exemples de réglages disponibles</h3> <div class="custo-grid svelte-1alcgfk"><!--[-->`);
    const each_array_21 = ensure_array_like(personalizationCards);
    for (let $$index_21 = 0, $$length = each_array_21.length; $$index_21 < $$length; $$index_21++) {
      let c = each_array_21[$$index_21];
      $$renderer2.push(`<article class="custo-card svelte-1alcgfk"><div class="custo-icon svelte-1alcgfk">${escape_html(c.icon)}</div> <h3 class="svelte-1alcgfk">${escape_html(c.title)}</h3> <p class="svelte-1alcgfk">${html(c.body)}</p></article>`);
    }
    $$renderer2.push(`<!--]--></div></section> <section class="trust svelte-1alcgfk"><header class="section-head svelte-1alcgfk"><p class="kicker svelte-1alcgfk">Confiance par construction</p> <h2 class="svelte-1alcgfk">100 % local. 100 % open-source. 100 % gratuit.</h2> <p class="lead svelte-1alcgfk">Pas d’abonnement, pas d’extension à acheter, pas de publicité, pas de compte à créer,
						pas de télémétrie. Le code est lisible, auditable, modifiable.</p></header> <div class="trust-grid svelte-1alcgfk"><article class="trust-card svelte-1alcgfk"><div class="trust-icon svelte-1alcgfk" style="color:#43a047;">🔐</div> <h3 class="svelte-1alcgfk">Tout reste sur votre machine</h3> <p class="svelte-1alcgfk">Hotstrings, métriques de frappe, prédictions IA, gestes — chaque calcul est local.
							Aucun serveur n’est sollicité. Même les modèles d’IA tournent <strong class="svelte-1alcgfk">chez vous</strong>, via Ollama ou MLX. Une fois téléchargés, plus besoin d’internet.</p></article> <article class="trust-card svelte-1alcgfk"><div class="trust-icon svelte-1alcgfk" style="color:#1e88e5;">📂</div> <h3 class="svelte-1alcgfk">Code source ouvert</h3> <p class="svelte-1alcgfk">Le driver Hammerspoon (Lua), le driver AutoHotkey (AHK v2) et le site sont publiés sur
							GitHub, sous licence libre. Vous pouvez auditer, modifier, forker, contribuer. Le
							projet vit en public, par conception.</p></article> <article class="trust-card svelte-1alcgfk"><div class="trust-icon svelte-1alcgfk" style="color:#fb8c00;">💸</div> <h3 class="svelte-1alcgfk">Gratuit. Pour de bon.</h3> <p class="svelte-1alcgfk">Pas de freemium qui devient payant après 30 jours. Pas d’extension premium à
							débloquer. Pas de publicité dans le menu. Pas de don forcé. `);
    ErgoptiPlus($$renderer2);
    $$renderer2.push(`<!----> est et restera <strong class="svelte-1alcgfk">entièrement gratuit</strong>, sans limitation.</p></article> <article class="trust-card svelte-1alcgfk"><div class="trust-icon svelte-1alcgfk" style="color:#8e44ad;">🚫</div> <h3 class="svelte-1alcgfk">Aucune télémétrie</h3> <p class="svelte-1alcgfk">Le driver ne fait <strong class="svelte-1alcgfk">aucun appel réseau</strong> en dehors du backend LLM local que
							vous avez choisi. Pas de "anonymized usage data", pas de crash report envoyé en arrière-plan,
							pas de pixel de tracking. Vous pouvez littéralement le faire tourner hors-ligne.</p></article></div></section> <section class="ergopti-banner svelte-1alcgfk"><header class="section-head ergopti-head svelte-1alcgfk"><p class="kicker ergopti-kicker svelte-1alcgfk">⚠ Spécifique à la disposition Ergopti</p> <h2 class="svelte-1alcgfk">Exclusivités Ergopti.</h2> <p class="lead svelte-1alcgfk">Tout ce qui précède fonctionne sur <strong class="svelte-1alcgfk">n’importe quelle disposition</strong> (AZERTY, QWERTY, Bépo…). Les fonctionnalités ci-dessous, en revanche, exploitent les <strong class="svelte-1alcgfk">positions exactes des touches d’Ergopti</strong> — virgule sous l’index, ★ à la place
						du J, voyelles accentuées dédiées. Sur un autre layout, elles n’auraient aucun sens.</p> <p class="lead lead-em svelte-1alcgfk">C’est <em class="svelte-1alcgfk">l’autre moitié</em> du gain. Si vous adoptez Ergopti, vous récupérez tout cela
						gratuitement.</p></header> <div class="hotdetail-grid svelte-1alcgfk"><!--[-->`);
    const each_array_22 = ensure_array_like(ergoptiBigrams);
    for (let $$index_24 = 0, $$length = each_array_22.length; $$index_24 < $$length; $$index_24++) {
      let cat = each_array_22[$$index_24];
      $$renderer2.push(`<article class="hotdetail-card svelte-1alcgfk"${attr_style(`--accent: ${stringify(cat.color)};`)}><header class="hotdetail-head svelte-1alcgfk"><span class="hotdetail-dot svelte-1alcgfk"></span> <div class="svelte-1alcgfk"><h3 class="svelte-1alcgfk">${escape_html(cat.title)}</h3> <p class="hotdetail-tag svelte-1alcgfk">${escape_html(cat.tag)}</p></div></header> <p class="hotdetail-lead svelte-1alcgfk">${escape_html(cat.lead)}</p> <ul class="hotdetail-rows svelte-1alcgfk"><!--[-->`);
      const each_array_23 = ensure_array_like(cat.rows);
      for (let $$index_23 = 0, $$length2 = each_array_23.length; $$index_23 < $$length2; $$index_23++) {
        let r = each_array_23[$$index_23];
        $$renderer2.push(`<li class="svelte-1alcgfk"><div class="hot-trig svelte-1alcgfk"><span class="hot-key svelte-1alcgfk">${escape_html(r.trig)}</span> <span class="hot-arrow svelte-1alcgfk">→</span> <span class="hot-out svelte-1alcgfk">${escape_html(r.out)}</span></div> <div class="hot-context svelte-1alcgfk"><!--[-->`);
        const each_array_24 = ensure_array_like(r.words);
        for (let $$index_22 = 0, $$length3 = each_array_24.length; $$index_22 < $$length3; $$index_22++) {
          let w = each_array_24[$$index_22];
          $$renderer2.push(`<span class="hot-word svelte-1alcgfk">${escape_html(w)}</span>`);
        }
        $$renderer2.push(`<!--]--></div></li>`);
      }
      $$renderer2.push(`<!--]--></ul></article>`);
    }
    $$renderer2.push(`<!--]--></div> <div class="ergopti-block svelte-1alcgfk"><h3 class="ergopti-h3 svelte-1alcgfk">Des touches qui font le travail de plusieurs</h3> <p class="ergopti-text svelte-1alcgfk">`);
    ErgoptiPlus($$renderer2);
    $$renderer2.push(`<!----> tire profit de séquences statistiquement absentes du français
						pour placer des raccourcis qui ne créent jamais de faux positifs.</p> <article class="super-card svelte-1alcgfk"><h4 class="svelte-1alcgfk">La touche <kbd class="svelte-1alcgfk">,</kbd> + voyelle remplace le <kbd class="svelte-1alcgfk">j</kbd></h4> <p class="svelte-1alcgfk">Le <kbd class="svelte-1alcgfk">j</kbd> minuscule devient la touche magique <kbd class="glow svelte-1alcgfk">★</kbd>. À sa
							place, la virgule prend le relais : la séquence <code class="svelte-1alcgfk">,</code> + voyelle est
							inexistante en français (<code class="svelte-1alcgfk">,</code> est toujours suivi d’un espace), donc on la
							détourne pour produire un <code class="svelte-1alcgfk">j</code>.</p> <div class="super-grid super-grid-tight svelte-1alcgfk"><!--[-->`);
    const each_array_25 = ensure_array_like(commaVowels);
    for (let $$index_25 = 0, $$length = each_array_25.length; $$index_25 < $$length; $$index_25++) {
      let c = each_array_25[$$index_25];
      $$renderer2.push(`<div class="suffix-row svelte-1alcgfk"><span class="hs-key svelte-1alcgfk">${escape_html(c.keys)}</span> <span class="hs-arrow svelte-1alcgfk">→</span> <span class="hs-out svelte-1alcgfk">${escape_html(c.out)}</span></div>`);
    }
    $$renderer2.push(`<!--]--></div></article> <article class="super-card svelte-1alcgfk"><h4 class="svelte-1alcgfk">La touche <kbd class="svelte-1alcgfk">,</kbd> + consonne pour un layout 1DFH</h4> <p class="svelte-1alcgfk">Les lettres rares (<kbd class="svelte-1alcgfk">z</kbd>, <kbd class="svelte-1alcgfk">k</kbd>, <kbd class="svelte-1alcgfk">q</kbd>, <kbd class="svelte-1alcgfk">ç</kbd>) sont
							accessibles via la virgule, donc plus à 1u du repos des doigts. Le mot <em class="svelte-1alcgfk">où</em> aussi
							— bonus, en deux frappes au lieu de trois.</p> <div class="super-grid super-grid-tight svelte-1alcgfk"><!--[-->`);
    const each_array_26 = ensure_array_like(commaConsonants);
    for (let $$index_26 = 0, $$length = each_array_26.length; $$index_26 < $$length; $$index_26++) {
      let c = each_array_26[$$index_26];
      $$renderer2.push(`<div class="suffix-row suffix-row-3col svelte-1alcgfk"><span class="hs-key svelte-1alcgfk">${escape_html(c.keys)}</span> <span class="hs-arrow svelte-1alcgfk">→</span> <span class="hs-out svelte-1alcgfk">${escape_html(c.out)}</span> <span class="hs-desc svelte-1alcgfk">${escape_html(c.note)}</span></div>`);
    }
    $$renderer2.push(`<!--]--></div></article> <div class="super-grid super-grid-2col svelte-1alcgfk"><article class="super-card svelte-1alcgfk"><h4 class="svelte-1alcgfk">Q + voyelle = QU automatique</h4> <p class="svelte-1alcgfk">En français, <kbd class="svelte-1alcgfk">q</kbd> + voyelle implique presque toujours un <kbd class="svelte-1alcgfk">u</kbd> caché.
								Tapez <code class="svelte-1alcgfk">qe</code>, <code class="svelte-1alcgfk">qi</code>, <code class="svelte-1alcgfk">qa</code> — le <code class="svelte-1alcgfk">u</code> s’insère seul.</p> <div class="super-mini svelte-1alcgfk"><span class="hs-key svelte-1alcgfk">qe</span><span class="hs-arrow svelte-1alcgfk">→</span><span class="hs-out svelte-1alcgfk">que</span> <span class="hs-key svelte-1alcgfk">qoi</span><span class="hs-arrow svelte-1alcgfk">→</span><span class="hs-out svelte-1alcgfk">quoi</span></div></article> <article class="super-card svelte-1alcgfk"><h4 class="svelte-1alcgfk">Touche <kbd class="svelte-1alcgfk">ù</kbd> = mot <em class="svelte-1alcgfk">où</em></h4> <p class="svelte-1alcgfk">La touche <kbd class="svelte-1alcgfk">ù</kbd> n’est utilisée <strong class="svelte-1alcgfk">que</strong> pour le mot <em class="svelte-1alcgfk">où</em>.
								Autant en faire le raccourci direct.</p> <div class="super-mini svelte-1alcgfk"><span class="hs-key svelte-1alcgfk">AltGr+W</span><span class="hs-arrow svelte-1alcgfk">→</span><span class="hs-out svelte-1alcgfk">où</span></div></article> <article class="super-card svelte-1alcgfk"><h4 class="svelte-1alcgfk">Touche <kbd class="svelte-1alcgfk">ê</kbd> = circonflexe en une frappe</h4> <p class="svelte-1alcgfk">Le bigramme le plus fréquent du circonflexe est <kbd class="deadkey svelte-1alcgfk">◌̂</kbd> + <kbd class="svelte-1alcgfk">e</kbd>. Une touche dédiée évite l’aller-retour. Pour <em class="svelte-1alcgfk">â</em>, <em class="svelte-1alcgfk">î</em>, <em class="svelte-1alcgfk">ô</em>, <em class="svelte-1alcgfk">û</em> : <code class="svelte-1alcgfk">êa</code>, <code class="svelte-1alcgfk">êi</code>, <code class="svelte-1alcgfk">êo</code>, <code class="svelte-1alcgfk">êu</code>.</p> <div class="super-mini svelte-1alcgfk"><span class="hs-key svelte-1alcgfk">ê</span><span class="hs-arrow svelte-1alcgfk">→</span><span class="hs-out svelte-1alcgfk">ê</span> <span class="hs-key svelte-1alcgfk">êa</span><span class="hs-arrow svelte-1alcgfk">→</span><span class="hs-out svelte-1alcgfk">â</span></div></article> <article class="super-card svelte-1alcgfk"><h4 class="svelte-1alcgfk">Apostrophe typographique automatique</h4> <p class="svelte-1alcgfk">Tapez <kbd class="svelte-1alcgfk">'</kbd> dans du texte, vous écrivez <kbd-output class="svelte-1alcgfk">’</kbd-output>. Tapez-la
								dans du code, elle reste droite. <strong class="svelte-1alcgfk">Aucun réglage à faire.</strong></p> <div class="super-mini svelte-1alcgfk"><span class="hs-key svelte-1alcgfk">l'ami</span><span class="hs-arrow svelte-1alcgfk">→</span><span class="hs-out svelte-1alcgfk">l’ami</span></div></article> <article class="super-card svelte-1alcgfk"><h4 class="svelte-1alcgfk">BackSpace à portée de pouce</h4> <p class="svelte-1alcgfk">La touche la plus utilisée du clavier (BackSpace) est dupliquée sur <kbd class="svelte-1alcgfk">"LAlt"</kbd>, juste sous la main. <kbd class="svelte-1alcgfk">Shift</kbd> + cette touche envoie <kbd class="svelte-1alcgfk">Delete</kbd>. <kbd class="svelte-1alcgfk">AltGr</kbd> + cette touche envoie <kbd class="svelte-1alcgfk">Ctrl</kbd>+<kbd class="svelte-1alcgfk">BackSpace</kbd> (efface un
								mot entier).</p></article> <article class="super-card svelte-1alcgfk"><h4 class="svelte-1alcgfk">Roulement <code class="svelte-1alcgfk">nt'</code> pour l’anglais</h4> <p class="svelte-1alcgfk"><code class="svelte-1alcgfk">nt'</code> devient <code class="svelte-1alcgfk">n’t</code> — la combinaison parfaite pour <em class="svelte-1alcgfk">don’t</em>, <em class="svelte-1alcgfk">won’t</em>, <em class="svelte-1alcgfk">can’t</em>. Majeur → annulaire → auriculaire au
								lieu de l’inverse, beaucoup plus confortable.</p></article></div></div> <div class="ergopti-block svelte-1alcgfk"><h3 class="ergopti-h3 svelte-1alcgfk">Suffixes en À — tapez 2, écrivez 5</h3> <p class="ergopti-text svelte-1alcgfk">La touche <kbd class="svelte-1alcgfk">à</kbd> n’est suivie que d’un espace ou d’une ponctuation en français
						(seuls <em class="svelte-1alcgfk">à, là, déjà</em> contiennent <kbd class="svelte-1alcgfk">à</kbd>). On en a profité pour caler dessus
						les suffixes les plus fréquents. Le suffixe <strong class="svelte-1alcgfk">-ement</strong> coûte normalement 5
						frappes : il en coûte <strong class="svelte-1alcgfk">2</strong>.</p> <div class="suffixes-grid svelte-1alcgfk"><!--[-->`);
    const each_array_27 = ensure_array_like(suffixesA);
    for (let $$index_27 = 0, $$length = each_array_27.length; $$index_27 < $$length; $$index_27++) {
      let s = each_array_27[$$index_27];
      $$renderer2.push(`<div class="suffix-row svelte-1alcgfk"><span class="hs-key svelte-1alcgfk">${escape_html(s.keys)}</span> <span class="hs-arrow svelte-1alcgfk">→</span> <span class="hs-out svelte-1alcgfk">${escape_html(s.out)}</span></div>`);
    }
    $$renderer2.push(`<!--]--></div></div> <div class="ergopti-block svelte-1alcgfk"><h3 class="ergopti-h3 svelte-1alcgfk">Symboles de programmation, en roulements confortables</h3> <p class="ergopti-text svelte-1alcgfk">Les combinaisons inconfortables (<code class="svelte-1alcgfk">=></code>, <code class="svelte-1alcgfk">!=</code>, <code class="svelte-1alcgfk">:=</code>, <code class="svelte-1alcgfk">&lt;/</code>, <code class="svelte-1alcgfk">=""</code>…) sont remappées en roulements vers l’intérieur,
						sur la home-row d’Ergopti. Ces emplacements précis n’existent que sur cette disposition.</p> <div class="symbols-grid svelte-1alcgfk"><!--[-->`);
    const each_array_28 = ensure_array_like(symbolRolls);
    for (let $$index_28 = 0, $$length = each_array_28.length; $$index_28 < $$length; $$index_28++) {
      let s = each_array_28[$$index_28];
      $$renderer2.push(`<div class="symbol-row svelte-1alcgfk"><span class="hs-key svelte-1alcgfk">${escape_html(s.trig)}</span> <span class="hs-arrow svelte-1alcgfk">→</span> <span class="hs-out svelte-1alcgfk">${escape_html(s.out)}</span> <span class="hs-desc svelte-1alcgfk">${escape_html(s.note)}</span></div>`);
    }
    $$renderer2.push(`<!--]--></div></div></section> <section class="agnostic svelte-1alcgfk"><header class="section-head svelte-1alcgfk"><p class="kicker svelte-1alcgfk">Compatibilité dispositions</p> <h2 class="svelte-1alcgfk">AZERTY, QWERTY, Bépo, Dvorak — tout fonctionne.</h2> <p class="lead svelte-1alcgfk">`);
    ErgoptiPlus($$renderer2);
    $$renderer2.push(`<!----> est <em class="svelte-1alcgfk">pensé</em> pour la disposition Ergopti, mais le
						driver agit sur le <strong class="svelte-1alcgfk">texte</strong> qui sort de votre clavier — pas sur la touche
						que vous appuyez. <strong class="svelte-1alcgfk">Aucun changement de layout n’est nécessaire.</strong></p></header> <div class="agnostic-row svelte-1alcgfk"><div class="agnostic-card svelte-1alcgfk"><h3 class="svelte-1alcgfk">Hotstrings et autocorrection</h3> <p class="svelte-1alcgfk">Tout fonctionne quel que soit votre layout, parce qu’ils opèrent sur le texte produit.
							Vos expansions <code class="svelte-1alcgfk">ct★</code>, <code class="svelte-1alcgfk">pex★</code>, <code class="svelte-1alcgfk">chatgpt</code>…
							déclencheront en AZERTY, QWERTY ou Bépo.</p></div> <div class="agnostic-card svelte-1alcgfk"><h3 class="svelte-1alcgfk">Tap-holds, CapsWord, layer navigation</h3> <p class="svelte-1alcgfk">Ces fonctions agissent sur le <em class="svelte-1alcgfk">code physique</em> de la touche (scancode), donc indépendantes
							du layout actif côté OS. Elles fonctionnent à l’identique sur tous les claviers.</p></div> <div class="agnostic-card svelte-1alcgfk"><h3 class="svelte-1alcgfk">Gestes trackpad et IA</h3> <p class="svelte-1alcgfk">Les gestes trackpad sont des événements multi-touch bruts : aucune dépendance clavier.
							L’IA prédit du texte, peu importe sur quelle touche vous l’avez tapé.</p></div></div> <p class="agnostic-foot svelte-1alcgfk"><strong class="svelte-1alcgfk">Notre recommandation :</strong> Ergopti + `);
    ErgoptiPlus($$renderer2);
    $$renderer2.push(`<!----> est la meilleure
					combinaison (la disposition tire profit des roulements et de la touche magique). Mais si vous
					restez sur votre layout actuel, vous récupérez quand même 70 % du gain.</p></section> <section class="platforms svelte-1alcgfk"><header class="section-head svelte-1alcgfk"><p class="kicker svelte-1alcgfk">Identique partout</p> <h2 class="svelte-1alcgfk">macOS et Windows, même expérience.</h2> <p class="lead svelte-1alcgfk">Le même fichier de hotstrings, les mêmes raccourcis, le même tooltip. Vous changez de
						machine, pas de réflexe.</p></header> <div class="compare-table-wrap svelte-1alcgfk"><table class="compare-table svelte-1alcgfk"><thead class="svelte-1alcgfk"><tr class="svelte-1alcgfk"><th class="compare-feature svelte-1alcgfk">Fonctionnalité</th><th class="compare-os svelte-1alcgfk"><i class="icon-appleinc svelte-1alcgfk"></i> <span class="compare-os-name svelte-1alcgfk">macOS</span> <span class="compare-os-driver svelte-1alcgfk">Hammerspoon</span></th><th class="compare-os svelte-1alcgfk"><i class="icon-windows svelte-1alcgfk"></i> <span class="compare-os-name svelte-1alcgfk">Windows</span> <span class="compare-os-driver svelte-1alcgfk">AutoHotkey v2</span></th></tr></thead><tbody class="svelte-1alcgfk"><!--[-->`);
    const each_array_29 = ensure_array_like(compareFeatures);
    for (let $$index_29 = 0, $$length = each_array_29.length; $$index_29 < $$length; $$index_29++) {
      let row = each_array_29[$$index_29];
      $$renderer2.push(`<tr class="svelte-1alcgfk"><td class="compare-feature svelte-1alcgfk">${escape_html(row.label)}</td><td${attr_class("compare-cell svelte-1alcgfk", void 0, { "no": !row.mac })}>${escape_html(row.mac ? "✅" : "❌")}</td><td${attr_class("compare-cell svelte-1alcgfk", void 0, { "no": !row.win })}>${escape_html(row.win ? "✅" : "❌")}</td></tr>`);
    }
    $$renderer2.push(`<!--]--></tbody></table></div></section> <section class="final-cta svelte-1alcgfk"><div class="cta-card svelte-1alcgfk"><h2 class="svelte-1alcgfk">Passez à la vitesse supérieure.</h2> <p class="svelte-1alcgfk">Téléchargez le driver pour votre OS, et tapez <code class="svelte-1alcgfk">ct★</code>.</p> <div class="hero-cta svelte-1alcgfk"><a${attr_class(clsx("btn btn-primary"), "svelte-1alcgfk")}${attr("href", urlAhkExe())}${attr("download", false)}><i class="icon-autohotkey svelte-1alcgfk"></i><span class="svelte-1alcgfk">Windows (AHK)</span></a> <a${attr_class(clsx("btn btn-secondary"), "svelte-1alcgfk")}${attr("href", urlMacosApp())}${attr("download", false)}><i class="icon-hammerspoon svelte-1alcgfk"></i><span class="svelte-1alcgfk">macOS (HS)</span></a> <a class="btn btn-secondary svelte-1alcgfk"${attr("href", urlKanata())}${attr("download", false)}><i class="icon-linux svelte-1alcgfk"></i><span class="svelte-1alcgfk">Linux (kanata.kbd)</span></a></div> <p class="cta-sub svelte-1alcgfk"><a href="utilisation" class="cta-link svelte-1alcgfk">Installer la disposition clavier →</a></p></div></section></div></main></div>`);
  });
}
export {
  _page as default
};
