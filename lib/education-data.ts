import type { Subject, CatechismQuestion } from "./types";

export const subjects: Subject[] = [
  {
    id: "bible",
    name: "Bible & Theology",
    slug: "bible-theology",
    description:
      "Systematic theology through the Westminster Shorter Catechism, Bible survey, and church history.",
    icon: "BookOpen",
    color: "indigo",
    topics: [
      {
        id: "wsc-1",
        subjectId: "bible",
        name: "The Chief End of Man",
        slug: "chief-end-of-man",
        description:
          "Westminster Shorter Catechism Questions 1-3: Our purpose, God's Word, and what the Scriptures teach.",
        order: 1,
        lessons: [
          {
            id: "wsc-1-1",
            topicId: "wsc-1",
            subjectId: "bible",
            title: "What Is the Chief End of Man?",
            slug: "chief-end-of-man",
            description:
              "WSC Q1: Man's chief end is to glorify God, and to enjoy him forever.",
            duration: 5,
            order: 1,
            scripture: "1 Corinthians 10:31; Romans 11:36; Psalm 73:25-28",
            quiz: [
              {
                id: "q-wsc1-1",
                lessonId: "wsc-1-1",
                question:
                  "According to the Westminster Shorter Catechism, what is the chief end of man?",
                options: [
                  "To glorify God, and to enjoy him forever",
                  "To be happy and prosperous",
                  "To love your neighbor as yourself",
                  "To obey the Ten Commandments",
                ],
                correctIndex: 0,
                explanation:
                  "WSC Q1: 'Man's chief end is to glorify God, and to enjoy him forever.' This summarizes our entire purpose — both worship (glorifying God) and delight (enjoying him).",
              },
              {
                id: "q-wsc1-2",
                lessonId: "wsc-1-1",
                question:
                  "Which verse says 'Whether you eat or drink, or whatever you do, do all to the glory of God'?",
                options: [
                  "Romans 8:28",
                  "1 Corinthians 10:31",
                  "John 3:16",
                  "Philippians 4:13",
                ],
                correctIndex: 1,
                explanation:
                  "1 Corinthians 10:31 is a key proof text for WSC Q1, showing that glorifying God extends to every area of life.",
              },
              {
                id: "q-wsc1-3",
                lessonId: "wsc-1-1",
                question:
                  "The catechism teaches that our chief end involves two things. What are they?",
                options: [
                  "Glorifying God and enjoying him",
                  "Obeying God and fearing him",
                  "Loving God and loving neighbor",
                  "Knowing God and serving him",
                ],
                correctIndex: 0,
                explanation:
                  "The two aspects are glorifying God (worship, obedience, living for his honor) and enjoying him (finding our deepest satisfaction in God himself).",
              },
            ],
          },
          {
            id: "wsc-1-2",
            topicId: "wsc-1",
            subjectId: "bible",
            title: "What Rule Has God Given?",
            slug: "what-rule-has-god-given",
            description:
              "WSC Q2: The Scriptures of the Old and New Testaments are the only rule to direct us.",
            duration: 6,
            order: 2,
            scripture: "2 Timothy 3:16; Ephesians 2:20; 1 John 1:3-4",
            quiz: [
              {
                id: "q-wsc2-1",
                lessonId: "wsc-1-2",
                question:
                  "What rule has God given to direct us how we may glorify and enjoy him?",
                options: [
                  "The traditions of the church",
                  "The Word of God, the Scriptures of the Old and New Testaments",
                  "The writings of the church fathers",
                  "Our conscience and reason",
                ],
                correctIndex: 1,
                explanation:
                  "WSC Q2: 'The Word of God, which is contained in the Scriptures of the Old and New Testaments, is the only rule to direct us how we may glorify and enjoy him.'",
              },
              {
                id: "q-wsc2-2",
                lessonId: "wsc-1-2",
                question:
                  "2 Timothy 3:16 teaches that all Scripture is:",
                options: [
                  "Helpful for some matters of faith",
                  "Breathed out by God and profitable",
                  "A collection of human wisdom",
                  "Only applicable to the original audience",
                ],
                correctIndex: 1,
                explanation:
                  "2 Timothy 3:16: 'All Scripture is breathed out by God and profitable for teaching, for reproof, for correction, and for training in righteousness.'",
              },
              {
                id: "q-wsc2-3",
                lessonId: "wsc-1-2",
                question:
                  "The Reformed doctrine of 'Sola Scriptura' means:",
                options: [
                  "Scripture is the only book worth reading",
                  "Scripture alone is the final authority for faith and practice",
                  "We should only read Scripture and nothing else",
                  "The Old Testament is no longer relevant",
                ],
                correctIndex: 1,
                explanation:
                  "Sola Scriptura ('Scripture alone') means the Bible is the only infallible rule of faith and practice. It doesn't mean we reject all other books, but that Scripture has final authority.",
              },
            ],
          },
          {
            id: "wsc-1-3",
            topicId: "wsc-1",
            subjectId: "bible",
            title: "What Do the Scriptures Principally Teach?",
            slug: "what-scriptures-teach",
            description:
              "WSC Q3: What man is to believe concerning God, and what duty God requires of man.",
            duration: 5,
            order: 3,
            scripture: "Micah 6:8; John 20:31; 2 Timothy 1:13",
            quiz: [
              {
                id: "q-wsc3-1",
                lessonId: "wsc-1-3",
                question:
                  "What do the Scriptures principally teach?",
                options: [
                  "How to live a successful life",
                  "What man is to believe concerning God, and what duty God requires of man",
                  "The history of ancient Israel",
                  "How to get to heaven",
                ],
                correctIndex: 1,
                explanation:
                  "WSC Q3 identifies two great divisions of Scripture's teaching: doctrine (what to believe about God) and duty (what God requires of us). This maps to the catechism's own structure.",
              },
              {
                id: "q-wsc3-2",
                lessonId: "wsc-1-3",
                question:
                  "The two divisions of Scripture's teaching are:",
                options: [
                  "Law and Prophets",
                  "Belief and duty",
                  "Old and New Testament",
                  "History and poetry",
                ],
                correctIndex: 1,
                explanation:
                  "The catechism divides Scripture's teaching into belief (what we are to believe about God — the Creed) and duty (what God requires — the Commandments, Prayer).",
              },
            ],
          },
        ],
      },
      {
        id: "wsc-2",
        subjectId: "bible",
        name: "The Nature of God",
        slug: "nature-of-god",
        description:
          "WSC Questions 4-6: God as Spirit, the unity of God, and the Trinity.",
        order: 2,
        lessons: [
          {
            id: "wsc-2-1",
            topicId: "wsc-2",
            subjectId: "bible",
            title: "God Is Spirit",
            slug: "god-is-spirit",
            description:
              "WSC Q4: God is a Spirit, infinite, eternal, and unchangeable.",
            duration: 7,
            order: 1,
            scripture: "John 4:24; Psalm 147:5; Malachi 3:6; James 1:17",
            quiz: [
              {
                id: "q-wsc4-1",
                lessonId: "wsc-2-1",
                question: "According to WSC Q4, what is God?",
                options: [
                  "God is a Spirit, infinite, eternal, and unchangeable",
                  "God is a powerful being who created the world",
                  "God is love",
                  "God is the supreme force in the universe",
                ],
                correctIndex: 0,
                explanation:
                  "WSC Q4: 'God is a Spirit, infinite, eternal, and unchangeable, in his being, wisdom, power, holiness, justice, goodness, and truth.'",
              },
              {
                id: "q-wsc4-2",
                lessonId: "wsc-2-1",
                question:
                  "The catechism lists attributes in which God is infinite, eternal, and unchangeable. Which is NOT in the list?",
                options: [
                  "Wisdom",
                  "Creativity",
                  "Holiness",
                  "Justice",
                ],
                correctIndex: 1,
                explanation:
                  "The full list from WSC Q4 is: being, wisdom, power, holiness, justice, goodness, and truth. 'Creativity' is not included in this specific answer, though God is certainly creative.",
              },
              {
                id: "q-wsc4-3",
                lessonId: "wsc-2-1",
                question:
                  "What does 'immutable' mean when applied to God?",
                options: [
                  "God can do anything",
                  "God is everywhere",
                  "God does not change",
                  "God knows everything",
                ],
                correctIndex: 2,
                explanation:
                  "Immutability means unchangeableness. Malachi 3:6: 'For I the LORD do not change.' God's character, purposes, and promises are eternally constant.",
              },
            ],
          },
          {
            id: "wsc-2-2",
            topicId: "wsc-2",
            subjectId: "bible",
            title: "The Holy Trinity",
            slug: "the-holy-trinity",
            description:
              "WSC Q5-6: One God in three persons — Father, Son, and Holy Spirit.",
            duration: 8,
            order: 2,
            scripture:
              "Matthew 28:19; 2 Corinthians 13:14; 1 John 5:7; Deuteronomy 6:4",
            quiz: [
              {
                id: "q-wsc5-1",
                lessonId: "wsc-2-2",
                question: "How many Gods are there?",
                options: [
                  "Three Gods working together",
                  "One only, the living and true God",
                  "One God who appears in three modes",
                  "Many gods, but one supreme God",
                ],
                correctIndex: 1,
                explanation:
                  "WSC Q5: 'There is but one only, the living and true God.' Christianity is strictly monotheistic. Deuteronomy 6:4: 'Hear, O Israel: The LORD our God, the LORD is one.'",
              },
              {
                id: "q-wsc5-2",
                lessonId: "wsc-2-2",
                question:
                  "How many persons are there in the Godhead?",
                options: [
                  "One person with three roles",
                  "Two persons — Father and Son",
                  "Three persons — Father, Son, and Holy Spirit",
                  "The Bible doesn't specify",
                ],
                correctIndex: 2,
                explanation:
                  "WSC Q6: 'There are three persons in the Godhead: the Father, the Son, and the Holy Ghost; and these three are one God, the same in substance, equal in power and glory.'",
              },
              {
                id: "q-wsc5-3",
                lessonId: "wsc-2-2",
                question:
                  "The three persons of the Trinity are:",
                options: [
                  "Different in substance but united in purpose",
                  "The same in substance, equal in power and glory",
                  "Equal in glory but different in power",
                  "One person appearing in different forms",
                ],
                correctIndex: 1,
                explanation:
                  "The catechism carefully states they are 'the same in substance, equal in power and glory' — affirming both the unity of God's being and the equality of the three persons.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "history",
    name: "History",
    slug: "history",
    description:
      "Providential history from creation to the modern era — seeing God's hand in the story of the world.",
    icon: "Landmark",
    color: "amber",
    topics: [
      {
        id: "hist-ancient",
        subjectId: "history",
        name: "The Ancient World",
        slug: "ancient-world",
        description:
          "From creation through the patriarchs — the foundations of civilization under God's providence.",
        order: 1,
        lessons: [
          {
            id: "hist-1-1",
            topicId: "hist-ancient",
            subjectId: "history",
            title: "Creation and the Fall",
            slug: "creation-and-the-fall",
            description:
              "The beginning of all history: God creates the world, and man falls into sin.",
            duration: 7,
            order: 1,
            scripture: "Genesis 1-3",
            quiz: [
              {
                id: "q-hist1-1",
                lessonId: "hist-1-1",
                question: "In the biblical account, how long did God take to create the world?",
                options: [
                  "Six days, and he rested on the seventh",
                  "One instant moment",
                  "An indefinite period of time",
                  "Forty days and forty nights",
                ],
                correctIndex: 0,
                explanation:
                  "Genesis 1-2 records that God created the heavens and the earth in six days and rested on the seventh, establishing the pattern for the weekly Sabbath.",
              },
              {
                id: "q-hist1-2",
                lessonId: "hist-1-1",
                question: "What was the result of Adam and Eve's disobedience?",
                options: [
                  "Nothing happened immediately",
                  "Sin and death entered the world",
                  "They became like angels",
                  "God destroyed the earth",
                ],
                correctIndex: 1,
                explanation:
                  "Romans 5:12: 'Sin came into the world through one man, and death through sin.' The Fall brought spiritual and physical death, and corrupted all of creation.",
              },
              {
                id: "q-hist1-3",
                lessonId: "hist-1-1",
                question:
                  "What promise did God make in Genesis 3:15 (the protoevangelium)?",
                options: [
                  "That the earth would be destroyed by flood",
                  "That the seed of the woman would crush the serpent's head",
                  "That Adam would return to Eden",
                  "That man would live forever on earth",
                ],
                correctIndex: 1,
                explanation:
                  "Genesis 3:15 is called the protoevangelium (first gospel) — God promises that the offspring of the woman will crush the serpent's head. This is the first promise of Christ, the Redeemer.",
              },
            ],
          },
          {
            id: "hist-1-2",
            topicId: "hist-ancient",
            subjectId: "history",
            title: "The Flood and the Nations",
            slug: "flood-and-nations",
            description:
              "God's judgment through the Flood and the spread of nations from Noah's sons.",
            duration: 6,
            order: 2,
            scripture: "Genesis 6-11",
            quiz: [
              {
                id: "q-hist2-1",
                lessonId: "hist-1-2",
                question: "Why did God send the Flood?",
                options: [
                  "To water the crops",
                  "Because the wickedness of man was great in the earth",
                  "To test Noah's faith",
                  "Because of a natural disaster",
                ],
                correctIndex: 1,
                explanation:
                  "Genesis 6:5: 'The LORD saw that the wickedness of man was great in the earth, and that every intention of the thoughts of his heart was only evil continually.' The Flood was God's righteous judgment on sin.",
              },
              {
                id: "q-hist2-2",
                lessonId: "hist-1-2",
                question: "What happened at the Tower of Babel?",
                options: [
                  "God confuted their languages and scattered them",
                  "God destroyed the tower with lightning",
                  "The people finished the tower and reached heaven",
                  "Nothing — it is only a myth",
                ],
                correctIndex: 0,
                explanation:
                  "Genesis 11:7-9: God confused the language of the people and scattered them over the face of the earth. This explains the origin of nations and languages under God's providence.",
              },
            ],
          },
          {
            id: "hist-1-3",
            topicId: "hist-ancient",
            subjectId: "history",
            title: "Abraham and the Covenant",
            slug: "abraham-and-covenant",
            description:
              "God calls Abraham and establishes his covenant — the foundation of redemptive history.",
            duration: 7,
            order: 3,
            scripture: "Genesis 12-22",
            quiz: [
              {
                id: "q-hist3-1",
                lessonId: "hist-1-3",
                question: "What did God promise Abraham in Genesis 12:1-3?",
                options: [
                  "A great nation, blessing, and that all families of the earth would be blessed",
                  "Immediate wealth and power",
                  "A kingdom in Egypt",
                  "That he would never face hardship",
                ],
                correctIndex: 0,
                explanation:
                  "The Abrahamic covenant includes land, offspring ('a great nation'), and universal blessing ('in you all the families of the earth shall be blessed') — ultimately fulfilled in Christ.",
              },
              {
                id: "q-hist3-2",
                lessonId: "hist-1-3",
                question:
                  "What is the significance of the covenant in Reformed theology?",
                options: [
                  "It is a minor detail in the narrative",
                  "It is the central framework for understanding redemptive history",
                  "It only applies to Old Testament Israel",
                  "It was replaced entirely by the New Testament",
                ],
                correctIndex: 1,
                explanation:
                  "Covenant theology is central to Reformed understanding. God's covenants (with Adam, Noah, Abraham, Moses, David, and the New Covenant) form the backbone of redemptive history, all pointing to Christ.",
              },
            ],
          },
        ],
      },
      {
        id: "hist-classical",
        subjectId: "history",
        name: "Classical Civilizations",
        slug: "classical-civilizations",
        description:
          "Greece and Rome — God's providence preparing the world for the coming of Christ.",
        order: 2,
        lessons: [
          {
            id: "hist-2-1",
            topicId: "hist-classical",
            subjectId: "history",
            title: "Greece: Philosophy and Providence",
            slug: "greece-philosophy-providence",
            description:
              "How Greek philosophy and the Greek language prepared the world for the Gospel.",
            duration: 8,
            order: 1,
            scripture: "Acts 17:22-31; Galatians 4:4",
            quiz: [
              {
                id: "q-hist4-1",
                lessonId: "hist-2-1",
                question:
                  "How did Greek culture providentially prepare for the spread of the Gospel?",
                options: [
                  "Greek philosophy replaced the need for the Gospel",
                  "The Greek language became a common tongue across the Mediterranean, enabling Gospel communication",
                  "Greek gods were actually the true gods",
                  "Greece conquered Israel and forced them to abandon their faith",
                ],
                correctIndex: 1,
                explanation:
                  "Greek (Koine) became the common language of the Mediterranean world, which is why the New Testament was written in Greek. God providentially prepared a common language for the spread of the Gospel.",
              },
              {
                id: "q-hist4-2",
                lessonId: "hist-2-1",
                question:
                  "In Acts 17, Paul preached at the Areopagus in Athens. What was his approach?",
                options: [
                  "He condemned all Greek thought as worthless",
                  "He used their own poets and altar 'to the unknown god' as a starting point",
                  "He refused to engage with Greek philosophy",
                  "He spoke only in Hebrew",
                ],
                correctIndex: 1,
                explanation:
                  "Paul quoted Greek poets and used their 'altar to the unknown god' to proclaim the true God. This shows wisdom in engaging culture while pointing to the truth of Christ.",
              },
            ],
          },
          {
            id: "hist-2-2",
            topicId: "hist-classical",
            subjectId: "history",
            title: "Rome: The Fullness of Time",
            slug: "rome-fullness-of-time",
            description:
              "How the Pax Romana, Roman roads, and Roman law set the stage for Christ's birth.",
            duration: 7,
            order: 2,
            scripture: "Galatians 4:4-5; Luke 2:1-7",
            quiz: [
              {
                id: "q-hist5-1",
                lessonId: "hist-2-2",
                question:
                  "What does 'the fullness of time' (Galatians 4:4) refer to?",
                options: [
                  "A random point in history",
                  "God's sovereignly appointed time when all conditions were prepared for Christ's coming",
                  "The end of the world",
                  "When Israel was at its most powerful",
                ],
                correctIndex: 1,
                explanation:
                  "Galatians 4:4: 'When the fullness of time had come, God sent forth his Son.' God orchestrated history — Roman roads, peace, common language, Jewish diaspora — to perfectly prepare for the Gospel's spread.",
              },
              {
                id: "q-hist5-2",
                lessonId: "hist-2-2",
                question:
                  "Which Roman infrastructure aided the spread of Christianity?",
                options: [
                  "Roman coliseums",
                  "Roman roads, common law, and the Pax Romana (Roman peace)",
                  "Roman temples",
                  "Roman military conquest only",
                ],
                correctIndex: 1,
                explanation:
                  "Roman roads connected the empire, making travel safe and fast. The Pax Romana provided stability. Roman citizenship (like Paul's) gave legal protections. All of these providentially aided the Gospel's spread.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "science",
    name: "Science",
    slug: "science",
    description:
      "Exploring God's creation through the scientific method — fearfully and wonderfully made.",
    icon: "Microscope",
    color: "emerald",
    topics: [
      {
        id: "sci-creation",
        subjectId: "science",
        name: "God's Creation",
        slug: "gods-creation",
        description:
          "The wonder of the created world and the tools we use to study it.",
        order: 1,
        lessons: [
          {
            id: "sci-1-1",
            topicId: "sci-creation",
            subjectId: "science",
            title: "The Wonder of Creation",
            slug: "wonder-of-creation",
            description:
              "How studying science reveals the wisdom and power of the Creator.",
            duration: 6,
            order: 1,
            scripture: "Psalm 19:1-6; Romans 1:20",
            quiz: [
              {
                id: "q-sci1-1",
                lessonId: "sci-1-1",
                question:
                  "According to Psalm 19:1, what do the heavens declare?",
                options: [
                  "The vastness of space",
                  "The glory of God",
                  "The age of the universe",
                  "Scientific theories",
                ],
                correctIndex: 1,
                explanation:
                  "Psalm 19:1: 'The heavens declare the glory of God, and the sky above proclaims his handiwork.' Creation itself is a testimony to God's existence, wisdom, and power.",
              },
              {
                id: "q-sci1-2",
                lessonId: "sci-1-1",
                question:
                  "Romans 1:20 teaches that God's attributes are clearly seen through:",
                options: [
                  "Human philosophy",
                  "The things that have been made (creation)",
                  "Scientific textbooks",
                  "Religious traditions only",
                ],
                correctIndex: 1,
                explanation:
                  "Romans 1:20: 'His invisible attributes, namely, his eternal power and divine nature, have been clearly perceived, ever since the creation of the world, in the things that have been made.'",
              },
            ],
          },
          {
            id: "sci-1-2",
            topicId: "sci-creation",
            subjectId: "science",
            title: "The Scientific Method",
            slug: "scientific-method",
            description:
              "How observation, hypothesis, and experimentation help us understand God's orderly creation.",
            duration: 6,
            order: 2,
            scripture: "Proverbs 25:2",
            quiz: [
              {
                id: "q-sci2-1",
                lessonId: "sci-1-2",
                question:
                  "What are the basic steps of the scientific method?",
                options: [
                  "Observe, hypothesize, experiment, analyze, conclude",
                  "Guess, test, publish",
                  "Read, memorize, repeat",
                  "Believe, assume, confirm",
                ],
                correctIndex: 0,
                explanation:
                  "The scientific method is an orderly process: observation, forming a hypothesis, designing experiments, analyzing results, and drawing conclusions. This orderly process is possible because God created an orderly universe.",
              },
              {
                id: "q-sci2-2",
                lessonId: "sci-1-2",
                question:
                  "Why can Christians have confidence in the regularity of nature?",
                options: [
                  "Nature is self-sustaining",
                  "God faithfully upholds the laws of nature he established",
                  "Science proves nature is eternal",
                  "Randomness governs everything",
                ],
                correctIndex: 1,
                explanation:
                  "Because God is faithful and orderly (1 Cor 14:33), the natural world operates according to consistent laws. This is why science is even possible — God sustains an intelligible universe.",
              },
            ],
          },
        ],
      },
      {
        id: "sci-life",
        subjectId: "science",
        name: "Life Science",
        slug: "life-science",
        description:
          "Exploring the complexity and design of living organisms.",
        order: 2,
        lessons: [
          {
            id: "sci-2-1",
            topicId: "sci-life",
            subjectId: "science",
            title: "Cells: The Building Blocks of Life",
            slug: "cells-building-blocks",
            description:
              "The incredible complexity of cells — the smallest unit of life.",
            duration: 7,
            order: 1,
            scripture: "Psalm 139:14",
            quiz: [
              {
                id: "q-sci3-1",
                lessonId: "sci-2-1",
                question:
                  "What is the basic unit of all living organisms?",
                options: ["The atom", "The cell", "The molecule", "DNA"],
                correctIndex: 1,
                explanation:
                  "The cell is the fundamental unit of life. Every living organism is made up of one or more cells, each containing the machinery needed for life.",
              },
              {
                id: "q-sci3-2",
                lessonId: "sci-2-1",
                question:
                  "What organelle is known as the 'powerhouse of the cell'?",
                options: [
                  "Nucleus",
                  "Ribosome",
                  "Mitochondria",
                  "Cell membrane",
                ],
                correctIndex: 2,
                explanation:
                  "Mitochondria convert nutrients into ATP (energy). Their incredible complexity — with their own DNA — points to the wisdom of the Creator who designed such intricate machinery.",
              },
              {
                id: "q-sci3-3",
                lessonId: "sci-2-1",
                question:
                  "Which Psalm says 'I am fearfully and wonderfully made'?",
                options: [
                  "Psalm 23",
                  "Psalm 139",
                  "Psalm 119",
                  "Psalm 1",
                ],
                correctIndex: 1,
                explanation:
                  "Psalm 139:14: 'I praise you, for I am fearfully and wonderfully made. Wonderful are your works; my soul knows it very well.' The complexity of cells confirms this truth.",
              },
            ],
          },
          {
            id: "sci-2-2",
            topicId: "sci-life",
            subjectId: "science",
            title: "The Human Body: Fearfully Made",
            slug: "human-body-fearfully-made",
            description:
              "Major body systems and how they reflect God's design and wisdom.",
            duration: 8,
            order: 2,
            scripture: "Psalm 139:13-16; 1 Corinthians 12:12-27",
            quiz: [
              {
                id: "q-sci4-1",
                lessonId: "sci-2-2",
                question:
                  "Which body system transports blood, oxygen, and nutrients throughout the body?",
                options: [
                  "Nervous system",
                  "Circulatory system",
                  "Digestive system",
                  "Skeletal system",
                ],
                correctIndex: 1,
                explanation:
                  "The circulatory system (heart, blood vessels, blood) transports oxygen, nutrients, and waste products. The heart beats about 100,000 times per day — a remarkable testimony to God's design.",
              },
              {
                id: "q-sci4-2",
                lessonId: "sci-2-2",
                question:
                  "In 1 Corinthians 12, Paul compares the church to:",
                options: [
                  "A building",
                  "A human body with many parts",
                  "An army",
                  "A family tree",
                ],
                correctIndex: 1,
                explanation:
                  "Paul uses the human body as an analogy for the church: many parts, each with different functions, but all necessary and all working together. This shows how God's design in nature reflects spiritual truth.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "math",
    name: "Mathematics",
    slug: "mathematics",
    description:
      "The language of God's orderly creation — from arithmetic to algebra.",
    icon: "Calculator",
    color: "sky",
    topics: [
      {
        id: "math-foundations",
        subjectId: "math",
        name: "Foundations of Mathematics",
        slug: "foundations",
        description:
          "Why mathematics works: the order, logic, and beauty that reflect God's nature.",
        order: 1,
        lessons: [
          {
            id: "math-1-1",
            topicId: "math-foundations",
            subjectId: "math",
            title: "God's Order in Numbers",
            slug: "gods-order-in-numbers",
            description:
              "How mathematical order reflects the character of the God who created an intelligible universe.",
            duration: 5,
            order: 1,
            scripture: "Isaiah 40:26; 1 Corinthians 14:33",
            quiz: [
              {
                id: "q-math1-1",
                lessonId: "math-1-1",
                question:
                  "Why can Christians trust that mathematical laws are reliable?",
                options: [
                  "Humans invented math, so we control it",
                  "God created an orderly universe governed by consistent laws",
                  "Math is just a useful fiction",
                  "Mathematical laws change over time",
                ],
                correctIndex: 1,
                explanation:
                  "Because God is a God of order (1 Cor 14:33), not chaos, the universe operates according to consistent mathematical laws. Math 'works' because God designed reality to be intelligible.",
              },
              {
                id: "q-math1-2",
                lessonId: "math-1-1",
                question:
                  "What does it mean that mathematics is 'discovered' rather than 'invented'?",
                options: [
                  "Humans created mathematical truths from nothing",
                  "Mathematical relationships exist in God's creation and we uncover them",
                  "Math is subjective and personal",
                  "Only modern cultures understand math",
                ],
                correctIndex: 1,
                explanation:
                  "From a Christian worldview, mathematical truths exist because God built them into the fabric of creation. We discover patterns God has woven into reality — like the Fibonacci sequence in nature.",
              },
            ],
          },
          {
            id: "math-1-2",
            topicId: "math-foundations",
            subjectId: "math",
            title: "Place Value and Number Systems",
            slug: "place-value",
            description:
              "Understanding how our number system works — ones, tens, hundreds, and beyond.",
            duration: 6,
            order: 2,
            quiz: [
              {
                id: "q-math2-1",
                lessonId: "math-1-2",
                question: "In the number 3,472, what is the value of the digit 4?",
                options: ["4", "40", "400", "4,000"],
                correctIndex: 2,
                explanation:
                  "The digit 4 is in the hundreds place, so its value is 4 × 100 = 400.",
              },
              {
                id: "q-math2-2",
                lessonId: "math-1-2",
                question: "What base does our standard number system use?",
                options: ["Base 2", "Base 8", "Base 10", "Base 16"],
                correctIndex: 2,
                explanation:
                  "Our standard number system is base 10 (decimal), meaning each place value is a power of 10. This likely developed because humans have 10 fingers.",
              },
              {
                id: "q-math2-3",
                lessonId: "math-1-2",
                question: "What is 2,345 written in expanded form?",
                options: [
                  "2 + 3 + 4 + 5",
                  "2000 + 300 + 40 + 5",
                  "2345",
                  "2 × 3 × 4 × 5",
                ],
                correctIndex: 1,
                explanation:
                  "Expanded form shows the value of each digit: 2,345 = 2,000 + 300 + 40 + 5.",
              },
            ],
          },
        ],
      },
      {
        id: "math-operations",
        subjectId: "math",
        name: "Operations and Problem Solving",
        slug: "operations",
        description: "Addition, subtraction, multiplication, and division — the tools of mathematical reasoning.",
        order: 2,
        lessons: [
          {
            id: "math-2-1",
            topicId: "math-operations",
            subjectId: "math",
            title: "Addition and Subtraction",
            slug: "addition-subtraction",
            description: "Mastering addition and subtraction with multi-digit numbers.",
            duration: 6,
            order: 1,
            quiz: [
              {
                id: "q-math3-1",
                lessonId: "math-2-1",
                question: "What is 847 + 365?",
                options: ["1,112", "1,212", "1,202", "1,312"],
                correctIndex: 1,
                explanation: "847 + 365: 7+5=12 (write 2, carry 1), 4+6+1=11 (write 1, carry 1), 8+3+1=12. Answer: 1,212.",
              },
              {
                id: "q-math3-2",
                lessonId: "math-2-1",
                question: "What is 1,000 - 437?",
                options: ["563", "573", "463", "637"],
                correctIndex: 0,
                explanation: "1,000 - 437 = 563. You can check: 563 + 437 = 1,000.",
              },
            ],
          },
          {
            id: "math-2-2",
            topicId: "math-operations",
            subjectId: "math",
            title: "Multiplication Foundations",
            slug: "multiplication-foundations",
            description: "Understanding multiplication as repeated addition and mastering times tables.",
            duration: 7,
            order: 2,
            quiz: [
              {
                id: "q-math4-1",
                lessonId: "math-2-2",
                question: "What is 7 × 8?",
                options: ["54", "56", "48", "63"],
                correctIndex: 1,
                explanation: "7 × 8 = 56. This is one of the most commonly missed times table facts — memorize it well!",
              },
              {
                id: "q-math4-2",
                lessonId: "math-2-2",
                question: "Which property of multiplication says that a × b = b × a?",
                options: [
                  "Associative property",
                  "Commutative property",
                  "Distributive property",
                  "Identity property",
                ],
                correctIndex: 1,
                explanation: "The commutative property means the order of multiplication doesn't matter: 3 × 4 = 4 × 3 = 12.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "latin",
    name: "Latin",
    slug: "latin",
    description:
      "The classical language of the Western tradition — grammar, vocabulary, and translation.",
    icon: "Languages",
    color: "rose",
    topics: [
      {
        id: "latin-intro",
        subjectId: "latin",
        name: "Introduction to Latin",
        slug: "introduction",
        description:
          "Why study Latin, and the basics of pronunciation and grammar.",
        order: 1,
        lessons: [
          {
            id: "latin-1-1",
            topicId: "latin-intro",
            subjectId: "latin",
            title: "Why Study Latin?",
            slug: "why-study-latin",
            description:
              "The value of Latin for understanding English, theology, science, and the classical tradition.",
            duration: 5,
            order: 1,
            quiz: [
              {
                id: "q-lat1-1",
                lessonId: "latin-1-1",
                question:
                  "Approximately what percentage of English words have Latin roots?",
                options: ["About 20%", "About 40%", "About 60%", "About 80%"],
                correctIndex: 2,
                explanation:
                  "About 60% of English words have Latin or Greek roots. Learning Latin dramatically improves English vocabulary and comprehension.",
              },
              {
                id: "q-lat1-2",
                lessonId: "latin-1-1",
                question:
                  "Which of these fields does NOT heavily use Latin terminology?",
                options: ["Law", "Medicine", "Computer programming", "Theology"],
                correctIndex: 2,
                explanation:
                  "Law (habeas corpus, pro bono), medicine (anterior, femur), and theology (sola fide, ex nihilo) all heavily use Latin. Computer programming primarily uses English.",
              },
            ],
          },
          {
            id: "latin-1-2",
            topicId: "latin-intro",
            subjectId: "latin",
            title: "The Latin Alphabet and Pronunciation",
            slug: "alphabet-pronunciation",
            description:
              "Learning the Latin alphabet and ecclesiastical pronunciation.",
            duration: 6,
            order: 2,
            quiz: [
              {
                id: "q-lat2-1",
                lessonId: "latin-1-2",
                question:
                  "In ecclesiastical Latin pronunciation, how is the letter 'c' before 'e' or 'i' pronounced?",
                options: [
                  "Like 'k' (hard c)",
                  "Like 'ch' (as in 'church')",
                  "Like 's' (soft c)",
                  "It is silent",
                ],
                correctIndex: 1,
                explanation:
                  "In ecclesiastical (church) Latin, 'c' before 'e' or 'i' is pronounced like 'ch' in 'church'. So 'caelum' (heaven) is pronounced 'CHAY-loom'.",
              },
              {
                id: "q-lat2-2",
                lessonId: "latin-1-2",
                question:
                  "What does 'Soli Deo Gloria' mean?",
                options: [
                  "God is love",
                  "Glory to God alone",
                  "God is glorious",
                  "Praise the Lord",
                ],
                correctIndex: 1,
                explanation:
                  "'Soli Deo Gloria' means 'Glory to God alone' — one of the five Solas of the Reformation. J.S. Bach famously wrote 'S.D.G.' on his compositions.",
              },
            ],
          },
        ],
      },
      {
        id: "latin-grammar-1",
        subjectId: "latin",
        name: "First Declension Nouns",
        slug: "first-declension",
        description:
          "The first noun declension: feminine nouns ending in -a.",
        order: 2,
        lessons: [
          {
            id: "latin-2-1",
            topicId: "latin-grammar-1",
            subjectId: "latin",
            title: "What Is a Declension?",
            slug: "what-is-a-declension",
            description:
              "Understanding how Latin nouns change their endings to show their role in a sentence.",
            duration: 6,
            order: 1,
            quiz: [
              {
                id: "q-lat3-1",
                lessonId: "latin-2-1",
                question: "What is a noun declension?",
                options: [
                  "A type of verb conjugation",
                  "A pattern of noun endings that show grammatical function",
                  "A punctuation mark",
                  "A type of sentence structure",
                ],
                correctIndex: 1,
                explanation:
                  "A declension is a group of nouns that share the same pattern of endings. The endings change to show whether the noun is subject, object, possessive, etc.",
              },
              {
                id: "q-lat3-2",
                lessonId: "latin-2-1",
                question:
                  "First declension nouns typically end in '-a' and are usually which gender?",
                options: ["Masculine", "Feminine", "Neuter", "Any gender"],
                correctIndex: 1,
                explanation:
                  "First declension nouns (like 'puella' — girl, 'aqua' — water, 'ecclesia' — church) typically end in '-a' and are feminine.",
              },
            ],
          },
        ],
      },
    ],
  },
];

export const catechismQuestions: CatechismQuestion[] = [
  {
    number: 1,
    question: "What is the chief end of man?",
    answer:
      "Man's chief end is to glorify God, and to enjoy him forever.",
    scripture: ["1 Cor. 10:31", "Rom. 11:36", "Ps. 73:25-28"],
    topic: "Purpose",
  },
  {
    number: 2,
    question:
      "What rule hath God given to direct us how we may glorify and enjoy him?",
    answer:
      "The Word of God, which is contained in the Scriptures of the Old and New Testaments, is the only rule to direct us how we may glorify and enjoy him.",
    scripture: ["2 Tim. 3:16", "Eph. 2:20", "1 John 1:3-4"],
    topic: "Scripture",
  },
  {
    number: 3,
    question: "What do the Scriptures principally teach?",
    answer:
      "The Scriptures principally teach what man is to believe concerning God, and what duty God requires of man.",
    scripture: ["2 Tim. 1:13", "John 20:31", "Micah 6:8"],
    topic: "Scripture",
  },
  {
    number: 4,
    question: "What is God?",
    answer:
      "God is a Spirit, infinite, eternal, and unchangeable, in his being, wisdom, power, holiness, justice, goodness, and truth.",
    scripture: ["John 4:24", "Ps. 147:5", "Ps. 90:2", "James 1:17"],
    topic: "God's Nature",
  },
  {
    number: 5,
    question: "Are there more Gods than one?",
    answer: "There is but one only, the living and true God.",
    scripture: ["Deut. 6:4", "Jer. 10:10"],
    topic: "God's Nature",
  },
  {
    number: 6,
    question: "How many persons are there in the Godhead?",
    answer:
      "There are three persons in the Godhead; the Father, the Son, and the Holy Ghost; and these three are one God, the same in substance, equal in power and glory.",
    scripture: ["Matt. 28:19", "2 Cor. 13:14"],
    topic: "Trinity",
  },
  {
    number: 7,
    question: "What are the decrees of God?",
    answer:
      "The decrees of God are his eternal purpose, according to the counsel of his will, whereby, for his own glory, he hath foreordained whatsoever comes to pass.",
    scripture: ["Eph. 1:11", "Rom. 11:36", "Dan. 4:35"],
    topic: "God's Decrees",
  },
  {
    number: 8,
    question: "How doth God execute his decrees?",
    answer:
      "God executeth his decrees in the works of creation and providence.",
    scripture: ["Gen. 1:1", "Ps. 145:17", "Isa. 28:29"],
    topic: "God's Decrees",
  },
  {
    number: 9,
    question: "What is the work of creation?",
    answer:
      "The work of creation is God's making all things of nothing, by the word of his power, in the space of six days, and all very good.",
    scripture: ["Gen. 1:1", "Heb. 11:3", "Gen. 1:31"],
    topic: "Creation",
  },
  {
    number: 10,
    question: "How did God create man?",
    answer:
      "God created man male and female, after his own image, in knowledge, righteousness, and holiness, with dominion over the creatures.",
    scripture: ["Gen. 1:27", "Col. 3:10", "Eph. 4:24", "Gen. 1:28"],
    topic: "Creation",
  },
  {
    number: 11,
    question: "What are God's works of providence?",
    answer:
      "God's works of providence are his most holy, wise, and powerful preserving and governing all his creatures, and all their actions.",
    scripture: ["Ps. 145:17", "Ps. 104:24", "Heb. 1:3"],
    topic: "Providence",
  },
  {
    number: 12,
    question:
      "What special act of providence did God exercise toward man in the estate wherein he was created?",
    answer:
      "When God had created man, he entered into a covenant of life with him, upon condition of perfect obedience; forbidding him to eat of the tree of the knowledge of good and evil, upon the pain of death.",
    scripture: ["Gal. 3:12", "Gen. 2:17"],
    topic: "Covenant",
  },
  {
    number: 13,
    question:
      "Did our first parents continue in the estate wherein they were created?",
    answer:
      "Our first parents, being left to the freedom of their own will, fell from the estate wherein they were created, by sinning against God.",
    scripture: ["Gen. 3:6-8", "Eccl. 7:29"],
    topic: "Fall",
  },
  {
    number: 14,
    question: "What is sin?",
    answer:
      "Sin is any want of conformity unto, or transgression of, the law of God.",
    scripture: ["1 John 3:4", "James 4:17"],
    topic: "Sin",
  },
  {
    number: 15,
    question:
      "What was the sin whereby our first parents fell from the estate wherein they were created?",
    answer:
      "The sin whereby our first parents fell from the estate wherein they were created was their eating the forbidden fruit.",
    scripture: ["Gen. 3:6"],
    topic: "Fall",
  },
  {
    number: 16,
    question: "Did all mankind fall in Adam's first transgression?",
    answer:
      "The covenant being made with Adam, not only for himself, but for his posterity; all mankind, descending from him by ordinary generation, sinned in him, and fell with him, in his first transgression.",
    scripture: ["Rom. 5:12", "1 Cor. 15:21-22"],
    topic: "Fall",
  },
  {
    number: 17,
    question:
      "Into what estate did the fall bring mankind?",
    answer:
      "The fall brought mankind into an estate of sin and misery.",
    scripture: ["Rom. 5:12", "Gen. 3:16-19"],
    topic: "Fall",
  },
  {
    number: 18,
    question:
      "Wherein consists the sinfulness of that estate whereinto man fell?",
    answer:
      "The sinfulness of that estate whereinto man fell consists in the guilt of Adam's first sin, the want of original righteousness, and the corruption of his whole nature, which is commonly called original sin; together with all actual transgressions which proceed from it.",
    scripture: ["Rom. 5:19", "Rom. 3:10", "Eph. 2:1-3", "James 1:14-15"],
    topic: "Sin",
  },
  {
    number: 19,
    question:
      "What is the misery of that estate whereinto man fell?",
    answer:
      "All mankind by their fall lost communion with God, are under his wrath and curse, and so made liable to all miseries in this life, to death itself, and to the pains of hell forever.",
    scripture: ["Gen. 3:8", "Eph. 2:3", "Rom. 6:23", "Matt. 25:41"],
    topic: "Sin",
  },
  {
    number: 20,
    question:
      "Did God leave all mankind to perish in the estate of sin and misery?",
    answer:
      "God having, out of his mere good pleasure, from all eternity, elected some to everlasting life, did enter into a covenant of grace, to deliver them out of the estate of sin and misery, and to bring them into an estate of salvation by a Redeemer.",
    scripture: ["Eph. 1:4", "2 Thess. 2:13", "Rom. 5:21", "Acts 13:8"],
    topic: "Redemption",
  },
  {
    number: 21,
    question: "Who is the Redeemer of God's elect?",
    answer:
      "The only Redeemer of God's elect is the Lord Jesus Christ, who, being the eternal Son of God, became man, and so was, and continueth to be, God and man in two distinct natures, and one person, forever.",
    scripture: ["1 Tim. 2:5", "John 1:14", "Gal. 4:4", "Heb. 7:24-25"],
    topic: "Redemption",
  },
];

export function getSubject(slug: string): Subject | undefined {
  return subjects.find((s) => s.slug === slug);
}

export function getTopic(
  subjectSlug: string,
  topicSlug: string
): { subject: Subject; topic: (typeof subjects)[0]["topics"][0] } | undefined {
  const subject = getSubject(subjectSlug);
  if (!subject) return undefined;
  const topic = subject.topics.find((t) => t.slug === topicSlug);
  if (!topic) return undefined;
  return { subject, topic };
}

export function getLesson(
  subjectSlug: string,
  topicSlug: string,
  lessonSlug: string
) {
  const result = getTopic(subjectSlug, topicSlug);
  if (!result) return undefined;
  const lesson = result.topic.lessons.find((l) => l.slug === lessonSlug);
  if (!lesson) return undefined;
  return { subject: result.subject, topic: result.topic, lesson };
}

export function getAllLessons() {
  return subjects.flatMap((s) =>
    s.topics.flatMap((t) => t.lessons.map((l) => ({ ...l, subject: s, topic: t })))
  );
}

export function countLessons(subject: Subject): number {
  return subject.topics.reduce((sum, t) => sum + t.lessons.length, 0);
}

export function countQuestions(subject: Subject): number {
  return subject.topics.reduce(
    (sum, t) =>
      sum + t.lessons.reduce((s, l) => s + l.quiz.length, 0),
    0
  );
}
