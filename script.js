document.addEventListener('DOMContentLoaded', () => {

    // --- BIBLIOTHÈQUE DE QUIZ ---
    // C'est ici que vous ajouterez vos futurs modules.
    const allQuizzes = {

        //Module 01

        'M01': {
    title: 'MEO2-M01 : Etude de faisabilité d\'opportunités',
    questions: [
        {
            question: "Comment est également appelée l'étude d'opportunité ?",
            options: { a: "Plan d'affaires", b: "Analyse de marché", c: "Business case", d: "Rapport annuel" },
            reponse: "c",
            explication: "L'étude d'opportunité, aussi appelée analyse d'opportunité ou note d'opportunité, est également connue sous le nom de 'business case'."
        },
        {
            question: "Quelle est la principale différence entre une étude d'opportunité et une étude de faisabilité ?",
            options: { a: "Il n'y a aucune différence", b: "L'étude d'opportunité évalue en plus les résultats attendus", c: "L'étude de faisabilité est plus courte", d: "L'étude d'opportunité ne concerne que les aspects financiers" },
            reponse: "b",
            explication: "L'étude d'opportunité va au-delà de la faisabilité (l'opportunité est-elle réalisable ?) en y ajoutant une évaluation des résultats attendus."
        },
        {
            question: "Lequel de ces éléments n'est PAS un objectif principal de l'étude de faisabilité ?",
            options: { a: "L'identification des ressources nécessaires", b: "La rédaction des statuts de l'entreprise", c: "L'établissement de différents scénarios", d: "La détermination des conditions de réussite" },
            reponse: "b",
            explication: "La rédaction des statuts intervient dans la phase de création juridique de l'entreprise, bien après l'étude d'opportunité qui vise à valider l'idée."
        },
        {
            question: "Combien d'étapes communes principales composent une étude d'opportunité pertinente ?",
            options: { a: "Deux étapes", b: "Trois étapes", c: "Cinq étapes", d: "Sept étapes" },
            reponse: "c",
            explication: "Les principales étapes sont : 1. Définition du problème, 2. Analyse de la situation, 3. Définition de l'état souhaité, 4. Etude des scénarios, 5. Choix de l'option."
        },
        {
            question: "Dans l'analyse de la situation, quel critère est décrit comme 'à satisfaire obligatoirement pour la résolution du problème' ?",
            options: { a: "Souhaitable", b: "Facultatif", c: "Optionnel", d: "Obligatoire/Requis" },
            reponse: "d",
            explication: "Le critère 'Obligatoire/Requis' doit impérativement être satisfait pour que la solution au problème soit viable."
        },
        {
            question: "Quel outil d'analyse N'est PAS cité pour l'analyse de la situation ?",
            options: { a: "Matrice SWOT", b: "Analyse PESTEL", c: "Diagramme de Gantt", d: "Diagramme d'Ishikawa" },
            reponse: "c",
            explication: "Le diagramme de Gantt est un outil de planification de projet, tandis que SWOT, PESTEL et Ishikawa sont des outils d'analyse de situation."
        },
        {
            question: "Lors de l'étude des scénarios possibles, combien d'options au minimum est-il recommandé de présenter ?",
            options: { a: "Une seule option", b: "Deux options", c: "Trois options", d: "Cinq options" },
            reponse: "c",
            explication: "Il est recommandé de présenter au moins trois options ou scénarios pour permettre un choix éclairé et comparatif."
        },
        {
            question: "Quelle analyse est considérée comme un excellent outil pour la définition des options ou scénarios ?",
            options: { a: "L'analyse financière", b: "L'analyse SWOT", c: "L'analyse des risques", d: "L'analyse concurrentielle" },
            reponse: "b",
            explication: "L'analyse SWOT (Forces, Faiblesses, Opportunités, Menaces) est un excellent outil pour définir et évaluer les différentes options stratégiques."
        },
        {
            question: "Laquelle de ces contraintes n'est pas directement citée comme une contrainte majeure de l'étude d'opportunités ?",
            options: { a: "Légales et règlementaires", b: "Techniques", c: "Managériales", d: "Financières" },
            reponse: "c",
            explication: "Le cours cite les contraintes légales, techniques, financières et économiques comme les principales à considérer dans une étude d'opportunités."
        },
        {
            question: "Quels sont les quatre critères essentiels pour l'évaluation des opportunités ?",
            options: { a: "Coûts, délais, qualité, ressources", b: "Marketing, ventes, finance, RH", c: "Coûts, bénéfices, cohérence stratégique, difficulté de mise en œuvre", d: "Technologie, innovation, concurrence, marché" },
            reponse: "c",
            explication: "Les quatre critères clés pour évaluer une opportunité sont les coûts, les bénéfices, la cohérence stratégique et les difficultés de mise en œuvre."
        },
        {
            question: "Selon le critère du rapport coûts-bénéfices, quel projet est généralement accepté ?",
            options: { a: "Un projet avec un rapport égal ou supérieur à 1", b: "Un projet avec un rapport inférieur à 1", c: "Un projet avec un rapport égal à 0", d: "Un projet avec un rapport négatif" },
            reponse: "a",
            explication: "Un projet est jugé acceptable si son rapport bénéfice-coût est égal ou supérieur à 1, signifiant que les bénéfices sont au moins égaux aux coûts."
        },
        {
            question: "Le développement d'opportunités sans lien avec la stratégie globale de l'entreprise aboutit généralement à quoi ?",
            options: { a: "Un succès rapide", b: "Des échecs", c: "Une croissance modérée", d: "Une réorientation stratégique" },
            reponse: "b",
            explication: "Le cours souligne que le développement d'opportunités sans concordance avec la stratégie globale de l'entreprise mène généralement à des échecs."
        },
        {
            question: "Qu'est-ce que la 'force motrice' d'une entreprise ?",
            options: { a: "Le capital financier de l'entreprise", b: "L'élément catalyseur qui oriente ses choix stratégiques", c: "Le nombre d'employés", d: "Le conseil d'administration" },
            reponse: "b",
            explication: "La force motrice est l'élément catalyseur propre à une entreprise qui oriente ses choix en matière de produits, clients et marchés futurs."
        },
        {
            question: "Une entreprise orientée 'concept de produit' se caractérise par quoi ?",
            options: { a: "Le ciblage d'un seul type de client", b: "La fourniture d'un seul produit avec des dérivés possibles", c: "L'utilisation d'un seul canal de distribution", d: "L'investissement massif en équipement" },
            reponse: "b",
            explication: "Une entreprise dont la force motrice est le concept de produit se concentre sur la fourniture d'un seul produit principal et ses futurs dérivés."
        },
        {
            question: "L'absence de similitude entre une opportunité et les domaines de l'entreprise traduit quoi ?",
            options: { a: "Une forte cohérence stratégique", b: "Une faible cohérence stratégique", c: "Un potentiel de diversification", d: "Une innovation de rupture" },
            reponse: "b",
            explication: "L'absence de similitude entre l'opportunité et l'activité actuelle de l'entreprise indique une faible cohérence stratégique."
        },
        {
            question: "Le degré de difficulté de mise en œuvre d'une opportunité croît en fonction de quoi ?",
            options: { a: "Du budget alloué", b: "Du nombre de changements à apporter", c: "De la taille de l'entreprise", d: "De la situation du marché" },
            reponse: "b",
            explication: "Le degré de difficulté de mise en œuvre augmente avec le nombre de changements nécessaires à la réalisation de l'opportunité."
        },
        {
            question: "Dans la grille d'analyse complète, comment est qualifiée une opportunité avec un coût réduit, un bénéfice élevé, une forte cohérence et une facilité de mise en œuvre ?",
            options: { a: "Probable", b: "Risqué", c: "Possible", d: "Excellent" },
            reponse: "d",
            explication: "Une opportunité présentant ces caractéristiques est classée dans la case A, qualifiée d'excellente, car elle est la meilleure possible."
        },
        {
            question: "Comment sont qualifiées les opportunités des cases G, H, et I de la grille d'analyse ?",
            options: { a: "Probables", b: "Possibles", c: "Risquées", d: "Mitigées" },
            reponse: "c",
            explication: "Les opportunités dans les cases G, H, I sont jugées risquées à mettre en œuvre en raison de leurs faibles niveaux de bénéfices et de cohérence stratégique."
        },
        {
            question: "Pour une opportunité qualifiée de 'mitigée' (case D), que peut-on envisager ?",
            options: { a: "L'abandonner immédiatement", b: "La lancer sans modification", c: "Des actions pour réduire les coûts et les difficultés", d: "Attendre une meilleure conjoncture" },
            reponse: "c",
            explication: "Pour les opportunités 'mitigées', des actions peuvent être envisagées pour réduire les coûts de réalisation et les difficultés de mise en œuvre."
        },
        {
            question: "La première étape du développement d'une opportunité consiste à faire quoi ?",
            options: { a: "Identifier les facteurs critiques", b: "Établir un plan de mise en œuvre", c: "Bâtir des scénarios (meilleur et pire des cas)", d: "Chercher le financement" },
            reponse: "c",
            explication: "La première étape du développement est de bâtir des scénarios en prévoyant les meilleurs et les pires résultats possibles pour l'opportunité."
        },
        {
            question: "Dans l'analyse du rapport risque/gain, un coefficient de +5 correspond à un gain de quel niveau ?",
            options: { a: "Faible", b: "Relatif", c: "Significatif", d: "Élevé" },
            reponse: "d",
            explication: "Selon la grille de pondération, un coefficient de +5 représente un niveau de gain 'Élevé'."
        },
        {
            question: "Dans l'analyse du rapport risque/gain, un coefficient de -5 correspond à un risque de quel niveau ?",
            options: { a: "Désastreux", b: "Considérable", c: "Significatif", d: "Faible" },
            reponse: "a",
            explication: "Selon la grille de pondération, un coefficient de -5 représente un niveau de risque 'Désastreux'."
        },
        {
            question: "Selon la technique d'interprétation du rapport risque/gain, que doit-on faire d'une opportunité avec une côte entre -1 et +1 ?",
            options: { a: "La mettre en œuvre prioritairement", b: "L'abandonner car son impact est minimal", c: "La revoir en profondeur", d: "Chercher plus de financement" },
            reponse: "b",
            explication: "Les opportunités avec une côte entre -1 et +1 ont un impact minimal et sont donc à abandonner."
        },
        {
            question: "Qu'est-ce qu'un facteur critique dans le développement d'une opportunité ?",
            options: { a: "Uniquement ce qui peut causer le pire scénario", b: "Uniquement ce qui peut causer le meilleur scénario", c: "Tout ce qui peut causer le meilleur ou le pire scénario", d: "Un membre important de l'équipe projet" },
            reponse: "c",
            explication: "Le facteur critique est tout élément qui peut influencer l'issue vers le meilleur ou le pire des scénarios envisagés."
        },
        {
            question: "Laquelle de ces propositions est un exemple de facteur critique technique ?",
            options: { a: "Permanence du marché", b: "Disponibilité des compétences techniques", c: "Impact sur les parts de marché", d: "Calcul du cash-flow" },
            reponse: "b",
            explication: "La disponibilité des compétences techniques ou scientifiques requises est un facteur critique appartenant à la catégorie 'Facteurs techniques'."
        },
        {
            question: "Lequel de ces éléments appartient aux 'Facteurs de stabilité' ?",
            options: { a: "Probabilité et effets des baisses du marché", b: "Potentiel de croissance à long terme", c: "Rendement prévu (ROI)", d: "Adéquation des ressources à la recherche" },
            reponse: "a",
            explication: "La probabilité et les effets des baisses du marché sont un facteur critique lié à la stabilité de l'opportunité."
        },
        {
            question: "La 'Possibilité d'obtenir un brevet' est un facteur critique de quelle catégorie ?",
            options: { a: "Facteurs financiers", b: "Facteurs de production", c: "Facteurs techniques", d: "Protection" },
            reponse: "d",
            explication: "La possibilité d'obtenir un brevet et le caractère unique du produit sont des facteurs liés à la 'Protection'."
        },
        {
            question: "Pour réussir la mise en œuvre, sur quoi l'accent doit-il être mis ?",
            options: { a: "Uniquement sur la réalisation du meilleur scénario", b: "Uniquement sur l'évitement du pire scénario", c: "Réunir les chances pour le meilleur et freiner la réalisation du pire", d: "Se concentrer sur la communication" },
            reponse: "c",
            explication: "La réussite de la mise en œuvre implique de travailler à la fois à maximiser les chances de succès (meilleur scénario) et à prévenir les causes d'échec (pire scénario)."
        },
        {
            question: "Quelle est la différence entre une action préventive et une action d'incitation ?",
            options: { a: "Aucune, ce sont des synonymes", b: "L'action préventive empêche une cause, l'action d'incitation assure sa réalisation", c: "L'action d'incitation coûte plus cher", d: "L'action préventive est pour le court terme, l'incitation pour le long terme" },
            reponse: "b",
            explication: "Contrairement aux actions préventives qui empêchent une cause négative, les actions d'incitation visent à assurer la réalisation effective de la cause d'une opportunité."
        },
        {
            question: "Utiliser des panneaux 'défense de fumer' est un exemple de quelle type d'action ?",
            options: { a: "Action corrective", b: "Action de secours", c: "Action préventive", d: "Action d'incitation" },
            reponse: "c",
            explication: "C'est une mesure préventive qui vise à éliminer une cause future d'un problème (incendie, maladies)."
        },
        {
            question: "Installer des extincteurs est un exemple de quelle type d'action ?",
            options: { a: "Action d'incitation", b: "Action de secours", c: "Action préventive", d: "Action corrective" },
            reponse: "b",
            explication: "C'est une action de secours qui vise à atténuer les effets futurs d'un problème (un départ de feu) sans en empêcher la cause."
        },
        {
            question: "Distribuer gratuitement des publications par des éditeurs est un exemple de quelle action ?",
            options: { a: "Action d'incitation", b: "Action préventive", c: "Action de secours", d: "Action d'exploitation" },
            reponse: "a",
            explication: "C'est une action d'incitation visant à assurer la réalisation d'une cause d'opportunité (faire connaître les auteurs pour générer des ventes futures)."
        },
        {
            question: "Que visent les actions d'exploitation ?",
            options: { a: "À empêcher la cause d'un problème", b: "À atténuer les effets d'un problème", c: "À augmenter les bénéfices provenant des effets d'une opportunité", d: "À assurer la réalisation de la cause d'une opportunité" },
            reponse: "c",
            explication: "Les actions d'exploitation ciblent l'augmentation des bénéfices découlant des effets potentiels d'une opportunité."
        },
        {
            question: "À quoi doit aboutir l'identification des actions à prendre ?",
            options: { a: "À un rapport financier", b: "À l'établissement d'une feuille de travail", c: "Au recrutement d'un chef de projet", d: "À une campagne marketing" },
            reponse: "b",
            explication: "L'identification des différentes actions doit aboutir à l'établissement d'une feuille de travail qui synthétise les facteurs critiques et les actions correspondantes."
        },
        {
            question: "Le plan de mise en œuvre est bâti essentiellement à partir de quoi ?",
            options: { a: "Du budget disponible", b: "Des facteurs critiques identifiés lors du développement", c: "De l'organigramme de l'entreprise", d: "De l'analyse de la concurrence" },
            reponse: "b",
            explication: "Le plan de mise en œuvre est une étape importante bâtie essentiellement à partir des facteurs critiques identifiés précédemment."
        },
        {
            question: "Lequel de ces éléments n'est pas cité comme faisant partie de l'élaboration du plan de mise en œuvre ?",
            options: { a: "Réalisation d'étude de faisabilité", b: "Réalisation de prototype et essaimage", c: "Audit comptable de l'entreprise", d: "Lancement, distribution et commercialisation" },
            reponse: "c",
            explication: "L'audit comptable n'est pas une étape du plan de mise en œuvre d'un nouveau produit/service, qui inclut la faisabilité, le prototypage et le lancement."
        },
        {
            question: "À qui est légué le livrable de l'étude d'opportunité en cas d'issue favorable ?",
            options: { a: "Au service marketing", b: "Aux actionnaires", c: "À l'équipe de gestion du projet", d: "Au service juridique" },
            reponse: "c",
            explication: "En cas de décision favorable, le livrable est transmis à l'équipe de gestion du projet qui s'en servira comme base pour la mise en œuvre."
        },
        {
            question: "Une entreprise orientée 'capacité de production' se caractérise par quoi ?",
            options: { a: "Un ciblage de clients âgés", b: "La vente en ligne", c: "Un gros investissement en matière d'équipement", d: "Une aptitude à inventer des technologies" },
            reponse: "c",
            explication: "La force motrice 'capacité de production' se traduit par un investissement majeur en équipement, comme dans une cimenterie par exemple."
        },
        {
            question: "Quelle est la conclusion d'une situation marquée par un risque élevé (ex: -5) et une légère amélioration (ex: +1) ?",
            options: { a: "Absence de risque et légère amélioration", b: "Risque relatif et légère amélioration", c: "Risque et amélioration significative", d: "Risque élevé et légère amélioration" },
            reponse: "d",
            explication: "Cette combinaison indique une situation finale où le risque encouru est très élevé pour un gain potentiel très faible."
        },
        {
            question: "L'évaluation de la cohérence stratégique se fait en l'absence d'une force motrice claire en faisant quoi ?",
            options: { a: "En demandant l'avis des clients", b: "En analysant les rapports financiers", c: "En répondant à des questions sur les composantes de base", d: "En copiant la stratégie des concurrents" },
            reponse: "c",
            explication: "En absence d'une force motrice claire, l'évaluation se fait en répondant à des questions sur les composantes de base (produit, marché, clients, etc.)."
        }
    ]
},
        
        //Module 02

    'M02': {
    title: 'MEO-M02 : Processus de recherche d\'opportunités',
    questions: [
        {
            question: "Selon le cours, à quelle conception de l'économie la notion d'opportunité est-elle principalement liée ?",
            options: { a: "La conception classique", b: "La conception marxiste", c: "La conception néoclassique", d: "La conception keynésienne" },
            reponse: "c",
            explication: "Le cours précise que la notion d'opportunité est un concept lié à la conception néoclassique de l'économie, caractérisée par l'asymétrie de l'information."
        },
        {
            question: "Parmi ces affirmations sur l'opportunité, laquelle est considérée comme inexacte par le cours ?",
            options: { a: "Elle doit correspondre à un besoin du marché", b: "Elle se trouve au cœur du processus entrepreneurial", c: "C'est une occasion de satisfaire un besoin nouveau ou insatisfait", d: "Elle est un concept lié à la conception classique de l'économie" },
            reponse: "d",
            explication: "L'affirmation inexacte est que l'opportunité est liée à la conception classique. Le cours la lie explicitement à la conception néoclassique."
        },
        {
            question: "Quelle approche considère l'opportunité comme une réalité objective qui existe indépendamment de l'individu ?",
            options: { a: "La perspective subjectiviste", b: "La perspective objectiviste", c: "La perspective constructiviste", d: "La perspective personnelle" },
            reponse: "b",
            explication: "La perspective objectiviste considère l'opportunité comme une réalité objective, dont l'identification dépend de l'information disponible et de la vigilance de l'entrepreneur."
        },
        {
            question: "L'approche subjectiviste de l'opportunité dépend principalement de quels facteurs ?",
            options: { a: "De la disponibilité de l'information et des ressources", b: "Des lois du marché et de la concurrence", c: "De l'imagination, de la personnalité et des modes de vie de l'entrepreneur", d: "Des indicateurs économiques et financiers" },
            reponse: "c",
            explication: "L'approche subjectiviste considère l'opportunité comme une construction sociale qui dépend principalement de l'imagination et de la personnalité de l'entrepreneur."
        },
        {
            question: "Laquelle de ces dispositions n'est PAS citée comme favorable à la détection d'opportunités ?",
            options: { a: "L'esprit critique", b: "L'ouverture d'esprit", c: "La curiosité intellectuelle", d: "La rigueur financière" },
            reponse: "d",
            explication: "Le cours met l'accent sur trois dispositions essentielles : l'esprit critique, l'ouverture d'esprit et la curiosité intellectuelle."
        },
        {
            question: "Identifier les tendances avant les concurrents et juger des bienfaits des offres actuelles relève de quelle disposition ?",
            options: { a: "L'ouverture d'esprit", b: "La créativité", c: "L'esprit critique", d: "La curiosité intellectuelle" },
            reponse: "c",
            explication: "Ces actions relèvent de l'esprit critique, qui permet d'établir des constats et de repérer des besoins nouveaux ou insatisfaits."
        },
        {
            question: "Accepter les savoir-faire externes et être à l'écoute des collaborateurs, clients et fournisseurs relève de :",
            options: { a: "L'esprit critique", b: "L'ouverture d'esprit", c: "La curiosité intellectuelle", d: "L'analyse concurrentielle" },
            reponse: "b",
            explication: "Cela correspond à l'ouverture d'esprit, qui nécessite d'accepter les apports externes et de rester attentif aux autres."
        },
        {
            question: "Selon le cours, la détection des opportunités repose sur la vigilance dans combien de domaines clés ?",
            options: { a: "Un seul : la vie professionnelle", b: "Deux : la vie économique et sociale", c: "Trois : la vie économique, professionnelle et quotidienne", d: "Quatre : la technologie, la finance, le marketing et les RH" },
            reponse: "c",
            explication: "La détection des opportunités nécessite une vigilance régulière dans au moins trois domaines clés : la vie économique, professionnelle et quotidienne."
        },
        {
            question: "Laquelle de ces sources n'est PAS un moyen d'observation de la vie économique et sociale ?",
            options: { a: "Les médias et le Web", b: "La tendance des jeunes", c: "Les technologies numériques", d: "Les routines personnelles de travail" },
            reponse: "d",
            explication: "Les routines personnelles de travail relèvent de l'observation de la vie professionnelle, et non de la vie économique et sociale au sens large."
        },
        {
            question: "Qui constitue la première source pour générer des opportunités dans le cadre de la vie professionnelle ?",
            options: { a: "Les concurrents", b: "Le personnel salarié", c: "Les fournisseurs", d: "Les clients" },
            reponse: "d",
            explication: "Le cours est clair sur ce point : 'Les clients constituent la première source pour générer des opportunités'."
        },
        {
            question: "L'affirmation 'Les fournisseurs constituent les principaux détecteurs des carences des produits sur le marché' est-elle correcte ?",
            options: { a: "Vrai, ils ont la meilleure vue d'ensemble", b: "Faux, ce sont les clients qui sont la première source", c: "Vrai, car ils connaissent les matières premières", d: "Faux, ce rôle revient aux concurrents" },
            reponse: "b",
            explication: "Cette affirmation est fausse. Le cours identifie les clients comme la première source pour détecter les carences et les atouts des produits."
        },
        {
            question: "L'instauration d'un système de brainstorming avec les équipes est une pratique recommandée pour générer des idées à partir de quelle source ?",
            options: { a: "Des clients", b: "Des concurrents", c: "Du personnel salarié", d: "Des fournisseurs" },
            reponse: "c",
            explication: "L'implication de l'ensemble du personnel, par exemple via le brainstorming, est une pratique efficace pour faire générer d'importantes opportunités."
        },
        {
            question: "La détection des opportunités découle uniquement de l'observation de la vie économique, sociale et professionnelle.",
            options: { a: "Vrai, ce sont les seuls domaines pertinents", b: "Faux, il manque l'observation de la vie quotidienne", c: "Vrai, car la vie quotidienne est incluse dans la vie sociale", d: "Faux, il manque l'observation de la vie politique" },
            reponse: "b",
            explication: "Cette affirmation est fausse car elle est incomplète. Le cours insiste sur trois domaines d'observation, incluant explicitement la vie quotidienne."
        },
        {
            question: "Le processus de détection d'opportunités comporte trois étapes principales. Laquelle n'en fait PAS partie ?",
            options: { a: "La perception des besoins du marché", b: "La recherche de financement", c: "L'identification d'une adéquation entre besoins et solutions", d: "La création d'un concept commercial" },
            reponse: "b",
            explication: "Les trois étapes sont la perception des besoins, l'identification de l'adéquation, et la création du concept commercial. La recherche de financement vient plus tard."
        },
        {
            question: "À l'origine de chaque opportunité, qu'est-ce qui est considéré comme la première phase du processus de détection ?",
            options: { a: "La perception de l'idée", b: "L'étude de marché", c: "La rédaction du plan d'affaires", d: "La formation de l'équipe" },
            reponse: "a",
            explication: "À l'origine de chaque opportunité existe une idée, et sa perception correspond à la première phase du processus de détection."
        },
        {
            question: "L'environnement interne de l'entreprise est-il le seul pourvoyeur de potentielles solutions à un problème identifié ?",
            options: { a: "Oui, car les meilleures solutions viennent de l'intérieur", b: "Non, les solutions peuvent aussi venir de l'observation des concurrents ou des clients", c: "Oui, si l'entreprise dispose d'un bon service R&D", d: "Non, mais c'est la source la plus fiable" },
            reponse: "b",
            explication: "Cette affirmation est fausse. Les sources de solutions sont multiples et incluent l'environnement externe (clients, concurrence, technologies, etc.)."
        },
        {
            question: "En plus des besoins insatisfaits, qu'est-ce qui peut également conduire à l'émergence de nouvelles opportunités ?",
            options: { a: "La perception des ressources sous-utilisées", b: "Les directives gouvernementales", c: "La baisse des taux d'intérêt", d: "Les rapports annuels des concurrents" },
            reponse: "a",
            explication: "Le cours signale qu'une perception des ressources sous-utilisées (infrastructures, personnel, technologies) peut également conduire à d'excellentes opportunités."
        },
        {
            question: "L'histoire de la création d'Uber est utilisée pour illustrer une opportunité née de quel constat ?",
            options: { a: "D'une nouvelle technologie de géolocalisation", b: "D'une frustration et d'un besoin non satisfait (trouver un taxi)", c: "D'un excès de chauffeurs de taxi à Paris", d: "D'un modèle économique innovant venu d'Asie" },
            reponse: "b",
            explication: "Uber est né d'une grande frustration de ses fondateurs qui ne parvenaient pas à trouver facilement un taxi, illustrant une opportunité issue d'un besoin insatisfait."
        },
        {
            question: "Quelle est la deuxième étape du processus de détection, après la perception des besoins ?",
            options: { a: "Le lancement du produit", b: "L'évaluation des opportunités", c: "La création du concept commercial", d: "La recherche de l'adéquation entre besoins et ressources" },
            reponse: "d",
            explication: "Après la perception des besoins vient la recherche d'une adéquation entre ces besoins et les ressources d'un marché."
        },
        {
            question: "Dans la quête d'opportunités, sur quoi l'entrepreneur doit-il mettre l'accent pour se distinguer de la concurrence ?",
            options: { a: "Vendre à bas prix", b: "Copier les produits existants", c: "La création de valeur ajoutée supérieure", d: "Optimiser uniquement les ressources internes" },
            reponse: "c",
            explication: "L'entrepreneur doit mettre l'accent sur la création de valeur ajoutée supérieure pour distinguer son offre et la valoriser par rapport à la concurrence."
        },
        {
            question: "La transformation de l'opportunité en produit ou service nouveau se fait durant quelle étape ?",
            options: { a: "La perception des besoins", b: "La création de concept commercial", c: "L'évaluation des opportunités", d: "L'analyse des ressources" },
            reponse: "b",
            explication: "C'est lors de la création du concept commercial que l'opportunité se transforme en un produit ou service concret."
        },
        {
            question: "Quelle fonction de l'entreprise est principalement responsable de la détection des opportunités et de l'identification des besoins des consommateurs ?",
            options: { a: "La fonction Production", b: "La fonction Design", c: "La fonction Financière", d: "La fonction Marketing" },
            reponse: "d",
            explication: "La fonction Marketing permet la détection des opportunités, la définition du marché et l'identification des besoins du consommateur."
        },
        {
            question: "La planification du produit débute par quel processus ?",
            options: { a: "L'allocation des ressources", b: "La sélection des projets", c: "L'identification des opportunités par l'observation", d: "La formation d'une équipe pluridisciplinaire" },
            reponse: "c",
            explication: "La planification débute par le processus d'identification des opportunités à travers l'observation de la vie économique, sociale, professionnelle et quotidienne."
        },
        {
            question: "Qu'est-ce que la spécification d'un produit ?",
            options: { a: "La liste des prix de ses composants", b: "Son nom commercial et son logo", c: "La traduction des besoins du client en description précise de la valeur ajoutée", d: "Le manuel d'utilisation du produit" },
            reponse: "c",
            explication: "La spécification est la traduction des besoins du client en une description précise de ce que le produit peut apporter en termes de valeur ajoutée."
        },
        {
            question: "Le 'Produit Minimum Viable' (PMV) est un concept étudié lors de quelle phase du développement ?",
            options: { a: "L'émergence de l'idée", b: "La commercialisation", c: "Le prototypage et essais", d: "La planification du projet" },
            reponse: "c",
            explication: "Une attention particulière doit être portée sur le Produit Minimum Viable (PMV) durant la phase de prototypage et d'essais."
        },
        {
            question: "Selon le Grand Larousse, l'innovation est un processus qui va de la naissance d'une idée jusqu'à :",
            options: { a: "Son approbation par un comité", b: "Sa matérialisation (lancement d'un produit)", c: "L'obtention d'un brevet", d: "La première vente" },
            reponse: "b",
            explication: "La définition citée indique que le processus d'innovation va de la naissance de l'idée à sa matérialisation, comme le lancement d'un produit."
        },
        {
            question: "Lequel de ces éléments n'est PAS une innovation selon Schumpeter ?",
            options: { a: "Lancer de nouveaux produits", b: "Trouver de nouveaux moyens de vente", c: "Découvrir une loi scientifique fondamentale", d: "Organiser la production avec de nouvelles méthodes" },
            reponse: "c",
            explication: "L'innovation n'est pas la découverte scientifique elle-même, mais l'application industrielle et commerciale d'une idée ou d'une connaissance."
        },
        {
            question: "Un changement dans la manière d'utiliser un produit, comme le rasoir jetable, est une innovation de quel type ?",
            options: { a: "Innovation technologique", b: "Innovation sociale", c: "Innovation d'usage", d: "Innovation de procédé" },
            reponse: "c",
            explication: "C'est une innovation d'usage, car elle introduit une nouvelle facilité ou manière d'utiliser le produit pour répondre à un besoin."
        },
        {
            question: "Le commerce équitable est donné en exemple pour quel type d'innovation ?",
            options: { a: "L'innovation de produit", b: "L'innovation sociale", c: "L'innovation technologique", d: "L'innovation d'usage" },
            reponse: "b",
            explication: "Le commerce équitable est un exemple d'innovation sociale, car il élabore des réponses nouvelles à des besoins sociaux et répond à un intérêt collectif."
        },
        {
            question: "L'introduction d'une chaîne de montage ou de la vente sur Internet est une innovation de :",
            options: { a: "Procédé ou processus", b: "Produit", c: "Commercialisation", d: "Modèle d'affaires" },
            reponse: "a",
            explication: "Il s'agit d'une innovation de procédé, car elle améliore l'efficience des méthodes de production ou de distribution."
        },
        {
            question: "L'e-commerce ou le mobile money sont des exemples d'innovation de :",
            options: { a: "Produit", b: "Procédé", c: "Commercialisation", d: "Organisationnelle" },
            reponse: "c",
            explication: "Ce sont des innovations de commercialisation (ou marketing) car elles introduisent des changements majeurs dans la présentation, le conditionnement ou la promotion."
        },
        {
            question: "Les services de microcrédit sont un exemple d'innovation de :",
            options: { a: "Produit", b: "Modèle d'affaires", c: "Procédé", d: "Technologique" },
            reponse: "b",
            explication: "Le microcrédit est une innovation de modèle d'affaires car il réorganise la structure des revenus et des coûts, transformant radicalement un marché."
        },
        {
            question: "Comment est qualifiée une innovation qui modifie profondément les habitudes, comme l'imprimante 3D à tatouer ?",
            options: { a: "Incrémentale", b: "D'adaptation", c: "Majeure ou de rupture", d: "D'assemblage" },
            reponse: "c",
            explication: "Il s'agit d'une innovation majeure ou de rupture, car elle est révolutionnaire et change complètement les habitudes."
        },
        {
            question: "Une innovation qui consiste en des perfectionnements apportés à des produits existants, comme les différentes versions de la Golf de Volkswagen, est dite :",
            options: { a: "Radicale", b: "Incrémentale ou mineure", c: "De rupture", d: "Sociale" },
            reponse: "b",
            explication: "C'est une innovation incrémentale, car elle améliore simplement des produits existants sans révolutionner les habitudes."
        },
        {
            question: "L'utilisation de perfuseurs comme système de goutte à goutte en agriculture est un exemple d'innovation :",
            options: { a: "De rupture", b: "Incrémentale", c: "D'assemblage", d: "D'adaptation" },
            reponse: "d",
            explication: "C'est une innovation d'adaptation, car elle duplique ou adapte une solution connue d'un secteur (médical) vers un autre (agriculture)."
        },
        {
            question: "Un camping-car, qui associe une voiture et une maison, est un exemple d'innovation :",
            options: { a: "D'adaptation", b: "D'assemblage", c: "De rupture", d: "Sociale" },
            reponse: "b",
            explication: "C'est une innovation d'assemblage, car elle associe plusieurs offres ou composants existants pour en créer une nouvelle."
        },
        {
            question: "Selon l'enquête de CB Insight, quelle est la principale cause d'échec des startups ?",
            options: { a: "Le manque de financement", b: "Les problèmes d'équipe", c: "La non-concordance de leurs offres aux besoins du marché", d: "Une mauvaise stratégie marketing" },
            reponse: "c",
            explication: "L'enquête a révélé que 42% des startups échouent à cause de la non-concordance de leurs offres avec les besoins réels du marché."
        },
        {
            question: "D'après l'étude de Guenrich Alshuller sur 40 000 brevets, quelle est la part des inventions qui sont des améliorations de produits existants ?",
            options: { a: "Environ 4%", b: "Environ 32%", c: "Environ 45%", d: "Plus de 95%" },
            reponse: "d",
            explication: "L'étude révèle que plus de 95% des inventions sont des améliorations ou des évolutions de produits existants (45% amélioration + 32% changement qualitatif + 19% changement radical)."
        },
        {
            question: "Dans la typologie des processus d'innovation, comment est décrit le '1er type' de situation ?",
            options: { a: "Problème connu, solutions inconnues", b: "Problème et solutions inconnus", c: "Problème et solutions connus", d: "Problème inconnu, solutions connues" },
            reponse: "c",
            explication: "Le 1er type correspond à une situation où le problème à résoudre et les solutions à apporter sont connus, rendant le chemin direct et bien balisé."
        },
        {
            question: "Trouver un vaccin pour une nouvelle maladie comme le COVID-19 correspond à quel type de processus d'innovation ?",
            options: { a: "1er type : Problème et solutions connus", b: "2ème type : Problème connu, solutions inconnues", c: "3ème type : Problème inconnu, solutions connues", d: "4ème type : Problème et solutions inconnus" },
            reponse: "b",
            explication: "Cela correspond au 2ème type, où le problème (la maladie) est connu, mais les solutions (le vaccin) ne le sont pas et nécessitent de la créativité."
        },
        {
            question: "La télémédecine, où une technologie existe sans destination prédéfinie, correspond à quel processus d'innovation ?",
            options: { a: "1er type : Création d'entreprise", b: "2ème type : Résolution de problème", c: "3ème type : Transfert de technologie", d: "4ème type : Rêveurs" },
            reponse: "c",
            explication: "C'est le 3ème type : le problème n'est pas clairement identifié mais les capacités (technologie) existent. Cela correspond à un défi de transfert de technologie."
        },
        {
            question: "Dans le tableau de synthèse, que représente la situation où le problème est 'Inconnu' et la solution est 'Inconnue' ?",
            options: { a: "Création d'entreprise", b: "Résolution de problème", c: "Transfert de technologie", d: "Rêveurs" },
            reponse: "d",
            explication: "Cette situation, où problème et solution sont inconnus, est celle des 'Rêveurs' et nécessite une forte dose de créativité pour créer quelque chose qui n'a jamais existé."
        },
        {
            question: "Le processus de développement d'un produit va de l'idéation initiale jusqu'à quelle étape finale ?",
            options: { a: "La validation du prototype", b: "La définition du produit", c: "Le lancement final sur le marché", d: "L'obtention du brevet" },
            reponse: "c",
            explication: "Le cours indique que ce processus va de l'idéation initiale du concept au lancement final sur le marché."
        },
        {
            question: "Laquelle de ces affirmations sur l'innovation est correcte selon le cours ?",
            options: { a: "L'innovation est synonyme d'invention", b: "L'innovation se limite uniquement à la technique", c: "L'innovation est un processus dynamique d'application d'une idée", d: "L'innovation est la même chose que la recherche-développement" },
            reponse: "c",
            explication: "Le cours précise que l'innovation est un processus dynamique se traduisant par l'application industrielle et commerciale d'une idée, et qu'elle n'est ni une invention, ni une découverte."
        },
        {
            question: "Quel est l'objectif principal de la phase de validation et de test d'un prototype ?",
            options: { a: "Vérifier la rentabilité du produit", b: "S'assurer qu'il répond aux exigences de départ", c: "Protéger l'idée avec un brevet", d: "Définir la stratégie de communication" },
            reponse: "b",
            explication: "Le prototype doit être soumis à une phase de validation et de test afin de s'assurer qu'il répond aux exigences et aspirations initialement définies."
        }
    ]
},

        //Module 03

    'M03': {
    title: 'MEO-M03 : Propriété Intellectuelle',
    questions: [
        {
            question: "La propriété intellectuelle se divise en deux grandes branches principales. Lesquelles ?",
            options: { a: "Brevets et Marques", b: "Droit d'auteur et Droit des sociétés", c: "Propriété industrielle et Propriété littéraire et artistique", d: "Propriété publique et Propriété privée" },
            reponse: "c",
            explication: "La propriété intellectuelle comporte deux branches : la propriété industrielle (inventions, marques, dessins...) et la propriété littéraire et artistique (droit d'auteur, droits connexes)."
        },
        {
            question: "Lequel de ces éléments n'est PAS une création de la propriété industrielle ?",
            options: { a: "Un brevet d'invention", b: "Une marque de commerce", c: "Un roman", d: "Un dessin ou modèle industriel" },
            reponse: "c",
            explication: "Un roman est une œuvre de l'esprit protégée par la propriété littéraire et artistique (droit d'auteur), et non par la propriété industrielle."
        },
        {
            question: "Quelle est la condition principale pour qu'une œuvre littéraire ou artistique soit protégée par le droit d'auteur ?",
            options: { a: "Elle doit être déposée auprès de l'OAPI", b: "Elle doit avoir un succès commercial", c: "Elle doit être originale", d: "Elle doit être publiée" },
            reponse: "c",
            explication: "Contrairement à la propriété industrielle, le droit d'auteur protège une œuvre dès sa création, sans formalité, à la seule condition qu'elle soit originale."
        },
        {
            question: "Dans l'espace OAPI, quelle est la durée de protection d'un brevet d'invention ?",
            options: { a: "10 ans", b: "15 ans", c: "20 ans", d: "25 ans" },
            reponse: "c",
            explication: "La durée de protection pour un brevet d'invention est de 20 ans, non renouvelable, à compter de la date de dépôt de la demande."
        },
        {
            question: "La protection conférée par un brevet d'invention est valable dans le monde entier.",
            options: { a: "Vrai", b: "Faux", c: "Vrai, mais seulement pour les grandes entreprises", d: "Faux, sauf si on paie une taxe supplémentaire" },
            reponse: "b",
            explication: "Cette affirmation est fausse. Un brevet est un droit territorial : il n'est valable que dans le pays ou la région où il a été délivré (ex: l'espace OAPI)."
        },
        {
            question: "Quelle est la durée de protection initiale d'un dessin et modèle industriel dans l'espace OAPI ?",
            options: { a: "5 ans", b: "10 ans", c: "15 ans", d: "20 ans" },
            reponse: "a",
            explication: "La protection initiale pour un dessin ou modèle industriel est de 5 ans, renouvelable pour deux périodes consécutives de 5 ans chacune."
        },
        {
            question: "Quelle est la durée de protection maximale totale pour un dessin et modèle industriel ?",
            options: { a: "5 ans", b: "10 ans", c: "15 ans", d: "Illimitée" },
            reponse: "c",
            explication: "La durée maximale de protection est de 15 ans (une période initiale de 5 ans + deux renouvellements de 5 ans)."
        },
        {
            question: "Le monopole d'exploitation d'une marque est temporaire et fixé à 20 ans.",
            options: { a: "Vrai", b: "Faux", c: "Vrai, mais renouvelable une fois", d: "Faux, il est de 25 ans" },
            reponse: "b",
            explication: "C'est faux. Une marque est protégée pour 10 ans, mais son enregistrement peut être renouvelé indéfiniment, ce qui en fait un droit potentiellement perpétuel."
        },
        {
            question: "La marque sert à protéger le propriétaire d'un produit.",
            options: { a: "Vrai", b: "Faux", c: "Vrai, elle protège son identité", d: "Faux, elle ne protège que le logo" },
            reponse: "b",
            explication: "C'est faux. Une marque ne protège pas une personne, mais un signe (nom, logo...) qui sert à distinguer les produits ou services de cette personne de ceux de ses concurrents."
        },
        {
            question: "Les contrats de cession et de concession de licence sont les seuls moyens d'exploitation d'un objet protégé.",
            options: { a: "Vrai", b: "Faux", c: "Vrai, pour les brevets uniquement", d: "Faux, il y a aussi l'apport en société" },
            reponse: "b",
            explication: "C'est faux. Le titulaire peut aussi exploiter directement son droit lui-même ou l'apporter comme actif dans une société."
        },
        {
            question: "Lequel de ces éléments ne peut PAS être breveté ?",
            options: { a: "Un nouveau procédé de fabrication chimique", b: "Une découverte scientifique comme une loi de la physique", c: "Un nouveau type de moteur", d: "Une nouvelle composition pharmaceutique" },
            reponse: "b",
            explication: "Les découvertes, théories scientifiques et méthodes mathématiques sont explicitement exclues de la brevetabilité."
        },
        {
            question: "Quelle condition signifie qu'une invention ne doit pas découler de manière évidente de l'état de la technique pour un homme de métier ?",
            options: { a: "La nouveauté", b: "L'application industrielle", c: "L'activité inventive", d: "La publication" },
            reponse: "c",
            explication: "C'est la définition de l'activité inventive (ou non-évidence). L'invention ne doit pas être une simple déduction logique de ce qui existait déjà."
        },
        {
            question: "Lequel de ces droits fait partie des droits moraux de l'auteur ?",
            options: { a: "Le droit de reproduction", b: "Le droit de paternité", c: "Le droit de suite", d: "Le droit de radiodiffusion" },
            reponse: "b",
            explication: "Le droit de paternité (le droit d'être reconnu comme l'auteur) est un droit moral, perpétuel et inaliénable. Les autres sont des droits patrimoniaux."
        },
        {
            question: "Les droits patrimoniaux de l'auteur (droit de reproduction, etc.) sont perpétuels.",
            options: { a: "Vrai", b: "Faux", c: "Vrai, s'ils sont transmis aux héritiers", d: "Faux, sauf pour les œuvres musicales" },
            reponse: "b",
            explication: "C'est faux. Contrairement aux droits moraux, les droits patrimoniaux sont temporaires et s'éteignent généralement un certain nombre d'années après la mort de l'auteur."
        },
        {
            question: "Qui sont les titulaires des droits voisins (ou droits connexes) ?",
            options: { a: "Uniquement les auteurs de romans", b: "Les artistes-interprètes, les producteurs et les organismes de radiodiffusion", c: "Les éditeurs de logiciels", d: "Les inventeurs de brevets" },
            reponse: "b",
            explication: "Les droits voisins protègent ceux qui aident à diffuser l'œuvre au public : les artistes-interprètes, les producteurs de phonogrammes et les organismes de radiodiffusion."
        },
        {
            question: "Dans le système OAPI, le droit au brevet est attribué selon quel principe ?",
            options: { a: "Au premier inventeur", b: "À celui qui commercialise le premier", c: "Au premier déposant", d: "À l'entreprise la plus grande" },
            reponse: "c",
            explication: "Le système OAPI, comme la plupart des systèmes dans le monde, applique le principe du 'premier déposant' : le droit appartient à la première personne qui dépose la demande."
        },
        {
            question: "Une invention réalisée par un salarié dans le cadre de son contrat de travail ('invention de mission') appartient :",
            options: { a: "Toujours au salarié", b: "Toujours à l'employeur", c: "Est partagée à 50/50", d: "À l'État" },
            reponse: "b",
            explication: "Les inventions de mission appartiennent de facto à l'employeur, bien que le salarié puisse avoir droit à une rémunération supplémentaire."
        },
        {
            question: "La protection par modèle d'utilité (ou 'petit brevet') a des conditions plus strictes que le brevet d'invention.",
            options: { a: "Vrai", b: "Faux", c: "Les conditions sont identiques", d: "Vrai, car la durée est plus courte" },
            reponse: "b",
            explication: "C'est faux. Les conditions sont moins strictes, notamment en ce qui concerne l'exigence d'activité inventive. La durée de protection est également plus courte (10 ans)."
        },
        {
            question: "Lequel de ces signes ne peut PAS être déposé comme marque ?",
            options: { a: "Un nom de fantaisie (ex: 'Kodak')", b: "Un logo distinctif", c: "Un terme générique (ex: la marque 'Chaise' pour vendre des chaises)", d: "Une combinaison de couleurs spécifique" },
            reponse: "c",
            explication: "Un signe ne peut pas être une marque s'il sert à désigner le produit lui-même dans le langage courant. Il doit être distinctif et non descriptif."
        },
        {
            question: "Quelle est la durée de protection d'un certificat d'obtention végétale (COV) ?",
            options: { a: "10 ans", b: "15 ans", c: "20 ans", d: "25 ans" },
            reponse: "d",
            explication: "La protection d'une nouvelle variété végétale par un COV dure 25 ans à compter de sa délivrance."
        },
        {
            question: "Qu'est-ce qu'une indication géographique ?",
            options: { a: "L'adresse de l'entreprise sur l'étiquette", b: "Un signe qui identifie un produit comme originaire d'un lieu précis avec une qualité due à ce lieu", c: "Un plan pour trouver le magasin", d: "Le nom du pays exportateur" },
            reponse: "b",
            explication: "Une indication géographique (ex: 'Champagne', 'Roquefort') lie un produit à une origine géographique qui lui confère ses qualités ou sa réputation."
        },
        {
            question: "La contrefaçon est définie comme :",
            options: { a: "Le fait de vendre moins cher qu'un concurrent", b: "Une atteinte à un droit de propriété intellectuelle (brevet, marque, etc.)", c: "Le dénigrement des produits d'un concurrent", d: "Le fait de ne pas payer ses impôts" },
            reponse: "b",
            explication: "La contrefaçon est spécifiquement l'acte de violer un droit de propriété intellectuelle existant, par exemple en copiant un produit breveté."
        },
        {
            question: "La principale différence entre la contrefaçon et la concurrence déloyale est :",
            options: { a: "Il n'y a aucune différence", b: "La contrefaçon est civile, la concurrence déloyale est pénale", c: "La contrefaçon sanctionne une atteinte à un droit privatif (ex: brevet), la concurrence déloyale un manquement à la déontologie commerciale", d: "La contrefaçon ne concerne que les marques" },
            reponse: "c",
            explication: "L'action en contrefaçon protège un titre de PI (brevet, marque...). L'action en concurrence déloyale sanctionne des agissements fautifs (dénigrement, parasitisme) même en l'absence de titre."
        },
        {
            question: "La copie à l'identique d'un produit breveté est une contrefaçon de quel type ?",
            options: { a: "Partielle", b: "Par équivalence", c: "Servile", d: "Par perfectionnement" },
            reponse: "c",
            explication: "La reproduction à l'identique, sans aucune modification, est qualifiée de contrefaçon servile."
        },
        {
            question: "Pour obtenir une saisie-contrefaçon, il faut saisir le Président de quel tribunal ?",
            options: { a: "Le Tribunal de Commerce", b: "Le Tribunal Correctionnel", c: "Le Tribunal de Grande Instance", d: "Le Conseil des Prud'hommes" },
            reponse: "c",
            explication: "La requête pour obtenir une ordonnance de saisie-contrefaçon doit être présentée au Président du Tribunal de Grande Instance du lieu de la saisie."
        },
        {
            question: "Quel est le délai pour assigner le contrefacteur en justice après une saisie-contrefaçon, sous peine de nullité de la saisie ?",
            options: { a: "10 jours", b: "20 jours", c: "30 jours", d: "2 mois" },
            reponse: "a",
            explication: "Une fois la saisie-contrefaçon réalisée, le titulaire du droit doit assigner le contrefacteur en justice dans un délai de dix jours, sous peine de nullité de la saisie."
        },
        {
            question: "Le nom commercial protège le nom de l'entreprise en tant que personne morale.",
            options: { a: "Vrai", b: "Faux", c: "Vrai, il est identique à la dénomination sociale", d: "Faux, il protège le nom de l'établissement commercial" },
            reponse: "d",
            explication: "C'est faux. La dénomination sociale identifie la personne morale. Le nom commercial est le nom sous lequel est connu et exploité un établissement (un fonds de commerce)."
        },
        {
            question: "Quelle organisation internationale est en charge de la promotion de la protection de la propriété intellectuelle ?",
            options: { a: "L'OMC (Organisation Mondiale du Commerce)", b: "L'ONU (Organisation des Nations Unies)", c: "L'OMPI (Organisation Mondiale de la Propriété Intellectuelle)", d: "L'UNESCO" },
            reponse: "c",
            explication: "L'OMPI (WIPO en anglais) est l'institution des Nations Unies dédiée à la propriété intellectuelle."
        },
        {
            question: "L'Accord de Bangui régit la propriété intellectuelle dans quel cadre ?",
            options: { a: "Au niveau mondial", b: "Au niveau de l'Union Européenne", c: "Au sein des 17 états membres de l'OAPI", d: "Uniquement au Burkina Faso" },
            reponse: "c",
            explication: "L'Accord de Bangui est l'acte qui a créé l'OAPI (Organisation Africaine de la Propriété Intellectuelle) et qui sert de loi uniforme pour ses 17 états membres."
        },
        {
            question: "Lequel de ces actes est un droit patrimonial exclusif de l'auteur ?",
            options: { a: "Le droit au respect de l'œuvre", b: "Le droit de divulgation", c: "Le droit de reproduction", d: "Le droit de repentir" },
            reponse: "c",
            explication: "Le droit de reproduction est un droit patrimonial, car il concerne l'exploitation économique de l'œuvre. Les autres sont des droits moraux."
        },
        {
            question: "Une idée brillante pour un nouveau service peut-elle être protégée par le droit d'auteur ?",
            options: { a: "Oui, si elle est vraiment originale", b: "Non, le droit d'auteur protège l'expression de l'idée, pas l'idée elle-même", c: "Oui, en déposant un 'brevet d'idée'", d: "Non, seules les œuvres d'art sont protégées" },
            reponse: "b",
            explication: "Le droit d'auteur ne protège pas les idées, les concepts ou les méthodes. Il protège uniquement la forme originale dans laquelle ces idées sont exprimées (un texte, un dessin, un code source...)."
        },
        {
            question: "L'acronyme ADPIC (ou TRIPS en anglais) se rapporte à un accord sur la PI dans le cadre de quelle organisation ?",
            options: { a: "L'OAPI", b: "L'OMPI", c: "L'OMC", d: "L'Union Africaine" },
            reponse: "c",
            explication: "L'Accord sur les Aspects des Droits de Propriété Intellectuelle qui touchent au Commerce (ADPIC) est un accord international administré par l'Organisation Mondiale du Commerce (OMC)."
        },
        {
            question: "Une invention doit avoir une application industrielle pour être brevetable. Qu'est-ce que cela signifie ?",
            options: { a: "Elle doit pouvoir être vendue plus de 1000€", b: "Son objet peut être fabriqué ou utilisé dans tout genre d'industrie", c: "Elle doit être utile uniquement dans les grandes usines", d: "Elle doit être approuvée par le ministère de l'Industrie" },
            reponse: "b",
            explication: "L'application industrielle signifie que l'invention doit avoir une utilité pratique et pouvoir être fabriquée ou utilisée, sortant ainsi du domaine purement théorique."
        },
        {
            question: "Remplacer une vis par un clou dans un mécanisme breveté peut-il être considéré comme une contrefaçon ?",
            options: { a: "Non, car ce n'est pas une copie identique", b: "Oui, si le clou remplit la même fonction par un moyen équivalent", c: "Non, jamais", d: "Oui, mais uniquement si le clou est de la même couleur" },
            reponse: "b",
            explication: "Oui, cela peut être une 'contrefaçon par équivalence' si l'élément de remplacement (le clou), bien que différent, remplit la même fonction pour arriver à un résultat similaire."
        },
        {
            question: "Quelle est la durée de protection du droit d'auteur pour une personne physique ?",
            options: { a: "20 ans après la création", b: "Toute la vie de l'auteur", c: "Toute la vie de l'auteur et plusieurs dizaines d'années après sa mort", d: "Perpétuelle" },
            reponse: "c",
            explication: "Les droits patrimoniaux de l'auteur durent toute sa vie et se poursuivent au bénéfice de ses héritiers pendant une longue période après sa mort (ex: 70 ans dans de nombreux pays)."
        },
        {
            question: "Un secret d'affaire (ou secret de fabrique) est protégé par :",
            options: { a: "Un brevet automatique", b: "Le droit d'auteur", c: "Des mesures pour le garder secret et des lois contre la divulgation déloyale", d: "L'enregistrement au registre du commerce" },
            reponse: "c",
            explication: "Le secret d'affaire (ex: la recette du Coca-Cola) n'est pas protégé par un titre de PI comme un brevet, mais par le fait qu'il est gardé secret et par des actions en justice en cas de vol ou de divulgation."
        },
        {
            question: "Au Burkina Faso, quel organisme assure la gestion collective des droits d'auteur ?",
            options: { a: "L'OAPI", b: "La SNL/OAPI", c: "L'OMPI", d: "Le BBDA (Bureau Burkinabé du Droit d'Auteur)" },
            reponse: "d",
            explication: "Le cours cite l'exemple du Bureau Burkinabé du Droit d'Auteur (BBDA) comme l'organisme de gestion collective au Burkina Faso."
        },
        {
            question: "Le paiement annuel d'une taxe, appelée 'annuité', est nécessaire pour maintenir en vigueur quel titre de propriété industrielle ?",
            options: { a: "La marque", b: "Le droit d'auteur", c: "Le brevet d'invention", d: "L'indication géographique" },
            reponse: "c",
            explication: "Le maintien en vigueur d'un brevet est conditionné au paiement de taxes annuelles appelées annuités. Ne pas les payer entraîne la déchéance du brevet."
        },
        {
            question: "Le slogan 'Just Do It' de Nike est protégé en tant que :",
            options: { a: "Brevet", b: "Dessin et modèle", c: "Marque", d: "Droit d'auteur" },
            reponse: "c",
            explication: "Un slogan utilisé pour distinguer les produits ou services d'une entreprise est protégeable en tant que marque."
        },
        {
            question: "Une invention est considérée nouvelle si elle n'a jamais été divulguée au public de quelle manière ?",
            options: { a: "Uniquement par un écrit", b: "Uniquement lors d'une conférence", c: "Par aucun moyen, que ce soit écrit, oral ou par un usage", d: "Uniquement par la vente" },
            reponse: "c",
            explication: "La nouveauté est détruite par toute divulgation accessible au public, quelle que soit sa forme (publication, exposé, vente, usage...) avant la date de dépôt de la demande de brevet."
        }
    ]
},

        //Module 04

        'M04': {
    title: 'MEO-M04 : Gestion Axée sur les Résultats (GAR)',
    questions: [
        {
            question: "Qu'est-ce qu'un 'résultat' dans le contexte de la GAR ?",
            options: { a: "Uniquement la finalisation d'une tâche", b: "Un indicateur de performance d'un projet", c: "Un changement descriptible ou mesurable découlant d'une relation de cause à effet", d: "Les ressources financières dépensées pour un projet" },
            reponse: "c",
            explication: "Le cours définit un résultat comme 'un changement descriptible ou mesurable qui découle d'une relation de cause à effet'."
        },
        {
            question: "À qui le concept de Gestion Axée sur les Résultats (GAR) est-il attribué ?",
            options: { a: "Un Hollandais", b: "Un Britannique", c: "Un Américain, Peter Drucker", d: "Un Canadien" },
            reponse: "c",
            explication: "Le cours attribue le concept de GAR (Results-based Management) à l'américain Peter Drucker et son ouvrage de 1964 'managing for results'."
        },
        {
            question: "Selon le cours, que doit principalement exprimer l'énoncé d'un résultat ?",
            options: { a: "Une augmentation des revenus d'un groupe", b: "Une transformation dans les comportements", c: "Le changement réel dans le développement humain", d: "La liste des activités réalisées" },
            reponse: "c",
            explication: "Selon le test de connaissances, l'énoncé du résultat doit exprimer le changement réel dans le développement humain."
        },
        {
            question: "Quelle caractéristique n'appartient PAS aux critères d'un résultat bien formulé (SMART) ?",
            options: { a: "Spécifique", b: "Mesurable", c: "Ambitieux", d: "Temporel" },
            reponse: "c",
            explication: "Un résultat doit être Spécifique, Mesurable, Atteignable (réaliste), Pertinent et Temporel. Ambitieux n'est pas un des critères formels."
        },
        {
            question: "Comment définit-on une 'activité' dans la GAR ?",
            options: { a: "Un résultat intermédiaire", b: "Un ensemble d'effets", c: "Un ensemble de tâches planifiées et exécutées par une organisation", d: "L'impact final du projet" },
            reponse: "c",
            explication: "Une activité est un ensemble de tâches planifiées et exécutées par une organisation grâce à l'utilisation des ressources en vue de produire un résultat."
        },
        {
            question: "Les 'effets' sont des signes de changements obtenus à quelle échéance ?",
            options: { a: "À court terme (immédiats)", b: "À moyen terme", c: "À long terme", d: "Uniquement à la fin du projet" },
            reponse: "b",
            explication: "Les effets sont des changements obtenus à moyen terme suite à la mise en œuvre du projet ou programme."
        },
        {
            question: "L' 'impact' est un résultat qui se mesure à quelle échéance ?",
            options: { a: "À long terme", b: "À court terme", c: "Immédiatement après une activité", d: "Au milieu du projet" },
            reponse: "a",
            explication: "L'impact est un résultat à long terme sur le plan du développement, conséquence d'un ensemble d'extrants et d'effets."
        },
        {
            question: "La GAR est une approche qui se concentre de façon systématique sur quoi ?",
            options: { a: "La réalisation d'activités déterminées", b: "Les résultats, en optimisant l'utilisation des ressources", c: "Le respect strict du budget initial", d: "La satisfaction des bailleurs de fonds uniquement" },
            reponse: "b",
            explication: "La GAR est une approche qui se concentre de façon systématique sur les résultats, plutôt que vers la réalisation d'activités, en optimisant l'utilisation des ressources."
        },
        {
            question: "La GAR permet de décrire clairement les changements qu'un organisme veut produire en rapport avec quoi ?",
            options: { a: "Les opinions du directeur", b: "Les activités planifiées", c: "Les rapports financiers", d: "Les standards internationaux" },
            reponse: "b",
            explication: "La GAR permet de décrire clairement les changements qu'un organisme ou un projet veut produire, en rapport avec les activités planifiées."
        },
        {
            question: "La Gestion Axée sur les Résultats (GAR) repose sur combien de grands principes ?",
            options: { a: "Quatre (4)", b: "Cinq (5)", c: "Six (6)", d: "Dix (10)" },
            reponse: "c",
            explication: "La GAR repose sur six grands principes regroupés en deux groupes : ceux liés aux fondements (partenariat, participation, etc.) et ceux liés à l'application (simplicité, essai-erreur)."
        },
        {
            question: "Que signifie le principe de 'partenariat' dans la GAR ?",
            options: { a: "Les objectifs sont définis uniquement par les experts", b: "La mise en œuvre se fait sans consulter les bénéficiaires", c: "Il est essentiel que les résultats soient conjointement définis, négociés et acceptés", d: "Les partenaires ne sont impliqués qu'à la fin du projet" },
            reponse: "c",
            explication: "Le principe de partenariat stipule qu'il est essentiel que les résultats soient conjointement définis, négociés et acceptés par les parties prenantes pour assurer le succès."
        },
        {
            question: "Que signifie le principe de 'transparence' ?",
            options: { a: "Les rapports sont confidentiels", b: "Seuls les résultats positifs sont communiqués", c: "Les résultats et les indicateurs sont définis clairement", d: "Le compte rendu est transmis uniquement aux bailleurs" },
            reponse: "c",
            explication: "La transparence implique de définir clairement les résultats et les indicateurs correspondants, de façon à ce qu'ils soient facilement mesurables."
        },
        {
            question: "Le principe de 'simplicité' est lié à quoi ?",
            options: { a: "Aux fondements de la GAR", b: "Aux modes d'application de la GAR", c: "Aux fondements et à l'application de la GAR", d: "À la complexité des rapports financiers" },
            reponse: "b",
            explication: "Le cours classe la simplicité et l'essai-erreur comme des principes liés aux modes d'application de la GAR."
        },
        {
            question: "La chaîne de résultats est constituée par l'enchaînement de combien de niveaux de résultats ?",
            options: { a: "Deux niveaux : extrants et produits", b: "Trois niveaux : extrants, effets, impact", c: "Quatre niveaux : intrants, produits, effets, extrants", d: "Un seul niveau : l'impact final" },
            reponse: "b",
            explication: "La chaîne des résultats comprend l'enchaînement de trois niveaux de résultats : les extrants (immédiats), les effets (moyen terme) et l'impact (long terme)."
        },
        {
            question: "Qu'est-ce qu'un 'extrant' ?",
            options: { a: "Le produit direct et immédiat des activités réalisées", b: "Le changement de comportement des bénéficiaires", c: "L'amélioration durable de l'état d'une population", d: "Les ressources utilisées pour le projet" },
            reponse: "a",
            explication: "Les extrants sont des résultats immédiats qui sont le produit des activités réalisées (ex: 'personnel formé', 'curriculum amélioré')."
        },
        {
            question: "L'analyse du risque vise essentiellement à :",
            options: { a: "Réduire l'ampleur des risques", b: "Éliminer tous les risques", c: "Déterminer les probabilités que les conditions (hypothèses) ne se concrétisent pas", d: "Ignorer les risques pour avancer plus vite" },
            reponse: "c",
            explication: "L'analyse du risque vise essentiellement à déterminer les probabilités que les conditions identifiées (les hypothèses) ne se concrétisent pas."
        },
        {
            question: "Qu'est-ce que le Cadre de Mesure du Rendement (CMR) ?",
            options: { a: "Une unité de mesure de rendement", b: "Une méthode de collecte de données", c: "Un outil pour planifier la collecte systématique de données sur l'atteinte des résultats", d: "Un rapport financier" },
            reponse: "c",
            explication: "Le Cadre de Mesure du Rendement (CMR) est un outil qui sert à planifier de façon systématique la collecte de données sur le niveau d'atteinte des résultats."
        },
        {
            question: "Les hypothèses qui sous-tendent le passage des extrants aux effets présentent quel niveau de risque ?",
            options: { a: "Un niveau de risque assez élevé", b: "Un niveau de risque partiel", c: "Un niveau de risque inquiétant", d: "Aucun risque" },
            reponse: "a",
            explication: "Le passage des extrants (ex: formation) aux effets (ex: changement de pratique) dépend de facteurs externes, ce qui présente un niveau de risque assez élevé."
        },
        {
            question: "Qu'est-ce que le Cadre Logique ?",
            options: { a: "Une stratégie de gestion", b: "Un outil d'analyse et de programmation", c: "Un outil de planification qui présente de façon logique les objectifs d'un projet", d: "Un logiciel de comptabilité" },
            reponse: "c",
            explication: "Le cadre logique est un outil de planification qui permet de présenter de façon systématique et logique les objectifs d'un projet/programme."
        },
        {
            question: "Combien de phases essentielles la méthodologie de mise en œuvre de la GAR comporte-t-elle ?",
            options: { a: "Deux (2) phases", b: "Trois (3) phases", c: "Cinq (5) phases", d: "Une seule phase continue" },
            reponse: "b",
            explication: "La méthodologie de mise en œuvre comporte trois phases essentielles : Identification et planification, Élaboration et formulation, et Suivi-évaluation."
        },
        {
            question: "Dans l'identification des problèmes et des besoins, quel outil peut-on utiliser ?",
            options: { a: "La méthode de l'arbre des objectifs uniquement", b: "La méthode de l'arbre à problèmes", c: "Uniquement le diagramme de Gantt", d: "Le bilan comptable" },
            reponse: "b",
            explication: "Pour identifier une situation négative et analyser ses causes et conséquences, on peut utiliser un arbre à problèmes."
        },
        {
            question: "La planification détaillée des activités de gestion concerne :",
            options: { a: "La gestion des finances uniquement", b: "La gestion du temps uniquement", c: "La gestion du temps, des finances, de l'information, de la qualité et de l'organisation", d: "La gestion de la communication uniquement" },
            reponse: "c",
            explication: "Elle concerne 5 groupes d'activités : la gestion du temps, des finances, de l'information, de la qualité et de l'organisation."
        },
        {
            question: "Comment les indicateurs doivent-ils être développés ?",
            options: { a: "Par l'équipe du projet et les bailleurs uniquement", b: "Uniquement par les bénéficiaires", c: "D'une façon participative impliquant toutes les parties prenantes", d: "Par un consultant externe" },
            reponse: "c",
            explication: "Les indicateurs doivent être développés d'une façon participative impliquant toutes les parties prenantes pour être pertinents et acceptés."
        },
        {
            question: "Que sont les hypothèses dans un projet GAR ?",
            options: { a: "Des conditions positives internes et externes nécessaires à la réussite", b: "Des conditions négatives externes uniquement", c: "Des conditions positives et négatives internes et externes", d: "Des suppositions sans importance" },
            reponse: "a",
            explication: "Les hypothèses incluent des conditions positives, internes et externes, nécessaires pour que la relation de cause à effet entre les niveaux de résultats se réalise."
        },
        {
            question: "Que sont les risques dans un projet GAR ?",
            options: { a: "Les conditions nécessaires à la bonne marche du projet", b: "Les facteurs négatifs, externes et internes, qui peuvent affecter l'atteinte des résultats", c: "Les conditions préalables de tout projet", d: "Uniquement les problèmes financiers" },
            reponse: "b",
            explication: "Les risques sont les facteurs négatifs, internes (ex: capacité RH) et externes (ex: instabilité politique), qui peuvent affecter la bonne atteinte des résultats."
        },
        {
            question: "La capacité en matière de ressources humaines est un exemple de :",
            options: { a: "Risque externe", b: "Risque interne", c: "Risque externe et interne", d: "Hypothèse positive" },
            reponse: "b",
            explication: "La capacité (ou l'incapacité) en matière de ressources humaines est un facteur interne à l'organisation, c'est donc un risque interne."
        },
        {
            question: "Les facteurs politiques et économiques sont des exemples de :",
            options: { a: "Risques externes", b: "Conditions préalables", c: "Risques internes", d: "Objectifs du projet" },
            reponse: "a",
            explication: "Les conditions politiques et économiques sont des facteurs qui échappent au contrôle du projet, elles constituent donc des risques externes."
        },
        {
            question: "À quoi servent principalement les méthodes de collecte des données ?",
            options: { a: "À analyser les données collectées", b: "À diffuser les informations", c: "À décrire COMMENT les données sur les indicateurs sont recueillies", d: "À choisir les indicateurs" },
            reponse: "c",
            explication: "Les méthodes de collecte (sondage, entrevue, analyse de documents...) décrivent COMMENT les données nécessaires pour renseigner un indicateur sont recueillies."
        },
        {
            question: "Le choix de la méthode de collecte des données dépend de quoi ?",
            options: { a: "Ne varie jamais", b: "Varie selon la fréquence uniquement", c: "Varie en fonction du type d'indicateur, de l'usage de l'information et de la fréquence", d: "Dépend uniquement du budget" },
            reponse: "c",
            explication: "Le choix de la méthode varie en fonction du type d'indicateur (quantitatif/qualitatif), de l'usage de l'information et de la fréquence de collecte."
        },
        {
            question: "Quel est le but général du suivi et de l'évaluation dans la GAR ?",
            options: { a: "Sanctionner les équipes en cas d'échec", b: "Mesurer et évaluer la performance afin de mieux gérer les résultats du développement", c: "Produire des rapports pour les archives", d: "Justifier uniquement les dépenses" },
            reponse: "b",
            explication: "Le but général du suivi et de l'évaluation est de mesurer et d'évaluer la performance afin de mieux gérer les effets et produits appelés résultats du développement."
        },
        {
            question: "La Déclaration de Paris (2005) a recommandé la GAR comme méthode de gestion en matière de :",
            options: { a: "Développement", b: "Finance d'entreprise", c: "Ressources Humaines", d: "Marketing digital" },
            reponse: "a",
            explication: "En 2005, la communauté de développement a adopté la Déclaration de Paris sur l'efficacité de l'aide, et la GAR a été recommandée comme méthode de gestion en matière de développement."
        },
        {
            question: "La différence entre le cadre logique classique 'GPO' et le cadre logique 'GAR' est que la GAR se focalise sur :",
            options: { a: "Les Objectifs (global, spécifique)", b: "Les Activités et les Ressources", c: "Une hiérarchie de Résultats (finaux, intermédiaires, immédiats)", d: "La structure organisationnelle" },
            reponse: "c",
            explication: "Le cadre logique GAR remplace la hiérarchie des objectifs (GPO) par une hiérarchie de résultats (Impact, Effets, Extrants), mettant l'accent sur le changement."
        },
        {
            question: "L' 'apprentissage et la responsabilisation' sont facilités par quel aspect de la GAR ?",
            options: { a: "La complexité des rapports", b: "L'absence de suivi", c: "Le modèle de planification et de suivi basé sur les résultats attendus", d: "La concentration unique sur les intrants" },
            reponse: "c",
            explication: "La GAR est un modèle de planification dont la logique facilite l'apprentissage et la responsabilisation tout au long d'un projet."
        },
        {
            question: "Qu'est-ce qu'un indicateur quantitatif ?",
            options: { a: "Un jugement qualitatif ou une perception", b: "Une mesure statistique comme un nombre, une fréquence ou un ratio", c: "Une description narrative", d: "Une opinion d'expert" },
            reponse: "b",
            explication: "Les indicateurs quantitatifs sont des mesures statistiques comme le Nombre, la Fréquence, le Pourcentage (%) ou le Ratio."
        },
        {
            question: "Le critère de 'Validité' pour la sélection d'un indicateur signifie :",
            options: { a: "L'indicateur est facile à collecter", b: "L'indicateur est cohérent dans le temps", c: "L'indicateur permet de mesurer les résultats avec exactitude", d: "L'indicateur coûte peu cher" },
            reponse: "c",
            explication: "La validité vérifie si l'indicateur permet de mesurer les résultats avec exactitude (en termes de quantité, qualité, échéancier)."
        },
        {
            question: "Laquelle de ces questions est centrale pour évaluer l'Efficience d'un projet ?",
            options: { a: "La stratégie choisie a-t-elle permis d'atteindre les résultats ?", b: "Les activités et moyens ont-ils permis d'atteindre les résultats escomptés ?", c: "Les résultats ont-ils favorisé l'obtention des objectifs ?", d: "Le contexte a-t-il favorisé la réussite ?" },
            reponse: "b",
            explication: "L'efficience compare les résultats obtenus (extrants) aux moyens utilisés (activités, ressources). La question est donc : les moyens ont-ils permis d'atteindre les résultats ?"
        },
        {
            question: "Laquelle de ces questions est centrale pour évaluer l'Efficacité d'un projet ?",
            options: { a: "Les activités et moyens étaient-ils suffisants ?", b: "Les résultats ont-ils favorisé l'obtention des objectifs (effets) ?", c: "La stratégie choisie était-elle la bonne ?", d: "Le contexte institutionnel était-il favorable ?" },
            reponse: "b",
            explication: "L'efficacité vérifie si les résultats (extrants) ont permis d'atteindre les objectifs (effets). La question est donc : les résultats ont-ils favorisé l'obtention des objectifs ?"
        },
        {
            question: "Un 'résultat de type opérationnel' correspond principalement à quel niveau de la chaîne de résultats ?",
            options: { a: "L'impact", b: "Les effets", c: "Les extrants", d: "Les objectifs globaux" },
            reponse: "c",
            explication: "Les résultats de type opérationnel sont le produit de l'administration et de la gestion d'un projet. Ils correspondent aux extrants."
        },
        {
            question: "Un 'résultat de type développemental' correspond à quels niveaux de la chaîne de résultats ?",
            options: { a: "Aux intrants et activités", b: "Aux extrants, effets et à l'impact", c: "Uniquement aux extrants", d: "Uniquement à l'impact" },
            reponse: "b",
            explication: "Les résultats de type développemental témoignent de changements réalisés et correspondent aux extrants (court terme), aux effets (moyen terme) et à l'impact (long terme)."
        },
        {
            question: "La matrice du cadre logique saisit deux logiques : une verticale et une horizontale. Que représente la logique verticale ?",
            options: { a: "Les indicateurs et les sources de vérification", b: "La chaîne de résultats (Activités -> Extrants -> Effets -> Impact)", c: "Les bénéficiaires et les risques", d: "Le budget et le calendrier" },
            reponse: "b",
            explication: "La logique verticale de la matrice est la chaîne de résultats, qui décrit comment les activités mèneront aux extrants, puis aux effets et enfin à l'impact."
        },
        {
            question: "Dans la matrice du cadre logique, que représente la logique horizontale ?",
            options: { a: "La hiérarchie des résultats", b: "La planification des activités dans le temps", c: "Les indicateurs, sources de vérification et hypothèses pour chaque niveau de résultat", d: "La structure de l'équipe projet" },
            reponse: "c",
            explication: "La logique horizontale précise, pour chaque niveau de résultat, les indicateurs pour le mesurer, les sources de vérification de ces indicateurs, et les hypothèses/risques associés."
        },
        {
            question: "Le principe 'Essai-erreur' de la GAR signifie que :",
            options: { a: "Les projets ne doivent jamais faire d'erreurs", b: "L'application de la GAR se perfectionne progressivement avec l'expérience", c: "Il faut essayer plusieurs projets en même temps et garder le meilleur", d: "On ne planifie rien et on ajuste au jour le jour" },
            reponse: "b",
            explication: "Ce principe reconnaît que l'application de la GAR est un exercice d'apprentissage qui se fera progressivement et se perfectionnera au fur et à mesure des expériences acquises."
        },
        {
            question: "Lequel de ces éléments NE fait PAS partie des 4 éléments de la Gestion au sens anglo-saxon ?",
            options: { a: "Planification", b: "Organisation", c: "Innovation", d: "Contrôle" },
            reponse: "c",
            explication: "Le cours définit la Gestion par quatre éléments : Planification (prévision), Organisation (procédure), Coordination (diriger), et Contrôle (vérifier, évaluer)."
        },
        {
            question: "Le suivi-évaluation participatif est privilégié dans la GAR car :",
            options: { a: "Il est plus rapide et moins cher", b: "Il est moins exigeant en données", c: "Il conduit à une meilleure appropriation et à des suites plus favorables aux recommandations", d: "Il permet d'éviter l'évaluation finale" },
            reponse: "c",
            explication: "L'avantage du suivi participatif est que les parties prenantes, étant impliquées, sont plus susceptibles de donner une suite favorable aux recommandations."
        },
        {
            question: "Quel est l'un des principaux objectifs de la phase d' 'Élaboration et de formulation' ?",
            options: { a: "Identifier les problèmes et les besoins", b: "Choisir les stratégies d'intervention", c: "Rédiger le document de projet détaillé", d: "Mesurer l'impact final" },
            reponse: "c",
            explication: "La phase d'élaboration et de formulation thésaurise les décisions précédentes et consiste à développer une littérature autour du projet, c'est-à-dire rédiger le document de projet."
        }
    ]
},

        //Module 05

        'M05': {
    title: 'MEO-M05 : Dispositif de suivi-évaluation axé sur les résultats',
    questions: [
        {
            question: "Quelle est la principale fonction du 'suivi' dans un projet ?",
            options: { a: "Juger de la valeur globale du projet après sa clôture", b: "Fournir des renseignements sur l'avancement et l'utilisation des fonds en cours de projet", c: "Mesurer l'impact à long terme sur les bénéficiaires", d: "Modifier la stratégie globale du projet" },
            reponse: "b",
            explication: "Le suivi est un processus continu de collecte de données pour informer les gestionnaires sur les progrès réalisés et l'utilisation des ressources pendant la mise en œuvre du projet."
        },
        {
            question: "L' 'évaluation' est principalement un jugement de valeur porté sur quoi ?",
            options: { a: "Le respect du chronogramme des activités", b: "Les informations valides concernant les résultats obtenus par rapport aux résultats attendus", c: "Le nombre de rapports produits", d: "La satisfaction de l'équipe projet" },
            reponse: "b",
            explication: "L'évaluation est un jugement de valeur porté sur des informations valides et viables concernant les résultats obtenus par rapport aux résultats attendus, en vue de prendre une décision."
        },
        {
            question: "Quelle est la relation entre le suivi et l'évaluation ?",
            options: { a: "Ce sont des démarches identiques", b: "Ce sont des démarches distinctes mais complémentaires", c: "Ce sont des démarches distinctes et non complémentaires", d: "L'évaluation précède toujours le suivi" },
            reponse: "b",
            explication: "Le suivi et l'évaluation sont des démarches distinctes (le suivi est continu, l'évaluation est périodique) mais fortement complémentaires, le suivi fournissant une base utile pour l'évaluation."
        },
        {
            question: "L'évaluation qui a lieu après la clôture de l'action pour s'intéresser aux effets à long terme est appelée :",
            options: { a: "Évaluation ex-ante", b: "Évaluation à mi-parcours", c: "Évaluation finale", d: "Évaluation ex-post" },
            reponse: "d",
            explication: "L'évaluation ex-post se situe après la clôture de l'action et s'intéresse aux effets à moyen ou long terme (impact)."
        },
        {
            question: "Une évaluation réalisée par des consultants extérieurs à l'organisation est une :",
            options: { a: "Auto-évaluation", b: "Évaluation interne", c: "Évaluation externe", d: "Méta-évaluation" },
            reponse: "c",
            explication: "L'évaluation externe implique le recours à des consultants extérieurs, ce qui favorise un regard neutre et neuf."
        },
        {
            question: "Quel critère d'évaluation analyse les résultats obtenus par rapport aux moyens (matériels, financiers, humains) investis ?",
            options: { a: "L'efficacité", b: "La pertinence", c: "L'efficience", d: "L'impact" },
            reponse: "c",
            explication: "L'efficience analyse les résultats obtenus par rapport aux moyens investis, répondant à la question 'les objectifs ont-ils été atteints à moindre coût ?'"
        },
        {
            question: "Le critère de 'pertinence' est un critère de :",
            options: { a: "Suivi et contrôle", b: "L'évaluation", c: "L'audit", d: "La gestion financière" },
            reponse: "b",
            explication: "La pertinence, la cohérence, l'efficacité, l'efficience, l'impact et la pérennité sont les critères bien définis sur lesquels se base une évaluation."
        },
        {
            question: "Qu'est-ce qu'un 'indicateur' ?",
            options: { a: "Un résultat final", b: "Un outil de planification", c: "Un outil permettant de mesurer les progrès réalisés vers les résultats escomptés", d: "Un objectif du projet" },
            reponse: "c",
            explication: "Un indicateur est un outil qui permet de mesurer les progrès réalisés en vue des résultats escomptés. Il n'est pas un résultat en lui-même."
        },
        {
            question: "Lequel de ces éléments n'est PAS un critère d'un indicateur SMART ?",
            options: { a: "Simple", b: "Spécifique", c: "Mesurable", d: "Réalisable" },
            reponse: "a",
            explication: "L'acronyme SMART signifie : Spécifique, Mesurable, Accessible (ou Atteignable), Réalisable, et circonscrit dans le Temps. 'Simple' est une qualité souhaitable mais pas dans l'acronyme formel."
        },
        {
            question: "Le suivi qui contrôle les intrants et les coûts du programme par activité est un :",
            options: { a: "Suivi physique", b: "Suivi des résultats", c: "Suivi financier", d: "Suivi du contexte" },
            reponse: "c",
            explication: "Le suivi financier a pour rôle de contrôler les intrants (ressources financières) et les coûts du programme par activité."
        },
        {
            question: "Le 'monitoring' est un concept lié qui se définit comme :",
            options: { a: "L'évaluation continue et permanente", b: "La supervision des activités", c: "Une veille sur l'activité réalisée", d: "Le contrôle dans une optique essentiellement de gestion" },
            reponse: "d",
            explication: "Le monitoring est défini comme le contrôle dans une optique de gestion essentiellement, tandis que le 'on-going evaluation' est l'évaluation continue."
        },
        {
            question: "L'évaluation et le suivi des projets sont :",
            options: { a: "Deux méthodes complémentaires d'analyse", b: "Deux outils d'appréciation de l'évolution de la mise en œuvre", c: "Deux outils de management indispensables et complémentaires", d: "Deux processus identiques" },
            reponse: "c",
            explication: "Selon le test de connaissances, l'évaluation et le suivi sont deux outils de management indispensables et complémentaires."
        },
        {
            question: "Qu'est-ce que le 'Cadre de mesure du rendement' ?",
            options: { a: "Un outil de la GAR et du suivi-évaluation axé sur les résultats", b: "Un outil du suivi-évaluation uniquement", c: "Un paramètre de rendement", d: "Un rapport financier" },
            reponse: "a",
            explication: "Le Cadre de mesure du rendement est un outil de la GAR qui sert à la planification systématique de la collecte de données pour le suivi et l'apprentissage."
        },
        {
            question: "La 'grille de recueil d'information' est :",
            options: { a: "Un outil d'informations", b: "Un tableau de synthèse des questions posées au début d'une évaluation", c: "Une grille d'analyse des questions", d: "Un formulaire de sondage" },
            reponse: "b",
            explication: "La grille de recueil d'information est un tableau de synthèse des questions variées posées au début d'une évaluation, qui définit le cadre général de l'investigation."
        },
        {
            question: "De quoi est principalement constitué le système de gestion de l'information ?",
            options: { a: "De la Base des données, et du système de production et diffusion des rapports", b: "Uniquement des rapports d'informations", c: "Uniquement d'un ensemble d'informations organisées", d: "Uniquement de la base de données" },
            reponse: "a",
            explication: "Le système de gestion de l'information inclut la base de données (collecte, organisation) et le système de production et diffusion des rapports."
        },
        {
            question: "Qu'est-ce que le 'manuel de suivi-évaluation' ?",
            options: { a: "Un outil de gestion", b: "Un document de synthèse du suivi-évaluation", c: "Un document qui présente le système de suivi-évaluation", d: "Un rapport d'évaluation final" },
            reponse: "c",
            explication: "Le manuel de suivi-évaluation est le document de référence qui présente et décrit l'ensemble du système de suivi-évaluation du projet."
        },
        {
            question: "De combien de composantes essentielles le manuel de suivi-évaluation dispose-t-il ?",
            options: { a: "Trois composantes", b: "Quatre composantes", c: "Cinq composantes", d: "Deux composantes" },
            reponse: "b",
            explication: "Le manuel dispose de quatre composantes essentielles : a) Contexte, b) Procédures, c) Système de gestion de l'information, d) Gestion de désengagement et achèvement."
        },
        {
            question: "La 'Gestion de désengagement et achèvement' est :",
            options: { a: "Une composante essentielle du manuel de suivi-évaluation", b: "Un élément secondaire du manuel", c: "Une procédure administrative", d: "Un rapport financier" },
            reponse: "a",
            explication: "La gestion du désengagement et de l'achèvement est listée comme l'une des quatre composantes essentielles du manuel de suivi-évaluation."
        },
        {
            question: "Lequel de ces éléments NE fait PAS partie des 'éléments fondamentaux' du suivi-évaluation ?",
            options: { a: "Critères d'évaluation", b: "Budget du projet", c: "Barème de notation", d: "Transparence" },
            reponse: "b",
            explication: "Les éléments fondamentaux listés sont : Critères d'évaluation, Barème de notation, Agrégation des notes, Traçabilité des informations, Transparence, Techniques et instruments."
        },
        {
            question: "Qui sont les acteurs du suivi-évaluation ?",
            options: { a: "Uniquement le directeur du projet et son équipe", b: "Uniquement les partenaires financiers", c: "Les bénéficiaires, l'équipe projet, les organismes de tutelle et les partenaires financiers", d: "Uniquement les bénéficiaires et l'équipe projet" },
            reponse: "c",
            explication: "Le suivi-évaluation implique un large éventail d'acteurs : les bénéficiaires, le directeur et l'équipe, les organismes de tutelle, et les partenaires financiers."
        },
        {
            question: "Le suivi-évaluation participatif implique qui ?",
            options: { a: "Tous les acteurs", b: "Uniquement les partenaires techniques", c: "L'équipe du projet et les bénéficiaires", d: "Uniquement l'équipe du projet" },
            reponse: "a",
            explication: "Le suivi-évaluation participatif, pour être efficace et assurer l'appropriation, doit impliquer tous les acteurs concernés par le projet."
        },
        {
            question: "Laquelle de ces affirmations est un enjeu du suivi-évaluation ?",
            options: { a: "C'est uniquement une contrainte administrative", b: "C'est un facteur clé d'efficacité de l'action publique", c: "Cela ne concerne que les projets en échec", d: "C'est un processus qui ne produit pas de changement" },
            reponse: "b",
            explication: "Le cours positionne le suivi-évaluation comme un facteur clé d'efficacité de l'action publique, car il questionne ses modalités, sa qualité et son utilité."
        },
        {
            question: "Analyser les potentiels de poursuite de l'action après le désengagement de l'aide extérieure relève de quel critère d'évaluation ?",
            options: { a: "L'efficacité", b: "L'impact", c: "La pérennité / viabilité", d: "La cohérence" },
            reponse: "c",
            explication: "C'est la définition même du critère de pérennité/viabilité : analyser les potentiels de poursuite de l'action de manière autonome."
        },
        {
            question: "La caractéristique d'une bonne évaluation qui garantit que l'information est produite en temps opportun est :",
            options: { a: "L'impartialité", b: "L'utilité", c: "La conformité technique", d: "La rentabilité" },
            reponse: "b",
            explication: "L'utilité implique que l'information soit non seulement pertinente, mais aussi produite en temps opportun pour pouvoir être utilisée dans la prise de décision."
        },
        {
            question: "Laquelle de ces propositions est un outil de l'évaluation ?",
            options: { a: "La matrice d'évaluation", b: "Le rapport d'activité mensuel", c: "Le budget prévisionnel", d: "L'organigramme de l'équipe" },
            reponse: "a",
            explication: "Le cours cite explicitement la matrice d'évaluation, le guide d'entretiens, et le questionnaire comme des outils de l'évaluation."
        },
        {
            question: "Le passage du 'statique' à un suivi plus 'actif' est une caractéristique de quel concept ?",
            options: { a: "Le contrôle", b: "Le suivi-évaluation", c: "L'audit", d: "La supervision" },
            reponse: "b",
            explication: "Le suivi-évaluation est décrit comme le passage d'un suivi statique à un processus actif et continu de réflexion, d'étude et d'adaptation."
        },
        {
            question: "L'analyse des données comptables dans le suivi-évaluation permet de vérifier quoi ?",
            options: { a: "La satisfaction des bénéficiaires", b: "Si les hypothèses de départ des activités étaient correctes", c: "L'impact à long terme du projet", d: "Le nombre d'activités réalisées" },
            reponse: "b",
            explication: "L'analyse des données comptables permet de voir si les hypothèses de départ des activités étaient correctes et si la stratégie était bien choisie, en reliant les coûts aux réalisations."
        },
        {
            question: "Dans quelle composante du manuel de suivi-évaluation trouve-t-on la présentation du cadre logique du projet ?",
            options: { a: "Contexte de suivi-évaluation", b: "Procédures de suivi-évaluation", c: "Système de gestion de l'information", d: "Gestion de désengagement" },
            reponse: "a",
            explication: "La présentation du cadre logique, l'explication du dispositif d'analyse des risques et l'ancrage institutionnel font partie du 'Contexte de suivi-évaluation'."
        },
        {
            question: "La description des TDR et de la méthodologie d'une évaluation se trouve dans quelle partie du manuel ?",
            options: { a: "Contexte", b: "Procédures", c: "Système de gestion de l'information", d: "Gestion post-projet" },
            reponse: "b",
            explication: "La description des procédures pour chaque type de suivi et d'évaluation (contenu, périodicité, équipe, méthodologie, etc.) est détaillée dans la composante 'Procédures'."
        },
        {
            question: "L'acronyme TDR, souvent utilisé en évaluation, signifie :",
            options: { a: "Tableau de Rendement", b: "Taux de Réalisation", c: "Termes de Référence", d: "Technique de Reporting" },
            reponse: "c",
            explication: "TDR signifie 'Termes de Référence', le document qui cadre une mission d'évaluation en précisant les questions, la méthodologie et les résultats attendus."
        },
        {
            question: "Quel outil vise à visualiser les résultats des enquêtes sur les attentes des parties prenantes (bailleurs, tutelle...) ?",
            options: { a: "Le tableau des rôles", b: "La grille de recueil d'information", c: "Le tableau des attentes des partenaires", d: "Le cadre de mesure du rendement" },
            reponse: "c",
            explication: "Le tableau des attentes des partenaires permet de visualiser et confronter les points de vue des différentes parties prenantes pour déceler d'éventuels conflits d'intérêt."
        },
        {
            question: "La procédure de gestion des risques décrit :",
            options: { a: "Uniquement les risques financiers", b: "La probabilité d'occurrence et l'impact des événements critiques", c: "Les succès attendus du projet", d: "La liste des membres de l'équipe projet" },
            reponse: "b",
            explication: "Elle décrit les événements critiques, leur probabilité d'occurrence, leur impact potentiel, ainsi que les mesures envisagées pour les atténuer."
        },
        {
            question: "Quelle est la finalité principale de l' 'Audit' ?",
            options: { a: "Mesurer les progrès vers les objectifs", b: "Apprécier la conception et l'impact d'un projet", c: "Examiner les contrôles de gestion sur l'utilisation des ressources et la conformité", d: "Identifier les problèmes et leurs causes" },
            reponse: "c",
            explication: "L'audit est un examen des contrôles de gestion portant sur l'utilisation efficace des ressources, la fiabilité des données financières, la conformité aux règles, etc."
        },
        {
            question: "Le suivi du contexte, des hypothèses et des risques se concentre sur :",
            options: { a: "Le contrôle des dépenses", b: "L'avancement des activités", c: "Les problèmes institutionnels et politiques susceptibles d'affecter les résultats", d: "La satisfaction des bénéficiaires" },
            reponse: "c",
            explication: "Ce type de suivi se rapporte aux problèmes institutionnels et politiques qui peuvent affecter la capacité du projet à produire les résultats attendus."
        },
        {
            question: "Lequel de ces éléments n'est pas un outil du suivi ?",
            options: { a: "Le plan de travail annuel", b: "La méta-évaluation", c: "Le tableau de bord des indicateurs", d: "Les fiches de suivi de l'évolution physique des activités" },
            reponse: "b",
            explication: "La méta-évaluation est une 'évaluation d'une évaluation'. Les autres sont des outils de suivi opérationnel."
        },
        {
            question: "L'évaluation 'endoformative' est destinée à quel usage ?",
            options: { a: "À un usage externe (publics, élus...)", b: "À un usage interne et externe", c: "Au seul usage interne des responsables du programme", d: "À l'évaluation des systèmes de suivi" },
            reponse: "c",
            explication: "L'évaluation endoformative est destinée au seul usage interne des responsables du programme, dans une optique d'amélioration."
        },
        {
            question: "Analyser les changements prévus ou non au niveau des bénéficiaires relève de quel critère d'évaluation ?",
            options: { a: "L'efficience", b: "L'impact", c: "La cohérence", d: "La pertinence" },
            reponse: "b",
            explication: "L'impact est précisément l'analyse des changements, prévus ou non, intervenus au niveau des bénéficiaires suite à l'intervention."
        },
        {
            question: "Le 'Tableau des rôles' a pour but de :",
            options: { a: "Lister les indicateurs du projet", b: "Décrire les rôles des différents acteurs pour chaque activité", c: "Présenter le budget détaillé", d: "Évaluer la satisfaction des partenaires" },
            reponse: "b",
            explication: "Ce tableau a pour but de décrire les rôles (prévus et réalisés) des différents acteurs de chaque activité, souvent sur plusieurs années."
        },
        {
            question: "La 'supervision' est un concept lié au suivi qui consiste à :",
            options: { a: "Vérifier l'existence d'un fait par un expert judiciaire", b: "Analyser la situation en cours pour remettre en cause les objectifs", c: "Faire une veille sur l'activité réalisée", d: "Surveiller ou contrôler certaines activités pour s'assurer qu'elles sont bien réalisées" },
            reponse: "d",
            explication: "La supervision consiste à surveiller ou à contrôler certaines activités pour s'assurer qu'elles sont réalisées de la meilleure façon possible."
        },
        {
            question: "Le guide africain de l'évaluation comporte des normes réparties en 4 principes. Lequel n'en fait PAS partie ?",
            options: { a: "L'utilité", b: "La rapidité", c: "La faisabilité", d: "La précision et la qualité" },
            reponse: "b",
            explication: "Les quatre principes de base listés sont : l'Utilité, la Faisabilité, la Précision et la qualité, ainsi que le Respect et la déontologie."
        },
        {
            question: "Dans la matrice d'opérationnalisation des indicateurs, quel élément n'est PAS requis ?",
            options: { a: "Date et fréquence de collecte", b: "Responsables de la collecte", c: "L'avis personnel du directeur de projet", d: "Méthodes, échantillonnages, activités à mener" },
            reponse: "c",
            explication: "La matrice doit contenir des informations factuelles et méthodologiques comme les variables, les méthodes, la fréquence, les responsables et les outils, mais pas un avis personnel."
        },
        {
            question: "Le 'système de production et diffusion des rapports' fait partie de quelle composante du manuel de S&E ?",
            options: { a: "Contexte de suivi-évaluation", b: "Procédures de suivi-évaluation", c: "Système de gestion de l'information", d: "Gestion de désengagement et achèvement" },
            reponse: "c",
            explication: "Cette partie, qui définit les types de rapports, leur périodicité et leur valorisation, est au cœur du système de gestion de l'information."
        },
        {
            question: "L'évaluation qui permet d'apprécier au départ l'arrimage du projet à mettre en œuvre est l'évaluation :",
            options: { a: "Ex-ante", b: "À mi-parcours", c: "Finale", d: "Ex-post" },
            reponse: "a",
            explication: "L'évaluation ex-ante, très proche d'une étude de faisabilité, permet d'apprécier la pertinence et la conception du projet avant même son démarrage."
        },
        {
            question: "Quel est le but principal de l'étape de 'restitution' dans une démarche d'évaluation ?",
            options: { a: "Archiver le rapport final", b: "Payer les consultants", c: "Partager les résultats avec les parties prenantes pour favoriser l'apprentissage", d: "Commencer un nouveau projet" },
            reponse: "c",
            explication: "La restitution des résultats aux parties prenantes est une étape cruciale pour partager les leçons apprises, discuter des points faibles et favoriser l'appropriation des recommandations."
        },
        {
            question: "Le suivi de l'évolution physique des activités se fait pour :",
            options: { a: "Contrôler les coûts du programme", b: "Évaluer l'état d'avancement dans la dispense des activités aux bénéficiaires", c: "Contrôler les produits, effets et impacts", d: "Suivre les problèmes institutionnels et politiques" },
            reponse: "b",
            explication: "Le suivi physique est spécifiquement effectué pour évaluer l'état d'avancement dans la réalisation et la fourniture des activités prévues aux groupes bénéficiaires."
        }
    ]
},

        //Module 06

    'M06': {
    title: 'MEO-06 : Plan d\'orientations stratégiques',
    questions: [
        {
            question: "D'un point de vue étymologique, le mot 'stratégie' est un concept issu de :",
            options: { a: "La Rome antique et le commerce", b: "La Grèce antique, à la fois civil et militaire", c: "Uniquement du domaine militaire grec", d: "La pensée managériale du 20ème siècle" },
            reponse: "b",
            explication: "Le cours précise que le mot stratégie vient du grec 'stratos' (armée) et 'agos' (je conduis), et que c'est un concept militaire mais aussi civil dans la Grèce antique."
        },
        {
            question: "Selon Alain Thiétard, la stratégie est un ensemble de choix et de priorités pour atteindre des objectifs en tenant compte :",
            options: { a: "Uniquement des moyens actuels", b: "Uniquement des potentialités futures", c: "Des moyens et potentialités actuelles et futures de l'entreprise", d: "Des stratégies des concurrents uniquement" },
            reponse: "c",
            explication: "La définition citée dans le cours est claire : '...compte tenu des moyens et des potentialités actuelles et futures de l'entreprise'."
        },
        {
            question: "Les penseurs en stratégie d'entreprise identifient généralement combien de types ou niveaux stratégiques ?",
            options: { a: "Deux (2) : Opérationnel et Financier", b: "Trois (3) : Entreprise (corporate), Concurrentiel (par domaine d'activité), et Opérationnel", c: "Quatre (4) : Marketing, RH, Production, Finance", d: "Un (1) seul : la stratégie globale" },
            reponse: "b",
            explication: "Le cours distingue bien trois niveaux : la stratégie d'entreprise (corporate), la stratégie par domaine d'activités (concurrentielle) et les stratégies opérationnelles."
        },
        {
            question: "Sur le plan stratégique, que doit-on faire des trois mesures (efficience, efficacité, pertinence) pour assurer un équilibre ?",
            options: { a: "Les disjoindre (séparer)", b: "Les conjuguer (associer)", c: "Privilégier l'efficacité avant tout", d: "Se concentrer uniquement sur la pertinence" },
            reponse: "b",
            explication: "Contrairement à l'affirmation du test (qui était fausse), il est crucial de conjuguer ces trois mesures. Le cours indique qu'il faut 'assurer ce qu'on pourrait appeler un équilibre stratégique'."
        },
        {
            question: "Lequel de ces éléments n'est PAS un pilier fondamental de la réussite d'une séance de brainstorming ?",
            options: { a: "Un petit groupe motivé", b: "Le respect de la règle du jugement différé", c: "Une évaluation immédiate de chaque idée", d: "Le suivi des idées émises" },
            reponse: "c",
            explication: "L'évaluation immédiate est contraire au principe du 'jugement différé', qui est crucial pour ne pas brider la créativité. L'évaluation se fait dans un second temps."
        },
        {
            question: "Selon Peter Drucker, combien de composantes essentielles une mission organisationnelle doit-elle comporter pour être efficace ?",
            options: { a: "Trois (3)", b: "Cinq (5)", c: "Sept (7)", d: "Deux (2)" },
            reponse: "b",
            explication: "Le cours mentionne que Peter Drucker (2006) a identifié cinq (05) composantes essentielles pour une mission réellement efficace. Le test de connaissance le mentionne également."
        },
        {
            question: "Selon le consultant Richard Martin, que manque-t-il si la compétence et le besoin sont là, mais pas la motivation ?",
            options: { a: "La mission sera vide de sens et manquera de pertinence", b: "La mission sera 'pour la forme' et l'organisation sera sans âme", c: "La mission ne sera pas crédible et manquera d'efficience", d: "La mission sera un succès malgré tout" },
            reponse: "b",
            explication: "Le cours cite R. Martin : 'S'il y a la compétence et des besoins à combler, mais qu'il n'y a pas de motivation, la mission sera « pour la forme » et l'organisation sera sans âme.'"
        },
        {
            question: "Pour son avenir, une organisation effectue combien de types de choix stratégiques majeurs ?",
            options: { a: "Trois (3) : maintien, croissance, retrait", b: "Quatre (4) : mission, domaine d'activité, avantage concurrentiel, et stratégies fonctionnelles", c: "Deux (2) : interne et externe", d: "Cinq (5)" },
            reponse: "b",
            explication: "Le cours identifie quatre types de décisions : 1. la mission (stratégie institutionnelle), 2. les domaines d'activité (stratégie directrice), 3. la façon de concurrencer (stratégie d'affaires), 4. la réalisation (stratégies fonctionnelles)."
        },
        {
            question: "La 'matrice de suivi du plan d'actions' présente-t-elle le taux d'exécution des activités ?",
            options: { a: "Oui, c'est sa fonction principale", b: "Non, elle ne présente que la programmation", c: "Non, elle ne présente que les coûts", d: "Oui, mais uniquement pour les activités financières" },
            reponse: "a",
            explication: "Le cours stipule que la matrice de suivi indique '...le taux d'exécution des activités en fin de période assortis de commentaires'."
        },
        {
            question: "La disponibilité des sources de données est-elle une condition déterminante pour la réussite du plan stratégique ?",
            options: { a: "Non, elle est secondaire", b: "Oui, c'est une condition déterminante", c: "Oui, mais uniquement pour les grandes entreprises", d: "Non, on peut élaborer un plan sans données" },
            reponse: "b",
            explication: "Le cours insiste sur ce point : 'La disponibilité des sources de données et d'informations est une condition déterminante pour la réussite du processus d'élaboration d'un plan stratégique'."
        },
        {
            question: "Quand le plan de travail annuel, qui est la tranche annuelle du plan d'actions, est-il généralement élaboré ?",
            options: { a: "En milieu d'année (N-1)", b: "En fin d'année (N-1)", c: "En début d'année (N)", d: "En milieu d'année (N)" },
            reponse: "c",
            explication: "Le cours précise que 'Le plan de travail annuel [...] est généralement élaboré en début d'année'."
        },
        {
            question: "Combien de types d'indicateurs distingue-t-on généralement en lien avec les niveaux de résultats ?",
            options: { a: "Un seul (l'indicateur d'impact)", b: "Deux (quantitatif et qualitatif)", c: "Trois (intrants, extrants, effets)", d: "Quatre (intrants, extrants/produit, effets, impact)" },
            reponse: "d",
            explication: "Le cours distingue bien quatre types d'indicateurs liés à la chaîne de résultats : intrants, extrants (ou produit), effets, et impact."
        },
        {
            question: "Dans le mécanisme de financement, chaque action nécessite-t-elle la réalisation d'un plan de financement ?",
            options: { a: "Oui, pour assurer la cohérence et la faisabilité", b: "Non, seules les actions principales en nécessitent un", c: "Non, le financement est global et non par action", d: "Non, cela est optionnel" },
            reponse: "a",
            explication: "Le cours est clair : 'toute action nécessite la réalisation d'un plan de financement pour en assurer la cohérence et la faisabilité financière'."
        },
        {
            question: "Les opportunités et les menaces sont des facteurs de quel type ?",
            options: { a: "Endogènes (internes) et contrôlables", b: "Endogènes (internes) et non contrôlables", c: "Exogènes (externes) et non contrôlables", d: "Exogènes (externes) et contrôlables" },
            reponse: "c",
            explication: "Les opportunités et les menaces proviennent de l'environnement externe et ne sont donc pas contrôlables par la structure. Ce sont des facteurs exogènes."
        },
        {
            question: "L'abréviation SWOT correspond à 'Strengths – Weaknesses – Opportunities – ...' ?",
            options: { a: "Throughts (Pensées)", b: "Threats (Menaces)", c: "Tasks (Tâches)", d: "Targets (Cibles)" },
            reponse: "b",
            explication: "Le 'T' dans SWOT signifie 'Threats', qui se traduit par 'Menaces' en français."
        },
        {
            question: "La Méthode du Cadre Logique (MCL) a été mise au point en 1969 pour le compte de quelle agence ?",
            options: { a: "L'Agence Française de Développement (AFD)", b: "Le Programme des Nations Unies pour le Développement (PNUD)", c: "L'Agence Américaine pour le Développement International (USAID)", d: "La Banque Mondiale" },
            reponse: "c",
            explication: "Le cours précise que la MCL a été développée par la firme Pratical Concepts Inc. pour le compte de l'USAID."
        },
        {
            question: "Le vote pondéré est-il un bon outil lorsque le groupe n'adhère PAS entièrement à une idée ?",
            options: { a: "Non, il ne fonctionne que pour une adhésion totale", b: "Oui, il est conçu pour départager des avis divergents", c: "Oui, mais il ne s'applique qu'aux décisions financières", d: "Non, il est trop complexe pour être utile" },
            reponse: "b",
            explication: "Le principe du vote pondéré est justement de permettre de prendre une décision lorsque le groupe n'est pas unanime, en donnant plus de poids aux préférences de chacun."
        },
        {
            question: "Où se situe la première étape d'une séance de brainstorming par rapport à la production d'idées ?",
            options: { a: "En aval (après)", b: "Pendant", c: "En amont (avant)", d: "Elle n'a aucun lien" },
            reponse: "c",
            explication: "La première étape est la phase de préparation ('créer les conditions de la créativité'), qui se situe bien en amont de la production d'idées proprement dite."
        },
        {
            question: "La méthode QQOQCP cherche à connaître quoi en premier lieu ?",
            options: { a: "Les solutions au problème", b: "Toutes les causes du problème", c: "Le budget disponible pour la solution", d: "L'équipe responsable de la solution" },
            reponse: "b",
            explication: "Le cours stipule que 'La méthode QQOQCP cherche à connaitre toutes les causes du problème, pour parvenir à déterminer avec exactitude laquelle est la cause principale'."
        },
        {
            question: "La matrice d'Ansoff (1965) relève combien de façons pour une entreprise de croître ?",
            options: { a: "Deux (2)", b: "Trois (3)", c: "Quatre (4)", d: "Cinq (5)" },
            reponse: "d",
            explication: "La matrice d'Ansoff identifie quatre stratégies de croissance : pénétration de marché, développement de marché, développement de produit, et diversification."
        },
        {
            question: "Le modèle de management et d'organisation de Kurt Lewin est principalement connu pour sa théorie sur :",
            options: { a: "Les cinq forces de la concurrence", b: "La dynamique des groupes et la gestion du changement (dégel, changement, regel)", c: "La direction par objectifs", d: "La pyramide des besoins" },
            reponse: "b",
            explication: "Kurt Lewin est un psychologue célèbre pour ses travaux sur la dynamique des groupes et son modèle de gestion du changement en trois étapes."
        },
        {
            question: "Le diagramme d'Ishikawa peut-il être utilisé dans n'importe quelle démarche de progrès ?",
            options: { a: "Non, uniquement en gestion de la qualité", b: "Non, uniquement en logistique", c: "Oui, il est adaptable à de nombreux contextes", d: "Oui, mais seulement pour les problèmes simples" },
            reponse: "c",
            explication: "Le cours précise : 'D'une façon générale il peut s'utiliser dans n'importe quelle démarche de progrès. Il est par exemple tout à fait adapté à l'esprit du lean'."
        },
        {
            question: "Qu'est-ce qu'un programme dans le contexte de la planification stratégique ?",
            options: { a: "Un projet unique et isolé", b: "Un ensemble cohérent d'activités, de projets ou de processus visant des objectifs spécifiques", c: "Uniquement les activités de routine de l'entreprise", d: "Le budget annuel de l'organisation" },
            reponse: "b",
            explication: "La définition donnée dans le cours est précise : 'Un Programme est un ensemble cohérent d'activités, de projets, de processus ou de services visant des objectifs spécifiques'."
        },
        {
            question: "La mise en œuvre du plan stratégique est un processus qui comprend combien d'étapes ?",
            options: { a: "Trois (3) étapes", b: "Huit (08) étapes", c: "Six (6) étapes", d: "Quatre (4) étapes" },
            reponse: "c",
            explication: "Le cours liste six étapes pour la mise en œuvre : mise en place du dispositif, programmation annuelle, mobilisation des ressources, mise en œuvre annuelle, suivi et évaluation, reprogrammation."
        },
        {
            question: "Quelle évaluation estime la durabilité des résultats et la possibilité de retirer le projet APRÈS sa fin ?",
            options: { a: "L'évaluation ex-ante", b: "L'évaluation à mi-parcours", c: "L'évaluation finale", d: "L'évaluation ex-post" },
            reponse: "d",
            explication: "L'évaluation ex-post a lieu après la fin du projet et se concentre sur l'impact et la durabilité des résultats à long terme."
        },
        {
            question: "L'élaboration du Plan Annuel consiste-t-elle à faire des options entre les activités non réalisées de N-1 et celles prévues pour N ?",
            options: { a: "Non, on doit réaliser toutes les activités prévues", b: "Oui, c'est un processus d'arbitrage et de reprogrammation", c: "Non, on ne reporte jamais d'activités", d: "Oui, mais on ne peut pas ajouter de nouvelles activités" },
            reponse: "b",
            explication: "C'est l'essence même de l'étape de reprogrammation annuelle : 'faire des options entre les activités non réalisées de l'année N-1 et celles prévues pour l'année N'."
        },
        {
            question: "Le diagramme des 5M classe les causes en 5 catégories. Laquelle de ces listes est CORRECTE ?",
            options: { a: "Milieu, Moyen, Monnaie, Méthode, Management", b: "Milieu, Moyen, Matière, Méthode, Main d'œuvre", c: "Motivation, Marché, Matière, Méthode, Main d'œuvre", d: "Milieu, Moyen, Matière, Marketing, Main d'œuvre" },
            reponse: "b",
            explication: "Les 5 M traditionnels du diagramme d'Ishikawa sont : Milieu, Moyen (ou Machine), Matière, Méthode, Main d'œuvre."
        },
        {
            question: "Laquelle de ces propositions est une composante d'un plan stratégique ?",
            options: { a: "Uniquement la liste des employés", b: "La mission, la vision, et les valeurs", c: "Uniquement le bilan comptable de l'année précédente", d: "Les factures des fournisseurs" },
            reponse: "b",
            explication: "Le cours indique qu'on retrouve normalement dans un plan stratégique : la mission, la vision, les valeurs, les orientations et objectifs."
        },
        {
            question: "Qu'est-ce que la 'vision' dans un plan stratégique ?",
            options: { a: "La raison d'être actuelle de l'organisation", b: "Ce que l'organisation veut devenir ou accomplir à long terme", c: "Les règles de conduite de l'organisation", d: "Le budget pour l'année à venir" },
            reponse: "b",
            explication: "La vision se réfère à ce que l'organisation veut devenir ou accomplir dans un horizon temporel long, par opposition à la mission qui est sa raison d'être actuelle."
        },
        {
            question: "L'analyse PESTEL est un outil utilisé pour :",
            options: { a: "Évaluer les forces et faiblesses internes", b: "Analyser l'environnement externe (macro-environnement)", c: "Définir les objectifs opérationnels", d: "Gérer le budget du projet" },
            reponse: "b",
            explication: "L'analyse PESTEL (Politique, Économique, Social, Technologique, Environnemental, Légal) est un cadre pour analyser les influences du macro-environnement sur une organisation."
        },
        {
            question: "Laquelle de ces stratégies n'est PAS une des trois stratégies directrices générales ?",
            options: { a: "La stratégie de maintien", b: "La stratégie de croissance", c: "La stratégie de marketing digital", d: "La stratégie de retrait" },
            reponse: "c",
            explication: "Le cours présente trois grandes stratégies directrices : le maintien (stabilité), la croissance et le retrait. Le marketing digital est une stratégie fonctionnelle."
        },
        {
            question: "L'outil 'QQOQCP' est une méthode de :",
            options: { a: "Planification financière", b: "Résolution de problème par questionnement systématique", c: "Gestion des ressources humaines", d: "Suivi des indicateurs de performance" },
            reponse: "b",
            explication: "Le QQOQCP (Qui, Quoi, Où, Quand, Comment, Pourquoi) est une méthode d'analyse critique pour bien cerner toutes les dimensions d'un problème."
        },
        {
            question: "La méthode des champs de force, développée par Kurt Lewin, sert à :",
            options: { a: "Analyser les forces motrices et les forces de résistance face à un changement", b: "Calculer la force de vente d'une entreprise", c: "Établir l'organigramme hiérarchique", d: "Mesurer la performance financière" },
            reponse: "a",
            explication: "Cet outil permet d'analyser les forces qui poussent en faveur d'un changement (motrices) et celles qui s'y opposent (freins/résistance) pour faciliter la prise de décision."
        },
        {
            question: "À quel niveau de stratégie correspondent les décisions sur la manière de concurrencer sur un marché particulier ?",
            options: { a: "Stratégie d'entreprise (corporate)", b: "Stratégie par domaine d'activités (business strategy)", c: "Stratégie opérationnelle", d: "Stratégie fonctionnelle" },
            reponse: "b",
            explication: "La stratégie par domaine d'activités, ou 'business strategy', consiste à définir comment obtenir un avantage concurrentiel sur un marché spécifique."
        },
        {
            question: "Le 'Tableau de Bord Stratégique' (Balanced Scorecard) se distingue des tableaux de bord traditionnels car il :",
            options: { a: "Ne contient que des indicateurs financiers", b: "Est tourné uniquement vers le passé", c: "Équilibre les indicateurs financiers avec ceux des clients, des processus internes et de l'apprentissage", d: "Est utilisé uniquement par le service comptable" },
            reponse: "c",
            explication: "Le Tableau de Bord Stratégique (ou Prospectif) vise à donner une vision équilibrée de la performance en incluant plusieurs perspectives au-delà de la seule finance."
        },
        {
            question: "L'étape de la 'programmation annuelle et de la budgétisation' se situe à quel moment de la mise en œuvre ?",
            options: { a: "À la toute fin du plan stratégique", b: "Avant même l'élaboration du plan", c: "C'est une étape clé qui suit la mise en place du dispositif organisationnel", d: "Elle est optionnelle" },
            reponse: "c",
            explication: "Le cours la place comme la deuxième étape de la mise en œuvre, après avoir mis en place le dispositif et avant la mobilisation des ressources."
        },
        {
            question: "La différence principale entre un plan stratégique et un plan d'affaires est :",
            options: { a: "Il n'y a aucune différence", b: "Le plan stratégique est axé sur le long terme et les stratégies, le plan d'affaires sur le court/moyen terme et les opérations", c: "Le plan stratégique ne contient pas de chiffres", d: "Le plan d'affaires est uniquement destiné aux banques" },
            reponse: "b",
            explication: "L'introduction du cours précise bien cette distinction : le plan d'affaires concerne les objectifs à court/moyen terme, tandis que le plan stratégique est axé sur le moyen/long terme."
        },
        {
            question: "Un indicateur de suivi doit être 'SMART'. Que signifie le 'T' ?",
            options: { a: "Technique", b: "Typique", c: "Temporellement défini", d: "Total" },
            reponse: "c",
            explication: "L'acronyme SMART pour un indicateur signifie Spécifique, Mesurable, Atteignable, Réaliste et Temporellement défini."
        },
        {
            question: "Lequel de ces outils est le plus approprié pour représenter la chaîne de résultats d'un projet de développement ?",
            options: { a: "Le diagramme d'Ishikawa", b: "La matrice SWOT", c: "La matrice du Cadre Logique", d: "L'analyse PESTEL" },
            reponse: "c",
            explication: "La matrice du Cadre Logique est spécifiquement conçue pour structurer un projet en reliant les activités aux résultats (extrants), à l'objectif spécifique (effets) et à l'objectif global (impact)."
        },
        {
            question: "Laquelle de ces affirmations sur la 'mission' d'une organisation est correcte ?",
            options: { a: "Elle change chaque année", b: "Elle décrit ce que l'organisation veut devenir dans le futur", c: "Elle est fondamentale, perdure dans le temps et précise la raison d'être de l'organisation", d: "Elle est identique pour toutes les entreprises du même secteur" },
            reponse: "c",
            explication: "Le cours définit la mission comme la raison d'être de l'organisation, ce qui est fondamental et perdure dans le temps, la différenciant d'autres organisations."
        },
        {
            question: "Quel est l'objectif principal de l'étape d'analyse stratégique (diagnostic) ?",
            options: { a: "Rédiger le rapport annuel", b: "Identifier les forces, faiblesses, opportunités et menaces (SWOT)", c: "Recruter du nouveau personnel", d: "Choisir un nouveau logiciel comptable" },
            reponse: "b",
            explication: "L'analyse ou diagnostic stratégique est l'étape préliminaire qui vise à comprendre le positionnement de l'organisation via une analyse interne (forces/faiblesses) et externe (opportunités/menaces)."
        },
        {
            question: "La 'Charte des responsabilités' est un instrument de mise en œuvre qui sert à :",
            options: { a: "Déterminer le budget de chaque activité", b: "Évaluer la performance des employés", c: "Déterminer les centres de responsabilités (Leader, Responsable, Contributeur) pour chaque résultat", d: "Définir la mission de l'entreprise" },
            reponse: "c",
            explication: "Cet outil, présenté dans le cours, vise à clarifier 'qui fait quoi' en définissant les rôles de chacun (Leader, Responsable, Contributeur) pour l'atteinte des résultats."
        },
        {
            question: "Qu'est-ce que l'évaluation 'ex-ante' ?",
            options: { a: "Une évaluation menée à la fin du plan stratégique", b: "Une évaluation intervenant avant la phase préparatoire pour analyser la situation", c: "Une évaluation menée au milieu de l'exécution du plan", d: "Une évaluation de l'impact plusieurs années après la fin du plan" },
            reponse: "b",
            explication: "L'évaluation ex-ante intervient avant le début du projet/plan pour faire un état des lieux et s'assurer de la pertinence de la stratégie envisagée."
        },
        {
            question: "Quels sont les deux types d'évaluation selon la nature de l'évaluateur ?",
            options: { a: "Évaluation rapide et évaluation lente", b: "Évaluation chère et évaluation bon marché", c: "Évaluation interne (auto-évaluation) et évaluation externe", d: "Évaluation stratégique et évaluation opérationnelle" },
            reponse: "c",
            explication: "Le cours distingue clairement deux approches : l'évaluation interne, menée par les acteurs du projet, et l'évaluation externe, réalisée par des acteurs extérieurs (consultants, bailleurs...)."
        },
        {
            question: "Les critères d'évaluation d'un plan stratégique incluent la pertinence, l'efficacité, l'efficience, l'impact et la...",
            options: { a: "Rentabilité", b: "Popularité", c: "Durabilité (ou pérennité)", d: "Complexité" },
            reponse: "c",
            explication: "Les critères standards d'évaluation, cités dans le cours, sont la pertinence, l'efficacité, l'efficience, l'impact et la durabilité/pérennité."
        },
        {
            question: "Dans une analyse SWOT, les 'Forces' et 'Faiblesses' se rapportent à :",
            options: { a: "L'environnement externe", b: "L'environnement interne de l'organisation", c: "Aux concurrents uniquement", d: "Aux conditions politiques et économiques" },
            reponse: "b",
            explication: "Les Forces et Faiblesses sont des facteurs endogènes, c'est-à-dire propres à l'organisation (son environnement interne)."
        },
        {
            question: "La technique de la 'programmation triennale glissante' est utilisée lors de quelle étape ?",
            options: { a: "Le diagnostic initial", b: "La définition de la vision", c: "La reprogrammation annuelle", d: "L'évaluation finale" },
            reponse: "c",
            explication: "Le cours mentionne que la technique de la programmation triennale glissante est appliquée lors de l'étape de reprogrammation annuelle."
        },
        {
            question: "Quel outil est aussi appelé 'diagramme en arêtes de poisson' ?",
            options: { a: "La matrice SWOT", b: "Le Cadre Logique", c: "Le diagramme de Gantt", d: "Le diagramme d'Ishikawa" },
            reponse: "d",
            explication: "Le diagramme d'Ishikawa est également connu sous le nom de diagramme de causes et effets ou diagramme en arêtes de poisson en raison de sa forme."
        },
        {
            question: "Laquelle de ces questions n'appartient PAS à la méthode QQOQCP ?",
            options: { a: "Qui ?", b: "Combien ?", c: "Où ?", d: "Jamais ?" },
            reponse: "d",
            explication: "Le QQOQCP standard est Qui, Quoi, Où, Quand, Comment, Pourquoi. Une variante ajoute le Combien (QQOQCPC). 'Jamais' n'en fait pas partie."
        }
    ]
},

        //Module 07

'M07': {
    title: 'MEO-07 : Business Plan Stratégique',
    questions: [
        {
            question: "Quelle est la principale différence entre un business plan et un plan stratégique à moyen terme ?",
            options: { a: "Le business plan est plus long et moins détaillé financièrement", b: "Le plan stratégique a un objectif de rentabilité plus immédiat", c: "Le plan stratégique se situe en amont et est moins développé financièrement", d: "Il n'y a aucune différence, ce sont des synonymes" },
            reponse: "c",
            explication: "Le cours précise que le plan stratégique se situe en amont du BP, a un horizon plus long, et que ses aspects financiers sont souvent moins développés."
        },
        {
            question: "À quoi sert principalement un business plan dans le cadre d'une levée de capitaux ?",
            options: { a: "À valider une stratégie en interne", b: "À améliorer l'efficacité de l'entreprise", c: "À évaluer les besoins financiers et démontrer la rentabilité aux investisseurs", d: "À négocier le prix d'un contrat commercial" },
            reponse: "c",
            explication: "Pour la levée de capitaux, le BP a pour objectif d'évaluer les besoins financiers, de démontrer la rentabilité du projet aux investisseurs et la capacité de remboursement aux banquiers."
        },
        {
            question: "Lequel de ces termes est le plus proche d'une 'étude d'opportunité' ?",
            options: { a: "Le budget", b: "Le business model", c: "Le plan stratégique", d: "Le business case" },
            reponse: "d",
            explication: "Le cours indique explicitement que le 'business case' est synonyme d' 'étude d'opportunité'."
        },
        {
            question: "Quelle est l'une des quatre grandes finalités du business plan ?",
            options: { a: "C'est un outil de reporting comptable mensuel", b: "C'est un document de travail qui aide à bâtir son projet", c: "C'est un contrat de travail pour l'équipe projet", d: "C'est un simple outil formel de présentation sans dialogue" },
            reponse: "b",
            explication: "Le cours identifie quatre finalités, dont la première est d'être 'un document de travail qui aide à bâtir son projet'."
        },
        {
            question: "Qui est généralement chargé de la partie financière du business plan lorsque celui-ci porte sur l'ensemble de l'entreprise ?",
            options: { a: "Le responsable marketing", b: "Le directeur des ressources humaines", c: "Le directeur financier", d: "Un consultant externe obligatoirement" },
            reponse: "c",
            explication: "Le cours précise que 'Lorsqu'il porte sur l'ensemble d'une entreprise, la partie financière du BP est naturellement confiée au directeur financier'."
        },
        {
            question: "Dans l'étude de marché, qui sont les 'prescripteurs' ?",
            options: { a: "Les clients qui achètent le plus souvent", b: "Les concurrents directs", c: "Ceux qui conseillent ou déconseillent un produit sans forcément l'acheter", d: "Les consommateurs qui ne connaissent pas encore le produit" },
            reponse: "c",
            explication: "Le cours définit les prescripteurs comme ceux qui 'n'achètent pas toujours ni ne consomment, mais conseillent ou déconseillent'."
        },
        {
            question: "Lequel de ces facteurs n'est PAS cité comme un facteur influençant le marché ?",
            options: { a: "L'environnement technologique", b: "L'environnement politique", c: "L'environnement culturel", d: "L'environnement institutionnel" },
            reponse: "b",
            explication: "Le cours cite les environnements technologique, démographique, culturel et institutionnel. L'environnement politique n'est pas mentionné dans cette section."
        },
        {
            question: "Comment est déterminé le chiffre d'affaires prévisionnel pour une période donnée ?",
            options: { a: "Quantités à vendre x coût de production unitaire", b: "Quantités à vendre x prix de vente unitaire", c: "Marge bénéficiaire x nombre de clients", d: "Coûts fixes + coûts variables" },
            reponse: "b",
            explication: "La formule donnée dans le cours est : Chiffre d'affaires prévisionnel = Quantités des produits à vendre de la période x prix de vente unitaire."
        },
        {
            question: "La stratégie de 'place' (ou circuit de distribution) consiste à choisir :",
            options: { a: "Le prix le plus bas possible", b: "Les supports publicitaires les plus visibles", c: "L'emplacement où la clientèle trouvera les produits", d: "La meilleure qualité de produit" },
            reponse: "c",
            explication: "La 'place' concerne le choix de l'emplacement qui doit être 'visible et facile d'accès' et 'proche de la clientèle' pour qu'elle puisse trouver les produits."
        },
        {
            question: "Laquelle de ces propositions ne fait PAS partie des moyens humains à recruter pour conduire un projet ?",
            options: { a: "La production", b: "La gestion administrative et financière", c: "Les actionnaires", d: "Le marketing" },
            reponse: "c",
            explication: "Le cours liste la production, la gestion, le marketing et la sécurité comme des fonctions nécessitant de recruter du personnel. Les actionnaires sont des apporteurs de capitaux."
        },
        {
            question: "Qu'est-ce que le Besoin en Fonds de Roulement (BFR), aussi appelé besoin financier d'exploitation ?",
            options: { a: "La somme nécessaire pour acheter les immobilisations", b: "La somme d'argent nécessaire pour démarrer les activités avant de percevoir les premières recettes", c: "Le capital social de l'entreprise", d: "Le montant de l'emprunt à long terme" },
            reponse: "b",
            explication: "Le BFR est défini comme 'la somme d'argent nécessaire pour démarrer les activités du nouveau projet/entreprise' avant même de commencer à vendre."
        },
        {
            question: "Quelle est la source de financement constituée par le prêt qu'un ou plusieurs associés accordent à la société ?",
            options: { a: "Les fonds propres", b: "Le capital social", c: "Le compte courant d'associés", d: "L'emprunt bancaire" },
            reponse: "c",
            explication: "Le cours définit le compte courant d'associés comme 'le prêt qu'un ou plusieurs associés peuvent accorder à la société qu'ils ont créée'."
        },
        {
            question: "Que représente le compte de résultat (ou compte d'exploitation) ?",
            options: { a: "La liste des actifs et passifs de l'entreprise à un instant T", b: "Un tableau regroupant les produits et les charges d'une période pour calculer le résultat", c: "Le plan des entrées et sorties d'argent mois par mois", d: "Le détail des investissements à réaliser" },
            reponse: "b",
            explication: "Le compte de résultat est 'un tableau à deux parties qui regroupe d'un côté, les ventes (produits) [...] et, de l'autre côté, les charges de la même période'."
        },
        {
            question: "Qu'est-ce que le 'point mort' (ou seuil de rentabilité) ?",
            options: { a: "Le moment où l'entreprise réalise son bénéfice maximum", b: "Le seuil d'activité (chiffre d'affaires) à atteindre pour commencer à dégager des bénéfices", c: "Le montant total des investissements", d: "Le premier euro de chiffre d'affaires réalisé" },
            reponse: "b",
            explication: "Le point mort est 'le seuil d'activité que l'entreprise doit atteindre avant de commencer à dégager des bénéfices'."
        },
        {
            question: "Comment se calcule la Capacité d'Autofinancement (CAF) ?",
            options: { a: "Chiffre d'affaires - toutes les charges", b: "Résultat net + dotations aux amortissements et provisions", c: "Total des ventes", d: "Total des dettes" },
            reponse: "b",
            explication: "La formule donnée dans le cours est : Capacité d'autofinancement = résultat net + dotations aux amortissements et provisions."
        },
        {
            question: "Le ratio de solvabilité (Dettes à moyen/long terme / Capacité d'autofinancement) est souhaitable qu'il soit :",
            options: { a: "Toujours supérieur à 1", b: "Toujours inférieur à 1", c: "Égal à 0", d: "Le plus élevé possible" },
            reponse: "b",
            explication: "Ce ratio indique la capacité à rembourser la dette. Le cours précise : 'Il est souhaitable que ce ratio soit toujours inférieur à 1'."
        },
        {
            question: "L'impact sur le chômage et la préservation de l'environnement sont analysés dans quelle partie du business plan ?",
            options: { a: "L'étude de marché", b: "L'étude technique", c: "L'étude financière", d: "L'étude économique" },
            reponse: "d",
            explication: "Le cours place l'analyse de l'impact sur l'environnement et la réduction de la pauvreté (chômage) dans le chapitre 'ETUDE ECONOMIQUE'."
        },
        {
            question: "Quel type d'investissement est destiné à augmenter très sensiblement la capacité de production pour répondre à une forte demande ?",
            options: { a: "Investissement de renouvellement", b: "Investissement courant", c: "Investissement d'accroissement de capacité", d: "Investissement financier" },
            reponse: "c",
            explication: "Le cours distingue les investissements de renouvellement de ceux 'destinés à augmenter la capacité de production', citant l'exemple d'une entreprise qui double ses équipements."
        },
        {
            question: "Laquelle de ces solutions de financement n'est PAS un appel aux capitaux extérieurs ?",
            options: { a: "L'autofinancement", b: "L'augmentation de capital", c: "L'appel au crédit", d: "L'émission d'obligations" },
            reponse: "a",
            explication: "L'autofinancement consiste à utiliser les fonds propres de l'entreprise, tandis que les autres options font appel à des ressources externes (actionnaires, banques)."
        },
        {
            question: "Qu'est-ce que le crédit-bail (ou leasing) ?",
            options: { a: "Un prêt pour acheter directement un bien", b: "La location d'un bien avec la faculté de l'acquérir à la fin du contrat", c: "Une subvention de l'État", d: "Un crédit garanti par un document d'expédition" },
            reponse: "b",
            explication: "Le crédit-bail est défini comme 'la location de biens à usage professionnel [...] qui donnent au locataire la faculté de les acquérir au plus tard à la fin du contrat'."
        },
        {
            question: "Lequel de ces éléments n'est PAS un avantage du crédit-bail ?",
            options: { a: "Un coût sensiblement plus faible que le crédit bancaire", b: "La rapidité et la simplicité du dossier", c: "L'absence de mise de fonds initiale importante", d: "La neutralité comptable (le bien n'est pas à l'actif)" },
            reponse: "a",
            explication: "Le cours liste comme seul inconvénient du crédit-bail 'le coût, sensiblement plus élevé que celui du crédit bancaire'."
        },
        {
            question: "Dans le cadre d'un grand projet de construction, qui est le 'maître d'ouvrage' ?",
            options: { a: "L'entreprise qui réalise les travaux", b: "Le bureau d'étude qui surveille les travaux", c: "Celui qui réalise les appels d'offres et 'passe commande'", d: "L'organisme qui finance le projet" },
            reponse: "c",
            explication: "Le maître d'ouvrage est défini comme 'celui qui réalise les appels d'offres et « passe commande »'."
        },
        {
            question: "Quelle est la forme de passation de marché la plus courante ?",
            options: { a: "L'adjudication publique (au moins-disant)", b: "L'adjudication sur coefficients", c: "L'appel d'offres", d: "Le marché de gré à gré" },
            reponse: "c",
            explication: "Le cours stipule que l'appel d'offres 'est la forme de passation de marchés la plus courante'."
        },
        {
            question: "La 'caution de soumission' (ou provisoire) sert à garantir que l'entrepreneur :",
            options: { a: "Achèvera correctement les travaux", b: "Ne renoncera pas à exécuter le contrat après avoir été retenu", c: "Remboursera les avances de démarrage", d: "Corrigera les malfaçons durant la période de garantie" },
            reponse: "b",
            explication: "Elle couvre 'le paiement éventuel d'un dédit pour le cas où l'entrepreneur, après avoir été retenu, renoncerait à exécuter le contrat'."
        },
        {
            question: "La 'caution définitive' atteint généralement quel pourcentage du prix du marché ?",
            options: { a: "1 à 3%", b: "5%", c: "Jusqu'à 20%", d: "35%" },
            reponse: "b",
            explication: "Le cours indique que la caution définitive 'atteint 5% du prix du marché'."
        },
        {
            question: "Qu'est-ce qu'une caution 'à première demande' ?",
            options: { a: "Une caution que la banque peut refuser de payer", b: "Une caution où la banque doit s'exécuter sans discuter en cas de mise en jeu", c: "Une caution qui nécessite l'accord du client avant paiement", d: "Une caution qui n'est valable qu'une seule journée" },
            reponse: "b",
            explication: "Elle signifie qu'en cas de mise en jeu, 'la banque doit s'exécuter sans discuter'."
        },
        {
            question: "Le 'nantissement de marché' permet à l'entrepreneur de :",
            options: { a: "Céder son contrat à une autre entreprise", b: "Utiliser la créance qu'il a sur le maître d'ouvrage comme garantie pour un crédit", c: "Annuler le contrat sans pénalité", d: "Obtenir une avance de 100% sur les travaux" },
            reponse: "b",
            explication: "Le nantissement du marché est présenté comme une forme de crédit garanti où le banquier dispose d'une sûreté, qui est 'le nantissement de la créance de l'entrepreneur'."
        },
        {
            question: "Quel document est utilisé pour financer l'importation de biens et offre une garantie de paiement à l'exportateur ?",
            options: { a: "Le crédit-bail", b: "Le crédit acheteur", c: "L'avance sur marché", d: "Le crédit-documentaire" },
            reponse: "d",
            explication: "Le crédit-documentaire est présenté comme le moyen qui 'permettra à l'exportateur de bénéficier d'une garantie de paiement' lors d'une importation."
        },
        {
            question: "Dans un crédit documentaire, sur quoi se base l'engagement des banques ?",
            options: { a: "Uniquement sur la qualité réelle des marchandises", b: "Uniquement sur la conformité des documents présentés", c: "Sur la parole de l'importateur", d: "Sur la situation de trésorerie de l'exportateur" },
            reponse: "b",
            explication: "Le cours insiste : 'Le crédit documentaire n'est fondé que sur des documents. Les banques ne négocient que des documents'."
        },
        {
            question: "Un crédit documentaire 'confirmé' offre quelle sécurité supplémentaire à l'exportateur ?",
            options: { a: "Le crédit ne peut pas être annulé", b: "Il bénéficie d'un double engagement bancaire (banque de l'acheteur + sa propre banque)", c: "Le paiement est plus rapide", d: "Le coût est moins élevé" },
            reponse: "b",
            explication: "Si le crédit est confirmé, 'l'exportateur bénéficie d'un double engagement bancaire'."
        },
        {
            question: "Quelle est la première étape du processus d'achats ?",
            options: { a: "Négocier les termes du contrat", b: "Payer le fournisseur", c: "Recenser et sélectionner les fournisseurs", d: "Rédiger le bon de commande" },
            reponse: "c",
            explication: "Le premier travail des acheteurs consiste à 'recenser les fournisseurs [...] et à les sélectionner après la détermination de critères de sélection'."
        },
        {
            question: "Quelle partie du Business Plan présente l'identité, les expériences et le savoir-faire du promoteur ?",
            options: { a: "L'étude de marché", b: "L'étude technique", c: "La présentation de l'entrepreneur et de l'entreprise", d: "L'étude financière" },
            reponse: "c",
            explication: "Le chapitre 4, qui décrit la structure du BP, commence par la 'PRESENTATION DE L'ENTREPRENEUR ET DE L'ENTREPRISE', incluant l'identité du promoteur."
        },
        {
            question: "Le calcul des amortissements des actifs est détaillé dans quelle section du business plan ?",
            options: { a: "L'étude de marché", b: "L'étude économique", c: "L'étude financière", d: "L'étude technique" },
            reponse: "c",
            explication: "La section 4.5 'Tableau des Amortissements des éléments de l'actif' se trouve dans la partie 4 'ETUDE FINANCIERE'."
        },
        {
            question: "Quel document financier prévisionnel présente les entrées et sorties d'argent mois par mois ?",
            options: { a: "Le compte d'exploitation prévisionnel", b: "Le plan de financement annuel", c: "Le plan de trésorerie prévisionnel mensuel", d: "Le tableau des amortissements" },
            reponse: "c",
            explication: "Le plan de trésorerie prévisionnel mensuel (section 4.7) a pour but de détailler les 'Encaissements' et 'Décaissements' mois par mois."
        },
        {
            question: "Le 'coût total du projet' est constitué de la somme des investissements de départ et de quoi d'autre ?",
            options: { a: "Du capital social", b: "Du besoin financier d'exploitation (BFR)", c: "Du montant de l'emprunt", d: "Des salaires de la première année" },
            reponse: "b",
            explication: "Le cours stipule : 'La somme totale des investissements de départ et du besoin financier d'exploitation (besoin en fonds de roulement) constitue le coût total du projet'."
        },
        {
            question: "Un projet est jugé 'rentable' si :",
            options: { a: "Il utilise beaucoup de personnel", b: "Ses coûts sont très élevés", c: "Les résultats obtenus sont supérieurs aux moyens utilisés", d: "Il est financé uniquement par fonds propres" },
            reponse: "c",
            explication: "La rentabilité est mesurée en 'établissant le rapport entre le résultat obtenu et les moyens utilisés'. Un projet est dit rentable si les résultats sont supérieurs aux moyens."
        },
        {
            question: "Quelle est la caractéristique principale d'un investissement de renouvellement ?",
            options: { a: "Il vise à créer un produit totalement nouveau", b: "Il est effectué lorsque le matériel concerné est amorti et usé", c: "Il a pour but de doubler la production", d: "Il n'est jamais financé par crédit" },
            reponse: "b",
            explication: "Le cours les définit comme 'des investissements destinés à renouveler l'outil de production lorsque celui-ci est usé' et 'lorsque le matériel concerné est amorti'."
        },
        {
            question: "Dans le cadre d'un contrat de construction, qui est le 'maître d'œuvre' ?",
            options: { a: "Le client final (l'Etat par exemple)", b: "Le bureau d'étude qui surveille l'exécution des travaux", c: "L'entreprise qui construit le bâtiment", d: "La banque qui finance le projet" },
            reponse: "b",
            explication: "Le maître d'œuvre est 'un bureau d'étude (le plus souvent) indépendant appointé par le Maître d'ouvrage pour surveiller pour son compte l'exécution des travaux'."
        },
        {
            question: "À quoi sert la 'caution de retenue de garantie' ?",
            options: { a: "À garantir le bon démarrage des travaux", b: "À éviter un prélèvement sur les paiements destiné à couvrir les malfaçons", c: "À s'assurer que l'entreprise ne renonce pas au contrat", d: "À payer les fournisseurs" },
            reponse: "b",
            explication: "La délivrance de cette caution 'permet d'éviter ce prélèvement (la retenue de garantie) et de soulager la trésorerie de l'entreprise'."
        },
        {
            question: "Comment appelle-t-on le contrat par lequel l'importateur demande à sa banque de s'engager à payer un vendeur contre présentation de documents d'expédition ?",
            options: { a: "Un crédit-bail", b: "Une avance sur marché", c: "Un crédit-documentaire", d: "Un compte courant d'associé" },
            reponse: "c",
            explication: "C'est la définition même du crédit-documentaire : 'L'importateur demande à son banquier l'émission d'une lettre par laquelle ce banquier s'engage au profit du vendeur'."
        },
        {
            question: "Lequel de ces éléments fait partie du contenu d'un business plan pour un projet marchand ?",
            options: { a: "Uniquement l'organigramme de l'entreprise", b: "L'étude de l'intérêt d'un marché et le positionnement stratégique", c: "Uniquement la liste des employés", d: "Les statuts juridiques de l'entreprise" },
            reponse: "b",
            explication: "Le cours souligne que pour les projets marchands, il convient 'tout d'abord de convaincre de l'intérêt d'un marché et de la pertinence du positionnement stratégique choisi'."
        },
        {
            question: "L'élaboration d'un business plan est un document :",
            options: { a: "Strictement financier", b: "Multidisciplinaire (marketing, production, finance...)", c: "Rédigé uniquement par le dirigeant", d: "Qui n'est utile qu'à la création d'entreprise" },
            reponse: "b",
            explication: "Le cours indique que 'L'élaboration du BP est toutefois un document multidisciplinaire et fait appel à de nombreuses compétences au sein de l'entreprise'."
        },
        {
            question: "Quelle est la première étape de la réalisation d'une étude de marché ?",
            options: { a: "Déterminer les concurrents", b: "Définir le produit ou service", c: "Identifier la clientèle potentielle", d: "Calculer le chiffre d'affaires" },
            reponse: "b",
            explication: "Le cours liste les étapes de l'étude de marché et la première est '1.2.1. Définir le produit ou service'."
        },
        {
            question: "Le plan de financement permet de vérifier que :",
            options: { a: "Le chiffre d'affaires est maximal", b: "Les investissements sont entièrement couverts par des sources de financement", c: "L'entreprise a assez d'employés", d: "Les produits sont de bonne qualité" },
            reponse: "b",
            explication: "Il permet de vérifier si le projet est équilibré financièrement, c'est-à-dire si 'les investissements que vous devez réaliser seront entièrement assurés par des sommes d'argent'."
        },
        {
            question: "L'achat de matières premières et les salaires sont des exemples de :",
            options: { a: "Investissements de départ", b: "Charges d'exploitation", c: "Ressources de financement", d: "Produits financiers" },
            reponse: "b",
            explication: "Le cours liste l'achat de matières premières et les frais de personnel comme des 'charges d'exploitation'."
        },
        {
            question: "Un crédit-bail mobilier porte sur quel type de biens ?",
            options: { a: "Des bureaux et des ateliers", b: "Des terrains", c: "Des biens d'équipement ou du matériel d'outillage (véhicules, machines...)", d: "Des actions et des obligations" },
            reponse: "c",
            explication: "Le cours définit le crédit-bail mobilier comme portant sur 'des biens d'équipement ou la matériel d'outillage (véhicules, engins de travaux publics, machines....)'."
        },
        {
            question: "Quel est l'inconvénient principal du crédit-bail par rapport à un crédit bancaire classique ?",
            options: { a: "Sa complexité administrative", b: "Sa rapidité", c: "Son coût plus élevé", d: "Son manque de souplesse" },
            reponse: "c",
            explication: "Le cours est formel : le seul inconvénient est 'le coût, sensiblement plus élevé que celui du crédit bancaire'."
        },
        {
            question: "Dans le cadre de la procédure d'achat, à quelle phase appartient la construction d'un argumentaire ?",
            options: { a: "La première phase (information)", b: "La deuxième phase (négociation)", c: "La troisième phase (conclusion)", d: "La phase de suivi après commande" },
            reponse: "b",
            explication: "Le cours décompose la négociation en trois phases, et indique que 'Dans la deuxième phase, l'acheteur construit un argumentaire d'achat'."
        },
        {
            question: "Le tableau de financement (section 4.2 du modèle) a pour but de détailler :",
            options: { a: "Uniquement le coût des investissements", b: "Le chiffre d'affaires sur trois ans", c: "Les sources de financement (apport personnel et emprunt) pour couvrir le coût total", d: "Les salaires du personnel" },
            reponse: "c",
            explication: "Ce tableau met en regard le 'Coût total' des investissements avec les sources de financement prévues : 'Apport personnel' et 'Emprunt'."
        }
    ]
},

        //Module 08

    'M08': {
    title: 'MEO-08 : Le déploiement de la stratégie',
    questions: [
        {
            question: "Lequel de ces auteurs, général prussien, est une référence historique citée dans le cours pour sa définition de la stratégie ?",
            options: { a: "Sun Tzu", b: "Carl Von Clausewitz", c: "Peter Drucker", d: "Michael Porter" },
            reponse: "b",
            explication: "Le cours cite deux auteurs de référence : le Chinois Sun Tzu et le général prussien Carl Von Clausewitz (1780-1831)."
        },
        {
            question: "Combien de niveaux de stratégie organisationnelle le cours distingue-t-il ?",
            options: { a: "Deux (Corporate et Opérationnel)", b: "Trois (Entreprise, Domaine d'activités, Organisationnel)", c: "Quatre (Produit, Marché, Finance, RH)", d: "Un seul (la stratégie globale)" },
            reponse: "b",
            explication: "Le cours distingue trois niveaux : la stratégie d'entreprise (corporate), la stratégie par domaine d'activités (business), et la stratégie opérationnelle au niveau de l'organisation."
        },
        {
            question: "Une stratégie d'intégration verticale 'en aval' consiste à :",
            options: { a: "Racheter un fournisseur", b: "Vendre directement au client en supprimant les intermédiaires", c: "Racheter un concurrent direct", d: "Se développer sur un nouveau marché géographique" },
            reponse: "b",
            explication: "L'intégration est verticale (et non horizontale). Lorsqu'elle se dirige vers le client, elle est 'en aval'. L'affirmation du test (question 03) était donc incorrecte."
        },
        {
            question: "En lien avec la chaîne de résultats, combien de types d'indicateurs distingue-t-on généralement ?",
            options: { a: "Un seul : l'indicateur d'impact", b: "Deux : indicateurs financiers et non financiers", c: "Trois : indicateurs de projet, de programme et de portefeuille", d: "Quatre : indicateurs d'intrants, de produits (extrants), d'effets et d'impact" },
            reponse: "d",
            explication: "On distingue en général quatre types d'indicateurs qui correspondent aux niveaux de la chaîne de résultats : intrants, produits/extrants, effets et impact."
        },
        {
            question: "L'affirmation 'Toute entreprise est confrontée nécessairement à la même culture et aux mêmes valeurs' est-elle correcte ?",
            options: { a: "Oui, si elle est dans le même secteur d'activité", b: "Non, une même organisation peut abriter différentes sous-cultures", c: "Oui, la culture est toujours uniforme", d: "Non, mais les valeurs sont toujours identiques" },
            reponse: "b",
            explication: "Cette affirmation est fausse. Une organisation n'a pas nécessairement une culture unique et uniforme ; elle peut être composée de différentes sous-cultures."
        },
        {
            question: "Lesquels de ces outils sont cités comme les principaux pour le suivi du plan stratégique ?",
            options: { a: "Le bilan comptable et le compte de résultat", b: "Le diagramme de Gantt et la matrice RACI", c: "Le cadre logique, le cadre de mesure du rendement, et le cadre de suivi des activités", d: "Uniquement le tableau de bord prospectif" },
            reponse: "c",
            explication: "La question 6 du test de connaissances liste ces trois outils comme les principaux pour le suivi du plan stratégique."
        },
        {
            question: "La planification stratégique, en tant que processus, vise principalement à répondre à combien de questions fondamentales ?",
            options: { a: "Une seule : que faire ?", b: "Deux : où sommes-nous et où allons-nous ?", c: "Quatre : Où sommes-nous, où voulons-nous aller, comment y parvenir, et comment mesurer le progrès ?", d: "Cinq" },
            reponse: "c",
            explication: "Le processus de planification stratégique vise à répondre à quatre questions principales : le diagnostic, la vision, les moyens, et le suivi."
        },
        {
            question: "Combien de 'règles d'or' de la planification stratégique sont mises en avant dans le test de connaissances ?",
            options: { a: "Deux", b: "Cinq", c: "Sept", d: "Dix" },
            reponse: "a",
            explication: "Le test de connaissances (question 08) mentionne qu'on distingue deux règles d'or, bien qu'elles ne soient pas détaillées dans les extraits fournis."
        },
        {
            question: "Au plan interne, la planification stratégique est avant tout un processus de :",
            options: { a: "Contrôle budgétaire", b: "Reporting hiérarchique", c: "Réflexion et d'introspection", d: "Communication externe" },
            reponse: "c",
            explication: "Le cours et le test (question 09) soulignent que la planification stratégique est un processus de réflexion et d'introspection pour l'organisation."
        },
        {
            question: "À quel moment le plan d'action (ou plan opérationnel) intervient-il ?",
            options: { a: "Avant la définition de la vision", b: "Après la définition des objectifs stratégiques", c: "Pendant le diagnostic stratégique", d: "Il est indépendant des objectifs stratégiques" },
            reponse: "b",
            explication: "Le plan d'action est la déclinaison opérationnelle de la stratégie. Il intervient donc logiquement une fois que les grands objectifs stratégiques sont définis."
        },
        {
            question: "L'objectif du Tableau de Bord Prospectif (Balanced Scorecard) est de :",
            options: { a: "Contrôler uniquement la performance financière passée", b: "Remplacer le plan stratégique", c: "Piloter la performance à moyen terme et suivre la mise en œuvre de la stratégie", d: "Mesurer uniquement la satisfaction des employés" },
            reponse: "c",
            explication: "L'objectif du TBP est de fournir une vue d'ensemble pour piloter la performance, suivre la stratégie et inciter à l'action, en allant au-delà des seuls indicateurs financiers."
        },
        {
            question: "Le Tableau de Bord Stratégique (TBP) cherche à concilier combien de perspectives ?",
            options: { a: "Deux : financière et client", b: "Trois : financière, client et processus", c: "Quatre : financière, client, processus internes, et apprentissage organisationnel", d: "Cinq" },
            reponse: "c",
            explication: "Le TBP classique, ou Balanced Scorecard, concilie quatre perspectives. L'affirmation du test (question 14) disant qu'il en concilie deux est donc fausse."
        },
        {
            question: "Lequel de ces éléments correspond à la définition du 'pilotage opérationnel' ?",
            options: { a: "La révision de la mission de l'entreprise", b: "Le suivi de l'exécution des tâches au niveau des opérations et du plan d'action", c: "L'analyse des menaces et opportunités externes", d: "La définition des grands axes stratégiques sur 5 ans" },
            reponse: "b",
            explication: "Le pilotage opérationnel est bien le suivi de l'exécution au niveau des opérations, en lien direct avec le plan d'action."
        },
        {
            question: "L'intérêt majeur du Tableau de Bord Prospectif (TBP) est qu'il :",
            options: { a: "S'attache uniquement aux résultats financiers", b: "Est très simple à mettre en place", c: "Ne nécessite pas de données chiffrées", d: "Dépasse la seule dimension financière pour une vision globale de la performance" },
            reponse: "d",
            explication: "L'affirmation 'il s'attache seulement aux résultats financiers' (question 17) est fausse. L'intérêt principal du TBP est justement d'intégrer d'autres dimensions (client, processus, apprentissage)."
        },
        {
            question: "Quelle est la finalité principale d'un tableau de bord ?",
            options: { a: "Produire un rapport pour les archives", b: "Prendre des décisions pour agir à partir de résultats constatés", c: "Justifier les dépenses passées", d: "Communiquer la stratégie aux actionnaires" },
            reponse: "b",
            explication: "Un tableau de bord n'est pas un simple outil de reporting ; sa finalité est d'être un outil d'aide à la décision pour agir."
        },
        {
            question: "Quel est l'outil qui permet de clarifier les rôles et responsabilités (Qui fait quoi ?) dans un projet ou processus ?",
            options: { a: "La matrice SWOT", b: "Le diagramme d'Ishikawa", c: "La matrice RACI", d: "L'analyse PESTEL" },
            reponse: "c",
            explication: "La matrice RACI (Responsible, Accountable, Consulted, Informed) est un outil de gestion de projet pour identifier les rôles et responsabilités. L'affirmation du test (question 21) qui l'associait au SWOT est fausse."
        },
        {
            question: "L'outil FFOM est l'acronyme français pour quel outil d'analyse stratégique ?",
            options: { a: "Les 5 Forces de Porter", b: "Le Tableau de Bord Prospectif", c: "La matrice BCG", d: "La matrice SWOT" },
            reponse: "d",
            explication: "FFOM (Forces, Faiblesses, Opportunités, Menaces) est la traduction française de SWOT (Strengths, Weaknesses, Opportunities, Threats)."
        },
        {
            question: "Laquelle de ces affirmations concernant l'analyse SWOT est FAUSSE ?",
            options: { a: "Elle synthétise les forces/faiblesses internes et les menaces/opportunités externes", b: "Elle permet d'identifier des choix de développement stratégique", c: "Elle permet d'évaluer l'attractivité structurelle d'une industrie", d: "Elle permet d'identifier les forces et faiblesses de l'organisation" },
            reponse: "c",
            explication: "L'évaluation de l'attractivité d'une industrie relève principalement du modèle des 5 forces de Porter, et non de l'analyse SWOT."
        },
        {
            question: "Qu'est-ce qu'un 'facteur clé de succès' (FCS) ?",
            options: { a: "Un objectif financier de l'entreprise", b: "Ce que l'entreprise doit maîtriser pour obtenir un avantage concurrentiel", c: "Le produit le plus vendu de l'entreprise", d: "Un indicateur du tableau de bord" },
            reponse: "b",
            explication: "Un FCS est un élément stratégique (compétence, ressource, etc.) que l'entreprise doit absolument maîtriser pour réussir et surpasser ses concurrents dans un secteur donné."
        },
        {
            question: "Une analyse SWOT est :",
            options: { a: "Uniquement une analyse interne à l'entreprise", b: "Uniquement une analyse externe de l'environnement", c: "À la fois une analyse interne (Forces/Faiblesses) et externe (Opportunités/Menaces)", d: "Une analyse financière" },
            reponse: "c",
            explication: "L'affirmation 'Une analyse SWOT est une analyse interne' (question 25) est fausse car incomplète. Elle comporte un volet interne (SW) et un volet externe (OT)."
        },
        {
            question: "Dans la matrice SWOT, les menaces et les opportunités correspondent à :",
            options: { a: "L'environnement interne et contrôlable de l'entreprise", b: "L'environnement extérieur de l'entreprise", c: "Aux décisions passées de l'entreprise", d: "Aux compétences des salariés" },
            reponse: "b",
            explication: "Les menaces et opportunités sont des facteurs exogènes, qui proviennent de l'environnement externe et sur lesquels l'entreprise a peu de contrôle."
        },
        {
            question: "Quelle est la différence entre l'efficience et l'efficacité ?",
            options: { a: "Il n'y en a aucune, ce sont des synonymes", b: "L'efficacité est l'atteinte d'un objectif, l'efficience est l'atteinte de cet objectif avec un minimum de moyens", c: "L'efficience est l'atteinte d'un objectif, l'efficacité est l'atteinte de cet objectif avec un minimum de moyens", d: "L'efficacité est un concept financier, l'efficience est un concept marketing" },
            reponse: "b",
            explication: "L'efficacité est la capacité à atteindre un objectif fixé. L'efficience est la capacité à atteindre cet objectif en optimisant les ressources utilisées. Ce ne sont pas des synonymes."
        },
        {
            question: "Les trois composantes du management stratégique sont :",
            options: { a: "Marketing, Finance, et Production", b: "Diagnostic, Choix, et Déploiement stratégique", c: "Planification, Organisation, et Contrôle", d: "Vision, Mission, et Valeurs" },
            reponse: "b",
            explication: "Le cours structure le management stratégique en trois grandes composantes : le diagnostic, les choix et le déploiement."
        },
        {
            question: "Comment appelle-t-on le type de changement stratégique qui est à la fois incrémental et qui ne modifie pas le paradigme de l'entreprise ?",
            options: { a: "La révolution", b: "La reconstruction", c: "L'évolution", d: "L'adaptation" },
            reponse: "d",
            explication: "Le cours présente une matrice à 4 types de changements. L'adaptation est un changement incrémental qui s'inscrit dans le paradigme existant (réalignement)."
        },
        {
            question: "Un changement qui implique une transformation rapide et radicale du paradigme de l'entreprise est une :",
            options: { a: "Adaptation", b: "Évolution", c: "Reconstruction", d: "Révolution" },
            reponse: "d",
            explication: "La révolution est le type de changement le plus extrême, combinant une nature radicale et une transformation du paradigme, souvent en réponse à une crise."
        },
        {
            question: "Lequel de ces styles de conduite du changement repose sur l'implication des groupes dans la définition des priorités ?",
            options: { a: "La direction", b: "L'éducation/communication", c: "La collaboration/participation", d: "La coercition" },
            reponse: "c",
            explication: "La collaboration ou participation consiste à impliquer activement les acteurs concernés dans les décisions relatives au changement."
        },
        {
            question: "Le style de conduite du changement qui utilise l'autorité pour fixer les orientations et les moyens est :",
            options: { a: "La collaboration", b: "L'intervention", c: "La direction", d: "L'éducation" },
            reponse: "c",
            explication: "La direction est un style 'top-down' qui suppose le recours à l'autorité personnelle d'un responsable pour définir clairement l'orientation."
        },
        {
            question: "Lequel de ces éléments N'EST PAS un levier de changement stratégique cité dans le cours ?",
            options: { a: "Le redressement", b: "Le remplacement des managers", c: "La suppression de la communication", d: "La stabilisation de la crise" },
            reponse: "c",
            explication: "Le cours cite plusieurs leviers comme le redressement, la stabilisation, le remplacement de managers, etc. La communication est au contraire un élément clé pour piloter le changement, pas un levier à supprimer."
        },
        {
            question: "Que sont les 'routines organisationnelles' dans le contexte du changement ?",
            options: { a: "Les objectifs stratégiques de l'entreprise", b: "Les 'manières de faire' spécifiques à l'organisation, qui ont tendance à perdurer", c: "Les rapports financiers mensuels", d: "Les réunions de l'équipe de direction" },
            reponse: "b",
            explication: "Les routines sont les processus et habitudes collectives qui orientent les comportements. Changer la stratégie implique souvent de devoir modifier ces routines."
        },
        {
            question: "Laquelle de ces structures est la plus adaptée si le contrôle strict est la priorité et que la flexibilité est moins essentielle ?",
            options: { a: "La structure matricielle", b: "La structure par équipes", c: "La structure fonctionnelle", d: "La structure transnationale" },
            reponse: "c",
            explication: "La structure fonctionnelle, par sa spécialisation et sa hiérarchie claire, permet un contrôle élevé, mais peut manquer de flexibilité."
        },
        {
            question: "La structure 'matricielle' est une combinaison de quelles structures ?",
            options: { a: "Uniquement de deux structures par projets", b: "D'une structure fonctionnelle avec une structure divisionnelle (par produit ou projet)", c: "Uniquement de deux structures en holding", d: "D'une structure par équipes et d'une structure transnationale" },
            reponse: "b",
            explication: "La structure matricielle est une structure hybride qui croise le plus souvent une logique fonctionnelle (verticale) avec une logique de projet ou de produit (horizontale)."
        },
        {
            question: "Quel est l'un des principaux inconvénients de la structure matricielle ?",
            options: { a: "Elle manque de flexibilité", b: "Elle ne favorise pas l'apprentissage", c: "Elle peut diluer les responsabilités à cause de la double ligne de commandement", d: "Elle est très peu coûteuse à gérer" },
            reponse: "c",
            explication: "Le test de responsabilité de Goold et Campbell souligne que les structures matricielles sont souvent accusées de diluer les responsabilités en raison du double reporting."
        },
        {
            question: "Laquelle de ces stratégies correspond à la 'stratégie institutionnelle' ?",
            options: { a: "La stratégie de maintien ou de croissance", b: "La définition de la mission de l'organisation", c: "La stratégie marketing ou financière", d: "La manière de concurrencer les autres sur un marché" },
            reponse: "b",
            explication: "Les choix concernant la mission de l'entreprise (ses grands objectifs, ses valeurs) relèvent de la stratégie institutionnelle."
        },
        {
            question: "La matrice d'Ansoff propose quatre stratégies de croissance. Laquelle consiste à vendre des produits existants sur de nouveaux marchés ?",
            options: { a: "La pénétration de marché", b: "Le développement de produits", c: "L'extension de marché", d: "La diversification" },
            reponse: "c",
            explication: "L'extension de marché (ou développement de marché) consiste à trouver de nouveaux marchés ou de nouveaux segments pour les produits actuels de l'entreprise."
        },
        {
            question: "L'analyse du champ de force de Kurt Lewin sert à :",
            options: { a: "Analyser la structure financière de l'entreprise", b: "Identifier les forces motrices qui poussent au changement et les forces de rétention qui y résistent", c: "Évaluer la performance des employés", d: "Choisir la bonne structure organisationnelle" },
            reponse: "b",
            explication: "Cet outil de diagnostic vise à identifier les forces en présence (pour et contre) afin de préparer un plan d'action pour gérer le changement."
        },
        {
            question: "Selon le cours, quelle communication est la plus 'riche' et adaptée aux changements complexes ?",
            options: { a: "Le bulletin général (affichage)", b: "Le courrier personnalisé (lettre)", c: "La communication interactive (téléphone, vidéo)", d: "La communication face-à-face" },
            reponse: "d",
            explication: "Le schéma de Lengel et Daft montre que la communication face-à-face est la plus riche et la plus efficace pour les changements complexes, tandis qu'une communication pauvre (affichage) peut engendrer de la méfiance."
        },
        {
            question: "Lequel de ces éléments est considéré comme un 'piège potentiel du changement' ?",
            options: { a: "La planification du changement", b: "L'implication des individus", c: "La ritualisation du changement", d: "La compréhension de la culture" },
            reponse: "c",
            explication: "Le cours liste plusieurs pièges, dont 'La ritualisation du changement', où le processus de changement devient une fin en soi sans produire de réels résultats."
        },
        {
            question: "Quelle est la nature d'une décision stratégique ?",
            options: { a: "Elle est simple, certaine et affecte le court terme", b: "Elle est complexe, prise en situation d'incertitude et oriente le long terme", c: "Elle est routinière, réversible et concerne un seul département", d: "Elle est toujours basée sur des données complètes et fiables" },
            reponse: "b",
            explication: "Les caractéristiques des décisions stratégiques sont leur complexité, le fait qu'elles sont élaborées en situation d'incertitude et qu'elles engagent l'organisation sur le long terme."
        },
        {
            question: "La 'capacité stratégique' d'une organisation est déterminée par :",
            options: { a: "Uniquement sa position sur le marché", b: "Ses ressources et compétences internes", c: "Les directives du gouvernement", d: "Le nombre de ses concurrents" },
            reponse: "b",
            explication: "La capacité stratégique est une perspective interne, qui repose sur l'analyse des ressources et compétences qui permettent à l'organisation de construire un avantage concurrentiel."
        },
        {
            question: "La 'vision' ou 'intention stratégique' exprime :",
            options: { a: "Le propos fondamental actuel de l'organisation", b: "L'état futur souhaité, l'aspiration de l'organisation", c: "Les résultats financiers de l'année passée", d: "Les règles du code de conduite" },
            reponse: "b",
            explication: "La vision est tournée vers le futur : elle décrit ce que l'organisation aspire à devenir. Elle se distingue de la mission, qui est la raison d'être actuelle."
        },
        {
            question: "Comment appelle-t-on le niveau de stratégie qui définit comment un avantage peut être obtenu par rapport aux concurrents dans un domaine d'activité ?",
            options: { a: "Stratégie d'entreprise", b: "Stratégie par domaine d'activités", c: "Stratégie opérationnelle", d: "Stratégie fonctionnelle" },
            reponse: "b",
            explication: "C'est la définition même de la stratégie par domaine d'activités (ou 'business strategy'), qui se concentre sur la dimension concurrentielle."
        },
        {
            question: "Le diagnostic stratégique consiste à comprendre l'impact de l'environnement externe, de la capacité interne et :",
            options: { a: "Des résultats financiers passés", b: "Des attentes et influences des parties prenantes", c: "De la structure hiérarchique", d: "Des technologies disponibles" },
            reponse: "b",
            explication: "Le diagnostic stratégique repose sur l'analyse de trois piliers : l'environnement, la capacité stratégique, et les attentes des parties prenantes (stakeholders)."
        },
        {
            question: "Dans les quatre types de choix stratégiques, lequel correspond à la 'stratégie directrice' ?",
            options: { a: "Les décisions sur la mission de l'organisation", b: "Les décisions sur la façon de concurrencer", c: "Les décisions sur les stratégies fonctionnelles (marketing, RH...)", d: "Les décisions sur les domaines dans lesquels l'entreprise désire œuvrer" },
            reponse: "d",
            explication: "La stratégie directrice concerne les choix de portefeuille : dans quels domaines d'activité l'entreprise va-t-elle s'engager (maintien, croissance, retrait)."
        },
        {
            question: "Quel est le rôle des 'managers intermédiaires' dans le déploiement de la stratégie ?",
            options: { a: "Ils n'ont aucun rôle, seul le top management agit", b: "Leur rôle est uniquement de contrôler l'exécution sans interprétation", c: "Ils jouent un rôle clé de traduction, d'interprétation et d'ajustement de la stratégie sur le terrain", d: "Ils définissent la vision et la mission de l'entreprise" },
            reponse: "c",
            explication: "Le cours souligne que les managers intermédiaires sont un lien fondamental, assurant la traduction, l'appropriation et l'ajustement de la stratégie."
        },
        {
            question: "Les symboles, les mythes et les rites organisationnels sont des manifestations de :",
            options: { a: "La structure financière", b: "La culture de l'organisation", c: "La stratégie marketing", d: "Du système de contrôle de gestion" },
            reponse: "b",
            explication: "Ces éléments (le 'tissu culturel') sont des aspects intangibles mais puissants de la culture organisationnelle qui peuvent faciliter ou freiner le changement."
        },
        {
            question: "Laquelle de ces propositions est une tactique de changement stratégique ?",
            options: { a: "Maintenir le statu quo à tout prix", b: "Ignorer le besoin de communiquer", c: "La chronologie : choisir le moment idéal pour déclencher le changement", d: "Éviter toute modification de la hiérarchie" },
            reponse: "c",
            explication: "Le cours liste plusieurs tactiques, dont la chronologie. Le choix du bon moment pour initier un changement est une décision tactique essentielle."
        },
        {
            question: "L' 'approche processus', un des huit principes du management moderne, signifie que :",
            options: { a: "Seuls les résultats finaux comptent, peu importe comment ils sont obtenus", b: "Un résultat est atteint plus efficacement lorsque les activités et ressources sont gérées comme des processus", c: "Il faut se concentrer uniquement sur l'amélioration des produits", d: "Chaque département doit travailler en silo" },
            reponse: "b",
            explication: "Ce principe stipule qu'une gestion par processus permet d'améliorer l'efficacité et l'efficience en clarifiant les activités, les ressources et les interactions nécessaires à l'atteinte d'un résultat."
        },
        {
            question: "Un des 'neuf tests' de Goold et Campbell pour évaluer les choix structurels est le 'test de marché'. Il vise à déterminer :",
            options: { a: "Si l'entreprise a assez de managers", b: "Si la structure est flexible", c: "L'adéquation entre la structure et la stratégie", d: "Si les employés sont satisfaits" },
            reponse: "c",
            explication: "Le test de marché, inspiré des travaux de Chandler, a pour but de vérifier que la structure organisationnelle choisie est bien en adéquation avec la stratégie de l'entreprise."
        },
        {
            question: "Le déploiement stratégique est la phase qui :",
            options: { a: "Précède le diagnostic stratégique", b: "Est indépendante des choix stratégiques", c: "Matérialise le management stratégique par la mise en œuvre", d: "Consiste uniquement à analyser l'environnement" },
            reponse: "c",
            explication: "Le déploiement est la phase finale et cruciale du management stratégique, celle qui traduit les choix en actions concrètes et conditionne la survie de l'organisation."
        }
    ]
},

        //Module 09

        'M09': {
    title: 'MEO-M09 : Conduite du Changement',
    questions: [
        {
            question: "Quelle est la définition la plus correcte de la conduite du changement ?",
            options: { a: "L'imposition de nouvelles règles par la direction", b: "L'ensemble des méthodes pour accompagner une transformation et aboutir rapidement à des résultats d'évolution", c: "Le remplacement progressif du personnel existant", d: "La simple mise à jour des logiciels de l'entreprise" },
            reponse: "b",
            explication: "La conduite du changement est l'accompagnement d'un processus de transformation pour aider les équipes à comprendre, accepter et s'approprier le changement."
        },
        {
            question: "Quel concept est étroitement lié à la conduite du changement et implique une acquisition collective de compétences ?",
            options: { a: "L'externalisation", b: "L'apprentissage organisationnel", c: "La restructuration financière", d: "Le marketing opérationnel" },
            reponse: "b",
            explication: "L'apprentissage organisationnel est défini comme un phénomène collectif d'acquisition de compétences qui modifie la gestion des situations."
        },
        {
            question: "Parmi ces trois types d'enjeux de la conduite du changement, lequel est cité dans le cours ?",
            options: { a: "Enjeu environnemental", b: "Enjeu technologique", c: "Enjeu psychologique", d: "Enjeu juridique" },
            reponse: "c",
            explication: "Le cours distingue trois types d'enjeux : économique, sociologique et psychologique."
        },
        {
            question: "Dans le modèle de Kurt Lewin, quelle est la première étape (métaphore du bloc de glace) ?",
            options: { a: "Change (Changement)", b: "Refreeze (Gel)", c: "Unfreeze (Dégel)", d: "Melt (Fonte)" },
            reponse: "c",
            explication: "Le modèle de Lewin comprend trois étapes : Unfreeze (Dégel), Change (Changement), et Refreeze (Gel)."
        },
        {
            question: "Selon Kotter, quelle est la première étape pour mener le changement avec succès ?",
            options: { a: "Développer une vision stratégique", b: "Créer un sentiment d'urgence", c: "Former une équipe de pilotage", d: "Générer des victoires rapides (quick wins)" },
            reponse: "b",
            explication: "La première étape du modèle en 8 étapes de Kotter est de créer un sentiment d'urgence pour justifier la nécessité du changement."
        },
        {
            question: "Qu'est-ce qu'une 'Quick win' (victoire rapide) dans le processus de changement ?",
            options: { a: "Un licenciement immédiat", b: "Un projet à court terme, peu coûteux, servant de facteur de motivation", c: "Une augmentation de salaire générale", d: "Un changement imposé par le directeur" },
            reponse: "b",
            explication: "Les 'quick wins' sont des projets à court terme faciles à réaliser qui servent à donner de l'élan et motiver les équipes en montrant des résultats concrets."
        },
        {
            question: "Quel outil permet de dégager la nature des relations entre les acteurs d'un système étudié ?",
            options: { a: "Le brainstorming", b: "La méthode K.J", c: "Le sociogramme", d: "Le diagramme d'Ishikawa" },
            reponse: "c",
            explication: "Le sociogramme est un outil de visualisation des relations (positives, négatives ou neutres) entre les acteurs d'un système."
        },
        {
            question: "L'outil 'Champs de force' (Force Field Analysis) de Kurt Lewin sert à :",
            options: { a: "Mesurer la vitesse du changement", b: "Analyser les forces positives et négatives face à un blocage", c: "Calculer le retour sur investissement d'un projet", d: "Recruter des agents de changement" },
            reponse: "b",
            explication: "La matrice 'Champs de force' permet d'analyser les forces qui poussent vers le changement et celles qui y résistent pour permettre le déblocage."
        },
        {
            question: "Quel modèle décrit le processus de passage de l'individu par des étapes comme le choc, la colère, et la quête de sens ?",
            options: { a: "Le diamant de Leavitt", b: "La courbe du deuil", c: "L'équation du changement", d: "Le modèle de Kotter" },
            reponse: "b",
            explication: "La courbe du deuil représente les étapes émotionnelles par lesquelles passe un individu face à un changement majeur."
        },
        {
            question: "Dans le 'Diamant de Leavitt', quels sont les quatre composantes clés de l'organisation à analyser ?",
            options: { a: "Produit, Prix, Place, Promotion", b: "Individus, Tâches, Structure, Technologie", c: "Forces, Faiblesses, Opportunités, Menaces", d: "Mission, Vision, Valeurs, Stratégie" },
            reponse: "b",
            explication: "Le diamant de Leavitt identifie quatre composantes interdépendantes : les individus, les tâches, l'organisation (structure) et la technologie."
        },
        {
            question: "Quelle méthode de créativité consiste à obtenir le maximum d'idées d'un groupe en un temps limité ?",
            options: { a: "Le sociogramme", b: "Le brainstorming", c: "L'entretien semi-directif", d: "La méthode K.J" },
            reponse: "b",
            explication: "Le brainstorming est une technique d'animation visant à générer une grande quantité d'idées en groupe sans jugement immédiat."
        },
        {
            question: "La 'situation de transition' dans un processus de changement est définie comme :",
            options: { a: "La fin du projet", b: "Le moment où les forces positives et négatives s'affrontent", c: "La phase de planification budgétaire", d: "Le retour à l'ancienne situation" },
            reponse: "b",
            explication: "La situation de transition est la phase durant laquelle s'affrontent les forces positives (appui) et les forces négatives (entrave) au changement."
        },
        {
            question: "L'entretien semi-directif est un outil de quelle catégorie ?",
            options: { a: "Outil de pilotage", b: "Outil d'écoute", c: "Outil d'animation", d: "Outil de mesure de risque" },
            reponse: "b",
            explication: "L'entretien semi-directif est classé parmi les outils de l'écoute, permettant de recueillir des informations ciblées."
        },
        {
            question: "Quelle est la caractéristique principale d'un changement de 'Type 2' selon le cours ?",
            options: { a: "Il est réversible", b: "Il touche uniquement une petite partie de l'organisation", c: "Il est irréversible et remet en cause le fonctionnement global", d: "Il est planifié uniquement par les employés" },
            reponse: "c",
            explication: "Le changement de type 2 (transformation) est profond, irréversible et touche l'ensemble du système, contrairement au type 1 qui est partiel et réversible."
        },
        {
            question: "Quel rôle joue le 'Promoteur' (Dirigeant) dans la conduite du changement ?",
            options: { a: "Il exécute les tâches techniques", b: "Il est le moteur qui a le pouvoir et l'influence pour décider", c: "Il est la cible passive du changement", d: "Il n'intervient que lors de l'évaluation finale" },
            reponse: "b",
            explication: "Le promoteur est le moteur du changement qui détient le pouvoir décisionnel et l'influence nécessaire pour initier la transformation."
        },
        {
            question: "L'étape de 'Refreeze' (Gel) dans le modèle de Lewin a pour but de :",
            options: { a: "Préparer les esprits au changement", b: "Stabiliser et consolider la nouvelle organisation", c: "Lancer les nouvelles activités", d: "Identifier les résistances" },
            reponse: "b",
            explication: "La phase de Gel consiste à stabiliser les nouveaux comportements et méthodes pour éviter un retour à l'ancienne situation."
        },
        {
            question: "La méthode K.J (Kawakita Jiro) est une méthode utilisée pour :",
            options: { a: "Calculer des coûts", b: "Analyser des problèmes complexes par regroupement de données", c: "Former le personnel", d: "Gérer le temps" },
            reponse: "b",
            explication: "La méthode K.J est une technique de créativité et d'analyse qui aide à structurer des données relatives à un problème pour faire ressortir des relations significatives."
        },
        {
            question: "Quelles sont les trois étapes de l'Équation du changement de Beckhard et Harris ?",
            options: { a: "Insatisfaction, Vision, Premiers pas", b: "Urgence, Équipe, Vision", c: "Diagnostic, Planification, Implantation", d: "Choc, Colère, Sérénité" },
            reponse: "a",
            explication: "L'équation du changement stipule que le changement (C) se produit si : Insatisfaction (I) x Vision (V) x Premiers pas (P) > Résistance (R)."
        },
        {
            question: "Selon Kotter, comment doit être la vision stratégique ?",
            options: { a: "Longue et détaillée", b: "Claire, concise et communicable", c: "Secrète et connue uniquement de la direction", d: "Purement financière" },
            reponse: "b",
            explication: "La vision doit être claire et concise pour pouvoir être communiquée efficacement à tous les membres de l'organisation."
        },
        {
            question: "Le 'coaching' dans la conduite du changement vise à :",
            options: { a: "Sanctionner les mauvais éléments", b: "Préparer l'individu à une perspective d'évolution et d'amélioration", c: "Rédiger le cahier des charges", d: "Animer des réunions de groupe" },
            reponse: "b",
            explication: "Le coaching est un accompagnement individuel destiné à aider une personne à s'adapter, évoluer et améliorer ses performances."
        },
        {
            question: "La grille d'analyse de la situation permet de repérer quels éléments ?",
            options: { a: "Uniquement les coûts", b: "Les acteurs, les problèmes, les ressources et les stratégies", c: "Le nombre de jours de congé", d: "La liste des fournisseurs" },
            reponse: "b",
            explication: "Cette grille permet une analyse complète en identifiant les acteurs, les problèmes, les ressources disponibles et les stratégies en présence."
        },
        {
            question: "Pourquoi la résistance au changement est-elle considérée comme 'humaine' ?",
            options: { a: "Parce qu'elle est toujours justifiée", b: "Parce qu'elle résulte de facteurs comme la peur de l'inconnu ou la routine", c: "Parce qu'elle ne concerne que les chefs", d: "Parce qu'elle est illégale" },
            reponse: "b",
            explication: "Le cours souligne que la résistance est naturelle car elle émane de facteurs psychologiques humains comme la peur de l'inconnu ou le besoin de sécurité."
        },
        {
            question: "La formation, en tant qu'outil d'animation du changement, permet de confronter :",
            options: { a: "Les besoins de l'entreprise et les attentes du salarié", b: "Les concurrents entre eux", c: "La direction et les syndicats uniquement", d: "Les objectifs financiers et les objectifs marketing" },
            reponse: "a",
            explication: "La formation structurée permet de faire le pont entre les besoins d'évolution de l'entreprise et les aspirations individuelles des salariés."
        },
        {
            question: "Le 'cahier des charges' est un outil permettant de formaliser :",
            options: { a: "Les résultats financiers annuels", b: "Les objectifs, le processus et les étapes d'un projet", c: "La liste des clients", d: "La culture d'entreprise" },
            reponse: "b",
            explication: "Le cahier des charges formalise de manière rigoureuse les objectifs, la planification et les étapes de déroulement d'un groupe-projet."
        },
        {
            question: "Quelle est la finalité du modèle transitionnel de William Bridge ?",
            options: { a: "Forcer les employés à changer", b: "Faire en sorte que les individus s'approprient le changement", c: "Éviter tout changement", d: "Calculer les coûts du changement" },
            reponse: "b",
            explication: "Ce modèle vise à aider les individus à traverser les stades d'abandon, de flottement et de nouveau départ pour devenir des défenseurs du changement."
        },
        {
            question: "Le diagramme matriciel est une méthode d'analyse de problème servant à :",
            options: { a: "Visualiser les relations hiérarchiques", b: "Faire des choix et dégager des priorités", c: "Calculer des probabilités", d: "Rédiger des contrats" },
            reponse: "b",
            explication: "Le diagramme matriciel est utilisé pour structurer des informations complexes afin de faciliter la prise de décision et la hiérarchisation."
        },
        {
            question: "Quelle est la durée maximale conseillée pour une séance de brainstorming ?",
            options: { a: "30 minutes", b: "1 heure", c: "3 heures", d: "Une journée entière" },
            reponse: "c",
            explication: "Le cours précise qu'une séance de brainstorming ne doit pas excéder 3 heures pour rester efficace."
        },
        {
            question: "Le rôle des 'agents de changement' est d'être une :",
            options: { a: "Barrière entre la direction et les employés", b: "Courroie de transmission pour la mise en œuvre technique", c: "Cible passive", d: "Source de résistance" },
            reponse: "b",
            explication: "Les agents de changement sont les concepteurs-implanteurs qui assurent la transmission et la mise en œuvre technique du projet."
        },
        {
            question: "Dans une organisation, le changement peut être qualifié de :",
            options: { a: "Optionnel", b: "Inéluctable", c: "Nocif", d: "Rare" },
            reponse: "b",
            explication: "Le cours affirme que le changement apparaît aujourd'hui comme inéluctable et est une nécessité vitale pour la performance."
        },
        {
            question: "Comment gérer les résistances selon le cours ?",
            options: { a: "En les ignorant", b: "En les punissant sévèrement", c: "En les anticipant, en communiquant et en impliquant les acteurs", d: "En arrêtant tout changement" },
            reponse: "c",
            explication: "Le succès repose sur l'anticipation des résistances, une communication claire, et l'implication des collaborateurs dans le processus."
        },
        {
            question: "Le modèle de Burke et Litwin est utilisé pour :",
            options: { a: "Gérer la comptabilité", b: "Analyser les dimensions organisationnelles et environnementales nécessaires au changement", c: "Animer des réunions simples", d: "Rédiger des lettres de licenciement" },
            reponse: "b",
            explication: "Ce modèle complexe analyse les liens de cause à effet entre les éléments organisationnels pour assurer un changement réussi."
        },
        {
            question: "Quel est l'intérêt de la phase de 'Dégel' (Unfreeze) ?",
            options: { a: "Stabiliser les résultats", b: "Faire prendre conscience de la nécessité de changer", c: "Exécuter les nouvelles tâches", d: "Analyser les coûts" },
            reponse: "b",
            explication: "Le dégel prépare le terrain en brisant le statu quo et en faisant accepter aux collaborateurs que le changement est inéluctable."
        },
        {
            question: "Une communication foisonnante dans l'entreprise peut être :",
            options: { a: "Un avantage pour le changement", b: "Une concurrence pour la stratégie de communication du changement", c: "Inutile", d: "La seule source de vérité" },
            reponse: "b",
            explication: "Le cours note que la stratégie de communication du changement entre en concurrence avec la communication foisonnante existante dans l'entreprise."
        },
        {
            question: "Qu'est-ce que le 'cycle de l'autonomie' ?",
            options: { a: "Un outil de gestion financière", b: "Un outil utilisé en coaching pour aider un collaborateur à trouver sa place", c: "Un cycle de production industrielle", d: "Un outil de marketing" },
            reponse: "b",
            explication: "Le cycle de l'autonomie est un outil de diagnostic et d'accompagnement individuel pour les collaborateurs ou managers en difficulté."
        },
        {
            question: "Qu'est-ce qui caractérise le changement dans le contexte actuel selon l'introduction ?",
            options: { a: "Lenteur et prévisibilité", b: "Stabilité et routine", c: "Rapidité, complexité et interdépendance", d: "Absence de risque" },
            reponse: "c",
            explication: "Le cours décrit un environnement instable où les changements sont fréquents, rapides, complexes et interdépendants."
        },
        {
            question: "Qu'est-ce qu'une 'réforme' selon la typologie des changements ?",
            options: { a: "Une transformation culturelle totale", b: "Une gestion classique de changement dans le fonctionnement quotidien", c: "Un changement irréversible", d: "Une restructuration majeure" },
            reponse: "b",
            explication: "Le réglage et la réforme sont gérés de manière classique dans le fonctionnement quotidien, tandis que la restructuration et la refondation sont plus profondes."
        },
        {
            question: "Quel est l'objectif de la phase de 'Gel' (Refreeze) ?",
            options: { a: "Réduire les coûts", b: "Stabiliser et consolider la nouvelle organisation", c: "Analyser la concurrence", d: "Former les nouveaux employés" },
            reponse: "b",
            explication: "La phase de gel vise à ancrer les nouveaux comportements et processus pour qu'ils deviennent la norme et évitent un retour en arrière."
        },
        {
            question: "La méthode M.P.M (Multipickup) est une méthode de :",
            options: { a: "Analyse financière", b: "Créativité et choix focalisé", c: "Gestion des stocks", d: "Recrutement" },
            reponse: "b",
            explication: "La M.P.M comporte des phases de choix sans contrainte puis de choix focalisé pour construire un arbre de solutions."
        },
        {
            question: "Qu'est-ce qu'un 'changement de type 1' ?",
            options: { a: "Une refondation totale", b: "Un changement qui impacte certaines parties et peut être réversible", c: "Un changement irréversible", d: "Une révolution culturelle" },
            reponse: "b",
            explication: "Le type 1 est réversible et localisé, par opposition au type 2 qui est profond, irréversible et global."
        },
        {
            question: "Le diagramme en arbre sert à :",
            options: { a: "Structurer les relations entre les objectifs et les moyens", b: "Lister les employés", c: "Mesurer la température", d: "Dessiner un organigramme" },
            reponse: "a",
            explication: "Ce diagramme permet de décomposer un objectif en sous-objectifs et en moyens concrets à mettre en œuvre."
        },
        {
            question: "La 'situation actuelle' est définie comme :",
            options: { a: "La vision du futur", b: "Celle que vit l'organisation, jugée insatisfaisante", c: "La phase de transition", d: "Le résultat final" },
            reponse: "b",
            explication: "La situation actuelle est le point de départ jugé insatisfaisant qui nécessite un changement vers une situation souhaitée."
        },
        {
            question: "Pourquoi impliquer les collaborateurs dans le processus de changement ?",
            options: { a: "Pour leur donner plus de travail", b: "Pour favoriser l'acceptation et l'appropriation", c: "Parce que c'est une obligation légale", d: "Pour les surveiller" },
            reponse: "b",
            explication: "L'implication favorise l'engagement, la compréhension et réduit les résistances en permettant aux acteurs de devenir acteurs du changement."
        },
        {
            question: "Qu'est-ce qu'un 'changement émergent' ?",
            options: { a: "Un changement planifié rigoureusement", b: "Un changement qui apparaît progressivement sans être planifié au départ", c: "Un changement imposé par la loi", d: "Un changement impossible" },
            reponse: "b",
            explication: "Contrairement au changement planifié ou conduit-dirigé, le changement émergent se développe de manière organique au sein de l'organisation."
        },
        {
            question: "L'outil 'Équation du changement' est vulgarisé par :",
            options: { a: "Kurt Lewin", b: "John Kotter", c: "Beckhard et Harris", d: "Peter Drucker" },
            reponse: "c",
            explication: "Richard Beckhard et Reuben T. Harris sont les auteurs associés à la vulgarisation de cet outil d'analyse."
        },
        {
            question: "Quelle est l'importance du 'retour d'expérience' (RETEX) ?",
            options: { a: "Il permet de prouver que le changement a échoué", b: "Il permet d'analyser ce qui a fonctionné et ce qui a échoué pour progresser", c: "Il est inutile", d: "Il sert à trouver un coupable" },
            reponse: "b",
            explication: "Le RETEX est essentiel pour l'apprentissage organisationnel, permettant d'ajuster les actions futures en apprenant des succès et des erreurs passées."
        }
    ]
},

        //Module 10

    'M10': {
    title: 'MEO-10 : Audit et Contrôle Interne',
    questions: [
        {
            question: "Selon la définition de l'IFACI, qui met en œuvre le processus de contrôle interne ?",
            options: { a: "Uniquement les auditeurs externes", b: "Uniquement le conseil d'administration", c: "Les dirigeants et le personnel d'une organisation, à quelque niveau que ce soit", d: "Uniquement le service financier" },
            reponse: "c",
            explication: "Le cours retient la définition de l'IFACI : 'un processus mis en œuvre par les dirigeants et le personnel d'une organisation, à quelque niveau que ce soit...'"
        },
        {
            question: "Combien de composantes interdépendantes du contrôle interne sont identifiées dans le cours ?",
            options: { a: "Trois (3)", b: "Cinq (5)", c: "Sept (7)", d: "Dix (10)" },
            reponse: "b",
            explication: "Le cours identifie cinq composantes du contrôle interne : l'environnement, l'évaluation des risques, les activités de contrôle, le système d'information et de communication, et le système de pilotage."
        },
        {
            question: "Lequel de ces éléments ne fait PAS partie de la composante 'Environnement' du contrôle interne ?",
            options: { a: "La qualité des dirigeants et du personnel", b: "La politique de l'entreprise", c: "Le plan d'organisation", d: "Le système d'alarme de sécurité" },
            reponse: "d",
            explication: "L'environnement de contrôle inclut la qualité du personnel, la politique de l'entreprise et le plan d'organisation. Le système d'alarme est une 'activité de contrôle' technique."
        },
        {
            question: "L'évaluation des risques constitue un préalable à la mise en place d'un système de contrôle interne efficace.",
            options: { a: "Vrai", b: "Faux", c: "Vrai, mais seulement pour les grandes entreprises", d: "Faux, elle se fait uniquement après" },
            reponse: "a",
            explication: "Le cours stipule que l'évaluation des risques 'constitue un préalable à la mise en place d'un système de contrôle interne efficace'."
        },
        {
            question: "Un contrôle de l'activité d'un agent par son supérieur hiérarchique est un exemple de quel type de contrôle ?",
            options: { a: "Un autocontrôle", b: "Un contrôle réciproque", c: "Un contrôle hiérarchique", d: "Un contrôle externe" },
            reponse: "c",
            explication: "Le cours distingue trois niveaux de contrôle : par le supérieur hiérarchique, le contrôle réciproque par un autre agent, et l'autocontrôle."
        },
        {
            question: "Quel est l'objectif général du contrôle interne ?",
            options: { a: "Donner une assurance absolue sur la réalisation des objectifs", b: "Sanctionner le personnel", c: "Donner une assurance raisonnable sur la réalisation des objectifs", d: "Éliminer toute prise de risque" },
            reponse: "c",
            explication: "L'objectif général est de donner une 'assurance raisonnable' aux dirigeants. Une assurance absolue est impossible en raison de certaines contraintes (jugement, erreurs...)."
        },
        {
            question: "Parmi les objectifs permanents du contrôle interne, lequel concerne la fiabilité et la régularité des informations ?",
            options: { a: "La sécurité des actifs", b: "La qualité de l'information", c: "L'optimisation des ressources", d: "Le respect des directives" },
            reponse: "b",
            explication: "L'objectif de 'Qualité de l'information' vise à garantir la fiabilité, la pertinence, la disponibilité et la régularité de l'ensemble des informations."
        },
        {
            question: "La règle de la 'séparation des fonctions' a pour objectif d'éviter qu'un même agent cumule plusieurs fonctions. Laquelle n'est pas citée ?",
            options: { a: "Fonction de décision", b: "Fonction de détention matérielle", c: "Fonction de communication", d: "Fonction d'enregistrement" },
            reponse: "c",
            explication: "Le principe de séparation des fonctions vise à séparer les fonctions de décision, de détention des valeurs, d'enregistrement (comptable) et de contrôle."
        },
        {
            question: "Que signifie le principe d' 'universalité' du contrôle interne ?",
            options: { a: "Il ne s'applique qu'aux opérations financières", b: "Il ne concerne que le personnel de direction", c: "Il concerne toutes les personnes dans l'entreprise, en tout temps et en tout lieu", d: "Il est optionnel pour les petites entreprises" },
            reponse: "c",
            explication: "Le principe d'universalité signifie que personne n'est exclu du contrôle, qu'il n'y a ni privilège, ni domaines réservés."
        },
        {
            question: "Selon le cours, quelle est l'une des limites du contrôle interne ?",
            options: { a: "Son coût trop faible", b: "Son application trop simple", c: "Les incertitudes humaines", d: "Son manque de documentation" },
            reponse: "c",
            explication: "Le cours liste plusieurs limites, dont les 'incertitudes humaines' et les 'jugements défaillants' qui peuvent provoquer des dysfonctionnements."
        },
        {
            question: "L'approche centrée sur l'aspect risque au niveau du contrôle interne est appelée :",
            options: { a: "L'approche par les fonctions", b: "L'approche par les risques", c: "L'approche hiérarchique", d: "L'approche comptable" },
            reponse: "b",
            explication: "Le cours distingue deux types d'approches : l'approche par les fonctions et l'approche par les risques, qui est plus spécifique et ne s'intéresse qu'aux faiblesses."
        },
        {
            question: "Du latin 'AUDIRE', le mot 'audit' signifie :",
            options: { a: "VÉRIFIER", b: "ÉCOUTER", c: "COMPTER", d: "CONTRÔLER" },
            reponse: "b",
            explication: "Le cours précise que le mot audit vient du latin AUDIRE qui veut dire ÉCOUTER."
        },
        {
            question: "Quelle est la principale différence entre l'audit interne et l'audit externe ?",
            options: { a: "L'audit interne est réalisé par des personnes extérieures à l'entreprise", b: "L'audit externe est réalisé par du personnel de l'entreprise", c: "L'audit externe est indépendant de l'entreprise, l'audit interne fait partie du personnel", d: "Il n'y a aucune différence de statut" },
            reponse: "c",
            explication: "L'audit interne est exercé par un auditeur faisant partie du personnel de l'entreprise, tandis que l'audit externe est exercé par des personnes extérieures."
        },
        {
            question: "Selon la nouvelle conception de l'IIA, l'audit interne est une activité :",
            options: { a: "Dépendante et subjective", b: "Indépendante et objective", c: "Uniquement financière", d: "Exclusivement axée sur la sanction" },
            reponse: "b",
            explication: "'L'Audit Interne est une activité indépendante et objective qui donne à une organisation une assurance sur le degré de maîtrise de ses opérations...' (Définition IIA, 1999)."
        },
        {
            question: "Comment l'audit interne contribue-t-il à créer de la valeur ajoutée ?",
            options: { a: "En augmentant uniquement les contrôles", b: "En identifiant des améliorations possibles sur le plan opérationnel", c: "En ne faisant que des propositions financières", d: "En sanctionnant les employés" },
            reponse: "b",
            explication: "La valeur ajoutée de l'audit interne inclut l'augmentation des chances de réaliser les objectifs et l'identification des améliorations possibles sur le plan opérationnel."
        },
        {
            question: "En comparant l'audit interne et le contrôle de gestion, quel est l'objectif de l'audit interne ?",
            options: { a: "Veiller au maintien des grands équilibres", b: "Apprécier la bonne maîtrise des activités", c: "Piloter l'entreprise", d: "Dépendre des résultats de l'entreprise" },
            reponse: "b",
            explication: "Le tableau comparatif (p.17) indique que l'objectif de l'audit interne est d' 'Apprécier la bonne maîtrise des activités', tandis que celui du contrôle de gestion est de 'Veiller au maintien des grands équilibres'."
        },
        {
            question: "En comparant l'audit interne et l'inspection, sur quoi se concentre principalement l'inspection ?",
            options: { a: "Le fonctionnement des systèmes", b: "La stratégie de l'entreprise", c: "Le contrôle du travail des hommes", d: "La proposition de solutions" },
            reponse: "c",
            explication: "Le tableau comparatif (p.18) montre que le rôle de l'inspection est de 'Contrôler le travail des hommes', alors que l'audit interne vise à 'Apprécier le fonctionnement des systèmes'."
        },
        {
            question: "L'obligation de l'auditeur externe est une obligation de moyens, tandis que celle de l'auditeur interne est une obligation de :",
            options: { a: "Moyens également", b: "Résultats", c: "Conseil", d: "Non-interférence" },
            reponse: "b",
            explication: "Le tableau comparatif (p.19) oppose l'obligation de moyens de l'auditeur externe à l'obligation de résultats de l'auditeur interne."
        },
        {
            question: "Quel est l'objectif principal d'un consultant externe ?",
            options: { a: "Apprécier la bonne maîtrise des activités en général", b: "Certifier les comptes annuels", c: "Résoudre un problème bien précis dans un temps donné", d: "Contrôler le travail du personnel" },
            reponse: "c",
            explication: "L'objectif du consultant externe est 'Bien précis : résoudre un problème dans un temps donné', ce qui le distingue de l'auditeur interne."
        },
        {
            question: "Les deux grands types de missions de l'auditeur interne sont :",
            options: { a: "Les missions d'assurance et les missions de conseil", b: "Les missions financières et les missions sociales", c: "Les missions de contrôle et les missions de sanction", d: "Les missions permanentes et les missions temporaires" },
            reponse: "a",
            explication: "Le cours distingue deux types de missions pour l'auditeur interne : les missions d'assurance et les missions de conseil."
        },
        {
            question: "Lequel de ces objectifs N'EST PAS un objectif de l'audit interne cité par SOW (2002) ?",
            options: { a: "La maîtrise des risques", b: "L'optimisation des ressources", c: "La définition de la stratégie de l'entreprise", d: "La vérification de la fiabilité des états financiers" },
            reponse: "c",
            explication: "La définition de la stratégie relève du management. L'audit interne évalue l'application des politiques et la maîtrise des risques, mais ne définit pas la stratégie."
        },
        {
            question: "L'audit qui consiste à vérifier la bonne application des règles et procédures par rapport à un référentiel est un audit de :",
            options: { a: "Régularité/conformité", b: "Efficacité", c: "Stratégie", d: "Management" },
            reponse: "a",
            explication: "C'est la définition de l'audit de régularité/conformité : comparer la règle (le référentiel) et la réalité."
        },
        {
            question: "Lequel de ces audits est aussi appelé 'audit de performance' ?",
            options: { a: "L'audit de régularité", b: "L'audit d'efficacité", c: "L'audit de stratégie", d: "L'audit de conformité" },
            reponse: "b",
            explication: "Le cours précise qu'il serait 'plus cohérent de parler d'audit de performance' pour l'audit d'efficacité, car il englobe les notions d'efficacité et d'efficience."
        },
        {
            question: "Quel type d'audit consiste à confronter l'ensemble des politiques et stratégies de l'entreprise avec le milieu dans lequel elles se situent ?",
            options: { a: "L'audit de management", b: "L'audit d'efficacité", c: "L'audit de stratégie", d: "L'audit financier" },
            reponse: "c",
            explication: "C'est la définition donnée pour l'audit de stratégie : vérifier la cohérence globale des stratégies de l'entreprise avec son environnement."
        },
        {
            question: "Quelles sont les trois principes de l'audit interne ?",
            options: { a: "Complexité, Rigueur, Rigidité", b: "Simplicité, Rigueur, Adaptabilité", c: "Rapidité, Coût, Efficacité", d: "Objectivité, Compétence, Intégrité" },
            reponse: "b",
            explication: "Le cours énonce trois principes pour la fonction d'audit interne : la simplicité, la rigueur et l'adaptabilité."
        },
        {
            question: "Lequel de ces principes N'EST PAS un des quatre principes du code de déontologie de l'audit interne ?",
            options: { a: "Intégrité", b: "Objectivité", c: "Confidentialité", d: "Simplicité" },
            reponse: "d",
            explication: "Les quatre principes du code de déontologie sont : l'Intégrité, l'Objectivité, la Confidentialité et la Compétence. La simplicité est un principe de la fonction, pas du code de déontologie."
        },
        {
            question: "Le principe de déontologie qui exige des auditeurs de ne pas se laisser influencer par leurs propres intérêts est :",
            options: { a: "L'intégrité", b: "L'objectivité", c: "La confidentialité", d: "La compétence" },
            reponse: "b",
            explication: "C'est la définition de l'Objectivité : les auditeurs 'ne se laissent pas influencer dans leur jugement par leurs propres intérêts ou par autrui'."
        },
        {
            question: "Le principe de déontologie qui impose aux auditeurs de respecter la valeur des informations qu'ils reçoivent et de ne pas les divulguer est :",
            options: { a: "L'intégrité", b: "L'objectivité", c: "La confidentialité", d: "La compétence" },
            reponse: "c",
            explication: "C'est la définition de la Confidentialité : les auditeurs 'respectent la valeur et la propriété des informations qu'ils reçoivent ; ils ne divulguent ces informations qu'avec les autorisations requises'."
        },
        {
            question: "La responsabilité de la mise en place du contrôle interne incombe :",
            options: { a: "Aux auditeurs internes", b: "Aux dirigeants de l'entité concernée", c: "Aux auditeurs externes", d: "Aux actionnaires" },
            reponse: "b",
            explication: "La conclusion de la définition ancienne stipule : 'La responsabilité de la mise en place du contrôle interne incombe aux dirigeants de l'entité concernée'."
        },
        {
            question: "Une bonne politique de gestion des ressources humaines permet :",
            options: { a: "D'éviter l'évaluation des risques", b: "De garantir une assurance absolue", c: "D'inculquer les valeurs d'éthique et d'intégrité", d: "De remplacer le système d'information" },
            reponse: "c",
            explication: "Le cours cite parmi les exemples d'interdépendances qu'une bonne politique de GRH permet 'd'inculquer les valeurs d'éthique et d'intégrité'."
        },
        {
            question: "L'objectif d'optimisation des ressources vise à s'assurer que les ressources sont :",
            options: { a: "Illimitées", b: "Uniquement financières", c: "Adaptées aux objectifs et correspondent aux besoins réels", d: "Dépensées le plus rapidement possible" },
            reponse: "c",
            explication: "Cet objectif vise à s'assurer que les ressources sont 'adaptées aux objectifs (cohérence)' et 'correspondent aux besoins réels de l'entité (adéquation)'."
        },
        {
            question: "Pour être satisfaisante, l'organisation de l'entreprise doit être préalable, adaptée, vérifiable et :",
            options: { a: "Complexe", b: "Informelle", c: "Formalisée", d: "Temporaire" },
            reponse: "c",
            explication: "Le cours liste quatre caractéristiques pour l'organisation : préalable, adaptée et adaptable, vérifiable, et formalisée."
        },
        {
            question: "Que signifie le principe de 'permanence' du contrôle interne ?",
            options: { a: "Le système doit être changé tous les ans", b: "Le système suppose une certaine pérennité pour être efficace", c: "Il ne s'applique que de façon ponctuelle", d: "Le personnel ne doit jamais changer" },
            reponse: "b",
            explication: "Le principe de permanence 'suppose une certaine pérennité de ces systèmes. Il est évident que cette pérennité repose nécessairement sur celle de l'exploitation'."
        },
        {
            question: "L'audit interne est au service de qui ?",
            options: { a: "Uniquement des actionnaires", b: "Uniquement des auditeurs externes", c: "De l'entreprise et de ses dirigeants", d: "Uniquement de l'Etat" },
            reponse: "c",
            explication: "La déclaration de l'I.I.A. stipule que l'audit interne 'est au service de l'entreprise' et que son objectif est d' 'assister les dirigeants'."
        },
        {
            question: "L'audit de management consiste à observer les choix et les décisions, mais sans porter d'appréciation sur :",
            options: { a: "La forme", b: "Les conséquences", c: "Les risques", d: "Le fond" },
            reponse: "d",
            explication: "Selon JORAS, l'auditeur 'ne porte pas d'appréciation sur le fond'. Selon RENARD, il s'agit d' 'observer la forme et non le fond'."
        },
        {
            question: "Quel est le champ d'application du contrôle de gestion par rapport à l'audit interne ?",
            options: { a: "Il est plus large et couvre toutes les informations", b: "Il est identique", c: "Il est plus restreint, se concentrant sur le système d'information et les résultats", d: "Il ne couvre que les aspects qualitatifs" },
            reponse: "c",
            explication: "Le tableau comparatif (p.17) indique que le champ de l'audit interne couvre 'Toutes les informations (chiffrées ou non)', tandis que celui du contrôle de gestion est le 'Système d'information; résultats réels et prévisibles'."
        },
        {
            question: "Une mission de conseil en audit interne est généralement entreprise à la demande de qui ?",
            options: { a: "D'un auditeur externe", b: "D'un client (interne à l'entreprise)", c: "De l'Etat", d: "D'un concurrent" },
            reponse: "b",
            explication: "Le cours précise que 'Les missions de conseil sont généralement entreprises à la demande d'un client. Leur nature et leur périmètre font l'objet d'un accord avec ce dernier'."
        },
        {
            question: "Quelle est la principale différence entre l'audit d'efficacité et l'audit de régularité ?",
            options: { a: "L'audit d'efficacité n'a pas de référentiel clair et précis", b: "L'audit de régularité est plus complexe", c: "L'audit d'efficacité est mené par des auditeurs débutants", d: "Il n'y a aucune différence" },
            reponse: "a",
            explication: "L'audit d'efficacité nécessite plus d'expérience 'à cause de l'absence de référentiel clair et précis', contrairement à l'audit de régularité qui compare la réalité à des règles préexistantes."
        },
        {
            question: "Dans une mission d'assurance, qui est l' 'utilisateur' ?",
            options: { a: "L'auditeur interne", b: "Le propriétaire du processus audité", c: "La personne ou le groupe qui utilise les résultats de l'évaluation", d: "Le consultant externe" },
            reponse: "c",
            explication: "Le cours identifie trois intervenants dans une mission d'assurance : le propriétaire du processus, l'auditeur interne, et l'utilisateur (celui qui utilise les résultats)."
        },
        {
            question: "Le principe d'harmonie du contrôle interne signifie que le dispositif doit être :",
            options: { a: "Le plus complexe possible", b: "Identique dans toutes les entreprises", c: "Adapté aux caractéristiques de l'entreprise et à son environnement", d: "Focalisé uniquement sur la séparation des fonctions" },
            reponse: "c",
            explication: "Le principe d'harmonie est 'l'adéquation du contrôle interne aux caractéristiques de l'entreprise et de son environnement'."
        },
        {
            question: "L'existence d'un manuel de procédures administratives et comptables est une condition pour :",
            options: { a: "Un bon audit externe", b: "Un bon contrôle interne", c: "Une bonne stratégie marketing", d: "Un bon management" },
            reponse: "b",
            explication: "Le cours liste 'L'existence d'un manuel de procédures administratives et comptables' comme l'une des conditions d'existence d'un bon contrôle interne."
        },
        {
            question: "L'audit interne est-il une finalité en soi ?",
            options: { a: "Oui, son seul but est de produire des rapports", b: "Non, c'est un moyen d'assister les dirigeants à atteindre les objectifs", c: "Oui, c'est la fonction la plus importante de l'entreprise", d: "Non, c'est une fonction de l'audit externe" },
            reponse: "b",
            explication: "Comme le contrôle interne, l'audit interne n'est pas une fin en soi. C'est une fonction de conseil et d'assistance au management pour l'aider à atteindre les objectifs de l'organisation."
        },
        {
            question: "Quel est le rôle du système de pilotage dans le contrôle interne ?",
            options: { a: "Évaluer les risques externes uniquement", b: "S'assurer que le dispositif de contrôle interne mis en place fonctionne bien", c: "Établir le plan d'organisation", d: "Recruter le personnel" },
            reponse: "b",
            explication: "L'objectif du système de pilotage est de 's'assurer que le dispositif de contrôle interne mis en place fonctionne bien' via des activités courantes et ponctuelles."
        },
        {
            question: "Lequel de ces domaines d'investigation ne relève PAS de l'audit interne ?",
            options: { a: "Examiner la qualité des informations financières", b: "Apprécier si les ressources sont utilisées de façon économique", c: "Fixer les salaires des dirigeants", d: "Examiner la conformité avec les politiques et les lois" },
            reponse: "c",
            explication: "La fixation des salaires est une décision de management et de gouvernance, pas un domaine d'investigation pour l'auditeur interne. Les autres options sont des domaines d'investigation classiques."
        }
    ]
},

        //Module 11

    'M11': {
    title: 'MEO-11 : Introduction au Contrôle de Gestion',
    questions: [
        {
            question: "Historiquement, dans quel contexte le contrôle de gestion a-t-il été initialement conçu (début XXe siècle) ?",
            options: { a: "Dans une économie de services diversifiés", b: "Dans un cadre de gestion taylorienne industrielle", c: "Dans le secteur bancaire uniquement", d: "Pour les start-ups technologiques" },
            reponse: "b",
            explication: "Le cours précise que le contrôle de gestion a été conçu dans le cadre d'une gestion taylorienne fondée sur la stabilité, la minimisation des coûts et la productivité industrielle."
        },
        {
            question: "Quelle est la position du contrôle de gestion par rapport aux horizons de temps ?",
            options: { a: "Il ne concerne que le long terme", b: "Il ne concerne que le court terme (moins d'un an)", c: "Il est l'interface entre le contrôle stratégique (long terme) et le contrôle opérationnel (court terme)", d: "Il remplace la stratégie" },
            reponse: "c",
            explication: "Le contrôle de gestion est positionné comme une interface (moyen terme) permettant de transformer les objectifs de long terme en actions courantes."
        },
        {
            question: "Selon la définition d'Anthony (1965), le contrôle de gestion vise à s'assurer que les ressources sont utilisées avec :",
            options: { a: "Rapidité et force", b: "Efficacité et efficience", c: "Prudence et économie", d: "Créativité et innovation" },
            reponse: "b",
            explication: "Anthony définit le contrôle de gestion comme le processus garantissant que les ressources sont utilisées avec efficacité (atteinte des objectifs) et efficience (moyens employés)."
        },
        {
            question: "Quelle est la différence fondamentale entre l'audit et le contrôle de gestion en termes de temporalité ?",
            options: { a: "L'audit est permanent, le contrôle de gestion est ponctuel", b: "Il n'y a aucune différence", c: "L'audit est une mission ponctuelle, le contrôle de gestion est permanent", d: "Le contrôle de gestion ne se fait qu'une fois par an" },
            reponse: "c",
            explication: "Le cours souligne que l'audit est une mission ponctuelle, tandis que le contrôle de gestion fonctionne en permanence dans l'entreprise."
        },
        {
            question: "Comment définit-on l'efficience ?",
            options: { a: "Atteindre l'objectif quel que soit le coût", b: "La meilleure gestion possible des moyens en relation avec les résultats", c: "La non-utilisation des capacités de production", d: "L'augmentation du chiffre d'affaires" },
            reponse: "b",
            explication: "L'efficience correspond à la meilleure gestion possible des moyens et capacités par rapport aux résultats (faire le mieux possible avec le moins de ressources)."
        },
        {
            question: "Qu'est-ce qu'un 'coût d'opportunité' ?",
            options: { a: "Le coût d'achat d'une matière première", b: "Le manque à gagner résultant du renoncement qu'implique tout choix", c: "Une charge exceptionnelle", d: "Un coût calculé par l'administration fiscale" },
            reponse: "b",
            explication: "Le coût d'opportunité représente la perte de ressources probables ou le manque à gagner lié au fait de choisir une option et donc de renoncer à une autre."
        },
        {
            question: "Un coût est dit 'irréversible' quand :",
            options: { a: "Il est très élevé", b: "Il n'est plus permis de revenir sur la décision d'engagement (ex: achat d'une machine)", c: "Il concerne les salaires", d: "Il est calculé par un ordinateur" },
            reponse: "b",
            explication: "Un coût est irréversible (sunk cost) quand la décision est prise et qu'on ne peut plus revenir en arrière, réduisant la marge de manœuvre future."
        },
        {
            question: "Qu'est-ce qu'un coût caché ?",
            options: { a: "Une dépense illégale", b: "Une charge provoquée par un dysfonctionnement (ex: non-qualité) agrégée à d'autres coûts", c: "Un coût que le comptable a oublié d'enregistrer", d: "Un coût externe" },
            reponse: "b",
            explication: "Un coût caché (comme l'absentéisme ou la non-qualité) est un coût réel mais qui n'est pas isolé par le système comptable classique, il est dilué dans d'autres charges."
        },
        {
            question: "Dans la comptabilité de gestion, les charges 'non incorporables' sont :",
            options: { a: "Des charges exceptionnelles ou sans rapport avec l'activité courante qu'on exclut des coûts", b: "Des charges qu'on ajoute aux coûts", c: "Les charges de personnel", d: "Les achats de matières premières" },
            reponse: "a",
            explication: "Ce sont des charges enregistrées en comptabilité générale (classe 6) mais exclues du calcul des coûts car elles ne relèvent pas de l'exploitation normale (ex: prime d'assurance vie du dirigeant)."
        },
        {
            question: "Que sont les 'charges supplétives' ?",
            options: { a: "Des charges payées en supplément", b: "Des charges incorporées aux coûts bien que ne figurant pas en comptabilité financière (ex: rémunération des capitaux propres)", c: "Des amendes fiscales", d: "Des charges de sous-traitance" },
            reponse: "b",
            explication: "Les charges supplétives (rémunération du capital, travail de l'exploitant non salarié) sont ajoutées pour permettre une comparaison économique réaliste entre entreprises."
        },
        {
            question: "Une charge 'directe' est une charge :",
            options: { a: "Qui passe obligatoirement par un centre d'analyse", b: "Qu'on peut affecter sans ambiguïté et sans calcul préalable au coût d'un produit", c: "Toujours variable", d: "Toujours fixe" },
            reponse: "b",
            explication: "Une charge directe a une destination connue et immédiate (ex: matière première pour le produit A) et ne nécessite pas de clé de répartition."
        },
        {
            question: "Quel est le rôle d'un 'centre d'analyse' dans la méthode des coûts complets ?",
            options: { a: "Stocker les produits finis", b: "Regrouper les charges indirectes avant leur imputation aux coûts", c: "Vendre les produits", d: "Calculer le chiffre d'affaires" },
            reponse: "b",
            explication: "Un centre d'analyse est une subdivision comptable où sont regroupées les charges indirectes pour être ensuite réparties via des unités d'œuvre."
        },
        {
            question: "Qu'est-ce qu'une 'unité d'œuvre' ?",
            options: { a: "Une unité de mesure de l'activité d'un centre d'analyse (ex: heure machine, kg traité)", b: "L'œuvre d'art produite par l'entreprise", c: "Le salaire du dirigeant", d: "Une unité monétaire uniquement" },
            reponse: "a",
            explication: "L'unité d'œuvre permet de fractionner le coût d'un centre et d'imputer ces coûts aux produits en fonction de leur consommation d'unités."
        },
        {
            question: "La répartition 'secondaire' consiste à :",
            options: { a: "Répartir les charges de la comptabilité générale dans les centres", b: "Répartir le coût des centres auxiliaires vers les centres principaux", c: "Calculer le coût de revient", d: "Payer les factures fournisseurs" },
            reponse: "b",
            explication: "La répartition secondaire vide les centres auxiliaires (ex: entretien, énergie) pour transférer leurs coûts vers les centres principaux (ex: atelier production)."
        },
        {
            question: "L'inventaire permanent des stocks permet de :",
            options: { a: "Ne compter les stocks qu'une fois par an", b: "Connaître à tout moment l'existant théorique en stock (entrées et sorties)", c: "Supprimer les stocks", d: "Augmenter la valeur des stocks" },
            reponse: "b",
            explication: "L'inventaire permanent est une organisation comptable qui enregistre tous les mouvements pour connaître le stock final théorique à tout moment."
        },
        {
            question: "Quelle méthode de valorisation des sorties de stock est préconisée par le Plan Comptable ?",
            options: { a: "Le coût standard", b: "Le CUMP (Coût Unitaire Moyen Pondéré)", c: "Le LIFO (Dernier entré, premier sorti)", d: "Le coût de remplacement" },
            reponse: "b",
            explication: "Le CUMP (calculé sur la période ou après chaque entrée) est la méthode recommandée, avec le PEPS (Premier Entré Premier Sorti)."
        },
        {
            question: "Comment traite-t-on les produits en cours (encours) à la fin d'une période pour calculer le coût de production des produits finis ?",
            options: { a: "On les ignore", b: "Coût de production de la période + Encours Initial - Encours Final", c: "Coût de production de la période - Encours Initial + Encours Final", d: "On les considère comme vendus" },
            reponse: "b",
            explication: "Pour obtenir le coût des produits *terminés*, il faut ajouter ce qui était déjà commencé (Encours Initial) et retirer ce qui n'est pas fini (Encours Final)."
        },
        {
            question: "Le coût de revient complet d'un produit est égal à :",
            options: { a: "Coût de production des produits vendus + Coûts hors production (distribution + quote-part structure)", b: "Coût d'achat + Coût de production", c: "Charges directes uniquement", d: "Prix de vente - Marge" },
            reponse: "a",
            explication: "Le coût de revient est l'étape ultime : il cumule le coût de production des produits *vendus* et les coûts de distribution et de structure."
        },
        {
            question: "La méthode des coûts variables (Direct Costing) intègre dans le coût du produit :",
            options: { a: "Toutes les charges", b: "Uniquement les charges variables (directes et indirectes)", c: "Uniquement les charges directes", d: "Uniquement les charges fixes" },
            reponse: "b",
            explication: "Cette méthode ne retient que les charges qui varient avec le volume d'activité (charges variables), excluant les charges fixes (de structure)."
        },
        {
            question: "Dans la méthode des coûts variables, la Marge sur Coût Variable (MCV) sert à :",
            options: { a: "Payer les dividendes", b: "Couvrir les charges fixes", c: "Acheter des machines", d: "Payer les impôts seulement" },
            reponse: "b",
            explication: "La marge sur coût variable (Chiffre d'affaires - Coûts variables) doit être suffisante pour couvrir les charges fixes de l'entreprise et dégager un résultat."
        },
        {
            question: "La méthode des coûts spécifiques ajoute aux coûts variables :",
            options: { a: "Toutes les charges fixes", b: "Les charges fixes directes (spécifiques) au produit", c: "Les charges administratives", d: "Les charges financières globales" },
            reponse: "b",
            explication: "Le coût spécifique est égal au coût variable + les charges fixes directes spécifiques au produit (ex: amortissement d'une machine dédiée à ce produit)."
        },
        {
            question: "Qu'est-ce que le Seuil de Rentabilité (SR) ?",
            options: { a: "Le bénéfice maximum possible", b: "Le niveau d'activité (chiffre d'affaires) pour lequel l'entreprise ne réalise ni bénéfice ni perte", c: "La date de fin d'exercice", d: "Le montant des dettes" },
            reponse: "b",
            explication: "Le seuil de rentabilité est le point mort : le niveau d'activité où la marge sur coût variable couvre exactement les charges fixes (Résultat = 0)."
        },
        {
            question: "Quelle est la formule du Seuil de Rentabilité (SR) ?",
            options: { a: "Charges Fixes / Taux de Marge sur Coût Variable", b: "Charges Variables / Chiffre d'affaires", c: "Charges Fixes + Charges Variables", d: "Résultat / Capitaux Propres" },
            reponse: "a",
            explication: "SR = Charges Fixes Totales / Taux de Marge sur Coût Variable."
        },
        {
            question: "Un 'centre de responsabilité' est une partie de l'entreprise où le responsable :",
            options: { a: "N'a aucun pouvoir", b: "Dispose de moyens et d'une délégation d'autorité pour atteindre un objectif", c: "Ne s'occupe que de la comptabilité", d: "Est obligatoirement le PDG" },
            reponse: "b",
            explication: "Un centre de responsabilité est un groupe d'acteurs autour d'un responsable qui a reçu des moyens et une délégation de pouvoir pour réaliser un objectif."
        },
        {
            question: "Dans un 'centre de profit', le responsable doit :",
            options: { a: "Maximiser le chiffre d'affaires uniquement", b: "Minimiser les coûts uniquement", c: "Dégager la marge maximale en agissant sur les recettes ET les coûts", d: "Maximiser la rentabilité des capitaux investis" },
            reponse: "c",
            explication: "Le centre de profit doit optimiser la différence entre les produits et les charges (la marge/le profit), contrairement au centre de coûts ou de recettes."
        },
        {
            question: "Un 'centre de coûts' discrétionnaire concerne généralement :",
            options: { a: "Les ateliers de production", b: "Les services fonctionnels (ex: RH, Compta) dont l'output est difficile à mesurer", c: "Les services commerciaux", d: "Les filiales étrangères" },
            reponse: "b",
            explication: "Pour les services fonctionnels (administratifs), on alloue un budget pour une mission (dépense discrétionnaire) car on ne peut pas lier directement le coût à un produit vendu."
        },
        {
            question: "La gestion budgétaire est un mode de pilotage à :",
            options: { a: "Long terme (5-10 ans)", b: "Court terme (1 an), traduisant les décisions stratégiques en programmes chiffrés", c: "Très court terme (semaine)", d: "Durée indéterminée" },
            reponse: "b",
            explication: "La gestion budgétaire est le pilotage à court terme (généralement l'année) qui décline la stratégie en budgets (programmes d'action chiffrés)."
        },
        {
            question: "Le 'contrôle budgétaire' consiste à :",
            options: { a: "Établir les budgets", b: "Comparer en permanence les résultats réels aux prévisions pour analyser les écarts", c: "Vérifier les factures", d: "Sanctionner les employés" },
            reponse: "b",
            explication: "C'est la phase de suivi : comparer le Réel et le Prévu (Budget), calculer les écarts, analyser les causes et prendre des mesures correctives."
        },
        {
            question: "Qu'est-ce qu'un 'budget déterminant' ?",
            options: { a: "Le budget de trésorerie", b: "Le budget des ventes (ou de production), qui contraint les autres budgets", c: "Le budget des frais généraux", d: "Le bilan prévisionnel" },
            reponse: "b",
            explication: "Les budgets déterminants (souvent les ventes) sont ceux par lesquels on commence car ils dimensionnent l'activité et contraignent les autres budgets (approvisionnement, etc.)."
        },
        {
            question: "Quelle est la définition actuelle du Tableau de Bord de gestion ?",
            options: { a: "Un document comptable obligatoire", b: "Un outil de reporting financier a posteriori", c: "Un instrument de pilotage rapide et synthétique rassemblant des indicateurs (financiers et qualitatifs)", d: "Un logiciel informatique complexe" },
            reponse: "c",
            explication: "Le tableau de bord est un outil d'aide à la décision et au pilotage, rapide, synthétique, regroupant des indicateurs variés pour agir (et pas seulement constater)."
        },
        {
            question: "Un bon indicateur de tableau de bord doit être :",
            options: { a: "Complexe et exhaustif", b: "Pertinent, fidèle, rapide à obtenir et clair", c: "Toujours financier", d: "Identique pour tous les services" },
            reponse: "b",
            explication: "Pour être utile à l'action, l'indicateur doit être pertinent (utile au décideur), fiable, mais surtout rapide et simple à comprendre."
        },
        {
            question: "Le principe 'gigogne' des tableaux de bord signifie que :",
            options: { a: "Ils sont en forme de poupée russe", b: "Ils s'emboîtent selon la ligne hiérarchique (cohérence avec l'organigramme)", c: "Ils sont tous indépendants", d: "Il n'y a qu'un seul tableau pour toute l'entreprise" },
            reponse: "b",
            explication: "Le réseau de tableaux de bord doit se calquer sur la structure d'autorité : chaque niveau a son tableau, et les informations s'agrègent en remontant la hiérarchie."
        },
        {
            question: "Contrairement au reporting financier traditionnel, le tableau de bord privilégie :",
            options: { a: "La précision absolue", b: "La rapidité de transmission (l'information 'flash')", c: "L'exhaustivité des données", d: "Le respect des normes fiscales" },
            reponse: "b",
            explication: "En tableau de bord, la rapidité d'alerte prime sur la précision comptable absolue. Mieux vaut une information approximative tout de suite qu'exacte trop tard."
        },
        {
            question: "Un indicateur 'd'alerte' ou 'clignotant' sert à :",
            options: { a: "Décorer le bureau", b: "Pointer le dépassement d'un seuil critique nécessitant une action", c: "Prévoir l'avenir à long terme", d: "Calculer le bénéfice" },
            reponse: "b",
            explication: "Les clignotants sont des seuils limites dont le dépassement oblige le responsable à agir immédiatement (ex: taux de rebut > 2%)."
        },
        {
            question: "Les tableaux de bord modernes intègrent de plus en plus :",
            options: { a: "Moins de chiffres", b: "Des variables qualitatives (qualité, délais, satisfaction client) et externes", c: "Uniquement des données boursières", d: "Des photos des employés" },
            reponse: "b",
            explication: "Au-delà des coûts, les tableaux de bord modernes pilotent la performance globale : qualité, temps, réactivité, satisfaction client, etc."
        },
        {
            question: "Quelle est l'unité d'œuvre la plus fréquente dans les centres d'analyse de main d'œuvre ?",
            options: { a: "Le kilomètre parcouru", b: "L'heure de main d'œuvre directe", c: "Le chiffre d'affaires", d: "Le nombre de salariés" },
            reponse: "b",
            explication: "Pour les centres manuels ou ateliers, l'heure de main d'œuvre directe est l'unité physique la plus courante pour mesurer l'activité."
        },
        {
            question: "L'amortissement comptable d'une machine est une charge :",
            options: { a: "Variable", b: "Fixe (ou de structure)", c: "Exceptionnelle", d: "Financière" },
            reponse: "b",
            explication: "L'amortissement est une charge calculée liée à l'investissement et au temps, indépendante du volume de production à court terme, donc une charge fixe."
        },
        {
            question: "Dans le calcul des coûts, les frais de siège (Direction Générale) sont souvent traités comme :",
            options: { a: "Des charges directes", b: "Des charges de structure à répartir (taux de frais)", c: "Des matières premières", d: "Ils ne sont jamais inclus" },
            reponse: "b",
            explication: "Les charges de structure (administration, direction) concernent toute l'entreprise et sont imputées aux coûts via un taux de frais (assiette de répartition)."
        },
        {
            question: "Le coût direct (Direct Costing simple) permet d'éviter :",
            options: { a: "Le calcul des charges variables", b: "L'arbitraire de la répartition des charges indirectes", c: "De faire des bénéfices", d: "De payer des impôts" },
            reponse: "b",
            explication: "En ne retenant que les charges directes (affectables sans ambiguïté), on évite les clés de répartition arbitraires des charges indirectes."
        },
        {
            question: "Quelle est la limite principale de la méthode des coûts complets ?",
            options: { a: "Elle est interdite par la loi", b: "Elle est trop simple", c: "La répartition des charges indirectes peut être arbitraire et fausser les coûts", d: "Elle ne prend pas en compte les stocks" },
            reponse: "c",
            explication: "La critique majeure est que les clés de répartition des charges indirectes (qui augmentent) sont souvent conventionnelles et peuvent masquer la réalité économique."
        },
        {
            question: "Un 'centre d'investissement' est évalué sur :",
            options: { a: "Le volume de production", b: "La rentabilité des capitaux investis (ROI)", c: "Le respect des normes de qualité", d: "Le climat social" },
            reponse: "b",
            explication: "Le responsable d'un centre d'investissement maîtrise à la fois l'exploitation (profit) et les actifs engagés, il est donc jugé sur la rentabilité du capital (ROI)."
        },
        {
            question: "Le 'Benchmarking' consiste à :",
            options: { a: "Fixer des prix bas", b: "Se comparer aux meilleures pratiques des concurrents ou d'autres secteurs", c: "Embaucher des intérimaires", d: "Vendre des produits sur un banc" },
            reponse: "b",
            explication: "Le benchmarking est une démarche d'amélioration continue par comparaison avec les leaders ou les meilleures pratiques (internes ou externes)."
        },
        {
            question: "Dans un tableau de bord, un ratio de '30%' :",
            options: { a: "Est toujours mauvais", b: "N'a de sens que comparé à une norme, un objectif ou un historique", c: "Signifie une réussite", d: "Est une charge variable" },
            reponse: "b",
            explication: "Un chiffre isolé ne veut rien dire. Le tableau de bord doit présenter des écarts par rapport à un référentiel (objectif N, réalisé N-1, etc.)."
        },
        {
            question: "La gestion par exception dans le contrôle budgétaire signifie que :",
            options: { a: "On ne contrôle rien", b: "On ne remonte à la hiérarchie que les écarts significatifs dépassant un certain seuil", c: "On change de méthode tous les mois", d: "On ne fait des budgets qu'exceptionnellement" },
            reponse: "b",
            explication: "Pour ne pas noyer la direction sous l'information, seuls les écarts anormaux (exceptions) remontent pour décision, le reste est géré au niveau local."
        },
        {
            question: "L'inventaire intermittent (par opposition à l'inventaire permanent) :",
            options: { a: "Est utilisé en contrôle de gestion pour le suivi mensuel", b: "Ne permet de connaître le stock et les consommations qu'à la fin de l'exercice (inventaire physique)", c: "Est plus précis", d: "N'existe plus" },
            reponse: "b",
            explication: "L'inventaire intermittent (comptabilité générale) ne suit pas les mouvements au jour le jour. Il constate le stock final une fois par an par comptage physique."
        },
        {
            question: "Le coût de distribution comprend :",
            options: { a: "Le coût d'achat des matières", b: "Les charges directes et indirectes liées à la vente (publicité, transport, force de vente)", c: "Les frais d'usine", d: "Les impôts sur les bénéfices" },
            reponse: "b",
            explication: "C'est un coût hors production qui regroupe tout ce qui se passe après la mise en stock des produits finis jusqu'à la livraison et l'après-vente."
        },
        {
            question: "Laquelle de ces charges est une charge 'administrée' (sur laquelle le décideur a peu de pouvoir) ?",
            options: { a: "La consommation de fournitures", b: "Les charges sociales et fiscales obligatoires", c: "L'embauche d'un intérimaire", d: "La publicité" },
            reponse: "b",
            explication: "Les charges administrées (impôts, taxes, cotisations sociales légales) sont imposées de l'extérieur et le gestionnaire a très peu de levier dessus."
        },
        {
            question: "Dans le cycle de pilotage 'Information -> Décision -> Action -> Contrôle', le contrôle permet :",
            options: { a: "D'arrêter l'activité", b: "La rétroaction (feed-back) pour rectifier les décisions futures", c: "De payer les salariés", d: "De classer les documents" },
            reponse: "b",
            explication: "Le contrôle n'est pas une fin en soi (sanction) mais une boucle de régulation (feed-back) pour corriger l'action et améliorer les décisions futures."
        },
        {
            question: "La marge sur coût spécifique est égale à :",
            options: { a: "Marge sur coût variable - Charges fixes directes", b: "Marge sur coût variable - Charges fixes communes", c: "Chiffre d'affaires - Coût complet", d: "Coût variable + Coût fixe" },
            reponse: "a",
            explication: "La marge sur coût spécifique permet de voir si un produit couvre ses propres frais fixes (directs). Elle se calcule après la marge sur coût variable."
        },
        {
            question: "Le 'boni d'inventaire' (Stock réel > Stock théorique) est traité comme :",
            options: { a: "Une perte", b: "Une entrée fictive (augmentation de valeur)", c: "Une sortie fictive", d: "Une erreur à ignorer" },
            reponse: "b",
            explication: "Si on trouve physiquement plus de stock que prévu (boni), cela est enregistré comme une entrée fictive pour réajuster le stock théorique à la réalité."
        }
    ]
},
        
        // Vous pourrez ajouter 'M05', etc. ici
     
    };

    // --- LOGIQUE DE L'APPLICATION ---

    // --- Références aux éléments HTML ---
    const quizSelect = document.getElementById('quiz-select');
    const quizContent = document.getElementById('quiz-content');
    const initialMessage = document.getElementById('initial-message');
    const courseTitle = document.getElementById('course-title');
    const quizContainer = document.getElementById('quiz-container');
    const submitBtn = document.getElementById('submit-btn');
    const resultContainer = document.getElementById('result-container');
    const historyScoresContainer = document.getElementById('history-scores');
    const userInput = document.getElementById('user-name');
    const MAX_HISTORY = 5;

    // --- Variables d'état pour suivre le quiz actuel ---
    let currentQuizData = [];
    let currentModuleId = '';

    // --- Fonctions de gestion de l'historique (dépendantes du module) ---
    function getHistoryKey() {
        return `multiUserQuizHistory_${currentModuleId}`;
    }

    function getFullHistory() {
        try {
            const history = localStorage.getItem(getHistoryKey());
            return history ? JSON.parse(history) : {};
        } catch (e) {
            console.error("Erreur lors de la lecture de l'historique :", e);
            return {};
        }
    }

    function saveScore(userName, score) {
        if (!userName || userName.trim() === '' || !currentModuleId) return;
        const fullHistory = getFullHistory();
        if (!fullHistory[userName]) {
            fullHistory[userName] = [];
        }
        const userHistory = fullHistory[userName];
        
        const newEntry = {
            score: score,
            total: currentQuizData.length,
            date: new Date().toLocaleString('fr-FR')
        };
        userHistory.unshift(newEntry);
        if (userHistory.length > MAX_HISTORY) {
            userHistory.pop();
        }
        
        localStorage.setItem(getHistoryKey(), JSON.stringify(fullHistory));
    }

    function loadUserHistory(userName) {
        historyScoresContainer.innerHTML = '';
        if (!currentModuleId) return;

        const fullHistory = getFullHistory();
        const userHistory = (userName && fullHistory[userName]) ? fullHistory[userName] : [];
        
        if (userHistory.length === 0) {
            historyScoresContainer.innerHTML = `<p>Aucune tentative pour <strong>${userName || 'cet utilisateur'}</strong> sur ce module.</p>`;
            return;
        }
        userHistory.forEach(entry => {
            const scoreCard = document.createElement('div');
            scoreCard.className = 'score-card';
            scoreCard.innerHTML = `
                <span class="score-value">${entry.score} / ${entry.total}</span>
                <span class="score-date">${entry.date}</span>
            `;
            historyScoresContainer.appendChild(scoreCard);
        });
    }

    // --- Fonctions du Quiz ---
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function buildQuiz() {
        let currentSection = "";
        quizContainer.innerHTML = '';
        currentQuizData.forEach((item, index) => {
            if (item.section && item.section !== currentSection) {
                currentSection = item.section;
                const sectionTitle = document.createElement('h2');
                sectionTitle.className = 'section-title';
                sectionTitle.textContent = currentSection;
                quizContainer.appendChild(sectionTitle);
            }

            const questionBlock = document.createElement('div');
            questionBlock.className = 'question-block';
            questionBlock.id = 'question-' + index;

            const questionText = document.createElement('p');
            questionText.className = 'question-text';
            questionText.textContent = `${index + 1}. ${item.question}`;
            questionBlock.appendChild(questionText);
            
            const optionsArray = Object.entries(item.options);
            shuffleArray(optionsArray);

            const displayLetters = ['a', 'b', 'c', 'd'];
            optionsArray.forEach(([key, value], i) => {
                const label = document.createElement('label');
                label.className = 'option';
                
                const radio = document.createElement('input');
                radio.type = 'radio';
                radio.name = 'question' + index;
                radio.value = key;

                label.appendChild(radio);
                label.append(` ${displayLetters[i]}) ${value}`);
                questionBlock.appendChild(label);
            });
            quizContainer.appendChild(questionBlock);
        });
    }

    function showResults() {
        const userName = userInput.value.trim();
        let score = 0;
        
        currentQuizData.forEach((item, index) => {
            const questionBlock = document.getElementById('question-' + index);
            const selectedOption = questionBlock.querySelector(`input[name="question${index}"]:checked`);
            
            const oldExplanation = questionBlock.querySelector('.explanation');
            if (oldExplanation) oldExplanation.remove();
            
            questionBlock.querySelectorAll('.option').forEach(label => {
                label.classList.remove('correct', 'incorrect');
            });

            if (selectedOption) {
                const userAnswer = selectedOption.value;
                if (userAnswer === item.reponse) {
                    score++;
                    selectedOption.parentElement.classList.add('correct');
                } else {
                    selectedOption.parentElement.classList.add('incorrect');
                    const correctOptionInput = questionBlock.querySelector(`input[value="${item.reponse}"]`);
                    if (correctOptionInput) correctOptionInput.parentElement.classList.add('correct');
                }
            } else {
                const correctOptionInput = questionBlock.querySelector(`input[value="${item.reponse}"]`);
                if (correctOptionInput) correctOptionInput.parentElement.classList.add('correct');
            }
            
            const explanation = document.createElement('div');
            explanation.className = 'explanation';
            explanation.innerHTML = `<strong>Explication :</strong> ${item.explication} <em>(Page : ${item.page})</em>`;
            questionBlock.appendChild(explanation);
        });

        resultContainer.innerHTML = `Votre score : ${score} / ${currentQuizData.length}`;
        saveScore(userName, score);
        loadUserHistory(userName);
        submitBtn.textContent = "Réessayer le quiz";
    }

    function resetQuiz() {
        resultContainer.innerHTML = '';
        submitBtn.textContent = "Vérifier mes réponses";
        buildQuiz();
    }

    // --- Logique principale de l'application ---
    function populateDropdown() {
        for (const moduleId in allQuizzes) {
            const option = document.createElement('option');
            option.value = moduleId;
            option.textContent = allQuizzes[moduleId].title;
            quizSelect.appendChild(option);
        }
    }

    function loadModule(moduleId) {
        if (moduleId && allQuizzes[moduleId]) {
            currentModuleId = moduleId;
            currentQuizData = allQuizzes[moduleId].questions;
            courseTitle.textContent = allQuizzes[moduleId].title;
            
            initialMessage.style.display = 'none';
            quizContent.style.display = 'block';
            
            resetQuiz();
            loadUserHistory(userInput.value.trim());
        } else {
            currentModuleId = '';
            currentQuizData = [];
            initialMessage.style.display = 'block';
            quizContent.style.display = 'none';
        }
    }

    // --- Écouteurs d'événements ---
    quizSelect.addEventListener('change', (e) => {
        loadModule(e.target.value);
    });
    
    submitBtn.addEventListener('click', () => {
        if (submitBtn.textContent === "Réessayer le quiz") {
            resetQuiz();
        } else {
            showResults();
        }
    });

    userInput.addEventListener('input', () => {
        loadUserHistory(userInput.value.trim());
    });

    // --- Initialisation au chargement de la page ---
    populateDropdown();
});




























