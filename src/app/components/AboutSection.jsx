"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2 text-black">
        <li>React.js</li>
        <li>Python</li>
        <li>C</li>
        <li>HTML</li>
        <li>Verilog</li>
        
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2 text-black">
        <li>BTech Electronics and Communication Engineering <br></br>
        Amrita School of Engineering, Amritapuri </li>
      </ul>
    ),
  },
  {
    title: "Internships and Co-Curricular",
    id: "Internships and Co-Curricular",
    content: (
      <ul className="list-disc pl-2 text-black">
        <li> Growthonics Technologies : Interned as Flutter Content writing intern</li>
        <li>AI and Computer Vision Internship: Developed a Virtual Mouse using OpenCV-Python</li>
        <li>amFOSS: I was a member of amFOSS- Leading Foss Club of India  </li>
      </ul>
    ),
  },
  {
    title: "Achievements",
    id: "Achievements",
    content: (
      <ul className="list-disc pl-2 text-black">
        <li>Second Prize : Flutter Development competition conducted as a part of IEEE Flutter Development workshop </li>
        <li>Succesfully solved IBM quantum challenge and obtained certificate</li>
       
        </ul>
    )
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-black" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src={"/sitepic.jpg"} width={500} height={500} alt="About image "/>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-5xl font-bold text-yellow-600 mb-4">About Me</h2>
          <p className="text-base lg:text-xl">
            I am a BTech ECE graduate and a Product development & management Enthusiast with a passion for creating
            useful products. I have experience
            working with Python, c, HTML, CSS, and Git. 
            Apart from the software skills, I am having experience working with FPGA, Verilog, embedded C, Vivado.
            I am always looking to expand my knowledge and skill set and I am excited to work with others to create amazing applications. 
            
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("Internships and Co-Curricular")}
              active={tab === "Internships and Co-Curricular"}
            >
              {" "}
              Internships and Co-Curricular{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("Achievements")}
              active={tab === "Achievements"}
            >
              {" "}
              Achievements{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};


export default AboutSection;

