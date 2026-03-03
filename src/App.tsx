import { motion } from 'motion/react';
import { ArrowRight, Github, Linkedin, Mail, Star, Zap, Figma, PenTool, Video, MonitorPlay, Layers, Heart, Scissors } from 'lucide-react';

const PORTFOLIO_LETTERS = ['P', 'O', 'R', 'T', 'F', 'O', 'L', 'I', 'O'];

const SKILLS = [
  { name: 'Figma', icon: Figma, level: '95%', color: 'bg-[#baffc9]' },
  { name: 'Illustrator', icon: PenTool, level: '90%', color: 'bg-[#ffdfba]' },
  { name: 'Photoshop', icon: Layers, level: '85%', color: 'bg-[#bae1ff]' },
  { name: 'After Effects', icon: MonitorPlay, level: '75%', color: 'bg-[#e6ccff]' },
  { name: 'Premiere', icon: Video, level: '80%', color: 'bg-[#ffb3ba]' },
  { name: 'CapCut', icon: Scissors, level: '85%', color: 'bg-[#ffffba]' },
];

const PROJECTS = [
  {
    id: 1,
    title: 'Campaña Neón',
    category: 'Dirección de Arte',
    color: 'bg-yellow-400',
    rotation: '-rotate-2',
    image: 'https://picsum.photos/seed/neon/800/600',
  },
  {
    id: 2,
    title: 'App de Música',
    category: 'UI/UX Design',
    color: 'bg-pink-500',
    rotation: 'rotate-2',
    image: 'https://picsum.photos/seed/musicapp/800/600',
  },
  {
    id: 3,
    title: 'Festival Visuals',
    category: 'Motion Graphics',
    color: 'bg-purple-400',
    rotation: '-rotate-1',
    image: 'https://picsum.photos/seed/festival/800/600',
  },
  {
    id: 4,
    title: 'Marca Rebelde',
    category: 'Branding',
    color: 'bg-green-400',
    rotation: 'rotate-3',
    image: 'https://picsum.photos/seed/rebel/800/600',
  },
];

