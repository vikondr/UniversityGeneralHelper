function taskButton(text, href) {
  return (
    <a
      className="py-3 px-6 rounded-lg border border-blue-500 text-blue-300 hover:border-blue-500 transition glow-on-hover cursor-pointer m-2 inline-block"
      href={href}
    >
      {text}
    </a>
  );
}

function Home() {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center">
      <div className="max-w-3xl w-full p-8 bg-gray-900 rounded-2xl shadow-lg text-center">
        <h1 className="text-3xl font-bold mb-8 text-blue-400">University General Helper</h1>
        <div className="flex flex-grid justify-center gap-4">
          {taskButton("Get Notes", "/notes")}
          {taskButton("Labs Backlog", "/labs")}
          {taskButton("Generate Lab Report", "/report")}
          {taskButton("About", "/about")}
        </div>
      </div>
    </div>
  );
}

export default Home;
