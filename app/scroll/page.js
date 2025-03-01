// app/page.js or any other page
import ScrollSection from "../components/ScrollSection";

export default function Page() {
  return (
    <main>
      <ScrollSection
        items={[
          {
            image: "/file.svg",
            title: "Our Mission",
            points: [
              "Creating sustainable solutions",
              "Driving innovation across industries",
              "Building communities worldwide",
            ],
          },
          {
            image: "/globe.svg",
            title: "Our Approach",
            points: [
              "Research-driven methodology",
              "Collaborative partnerships",
              "Iterative design process",
            ],
          },
          {
            image: "/vercel.svg",
            title: "Our Mission",
            points: [
              "Creating sustainable solutions",
              "Driving innovation across industries",
              "Building communities worldwide",
            ],
          },
          {
            image: "/influenceai-logo.svg",
            title: "Our Mission",
            points: [
              "Creating sustainable solutions",
              "Driving innovation across industries",
              "Building communities worldwide",
            ],
          },
          {
            image: "/window.svg",
            title: "Our Mission",
            points: [
              "Creating sustainable solutions",
              "Driving innovation across industries",
              "Building communities worldwide",
            ],
          },
        ]}
        sectionHeight="200vh"
        sectionBackground="#f8f9fa"
        textColor="#333333"
      />
    </main>
  );
}
