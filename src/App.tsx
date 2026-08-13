import { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowDownRight, ArrowRight, Instagram, Menu, X } from 'lucide-react';
import { NavLink, Route, Routes, useLocation, useNavigate } from 'react-router-dom';

const images = [
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260629_104530_521b2f85-c0f3-4d0e-9704-b578315b4cb9.png&w=1920&q=85',
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260629_103711_76ccdb8b-5043-4f47-9c54-4379713393ea.png&w=1920&q=85',
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260629_103728_394f6a1b-85e2-4386-a4f6-408472a0a5b7.png&w=1920&q=85',
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260629_103739_86743e0e-16a7-4bee-bf38-dd67985344dc.png&w=1920&q=85',
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260629_103748_b2215dc8-a3a7-470d-b19a-5b87fa7d0c37.png&w=1920&q=85',
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260629_103758_e919ce72-5c9d-4b87-9be6-d7647b34825c.png&w=1920&q=85',
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260629_103808_013583d0-3386-4547-9832-37c7d8edb3ac.png&w=1920&q=85',
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260629_103937_a0c49d0a-33eb-4ead-aea6-c1baf241acbc.png&w=1920&q=85',
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260629_103956_d18ed8fd-7b6f-4b86-91f9-20010fe38670.png&w=1920&q=85',
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260629_104034_ba5a9963-87ff-4008-a545-6bd686c088b5.png&w=1920&q=85',
];

const heroVideo = 'https://d8j0ntlcm91z4.cloudfront.net/user_39ca84eAE1ODL9hbR5VhoEj8tBf/hf_20260625_154433_532a85d3-dabf-4265-b8bd-19ac6af31842.mp4';
const secondaryVideo = 'https://d8j0ntlcm91z4.cloudfront.net/user_39ca84eAE1ODL9hbR5VhoEj8tBf/hf_20260625_154401_a664f076-b971-4557-8728-40ef9ea4c49b.mp4';

const nav = [
  ['Home', '/'], ['Residences', '/residences'], ['Studio', '/studio'], ['Journal', '/journal'], ['Contact', '/contact'],
];

function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  useEffect(() => setOpen(false), [location.pathname]);
  return <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 md:pt-6">
    <div className="flex w-full max-w-[1240px] items-center justify-between rounded-full border border-white/15 bg-black/25 px-3 py-2.5 backdrop-blur-xl">
      <NavLink to="/" className="pl-3 text-[15px] font-semibold tracking-[-.03em] text-white">AMATO <span className="text-white/45">/ LIMA</span></NavLink>
      <nav className="hidden items-center gap-1 md:flex">
        {nav.map(([label, path]) => <NavLink key={path} to={path} className={({isActive}) => `rounded-full px-4 py-2 text-[11px] uppercase tracking-[.16em] transition ${isActive ? 'bg-white text-black' : 'text-white/65 hover:bg-white/10 hover:text-white'}`}>{label}</NavLink>)}
      </nav>
      <button aria-label="Menu" onClick={() => setOpen(v => !v)} className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-black md:hidden">
        {open ? <X size={17}/> : <Menu size={17}/>} 
      </button>
      <div className="hidden pr-1 text-[10px] uppercase tracking-[.18em] text-white/60 md:block">Private appointments</div>
    </div>
    <AnimatePresence>{open && <motion.div initial={{opacity:0,y:-8,scale:.98}} animate={{opacity:1,y:0,scale:1}} exit={{opacity:0,y:-8,scale:.98}} className="absolute top-[70px] w-[calc(100%-32px)] rounded-3xl border border-white/10 bg-[#101010]/95 p-2 backdrop-blur-xl md:hidden">
      {nav.map(([label,path]) => <NavLink key={path} to={path} className="block rounded-2xl px-5 py-4 text-xs uppercase tracking-[.16em] text-white/70 hover:bg-white/10 hover:text-white">{label}</NavLink>)}
    </motion.div>}</AnimatePresence>
  </header>;
}

function PageIntro({ eyebrow, title, body }: { eyebrow:string; title:React.ReactNode; body:string }) {
  return <section className="px-6 pb-16 pt-36 md:px-12 md:pb-24 md:pt-48">
    <div className="mx-auto grid max-w-[1240px] gap-10 md:grid-cols-[1fr_1.5fr] md:items-end">
      <div className="text-[10px] uppercase tracking-[.25em] text-white/40">{eyebrow}</div>
      <div><h1 className="max-w-4xl text-5xl font-light leading-[.95] tracking-[-.05em] md:text-8xl">{title}</h1><p className="mt-8 max-w-xl text-sm leading-7 text-white/55 md:text-base">{body}</p></div>
    </div>
  </section>;
}

