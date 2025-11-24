"use client";

import { ChefHat, Grape, Wine, Heart, MessageCircle, UtensilsCrossed, Star, Award, Calendar, Users, BookOpen, Instagram, Linkedin, Newspaper, HelpCircle } from "lucide-react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroOverlay from '@/components/sections/hero/HeroOverlay';
import AboutFeature from '@/components/sections/about/AboutFeature';
import FeatureCardSix from '@/components/sections/feature/FeatureCardSix';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import TestimonialCardThree from '@/components/sections/testimonial/TestimonialCardThree';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqBase from '@/components/sections/faq/FaqBase';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterBase from '@/components/sections/footer/FooterBase';
import Link from 'next/link';

export default function HomePage() {
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

      <div id="hero" data-section="hero">
        <HeroOverlay
          title="Authentic Italian Cuisine"
          description="Experience the true taste of Italy at Vkusnochino. Fresh ingredients, traditional recipes, and passionate cooking since 1985."
          tag="Benvenuti"
          tagIcon={ChefHat}
          imageSrc="https://pixabay.com/get/g0330e458ef76a87a54c9f78f5ba729e03538032aee11d602ec73a7ce1a5c90446e3661d1e436a5282a48d57cd910a6d8e74ab01dd4de5809b3e5ccf2c53bdf61_1280.jpg"
          imageAlt="Elegant Italian restaurant interior"
          textPosition="bottom-left"
          showBlur={true}
          showDimOverlay={false}
          buttons={[
            { text: "View Menu", href: "/menu" },
            { text: "Reserve Table", href: "/contact" }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <AboutFeature
          title="At Vkusnochino, we bring the heart of Italy to your table. Our family recipes passed down through generations, combined with the finest imported ingredients, create an authentic dining experience that transports you straight to the Italian countryside."
          features={[
            {
              icon: ChefHat,
              title: "Authentic Recipes",
              description: "Traditional Italian recipes passed down through four generations of our family, preserving the authentic flavors of Italy."
            },
            {
              icon: Grape,
              title: "Fresh Ingredients",
              description: "We source the finest ingredients directly from Italy, including San Marzano tomatoes, Parmigiano-Reggiano, and extra virgin olive oil."
            },
            {
              icon: Wine,
              title: "Curated Wine Selection",
              description: "Expertly selected Italian wines from renowned regions like Tuscany, Piedmont, and Veneto to perfectly complement your meal."
            },
            {
              icon: Heart,
              title: "Family Atmosphere",
              description: "Experience the warmth of Italian hospitality in our cozy restaurant where every guest is treated like family."
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