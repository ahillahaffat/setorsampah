import React from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Features from '@/components/layanan/features-layanan';
import Navbar from '@/components/Navbar';
import HeroLayanan from '@/components/layanan/hero-layanan';

const Layanan = async () => {
  const session = await getServerSession();
  if (!session) {
    redirect("/login");
  }
  return (
    <div>
        <Navbar />
       <HeroLayanan/>
    <Features/>
    </div>
  );
};

export default Layanan;
