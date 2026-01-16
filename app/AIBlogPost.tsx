import React from 'react';
import { Rocket, Zap, Code, Database, Shield, TrendingUp } from 'lucide-react';

interface BlogPostProps {
  className?: string;
}

const AIBlogPost: React.FC<BlogPostProps> = ({ className = '' }) => {
  return (
    <article className={`max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12  ${className}`}>
      {/* Header */}
      <header className="mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
          From Tutorial Hell to Real-World Dev: A Roadmap for CS/IT Students to Become Job-Ready 👩‍💻🚀
        </h1>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 sm:p-6 rounded-r-lg">
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            <strong className="text-blue-900">TL;DR:</strong> Learning to code is like learning a new language. You can listen to a thousand phrases — but until you start talking, you won’t really speak it. The same goes for web development. Tutorials are useful warm-ups, but if you never build on your own, you stay stuck in what we call tutorial hell — the phase where you consume content endlessly but never create anything real.
          </p>
        </div>
      </header>

    
    {/* Introduction Section */}
      <section className="mb-12 sm:mb-16">
        <div className="flex items-start gap-3 mb-4">
          <span className="text-3xl sm:text-4xl">✨</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 ">
            Introduction: What Is Tutorial Hell?
          </h2>
        </div>
        <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
          You've seen it: you start a tutorial on YouTube or Udemy, watch for a while, then open another one because that one looks better. Weeks pass, but nothing substantial gets built. That's tutorial hell — where learning replaces doing.
        </p>
        <p className="text-base sm:text-lg text-gray-700  leading-relaxed">
          Real learning doesn't come from watching. It comes from building, stumbling, fixing, and iterating — just like on a real job.
        </p>
      </section>

      {/* Section 1: Mindset */}
      <section className="mb-12 sm:mb-16">
        <div className="flex items-start gap-3 mb-6">
          <span className="text-3xl sm:text-4xl">🧭</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 ">
            Section 1: Your Mindset First — Build, Don't Just Consume
          </h2>
        </div>

        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-lg border-l-4 border-blue-500">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
              Stop Watching, Start Building
            </h3>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Tutorials are like training wheels. They help you start, but if you never take them off, you'll never balance on your own. Choose one thing at a time and finish it before jumping.
            </p>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-lg border-l-4 border-green-500">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
              Set a Deadline 📆
            </h3>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Pick a date to stop learning and start building. Treat it like a sprint — after this, all your time goes into projects and portfolio pieces, not videos.
            </p>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-lg border-l-4 border-purple-500">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
              Let Problems Teach You
            </h3>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              When you don't know what to do next, search documentation, not another video. Learning from docs and solving real errors builds understanding.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Roadmap */}
      <section className="mb-12 sm:mb-16">
        <div className="flex items-start gap-3 mb-6">
          <span className="text-3xl sm:text-4xl">🛣️</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 ">
            Section 2: The Practical Roadmap (Step-By-Step)
          </h2>
        </div>
        <p className="text-base sm:text-lg text-gray-700  leading-relaxed mb-8">
          Here's a distilled version of the biggest roadmaps out there — but with focus, not fluff.
        </p>

        <div className="space-y-8">
          {/* Phase 1 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">1</span>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-gray-100">
                Foundations (Months 0–2)
              </h3>
            </div>
            <p className="text-base font-semibold text-gray-800 dark:text-gray-200 mb-3">Learn:</p>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span className="text-base sm:text-lg">HTML & semantic markup</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span className="text-base sm:text-lg">CSS (layout, flexbox, grid, responsive design)</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span className="text-base sm:text-lg">Vanilla JavaScript fundamentals</span>
              </li>
            </ul>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 italic mt-4">
              These are the four pillars of web dev; without them, frameworks feel like magic tricks.
            </p>
          </div>

          {/* Phase 2 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">2</span>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-gray-100">
                Version Control & Tools (Month 2)
              </h3>
            </div>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span className="text-base sm:text-lg">Git & GitHub</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span className="text-base sm:text-lg">Terminal basics</span>
              </li>
            </ul>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 italic mt-4">
              These make your code sharable and your work professional.
            </p>
          </div>

          {/* Phase 3 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-purple-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">3</span>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-gray-100">
                Modern JavaScript & Framework (Months 3–5)
              </h3>
            </div>
            <p className="text-base font-semibold text-gray-800 dark:text-gray-200 mb-4">Choose One Major Path:</p>
            
            <div className="space-y-6">
              <div className="border-l-4 border-purple-400 pl-4">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Frontend</h4>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span className="text-base sm:text-lg">React or Vue or Angular</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span className="text-base sm:text-lg">TypeScript (optional but recommended)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span className="text-base sm:text-lg">Component design & state management</span>
                  </li>
                </ul>
              </div>

              <div className="border-l-4 border-indigo-400 pl-4">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Backend</h4>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-2">•</span>
                    <span className="text-base sm:text-lg">Node.js + Express or Python + Flask/Django</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-2">•</span>
                    <span className="text-base sm:text-lg">REST APIs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-2">•</span>
                    <span className="text-base sm:text-lg">Databases (SQL or NoSQL)</span>
                  </li>
                </ul>
              </div>
            </div>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 italic mt-4">
              Full-Stack combines both.
            </p>
          </div>

          {/* Phase 4 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">4</span>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-gray-100">
                Deployment and DevOps Basics (Months 5–7)
              </h3>
            </div>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                <span className="text-base sm:text-lg">Deploy to Netlify, Vercel, or a cloud provider</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                <span className="text-base sm:text-lg">CI/CD basics</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                <span className="text-base sm:text-lg">Understand HTTPS, domains, DNS</span>
              </li>
            </ul>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 italic mt-4">
              These skills make you ship things — not just build them.
            </p>
          </div>

          {/* Phase 5 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">5</span>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-gray-100">
                Projects & Portfolio (Ongoing)
              </h3>
            </div>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-4">
              This is where job readiness is proven. Build:
            </p>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span className="text-base sm:text-lg">Portfolio site</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span className="text-base sm:text-lg">Full app with login/auth</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span className="text-base sm:text-lg">E-commerce or blog with backend</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span className="text-base sm:text-lg">Realtime features</span>
              </li>
            </ul>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 italic mt-4">
              Real projects are the key to interviews.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Mistakes */}
      <section className="mb-12 sm:mb-16">
        <div className="flex items-start gap-3 mb-6">
          <span className="text-3xl sm:text-4xl">⚠️</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 ">
            Section 3: Mistakes That Kill Progress (and How to Avoid Them)
          </h2>
        </div>
        <p className="text-base sm:text-lg text-gray-700  leading-relaxed mb-8">
          Here's a handful of common missteps you should dodge:
        </p>

        <div className="space-y-6">
          <div className="bg-red-50 dark:bg-gray-800 p-6 rounded-lg border-l-4 border-red-500">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center gap-2">
              <span className="text-red-500">❌</span>
              Trying to Learn Everything at Once
            </h3>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              The web is huge. Focus on one stack at a time. Depth beats breadth — especially early on.
            </p>
          </div>

          <div className="bg-red-50 dark:bg-gray-800 p-6 rounded-lg border-l-4 border-red-500">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center gap-2">
              <span className="text-red-500">❌</span>
              Endless Tutorial Switching
            </h3>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Every time you jump to a new course mid-project, you reset context. Finish what you started, then level up.
            </p>
          </div>

          <div className="bg-red-50 dark:bg-gray-800 p-6 rounded-lg border-l-4 border-red-500">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center gap-2">
              <span className="text-red-500">❌</span>
              Ignoring Responsive Design & Accessibility
            </h3>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Sites must work on every device and for every user. These skills are core, not optional.
            </p>
          </div>

          <div className="bg-red-50 dark:bg-gray-800 p-6 rounded-lg border-l-4 border-red-500">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center gap-2">
              <span className="text-red-500">❌</span>
              Neglecting Documentation
            </h3>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Docs are often more accurate and deeper than random blog posts or videos. Get comfortable reading them early.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Job Ready */}
      <section className="mb-12 sm:mb-16">
        <div className="flex items-start gap-3 mb-6">
          <span className="text-3xl sm:text-4xl">💼</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 ">
            Section 4: Getting Job Ready
          </h2>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900  mb-4">
              Build Real-World Projects
            </h3>
            <p className="text-base sm:text-lg text-gray-700  leading-relaxed mb-4">
              Projects show potential employers that you can solve problems, not just follow instructions.
            </p>
            <p className="text-base font-semibold text-gray-800  mb-3">Examples to include:</p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-700 p-4 rounded-lg">
                <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300">Portfolio with live URL</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-gray-800 dark:to-gray-700 p-4 rounded-lg">
                <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300">CRUD web app with authentication</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-gray-800 dark:to-gray-700 p-4 rounded-lg">
                <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300">API-driven site</p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-gray-800 dark:to-gray-700 p-4 rounded-lg">
                <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300">Deployed project with CI/CD</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900  mb-4">
              Sharpen Interview Skills
            </h3>
            <p className="text-base font-semibold text-gray-800  mb-3">Learn:</p>
            <ul className="space-y-2 text-gray-700 ">
              <li className="flex items-start">
                <span className="text-indigo-500 mr-2">•</span>
                <span className="text-base sm:text-lg">Data structures fundamentals</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-500 mr-2">•</span>
                <span className="text-base sm:text-lg">Basic system design ideas</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-500 mr-2">•</span>
                <span className="text-base sm:text-lg">How to explain your projects</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900  mb-4">
              Network
            </h3>
            <p className="text-base sm:text-lg text-gray-700  leading-relaxed">
              Join communities (Discord, GitHub, local meetups). Collaboration builds confidence and opportunity.
            </p>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-8 sm:p-10 rounded-2xl text-white">
        <div className="flex items-start gap-3 mb-6">
          <span className="text-3xl sm:text-4xl">🧠</span>
          <h2 className="text-2xl sm:text-3xl font-bold">
            Closing Thoughts
          </h2>
        </div>
        <p className="text-base sm:text-lg leading-relaxed mb-4">
          Web development isn't about memorizing every tool under the sun. It's about thinking like a builder: pick a stack, build real stuff, learn from errors, and show your work — not just watch it. When you shift from watching to building, you'll go from confused beginner to job-ready developer faster than you think.
        </p>
        <p className="text-base sm:text-lg leading-relaxed">
          Your roadmap isn't a checklist — it's a compass guiding you from tutorials to truth: code in public, fail graciously, and ship often. 🌟
        </p>
      </section>

     

     
    </article>
  );
};

export default AIBlogPost;



      