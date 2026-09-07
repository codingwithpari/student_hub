/* =========================================================
   STUDENT HUB
   SCRIPT.JS
   PART 1
   SEARCH + DARK MODE
========================================================= */


/* =========================================================
   1. DARK MODE
========================================================= */

const darkModeBtn = document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        darkModeBtn.textContent = "☀️";
    } else {
        darkModeBtn.textContent = "🌙";
    }

});


/* =========================================================
   2. STUDY TOPICS DATABASE
========================================================= */

const topics = {

    /* ---------- PHYSICS ---------- */

    "newton's first law": {
        subject: "Physics",
        chapter: "Laws of Motion",
        description:
            "An object remains at rest or continues moving with uniform velocity unless an external unbalanced force acts on it."
    },

    "newton first law": {
        subject: "Physics",
        chapter: "Laws of Motion",
        description:
            "An object remains at rest or continues moving with uniform velocity unless an external unbalanced force acts on it."
    },

    "motion in straight line": {
        subject: "Physics",
        chapter: "Kinematics",
        description:
            "Motion in which an object moves along a straight path is called motion in a straight line."
    },

    "speed": {
        subject: "Physics",
        chapter: "Motion in a Straight Line",
        description:
            "Speed is the distance travelled by an object per unit time."
    },

    "velocity": {
        subject: "Physics",
        chapter: "Motion in a Straight Line",
        description:
            "Velocity is the displacement of an object per unit time."
    },

    "ohm's law": {
        subject: "Physics",
        chapter: "Current Electricity",
        description:
            "At constant temperature, the current through a conductor is directly proportional to the potential difference across it."
    },

    "gravitation": {
        subject: "Physics",
        chapter: "Gravitation",
        description:
            "Gravitation is the force of attraction between any two masses."
    },


    /* ---------- CHEMISTRY ---------- */

    "atomic number": {
        subject: "Chemistry",
        chapter: "Structure of Atom",
        description:
            "Atomic number is the number of protons present in the nucleus of an atom."
    },

    "mole concept": {
        subject: "Chemistry",
        chapter: "Some Basic Concepts of Chemistry",
        description:
            "The mole is a unit used to express the amount of substance."
    },

    "periodic table": {
        subject: "Chemistry",
        chapter: "Classification of Elements",
        description:
            "The periodic table arranges elements according to their atomic numbers and recurring properties."
    },

    "chemical bonding": {
        subject: "Chemistry",
        chapter: "Chemical Bonding",
        description:
            "Chemical bonding explains the forces that hold atoms together in molecules and compounds."
    },


    /* ---------- MATHEMATICS ---------- */

    "trigonometry": {
        subject: "Mathematics",
        chapter: "Trigonometric Functions",
        description:
            "Trigonometry deals with relationships between angles and sides of triangles."
    },

    "quadratic equation": {
        subject: "Mathematics",
        chapter: "Quadratic Equations",
        description:
            "A quadratic equation is an equation of the form ax² + bx + c = 0, where a ≠ 0."
    },

    "differentiation": {
        subject: "Mathematics",
        chapter: "Calculus",
        description:
            "Differentiation is the mathematical process of finding the rate of change of a quantity."
    },

    "integration": {
        subject: "Mathematics",
        chapter: "Calculus",
        description:
            "Integration is a mathematical process used to find antiderivatives and areas under curves."
    },


    /* ---------- BIOLOGY ---------- */

    "photosynthesis": {
        subject: "Biology",
        chapter: "Plant Physiology",
        description:
            "Photosynthesis is the process by which green plants prepare food using light energy, carbon dioxide and water."
    },

    "cell": {
        subject: "Biology",
        chapter: "Cell: The Unit of Life",
        description:
            "The cell is the basic structural and functional unit of life."
    },

    "respiration": {
        subject: "Biology",
        chapter: "Respiration",
        description:
            "Respiration is the process by which cells release energy from food."
    },


    /* ---------- ENGLISH ---------- */

    "noun": {
        subject: "English",
        chapter: "Grammar",
        description:
            "A noun is a word used to name a person, place, thing, animal or idea."
    },

    "adjective": {
        subject: "English",
        chapter: "Grammar",
        description:
            "An adjective is a word that describes or modifies a noun or pronoun."
    },

    "verb": {
        subject: "English",
        chapter: "Grammar",
        description:
            "A verb is a word that expresses an action, occurrence or state of being."
    }

};


/* =========================================================
   3. SEARCH ELEMENTS
========================================================= */

const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const searchResult = document.getElementById("searchResult");


/* =========================================================
   4. SEARCH FUNCTION
========================================================= */

function searchTopic() {

    const query = searchInput.value
        .trim()
        .toLowerCase();

    if (query === "") {

        searchResult.innerHTML = `
            <p style="color:#64748b;">
                🔎 Please enter a topic to search.
            </p>
        `;

        return;
    }


    /* Exact match */

    if (topics[query]) {

        showTopic(topics[query]);

        return;
    }


    /* Partial match */

    const matchingTopics = Object.keys(topics).filter(function (topic) {

        return topic.includes(query);

    });


    if (matchingTopics.length > 0) {

        let resultHTML = `
            <div style="
                background:white;
                padding:20px;
                border-radius:15px;
                margin-top:15px;
                text-align:left;
            ">

                <h3 style="margin-bottom:12px;">
                    🔎 Search Results
                </h3>
        `;


        matchingTopics.forEach(function (topic) {

            resultHTML += `
                <p style="margin:10px 0;">
                    📚 ${topics[topic].subject}
                    → ${topic}
                </p>
            `;

        });


        resultHTML += `</div>`;

        searchResult.innerHTML = resultHTML;

        return;
    }


    /* No result */

    searchResult.innerHTML = `
        <div style="
            background:white;
            padding:20px;
            border-radius:15px;
            margin-top:15px;
        ">

            <h3>😕 Topic Not Found</h3>

            <p style="
                color:#64748b;
                margin-top:8px;
            ">
                We don't have this topic yet.
                Try searching another topic.
            </p>

        </div>
    `;

}


/* =========================================================
   5. SHOW TOPIC
========================================================= */

function showTopic(topic) {

    searchResult.innerHTML = `

        <div style="
            background:white;
            padding:25px;
            border-radius:18px;
            margin-top:20px;
            text-align:left;
            box-shadow:0 10px 30px rgba(0,0,0,0.08);
        ">

            <p style="
                color:#4f46e5;
                font-weight:bold;
                margin-bottom:8px;
            ">
                📚 ${topic.subject}
            </p>

            <h2 style="margin-bottom:8px;">
                ${topic.chapter}
            </h2>

            <p style="
                color:#64748b;
                line-height:1.7;
            ">
                ${topic.description}
            </p>

        </div>

    `;

}


/* =========================================================
   6. SEARCH BUTTON
========================================================= */

searchBtn.addEventListener("click", searchTopic);


/* =========================================================
   7. ENTER KEY SEARCH
========================================================= */

searchInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {

        searchTopic();

    }

});

/* =========================================================
   8. SUBJECT CHAPTERS
========================================================= */

const subjectChapters = {

    Physics: [
        "Units and Measurements",
        "Motion in a Straight Line",
        "Motion in a Plane",
        "Laws of Motion",
        "Work, Energy and Power",
        "Gravitation",
        "Thermal Properties",
        "Waves"
    ],

    Chemistry: [
    "Some Basic Concepts of Chemistry",
    "Structure of Atom",
    "Classification of Elements",
    "Chemical Bonding",
    "Thermodynamics",
    "Equilibrium",
    "Redox Reactions",
    "Organic Chemistry"
],

    Mathematics: [
        "Sets",
        "Relations and Functions",
        "Trigonometric Functions",
        "Complex Numbers",
        "Quadratic Equations",
        "Sequences and Series",
        "Straight Lines",
        "Limits and Derivatives"
    ],

    Biology: [
        "The Living World",
        "Biological Classification",
        "Plant Kingdom",
        "Animal Kingdom",
        "Cell: The Unit of Life",
        "Biomolecules",
        "Plant Physiology",
        "Human Physiology"
    ],

    English: [
        "Reading Comprehension",
        "Grammar",
        "Writing Skills",
        "Vocabulary",
        "Literature",
        "Tenses",
        "Parts of Speech"
    ],

    "Social Science": [
        "History",
        "Geography",
        "Political Science",
        "Economics",
        "Civics",
        "Important Dates",
        "Map Work"
    ]

};


/* =========================================================
   9. OPEN SUBJECT
========================================================= */

function openSubject(subjectName) {

    const chapters = subjectChapters[subjectName];

    if (!chapters) {
        return;
    }


    /* Remove old subject panel */

    const oldPanel = document.getElementById("subjectPanel");

    if (oldPanel) {
        oldPanel.remove();
    }


    /* Create panel */

    const panel = document.createElement("section");

    panel.id = "subjectPanel";

    panel.style.cssText = `
        padding: 70px 7%;
        background: #f8fafc;
        text-align: center;
    `;


    /* Heading */

    panel.innerHTML = `

        <h2 style="
            font-size: 35px;
            margin-bottom: 10px;
        ">
            📚 ${subjectName}
        </h2>

        <p style="
            color:#64748b;
            margin-bottom:35px;
        ">
            Select a chapter to continue learning.
        </p>

        <div id="chapterList" style="
            max-width:1000px;
            margin:auto;
            display:grid;
            grid-template-columns:
                repeat(auto-fit, minmax(220px, 1fr));
            gap:18px;
        ">
        </div>

    `;


    /* Put panel before footer */

    document.querySelector("footer").before(panel);


    /* Add chapters */

    const chapterList = document.getElementById("chapterList");


    chapters.forEach(function(chapter, index) {

        const card = document.createElement("div");

        card.style.cssText = `
            background:white;
            padding:22px;
            border-radius:16px;
            border:1px solid #e5e7eb;
            cursor:pointer;
            text-align:left;
            transition:0.3s;
        `;

        card.innerHTML = `

            <span style="
                font-size:14px;
                color:#4f46e5;
                font-weight:bold;
            ">
                Chapter ${index + 1}
            </span>

            <h3 style="
                margin-top:10px;
                font-size:18px;
            ">
                ${chapter}
            </h3>

            <p style="
                color:#64748b;
                font-size:13px;
                margin-top:8px;
            ">
                📖 Open chapter
            </p>

        `;


        /* Hover */

        card.addEventListener("mouseenter", function() {

            card.style.transform = "translateY(-5px)";
            card.style.boxShadow =
                "0 12px 30px rgba(79,70,229,0.12)";

        });


        card.addEventListener("mouseleave", function() {

            card.style.transform = "translateY(0)";
            card.style.boxShadow = "none";

        });


        /* Chapter click */

        card.addEventListener("click", function() {

            openChapter(subjectName, chapter);

        });


        chapterList.appendChild(card);

    });


    /* Scroll to panel */

    panel.scrollIntoView({
        behavior: "smooth"
    });

}


/* =========================================================
   10. OPEN CHAPTER
========================================================= */

function openChapter(subject, chapter) {

    const oldChapter = document.getElementById("chapterPanel");

    if (oldChapter) {
        oldChapter.remove();
    }


    const chapterPanel = document.createElement("section");

    chapterPanel.id = "chapterPanel";

    chapterPanel.style.cssText = `
        padding:60px 7%;
        background:white;
        text-align:center;
    `;


    chapterPanel.innerHTML = `

        <div style="
            max-width:850px;
            margin:auto;
            padding:35px;
            border-radius:20px;
            background:#eef2ff;
        ">

            <p style="
                color:#4f46e5;
                font-weight:bold;
            ">
                📚 ${subject}
            </p>

            <h2 style="
                margin:12px 0;
                font-size:30px;
            ">
                ${chapter}
            </h2>

            <p style="
                color:#64748b;
                line-height:1.7;
                margin-bottom:25px;
            ">
                Your notes, formulas and important questions
                for this chapter will appear here.
            </p>

            <div style="
                display:flex;
                justify-content:center;
                gap:12px;
                flex-wrap:wrap;
            ">

                <button class="chapter-btn">
                    📝 Notes
                </button>

                <button class="chapter-btn">
                    🧮 Formulas
                </button>

                <button class="chapter-btn">
                    ❓ Questions
                </button>

            </div>

        </div>

    `;


    document.getElementById("subjectPanel").after(chapterPanel);


    chapterPanel.scrollIntoView({
        behavior:"smooth"
    });

}

/* =========================================================
   11. CHAPTER STUDY CONTENT
========================================================= */

