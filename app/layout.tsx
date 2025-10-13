import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const geistSans = Plus_Jakarta_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: {
    default: "Lashata Shakya",
    template: "%s — Lashata Shakya",
  },
  description:
    "Developer portfolio showcasing projects, skills, and experience.",
  keywords: ["Portfolio", "Web Developer", "Next.js", "TypeScript"],
  openGraph: {
    title: "Lashata Shakya — Portfolio",
    description:
      "Developer portfolio showcasing projects, skills, and experience.",
    url: "https://example.com",
    siteName: "Lashata Shakya — Portfolio",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Lashata Shakya — Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lashata Shakya — Portfolio",
    description:
      "Developer portfolio showcasing projects, skills, and experience.",
    images: ["/og.png"],
    creator: "@yourhandle",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Global gradient background across the entire app */}
        <div aria-hidden className="fixed inset-0 -z-10 pointer-events-none">
          <div className="absolute -inset-[20%] opacity-25 blur-3xl bg-[conic-gradient(at_30%_20%,_#7c3aed,_#4f46e5,_#22d3ee,_transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_50%,_#ffffff0a,_transparent_60%)]" />
        </div>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
