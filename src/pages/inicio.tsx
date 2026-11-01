import reactImg from "../assets/react.svg";
import Hero from "../components/Hero";

const inicio = () => {
  return (
    <div>
      <main className="flex min-h-screen flex-col items-center  mb-5">
        <Hero
          subtitle="CREATIVIDAD · TECNOLOGÍA · INNOVACIÓN"
          title="Diseñamos el futuro. Creamos experiencias."
          description="Transformamos tus ideas en experiencias digitales extraordinarias. Creamos soluciones web modernas, atractivas y funcionales para llevar tu negocio al siguiente nivel."
          image="https://images.unsplash.com/photo-1497366754035-f200968a6e72"
          imageAlt="Oficina moderna y tecnológica"
          primaryButton="Empezar proyecto"
          primaryLink="/vite-react-ts-project/ "
        />
        <h1 className="text-4xl font-bold m-10 mx-4 md:mx-4">
          Vite + React + Tailwind CSS + TypeScript
        </h1>
        <img
          src={reactImg}
          alt="reactImg"
          className="rounded-lg shadow-lg w-50 h-50"
        />

        <p className="mt-10 text-lg text-white  mb-10 mx-4 md:mx-4">
          This is a simple React application built with Vite, Tailwind CSS, and
          TypeScript. It demonstrates the use of modern web development tools
          and practices.
        </p>
      </main>
    </div>
  );
};

export default inicio;