const chapterContent = {


"Some Basic Concepts of Chemistry": {

    notes: `
        <h3>📖 Some Basic Concepts of Chemistry — Complete Notes</h3>

        <h4>1. Chemistry</h4>
        <p>
            Chemistry is the branch of science that deals with the
            composition, structure, properties and transformations
            of matter.
        </p>

        <h4>2. Matter</h4>
        <p>
            Matter is anything that has mass and occupies space.
            Matter can exist mainly as solids, liquids and gases.
        </p>

        <h4>3. Laws of Chemical Combination</h4>
        <p>
            Chemical reactions follow certain laws, including the
            law of conservation of mass and the law of definite
            proportions.
        </p>

        <h4>4. Atomic Mass</h4>
        <p>
            Atomic mass represents the relative mass of an atom
            compared with a standard reference.
        </p>

        <h4>5. Molecular Mass</h4>
        <p>
            Molecular mass is the sum of the atomic masses of all
            atoms present in a molecule.
        </p>

        <h4>6. Mole</h4>
        <p>
            A mole is the amount of substance containing
            approximately 6.022 × 10²³ elementary entities.
            This number is called Avogadro constant.
        </p>

        <h4>7. Molar Mass</h4>
        <p>
            Molar mass is the mass of one mole of a substance.
            Its SI unit is kg/mol, while g/mol is commonly used
            in chemistry calculations.
        </p>

        <h4>8. Percentage Composition</h4>
        <p>
            Percentage composition tells us the percentage by mass
            of each element present in a compound.
        </p>

        <h4>9. Empirical Formula</h4>
        <p>
            The empirical formula represents the simplest whole-number
            ratio of atoms of different elements in a compound.
        </p>

        <h4>10. Molecular Formula</h4>
        <p>
            The molecular formula shows the actual number of atoms
            of each element present in one molecule of a compound.
        </p>

        <h4>11. Stoichiometry</h4>
        <p>
            Stoichiometry deals with the quantitative relationships
            between reactants and products in a chemical reaction.
        </p>
    `,

    formulas: `
        <h3>🧮 Important Formulas</h3>

        <div class="formula-box">
            Number of Moles = Given Mass / Molar Mass
        </div>

        <div class="formula-box">
            Number of Particles = Moles × N<sub>A</sub>
        </div>

        <div class="formula-box">
            N<sub>A</sub> = 6.022 × 10²³ mol⁻¹
        </div>

        <div class="formula-box">
            Molarity (M) = Moles of Solute / Volume of Solution in L
        </div>

        <div class="formula-box">
            Molality (m) = Moles of Solute / Mass of Solvent in kg
        </div>

        <div class="formula-box">
            Mass Percentage =
            (Mass of Component / Mass of Solution) × 100
        </div>

        <div class="formula-box">
            Molecular Formula =
            Empirical Formula × n
        </div>
    `,

    questions: `
        <h3>❓ Important Questions</h3>

        <div class="question-box">
            <b>Q1.</b> What is chemistry?
        </div>

        <div class="question-box">
            <b>Q2.</b> Define matter.
        </div>

        <div class="question-box">
            <b>Q3.</b> What is a mole?
        </div>

        <div class="question-box">
            <b>Q4.</b> What is Avogadro constant?
        </div>

        <div class="question-box">
            <b>Q5.</b> Define molar mass.
        </div>

        <div class="question-box">
            <b>Q6.</b> Differentiate between empirical and
            molecular formula.
        </div>

        <div class="question-box">
            <b>Q7.</b> What is stoichiometry?
        </div>

        <div class="question-box">
            <b>Q8.</b> Calculate the number of moles when the
            mass and molar mass of a substance are given.
        </div>

        <div class="question-box">
            <b>Q9.</b> What is molarity?
        </div>

        <div class="question-box">
            <b>Q10.</b> What is the difference between molarity
            and molality?
        </div>
    `
},

    

    "Classification of Elements": {

        notes: `
            <h3>📊 Classification of Elements and Periodicity in Properties</h3>

            <h4>1. Need for Classification</h4>
            <p>
                There are many known elements. Classification helps
                us arrange elements systematically and study their
                properties easily.
            </p>

            <h4>2. Modern Periodic Law</h4>
            <p>
                The physical and chemical properties of elements are
                periodic functions of their atomic numbers.
            </p>

            <h4>3. Modern Periodic Table</h4>
            <p>
                The modern periodic table contains 7 periods and
                18 groups. Elements are arranged in increasing order
                of atomic number.
            </p>

            <h4>4. Groups and Periods</h4>
            <p>
                The horizontal rows are called periods and the vertical
                columns are called groups.
            </p>

            <ul>
                <li>Number of periods = 7</li>
                <li>Number of groups = 18</li>
            </ul>

            <h4>5. Blocks of the Periodic Table</h4>
            <p>
                Elements are classified into four blocks depending on
                the subshell into which the last electron enters.
            </p>

            <ul>
                <li><b>s-block:</b> Groups 1 and 2</li>
                <li><b>p-block:</b> Groups 13 to 18</li>
                <li><b>d-block:</b> Groups 3 to 12</li>
                <li><b>f-block:</b> Lanthanides and Actinides</li>
            </ul>

            <h4>6. Atomic Radius</h4>
            <p>
                Atomic radius is a measure of the size of an atom.
                It generally decreases from left to right across a
                period and increases down a group.
            </p>

            <h4>7. Ionisation Enthalpy</h4>
            <p>
                Ionisation enthalpy is the minimum energy required
                to remove an electron from an isolated gaseous atom.
                It generally increases across a period and decreases
                down a group.
            </p>

            <h4>8. Electron Gain Enthalpy</h4>
            <p>
                Electron gain enthalpy is the enthalpy change when
                an electron is added to an isolated gaseous atom.
            </p>

            <h4>9. Electronegativity</h4>
            <p>
                Electronegativity is the tendency of an atom in a
                molecule to attract the shared pair of electrons
                towards itself.
            </p>

            <h4>10. Metallic Character</h4>
            <p>
                Metallic character is the tendency of an element
                to lose electrons and form positive ions.
                It generally decreases across a period and increases
                down a group.
            </p>

            <h4>11. Valency</h4>
            <p>
                Valency is the combining capacity of an element.
                It depends on the number of electrons involved in
                chemical bonding.
            </p>

            <h4>12. Periodic Trends</h4>
            <p>
                The regular changes in the properties of elements
                across periods and down groups are called periodic
                trends.
            </p>
        `,

        formulas: `
            <h3>🧮 Important Points</h3>

            <div class="formula-box">
                Modern Periodic Law:
                Properties of Elements → Functions of Atomic Number
            </div>

            <div class="formula-box">
                Periods = 7
            </div>

            <div class="formula-box">
                Groups = 18
            </div>

            <div class="formula-box">
                s-block → Groups 1–2
            </div>

            <div class="formula-box">
                p-block → Groups 13–18
            </div>

            <div class="formula-box">
                d-block → Groups 3–12
            </div>

            <div class="formula-box">
                f-block → Lanthanides + Actinides
            </div>
        `,

        questions: `
            <h3>❓ Important Questions</h3>

            <div class="question-box">
                <b>Q1.</b> State the modern periodic law.
            </div>

            <div class="question-box">
                <b>Q2.</b> How many groups and periods are present
                in the modern periodic table?
            </div>

            <div class="question-box">
                <b>Q3.</b> What are s-block, p-block, d-block and
                f-block elements?
            </div>

            <div class="question-box">
                <b>Q4.</b> Define atomic radius.
            </div>

            <div class="question-box">
                <b>Q5.</b> Define ionisation enthalpy.
            </div>

            <div class="question-box">
                <b>Q6.</b> What is electron gain enthalpy?
            </div>

            <div class="question-box">
                <b>Q7.</b> Define electronegativity.
            </div>

            <div class="question-box">
                <b>Q8.</b> What is metallic character?
            </div>

            <div class="question-box">
                <b>Q9.</b> What is valency?
            </div>

            <div class="question-box">
                <b>Q10.</b> Explain the periodic trends of atomic
                radius and ionisation enthalpy.
            </div>
        `
    },


"Structure of Atom": {

    notes: `
        <h3>⚛️ Structure of Atom — Complete Notes</h3>

        <h4>1. Atom</h4>
        <p>
            An atom is the basic unit of an element that retains
            the chemical properties of that element.
        </p>

        <h4>2. Fundamental Particles</h4>
        <p>
            Atoms contain three important subatomic particles:
            electrons, protons and neutrons.
        </p>

        <h4>3. Electron</h4>
        <p>
            An electron has a negative charge and very small mass.
            It is found outside the nucleus.
        </p>

        <h4>4. Proton</h4>
        <p>
            A proton has a positive charge and is present inside
            the nucleus.
        </p>

        <h4>5. Neutron</h4>
        <p>
            A neutron has no electrical charge and is present
            inside the nucleus.
        </p>

        <h4>6. Nucleus</h4>
        <p>
            The nucleus is the small, dense central part of an atom.
            It contains protons and neutrons.
        </p>

        <h4>7. Atomic Number</h4>
        <p>
            Atomic number is the number of protons present in the
            nucleus of an atom. It is represented by Z.
        </p>

        <h4>8. Mass Number</h4>
        <p>
            Mass number is the total number of protons and neutrons
            present in the nucleus. It is represented by A.
        </p>

        <h4>9. Isotopes</h4>
        <p>
            Isotopes are atoms of the same element having the same
            atomic number but different mass numbers.
        </p>

        <h4>10. Bohr's Model</h4>
        <p>
            According to Bohr's model, electrons move around the
            nucleus in certain permitted energy levels or shells.
        </p>

        <h4>11. Electronic Configuration</h4>
        <p>
            Electronic configuration describes how electrons are
            distributed among different shells and subshells.
        </p>
    `,

    formulas: `
        <h3>🧮 Important Formulas</h3>

        <div class="formula-box">
            Atomic Number (Z) = Number of Protons
        </div>

        <div class="formula-box">
            For a neutral atom:
            Number of Electrons = Number of Protons
        </div>

        <div class="formula-box">
            Mass Number (A) =
            Number of Protons + Number of Neutrons
        </div>

        <div class="formula-box">
            Number of Neutrons = A − Z
        </div>

        <div class="formula-box">
            Maximum Electrons in Shell = 2n²
        </div>

        <div class="formula-box">
            Energy of Photon: E = hν
        </div>

        <div class="formula-box">
            Speed of Light: c = νλ
        </div>
    `,

    questions: `
        <h3>❓ Important Questions</h3>

        <div class="question-box">
            <b>Q1.</b> Name the three fundamental subatomic particles.
        </div>

        <div class="question-box">
            <b>Q2.</b> What is the charge of an electron?
        </div>

        <div class="question-box">
            <b>Q3.</b> What is atomic number?
        </div>

        <div class="question-box">
            <b>Q4.</b> What is mass number?
        </div>

        <div class="question-box">
            <b>Q5.</b> How can the number of neutrons be calculated?
        </div>

        <div class="question-box">
            <b>Q6.</b> What are isotopes?
        </div>

        <div class="question-box">
            <b>Q7.</b> Describe the basic idea of Bohr's atomic model.
        </div>

        <div class="question-box">
            <b>Q8.</b> What is electronic configuration?
        </div>

        <div class="question-box">
            <b>Q9.</b> An atom has atomic number 17 and mass number
            35. Find the number of protons, electrons and neutrons.
        </div>

        <div class="question-box">
            <b>Q10.</b> Write the relation between frequency,
            wavelength and speed of light.
        </div>
    `
},

"Chemical Bonding": {

    notes: `
        <h3>🔗 Chemical Bonding and Molecular Structure — Complete Notes</h3>

        <h4>1. Chemical Bond</h4>
        <p>
            A chemical bond is the attractive force that holds atoms
            or ions together in a molecule or compound.
            Atoms form bonds to achieve greater stability.
        </p>

        <h4>2. Why Do Atoms Form Chemical Bonds?</h4>
        <p>
            Atoms combine with each other to attain a more stable
            electronic configuration. This usually involves the
            valence electrons.
        </p>

        <h4>3. Octet Rule</h4>
        <p>
            The octet rule states that atoms tend to gain, lose or
            share electrons to achieve eight electrons in their
            valence shell.
        </p>

        <h4>4. Ionic Bond</h4>
        <p>
            An ionic bond is formed by the complete transfer of
            electrons from one atom to another, resulting in the
            formation of oppositely charged ions.
        </p>

        <p>
            Example: Sodium chloride (NaCl).
        </p>

        <h4>5. Covalent Bond</h4>
        <p>
            A covalent bond is formed when two atoms share one or
            more pairs of electrons.
        </p>

        <p>
            Covalent bonds may be single, double or triple bonds.
        </p>

        <h4>6. Lewis Structure</h4>
        <p>
            Lewis structures represent valence electrons and
            chemical bonds using dots and lines around the symbols
            of atoms.
        </p>

        <h4>7. Coordinate Bond</h4>
        <p>
            A coordinate bond is a covalent bond in which both
            electrons of the shared pair are donated by the same atom.
        </p>

        <h4>8. Electronegativity</h4>
        <p>
            Electronegativity is the tendency of an atom in a molecule
            to attract the shared pair of electrons towards itself.
        </p>

        <h4>9. Polar and Non-Polar Covalent Bonds</h4>
        <p>
            A covalent bond formed between atoms having different
            electronegativities may be polar, while a bond between
            identical atoms is generally non-polar.
        </p>

        <h4>10. VSEPR Theory</h4>
        <p>
            According to VSEPR theory, electron pairs around a central
            atom repel each other and arrange themselves as far apart
            as possible.
        </p>

        <h4>11. Valence Bond Theory</h4>
        <p>
            Valence bond theory explains covalent bonding in terms of
            overlap of atomic orbitals containing electrons.
        </p>

        <h4>12. Hybridisation</h4>
        <p>
            Hybridisation is the mixing of atomic orbitals of similar
            energy to form new hybrid orbitals.
        </p>

        <ul>
            <li><b>sp:</b> Linear</li>
            <li><b>sp²:</b> Trigonal planar</li>
            <li><b>sp³:</b> Tetrahedral</li>
        </ul>

        <h4>13. Hydrogen Bond</h4>
        <p>
            Hydrogen bonding is an attractive interaction involving
            hydrogen bonded to a highly electronegative atom such as
            fluorine, oxygen or nitrogen.
        </p>
    `,

    formulas: `
        <h3>🧮 Important Concepts & Relations</h3>

        <div class="formula-box">
            Formal Charge =
            Valence Electrons − Non-bonding Electrons
            − ½(Bonding Electrons)
        </div>

        <div class="formula-box">
            Bond Order =
            ½(Number of bonding electrons − Number of antibonding electrons)
        </div>

        <div class="formula-box">
            sp → Linear → 180°
        </div>

        <div class="formula-box">
            sp² → Trigonal Planar → 120°
        </div>

        <div class="formula-box">
            sp³ → Tetrahedral → 109.5°
        </div>
    `,

    questions: `
        <h3>❓ Important Questions</h3>

        <div class="question-box">
            <b>Q1.</b> What is a chemical bond?
        </div>

        <div class="question-box">
            <b>Q2.</b> Why do atoms form chemical bonds?
        </div>

        <div class="question-box">
            <b>Q3.</b> State the octet rule.
        </div>

        <div class="question-box">
            <b>Q4.</b> What is an ionic bond?
        </div>

        <div class="question-box">
            <b>Q5.</b> What is a covalent bond?
        </div>

        <div class="question-box">
            <b>Q6.</b> Differentiate between ionic and covalent bonds.
        </div>

        <div class="question-box">
            <b>Q7.</b> What is a coordinate bond?
        </div>

        <div class="question-box">
            <b>Q8.</b> Explain VSEPR theory.
        </div>

        <div class="question-box">
            <b>Q9.</b> What is hybridisation? Explain sp, sp² and sp³
            hybridisation.
        </div>

        <div class="question-box">
            <b>Q10.</b> What is hydrogen bonding?
        </div>
    `
},

"Thermodynamics": {

    notes: `
        <h3>🌡️ Thermodynamics — Complete Notes</h3>

        <h4>1. Thermodynamics</h4>
        <p>
            Thermodynamics is the branch of chemistry that deals with
            energy changes associated with physical and chemical
            processes.
        </p>

        <h4>2. System and Surroundings</h4>
        <p>
            <b>System:</b> The part of the universe selected for study.
        </p>
        <p>
            <b>Surroundings:</b> Everything outside the system that can
            interact with it.
        </p>

        <h4>3. Types of Systems</h4>
        <ul>
            <li><b>Open system:</b> Exchanges both matter and energy.</li>
            <li><b>Closed system:</b> Exchanges energy but not matter.</li>
            <li><b>Isolated system:</b> Exchanges neither matter nor energy.</li>
        </ul>

        <h4>4. State of a System</h4>
        <p>
            The state of a system is described by measurable properties
            such as pressure, volume, temperature and composition.
        </p>

        <h4>5. Internal Energy</h4>
        <p>
            Internal energy is the total energy contained within a
            system. It includes the microscopic kinetic and potential
            energies of its particles.
        </p>

        <h4>6. Heat</h4>
        <p>
            Heat is energy transferred between a system and its
            surroundings because of a temperature difference.
        </p>

        <h4>7. Work</h4>
        <p>
            Work is energy transferred when a force causes a change
            in the surroundings. In chemistry, expansion and
            compression work are especially important.
        </p>

        <h4>8. First Law of Thermodynamics</h4>
        <p>
            Energy can neither be created nor destroyed. It can only
            be transferred or transformed from one form to another.
        </p>

        <h4>9. Enthalpy</h4>
        <p>
            Enthalpy is a thermodynamic quantity useful for studying
            heat changes at constant pressure.
        </p>

        <h4>10. Exothermic Reaction</h4>
        <p>
            A reaction that releases heat to the surroundings is called
            an exothermic reaction. Its enthalpy change is negative.
        </p>

        <h4>11. Endothermic Reaction</h4>
        <p>
            A reaction that absorbs heat from the surroundings is called
            an endothermic reaction. Its enthalpy change is positive.
        </p>

        <h4>12. Hess's Law</h4>
        <p>
            Hess's law states that the total enthalpy change of a
            reaction is the same whether the reaction occurs in one
            step or several steps.
        </p>

        <h4>13. Entropy</h4>
        <p>
            Entropy is a measure of the randomness or disorder of a
            system.
        </p>

        <h4>14. Gibbs Energy</h4>
        <p>
            Gibbs energy helps us determine whether a process is
            thermodynamically favourable under specified conditions.
        </p>
    `,

    formulas: `
        <h3>🧮 Important Formulas</h3>

        <div class="formula-box">
            ΔU = q + w
        </div>

        <div class="formula-box">
            w = −PΔV
        </div>

        <div class="formula-box">
            ΔH = ΔU + Δ(PV)
        </div>

        <div class="formula-box">
            At constant pressure:
            q<sub>p</sub> = ΔH
        </div>

        <div class="formula-box">
            ΔG = ΔH − TΔS
        </div>

        <div class="formula-box">
            ΔS = q<sub>rev</sub> / T
        </div>

        <div class="formula-box">
            Exothermic → ΔH &lt; 0
        </div>

        <div class="formula-box">
            Endothermic → ΔH &gt; 0
        </div>
    `,

    questions: `
        <h3>❓ Important Questions</h3>

        <div class="question-box">
            <b>Q1.</b> What is thermodynamics?
        </div>

        <div class="question-box">
            <b>Q2.</b> Define system and surroundings.
        </div>

        <div class="question-box">
            <b>Q3.</b> Differentiate between open, closed and
            isolated systems.
        </div>

        <div class="question-box">
            <b>Q4.</b> What is internal energy?
        </div>

        <div class="question-box">
            <b>Q5.</b> State the first law of thermodynamics.
        </div>

        <div class="question-box">
            <b>Q6.</b> What is enthalpy?
        </div>

        <div class="question-box">
            <b>Q7.</b> Differentiate between exothermic and
            endothermic reactions.
        </div>

        <div class="question-box">
            <b>Q8.</b> State Hess's law of constant heat summation.
        </div>

        <div class="question-box">
            <b>Q9.</b> What is entropy?
        </div>

        <div class="question-box">
            <b>Q10.</b> Write the relation between Gibbs energy,
            enthalpy and entropy.
        </div>
    `
},

"Equilibrium": {

    notes: `
        <h3>⚖️ Equilibrium — Complete Notes</h3>

        <h4>1. Chemical Equilibrium</h4>
        <p>
            Chemical equilibrium is a dynamic state in a reversible
            reaction where the rates of forward and backward reactions
            become equal.
        </p>

        <h4>2. Reversible Reaction</h4>
        <p>
            A reversible reaction can proceed in both forward and
            backward directions. It is represented by the symbol ⇌.
        </p>

        <h4>3. Dynamic Equilibrium</h4>
        <p>
            At equilibrium, the forward and backward reactions continue
            to occur, but their rates are equal. Therefore, the
            concentrations of reactants and products remain constant.
        </p>

        <h4>4. Law of Mass Action</h4>
        <p>
            At a given temperature, the rate of a reaction is related
            to the product of the active masses or concentrations of
            the reactants.
        </p>

        <h4>5. Equilibrium Constant</h4>
        <p>
            The equilibrium constant gives the ratio of the
            concentrations of products to reactants at equilibrium,
            with each concentration raised to its stoichiometric
            coefficient.
        </p>

        <h4>6. Le Chatelier's Principle</h4>
        <p>
            If a system at equilibrium is disturbed by changing
            concentration, pressure or temperature, the system
            shifts in a direction that tends to reduce the effect
            of the disturbance.
        </p>

        <h4>7. Ionic Equilibrium</h4>
        <p>
            Ionic equilibrium deals with the equilibrium established
            between ions and undissociated molecules in solutions.
        </p>

        <h4>8. Acids and Bases</h4>
        <p>
            According to the Arrhenius concept, acids produce H⁺ ions
            in aqueous solution and bases produce OH⁻ ions.
        </p>

        <h4>9. pH</h4>
        <p>
            pH is a measure of the hydrogen ion concentration of
            a solution.
        </p>

        <h4>10. Strong and Weak Electrolytes</h4>
        <p>
            Strong electrolytes ionise almost completely in solution,
            while weak electrolytes ionise only partially.
        </p>

        <h4>11. Buffer Solution</h4>
        <p>
            A buffer solution resists a change in its pH when small
            amounts of acid or base are added.
        </p>
    `,

    formulas: `
        <h3>🧮 Important Formulas</h3>

        <div class="formula-box">
            Kc = [Products] / [Reactants]
        </div>

        <div class="formula-box">
            pH = −log[H⁺]
        </div>

        <div class="formula-box">
            pOH = −log[OH⁻]
        </div>

        <div class="formula-box">
            pH + pOH = 14
        </div>

        <div class="formula-box">
            Kw = [H⁺][OH⁻]
        </div>

        <div class="formula-box">
            At 25°C:
            Kw = 1.0 × 10⁻¹⁴
        </div>
    `,

    questions: `
        <h3>❓ Important Questions</h3>

        <div class="question-box">
            <b>Q1.</b> What is chemical equilibrium?
        </div>

        <div class="question-box">
            <b>Q2.</b> What is a reversible reaction?
        </div>

        <div class="question-box">
            <b>Q3.</b> Why is chemical equilibrium called dynamic?
        </div>

        <div class="question-box">
            <b>Q4.</b> State the law of mass action.
        </div>

        <div class="question-box">
            <b>Q5.</b> What is equilibrium constant?
        </div>

        <div class="question-box">
            <b>Q6.</b> State Le Chatelier's principle.
        </div>

        <div class="question-box">
            <b>Q7.</b> Define pH.
        </div>

        <div class="question-box">
            <b>Q8.</b> What is the difference between strong and
            weak electrolytes?
        </div>

        <div class="question-box">
            <b>Q9.</b> What is a buffer solution?
        </div>

        <div class="question-box">
            <b>Q10.</b> Write the relation between pH and pOH at 25°C.
        </div>
    `
},

"Redox Reactions": {

    notes: `
        <h3>🔄 Redox Reactions — Complete Notes</h3>

        <h4>1. Redox Reaction</h4>
        <p>
            A redox reaction is a chemical reaction in which
            oxidation and reduction occur simultaneously.
        </p>

        <h4>2. Oxidation</h4>
        <p>
            Oxidation can be described as loss of electrons,
            increase in oxidation number, addition of oxygen or
            removal of hydrogen.
        </p>

        <h4>3. Reduction</h4>
        <p>
            Reduction can be described as gain of electrons,
            decrease in oxidation number, removal of oxygen or
            addition of hydrogen.
        </p>

        <h4>4. Oxidising Agent</h4>
        <p>
            An oxidising agent causes oxidation of another substance
            and itself gets reduced.
        </p>

        <h4>5. Reducing Agent</h4>
        <p>
            A reducing agent causes reduction of another substance
            and itself gets oxidised.
        </p>

        <h4>6. Oxidation Number</h4>
        <p>
            Oxidation number is the apparent charge assigned to an
            atom in a compound or ion according to certain rules.
        </p>

        <h4>7. Rules for Oxidation Number</h4>
        <ul>
            <li>
                The oxidation number of an element in its free state
                is zero.
            </li>
            <li>
                The oxidation number of a monoatomic ion is equal to
                its charge.
            </li>
            <li>
                Oxygen usually has oxidation number −2.
            </li>
            <li>
                Hydrogen usually has oxidation number +1.
            </li>
            <li>
                The sum of oxidation numbers in a neutral compound
                is zero.
            </li>
            <li>
                The sum of oxidation numbers in a polyatomic ion
                equals its charge.
            </li>
        </ul>

        <h4>8. Disproportionation Reaction</h4>
        <p>
            A reaction in which the same element is simultaneously
            oxidised and reduced is called a disproportionation
            reaction.
        </p>

        <h4>9. Balancing Redox Reactions</h4>
        <p>
            Redox equations can be balanced using methods such as
            the oxidation-number method and the ion-electron method.
        </p>

        <h4>10. Electron Transfer</h4>
        <p>
            In many redox reactions, oxidation involves loss of
            electrons while reduction involves gain of electrons.
        </p>
    `,

    formulas: `
        <h3>🧮 Important Concepts</h3>

        <div class="formula-box">
            Oxidation → Loss of Electrons
        </div>

        <div class="formula-box">
            Reduction → Gain of Electrons
        </div>

        <div class="formula-box">
            Oxidation → Increase in Oxidation Number
        </div>

        <div class="formula-box">
            Reduction → Decrease in Oxidation Number
        </div>

        <div class="formula-box">
            Oxidising Agent → Gets Reduced
        </div>

        <div class="formula-box">
            Reducing Agent → Gets Oxidised
        </div>
    `,

    questions: `
        <h3>❓ Important Questions</h3>

        <div class="question-box">
            <b>Q1.</b> What is a redox reaction?
        </div>

        <div class="question-box">
            <b>Q2.</b> Define oxidation and reduction.
        </div>

        <div class="question-box">
            <b>Q3.</b> What is an oxidising agent?
        </div>

        <div class="question-box">
            <b>Q4.</b> What is a reducing agent?
        </div>

        <div class="question-box">
            <b>Q5.</b> Define oxidation number.
        </div>

        <div class="question-box">
            <b>Q6.</b> Write the important rules for assigning
            oxidation numbers.
        </div>

        <div class="question-box">
            <b>Q7.</b> What is a disproportionation reaction?
        </div>

        <div class="question-box">
            <b>Q8.</b> Explain the oxidation-number method of
            balancing redox reactions.
        </div>

        <div class="question-box">
            <b>Q9.</b> Differentiate between oxidising agent and
            reducing agent.
        </div>

        <div class="question-box">
            <b>Q10.</b> Why do oxidation and reduction always occur
            together in a redox reaction?
        </div>
    `
},

"Organic Chemistry": {

    notes: `
        <h3>🔬 Organic Chemistry — Complete Notes</h3>

        <h4>1. Organic Chemistry</h4>
        <p>
            Organic chemistry is the branch of chemistry that deals
            mainly with carbon compounds.
        </p>

        <h4>2. Why Carbon is Special</h4>
        <p>
            Carbon forms a very large number of compounds because of
            its tetravalency and ability to form strong carbon-carbon
            bonds.
        </p>

        <h4>3. Tetravalency of Carbon</h4>
        <p>
            Carbon has four valence electrons and generally forms
            four covalent bonds to complete its stable electronic
            configuration.
        </p>

        <h4>4. Catenation</h4>
        <p>
            Catenation is the ability of carbon atoms to form bonds
            with other carbon atoms, producing chains, branches and
            rings.
        </p>

        <h4>5. Hydrocarbons</h4>
        <p>
            Hydrocarbons are organic compounds containing only carbon
            and hydrogen.
        </p>

        <ul>
            <li><b>Alkanes:</b> Saturated hydrocarbons</li>
            <li><b>Alkenes:</b> Contain carbon-carbon double bonds</li>
            <li><b>Alkynes:</b> Contain carbon-carbon triple bonds</li>
            <li><b>Aromatic hydrocarbons:</b> Contain aromatic ring systems</li>
        </ul>

        <h4>6. Homologous Series</h4>
        <p>
            A homologous series is a group of organic compounds having
            the same functional group and similar chemical properties,
            where successive members generally differ by a CH₂ unit.
        </p>

        <h4>7. Functional Group</h4>
        <p>
            A functional group is an atom or group of atoms responsible
            for the characteristic chemical properties of an organic
            compound.
        </p>

        <h4>8. IUPAC Nomenclature</h4>
        <p>
            IUPAC nomenclature provides systematic rules for naming
            organic compounds.
        </p>

        <h4>9. Isomerism</h4>
        <p>
            Isomerism occurs when compounds have the same molecular
            formula but different arrangements or structures.
        </p>

        <h4>10. Types of Organic Reactions</h4>
        <ul>
            <li>Addition reactions</li>
            <li>Substitution reactions</li>
            <li>Elimination reactions</li>
            <li>Rearrangement reactions</li>
        </ul>

        <h4>11. Purification of Organic Compounds</h4>
        <p>
            Organic compounds can be purified using methods such as
            crystallisation, sublimation, distillation and
            chromatography.
        </p>
    `,

    formulas: `
        <h3>🧮 Important Formulas</h3>

        <div class="formula-box">
            General Formula of Alkanes:
            CₙH₂ₙ₊₂
        </div>

        <div class="formula-box">
            General Formula of Alkenes:
            CₙH₂ₙ
        </div>

        <div class="formula-box">
            General Formula of Alkynes:
            CₙH₂ₙ₋₂
        </div>

        <div class="formula-box">
            Alkane → Single Bond
        </div>

        <div class="formula-box">
            Alkene → Double Bond
        </div>

        <div class="formula-box">
            Alkyne → Triple Bond
        </div>

        <div class="formula-box">
            Homologous Difference = CH₂
        </div>
    `,

    questions: `
        <h3>❓ Important Questions</h3>

        <div class="question-box">
            <b>Q1.</b> What is organic chemistry?
        </div>

        <div class="question-box">
            <b>Q2.</b> Why does carbon form a large number of compounds?
        </div>

        <div class="question-box">
            <b>Q3.</b> What is tetravalency of carbon?
        </div>

        <div class="question-box">
            <b>Q4.</b> Define catenation.
        </div>

        <div class="question-box">
            <b>Q5.</b> What are hydrocarbons?
        </div>

        <div class="question-box">
            <b>Q6.</b> Differentiate between alkanes, alkenes and alkynes.
        </div>

        <div class="question-box">
            <b>Q7.</b> What is a homologous series?
        </div>

        <div class="question-box">
            <b>Q8.</b> What is a functional group?
        </div>

        <div class="question-box">
            <b>Q9.</b> What is IUPAC nomenclature?
        </div>

        <div class="question-box">
            <b>Q10.</b> What is isomerism?
        </div>
    `
},

"Sets": {

    notes: `
        <h3>📐 Sets — Complete Notes</h3>

        <h4>1. Set</h4>
        <p>
            A set is a well-defined collection of distinct objects.
            The objects of a set are called its elements or members.
        </p>

        <h4>2. Representation of a Set</h4>
        <p>
            A set can be represented mainly in two ways:
        </p>

        <ul>
            <li>
                <b>Roster Form:</b> Elements are listed inside curly
                brackets.
                Example: A = {1, 2, 3, 4}
            </li>
            <li>
                <b>Set-builder Form:</b> A set is described using a
                property common to all its elements.
            </li>
        </ul>

        <h4>3. Types of Sets</h4>

        <p>
            <b>Empty Set:</b> A set having no element.
            It is denoted by ∅ or { }.
        </p>

        <p>
            <b>Singleton Set:</b> A set containing exactly one element.
        </p>

        <p>
            <b>Finite Set:</b> A set having a finite number of elements.
        </p>

        <p>
            <b>Infinite Set:</b> A set having infinitely many elements.
        </p>

        <p>
            <b>Equal Sets:</b> Two sets are equal if they contain exactly
            the same elements.
        </p>

        <h4>4. Subset</h4>
        <p>
            Set A is a subset of set B if every element of A is also
            an element of B. It is written as A ⊆ B.
        </p>

        <h4>5. Power Set</h4>
        <p>
            The collection of all subsets of a set A is called the
            power set of A and is denoted by P(A).
        </p>

        <h4>6. Universal Set</h4>
        <p>
            The set containing all the objects under consideration is
            called the universal set and is usually denoted by U.
        </p>

        <h4>7. Union of Sets</h4>
        <p>
            The union of two sets A and B contains all elements that
            belong to A or B or both.
        </p>

        <h4>8. Intersection of Sets</h4>
        <p>
            The intersection of A and B contains only those elements
            that are common to both sets.
        </p>

        <h4>9. Difference of Sets</h4>
        <p>
            A − B contains those elements of A which are not present
            in B.
        </p>

        <h4>10. Complement of a Set</h4>
        <p>
            The complement of A contains all elements of the universal
            set that are not elements of A.
        </p>

        <h4>11. Venn Diagrams</h4>
        <p>
            Venn diagrams are graphical representations of sets.
            They are useful for understanding union, intersection,
            difference and complement.
        </p>
    `,

    formulas: `
        <h3>🧮 Important Formulas</h3>

        <div class="formula-box">
            Number of subsets of a set having n elements = 2ⁿ
        </div>

        <div class="formula-box">
            Number of proper subsets = 2ⁿ − 1
        </div>

        <div class="formula-box">
            n(A ∪ B) = n(A) + n(B) − n(A ∩ B)
        </div>

        <div class="formula-box">
            n(A − B) = n(A) − n(A ∩ B)
        </div>

        <div class="formula-box">
            A ∪ ∅ = A
        </div>

        <div class="formula-box">
            A ∩ ∅ = ∅
        </div>

        <div class="formula-box">
            A ∪ U = U
        </div>

        <div class="formula-box">
            A ∩ U = A
        </div>

        <div class="formula-box">
            A ∪ A = A
        </div>

        <div class="formula-box">
            A ∩ A = A
        </div>

        <div class="formula-box">
            A ∪ A' = U
        </div>

        <div class="formula-box">
            A ∩ A' = ∅
        </div>
    `,

    questions: `
        <h3>❓ Important Questions</h3>

        <div class="question-box">
            <b>Q1.</b> What is a set? Give an example.
        </div>

        <div class="question-box">
            <b>Q2.</b> Explain roster form and set-builder form.
        </div>

        <div class="question-box">
            <b>Q3.</b> What is an empty set?
        </div>

        <div class="question-box">
            <b>Q4.</b> What is a subset?
        </div>

        <div class="question-box">
            <b>Q5.</b> What is a power set?
        </div>

        <div class="question-box">
            <b>Q6.</b> Define universal set.
        </div>

        <div class="question-box">
            <b>Q7.</b> What is the difference between union and
            intersection of two sets?
        </div>

        <div class="question-box">
            <b>Q8.</b> Find the number of subsets of a set having
            5 elements.
        </div>

        <div class="question-box">
            <b>Q9.</b> State the formula for n(A ∪ B).
        </div>

        <div class="question-box">
            <b>Q10.</b> Explain the complement of a set with the help
            of a Venn diagram.
        </div>
    `
},

"Relations and Functions": {

    notes: `
        <h3>📐 Relations and Functions — Complete Notes</h3>

        <h4>1. Ordered Pair</h4>
        <p>
            An ordered pair is written as (a, b), where a is the first
            component and b is the second component.
            Two ordered pairs (a, b) and (c, d) are equal if a = c
            and b = d.
        </p>

        <h4>2. Cartesian Product</h4>
        <p>
            If A and B are two non-empty sets, then the set of all
            ordered pairs (a, b), where a ∈ A and b ∈ B, is called
            the Cartesian product of A and B.
        </p>

        <h4>3. Relation</h4>
        <p>
            A relation from set A to set B is a subset of the
            Cartesian product A × B.
        </p>

        <h4>4. Domain, Codomain and Range</h4>
        <p>
            <b>Domain:</b> The set of all first components of the
            ordered pairs in a relation.
        </p>

        <p>
            <b>Codomain:</b> The set into which the elements of the
            domain are mapped.
        </p>

        <p>
            <b>Range:</b> The set of actual images obtained in the
            codomain.
        </p>

        <h4>5. Function</h4>
        <p>
            A function f from A to B is a relation in which every
            element of A has exactly one image in B.
        </p>

        <h4>6. Types of Functions</h4>

        <p>
            <b>One-One Function:</b> Different elements of the domain
            have different images.
        </p>

        <p>
            <b>Many-One Function:</b> Two or more elements of the
            domain may have the same image.
        </p>

        <p>
            <b>Onto Function:</b> Every element of the codomain has
            at least one pre-image.
        </p>

        <p>
            <b>Into Function:</b> At least one element of the codomain
            has no pre-image.
        </p>

        <p>
            <b>Bijective Function:</b> A function which is both
            one-one and onto.
        </p>

        <h4>7. Algebra of Functions</h4>
        <p>
            If f and g are two functions, new functions can be formed
            using addition, subtraction, multiplication and division.
        </p>

        <h4>8. Composition of Functions</h4>
        <p>
            The composition of functions f and g is written as
            (f ∘ g)(x) and means f(g(x)).
        </p>
    `,

    formulas: `
        <h3>🧮 Important Formulas</h3>

        <div class="formula-box">
            A × B = { (a,b) : a ∈ A and b ∈ B }
        </div>

        <div class="formula-box">
            n(A × B) = n(A) × n(B)
        </div>

        <div class="formula-box">
            f : A → B
        </div>

        <div class="formula-box">
            (f + g)(x) = f(x) + g(x)
        </div>

        <div class="formula-box">
            (f − g)(x) = f(x) − g(x)
        </div>

        <div class="formula-box">
            (fg)(x) = f(x)g(x)
        </div>

        <div class="formula-box">
            (f/g)(x) = f(x)/g(x),  g(x) ≠ 0
        </div>

        <div class="formula-box">
            (f ∘ g)(x) = f(g(x))
        </div>
    `,

    questions: `
        <h3>❓ Important Questions</h3>

        <div class="question-box">
            <b>Q1.</b> What is an ordered pair?
        </div>

        <div class="question-box">
            <b>Q2.</b> Define Cartesian product of two sets.
        </div>

        <div class="question-box">
            <b>Q3.</b> What is a relation?
        </div>

        <div class="question-box">
            <b>Q4.</b> Define domain, codomain and range.
        </div>

        <div class="question-box">
            <b>Q5.</b> What is a function?
        </div>

        <div class="question-box">
            <b>Q6.</b> Differentiate between one-one and many-one
            functions.
        </div>

        <div class="question-box">
            <b>Q7.</b> What is an onto function?
        </div>

        <div class="question-box">
            <b>Q8.</b> What is a bijective function?
        </div>

        <div class="question-box">
            <b>Q9.</b> What is composition of functions?
        </div>

        <div class="question-box">
            <b>Q10.</b> If f(x) = 2x + 1 and g(x) = x²,
            find (f ∘ g)(x).
        </div>
    `
},

"Trigonometric Functions": {

    notes: `
        <h3>📐 Trigonometric Functions — Complete Notes</h3>

        <h4>1. Angle</h4>
        <p>
            An angle is formed when a ray rotates about its initial
            point. Angles are commonly measured in degrees or radians.
        </p>

        <h4>2. Degree and Radian</h4>
        <p>
            A complete revolution is 360° or 2π radians.
        </p>

        <h4>3. Trigonometric Ratios</h4>
        <p>
            For an angle θ in a right-angled triangle:
        </p>

        <ul>
            <li>sin θ = Perpendicular / Hypotenuse</li>
            <li>cos θ = Base / Hypotenuse</li>
            <li>tan θ = Perpendicular / Base</li>
            <li>cosec θ = Hypotenuse / Perpendicular</li>
            <li>sec θ = Hypotenuse / Base</li>
            <li>cot θ = Base / Perpendicular</li>
        </ul>

        <h4>4. Reciprocal Relations</h4>
        <p>
            The reciprocal relationships between trigonometric ratios
            are:
        </p>

        <ul>
            <li>cosec θ = 1 / sin θ</li>
            <li>sec θ = 1 / cos θ</li>
            <li>cot θ = 1 / tan θ</li>
        </ul>

        <h4>5. Fundamental Identities</h4>
        <p>
            Important trigonometric identities connect the different
            trigonometric ratios.
        </p>

        <h4>6. Signs of Trigonometric Functions</h4>
        <p>
            The signs of trigonometric functions depend on the
            quadrant in which the angle lies.
        </p>

        <ul>
            <li><b>First Quadrant:</b> All positive</li>
            <li><b>Second Quadrant:</b> Sine positive</li>
            <li><b>Third Quadrant:</b> Tangent positive</li>
            <li><b>Fourth Quadrant:</b> Cosine positive</li>
        </ul>

        <h4>7. Periodicity</h4>
        <p>
            Trigonometric functions repeat their values after a
            fixed interval called their period.
        </p>

        <h4>8. Even and Odd Functions</h4>
        <p>
            Cosine and secant are even functions, while sine, cosecant,
            tangent and cotangent are odd functions.
        </p>

        <h4>9. General Solutions</h4>
        <p>
            Trigonometric equations may have infinitely many solutions
            because trigonometric functions are periodic.
        </p>
    `,

    formulas: `
        <h3>🧮 Important Formulas</h3>

        <div class="formula-box">
            sin θ = P / H
        </div>

        <div class="formula-box">
            cos θ = B / H
        </div>

        <div class="formula-box">
            tan θ = P / B
        </div>

        <div class="formula-box">
            sin²θ + cos²θ = 1
        </div>

        <div class="formula-box">
            1 + tan²θ = sec²θ
        </div>

        <div class="formula-box">
            1 + cot²θ = cosec²θ
        </div>

        <div class="formula-box">
            tan θ = sin θ / cos θ
        </div>

        <div class="formula-box">
            cot θ = cos θ / sin θ
        </div>

        <div class="formula-box">
            180° = π radians
        </div>

        <div class="formula-box">
            360° = 2π radians
        </div>

        <div class="formula-box">
            sin(−θ) = −sin θ
        </div>

        <div class="formula-box">
            cos(−θ) = cos θ
        </div>

        <div class="formula-box">
            tan(−θ) = −tan θ
        </div>
    `,

    questions: `
        <h3>❓ Important Questions</h3>

        <div class="question-box">
            <b>Q1.</b> Define the six trigonometric ratios.
        </div>

        <div class="question-box">
            <b>Q2.</b> Convert 180° into radians.
        </div>

        <div class="question-box">
            <b>Q3.</b> Write the three fundamental trigonometric
            identities.
        </div>

        <div class="question-box">
            <b>Q4.</b> What are reciprocal trigonometric ratios?
        </div>

        <div class="question-box">
            <b>Q5.</b> State the signs of trigonometric functions
            in all four quadrants.
        </div>

        <div class="question-box">
            <b>Q6.</b> What is the period of sin θ and cos θ?
        </div>

        <div class="question-box">
            <b>Q7.</b> Which trigonometric functions are even and
            which are odd?
        </div>

        <div class="question-box">
            <b>Q8.</b> Prove that 1 + tan²θ = sec²θ.
        </div>

        <div class="question-box">
            <b>Q9.</b> If sin θ = 3/5 and θ is acute, find cos θ.
        </div>

        <div class="question-box">
            <b>Q10.</b> Solve a basic trigonometric equation using
            its general solution.
        </div>
    `
},

"Complex Numbers": {

    notes: `
        <h3>🔢 Complex Numbers — Complete Notes</h3>

        <h4>1. Complex Number</h4>
        <p>
            A complex number is a number of the form
            z = a + ib, where a and b are real numbers and
            i = √−1.
        </p>

        <h4>2. Imaginary Unit</h4>
        <p>
            The imaginary unit is represented by i and satisfies:
            i² = −1.
        </p>

        <h4>3. Real and Imaginary Parts</h4>
        <p>
            In z = a + ib:
        </p>
        <ul>
            <li>a is called the <b>real part</b>.</li>
            <li>b is called the <b>imaginary part</b>.</li>
        </ul>

        <h4>4. Equality of Complex Numbers</h4>
        <p>
            Two complex numbers a + ib and c + id are equal if
            a = c and b = d.
        </p>

        <h4>5. Addition of Complex Numbers</h4>
        <p>
            To add complex numbers, add their real parts and
            imaginary parts separately.
        </p>

        <h4>6. Subtraction of Complex Numbers</h4>
        <p>
            To subtract complex numbers, subtract their real parts
            and imaginary parts separately.
        </p>

        <h4>7. Multiplication of Complex Numbers</h4>
        <p>
            Complex numbers are multiplied using the distributive
            property and the relation i² = −1.
        </p>

        <h4>8. Conjugate of a Complex Number</h4>
        <p>
            The conjugate of z = a + ib is a − ib.
        </p>

        <h4>9. Modulus of a Complex Number</h4>
        <p>
            The modulus of z = a + ib represents its distance from
            the origin in the complex plane.
        </p>

        <h4>10. Argand Plane</h4>
        <p>
            A complex number can be represented geometrically on the
            Argand plane. The real part is represented along the
            horizontal axis and the imaginary part along the
            vertical axis.
        </p>

        <h4>11. Polar Form</h4>
        <p>
            A complex number can also be represented in polar form
            using its modulus and argument.
        </p>

        <h4>12. Important Powers of i</h4>
        <p>
            The powers of i repeat in a cycle of four.
        </p>
    `,

    formulas: `
        <h3>🧮 Important Formulas</h3>

        <div class="formula-box">
            i = √−1
        </div>

        <div class="formula-box">
            i² = −1
        </div>

        <div class="formula-box">
            i³ = −i
        </div>

        <div class="formula-box">
            i⁴ = 1
        </div>

        <div class="formula-box">
            iⁿ repeats after every 4 powers
        </div>

        <div class="formula-box">
            z = a + ib
        </div>

        <div class="formula-box">
            Re(z) = a
        </div>

        <div class="formula-box">
            Im(z) = b
        </div>

        <div class="formula-box">
            Conjugate of z = a − ib
        </div>

        <div class="formula-box">
            |z| = √(a² + b²)
        </div>

        <div class="formula-box">
            z × z̄ = |z|²
        </div>

        <div class="formula-box">
            z = r(cos θ + i sin θ)
        </div>
    `,

    questions: `
        <h3>❓ Important Questions</h3>

        <div class="question-box">
            <b>Q1.</b> What is a complex number?
        </div>

        <div class="question-box">
            <b>Q2.</b> Define the imaginary unit i.
        </div>

        <div class="question-box">
            <b>Q3.</b> Find the real and imaginary parts of
            z = 5 + 3i.
        </div>

        <div class="question-box">
            <b>Q4.</b> Find the conjugate of 4 + 7i.
        </div>

        <div class="question-box">
            <b>Q5.</b> Find the modulus of 3 + 4i.
        </div>

        <div class="question-box">
            <b>Q6.</b> Simplify i², i³ and i⁴.
        </div>

        <div class="question-box">
            <b>Q7.</b> Add the complex numbers
            (3 + 2i) and (5 + 4i).
        </div>

        <div class="question-box">
            <b>Q8.</b> Subtract (2 + 3i) from (7 + 5i).
        </div>

        <div class="question-box">
            <b>Q9.</b> Explain the Argand plane.
        </div>

        <div class="question-box">
            <b>Q10.</b> Write the polar form of a complex number.
        </div>
    `
},

"Quadratic Equations": {

    notes: `
        <h3>📐 Quadratic Equations — Complete Notes</h3>

        <h4>1. Quadratic Equation</h4>
        <p>
            A quadratic equation in one variable is an equation of the form:
        </p>

        <p>
            ax² + bx + c = 0
        </p>

        <p>
            where a, b and c are real numbers and a ≠ 0.
        </p>

        <h4>2. Roots of a Quadratic Equation</h4>
        <p>
            The values of x which satisfy a quadratic equation are
            called its roots or solutions.
        </p>

        <h4>3. Quadratic Formula</h4>
        <p>
            The roots of ax² + bx + c = 0 can be found using the
            quadratic formula.
        </p>

        <h4>4. Discriminant</h4>
        <p>
            The discriminant helps us determine the nature of the
            roots of a quadratic equation.
        </p>

        <h4>5. Nature of Roots</h4>
        <ul>
            <li>
                <b>D &gt; 0:</b> Two distinct real roots
            </li>
            <li>
                <b>D = 0:</b> Two equal real roots
            </li>
            <li>
                <b>D &lt; 0:</b> No real roots
            </li>
        </ul>

        <h4>6. Sum and Product of Roots</h4>
        <p>
            If α and β are the roots of
            ax² + bx + c = 0, their sum and product can be obtained
            directly from the coefficients.
        </p>

        <h4>7. Formation of Quadratic Equation</h4>
        <p>
            A quadratic equation can be formed when its roots are
            known.
        </p>

        <h4>8. Graph of a Quadratic Equation</h4>
        <p>
            The graph of y = ax² + bx + c is a parabola.
            Its shape depends on the sign of a.
        </p>

        <h4>9. Important Point</h4>
        <p>
            A quadratic equation always has two roots when counted
            with multiplicity over the complex numbers.
        </p>
    `,

    formulas: `
        <h3>🧮 Important Formulas</h3>

        <div class="formula-box">
            ax² + bx + c = 0
        </div>

        <div class="formula-box">
            D = b² − 4ac
        </div>

        <div class="formula-box">
            x = (−b ± √(b² − 4ac)) / 2a
        </div>

        <div class="formula-box">
            α + β = −b/a
        </div>

        <div class="formula-box">
            αβ = c/a
        </div>

        <div class="formula-box">
            x² − (α + β)x + αβ = 0
        </div>

        <div class="formula-box">
            D &gt; 0 → Real and distinct roots
        </div>

        <div class="formula-box">
            D = 0 → Real and equal roots
        </div>

        <div class="formula-box">
            D &lt; 0 → Non-real roots
        </div>
    `,

    questions: `
        <h3>❓ Important Questions</h3>

        <div class="question-box">
            <b>Q1.</b> What is a quadratic equation?
        </div>

        <div class="question-box">
            <b>Q2.</b> Write the standard form of a quadratic equation.
        </div>

        <div class="question-box">
            <b>Q3.</b> What is the discriminant?
        </div>

        <div class="question-box">
            <b>Q4.</b> Explain the nature of roots using the
            discriminant.
        </div>

        <div class="question-box">
            <b>Q5.</b> Find the roots of x² − 5x + 6 = 0.
        </div>

        <div class="question-box">
            <b>Q6.</b> Find the sum and product of the roots of
            2x² + 7x + 3 = 0.
        </div>

        <div class="question-box">
            <b>Q7.</b> Form a quadratic equation whose roots are
            3 and 5.
        </div>

        <div class="question-box">
            <b>Q8.</b> Find the nature of roots of
            x² + 4x + 5 = 0.
        </div>

        <div class="question-box">
            <b>Q9.</b> What is the graph of a quadratic equation?
        </div>

        <div class="question-box">
            <b>Q10.</b> State the relation between the roots and
            coefficients of a quadratic equation.
        </div>
    `
},

"Sequences and Series": {

    notes: `
        <h3>🔢 Sequences and Series — Complete Notes</h3>

        <h4>1. Sequence</h4>
        <p>
            A sequence is an ordered list of numbers arranged according
            to a definite rule or pattern.
        </p>

        <h4>2. General Term</h4>
        <p>
            The nth term of a sequence is represented by
            a<sub>n</sub>. It gives the value of the term at position n.
        </p>

        <h4>3. Series</h4>
        <p>
            When the terms of a sequence are added together, the
            resulting expression is called a series.
        </p>

        <h4>4. Arithmetic Progression (AP)</h4>
        <p>
            An arithmetic progression is a sequence in which the
            difference between consecutive terms is constant.
            This constant is called the common difference (d).
        </p>

        <p>
            Example: 2, 5, 8, 11, ...
            Here, the common difference is 3.
        </p>

        <h4>5. Geometric Progression (GP)</h4>
        <p>
            A geometric progression is a sequence in which the ratio
            between consecutive terms is constant. This constant is
            called the common ratio (r).
        </p>

        <p>
            Example: 2, 6, 18, 54, ...
            Here, the common ratio is 3.
        </p>

        <h4>6. Arithmetic Mean</h4>
        <p>
            If a, A and b are in AP, then A is called the arithmetic
            mean of a and b.
        </p>

        <h4>7. Geometric Mean</h4>
        <p>
            If a, G and b are in GP, then G is called the geometric
            mean of a and b.
        </p>

        <h4>8. Special Series</h4>
        <p>
            Important standard series include the sum of natural
            numbers, squares of natural numbers and cubes of natural
            numbers.
        </p>

        <h4>9. Infinite Geometric Series</h4>
        <p>
            An infinite geometric series has infinitely many terms.
            When |r| &lt; 1, its sum can be obtained using a standard
            formula.
        </p>
    `,

    formulas: `
        <h3>🧮 Important Formulas</h3>

        <div class="formula-box">
            AP: a, a+d, a+2d, a+3d, ...
        </div>

        <div class="formula-box">
            nth term of AP:
            a<sub>n</sub> = a + (n−1)d
        </div>

        <div class="formula-box">
            Sum of first n terms of AP:
            S<sub>n</sub> = n/2 [2a + (n−1)d]
        </div>

        <div class="formula-box">
            S<sub>n</sub> = n/2 (a + l)
        </div>

        <div class="formula-box">
            GP: a, ar, ar², ar³, ...
        </div>

        <div class="formula-box">
            nth term of GP:
            a<sub>n</sub> = ar<sup>n−1</sup>
        </div>

        <div class="formula-box">
            Sum of first n terms of GP:
            S<sub>n</sub> = a(r<sup>n</sup> − 1)/(r − 1), r ≠ 1
        </div>

        <div class="formula-box">
            Alternative GP sum:
            S<sub>n</sub> = a(1 − r<sup>n</sup>)/(1 − r)
        </div>

        <div class="formula-box">
            Sum of infinite GP:
            S<sub>∞</sub> = a/(1 − r), |r| &lt; 1
        </div>

        <div class="formula-box">
            Arithmetic Mean:
            A = (a + b)/2
        </div>

        <div class="formula-box">
            Geometric Mean:
            G = √(ab)
        </div>

        <div class="formula-box">
            1 + 2 + 3 + ... + n = n(n+1)/2
        </div>

        <div class="formula-box">
            1² + 2² + 3² + ... + n²
            = n(n+1)(2n+1)/6
        </div>

        <div class="formula-box">
            1³ + 2³ + 3³ + ... + n³
            = [n(n+1)/2]²
        </div>
    `,

    questions: `
        <h3>❓ Important Questions</h3>

        <div class="question-box">
            <b>Q1.</b> What is a sequence?
        </div>

        <div class="question-box">
            <b>Q2.</b> What is a series?
        </div>

        <div class="question-box">
            <b>Q3.</b> Define arithmetic progression and common difference.
        </div>

        <div class="question-box">
            <b>Q4.</b> Find the 10th term of the AP:
            2, 5, 8, 11, ...
        </div>

        <div class="question-box">
            <b>Q5.</b> Find the sum of the first 20 terms of the AP:
            3, 7, 11, 15, ...
        </div>

        <div class="question-box">
            <b>Q6.</b> Define geometric progression and common ratio.
        </div>

        <div class="question-box">
            <b>Q7.</b> Find the 6th term of the GP:
            2, 6, 18, ...
        </div>

        <div class="question-box">
            <b>Q8.</b> Find the arithmetic mean of 8 and 18.
        </div>

        <div class="question-box">
            <b>Q9.</b> Find the geometric mean of 4 and 16.
        </div>

        <div class="question-box">
            <b>Q10.</b> Find the sum:
            1 + 2 + 3 + ... + 50.
        </div>
    `
},

"Straight Lines": {

    notes: `
        <h3>📏 Straight Lines — Complete Notes</h3>

        <h4>1. Coordinate Geometry</h4>
        <p>
            Coordinate geometry is used to study geometric figures
            using points and equations on a coordinate plane.
        </p>

        <h4>2. Distance Between Two Points</h4>
        <p>
            The distance between two points can be calculated using
            the distance formula.
        </p>

        <h4>3. Section Formula</h4>
        <p>
            The section formula is used to find the coordinates of a
            point which divides a line segment in a given ratio.
        </p>

        <h4>4. Slope of a Line</h4>
        <p>
            The slope of a line represents its inclination with the
            positive direction of the x-axis.
        </p>

        <h4>5. Equation of a Straight Line</h4>
        <p>
            A straight line can be represented by different forms
            depending on the information given.
        </p>

        <h4>6. Slope-Intercept Form</h4>
        <p>
            If m is the slope and c is the y-intercept, the equation
            of the line is y = mx + c.
        </p>

        <h4>7. Point-Slope Form</h4>
        <p>
            If a line has slope m and passes through (x₁, y₁), its
            equation can be written using the point-slope form.
        </p>

        <h4>8. Two-Point Form</h4>
        <p>
            The equation of a line passing through two given points
            can be obtained using the two-point form.
        </p>

        <h4>9. Parallel Lines</h4>
        <p>
            Two non-vertical lines are parallel when their slopes
            are equal.
        </p>

        <h4>10. Perpendicular Lines</h4>
        <p>
            Two non-vertical lines are perpendicular when the product
            of their slopes is −1.
        </p>

        <h4>11. Angle Between Two Lines</h4>
        <p>
            The angle between two lines can be determined from their
            slopes.
        </p>

        <h4>12. Distance of a Point from a Line</h4>
        <p>
            The perpendicular distance of a point from a straight
            line can be calculated using a standard formula.
        </p>
    `,

    formulas: `
        <h3>🧮 Important Formulas</h3>

        <div class="formula-box">
            Distance = √[(x₂ − x₁)² + (y₂ − y₁)²]
        </div>

        <div class="formula-box">
            Mid-point =
            ((x₁ + x₂)/2, (y₁ + y₂)/2)
        </div>

        <div class="formula-box">
            Slope:
            m = (y₂ − y₁)/(x₂ − x₁)
        </div>

        <div class="formula-box">
            Point-Slope Form:
            y − y₁ = m(x − x₁)
        </div>

        <div class="formula-box">
            Two-Point Form:
            (y − y₁)/(y₂ − y₁)
            = (x − x₁)/(x₂ − x₁)
        </div>

        <div class="formula-box">
            Slope-Intercept Form:
            y = mx + c
        </div>

        <div class="formula-box">
            Intercept Form:
            x/a + y/b = 1
        </div>

        <div class="formula-box">
            General Form:
            Ax + By + C = 0
        </div>

        <div class="formula-box">
            Parallel Lines:
            m₁ = m₂
        </div>

        <div class="formula-box">
            Perpendicular Lines:
            m₁m₂ = −1
        </div>

        <div class="formula-box">
            Angle between two lines:
            tan θ = |(m₂ − m₁)/(1 + m₁m₂)|
        </div>

        <div class="formula-box">
            Distance from point (x₁,y₁) to
            Ax + By + C = 0:
            d = |Ax₁ + By₁ + C|/√(A² + B²)
        </div>
    `,

    questions: `
        <h3>❓ Important Questions</h3>

        <div class="question-box">
            <b>Q1.</b> What is coordinate geometry?
        </div>

        <div class="question-box">
            <b>Q2.</b> Find the distance between (2, 3) and (5, 7).
        </div>

        <div class="question-box">
            <b>Q3.</b> Find the midpoint of the points
            (4, 6) and (8, 10).
        </div>

        <div class="question-box">
            <b>Q4.</b> Find the slope of the line passing through
            (2, 3) and (6, 11).
        </div>

        <div class="question-box">
            <b>Q5.</b> Find the equation of a line passing through
            (2, 3) with slope 4.
        </div>

        <div class="question-box">
            <b>Q6.</b> Find the equation of the line passing through
            (1, 2) and (3, 6).
        </div>

        <div class="question-box">
            <b>Q7.</b> Find the slope of a line parallel to
            3x + 2y − 5 = 0.
        </div>

        <div class="question-box">
            <b>Q8.</b> Find the condition for two lines to be
            perpendicular.
        </div>

        <div class="question-box">
            <b>Q9.</b> Find the angle between two lines having
            slopes 1 and −1.
        </div>

        <div class="question-box">
            <b>Q10.</b> Find the distance of the point (2, 3) from
            the line 3x + 4y − 12 = 0.
        </div>
    `
},

"Limits and Derivatives": {

    notes: `
        <h3>📈 Limits and Derivatives — Complete Notes</h3>

        <h4>1. Limit</h4>
        <p>
            The limit of a function describes the value that the
            function approaches as the variable approaches a
            particular value.
        </p>

        <h4>2. Left-Hand Limit</h4>
        <p>
            The left-hand limit is the value approached by the
            function when x approaches a number from values smaller
            than that number.
        </p>

        <h4>3. Right-Hand Limit</h4>
        <p>
            The right-hand limit is the value approached by the
            function when x approaches a number from values greater
            than that number.
        </p>

        <h4>4. Existence of Limit</h4>
        <p>
            A limit exists at x = a when the left-hand limit and
            right-hand limit are equal.
        </p>

        <h4>5. Standard Limits</h4>
        <p>
            Standard limits are useful for evaluating limits of
            trigonometric and algebraic functions.
        </p>

        <h4>6. Derivative</h4>
        <p>
            The derivative of a function represents the instantaneous
            rate of change of the function with respect to its
            variable.
        </p>

        <h4>7. Derivative from First Principles</h4>
        <p>
            The derivative can be defined using the limit of the
            difference quotient.
        </p>

        <h4>8. Geometrical Meaning</h4>
        <p>
            Geometrically, the derivative at a point represents the
            slope of the tangent to the curve at that point.
        </p>

        <h4>9. Basic Rules of Differentiation</h4>
        <p>
            Derivatives can be found using rules such as the constant
            rule, sum rule, product rule and quotient rule.
        </p>

        <h4>10. Derivatives of Standard Functions</h4>
        <p>
            There are standard derivative formulas for algebraic,
            trigonometric and exponential functions.
        </p>
    `,

    formulas: `
        <h3>🧮 Important Formulas</h3>

        <div class="formula-box">
            lim(x→a) f(x) = L
        </div>

        <div class="formula-box">
            lim(x→0) (sin x)/x = 1
        </div>

        <div class="formula-box">
            lim(x→0) (tan x)/x = 1
        </div>

        <div class="formula-box">
            lim(x→0) (1 − cos x)/x² = 1/2
        </div>

        <div class="formula-box">
            d/dx (c) = 0
        </div>

        <div class="formula-box">
            d/dx (xⁿ) = nxⁿ⁻¹
        </div>

        <div class="formula-box">
            d/dx (sin x) = cos x
        </div>

        <div class="formula-box">
            d/dx (cos x) = −sin x
        </div>

        <div class="formula-box">
            d/dx (tan x) = sec²x
        </div>

        <div class="formula-box">
            d/dx (cot x) = −cosec²x
        </div>

        <div class="formula-box">
            d/dx (sec x) = sec x tan x
        </div>

        <div class="formula-box">
            d/dx (cosec x) = −cosec x cot x
        </div>

        <div class="formula-box">
            (f + g)' = f' + g'
        </div>

        <div class="formula-box">
            (fg)' = f'g + fg'
        </div>

        <div class="formula-box">
            (f/g)' = (gf' − fg')/g²
        </div>

        <div class="formula-box">
            f'(x) =
            lim(h→0) [f(x+h) − f(x)]/h
        </div>
    `,

    questions: `
        <h3>❓ Important Questions</h3>

        <div class="question-box">
            <b>Q1.</b> What is meant by the limit of a function?
        </div>

        <div class="question-box">
            <b>Q2.</b> Define left-hand and right-hand limits.
        </div>

        <div class="question-box">
            <b>Q3.</b> State the condition for the existence of a limit.
        </div>

        <div class="question-box">
            <b>Q4.</b> Evaluate:
            lim(x→0) (sin x)/x.
        </div>

        <div class="question-box">
            <b>Q5.</b> What is a derivative?
        </div>

        <div class="question-box">
            <b>Q6.</b> Find the derivative of x⁵.
        </div>

        <div class="question-box">
            <b>Q7.</b> Find the derivative of sin x.
        </div>

        <div class="question-box">
            <b>Q8.</b> Find the derivative of x² + 3x + 5.
        </div>

        <div class="question-box">
            <b>Q9.</b> State the product rule of differentiation.
        </div>

        <div class="question-box">
            <b>Q10.</b> Explain the geometrical meaning of derivative.
        </div>
    `
},

"The Living World": {

    notes: `
        <h3>🌱 The Living World — Complete Notes</h3>

        <h4>1. What is Living?</h4>
        <p>
            Living organisms show several characteristics such as
            growth, reproduction, metabolism, cellular organisation
            and response to stimuli.
        </p>

        <h4>2. Growth</h4>
        <p>
            Growth is an increase in the size, mass or number of cells
            of an organism. In plants, growth continues throughout
            their life due to the presence of growing regions.
        </p>

        <h4>3. Reproduction</h4>
        <p>
            Reproduction is the biological process by which organisms
            produce new individuals of their own kind.
        </p>

        <p>
            Reproduction may be sexual or asexual.
        </p>

        <h4>4. Metabolism</h4>
        <p>
            Metabolism includes all the chemical reactions occurring
            inside the cells of a living organism. It includes both
            constructive and breakdown reactions.
        </p>

        <h4>5. Consciousness</h4>
        <p>
            Living organisms can sense and respond to changes in their
            surroundings. This ability to sense the environment and
            respond to stimuli is an important characteristic of life.
        </p>

        <h4>6. Biodiversity</h4>
        <p>
            Biodiversity refers to the variety of living organisms
            present on Earth. Scientists have identified and described
            a very large number of organisms.
        </p>

        <h4>7. Taxonomy</h4>
        <p>
            Taxonomy is the science of identification, nomenclature
            and classification of organisms.
        </p>

        <h4>8. Systematics</h4>
        <p>
            Systematics deals with the diversity of organisms and their
            evolutionary relationships.
        </p>

        <h4>9. Binomial Nomenclature</h4>
        <p>
            Binomial nomenclature is the scientific system of naming
            organisms using two names: the genus name and the specific
            epithet.
        </p>

        <h4>10. Rules of Scientific Naming</h4>
        <p>
            The scientific name is generally written in italics.
            When handwritten, the two parts are underlined separately.
            The genus name begins with a capital letter, while the
            specific epithet begins with a small letter.
        </p>

        <h4>11. Taxonomic Categories</h4>
        <p>
            The major taxonomic categories are:
        </p>

        <p>
            Kingdom → Phylum/Division → Class → Order → Family →
            Genus → Species
        </p>

        <h4>12. Species</h4>
        <p>
            Species is considered the basic unit of classification.
            Organisms belonging to the same species generally share
            fundamental similarities and can reproduce among themselves
            under suitable conditions.
        </p>

        <h4>13. Taxonomic Aids</h4>
        <p>
            Taxonomic aids are tools and collections that help in the
            identification and study of organisms.
        </p>

        <ul>
            <li>Herbarium</li>
            <li>Botanical Gardens</li>
            <li>Museums</li>
            <li>Zoological Parks</li>
            <li>Keys</li>
        </ul>
    `,

    formulas: `
        <h3>🧠 Important Points</h3>

        <div class="formula-box">
            Taxonomy = Identification + Nomenclature + Classification
        </div>

        <div class="formula-box">
            Basic taxonomic unit = Species
        </div>

        <div class="formula-box">
            Scientific name = Genus + Specific epithet
        </div>

        <div class="formula-box">
            Taxonomic hierarchy:
            Kingdom → Phylum/Division → Class → Order →
            Family → Genus → Species
        </div>

        <div class="formula-box">
            Binomial nomenclature uses two parts in a scientific name.
        </div>
    `,

    questions: `
        <h3>❓ Important Questions</h3>

        <div class="question-box">
            <b>Q1.</b> What are the main characteristics of living organisms?
        </div>

        <div class="question-box">
            <b>Q2.</b> What is growth?
        </div>

        <div class="question-box">
            <b>Q3.</b> What is metabolism?
        </div>

        <div class="question-box">
            <b>Q4.</b> What is biodiversity?
        </div>

        <div class="question-box">
            <b>Q5.</b> Define taxonomy.
        </div>

        <div class="question-box">
            <b>Q6.</b> What is binomial nomenclature?
        </div>

        <div class="question-box">
            <b>Q7.</b> Write the correct order of major taxonomic categories.
        </div>

        <div class="question-box">
            <b>Q8.</b> What is the basic unit of classification?
        </div>

        <div class="question-box">
            <b>Q9.</b> What are taxonomic aids? Give examples.
        </div>

        <div class="question-box">
            <b>Q10.</b> Differentiate between taxonomy and systematics.
        </div>
    `
},

"Biological Classification": {

    notes: `
        <h3>🧬 Biological Classification — Complete Notes</h3>

        <h4>1. Classification</h4>
        <p>
            Biological classification is the process of grouping
            organisms based on their similarities and differences.
            It makes the study of the enormous diversity of organisms
            easier and more systematic.
        </p>

        <h4>2. Five Kingdom Classification</h4>
        <p>
            R.H. Whittaker proposed the five kingdom classification
            in 1969. The five kingdoms are:
        </p>

        <ul>
            <li>Monera</li>
            <li>Protista</li>
            <li>Fungi</li>
            <li>Plantae</li>
            <li>Animalia</li>
        </ul>

        <h4>3. Kingdom Monera</h4>
        <p>
            Monerans are prokaryotic organisms. They generally do not
            have a true nucleus or membrane-bound cell organelles.
        </p>

        <p>
            Examples include bacteria, cyanobacteria and
            mycoplasma.
        </p>

        <h4>4. Archaebacteria</h4>
        <p>
            Archaebacteria are special bacteria that can live in
            extreme environments such as very salty areas, hot springs
            and marshy areas.
        </p>

        <h4>5. Eubacteria</h4>
        <p>
            Eubacteria are commonly known as true bacteria. Their
            cell wall generally contains peptidoglycan.
        </p>

        <h4>6. Kingdom Protista</h4>
        <p>
            Protists are mostly unicellular eukaryotic organisms.
            They generally live in aquatic environments.
        </p>

        <p>
            Examples include Amoeba, Paramecium, Euglena and
            diatoms.
        </p>

        <h4>7. Kingdom Fungi</h4>
        <p>
            Fungi are eukaryotic organisms that are generally
            heterotrophic. Their cell wall is mainly made of chitin.
        </p>

        <p>
            Examples include yeast, moulds and mushrooms.
        </p>

        <h4>8. Lichens</h4>
        <p>
            Lichens are a symbiotic association between an alga or
            cyanobacterium and a fungus. The photosynthetic partner
            provides food, while the fungus provides shelter and
            absorbs water and minerals.
        </p>

        <h4>9. Viruses</h4>
        <p>
            Viruses are acellular entities consisting mainly of
            genetic material surrounded by a protein coat. They
            multiply only inside suitable living host cells.
        </p>

        <h4>10. Viroids</h4>
        <p>
            Viroids are smaller infectious agents made up of a short
            strand of RNA without a protein coat.
        </p>

        <h4>11. Important Difference</h4>
        <p>
            Prokaryotic cells lack a true nucleus, whereas eukaryotic
            cells possess a membrane-bound nucleus.
        </p>
    `,

    formulas: `
        <h3>🧠 Important Points</h3>

        <div class="formula-box">
            Five Kingdoms:
            Monera → Protista → Fungi → Plantae → Animalia
        </div>

        <div class="formula-box">
            Monera = Prokaryotic organisms
        </div>

        <div class="formula-box">
            Protista = Mostly unicellular eukaryotes
        </div>

        <div class="formula-box">
            Fungi = Eukaryotic + Heterotrophic
        </div>

        <div class="formula-box">
            Fungal cell wall = Mainly Chitin
        </div>

        <div class="formula-box">
            Lichen = Alga/Cyanobacterium + Fungus
        </div>

        <div class="formula-box">
            Virus = Genetic material + Protein coat
        </div>

        <div class="formula-box">
            Viroid = Infectious RNA without protein coat
        </div>
    `,

    questions: `
        <h3>❓ Important Questions</h3>

        <div class="question-box">
            <b>Q1.</b> What is biological classification?
        </div>

        <div class="question-box">
            <b>Q2.</b> Who proposed the five kingdom classification?
        </div>

        <div class="question-box">
            <b>Q3.</b> Name the five kingdoms.
        </div>

        <div class="question-box">
            <b>Q4.</b> Write the main characteristics of Kingdom Monera.
        </div>

        <div class="question-box">
            <b>Q5.</b> What are archaebacteria?
        </div>

        <div class="question-box">
            <b>Q6.</b> What is Kingdom Protista?
        </div>

        <div class="question-box">
            <b>Q7.</b> Write the important characteristics of fungi.
        </div>

        <div class="question-box">
            <b>Q8.</b> What are lichens?
        </div>

        <div class="question-box">
            <b>Q9.</b> What are viruses?
        </div>

        <div class="question-box">
            <b>Q10.</b> Differentiate between prokaryotic and
            eukaryotic cells.
        </div>
    `
},

"Plant Kingdom": {

    notes: `
        <h3>🌱 Plant Kingdom — Complete Notes</h3>

        <h4>1. Introduction</h4>
        <p>
            Plants are multicellular, eukaryotic organisms. Most plants
            are autotrophic and prepare their food by photosynthesis.
            Plant groups differ in their body structure, vascular tissues,
            reproduction and life cycles.
        </p>

        <h4>2. Major Plant Groups</h4>
        <p>
            The major groups discussed in the plant kingdom are:
        </p>

        <ul>
            <li>Algae</li>
            <li>Bryophytes</li>
            <li>Pteridophytes</li>
            <li>Gymnosperms</li>
            <li>Angiosperms</li>
        </ul>

        <h4>3. Algae</h4>
        <p>
            Algae are mainly aquatic, photosynthetic organisms. Their
            plant body is generally simple and is called a thallus.
        </p>

        <p>
            Examples include Chlamydomonas, Volvox, Ulothrix,
            Spirogyra and Laminaria.
        </p>

        <h4>4. Bryophytes</h4>
        <p>
            Bryophytes are commonly called the amphibians of the plant
            kingdom because they generally require water for sexual
            reproduction.
        </p>

        <p>
            They do not possess well-developed vascular tissues.
            Examples include Marchantia and Funaria.
        </p>

        <h4>5. Pteridophytes</h4>
        <p>
            Pteridophytes are vascular plants having well-developed
            xylem and phloem. They reproduce by spores and do not
            produce seeds.
        </p>

        <p>
            Examples include Ferns, Selaginella and Equisetum.
        </p>

        <h4>6. Gymnosperms</h4>
        <p>
            Gymnosperms are seed-producing plants in which the seeds
            are not enclosed within fruits. They are commonly known
            as plants with naked seeds.
        </p>

        <p>
            Examples include Cycas and Pinus.
        </p>

        <h4>7. Angiosperms</h4>
        <p>
            Angiosperms are flowering plants. Their seeds are enclosed
            within fruits. They are divided into monocotyledons and
            dicotyledons.
        </p>

        <h4>8. Monocots and Dicots</h4>
        <p>
            Monocotyledons generally have one cotyledon, parallel
            venation and fibrous roots.
        </p>

        <p>
            Dicotyledons generally have two cotyledons, reticulate
            venation and a tap root system.
        </p>

        <h4>9. Plant Life Cycle</h4>
        <p>
            Plants show alternation of generations between haploid
            gametophyte and diploid sporophyte phases.
        </p>

        <h4>10. Important Terms</h4>
        <ul>
            <li><b>Thallus:</b> A simple plant body not differentiated into true roots, stems and leaves.</li>
            <li><b>Vascular Tissue:</b> Conducting tissues such as xylem and phloem.</li>
            <li><b>Spore:</b> A reproductive structure capable of developing into a new organism.</li>
            <li><b>Gametophyte:</b> Haploid generation that produces gametes.</li>
            <li><b>Sporophyte:</b> Diploid generation that produces spores.</li>
        </ul>
    `,

    formulas: `
        <h3>🧠 Important Points</h3>

        <div class="formula-box">
            Algae → Mostly aquatic + photosynthetic
        </div>

        <div class="formula-box">
            Bryophytes → Amphibians of plant kingdom
        </div>

        <div class="formula-box">
            Pteridophytes → First vascular land plants
        </div>

        <div class="formula-box">
            Gymnosperms → Naked seeds
        </div>

        <div class="formula-box">
            Angiosperms → Seeds enclosed within fruits
        </div>

        <div class="formula-box">
            Monocot → One cotyledon
        </div>

        <div class="formula-box">
            Dicot → Two cotyledons
        </div>

        <div class="formula-box">
            Gametophyte → Haploid (n)
        </div>

        <div class="formula-box">
            Sporophyte → Diploid (2n)
        </div>

        <div class="formula-box">
            Plant life cycle → Alternation of generations
        </div>
    `,

    questions: `
        <h3>❓ Important Questions</h3>

        <div class="question-box">
            <b>Q1.</b> Name the major groups of the plant kingdom.
        </div>

        <div class="question-box">
            <b>Q2.</b> What are algae? Give two examples.
        </div>

        <div class="question-box">
            <b>Q3.</b> Why are bryophytes called the amphibians of the
            plant kingdom?
        </div>

        <div class="question-box">
            <b>Q4.</b> What are pteridophytes?
        </div>

        <div class="question-box">
            <b>Q5.</b> What are gymnosperms? Give examples.
        </div>

        <div class="question-box">
            <b>Q6.</b> What are angiosperms?
        </div>

        <div class="question-box">
            <b>Q7.</b> Differentiate between monocots and dicots.
        </div>

        <div class="question-box">
            <b>Q8.</b> What is alternation of generations?
        </div>

        <div class="question-box">
            <b>Q9.</b> Differentiate between gametophyte and sporophyte.
        </div>

        <div class="question-box">
            <b>Q10.</b> Differentiate between gymnosperms and angiosperms.
        </div>
    `
},

"Animal Kingdom": {

    notes: `
        <h3>🐾 Animal Kingdom — Complete Notes</h3>

        <h4>1. Introduction</h4>
        <p>
            Animals are multicellular, eukaryotic and heterotrophic
            organisms. Their cells do not have a cell wall and they
            generally obtain food by ingesting other organisms or
            organic matter.
        </p>

        <h4>2. Basis of Classification</h4>
        <p>
            Animals are classified on the basis of important
            characteristics such as level of organisation, symmetry,
            germ layers, body cavity, segmentation and presence or
            absence of a notochord.
        </p>

        <h4>3. Levels of Organisation</h4>
        <ul>
            <li>Cellular level</li>
            <li>Tissue level</li>
            <li>Organ level</li>
            <li>Organ-system level</li>
        </ul>

        <h4>4. Symmetry</h4>
        <p>
            <b>Asymmetry:</b> The body cannot be divided into two
            similar halves through any plane.
        </p>

        <p>
            <b>Radial Symmetry:</b> The body can be divided into
            similar halves through several planes passing through
            the central axis.
        </p>

        <p>
            <b>Bilateral Symmetry:</b> The body can be divided into
            two equal and similar halves through only one plane.
        </p>

        <h4>5. Germ Layers</h4>
        <p>
            Animals may be diploblastic or triploblastic depending
            upon the number of germ layers present during development.
        </p>

        <ul>
            <li><b>Diploblastic:</b> Two germ layers.</li>
            <li><b>Triploblastic:</b> Three germ layers.</li>
        </ul>

        <h4>6. Body Cavity</h4>
        <p>
            The body cavity is called a coelom when it is completely
            lined by mesoderm.
        </p>

        <ul>
            <li>Acoelomate</li>
            <li>Pseudocoelomate</li>
            <li>Coelomate</li>
        </ul>

        <h4>7. Major Animal Phyla</h4>

        <p>
            <b>Porifera:</b> Mostly aquatic animals with pores and a
            canal system. Example: Sycon.
        </p>

        <p>
            <b>Cnidaria:</b> Aquatic animals having cnidoblasts.
            Examples: Hydra and jellyfish.
        </p>

        <p>
            <b>Platyhelminthes:</b> Flat-bodied, bilaterally
            symmetrical and generally acoelomate animals.
            Example: Taenia.
        </p>

        <p>
            <b>Aschelminthes:</b> Animals with a pseudocoelom and
            complete digestive tract. Example: Ascaris.
        </p>

        <p>
            <b>Annelida:</b> Segmented worms with a true coelom.
            Example: Earthworm.
        </p>

        <p>
            <b>Arthropoda:</b> Animals with jointed appendages and
            an exoskeleton. Example: Cockroach.
        </p>

        <p>
            <b>Mollusca:</b> Soft-bodied animals, often protected by
            a shell. Example: Snail.
        </p>

        <p>
            <b>Echinodermata:</b> Exclusively marine animals with
            spiny skin and a water vascular system.
            Example: Starfish.
        </p>

        <p>
            <b>Hemichordata:</b> Marine animals with a body divided
            into proboscis, collar and trunk.
        </p>

        <p>
            <b>Chordata:</b> Animals characterised by the presence
            of a notochord, dorsal hollow nerve cord, pharyngeal
            slits and post-anal tail at some stage of their life.
        </p>

        <h4>8. Chordata</h4>
        <p>
            Chordates are broadly divided into Urochordata,
            Cephalochordata and Vertebrata.
        </p>

        <h4>9. Vertebrates</h4>
        <p>
            Vertebrates possess a vertebral column and a well-developed
            nervous system. Major groups include fishes, amphibians,
            reptiles, birds and mammals.
        </p>
    `,

    formulas: `
        <h3>🧠 Important Points</h3>

        <div class="formula-box">
            Porifera → Canal system + Pores
        </div>

        <div class="formula-box">
            Cnidaria → Cnidoblasts
        </div>

        <div class="formula-box">
            Platyhelminthes → Flatworms + Acoelomate
        </div>

        <div class="formula-box">
            Aschelminthes → Pseudocoelomate
        </div>

        <div class="formula-box">
            Annelida → Segmentation + True coelom
        </div>

        <div class="formula-box">
            Arthropoda → Jointed appendages + Exoskeleton
        </div>

        <div class="formula-box">
            Mollusca → Soft body + Usually shell
        </div>

        <div class="formula-box">
            Echinodermata → Spiny skin + Water vascular system
        </div>

        <div class="formula-box">
            Chordata → Notochord + Dorsal hollow nerve cord
        </div>

        <div class="formula-box">
            Diploblastic → Two germ layers
        </div>

        <div class="formula-box">
            Triploblastic → Three germ layers
        </div>

        <div class="formula-box">
            Bilateral symmetry → Two equal halves through one plane
        </div>
    `,

    questions: `
        <h3>❓ Important Questions</h3>

        <div class="question-box">
            <b>Q1.</b> What are the main bases of animal classification?
        </div>

        <div class="question-box">
            <b>Q2.</b> Explain the different levels of organisation.
        </div>

        <div class="question-box">
            <b>Q3.</b> What is radial symmetry?
        </div>

        <div class="question-box">
            <b>Q4.</b> Differentiate between diploblastic and
            triploblastic animals.
        </div>

        <div class="question-box">
            <b>Q5.</b> What is a coelom?
        </div>

        <div class="question-box">
            <b>Q6.</b> Write the main characteristics of Arthropoda.
        </div>

        <div class="question-box">
            <b>Q7.</b> What are the important features of Mollusca?
        </div>

        <div class="question-box">
            <b>Q8.</b> What is special about Echinodermata?
        </div>

        <div class="question-box">
            <b>Q9.</b> What are the characteristic features of Chordata?
        </div>

        <div class="question-box">
            <b>Q10.</b> Differentiate between radial and bilateral
            symmetry.
        </div>
    `
},

"Cell: The Unit of Life": {

    notes: `
        <h3>🧫 Cell: The Unit of Life — Complete Notes</h3>

        <h4>1. Cell</h4>
        <p>
            The cell is the basic structural and functional unit of
            life. All living organisms are made up of cells, except
            certain acellular forms.
        </p>

        <h4>2. Cell Theory</h4>
        <p>
            Cell theory states that all living organisms are composed
            of cells and that the cell is the basic unit of life.
            New cells arise from pre-existing cells.
        </p>

        <h4>3. Types of Cells</h4>
        <p>
            Cells are broadly classified into two types:
            prokaryotic cells and eukaryotic cells.
        </p>

        <h4>4. Prokaryotic Cell</h4>
        <p>
            Prokaryotic cells are generally smaller and do not have
            a membrane-bound nucleus. Their genetic material lies in
            a region called the nucleoid.
        </p>

        <p>
            Example: Bacteria.
        </p>

        <h4>5. Eukaryotic Cell</h4>
        <p>
            Eukaryotic cells have a well-defined nucleus surrounded
            by a nuclear membrane and contain membrane-bound
            organelles.
        </p>

        <h4>6. Plasma Membrane</h4>
        <p>
            The plasma membrane forms the boundary of the cell. It is
            selectively permeable and regulates the movement of
            substances into and out of the cell.
        </p>

        <h4>7. Cell Wall</h4>
        <p>
            The cell wall is present in plant cells. It provides
            shape, strength and protection to the cell.
        </p>

        <h4>8. Nucleus</h4>
        <p>
            The nucleus contains genetic material and controls many
            activities of the cell. It is surrounded by a nuclear
            envelope.
        </p>

        <h4>9. Mitochondria</h4>
        <p>
            Mitochondria are membrane-bound organelles involved in
            cellular respiration and energy production. They contain
            their own genetic material.
        </p>

        <h4>10. Endoplasmic Reticulum</h4>
        <p>
            The endoplasmic reticulum is a network of membranes.
            Rough ER has ribosomes and is mainly associated with
            protein synthesis, while smooth ER is involved in lipid
            synthesis and other functions.
        </p>

        <h4>11. Golgi Apparatus</h4>
        <p>
            The Golgi apparatus modifies, sorts and packages proteins
            and other materials for transport.
        </p>

        <h4>12. Lysosomes</h4>
        <p>
            Lysosomes contain hydrolytic enzymes and help in the
            breakdown of various cellular materials.
        </p>

        <h4>13. Ribosomes</h4>
        <p>
            Ribosomes are the sites of protein synthesis. They are
            found in both prokaryotic and eukaryotic cells.
        </p>

        <h4>14. Plastids</h4>
        <p>
            Plastids are found mainly in plant cells. Chloroplasts
            contain chlorophyll and are involved in photosynthesis.
        </p>

        <h4>15. Vacuoles</h4>
        <p>
            Vacuoles are membrane-bound structures that store water,
            nutrients and waste materials. Plant cells usually have
            a large central vacuole.
        </p>

        <h4>16. Cytoskeleton</h4>
        <p>
            The cytoskeleton is a network of protein filaments that
            helps maintain cell shape and supports movement of
            cellular components.
        </p>

        <h4>17. Cilia and Flagella</h4>
        <p>
            Cilia and flagella are structures associated with
            movement in certain cells.
        </p>

        <h4>18. Centrosome</h4>
        <p>
            The centrosome is generally found in animal cells and
            plays an important role in cell division.
        </p>
    `,

    formulas: `
        <h3>🧠 Important Points</h3>

        <div class="formula-box">
            Cell = Basic structural and functional unit of life
        </div>

        <div class="formula-box">
            Prokaryotic cell → No membrane-bound nucleus
        </div>

        <div class="formula-box">
            Eukaryotic cell → Membrane-bound nucleus
        </div>

        <div class="formula-box">
            Ribosome → Protein synthesis
        </div>

        <div class="formula-box">
            Mitochondria → Cellular respiration + Energy production
        </div>

        <div class="formula-box">
            Chloroplast → Photosynthesis
        </div>

        <div class="formula-box">
            Golgi apparatus → Modification + Packaging
        </div>

        <div class="formula-box">
            Lysosome → Intracellular digestion
        </div>

        <div class="formula-box">
            Rough ER → Ribosomes + Protein synthesis
        </div>

        <div class="formula-box">
            Smooth ER → Lipid synthesis
        </div>

        <div class="formula-box">
            Nucleus → Genetic material + Cell control
        </div>

        <div class="formula-box">
            Plasma membrane → Selectively permeable
        </div>
    `,

    questions: `
        <h3>❓ Important Questions</h3>

        <div class="question-box">
            <b>Q1.</b> What is a cell?
        </div>

        <div class="question-box">
            <b>Q2.</b> State the main points of cell theory.
        </div>

        <div class="question-box">
            <b>Q3.</b> Differentiate between prokaryotic and
            eukaryotic cells.
        </div>

        <div class="question-box">
            <b>Q4.</b> What is the function of the plasma membrane?
        </div>

        <div class="question-box">
            <b>Q5.</b> What is the function of the nucleus?
        </div>

        <div class="question-box">
            <b>Q6.</b> Write the main functions of mitochondria.
        </div>

        <div class="question-box">
            <b>Q7.</b> Differentiate between rough ER and smooth ER.
        </div>

        <div class="question-box">
            <b>Q8.</b> What is the function of the Golgi apparatus?
        </div>

        <div class="question-box">
            <b>Q9.</b> What are ribosomes and where are they found?
        </div>

        <div class="question-box">
            <b>Q10.</b> Write the functions of chloroplasts and vacuoles.
        </div>
    `
},

"Biomolecules": {

    notes: `
        <h3>🧪 Biomolecules — Complete Notes</h3>

        <h4>1. What are Biomolecules?</h4>
        <p>
            Biomolecules are organic compounds produced by living
            organisms. They are essential for the structure, growth
            and functioning of cells.
        </p>

        <h4>2. Major Biomolecules</h4>
        <p>
            The major classes of biomolecules are:
        </p>

        <ul>
            <li>Carbohydrates</li>
            <li>Proteins</li>
            <li>Lipids</li>
            <li>Nucleic acids</li>
        </ul>

        <h4>3. Carbohydrates</h4>
        <p>
            Carbohydrates are organic compounds mainly composed of
            carbon, hydrogen and oxygen. They are an important source
            of energy.
        </p>

        <p>
            They include monosaccharides, oligosaccharides and
            polysaccharides.
        </p>

        <h4>4. Monosaccharides</h4>
        <p>
            Monosaccharides are the simplest carbohydrates and cannot
            be hydrolysed into smaller carbohydrate molecules.
        </p>

        <p>
            Examples: Glucose, fructose and ribose.
        </p>

        <h4>5. Polysaccharides</h4>
        <p>
            Polysaccharides are complex carbohydrates made up of many
            monosaccharide units.
        </p>

        <p>
            Examples include starch, glycogen, cellulose and chitin.
        </p>

        <h4>6. Proteins</h4>
        <p>
            Proteins are polymers of amino acids. They perform many
            important functions such as structural support, transport,
            catalysis and regulation.
        </p>

        <h4>7. Amino Acids</h4>
        <p>
            Amino acids contain an amino group and a carboxyl group.
            They are joined together by peptide bonds to form
            polypeptide chains.
        </p>

        <h4>8. Peptide Bond</h4>
        <p>
            A peptide bond is formed between the carboxyl group of
            one amino acid and the amino group of another amino acid,
            with the removal of a molecule of water.
        </p>

        <h4>9. Lipids</h4>
        <p>
            Lipids are water-insoluble organic molecules. They include
            fats, oils, phospholipids and steroids.
        </p>

        <p>
            Lipids are important components of cell membranes and also
            serve as energy reserves.
        </p>

        <h4>10. Nucleic Acids</h4>
        <p>
            Nucleic acids are polymers of nucleotides. The two major
            types are DNA and RNA.
        </p>

        <h4>11. Nucleotides</h4>
        <p>
            A nucleotide consists of a nitrogenous base, a pentose
            sugar and a phosphate group.
        </p>

        <h4>12. DNA</h4>
        <p>
            DNA stores and transmits genetic information. It contains
            deoxyribose sugar and the nitrogenous bases adenine,
            guanine, cytosine and thymine.
        </p>

        <h4>13. RNA</h4>
        <p>
            RNA contains ribose sugar and generally uses uracil
            instead of thymine. It plays important roles in gene
            expression and protein synthesis.
        </p>

        <h4>14. Enzymes</h4>
        <p>
            Enzymes are biological catalysts that increase the rate
            of biochemical reactions without being consumed in the
            reaction.
        </p>

        <h4>15. Factors Affecting Enzyme Activity</h4>
        <p>
            Enzyme activity can be affected by temperature, pH,
            substrate concentration and other environmental factors.
        </p>
    `,

    formulas: `
        <h3>🧠 Important Points</h3>

        <div class="formula-box">
            Biomolecules → Carbohydrates + Proteins + Lipids + Nucleic Acids
        </div>

        <div class="formula-box">
            Monosaccharide → Simplest carbohydrate
        </div>

        <div class="formula-box">
            Polysaccharide → Many monosaccharide units
        </div>

        <div class="formula-box">
            Protein → Polymer of amino acids
        </div>

        <div class="formula-box">
            Amino acids → Joined by peptide bonds
        </div>

        <div class="formula-box">
            Lipids → Important energy reserves + Cell membrane components
        </div>

        <div class="formula-box">
            Nucleotide = Nitrogenous base + Sugar + Phosphate
        </div>

        <div class="formula-box">
            DNA → Deoxyribose sugar + A, G, C, T
        </div>

        <div class="formula-box">
            RNA → Ribose sugar + A, G, C, U
        </div>

        <div class="formula-box">
            Enzymes → Biological catalysts
        </div>

        <div class="formula-box">
            Peptide bond → Bond between two amino acids
        </div>
    `,

    questions: `
        <h3>❓ Important Questions</h3>

        <div class="question-box">
            <b>Q1.</b> What are biomolecules?
        </div>

        <div class="question-box">
            <b>Q2.</b> Name the major classes of biomolecules.
        </div>

        <div class="question-box">
            <b>Q3.</b> What are monosaccharides? Give examples.
        </div>

        <div class="question-box">
            <b>Q4.</b> What are polysaccharides? Give examples.
        </div>

        <div class="question-box">
            <b>Q5.</b> What are proteins made up of?
        </div>

        <div class="question-box">
            <b>Q6.</b> What is a peptide bond?
        </div>

        <div class="question-box">
            <b>Q7.</b> What are lipids? Write their functions.
        </div>

        <div class="question-box">
            <b>Q8.</b> What is a nucleotide? Name its components.
        </div>

        <div class="question-box">
            <b>Q9.</b> Differentiate between DNA and RNA.
        </div>

        <div class="question-box">
            <b>Q10.</b> What are enzymes? Why are they called
            biological catalysts?
        </div>
    `
},

"bio-chapter-7": {
    title: "Structural Organisation in Animals",
    subject: "Biology",
    chapter: "Structural Organisation in Animals",

    content: `
        <h2>🧬 Structural Organisation in Animals</h2>

        <h3>1. Introduction</h3>
        <p>
            Animals are multicellular organisms. Their body is organised at
            different levels such as cells, tissues, organs and organ systems.
        </p>

        <h3>2. Animal Tissues</h3>
        <p>
            A group of cells having a common origin and performing a specific
            function is called a tissue.
        </p>

        <p>There are four basic types of animal tissues:</p>

        <p>
            • Epithelial tissue<br>
            • Connective tissue<br>
            • Muscular tissue<br>
            • Neural tissue
        </p>

        <h3>3. Epithelial Tissue</h3>
        <p>
            Epithelial tissue forms the outer covering of the body and also
            lines the internal organs and cavities.
        </p>

        <p><b>Functions:</b></p>
        <p>
            • Protection<br>
            • Absorption<br>
            • Secretion<br>
            • Excretion
        </p>

        <h3>4. Types of Epithelial Tissue</h3>

        <p>
            <b>Simple Squamous Epithelium:</b>
            Made up of a single layer of thin cells. It is found in places
            where diffusion or filtration occurs.
        </p>

        <p>
            <b>Simple Cuboidal Epithelium:</b>
            Consists of cube-shaped cells and is commonly involved in
            secretion and absorption.
        </p>

        <p>
            <b>Simple Columnar Epithelium:</b>
            Consists of elongated cells and is mainly involved in absorption
            and secretion.
        </p>

        <p>
            <b>Ciliated Epithelium:</b>
            Contains cilia that help in movement of materials.
        </p>

        <h3>5. Connective Tissue</h3>
        <p>
            Connective tissue connects, supports and binds different parts
            of the body.
        </p>

        <p><b>Examples:</b></p>
        <p>
            • Areolar tissue<br>
            • Adipose tissue<br>
            • Tendon<br>
            • Ligament<br>
            • Cartilage<br>
            • Bone<br>
            • Blood
        </p>

        <h3>6. Muscular Tissue</h3>
        <p>
            Muscular tissue is responsible for movement of different parts
            of the body.
        </p>

        <p>
            <b>Types:</b><br>
            • Striated muscle<br>
            • Smooth muscle<br>
            • Cardiac muscle
        </p>

        <h3>7. Neural Tissue</h3>
        <p>
            Neural tissue is specialised for receiving and transmitting
            electrical signals.
        </p>

        <p>
            The basic unit of neural tissue is the <b>neuron</b>.
        </p>

        <h3>8. Earthworm</h3>
        <p>
            Earthworm belongs to the phylum Annelida. Its body is elongated,
            cylindrical and divided into many segments.
        </p>

        <p>
            Earthworms are commonly found in moist soil and are important
            for soil fertility.
        </p>

        <h3>9. Cockroach</h3>
        <p>
            Cockroach belongs to the phylum Arthropoda. Its body is divided
            into head, thorax and abdomen.
        </p>

        <p>
            It has three pairs of legs and two pairs of wings.
        </p>

        <h3>10. Body Parts of Cockroach</h3>

        <p>
            <b>Head:</b> Bears antennae, eyes and mouthparts.
            <br><br>
            <b>Thorax:</b> Bears three pairs of legs and two pairs of wings.
            <br><br>
            <b>Abdomen:</b> Contains most of the internal organs.
        </p>

        <h3>11. Frog</h3>
        <p>
            Frog belongs to the class Amphibia. It can live both on land
            and in water.
        </p>

        <p>
            The body of a frog is divided into head and trunk. The skin is
            moist and plays an important role in respiration.
        </p>

        <h3>12. Important Terms ⭐</h3>

        <p>
            <b>Tissue:</b> Group of similar cells performing a specific function.
            <br><br>
            <b>Neuron:</b> Structural and functional unit of nervous tissue.
            <br><br>
            <b>Tendon:</b> Connects muscle to bone.
            <br><br>
            <b>Ligament:</b> Connects bone to bone.
            <br><br>
            <b>Cartilage:</b> Flexible connective tissue.
        </p>

        <h3>📝 Quick Revision</h3>

        <p>
            <b>Four basic animal tissues:</b>
            Epithelial, Connective, Muscular and Neural.
        </p>

        <p>
            <b>Muscle types:</b>
            Striated, Smooth and Cardiac.
        </p>

        <p>
            <b>Neuron:</b>
            Basic unit of neural tissue.
        </p>

        <p>
            <b>Earthworm:</b>
            Phylum Annelida.
        </p>

        <p>
            <b>Cockroach:</b>
            Phylum Arthropoda.
        </p>

        <p>
            <b>Frog:</b>
            Class Amphibia.
        </p>
    `
},

"Plant Physiology": {

    notes: `
        <h3>🌿 Plant Physiology — Complete Notes</h3>

        <h4>1. Plant Physiology</h4>
        <p>
            Plant physiology is the study of the functions and
            processes occurring in plants. Important processes include
            photosynthesis, respiration, transport of water and minerals,
            and plant growth.
        </p>

        <h4>2. Transport in Plants</h4>
        <p>
            Plants transport water, minerals and food through vascular
            tissues. Xylem mainly transports water and minerals, while
            phloem transports organic food.
        </p>

        <h4>3. Diffusion</h4>
        <p>
            Diffusion is the movement of molecules from a region of
            higher concentration to a region of lower concentration.
        </p>

        <h4>4. Osmosis</h4>
        <p>
            Osmosis is the movement of water through a selectively
            permeable membrane from a region of higher water potential
            to a region of lower water potential.
        </p>

        <h4>5. Transpiration</h4>
        <p>
            Transpiration is the loss of water in the form of water
            vapour from the aerial parts of plants, mainly through
            stomata.
        </p>

        <h4>6. Photosynthesis</h4>
        <p>
            Photosynthesis is the process by which green plants use
            light energy to synthesise carbohydrates from carbon
            dioxide and water, releasing oxygen as a by-product.
        </p>

        <h4>7. Chlorophyll</h4>
        <p>
            Chlorophyll is the main photosynthetic pigment present in
            green plants. It absorbs light energy required for
            photosynthesis.
        </p>

        <h4>8. Light Reaction</h4>
        <p>
            The light-dependent reactions occur in the thylakoid
            membranes of chloroplasts. Light energy is converted into
            chemical energy in the form of ATP and NADPH.
        </p>

        <h4>9. Dark Reaction</h4>
        <p>
            The light-independent reactions occur in the stroma of
            chloroplasts. Carbon dioxide is fixed and carbohydrates
            are ultimately formed through the Calvin cycle.
        </p>

        <h4>10. Respiration in Plants</h4>
        <p>
            Respiration is the process in which organic substances are
            broken down to release energy. Aerobic respiration uses
            oxygen, while anaerobic respiration occurs without oxygen.
        </p>

        <h4>11. Plant Growth</h4>
        <p>
            Plant growth is an irreversible increase in size or dry
            mass. Growth occurs mainly in regions containing actively
            dividing cells called meristems.
        </p>

        <h4>12. Plant Growth Regulators</h4>
        <p>
            Plant growth and development are regulated by chemical
            substances called plant growth regulators.
        </p>

        <ul>
            <li>Auxins</li>
            <li>Gibberellins</li>
            <li>Cytokinins</li>
            <li>Abscisic acid (ABA)</li>
            <li>Ethylene</li>
        </ul>
    `,

    formulas: `
        <h3>🧠 Important Points & Formulas</h3>

        <div class="formula-box">
            Photosynthesis:
            6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂
        </div>

        <div class="formula-box">
            Xylem → Transport of water and minerals
        </div>

        <div class="formula-box">
            Phloem → Transport of organic food
        </div>

        <div class="formula-box">
            Diffusion → High concentration → Low concentration
        </div>

        <div class="formula-box">
            Osmosis → Movement of water through a selectively
            permeable membrane
        </div>

        <div class="formula-box">
            Transpiration → Loss of water vapour from aerial parts
        </div>

        <div class="formula-box">
            Light reaction → ATP + NADPH
        </div>

        <div class="formula-box">
            Calvin cycle → Carbon fixation and carbohydrate formation
        </div>

        <div class="formula-box">
            Aerobic respiration → Uses oxygen
        </div>

        <div class="formula-box">
            Auxin → Cell elongation and growth
        </div>

        <div class="formula-box">
            Gibberellin → Stem elongation and growth
        </div>

        <div class="formula-box">
            Cytokinin → Cell division
        </div>

        <div class="formula-box">
            ABA → Growth inhibition and stress responses
        </div>

        <div class="formula-box">
            Ethylene → Fruit ripening
        </div>
    `,

    questions: `
        <h3>❓ Important Questions</h3>

        <div class="question-box">
            <b>Q1.</b> What is plant physiology?
        </div>

        <div class="question-box">
            <b>Q2.</b> What are the functions of xylem and phloem?
        </div>

        <div class="question-box">
            <b>Q3.</b> Define diffusion and osmosis.
        </div>

        <div class="question-box">
            <b>Q4.</b> What is transpiration?
        </div>

        <div class="question-box">
            <b>Q5.</b> Write the overall equation of photosynthesis.
        </div>

        <div class="question-box">
            <b>Q6.</b> What is the role of chlorophyll in photosynthesis?
        </div>

        <div class="question-box">
            <b>Q7.</b> Differentiate between light reaction and
            light-independent reaction.
        </div>

        <div class="question-box">
            <b>Q8.</b> What is respiration? Differentiate between
            aerobic and anaerobic respiration.
        </div>

        <div class="question-box">
            <b>Q9.</b> What are plant growth regulators?
        </div>

        <div class="question-box">
            <b>Q10.</b> Write the major functions of auxin, gibberellin,
            cytokinin, ABA and ethylene.
        </div>
    `
},

"Human Physiology": {

    notes: `
        <h3>🫀 Human Physiology — Complete Notes</h3>

        <h4>1. Human Physiology</h4>
        <p>
            Human physiology is the study of the normal functions and
            activities of the human body and its organs.
        </p>

        <h4>2. Digestive System</h4>
        <p>
            The digestive system helps in the digestion and absorption
            of food. It consists of the alimentary canal and associated
            digestive glands.
        </p>

        <h4>3. Alimentary Canal</h4>
        <p>
            The alimentary canal includes mouth, pharynx, oesophagus,
            stomach, small intestine, large intestine, rectum and anus.
        </p>

        <h4>4. Digestion</h4>
        <p>
            Digestion is the process of breaking complex food substances
            into simpler substances that can be absorbed by the body.
        </p>

        <h4>5. Respiratory System</h4>
        <p>
            The respiratory system is responsible for exchange of gases.
            Oxygen is taken into the body and carbon dioxide is removed.
        </p>

        <h4>6. Breathing</h4>
        <p>
            Breathing involves inspiration, in which air enters the lungs,
            and expiration, in which air leaves the lungs.
        </p>

        <h4>7. Circulatory System</h4>
        <p>
            The circulatory system transports oxygen, nutrients, hormones
            and waste products throughout the body.
        </p>

        <h4>8. Heart</h4>
        <p>
            The human heart is a muscular organ divided into four chambers:
            right atrium, right ventricle, left atrium and left ventricle.
        </p>

        <h4>9. Blood</h4>
        <p>
            Blood is a connective tissue consisting of plasma, red blood
            cells, white blood cells and platelets.
        </p>

        <h4>10. Excretory System</h4>
        <p>
            The excretory system removes metabolic waste products from
            the body. The kidneys are the main excretory organs.
        </p>

        <h4>11. Nephron</h4>
        <p>
            Nephron is the structural and functional unit of the kidney.
            It helps in filtration of blood and formation of urine.
        </p>

        <h4>12. Nervous System</h4>
        <p>
            The nervous system controls and coordinates various activities
            of the body. It consists mainly of the brain, spinal cord and
            nerves.
        </p>

        <h4>13. Neuron</h4>
        <p>
            Neuron is the structural and functional unit of the nervous
            system. It receives and transmits nerve impulses.
        </p>

        <h4>14. Endocrine System</h4>
        <p>
            The endocrine system consists of glands that release hormones
            directly into the blood. Hormones regulate various body
            functions.
        </p>

        <h4>15. Important Endocrine Glands</h4>
        <ul>
            <li>Pituitary gland</li>
            <li>Thyroid gland</li>
            <li>Parathyroid glands</li>
            <li>Adrenal glands</li>
            <li>Pancreas</li>
            <li>Testes</li>
            <li>Ovaries</li>
        </ul>
    `,

    formulas: `
        <h3>🧠 Important Points & Formulas</h3>

        <div class="formula-box">
            Cardiac Output = Heart Rate × Stroke Volume
        </div>

        <div class="formula-box">
            Heart Rate → Number of heart beats per minute
        </div>

        <div class="formula-box">
            RBC → Transport of oxygen
        </div>

        <div class="formula-box">
            WBC → Defence and immunity
        </div>

        <div class="formula-box">
            Platelets → Blood clotting
        </div>

        <div class="formula-box">
            Haemoglobin → Respiratory pigment present in RBCs
        </div>

        <div class="formula-box">
            Nephron → Structural and functional unit of kidney
        </div>

        <div class="formula-box">
            Neuron → Structural and functional unit of nervous system
        </div>

        <div class="formula-box">
            Insulin → Helps regulate blood glucose level
        </div>

        <div class="formula-box">
            Thyroxine → Regulates metabolism
        </div>

        <div class="formula-box">
            Adrenaline → Helps the body respond to stressful situations
        </div>

        <div class="formula-box">
            Growth Hormone → Promotes growth and development
        </div>

        <div class="formula-box">
            Oxygen → Required for aerobic cellular respiration
        </div>

        <div class="formula-box">
            Carbon Dioxide → Major waste gas removed during respiration
        </div>
    `,

    questions: `
        <h3>❓ Important Questions</h3>

        <div class="question-box">
            <b>Q1.</b> What is human physiology?
        </div>

        <div class="question-box">
            <b>Q2.</b> Name the major parts of the alimentary canal.
        </div>

        <div class="question-box">
            <b>Q3.</b> What is digestion?
        </div>

        <div class="question-box">
            <b>Q4.</b> What is the function of the respiratory system?
        </div>

        <div class="question-box">
            <b>Q5.</b> Differentiate between inspiration and expiration.
        </div>

        <div class="question-box">
            <b>Q6.</b> Name the four chambers of the human heart.
        </div>

        <div class="question-box">
            <b>Q7.</b> What are the functions of RBCs, WBCs and platelets?
        </div>

        <div class="question-box">
            <b>Q8.</b> What is a nephron? Explain its importance.
        </div>

        <div class="question-box">
            <b>Q9.</b> What is a neuron?
        </div>

        <div class="question-box">
            <b>Q10.</b> What are hormones? Name some important endocrine
            glands and their functions.
        </div>
    `
},

"Reading Comprehension": {

    notes: `
        <h3>📖 Reading Comprehension — Complete Notes</h3>

        <h4>1. What is Reading Comprehension?</h4>
        <p>
            Reading comprehension is the ability to read a passage,
            understand its meaning, identify important information and
            answer questions based on the passage.
        </p>

        <h4>2. Main Purpose</h4>
        <p>
            The main purpose of comprehension is to test how well a
            student understands the given text. Questions may test
            facts, meanings, ideas, conclusions and the writer's purpose.
        </p>

        <h4>3. Types of Questions</h4>
        <ul>
            <li>Direct questions</li>
            <li>Inference-based questions</li>
            <li>Vocabulary-based questions</li>
            <li>True or False questions</li>
            <li>Main idea questions</li>
            <li>Title-based questions</li>
            <li>Reference-based questions</li>
        </ul>

        <h4>4. Direct Questions</h4>
        <p>
            The answer to a direct question can usually be found
            clearly stated in the passage.
        </p>

        <h4>5. Inference Questions</h4>
        <p>
            In inference questions, the answer is not directly stated.
            You have to understand the passage and draw a logical
            conclusion from the given information.
        </p>

        <h4>6. Vocabulary Questions</h4>
        <p>
            These questions ask for the meaning, synonym or antonym
            of a word used in the passage. The meaning should be
            understood according to the context.
        </p>

        <h4>7. Main Idea</h4>
        <p>
            The main idea is the central thought or most important
            message of the passage.
        </p>

        <h4>8. Suitable Title</h4>
        <p>
            A suitable title should be short and should represent the
            main idea of the complete passage.
        </p>

        <h4>9. How to Read a Passage</h4>
        <ol>
            <li>Read the passage carefully.</li>
            <li>Understand the main idea.</li>
            <li>Notice important facts and keywords.</li>
            <li>Read the questions carefully.</li>
            <li>Find the relevant part of the passage.</li>
            <li>Answer in clear and simple language.</li>
        </ol>

        <h4>10. Important Tips</h4>
        <ul>
            <li>Do not assume information that is not given.</li>
            <li>Use the context to understand difficult words.</li>
            <li>For inference questions, use logical reasoning.</li>
            <li>Keep answers precise and relevant.</li>
            <li>Check the passage again before submitting answers.</li>
        </ul>
    `,

    formulas: `
        <h3>🧠 Important Points</h3>

        <div class="formula-box">
            Comprehension = Read + Understand + Analyse + Answer
        </div>

        <div class="formula-box">
            Main Idea → Central thought of the passage
        </div>

        <div class="formula-box">
            Title → Short expression of the main idea
        </div>

        <div class="formula-box">
            Direct Answer → Information clearly given in the passage
        </div>

        <div class="formula-box">
            Inference → Logical conclusion from the passage
        </div>

        <div class="formula-box">
            Vocabulary → Meaning of a word according to its context
        </div>

        <div class="formula-box">
            Golden Rule → Answer only from the information supported
            by the passage
        </div>
    `,

    questions: `
        <h3>❓ Important Questions</h3>

        <div class="question-box">
            <b>Q1.</b> What is reading comprehension?
        </div>

        <div class="question-box">
            <b>Q2.</b> What is the main purpose of a comprehension passage?
        </div>

        <div class="question-box">
            <b>Q3.</b> What is the difference between a direct question
            and an inference-based question?
        </div>

        <div class="question-box">
            <b>Q4.</b> What is the main idea of a passage?
        </div>

        <div class="question-box">
            <b>Q5.</b> How do you choose a suitable title for a passage?
        </div>

        <div class="question-box">
            <b>Q6.</b> How can context help in understanding difficult words?
        </div>

        <div class="question-box">
            <b>Q7.</b> Write any five tips for solving comprehension
            questions.
        </div>

        <div class="question-box">
            <b>Q8.</b> Why should we avoid adding information that is
            not given in the passage?
        </div>

        <div class="question-box">
            <b>Q9.</b> What are vocabulary-based questions?
        </div>

        <div class="question-box">
            <b>Q10.</b> Explain the steps for solving a reading
            comprehension passage.
        </div>
    `
},

"Grammar": {

    notes: `
        <h3>📚 Grammar — Complete Notes</h3>

        <h4>1. What is Grammar?</h4>
        <p>
            Grammar is the set of rules that helps us use words and
            sentences correctly in a language.
        </p>

        <h4>2. Sentence</h4>
        <p>
            A sentence is a group of words that expresses a complete
            thought or meaning.
        </p>

        <h4>3. Subject and Predicate</h4>
        <p>
            The subject tells us who or what the sentence is about.
            The predicate tells us something about the subject.
        </p>

        <div class="formula-box">
            Example: Riya reads a book.<br>
            Subject → Riya<br>
            Predicate → reads a book
        </div>

        <h4>4. Parts of Speech</h4>
        <p>
            Words are classified into different groups according to
            their function in a sentence.
        </p>

        <ul>
            <li><b>Noun</b> → Name of a person, place, thing or idea</li>
            <li><b>Pronoun</b> → Used in place of a noun</li>
            <li><b>Verb</b> → Shows action or state</li>
            <li><b>Adjective</b> → Describes a noun or pronoun</li>
            <li><b>Adverb</b> → Describes a verb, adjective or another adverb</li>
            <li><b>Preposition</b> → Shows relationship between words</li>
            <li><b>Conjunction</b> → Joins words or sentences</li>
            <li><b>Interjection</b> → Expresses sudden feeling or emotion</li>
        </ul>

        <h4>5. Subject-Verb Agreement</h4>
        <p>
            The verb must agree with its subject in number and person.
        </p>

        <div class="formula-box">
            Singular Subject → Singular Verb<br>
            Plural Subject → Plural Verb
        </div>

        <div class="formula-box">
            Example: She plays cricket.<br>
            Example: They play cricket.
        </div>

        <h4>6. Articles</h4>
        <p>
            Articles are words used before nouns. The three articles
            are <b>a, an</b> and <b>the</b>.
        </p>

        <ul>
            <li><b>A</b> → Used before a consonant sound</li>
            <li><b>An</b> → Used before a vowel sound</li>
            <li><b>The</b> → Used for a specific person or thing</li>
        </ul>

        <h4>7. Active and Passive Voice</h4>
        <p>
            In active voice, the subject performs the action. In passive
            voice, the subject receives the action.
        </p>

        <div class="formula-box">
            Active → Subject + Verb + Object
        </div>

        <div class="formula-box">
            Passive → Object + suitable form of Be + Past Participle
            + by + Subject
        </div>

        <h4>8. Direct and Indirect Speech</h4>
        <p>
            Direct speech gives the exact words of a speaker. Indirect
            speech reports the speaker's words without quoting them
            exactly.
        </p>

        <div class="formula-box">
            Direct: He said, "I am tired."<br>
            Indirect: He said that he was tired.
        </div>

        <h4>9. Prepositions</h4>
        <p>
            Prepositions show the relationship between a noun or pronoun
            and another word.
        </p>

        <div class="formula-box">
            Examples: in, on, at, under, over, between, among, beside
        </div>

        <h4>10. Conjunctions</h4>
        <p>
            Conjunctions connect words, phrases or clauses.
        </p>

        <div class="formula-box">
            Examples: and, but, or, because, although, if, while
        </div>

        <h4>11. Modals</h4>
        <p>
            Modals are auxiliary verbs that express ability, possibility,
            permission, necessity, advice or obligation.
        </p>

        <ul>
            <li>Can → Ability</li>
            <li>Could → Past ability / polite request</li>
            <li>May → Permission / possibility</li>
            <li>Might → Possibility</li>
            <li>Must → Necessity or strong obligation</li>
            <li>Should → Advice</li>
            <li>Would → Polite request / imagined situation</li>
        </ul>

        <h4>12. Common Errors</h4>
        <ul>
            <li>Incorrect: He go to school.</li>
            <li>Correct: He goes to school.</li>
            <li>Incorrect: She have a book.</li>
            <li>Correct: She has a book.</li>
            <li>Incorrect: I am knowing the answer.</li>
            <li>Correct: I know the answer.</li>
        </ul>
    `,

    formulas: `
        <h3>🧠 Important Grammar Rules</h3>

        <div class="formula-box">
            Sentence = Subject + Predicate
        </div>

        <div class="formula-box">
            Singular Subject → Singular Verb
        </div>

        <div class="formula-box">
            Plural Subject → Plural Verb
        </div>

        <div class="formula-box">
            A → Before a consonant sound
        </div>

        <div class="formula-box">
            An → Before a vowel sound
        </div>

        <div class="formula-box">
            The → Specific or already identified noun
        </div>

        <div class="formula-box">
            Active Voice → Subject + Verb + Object
        </div>

        <div class="formula-box">
            Passive Voice → Object + Be + Past Participle
        </div>

        <div class="formula-box">
            Can → Ability
        </div>

        <div class="formula-box">
            May → Permission / Possibility
        </div>

        <div class="formula-box">
            Must → Necessity / Obligation
        </div>

        <div class="formula-box">
            Should → Advice
        </div>

        <div class="formula-box">
            Conjunction → Joins words, phrases or clauses
        </div>

        <div class="formula-box">
            Preposition → Shows relationship between words
        </div>
    `,

    questions: `
        <h3>❓ Important Questions</h3>

        <div class="question-box">
            <b>Q1.</b> What is grammar?
        </div>

        <div class="question-box">
            <b>Q2.</b> What is a sentence? Explain its basic parts.
        </div>

        <div class="question-box">
            <b>Q3.</b> What is the difference between a subject and a
            predicate?
        </div>

        <div class="question-box">
            <b>Q4.</b> Name the eight parts of speech.
        </div>

        <div class="question-box">
            <b>Q5.</b> Explain subject-verb agreement with examples.
        </div>

        <div class="question-box">
            <b>Q6.</b> What are articles? Explain the use of a, an and the.
        </div>

        <div class="question-box">
            <b>Q7.</b> Differentiate between active voice and passive voice.
        </div>

        <div class="question-box">
            <b>Q8.</b> What is the difference between direct and indirect
            speech?
        </div>

        <div class="question-box">
            <b>Q9.</b> What are prepositions and conjunctions?
        </div>

        <div class="question-box">
            <b>Q10.</b> What are modal verbs? Explain any five modals
            with their uses.
        </div>
    `
},

"Writing Skills": {

    notes: `
        <h3>✍️ Writing Skills — Complete Notes</h3>

        <h4>1. What are Writing Skills?</h4>
        <p>
            Writing skills are the abilities required to express ideas,
            thoughts, information and opinions clearly and effectively
            in written form.
        </p>

        <h4>2. Notice Writing</h4>
        <p>
            A notice is a short formal piece of writing used to give
            important information to a particular group of people.
        </p>

        <h4>Format of Notice</h4>
        <ol>
            <li>Name of the institution or organisation</li>
            <li>NOTICE</li>
            <li>Date</li>
            <li>Heading / Title</li>
            <li>Body of the notice</li>
            <li>Name and designation of the writer</li>
        </ol>

        <h4>3. Letter Writing</h4>
        <p>
            Letters are written to communicate information, requests,
            feelings or opinions to another person or organisation.
        </p>

        <h4>Formal Letter</h4>
        <p>
            Formal letters are written for official or professional
            purposes such as complaints, applications, enquiries and
            requests.
        </p>

        <h4>Formal Letter Format</h4>
        <ol>
            <li>Sender's address</li>
            <li>Date</li>
            <li>Receiver's address</li>
            <li>Subject</li>
            <li>Salutation</li>
            <li>Body of the letter</li>
            <li>Closing</li>
            <li>Name / Signature</li>
        </ol>

        <h4>Informal Letter</h4>
        <p>
            Informal letters are written to friends, family members or
            people with whom we have a personal relationship.
        </p>

        <h4>4. Article Writing</h4>
        <p>
            An article is a piece of writing that presents information,
            ideas or opinions about a particular topic.
        </p>

        <h4>Article Format</h4>
        <ol>
            <li>Title</li>
            <li>Byline</li>
            <li>Introduction</li>
            <li>Main body</li>
            <li>Conclusion</li>
        </ol>

        <h4>5. Report Writing</h4>
        <p>
            A report is a factual account of an event, activity or
            situation. It should be clear, objective and properly
            organised.
        </p>

        <h4>Report Format</h4>
        <ol>
            <li>Title / Heading</li>
            <li>Byline</li>
            <li>Date and place</li>
            <li>Introduction</li>
            <li>Details of the event</li>
            <li>Conclusion</li>
        </ol>

        <h4>6. Email Writing</h4>
        <p>
            Email writing is a quick method of written communication.
            Emails may be formal or informal depending on the receiver
            and purpose.
        </p>

        <h4>Formal Email Format</h4>
        <ol>
            <li>To</li>
            <li>Subject</li>
            <li>Salutation</li>
            <li>Opening statement</li>
            <li>Main message</li>
            <li>Closing statement</li>
            <li>Regards and name</li>
        </ol>

        <h4>7. Paragraph Writing</h4>
        <p>
            A good paragraph contains one central idea supported by
            relevant details. It should have a clear beginning, logical
            development and suitable ending.
        </p>

        <h4>8. Important Writing Rules</h4>
        <ul>
            <li>Understand the topic before writing.</li>
            <li>Follow the required format.</li>
            <li>Use clear and simple language.</li>
            <li>Keep the content relevant to the topic.</li>
            <li>Maintain proper paragraphing.</li>
            <li>Check spelling and grammar.</li>
            <li>Follow the required word limit.</li>
            <li>Use appropriate formal or informal language.</li>
        </ul>

        <h4>9. Formal vs Informal Language</h4>
        <div class="formula-box">
            Formal → Polite, professional and official language
        </div>

        <div class="formula-box">
            Informal → Friendly and personal language
        </div>
    `,

    formulas: `
        <h3>🧠 Important Formats & Points</h3>

        <div class="formula-box">
            Notice → Institution + NOTICE + Date + Heading + Body
            + Name + Designation
        </div>

        <div class="formula-box">
            Formal Letter → Address + Date + Receiver + Subject
            + Salutation + Body + Closing
        </div>

        <div class="formula-box">
            Article → Title + Byline + Introduction + Body + Conclusion
        </div>

        <div class="formula-box">
            Report → Title + Byline + Introduction + Event Details
            + Conclusion
        </div>

        <div class="formula-box">
            Email → To + Subject + Salutation + Message + Closing
        </div>

        <div class="formula-box">
            Good Writing → Clear + Correct + Relevant + Well-organised
        </div>

        <div class="formula-box">
            Formal Language → Polite + Professional + Objective
        </div>

        <div class="formula-box">
            Paragraph → Topic Sentence + Supporting Details + Conclusion
        </div>
    `,

    questions: `
        <h3>❓ Important Questions</h3>

        <div class="question-box">
            <b>Q1.</b> What are writing skills?
        </div>

        <div class="question-box">
            <b>Q2.</b> What is notice writing? Write its format.
        </div>

        <div class="question-box">
            <b>Q3.</b> What is the difference between a formal and an
            informal letter?
        </div>

        <div class="question-box">
            <b>Q4.</b> Write the format of a formal letter.
        </div>

        <div class="question-box">
            <b>Q5.</b> What is article writing? Explain its format.
        </div>

        <div class="question-box">
            <b>Q6.</b> What is report writing? Mention its important parts.
        </div>

        <div class="question-box">
            <b>Q7.</b> What is email writing? Write the format of a
            formal email.
        </div>

        <div class="question-box">
            <b>Q8.</b> What are the qualities of good writing?
        </div>

        <div class="question-box">
            <b>Q9.</b> Differentiate between formal and informal language.
        </div>

        <div class="question-box">
            <b>Q10.</b> Write five important rules that should be followed
            while answering a writing-skill question.
        </div>
    `
},

"Vocabulary": {

    notes: `
        <h3>🔤 Vocabulary — Complete Notes</h3>

        <h4>1. What is Vocabulary?</h4>
        <p>
            Vocabulary is the collection of words that a person knows,
            understands and uses while speaking, reading or writing.
        </p>

        <h4>2. Synonyms</h4>
        <p>
            Synonyms are words that have the same or nearly the same
            meaning.
        </p>

        <div class="formula-box">
            Happy → Joyful<br>
            Big → Large<br>
            Begin → Start
        </div>

        <h4>3. Antonyms</h4>
        <p>
            Antonyms are words that have opposite meanings.
        </p>

        <div class="formula-box">
            Hot → Cold<br>
            Early → Late<br>
            Strong → Weak
        </div>

        <h4>4. One-word Substitution</h4>
        <p>
            One-word substitution means using a single word in place
            of a group of words or a phrase.
        </p>

        <div class="formula-box">
            A person who loves books → Bibliophile<br>
            A person who cannot read or write → Illiterate<br>
            A place where books are kept → Library
        </div>

        <h4>5. Homophones</h4>
        <p>
            Homophones are words that have the same pronunciation but
            different meanings and often different spellings.
        </p>

        <div class="formula-box">
            See → To look<br>
            Sea → Large body of salt water
        </div>

        <h4>6. Homonyms</h4>
        <p>
            Homonyms are words that have the same spelling or pronunciation
            but different meanings.
        </p>

        <div class="formula-box">
            Bank → Financial institution<br>
            Bank → Side of a river
        </div>

        <h4>7. Idioms</h4>
        <p>
            An idiom is a group of words whose meaning is different from
            the literal meaning of the individual words.
        </p>

        <div class="formula-box">
            A piece of cake → Something very easy<br>
            Once in a blue moon → Very rarely<br>
            Break the ice → Start a conversation
        </div>

        <h4>8. Phrases</h4>
        <p>
            A phrase is a group of words that works together as a unit
            but does not normally contain a complete subject-verb idea.
        </p>

        <div class="formula-box">
            In the morning<br>
            On the table<br>
            A very beautiful flower
        </div>

        <h4>9. Prefix</h4>
        <p>
            A prefix is a group of letters added to the beginning of a
            word to change its meaning.
        </p>

        <div class="formula-box">
            Un + happy → Unhappy<br>
            Re + write → Rewrite<br>
            Dis + agree → Disagree
        </div>

        <h4>10. Suffix</h4>
        <p>
            A suffix is a group of letters added to the end of a word.
        </p>

        <div class="formula-box">
            Teach + er → Teacher<br>
            Kind + ness → Kindness<br>
            Quick + ly → Quickly
        </div>

        <h4>11. Contextual Meaning</h4>
        <p>
            Contextual meaning is the meaning of a word according to
            the sentence or situation in which it is used.
        </p>

        <div class="formula-box">
            The word "bright" can mean intelligent, shiny or full of light,
            depending on the context.
        </div>

        <h4>12. Word Formation</h4>
        <p>
            New words can be formed by adding prefixes and suffixes or
            by changing the form of a word.
        </p>

        <div class="formula-box">
            Beauty → Beautiful → Beautifully
        </div>

        <h4>13. How to Improve Vocabulary</h4>
        <ul>
            <li>Read books, newspapers and articles regularly.</li>
            <li>Learn a few new words every day.</li>
            <li>Understand words in context.</li>
            <li>Use new words in your own sentences.</li>
            <li>Revise synonyms and antonyms regularly.</li>
            <li>Maintain a vocabulary notebook.</li>
        </ul>
    `,

    formulas: `
        <h3>🧠 Important Vocabulary Points</h3>

        <div class="formula-box">
            Synonym → Same or similar meaning
        </div>

        <div class="formula-box">
            Antonym → Opposite meaning
        </div>

        <div class="formula-box">
            One-word Substitution → Group of words → One word
        </div>

        <div class="formula-box">
            Homophone → Same sound + Different meaning
        </div>

        <div class="formula-box">
            Homonym → Same spelling or sound + Different meaning
        </div>

        <div class="formula-box">
            Idiom → Special meaning different from literal meaning
        </div>

        <div class="formula-box">
            Prefix → Added at the beginning of a word
        </div>

        <div class="formula-box">
            Suffix → Added at the end of a word
        </div>

        <div class="formula-box">
            Contextual Meaning → Meaning according to the context
        </div>

        <div class="formula-box">
            Vocabulary Improvement → Read + Learn + Use + Revise
        </div>
    `,

    questions: `
        <h3>❓ Important Questions</h3>

        <div class="question-box">
            <b>Q1.</b> What is vocabulary?
        </div>

        <div class="question-box">
            <b>Q2.</b> What are synonyms? Give three examples.
        </div>

        <div class="question-box">
            <b>Q3.</b> What are antonyms? Give three examples.
        </div>

        <div class="question-box">
            <b>Q4.</b> What is one-word substitution? Give three examples.
        </div>

        <div class="question-box">
            <b>Q5.</b> What are homophones? Give suitable examples.
        </div>

        <div class="question-box">
            <b>Q6.</b> What are homonyms?
        </div>

        <div class="question-box">
            <b>Q7.</b> What is an idiom? Explain with examples.
        </div>

        <div class="question-box">
            <b>Q8.</b> What are prefixes and suffixes?
        </div>

        <div class="question-box">
            <b>Q9.</b> What is contextual meaning?
        </div>

        <div class="question-box">
            <b>Q10.</b> Write five ways to improve vocabulary.
        </div>
    `
},

"Literature": {

    notes: `
        <h3>📕 Literature — Complete Notes</h3>

        <h4>1. What is Literature?</h4>
        <p>
            Literature is a form of written or spoken art that expresses
            ideas, emotions, experiences and imagination through language.
            It includes poetry, prose, drama, short stories and novels.
        </p>

        <h4>2. Main Forms of Literature</h4>
        <ul>
            <li><b>Poetry</b> → Literary writing arranged in lines and stanzas.</li>
            <li><b>Prose</b> → Ordinary written language in sentences and paragraphs.</li>
            <li><b>Drama</b> → A literary work written to be performed.</li>
            <li><b>Novel</b> → A long fictional prose narrative.</li>
            <li><b>Short Story</b> → A brief fictional narrative.</li>
        </ul>

        <h4>3. Character</h4>
        <p>
            A character is a person, animal or figure that takes part in
            the events of a literary work.
        </p>

        <div class="formula-box">
            Protagonist → Main character of the story
        </div>

        <div class="formula-box">
            Antagonist → Character or force opposing the protagonist
        </div>

        <h4>4. Plot</h4>
        <p>
            Plot is the sequence of events that forms the story. A plot
            generally includes an introduction, rising action, climax,
            falling action and resolution.
        </p>

        <h4>5. Setting</h4>
        <p>
            Setting refers to the time, place and surroundings in which
            the events of a literary work take place.
        </p>

        <h4>6. Theme</h4>
        <p>
            Theme is the central idea, message or underlying meaning
            explored in a literary work.
        </p>

        <h4>7. Central Idea</h4>
        <p>
            The central idea is the main point or thought presented by
            the writer in a poem, story or other literary work.
        </p>

        <h4>8. Point of View</h4>
        <p>
            Point of view refers to the perspective from which a story
            is narrated.
        </p>

        <ul>
            <li><b>First Person</b> → Uses I, me, we, our.</li>
            <li><b>Third Person</b> → Uses he, she, they, them.</li>
        </ul>

        <h4>9. Literary Devices</h4>
        <p>
            Literary devices are techniques used by writers to make
            language more effective, expressive and interesting.
        </p>

        <h4>10. Simile</h4>
        <p>
            A simile compares two different things using words such as
            "like" or "as".
        </p>

        <div class="formula-box">
            Example: He is as brave as a lion.
        </div>

        <h4>11. Metaphor</h4>
        <p>
            A metaphor directly compares one thing with another without
            using "like" or "as".
        </p>

        <div class="formula-box">
            Example: Time is a thief.
        </div>

        <h4>12. Personification</h4>
        <p>
            Personification gives human qualities or actions to
            non-human things.
        </p>

        <div class="formula-box">
            Example: The wind whispered through the trees.
        </div>

        <h4>13. Alliteration</h4>
        <p>
            Alliteration is the repetition of the same or similar
            consonant sound at the beginning of nearby words.
        </p>

        <div class="formula-box">
            Example: She sells seashells.
        </div>

        <h4>14. Imagery</h4>
        <p>
            Imagery is the use of descriptive language that creates
            pictures or sensory experiences in the reader's mind.
        </p>

        <h4>15. Symbolism</h4>
        <p>
            Symbolism occurs when an object, person, place or action
            represents a deeper meaning or idea.
        </p>

        <h4>16. How to Study Literature</h4>
        <ol>
            <li>Read the chapter or poem carefully.</li>
            <li>Understand the central idea.</li>
            <li>Identify important characters.</li>
            <li>Note important events and themes.</li>
            <li>Understand important literary devices.</li>
            <li>Revise important questions and answers.</li>
        </ol>
    `,

    formulas: `
        <h3>🧠 Important Literature Points</h3>

        <div class="formula-box">
            Literature → Expression of ideas, emotions and experiences
            through language
        </div>

        <div class="formula-box">
            Poetry → Lines + Stanzas
        </div>

        <div class="formula-box">
            Prose → Sentences + Paragraphs
        </div>

        <div class="formula-box">
            Protagonist → Main character
        </div>

        <div class="formula-box">
            Antagonist → Opposing character or force
        </div>

        <div class="formula-box">
            Plot → Sequence of events in a story
        </div>

        <div class="formula-box">
            Setting → Time + Place + Surroundings
        </div>

        <div class="formula-box">
            Theme → Central message or underlying idea
        </div>

        <div class="formula-box">
            Simile → Comparison using like / as
        </div>

        <div class="formula-box">
            Metaphor → Direct comparison
        </div>

        <div class="formula-box">
            Personification → Human qualities given to non-human things
        </div>

        <div class="formula-box">
            Alliteration → Repetition of beginning consonant sounds
        </div>

        <div class="formula-box">
            Imagery → Language creating sensory pictures
        </div>

        <div class="formula-box">
            Symbolism → Object or idea represents a deeper meaning
        </div>
    `,

    questions: `
        <h3>❓ Important Questions</h3>

        <div class="question-box">
            <b>Q1.</b> What is literature?
        </div>

        <div class="question-box">
            <b>Q2.</b> Name the major forms of literature.
        </div>

        <div class="question-box">
            <b>Q3.</b> What is a character? Differentiate between
            protagonist and antagonist.
        </div>

        <div class="question-box">
            <b>Q4.</b> What is plot? Name its major stages.
        </div>

        <div class="question-box">
            <b>Q5.</b> What is setting in literature?
        </div>

        <div class="question-box">
            <b>Q6.</b> What is the difference between theme and
            central idea?
        </div>

        <div class="question-box">
            <b>Q7.</b> What is point of view? Explain first-person
            and third-person narration.
        </div>

        <div class="question-box">
            <b>Q8.</b> What is a simile? Give an example.
        </div>

        <div class="question-box">
            <b>Q9.</b> Differentiate between simile and metaphor.
        </div>

        <div class="question-box">
            <b>Q10.</b> Explain personification, alliteration, imagery
            and symbolism with examples.
        </div>
    `
},

"Tenses": {

    notes: `
        <h3>⏳ Tenses — Complete Notes</h3>

        <h4>1. What is Tense?</h4>
        <p>
            Tense shows the time of an action or event. It tells us
            whether an action happens in the present, happened in the
            past, or will happen in the future.
        </p>

        <h4>2. Three Main Tenses</h4>
        <ul>
            <li><b>Present Tense</b> → Action happening now or regularly.</li>
            <li><b>Past Tense</b> → Action that happened in the past.</li>
            <li><b>Future Tense</b> → Action that will happen in the future.</li>
        </ul>

        <h4>3. Present Simple</h4>
        <p>
            Used for habits, routines, general truths and regular actions.
        </p>

        <div class="formula-box">
            Structure → Subject + V1 / V1+s/es + Object
        </div>

        <div class="formula-box">
            Example: She plays tennis every day.
        </div>

        <h4>4. Present Continuous</h4>
        <p>
            Used for an action that is happening at or around the present
            time.
        </p>

        <div class="formula-box">
            Structure → Subject + is/am/are + V1-ing + Object
        </div>

        <div class="formula-box">
            Example: She is reading a book.
        </div>

        <h4>5. Present Perfect</h4>
        <p>
            Used for an action that has been completed recently or has
            a connection with the present.
        </p>

        <div class="formula-box">
            Structure → Subject + has/have + V3 + Object
        </div>

        <div class="formula-box">
            Example: She has completed her work.
        </div>

        <h4>6. Present Perfect Continuous</h4>
        <p>
            Used for an action that started in the past and is still
            continuing or has recently stopped with a present connection.
        </p>

        <div class="formula-box">
            Structure → Subject + has/have been + V1-ing + Object
        </div>

        <div class="formula-box">
            Example: She has been studying for two hours.
        </div>

        <h4>7. Past Simple</h4>
        <p>
            Used for an action that was completed in the past.
        </p>

        <div class="formula-box">
            Structure → Subject + V2 + Object
        </div>

        <div class="formula-box">
            Example: She visited Delhi last year.
        </div>

        <h4>8. Past Continuous</h4>
        <p>
            Used for an action that was in progress at a particular time
            in the past.
        </p>

        <div class="formula-box">
            Structure → Subject + was/were + V1-ing + Object
        </div>

        <div class="formula-box">
            Example: She was reading at 8 PM.
        </div>

        <h4>9. Past Perfect</h4>
        <p>
            Used for an action that was completed before another action
            in the past.
        </p>

        <div class="formula-box">
            Structure → Subject + had + V3 + Object
        </div>

        <div class="formula-box">
            Example: She had finished her work before dinner.
        </div>

        <h4>10. Past Perfect Continuous</h4>
        <p>
            Used for an action that had been continuing for a period of
            time before another past event.
        </p>

        <div class="formula-box">
            Structure → Subject + had been + V1-ing + Object
        </div>

        <div class="formula-box">
            Example: She had been studying for two hours before dinner.
        </div>

        <h4>11. Future Simple</h4>
        <p>
            Used for an action that will happen in the future.
        </p>

        <div class="formula-box">
            Structure → Subject + will + V1 + Object
        </div>

        <div class="formula-box">
            Example: She will visit Delhi tomorrow.
        </div>

        <h4>12. Future Continuous</h4>
        <p>
            Used for an action that will be in progress at a particular
            time in the future.
        </p>

        <div class="formula-box">
            Structure → Subject + will be + V1-ing + Object
        </div>

        <div class="formula-box">
            Example: She will be studying at 8 PM.
        </div>

        <h4>13. Future Perfect</h4>
        <p>
            Used for an action that will be completed before a particular
            time in the future.
        </p>

        <div class="formula-box">
            Structure → Subject + will have + V3 + Object
        </div>

        <div class="formula-box">
            Example: She will have completed her work by evening.
        </div>

        <h4>14. Future Perfect Continuous</h4>
        <p>
            Used for an action that will have been continuing for a
            particular period of time up to a future point.
        </p>

        <div class="formula-box">
            Structure → Subject + will have been + V1-ing + Object
        </div>

        <div class="formula-box">
            Example: She will have been studying for three hours by 8 PM.
        </div>

        <h4>15. Important Verb Forms</h4>
        <div class="formula-box">
            V1 → Present/Base Form → go
        </div>

        <div class="formula-box">
            V2 → Past Form → went
        </div>

        <div class="formula-box">
            V3 → Past Participle → gone
        </div>

        <div class="formula-box">
            V1-ing → Present Participle → going
        </div>

        <h4>16. Common Time Expressions</h4>
        <ul>
            <li>Present → every day, usually, always, now</li>
            <li>Past → yesterday, last week, ago</li>
            <li>Future → tomorrow, next week, soon</li>
            <li>Perfect → already, just, yet, since, for</li>
        </ul>
    `,

    formulas: `
        <h3>🧠 12 Tenses — Quick Revision</h3>

        <div class="formula-box">
            Present Simple → Subject + V1/V1+s/es
        </div>

        <div class="formula-box">
            Present Continuous → Subject + is/am/are + V1-ing
        </div>

        <div class="formula-box">
            Present Perfect → Subject + has/have + V3
        </div>

        <div class="formula-box">
            Present Perfect Continuous → Subject + has/have been + V1-ing
        </div>

        <div class="formula-box">
            Past Simple → Subject + V2
        </div>

        <div class="formula-box">
            Past Continuous → Subject + was/were + V1-ing
        </div>

        <div class="formula-box">
            Past Perfect → Subject + had + V3
        </div>

        <div class="formula-box">
            Past Perfect Continuous → Subject + had been + V1-ing
        </div>

        <div class="formula-box">
            Future Simple → Subject + will + V1
        </div>

        <div class="formula-box">
            Future Continuous → Subject + will be + V1-ing
        </div>

        <div class="formula-box">
            Future Perfect → Subject + will have + V3
        </div>

        <div class="formula-box">
            Future Perfect Continuous → Subject + will have been + V1-ing
        </div>

        <div class="formula-box">
            V1 → Base Form
        </div>

        <div class="formula-box">
            V2 → Past Form
        </div>

        <div class="formula-box">
            V3 → Past Participle
        </div>
    `,

    questions: `
        <h3>❓ Important Questions</h3>

        <div class="question-box">
            <b>Q1.</b> What is tense?
        </div>

        <div class="question-box">
            <b>Q2.</b> Name the three main types of tenses.
        </div>

        <div class="question-box">
            <b>Q3.</b> Write the structure of the Present Simple tense.
        </div>

        <div class="question-box">
            <b>Q4.</b> Differentiate between Present Simple and
            Present Continuous.
        </div>

        <div class="question-box">
            <b>Q5.</b> Write the structures of the four Present Tenses.
        </div>

        <div class="question-box">
            <b>Q6.</b> Write the structures of the four Past Tenses.
        </div>

        <div class="question-box">
            <b>Q7.</b> Write the structures of the four Future Tenses.
        </div>

        <div class="question-box">
            <b>Q8.</b> What are V1, V2 and V3 forms of a verb?
        </div>

        <div class="question-box">
            <b>Q9.</b> Differentiate between Past Perfect and
            Past Perfect Continuous.
        </div>

        <div class="question-box">
            <b>Q10.</b> Explain all twelve tenses with their structures
            and suitable examples.
        </div>
    `
},

"Parts of Speech": {

    notes: `
        <h3>🔤 Parts of Speech — Complete Notes</h3>

        <h4>1. What are Parts of Speech?</h4>
        <p>
            Parts of speech are categories of words based on the work
            they perform in a sentence. English has eight main parts
            of speech.
        </p>

        <h4>2. Noun</h4>
        <p>
            A noun is a word used to name a person, place, animal, thing
            or idea.
        </p>

        <div class="formula-box">
            Examples → Rahul, Delhi, dog, book, honesty
        </div>

        <h4>3. Pronoun</h4>
        <p>
            A pronoun is a word used in place of a noun to avoid
            repetition.
        </p>

        <div class="formula-box">
            Examples → I, we, you, he, she, it, they, them
        </div>

        <h4>4. Verb</h4>
        <p>
            A verb expresses an action, occurrence or state of being.
        </p>

        <div class="formula-box">
            Examples → run, write, eat, sleep, is, are
        </div>

        <h4>5. Adjective</h4>
        <p>
            An adjective describes or gives more information about
            a noun or pronoun.
        </p>

        <div class="formula-box">
            Examples → beautiful, tall, intelligent, red, five
        </div>

        <h4>6. Adverb</h4>
        <p>
            An adverb modifies a verb, adjective or another adverb.
            It often tells us how, when, where or to what extent
            something happens.
        </p>

        <div class="formula-box">
            Examples → quickly, slowly, very, yesterday, here
        </div>

        <h4>7. Preposition</h4>
        <p>
            A preposition shows the relationship between a noun or
            pronoun and another word in a sentence.
        </p>

        <div class="formula-box">
            Examples → in, on, at, under, over, between, beside
        </div>

        <h4>8. Conjunction</h4>
        <p>
            A conjunction joins words, phrases or clauses.
        </p>

        <div class="formula-box">
            Examples → and, but, or, because, although, if
        </div>

        <h4>9. Interjection</h4>
        <p>
            An interjection is a word or short expression that shows
            sudden emotion or feeling.
        </p>

        <div class="formula-box">
            Examples → Wow!, Oh!, Hurrah!, Alas!, Ouch!
        </div>

        <h4>10. Example of All Parts of Speech</h4>
        <div class="formula-box">
            Wow! Rahul quickly completed his difficult homework
            in the classroom because he was hardworking.
        </div>

        <ul>
            <li><b>Wow</b> → Interjection</li>
            <li><b>Rahul</b> → Noun</li>
            <li><b>quickly</b> → Adverb</li>
            <li><b>completed</b> → Verb</li>
            <li><b>his</b> → Pronoun</li>
            <li><b>difficult</b> → Adjective</li>
            <li><b>in</b> → Preposition</li>
            <li><b>because</b> → Conjunction</li>
        </ul>

        <h4>11. Quick Identification Tips</h4>
        <ul>
            <li>Person, place, thing or idea → Noun</li>
            <li>Word used instead of noun → Pronoun</li>
            <li>Action or state → Verb</li>
            <li>Describes noun/pronoun → Adjective</li>
            <li>Describes verb/adjective/adverb → Adverb</li>
            <li>Shows relationship → Preposition</li>
            <li>Joins words or clauses → Conjunction</li>
            <li>Shows sudden emotion → Interjection</li>
        </ul>
    `,

    formulas: `
        <h3>🧠 Parts of Speech — Quick Revision</h3>

        <div class="formula-box">
            Noun → Name of person, place, animal, thing or idea
        </div>

        <div class="formula-box">
            Pronoun → Used in place of a noun
        </div>

        <div class="formula-box">
            Verb → Shows action or state
        </div>

        <div class="formula-box">
            Adjective → Describes a noun or pronoun
        </div>

        <div class="formula-box">
            Adverb → Modifies a verb, adjective or adverb
        </div>

        <div class="formula-box">
            Preposition → Shows relationship between words
        </div>

        <div class="formula-box">
            Conjunction → Joins words, phrases or clauses
        </div>

        <div class="formula-box">
            Interjection → Expresses sudden emotion
        </div>

        <div class="formula-box">
            Noun + Pronoun + Verb + Adjective + Adverb
            + Preposition + Conjunction + Interjection
        </div>
    `,

    questions: `
        <h3>❓ Important Questions</h3>

        <div class="question-box">
            <b>Q1.</b> What are parts of speech?
        </div>

        <div class="question-box">
            <b>Q2.</b> Name the eight main parts of speech.
        </div>

        <div class="question-box">
            <b>Q3.</b> What is a noun? Give five examples.
        </div>

        <div class="question-box">
            <b>Q4.</b> What is a pronoun? Why is it used?
        </div>

        <div class="question-box">
            <b>Q5.</b> What is a verb? Give suitable examples.
        </div>

        <div class="question-box">
            <b>Q6.</b> Differentiate between an adjective and an adverb.
        </div>

        <div class="question-box">
            <b>Q7.</b> What is a preposition? Give five examples.
        </div>

        <div class="question-box">
            <b>Q8.</b> What is a conjunction? Give suitable examples.
        </div>

        <div class="question-box">
            <b>Q9.</b> What is an interjection? Give five examples.
        </div>

        <div class="question-box">
            <b>Q10.</b> Identify the parts of speech in a given sentence.
        </div>
    `
},

"History": {

    notes: `
        <h3>📚 History — Complete Notes</h3>

        <h4>1. What is History?</h4>
        <p>
            History is the study of past events, people, societies,
            cultures and civilizations. It helps us understand how
            the present world developed.
        </p>

        <h4>2. Sources of History</h4>
        <p>Historians use different sources to study the past.</p>

        <div class="formula-box">
            • Archaeological Sources → Buildings, coins, tools, pottery<br>
            • Literary Sources → Books, manuscripts, inscriptions<br>
            • Oral Sources → Stories, songs and traditions<br>
            • Official Records → Government documents and reports
        </div>

        <h4>3. Archaeological Sources</h4>
        <p>
            Archaeological sources are physical remains of the past.
            They provide information about ancient societies and their
            way of life.
        </p>

        <div class="formula-box">
            Examples: Coins, monuments, weapons, pottery, sculptures
            and ancient buildings.
        </div>

        <h4>4. Literary Sources</h4>
        <p>
            Literary sources include written records such as religious
            texts, historical books, letters, manuscripts and official
            documents.
        </p>

        <h4>5. Ancient Civilizations</h4>
        <p>
            Early civilizations developed near rivers because rivers
            provided water, fertile land and opportunities for trade
            and transportation.
        </p>

        <div class="formula-box">
            Important River Valley Civilizations:
            <br>
            • Indus Valley Civilization → Indus River region<br>
            • Egyptian Civilization → Nile River<br>
            • Mesopotamian Civilization → Tigris and Euphrates
        </div>

        <h4>6. Indus Valley Civilization</h4>
        <p>
            The Indus Valley Civilization was one of the earliest urban
            civilizations of the Indian subcontinent. Major cities
            included Harappa and Mohenjo-daro.
        </p>

        <div class="formula-box">
            Main Features:
            <br>
            • Planned cities<br>
            • Proper drainage system<br>
            • Brick houses<br>
            • Trade and agriculture<br>
            • Craft production
        </div>

        <h4>7. Medieval India</h4>
        <p>
            Medieval Indian history includes the rise of different
            kingdoms, empires, cultures and traditions. This period
            saw developments in architecture, literature, art and trade.
        </p>

        <h4>8. Modern India</h4>
        <p>
            Modern Indian history includes the growth of British rule,
            the Indian freedom movement and India's independence.
        </p>

        <h4>9. Indian Freedom Movement</h4>
        <p>
            The Indian freedom movement involved many leaders,
            organizations and movements that worked against British
            colonial rule.
        </p>

        <div class="formula-box">
            Important Movements:
            <br>
            • Non-Cooperation Movement<br>
            • Civil Disobedience Movement<br>
            • Quit India Movement
        </div>

        <h4>10. Importance of Studying History</h4>
        <ul>
            <li>Helps us understand our past.</li>
            <li>Explains the development of societies.</li>
            <li>Helps us learn from past experiences.</li>
            <li>Develops knowledge about cultures and traditions.</li>
            <li>Helps us understand the present world.</li>
        </ul>
    `,

    formulas: `
        <h3>🧠 Important History Points</h3>

        <div class="formula-box">
            History → Study of the past
        </div>

        <div class="formula-box">
            Archaeological Sources → Coins + Buildings + Tools + Pottery
        </div>

        <div class="formula-box">
            Literary Sources → Books + Manuscripts + Letters + Records
        </div>

        <div class="formula-box">
            River Valley Civilizations → Water + Fertile Land + Trade
        </div>

        <div class="formula-box">
            Indus Valley Civilization → Harappa + Mohenjo-daro
        </div>

        <div class="formula-box">
            Freedom Movement → Struggle against British colonial rule
        </div>

        <div class="formula-box">
            Important Movements → Non-Cooperation + Civil Disobedience
            + Quit India
        </div>
    `,

    questions: `
        <h3>❓ Important Questions</h3>

        <div class="question-box">
            <b>Q1.</b> What is History?
        </div>

        <div class="question-box">
            <b>Q2.</b> What are the main sources of History?
        </div>

        <div class="question-box">
            <b>Q3.</b> What are archaeological sources? Give examples.
        </div>

        <div class="question-box">
            <b>Q4.</b> What are literary sources?
        </div>

        <div class="question-box">
            <b>Q5.</b> Why did early civilizations develop near rivers?
        </div>

        <div class="question-box">
            <b>Q6.</b> Write the main features of the Indus Valley Civilization.
        </div>

        <div class="question-box">
            <b>Q7.</b> Name some important cities of the Indus Valley Civilization.
        </div>

        <div class="question-box">
            <b>Q8.</b> What was the Indian freedom movement?
        </div>

        <div class="question-box">
            <b>Q9.</b> Name three important movements of the Indian freedom struggle.
        </div>

        <div class="question-box">
            <b>Q10.</b> Why is the study of History important?
        </div>
    `
},

"Geography": {

    notes: `
        <h3>🌍 Geography — Complete Notes</h3>

        <h4>1. What is Geography?</h4>
        <p>
            Geography is the study of the Earth, its physical features,
            people, places, climate, resources and the relationship
            between humans and their environment.
        </p>

        <h4>2. The Earth</h4>
        <p>
            Earth is the third planet from the Sun. It has land, water
            and an atmosphere that supports life.
        </p>

        <div class="formula-box">
            Major Components of Earth:
            <br>
            • Land<br>
            • Water<br>
            • Air<br>
            • Living organisms
        </div>

        <h4>3. Continents</h4>
        <p>
            A continent is a large continuous landmass. There are
            seven major continents on Earth.
        </p>

        <div class="formula-box">
            7 Continents:
            <br>
            Asia • Africa • Europe • North America • South America
            • Australia • Antarctica
        </div>

        <h4>4. Oceans</h4>
        <p>
            Oceans are large bodies of salt water covering most of
            the Earth's surface.
        </p>

        <div class="formula-box">
            5 Major Oceans:
            <br>
            Pacific • Atlantic • Indian • Southern • Arctic
        </div>

        <h4>5. Landforms</h4>
        <p>
            Landforms are natural features found on the Earth's surface.
            They are mainly formed by internal and external forces.
        </p>

        <div class="formula-box">
            Major Landforms:
            <br>
            • Mountains<br>
            • Plateaus<br>
            • Plains
        </div>

        <h4>6. Mountains</h4>
        <p>
            Mountains are very high areas of land with steep slopes.
            They are important sources of rivers and forests.
        </p>

        <h4>7. Plateaus</h4>
        <p>
            A plateau is a raised area of land with a relatively flat
            top. Plateaus are often rich in minerals.
        </p>

        <h4>8. Plains</h4>
        <p>
            Plains are broad areas of relatively flat land. They are
            generally suitable for agriculture and settlement.
        </p>

        <h4>9. Climate and Weather</h4>
        <p>
            Weather is the short-term condition of the atmosphere,
            while climate is the average weather condition of a place
            over a long period.
        </p>

        <div class="formula-box">
            Weather → Short-term atmospheric condition<br>
            Climate → Long-term average weather pattern
        </div>

        <h4>10. Natural Resources</h4>
        <p>
            Natural resources are materials and substances obtained
            from nature and used by humans.
        </p>

        <div class="formula-box">
            Examples:
            <br>
            Water • Soil • Forests • Minerals • Sunlight
        </div>

        <h4>11. Renewable Resources</h4>
        <p>
            Renewable resources can be naturally replaced or renewed
            within a reasonable period.
        </p>

        <div class="formula-box">
            Examples → Solar energy, wind energy, water and forests
        </div>

        <h4>12. Non-Renewable Resources</h4>
        <p>
            Non-renewable resources are limited and take a very long
            time to form.
        </p>

        <div class="formula-box">
            Examples → Coal, petroleum and natural gas
        </div>

        <h4>13. Population</h4>
        <p>
            Population means the total number of people living in
            a particular area at a given time.
        </p>

        <h4>14. Importance of Geography</h4>
        <ul>
            <li>Helps us understand the Earth.</li>
            <li>Explains climate and physical features.</li>
            <li>Helps us understand natural resources.</li>
            <li>Explains the relationship between humans and nature.</li>
            <li>Helps in understanding different places and cultures.</li>
        </ul>
    `,

    formulas: `
        <h3>🧠 Important Geography Points</h3>

        <div class="formula-box">
            Geography → Study of Earth + People + Places + Environment
        </div>

        <div class="formula-box">
            Continents → 7
        </div>

        <div class="formula-box">
            Oceans → 5 Major Oceans
        </div>

        <div class="formula-box">
            Major Landforms → Mountains + Plateaus + Plains
        </div>

        <div class="formula-box">
            Weather → Short-term
        </div>

        <div class="formula-box">
            Climate → Long-term
        </div>

        <div class="formula-box">
            Renewable Resources → Can be naturally renewed
        </div>

        <div class="formula-box">
            Non-Renewable Resources → Limited + Take very long to form
        </div>
    `,

    questions: `
        <h3>❓ Important Questions</h3>

        <div class="question-box">
            <b>Q1.</b> What is Geography?
        </div>

        <div class="question-box">
            <b>Q2.</b> Name the seven continents.
        </div>

        <div class="question-box">
            <b>Q3.</b> Name the five major oceans.
        </div>

        <div class="question-box">
            <b>Q4.</b> What are the major landforms of the Earth?
        </div>

        <div class="question-box">
            <b>Q5.</b> What is the difference between weather and climate?
        </div>

        <div class="question-box">
            <b>Q6.</b> What are natural resources?
        </div>

        <div class="question-box">
            <b>Q7.</b> What are renewable resources? Give examples.
        </div>

        <div class="question-box">
            <b>Q8.</b> What are non-renewable resources? Give examples.
        </div>

        <div class="question-box">
            <b>Q9.</b> What is a plateau?
        </div>

        <div class="question-box">
            <b>Q10.</b> Why is Geography important?
        </div>
    `
},

"Political Science": {

    notes: `
        <h3>🏛️ Political Science — Complete Notes</h3>

        <h4>1. What is Political Science?</h4>
        <p>
            Political Science is the study of government, political
            institutions, power, rights, duties and the relationship
            between citizens and the state.
        </p>

        <h4>2. State</h4>
        <p>
            A state is a political organization that has a population,
            territory, government and sovereignty.
        </p>

        <div class="formula-box">
            Main Elements of State:
            <br>
            • Population<br>
            • Territory<br>
            • Government<br>
            • Sovereignty
        </div>

        <h4>3. Government</h4>
        <p>
            Government is the system or group of people through which
            a country is governed and laws are made and implemented.
        </p>

        <h4>4. Democracy</h4>
        <p>
            Democracy is a form of government in which people choose
            their representatives through elections.
        </p>

        <div class="formula-box">
            Democracy → Government by the people
        </div>

        <h4>5. Features of Democracy</h4>
        <ul>
            <li>People elect their representatives.</li>
            <li>Elections are held at regular intervals.</li>
            <li>Citizens have political rights.</li>
            <li>Rule of law is followed.</li>
            <li>Government is accountable to the people.</li>
        </ul>

        <h4>6. Constitution</h4>
        <p>
            A Constitution is the supreme set of rules and principles
            according to which a country is governed.
        </p>

        <h4>7. Indian Constitution</h4>
        <p>
            The Constitution of India provides the framework for the
            government and protects the rights of citizens. It describes
            the powers and functions of different institutions.
        </p>

        <h4>8. Fundamental Rights</h4>
        <p>
            Fundamental Rights are basic rights guaranteed by the
            Constitution to citizens.
        </p>

        <div class="formula-box">
            Important Fundamental Rights:
            <br>
            • Right to Equality<br>
            • Right to Freedom<br>
            • Right against Exploitation<br>
            • Right to Freedom of Religion<br>
            • Cultural and Educational Rights<br>
            • Right to Constitutional Remedies
        </div>

        <h4>9. Fundamental Duties</h4>
        <p>
            Fundamental Duties are responsibilities that citizens are
            expected to follow for the good of the country and society.
        </p>

        <div class="formula-box">
            Examples:
            <br>
            • Respect the Constitution<br>
            • Respect national symbols<br>
            • Protect the environment<br>
            • Develop scientific temper
        </div>

        <h4>10. Legislature</h4>
        <p>
            The Legislature makes laws for the country. At the Union
            level in India, Parliament consists of the President,
            Lok Sabha and Rajya Sabha.
        </p>

        <h4>11. Executive</h4>
        <p>
            The Executive implements and administers laws and runs the
            day-to-day administration of the country.
        </p>

        <h4>12. Judiciary</h4>
        <p>
            The Judiciary interprets laws, settles disputes and protects
            constitutional rights.
        </p>

        <div class="formula-box">
            Three Main Organs:
            <br>
            Legislature → Makes laws<br>
            Executive → Implements laws<br>
            Judiciary → Interprets laws
        </div>

        <h4>13. Elections</h4>
        <p>
            Elections allow citizens to choose their representatives.
            Free and fair elections are an important part of democracy.
        </p>

        <h4>14. Importance of Political Science</h4>
        <ul>
            <li>Helps us understand government.</li>
            <li>Explains citizens' rights and duties.</li>
            <li>Develops political awareness.</li>
            <li>Helps us understand democratic institutions.</li>
            <li>Encourages responsible citizenship.</li>
        </ul>
    `,

    formulas: `
        <h3>🧠 Important Political Science Points</h3>

        <div class="formula-box">
            State → Population + Territory + Government + Sovereignty
        </div>

        <div class="formula-box">
            Democracy → Government by the people
        </div>

        <div class="formula-box">
            Constitution → Supreme rules and principles of a country
        </div>

        <div class="formula-box">
            Legislature → Makes laws
        </div>

        <div class="formula-box">
            Executive → Implements laws
        </div>

        <div class="formula-box">
            Judiciary → Interprets laws + Settles disputes
        </div>

        <div class="formula-box">
            Democracy → Elections + Rights + Rule of Law + Accountability
        </div>
    `,

    questions: `
        <h3>❓ Important Questions</h3>

        <div class="question-box">
            <b>Q1.</b> What is Political Science?
        </div>

        <div class="question-box">
            <b>Q2.</b> What is a state? Name its main elements.
        </div>

        <div class="question-box">
            <b>Q3.</b> What is government?
        </div>

        <div class="question-box">
            <b>Q4.</b> What is democracy?
        </div>

        <div class="question-box">
            <b>Q5.</b> Write any five features of democracy.
        </div>

        <div class="question-box">
            <b>Q6.</b> What is a Constitution?
        </div>

        <div class="question-box">
            <b>Q7.</b> Name the Fundamental Rights guaranteed by the
            Indian Constitution.
        </div>

        <div class="question-box">
            <b>Q8.</b> What are Fundamental Duties?
        </div>

        <div class="question-box">
            <b>Q9.</b> Explain the three main organs of government.
        </div>

        <div class="question-box">
            <b>Q10.</b> Why are free and fair elections important in
            a democracy?
        </div>
    `
},

"Economics": {

    notes: `
        <h3>💰 Economics — Complete Notes</h3>

        <h4>1. What is Economics?</h4>
        <p>
            Economics is the study of how people use limited resources
            to satisfy their wants and needs.
        </p>

        <h4>2. Needs and Wants</h4>
        <p>
            Needs are things necessary for survival and basic living,
            while wants are things people desire for comfort or enjoyment.
        </p>

        <div class="formula-box">
            Needs → Food, Water, Shelter, Clothing<br>
            Wants → Entertainment, Luxury goods, Extra comforts
        </div>

        <h4>3. Scarcity</h4>
        <p>
            Scarcity means that resources are limited while human wants
            are unlimited. Therefore, people have to make choices.
        </p>

        <h4>4. Factors of Production</h4>
        <p>
            Factors of production are the resources used to produce
            goods and services.
        </p>

        <div class="formula-box">
            Four Factors:
            <br>
            • Land → Natural resources<br>
            • Labour → Human effort<br>
            • Capital → Tools, machines and buildings<br>
            • Entrepreneurship → Organising and managing production
        </div>

        <h4>5. Goods and Services</h4>
        <p>
            Goods are physical products that satisfy human wants.
            Services are activities performed to satisfy people's needs.
        </p>

        <div class="formula-box">
            Goods → Books, Clothes, Food<br>
            Services → Education, Transport, Healthcare
        </div>

        <h4>6. Production</h4>
        <p>
            Production is the process of creating goods and services
            to satisfy human wants.
        </p>

        <h4>7. Consumption</h4>
        <p>
            Consumption means using goods and services to satisfy
            human needs and wants.
        </p>

        <h4>8. Distribution</h4>
        <p>
            Distribution refers to the process through which income,
            goods and services are distributed among people.
        </p>

        <h4>9. Market</h4>
        <p>
            A market is a system where buyers and sellers interact
            to exchange goods and services.
        </p>

        <h4>10. Demand</h4>
        <p>
            Demand refers to the quantity of a good or service that
            consumers are willing and able to buy at a given price.
        </p>

        <h4>11. Supply</h4>
        <p>
            Supply refers to the quantity of a good or service that
            producers are willing and able to sell at a given price.
        </p>

        <div class="formula-box">
            Demand → Consumer side<br>
            Supply → Producer side
        </div>

        <h4>12. Money</h4>
        <p>
            Money is anything generally accepted as a means of payment
            for goods and services.
        </p>

        <h4>13. Saving</h4>
        <p>
            Saving means keeping a part of income aside instead of
            spending it immediately.
        </p>

        <div class="formula-box">
            Saving = Income − Consumption
        </div>

        <h4>14. Economic Development</h4>
        <p>
            Economic development refers to improvement in people's
            standard of living, income, education, health and
            employment opportunities.
        </p>

        <h4>15. Importance of Economics</h4>
        <ul>
            <li>Helps us understand how resources are used.</li>
            <li>Helps people make economic choices.</li>
            <li>Explains production and consumption.</li>
            <li>Helps understand markets and prices.</li>
            <li>Helps understand economic development.</li>
        </ul>
    `,

    formulas: `
        <h3>🧠 Important Economics Points</h3>

        <div class="formula-box">
            Economics → Limited Resources + Unlimited Wants
        </div>

        <div class="formula-box">
            Factors of Production → Land + Labour + Capital + Entrepreneurship
        </div>

        <div class="formula-box">
            Production → Creation of Goods and Services
        </div>

        <div class="formula-box">
            Consumption → Use of Goods and Services
        </div>

        <div class="formula-box">
            Demand → Quantity consumers are willing and able to buy
        </div>

        <div class="formula-box">
            Supply → Quantity producers are willing and able to sell
        </div>

        <div class="formula-box">
            Saving = Income − Consumption
        </div>

        <div class="formula-box">
            Market → Interaction between Buyers and Sellers
        </div>
    `,

    questions: `
        <h3>❓ Important Questions</h3>

        <div class="question-box">
            <b>Q1.</b> What is Economics?
        </div>

        <div class="question-box">
            <b>Q2.</b> What is the difference between needs and wants?
        </div>

        <div class="question-box">
            <b>Q3.</b> What is scarcity?
        </div>

        <div class="question-box">
            <b>Q4.</b> Name and explain the four factors of production.
        </div>

        <div class="question-box">
            <b>Q5.</b> What is the difference between goods and services?
        </div>

        <div class="question-box">
            <b>Q6.</b> What is production?
        </div>

        <div class="question-box">
            <b>Q7.</b> What is consumption?
        </div>

        <div class="question-box">
            <b>Q8.</b> What is demand and supply?
        </div>

        <div class="question-box">
            <b>Q9.</b> What is money?
        </div>

        <div class="question-box">
            <b>Q10.</b> What is economic development?
        </div>
    `
},

"Civics": {

    notes: `
        <h3>🏛️ Civics — Complete Notes</h3>

        <h4>1. What is Civics?</h4>
        <p>
            Civics is the study of citizens, their rights and duties,
            government, democracy and how people participate in society.
        </p>

        <h4>2. Citizen</h4>
        <p>
            A citizen is a legal member of a country who enjoys certain
            rights and performs certain duties towards the country.
        </p>

        <h4>3. Rights</h4>
        <p>
            Rights are the freedoms and protections that are guaranteed
            to people so that they can live with dignity and equality.
        </p>

        <div class="formula-box">
            Examples:
            <br>
            • Right to Equality<br>
            • Right to Freedom<br>
            • Right to Education<br>
            • Right to Freedom of Religion
        </div>

        <h4>4. Duties</h4>
        <p>
            Duties are responsibilities that citizens should perform
            for the welfare of society and the country.
        </p>

        <div class="formula-box">
            Examples:
            <br>
            • Respect the Constitution<br>
            • Respect national symbols<br>
            • Protect the environment<br>
            • Follow laws<br>
            • Promote harmony
        </div>

        <h4>5. Equality</h4>
        <p>
            Equality means that all people should be treated fairly and
            should have equal status and opportunities before the law.
        </p>

        <h4>6. Justice</h4>
        <p>
            Justice means fairness in society. It involves ensuring that
            people receive fair treatment and that their rights are
            protected.
        </p>

        <h4>7. Democracy and Participation</h4>
        <p>
            Democracy gives citizens the opportunity to participate in
            public affairs. Citizens can participate through elections,
            expressing opinions and taking part in community activities.
        </p>

        <h4>8. Local Government</h4>
        <p>
            Local government manages public services and local matters
            in villages, towns and cities.
        </p>

        <div class="formula-box">
            Rural Local Government → Panchayati Raj<br>
            Urban Local Government → Municipalities
        </div>

        <h4>9. Panchayati Raj</h4>
        <p>
            Panchayati Raj is the system of local self-government in
            rural areas. It allows people to participate in local
            decision-making.
        </p>

        <h4>10. Municipal Government</h4>
        <p>
            Municipal bodies manage urban areas and provide services
            such as sanitation, roads, water supply and waste management.
        </p>

        <h4>11. Rule of Law</h4>
        <p>
            Rule of law means that everyone is subject to the law and
            laws should be applied fairly.
        </p>

        <h4>12. Importance of Civics</h4>
        <ul>
            <li>Helps citizens understand their rights.</li>
            <li>Explains citizens' responsibilities.</li>
            <li>Develops democratic awareness.</li>
            <li>Encourages participation in society.</li>
            <li>Helps people understand government institutions.</li>
        </ul>
    `,

    formulas: `
        <h3>🧠 Important Civics Points</h3>

        <div class="formula-box">
            Citizen → Rights + Duties + Responsibilities
        </div>

        <div class="formula-box">
            Equality → Equal Status + Equal Opportunities
        </div>

        <div class="formula-box">
            Justice → Fairness + Protection of Rights
        </div>

        <div class="formula-box">
            Rural Local Government → Panchayati Raj
        </div>

        <div class="formula-box">
            Urban Local Government → Municipalities
        </div>

        <div class="formula-box">
            Rule of Law → Everyone is subject to the law
        </div>

        <div class="formula-box">
            Democracy → Citizen Participation + Elections
        </div>
    `,

    questions: `
        <h3>❓ Important Questions</h3>

        <div class="question-box">
            <b>Q1.</b> What is Civics?
        </div>

        <div class="question-box">
            <b>Q2.</b> Who is a citizen?
        </div>

        <div class="question-box">
            <b>Q3.</b> What are rights?
        </div>

        <div class="question-box">
            <b>Q4.</b> What are duties?
        </div>

        <div class="question-box">
            <b>Q5.</b> Explain the meaning of equality.
        </div>

        <div class="question-box">
            <b>Q6.</b> What is justice?
        </div>

        <div class="question-box">
            <b>Q7.</b> What is Panchayati Raj?
        </div>

        <div class="question-box">
            <b>Q8.</b> What is the role of municipal government?
        </div>

        <div class="question-box">
            <b>Q9.</b> What is meant by Rule of Law?
        </div>

        <div class="question-box">
            <b>Q10.</b> Why is Civics important for citizens?
        </div>
    `
},

"Important Dates": {

    notes: `
        <h3>📅 Important Dates — Complete Revision</h3>

        <h4>🇮🇳 Ancient & Medieval India</h4>

        <div class="formula-box">
            c. 2500 BCE → Mature phase of Indus Valley Civilization<br>
            c. 1500 BCE → Beginning of the Vedic period<br>
            563 BCE → Traditional date of birth of Gautama Buddha<br>
            599 BCE → Traditional date of birth of Mahavira<br>
            326 BCE → Alexander's invasion of north-western India<br>
            322 BCE → Beginning of Mauryan Empire under Chandragupta Maurya<br>
            261 BCE → Kalinga War during Ashoka's reign<br>
            c. 320 CE → Beginning of Gupta Empire under Chandragupta I<br>
            1206 → Beginning of Delhi Sultanate<br>
            1526 → First Battle of Panipat; Mughal rule began in India<br>
            1556 → Second Battle of Panipat<br>
            1600 → English East India Company established<br>
            1707 → Death of Aurangzeb
        </div>

        <h4>🇮🇳 British Rule & Revolt</h4>

        <div class="formula-box">
            1757 → Battle of Plassey<br>
            1764 → Battle of Buxar<br>
            1773 → Regulating Act<br>
            1793 → Permanent Settlement introduced<br>
            1799 → Fourth Anglo-Mysore War; Tipu Sultan died<br>
            1818 → End of the Third Anglo-Maratha War<br>
            1829 → Sati abolished by law<br>
            1853 → First railway in India began operating<br>
            1857 → Revolt of 1857<br>
            1858 → Government of India came directly under the British Crown
        </div>

        <h4>🇮🇳 Indian National Movement</h4>

        <div class="formula-box">
            1885 → Indian National Congress founded<br>
            1905 → Partition of Bengal<br>
            1906 → Muslim League founded<br>
            1907 → Surat Split of Congress<br>
            1909 → Indian Councils Act / Morley-Minto Reforms<br>
            1911 → Partition of Bengal annulled; capital shifted from Calcutta to Delhi<br>
            1915 → Mahatma Gandhi returned to India from South Africa<br>
            1916 → Lucknow Pact<br>
            1917 → Champaran Satyagraha<br>
            1918 → Kheda Satyagraha and Ahmedabad Mill Strike<br>
            1919 → Rowlatt Act<br>
            13 April 1919 → Jallianwala Bagh massacre<br>
            1920 → Non-Cooperation Movement began<br>
            1922 → Chauri Chaura incident; Non-Cooperation Movement withdrawn<br>
            1927 → Simon Commission appointed<br>
            1928 → Simon Commission arrived in India<br>
            1929 → Lahore Session of Congress; Purna Swaraj declared as goal<br>
            26 January 1930 → First Independence Day observed<br>
            1930 → Civil Disobedience Movement began; Dandi March<br>
            1931 → Gandhi-Irwin Pact; Second Round Table Conference<br>
            1932 → Poona Pact<br>
            1935 → Government of India Act<br>
            1937 → Provincial elections held under the Government of India Act, 1935<br>
            1939 → Second World War began<br>
            1940 → Lahore Resolution<br>
            1942 → Quit India Movement launched<br>
            1945 → Second World War ended<br>
            1946 → Cabinet Mission came to India<br>
            1947 → Indian Independence Act passed<br>
            15 August 1947 → India became independent
        </div>

        <h4>🏛️ Constitution & Republic of India</h4>

        <div class="formula-box">
            9 December 1946 → Constituent Assembly met for the first time<br>
            15 August 1947 → India became independent<br>
            26 November 1949 → Constitution of India adopted<br>
            24 January 1950 → Constituent Assembly signed the Constitution<br>
            26 January 1950 → Constitution came into force; India became a Republic<br>
            1951–52 → First general elections in independent India<br>
            1956 → States Reorganisation Act<br>
            1976 → 42nd Constitutional Amendment added Fundamental Duties
        </div>

        <h4>🌍 Major World History Dates</h4>

        <div class="formula-box">
            1776 → American Declaration of Independence<br>
            1789 → French Revolution began<br>
            1799 → Napoleon came to power in France<br>
            1815 → Battle of Waterloo<br>
            1848 → Revolutions spread across Europe<br>
            1861 → Unification of Italy began / American Civil War began<br>
            1871 → Unification of Germany completed<br>
            1914 → First World War began<br>
            1917 → Russian Revolution<br>
            1918 → First World War ended<br>
            1919 → Treaty of Versailles signed<br>
            1929 → Great Depression began<br>
            1933 → Hitler became Chancellor of Germany<br>
            1939 → Second World War began<br>
            1945 → Second World War ended; United Nations established<br>
            1947 → India and Pakistan became independent<br>
            1949 → People's Republic of China established
        </div>

        <h4>🌍 Important Geography Dates & Events</h4>

        <div class="formula-box">
            22 April → Earth Day<br>
            5 June → World Environment Day<br>
            11 July → World Population Day<br>
            16 September → World Ozone Day<br>
            22 March → World Water Day<br>
            21 March → International Day of Forests<br>
            23 March → World Meteorological Day
        </div>

        <h4>🏛️ Important Civics & Democracy Dates</h4>

        <div class="formula-box">
            26 November → Constitution Day of India<br>
            26 January → Republic Day<br>
            15 August → Independence Day<br>
            25 January → National Voters' Day<br>
            2 October → Gandhi Jayanti / International Day of Non-Violence
        </div>

        <h4>💰 Important Economics & Development Dates</h4>

        <div class="formula-box">
            8 March → International Women's Day<br>
            1 May → International Labour Day<br>
            15 March → World Consumer Rights Day<br>
            16 October → World Food Day<br>
            24 October → United Nations Day
        </div>

        <h4>⭐ Must Remember for Exams</h4>

        <div class="formula-box">
            1757 → Battle of Plassey<br>
            1857 → Revolt of 1857<br>
            1885 → Indian National Congress founded<br>
            1905 → Partition of Bengal<br>
            1919 → Jallianwala Bagh massacre<br>
            1920 → Non-Cooperation Movement<br>
            1930 → Civil Disobedience Movement<br>
            1942 → Quit India Movement<br>
            1947 → Independence<br>
            1949 → Constitution adopted<br>
            1950 → Constitution came into force
        </div>
    `,

    formulas: `
        <h3>🧠 Important Dates — Quick Revision</h3>

        <div class="formula-box">
            1757 → Battle of Plassey
        </div>

        <div class="formula-box">
            1857 → Revolt of 1857
        </div>

        <div class="formula-box">
            1885 → Indian National Congress founded
        </div>

        <div class="formula-box">
            1905 → Partition of Bengal
        </div>

        <div class="formula-box">
            1919 → Jallianwala Bagh massacre
        </div>

        <div class="formula-box">
            1920 → Non-Cooperation Movement
        </div>

        <div class="formula-box">
            1930 → Civil Disobedience Movement + Dandi March
        </div>

        <div class="formula-box">
            1942 → Quit India Movement
        </div>

        <div class="formula-box">
            15 August 1947 → Independence
        </div>

        <div class="formula-box">
            26 November 1949 → Constitution adopted
        </div>

        <div class="formula-box">
            26 January 1950 → Constitution came into force
        </div>

        <div class="formula-box">
            22 March → World Water Day
        </div>

        <div class="formula-box">
            22 April → Earth Day
        </div>

        <div class="formula-box">
            5 June → World Environment Day
        </div>

        <div class="formula-box">
            25 January → National Voters' Day
        </div>
    `,

    questions: `
        <h3>❓ Important Questions</h3>

        <div class="question-box">
            <b>Q1.</b> When was the Battle of Plassey fought?
        </div>

        <div class="question-box">
            <b>Q2.</b> When did the Revolt of 1857 take place?
        </div>

        <div class="question-box">
            <b>Q3.</b> When was the Indian National Congress founded?
        </div>

        <div class="question-box">
            <b>Q4.</b> What happened in 1905?
        </div>

        <div class="question-box">
            <b>Q5.</b> When did the Jallianwala Bagh massacre take place?
        </div>

        <div class="question-box">
            <b>Q6.</b> When did the Non-Cooperation Movement begin?
        </div>

        <div class="question-box">
            <b>Q7.</b> When did the Civil Disobedience Movement begin?
        </div>

        <div class="question-box">
            <b>Q8.</b> When was the Quit India Movement launched?
        </div>

        <div class="question-box">
            <b>Q9.</b> When did India become independent?
        </div>

        <div class="question-box">
            <b>Q10.</b> When was the Constitution of India adopted?
        </div>

        <div class="question-box">
            <b>Q11.</b> When did the Constitution of India come into force?
        </div>

        <div class="question-box">
            <b>Q12.</b> When did the French Revolution begin?
        </div>

        <div class="question-box">
            <b>Q13.</b> When did the First World War begin and end?
        </div>

        <div class="question-box">
            <b>Q14.</b> When did the Second World War begin and end?
        </div>

        <div class="question-box">
            <b>Q15.</b> When is World Environment Day celebrated?
        </div>

        <div class="question-box">
            <b>Q16.</b> When is World Water Day celebrated?
        </div>

        <div class="question-box">
            <b>Q17.</b> When is National Voters' Day celebrated in India?
        </div>

        <div class="question-box">
            <b>Q18.</b> Why are important dates useful in Social Science?
        </div>
    `
},

"Map Work": {

    notes: `
        <h3>🗺️ Map Work — Complete Notes</h3>

        <h4>1. What is Map Work?</h4>
        <p>
            Map work is the study and practice of locating, identifying
            and marking important geographical and historical places
            on maps.
        </p>

        <h4>2. Types of Maps</h4>

        <div class="formula-box">
            • Political Map → Shows states, countries and boundaries<br>
            • Physical Map → Shows mountains, plateaus, plains and rivers<br>
            • Thematic Map → Shows specific information such as rainfall,
              population, crops or minerals
        </div>

        <h4>3. Important Map Symbols</h4>

        <div class="formula-box">
            ● → City / Important Place<br>
            ▲ → Mountain / Peak<br>
            ■ → Mineral / Industrial Location<br>
            ━ → River / Road / Boundary
        </div>

        <h4>4. Important Physical Features of India</h4>

        <div class="formula-box">
            🏔️ Himalayas<br>
            • Northern Plains<br>
            • Peninsular Plateau<br>
            • Thar Desert<br>
            • Coastal Plains<br>
            • Western Ghats<br>
            • Eastern Ghats<br>
            • Deccan Plateau
        </div>

        <h4>5. Major Mountain Ranges</h4>

        <div class="formula-box">
            • Himalayas → Northern India<br>
            • Karakoram Range → Northern region<br>
            • Aravalli Range → Rajasthan region<br>
            • Vindhya Range → Central India<br>
            • Satpura Range → Central India<br>
            • Western Ghats → Western coast<br>
            • Eastern Ghats → Eastern coast
        </div>

        <h4>6. Major Rivers of India</h4>

        <div class="formula-box">
            🌊 Northern Rivers:
            <br>
            • Indus<br>
            • Ganga<br>
            • Yamuna<br>
            • Brahmaputra<br>
            • Sutlej<br>
            • Beas<br>
            • Ravi<br>
            • Chenab<br>
            • Jhelum
            <br><br>
            🌊 Peninsular Rivers:
            <br>
            • Narmada<br>
            • Tapi<br>
            • Godavari<br>
            • Krishna<br>
            • Mahanadi<br>
            • Kaveri
        </div>

        <h4>7. Important States and Capitals</h4>

        <div class="formula-box">
            Uttar Pradesh → Lucknow<br>
            Rajasthan → Jaipur<br>
            Madhya Pradesh → Bhopal<br>
            Maharashtra → Mumbai<br>
            Gujarat → Gandhinagar<br>
            Bihar → Patna<br>
            West Bengal → Kolkata<br>
            Odisha → Bhubaneswar<br>
            Karnataka → Bengaluru<br>
            Tamil Nadu → Chennai<br>
            Kerala → Thiruvananthapuram<br>
            Telangana → Hyderabad<br>
            Assam → Dispur
        </div>

        <h4>8. Important Mineral Regions</h4>

        <div class="formula-box">
            Coal → Jharkhand, Odisha, Chhattisgarh, West Bengal<br>
            Iron Ore → Odisha, Chhattisgarh, Karnataka, Jharkhand<br>
            Manganese → Madhya Pradesh, Maharashtra, Odisha<br>
            Bauxite → Odisha, Gujarat, Jharkhand<br>
            Mica → Jharkhand, Andhra Pradesh, Rajasthan
        </div>

        <h4>9. Important Agricultural Regions</h4>

        <div class="formula-box">
            Rice → West Bengal, Uttar Pradesh, Punjab, Andhra Pradesh,
            Tamil Nadu, Odisha<br><br>

            Wheat → Uttar Pradesh, Punjab, Haryana, Madhya Pradesh,
            Rajasthan<br><br>

            Cotton → Gujarat, Maharashtra, Telangana, Karnataka<br><br>

            Tea → Assam, West Bengal, Tamil Nadu, Kerala<br><br>

            Coffee → Karnataka, Kerala, Tamil Nadu
        </div>

        <h4>10. Important Historical Places for Map Work</h4>

        <div class="formula-box">
            Delhi → Important historical and political centre<br>
            Agra → Taj Mahal and Mughal history<br>
            Jaipur → Major historical city of Rajasthan<br>
            Lucknow → Centre of the Revolt of 1857<br>
            Amritsar → Jallianwala Bagh<br>
            Ahmedabad → Important centre of India's freedom movement<br>
            Dandi → Associated with the Salt March<br>
            Mumbai → Important centre during the freedom movement
        </div>

        <h4>11. Map Work Tips</h4>

        <ul>
            <li>Always use a sharp pencil for marking.</li>
            <li>Read the question carefully before marking.</li>
            <li>Mark places as accurately as possible.</li>
            <li>Write labels neatly and avoid overcrowding.</li>
            <li>Use arrows when there is not enough space.</li>
            <li>Do not overwrite or make the map messy.</li>
            <li>Practise important locations on an outline map.</li>
        </ul>

        <h4>12. Important Maps to Practise</h4>

        <div class="formula-box">
            🗺️ Political Map of India<br>
            🏔️ Physical Features of India<br>
            🌊 Major Rivers of India<br>
            ⛰️ Mountain Ranges<br>
            ⛏️ Mineral Resources<br>
            🌾 Agricultural Regions<br>
            🌍 World Map — Important Countries
        </div>

        <h4>13. World Map — Important Locations</h4>

        <div class="formula-box">
            Asia → India, China, Japan<br>
            Europe → United Kingdom, France, Germany<br>
            North America → USA, Canada<br>
            South America → Brazil<br>
            Africa → Egypt, South Africa<br>
            Australia → Australia<br>
            West Asia → Saudi Arabia, Iran, Iraq
        </div>

        <h4>14. Final Revision</h4>

        <p>
            For map work, students should practise locating important
            rivers, mountains, states, cities, minerals, agricultural
            regions and historical places on blank maps.
        </p>
    `,

    formulas: `
        <h3>🧠 Map Work — Quick Revision</h3>

        <div class="formula-box">
            Political Map → States + Countries + Boundaries
        </div>

        <div class="formula-box">
            Physical Map → Mountains + Rivers + Plains + Plateaus
        </div>

        <div class="formula-box">
            Major Mountain Ranges → Himalayas + Aravalli + Vindhya
            + Satpura + Western Ghats + Eastern Ghats
        </div>

        <div class="formula-box">
            Major Rivers → Ganga + Yamuna + Brahmaputra + Indus
            + Narmada + Tapi + Godavari + Krishna + Kaveri
        </div>

        <div class="formula-box">
            Important Minerals → Coal + Iron Ore + Manganese
            + Bauxite + Mica
        </div>

        <div class="formula-box">
            Important Crops → Rice + Wheat + Cotton + Tea + Coffee
        </div>

        <div class="formula-box">
            Map Rule → Accurate Marking + Neat Labels + Correct Symbols
        </div>
    `,

    questions: `
        <h3>❓ Important Map Work Questions</h3>

        <div class="question-box">
            <b>Q1.</b> Locate and label the Himalayas on the map of India.
        </div>

        <div class="question-box">
            <b>Q2.</b> Locate the Ganga, Yamuna and Brahmaputra rivers.
        </div>

        <div class="question-box">
            <b>Q3.</b> Locate the Narmada, Tapi, Godavari, Krishna and
            Kaveri rivers.
        </div>

        <div class="question-box">
            <b>Q4.</b> Locate the Aravalli, Vindhya and Satpura ranges.
        </div>

        <div class="question-box">
            <b>Q5.</b> Locate the Western Ghats and Eastern Ghats.
        </div>

        <div class="question-box">
            <b>Q6.</b> Mark major coal-producing regions of India.
        </div>

        <div class="question-box">
            <b>Q7.</b> Mark important iron ore producing regions.
        </div>

        <div class="question-box">
            <b>Q8.</b> Locate important cotton, wheat and rice producing regions.
        </div>

        <div class="question-box">
            <b>Q9.</b> Locate important historical places such as
            Amritsar, Dandi, Agra and Delhi.
        </div>

        <div class="question-box">
            <b>Q10.</b> On a world map, locate India, China, Japan,
            USA, Brazil, Australia and South Africa.
        </div>
    `
},

"Motion in a Plane": {

    notes: `
        <h3>📖 Motion in a Plane — Complete Notes</h3>

        <h4>1. Scalar Quantity</h4>
        <p>
            A scalar quantity has only magnitude and no direction.
            Examples are distance, speed, mass and time.
        </p>

        <h4>2. Vector Quantity</h4>
        <p>
            A vector quantity has both magnitude and direction.
            Examples are displacement, velocity, acceleration and force.
        </p>

        <h4>3. Vector Addition</h4>
        <p>
            Two or more vectors can be added using the triangle law
            or parallelogram law of vector addition.
        </p>

        <h4>4. Components of a Vector</h4>
        <p>
            A vector can be resolved into components along the
            x-axis and y-axis.
        </p>

        <h4>5. Projectile Motion</h4>
        <p>
            The motion of an object projected into the air under
            the influence of gravity is called projectile motion.
        </p>

        <h4>6. Uniform Circular Motion</h4>
        <p>
            When an object moves in a circular path with constant
            speed, it is called uniform circular motion.
        </p>
    `,

    formulas: `
        <h3>🧮 Important Formulas</h3>

        <div class="formula-box">
            Ax = A cos θ
        </div>

        <div class="formula-box">
            Ay = A sin θ
        </div>

        <div class="formula-box">
            Resultant A = √(Ax² + Ay²)
        </div>

        <div class="formula-box">
            Time of Flight = 2u sin θ / g
        </div>

        <div class="formula-box">
            Maximum Height = u² sin² θ / 2g
        </div>

        <div class="formula-box">
            Range = u² sin 2θ / g
        </div>

        <div class="formula-box">
            Centripetal Acceleration = v² / r
        </div>

        <div class="formula-box">
            Centripetal Force = mv² / r
        </div>
    `,

    questions: `
        <h3>❓ Important Questions</h3>

        <div class="question-box">
            <b>Q1.</b> What is a scalar quantity?
        </div>

        <div class="question-box">
            <b>Q2.</b> What is a vector quantity?
        </div>

        <div class="question-box">
            <b>Q3.</b> Explain vector addition.
        </div>

        <div class="question-box">
            <b>Q4.</b> What is projectile motion?
        </div>

        <div class="question-box">
            <b>Q5.</b> Write the formula for the time of flight
            of a projectile.
        </div>

        <div class="question-box">
            <b>Q6.</b> Write the formula for maximum height.
        </div>

        <div class="question-box">
            <b>Q7.</b> What is uniform circular motion?
        </div>
    `
},

    "Units and Measurements": {

    notes: `
        <h3>📖 Units and Measurements — Notes</h3>

        <h4>1. Physical Quantity</h4>
        <p>
            A physical quantity is a quantity that can be measured
            and expressed using a number and a unit.
        </p>

        <h4>2. SI Units</h4>
        <p>
            The International System of Units (SI) is the standard
            system of measurement used in science.
        </p>

        <h4>3. Fundamental Quantities</h4>
        <p>
            The seven SI base quantities are length, mass, time,
            electric current, temperature, amount of substance,
            and luminous intensity.
        </p>

        <h4>4. Derived Quantities</h4>
        <p>
            Derived quantities are obtained from fundamental
            quantities. Examples include velocity, acceleration,
            force and density.
        </p>

        <h4>5. Measurement</h4>
        <p>
            Measurement is the process of comparing a physical
            quantity with a standard unit.
        </p>

        <h4>6. Significant Figures</h4>
        <p>
            Significant figures are the meaningful digits in a
            measured quantity, including certain digits that show
            the precision of the measurement.
        </p>
    `,

    formulas: `
        <h3>🧮 Important Formulas</h3>

        <div class="formula-box">
            Density = Mass / Volume
        </div>

        <div class="formula-box">
            Speed = Distance / Time
        </div>

        <div class="formula-box">
            1 km = 1000 m
        </div>

        <div class="formula-box">
            1 hour = 3600 seconds
        </div>

        <div class="formula-box">
            1 m = 100 cm
        </div>
    `,

    questions: `
        <h3>❓ Important Questions</h3>

        <div class="question-box">
            <b>Q1.</b> What is a physical quantity?
        </div>

        <div class="question-box">
            <b>Q2.</b> What is the SI system of units?
        </div>

        <div class="question-box">
            <b>Q3.</b> Name the seven SI base quantities.
        </div>

        <div class="question-box">
            <b>Q4.</b> What are derived quantities? Give two examples.
        </div>

        <div class="question-box">
            <b>Q5.</b> What are significant figures?
        </div>
    `
},

    "Motion in a Straight Line": {

    notes: `
        <h3>📖 Motion in a Straight Line — Complete Notes</h3>

        <h4>1. Motion</h4>
        <p>
            An object is said to be in motion if its position changes
            with respect to a reference point with time.
        </p>

        <h4>2. Position</h4>
        <p>
            Position specifies the location of an object with respect
            to a chosen reference point or origin.
        </p>

        <h4>3. Distance</h4>
        <p>
            Distance is the total length of the actual path travelled
            by an object. It is a scalar quantity and is always
            non-negative.
        </p>

        <h4>4. Displacement</h4>
        <p>
            Displacement is the change in position of an object.
            It is a vector quantity and its magnitude can be zero
            even when the object has travelled some distance.
        </p>

        <h4>5. Speed</h4>
        <p>
            Speed is the distance travelled per unit time.
            It is a scalar quantity.
        </p>

        <h4>6. Average Speed</h4>
        <p>
            Average speed is the total distance travelled divided
            by the total time taken.
        </p>

        <h4>7. Velocity</h4>
        <p>
            Velocity is the displacement of an object per unit time.
            It is a vector quantity.
        </p>

        <h4>8. Average Velocity</h4>
        <p>
            Average velocity is the total displacement divided by
            the total time taken.
        </p>

        <h4>9. Acceleration</h4>
        <p>
            Acceleration is the rate of change of velocity with time.
            It is a vector quantity.
        </p>

        <h4>10. Uniform Motion</h4>
        <p>
            When an object covers equal distances in equal intervals
            of time, it is said to be in uniform motion.
        </p>

        <h4>11. Non-uniform Motion</h4>
        <p>
            When an object covers unequal distances in equal intervals
            of time, its motion is called non-uniform motion.
        </p>

        <h4>12. Uniform Acceleration</h4>
        <p>
            When the velocity changes by equal amounts in equal
            intervals of time, the acceleration is uniform.
        </p>

        <h4>13. Graphs of Motion</h4>
        <p>
            Motion can be represented using position-time,
            velocity-time and acceleration-time graphs.
        </p>

        <h4>14. Motion Under Gravity</h4>
        <p>
            When an object moves vertically under the influence of
            gravity alone, its acceleration is approximately
            g = 9.8 m/s² near the Earth's surface.
        </p>
    `,

    formulas: `
        <h3>🧮 Important Formulas</h3>

        <div class="formula-box">
            Speed = Distance / Time
        </div>

        <div class="formula-box">
            Average Speed = Total Distance / Total Time
        </div>

        <div class="formula-box">
            Average Velocity = Total Displacement / Total Time
        </div>

        <div class="formula-box">
            Acceleration = (v − u) / t
        </div>

        <div class="formula-box">
            v = u + at
        </div>

        <div class="formula-box">
            s = ut + ½at²
        </div>

        <div class="formula-box">
            v² = u² + 2as
        </div>

        <div class="formula-box">
            s = [(u + v) / 2]t
        </div>

        <div class="formula-box">
            g ≈ 9.8 m/s²
        </div>

        <div class="formula-box">
            For free fall: v = u + gt
        </div>
    `,

    questions: `
        <h3>❓ Important Questions</h3>

        <div class="question-box">
            <b>Q1.</b> Define distance and displacement.
        </div>

        <div class="question-box">
            <b>Q2.</b> Write two differences between distance
            and displacement.
        </div>

        <div class="question-box">
            <b>Q3.</b> Define speed and average speed.
        </div>

        <div class="question-box">
            <b>Q4.</b> Define velocity and average velocity.
        </div>

        <div class="question-box">
            <b>Q5.</b> What is acceleration?
        </div>

        <div class="question-box">
            <b>Q6.</b> Differentiate between uniform and
            non-uniform motion.
        </div>

        <div class="question-box">
            <b>Q7.</b> Write the three equations of motion.
        </div>

        <div class="question-box">
            <b>Q8.</b> What is meant by motion under gravity?
        </div>

        <div class="question-box">
            <b>Q9.</b> A car starts from rest and accelerates
            uniformly. Which equation can be used to find
            its final velocity?
        </div>

        <div class="question-box">
            <b>Q10.</b> Explain the difference between speed
            and velocity.
        </div>
    `
},

"Motion in a Plane": {

    notes: `
        <h3>📖 Motion in a Plane — Complete Notes</h3>

        <h4>1. Scalar Quantity</h4>
        <p>
            A scalar quantity has only magnitude and no direction.
            Examples: distance, speed, mass and time.
        </p>

        <h4>2. Vector Quantity</h4>
        <p>
            A vector quantity has both magnitude and direction.
            Examples: displacement, velocity, acceleration and force.
        </p>

        <h4>3. Representation of a Vector</h4>
        <p>
            A vector is represented by a directed line segment.
            The length represents its magnitude and the arrowhead
            represents its direction.
        </p>

        <h4>4. Addition of Vectors</h4>
        <p>
            Two or more vectors can be added using the triangle law
            or parallelogram law of vector addition.
        </p>

        <h4>5. Components of a Vector</h4>
        <p>
            A vector can be resolved into components along the
            x-axis and y-axis.
        </p>

        <h4>6. Projectile Motion</h4>
        <p>
            When an object is projected into the air and moves under
            the influence of gravity, its motion is called projectile
            motion.
        </p>

        <h4>7. Horizontal Projectile</h4>
        <p>
            In horizontal projectile motion, the initial velocity
            has only a horizontal component while gravity acts
            vertically downward.
        </p>

        <h4>8. Uniform Circular Motion</h4>
        <p>
            When an object moves along a circular path with constant
            speed, its motion is called uniform circular motion.
            Its velocity continuously changes because its direction
            changes.
        </p>
    `,

    formulas: `
        <h3>🧮 Important Formulas</h3>

        <div class="formula-box">
            A = √(Ax² + Ay²)
        </div>

        <div class="formula-box">
            Ax = A cos θ
        </div>

        <div class="formula-box">
            Ay = A sin θ
        </div>

        <div class="formula-box">
            Projectile Time of Flight = 2u sin θ / g
        </div>

        <div class="formula-box">
            Maximum Height = u² sin² θ / 2g
        </div>

        <div class="formula-box">
            Range = u² sin 2θ / g
        </div>

        <div class="formula-box">
            Centripetal Acceleration = v² / r
        </div>

        <div class="formula-box">
            Centripetal Force = mv² / r
        </div>
    `,

    questions: `
        <h3>❓ Important Questions</h3>

        <div class="question-box">
            <b>Q1.</b> What is a scalar quantity? Give two examples.
        </div>

        <div class="question-box">
            <b>Q2.</b> What is a vector quantity? Give two examples.
        </div>

        <div class="question-box">
            <b>Q3.</b> Explain the addition of two vectors.
        </div>

        <div class="question-box">
            <b>Q4.</b> What are the rectangular components of a vector?
        </div>

        <div class="question-box">
            <b>Q5.</b> What is projectile motion?
        </div>

        <div class="question-box">
            <b>Q6.</b> Write the formula for the time of flight
            of a projectile.
        </div>

        <div class="question-box">
            <b>Q7.</b> Write the formula for the maximum height
            of a projectile.
        </div>

        <div class="question-box">
            <b>Q8.</b> What is uniform circular motion?
        </div>

        <div class="question-box">
            <b>Q9.</b> Why does the velocity change in uniform
            circular motion even when speed is constant?
        </div>
    `
},


    "Laws of Motion": {

    notes: `
        <h3>📖 Laws of Motion — Complete Notes</h3>

        <h4>1. Force</h4>
        <p>
            Force is an external influence that can change or tend
            to change the state of motion of an object. Force is a
            vector quantity.
        </p>

        <h4>2. Newton's First Law</h4>
        <p>
            An object remains at rest or continues in uniform motion
            in a straight line unless acted upon by an external
            unbalanced force.
        </p>

        <h4>3. Inertia</h4>
        <p>
            Inertia is the tendency of an object to resist any change
            in its state of rest or motion.
        </p>

        <h4>4. Newton's Second Law</h4>
        <p>
            The rate of change of momentum of an object is directly
            proportional to the applied force and takes place in the
            direction of the force.
        </p>

        <h4>5. Newton's Third Law</h4>
        <p>
            When one object exerts a force on another object, the
            second object exerts an equal and opposite force on the
            first object.
        </p>

        <h4>6. Momentum</h4>
        <p>
            Momentum is the product of mass and velocity. It is a
            vector quantity.
        </p>

        <h4>7. Impulse</h4>
        <p>
            Impulse is equal to the change in momentum of an object.
        </p>

        <h4>8. Friction</h4>
        <p>
            Friction is a force that opposes the relative motion or
            tendency of relative motion between two surfaces in
            contact.
        </p>

        <h4>9. Common Examples</h4>
        <p>
            Seat belts, recoil of a gun, walking, swimming and
            pushing a wall can be understood using Newton's laws.
        </p>
    `,

    formulas: `
        <h3>🧮 Important Formulas</h3>

        <div class="formula-box">
            Momentum (p) = mv
        </div>

        <div class="formula-box">
            Force (F) = ma
        </div>

        <div class="formula-box">
            F = Δp / Δt
        </div>

        <div class="formula-box">
            Impulse = F × Δt
        </div>

        <div class="formula-box">
            Impulse = Change in Momentum
        </div>

        <div class="formula-box">
            Weight (W) = mg
        </div>

        <div class="formula-box">
            Limiting Friction = μN
        </div>
    `,

    questions: `
        <h3>❓ Important Questions</h3>

        <div class="question-box">
            <b>Q1.</b> State Newton's first law of motion.
        </div>

        <div class="question-box">
            <b>Q2.</b> What is inertia? Give an example.
        </div>

        <div class="question-box">
            <b>Q3.</b> State Newton's second law of motion.
        </div>

        <div class="question-box">
            <b>Q4.</b> Derive the relation F = ma.
        </div>

        <div class="question-box">
            <b>Q5.</b> State Newton's third law of motion.
        </div>

        <div class="question-box">
            <b>Q6.</b> Define momentum and write its SI unit.
        </div>

        <div class="question-box">
            <b>Q7.</b> What is impulse?
        </div>

        <div class="question-box">
            <b>Q8.</b> What is friction? Mention one advantage
            and one disadvantage of friction.
        </div>

        <div class="question-box">
            <b>Q9.</b> Why does a passenger move forward when a
            moving bus suddenly stops?
        </div>

        <div class="question-box">
            <b>Q10.</b> Explain Newton's third law with a
            suitable example.
        </div>
    `
},

"Work, Energy and Power": {

    notes: `
        <h3>📖 Work, Energy and Power — Complete Notes</h3>

        <h4>1. Work</h4>
        <p>
            Work is said to be done when a force acting on an object
            produces displacement in the direction of the force.
        </p>

        <h4>2. Work Done by a Constant Force</h4>
        <p>
            If a constant force acts on an object and produces
            displacement, the work done depends on the force,
            displacement and the angle between them.
        </p>

        <h4>3. Positive Work</h4>
        <p>
            Work is positive when the force and displacement are
            in the same direction.
        </p>

        <h4>4. Negative Work</h4>
        <p>
            Work is negative when the force and displacement are
            in opposite directions.
        </p>

        <h4>5. Zero Work</h4>
        <p>
            Work is zero when there is no displacement or when the
            force is perpendicular to the displacement.
        </p>

        <h4>6. Energy</h4>
        <p>
            Energy is the capacity of a system to do work.
        </p>

        <h4>7. Kinetic Energy</h4>
        <p>
            Kinetic energy is the energy possessed by an object
            because of its motion.
        </p>

        <h4>8. Potential Energy</h4>
        <p>
            Potential energy is the energy associated with the
            position or configuration of an object.
        </p>

        <h4>9. Work-Energy Theorem</h4>
        <p>
            The net work done on an object is equal to the change
            in its kinetic energy.
        </p>

        <h4>10. Conservation of Energy</h4>
        <p>
            Energy can neither be created nor destroyed. It can only
            be transformed from one form to another.
        </p>

        <h4>11. Power</h4>
        <p>
            Power is the rate at which work is done or energy is
            transferred.
        </p>
    `,

    formulas: `
        <h3>🧮 Important Formulas</h3>

        <div class="formula-box">
            Work = F s cos θ
        </div>

        <div class="formula-box">
            Kinetic Energy = ½mv²
        </div>

        <div class="formula-box">
            Potential Energy = mgh
        </div>

        <div class="formula-box">
            Work-Energy Theorem:
            W<sub>net</sub> = ΔK
        </div>

        <div class="formula-box">
            Power = Work / Time
        </div>

        <div class="formula-box">
            Power = Energy / Time
        </div>

        <div class="formula-box">
            1 Watt = 1 Joule / second
        </div>
    `,

    questions: `
        <h3>❓ Important Questions</h3>

        <div class="question-box">
            <b>Q1.</b> Define work and write its SI unit.
        </div>

        <div class="question-box">
            <b>Q2.</b> What is positive, negative and zero work?
        </div>

        <div class="question-box">
            <b>Q3.</b> Define kinetic energy and write its formula.
        </div>

        <div class="question-box">
            <b>Q4.</b> Define potential energy and write its formula.
        </div>

        <div class="question-box">
            <b>Q5.</b> State the work-energy theorem.
        </div>

        <div class="question-box">
            <b>Q6.</b> State the law of conservation of energy.
        </div>

        <div class="question-box">
            <b>Q7.</b> Define power and write its SI unit.
        </div>

        <div class="question-box">
            <b>Q8.</b> A force acts on an object but produces
            no displacement. What is the work done?
        </div>

        <div class="question-box">
            <b>Q9.</b> What is the difference between kinetic
            energy and potential energy?
        </div>

        <div class="question-box">
            <b>Q10.</b> Derive the expression for kinetic energy.
        </div>
    `
},

"Gravitation": {

    notes: `
        <h3>📖 Gravitation — Complete Notes</h3>

        <h4>1. Gravitation</h4>
        <p>
            Gravitation is the universal force of attraction between
            any two objects having mass.
        </p>

        <h4>2. Newton's Law of Gravitation</h4>
        <p>
            According to Newton's law of universal gravitation,
            every two masses attract each other with a force that
            depends on their masses and the distance between them.
        </p>

        <h4>3. Gravitational Constant</h4>
        <p>
            The universal gravitational constant is represented by G.
            Its SI unit is N m²/kg².
        </p>

        <h4>4. Acceleration Due to Gravity</h4>
        <p>
            The acceleration produced in a freely falling object
            due to Earth's gravitational attraction is called
            acceleration due to gravity, represented by g.
        </p>

        <h4>5. Mass and Weight</h4>
        <p>
            Mass is the amount of matter in an object and remains
            constant. Weight is the gravitational force acting on
            the object and depends on the value of g.
        </p>

        <h4>6. Free Fall</h4>
        <p>
            When an object falls under the influence of gravity alone,
            its motion is called free fall.
        </p>

        <h4>7. Escape Velocity</h4>
        <p>
            Escape velocity is the minimum initial speed required
            for an object to escape from the gravitational field of
            a celestial body without further propulsion.
        </p>

        <h4>8. Orbital Motion</h4>
        <p>
            A satellite remains in orbit because gravitational force
            provides the required centripetal force.
        </p>
    `,

    formulas: `
        <h3>🧮 Important Formulas</h3>

        <div class="formula-box">
            F = Gm₁m₂ / r²
        </div>

        <div class="formula-box">
            g = GM / R²
        </div>

        <div class="formula-box">
            Weight = mg
        </div>

        <div class="formula-box">
            Gravitational Potential Energy = −GMm / r
        </div>

        <div class="formula-box">
            Escape Velocity = √(2GM / R)
        </div>

        <div class="formula-box">
            Orbital Velocity = √(GM / r)
        </div>

        <div class="formula-box">
            g ≈ 9.8 m/s² near Earth's surface
        </div>
    `,

    questions: `
        <h3>❓ Important Questions</h3>

        <div class="question-box">
            <b>Q1.</b> What is gravitation?
        </div>

        <div class="question-box">
            <b>Q2.</b> State Newton's universal law of gravitation.
        </div>

        <div class="question-box">
            <b>Q3.</b> What is the gravitational constant G?
        </div>

        <div class="question-box">
            <b>Q4.</b> Define acceleration due to gravity.
        </div>

        <div class="question-box">
            <b>Q5.</b> Differentiate between mass and weight.
        </div>

        <div class="question-box">
            <b>Q6.</b> What is free fall?
        </div>

        <div class="question-box">
            <b>Q7.</b> What is escape velocity?
        </div>

        <div class="question-box">
            <b>Q8.</b> Why does a satellite remain in orbit around
            the Earth?
        </div>

        <div class="question-box">
            <b>Q9.</b> Write the relation between g, G, M and R.
        </div>

        <div class="question-box">
            <b>Q10.</b> Write the formula for gravitational force
            between two masses.
        </div>
    `
},

"Thermal Properties": {

    notes: `
        <h3>📖 Thermal Properties — Complete Notes</h3>

        <h4>1. Heat</h4>
        <p>
            Heat is a form of energy transferred from one body to
            another because of a temperature difference.
        </p>

        <h4>2. Temperature</h4>
        <p>
            Temperature tells us how hot or cold a body is. It is
            related to the average kinetic energy of its particles.
        </p>

        <h4>3. Thermal Expansion</h4>
        <p>
            Most substances expand when heated and contract when
            cooled. Expansion may be linear, superficial or cubical.
        </p>

        <h4>4. Specific Heat Capacity</h4>
        <p>
            Specific heat capacity is the amount of heat required
            to raise the temperature of unit mass of a substance
            by one degree Celsius or one kelvin.
        </p>

        <h4>5. Calorimetry</h4>
        <p>
            Calorimetry deals with the measurement of heat exchanged
            between bodies.
        </p>

        <h4>6. Change of State</h4>
        <p>
            Matter can change from solid to liquid, liquid to gas
            and vice versa when heat is supplied or removed.
        </p>

        <h4>7. Latent Heat</h4>
        <p>
            Latent heat is the heat required to change the state of
            a substance without changing its temperature.
        </p>

        <h4>8. Heat Transfer</h4>
        <p>
            Heat can be transferred by conduction, convection and
            radiation.
        </p>

        <h4>9. Thermal Conductivity</h4>
        <p>
            Thermal conductivity measures how effectively a material
            conducts heat.
        </p>
    `,

    formulas: `
        <h3>🧮 Important Formulas</h3>

        <div class="formula-box">
            Q = mcΔT
        </div>

        <div class="formula-box">
            Q = mL
        </div>

        <div class="formula-box">
            Linear Expansion: ΔL = αL₀ΔT
        </div>

        <div class="formula-box">
            Area Expansion: ΔA = βA₀ΔT
        </div>

        <div class="formula-box">
            Volume Expansion: ΔV = γV₀ΔT
        </div>

        <div class="formula-box">
            Heat Capacity = Q / ΔT
        </div>
    `,

    questions: `
        <h3>❓ Important Questions</h3>

        <div class="question-box">
            <b>Q1.</b> What is heat?
        </div>

        <div class="question-box">
            <b>Q2.</b> Define temperature.
        </div>

        <div class="question-box">
            <b>Q3.</b> What is thermal expansion?
        </div>

        <div class="question-box">
            <b>Q4.</b> Define specific heat capacity.
        </div>

        <div class="question-box">
            <b>Q5.</b> What is calorimetry?
        </div>

        <div class="question-box">
            <b>Q6.</b> What is latent heat?
        </div>

        <div class="question-box">
            <b>Q7.</b> Explain the three modes of heat transfer.
        </div>

        <div class="question-box">
            <b>Q8.</b> Write the formula for heat required to
            change the temperature of a substance.
        </div>

        <div class="question-box">
            <b>Q9.</b> What happens to the temperature of a substance
            during a change of state?
        </div>

        <div class="question-box">
            <b>Q10.</b> What is thermal conductivity?
        </div>
    `
},

"Waves": {

    notes: `
        <h3>📖 Waves — Complete Notes</h3>

        <h4>1. Wave</h4>
        <p>
            A wave is a disturbance that transfers energy from one
            place to another without the net transport of matter.
        </p>

        <h4>2. Mechanical Waves</h4>
        <p>
            Mechanical waves require a material medium for their
            propagation. Examples include sound waves and waves
            on a stretched string.
        </p>

        <h4>3. Transverse Wave</h4>
        <p>
            In a transverse wave, particles of the medium vibrate
            perpendicular to the direction of propagation.
        </p>

        <h4>4. Longitudinal Wave</h4>
        <p>
            In a longitudinal wave, particles of the medium vibrate
            parallel to the direction of propagation.
        </p>

        <h4>5. Amplitude</h4>
        <p>
            Amplitude is the maximum displacement of a particle
            from its mean position.
        </p>

        <h4>6. Wavelength</h4>
        <p>
            Wavelength is the distance between two consecutive
            points that are in the same phase, such as two
            consecutive crests or compressions.
        </p>

        <h4>7. Frequency</h4>
        <p>
            Frequency is the number of complete oscillations made
            per second. Its SI unit is hertz (Hz).
        </p>

        <h4>8. Time Period</h4>
        <p>
            Time period is the time taken to complete one
            oscillation.
        </p>

        <h4>9. Wave Speed</h4>
        <p>
            Wave speed is the distance travelled by a wave
            disturbance per unit time.
        </p>

        <h4>10. Sound Waves</h4>
        <p>
            Sound is a mechanical wave that generally travels
            through a medium as a longitudinal wave.
        </p>
    `,

    formulas: `
        <h3>🧮 Important Formulas</h3>

        <div class="formula-box">
            v = fλ
        </div>

        <div class="formula-box">
            f = 1 / T
        </div>

        <div class="formula-box">
            T = 1 / f
        </div>

        <div class="formula-box">
            Wave Speed = Distance / Time
        </div>

        <div class="formula-box">
            Angular Frequency: ω = 2πf
        </div>

        <div class="formula-box">
            Wave Number: k = 2π / λ
        </div>
    `,

    questions: `
        <h3>❓ Important Questions</h3>

        <div class="question-box">
            <b>Q1.</b> What is a wave?
        </div>

        <div class="question-box">
            <b>Q2.</b> What are mechanical waves?
        </div>

        <div class="question-box">
            <b>Q3.</b> Differentiate between transverse and
            longitudinal waves.
        </div>

        <div class="question-box">
            <b>Q4.</b> Define amplitude and wavelength.
        </div>

        <div class="question-box">
            <b>Q5.</b> Define frequency and time period.
        </div>

        <div class="question-box">
            <b>Q6.</b> Write the relation between wave speed,
            frequency and wavelength.
        </div>

        <div class="question-box">
            <b>Q7.</b> What is the SI unit of frequency?
        </div>

        <div class="question-box">
            <b>Q8.</b> What is the relation between frequency
            and time period?
        </div>

        <div class="question-box">
            <b>Q9.</b> Give two examples of mechanical waves.
        </div>
    `
},

};


