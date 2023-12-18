import React from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SetorSampahForm from "@/components/layanan/setorsampahform";

const SetorSampah = async () => {
  const session = await getServerSession();
  if (!session) {
    redirect("/login");
  }
  return (
  <div>
    <Navbar />
    <SetorSampahForm />
    <Footer />
  </div>
);
};

export default SetorSampah;
