export default function HeroSection() {
  return (
    <section
      id="hero"
      className="h-screen flex items-center justify-center bg-gradient-to-br from-brand-black to-gray-900 text-white"
    >
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-bold mb-4">
          Hi, I'm <span className="text-brand-red">Michel Beyrouty</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Full Stack Developer passionate about creating innovative solutions
          and beautiful user experiences.
        </p>
        <div className="flex gap-4 justify-center mt-8">
          <a
            href="#about"
            className="bg-brand-red px-6 py-3 rounded-lg hover:bg-red-600 transition-colors"
          >
            Learn More
          </a>
          <a
            href="#work"
            className="border border-brand-red px-6 py-3 rounded-lg hover:bg-brand-red/10 transition-colors"
          >
            View Work
          </a>
        </div>
      </div>
    </section>
  );
}
