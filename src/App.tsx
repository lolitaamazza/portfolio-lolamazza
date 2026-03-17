import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Star,
  Zap,
  Figma,
  PenTool,
  Video,
  MonitorPlay,
  Layers,
  Heart,
  Scissors,
  Menu,
  X,
} from "lucide-react";
import miFoto from "./images/fotoperfil.jpeg";
import {
  SparkleFour,
  SparkleFive,
  ImperfectCircle,
  CrossDoodle,
  AsteriskDoodle,
  ThreadLine,
  LoopScribble,
} from "./components/Doodles";

const PORTFOLIO_LETTERS = ["P", "O", "R", "T", "F", "O", "L", "I", "O"];

const SKILLS = [
  { name: "Figma", icon: Figma, level: "95%", color: "bg-[#baffc9]" },
  { name: "Illustrator", icon: PenTool, level: "100%", color: "bg-[#ffdfba]" },
  { name: "Photoshop", icon: Layers, level: "100%", color: "bg-[#bae1ff]" },
  {
    name: "After Effects",
    icon: MonitorPlay,
    level: "75%",
    color: "bg-[#e6ccff]",
  },
  { name: "Premiere", icon: Video, level: "80%", color: "bg-[#ffb3ba]" },
  { name: "CapCut", icon: Scissors, level: "100%", color: "bg-[#ffffba]" },
];

const PROJECTS = [
  {
    id: 1,
    title: 'Diseño editorial',
    category: "Design",
    color: "bg-yellow-400",
    rotation: "-rotate-2",
    image: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/e151f7223686571.67fd809b8c5eb.png',
    link: 'https://www.behance.net/gallery/223686571/Taylor-Swift-Magazine',
  },
  {
    id: 2,
    title: 'Rebranding Snapchat',
    category: "Branding",
    color: "bg-pink-500",
    rotation: "rotate-2",
    image: 'https://mir-s3-cdn-cf.behance.net/project_modules/hd/aed100223695715.680d314157b04.png',
    link: 'https://www.behance.net/gallery/223695715/Snapchat-Brand-Redesign-Manual',
  },
  {
    id: 3,
    title: 'UX/UI University Totem',
    category: 'UX/UI Design',
    color: "bg-purple-400",
    rotation: "-rotate-1",
    image: 'https://mir-s3-cdn-cf.behance.net/projects/max_808/c2f738233407769.Y3JvcCwxODQ3LDE0NDQsMCww.jpg',
    link: 'https://www.behance.net/gallery/233407769/UXUI-Case-Study-University-Totem-for-Campus',
  },
  
  {
    id: 4,
    title: 'Furniture E-commerce',
    category: 'Web Design',
    color: "bg-green-400",
    rotation: "rotate-3",
   image: 'https://mir-s3-cdn-cf.behance.net/projects/max_808/6fb51f231720993.Y3JvcCw5MzUsNzMyLDI1MCww.png',
    link: 'https://www.behance.net/gallery/231720993/Modern-Furniture-Minimalist-E-commerce-Web-Design',
  },
  {
    id: 5,
    title: 'Bookish - Social Media Content Design',
    category: 'Content Design',
    color: 'bg-blue-400',
    rotation: '-rotate-2',
    image: 'https://mir-s3-cdn-cf.behance.net/projects/max_808/664c43245147859.Y3JvcCwxMDgwLDg0NCwwLDEzMA.png',
    link: 'https://www.behance.net/gallery/245147859/Bookish-Social-Media-Content-Design',
  },
  {
   title: 'Umami Brand Identity',
    category: 'Branding',
    color: 'bg-orange-400',
    rotation: 'rotate-1',
    image: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/0d0e90245150941.69a74936a14b8.jpg',
    link: 'https://www.behance.net/gallery/245150941/Umami-Brand-Identity-A-Sustainable-Fast-Food-Concept',
  },
];


