// src/components/layout/LoadingScreen.js
import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCog, FaSearch, FaShieldAlt, FaBolt, FaExchangeAlt } from 'react-icons/fa';

const HexagonShape = ({ className }) => (
  <svg className={className} viewBox="0 0 100 86.6">
    <polygon points="50,0 100,25 100,75 50,100 0,75 0,25" />
  </svg>
);

// Simple animated line graph component
const AnalysisGraph = ({ phase }) => {
  const paths = [
    "M0,50 Q25,20 50,50 T100,50", // Sine wave like
    "M0,70 L20,30 L40,60 L60,20 L80,50 L100,40", // Jagged line
    "M0,30 Q25,70 50,30 T100,30", // Inverse sine
    "M0,50 C20,10 40,90 60,10 S80,90 100,50" // Complex curve
  ];
  return (
    <svg viewBox="0 0 100 100" className="w-full h-16 opacity-60">
      <motion.path
        key={phase}
        d={paths[phase % paths.length]}
        stroke="currentColor" // Will inherit text-ai-blue or text-ai-accent
        strokeWidth="2"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />
    </svg>
  );
};


const LoadingScreen = ({ onLoaded }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const generateHexagons = () => Array.from({ length: 20 }).map(() => ({ x: Math.random()*100, y: Math.random()*100, size: Math.random()*15+5, rotation: Math.random()*180, delay: Math.random()*1, duration: Math.random()*3+3 }));
  const hexagons = useRef(generateHexagons()).current;

  const generateDataStreams = () => Array.from({ length: 8 }).map(() => ({ x: Math.random()*100, y: Math.random()*100, length: Math.random()*60+20, angle: Math.random()*360, speed: Math.random()*1+0.5, opacity: Math.random()*0.2+0.05 }));
  const dataStreams = useRef(generateDataStreams()).current;

  useEffect(() => {
    const handleMouseMove = (e) => { if (!containerRef.current || isFadingOut) return; const rect = containerRef.current.getBoundingClientRect(); setMousePosition({ x: ((e.clientX - rect.left) / rect.width) * 100, y: ((e.clientY - rect.top) / rect.height) * 100 }); };
    window.addEventListener('mousemove', handleMouseMove);
    setTimeout(() => { if (!isFadingOut) setMousePosition({ x: 50, y: 50 }); }, 100);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isFadingOut]);

  const loadingTextsOriginal = [ "Initializing Neural Interface", "Calibrating System Parameters", "Validating Security Protocols", "Activating Core Portfolio Matrix" ];
  const iconSize = "w-8 h-8 sm:w-9 sm:h-9";
  const phaseIcons = [ <FaCog className={`${iconSize} text-ai-blue`} key="cog"/>, <FaSearch className={`${iconSize} text-ai-blue`} key="scan"/>, <FaShieldAlt className={`${iconSize} text-ai-blue`} key="shield"/>, <FaBolt className={`${iconSize} text-ai-blue`} key="bolt"/> ];
  
  const [loadingPhase, setLoadingPhase] = useState(0);
  const [animatedLoadingText, setAnimatedLoadingText] = useState(loadingTextsOriginal[0]);
  const [finalMessage, setFinalMessage] = useState("");

  useEffect(() => {
    if (isFadingOut) return;
    const totalPhases = loadingTextsOriginal.length;
    const PHASE_DURATION = 750; // 3000ms / 4 phases
    const FADE_OUT_ANIM_DURATION = 400;

    if (loadingPhase >= totalPhases) {
      setAnimatedLoadingText(""); // Clear phase text
      setFinalMessage("WELCOME"); // Set final welcome message
      setTimeout(() => setIsFadingOut(true), PHASE_DURATION / 2); // Show welcome briefly
      setTimeout(() => { if (onLoaded) onLoaded(); }, (PHASE_DURATION / 2) + FADE_OUT_ANIM_DURATION);
      return;
    }

    let dotCount = 0;
    const textUpdateInterval = setInterval(() => { dotCount = (dotCount + 1) % 4; setAnimatedLoadingText(loadingTextsOriginal[loadingPhase] + ".".repeat(dotCount)); }, PHASE_DURATION / 4.5);
    const phaseTransitionTimer = setTimeout(() => { setLoadingPhase(prev => prev + 1); if (loadingPhase + 1 < totalPhases) setAnimatedLoadingText(loadingTextsOriginal[loadingPhase + 1]); }, PHASE_DURATION);
    
    return () => { clearTimeout(phaseTransitionTimer); clearInterval(textUpdateInterval); };
  }, [loadingPhase, onLoaded, isFadingOut]); // Removed loadingTextsOriginal as it's stable

  const [codeLines, setCodeLines] = useState([]);
  useEffect(() => {
    const generateCodeLine = () => { const l=Math.floor(Math.random()*18)+3; const s='{}[]()<>.,;:+-*=/&|!?$#@%~'; const ind=' '.repeat(Math.floor(Math.random()*3)); let ln=ind; const k=['init','load','const','let','query','render','return','async','connect']; if(Math.random()>0.6)ln+=k[Math.floor(Math.random()*k.length)]+' '; for(let i=0;i<l;i++){const r=Math.random();if(r<0.5)ln+=String.fromCharCode(97+Math.floor(Math.random()*26));else if(r<0.8)ln+=s[Math.floor(Math.random()*s.length)];else ln+=' ';} return ln.trimEnd(); };
    setCodeLines(Array.from({ length: 20 }, generateCodeLine));
    const id = setInterval(() => setCodeLines(p => { const nL=[...p]; nL[Math.floor(Math.random()*nL.length)]=generateCodeLine(); return nL; }), 220);
    return () => clearInterval(id);
  }, []);

  const panelBorderVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => ({
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay: i * 0.1 + 0.3, type: "spring", duration: 0.8, bounce: 0 },
        opacity: { delay: i * 0.1 + 0.3, duration: 0.01 }
      }
    })
  };
  
  const glitchVariants = {
    glitch: {
      skewX: [0, -5, 5, -3, 3, 0],
      skewY: [0, 2, -2, 1, -1, 0],
      opacity: [1, 0.8, 1, 0.9, 1],
      transition: { duration: 0.3, times: [0, 0.1, 0.2, 0.25, 0.28, 0.3] }
    }
  };

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-ai-dark overflow-hidden select-none"
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: isFadingOut ? 0 : 1 }}
      transition={{ duration: isFadingOut ? 0.4 : 0.5, ease: "circOut" }}
    >
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-radial from-ai-blue/5 via-ai-dark to-ai-dark opacity-70"></div>
        {hexagons.map((hex, i) => ( <motion.div key={`hex-${i}`} className="absolute" style={{ left: `${hex.x}%`, top: `${hex.y}%`, width: `${hex.size}px`, height: `${hex.size*0.866}px`, transform: `translate(-50%,-50%) rotate(${hex.rotation}deg)`}} initial={{ opacity:0, scale:0.2 }} animate={{ opacity:[0.02,0.1,0.02], scale:[0.7,1,0.7] }} transition={{ duration:hex.duration, delay:hex.delay, repeat:Infinity, ease:"easeInOut" }} ><HexagonShape className="w-full h-full fill-ai-blue/10 stroke-ai-blue/20 stroke-[0.2px]" /></motion.div> ))}
        {dataStreams.map((stream, i) => ( <motion.div key={`stream-${i}`} className="absolute bg-gradient-to-r from-transparent via-ai-blue/30 to-transparent" style={{ left:`${stream.x}%`,top:`${stream.y}%`,height:'0.5px',width:`${stream.length}px`,transform:`translate(-50%,-50%) rotate(${stream.angle}deg)`,opacity:stream.opacity}} initial={{x:(stream.angle%180===0?'0%':(stream.angle>90&&stream.angle<270?'120%':'-120%')),opacity:0}} animate={{x:['-100%','100%'],opacity:[stream.opacity,stream.opacity*0.4,stream.opacity]}} transition={{duration:stream.speed*4,repeat:Infinity,ease:"linear",delay:Math.random()*1.2}} /> ))}
        <motion.div className="absolute w-64 h-64 rounded-full pointer-events-none" animate={{left:`${mousePosition.x}%`,top:`${mousePosition.y}%`,background:['radial-gradient(circle,rgba(0,221,235,0.07) 0%,rgba(10,15,43,0) 60%)','radial-gradient(circle,rgba(0,221,235,0.12) 0%,rgba(10,15,43,0) 60%)','radial-gradient(circle,rgba(0,221,235,0.07) 0%,rgba(10,15,43,0) 60%)']}} transition={{left:{type:"spring",stiffness:40,damping:12},top:{type:"spring",stiffness:40,damping:12},background:{duration:1.8,repeat:Infinity,ease:"easeInOut"}}} style={{transform:"translate(-50%,-50%)"}} />
      </div>
      
      {/* Central Holographic UI */}
      <div className="absolute inset-0 flex items-center justify-center p-2 sm:p-3">
        <motion.div
          className="relative w-full max-w-md sm:max-w-lg h-auto max-h-[480px] sm:max-h-[500px] flex flex-col items-center justify-center"
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }} // Smoother, faster pop
        >
          {/* Panel with Animated Border */}
          <div className="relative w-full h-full backdrop-blur-md bg-ai-dark/60 rounded-md shadow-2xl shadow-ai-blue/20 overflow-hidden p-3.5 sm:p-4">
            <svg className="absolute inset-0 w-full h-full" fill="none">
              <motion.rect x="1" y="1" width="calc(100% - 2px)" height="calc(100% - 2px)" rx="5" stroke="rgba(0, 221, 235, 0.4)" strokeWidth="1.5" variants={panelBorderVariants} initial="hidden" animate="visible" custom={0} />
            </svg>

            {/* Top Status Bar with Title */}
            <div className="relative z-10 h-6 sm:h-7 flex items-center px-2 sm:px-2.5 border-b border-ai-blue/20">
              <div className="flex items-center space-x-1.5"> <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-ai-blue animate-pulse"></div>
                <motion.span initial={{opacity:0, y: -5}} animate={{opacity:1, y:0}} transition={{delay:0.8, duration:0.4}} className="text-[9px] sm:text-xs font-mono text-ai-blue tracking-wider">JRS SYSTEM BOOT</motion.span>
              </div>
              <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1, duration:0.4}} className="ml-auto text-[9px] sm:text-xs font-mono text-ai-blue/60">v1.0.2</motion.div>
            </div>
            
            {/* Main Content Area */}
            <div className="relative z-10 h-full pt-2 sm:pt-3 pb-2 sm:pb-3 flex flex-col md:flex-row">
              <div className="w-full md:w-[45%] overflow-hidden pr-0 md:pr-1.5 opacity-40 mb-2.5 md:mb-0">
                <motion.div animate={{y:[0,-600]}} transition={{duration:20,repeat:Infinity,ease:"linear"}} className="font-mono text-[7px] sm:text-[8px] text-ai-blue/60 leading-tight"> {codeLines.map((l,i)=><div key={i} className="whitespace-nowrap">{l}</div>)} </motion.div>
              </div>
              
              <div className="w-full md:w-[55%] flex flex-col items-center justify-center pl-0 md:pl-1.5 md:border-l border-ai-blue/20">
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 my-1 sm:my-2">
                  <motion.div className="absolute w-full h-full rounded-full border border-ai-blue/25" animate={{rotate:360}} transition={{duration:9,repeat:Infinity,ease:"linear"}} />
                  <motion.div className="absolute w-[70%] h-[70%] rounded-full border border-ai-blue/30 left-1/2 top-1/2" style={{transform:"translate(-50%,-50%)"}} animate={{rotate:-360}} transition={{duration:7,repeat:Infinity,ease:"linear"}} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div className="relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14" animate={{boxShadow:['0 0 10px rgba(0,221,235,0.2)','0 0 20px rgba(0,221,235,0.4)','0 0 10px rgba(0,221,235,0.2)']}} transition={{duration:1.8,repeat:Infinity,ease:"easeInOut"}}>
                      <AnimatePresence mode="wait">
                        <motion.div key={loadingPhase} initial={{scale:0.3,opacity:0,rotateZ: -45}} animate={{scale:1,opacity:1,rotateZ:0}} exit={{scale:0.3,opacity:0,rotateZ:45}} transition={{duration:0.3,ease:[0.43,0.13,0.23,0.96]}}>
                           <motion.div animate={{scale:[1,1.08,1]}} transition={{duration:0.75,repeat:Infinity,ease:"easeInOut",repeatDelay:0.75}}> {phaseIcons[loadingPhase%phaseIcons.length]} </motion.div>
                        </motion.div>
                      </AnimatePresence>
                    </motion.div>
                  </div>
                </div>
                
                {/* Analysis Graph Area */}
                <div className="w-[70%] h-10 text-ai-blue/70 my-1 sm:my-1.5">
                    <AnalysisGraph phase={loadingPhase} />
                </div>

                <div className="w-full px-1 sm:px-1.5">
                  <div className="flex justify-between mb-1 text-[10px] sm:text-xs"> <div className="text-ai-accent font-mono">STATUS</div> <div className="text-ai-accent font-mono">{Math.min(loadingPhase+1,loadingTextsOriginal.length)}/{loadingTextsOriginal.length}</div> </div>
                  <div className="grid grid-cols-4 gap-1 sm:gap-1.5 mb-1.5 sm:mb-2">
                    {loadingTextsOriginal.map((_,p)=>(<motion.div key={`pi-${p}`} className={`h-0.5 sm:h-1 rounded-sm ${p<loadingPhase+1?'bg-ai-blue':'bg-ai-blue/15'}`} animate={p===loadingPhase?{filter:['brightness(1)','brightness(1.7)','brightness(1)']}:{}} transition={{duration:0.75,repeat:Infinity,ease:"easeInOut"}}/>))}
                  </div>
                  <motion.div className="bg-ai-dark/70 border border-ai-blue/30 rounded p-1.5 sm:p-2 font-mono min-h-[46px] sm:min-h-[50px] flex items-center justify-center text-center relative shadow-inner shadow-ai-dark/50" animate={{borderColor:['rgba(0,221,235,0.3)','rgba(0,221,235,0.5)','rgba(0,221,235,0.3)']}} transition={{duration:1.5,repeat:Infinity,ease:"easeInOut"}}>
                    <AnimatePresence mode="wait">
                      <motion.p key={loadingPhase} initial={{opacity:0,y:5}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-5}} transition={{duration:0.18,ease:"easeIn"}} className="text-[11px] sm:text-xs text-transparent bg-clip-text bg-gradient-to-r from-ai-accent via-ai-blue to-ai-accent"> {animatedLoadingText} </motion.p>
                    </AnimatePresence>
                     {finalMessage && (
                        <motion.p
                          key="finalMsg"
                          className="absolute inset-0 flex items-center justify-center text-lg sm:text-xl font-semibold text-ai-blue tracking-wider"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1, ...glitchVariants.glitch }}
                          transition={{ delay:0.1, duration:0.3 }}
                        >
                          {finalMessage}
                        </motion.p>
                      )}
                    <motion.div className="absolute bottom-0 left-0 h-px bg-ai-blue/10 w-full rounded-b-sm overflow-hidden"><motion.div className="h-full bg-gradient-to-r from-ai-blue to-ai-accent" key={`prog-${loadingPhase}`} initial={{width:"0%"}} animate={{width: finalMessage?"100%":"100%"}} transition={{duration: finalMessage?0.2:0.75, ease:finalMessage?"easeOut":"linear"}}/></motion.div>
                  </motion.div>
                </div>
              </div>
            </div>
            
            {/* Bottom Status Bar */}
            <div className="relative z-10 h-6 sm:h-7 flex items-center px-2 sm:px-2.5 border-t border-ai-blue/20">
              <motion.div className="flex items-center text-[9px] sm:text-xs font-mono text-ai-blue/75" animate={{opacity:[0.5,0.9,0.5]}} transition={{duration:1.5,repeat:Infinity,ease:"easeInOut"}}><FaExchangeAlt className="w-2 h-2 sm:w-2.5 sm:h-2.5 mr-1 sm:mr-1.5 text-ai-accent"/><span>STREAM: ACTIVE</span></motion.div>
              <div className="ml-auto"><motion.div className="text-[9px] sm:text-xs font-mono text-ai-blue/60" animate={{opacity:[0.4,0.8,0.4]}} transition={{duration:1.2,repeat:Infinity,ease:"easeInOut"}}>CONN: ESTABLISHED</motion.div></div>
            </div>
          </div>
        </motion.div>
      </div>
      <style>{`.bg-gradient-radial { background-image: radial-gradient(var(--tw-gradient-stops)); } .select-none {-webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;}`}</style>
    </motion.div>
  );
};

export default LoadingScreen;