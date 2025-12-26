document.addEventListener('DOMContentLoaded', () => {

    // --- BIBLIOTHÈQUE DE QUIZ ---
    // C'est ici que vous ajouterez vos futurs modules.
    const allQuizzes = {
        'M01': {
            title: 'MEO-M01 : Théorie des organisations',
            questions: [
                {
                    section: "Chapitre I : Concepts des Organisations",
                    question: "Selon la définition de Henry Mintzberg, l'organisation est avant tout :",
                    options: { a: "Un ensemble de moyens structurés pour atteindre des objectifs", b: "Le lieu d'exercice du pouvoir et de la hiérarchie", c: "Une action collective à la poursuite de la réalisation d'une mission commune", d: "Une discipline située entre l'économie et la sociologie" },
                    reponse: "c",
                    explication: "Pour Henry Mintzberg (1989), et de façon plus simple, \"L'organisation se définit comme une action collective à la poursuite de la réalisation d'une mission commune\".",
                    page: 6
                },
                {
                    question: "Laquelle de ces propositions ne correspond pas à la définition d'une organisation ?",
                    options: { a: "Un ensemble d'individus regroupés", b: "Un objectif commun", c: "Des ressources et moyens mis en commun", d: "Une absence totale de hiérarchie et de règles" },
                    reponse: "d",
                    explication: "Une organisation suppose un objectif commun, un regroupement d'individus et la mise en commun de moyens, généralement dans un cadre structuré (hiérarchie, règles).",
                    page: 6
                },
                {
                    question: "La théorie des organisations est née principalement au début du XXe siècle, en réponse à :",
                    options: { a: "La première révolution industrielle et l'invention de la machine à vapeur", b: "La seconde révolution industrielle et le besoin d'organiser les grandes entreprises", c: "L'émergence de l'informatique et de la bureautique", d: "La mondialisation des échanges économiques" },
                    reponse: "b",
                    explication: "La théorie des organisations est née au début du XXe siècle, au cours de la seconde révolution industrielle caractérisée par le règne absolu de la machine... Il naît alors un besoin d'organisation du travail.",
                    page: 7
                },
                {
                    question: "Qui sont les trois grands auteurs cités comme appartenant à l'école classique des organisations ?",
                    options: { a: "Elton Mayo, Abraham Maslow et Douglas McGregor", b: "Henri Fayol, Frederic Winslow Taylor et Max Weber", c: "Michel Crozier, Erhard Friedberg et Jean Daniel Reynaud", d: "Henry Ford, Burns et Stalker" },
                    reponse: "b",
                    explication: "De grands auteurs comme Henri Fayol (1841-1925) et Frederic Winslow Taylor (1856-1915), ou encore Max Weber (1864-1920), qui appartiennent à l'école classique des organisations, vont poser les premières bases...",
                    page: 7
                },
                {
                    section: "Chapitre II : Historique et Évolution",
                    question: "Dans le classement de W. R. Scott, l'axe horizontal de l'évolution des théories représente le passage :",
                    options: { a: "De l'approche rationnelle à l'approche sociale", b: "Du système fermé au système ouvert", c: "De l'individu à la structure", d: "De la pratique à la théorie" },
                    reponse: "b",
                    explication: "1. L'axe horizontal : du système fermé au système ouvert. Il représente une approche « systémique » : Le système fermé... Le système ouvert...",
                    page: 10
                },
                {
                    question: "L'approche « rationnelle », qui recherche l'efficacité technique et économique par la rationalisation du travail, correspond à quel axe thématique ?",
                    options: { a: "L'axe horizontal", b: "L'axe systémique", c: "L'axe vertical", d: "L'axe social" },
                    reponse: "c",
                    explication: "2. L'axe vertical : de l'approche « rationnelle » à l'approche « sociale »... L'approche « rationnelle » conduit à la rationalisation du travail et correspond à une recherche d'efficacité technique et économique de l'entreprise.",
                    page: 10
                },
                {
                    question: "Quelle école de pensée, fondée par des ingénieurs, correspond à la première phase (1900-1930) visant à 'organiser pour produire efficacement' ?",
                    options: { a: "L'école des relations humaines", b: "L'école de la contingence", c: "L'école classique", d: "L'école sociologique" },
                    reponse: "c",
                    explication: "1. La première phase (1900 - 1930): organiser pour produire efficacement. Elle correspond à l'école de pensée dite classique.",
                    page: 10
                },
                {
                    question: "L'école des relations humaines (1930-1960) a été fondée principalement par des :",
                    options: { a: "Ingénieurs", b: "Économistes", c: "Sociologues et psychologues", d: "Chefs militaires" },
                    reponse: "c",
                    explication: "La deuxième phase (1930 - 1960)... correspond à l'école des relations humaines, fondée par des sociologues et des psychologues.",
                    page: 11
                },
                {
                    question: "L'école systémique de la contingence (1960) abandonne quel postulat fondamental des écoles précédentes ?",
                    options: { a: "La division du travail", b: "La hiérarchie des besoins", c: "Le principe de l'unité de commandement", d: "L'idée du « the one best way » (la meilleure façon unique de faire)" },
                    reponse: "d",
                    explication: "L'école de la contingence ou systémique abandonne définitivement le préalable, longtemps dominant, du « the one best way » des écoles : classique et des relations humaines.",
                    page: 12
                },
                {
                    section: "Chapitre III : Types et Modèles d'Organisation",
                    question: "Dans l'école classique, l'entreprise est considérée comme :",
                    options: { a: "Un système social complexe", b: "Un acteur stratégique", c: "Une machine, dont les ouvriers sont l'un des rouages", d: "Un système ouvert en interaction avec son environnement" },
                    reponse: "c",
                    explication: "L'entreprise est alors considérée comme une machine, dont les ouvriers sont l'un des rouages.",
                    page: 14
                },
                {
                    question: "Quel principe de l'Organisation Scientifique du Travail (OST) de F. W. Taylor consiste à séparer le travail de conception (ingénieurs) du travail d'exécution (ouvriers) ?",
                    options: { a: "La division horizontale des tâches", b: "Le salaire au rendement", c: "La division verticale du travail", d: "La hiérarchie fonctionnelle" },
                    reponse: "c",
                    explication: "1. La division verticale du travail. C'est mettre la bonne personne à la bonne place en séparant le travail intellectuel de conception des ingénieurs... du travail d'exécution des ouvriers...",
                    page: 15
                },
                {
                    question: "Henri Fayol, contrairement à Taylor, centre son analyse sur :",
                    options: { a: "L'organisation de l'atelier de production", b: "Le métier de dirigeant et la fonction d'administration", c: "La psychologie des ouvriers", d: "Les relations informelles dans les groupes" },
                    reponse: "b",
                    explication: "Henri Fayol, contrairement à Taylor, centre son analyse sur le métier de dirigeant... et sur la fonction d'administration, c'est-à-dire de management.",
                    page: 15
                },
                {
                    question: "Parmi les 14 principes de gestion de Fayol, lequel est 'l'union du personnel' ?",
                    options: { a: "L'équité", b: "L'initiative", c: "La stabilité du personnel", d: "L'esprit de corps" },
                    reponse: "d",
                    explication: "Le principe N°14, 'L'union du personnel fait la force', est aussi appelé l'esprit de corps.",
                    page: 20
                },
                {
                    question: "Selon Max Weber, quelle forme d'autorité est fondée sur des règles juridiques écrites et la compétence, où l'on obéit à la fonction et non à la personne ?",
                    options: { a: "La légitimité traditionnelle", b: "La légitimité charismatique", c: "La légitimité rationnelle et légale", d: "La légitimité bureaucratique" },
                    reponse: "c",
                    explication: "c) La légitimité rationnelle et légale... le leader exerce son autorité sur la base des règles juridiques formalisées par écrit... C'est la fonction qui est investie d'une autorité et non la personne.",
                    page: 17
                },
                {
                    question: "Laquelle de ces propositions N'EST PAS une caractéristique de la bureaucratie wébérienne ?",
                    options: { a: "La division du travail clairement définie", b: "Le caractère impersonnel des relations", c: "Des règles et règlements normalisés", d: "Le recrutement basé sur les relations personnelles" },
                    reponse: "d",
                    explication: "La bureaucratie de Weber repose sur une sélection du personnel fondée sur la formation et les connaissances techniques, vérifiées par des tests, et non sur des relations.",
                    page: 17
                },
                {
                    question: "Parmi les 6 fonctions essentielles de l'entreprise identifiées par Henri Fayol, laquelle englobe la prévoyance, l'organisation, le commandement, la coordination et le contrôle (POCCC) ?",
                    options: { a: "La fonction technique", b: "La fonction commerciale", c: "La fonction administrative", d: "La fonction de sécurité" },
                    reponse: "c",
                    explication: "6) fonction administrative (prévoyance, organisation, commandement, coordination et contrôle.",
                    page: 19
                },
                {
                    question: "Quel principe fondamental de gestion de Henri Fayol s'oppose à la hiérarchie fonctionnelle de Taylor en stipulant qu'un agent ne doit recevoir des ordres que d'un seul chef ?",
                    options: { a: "L'unité de direction", b: "La subordination de l'intérêt particulier à l'intérêt général", c: "L'unité de commandement", d: "La division du travail" },
                    reponse: "c",
                    explication: "4) L'unité de commandement : pour une action quelconque, un agent ne doit recevoir des ordres que d'un seul chef ;",
                    page: 20
                },
                {
                    question: "Lequel de ces principes N'EST PAS un des trois grands principes du Fordisme ?",
                    options: { a: "Le travail à la chaîne continue", b: "La standardisation", c: "La flexibilité des tâches", d: "Le salaire 'Five dollars a day'" },
                    reponse: "c",
                    explication: "Ce modèle... est fondé sur les trois grands principes suivants : Premier principe : le travail à la chaine continue... Deuxième principe : la standardisation... Troisième principe : Five dollars a day.",
                    page: 21
                },
                {
                    question: "L'école des relations humaines s'est développée en réaction à quelle école ?",
                    options: { a: "L'école de la contingence", b: "L'école classique rationaliste", c: "L'école sociologique", d: "L'école systémique" },
                    reponse: "b",
                    explication: "L'école des relations humaines se développe à la fin des années 1930, en réaction à l'école classique rationaliste (déshumanisation du travail...)",
                    page: 23
                },
                {
                    question: "Quelle est la principale conclusion de l'expérience de Hawthorne menée par Elton Mayo ?",
                    options: { a: "L'amélioration des conditions matérielles (éclairage) augmente mécaniquement la productivité.", b: "L'importance fondamentale du climat psychologique et des relations sociales sur la performance.", c: "La motivation des employés est exclusivement financière.", d: "La structure formelle de l'organisation est plus importante que l'organisation informelle." },
                    reponse: "b",
                    explication: "E. Mayo découvre, après de longues recherches... l'importance fondamentale du climat psychologique sur le comportement et la performance des travailleurs.",
                    page: 24
                },
                {
                    question: "La Théorie Y de Douglas McGregor propose une vision optimiste de l'homme au travail, postulant que :",
                    options: { a: "L'individu moyen éprouve une aversion innée pour le travail.", b: "L'homme doit être contrôlé et menacé de sanctions pour travailler.", c: "L'effort au travail est aussi naturel que le jeu ou le repos.", d: "L'individu préfère être dirigé et éviter les responsabilités." },
                    reponse: "c",
                    explication: "Théorie Y : hypothèses optimistes de l'être humain vis-à-vis du travail. L'effort au travail est aussi naturel que l'effort au jeu ou au plaisir du repos.",
                    page: 26
                },
                {
                    question: "Dans la pyramide des besoins d'Abraham Maslow, lequel se situe tout au sommet ?",
                    options: { a: "Les besoins physiologiques", b: "Les besoins de sécurité", c: "Les besoins de reconnaissance", d: "Les besoins d'accomplissement" },
                    reponse: "d",
                    explication: "La pyramide des besoins de Maslow place les 'Besoins d'accomplissement' au niveau 1, soit le sommet.",
                    page: 27
                },
                {
                    question: "Selon la théorie des deux facteurs de Herzberg, un 'facteur de motivation' est un élément qui :",
                    options: { a: "Empêche l'insatisfaction s'il est présent (ex: un bon salaire)", b: "Augmente la satisfaction et motive s'il est présent (ex: la reconnaissance, l'évolution de carrière)", c: "Est neutre et n'a aucun impact sur l'employé", d: "Crée de l'insatisfaction s'il est absent, mais ne motive pas s'il est présent" },
                    reponse: "b",
                    explication: "Les 'facteurs de satisfaction' (ou motivation) peuvent augmenter le degré de satisfaction et motiver. Ils sont liés au développement et à l'épanouissement.",
                    page: 21
                },
                {
                    question: "L'école néo-classique, avec des auteurs comme Peter Drucker, met l'accent sur :",
                    options: { a: "Le retour aux principes stricts du Taylorisme", b: "La psychologie individuelle de chaque employé", c: "Des approches plus pragmatiques comme la direction par objectifs (DPO) et la décentralisation", d: "L'analyse des systèmes ouverts" },
                    reponse: "c",
                    explication: "L'école néo-classique est fondée sur des postulats comme la maximisation du profit, la décentralisation des décisions et la direction par objectif (DPO).",
                    page: 25
                },
                {
                    question: "Qu'est-ce que la 'décentralisation coordonnée' proposée par Alfred Sloan ?",
                    options: { a: "Une centralisation de toutes les fonctions de l'entreprise", b: "Laisser une autonomie aux divisions, jugées sur leur rentabilité, tout en centralisant certaines fonctions (finance, juridique)", c: "Donner une autonomie totale à chaque employé", d: "Fusionner toutes les divisions en une seule" },
                    reponse: "b",
                    explication: "La théorie de la décentralisation coordonnée repose sur l'autonomie laissée aux divisions (jugées sur la rentabilité) et la centralisation de certaines fonctions comme les finances, le juridique, la publicité...",
                    page: 25
                },
                {
                    question: "L'école socio-technique intègre les individus et la technique en créant :",
                    options: { a: "Des postes de travail plus spécialisés", b: "Des chaînes de montage plus rapides", c: "Des groupes autonomes de travail responsables de la production d'une entité", d: "Une hiérarchie plus stricte" },
                    reponse: "c",
                    explication: "L'organisation sociotechnique intègre les individus et la technique dans un modèle caractérisé par la création de groupes autonomes de travail permettant d'accomplir des tâches.",
                    page: 27
                },
                {
                    question: "Selon la théorie des contingences structurelles de Burns et Stalker, une organisation 'organique' est adaptée à quel type d'environnement ?",
                    options: { a: "Un environnement stable avec peu de changements", b: "Un environnement instable avec des changements technologiques et de marché", c: "Un environnement où la hiérarchie est très importante", d: "Un environnement où les tâches sont standardisées" },
                    reponse: "b",
                    explication: "Les organisations organiques, à structure souple pour un environnement dit instable.",
                    page: 30
                },
                {
                    question: "Selon Greiner, la croissance d'une entreprise passe par une série de phases, chacune se terminant par :",
                    options: { a: "Une période de stabilité", b: "Une augmentation de la rentabilité", c: "Une crise à surmonter pour passer à la phase suivante", d: "Une réorganisation complète" },
                    reponse: "c",
                    explication: "L'entreprise passe par une série de phases. Chaque phase se caractérise par une crise à surmonter pour passer à la phase suivante (crise de leadership, d'autonomie, de contrôle...).",
                    page: 28
                },
                {
                    question: "Selon Henry Mintzberg, une 'adhocratie' est une structure particulièrement adaptée pour :",
                    options: { a: "Les organisations de petite taille comme les PME", b: "Les administrations publiques avec des activités standardisées", c: "Les structures par projet tournées vers l'innovation (ex: la Nasa)", d: "Les entreprises multinationales avec des activités hétérogènes" },
                    reponse: "c",
                    explication: "L'adhocratie, coordonnée par la collaboration, particulièrement adaptée aux structures par projet tournées vers l'innovation (par exemple : la Nasa...)",
                    page: 31
                },
                {
                    question: "Quel est le postulat central de l'analyse stratégique de Crozier et Friedberg ?",
                    options: { a: "L'homme subit passivement la pression de l'organisation.", b: "L'homme est un acteur qui dispose d'une marge de liberté et utilise des stratégies et des jeux de pouvoir.", c: "L'organisation est un système purement rationnel et prévisible.", d: "La structure de l'organisation est déterminée uniquement par son environnement." },
                    reponse: "b",
                    explication: "Selon cette théorie, l'homme ne subit pas passivement la pression de l'organisation... Bien au contraire, la sociologie des organisations prend appui sur un individu qui est un acteur qui structure le champ dans lequel il évolue.",
                    page: 34
                },
                {
                    question: "Dans l'analyse de Crozier, le pouvoir est lié à la maîtrise d'une :",
                    options: { a: "Compétence facilement remplaçable", b: "Zone d'incertitude", c: "Règle organisationnelle claire", d: "Relation hiérarchique directe" },
                    reponse: "b",
                    explication: "Ces quatre sources de pouvoir (connaissance, relations, communication, règles) renvoient à la maîtrise d'une zone d'incertitude, condition d'existence du pouvoir.",
                    page: 30
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


















