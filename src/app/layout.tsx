import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomCallBar from "@/components/BottomCallBar";

export const metadata: Metadata = {
  metadataBase: new URL("https://preview.kevinjonescarpentry.example"),
  title: {
    default: "Kevin Jones Carpentry | Parkman, Maine",
    template: "%s | Kevin Jones Carpentry",
  },
  description:
    "Kevin Jones Carpentry, Parkman, Maine. New construction, remodels, repairs, decks, barns, garages and sheds, rough frame to finished room.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col bg-paper text-ink font-body antialiased">
        <a href="#main" className="skip-link bg-ink text-paper px-4 py-2 rounded font-body text-sm">
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <BottomCallBar />
      </body>
    </html>
  );
}