/* =========================================================
   12. SHOW STUDY CONTENT
========================================================= */

function showStudyContent(subject, chapter, type) {

    const data = chapterContent[chapter];

    let content = "";


    if (data && data[type]) {

        content = data[type];

    } else {

        content = `
            <h3>🚧 Content Coming Soon</h3>

            <p>
                Notes for this chapter are being added.
            </p>
        `;

    }


    const contentPanel = document.createElement("div");

    contentPanel.className = "study-content";

    contentPanel.innerHTML = `

        <div class="study-content-inner">

            <p class="study-subject">
                📚 ${subject}
            </p>

            <h2>${chapter}</h2>

            <div class="study-material">
                ${content}
            </div>

        </div>

    `;


    const oldContent =
        document.getElementById("studyContent");

    if (oldContent) {
        oldContent.remove();
    }


    contentPanel.id = "studyContent";

    document.getElementById("chapterPanel")
        .after(contentPanel);


    contentPanel.scrollIntoView({
        behavior: "smooth"
    });

}


/* =========================================================
   13. CHAPTER BUTTON CLICK
========================================================= */

document.addEventListener("click", function(event) {

    if (!event.target.classList.contains("chapter-btn")) {
        return;
    }


    const chapterPanel =
        document.getElementById("chapterPanel");

    if (!chapterPanel) {
        return;
    }


    const heading =
        chapterPanel.querySelector("h2");

    const subjectElement =
        chapterPanel.querySelector("p");


    const chapter = heading.textContent.trim();

    const subject =
        subjectElement.textContent
        .replace("📚", "")
        .trim();


    const buttonText =
        event.target.textContent.trim();


    let type = "";


    if (buttonText.includes("Notes")) {
        type = "notes";
    }

    else if (buttonText.includes("Formulas")) {
        type = "formulas";
    }

    else if (buttonText.includes("Questions")) {
        type = "questions";
    }


    if (type) {

        showStudyContent(
            subject,
            chapter,
            type
        );

    }

});

