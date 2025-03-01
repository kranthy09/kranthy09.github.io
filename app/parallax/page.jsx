import Parallax from "@/app/components/animations/Parallax";

export default function StaggersPage() {
  return (
    <div className="min-h-screen">
      <section className="h-screen flex items-center justify-center bg-blue-900">
        <h1 className="text-5xl text-white">Welcome to our site</h1>
      </section>

      <Parallax speed={0.5} className="py-20 bg-blue-200">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl">This section moves slower than scroll</h2>
          <p className="mt-4">Creating a layered depth effect</p>
        </div>
      </Parallax>
      <Parallax speed={-0.2} className="py-20 bg-blue-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl">This section moves faster than scroll</h2>
          <p className="mt-4">
            The negative speed value makes it move in the opposite direction
          </p>
        </div>
      </Parallax>
      <Parallax speed={-0.2} className="py-20 bg-blue-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl">This section moves faster than scroll</h2>
          <p className="mt-4">
            The negative speed value makes it move in the opposite direction
          </p>
        </div>
      </Parallax>
      <Parallax speed={-0.2} className="py-20 bg-blue-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl">This section moves faster than scroll</h2>
          <p className="mt-4">
            The negative speed value makes it move in the opposite direction
          </p>
        </div>
      </Parallax>
      <Parallax speed={-0.2} className="py-20 bg-blue-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl">This section moves faster than scroll</h2>
          <p className="mt-4">
            The negative speed value makes it move in the opposite direction
          </p>
        </div>
      </Parallax>
      <Parallax speed={-0.2} className="py-20 bg-blue-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl">This section moves faster than scroll</h2>
          <p className="mt-4">
            The negative speed value makes it move in the opposite direction
          </p>
        </div>
      </Parallax>
    </div>
  );
}
