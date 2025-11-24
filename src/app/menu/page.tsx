"use client";

import { Star, UtensilsCrossed, Utensils } from "lucide-react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import FeatureCardSix from '@/components/sections/feature/FeatureCardSix';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FooterBase from '@/components/sections/footer/FooterBase';

export default function MenuPage() {
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

      <div id="menu" data-section="menu">
        <div className="mx-auto px-4 md:px-6">
          <FeatureCardSix
            title="Our Signature Menu"
            description="Discover our carefully crafted Italian dishes made with authentic ingredients and traditional techniques"
            tag="La Carta"
            tagIcon={UtensilsCrossed}
            textboxLayout="default"
            features={[
              {
                id: "1",
                title: "Pasta Tradizionale",
                description: "Hand-made pasta with traditional sauces including Carbonara, Amatriciana, and Cacio e Pepe, prepared with authentic Roman techniques and finest Italian ingredients.",
                imageSrc: "https://pixabay.com/get/gead27a014466bbe20985a9b13164841bcb5633976344892ef5f1b342c24cc31af35a810dbc330e8a44b7bef47577a1e311c03e607bedf78605e8598ef5d2a7d9_1280.jpg",
                imageAlt: "Traditional Italian pasta dishes"
              },
              {
                id: "2",
                title: "Pizza Napoletana",
                description: "Wood-fired pizza with San Marzano tomatoes, fresh mozzarella di bufala, and basil. Our dough is aged 48 hours for the perfect Neapolitan texture.",
                imageSrc: "https://pixabay.com/get/g0cfcae519b591201a84b8548a80eb853d7ff806752a714dfd3919acfd2dcf18261943b6a6df245f330b33bee45cfbddc24b903a808c86016f753f841b71af715_1280.jpg",
                imageAlt: "Authentic Neapolitan pizza margherita"
              },
              {
                id: "3",
                title: "Risotto Perfetto",
                description: "Creamy Arborio rice slow-cooked with seasonal ingredients like porcini mushrooms, saffron, or fresh seafood from the Adriatic coast.",
                imageSrc: "https://pixabay.com/get/g34bfbca9b745edc110e2da94f931db27a96654797bc5ffe1ee707b44f8f212e93738a67cd29918be333c2272feb17bbc078e053dd5b786c8ba70e85e8d65e328_1280.jpg",
                imageAlt: "Creamy Italian risotto with mushrooms"
              },
              {
                id: "4",
                title: "Dolci della Casa",
                description: "Traditional Italian desserts including our famous Tiramisu, Panna Cotta, and Cannoli Siciliani, made fresh daily with imported mascarpone and espresso.",
                imageSrc: "https://pixabay.com/get/g3402d77cd6c6f78917488a26e6b9a65f3e9b3eddaec5bd7e986d9825f7da144ae9b7086306cc12e5ce1c6898c748c0945fb92ca1c94f3efd307634b88ad968e6_1280.jpg",
                imageAlt: "Traditional Italian tiramisu dessert"
              }
            ]}
          />
        </div>
      </div>

      <div id="product" data-section="product">
        <div className="mx-auto px-4 md:px-6">
          <ProductCardTwo
            title="Featured Specialties"
            description="Our most beloved dishes that keep customers coming back"
            tag="Chef's Choice"
            tagIcon={Star}
            textboxLayout="default"
            animationType="slide-up"
            gridVariant="uniform-all-items-equal"
            products={[
              {
                id: "1",
                brand: "Vkusnochino",
                name: "Osso Buco alla Milanese",
                price: "$32.00",
                rating: 5,
                reviewCount: "127",
                imageSrc: "https://pixabay.com/get/g7d8c6710d6d477b30c5ec837523a0f4b040914beba7d68c0cbff47ee15cc9d2e9eadc54b9b82e1eeec732fc10492bff1f9082f4d750a310f46825dbe75f1a158_1280.jpg",
                imageAlt: "Osso Buco alla Milanese"
              },
              {
                id: "2",
                brand: "Vkusnochino",
                name: "Seafood Risotto",
                price: "$28.00",
                rating: 5,
                reviewCount: "89",
                imageSrc: "https://pixabay.com/get/g34bfbca9b745edc110e2da94f931db27a96654797bc5ffe1ee707b44f8f212e93738a67cd29918be333c2272feb17bbc078e053dd5b786c8ba70e85e8d65e328_1280.jpg",
                imageAlt: "Seafood risotto"
              },
              {
                id: "3",
                brand: "Vkusnochino",
                name: "Veal Parmigiana",
                price: "$29.00",
                rating: 5,
                reviewCount: "95",
                imageSrc: "https://pixabay.com/get/g80ca1ff3909a355835463af4b0ae6358375a8ebfd1a35421f9a80b0ddf0c975c969ddb5bfe3c256ddd2a633e8b6c827a3277d46b65a21b71d4010763bafc76b8_1280.jpg",
                imageAlt: "Veal Parmigiana"
              }
            ]}
          />
        </div>
      </div>

      <div id="pricing" data-section="pricing">
        <div className="mx-auto px-4 md:px-6">
          <PricingCardOne
            title="Dining Experiences"
            description="Choose the perfect dining experience for any occasion"
            tag="Experiences"
            tagIcon={Utensils}
            textboxLayout="default"
            animationType="slide-up"
            plans={[
              {
                id: "lunch",
                badge: "Popular Choice",
                badgeIcon: "Sun",
                price: "$25",
                subtitle: "Perfect for lunch gatherings",
                features: [
                  "Choice of pasta or risotto",
                  "House salad included",
                  "Complimentary bread & olive oil",
                  "Coffee or tea"
                ]
              },
              {
                id: "dinner",
                badge: "Most Popular",
                badgeIcon: "Sparkles",
                price: "$45",
                subtitle: "Our signature dinner experience",
                features: [
                  "Three-course meal",
                  "Wine pairing available",
                  "Antipasti selection",
                  "Fresh dessert",
                  "Espresso service"
                ]
              },
              {
                id: "family",
                badge: "Best Value",
                badgeIcon: "Heart",
                price: "$120",
                subtitle: "Family feast for 4 people",
                features: [
                  "Sharing platters included",
                  "Choice of 2 main courses",
                  "Kids menu available",
                  "Family-style service",
                  "Complimentary limoncello"
                ]
              }
            ]}
          />
        </div>
      </div>

      <div id="socialproof" data-section="socialproof">
        <div className="mx-auto px-4 md:px-6">
          <SocialProofOne
            title="Featured In"
            description="Recognized by top food publications and critics"
            tag="Press"
            tagIcon="Newspaper"
            textboxLayout="default"
            speed={40}
            showCard={true}
            logos={[
              "/placeholders/placeholder1.webp",
              "/placeholders/placeholder1.webp",
              "/placeholders/placeholder1.webp",
              "/placeholders/placeholder1.webp",
              "/placeholders/placeholder1.webp",
              "/placeholders/placeholder1.webp",
              "/placeholders/placeholder1.webp"
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