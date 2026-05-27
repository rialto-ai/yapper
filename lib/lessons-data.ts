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
  "International Sign",
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
    topic: "Gospel overview",
    biblePassage: "Creation to the Cross",
    sourceName: "Jesus Film Project / Renew Deaf Media",
    sourceType: "External partner resource",
    sourceUrl: "",
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
    slug: "asl-what-is-the-gospel",
    title: "What is the Gospel?",
    track: "ASL",
    topic: "Gospel overview",
    biblePassage: "",
    sourceName: "Deaf Bible / Deaf Bible Learn",
    sourceType: "External partner resource",
    sourceUrl: "",
    embedUrl: "",
    videoUrl: "",
    thumbnailUrl: "",
    permissionStatus: "Used with permission",
    summary:
      "The Gospel is not advice about how to improve ourselves. It is good news about what God has done in Jesus Christ to save sinners. Jesus lived without sin, died for sinners, and rose again. Salvation is received by grace through faith, not by works.",
    scriptureText: [
      "Mark 1:15 -- The time is fulfilled, and the kingdom of God is at hand; repent and believe in the gospel.",
      "Ephesians 2:8-9 -- For by grace you have been saved through faith. And this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.",
    ],
    teachingOutline: [
      "The Gospel is good news, not good advice.",
      "God is holy and just.",
      "All people have sinned.",
      "Jesus Christ died for sinners.",
      "Jesus rose from the dead.",
      "Salvation is by grace through faith.",
    ],
    discussionQuestions: [
      "What is the difference between good news and good advice?",
      "Why can we not save ourselves?",
      "What did Jesus accomplish on the cross?",
      "What does it mean to be saved by grace through faith?",
    ],
    prayerPrompt:
      "Thank God for the good news of Jesus Christ. Ask Him to help you understand and believe the Gospel.",
    transcript: "",
    printEnabled: true,
  },
  {
    lessonId: "3",
    slug: "asl-man-has-sinned",
    title: "Man Has Sinned",
    track: "ASL",
    topic: "Sin",
    biblePassage: "Romans 3:10-26",
    sourceName: "Deaf Bible Learn",
    sourceType: "External partner resource",
    sourceUrl: "",
    embedUrl: "",
    videoUrl: "",
    thumbnailUrl: "",
    permissionStatus: "Used with permission",
    summary:
      "All people have sinned against God. No one is righteous by nature. Our problem is not only that we make mistakes, but that we are guilty before a holy God. The good news is that God has provided righteousness through Jesus Christ for those who believe.",
    scriptureText: [
      "Romans 3:10-12 -- None is righteous, no, not one; no one understands; no one seeks for God. All have turned aside; together they have become worthless; no one does good, not even one.",
      "Romans 3:23 -- For all have sinned and fall short of the glory of God.",
      "Romans 3:24-26 -- And are justified by his grace as a gift, through the redemption that is in Christ Jesus, whom God put forward as a propitiation by his blood, to be received by faith.",
    ],
    teachingOutline: [
      "No one is righteous before God.",
      "All have sinned and fall short.",
      "Sin is not just mistakes but guilt before God.",
      "God has provided righteousness through Christ.",
      "Justification is by grace as a gift.",
      "This gift is received by faith.",
    ],
    discussionQuestions: [
      "What does it mean that no one is righteous?",
      "How is sin more than making mistakes?",
      "What has God provided for sinners?",
      "How do we receive God's gift of righteousness?",
    ],
    prayerPrompt:
      "Confess your sin honestly before God. Ask Him to show you the depth of your guilt and the greatness of His grace in Christ.",
    transcript: "",
    printEnabled: true,
  },
  {
    lessonId: "4",
    slug: "auslan-christ-died-for-sinners",
    title: "Christ Died for Sinners",
    track: "Auslan",
    topic: "Cross / Atonement",
    biblePassage: "Romans 3:21-26",
    sourceName: "Auslan Bible / Bible Society Australia",
    sourceType: "External partner resource",
    sourceUrl: "",
    embedUrl: "",
    videoUrl: "",
    thumbnailUrl: "",
    permissionStatus: "Used with permission",
    summary:
      "Jesus Christ died as a substitute for sinners. On the cross, He bore the judgment that sinners deserve. God is just, and He justifies those who have faith in Jesus Christ.",
    scriptureText: [
      "Romans 3:21-22 -- But now the righteousness of God has been manifested apart from the law, although the Law and the Prophets bear witness to it, the righteousness of God through faith in Jesus Christ for all who believe.",
      "Romans 3:25-26 -- Whom God put forward as a propitiation by his blood, to be received by faith. This was to show God's righteousness... so that he might be just and the justifier of the one who has faith in Jesus.",
    ],
    teachingOutline: [
      "God's righteousness is revealed apart from the law.",
      "Righteousness comes through faith in Jesus Christ.",
      "All have sinned and need this righteousness.",
      "Christ is the propitiation for sin.",
      "God is both just and the justifier.",
      "This is received by faith alone.",
    ],
    discussionQuestions: [
      "What does it mean that Christ is a propitiation?",
      "How does the cross show God's justice?",
      "How does the cross show God's love?",
      "Why must righteousness come through faith, not works?",
    ],
    prayerPrompt:
      "Thank God for the cross. Ask Him to help you understand what Jesus accomplished for sinners. Trust in His sacrifice alone.",
    transcript: "",
    printEnabled: true,
  },
  {
    lessonId: "5",
    slug: "auslan-christ-rose-again",
    title: "Christ Rose Again",
    track: "Auslan",
    topic: "Resurrection",
    biblePassage: "1 Corinthians 15:20-28",
    sourceName: "Auslan Bible / Bible Society Australia",
    sourceType: "External partner resource",
    sourceUrl: "",
    embedUrl: "",
    videoUrl: "",
    thumbnailUrl: "",
    permissionStatus: "Used with permission",
    summary:
      "Jesus Christ rose bodily from the dead. His resurrection proves that His sacrifice was accepted, death has been defeated, and all who belong to Him will be raised.",
    scriptureText: [
      "1 Corinthians 15:20 -- But in fact Christ has been raised from the dead, the firstfruits of those who have fallen asleep.",
      "1 Corinthians 15:22 -- For as in Adam all die, so also in Christ shall all be made alive.",
      "1 Corinthians 15:26 -- The last enemy to be destroyed is death.",
    ],
    teachingOutline: [
      "Christ has been raised from the dead.",
      "He is the firstfruits of the resurrection.",
      "In Adam all die; in Christ all are made alive.",
      "Christ must reign until all enemies are defeated.",
      "The last enemy is death.",
      "The resurrection gives hope to all believers.",
    ],
    discussionQuestions: [
      "What does it mean that Christ is the firstfruits?",
      "How does the resurrection defeat death?",
      "What hope does the resurrection give believers?",
      "Why is the bodily resurrection essential to the Gospel?",
    ],
    prayerPrompt:
      "Praise God for the resurrection of Jesus Christ. Ask Him to strengthen your faith in the living Savior who has conquered death.",
    transcript: "",
    printEnabled: true,
  },
  {
    lessonId: "6",
    slug: "asl-christ-rose-again",
    title: "Christ Rose Again",
    track: "ASL",
    topic: "Resurrection",
    biblePassage: "Luke 24",
    sourceName: "Deaf Bible Learn",
    sourceType: "External partner resource",
    sourceUrl: "",
    embedUrl: "",
    videoUrl: "",
    thumbnailUrl: "",
    permissionStatus: "Used with permission",
    summary:
      "Jesus truly rose from the dead. The resurrection is not a symbol or myth. Christ is alive, and His disciples are commanded to proclaim repentance and forgiveness of sins in His name.",
    scriptureText: [
      "Luke 24:5-6 -- Why do you seek the living among the dead? He is not here, but has risen.",
      "Luke 24:46-47 -- Thus it is written, that the Christ should suffer and on the third day rise from the dead, and that repentance for the forgiveness of sins should be proclaimed in his name to all nations.",
    ],
    teachingOutline: [
      "The tomb was empty.",
      "Jesus appeared to His disciples.",
      "He is not dead but alive.",
      "The Scriptures foretold His suffering and resurrection.",
      "Repentance and forgiveness must be proclaimed.",
      "This message is for all nations.",
    ],
    discussionQuestions: [
      "Why is the empty tomb important?",
      "How did the disciples respond to the risen Christ?",
      "What does the resurrection prove about Jesus?",
      "What must be proclaimed to all nations?",
    ],
    prayerPrompt:
      "Thank God that Jesus is alive. Ask Him to make you bold in proclaiming the risen Christ to others.",
    transcript: "",
    printEnabled: true,
  },
  {
    lessonId: "7",
    slug: "auslan-story-of-jesus",
    title: "The Story of Jesus",
    track: "Auslan",
    topic: "Life of Christ",
    biblePassage: "",
    sourceName: "Auslan Bible / Bible Society Australia",
    sourceType: "External partner resource",
    sourceUrl: "",
    embedUrl: "",
    videoUrl: "",
    thumbnailUrl: "",
    permissionStatus: "Used with permission",
    summary:
      "Jesus Christ is the Son of God. He came into the world, taught with authority, healed the sick, called sinners to repent, died on the cross, and rose again from the dead.",
    scriptureText: [
      "John 1:14 -- And the Word became flesh and dwelt among us, and we have seen his glory, glory as of the only Son from the Father, full of grace and truth.",
      "John 3:16 -- For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.",
    ],
    teachingOutline: [
      "Jesus is the eternal Son of God.",
      "He became flesh and dwelt among us.",
      "He taught with authority.",
      "He called sinners to repent.",
      "He died on the cross for sinners.",
      "He rose again from the dead.",
      "He commands faith and obedience.",
    ],
    discussionQuestions: [
      "Who is Jesus Christ?",
      "Why did He come into the world?",
      "What authority does Jesus have?",
      "How should we respond to Him?",
    ],
    prayerPrompt:
      "Ask God to reveal Jesus Christ to you through His Word. Ask for grace to trust and follow Him.",
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
        l.track.toLowerCase().includes(q)
    );
  }
  return filtered;
}
