import FadeIn from "@/app/components/animations/FadeIn";
import SlideIn from "@/app/components/animations/SlideIn";
import {
  StaggeredList,
  StaggeredItem,
} from "@/app/components/animations/StaggeredLists";
import Parallax from "@/app/components/animations/Parallax";
import RevealOnScroll from "@/app/components/animations/RevealOnScroll";
import AnimatedText from "@/app/components/animations/TextAnimation";
import {
  TiltHover,
  ShineEffect,
  ScaleHover,
  ButtonHover,
} from "@/app/components/animations/HoverEffects";

export default function TesterPage() {
  const teamMembers = [
    { name: "Alice Johnson", role: "CEO" },
    { name: "Bob Smith", role: "CTO" },
    { name: "Carol Williams", role: "Designer" },
    { name: "Dave Brown", role: "Developer" },
  ];
  return (
    <>
      <div className="space-y-12 border-2 border-solid">
        <FadeIn>
          <h1>This will fade in immediately</h1>
        </FadeIn>

        <FadeIn delay={0.2} duration={0.8}>
          <p>This paragraph will fade in with a slight delay</p>
        </FadeIn>

        <FadeIn delay={0.4} threshold={0.5} once={false}>
          <button>
            This button will animate every time it enters viewport
          </button>
        </FadeIn>
      </div>
      <div className="space-y-12 border-2 border-solid">
        <SlideIn direction="left" distance={100}>
          <h1>This slides in from the left</h1>
        </SlideIn>

        <SlideIn direction="right" delay={0.2}>
          <p>This paragraph slides in from the right</p>
        </SlideIn>

        <SlideIn direction="up" delay={0.4} duration={1}>
          <div className="card">This card slides up from below</div>
        </SlideIn>

        <SlideIn direction="down" delay={0.6} once={false}>
          <button>
            This slides down and will animate on each viewport entry
          </button>
        </SlideIn>
      </div>
      <div className="container mx-auto py-10 border-2 border-solid">
        <h1>Our Team</h1>

        <StaggeredList
          staggerAmount={0.1}
          className="grid grid-cols-2 md:grid-cols-2 gap-6 mt-8"
        >
          {teamMembers.map((member, index) => (
            <StaggeredItem
              key={index}
              className="bg-white p-6 rounded-lg shadow"
            >
              <h2>{member.name}</h2>
              <p>{member.role}</p>
            </StaggeredItem>
          ))}
        </StaggeredList>
      </div>
      <div className="min-h-screen">
        <section className="h-screen flex items-center justify-center bg-blue-900">
          <h1 className="text-5xl text-white">Welcome to our site</h1>
        </section>

        <Parallax speed={-0.2} className="py-20 bg-blue-100">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl">This section moves faster than scroll</h2>
            <p className="mt-4">
              The negative speed value makes it move in the opposite direction
            </p>
          </div>
        </Parallax>

        <Parallax speed={0.5} className="py-20 bg-blue-200">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl">This section moves slower than scroll</h2>
            <p className="mt-4">Creating a layered depth effect</p>
          </div>
        </Parallax>
      </div>
      <div className="container mx-auto py-16 space-y-24">
        <RevealOnScroll direction="left" className="max-w-2xl">
          <h2 className="text-3xl font-bold mb-4">Feature One</h2>
          <p>
            This content reveals from left to right as you scroll down the page.
          </p>
          <img
            src="/file.svg"
            alt="Feature 1"
            className="mt-4 rounded-lg shadow-md"
          />
        </RevealOnScroll>

        <RevealOnScroll direction="right" className="max-w-2xl ml-auto">
          <h2 className="text-3xl font-bold mb-4">Feature Two</h2>
          <p>
            This content reveals from right to left for an alternating effect.
          </p>
          <img
            src="/file.svg"
            alt="Feature 2"
            className="mt-4 rounded-lg shadow-md"
          />
        </RevealOnScroll>

        <RevealOnScroll
          direction="up"
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Feature Three</h2>
          <p>This content reveals from bottom to top for variety.</p>
          <img
            src="/file.svg"
            alt="Feature 3"
            className="mt-4 rounded-lg shadow-md"
          />
        </RevealOnScroll>
      </div>
      <div className="container mx-auto py-20 space-y-20">
        <div className="text-center">
          <AnimatedText
            text="Welcome to our website"
            animation="letter-fade"
            className="text-5xl font-bold"
          />
          <AnimatedText
            text="Creating amazing digital experiences"
            animation="word-fade"
            className="text-xl mt-4"
            wordDelay={0.1}
          />
        </div>

        <div className="bg-gray-100 p-10 rounded-lg">
          <AnimatedText
            text="This text appears like it's being typed"
            animation="typewriter"
            className="text-2xl font-mono"
          />
        </div>

        <div className="text-center">
          <AnimatedText
            text="Wave animation effect"
            animation="wave"
            className="text-3xl font-bold text-blue-600"
          />
        </div>
      </div>
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card with 3D tilt effect */}
          <TiltHover className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">3D Tilt Card</h3>
            <p className="mt-2">Hover over this card to see a 3D tilt effect</p>
          </TiltHover>

          {/* Image with shine effect */}
          <ShineEffect className="rounded-lg overflow-hidden">
            <img src="/globe.svg" alt="Product 1" className="w-full h-auto" />
            <div className="p-4 bg-white">
              <h3 className="text-lg font-medium">Shine Effect</h3>
              <p>Hover for a glossy shine animation</p>
            </div>
          </ShineEffect>

          {/* Element that scales on hover */}
          <ScaleHover className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Scale Effect</h3>
            <p className="mt-2">This card scales up smoothly on hover</p>
          </ScaleHover>
        </div>

        <div className="mt-16 text-center">
          <ButtonHover className="inline-block px-8 py-3 border-2 border-blue-500 rounded-full">
            <span className="font-medium">Hover Me</span>
          </ButtonHover>
        </div>
      </div>
    </>
  );
}
