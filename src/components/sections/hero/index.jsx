export default function Hero() {
  return (
    <section className="text-center mb-20">
      <div className="rounded-full mx-auto w-48 h-48 overflow-hidden p-1">
        <div className="rounded-full overflow-hidden w-full h-full bg-gray-800">
          <img
            src="https://media.istockphoto.com/id/174899495/photo/isolated-telescope.webp?a=1&b=1&s=612x612&w=0&k=20&c=3sUfrBOoVXtyQNa5eAOSt2AHQU3ZgLtfuKfqgzqUrzc="
            alt="Аватарка"
            className="w-full h-full object-cover"
            priority="true"
          />
        </div>
      </div>
      <h1 className="text-6xl font-bold text-white mb-6 pt-10">
        Привет, я Ахмед
      </h1>
      <p className="text-xl text-[#C5C5C5] max-w-2xl mx-auto font-light text-[18px] leading-relaxed">
        Создаю современные веб-приложения с использованием React, Next.js
        и современных технологий
      </p>
      <div className="container-buttons w-full flex justify-center gap-4 mt-14">
        <button className="rounded-full w-48 p-2.5 bg-white text-black font-bold text-center hover:bg-gray-100 transition duration-300">
          Get in Touch
        </button>
        <button className="rounded-full w-48 p-2.5 bg-transparent border-white border-2 text-white font-bold text-center hover:bg-white/10 transition duration-300">
          Download CV
        </button>
      </div>
    </section>
  );
}