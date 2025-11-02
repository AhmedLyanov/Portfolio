import Header from "@/components/layout/Header.jsx";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-[#111111] to-[#202D2D] pt-20">
        <div className="container mx-auto px-4 py-16">
          <section className="text-center mb-20">
            <div className="rounded-full mx-auto bg-gradient-to-r from-[#00DFFF] to-[#EDEDED] w-48 h-48 overflow-hidden p-1">
              <div className="rounded-full overflow-hidden w-full h-full bg-gray-800">
                <img
                  src="https://media.istockphoto.com/id/174899495/photo/isolated-telescope.webp?a=1&b=1&s=612x612&w=0&k=20&c=3sUfrBOoVXtyQNa5eAOSt2AHQU3ZgLtfuKfqgzqUrzc="
                  alt="Аватарка"
                  className="w-full h-full object-cover"
                  priority
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

          <section className="container-contacts flex justify-center gap-6 mt-20">
            <div className="container-contacts--item w-60 h-45 rounded-2xl p-6 bg-gradient-to-br from-[#25D366] to-[#128C7E] shadow-lg hover:shadow-xl transition duration-300">
              <div className="container-contacts--item__image-box flex justify-center mb-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <img src="/whatsapp.svg" alt="WhatsApp" className="w-8 h-8" />
                </div>
              </div>
              <div className="container-contacts--item__text-box text-center">
                <h3 className="text-white font-bold text-lg mb-2">WhatsApp</h3>
                <p className="text-white/80 text-sm mb-4">Быстрое общение</p>
                 <a href="tel:9638782403" target="blank">
                <button className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-full text-sm font-medium transition duration-300 backdrop-blur-sm">
                 Написать
                </button>
                </a>
              </div>
            </div>

            <div className="container-contacts--item w-60 h-45 rounded-2xl p-6 bg-gradient-to-br from-[#0088cc] to-[#34AADF] shadow-lg hover:shadow-xl transition duration-300">
              <div className="container-contacts--item__image-box flex justify-center mb-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <img src="/telegram.svg" alt="Telegram" className="w-8 h-8" />
                </div>
              </div>
              <div className="container-contacts--item__text-box text-center">
                <h3 className="text-white font-bold text-lg mb-2">Telegram</h3>
                <p className="text-white/80 text-sm mb-4">
                  Мгновенные сообщения
                </p>
                <a href="https://t.me/devahmed1" target="blank">
                <button className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-full text-sm font-medium transition duration-300 backdrop-blur-sm">
                  Написать
                </button>
                </a>
              </div>
            </div>

            <div className="container-contacts--item w-60 h-45 rounded-2xl p-6 bg-gradient-to-br from-[#111111] to-[#2D2D2D] shadow-lg hover:shadow-xl transition duration-300">
              <div className="container-contacts--item__image-box flex justify-center mb-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <img src="/github.svg" alt="GitHub" className="w-8 h-8" />
                </div>
              </div>
              <div className="container-contacts--item__text-box text-center">
                <h3 className="text-gray-800 font-bold text-lg mb-2">GitHub</h3>
                <p className="text-gray-600 text-sm mb-4">Мои проекты</p>
                <a href="https://github.com/AhmedLyanov" target="blank">
                <button className="bg-white/20 hover:bg-white/30 cursor-pointer text-white px-4 py-2 rounded-full text-sm font-medium transition duration-300 backdrop-blur-sm">
                  Посмотреть
                </button>
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
