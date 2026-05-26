export interface WCFChapter {
  id: number;
  title: string;
  summary: string;
}

export interface WCFCategory {
  id: string;
  label: string;
  color: string;
  colorLight: string;
  chapters: WCFChapter[];
}

export const wcfCategories: WCFCategory[] = [
  {
    id: "bibliology",
    label: "Scripture",
    color: "#f59e0b",
    colorLight: "#fef3c7",
    chapters: [
      {
        id: 1,
        title: "The Holy Scripture",
        summary:
          "The Bible is God's Word to us. It tells us everything we need to know about God and how to live for Him. It's the final authority on what we should believe and do.",
      },
    ],
  },
  {
    id: "theology-proper",
    label: "God",
    color: "#6366f1",
    colorLight: "#e0e7ff",
    chapters: [
      {
        id: 2,
        title: "God & the Trinity",
        summary:
          "There is only one God, and He is perfect in every way — all-powerful, all-knowing, and everywhere at once. God exists as three persons: Father, Son, and Holy Spirit.",
      },
      {
        id: 3,
        title: "God's Eternal Decree",
        summary:
          "Before anything was created, God already had a plan for everything that would happen. Nothing catches God by surprise.",
      },
      {
        id: 4,
        title: "Creation",
        summary:
          "God made everything out of nothing in six days, and everything He made was very good. He made people special — in His own image.",
      },
      {
        id: 5,
        title: "Providence",
        summary:
          "God didn't just create the world and walk away. He actively takes care of everything, guiding all things according to His plan.",
      },
    ],
  },
  {
    id: "anthropology",
    label: "Humanity & Sin",
    color: "#ef4444",
    colorLight: "#fee2e2",
    chapters: [
      {
        id: 6,
        title: "The Fall & Sin",
        summary:
          "Adam and Eve disobeyed God, and their sin affected all of us. Every person is born with a sinful nature, and sin separates us from God.",
      },
      {
        id: 9,
        title: "Free Will",
        summary:
          "Before sin, Adam could choose good or evil. After the fall, people are stuck in sin and can't choose God on their own. Only God's grace can change our hearts so we can freely choose Him.",
      },
    ],
  },
  {
    id: "soteriology",
    label: "Salvation",
    color: "#10b981",
    colorLight: "#d1fae5",
    chapters: [
      {
        id: 7,
        title: "God's Covenant",
        summary:
          "God made special agreements (covenants) with people. The first was a covenant of works with Adam. After Adam failed, God made a covenant of grace — promising to save people through Jesus.",
      },
      {
        id: 8,
        title: "Christ the Mediator",
        summary:
          "Jesus is the one who brings God and people back together. He is fully God and fully human. He lived a perfect life, died on the cross for our sins, and rose again.",
      },
      {
        id: 10,
        title: "Effectual Calling",
        summary:
          "God calls people to Himself through the Holy Spirit. When God truly calls someone, He changes their heart so they want to come to Him. This calling always works.",
      },
      {
        id: 11,
        title: "Justification",
        summary:
          "When God saves someone, He declares them 'not guilty' — not because of anything they did, but because of what Jesus did. It's like Jesus takes our punishment and gives us His perfect record.",
      },
      {
        id: 12,
        title: "Adoption",
        summary:
          "When God saves us, He doesn't just forgive us — He makes us part of His family. We become His children and get to call Him Father.",
      },
      {
        id: 13,
        title: "Sanctification",
        summary:
          "After God saves us, He starts making us more like Jesus. This is a lifelong process. We still struggle with sin, but God keeps working in us.",
      },
      {
        id: 14,
        title: "Saving Faith",
        summary:
          "Real faith means trusting God and believing what He says in the Bible. This faith is a gift from God, and it grows stronger over time.",
      },
      {
        id: 15,
        title: "Repentance",
        summary:
          "Repentance means seeing your sin for how bad it really is and turning away from it toward God. It's not just feeling sorry — it's actually changing direction.",
      },
      {
        id: 16,
        title: "Good Works",
        summary:
          "Good works are things we do because God tells us to in the Bible. We don't do them to earn salvation — we do them because God has already saved us and we want to please Him.",
      },
      {
        id: 17,
        title: "Perseverance",
        summary:
          "If God has truly saved you, you can never lose your salvation. You might stumble and struggle, but God will keep you and bring you safely home.",
      },
      {
        id: 18,
        title: "Assurance",
        summary:
          "Christians can know for sure that they are saved. This confidence doesn't come from feelings but from God's promises, the Holy Spirit's work, and evidence of a changed life.",
      },
    ],
  },
  {
    id: "christian-life",
    label: "Christian Life",
    color: "#06b6d4",
    colorLight: "#cffafe",
    chapters: [
      {
        id: 19,
        title: "The Law of God",
        summary:
          "God gave His law (like the Ten Commandments) to show us what's right and wrong. Even though we're saved by grace, God's law still guides us in how to live.",
      },
      {
        id: 20,
        title: "Christian Liberty",
        summary:
          "Jesus sets believers free from the guilt of sin and from having to follow rules to earn God's love. But freedom doesn't mean we can do whatever we want — we use our freedom to serve God.",
      },
      {
        id: 21,
        title: "Worship & the Sabbath",
        summary:
          "God tells us how He wants to be worshiped. We should worship Him through prayer, reading the Bible, singing, and preaching. God also set aside one day a week for rest and worship.",
      },
      {
        id: 22,
        title: "Oaths & Vows",
        summary:
          "Sometimes it's right to make serious promises (oaths) before God. When you make a promise to God, you must keep it. But you should never swear to do something wrong.",
      },
      {
        id: 23,
        title: "Civil Government",
        summary:
          "God gave us government to keep order and protect people. Christians should obey the government, but if the government tells us to disobey God, we must obey God first.",
      },
      {
        id: 24,
        title: "Marriage & Divorce",
        summary:
          "Marriage is between one man and one woman. It was created by God and is meant to last for life. Divorce is only allowed in very serious situations.",
      },
    ],
  },
  {
    id: "ecclesiology",
    label: "The Church",
    color: "#8b5cf6",
    colorLight: "#ede9fe",
    chapters: [
      {
        id: 25,
        title: "The Church",
        summary:
          "The church is made up of all believers everywhere. Some churches are more faithful to the Bible than others. Jesus is the head of the church, not any human leader.",
      },
      {
        id: 26,
        title: "Communion of Saints",
        summary:
          "All Christians are connected to each other through Jesus. We should help each other, pray for each other, and use our gifts to serve one another.",
      },
      {
        id: 27,
        title: "The Sacraments",
        summary:
          "Sacraments are special ceremonies God gave the church — Baptism and the Lord's Supper. They are signs that point to what God has done for us through Jesus.",
      },
      {
        id: 28,
        title: "Baptism",
        summary:
          "Baptism is a sign that someone belongs to God. It uses water to picture being washed clean from sin. The children of believers should be baptized too.",
      },
      {
        id: 29,
        title: "The Lord's Supper",
        summary:
          "The Lord's Supper (Communion) is when Christians eat bread and drink wine to remember Jesus' death. It's a way to say 'thank you' to God and grow closer to Him.",
      },
      {
        id: 30,
        title: "Church Discipline",
        summary:
          "When church members are living in serious sin, the church leaders should lovingly correct them. This is to protect the church and help the person turn back to God.",
      },
      {
        id: 31,
        title: "Synods & Councils",
        summary:
          "Church leaders should meet together to make important decisions. These meetings can be very helpful, but they can make mistakes — only the Bible is perfect.",
      },
    ],
  },
  {
    id: "eschatology",
    label: "Last Things",
    color: "#f43f5e",
    colorLight: "#ffe4e6",
    chapters: [
      {
        id: 32,
        title: "Life After Death",
        summary:
          "When people die, their souls go immediately to be with God (if saved) or face judgment (if not). At the end of time, everyone will be raised from the dead.",
      },
      {
        id: 33,
        title: "The Last Judgment",
        summary:
          "One day, Jesus will come back and judge everyone. Those who trust in Him will live with God forever. Those who rejected Him will be separated from God forever.",
      },
    ],
  },
];
