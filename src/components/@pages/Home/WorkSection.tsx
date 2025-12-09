export default function WorkSection() {
  return (
    <section id="about" className="min-h-screen py-20 px-6 text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">
          About <span className="text-brand-red">Me</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300">
              I'm a passionate full-stack developer with expertise in modern web
              technologies. I love building scalable applications and solving
              complex problems.
            </p>
            <p className="text-lg text-gray-300">
              With experience in React, Next.js, Node.js, and more, I create
              solutions that are both functional and beautiful.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                "React",
                "Next.js",
                "TypeScript",
                "Node.js",
                "Python",
                "AWS",
              ].map((tech) => (
                <span
                  key={tech}
                  className="bg-brand-red/20 text-brand-red px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-brand-black p-8 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-brand-red">
              Skills
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Frontend Development</li>
              <li>• Backend Development</li>
              <li>• Database Design</li>
              <li>• Cloud Architecture</li>
              <li>• DevOps & CI/CD</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