/* =====================================================
   QUIZ ZONE - JAVASCRIPT
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const quizData = {

        Physics: [
            {
                question: "What is the SI unit of force?",
                options: ["Joule", "Newton", "Watt", "Pascal"],
                answer: 1
            },
            {
                question: "What is the speed of an object at rest?",
                options: ["10 m/s", "1 m/s", "0 m/s", "100 m/s"],
                answer: 2
            },
            {
                question: "Which quantity has both magnitude and direction?",
                options: ["Speed", "Distance", "Mass", "Velocity"],
                answer: 3
            },
            {
                question: "Acceleration is the rate of change of:",
                options: ["Distance", "Velocity", "Mass", "Time"],
                answer: 1
            },
            {
                question: "What is the SI unit of energy?",
                options: ["Newton", "Joule", "Watt", "Volt"],
                answer: 1
            },
            {
                question: "The acceleration due to gravity on Earth is approximately:",
                options: ["5.8 m/s²", "9.8 m/s²", "15.8 m/s²", "20 m/s²"],
                answer: 1
            },
            {
                question: "Which law is also called the law of inertia?",
                options: ["Newton's First Law", "Newton's Second Law", "Newton's Third Law", "Law of Gravitation"],
                answer: 0
            },
            {
                question: "Work is done when a force causes:",
                options: ["Mass", "Displacement", "Time", "Temperature"],
                answer: 1
            },
            {
                question: "What is the SI unit of power?",
                options: ["Watt", "Joule", "Newton", "Pascal"],
                answer: 0
            },
            {
                question: "Which one is a scalar quantity?",
                options: ["Velocity", "Force", "Speed", "Acceleration"],
                answer: 2
            }
        ],

        Chemistry: [
            {
                question: "What is the atomic number of Hydrogen?",
                options: ["1", "2", "8", "10"],
                answer: 0
            },
            {
                question: "What is the chemical symbol of Oxygen?",
                options: ["Ox", "O", "Og", "C"],
                answer: 1
            },
            {
                question: "How many protons are present in Carbon?",
                options: ["4", "6", "8", "12"],
                answer: 1
            },
            {
                question: "Which particle has a negative charge?",
                options: ["Proton", "Neutron", "Electron", "Nucleus"],
                answer: 2
            },
            {
                question: "The nucleus of an atom contains:",
                options: ["Electrons only", "Protons and neutrons", "Neutrons and electrons", "Only protons"],
                answer: 1
            },
            {
                question: "What is the formula of water?",
                options: ["CO₂", "H₂O", "O₂", "H₂"],
                answer: 1
            },
            {
                question: "Which gas is most abundant in Earth's atmosphere?",
                options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
                answer: 2
            },
            {
                question: "The pH of a neutral solution is:",
                options: ["0", "5", "7", "14"],
                answer: 2
            },
            {
                question: "Which of these is a noble gas?",
                options: ["Oxygen", "Nitrogen", "Helium", "Hydrogen"],
                answer: 2
            },
            {
                question: "Na is the chemical symbol for:",
                options: ["Nitrogen", "Sodium", "Neon", "Nickel"],
                answer: 1
            }
        ],

        Mathematics: [
            {
                question: "What is the value of 2 + 3 × 4?",
                options: ["20", "14", "24", "10"],
                answer: 1
            },
            {
                question: "The slope of a horizontal line is:",
                options: ["1", "0", "Undefined", "-1"],
                answer: 1
            },
            {
                question: "What is the derivative of x²?",
                options: ["x", "2x", "x²", "2"],
                answer: 1
            },
            {
                question: "What is the derivative of a constant?",
                options: ["1", "0", "The constant", "x"],
                answer: 1
            },
            {
                question: "What is the sum of the first n natural numbers?",
                options: ["n²", "n(n+1)/2", "n(n-1)/2", "2n"],
                answer: 1
            },
            {
                question: "What is the value of sin 90°?",
                options: ["0", "1", "-1", "1/2"],
                answer: 1
            },
            {
                question: "The equation of x-axis is:",
                options: ["x = 0", "y = 0", "x = y", "y = 1"],
                answer: 1
            },
            {
                question: "What is √25?",
                options: ["4", "5", "6", "10"],
                answer: 1
            },
            {
                question: "What is the value of 0 factorial?",
                options: ["0", "1", "Undefined", "10"],
                answer: 1
            },
            {
                question: "A straight angle is equal to:",
                options: ["90°", "180°", "270°", "360°"],
                answer: 1
            }
        ],

        Biology: [
            {
                question: "The basic unit of life is:",
                options: ["Tissue", "Organ", "Cell", "Nucleus"],
                answer: 2
            },
            {
                question: "Which organelle is known as the powerhouse of the cell?",
                options: ["Nucleus", "Mitochondria", "Ribosome", "Golgi body"],
                answer: 1
            },
            {
                question: "Photosynthesis mainly occurs in:",
                options: ["Mitochondria", "Chloroplasts", "Nucleus", "Vacuoles"],
                answer: 1
            },
            {
                question: "Which gas is used by plants during photosynthesis?",
                options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
                answer: 2
            },
            {
                question: "Which pigment gives plants their green colour?",
                options: ["Haemoglobin", "Chlorophyll", "Melanin", "Carotene"],
                answer: 1
            },
            {
                question: "DNA stands for:",
                options: [
                    "Deoxyribonucleic Acid",
                    "Dinitrogen Acid",
                    "Deoxynitrogen Acid",
                    "Double Nucleic Acid"
                ],
                answer: 0
            },
            {
                question: "Which organ pumps blood throughout the body?",
                options: ["Lungs", "Brain", "Heart", "Kidney"],
                answer: 2
            },
            {
                question: "Which blood cells help fight infections?",
                options: ["RBCs", "WBCs", "Platelets", "Plasma"],
                answer: 1
            },
            {
                question: "Plants prepare their food mainly by:",
                options: ["Respiration", "Photosynthesis", "Digestion", "Transpiration"],
                answer: 1
            },
            {
                question: "Which part of the plant absorbs water from soil?",
                options: ["Leaf", "Flower", "Root", "Fruit"],
                answer: 2
            }
        ],

        English: [
            {
                question: "Which word is a noun?",
                options: ["Beautiful", "Run", "School", "Quickly"],
                answer: 2
            },
            {
                question: "Which word is a verb?",
                options: ["Jump", "Happy", "School", "Beautiful"],
                answer: 0
            },
            {
                question: "What is the past tense of 'go'?",
                options: ["Goed", "Gone", "Went", "Going"],
                answer: 2
            },
            {
                question: "Which is an adjective?",
                options: ["Slowly", "Beautiful", "Run", "Happiness"],
                answer: 1
            },
            {
                question: "Choose the correct article: ___ apple",
                options: ["A", "An", "The", "No article"],
                answer: 1
            },
            {
                question: "Which word is an adverb?",
                options: ["Quickly", "Quick", "Beauty", "Run"],
                answer: 0
            },
            {
                question: "What is the plural of 'child'?",
                options: ["Childs", "Childes", "Children", "Childrens"],
                answer: 2
            },
            {
                question: "Which tense is used in: 'I am reading'?",
                options: ["Simple Present", "Present Continuous", "Simple Past", "Future"],
                answer: 1
            },
            {
                question: "A word opposite in meaning is called:",
                options: ["Synonym", "Antonym", "Noun", "Pronoun"],
                answer: 1
            },
            {
                question: "Which is a synonym of 'happy'?",
                options: ["Sad", "Angry", "Joyful", "Weak"],
                answer: 2
            }
        ],

        "Social Science": [
            {
                question: "Who was the first President of India?",
                options: [
                    "Jawaharlal Nehru",
                    "Dr. Rajendra Prasad",
                    "Sardar Patel",
                    "Mahatma Gandhi"
                ],
                answer: 1
            },
            {
                question: "What is the capital of India?",
                options: ["Mumbai", "Kolkata", "New Delhi", "Chennai"],
                answer: 2
            },
            {
                question: "Which river is Lucknow situated on?",
                options: ["Ganga", "Gomti", "Yamuna", "Godavari"],
                answer: 1
            },
            {
                question: "India became independent in:",
                options: ["1945", "1946", "1947", "1950"],
                answer: 2
            },
            {
                question: "The Constitution of India came into effect on:",
                options: [
                    "15 August 1947",
                    "26 January 1950",
                    "2 October 1950",
                    "26 November 1949"
                ],
                answer: 1
            },
            {
                question: "Which is the largest state of India by area?",
                options: ["Uttar Pradesh", "Madhya Pradesh", "Rajasthan", "Maharashtra"],
                answer: 2
            },
            {
                question: "Which branch of government makes laws?",
                options: ["Executive", "Legislature", "Judiciary", "Police"],
                answer: 1
            },
            {
                question: "What is the main occupation in many rural areas of India?",
                options: ["Agriculture", "Mining", "Banking", "IT"],
                answer: 0
            },
            {
                question: "The study of maps is called:",
                options: ["Geography", "Cartography", "History", "Economics"],
                answer: 1
            },
            {
                question: "Who is known as the Father of the Indian Constitution?",
                options: [
                    "Mahatma Gandhi",
                    "B. R. Ambedkar",
                    "Jawaharlal Nehru",
                    "Subhas Chandra Bose"
                ],
                answer: 1
            }
        ]
    };


    /* =====================================================
       QUIZ ELEMENTS
    ===================================================== */

    const quizStart = document.getElementById("quizStart");
    const quizBox = document.getElementById("quizBox");
    const quizResult = document.getElementById("quizResult");

    const quizSubject = document.getElementById("quizSubject");
    const startQuizBtn = document.getElementById("startQuizBtn");

    const quizSubjectName = document.getElementById("quizSubjectName");
    const questionNumber = document.getElementById("questionNumber");
    const questionText = document.getElementById("questionText");

    const optionsContainer = document.getElementById("optionsContainer");
    const nextQuestionBtn = document.getElementById("nextQuestionBtn");

    const quizProgressBar = document.getElementById("quizProgressBar");

    const finalScore = document.getElementById("finalScore");
    const resultMessage = document.getElementById("resultMessage");

    const restartQuizBtn = document.getElementById("restartQuizBtn");


    /* =====================================================
       QUIZ VARIABLES
    ===================================================== */

    let currentQuestions = [];
    let currentQuestion = 0;
    let score = 0;
    let selectedSubject = "";


    /* =====================================================
       START QUIZ
    ===================================================== */

    startQuizBtn.addEventListener("click", function () {

        selectedSubject = quizSubject.value;

        if (selectedSubject === "") {
            alert("Please select a subject first! 📚");
            return;
        }

        currentQuestions = [...quizData[selectedSubject]]
            .sort(() => Math.random() - 0.5);

        currentQuestion = 0;
        score = 0;

        quizStart.style.display = "none";
        quizResult.style.display = "none";
        quizBox.style.display = "block";

        quizSubjectName.textContent = selectedSubject;

        showQuestion();
    });


    /* =====================================================
       SHOW QUESTION
    ===================================================== */

    function showQuestion() {

        const question = currentQuestions[currentQuestion];

        questionNumber.textContent =
            `Question ${currentQuestion + 1}/${currentQuestions.length}`;

        questionText.textContent = question.question;

        quizProgressBar.style.width =
            `${((currentQuestion + 1) / currentQuestions.length) * 100}%`;

        optionsContainer.innerHTML = "";

        nextQuestionBtn.disabled = true;

        question.options.forEach(function (option, index) {

            const button = document.createElement("button");

            button.className = "quiz-option";
            button.textContent = `${String.fromCharCode(65 + index)}. ${option}`;

            button.addEventListener("click", function () {

                selectAnswer(button, index);

            });

            optionsContainer.appendChild(button);
        });
    }


    /* =====================================================
       SELECT ANSWER
    ===================================================== */

    function selectAnswer(selectedButton, selectedIndex) {

        const question = currentQuestions[currentQuestion];

        const allOptions =
            document.querySelectorAll(".quiz-option");

        allOptions.forEach(function (button) {
            button.classList.add("disabled");
        });

        if (selectedIndex === question.answer) {

            selectedButton.classList.add("correct");

            score++;

        } else {

            selectedButton.classList.add("wrong");

            allOptions[question.answer].classList.add("correct");
        }

        nextQuestionBtn.disabled = false;
    }


    /* =====================================================
       NEXT QUESTION
    ===================================================== */

    nextQuestionBtn.addEventListener("click", function () {

        currentQuestion++;

        if (currentQuestion < currentQuestions.length) {

            showQuestion();

        } else {

            showResult();

        }
    });


    /* =====================================================
       SHOW RESULT
    ===================================================== */

    function showResult() {

        quizBox.style.display = "none";
        quizResult.style.display = "block";

        finalScore.textContent =
            `${score}/${currentQuestions.length}`;

        const percentage =
            (score / currentQuestions.length) * 100;

        if (percentage === 100) {

            resultMessage.textContent =
                "🏆 Perfect Score! Outstanding!";

        } else if (percentage >= 80) {

            resultMessage.textContent =
                "🌟 Excellent! Keep it up!";

        } else if (percentage >= 60) {

            resultMessage.textContent =
                "👍 Great job! Keep practising!";

        } else if (percentage >= 40) {

            resultMessage.textContent =
                "📚 Good try! Revise and try again!";

        } else {

            resultMessage.textContent =
                "💪 Don't give up! Practice makes progress!";
        }
    }


    /* =====================================================
       RESTART QUIZ
    ===================================================== */

    restartQuizBtn.addEventListener("click", function () {

        quizResult.style.display = "none";
        quizBox.style.display = "none";
        quizStart.style.display = "block";

        quizSubject.value = "";
    });

});

