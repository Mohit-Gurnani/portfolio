import React from 'react';
import {HeroBackground} from "@/public/SVGs/SVGs";
import {AnimatedSpan, Terminal, TypingAnimation} from "@/components/common/Terminal";
import {Download} from "lucide-react";

function HeroSection() {
  const resumeHeaderAction = (
    <a
      href="/resume/Mohit_Gurnani_Resume.pdf"
      download="Mohit_Gurnani_Resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-1.5 px-2.5 py-1 text-xs font-primary text-secondary/70 hover:text-secondary bg-secondary/5 hover:bg-secondary/10 border border-secondary/20 hover:border-tertiary/60 rounded-md transition-all duration-200"
      title="Download Mohit Gurnani's Resume (PDF)"
      aria-label="Download Resume"
    >
      <Download className="size-3.5 text-tertiary transition-transform duration-200 group-hover:-translate-y-0.5" />
      <span className="font-mono">resume.pdf</span>
    </a>
  );

  return (
    <section className={"min-h-screen w-full relative items-center justify-center flex overflow-hidden"}>
      <HeroBackground className={"absolute top-0 left-0 h-full w-full -z-10"}/>
      <div
        className="hidden md:block absolute pointer-events-none -z-9 w-3/1 h-25/10 -bottom-50 lg:bottom-0 left-1/2 -translate-x-1/2 bg-[radial-gradient(circle,rgba(26,26,26,0)_0%,rgba(26,26,26,1)_50%)]"/>
      <div className="w-9/10 xl:w-85/100 mx-auto flex items-center justify-center">
        <Terminal
          className={"relative z-10 bg-black/50 backdrop-blur-lg border-0 max-w-full lg:max-w-4/5 max-h-[70vh] sm:max-h-fit overflow-hidden w-full"}
          startOnView={false}
          headerAction={resumeHeaderAction}>
          <TypingAnimation duration={90} className={"text-tertiary font-primary text-sm"}>$ whoami</TypingAnimation>
          <AnimatedSpan delay={300}
                        className={"ms-4 mt-1 text-secondary font-primary text-4xl tracking-[-0.15rem] font-semibold"}>
            Mohit Gurnani
          </AnimatedSpan>
          <AnimatedSpan delay={300} className={"ms-4 text-secondary/70 font-primary text-md"}>
            Full Stack Developer
          </AnimatedSpan>
          
          <AnimatedSpan className={"my-2.5"}/>

          <TypingAnimation delay={0} duration={80} className={"text-tertiary font-primary text-sm"}>$ cat
            skills.json</TypingAnimation>
          <AnimatedSpan delay={300} className={"ms-4 text-white font-primary text-sm w-full"}>
            <pre className="block sm:hidden font-primary text-sm whitespace-pre-wrap wrap-break-words w-full">
              <span>{"{\n"}</span>
              <span>{"  "}<span className="text-sky-400">&quot;languages&quot;</span>{": [\n"}</span>
              <span>{"\t"}<span className="text-tertiary">&quot;JS/TS&quot;</span>{",\n"}</span>
              <span>{"\t"}<span className="text-tertiary">&quot;C/C++&quot;</span>{", \n"}</span>
              <span>{"\t"}<span className="text-tertiary">&quot;Java&quot;</span>{", \n"}</span>
              <span>{"\t"}<span className="text-tertiary">&quot;PHP&quot;</span>{", \n"}</span>
              <span>{"\t"}<span className="text-tertiary">&quot;Python&quot;</span>{"\n"}</span>
              <span>{"  ]\n"}</span>
              <span>{"  "}<span className="text-sky-400">&quot;frontend&quot;</span>{": [\n"}</span>
              <span>{"\t"}<span className="text-tertiary">&quot;React 19&quot;</span>{", \n"}</span>
              <span>{"\t"}<span className="text-tertiary">&quot;Next.js&quot;</span>{", \n"}</span>
              <span>{"\t"}<span className="text-tertiary">&quot;Tailwind&quot;</span>{", \n"}</span>
              <span>{"\t"}<span className="text-tertiary">&quot;Three.js&quot;</span>{"\n"}</span>
              <span>{"  ]\n"}</span>
              <span>{"  "}<span className="text-sky-400">&quot;backend&quot;</span>{": [\n"}</span>
              <span>{"\t"}<span className="text-tertiary">&quot;NestJS&quot;</span>{", \n"}</span>
              <span>{"\t"}<span className="text-tertiary">&quot;Node.js&quot;</span>{", \n"}</span>
              <span>{"\t"}<span className="text-tertiary">&quot;Laravel&quot;</span>{", \n"}</span>
              <span>{"\t"}<span className="text-tertiary">&quot;DBMS&quot;</span>{", \n"}</span>
              <span>{"\t"}<span className="text-tertiary">&quot;Redis&quot;</span>{"\n"}</span>
              <span>{"  ]\n"}</span>
              <span>{"  "}<span className="text-sky-400">&quot;devops&quot;</span>{": [\n"}</span>
              <span>{"\t"}<span className="text-tertiary">&quot;Docker&quot;</span>{", \n"}</span>
              <span>{"\t"}<span className="text-tertiary">&quot;GitHub Actions&quot;</span>{", \n"}</span>
              <span>{"\t"}<span className="text-tertiary">&quot;Turborepo&quot;</span>{"\n"}</span>
              <span>{"  ]\n"}</span>
              <span>{"}"}</span>
            </pre>

            <pre className="hidden sm:block lg:hidden font-primary text-sm whitespace-pre-wrap wrap-break-words w-full">
              {"{\n"}
              {"  "}<span className="text-sky-400">&quot;languages&quot;</span>{": \n"}
              {"\t["}<span className="text-tertiary">&quot;JS/TS&quot;</span>{", "}
              <span className="text-tertiary">&quot;C/C++&quot;</span>{", "}
              <span className="text-tertiary">&quot;Java&quot;</span>{", "}
              <span className="text-tertiary">&quot;PHP&quot;</span>{", "}
              <span className="text-tertiary">&quot;Python&quot;</span>{"],\n"}
              {"  "}<span className="text-sky-400">&quot;frontend&quot;</span>{": \n"}
              {"\t["}<span className="text-tertiary">&quot;React 19&quot;</span>{", "}
              <span className="text-tertiary">&quot;Next.js&quot;</span>{", "}
              <span className="text-tertiary">&quot;Tailwind&quot;</span>{", "}
              <span className="text-tertiary">&quot;Three.js&quot;</span>
              {"],\n"}{"  "}
              <span className="text-sky-400">&quot;backend&quot;</span>{": \n"}
              {"\t["}<span className="text-tertiary">&quot;NestJS&quot;</span>{", "}<span
              className="text-tertiary">&quot;Node.js&quot;</span>{", "}
              <span className="text-tertiary">&quot;Laravel&quot;</span>{", "}
              <span className="text-tertiary">&quot;DBMS&quot;</span>{", "}
              <span className="text-tertiary">&quot;Redis&quot;</span>{"],\n"}
              {"  "}<span className="text-sky-400">&quot;devops&quot;</span>{": \n"}
              {"\t["}<span className="text-tertiary">&quot;Docker&quot;</span>{", "}
              <span className="text-tertiary">&quot;GitHub Actions&quot;</span>{", "}
              <span className="text-tertiary">&quot;Turborepo&quot;</span>{"]\n"}
              {"}"}
            </pre>

            <pre className="hidden lg:block font-primary text-sm whitespace-pre-wrap wrap-break-words w-full">
              {"{\n"}
              {"  "}<span className="text-sky-400">&quot;languages&quot;</span>{": ["}
              <span className="text-tertiary">&quot;JS/TS&quot;</span>{", "}
              <span className="text-tertiary">&quot;C/C++&quot;</span>{", "}
              <span className="text-tertiary">&quot;Java&quot;</span>{", "}
              <span className="text-tertiary">&quot;PHP&quot;</span>{", "}
              <span className="text-tertiary">&quot;Python&quot;</span>{"]\n"}
              {"  "}<span className="text-sky-400">&quot;frontend&quot;</span>{": ["}
              <span className="text-tertiary">&quot;React 19&quot;</span>{", "}
              <span className="text-tertiary">&quot;Next.js&quot;</span>{", "}
              <span className="text-tertiary">&quot;Tailwind&quot;</span>{", "}
              <span className="text-tertiary">&quot;Three.js&quot;</span>
              {"]\n"}{"  "}
              <span className="text-sky-400">&quot;backend&quot;</span>{": ["}
              <span className="text-tertiary">&quot;NestJS&quot;</span>{", "}
              <span className="text-tertiary">&quot;Node.js&quot;</span>{", "}
              <span className="text-tertiary">&quot;Laravel&quot;</span>{", "}
              <span className="text-tertiary">&quot;DBMS&quot;</span>{", "}
              <span className="text-tertiary">&quot;Redis&quot;</span>{"]\n"}
              {"  "}<span className="text-sky-400">&quot;devops&quot;</span>{": ["}
              <span className="text-tertiary">&quot;Docker&quot;</span>{", "}
              <span className="text-tertiary">&quot;GitHub Actions&quot;</span>{", "}
              <span className="text-tertiary">&quot;Turborepo&quot;</span>{"]\n"}
              {"}"}
            </pre>
          </AnimatedSpan>

          <AnimatedSpan className={"my-2"}/>

          <TypingAnimation delay={0} duration={80} className={"text-tertiary font-primary text-sm"}>$ curl -O
            resume.pdf</TypingAnimation>
          <AnimatedSpan delay={200} className={"ms-4 mt-2 flex flex-row items-center gap-3"}>
            <a
              href="/resume/Mohit_Gurnani_Resume.pdf"
              download="Mohit_Gurnani_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md border border-tertiary/70 bg-tertiary/15 text-tertiary hover:bg-tertiary/25 hover:border-tertiary hover:shadow-[0_0_20px_rgba(34,197,94,0.3)] transition-all duration-200 font-primary text-sm font-medium focus:outline-none focus:ring-1 focus:ring-tertiary"
            >
              <Download className="size-4" />
              <span>Download Resume</span>
              <span className="text-xs text-tertiary/70 font-mono font-normal">(137 KB)</span>
            </a>
          </AnimatedSpan>
        </Terminal>
      </div>
    </section>
  );
}

export default HeroSection;