import React from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Kontak from "@/components/contact/kontak";
import Navbar from "@/components/Navbar";
import TeamMember from "@/components/contact/kontak";
import Team from "@/components/about/team-about";

const Contact = async () => {
  const session = await getServerSession();
  if (!session) {
    redirect("/");
  }
  return (
    <div>
      <Navbar/>
      <Team/>
    </div>
  );
};

export default Contact;
