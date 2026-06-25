
function About() {
  return (
    <main className="max-w-5xl mx-auto py-16 px-6">
      <h1 className="text-5xl font-bold mb-6">
        About This Project
      </h1>

      <p className="mb-4">
        This website was built to practice Motion animations in React.
      </p>

      <p className="mb-4">
        Throughout this project I'll experiment with:
      </p>

      <ul className="list-disc pl-6 space-y-2">
        <li>Page transitions</li>
        <li>Hover animations</li>
        <li>Loading animations</li>
        <li>Staggered card animations</li>
        <li>Layout animations</li>
      </ul>
    </main>
  );
}

export default About;