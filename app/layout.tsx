import type {Metadata} from "next";
import "./globals.css";
import {Noto_Sans_JP} from "next/font/google";
import {cn} from "@/lib/utils";
import {siteConfig} from "@/config/site";

const fontNotoSansJP = Noto_Sans_JP({subsets: ["latin"]});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ["Next.js", "Tailwindcss", "React", "Vercel"],
  authors: {
    name: "yu-to06",
    url: siteConfig.url,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ja'>
      <body
        className={cn(
          "bg-background antialiased min-h-screen",
          fontNotoSansJP.className
        )}
      >
        {children}
      </body>
    </html>
  );
}
