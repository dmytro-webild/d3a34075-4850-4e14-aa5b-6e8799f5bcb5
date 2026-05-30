import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";



export const metadata: Metadata = {
  title: 'Typing Master - Boost Your Typing Speed',
  description: 'Master touch typing and boost your WPM with our free online typing test and tutor. Practice, track your progress, and climb the leaderboard.',
  keywords: ["typing test, typing tutor, WPM test, typing speed, Monkeytype, 10FastFingers, touch typing, online typing, keyboard practice"],
  openGraph: {
    "title": "Typing Master - Boost Your Typing Speed",
    "description": "Master touch typing and boost your WPM with our free online typing test and tutor. Practice, track your progress, and climb the leaderboard.",
    "url": "https://www.typingmaster.com",
    "siteName": "Typing Master",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/green-key-with-download-word-written-it-digital-data-transfer_482257-45026.jpg",
        "alt": "Typing test live interface"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Typing Master - Boost Your Typing Speed",
    "description": "Master touch typing and boost your WPM with our free online typing test and tutor. Practice, track your progress, and climb the leaderboard.",
    "images": [
      "http://img.b2bpic.net/free-photo/green-key-with-download-word-written-it-digital-data-transfer_482257-45026.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${inter.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
