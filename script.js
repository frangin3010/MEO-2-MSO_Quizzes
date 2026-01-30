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



























