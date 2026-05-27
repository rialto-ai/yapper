import Header from "@/components/header";
import Footer from "@/components/footer";

const SCRIPTURE_SECTIONS = [
  {
    heading: "The Holiness of God",
    verses: [
      {
        reference: "Isaiah 6:3",
        text: "And one called to another and said: \"Holy, holy, holy is the LORD of hosts; the whole earth is full of his glory!\"",
      },
      {
        reference: "Habakkuk 1:13",
        text: "You who are of purer eyes than to see evil and cannot look at wrong, why do you idly look at traitors and remain silent when the wicked swallows up the man more righteous than he?",
      },
      {
        reference: "1 Peter 1:15–16",
        text: "But as he who called you is holy, you also be holy in all your conduct, since it is written, \"You shall be holy, for I am holy.\"",
      },
    ],
  },
  {
    heading: "The Sinfulness of Man",
    verses: [
      {
        reference: "Romans 3:23",
        text: "For all have sinned and fall short of the glory of God.",
      },
      {
        reference: "Romans 3:10–12",
        text: "As it is written: \"None is righteous, no, not one; no one understands; no one seeks for God. All have turned aside; together they have become worthless; no one does good, not even one.\"",
      },
      {
        reference: "Isaiah 64:6",
        text: "We have all become like one who is unclean, and all our righteous deeds are like a polluted garment. We all fade like a leaf, and our iniquities, like the wind, take us away.",
      },
    ],
  },
  {
    heading: "The Judgment of God",
    verses: [
      {
        reference: "Hebrews 9:27",
        text: "And just as it is appointed for man to die once, and after that comes judgment.",
      },
      {
        reference: "Romans 6:23",
        text: "For the wages of sin is death, but the free gift of God is eternal life in Christ Jesus our Lord.",
      },
      {
        reference: "Revelation 20:12",
        text: "And I saw the dead, great and small, standing before the throne, and books were opened. Then another book was opened, which is the book of life. And the dead were judged by what was written in the books, according to what they had done.",
      },
    ],
  },
  {
    heading: "The Person of Christ",
    verses: [
      {
        reference: "John 1:1, 14",
        text: "In the beginning was the Word, and the Word was with God, and the Word was God. ... And the Word became flesh and dwelt among us, and we have seen his glory, glory as of the only Son from the Father, full of grace and truth.",
      },
      {
        reference: "Colossians 2:9",
        text: "For in him the whole fullness of deity dwells bodily.",
      },
      {
        reference: "Philippians 2:5–8",
        text: "Have this mind among yourselves, which is yours in Christ Jesus, who, though he was in the form of God, did not count equality with God a thing to be grasped, but emptied himself, by taking the form of a servant, being born in the likeness of men. And being found in human form, he humbled himself by becoming obedient to the point of death, even death on a cross.",
      },
    ],
  },
  {
    heading: "The Death of Christ",
    verses: [
      {
        reference: "Romans 5:8",
        text: "But God shows his love for us in that while we were still sinners, Christ died for us.",
      },
      {
        reference: "1 Peter 3:18",
        text: "For Christ also suffered once for sins, the righteous for the unrighteous, that he might bring us to God, being put to death in the flesh but made alive in the spirit.",
      },
      {
        reference: "Isaiah 53:5–6",
        text: "But he was pierced for our transgressions; he was crushed for our iniquities; upon him was the chastisement that brought us peace, and with his wounds we are healed. All we like sheep have gone astray; we have turned—every one—to his own way; and the LORD has laid on him the iniquity of us all.",
      },
    ],
  },
  {
    heading: "The Resurrection of Christ",
    verses: [
      {
        reference: "1 Corinthians 15:3–4",
        text: "For I delivered to you as of first importance what I also received: that Christ died for our sins in accordance with the Scriptures, that he was buried, that he was raised on the third day in accordance with the Scriptures.",
      },
      {
        reference: "Romans 6:9",
        text: "We know that Christ, being raised from the dead, will never die again; death no longer has dominion over him.",
      },
      {
        reference: "Acts 2:24",
        text: "God raised him up, loosing the pangs of death, because it was not possible for him to be held by it.",
      },
    ],
  },
  {
    heading: "Repentance and Faith",
    verses: [
      {
        reference: "Mark 1:15",
        text: "The time is fulfilled, and the kingdom of God is at hand; repent and believe in the gospel.",
      },
      {
        reference: "Acts 17:30–31",
        text: "The times of ignorance God overlooked, but now he commands all people everywhere to repent, because he has fixed a day on which he will judge the world in righteousness by a man whom he has appointed; and of this he has given assurance to all by raising him from the dead.",
      },
      {
        reference: "Ephesians 2:8–9",
        text: "For by grace you have been saved through faith. And this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.",
      },
    ],
  },
];

export default function ScripturePage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header locale="en" translations={{}} />

      <main className="flex-1">
        {/* Title Section */}
        <section className="animate-fade-in px-4 pb-12 pt-24 text-center sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h1 className="font-serif text-4xl font-semibold leading-tight tracking-tight text-stone-900 sm:text-5xl">
              Scripture
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-stone-500">
              Key Bible passages that teach the Gospel of Jesus Christ.
            </p>
          </div>
        </section>

        {/* Scripture Sections */}
        <section className="px-4 pb-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl space-y-16">
            {SCRIPTURE_SECTIONS.map((section) => (
              <div key={section.heading}>
                <h2 className="text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">
                  {section.heading}
                </h2>
                <div className="mt-6 space-y-4">
                  {section.verses.map((verse) => (
                    <blockquote
                      key={verse.reference}
                      className="rounded-lg border border-stone-200 border-l-4 border-l-stone-300 bg-white px-6 py-5"
                      aria-label={`Scripture: ${verse.reference}`}
                    >
                      <p className="text-lg leading-relaxed text-stone-800 italic">
                        &ldquo;{verse.text}&rdquo;
                      </p>
                      <footer className="mt-3">
                        <cite className="text-sm font-medium not-italic tracking-wide text-stone-500 uppercase">
                          {verse.reference}
                        </cite>
                      </footer>
                    </blockquote>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
