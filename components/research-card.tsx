export function ResearchCard({
  index,
  title,
}: {
  index: number;
  title: string;
}) {
  return (
    <div className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-5 transition-colors duration-200 hover:bg-white/[0.06]">
      <span className="font-serif text-[15px] italic text-gold-soft">
        {String(index).padStart(2, "0")}
      </span>
      <p className="text-[15px] font-medium leading-snug text-[#E8E6E1]">
        {title}
      </p>
    </div>
  );
}
