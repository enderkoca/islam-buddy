import Image from "next/image";

interface FeatureCardProps {
  image: string;
  title: string;
  description: string;
}

export function FeatureCard({
  image,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-lg shadow-primary-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-900/10">
      {/* Feature Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary-950 via-primary-950/50 to-transparent" />

        {/* Title on image */}
        <div className="absolute inset-x-0 bottom-0 p-5">
          <h3 className="text-lg font-bold text-white drop-shadow-lg">
            {title}
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <p className="text-sm leading-relaxed text-primary-600">
          {description}
        </p>
      </div>

      {/* Bottom accent line */}
      <div className="h-1 bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </div>
  );
}
