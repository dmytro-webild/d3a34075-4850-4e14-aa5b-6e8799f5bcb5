"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardTwentyOne from '@/components/sections/feature/FeatureCardTwentyOne';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroSplitDoubleCarousel from '@/components/sections/hero/HeroSplitDoubleCarousel';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardSixteen from '@/components/sections/testimonial/TestimonialCardSixteen';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import { Award, Gauge, Target } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="expand-hover"
        defaultTextAnimation="reveal-blur"
        borderRadius="pill"
        contentWidth="mediumLarge"
        sizing="largeSmallSizeMediumTitles"
        background="blurBottom"
        cardStyle="inset"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Home",
          id: "#home",
        },
        {
          name: "Test",
          id: "#test",
        },
        {
          name: "Practice",
          id: "#practice",
        },
        {
          name: "Leaderboard",
          id: "#leaderboard",
        },
        {
          name: "How to Use",
          id: "#how-to-use",
        },
      ]}
      brandName="Typing Master"
      button={{
        text: "Start Typing Test",
        href: "#test",
      }}
      animateOnLoad={true}
    />
  </div>

  <div id="home" data-section="home">
      <HeroSplitDoubleCarousel
      background={{
        variant: "animated-grid",
      }}
      title="Improve Your Typing Speed"
      description="Master touch typing and boost your WPM with our intuitive platform. Practice, track your progress, and climb the leaderboard for ultimate typing mastery."
      leftCarouselItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-it-professional-using-tablet-building-ai-algorithms_482257-92639.jpg",
          imageAlt: "Typing test dashboard UI",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/woman-watching-business-conference-computer-screen-looking-statistics_482257-125563.jpg",
          imageAlt: "Abstract data flow",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/hands-typing-glowing-laptop-keyboard_23-2151967431.jpg",
          imageAlt: "Modern keyboard with glowing keys",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/view-3d-button_23-2149917529.jpg",
          imageAlt: "Typing performance graphs",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/man-with-glasses-works-laptop-dark_169016-14888.jpg",
          imageAlt: "Hands typing rapidly with light trails",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/cyberpunk-illustration-with-futuristic-technology-bright-neon-lights_23-2151672041.jpg",
          imageAlt: "Brain connected to keyboard",
        },
      ]}
      rightCarouselItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/green-key-with-download-word-written-it-digital-data-transfer_482257-45026.jpg",
          imageAlt: "Live typing interface",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/person-getting-break-time-office_23-2149272073.jpg",
          imageAlt: "User focused on typing with WPM counter",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/man-using-technology-while-traveling-city_23-2149333096.jpg",
          imageAlt: "Diverse hands typing on keyboards",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/graduation-diploma-certificate-with-ribbon-bow_23-2148769713.jpg",
          imageAlt: "Best Score trophy icon",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-vector/leaderboard-with-abstract-background_23-2148752779.jpg",
          imageAlt: "Typing leaderboard UI",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-hands-working-with-laptop-wooden-table_1421-645.jpg",
          imageAlt: "Practice mode settings interface",
        },
      ]}
      buttons={[
        {
          text: "Start Typing Test",
          href: "#test",
        },
        {
          text: "Learn More",
          href: "#how-to-use",
        },
      ]}
      carouselPosition="right"
      marqueeItems={[
        {
          type: "text",
          text: "Average WPM: 65",
        },
        {
          type: "text",
          text: "Accuracy: 98%",
        },
        {
          type: "text",
          text: "Best Score: 120 WPM",
        },
        {
          type: "text",
          text: "Improve Focus",
        },
        {
          type: "text",
          text: "Boost Productivity",
        },
        {
          type: "text",
          text: "Master Typing",
        },
      ]}
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/portrait-brutal-bearded-macho-male-dressed-suit-dark-grey-background_613910-1532.jpg",
          alt: "Typing Master user Sarah",
        },
        {
          src: "http://img.b2bpic.net/free-photo/non-binary-person-sitting-table-retro-clothes_23-2148757525.jpg",
          alt: "Typing Master user Michael",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-redhead-bearded-male-eyeglasses-dressed-elegant-wool-suit-grey-background_613910-15599.jpg",
          alt: "Typing Master user Emily",
        },
        {
          src: "http://img.b2bpic.net/free-photo/serious-young-lady-designer-sitting-office-night_171337-15592.jpg",
          alt: "Typing Master user David",
        },
        {
          src: "http://img.b2bpic.net/free-photo/handsome-young-man-wearing-checkered-shirt-standing-night-street-illuminated-signboards-neon-lights_613910-21240.jpg",
          alt: "Typing Master user Jessica",
        },
      ]}
      avatarText="Join 50K+ Typists"
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardThree
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      metrics={[
        {
          id: "wpm",
          icon: Gauge,
          title: "Average WPM",
          value: "65",
        },
        {
          id: "accuracy",
          icon: Target,
          title: "Accuracy",
          value: "98%",
        },
        {
          id: "best-score",
          icon: Award,
          title: "Best Score",
          value: "120 WPM",
        },
      ]}
      title="Your Typing Progress at a Glance"
      description="Track your journey to typing mastery with key statistics and performance indicators."
    />
  </div>

  <div id="test" data-section="test">
      <FeatureCardTwentyOne
      useInvertedBackground={false}
      title="The Ultimate Typing Test Experience"
      description="Challenge yourself with customizable tests designed to push your limits and improve your speed and accuracy."
      tag="Main Feature"
      accordionItems={[
        {
          id: "duration",
          title: "Flexible Test Durations",
          content: "Choose from 15s, 30s, 60s, or 120s to fit your practice needs and quick challenges.",
        },
        {
          id: "content",
          title: "Diverse Text Options",
          content: "Test your skills with random words, famous quotes, or even upload your own custom text.",
        },
        {
          id: "feedback",
          title: "Live Feedback & Stats",
          content: "See your correct characters in green, mistakes in red, and track WPM and accuracy in real-time.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/old-woman-with-disability-holding-green-screen-digital-tablet-senior-person-sitting-wheelchair-using-blank-copy-space-with-isolated-chroma-key-mock-up-background-display_482257-39047.jpg"
      imageAlt="Typing test with live highlighting and timer"
      mediaAnimation="slide-up"
      mediaPosition="left"
    />
  </div>

  <div id="practice" data-section="practice">
      <FeatureCardTwentyOne
      useInvertedBackground={true}
      title="Endless Practice, Customized for You"
      description="Refine your skills without pressure. Our practice mode offers a tailored learning experience for every level."
      tag="Practice Mode"
      accordionItems={[
        {
          id: "endless",
          title: "Untimed, Endless Typing",
          content: "Practice at your own pace without the pressure of a timer. Focus purely on technique and consistency.",
        },
        {
          id: "difficulty",
          title: "Adjustable Difficulty Levels",
          content: "Start with easy words and progress to medium or hard texts as your skills improve.",
        },
        {
          id: "modes",
          title: "Multiple Practice Modes",
          content: "Select between words, quotes, or custom text to target specific areas of improvement.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/man-working-late-night-side-view_23-2150171090.jpg"
      imageAlt="Practice mode settings with difficulty levels"
      mediaAnimation="slide-up"
      mediaPosition="right"
    />
  </div>

  <div id="how-to-use" data-section="how-to-use">
      <TextSplitAbout
      useInvertedBackground={false}
      title="How to Use Typing Master"
      description={[
        "Getting started is simple. Navigate to the 'Test' section, choose your preferred duration and text type, then hit 'Start'. Our system will guide you through the process, providing instant feedback on your performance.",
        "For sustained improvement, delve into 'Practice Mode'. Here, you can select difficulty levels and text sources without a timer, allowing you to focus on accuracy and form. Track your progress on the 'Leaderboard' and review your 'Typing History' to see how far you've come. Our responsive design ensures a seamless experience across all your devices.",
      ]}
      buttons={[
        {
          text: "View All Features",
          href: "#features",
        },
      ]}
    />
  </div>

  <div id="leaderboard" data-section="leaderboard">
      <TestimonialCardSixteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "1",
          name: "Sarah J.",
          role: "Software Engineer",
          company: "TechCorp",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-attractive-charming-brunette-glasses-blue-shirt-crossed-arms-listening-music-headphones-leaning-against-brick-wall-room-with-loft-design_613910-9173.jpg",
          imageAlt: "Sarah Johnson",
        },
        {
          id: "2",
          name: "Michael C.",
          role: "Data Analyst",
          company: "DataInsights",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-man-using-portable-notebook-cafe-sitting-table-by-window-typing-something-frowning_343059-118.jpg",
          imageAlt: "Michael Chen",
        },
        {
          id: "3",
          name: "Emily R.",
          role: "Content Creator",
          company: "WordStream",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-woman-relaxing-with-diary_23-2150522472.jpg",
          imageAlt: "Emily Rodriguez",
        },
        {
          id: "4",
          name: "David K.",
          role: "Student",
          company: "University XYZ",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/happy-excited-grinning-redhead-girl-chosen-smiling-gratitude-delighted-gladly-pointing-herself-look_1258-131386.jpg",
          imageAlt: "David Kim",
        },
        {
          id: "5",
          name: "Jessica L.",
          role: "Remote Worker",
          company: "Global Connect",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/confident-female-entrepreneur-seated-home-office-desk-with-hands-clasped-gazing-camera-south_482257-135019.jpg",
          imageAlt: "Jessica Lee",
        },
      ]}
      kpiItems={[
        {
          value: "120",
          label: "Best WPM",
        },
        {
          value: "99.5%",
          label: "Highest Accuracy",
        },
        {
          value: "Pro",
          label: "Current Rank",
        },
      ]}
      title="Achieve Your Best: See How You Rank!"
      description="Celebrate your progress and see how you stack up against other typists. Our results screen provides comprehensive analytics to help you understand and improve your performance."
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "SyntaxFlow",
        "KeyMetric",
        "WordWeave",
        "RapidType",
        "PrecisionInput",
        "FlowState Labs",
        "VelocityKey",
      ]}
      title="Trusted by Top Tycoons & Keyboard Warriors"
      description="Join thousands who are leveling up their typing game with us. We're the preferred choice for those serious about speed and accuracy."
      speed={40}
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="default"
      useInvertedBackground={true}
      faqs={[
        {
          id: "1",
          title: "How does the typing test work?",
          content: "Our typing test presents you with a passage of text. As you type, it tracks your speed (WPM) and accuracy in real-time. After the timer runs out, you'll get a detailed results card.",
        },
        {
          id: "2",
          title: "Can I practice without a timer?",
          content: "Yes! Our 'Practice Mode' allows for untimed, endless typing sessions. You can focus purely on improving your technique and accuracy at your own pace, choosing different difficulty levels.",
        },
        {
          id: "3",
          title: "What is WPM and how is it calculated?",
          content: "WPM stands for Words Per Minute. It's calculated by taking the number of correctly typed words and dividing it by the time taken in minutes. We also account for errors to give you a Raw WPM.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/3d-puzzle-wall_1048-5026.jpg"
      imageAlt="Person looking for answers on a screen"
      mediaAnimation="slide-up"
      mediaPosition="left"
      title="Frequently Asked Questions"
      description="Find quick answers to the most common questions about our typing master platform and how it can help you."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Get in Touch"
      description="Have questions, feedback, or need assistance? Our team is here to help you on your typing journey."
      inputs={[
        {
          name: "name",
          type: "text",
          placeholder: "Your Name",
          required: true,
        },
        {
          name: "email",
          type: "email",
          placeholder: "Your Email",
          required: true,
        },
      ]}
      textarea={{
        name: "message",
        placeholder: "Your Message",
        rows: 4,
        required: true,
      }}
      imageSrc="http://img.b2bpic.net/free-photo/laptop-screen-room-with-red-light_250224-287.jpg"
      imageAlt="Laptop with email and chat icons"
      mediaAnimation="opacity"
      mediaPosition="right"
      buttonText="Send Message"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        {
          items: [
            {
              label: "Home",
              href: "#home",
            },
            {
              label: "Typing Test",
              href: "#test",
            },
            {
              label: "Practice Mode",
              href: "#practice",
            },
          ],
        },
        {
          items: [
            {
              label: "Leaderboard",
              href: "#leaderboard",
            },
            {
              label: "How to Use",
              href: "#how-to-use",
            },
            {
              label: "Features",
              href: "#features",
            },
          ],
        },
        {
          items: [
            {
              label: "Contact Us",
              href: "#contact",
            },
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Service",
              href: "#",
            },
          ],
        },
      ]}
      logoText="Typing Master"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
