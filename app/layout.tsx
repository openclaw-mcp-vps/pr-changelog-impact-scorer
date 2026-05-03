import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PR Changelog Impact Scorer — Score PR impact for changelog automation",
  description: "AI analyzes pull requests to score impact level and auto-generates changelog entries with appropriate categorization. Built for engineering teams and DevRel at SaaS companies."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="1a920463-3a6b-48d6-8f11-f1e378c0885f"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
