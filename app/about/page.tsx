import React from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Navbar from "@/components/Navbar";
import Hero1 from "@/components/about/hero-about";
import DescAbout from "@/components/about/desk-about";
import SolutionAbout from "@/components/about/solution-about";

import Team from "@/components/about/team-about";
import Footer from "@/components/Footer";

const About = async () => {
  const session = await getServerSession();
  if (!session) {
    redirect("/login");
  }
  return (
    <div>
      <Navbar />
    <Hero1 />
    <DescAbout />
    <SolutionAbout />
    <Footer/>
    </div>
  );
};

export default About;
