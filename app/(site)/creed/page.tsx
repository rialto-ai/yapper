import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "What We Believe",
  description:
    "Christian Music Group affirms the Nicene Creed and the full inspiration of the Holy Scriptures.",
};

export default function CreedPage() {
  return (
    <>
      <PageHeader
        eyebrow="Creed"
        title="What Christian Music Group believes."
      />

      <section>
        <Container className="py-20 md:py-28">
          <div className="grid gap-16 md:grid-cols-3">
            <div className="md:col-span-1">
              <div className="eyebrow">The Nicene Creed</div>
              <p className="mt-4 text-[14.5px] leading-relaxed text-subtle">
                The ancient confession of the Christian faith, held in common
                by the Church across centuries and traditions.
              </p>
            </div>
            <div className="md:col-span-2 max-w-3xl">
              <blockquote className="border-l-2 border-border-strong pl-6 text-[16.5px] leading-[1.8] text-foreground">
                <p>
                  I believe in one God, Father Almighty, Creator of heaven and
                  earth, and of all things visible and invisible.
                </p>
                <p className="mt-5">
                  And in one Lord Jesus Christ, the only-begotten Son of God,
                  begotten of the Father before all ages; Light of Light, true
                  God of true God, begotten, not created, of one essence with
                  the Father through Whom all things were made.
                </p>
                <p className="mt-5">
                  Who for us men and for our salvation came down from heaven
                  and was incarnate of the Holy Spirit and the Virgin Mary and
                  became man. He was crucified for us under Pontius Pilate, and
                  suffered and was buried;
                </p>
                <p className="mt-5">
                  And He rose on the third day, according to the Scriptures. He
                  ascended into heaven and is seated at the right hand of the
                  Father; And He will come again with glory to judge the living
                  and the dead. His kingdom shall have no end.
                </p>
                <p className="mt-5">
                  And in the Holy Spirit, the Lord, the Creator of life, Who
                  proceeds from the Father, Who together with the Father and
                  the Son is worshipped and glorified, Who spoke through the
                  prophets.
                </p>
                <p className="mt-5">
                  In one, holy, catholic, and apostolic Church. I confess one
                  baptism for the forgiveness of sins. I look for the
                  resurrection of the dead, and the life of the age to come.
                  Amen.
                </p>
              </blockquote>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-border bg-surface">
        <Container className="py-20 md:py-28">
          <div className="grid gap-16 md:grid-cols-3">
            <div className="md:col-span-1">
              <div className="eyebrow">On the Scriptures</div>
            </div>
            <div className="md:col-span-2 max-w-3xl">
              <p className="text-[17px] leading-[1.8] text-foreground">
                We believe in the Bible, the Holy Scriptures, which we believe
                was fully inspired by the Holy Spirit, and we believe it cover
                to cover, as the authors intended it to be understood.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