function Home() {
  return <main className="bg-[#080808]">
    <section className="grain relative flex min-h-screen items-end overflow-hidden px-6 pb-10 pt-32 md:px-12 md:pb-12">
      <video className="absolute inset-0 h-full w-full object-cover" src={heroVideo} autoPlay muted loop playsInline />
      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#080808] to-transparent" />
      <div className="relative z-10 mx-auto flex w-full max-w-[1240px] flex-col justify-between gap-24 md:flex-row md:items-end">
        <div className="max-w-3xl"><div className="mb-6 flex items-center gap-3 text-[10px] uppercase tracking-[.3em] text-white/55"><span className="h-px w-8 bg-white/40"/>Estates shaped by presence</div><h1 className="text-6xl font-light leading-[.84] tracking-[-.06em] md:text-[110px]">Space, <span className="serif italic">quietly</span><br/>considered.</h1></div>
        <div className="max-w-xs pb-1 md:text-right"><p className="text-sm leading-6 text-white/70">A private collection of residences, architecture and interiors where material, light and landscape meet.</p><NavLink to="/residences" className="mt-7 inline-flex items-center gap-3 rounded-full bg-white px-5 py-3 text-xs font-medium uppercase tracking-[.12em] text-black transition hover:bg-white/85">Explore residences <ArrowRight size={14}/></NavLink></div>
      </div>
      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-[9px] uppercase tracking-[.25em] text-white/45 md:flex"><span className="h-8 w-px bg-white/30"/>Scroll to enter</div>
    </section>
    <section className="border-y border-white/10 px-6 py-24 md:px-12 md:py-36"><div className="mx-auto grid max-w-[1240px] gap-16 md:grid-cols-[.75fr_2fr]"><span className="text-[10px] uppercase tracking-[.25em] text-white/35">01 / Philosophy</span><p className="max-w-4xl text-3xl font-light leading-[1.12] tracking-[-.035em] text-white/90 md:text-6xl">We believe the most memorable spaces are not loud. <span className="text-white/35">They give attention back to the people who inhabit them.</span></p></div></section>
    <GalleryPreview />
  </main>;
}

function GalleryPreview() {
  return <section className="px-5 py-20 md:px-10 md:py-32"><div className="mx-auto max-w-[1240px]"><div className="mb-10 flex items-end justify-between"><div><span className="text-[10px] uppercase tracking-[.25em] text-white/35">02 / Selected</span><h2 className="mt-3 text-3xl font-light tracking-[-.04em] md:text-5xl">Recent residences</h2></div><NavLink to="/residences" className="hidden items-center gap-2 text-[10px] uppercase tracking-[.2em] text-white/50 hover:text-white md:flex">View archive <ArrowDownRight size={14}/></NavLink></div><div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-4">{images.slice(0,8).map((src,i)=><motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:'-60px'}} transition={{duration:.7,delay:(i%4)*.06}} key={src} className={`${i===0||i===5?'md:col-span-2':''} overflow-hidden rounded-[2px] bg-[#151515]`}><img src={src} alt="Amato Lima residence" loading="lazy" className="aspect-[3/4] h-full w-full object-cover transition duration-700 hover:scale-105 md:aspect-auto"/></motion.div>)}</div></div></section>;
}