export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu when clicking a link
  const closeMenu = () => setIsMenuOpen(false);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  return (
    <div className="min-h-screen text-zinc-900 font-sans overflow-x-hidden selection:bg-pink-500 selection:text-white pb-32">
      {/* Floating Navbar Sticker */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-lg md:w-auto">
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          className="sticker px-4 md:px-8 py-3 flex justify-between md:justify-center gap-4 md:gap-8 items-center bg-white"
        >
          <span className="font-display text-2xl md:text-3xl tracking-wider text-pink-500">LOLA.</span>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6 font-bold uppercase text-sm tracking-widest">
            <a href="#bio" className="hover:text-yellow-500 transition-colors">Bio</a>
            <a href="#work" className="hover:text-purple-500 transition-colors">Trabajos</a>
            <a href="#contact" className="hover:text-pink-500 transition-colors">Contacto</a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-1 hover:bg-zinc-100 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </motion.div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: -20, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, y: 10, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20, rotate: 2 }}
              className="absolute top-full left-0 right-0 sticker bg-white p-8 flex flex-col gap-6 items-center z-[-1] mt-2 md:hidden"
            >
              <div className="washi-tape washi-yellow w-32 -top-4 left-1/2 -translate-x-1/2 -rotate-2"></div>
              
              <a 
                href="#bio" 
                onClick={closeMenu}
                className="font-display text-4xl text-zinc-900 hover:text-yellow-500 transition-colors uppercase"
              >
                Bio
              </a>
              <a 
                href="#work" 
                onClick={closeMenu}
                className="font-display text-4xl text-zinc-900 hover:text-purple-500 transition-colors uppercase"
              >
                Trabajos
              </a>
              <a 
                href="#contact" 
                onClick={closeMenu}
                className="font-display text-4xl text-zinc-900 hover:text-pink-500 transition-colors uppercase"
              >
                Contacto
              </a>

              <div className="flex gap-4 mt-4">
                <Star className="text-yellow-400 fill-yellow-400 w-8 h-8" />
                <Zap className="text-purple-500 fill-purple-500 w-8 h-8 animate-pulse" />
                <Heart className="text-pink-500 fill-pink-500 w-8 h-8" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="pt-64 md:pt-48 pb-32 px-4 md:px-6 max-w-7xl mx-auto relative z-20 mb-12 md:mb-0">

        <div className="w-full relative h-full flex flex-col justify-center mt-40 md:mt-0">
          {/* Background Doodles for Hero Section */}
          <SparkleFour
            className="absolute top-1/4 left-10 z-0 opacity-80"
            color="#FF1493"
          />
          <LoopScribble
            className="absolute bottom-1/4 left-1/4 z-0 opacity-60"
            color="#00FF00"
          />
          <CrossDoodle
            className="absolute top-1/3 right-1/4 z-0 opacity-80"
            color="#FF8C00"
          />
          <AsteriskDoodle
            className="absolute bottom-1/3 right-10 z-0 opacity-70"
            color="#00BFFF"
          />
          <ImperfectCircle
            className="absolute top-1/4 right-10 z-0 opacity-40 scale-150"
            color="#CCFF00"
          />
          <ThreadLine
            className="absolute top-1/2 left-1/3 z-0 opacity-60 rotate-12"
            color="#FF1493"
          />
          {/* Additional Doodles */}
          <SparkleFive
            className="absolute top-10 right-1/3 z-0 opacity-70"
            color="#FF1493"
          />
          <CrossDoodle
            className="absolute bottom-10 left-10 z-0 opacity-60 scale-75"
            color="#00BFFF"
          />
          <LoopScribble
            className="absolute top-1/2 right-5 z-0 opacity-50 rotate-45"
            color="#FF8C00"
          />
          <AsteriskDoodle
            className="absolute top-20 left-1/3 z-0 opacity-80"
            color="#00FF00"
          />

          {/* Decorative Elements */}
          <motion.div
            animate={{ y: [0, 20, 0], rotate: [-15, -10, -15] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="absolute bottom-10 right-5 md:bottom-1/4 md:right-20 circular-sticker w-24 h-24 md:w-36 md:h-36 p-2 md:p-4 bg-pink-500 text-white font-handwriting font-bold text-lg md:text-2xl z-20 flex items-center justify-center"
          >
            <div className="transform rotate-12 text-center">
              100%
              <br />
              Creativa
            </div>
          </motion.div>

          {/* Floating Badges */}
          <motion.div
            animate={{ y: [0, -15, 0], rotate: [5, 10, 5] }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute bottom-16 left-10 sticker px-3 py-1 md:px-4 md:py-2 bg-[#00FF00] font-bold text-sm md:text-lg z-20"
          >
            UX/UI
          </motion.div>

          <motion.div
            animate={{ y: [0, 15, 0], rotate: [-5, -10, -5] }}
            transition={{
              repeat: Infinity,
              duration: 6,
              ease: "easeInOut",
              delay: 2,
            }}
            className="absolute bottom-0 left-10 sticker px-3 py-1 md:px-4 md:py-2 bg-[#00FF00] font-bold text-sm md:text-lg z-20"
          >
            Creative Dev
          </motion.div>

          <Zap className="absolute top-1/3 right-1/3 w-16 h-16 text-purple-500 fill-purple-500 opacity-50 -rotate-12" />
          <Star className="absolute bottom-1/3 left-1/4 w-12 h-12 text-yellow-500 fill-yellow-500 opacity-50 rotate-45" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-16 md:gap-12 z-10 w-full">
            {/* Left: Text & Title */}
            <div className="flex-1 relative">
              {/* PORTFOLIO Title */}
              <div className="flex flex-wrap justify-center md:justify-start mb-8 relative">
                <ThreadLine
                  className="absolute -top-10 -left-10 z-0 opacity-70 -rotate-45"
                  color="#00BFFF"
                />
                {PORTFOLIO_LETTERS.map((letter, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1, type: "spring" }}
                    className={`font-display text-[15vw] md:text-[9rem] leading-none text-zinc-900 ${i % 2 === 0 ? 'rotate-3' : '-rotate-6'} ${i % 3 === 0 ? 'text-pink-500' : ''}`}
                    style={{ display: 'inline-block', textShadow: '4px 4px 0px rgba(0,0,0,0.1)' }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>

              {/* Intro */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="sticker bg-white p-6 md:p-8 max-w-xl rotate-1 mt-12 md:mt-0"
              >
                <div className="washi-tape washi-lavender w-32 -top-4 left-4 -rotate-3"></div>
                <h2 className="font-display text-5xl text-pink-500 mb-4 uppercase tracking-wide">
                  Hola, soy Lola
                </h2>
                <p className="font-serif text-lg leading-relaxed text-zinc-700">
                  Estudiante de Tecnología Multimedial enfocada en la creación
                  de ecosistemas digitales integrales. Mi trabajo conecta el
                  diseño visual (UX/UI y branding) con el desarrollo front-end,
                  buscando un equilibrio constante entre la estética, la
                  funcionalidad y los objetivos de negocio
                </p>
              </motion.div>
            </div>

            {/* Right: Polaroid */}
           <motion.div className="relative w-full max-w-[280px] md:max-w-md mt-16 md:mt-0 mb-16 md:mb-0 mx-auto z-40">
              {/* Binder Clip */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center drop-shadow-[0_4px_6px_rgba(0,0,0,0.5)] pointer-events-none">
                {/* Wire handles */}
                <div className="flex gap-2 mb-[-10px] z-0">
                  <div className="w-6 h-10 border-[3px] border-zinc-300 rounded-t-full rounded-b-sm"></div>
                  <div className="w-6 h-10 border-[3px] border-zinc-300 rounded-t-full rounded-b-sm"></div>
                </div>
                {/* Clip body */}
                <div className="w-24 h-8 bg-zinc-900 rounded-sm relative z-10 border-t border-zinc-700 shadow-inner flex flex-col justify-between items-center py-1">
                  {/* Top silver hinge */}
                  <div className="w-[85%] h-1 bg-zinc-400 rounded-full"></div>
                  {/* Bottom silver hinge */}
                  <div className="w-[95%] h-1.5 bg-zinc-300 rounded-full"></div>
                </div>
              </div>
              <div className="washi-tape washi-yellow w-40 -top-4 left-1/2 -translate-x-1/2 z-20 rotate-2"></div>
              <div className="bg-white p-4 pb-12 border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] relative z-10">
                <div className="film-grain border-4 border-black aspect-[3/4] overflow-hidden">
                  <img
                    src={miFoto}
                    alt="Lola"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover filter saturate-150"
                  />
                </div>
                <p className="font-handwriting font-bold text-3xl text-center mt-4 text-zinc-900">
                  ¡Lista para crear!
                </p>
              </div>
              <div className="washi-tape washi-pink w-24 -bottom-4 right-4 z-20 -rotate-12"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Marquee Banner */}
      <div className="w-full overflow-hidden bg-black text-white py-3 border-y-4 border-black z-10 relative mt-20">
        <div className="marquee-track flex items-center whitespace-nowrap font-display text-2xl uppercase tracking-wider w-max">
          <span className="mx-4">Diseño Multimedial</span>{" "}
          <Star className="inline w-6 h-6 text-yellow-400 fill-yellow-400 mx-4" />
          <span className="mx-4">Desarrollo Frontend</span>{" "}
          <Star className="inline w-6 h-6 text-pink-500 fill-pink-500 mx-4" />
          <span className="mx-4">Identidad Visual</span>{" "}
          <Star className="inline w-6 h-6 text-blue-400 fill-blue-400 mx-4" />
          <span className="mx-4">Experiencias Interactivas</span>{" "}
          <Star className="inline w-6 h-6 text-green-400 fill-green-400 mx-4" />
          <span className="mx-4">Diseño Multimedial</span>{" "}
          <Star className="inline w-6 h-6 text-yellow-400 fill-yellow-400 mx-4" />
          <span className="mx-4">Desarrollo Frontend</span>{" "}
          <Star className="inline w-6 h-6 text-pink-500 fill-pink-500 mx-4" />
          <span className="mx-4">Identidad Visual</span>{" "}
          <Star className="inline w-6 h-6 text-blue-400 fill-blue-400 mx-4" />
          <span className="mx-4">Experiencias Interactivas</span>{" "}
          <Star className="inline w-6 h-6 text-green-400 fill-green-400 mx-4" />
          <span className="mx-4">Diseño Multimedial</span>{" "}
          <Star className="inline w-6 h-6 text-yellow-400 fill-yellow-400 mx-4" />
          <span className="mx-4">Desarrollo Frontend</span>{" "}
          <Star className="inline w-6 h-6 text-pink-500 fill-pink-500 mx-4" />
          <span className="mx-4">Identidad Visual</span>{" "}
          <Star className="inline w-6 h-6 text-blue-400 fill-blue-400 mx-4" />
          <span className="mx-4">Experiencias Interactivas</span>{" "}
          <Star className="inline w-6 h-6 text-green-400 fill-green-400 mx-4" />
          <span className="mx-4">Diseño Multimedial</span>{" "}
          <Star className="inline w-6 h-6 text-yellow-400 fill-yellow-400 mx-4" />
          <span className="mx-4">Desarrollo Frontend</span>{" "}
          <Star className="inline w-6 h-6 text-pink-500 fill-pink-500 mx-4" />
          <span className="mx-4">Identidad Visual</span>{" "}
          <Star className="inline w-6 h-6 text-blue-400 fill-blue-400 mx-4" />
          <span className="mx-4">Experiencias Interactivas</span>{" "}
          <Star className="inline w-6 h-6 text-green-400 fill-green-400 mx-4" />
        </div>
      </div>

      {/* Bio & Skills Section */}
      <section id="bio" className="py-32 px-6 max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 relative">
          {/* Background Doodles for Bio Section */}
          <LoopScribble
            className="absolute -left-10 top-20 z-0 opacity-80"
            color="#FF1493"
          />
          <SparkleFour
            className="absolute right-1/4 top-10 z-0 opacity-80"
            color="#00FF00"
          />
          <ImperfectCircle
            className="absolute left-1/3 top-1/4 z-0 opacity-60"
            color="#FF1493"
          />
          <CrossDoodle
            className="absolute right-10 top-1/3 z-0 opacity-80"
            color="#00BFFF"
          />
          <AsteriskDoodle
            className="absolute left-10 bottom-1/4 z-0 opacity-80"
            color="#FF8C00"
          />
          <SparkleFive
            className="absolute right-1/3 bottom-10 z-0 opacity-80"
            color="#FF1493"
          />

          {/* Education & Experience */}
          <div className="md:col-span-7 space-y-16 relative z-10">
            <div className="relative">
              <ThreadLine
                className="absolute -top-6 -left-10 z-0 opacity-70"
                color="#00FF00"
              />
              <h3 className="font-display text-5xl mb-8 uppercase tracking-wide relative z-10">
                <span className="highlighter-yellow">Educación</span>
              </h3>
              <div className="space-y-8 relative">
                <LoopScribble
                  className="absolute -right-12 top-1/2 z-0 opacity-60"
                  color="#00BFFF"
                />
                {/* Block 1 */}
                <div className="irregular-border bg-white p-6 relative">
                  <div className="washi-tape washi-pink w-16 -top-3 -left-4 rotate-45"></div>
                  <div className="washi-tape washi-pink w-16 -bottom-3 -right-4 rotate-45"></div>

                  {/* Overlapping sticker pin (Figma) */}
                  <div className="absolute -right-6 top-1/2 -translate-y-1/2 circular-sticker w-12 h-12 bg-[#baffc9] text-black z-10 rotate-12">
                    <Figma size={20} />
                  </div>

                  <h4 className="font-bold text-2xl mb-1">
                    Licenciatura en Tecnología Multimedia
                  </h4>
                  <p className="font-serif text-zinc-600 mb-2">
                    Universidad Creativa • 2024 - Presente
                  </p>
                  <p className="font-handwriting font-bold text-2xl text-pink-500 mt-2 leading-tight">
                    ¡Próximamente Técnica en Comunicación Interactiva y Diseño
                    Multimedial!
                  </p>
                </div>

                {/* Block 2 */}
                <div className="irregular-border bg-white p-6 relative">
                  <div className="washi-tape washi-pink w-16 -top-3 -right-4 -rotate-45"></div>

                  {/* Overlapping sticker pin (Photoshop) */}
                  <div className="absolute -left-6 top-1/2 -translate-y-1/2 circular-sticker w-12 h-12 bg-[#bae1ff] text-black z-10 -rotate-12">
                    <Layers size={20} />
                  </div>

                  <h4 className="font-bold text-2xl mb-1">Hackatones UX/UI</h4>
                  <p className="font-serif text-zinc-600">
                    Integré equipos multidisciplinarios para el desarrollo
                    colaborativo de soluciones digitales bajo plazos estrictos.
                    Mi rol abarcó desde la ejecución de user research y
                    arquitectura de la información hasta el armado de pantallas
                    de alta fidelidad en Figma. El proceso culminó con la
                    defensa técnica de los proyectos ante jurados, donde
                    justifiqué cada decisión estética, funcional y tecnológica
                    de la propuesta
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <ThreadLine
                className="absolute -left-16 top-10 z-0 opacity-70 rotate-90"
                color="#FF1493"
              />
              <h3 className="font-display text-5xl mb-8 uppercase tracking-wide relative z-10">
                <span className="highlighter-pink">Experiencia</span>
              </h3>
              <div className="space-y-12">
                <div className="irregular-border bg-white p-6 relative -rotate-1 z-10">
                  <div className="washi-tape washi-lavender w-24 -top-4 left-10 rotate-3"></div>
                  
                  {/* Overlapping sticker pin */}
                  <div className="absolute -right-5 -top-5 circular-sticker w-14 h-14 bg-[#bae1ff] text-black z-10 -rotate-6">
                    <Figma size={24} />
                  </div>

                  <h4 className="font-bold text-2xl mb-1">Pasantía Diseñadora UX/UI</h4>
                  <p className="font-serif text-zinc-600 mb-4">Appwise Innovations</p>
                  <p className="font-serif text-zinc-700 leading-relaxed">
                    En mi rol como Pasante de Diseño UX/UI en Appwise Innovations, participo en el ciclo completo de creación de productos digitales, diseñando experiencias centradas en el usuario para plataformas web y mobile. Además, aporto una visión estratégica comercial mediante el diseño de presentaciones de alto impacto para la validación de propuestas y presupuestos, combinando en cada entregable la estética, la funcionalidad y los objetivos de negocio de la empresa.
                  </p>
                </div>
              <div className="irregular-border bg-white p-6 relative rotate-1 z-10">
                <div className="washi-tape washi-pink w-24 -top-4 right-10 -rotate-6"></div>
                <div className="washi-tape washi-pink w-16 -bottom-3 -left-4 rotate-45"></div>

                {/* Overlapping sticker pin (Illustrator) */}
                <div className="absolute -right-5 -top-5 circular-sticker w-14 h-14 bg-[#ffdfba] text-black z-10 rotate-6">
                  <PenTool size={24} />
                </div>

                <h4 className="font-bold text-2xl mb-1">
                  Diseñadora Freelance
                </h4>
                <p className="font-serif text-zinc-600 mb-4">
                  Independiente • 2024 - Presente
                </p>
                <ul className="font-serif text-zinc-700 list-disc list-inside space-y-2">
                  <li>
                    Creación de identidades visuales y sistemas de diseño
                    enfocados en la coherencia de marca en múltiples plataformas
                    digitales
                  </li>
                  <li>
                    Desarrollo de prototipos interactivos y maquetación
                    responsive, asegurando la accesibilidad y funcionalidad en
                    diversos dispositivos
                  </li>
                  <li>
                    Diseño y producción de piezas de comunicación de alto
                    impacto y contenido dinámico para redes sociales
                  </li>
                </ul>
              </div>
               </div>
            </div>

          </div>

          {/* Software & Skills */}
          <div className="md:col-span-5 space-y-16 relative z-10">
            <div className="bg-white border-4 border-black rounded-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 rotate-2 relative">
              <ThreadLine
                className="absolute -top-8 -right-10 z-0 opacity-70"
                color="#FF1493"
              />
              <h3 className="font-display text-4xl mb-8 uppercase text-zinc-900 relative z-10">
                Software
              </h3>
              <div className="space-y-6">
                {SKILLS.map((skill, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div
                      className={`w-14 h-14 shrink-0 rounded-full border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ${skill.color} text-black flex items-center justify-center`}
                    >
                      <skill.icon size={24} />
                    </div>
                    <div className="flex-1">
                      <p className="font-sans font-bold text-lg mb-1">
                        {skill.name}
                      </p>
                      <div className="w-full h-3 bg-zinc-200 rounded-full border-2 border-black overflow-hidden relative">
                        <motion.div
                          className="h-full bg-pink-500 border-r-2 border-black"
                          initial={{ width: 0 }}
                          whileInView={{ width: skill.level }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1,
                            delay: index * 0.1,
                            ease: "easeOut",
                          }}
                        ></motion.div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border-4 border-black rounded-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 relative -rotate-1">
              <div className="washi-tape washi-pink w-16 -top-3 -left-4 rotate-45"></div>
              <div className="washi-tape washi-pink w-16 -bottom-3 -right-4 rotate-45"></div>

              <h3 className="font-display text-4xl mb-6 uppercase">
                <span className="highlighter-neon">Skills</span>
              </h3>

              <div className="flex flex-wrap gap-3">
                {[
                  "UX/UI Design",
                  "Branding",
                  "Edición de Video",
                  "Motion Graphics",
                  "Social Media Content",
                  "Packaging",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full border-2 border-black bg-white font-sans text-zinc-900 text-sm font-bold hover:bg-zinc-100 hover:-translate-y-0.5 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
             {/* Idiomas */}
            <div className="bg-white border-4 border-black rounded-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 relative rotate-1">
              <AsteriskDoodle className="absolute -right-8 -top-4 z-0 opacity-70" color="#00BFFF" />
              <h3 className="font-display text-4xl mb-6 uppercase tracking-wide relative z-10">
                <span className="highlighter-yellow">Idiomas</span>
              </h3>
              <div className="flex flex-wrap gap-4">
                <span className="sticker px-6 py-2 bg-[#ffb3ba] font-bold text-lg -rotate-2">Español (Nativo)</span>
                <span className="sticker px-6 py-2 bg-[#baffc9] font-bold text-lg rotate-3">Inglés (Avanzado)</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Project Gallery */}
      <section
        id="work"
        className="py-32 bg-blue-600 border-y-8 border-black relative overflow-hidden"
      >
        {/* Background Doodles for Work Section */}
        <ImperfectCircle
          className="absolute top-20 right-20 z-0 opacity-50"
          color="#CCFF00"
        />
        <SparkleFive
          className="absolute bottom-40 left-10 z-0 opacity-50"
          color="#FF1493"
        />
        <ThreadLine
          className="absolute top-40 left-20 z-0 opacity-50 -rotate-45"
          color="#00BFFF"
        />
        <AsteriskDoodle
          className="absolute top-1/2 right-10 z-0 opacity-50"
          color="#FF8C00"
        />
        <CrossDoodle
          className="absolute bottom-20 right-1/3 z-0 opacity-50"
          color="#00FF00"
        />

        <div className="washi-tape washi-yellow w-full h-8 top-0 left-0 z-10 opacity-50"></div>
        <div className="washi-tape washi-pink w-full h-8 bottom-0 left-0 z-10 opacity-50"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl font-display uppercase tracking-wider mb-24 text-center text-white"
          >
            Mis <span className="text-yellow-400">Proyectos</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
            {PROJECTS.map((project, index) => (
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                key={project.id}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100,
                }}
                className={`block relative group cursor-pointer ${project.rotation} hover:rotate-0 transition-transform duration-300`}
              >
                {/* Large Outline Number */}
                <div className="absolute -top-12 -left-8 font-display text-9xl text-outline z-30 opacity-80 group-hover:scale-110 transition-transform duration-300 pointer-events-none">
                  0{project.id}
                </div>

                {/* Random Washi Tapes */}
                <div
                  className={`washi-tape ${index % 2 === 0 ? "washi-pink" : "washi-yellow"} w-32 -top-4 ${index % 2 === 0 ? "left-10" : "right-10"} z-20`}
                ></div>

                <div className="irregular-border bg-white p-4 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-[20px_20px_0px_0px_rgba(255,255,0,1)] transition-all duration-300">
                  <div className="irregular-border overflow-hidden aspect-[4/3] mb-6 relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                    />
                  </div>

                  <div className="flex justify-between items-end px-2">
                    <div>
                      <h3 className="text-4xl font-display uppercase tracking-wide mb-1">
                        {project.title}
                      </h3>
                      <p className="text-2xl font-handwriting font-bold text-zinc-600">
                        {project.category}
                      </p>
                    </div>
                    <div
                      className={`circular-sticker w-14 h-14 ${project.color} text-black group-hover:scale-110 transition-transform`}
                    >
                      <ArrowRight className="w-8 h-8 -rotate-45" />
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-32 px-6 max-w-4xl mx-auto text-center relative mt-20"
      >
        {/* Background Doodles for Contact Section */}
        <LoopScribble
          className="absolute top-10 right-10 md:-right-20 z-0 opacity-60"
          color="#00BFFF"
        />
        <SparkleFour
          className="absolute bottom-20 left-0 md:-left-20 z-0 opacity-80"
          color="#00FF00"
        />
        <CrossDoodle
          className="absolute top-1/2 -left-10 z-0 opacity-80"
          color="#FF1493"
        />
        <AsteriskDoodle
          className="absolute bottom-10 right-10 z-0 opacity-80"
          color="#FF8C00"
        />

        <div className="washi-tape washi-lavender w-64 -top-6 left-1/2 -translate-x-1/2 z-0 rotate-2"></div>

        <div className="irregular-border bg-white p-12 md:p-20 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] relative z-10 rotate-1">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl font-display uppercase tracking-wider mb-8 leading-none"
          >
            ¡Hagamos <br />
            <span className="highlighter-neon">Ruido!</span>
          </motion.h2>

          <p className="text-4xl font-handwriting font-bold text-zinc-700 mb-12">
            ¿Tenés una idea loca? ¡Escribime!{" "}
            <Heart className="inline text-pink-500 fill-pink-500" />
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="mailto:lolamazzaoliver@gmail.com"
              className="sticker flex items-center justify-center gap-3 bg-yellow-400 text-zinc-900 px-8 py-4 font-display text-2xl uppercase tracking-wider transition-all duration-300 hover:scale-105 hover:bg-black hover:text-white"
            >
              <Mail className="w-6 h-6" /> Email
            </a>
            <a
               href="https://www.linkedin.com/in/lola-mazza-oliver-75166729b"
              target="_blank"
              rel="noopener noreferrer"
              className="sticker flex items-center justify-center gap-3 bg-blue-500 text-white px-8 py-4 font-display text-2xl uppercase tracking-wider transition-all duration-300 hover:scale-105 hover:bg-black hover:text-white"
            >
              <Linkedin className="w-6 h-6" /> LinkedIn
            </a>
            <a
              href="https://www.behance.net/lolamazzaoliver"
              target="_blank"
              rel="noopener noreferrer"
              className="sticker flex items-center justify-center gap-3 bg-pink-500 text-white px-8 py-4 font-display text-2xl uppercase tracking-wider transition-all duration-300 hover:scale-105 hover:bg-black hover:text-white"
            >
              <svg
                className="w-8 h-8"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M22 7h-7v2h7V7zM11.4 10.33c0-1.4-.94-2.26-2.56-2.26H0v10h4.2c1.85 0 3.18-.88 3.18-2.5 0-1.1-.7-1.87-1.74-2.16 1.14-.3 1.76-1.12 1.76-2.08zM2.8 10.04h1.3c.57 0 .98.32.98.83 0 .52-.4.83-.98.83H2.8v-1.66zm1.55 5.86H2.8v-1.85h1.55c.67 0 1.13.37 1.13.93 0 .57-.46.92-1.13.92zM15.87 9.3c-3.93 0-6.6 2.7-6.6 6.58 0 3.84 2.52 6.44 6.65 6.44 2.97 0 5.26-1.24 6.03-4.1h-2.97c-.35 1.03-1.49 1.64-2.97 1.64-1.64 0-3.17-1.08-3.37-2.97h9.35c.05-.2.05-.57.05-.78v-.52c-.15-2.86-2.52-5.3-6.14-5.3zm-3.07 4.5c.26-1.53 1.59-2.55 3.07-2.55 1.49 0 2.82 1.02 3.07 2.55h-6.14z" />
              </svg>{" "}
              Behance
            </a>
          </div>
        </div>
      </section>
    </div>
  );
  }