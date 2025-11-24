"use client";

import { ChefHat } from "lucide-react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroOverlay from '@/components/sections/hero/HeroOverlay';
import AboutFeature from '@/components/sections/about/AboutFeature';
import TestimonialCardThree from '@/components/sections/testimonial/TestimonialCardThree';
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
        <div className="mx-auto px-4 md:px-6">
          <AboutFeature
            title="At Vkusnochino, we bring the heart of Italy to your table. Our family recipes passed down through generations, combined with the finest imported ingredients, create an authentic dining experience that transports you straight to the Italian countryside."
            features={[
              {
                icon: ChefHat,
                title: "Authentic Recipes",
                description: "Traditional Italian recipes passed down through four generations of our family, preserving the authentic flavors of Italy."
              },
              {
                icon: "Grape",
                title: "Fresh Ingredients",
                description: "We source the finest ingredients directly from Italy, including San Marzano tomatoes, Parmigiano-Reggiano, and extra virgin olive oil."
              },
              {
                icon: "Wine",
                title: "Curated Wine Selection",
                description: "Expertly selected Italian wines from renowned regions like Tuscany, Piedmont, and Veneto to perfectly complement your meal."
              },
              {
                icon: "Heart",
                title: "Family Atmosphere",
                description: "Experience the warmth of Italian hospitality in our cozy restaurant where every guest is treated like family."
              }
            ]}
          />
        </div>
      </div>

      <div id="testimonials" data-section="testimonials">
        <div className="mx-auto px-4 md:px-6">
          <TestimonialCardThree
            title="What Our Guests Say"
            description="Real experiences from our valued customers"
            tag="Reviews"
            tagIcon="MessageCircle"
            textboxLayout="default"
            animationType="slide-up"
            testimonials={[
              {
                id: "1",
                name: "Sarah Johnson",
                handle: "@sarahfoodie",
                testimonial: "The most authentic Italian experience outside of Italy! The pasta carbonara was absolutely perfect - just like my nonna used to make.",
                imageSrc: "https://pixabay.com/get/gb502bf2cb9120c17407a8b254b9ab7bf1d4576cfc87fe1a240482a96298b3a9c93b8e3c582ec561049fdc0f30bb17c5cc450eccd1760a0a92ba0e3d1b2de53ab_1280.jpg",
                imageAlt: "Sarah Johnson customer"
              },
              {
                id: "2",
                name: "Michael Chen",
                handle: "@mikeeats",
                testimonial: "Incredible atmosphere and even better food. The wood-fired pizza had the perfect crust and the wine selection was outstanding.",
                imageSrc: "https://pixabay.com/get/g0aec755e7c28bc5b9d1317b171de8d8afa15a7852b6dc1558b2a765a716f67c45cbdfe0ef61e6dfa1cebe4b54b2d401b57c8946cac3bdebfc0854c9a93caf433_1280.jpg",
                imageAlt: "Michael Chen customer"
              },
              {
                id: "3",
                name: "Emma Rodriguez",
                handle: "@emmalovesitaly",
                testimonial: "Giuseppe's tiramisu is pure magic! This place transports you straight to a cozy trattoria in Rome. Bellissimo!",
                imageSrc: "https://pixabay.com/get/gb1bd33609224067a2dc055d480dd8fa4bb8a2e49b2712fa0c2b4f604fb7ae8fb1a34d5bd64a44e2d96356cd88015e33969c066cb67e9d570623fbd50db746dcd_1280.jpg",
                imageAlt: "Emma Rodriguez customer"
              },
              {
                id: "4",
                name: "David Thompson",
                handle: "@davidtdines",
                testimonial: "Family-owned warmth with professional excellence. The osso buco was tender and flavorful - a true masterpiece.",
                imageSrc: "https://pixabay.com/get/g4d21a35a89d784a0ce413bf99cdcada0382c9459a10ca09039737652d27b742309d807260daaf84ccc5844700a8a3f84168c6e757feac8d5c8905c0e61d10c7e_1280.jpg",
                imageAlt: "David Thompson customer"
              }
            ]}
          />
        </div>
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