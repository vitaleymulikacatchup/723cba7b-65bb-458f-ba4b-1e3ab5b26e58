"use client";

import { Award, Users, Calendar, BookOpen, Instagram, Linkedin } from "lucide-react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import FooterBase from '@/components/sections/footer/FooterBase';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="entrance-slide"
      borderRadius="sharp"
      contentWidth="large"
      sizing="large"
      background="grid"
      cardStyle="glass-depth"
      primaryButtonStyle="flat"
      secondaryButtonStyle="radial-glow"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Menu", id: "/menu" },
            { name: "About", id: "/about" },
            { name: "Reviews", id: "/reviews" },
            { name: "Contact", id: "/contact" }
          ]}
          brandName="Vkusnochino"
          button={{
            text: "Reserve Table",
            href: "/contact"
          }}
        />
      </div>

      <div id="metric" data-section="metric">
        <MetricCardOne
          title="Our Italian Legacy"
          description="Numbers that tell our story of authentic Italian dining"
          tag="Since 1985"
          tagIcon={Award}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="uniform-all-items-equal"
          metrics={[
            {
              id: "1",
              value: "38",
              title: "years",
              description: "Serving authentic Italian cuisine with passion and dedication",
              icon: Calendar
            },
            {
              id: "2",
              value: "15K+",
              title: "customers",
              description: "Satisfied guests who experienced our Italian hospitality",
              icon: Users
            },
            {
              id: "3",
              value: "150+",
              title: "recipes",
              description: "Traditional Italian recipes in our extensive menu collection",
              icon: BookOpen
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardTwo
          title="Meet Our Italian Family"
          description="The passionate people behind Vkusnochino's authentic flavors"
          tag="La Famiglia"
          tagIcon={Users}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="uniform-all-items-equal"
          members={[
            {
              id: "1",
              name: "Giuseppe Rossi",
              role: "Head Chef",
              description: "Born in Naples, Giuseppe brings 25 years of culinary expertise and traditional family recipes to every dish.",
              imageSrc: "https://pixabay.com/get/g7d8c6710d6d477b30c5ec837523a0f4b040914beba7d68c0cbff47ee15cc9d2e9eadc54b9b82e1eeec732fc10492bff1f9082f4d750a310f46825dbe75f1a158_1280.jpg",
              imageAlt: "Giuseppe Rossi, Head Chef",
              socialLinks: [
                { icon: Instagram, url: "https://instagram.com/chef_giuseppe" },
                { icon: Linkedin, url: "https://linkedin.com/in/giuseppe-rossi" }
              ]
            },
            {
              id: "2",
              name: "Maria Benedetti",
              role: "Restaurant Manager",
              description: "With her warm Italian hospitality, Maria ensures every guest feels like part of our extended family.",
              imageSrc: "https://pixabay.com/get/g1df8792f7f3468d1edfc205feef3189cf752c69cbc13eca6224b6174d06ea5f2da80d1e57e9217bb5ebc16ed5925549fd6d2cc90ed6c2c2f23f859b7142bd956_1280.jpg",
              imageAlt: "Maria Benedetti, Restaurant Manager",
              socialLinks: [
                { icon: Instagram, url: "https://instagram.com/maria_vkusnochino" }
              ]
            }
          ]}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          brandName="Vkusnochino"
          copyrightText="© 2025 | Vkusnochino Ristorante Italiano"
          columns={[
            {
              title: "Restaurant",
              items: [
                { label: "Menu", href: "/menu" },
                { label: "About Us", href: "/about" },
                { label: "Our Story", href: "/about" },
                { label: "Private Events", href: "/contact" }
              ]
            },
            {
              title: "Services",
              items: [
                { label: "Reservations", href: "/contact" },
                { label: "Takeout", href: "/contact" },
                { label: "Wine Selection", href: "/menu" },
                { label: "Gift Cards", href: "/contact" }
              ]
            },
            {
              title: "Contact",
              items: [
                { label: "Find Us", href: "/contact" },
                { label: "(555) 123-PASTA", href: "tel:+15551237278" },
                { label: "Hours", href: "/contact" },
                { label: "Reviews", href: "/reviews" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}