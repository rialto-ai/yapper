interface DoctrineCardProps {
  number: number;
  text: string;
}

export default function DoctrineCard({ number, text }: DoctrineCardProps) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-fg text-sm font-medium text-white">
        {number}
      </div>
      <p className="text-sm leading-relaxed text-fg-secondary">{text}</p>
    </div>
  );
}