/* =====================================================
   CHAPTER-WISE QUIZ SELECTOR
===================================================== */

const chapterSelect = document.getElementById("quizChapter");

const quizChapters = {

    Physics: [
        "Units and Measurements",
        "Motion in a Straight Line",
        "Motion in a Plane",
        "Laws of Motion",
        "Work, Energy and Power"
    ],

    Chemistry: [
        "Some Basic Concepts of Chemistry",
        "Structure of Atom",
        "Classification of Elements",
        "Chemical Bonding",
        "Thermodynamics"
    ],

    Mathematics: [
        "Sequences and Series",
        "Straight Lines",
        "Limits and Derivatives",
        "Sets",
        "Relations and Functions"
    ],

    Biology: [
        "The Living World",
        "Biological Classification",
        "Plant Kingdom",
        "Animal Kingdom",
        "Cell: The Unit of Life"
    ],

    English: [
        "Reading Comprehension",
        "Grammar",
        "Writing Skills",
        "Vocabulary",
        "Literature",
        "Tenses",
        "Parts of Speech"
    ],

    "Social Science": [
        "History",
        "Geography",
        "Political Science",
        "Economics",
        "Civics",
        "Important Dates",
        "Map Work"
    ]
};


/* SUBJECT CHANGE */

quizSubject.addEventListener("change", function () {

    const subject = quizSubject.value;

    chapterSelect.innerHTML =
        '<option value="">Select Chapter</option>';

    if (subject === "") {

        chapterSelect.disabled = true;
        startQuizBtn.disabled = true;
        return;

    }

    quizChapters[subject].forEach(function (chapter) {

        const option = document.createElement("option");

        option.value = chapter;
        option.textContent = chapter;

        chapterSelect.appendChild(option);
    });

    chapterSelect.disabled = false;
    startQuizBtn.disabled = true;
});


