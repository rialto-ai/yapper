import { Container } from "@/components/container";

export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="border-b border-border">
      <Container className="py-20 md:py-28">
        {eyebrow ? <div className="eyebrow">{eyebrow}</div> : null}
        <h1 className="mt-4 text-4xl font-medium tracking-tight md:text-6xl">
          {title}
        </h1>
        {intro ? (
          <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-subtle">
            {intro}
          </p>
        ) : null}
      </Container>
    </section>
  );
}
