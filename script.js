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


