/* CHAPTER CHANGE */

chapterSelect.addEventListener("change", function () {

    if (chapterSelect.value !== "") {

        startQuizBtn.disabled = false;

    } else {

        startQuizBtn.disabled = true;

    }
});

/* =====================================================
   CHAPTER-WISE QUIZ CONNECTION
===================================================== */

const chapterQuizData = {

    /* ---------- PHYSICS ---------- */

    "Units and Measurements": [
        {
            question: "What is the SI unit of length?",
            options: ["Centimetre", "Metre", "Kilometre", "Millimetre"],
            answer: 1
        },
        {
            question: "How many significant figures are there in 0.00520?",
            options: ["2", "3", "4", "5"],
            answer: 1
        },
        {
            question: "Which one is a fundamental SI quantity?",
            options: ["Force", "Energy", "Length", "Velocity"],
            answer: 2
        },
        {
            question: "The SI unit of time is:",
            options: ["Minute", "Hour", "Second", "Day"],
            answer: 2
        },
        {
            question: "Which instrument is used to measure very small lengths accurately?",
            options: ["Metre scale", "Vernier calipers", "Clock", "Thermometer"],
            answer: 1
        }
    ],

    "Motion in a Straight Line": [
        {
            question: "Speed is defined as:",
            options: [
                "Displacement per unit time",
                "Distance per unit time",
                "Change in acceleration",
                "Force per unit mass"
            ],
            answer: 1
        },
        {
            question: "Which quantity has both magnitude and direction?",
            options: ["Distance", "Speed", "Velocity", "Mass"],
            answer: 2
        },
        {
            question: "The SI unit of acceleration is:",
            options: ["m/s", "m/s²", "km/h", "N"],
            answer: 1
        },
        {
            question: "If an object is at rest, its velocity is:",
            options: ["1 m/s", "9.8 m/s", "0 m/s", "10 m/s"],
            answer: 2
        },
        {
            question: "The slope of a position-time graph represents:",
            options: ["Acceleration", "Force", "Velocity", "Distance"],
            answer: 2
        }
    ],

    "Motion in a Plane": [
        {
            question: "Motion in two dimensions is called:",
            options: [
                "One-dimensional motion",
                "Plane motion",
                "Rest",
                "Circular mass"
            ],
            answer: 1
        },
        {
            question: "A vector has:",
            options: [
                "Magnitude only",
                "Direction only",
                "Magnitude and direction",
                "Neither"
            ],
            answer: 2
        },
        {
            question: "Which is a vector quantity?",
            options: ["Speed", "Distance", "Mass", "Velocity"],
            answer: 3
        },
        {
            question: "Projectile motion is an example of:",
            options: [
                "One-dimensional motion",
                "Two-dimensional motion",
                "Rest",
                "Uniform mass"
            ],
            answer: 1
        },
        {
            question: "The SI unit of displacement is:",
            options: ["Second", "Metre", "Newton", "Joule"],
            answer: 1
        }
    ],

    "Laws of Motion": [
        {
            question: "Newton's First Law is also called the law of:",
            options: ["Force", "Inertia", "Energy", "Momentum"],
            answer: 1
        },
        {
            question: "Newton's Second Law gives the relation:",
            options: ["F = ma", "F = m/a", "F = a/m", "F = mv"],
            answer: 0
        },
        {
            question: "Newton's Third Law deals with:",
            options: [
                "Inertia",
                "Action and reaction",
                "Energy",
                "Gravitation"
            ],
            answer: 1
        },
        {
            question: "The SI unit of force is:",
            options: ["Joule", "Watt", "Newton", "Pascal"],
            answer: 2
        },
        {
            question: "Momentum is given by:",
            options: ["p = mv", "p = ma", "p = m/v", "p = v/m"],
            answer: 0
        }
    ],

    "Work, Energy and Power": [
        {
            question: "The SI unit of work is:",
            options: ["Newton", "Joule", "Watt", "Pascal"],
            answer: 1
        },
        {
            question: "The SI unit of power is:",
            options: ["Joule", "Newton", "Watt", "Volt"],
            answer: 2
        },
        {
            question: "Kinetic energy depends on:",
            options: ["Mass and velocity", "Only mass", "Only height", "Time"],
            answer: 0
        },
        {
            question: "Potential energy is energy due to:",
            options: ["Position", "Speed only", "Temperature", "Pressure"],
            answer: 0
        },
        {
            question: "Power is the rate of doing:",
            options: ["Force", "Work", "Mass", "Momentum"],
            answer: 1
        }
    ],


    /* ---------- CHEMISTRY ---------- */

    "Some Basic Concepts of Chemistry": [
        {
            question: "One mole contains approximately:",
            options: ["6.022 × 10²³ particles", "10² particles", "6.022 × 10² particles", "10²³ kg"],
            answer: 0
        },
        {
            question: "Molar mass is the mass of:",
            options: [
                "One atom",
                "One mole of substance",
                "One electron",
                "One molecule only"
            ],
            answer: 1
        },
        {
            question: "The SI unit of amount of substance is:",
            options: ["Gram", "Mole", "Kilogram", "Litre"],
            answer: 1
        },
        {
            question: "Avogadro constant is:",
            options: ["6.022 × 10²³ mol⁻¹", "9.8", "3 × 10⁸", "1.6 × 10⁻¹⁹"],
            answer: 0
        },
        {
            question: "Stoichiometry deals with:",
            options: [
                "Colour of substances",
                "Quantitative relationships in reactions",
                "Atomic shapes",
                "Temperature only"
            ],
            answer: 1
        }
    ],

    "Structure of Atom": [
        {
            question: "The charge of an electron is:",
            options: ["Positive", "Negative", "Neutral", "Variable"],
            answer: 1
        },
        {
            question: "Atomic number represents the number of:",
            options: ["Neutrons", "Electrons only", "Protons", "Nucleons"],
            answer: 2
        },
        {
            question: "Mass number is equal to:",
            options: [
                "Protons + neutrons",
                "Electrons + neutrons",
                "Only protons",
                "Only electrons"
            ],
            answer: 0
        },
        {
            question: "The nucleus contains:",
            options: [
                "Only electrons",
                "Protons and neutrons",
                "Only neutrons",
                "Electrons and protons"
            ],
            answer: 1
        },
        {
            question: "Isotopes have the same:",
            options: ["Mass number", "Atomic number", "Neutrons", "Mass"],
            answer: 1
        }
    ],

    "Classification of Elements": [
        {
            question: "The modern periodic table has how many groups?",
            options: ["7", "8", "18", "20"],
            answer: 2
        },
        {
            question: "The modern periodic table has how many periods?",
            options: ["5", "6", "7", "18"],
            answer: 2
        },
        {
            question: "Atomic radius generally decreases across a:",
            options: ["Group", "Period", "Block", "Shell"],
            answer: 1
        },
        {
            question: "Ionisation enthalpy generally increases:",
            options: [
                "Down a group",
                "Across a period",
                "Only in metals",
                "Only in gases"
            ],
            answer: 1
        },
        {
            question: "Which block contains groups 3 to 12?",
            options: ["s-block", "p-block", "d-block", "f-block"],
            answer: 2
        }
    ],

    "Chemical Bonding": [
        {
            question: "Atoms form chemical bonds mainly to achieve:",
            options: ["Instability", "Greater stability", "More mass", "Higher temperature"],
            answer: 1
        },
        {
            question: "An ionic bond involves:",
            options: [
                "Electron transfer",
                "Electron sharing only",
                "Neutron transfer",
                "Proton sharing"
            ],
            answer: 0
        },
        {
            question: "A covalent bond involves:",
            options: [
                "Electron sharing",
                "Proton transfer",
                "Neutron sharing",
                "Mass transfer"
            ],
            answer: 0
        },
        {
            question: "The octet rule is related to:",
            options: ["Valence electrons", "Neutrons", "Nucleus size", "Atomic mass"],
            answer: 0
        },
        {
            question: "sp³ hybridisation generally gives:",
            options: ["Linear", "Tetrahedral", "Trigonal planar", "Circular"],
            answer: 1
        }
    ],

    "Thermodynamics": [
        {
            question: "The first law of thermodynamics is based on conservation of:",
            options: ["Mass", "Energy", "Volume", "Pressure"],
            answer: 1
        },
        {
            question: "For an exothermic reaction, ΔH is generally:",
            options: ["Positive", "Negative", "Zero", "Infinite"],
            answer: 1
        },
        {
            question: "An isolated system exchanges:",
            options: [
                "Matter only",
                "Energy only",
                "Neither matter nor energy",
                "Both matter and energy"
            ],
            answer: 2
        },
        {
            question: "The SI unit of energy is:",
            options: ["Joule", "Watt", "Newton", "Pascal"],
            answer: 0
        },
        {
            question: "Entropy is related to:",
            options: ["Disorder", "Mass only", "Charge only", "Atomic number"],
            answer: 0
        }
    ],


    /* ---------- MATHEMATICS ---------- */

    "Sets": [
        {
            question: "A set is a:",
            options: [
                "Random collection",
                "Well-defined collection",
                "Number only",
                "Formula"
            ],
            answer: 1
        },
        {
            question: "The empty set contains:",
            options: ["One element", "No element", "Two elements", "Infinite elements"],
            answer: 1
        },
        {
            question: "If a set has n elements, number of subsets is:",
            options: ["n", "n²", "2ⁿ", "2n"],
            answer: 2
        },
        {
            question: "The symbol ∪ represents:",
            options: ["Intersection", "Union", "Difference", "Subset"],
            answer: 1
        },
        {
            question: "The symbol ∩ represents:",
            options: ["Union", "Intersection", "Complement", "Difference"],
            answer: 1
        }
    ],

    "Relations and Functions": [
        {
            question: "A function assigns every element of the domain:",
            options: [
                "No image",
                "Exactly one image",
                "Two images always",
                "Infinite images"
            ],
            answer: 1
        },
        {
            question: "The first component of ordered pairs forms the:",
            options: ["Range", "Domain", "Codomain", "Image"],
            answer: 1
        },
        {
            question: "A function that is both one-one and onto is:",
            options: ["Many-one", "Into", "Bijective", "Constant"],
            answer: 2
        },
        {
            question: "(f ∘ g)(x) means:",
            options: ["f(x) + g(x)", "f(g(x))", "g(f(x)) only", "f(x)g(x)"],
            answer: 1
        },
        {
            question: "A relation from A to B is a subset of:",
            options: ["A + B", "A × B", "A − B", "A/B"],
            answer: 1
        }
    ],

    "Trigonometric Functions": [
        {
            question: "sin 90° is equal to:",
            options: ["0", "1", "-1", "1/2"],
            answer: 1
        },
        {
            question: "cos 0° is equal to:",
            options: ["0", "1", "-1", "1/2"],
            answer: 1
        },
        {
            question: "tan θ is equal to:",
            options: ["cos θ/sin θ", "sin θ/cos θ", "1/sin θ", "1/cos θ"],
            answer: 1
        },
        {
            question: "sin²θ + cos²θ is:",
            options: ["0", "1", "2", "tan θ"],
            answer: 1
        },
        {
            question: "180° is equal to:",
            options: ["π radians", "2π radians", "π/2 radians", "3π radians"],
            answer: 0
        }
    ],

    "Sequences and Series": [
        {
            question: "A sequence is an ordered:",
            options: ["Set of numbers", "Equation", "Graph only", "Matrix"],
            answer: 0
        },
        {
            question: "In an AP, the difference between consecutive terms is:",
            options: ["Variable", "Constant", "Always zero", "Infinite"],
            answer: 1
        },
        {
            question: "The common difference of 2, 5, 8, 11 is:",
            options: ["2", "3", "4", "5"],
            answer: 1
        },
        {
            question: "The first term of an AP is usually represented by:",
            options: ["a", "d", "n", "r"],
            answer: 0
        },
        {
            question: "The common difference of an AP is represented by:",
            options: ["a", "d", "n", "l"],
            answer: 1
        }
    ],

    "Straight Lines": [
        {
            question: "The slope of a horizontal line is:",
            options: ["1", "0", "-1", "Undefined"],
            answer: 1
        },
        {
            question: "The equation of x-axis is:",
            options: ["x = 0", "y = 0", "x = y", "y = 1"],
            answer: 1
        },
        {
            question: "Slope is generally represented by:",
            options: ["m", "x", "y", "c"],
            answer: 0
        },
        {
            question: "The equation y = mx + c is called:",
            options: [
                "Slope-intercept form",
                "Quadratic form",
                "Circle equation",
                "Set form"
            ],
            answer: 0
        },
        {
            question: "Two parallel lines have:",
            options: [
                "Equal slopes",
                "Opposite slopes always",
                "Zero slopes always",
                "No slopes"
            ],
            answer: 0
        }
    ],

    "Limits and Derivatives": [
        {
            question: "The derivative represents the:",
            options: [
                "Rate of change",
                "Total mass",
                "Area only",
                "Constant value"
            ],
            answer: 0
        },
        {
            question: "Derivative of x² is:",
            options: ["x", "2x", "x²", "2"],
            answer: 1
        },
        {
            question: "Derivative of a constant is:",
            options: ["1", "0", "The constant", "x"],
            answer: 1
        },
        {
            question: "The symbol commonly used for derivative is:",
            options: ["d/dx", "∫ only", "Σ", "π"],
            answer: 0
        },
        {
            question: "A limit describes the value approached by a function when:",
            options: [
                "The variable approaches a value",
                "Mass becomes zero",
                "Time stops",
                "Force increases"
            ],
            answer: 0
        }
    ]
};


