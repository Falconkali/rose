import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "For Mishu — A Message From My Heart",
  description: "A love letter crafted for someone who became the most important person in my world.",
  keywords: ["love", "romantic", "heartfelt", "Mishu"],
  openGraph: {
    title: "For Mishu — A Message From My Heart",
    description: "A love letter crafted for someone who became the most important person in my world.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-[#090909] text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
