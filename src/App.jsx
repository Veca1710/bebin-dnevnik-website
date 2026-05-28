
import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-[#f5f2eb] text-[#1f1f1f]">
      <header className="sticky top-0 z-50 backdrop-blur bg-[#f5f2eb]/90 border-b border-[#e8e1d5]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="font-bold text-2xl">Bebin dnevnik</div>

          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#sta-je">Šta je</a>
            <a href="#kako-radi">Kako radi</a>
            <a href="#dodaj">Dodaj na telefon</a>
            <a href="#privatnost">Privatnost</a>
            <a href="#podrzi">Podrži projekat</a>
          </nav>

          <a
            href="https://timov-dnevnik.vercel.app/"
            target="_blank"
            className="bg-[#89a96b] text-white px-5 py-3 rounded-full font-semibold"
          >
            Otvori aplikaciju
          </a>
        </div>
      </header>

      <section
        id="sta-je"
        className="relative overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: "url('/background.png')" }}
        />

        <div className="relative max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="uppercase tracking-[0.3em] text-sm text-[#89a96b] mb-6">
              Jednostavno. Brzo.
            </p>

            <h1
              className="text-6xl md:text-7xl leading-none mb-8"
              style={{ fontFamily: "'Sour Gummy', cursive" }}
            >
              Bebin dnevnik
            </h1>

            <p className="text-2xl font-semibold leading-relaxed mb-6">
              Pratite hranjenje, spavanje i svakodnevne aktivnosti bebe.
            </p>

            <p className="text-lg text-[#5b5b5b] leading-relaxed mb-10 max-w-xl">
              Napravljen od roditelja, za roditelje. Bez reklama, bez registracije i bez komplikacija.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://timov-dnevnik.vercel.app/"
                target="_blank"
                className="bg-[#89a96b] text-white px-8 py-4 rounded-full font-semibold"
              >
                Otvori aplikaciju
              </a>

              <a
                href="#kako-radi"
                className="border border-[#89a96b] text-[#2b2b2b] px-8 py-4 rounded-full font-semibold"
              >
                Pogledaj kako radi
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src="/appimage.png"
              alt="Bebin dnevnik aplikacija"
              className="max-w-[420px] w-full drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      <section id="kako-radi" className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="uppercase tracking-[0.3em] text-sm text-[#89a96b] mb-4">
              Kako radi
            </p>

            <h2
              className="text-5xl mb-6"
              style={{ fontFamily: "'Sour Gummy', cursive" }}
            >
              Jednostavno od prvog dana.
            </h2>

            <p className="text-xl text-[#666] max-w-3xl mx-auto">
              Od prvog unosa do pregleda dana, sve je napravljeno da bude brzo i jasno.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {[
              {
                title: "Napravite dnevnik",
                text: "Unesite ime bebe i datum rođenja.",
                image: "/step-welcome.png",
              },
              {
                title: "Dodajte aktivnost",
                text: "Dodajte hranjenje, pelene i spavanje u nekoliko dodira.",
                image: "/step-add.png",
              },
              {
                title: "Pratite dnevnik",
                text: "Sve aktivnosti ostaju organizovane kroz ceo dan.",
                image: "/step-dnevnik.png",
              },
              {
                title: "Pregledajte statistiku",
                text: "Brzo proverite dnevni pregled i navike bebe.",
                image: "/step-pregled.png",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/70 backdrop-blur rounded-[36px] p-6 shadow-sm border border-[#ebe4d8]"
              >
                <div className="inline-flex bg-[#dfe9d4] text-[#6b8251] text-sm font-bold px-4 py-2 rounded-full mb-6">
                  Korak 0{index + 1}
                </div>

                <div className="rounded-[40px] overflow-hidden border-[10px] border-[#1e1e1e] shadow-xl mb-8">
                  <img src={item.image} alt={item.title} className="w-full block" />
                </div>

                <h3
                  className="text-3xl mb-4"
                  style={{ fontFamily: "'Sour Gummy', cursive" }}
                >
                  {item.title}
                </h3>

                <p className="text-[#5f5f5f] leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="dodaj" className="py-24 bg-white/40">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2
            className="text-5xl mb-8"
            style={{ fontFamily: "'Sour Gummy', cursive" }}
          >
            Koristite Bebin dnevnik kao aplikaciju.
          </h2>

          <p className="text-xl text-[#666] mb-12">
            Dodajte aplikaciju na početni ekran telefona i koristite je kao pravu mobilnu aplikaciju.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-[32px] p-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="text-2xl"></div>
                <h3 className="text-3xl font-bold">iPhone</h3>
              </div>

              <p className="text-[#666]">
                Safari → Share → Add to Home Screen
              </p>
            </div>

            <div className="bg-white rounded-[32px] p-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <img src="/android.svg" className="h-7" />
                <h3 className="text-3xl font-bold">Android</h3>
              </div>

              <p className="text-[#666]">
                Chrome → Add to Home Screen
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="privatnost" className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2
            className="text-5xl mb-8"
            style={{ fontFamily: "'Sour Gummy', cursive" }}
          >
            Vaši podaci ostaju vaši.
          </h2>

          <p className="text-xl leading-relaxed text-[#666]">
            Bebin dnevnik ne koristi reklame, tracking niti prodaje podatke trećim stranama.
          </p>
        </div>
      </section>

      <section id="podrzi" className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center bg-white rounded-[40px] p-14 shadow-sm">
          <h2
            className="text-5xl mb-8"
            style={{ fontFamily: "'Sour Gummy', cursive" }}
          >
            Podržite projekat
          </h2>

          <p className="text-xl text-[#666] leading-relaxed mb-10">
            Ako vam aplikacija pomaže u svakodnevici, možete podržati dalji razvoj projekta.
          </p>

          <button className="bg-[#89a96b] text-white px-10 py-5 rounded-full text-lg font-semibold">
            Podrži projekat
          </button>
        </div>
      </section>
    </div>
  );
}
