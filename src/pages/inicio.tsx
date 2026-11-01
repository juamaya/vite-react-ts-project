import reactImg from "../assets/react.svg";

const inicio = () => {
  return (
    <div>
      <main className="flex min-h-screen flex-col items-center bg-purple-500 p-24">
        <h1 className="text-4xl font-bold mb-10">
          {" "}
          Vite + React + Tailwind CSS + TypeScript
        </h1>
        <img
          src={reactImg}
          alt="reactImg"
          className="rounded-lg shadow-lg w-50 h-50"
        />

      <p className="mt-10 text-lg text-white">
          This is a simple React application built with Vite, Tailwind CSS, and TypeScript. It demonstrates the use of modern web development tools and practices.
        </p>
      </main>
    </div>
  );
};

export default inicio;
