
import React from "react";
import { createRoot } from "react-dom/client";
import { motion } from "framer-motion";
import {
  Baby,
  Clock,
  Milk,
  Moon,
  ShieldCheck,
  HeartHandshake,
  Smartphone,
  HelpCircle,
  CheckCircle2,
  Droplets,
  Printer,
  Apple,
  Sparkles,
  Building2,
  Code2,
  Coffee,
  ArrowLeft
} from "lucide-react";
import "./index.css";

const colors = {
  primary: "#9FAE8E",
  primaryDark: "#6FA258",
  background: "#FAFAF8",
  cream: "#F7F3EC",
  sageLight: "#EEF1E8",
  border: "#E7E8E2",
  text: "#40443C",
  body: "#5A5E55",
  muted: "#94988E",
};

function Button({ children, className = "", variant = "default", style = {}, ...props }) {
  const variantClass = variant === "outline" ? "border bg-transparent" : "";
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 font-medium transition hover:opacity-90 active:scale-[0.99] ${variantClass} ${className}`}
      style={style}
      {...props}
    >
      {children}
    </button>
  );
}

function Card({ children, className = "", style = {} }) {
  return <div className={className} style={style}>{children}</div>;
}

function CardContent({ children, className = "" }) {
  return <div className={className}>{children}</div>;
}

function SectionHeader({ eyebrow, title, text }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em]" style={{ color: colors.primary }}>
        {eyebrow}
      </p>
      <h2
        className="text-3xl font-semibold tracking-tight md:text-5xl"
        style={{ color: colors.text, fontFamily: '"Sour Gummy", sans-serif' }}
      >
        {title}
      </h2>
      {text && <p className="mt-5 text-lg leading-8" style={{ color: colors.body }}>{text}</p>}
    </div>
  );
}

function PhoneMockup({ src, alt, tilt = "none" }) {
  const tiltClass = tilt === "left" ? "lg:-rotate-3" : tilt === "right" ? "lg:rotate-3" : "";

  return (
    <div className={`relative mx-auto w-full max-w-[330px] ${tiltClass}`}>
      <div className="absolute -inset-8 rounded-[60px] blur-3xl" style={{ backgroundColor: "rgba(159,174,142,0.24)" }} />
      <div className="relative rounded-[48px] bg-[#1C1D19] p-[8px] shadow-[0_30px_90px_rgba(39,42,37,0.22)] ring-1 ring-black/20">
        <div className="absolute left-1/2 top-[14px] z-20 h-[28px] w-[112px] -translate-x-1/2 rounded-full bg-black" />
        <div className="overflow-hidden rounded-[40px] bg-[#FFFDF8]">
          <img src={src} alt={alt} className="block aspect-[9/19.5] w-full object-cover object-top" />
        </div>
      </div>
    </div>
  );
}

const features = [
  { icon: Milk, title: "Dojenje, izmlazanje i dohrana", text: "Pratite trajanje dojenja, vreme hranjenja i količinu dohrane na jednom mestu." },
  { icon: Moon, title: "Spavanje", text: "Zabeležite kada je beba spavala i lakše pratite dnevni ritam." },
  { icon: Droplets, title: "Pelene i rutina", text: "Jednostavan unos svakodnevnih aktivnosti koje roditelji najčešće prate." },
  { icon: Clock, title: "Pregled dana", text: "Sve aktivnosti su organizovane po danu, tako da brzo vidite šta se dešavalo." },
  { icon: Smartphone, title: "Radi kao aplikacija", text: "Možete je dodati na početni ekran telefona i koristiti kao običnu aplikaciju." },
  { icon: Printer, title: "Pregled za deljenje", text: "Korisno kada želite da pokažete ritam bebe partneru, patronažnoj sestri ili pedijatru." },
];

const faqs = [
  { q: "Da li je Bebin dnevnik besplatan?", a: "Da. Prva verzija je zamišljena kao besplatna aplikacija za roditelje." },
  { q: "Da li moram da instaliram aplikaciju iz App Store-a?", a: "Ne. Aplikacija se otvara preko linka i može se dodati na početni ekran telefona." },
  { q: "Da li je namenjeno za novorođenčad?", a: "Da. Posebno je korisno u prvim danima i nedeljama kada roditelji žele da prate hranjenje, spavanje i rutinu." },
  { q: "Da li oba roditelja mogu da koriste dnevnik?", a: "To je jedna od opcija koju planiramo za buduće verzije." },
];

function SupportProjectPage({ goHome }) {
  return (
    <div className="min-h-screen" style={{ backgroundColor: colors.background, color: colors.text }}>
      <header className="px-4 pt-6 md:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full bg-white/70 px-4 py-3 shadow-sm backdrop-blur-xl md:px-6">
          <button onClick={goHome} className="flex items-center gap-3 font-semibold" style={{ color: colors.primaryDark }}>
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl text-white shadow-sm" style={{ backgroundColor: colors.primaryDark }}>
              <Baby size={23} />
            </span>
            <span className="text-xl md:text-2xl">Bebin dnevnik</span>
          </button>

          <button onClick={goHome} className="hidden items-center gap-2 rounded-full border bg-white px-5 py-3 text-sm font-medium md:flex" style={{ borderColor: colors.border, color: colors.body }}>
            <ArrowLeft size={16} />
            Nazad na početnu
          </button>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden px-5 py-20 md:px-8 md:py-28">
          <div className="absolute inset-0" style={{ background: "radial-gradient(circle at 18% 20%, rgba(159,174,142,0.22) 0%, transparent 32%), radial-gradient(circle at 82% 12%, rgba(232,222,208,0.65) 0%, transparent 36%)" }} />

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border bg-white/80 px-4 py-2 text-sm shadow-sm backdrop-blur" style={{ borderColor: colors.border, color: colors.body }}>
                <HeartHandshake size={16} style={{ color: colors.primaryDark }} />
                Dobrovoljna podrška projektu
              </div>

              <h1 className="max-w-4xl text-5xl font-bold leading-[1.02] tracking-[-0.04em] md:text-7xl" style={{ color: "#153A2C", fontFamily: '"Sour Gummy", sans-serif' }}>
                Pomozite da Bebin dnevnik ostane koristan roditeljima.
              </h1>

              <p className="mt-7 max-w-2xl text-xl leading-9" style={{ color: colors.body }}>
                Bebin dnevnik je nastao iz stvarne potrebe tokom prvih dana sa bebom. Podrška pomaže da aplikacija ostane jednostavna, stabilna i dostupna bez agresivnih reklama.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button className="h-14 rounded-full px-8 text-base text-white shadow-[0_16px_36px_rgba(95,138,82,0.28)]" style={{ backgroundColor: colors.primaryDark }}>
                  <HeartHandshake size={19} />
                  Podrži projekat
                </Button>
                <a href="https://timov-dnevnik.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex h-14 items-center justify-center rounded-full border bg-white/70 px-8 text-base font-medium backdrop-blur" style={{ borderColor: colors.primary, color: "#173B2F" }}>
                  Otvori aplikaciju
                </a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}>
              <div className="rounded-[40px] border bg-white/80 p-6 shadow-[0_30px_90px_rgba(64,68,60,0.10)] backdrop-blur" style={{ borderColor: colors.border }}>
                <div className="rounded-[32px] p-6" style={{ backgroundColor: colors.sageLight }}>
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white" style={{ color: colors.primaryDark }}>
                    <Sparkles size={28} />
                  </div>
                  <h2 className="text-3xl font-semibold leading-tight" style={{ color: colors.text, fontFamily: '"Sour Gummy", sans-serif' }}>
                    Šta podrška omogućava?
                  </h2>
                  <div className="mt-6 grid gap-4">
                    {[
                      "Aplikacija može da ostane bez agresivnih reklama.",
                      "Mogu da se razvijaju opcije koje roditeljima zaista trebaju.",
                      "U budućnosti, deo podrške može biti usmeren ka ustanovama za bebe i roditelje.",
                    ].map((item) => (
                      <div key={item} className="flex gap-3 rounded-2xl bg-white p-4">
                        <CheckCircle2 className="mt-1 shrink-0" size={20} style={{ color: colors.primaryDark }} />
                        <p className="leading-7" style={{ color: colors.body }}>{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="px-5 py-20 md:px-8" style={{ backgroundColor: colors.sageLight }}>
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Kako podrška pomaže"
              title="Tri stvari koje podržavate."
              text="Podrška nije obavezna. Ona postoji za one kojima je aplikacija pomogla i koji žele da pomognu da projekat nastavi da se razvija."
            />

            <div className="grid gap-5 md:grid-cols-3">
              {[
                { icon: Code2, title: "Razvoj aplikacije", text: "Nove opcije, bolji UX, stabilnost i redovno održavanje." },
                { icon: ShieldCheck, title: "Mirno iskustvo bez reklama", text: "Aplikacija treba da ostane jednostavna i nenametljiva." },
                { icon: Building2, title: "Buduće donacije", text: "Plan je da deo podrške kasnije može da ide ustanovama koje pomažu bebama i roditeljima." },
              ].map((option) => {
                const Icon = option.icon;
                return (
                  <Card key={option.title} className="rounded-[30px] border bg-white shadow-sm" style={{ borderColor: colors.border }}>
                    <CardContent className="p-7">
                      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl" style={{ backgroundColor: colors.cream, color: colors.primaryDark }}>
                        <Icon size={25} />
                      </div>
                      <h3 className="text-2xl font-semibold leading-tight" style={{ color: colors.text, fontFamily: '"Sour Gummy", sans-serif' }}>
                        {option.title}
                      </h3>
                      <p className="mt-4 leading-7" style={{ color: colors.body }}>
                        {option.text}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section className="px-5 py-20 md:px-8">
          <div className="mx-auto max-w-5xl rounded-[40px] border bg-white p-8 text-center shadow-[0_24px_80px_rgba(64,68,60,0.08)] md:p-14" style={{ borderColor: colors.border }}>
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl" style={{ backgroundColor: colors.sageLight, color: colors.primaryDark }}>
              <Coffee size={30} />
            </div>
            <h2 className="text-4xl font-semibold leading-tight md:text-5xl" style={{ color: colors.text, fontFamily: '"Sour Gummy", sans-serif' }}>
              Podrška je potpuno dobrovoljna.
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8" style={{ color: colors.body }}>
              Osnovne funkcije ne treba da budu zaključane roditeljima kojima su potrebne. Ova stranica postoji za one koji žele da podrže dalji razvoj projekta.
            </p>
            <Button className="mt-8 h-14 rounded-full px-9 text-base text-white" style={{ backgroundColor: colors.primaryDark }}>
              Podrži projekat
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}

function LandingPage({ goSupport }) {
  return (
    <div className="min-h-screen scroll-smooth" style={{ backgroundColor: colors.background, color: colors.text }}>
      <header className="absolute left-0 right-0 top-0 z-50 px-4 pt-6 md:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full bg-white/30 px-4 py-3 backdrop-blur-xl md:px-6">
          <a href="#pocetna" className="flex items-center gap-3 font-semibold" style={{ color: "#5F8A52" }}>
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl text-white shadow-sm" style={{ backgroundColor: colors.primaryDark }}>
              <Baby size={23} />
            </span>
            <span className="text-xl md:text-2xl">Bebin dnevnik</span>
          </a>

          <nav className="hidden items-center gap-9 text-base font-medium lg:flex" style={{ color: "#1F2E28" }}>
            <a href="#sta-je">Šta je</a>
            <a href="#opcije">Opcije</a>
            <a href="#kako-radi">Kako se koristi</a>
            <a href="#dodaj-na-telefon">Dodaj na telefon</a>
            <a href="#privatnost">Privatnost</a>
            <button onClick={goSupport}>Podrži projekat</button>
            <a href="#faq">FAQ</a>
          </nav>

          <a href="https://timov-dnevnik.vercel.app/" target="_blank" rel="noopener noreferrer" className="hidden md:block">
            <Button className="h-12 rounded-full px-7 text-base text-white shadow-sm" style={{ backgroundColor: colors.primaryDark }}>
              Otvori aplikaciju
            </Button>
          </a>
        </div>
      </header>

      <main>
        <section
          id="pocetna"
          className="relative min-h-screen overflow-hidden px-4 pb-12 pt-28 md:px-8 md:pb-20 md:pt-32"
          style={{
            backgroundImage: "linear-gradient(90deg, rgba(250,250,248,0.12) 0%, rgba(250,250,248,0.52) 34%, rgba(250,250,248,0.74) 52%, rgba(250,250,248,0.24) 100%), url('/background.png')",
            backgroundSize: "cover",
            backgroundPosition: "12% center",
          }}
        >
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(247,243,236,0.62) 100%)" }} />

          <div className="relative mx-auto grid min-h-[760px] max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-2xl text-center lg:ml-[38%] lg:text-left"
            >
              <div className="mb-7 inline-flex items-center gap-3 text-base" style={{ color: "#1F332B" }}>
                <span>Jednostavno. Brzo. Za vaše najvažnije trenutke.</span>
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/60 shadow-sm" style={{ color: colors.primaryDark }}>
                  <HeartHandshake size={17} />
                </span>
              </div>

              <h1
                className="text-6xl font-bold leading-[0.98] tracking-[-0.04em] md:text-8xl"
                style={{ color: "#153A2C", fontFamily: '"Sour Gummy", sans-serif' }}
              >
                Bebin dnevnik
              </h1>

              <p className="mt-7 max-w-2xl text-2xl font-semibold leading-10 tracking-[-0.02em]" style={{ color: "#173B2F" }}>
                Jednostavan način da pratite hranjenje, spavanje i svakodnevne aktivnosti vaše bebe.
              </p>

              <p className="mt-6 max-w-2xl text-lg leading-8" style={{ color: "#3F5049" }}>
                Sve što vam treba u prvim danima — pregledno, brzo i bez stresa. Napravljen od roditelja, za roditelje.
              </p>

              <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
                <a href="https://timov-dnevnik.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <Button className="h-16 rounded-full px-9 text-lg text-white shadow-[0_16px_36px_rgba(95,138,82,0.32)]" style={{ backgroundColor: colors.primaryDark }}>
                    <HeartHandshake size={21} />
                    Otvori aplikaciju
                  </Button>
                </a>
                <a href="#kako-radi">
                  <Button variant="outline" className="h-16 rounded-full bg-white/45 px-9 text-lg backdrop-blur-md" style={{ borderColor: colors.primaryDark, color: "#173B2F" }}>
                    <CheckCircle2 size={21} />
                    Pogledaj kako radi
                  </Button>
                </a>
              </div>

              <div className="mt-9 flex items-center justify-center gap-2 text-sm lg:justify-start" style={{ color: "#53635C" }}>
                <ShieldCheck size={16} />
                <span>Bez registracije • Bez reklama • Vaši podaci ostaju vaši</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28, rotate: 1 }}
              animate={{ opacity: 1, y: -12, rotate: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative mx-auto hidden w-full max-w-[520px] lg:block lg:translate-x-[90px] lg:-translate-y-[8px]"
            >
              <div className="absolute -inset-20 rounded-[140px] blur-3xl" style={{ backgroundColor: "rgba(159,174,142,0.46)" }} />
              <img
                src="/appimage.png"
                alt="iPhone 17 Pro mockup sa aplikacijom Bebin dnevnik"
                className="relative z-10 w-full object-contain drop-shadow-[0_54px_90px_rgba(39,42,37,0.36)]"
              />
            </motion.div>
          </div>

          <div className="relative mx-auto -mt-10 grid max-w-6xl gap-4 rounded-[36px] border bg-white/76 p-5 shadow-[0_24px_80px_rgba(64,68,60,0.10)] backdrop-blur-xl md:grid-cols-4 md:p-7" style={{ borderColor: "rgba(231,232,226,0.8)" }}>
            {[
              [Clock, "Brzo i jednostavno", "Unesite aktivnosti za samo nekoliko sekundi."],
              [ShieldCheck, "Privatno i sigurno", "Bez reklama i praćenja. Vaši podaci su vaši."],
              [Smartphone, "Dodajte na telefon", "Radi kao aplikacija, bez instalacije iz prodavnice."],
              [HeartHandshake, "Napravljeno s ljubavlju", "Za mirnije dane i zadovoljnije roditelje."],
            ].map(([Icon, title, text]) => {
              const BenefitIcon = Icon;
              return (
                <div key={title} className="rounded-3xl p-4 text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full" style={{ backgroundColor: "#DCE6D3", color: "#4F7745" }}>
                    <BenefitIcon size={24} />
                  </div>
                  <h3 className="font-semibold" style={{ color: "#1F2E28" }}>{title}</h3>
                  <p className="mx-auto mt-2 max-w-[190px] text-sm leading-6" style={{ color: "#53635C" }}>{text}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section id="sta-je" className="px-5 py-20 md:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <SectionHeader
              eyebrow="Šta je Bebin dnevnik"
              title="Mala pomoć za velike prve dane."
              text="Bebin dnevnik je jednostavna web aplikacija za roditelje koji žele da prate osnovne aktivnosti bebe bez papira, tabela i komplikovanih aplikacija."
            />
          </div>
        </section>

        <section id="opcije" className="px-5 py-20 md:px-8" style={{ backgroundColor: colors.sageLight }}>
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Opcije"
              title="Sve važno na jednom mestu."
              text="Fokus je na stvarima koje roditelji najčešće prate tokom dana."
            />
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <Card key={feature.title} className="rounded-[28px] border bg-white shadow-sm" style={{ borderColor: colors.border }}>
                    <CardContent className="p-7">
                      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl" style={{ backgroundColor: colors.cream, color: colors.primary }}>
                        <Icon size={24} />
                      </div>
                      <h3 className="text-xl font-semibold" style={{ color: colors.text }}>{feature.title}</h3>
                      <p className="mt-3 leading-7" style={{ color: colors.body }}>{feature.text}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section id="kako-radi" className="overflow-hidden px-5 py-24 md:px-8" style={{ backgroundColor: "#FFFDF8" }}>
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Kako radi"
              title="Jednostavno od prvog dana."
              text="Od prvog unosa do pregleda dana, sve je napravljeno da bude brzo, jasno i bez nepotrebnog razmišljanja."
            />

            <div className="grid gap-6 lg:grid-cols-4">
              {[
                { number: "01", title: "Napravite dnevnik", text: "Unesite ime bebe i datum rođenja. Možete odmah da krenete ili da probate demo dnevnik.", image: "/step-welcome.png", tilt: "left" },
                { number: "02", title: "Dodajte aktivnost", text: "Izaberite dojenje, pelenu, spavanje, dohranu ili drugu aktivnost i po potrebi promenite vreme.", image: "/step-add.png", tilt: "none" },
                { number: "03", title: "Pratite dnevnik", text: "Sve aktivnosti se čuvaju po vremenu, pa lako vidite šta se desilo tokom dana.", image: "/step-dnevnik.png", tilt: "none" },
                { number: "04", title: "Pogledajte pregled dana", text: "Brzo proverite ukupno dojenje, dohranu, spavanje, pelene i broj unosa za izabrani dan.", image: "/step-pregled.png", tilt: "right" },
              ].map((step) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.55 }}
                  className="relative rounded-[36px] border bg-white p-5 shadow-[0_20px_70px_rgba(64,68,60,0.07)]"
                  style={{ borderColor: colors.border }}
                >
                  <div className="mb-5 flex items-center justify-between">
                    <span className="rounded-full px-4 py-2 text-sm font-semibold" style={{ backgroundColor: "#E7EFE0", color: "#5F8A52" }}>
                      Korak {step.number}
                    </span>
                  </div>

                  <PhoneMockup src={step.image} alt={step.title} tilt={step.tilt} />

                  <div className="pt-7">
                    <h3 className="text-2xl font-semibold leading-tight" style={{ color: colors.text, fontFamily: '"Sour Gummy", sans-serif' }}>
                      {step.title}
                    </h3>
                    <p className="mt-3 leading-7" style={{ color: colors.body }}>
                      {step.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="dodaj-na-telefon" className="px-5 py-20 md:px-8" style={{ backgroundColor: colors.cream }}>
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em]" style={{ color: colors.primary }}>Dodaj na telefon</p>
              <h2 className="text-3xl font-semibold md:text-5xl" style={{ color: colors.text, fontFamily: '"Sour Gummy", sans-serif' }}>
                Koristite Bebin dnevnik kao aplikaciju.
              </h2>
              <p className="mt-5 text-lg leading-8" style={{ color: colors.body }}>
                Bebin dnevnik se može dodati na početni ekran telefona. Posle toga ga otvarate kao svaku drugu aplikaciju.
              </p>
            </div>
            <div className="grid gap-4">
              <Card className="rounded-[28px] border bg-white" style={{ borderColor: colors.border }}>
                <CardContent className="p-7">
                  <div className="flex items-center gap-[6px]">
                    <Apple size={18} strokeWidth={2.2} style={{ color: colors.text }} />
                    <h3 className="text-xl font-semibold leading-none" style={{ color: colors.text }}>iPhone</h3>
                  </div>
                  <p className="mt-3 leading-7" style={{ color: colors.body }}>Otvorite link u Safari browseru, kliknite Share i izaberite Add to Home Screen.</p>
                </CardContent>
              </Card>
              <Card className="rounded-[28px] border bg-white" style={{ borderColor: colors.border }}>
                <CardContent className="p-7">
                  <div className="flex items-center gap-[6px]">
                    <Smartphone size={18} strokeWidth={2.2} style={{ color: colors.primaryDark }} />
                    <h3 className="text-xl font-semibold leading-none" style={{ color: colors.text }}>Android</h3>
                  </div>
                  <p className="mt-3 leading-7" style={{ color: colors.body }}>Otvorite link u Chrome browseru i izaberite Install App ili Add to Home Screen.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="privatnost" className="px-5 py-20 md:px-8">
          <div className="mx-auto max-w-5xl rounded-[36px] border bg-white p-8 md:p-12" style={{ borderColor: colors.border }}>
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl" style={{ backgroundColor: colors.sageLight, color: colors.primary }}>
              <ShieldCheck size={28} />
            </div>
            <h2 className="text-3xl font-semibold md:text-5xl" style={{ color: colors.text, fontFamily: '"Sour Gummy", sans-serif' }}>
              Vaši podaci treba da ostanu vaši.
            </h2>
            <p className="mt-5 text-lg leading-8" style={{ color: colors.body }}>
              Bebin dnevnik je zamišljen kao mirna i jednostavna aplikacija, bez reklama, nepotrebnog praćenja i agresivnih notifikacija.
            </p>
          </div>
        </section>

        <section id="podrzi" className="px-5 py-20 md:px-8" style={{ backgroundColor: colors.sageLight }}>
          <div className="mx-auto max-w-5xl text-center">
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white" style={{ color: colors.primary }}>
              <HeartHandshake size={28} />
            </div>
            <h2 className="text-3xl font-semibold md:text-5xl" style={{ color: colors.text, fontFamily: '"Sour Gummy", sans-serif' }}>
              Ako vam aplikacija pomogne, podržite projekat.
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8" style={{ color: colors.body }}>
              Ideja je da Bebin dnevnik ostane koristan i dostupan roditeljima. U budućnosti podrška može ići ka daljem razvoju aplikacije ili donacijama ustanovama koje pomažu bebama i roditeljima.
            </p>
            <Button onClick={goSupport} className="mt-8 h-12 rounded-full px-7 text-base text-white" style={{ backgroundColor: colors.primary }}>
              Podrži projekat
            </Button>
          </div>
        </section>

        <section id="faq" className="px-5 py-20 md:px-8">
          <div className="mx-auto max-w-4xl">
            <SectionHeader eyebrow="FAQ" title="Česta pitanja." />
            <div className="grid gap-4">
              {faqs.map((faq) => (
                <Card key={faq.q} className="rounded-[24px] border bg-white" style={{ borderColor: colors.border }}>
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <HelpCircle className="mt-1 shrink-0" size={20} style={{ color: colors.primary }} />
                      <div>
                        <h3 className="font-semibold" style={{ color: colors.text }}>{faq.q}</h3>
                        <p className="mt-2 leading-7" style={{ color: colors.body }}>{faq.a}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="otvori-aplikaciju" className="px-5 pb-20 md:px-8">
          <div className="mx-auto max-w-5xl rounded-[40px] p-10 text-center md:p-16" style={{ background: `linear-gradient(180deg, ${colors.cream} 0%, ${colors.sageLight} 100%)` }}>
            <h2 className="text-3xl font-semibold md:text-5xl" style={{ color: colors.text, fontFamily: '"Sour Gummy", sans-serif' }}>
              Spremni da probate Bebin dnevnik?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8" style={{ color: colors.body }}>
              Otvorite aplikaciju, dodajte je na telefon i počnite da pratite dan vaše bebe na jednostavan način.
            </p>
            <a href="https://timov-dnevnik.vercel.app/" target="_blank" rel="noopener noreferrer">
              <Button className="mt-8 h-12 rounded-full px-8 text-base text-white" style={{ backgroundColor: colors.primary }}>
                Otvori aplikaciju
              </Button>
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t px-5 py-8 md:px-8" style={{ borderColor: colors.border }}>
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm md:flex-row" style={{ color: colors.muted }}>
          <p>© 2026 Bebin dnevnik</p>
          <div className="flex gap-5">
            <a href="#privatnost">Privatnost</a>
            <button onClick={goSupport}>Podrži projekat</button>
            <a href="mailto:kontakt@bebindnevnik.rs">Kontakt</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function App() {
  const [view, setView] = React.useState("landing");

  const goSupport = () => {
    setView("support");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goHome = () => {
    setView("landing");
    setTimeout(() => {
      document.getElementById("pocetna")?.scrollIntoView({ behavior: "smooth" });
    }, 0);
  };

  return view === "support" ? <SupportProjectPage goHome={goHome} /> : <LandingPage goSupport={goSupport} />;
}

createRoot(document.getElementById("root")).render(<App />);