export default function App() {
  return (
    <div className="min-h-screen text-zinc-900 font-sans overflow-x-hidden selection:bg-pink-500 selection:text-white pb-32">
      {/* Floating Navbar Sticker */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
        <motion.div 
          initial={{ y: -100, rotate: 0 }}
          animate={{ y: 0, rotate: 0 }}
          className="sticker px-8 py-3 flex gap-8 items-center bg-white"
        >
          <span className="font-display text-3xl tracking-wider text-pink-500">LOLA.</span>
          <div className="flex gap-6 font-bold uppercase text-sm tracking-widest">
            <a href="#bio" className="hover:text-yellow-500 transition-colors">Bio</a>
            <a href="#work" className="hover:text-purple-500 transition-colors">Trabajos</a>
            <a href="#contact" className="hover:text-pink-500 transition-colors">Contacto</a>
          </div>
        </motion.div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center relative px-6 pt-32 max-w-7xl mx-auto">
        
        {/* Decorative Elements */}
        <motion.div 
          animate={{ y: [0, 20, 0], rotate: [-15, -10, -15] }} 
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-5 md:right-20 circular-sticker w-28 h-28 bg-pink-500 text-white font-handwriting text-2xl z-20"
        >
          <div className="transform rotate-12">100%<br/>Creativa</div>
        </motion.div>

        <Zap className="absolute top-1/3 right-1/3 w-16 h-16 text-purple-500 fill-purple-500 opacity-50 -rotate-12" />
        <Star className="absolute bottom-1/3 left-1/4 w-12 h-12 text-yellow-500 fill-yellow-500 opacity-50 rotate-45" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-12 z-10">
          
          {/* Left: Text & Title */}
          <div className="flex-1 relative">
            {/* PORTFOLIO Title */}
            <div className="flex flex-wrap justify-center md:justify-start mb-8">
              {PORTFOLIO_LETTERS.map((letter, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, type: "spring" }}
                  className={`font-display text-[15vw] md:text-[8rem] leading-none text-zinc-900 ${i % 2 === 0 ? 'rotate-3' : '-rotate-6'} ${i % 3 === 0 ? 'text-pink-500' : ''}`}
                  style={{ display: 'inline-block' }}
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
              className="sticker bg-white p-8 max-w-xl rotate-1"
            >
              <div className="washi-tape washi-lavender w-32 -top-4 left-4 -rotate-3"></div>
              <h2 className="font-display text-5xl text-pink-500 mb-4 uppercase tracking-wide">Hola, soy Lola</h2>
              <p className="font-serif text-lg leading-relaxed text-zinc-700">
                Estudiante de Tecnología Multimedial enfocada en la creación de ecosistemas digitales integrales. Mi trabajo conecta el diseño visual (UX/UI y branding) con el desarrollo front-end, buscando un equilibrio constante entre la estética, la funcionalidad técnica y los objetivos de negocio."
              </p>
            </motion.div>
          </div>

          {/* Right: Polaroid */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
            animate={{ opacity: 1, scale: 1, rotate: 4 }}
            transition={{ delay: 0.5, type: "spring" }}
            className="relative w-full max-w-sm md:max-w-md"
          >
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
            <div className="bg-white p-4 pb-16 border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] relative z-10">
              <div className="film-grain border-4 border-black aspect-[3/4] overflow-hidden">
                <img 
                  src="https://picsum.photos/seed/lola/600/800" 
                  alt="Lola" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover filter contrast-125 saturate-150"
                />
              </div>
              <p className="font-handwriting text-3xl text-center mt-4 text-zinc-900 transform -rotate-2">¡Lista para crear!</p>
            </div>
            <div className="washi-tape washi-pink w-24 -bottom-4 right-4 z-20 -rotate-12"></div>
          </motion.div>

        </div>
      </section>

      {/* Bio & Skills Section */}
      <section id="bio" className="py-32 px-6 max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          
          {/* Education & Experience */}
          <div className="md:col-span-7 space-y-16">
            <div>
              <h3 className="font-display text-5xl mb-8 uppercase tracking-wide">
                <span className="highlighter-yellow">Educación</span>
              </h3>
              <div className="space-y-8">
                {/* Block 1 */}
                <div className="irregular-border bg-white p-6 relative">
                  <div className="washi-tape washi-pink w-16 -top-3 -left-4 rotate-45"></div>
                  <div className="washi-tape washi-pink w-16 -bottom-3 -right-4 rotate-45"></div>
                  
                  {/* Overlapping sticker pin (Figma) */}
                  <div className="absolute -right-6 top-1/2 -translate-y-1/2 circular-sticker w-12 h-12 bg-[#baffc9] text-black z-10 rotate-12">
                    <Figma size={20} />
                  </div>

                  <h4 className="font-bold text-2xl mb-1">Licenciatura en Tecnología Multimedia</h4>
                  <p className="font-serif text-zinc-600 mb-2">Universidad Creativa • 2024 - Presente</p>
                  <p className="font-handwriting text-2xl text-pink-500 transform -rotate-2 mt-2 leading-tight">¡Próximamente Técnica en Comunicación Interactiva y Diseño Multimedial!</p>
                </div>
                
                {/* Block 2 */}
                <div className="irregular-border bg-white p-6 relative">
                  <div className="washi-tape washi-pink w-16 -top-3 -right-4 -rotate-45"></div>
                  
                  {/* Overlapping sticker pin (Photoshop) */}
                  <div className="absolute -left-6 top-1/2 -translate-y-1/2 circular-sticker w-12 h-12 bg-[#bae1ff] text-black z-10 -rotate-12">
                    <Layers size={20} />
                  </div>

                  <h4 className="font-bold text-2xl mb-1">Hackatones UX/UI</h4>
                  <p className="font-serif text-zinc-600">Participación en múltiples ediciones</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-display text-5xl mb-8 uppercase tracking-wide">
                <span className="highlighter-pink">Experiencia</span>
              </h3>
              <div className="irregular-border bg-white p-6 relative rotate-1">
                <div className="washi-tape washi-pink w-24 -top-4 right-10 -rotate-6"></div>
                <div className="washi-tape washi-pink w-16 -bottom-3 -left-4 rotate-45"></div>
                
                {/* Overlapping sticker pin (Illustrator) */}
                <div className="absolute -right-5 -top-5 circular-sticker w-14 h-14 bg-[#ffdfba] text-black z-10 rotate-6">
                  <PenTool size={24} />
                </div>

                <h4 className="font-bold text-2xl mb-1">Diseñadora Freelance</h4>
                <p className="font-serif text-zinc-600 mb-4">Independiente • 2023 - Presente</p>
                <ul className="font-serif text-zinc-700 list-disc list-inside space-y-2">
                  <li>Creación de identidades visuales rebeldes.</li>
                  <li>Diseño de interfaces web interactivas.</li>
                  <li>Animación de gráficos para redes sociales.</li>
                </ul>
              </div>
            </div>

            {/* Idiomas */}
            <div>
              <h3 className="font-display text-5xl mb-8 uppercase tracking-wide">
                <span className="highlighter-yellow">Idiomas</span>
              </h3>
              <div className="flex flex-wrap gap-4">
                <span className="sticker px-6 py-2 bg-[#ffb3ba] font-bold text-lg -rotate-2">Español (Nativo)</span>
                <span className="sticker px-6 py-2 bg-[#baffc9] font-bold text-lg rotate-3">Inglés (Avanzado)</span>
                <span className="sticker px-6 py-2 bg-[#bae1ff] font-bold text-lg -rotate-1">Portugués (Básico)</span>
              </div>
            </div>
          </div>

          {/* Software & Skills */}
          <div className="md:col-span-5 space-y-16">
                      <div className="bg-white border-4 border-black rounded-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 rotate-2 relative">
              <h3 className="font-display text-4xl mb-8 uppercase text-zinc-900">Software</h3>
              <div className="space-y-6">
                {SKILLS.map((skill, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-4"
                  >
                    <div className={`w-14 h-14 shrink-0 rounded-full border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ${skill.color} text-black flex items-center justify-center`}>
                      <skill.icon size={24} />
                    </div>
                    <div className="flex-1">
                      <p className="font-sans font-bold text-lg mb-1">{skill.name}</p>
                       <div className="w-full h-3 bg-zinc-200 rounded-full border-2 border-black overflow-hidden relative">
                        <motion.div 
                           className="h-full bg-pink-500 border-r-2 border-black"
                          initial={{ width: 0 }}
                          whileInView={{ width: skill.level }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
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
                {['Layout Design', 'Branding', 'UI Design', 'Photo Manipulation', 'Basic Video Edit', 'Motion Graphics'].map((skill) => (
                  <span 
                    key={skill}
                     className="px-4 py-2 rounded-full border-2 border-black bg-white font-sans text-zinc-900 text-sm font-bold hover:bg-zinc-100 hover:-translate-y-0.5 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Project Gallery */}
      <section id="work" className="py-32 bg-blue-600 border-y-8 border-black relative">
        <div className="washi-tape washi-yellow w-full h-8 top-0 left-0 z-10 opacity-50"></div>
        <div className="washi-tape washi-pink w-full h-8 bottom-0 left-0 z-10 opacity-50"></div>
        
        <div className="max-w-7xl mx-auto px-6">
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
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
                className={`relative group cursor-pointer ${project.rotation} hover:rotate-0 transition-transform duration-300`}
              >
                {/* Large Outline Number */}
                <div className="absolute -top-12 -left-8 font-display text-9xl text-outline z-30 opacity-80 group-hover:scale-110 transition-transform duration-300 pointer-events-none">
                  0{project.id}
                </div>

                {/* Random Washi Tapes */}
                <div className={`washi-tape ${index % 2 === 0 ? 'washi-pink' : 'washi-yellow'} w-32 -top-4 ${index % 2 === 0 ? 'left-10' : 'right-10'} z-20`}></div>
                
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
                      <h3 className="text-4xl font-display uppercase tracking-wide mb-1">{project.title}</h3>
                      <p className="text-2xl font-handwriting text-zinc-600">{project.category}</p>
                    </div>
                    <div className={`circular-sticker w-14 h-14 ${project.color} text-black group-hover:scale-110 transition-transform`}>
                      <ArrowRight className="w-8 h-8 -rotate-45" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 max-w-4xl mx-auto text-center relative mt-20">
        <div className="washi-tape washi-lavender w-64 -top-6 left-1/2 -translate-x-1/2 z-0 rotate-2"></div>
        
        <div className="irregular-border bg-white p-12 md:p-20 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] relative z-10 rotate-1">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl font-display uppercase tracking-wider mb-8 leading-none"
          >
            ¡Hagamos <br/><span className="highlighter-neon">Ruido!</span>
          </motion.h2>
          
          <p className="text-4xl font-handwriting text-zinc-700 mb-12">
            ¿Tienes una idea loca? ¡Escríbeme! <Heart className="inline text-pink-500 fill-pink-500" />
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <motion.a 
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:hola@ejemplo.com"
              className="sticker flex items-center gap-3 bg-yellow-400 text-zinc-900 px-8 py-4 font-display text-2xl uppercase tracking-wider"
            >
              <Mail className="w-6 h-6" /> Email
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              href="#"
              className="sticker flex items-center gap-3 bg-purple-400 text-zinc-900 px-8 py-4 font-display text-2xl uppercase tracking-wider"
            >
              <Linkedin className="w-6 h-6" /> LinkedIn
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
              href="#"
              className="sticker flex items-center gap-3 bg-pink-500 text-white px-8 py-4 font-display text-2xl uppercase tracking-wider"
            >
              <Github className="w-6 h-6" /> GitHub
            </motion.a>
          </div>
        </div>
      </section>
    </div>
  );
}
