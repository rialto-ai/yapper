import type { Lesson } from "@/lib/lessons-data";

interface PrintSheetProps {
  lesson: Lesson;
}

export default function PrintSheet({ lesson }: PrintSheetProps) {
  return (
    <div className="mx-auto max-w-2xl space-y-8 p-8 print:p-0">
      {/* Header */}
      <div className="border-b border-border pb-6">
        <h1 className="text-2xl font-bold tracking-tight text-fg">
          {lesson.title}
        </h1>
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <span className="pill-track">{lesson.track}</span>
          <span className="pill-topic">{lesson.topic}</span>
        </div>
        {lesson.biblePassage && (
          <p className="mt-2 text-sm text-fg-muted">
            Passage: {lesson.biblePassage}
          </p>
        )}
      </div>

      {/* Summary */}
      {lesson.summary && (
        <section>
          <h2 className="text-lg font-semibold text-fg">Summary</h2>
          <p className="mt-2 text-sm leading-relaxed text-fg-secondary">
            {lesson.summary}
          </p>
        </section>
      )}

      {/* Scripture References */}
      {lesson.scriptureText.length > 0 && (
        <section>
          <h2 className="text-lg font-semibold text-fg">Scripture References</h2>
          <ul className="mt-2 space-y-2">
            {lesson.scriptureText.map((text, i) => (
              <li key={i} className="text-sm leading-relaxed text-fg-secondary">
                {text}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Teaching Outline */}
      {lesson.teachingOutline.length > 0 && (
        <section>
          <h2 className="text-lg font-semibold text-fg">Teaching Outline</h2>
          <ol className="mt-2 list-inside list-decimal space-y-1.5">
            {lesson.teachingOutline.map((point, i) => (
              <li key={i} className="text-sm leading-relaxed text-fg-secondary">
                {point}
              </li>
            ))}
          </ol>
        </section>
      )}

      {/* Discussion Questions */}
      {lesson.discussionQuestions.length > 0 && (
        <section>
          <h2 className="text-lg font-semibold text-fg">Discussion Questions</h2>
          <ol className="mt-2 list-inside list-decimal space-y-1.5">
            {lesson.discussionQuestions.map((question, i) => (
              <li key={i} className="text-sm leading-relaxed text-fg-secondary">
                {question}
              </li>
            ))}
          </ol>
        </section>
      )}

      {/* Source Note */}
      <section className="border-t border-border pt-4">
        <p className="text-xs text-fg-muted">
          Source: {lesson.sourceName}
          {lesson.permissionStatus && ` · ${lesson.permissionStatus}`}
        </p>
        {lesson.sourceUrl && (
          <p className="mt-0.5 text-xs text-fg-muted">{lesson.sourceUrl}</p>
        )}
      </section>

      {/* Notes Section */}
      <section>
        <h2 className="text-lg font-semibold text-fg">Notes</h2>
        <div className="mt-3 space-y-6">
          <div className="border-b border-dashed border-border" />
          <div className="border-b border-dashed border-border" />
          <div className="border-b border-dashed border-border" />
          <div className="border-b border-dashed border-border" />
        </div>
      </section>
    </div>
  );
}
