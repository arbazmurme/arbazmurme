import Contact from "@/components/pages/Contact";
export const metadata = {
  title: "Arbaz Murme | Contact Us",
  description:
    "Get in touch with Arbaz Murme for professional inquiries, project discussions, or general questions. Reach out through the contact form on this page.",
  openGraph: {
    title: "Arbaz Murme | Contact Us",
    description:
      "Contact Arbaz Murme for any professional inquiries or questions. Use the contact form on this page to get in touch.",
    url: "https://arbazmurme.vercel.app/contact",
    images: [
      {
        url: "/contact.png", // Example image from your public folder
        width: 800,
        height: 600,
        alt: "Contact Us Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arbaz Murme | Contact Us",
    description:
      "Reach out to Arbaz Murme through the contact form on this page for any inquiries or questions.",
    images: ["/contact.png"], // Same image for Twitter
  },
};
// app/page.jsx
export default function Home() {
  return <Contact />;
}
