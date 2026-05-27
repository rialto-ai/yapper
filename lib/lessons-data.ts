export interface Lesson {
  lessonId: string;
  slug: string;
  title: string;
  topic: string;
  signingTrack: string;
  writtenLanguage: string;
  sourceName: string;
  sourceUrl: string;
  permissionStatus: string;
  videoUrl: string;
  thumbnailUrl: string;
  captionUrl: string;
  biblePassage: string[];
  summary: string;
  transcript: string;
  teachingOutline: string[];
  discussionQuestions: string[];
  prayerPrompt: string;
  reflectionQuestion: string;
}

export const SIGNING_TRACKS = [
  {
    id: "international-sign",
    name: "International Sign",
    description:
      "A global bridge track for some cross-cultural Deaf settings.",
  },
  {
    id: "asl",
    name: "American Sign Language",
    description: "Signed Gospel and Scripture resources in ASL.",
  },
  {
    id: "auslan",
    name: "Auslan",
    description: "Signed Gospel resources for Australian Deaf communities.",
  },
] as const;

export const LESSONS: Lesson[] = [
  {
    lessonId: "1",
    slug: "what-is-the-gospel",
    title: "What is the Gospel?",
    topic: "Gospel overview",
    signingTrack: "International Sign",
    writtenLanguage: "English",
    sourceName: "Partner resource, used with permission",
    sourceUrl: "",
    permissionStatus: "Used with permission",
    videoUrl: "",
    thumbnailUrl: "",
    captionUrl: "",
    biblePassage: [
      "Mark 1:15 -- \"The time is fulfilled, and the kingdom of God is at hand; repent and believe in the gospel.\"",
      "Romans 3:23 -- \"For all have sinned and fall short of the glory of God.\"",
      "Romans 6:23 -- \"For the wages of sin is death, but the free gift of God is eternal life in Christ Jesus our Lord.\"",
      "1 Corinthians 15:3-4 -- \"Christ died for our sins in accordance with the Scriptures, that he was buried, that he was raised on the third day in accordance with the Scriptures.\"",
      "Ephesians 2:8-9 -- \"For by grace you have been saved through faith. And this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.\"",
    ],
    summary:
      "The Gospel is the good news that the holy God has made a way to save sinners through Jesus Christ. All people have sinned against God and deserve judgment. But God sent His Son, Jesus Christ, who lived without sin, died on the cross as a substitute for sinners, and rose again from the dead. God commands all people to repent and believe in Christ. Salvation is by grace alone, through faith alone, in Christ alone.",
    transcript:
      "This lesson presents the full Gospel message in International Sign. The Gospel means good news. It is the announcement that God saves sinners through the life, death, and resurrection of Jesus Christ. Every person has sinned against God. Sin is not just breaking rules. Sin is rebellion against the holy Creator. Because God is just, sin must be punished. The punishment for sin is death and eternal separation from God. But God, in His mercy, sent His Son Jesus Christ into the world. Jesus is fully God and fully man. He lived a perfect life without sin. He died on the cross, taking the punishment that sinners deserve. On the third day, God raised Jesus from the dead. The resurrection proves that God accepted the sacrifice of His Son. Now God commands every person to repent of their sin and trust in Jesus Christ alone for salvation. Repentance means turning away from sin. Faith means trusting completely in Christ. Salvation is not earned by good works. It is a gift of God's grace, received through faith. This is the Gospel.",
    teachingOutline: [
      "God is holy.",
      "Man has sinned.",
      "Sin deserves judgment.",
      "Jesus Christ died for sinners.",
      "Jesus rose again.",
      "We must repent and believe.",
      "Salvation is by grace through faith.",
    ],
    discussionQuestions: [
      "What does it mean that God is holy?",
      "Why do sinners need a Savior?",
      "What did Jesus do on the cross?",
      "What does it mean to repent and believe?",
    ],
    prayerPrompt:
      "Ask God for mercy. Confess your sin. Look to Jesus Christ alone for salvation. Ask Him to give you true repentance and faith.",
    reflectionQuestion:
      "Do you understand that you are a sinner who cannot save yourself, and that Jesus Christ is the only way to be right with God?",
  },
  {
    lessonId: "2",
    slug: "god-is-holy",
    title: "God is Holy",
    topic: "God",
    signingTrack: "American Sign Language",
    writtenLanguage: "English",
    sourceName: "Partner resource, used with permission",
    sourceUrl: "",
    permissionStatus: "Used with permission",
    videoUrl: "",
    thumbnailUrl: "",
    captionUrl: "",
    biblePassage: [
      "Isaiah 6:3 -- \"Holy, holy, holy is the LORD of hosts; the whole earth is full of his glory!\"",
      "Habakkuk 1:13 -- \"You who are of purer eyes than to see evil and cannot look at wrong.\"",
      "1 Peter 1:15-16 -- \"As he who called you is holy, you also be holy in all your conduct, since it is written, 'You shall be holy, for I am holy.'\"",
    ],
    summary:
      "God is infinitely holy, perfectly righteous, and just in all His ways. He is the Creator of all things and the sovereign ruler of the universe. His holiness is not merely that He is separate from sin, but that He is the standard of all that is good, true, and right. No impurity can exist in His presence. Every creature in heaven covers its face before Him and cries 'Holy, holy, holy!' Understanding God's holiness is the foundation of understanding the Gospel.",
    transcript:
      "This lesson teaches the holiness of God in American Sign Language. God is holy. This is the most important truth about God. Holy means set apart, pure, and completely without sin. God is not like us. He is infinitely above all creation. He is perfectly righteous in everything He does. He is perfectly just. He never makes a mistake. He never does wrong. The angels in heaven cover their faces before Him because His glory is so great. They cry out: Holy, holy, holy is the Lord. The whole earth is full of His glory. Because God is holy, He cannot tolerate sin. He cannot ignore it. He cannot pretend it does not exist. His holiness demands that sin be punished. This is why we need a Savior. Without understanding God's holiness, we cannot understand the Gospel.",
    teachingOutline: [
      "God is the Creator of all things.",
      "God is holy -- set apart, pure, without sin.",
      "God is the standard of all goodness and truth.",
      "No impurity can exist in God's presence.",
      "God's holiness demands that sin be punished.",
      "Understanding holiness is the foundation of the Gospel.",
    ],
    discussionQuestions: [
      "What does it mean that God is holy?",
      "How is God's holiness different from human goodness?",
      "Why does God's holiness matter for understanding the Gospel?",
      "How should we respond to a holy God?",
    ],
    prayerPrompt:
      "Acknowledge God's holiness. Ask Him to open your eyes to see Him as He truly is. Confess that you have not honored Him as holy.",
    reflectionQuestion:
      "Do you understand that God is not like us, that He is infinitely pure and righteous, and that His holiness demands perfect obedience?",
  },
  {
    lessonId: "3",
    slug: "man-has-sinned",
    title: "Man Has Sinned",
    topic: "Sin",
    signingTrack: "American Sign Language",
    writtenLanguage: "English",
    sourceName: "Partner resource, used with permission",
    sourceUrl: "",
    permissionStatus: "Used with permission",
    videoUrl: "",
    thumbnailUrl: "",
    captionUrl: "",
    biblePassage: [
      "Romans 3:23 -- \"For all have sinned and fall short of the glory of God.\"",
      "Romans 3:10-12 -- \"None is righteous, no, not one; no one understands; no one seeks for God. All have turned aside; together they have become worthless; no one does good, not even one.\"",
      "Isaiah 64:6 -- \"We have all become like one who is unclean, and all our righteous deeds are like a polluted garment.\"",
    ],
    summary:
      "Every human being has sinned against God. We have not merely made mistakes; we have willfully rebelled against our Creator. Our sin is not measured by human standards but by God's perfect law. In thought, word, and deed, every person stands guilty before the holy God. We are not sinners because we sin; we sin because we are sinners. Our hearts are corrupt from birth, and apart from God's grace, we are spiritually dead and unable to save ourselves.",
    transcript:
      "This lesson teaches about human sin in American Sign Language. The Bible says that all people have sinned. Every person. No exceptions. Sin is not just doing bad things. Sin is rebellion against God. It is breaking God's law. It is falling short of God's glory. The Bible says no one is righteous. Not one person. No one understands God on their own. No one seeks God on their own. All have turned away. Even our best deeds are like dirty rags before a holy God. We are not sinners because we sometimes do wrong things. We are sinners by nature. Our hearts are corrupt. We are born in sin. This is why we cannot save ourselves. We need someone to save us.",
    teachingOutline: [
      "All people have sinned against God.",
      "Sin is rebellion against the Creator.",
      "Sin is measured by God's standard, not ours.",
      "No one is righteous before God.",
      "We are sinners by nature, not just by action.",
      "We cannot save ourselves.",
    ],
    discussionQuestions: [
      "Have you recognized your own sin before God?",
      "Why is it important to measure sin by God's standard, not by comparing ourselves to others?",
      "What does it mean that we are sinners by nature?",
      "Why can we not save ourselves?",
    ],
    prayerPrompt:
      "Confess your sin honestly before God. Do not make excuses. Ask Him to show you the depth of your rebellion and your need for a Savior.",
    reflectionQuestion:
      "Have you honestly confronted your sin before a holy God, not compared to other people, but measured against God's perfect standard?",
  },
  {
    lessonId: "4",
    slug: "christ-died-for-sinners",
    title: "Christ Died for Sinners",
    topic: "Cross",
    signingTrack: "American Sign Language",
    writtenLanguage: "English",
    sourceName: "Partner resource, used with permission",
    sourceUrl: "",
    permissionStatus: "Used with permission",
    videoUrl: "",
    thumbnailUrl: "",
    captionUrl: "",
    biblePassage: [
      "Romans 5:8 -- \"But God shows his love for us in that while we were still sinners, Christ died for us.\"",
      "1 Peter 3:18 -- \"For Christ also suffered once for sins, the righteous for the unrighteous, that he might bring us to God.\"",
      "Isaiah 53:5 -- \"But he was pierced for our transgressions; he was crushed for our iniquities; upon him was the chastisement that brought us peace, and with his wounds we are healed.\"",
    ],
    summary:
      "On the cross, Jesus Christ bore the full wrath of God against sin. He did not die as a mere example or martyr. He died as a substitute, taking the punishment that sinners deserve. The righteous One died for the unrighteous. He was pierced for our transgressions and crushed for our iniquities. His death satisfied the justice of God and provided the only way of salvation for all who believe. The cross is not a symbol of God's sympathy but of His justice and His love working together in perfect harmony.",
    transcript:
      "This lesson teaches about the death of Christ in American Sign Language. Jesus Christ died on the cross. But His death was not an accident. It was not a tragedy. It was the plan of God from before the foundation of the world. On the cross, Jesus took the punishment for sin. Not His own sin, because He had none. He took the punishment for the sins of all who would believe in Him. The Bible says He was pierced for our transgressions. He was crushed for our iniquities. God's wrath against sin was poured out on His own Son so that sinners could be forgiven. This is called substitutionary atonement. Jesus died in our place. The righteous One died for the unrighteous. He did this to bring us to God. The cross shows both God's justice and God's love. Justice, because sin was punished. Love, because God Himself provided the sacrifice.",
    teachingOutline: [
      "Jesus Christ is the eternal Son of God.",
      "He lived a perfect, sinless life.",
      "He died on the cross as a substitute for sinners.",
      "He bore the full wrath of God against sin.",
      "His death satisfies God's justice.",
      "The cross displays both God's justice and God's love.",
    ],
    discussionQuestions: [
      "Why did Jesus have to die?",
      "What does it mean that Christ died as a substitute?",
      "How does the cross show both God's justice and God's love?",
      "Why is Christ's death the only way of salvation?",
    ],
    prayerPrompt:
      "Thank God for sending His Son to die for sinners. Ask Him to help you understand the weight of what happened on the cross.",
    reflectionQuestion:
      "Do you understand that Jesus did not die to make you a better person, but to rescue you from the just wrath of God?",
  },
  {
    lessonId: "5",
    slug: "christ-rose-again",
    title: "Christ Rose Again",
    topic: "Resurrection",
    signingTrack: "American Sign Language",
    writtenLanguage: "English",
    sourceName: "Partner resource, used with permission",
    sourceUrl: "",
    permissionStatus: "Used with permission",
    videoUrl: "",
    thumbnailUrl: "",
    captionUrl: "",
    biblePassage: [
      "1 Corinthians 15:3-4 -- \"Christ died for our sins in accordance with the Scriptures, that he was buried, that he was raised on the third day in accordance with the Scriptures.\"",
      "Romans 6:9 -- \"We know that Christ, being raised from the dead, will never die again; death no longer has dominion over him.\"",
      "Acts 2:24 -- \"God raised him up, loosing the pangs of death, because it was not possible for him to be held by it.\"",
    ],
    summary:
      "On the third day, God raised Jesus Christ bodily from the dead. The resurrection is not a metaphor or a spiritual idea. It is a historical event confirmed by hundreds of eyewitnesses. By raising Jesus from the dead, the Father declared that the sacrifice of His Son was accepted and that Jesus is Lord over all creation. Because He lives, death has been defeated. Because He lives, all who trust in Him will also be raised to eternal life.",
    transcript:
      "This lesson teaches about the resurrection of Jesus Christ in American Sign Language. On the third day after His death, God raised Jesus from the dead. This is not a story or a symbol. It really happened. Jesus was dead. He was buried in a tomb. And on the third day, the tomb was empty. God raised Him up. Death could not hold Him. The resurrection proves that Jesus is who He claimed to be: the Son of God. It proves that His sacrifice on the cross was accepted by the Father. It proves that sin and death have been defeated. Because Jesus is alive, He has authority over all things. And because He is alive, everyone who trusts in Him will also be raised to eternal life. The resurrection changes everything.",
    teachingOutline: [
      "Jesus was buried after His death on the cross.",
      "On the third day, God raised Him bodily from the dead.",
      "The resurrection is a historical event, not a metaphor.",
      "The resurrection proves Christ's sacrifice was accepted.",
      "Death has been defeated.",
      "All who trust in Christ will be raised to eternal life.",
    ],
    discussionQuestions: [
      "Why does the resurrection matter?",
      "What does the resurrection prove about Jesus?",
      "How does the resurrection give hope to believers?",
      "What would it mean if Christ had not been raised?",
    ],
    prayerPrompt:
      "Praise God for the resurrection of Jesus Christ. Ask Him to strengthen your faith in the living Savior.",
    reflectionQuestion:
      "Do you believe that Jesus Christ physically rose from the dead and that He is alive today, reigning as Lord over all?",
  },
  {
    lessonId: "6",
    slug: "repent-and-believe",
    title: "Repent and Believe",
    topic: "Response",
    signingTrack: "American Sign Language",
    writtenLanguage: "English",
    sourceName: "Partner resource, used with permission",
    sourceUrl: "",
    permissionStatus: "Used with permission",
    videoUrl: "",
    thumbnailUrl: "",
    captionUrl: "",
    biblePassage: [
      "Mark 1:15 -- \"The time is fulfilled, and the kingdom of God is at hand; repent and believe in the gospel.\"",
      "Acts 17:30-31 -- \"The times of ignorance God overlooked, but now he commands all people everywhere to repent, because he has fixed a day on which he will judge the world in righteousness.\"",
      "Ephesians 2:8-9 -- \"For by grace you have been saved through faith. And this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.\"",
    ],
    summary:
      "God now commands all people everywhere to repent of their sins and place their faith in Jesus Christ alone for salvation. Repentance is not merely feeling sorry for your sins. It is a radical turning away from sin and turning to God with your whole heart. Saving faith is not mere intellectual agreement. It is casting yourself entirely upon Jesus Christ as your only hope of salvation. Repentance and faith are inseparable gifts of God's grace. This is not an invitation to consider. It is a command from the King of the universe.",
    transcript:
      "This lesson teaches about repentance and faith in American Sign Language. God commands all people everywhere to repent and believe. This is not a suggestion. It is not an invitation. It is a command. Repentance means turning away from sin. Not just feeling bad about sin, but actually turning away from it. It means hating what God hates and loving what God loves. Faith means trusting in Jesus Christ alone. Not trusting in yourself. Not trusting in your good works. Not trusting in your religion. Trusting in Christ alone. Repentance and faith go together. You cannot have one without the other. When you repent, you turn from sin. When you believe, you turn to Christ. And both repentance and faith are gifts from God. You cannot produce them on your own. God must give them to you. So cry out to God. Ask Him for mercy. Ask Him to give you a new heart, true repentance, and saving faith.",
    teachingOutline: [
      "God commands all people to repent.",
      "Repentance is turning from sin to God.",
      "Faith is trusting in Christ alone for salvation.",
      "Repentance and faith are inseparable.",
      "Both are gifts of God's grace.",
      "Salvation is by grace through faith, not by works.",
      "This is not an invitation but a command.",
    ],
    discussionQuestions: [
      "What does it mean to repent?",
      "What does it mean to believe in Christ?",
      "Why are repentance and faith inseparable?",
      "Have you repented of your sin and trusted in Christ?",
    ],
    prayerPrompt:
      "Ask God for mercy. Confess your sin. Look to Jesus Christ alone for salvation. Ask Him to give you true repentance and faith.",
    reflectionQuestion:
      "Will you turn from your sin and trust in Jesus Christ alone for the forgiveness of your sins and eternal life?",
  },
  {
    lessonId: "7",
    slug: "the-gospel-in-auslan",
    title: "The Gospel in Auslan",
    topic: "Gospel overview",
    signingTrack: "Auslan",
    writtenLanguage: "English",
    sourceName: "Partner resource, used with permission",
    sourceUrl: "",
    permissionStatus: "Used with permission",
    videoUrl: "",
    thumbnailUrl: "",
    captionUrl: "",
    biblePassage: [
      "John 3:16 -- \"For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.\"",
      "Romans 10:9 -- \"If you confess with your mouth that Jesus is Lord and believe in your heart that God raised him from the dead, you will be saved.\"",
      "Acts 4:12 -- \"And there is salvation in no one else, for there is no other name under heaven given among men by which we must be saved.\"",
    ],
    summary:
      "The Gospel is the good news of Jesus Christ for all people, including Australian Deaf communities. God is holy and just. Every person has sinned and stands guilty before God. But God, rich in mercy, sent His Son Jesus Christ to die on the cross as a substitute for sinners and rise again from the dead. God commands all people to repent and believe. Salvation is found in no one else. There is no other name under heaven by which we must be saved. This message is for every nation, every language, and every people.",
    transcript:
      "This lesson presents the Gospel message in Auslan, Australian Sign Language. The Gospel is good news. It is the best news in the world. God is holy. He is perfect in every way. But we have all sinned against Him. Every person. We have broken His laws. We have rebelled against Him. And sin has consequences. The punishment for sin is death and separation from God forever. But God is also merciful. He sent His Son, Jesus Christ, into the world. Jesus lived a perfect life. He never sinned. Then He died on the cross, taking the punishment that we deserve. He died in our place. And on the third day, God raised Him from the dead. Jesus is alive. And now God commands everyone to repent, to turn away from sin, and to believe in Jesus. Trust in Him alone. Not in yourself. Not in your works. In Christ alone. This is the Gospel. And it is for you.",
    teachingOutline: [
      "God is holy and just.",
      "All people have sinned against God.",
      "Sin deserves judgment and death.",
      "God sent Jesus Christ to die for sinners.",
      "Christ rose from the dead.",
      "God commands repentance and faith.",
      "Salvation is in Christ alone.",
    ],
    discussionQuestions: [
      "What is the Gospel?",
      "Why do we need to hear this message?",
      "What did Jesus do for sinners?",
      "How should we respond to the Gospel?",
    ],
    prayerPrompt:
      "Ask God to open your heart to the Gospel. Confess your sin. Trust in Jesus Christ alone. Ask Him to save you by His grace.",
    reflectionQuestion:
      "Have you heard the good news of Jesus Christ? Will you repent and believe?",
  },
];

export function getLessonBySlug(slug: string): Lesson | undefined {
  return LESSONS.find((l) => l.slug === slug);
}

export function getLessonsByTrack(track: string): Lesson[] {
  if (track === "all") return LESSONS;
  return LESSONS.filter(
    (l) => l.signingTrack.toLowerCase().replace(/\s+/g, "-") === track
  );
}