/* =====================================================
   CONNECT CHAPTER WITH QUIZ
===================================================== */

const oldStartButton = document.getElementById("startQuizBtn");

if (oldStartButton) {

    oldStartButton.addEventListener("click", function () {

        const selectedChapter = chapterSelect.value;

        if (selectedChapter === "") {
            return;
        }

        const chapterQuestions =
            chapterQuizData[selectedChapter];

        if (!chapterQuestions) {

            alert(
                "🚧 Quiz for this chapter is coming soon!"
            );

            return;
        }

        /*
         * Replace the currently selected subject quiz
         * with the selected chapter quiz.
         */

        const quizBox = document.getElementById("quizBox");
        const quizStart = document.getElementById("quizStart");

        const questionNumber =
            document.getElementById("questionNumber");

        const questionText =
            document.getElementById("questionText");

        const optionsContainer =
            document.getElementById("optionsContainer");

        const nextQuestionBtn =
            document.getElementById("nextQuestionBtn");

        const progressBar =
            document.getElementById("quizProgressBar");

        const quizSubjectName =
            document.getElementById("quizSubjectName");

        let chapterIndex = 0;
        let chapterScore = 0;

        quizStart.style.display = "none";
        quizBox.style.display = "block";

        quizSubjectName.textContent =
            selectedChapter;

        function showChapterQuestion() {

            const q = chapterQuestions[chapterIndex];

            questionNumber.textContent =
                `Question ${chapterIndex + 1}/${chapterQuestions.length}`;

            questionText.textContent =
                q.question;

            progressBar.style.width =
                `${((chapterIndex + 1) / chapterQuestions.length) * 100}%`;

            optionsContainer.innerHTML = "";

            nextQuestionBtn.disabled = true;

            q.options.forEach(function (option, index) {

                const button =
                    document.createElement("button");

                button.className = "quiz-option";

                button.textContent =
                    `${String.fromCharCode(65 + index)}. ${option}`;

                button.addEventListener("click", function () {

                    const allOptions =
                        document.querySelectorAll(".quiz-option");

                    allOptions.forEach(function (btn) {
                        btn.classList.add("disabled");
                    });

                    if (index === q.answer) {

                        button.classList.add("correct");
                        chapterScore++;

                    } else {

                        button.classList.add("wrong");

                        allOptions[q.answer]
                            .classList.add("correct");
                    }

                    nextQuestionBtn.disabled = false;
                });

                optionsContainer.appendChild(button);

            });
        }


        /*
         * Next button
         */

        nextQuestionBtn.onclick = function () {

            chapterIndex++;

            if (chapterIndex < chapterQuestions.length) {

                showChapterQuestion();

            } else {

                quizBox.style.display = "none";

                document.getElementById("quizResult")
                    .style.display = "block";

                document.getElementById("finalScore")
                    .textContent =
                    `${chapterScore}/${chapterQuestions.length}`;

                const percentage =
                    (chapterScore / chapterQuestions.length) * 100;

                if (percentage === 100) {

                    document.getElementById("resultMessage")
                        .textContent =
                        "🏆 Perfect! Chapter mastered!";

                } else if (percentage >= 60) {

                    document.getElementById("resultMessage")
                        .textContent =
                        "🌟 Great job! Revise once more!";

                } else {

                    document.getElementById("resultMessage")
                        .textContent =
                        "📚 Revise this chapter and try again!";
                }
            }
        };

        showChapterQuestion();

    });

}

