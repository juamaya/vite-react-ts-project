interface HeroProps {
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  imageAlt?: string;
  primaryButton?: string;
  secondaryButton?: string;
  primaryLink?: string;
  secondaryLink?: string;
}

export default function Hero({
  title,
  subtitle = "CREATIVIDAD · TECNOLOGÍA · INNOVACIÓN",
  description,
  image,
  imageAlt = "Imagen principal",
  primaryButton = "Comenzar ahora",
 
  primaryLink = "/contacto",
 
}: HeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-slate-950 px-6 py-10 text-white sm:py-28 lg:py-10">
      {/* BACKGROUND */}
      <div className="absolute -left-40 top-20 -z-10 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
        {/* TEXT CONTENT */}
        <div className="animate-hero space-y-7">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold tracking-widest text-cyan-400">
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
            {subtitle}
          </span>

          <h1 className="max-w-2xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-7xl">
            {title}
          </h1>

          <p className="max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
            {description}
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col gap-4 pt-3 sm:flex-row">
            <a
              href={primaryLink}
              className="group inline-flex items-center justify-center gap-3 rounded-xl bg-cyan-400 px-7 py-4 font-bold text-slate-950 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-xl hover:shadow-cyan-400/20"
            >
              {primaryButton}
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

             
          </div>
        </div>

        {/* IMAGE */}
        <div className="relative animate-hero-image">
          {/* IMAGE GLOW */}
          <div className="absolute -inset-4 rounded-3xl bg-cyan-400/10 blur-2xl" />

          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900 shadow-2xl">
            <img
              src={image}
              alt={imageAlt}
              className="h-87.5 w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-112.5 lg:h-137.5"
            />

            <div className="absolute inset-0 bg-linear-to-t from-slate-950/50 via-transparent to-transparent" />

            {/* IMAGE LABEL */}
            <div className="absolute bottom-5 left-5 rounded-xl border border-white/10 bg-slate-950/70 px-5 py-3 backdrop-blur-xl">
              <p className="text-xs font-medium tracking-widest text-cyan-400">
                Juamaya STUDIO
              </p>
              <p className="mt-1 text-sm font-semibold text-white">
                Innovación sin límites
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
