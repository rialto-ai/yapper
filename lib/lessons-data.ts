export interface Lesson {
  lessonId: string;
  slug: string;
  title: string;
  track: string;
  topic: string;
  biblePassage: string;
  sourceName: string;
  sourceType: string;
  sourceUrl: string;
  embedUrl: string;
  videoUrl: string;
  thumbnailUrl: string;
  permissionStatus: string;
  summary: string;
  scriptureText: string[];
  teachingOutline: string[];
  discussionQuestions: string[];
  prayerPrompt: string;
  transcript: string;
  printEnabled: boolean;
}

export const TRACKS = [
  "Visual Vernacular",
  "ASL",
  "Auslan",
] as const;

export type Track = (typeof TRACKS)[number];

export const LESSONS: Lesson[] = [
  {
    lessonId: "1",
    slug: "gospel-visual-vernacular",
    title: "The Gospel in Visual Vernacular",
    track: "Visual Vernacular",
    topic: "Gospel Overview",
    biblePassage: "Creation to the Cross",
    sourceName: "Jesus Film Project / Renew Deaf Media",
    sourceType: "External partner resource",
    sourceUrl:
      "https://www.jesusfilm.org/watch/evangelism.html/rescue-project-gospel-in-visual-vernacular/portuguese-brazil.html",
    embedUrl: "",
    videoUrl: "",
    thumbnailUrl: "",
    permissionStatus: "Used with permission",
    summary:
      "The Gospel is the good news that the holy God saves sinners through Jesus Christ. God created all things and is holy. Man has sinned against God and deserves judgment. Jesus Christ, the Son of God, became man, lived without sin, died on the cross as a substitute for sinners, and rose again from the dead. God commands all people to repent and believe in Christ.",
    scriptureText: [
      "Genesis 1:1 -- In the beginning, God created the heavens and the earth.",
      "Romans 3:23 -- For all have sinned and fall short of the glory of God.",
      "Romans 6:23 -- For the wages of sin is death, but the free gift of God is eternal life in Christ Jesus our Lord.",
      "Romans 5:8 -- But God shows his love for us in that while we were still sinners, Christ died for us.",
      "1 Corinthians 15:3-4 -- Christ died for our sins in accordance with the Scriptures, that he was buried, that he was raised on the third day in accordance with the Scriptures.",
    ],
    teachingOutline: [
      "God created all things.",
      "God is holy.",
      "Man sinned against God.",
      "Sin brings guilt and judgment.",
      "Jesus Christ came to save sinners.",
      "Jesus died on the cross.",
      "Jesus rose again.",
      "God commands repentance and faith.",
    ],
    discussionQuestions: [
      "Who is God?",
      "What is sin?",
      "Why do sinners need a Savior?",
      "What did Jesus do on the cross?",
      "What does it mean to repent and believe?",
    ],
    prayerPrompt:
      "Ask God for mercy. Confess your sin. Look to Jesus Christ alone for salvation. Ask Him to give you true repentance and faith.",
    transcript:
      "This visual vernacular presentation tells the story of the Gospel from creation to the cross. God created the heavens and the earth. Everything He made was good. He created man and woman in His image. But man rebelled against God. Sin entered the world. All people have sinned. Sin separates us from God. The wages of sin is death. But God, in His mercy, sent His Son. Jesus Christ came into the world. He was born of a virgin. He lived without sin. He taught with authority. He healed the sick. He called sinners to repent. Then He went to the cross. He was beaten. He was crucified. He bore the wrath of God for sinners. He died. He was buried. On the third day, He rose again. Death could not hold Him. He is alive. And now God commands every person to repent and believe in Jesus Christ. Turn from your sin. Trust in Christ alone. He is the only way to be saved.",
    printEnabled: true,
  },
  {
    lessonId: "2",
    slug: "asl-john-3-new-birth",
    title: "God So Loved the World",
    track: "ASL",
    topic: "Gospel / New Birth / Faith",
    biblePassage: "John 3:1-21",
    sourceName: "Deaf Bible ASLV",
    sourceType: "External partner resource",
    sourceUrl: "https://deafbible.com/ASLV/JHN.3.16",
    embedUrl: "",
    videoUrl: "",
    thumbnailUrl: "",
    permissionStatus: "Used with permission",
    summary:
      "Jesus teaches that sinners must be born again. Salvation is not achieved by human effort, religion, or moral improvement. God gives eternal life through His Son. Whoever believes in Christ will not perish but have eternal life.",
    scriptureText: [
      "John 3:3 -- Jesus answered him, \"Truly, truly, I say to you, unless one is born again he cannot see the kingdom of God.\"",
      "John 3:16 -- For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.",
      "John 3:18 -- Whoever believes in him is not condemned, but whoever does not believe is condemned already, because he has not believed in the name of the only Son of God.",
    ],
    teachingOutline: [
      "Jesus says we must be born again.",
      "Sinners cannot save themselves.",
      "God sent His Son into the world.",
      "The Son of Man must be lifted up.",
      "Whoever believes in Christ has eternal life.",
      "Those who reject Christ remain under judgment.",
    ],
    discussionQuestions: [
      "What does it mean to be born again?",
      "Why can religion not save us?",
      "Why did God send His Son?",
      "What does it mean to believe in Christ?",
    ],
    prayerPrompt:
      "Ask God to give you new birth by His Spirit. Look to Jesus Christ alone for eternal life.",
    transcript: "",
    printEnabled: true,
  },
  {
    lessonId: "3",
    slug: "asl-john-1-word-became-flesh",
    title: "The Word Became Flesh",
    track: "ASL",
    topic: "Christology / Incarnation",
    biblePassage: "John 1:1-18",
    sourceName: "Deaf Bible ASLV",
    sourceType: "External partner resource",
    sourceUrl: "https://deafbible.com/ASLV/JHN.1.1",
    embedUrl: "",
    videoUrl: "",
    thumbnailUrl: "",
    permissionStatus: "Used with permission",
    summary:
      "Jesus Christ is the eternal Word. He was with God and He is God. Through Him all things were made. The eternal Son became flesh and dwelt among us, full of grace and truth.",
    scriptureText: [
      "John 1:1 -- In the beginning was the Word, and the Word was with God, and the Word was God.",
      "John 1:3 -- All things were made through him, and without him was not any thing made that was made.",
      "John 1:14 -- And the Word became flesh and dwelt among us, and we have seen his glory, glory as of the only Son from the Father, full of grace and truth.",
    ],
    teachingOutline: [
      "Jesus is the eternal Word.",
      "Jesus is God.",
      "All things were made through Him.",
      "The world did not receive Him.",
      "Those who receive Him become children of God.",
      "The Word became flesh and revealed God.",
    ],
    discussionQuestions: [
      "Who is Jesus according to John 1?",
      "What does it mean that the Word became flesh?",
      "Why must Jesus be more than a teacher?",
      "How does Jesus reveal God?",
    ],
    prayerPrompt:
      "Praise God for sending His eternal Son. Ask Him to reveal Christ to you through His Word.",
    transcript: "",
    printEnabled: true,
  },
  {
    lessonId: "4",
    slug: "asl-colossians-1-christ-supreme",
    title: "Christ Is Supreme",
    track: "ASL",
    topic: "Supremacy of Christ / Reconciliation",
    biblePassage: "Colossians 1:15-29",
    sourceName: "Deaf Bible ASLV",
    sourceType: "External partner resource",
    sourceUrl: "https://deafbible.com/ASLV/COL.1.15",
    embedUrl: "",
    videoUrl: "",
    thumbnailUrl: "",
    permissionStatus: "Used with permission",
    summary:
      "Jesus Christ is supreme over creation and the church. All things were created through Him and for Him. Through His blood shed on the cross, God reconciles sinners to Himself.",
    scriptureText: [
      "Colossians 1:15-16 -- He is the image of the invisible God, the firstborn of all creation. For by him all things were created, in heaven and on earth, visible and invisible.",
      "Colossians 1:18 -- And he is the head of the body, the church. He is the beginning, the firstborn from the dead, that in everything he might be preeminent.",
      "Colossians 1:20 -- And through him to reconcile to himself all things, whether on earth or in heaven, making peace by the blood of his cross.",
    ],
    teachingOutline: [
      "Christ is the image of the invisible God.",
      "All things were created through Him and for Him.",
      "He is before all things.",
      "He is head of the church.",
      "God reconciles sinners through Christ's blood.",
      "Christ must have first place in everything.",
    ],
    discussionQuestions: [
      "Why is Christ supreme over all creation?",
      "What does reconciliation mean?",
      "Why did Christ shed His blood?",
      "What does it mean for Christ to have first place?",
    ],
    prayerPrompt:
      "Ask God to show you the glory and supremacy of Jesus Christ. Trust in His blood for reconciliation with God.",
    transcript: "",
    printEnabled: true,
  },
  {
    lessonId: "5",
    slug: "asl-deaf-bible-learn-library",
    title: "ASL Bible Teaching Library",
    track: "ASL",
    topic: "Bible Teaching",
    biblePassage: "Multiple",
    sourceName: "Deaf Bible Learn",
    sourceType: "External partner resource",
    sourceUrl: "https://deaflearn.bible/videos",
    embedUrl: "",
    videoUrl: "",
    thumbnailUrl: "",
    permissionStatus: "Used with permission",
    summary:
      "This ASL video library contains Bible teaching resources, including Gospel-relevant lessons from Romans and other passages.",
    scriptureText: [
      "Romans 3:10-12 -- None is righteous, no, not one; no one understands; no one seeks for God.",
      "Romans 10:14 -- How then will they call on him in whom they have not believed? And how are they to believe in him of whom they have never heard?",
      "Romans 10:17 -- So faith comes from hearing, and hearing through the word of Christ.",
    ],
    teachingOutline: [
      "Use this library to find ASL Bible teaching.",
      "Prioritize Gospel passages such as Romans 3, Romans 10, John 3, Luke 24, and Colossians 1.",
      "Use individual lessons for teaching, discussion, and Scripture study.",
    ],
    discussionQuestions: [
      "Which passage explains the Gospel most clearly?",
      "What does this passage teach about sin, Christ, faith, and salvation?",
    ],
    prayerPrompt:
      "Ask God to use His Word to bring understanding, repentance, and faith.",
    transcript: "",
    printEnabled: false,
  },
  {
    lessonId: "6",
    slug: "auslan-romans-3-atonement",
    title: "Christ Died for Sinners",
    track: "Auslan",
    topic: "Cross / Atonement / Justification",
    biblePassage: "Romans 3:21-26",
    sourceName: "Auslan Bible / Bible Society Australia",
    sourceType: "External partner resource",
    sourceUrl: "https://auslan.bible/watch/romans-3-21-26",
    embedUrl: "",
    videoUrl: "",
    thumbnailUrl: "",
    permissionStatus: "Used with permission",
    summary:
      "All people have sinned and fall short of the glory of God. But God justifies sinners by grace through the redemption that is in Christ Jesus. Jesus died as the sacrifice for sin, so that God is just and the justifier of the one who has faith in Jesus.",
    scriptureText: [
      "Romans 3:21-22 -- But now the righteousness of God has been manifested apart from the law, although the Law and the Prophets bear witness to it, the righteousness of God through faith in Jesus Christ for all who believe.",
      "Romans 3:23-24 -- For all have sinned and fall short of the glory of God, and are justified by his grace as a gift, through the redemption that is in Christ Jesus.",
      "Romans 3:25-26 -- Whom God put forward as a propitiation by his blood, to be received by faith. This was to show God's righteousness... so that he might be just and the justifier of the one who has faith in Jesus.",
    ],
    teachingOutline: [
      "All people have sinned.",
      "No sinner can be justified by works.",
      "God provides righteousness through faith in Jesus Christ.",
      "Jesus redeems sinners.",
      "Jesus' death displays God's justice.",
      "God justifies those who have faith in Christ.",
    ],
    discussionQuestions: [
      "What does it mean that all have sinned?",
      "Why do we need righteousness from God?",
      "What does redemption mean?",
      "How can God be both just and the justifier?",
    ],
    prayerPrompt:
      "Confess your sin before God. Trust in Jesus Christ, who died for sinners and provides righteousness by grace.",
    transcript: "",
    printEnabled: true,
  },
  {
    lessonId: "7",
    slug: "auslan-romans-1-gospel-son",
    title: "The Gospel Concerning His Son",
    track: "Auslan",
    topic: "Gospel / Son of God / Resurrection",
    biblePassage: "Romans 1:1-7",
    sourceName: "Auslan Bible / Bible Society Australia",
    sourceType: "External partner resource",
    sourceUrl: "https://auslan.bible/watch/romans-1-1-7",
    embedUrl: "",
    videoUrl: "",
    thumbnailUrl: "",
    permissionStatus: "Used with permission",
    summary:
      "The Gospel is about God's Son, Jesus Christ our Lord. He came from the line of David according to the flesh and was declared to be the powerful Son of God by His resurrection from the dead.",
    scriptureText: [
      "Romans 1:1-2 -- Paul, a servant of Christ Jesus, called to be an apostle, set apart for the gospel of God, which he promised beforehand through his prophets in the holy Scriptures.",
      "Romans 1:3-4 -- Concerning his Son, who was descended from David according to the flesh and was declared to be the Son of God in power according to the Spirit of holiness by his resurrection from the dead, Jesus Christ our Lord.",
    ],
    teachingOutline: [
      "The Gospel was promised beforehand.",
      "The Gospel is about Jesus Christ.",
      "Jesus is the Son of God.",
      "Jesus is the promised King from David's line.",
      "Jesus was raised from the dead.",
      "The Gospel calls all nations to the obedience of faith.",
    ],
    discussionQuestions: [
      "Who is the Gospel about?",
      "Why does Paul connect Jesus to David?",
      "What does the resurrection prove?",
      "What is the obedience of faith?",
    ],
    prayerPrompt:
      "Ask God to give you faith in Jesus Christ, the risen Son of God and Lord of all.",
    transcript: "",
    printEnabled: true,
  },
  {
    lessonId: "8",
    slug: "auslan-1-corinthians-1-cross",
    title: "The Message of the Cross",
    track: "Auslan",
    topic: "Cross / Power of God",
    biblePassage: "1 Corinthians 1:18-25",
    sourceName: "Auslan Bible / Bible Society Australia",
    sourceType: "External partner resource",
    sourceUrl: "https://auslan.bible/watch/1-corinthians-1-18-25",
    embedUrl: "",
    videoUrl: "",
    thumbnailUrl: "",
    permissionStatus: "Used with permission",
    summary:
      "The message of the cross seems foolish to those who are perishing, but to those who are being saved it is the power of God. God saves through Christ crucified, not through human wisdom.",
    scriptureText: [
      "1 Corinthians 1:18 -- For the word of the cross is folly to those who are perishing, but to us who are being saved it is the power of God.",
      "1 Corinthians 1:23-24 -- But we preach Christ crucified, a stumbling block to Jews and folly to Gentiles, but to those who are called, both Jews and Greeks, Christ the power of God and the wisdom of God.",
    ],
    teachingOutline: [
      "The world sees the cross as foolish.",
      "God reveals His power through the cross.",
      "Human wisdom cannot save.",
      "Christ crucified is the message sinners need.",
      "God's wisdom is greater than man's wisdom.",
    ],
    discussionQuestions: [
      "Why does the world reject the cross?",
      "How is the cross the power of God?",
      "Why can human wisdom not save sinners?",
      "Why must we preach Christ crucified?",
    ],
    prayerPrompt:
      "Ask God to humble you before the cross of Jesus Christ. Trust not in yourself, but in Christ crucified.",
    transcript: "",
    printEnabled: true,
  },
  {
    lessonId: "9",
    slug: "auslan-1-corinthians-15-resurrection",
    title: "Christ Rose Again",
    track: "Auslan",
    topic: "Resurrection",
    biblePassage: "1 Corinthians 15:20-28",
    sourceName: "Auslan Bible / Bible Society Australia",
    sourceType: "External partner resource",
    sourceUrl: "https://auslan.bible/watch/1-corinthians-15-20-28",
    embedUrl: "",
    videoUrl: "",
    thumbnailUrl: "",
    permissionStatus: "Used with permission",
    summary:
      "Jesus Christ has been raised from the dead. His resurrection is the firstfruits of those who belong to Him. Death came through Adam, but resurrection life comes through Christ.",
    scriptureText: [
      "1 Corinthians 15:20 -- But in fact Christ has been raised from the dead, the firstfruits of those who have fallen asleep.",
      "1 Corinthians 15:22 -- For as in Adam all die, so also in Christ shall all be made alive.",
      "1 Corinthians 15:26 -- The last enemy to be destroyed is death.",
    ],
    teachingOutline: [
      "Christ has been raised from the dead.",
      "His resurrection guarantees the resurrection of His people.",
      "Death came through Adam.",
      "Life comes through Christ.",
      "Christ will reign until every enemy is defeated.",
      "The last enemy to be destroyed is death.",
    ],
    discussionQuestions: [
      "Why does the resurrection matter?",
      "What does it mean that Christ is the firstfruits?",
      "How did death come through Adam?",
      "How does life come through Christ?",
    ],
    prayerPrompt:
      "Praise God that Jesus Christ is risen. Ask Him to give you resurrection life in Christ.",
    transcript: "",
    printEnabled: true,
  },
  {
    lessonId: "10",
    slug: "auslan-romans-8-spirit-life",
    title: "The Spirit Gives Life",
    track: "Auslan",
    topic: "Regeneration / Resurrection / Life in Christ",
    biblePassage: "Romans 8:9-11",
    sourceName: "Auslan Bible / Bible Society Australia",
    sourceType: "External partner resource",
    sourceUrl: "https://auslan.bible/watch/romans-8-9-11",
    embedUrl: "",
    videoUrl: "",
    thumbnailUrl: "",
    permissionStatus: "Used with permission",
    summary:
      "Those who belong to Christ have the Spirit of God. The Spirit gives life now and will raise God's people from the dead. True salvation is not merely outward religion, but life by the Spirit.",
    scriptureText: [
      "Romans 8:9 -- You, however, are not in the flesh but in the Spirit, if in fact the Spirit of God dwells in you. Anyone who does not have the Spirit of Christ does not belong to him.",
      "Romans 8:10 -- But if Christ is in you, although the body is dead because of sin, the Spirit is life because of righteousness.",
      "Romans 8:11 -- If the Spirit of him who raised Jesus from the dead dwells in you, he who raised Christ Jesus from the dead will also give life to your mortal bodies through his Spirit who dwells in you.",
    ],
    teachingOutline: [
      "Those who belong to Christ have the Spirit.",
      "Without the Spirit, a person does not belong to Christ.",
      "Christ gives life to His people.",
      "The same God who raised Jesus will raise His people.",
      "Salvation includes new life by the Spirit.",
    ],
    discussionQuestions: [
      "What does it mean to belong to Christ?",
      "Why do we need the Holy Spirit?",
      "How does the Spirit give life?",
      "What hope does the resurrection give?",
    ],
    prayerPrompt:
      "Ask God to give you life by His Spirit. Trust in Christ and belong to Him.",
    transcript: "",
    printEnabled: true,
  },
];

export function getLessonBySlug(slug: string): Lesson | undefined {
  return LESSONS.find((l) => l.slug === slug);
}

export function filterLessons(track: string, search: string): Lesson[] {
  let filtered = LESSONS;
  if (track !== "all") {
    filtered = filtered.filter(
      (l) => l.track.toLowerCase().replace(/\s+/g, "-") === track
    );
  }
  if (search.trim()) {
    const q = search.toLowerCase();
    filtered = filtered.filter(
      (l) =>
        l.title.toLowerCase().includes(q) ||
        l.topic.toLowerCase().includes(q) ||
        l.track.toLowerCase().includes(q) ||
        l.biblePassage.toLowerCase().includes(q)
    );
  }
  return filtered;
}