/* =====================================================
   DAILY CHALLENGE
===================================================== */

const dailyQuestions = [
    {
        question: "What is the SI unit of force?",
        options: ["Joule", "Newton", "Watt", "Pascal"],
        answer: 1
    },
    {
        question: "What is the atomic number of Oxygen?",
        options: ["6", "7", "8", "9"],
        answer: 2
    },
    {
        question: "What is the derivative of x²?",
        options: ["x", "2x", "x²", "2"],
        answer: 1
    },
    {
        question: "Which organelle is known as the powerhouse of the cell?",
        options: ["Nucleus", "Ribosome", "Mitochondria", "Golgi Body"],
        answer: 2
    },
    {
        question: "Which word is a noun?",
        options: ["Quickly", "Beautiful", "School", "Run"],
        answer: 2
    }
];

const startDailyChallenge =
    document.getElementById("startDailyChallenge");

const dailyCard =
    document.querySelector(".daily-card");

const dailyQuizBox =
    document.getElementById("dailyQuizBox");

const dailyResult =
    document.getElementById("dailyResult");

const dailyQuestion =
    document.getElementById("dailyQuestion");

const dailyOptions =
    document.getElementById("dailyOptions");

const dailyNextBtn =
    document.getElementById("dailyNextBtn");

const dailyQuestionNumber =
    document.getElementById("dailyQuestionNumber");

const dailyScore =
    document.getElementById("dailyScore");

const dailyProgressBar =
    document.getElementById("dailyProgressBar");

let dailyIndex = 0;
let dailyPoints = 0;


/* START DAILY CHALLENGE */

if (startDailyChallenge) {

    startDailyChallenge.addEventListener("click", function () {

        dailyIndex = 0;
        dailyPoints = 0;

        dailyCard.style.display = "none";
        dailyQuizBox.style.display = "block";
        dailyResult.style.display = "none";

        showDailyQuestion();
    });
}


/* SHOW QUESTION */

function showDailyQuestion() {

    const q = dailyQuestions[dailyIndex];

    dailyQuestionNumber.textContent =
        `Question ${dailyIndex + 1}/${dailyQuestions.length}`;

    dailyScore.textContent =
        `Score: ${dailyPoints}`;

    dailyQuestion.textContent =
        q.question;

    dailyProgressBar.style.width =
        `${((dailyIndex + 1) / dailyQuestions.length) * 100}%`;

    dailyOptions.innerHTML = "";

    dailyNextBtn.disabled = true;

    q.options.forEach(function (option, index) {

        const button =
            document.createElement("button");

        button.className = "daily-option";

        button.textContent =
            `${String.fromCharCode(65 + index)}. ${option}`;

        button.addEventListener("click", function () {

            const allOptions =
                document.querySelectorAll(".daily-option");

            allOptions.forEach(function (btn) {
                btn.classList.add("disabled");
            });

            if (index === q.answer) {

                button.classList.add("correct");

                dailyPoints++;

                dailyScore.textContent =
                    `Score: ${dailyPoints}`;

            } else {

                button.classList.add("wrong");

                allOptions[q.answer]
                    .classList.add("correct");
            }

            dailyNextBtn.disabled = false;
        });

        dailyOptions.appendChild(button);
    });
}


/* NEXT QUESTION */

if (dailyNextBtn) {

    dailyNextBtn.addEventListener("click", function () {

        dailyIndex++;

        if (dailyIndex < dailyQuestions.length) {

            showDailyQuestion();

        } else {

            dailyQuizBox.style.display = "none";
            dailyResult.style.display = "block";

            document.getElementById("dailyFinalScore")
                .textContent =
                `${dailyPoints}/${dailyQuestions.length}`;

            if (dailyPoints === 5) {

                document.getElementById("dailyResultMessage")
                    .textContent =
                    "🏆 Perfect! Amazing work!";

            } else if (dailyPoints >= 3) {

                document.getElementById("dailyResultMessage")
                    .textContent =
                    "🌟 Great job! Keep learning!";

            } else {

                document.getElementById("dailyResultMessage")
                    .textContent =
                    "📚 Keep practicing and try again!";
            }

            updateDailyBestScore();
        }
    });
}


/* BEST SCORE */

function updateDailyBestScore() {

    const oldBest =
        localStorage.getItem("dailyBestScore") || 0;

    if (dailyPoints > Number(oldBest)) {

        localStorage.setItem(
            "dailyBestScore",
            dailyPoints
        );
    }

    document.getElementById("bestScore")
        .textContent =
        `${Math.max(dailyPoints, Number(oldBest))}/5`;
}


/* LOAD BEST SCORE */

const savedBest =
    localStorage.getItem("dailyBestScore");

if (savedBest !== null) {

    document.getElementById("bestScore")
        .textContent =
        `${savedBest}/5`;
}


/* TRY AGAIN */

const dailyTryAgain =
    document.getElementById("dailyTryAgain");

if (dailyTryAgain) {

    dailyTryAgain.addEventListener("click", function () {

        dailyIndex = 0;
        dailyPoints = 0;

        dailyResult.style.display = "none";
        dailyQuizBox.style.display = "block";

        showDailyQuestion();
    });
}

/* =====================================================
   DAILY STREAK SYSTEM
===================================================== */

function getTodayDate() {
    const today = new Date();
    return today.toISOString().split("T")[0];
}


/* MARK CHALLENGE COMPLETED */

function completeDailyChallenge() {

    const today = getTodayDate();

    const lastCompleted =
        localStorage.getItem("lastDailyCompleted");

    let streak =
        Number(localStorage.getItem("dailyStreak")) || 0;

    /* Already completed today */
    if (lastCompleted === today) {
        return;
    }

    /* Check yesterday */
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    const yesterdayDate =
        yesterday.toISOString().split("T")[0];

    if (lastCompleted === yesterdayDate) {
        streak++;
    } else {
        streak = 1;
    }

    localStorage.setItem(
        "dailyStreak",
        streak
    );

    localStorage.setItem(
        "lastDailyCompleted",
        today
    );

    updateDailyStreak();
}


/* UPDATE STREAK ON SCREEN */

function updateDailyStreak() {

    const streak =
        Number(localStorage.getItem("dailyStreak")) || 0;

    const streakElement =
        document.getElementById("dailyStreak");

    if (streakElement) {
        streakElement.textContent = streak;
    }
}


/* UPDATE STATUS */

function updateDailyStatus() {

    const today = getTodayDate();

    const lastCompleted =
        localStorage.getItem("lastDailyCompleted");

    const statusElement =
        document.getElementById("challengeStatus");

    if (!statusElement) return;

    if (lastCompleted === today) {

        statusElement.textContent =
            "Completed";

    } else {

        statusElement.textContent =
            "Ready";
    }
}


/* LOAD DATA WHEN PAGE OPENS */

updateDailyStreak();
updateDailyStatus();


/* CONNECT WITH QUIZ COMPLETION */

const originalDailyNext =
    document.getElementById("dailyNextBtn");

if (originalDailyNext) {

    originalDailyNext.addEventListener(
        "click",
        function () {

            if (
                dailyIndex >=
                dailyQuestions.length
            ) {
                saveDailyProgress();
                completeDailyChallenge();
                updateDailyStatus();
            }

        }
    );
}

/* =====================================================
   PROGRESS DASHBOARD
===================================================== */

function updateProgressDashboard() {

    const bestScore =
        Number(localStorage.getItem("dailyBestScore")) || 0;

    const streak =
        Number(localStorage.getItem("dailyStreak")) || 0;

    const totalQuizzes =
        Number(localStorage.getItem("totalQuizzes")) || 0;

    const average =
        Number(localStorage.getItem("averageScore")) || 0;


    /* Total Quizzes */

    const totalElement =
        document.getElementById("totalQuizzes");

    if (totalElement) {
        totalElement.textContent = totalQuizzes;
    }


    /* Best Score */

    const bestElement =
        document.getElementById("progressBestScore");

    if (bestElement) {
        bestElement.textContent = `${bestScore}/5`;
    }


    /* Streak */

    const streakElement =
        document.getElementById("progressStreak");

    if (streakElement) {
        streakElement.textContent = streak;
    }


    /* Average Score */

    const averageElement =
        document.getElementById("averageScore");

    if (averageElement) {
        averageElement.textContent = `${average}%`;
    }


    /* Overall Progress */

    const progress =
        Math.min(average, 100);

    const progressText =
        document.getElementById("overallProgressText");

    const progressFill =
        document.getElementById("overallProgressFill");

    if (progressText) {
        progressText.textContent =
            `${progress}%`;
    }

    if (progressFill) {
        progressFill.style.width =
            `${progress}%`;
    }


    /* Achievement */

    const achievementTitle =
        document.getElementById("achievementTitle");

    const achievementText =
        document.getElementById("achievementText");

    if (!achievementTitle || !achievementText) {
        return;
    }


    if (streak >= 7) {

        achievementTitle.textContent =
            "🔥 7 Day Champion!";

        achievementText.textContent =
            "Amazing! You completed a 7-day learning streak.";

    } else if (bestScore === 5) {

        achievementTitle.textContent =
            "🏆 Perfect Score!";

        achievementText.textContent =
            "You achieved a perfect Daily Challenge score.";

    } else if (streak >= 3) {

        achievementTitle.textContent =
            "⭐ Consistent Learner!";

        achievementText.textContent =
            "Great consistency! Keep your streak going.";

    } else if (totalQuizzes >= 5) {

        achievementTitle.textContent =
            "📚 Quiz Explorer!";

        achievementText.textContent =
            "You have completed 5 or more quizzes.";

    } else {

        achievementTitle.textContent =
            "🎯 Keep Going!";

        achievementText.textContent =
            "Complete quizzes to unlock achievements.";
    }
}


/* Load dashboard */

updateProgressDashboard();

/* =====================================================
   CONNECT QUIZ WITH PROGRESS DASHBOARD
===================================================== */

function saveQuizProgress(score, total) {

    let completed =
        Number(localStorage.getItem("totalQuizzes")) || 0;

    let totalScore =
        Number(localStorage.getItem("totalScore")) || 0;

    let totalQuestions =
        Number(localStorage.getItem("totalQuestions")) || 0;


    // One more quiz completed
    completed++;

    // Save score
    totalScore += score;

    // Save total questions
    totalQuestions += total;


    localStorage.setItem(
        "totalQuizzes",
        completed
    );

    localStorage.setItem(
        "totalScore",
        totalScore
    );

    localStorage.setItem(
        "totalQuestions",
        totalQuestions
    );


    // Calculate average percentage
    const average =
        totalQuestions > 0
            ? Math.round((totalScore / totalQuestions) * 100)
            : 0;

    localStorage.setItem(
        "averageScore",
        average
    );


    // Update dashboard
    updateProgressDashboard();
}


/* =====================================================
   DAILY CHALLENGE PROGRESS
===================================================== */

function saveDailyProgress() {

    const alreadyCounted =
        sessionStorage.getItem("dailyQuizCounted");

    if (alreadyCounted === "yes") {
        return;
    }

    saveQuizProgress(
        dailyPoints,
        dailyQuestions.length
    );

    sessionStorage.setItem(
        "dailyQuizCounted",
        "yes"
    );
}

/* =====================================================
   STUDY PLANNER - WORKING SYSTEM
===================================================== */

const studyTaskInput =
    document.getElementById("studyTaskInput");

const addStudyTask =
    document.getElementById("addStudyTask");

const taskList =
    document.getElementById("taskList");

const totalTasks =
    document.getElementById("totalTasks");

const completedTasks =
    document.getElementById("completedTasks");

const pendingTasks =
    document.getElementById("pendingTasks");


let studyTasks =
    JSON.parse(localStorage.getItem("studyTasks")) || [];


/* RENDER TASKS */

function renderStudyTasks() {

    taskList.innerHTML = "";

    if (studyTasks.length === 0) {

        taskList.innerHTML = `
            <p id="noTasks">
                📚 No tasks yet. Add your first study task!
            </p>
        `;

    } else {

        studyTasks.forEach(function(task, index) {

            const taskItem =
                document.createElement("div");

            taskItem.className =
                "study-task";

            if (task.completed) {
                taskItem.classList.add("completed");
            }

            taskItem.innerHTML = `
                <input
                    type="checkbox"
                    class="task-complete"
                    ${task.completed ? "checked" : ""}
                >

                <span>${task.text}</span>

                <button class="delete-task">
                    🗑️
                </button>
            `;


            /* COMPLETE TASK */

            const checkbox =
                taskItem.querySelector(".task-complete");

            checkbox.addEventListener("change", function() {

                studyTasks[index].completed =
                    checkbox.checked;

                saveStudyTasks();
                renderStudyTasks();

            });


            /* DELETE TASK */

            const deleteButton =
                taskItem.querySelector(".delete-task");

            deleteButton.addEventListener("click", function() {

                studyTasks.splice(index, 1);

                saveStudyTasks();
                renderStudyTasks();

            });


            taskList.appendChild(taskItem);
        });
    }

    updatePlannerStats();
}


/* ADD TASK */

if (addStudyTask) {

    addStudyTask.addEventListener("click", function() {

        const taskText =
            studyTaskInput.value.trim();

        if (taskText === "") {

            alert("✏️ Please enter a study task!");

            return;
        }


        studyTasks.push({
            text: taskText,
            completed: false
        });


        studyTaskInput.value = "";

        saveStudyTasks();
        renderStudyTasks();

    });
}


/* ENTER KEY */

if (studyTaskInput) {

    studyTaskInput.addEventListener("keydown", function(event) {

        if (event.key === "Enter") {
            addStudyTask.click();
        }

    });
}


/* SAVE TASKS */

function saveStudyTasks() {

    localStorage.setItem(
        "studyTasks",
        JSON.stringify(studyTasks)
    );

}


/* UPDATE STATS */

function updatePlannerStats() {

    const total =
        studyTasks.length;

    const completed =
        studyTasks.filter(function(task) {
            return task.completed;
        }).length;

    const pending =
        total - completed;


    totalTasks.textContent =
        total;

    completedTasks.textContent =
        completed;

    pendingTasks.textContent =
        pending;
}


/* LOAD TASKS */

renderStudyTasks();

/* =========================
   QUICK NOTES
========================= */

const noteTitle = document.getElementById("noteTitle");
const noteText = document.getElementById("noteText");
const saveNoteBtn = document.getElementById("saveNoteBtn");
const notesList = document.getElementById("notesList");

let savedNotes =
    JSON.parse(localStorage.getItem("studentNotes")) || [];

function displayNotes() {

    notesList.innerHTML = "";

    if (savedNotes.length === 0) {
        notesList.innerHTML =
            '<p class="no-notes">No notes saved yet 📚</p>';
        return;
    }

    savedNotes.forEach((note, index) => {

        const noteCard = document.createElement("div");

        noteCard.innerHTML = `
            <h3>📝 ${note.title}</h3>
            <p>${note.text}</p>

            <button onclick="deleteNote(${index})">
                🗑️ Delete
            </button>
        `;

        noteCard.style.padding = "15px";
        noteCard.style.marginBottom = "10px";
        noteCard.style.borderRadius = "12px";
        noteCard.style.background =
            "rgba(255,255,255,0.06)";

        notesList.appendChild(noteCard);
    });
}

saveNoteBtn.addEventListener("click", () => {

    const title = noteTitle.value.trim();
    const text = noteText.value.trim();

    if (!title || !text) {
        alert("Please write both title and note 📚");
        return;
    }

    savedNotes.push({
        title: title,
        text: text
    });

    localStorage.setItem(
        "studentNotes",
        JSON.stringify(savedNotes)
    );

    noteTitle.value = "";
    noteText.value = "";

    displayNotes();
});

function deleteNote(index) {

    savedNotes.splice(index, 1);

    localStorage.setItem(
        "studentNotes",
        JSON.stringify(savedNotes)
    );

    displayNotes();
}

displayNotes();