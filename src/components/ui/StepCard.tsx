interface StepCardProps {
  number: number;
  title: string;
  description: string;
}

export function StepCard({ number, title, description }: StepCardProps) {
  return (
    <div className="relative flex flex-col items-center text-center">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary-700 text-xl font-bold text-white">
        {number}
      </div>
      <h3 className="mb-2 text-lg font-semibold text-primary-900">{title}</h3>
      <p className="text-sm leading-relaxed text-primary-600">{description}</p>
    </div>
  );
}