function Residences() {
  const layout = useMemo(() => images.map((src,i)=>({src,i,offset:[0,18,-6,12,30,-12,8,24,-4,16][i]})),[]);
  return <main className="min-h-screen bg-[#080808]"><PageIntro eyebrow="03 / Archive" title={<>The places <span className="serif italic">we return to.</span></>} body="An evolving archive of residences selected for their architecture, atmosphere, landscape and the way they hold a life."/><section className="px-4 pb-32 md:px-10"><div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-x-3 gap-y-14 md:grid-cols-4 md:gap-x-6 md:gap-y-28">{layout.map(({src,i,offset})=><motion.article key={src} initial={{opacity:0,scale:.94}} whileInView={{opacity:1,scale:1}} viewport={{once:true,margin:'-80px'}} transition={{duration:.8,delay:(i%4)*.08}} style={{transform:`translateY(${offset}px)`}} className={`${i%7===0?'md:col-span-2':''} group`}><div className="relative overflow-hidden bg-[#151515]"><img src={src} alt={`Residence ${String(i+1).padStart(2,'0')}`} loading="lazy" className="aspect-[2/3] w-full object-cover transition duration-1000 group-hover:scale-105"/><div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-70"/><div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white"><span className="text-[9px] uppercase tracking-[.2em]">Residence {String(i+1).padStart(2,'0')}</span><ArrowUpRightIcon/></div></div></motion.article>)}</div></section></main>;
}
function ArrowUpRightIcon(){ return <ArrowDownRight size={15} className="rotate-[-90deg]"/>; }

function ResidenceDetail() {
  return <main className="bg-[#080808]"><section className="relative min-h-[85vh] overflow-hidden"><img src={images[2]} alt="Featured residence" className="absolute inset-0 h-full w-full object-cover"/><div className="absolute inset-0 bg-black/25"/><div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-[#080808] to-transparent"/><div className="relative z-10 flex min-h-[85vh] items-end px-6 pb-10 md:px-12 md:pb-14"><div className="mx-auto flex w-full max-w-[1240px] items-end justify-between gap-8"><div><div className="mb-5 text-[10px] uppercase tracking-[.25em] text-white/60">Case 01 / São Paulo</div><h1 className="text-6xl font-light tracking-[-.06em] md:text-9xl">Casa <span className="serif italic">Lima.</span></h1></div><div className="hidden max-w-xs text-right text-sm leading-6 text-white/65 md:block">A study in proportion, shadow and warm stone. Designed around long views and slower mornings.</div></div></div></section><section className="mx-auto grid max-w-[1240px] gap-16 px-6 py-24 md:grid-cols-2 md:px-12 md:py-36"><div><span className="text-[10px] uppercase tracking-[.25em] text-white/35">The brief</span><p className="mt-8 text-3xl font-light leading-[1.15] tracking-[-.03em] md:text-5xl">Architecture as a frame for a quieter way of living.</p></div><div className="space-y-7 text-sm leading-7 text-white/55"><p>Every decision begins with the atmosphere: how daylight crosses a wall, how materials age, and where the eye naturally settles.</p><p>The result is deliberately restrained — generous openings, tactile surfaces and a sequence of rooms that never compete with the landscape.</p><div className="grid grid-cols-2 border-t border-white/10 pt-6 text-[10px] uppercase tracking-[.18em] text-white/45"><span>Area<br/><strong className="mt-2 block text-white/80">684 m²</strong></span><span>Completion<br/><strong className="mt-2 block text-white/80">2026</strong></span></div></div></section><section className="grid grid-cols-2 gap-2 px-2 pb-24 md:grid-cols-4 md:gap-4 md:px-10">{images.slice(3,10).map(src=><img key={src} src={src} alt="Interior detail" loading="lazy" className="aspect-[3/4] w-full object-cover"/>)}</section></main>;
}

function Studio() {
  return <main className="bg-[#e9e3d9] text-[#171513]"><section className="px-6 pb-20 pt-36 md:px-12 md:pb-32 md:pt-48"><div className="mx-auto grid max-w-[1240px] gap-16 md:grid-cols-[.65fr_1.8fr]"><span className="text-[10px] uppercase tracking-[.25em] text-black/45">04 / Studio</span><div><h1 className="max-w-5xl text-6xl font-light leading-[.9] tracking-[-.055em] md:text-[108px]">Less, but <span className="serif italic">deeper.</span></h1><p className="mt-12 max-w-2xl text-lg leading-8 text-black/65">Amato Lima is a practice built around considered spaces. We work across architecture, interiors and private residences, translating a sense of quiet luxury into places that feel unmistakably lived in.</p></div></div></section><section className="border-y border-black/10 px-6 py-20 md:px-12 md:py-32"><div className="mx-auto grid max-w-[1240px] gap-12 md:grid-cols-3"><div><span className="text-[10px] uppercase tracking-[.2em] text-black/40">Approach</span></div>{['Material / Light','Context / Time','Detail / Silence'].map((t,i)=><div key={t} className="border-t border-black/15 pt-5"><span className="text-xs text-black/35">0{i+1}</span><h2 className="mt-12 text-2xl font-medium tracking-[-.03em]">{t}</h2><p className="mt-5 text-sm leading-7 text-black/55">We remove what does not need to be there, then give the remaining elements enough space to become meaningful.</p></div>)}</div></section><section className="px-4 py-4 md:px-10 md:py-10"><img src={images[7]} alt="Amato Lima studio" className="h-[70vh] w-full object-cover"/></section></main>;
}

function Journal() {
  const entries = [
    ['On quiet materials','Why stone, wood and shadow can create more emotional depth than ornament.'],
    ['A room with a view','Designing around the horizon instead of placing the horizon behind the design.'],
    ['The architecture of pause','What happens when a home is allowed to be slower than the city around it.'],
    ['Objects with memory','A small collection of pieces that become more beautiful through use.'],
  ];
  return <main className="min-h-screen bg-[#080808]"><PageIntro eyebrow="05 / Journal" title={<>Notes on <span className="serif italic">living well.</span></>} body="Observations from the studio — architecture, materials, interiors and the small decisions that make a place feel like yours."/><section className="mx-auto max-w-[1100px] px-6 pb-32 md:px-10">{entries.map(([title,body],i)=><motion.article key={title} initial={{opacity:0,y:25}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:'-60px'}} transition={{duration:.65}} className="group grid gap-6 border-t border-white/10 py-9 md:grid-cols-[80px_1fr_1fr_auto] md:items-start"><span className="text-[10px] uppercase tracking-[.2em] text-white/30">0{i+1}</span><h2 className="text-2xl font-light tracking-[-.035em] transition group-hover:text-white/65 md:text-4xl">{title}</h2><p className="max-w-sm text-sm leading-6 text-white/45">{body}</p><ArrowDownRight size={18} className="hidden text-white/35 transition group-hover:translate-x-1 group-hover:translate-y-1 md:block"/></motion.article>)}</section></main>;
}

function Contact() {
  return <main className="grain relative min-h-screen overflow-hidden bg-[#0c0c0c]"><video className="absolute inset-0 h-full w-full object-cover opacity-35" src={secondaryVideo} autoPlay muted loop playsInline/><div className="absolute inset-0 bg-black/55"/><div className="relative z-10 flex min-h-screen flex-col justify-between px-6 pb-8 pt-36 md:px-12 md:pb-10 md:pt-40"><div className="mx-auto w-full max-w-[1240px]"><span className="text-[10px] uppercase tracking-[.25em] text-white/45">06 / Contact</span><h1 className="mt-10 max-w-5xl text-6xl font-light leading-[.86] tracking-[-.06em] md:text-[120px]">Let's make<br/><span className="serif italic">space.</span></h1></div><div className="mx-auto grid w-full max-w-[1240px] gap-10 md:grid-cols-2 md:items-end"><div className="max-w-sm text-sm leading-7 text-white/55">For private residences, collaborations and new commissions, tell us a little about the place you are imagining.</div><div className="md:text-right"><a href="mailto:hello@amatolima.com" className="text-2xl font-light tracking-[-.03em] text-white hover:text-white/60 md:text-4xl">hello@amatolima.com</a><div className="mt-6 flex items-center gap-4 md:justify-end"><a href="#" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 hover:bg-white hover:text-black"><Instagram size={16}/></a><span className="text-[10px] uppercase tracking-[.18em] text-white/35">São Paulo / Worldwide</span></div></div></div></div></main>;
}

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const previous = useRef(location.pathname);
  useEffect(() => {
    if (previous.current !== location.pathname) window.scrollTo({top:0,behavior:'instant'});
    previous.current = location.pathname;
  }, [location.pathname]);
  useEffect(() => { const onKey=(e:KeyboardEvent)=>{ if(e.key==='Escape') navigate('/'); }; window.addEventListener('keydown',onKey); return()=>window.removeEventListener('keydown',onKey); },[navigate]);
  return <div className="min-h-screen bg-[#080808] text-white"><Header/><Routes><Route path="/" element={<Home/>}/><Route path="/residences" element={<Residences/>}/><Route path="/residences/casa-lima" element={<ResidenceDetail/>}/><Route path="/studio" element={<Studio/>}/><Route path="/journal" element={<Journal/>}/><Route path="/contact" element={<Contact/>}/><Route path="*" element={<Home/>}/></Routes></div>;
}
