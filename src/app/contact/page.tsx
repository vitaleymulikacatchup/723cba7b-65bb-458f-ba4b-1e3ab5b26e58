"use client";

import { HelpCircle } from "lucide-react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import FaqBase from '@/components/sections/faq/FaqBase';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterBase from '@/components/sections/footer/FooterBase';
import Link from 'next/link';

export default function ContactPage() {
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

      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Reserve Your Table"
          description="Experience authentic Italian dining at Vkusnochino. Contact us for reservations or any questions about our menu and services."
          buttonText="Make Reservation"
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Your Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Email Address",
              required: true
            },
            {
              name: "phone",
              type: "tel",
              placeholder: "Phone Number",
              required: true
            },
            {
              name: "date",
              type: "date",
              placeholder: "Preferred Date",
              required: true
            },
            {
              name: "guests",
              type: "number",
              placeholder: "Number of Guests",
              required: true
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Special requests, dietary restrictions, or occasion details...",
            rows: 4,
            required: false
          }}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Everything you need to know about dining at Vkusnochino"
          tag="FAQ"
          tagIcon={HelpCircle}
          textboxLayout="default"
          animationType="smooth"
          showCard={true}
          faqs={[
            {
              id: "1",
              title: "Do you take reservations?",
              content: "Yes, we highly recommend making reservations, especially for dinner service and weekends. You can call us at (555) 123-PASTA or use our online reservation system."
            },
            {
              id: "2",
              title: "Do you accommodate dietary restrictions?",
              content: "Absolutely! We offer gluten-free pasta options, vegetarian and vegan dishes, and can accommodate most dietary restrictions. Please inform us when making your reservation."
            },
            {
              id: "3",
              title: "What are your operating hours?",
              content: "We're open Tuesday through Sunday. Lunch: 12:00 PM - 3:00 PM, Dinner: 5:30 PM - 10:00 PM. We're closed on Mondays for family time and menu preparation."
            },
            {
              id: "4",
              title: "Do you offer wine pairings?",
              content: "Yes, our sommelier has carefully selected Italian wines that pair perfectly with our dishes. Ask your server about wine recommendations for your meal."
            },
            {
              id: "5",
              title: "Can I host private events?",
              content: "We offer private dining options for special occasions, business dinners, and celebrations. Contact us to discuss your event requirements and pricing."
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