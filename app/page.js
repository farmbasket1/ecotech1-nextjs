export default function Home() {
  return (
    <main className="min-h-screen">
      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/logo.svg" alt="EcoTech Nexus" className="w-12 h-12" />
          <div>
            <h1 className="text-lg font-semibold">EcoTech Nexus</h1>
            <p className="text-xs text-slate-500">Students. Universities. Climate Tech.</p>
          </div>
        </div>

        <nav className="flex items-center gap-4">
          <a className="text-sm text-slate-700 hover:text-primary" href="#about">About</a>
          <a className="text-sm text-slate-700 hover:text-primary" href="#programs">Programs</a>
          <a className="text-sm text-slate-700 hover:text-primary" href="#partners">Partners</a>
          <a className="text-sm text-slate-700 hover:text-primary" href="#join">Join</a>
          <a href="#join" className="ml-4 inline-block bg-primary text-white px-4 py-2 rounded-lg shadow">Join Waitlist</a>
        </nav>
      </header>

      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-16">
          <div>
            <p className="inline-flex items-center gap-2 text-accent font-medium text-sm mb-4">Pilot 2026 • Ghana • 8 Universities</p>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-slate-900">Redesigning Africa’s Environmental Future with Code & Creativity</h2>
            <p className="mt-6 text-lg text-slate-600 max-w-xl">Join students, universities and partners building digital tools that restore ecosystems, track biodiversity, and empower communities — built in Africa, for Africa.</p>

            <div className="mt-8 flex gap-4 flex-wrap">
              <a href="#join" className="btn-primary">Join Early Access</a>
              <a href="#programs" className="inline-block border border-emerald-200 px-5 py-3 rounded-lg text-emerald-700 font-medium hover:bg-emerald-50">Explore Programs</a>
            </div>

            <div className="mt-6 flex gap-6 items-center text-sm text-slate-500">
              <div className="flex items-center gap-3">
                <svg className="w-4 h-4 text-accent" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                <span>Student cohorts & hackathons</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-4 h-4 text-accent" viewBox="0 0 24 24" fill="none"><path d="M12 3v13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                <span>Data-driven pilots</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="card overflow-hidden">
              <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder" alt="students" className="w-full h-80 object-cover" />
              <div className="p-6">
                <h3 className="font-semibold text-xl">Pilot Spotlight — University Cohort</h3>
                <p className="mt-2 text-sm text-slate-600">A Ghana pilot bringing together 8 universities to co-create climate-tech solutions and test them in local communities.</p>
                <div className="mt-4 flex gap-2 text-xs text-slate-500">
                  <span className="px-3 py-1 rounded-full border">Hackathon</span>
                  <span className="px-3 py-1 rounded-full border">Data Sprint</span>
                  <span className="px-3 py-1 rounded-full border">Field Pilot</span>
                </div>
              </div>
            </div>

            <div className="absolute -right-12 -bottom-6 w-48 opacity-80">
              <!-- decorative svg -->
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><g fill="#10B981" opacity="0.9"><path d="M24 12c3 1 8 0 11 2s5 4 6 7 2 7 4 9 3 2 5 4 0 6-1 9-3 6-6 8-7 4-10 3-5-5-8-7-6-3-8-6-2-6-1-9 4-6 6-9 3-6 4-9 2-6 1-7z"/></g></svg>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div>
            <h3 className="text-2xl font-bold">Africa’s Natural Landscape Is Under Threat</h3>
            <p className="mt-4 text-slate-600">From shrinking forests to fragile freshwater systems, African ecosystems face mounting pressure. We bring the data, training, and platforms that enable youth to build the solutions that protect them.</p>

            <div className="mt-6 grid grid-cols-1 gap-4">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-emerald-600" viewBox="0 0 24 24" fill="none"><path d="M3 21c6-7 10-10 18-12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <div>
                  <h5 className="font-semibold">Rich Biodiversity</h5>
                  <p className="text-sm text-slate-600">Protect habitats and species using data-led monitoring tools.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-emerald-600" viewBox="0 0 24 24" fill="none"><path d="M12 3v13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <div>
                  <h5 className="font-semibold">Carbon & Forests</h5>
                  <p className="text-sm text-slate-600">Map carbon sinks and design community-led reforestation programs.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-emerald-600" viewBox="0 0 24 24" fill="none"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                </div>
                <div>
                  <h5 className="font-semibold">Youth Agency</h5>
                  <p className="text-sm text-slate-600">Equip students with the technical skills and mentorship to deploy change.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="card">

              <h4 className="font-semibold text-lg">Impact Snapshot</h4>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">8</div>
                  <div className="text-sm text-slate-600">Pilot Universities</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">120+</div>
                  <div className="text-sm text-slate-600">Students Trained</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">3</div>
                  <div className="text-sm text-slate-600">Live Pilots</div>
                </div>
              </div>

              <p className="mt-6 text-sm text-slate-600">We measure progress with metrics that matter: species observed, hectares restored, community adoption rates, and policy engagement.</p>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="card overflow-hidden">
                <img className="w-full h-36 object-cover" src="https://images.unsplash.com/photo-1532619675605-0b4a6a6e5a91?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder" alt="learning"/>
                <div className="p-4">
                  <h4 className="font-semibold">Learning Modules</h4>
                  <p className="text-sm text-slate-600 mt-2">Short courses: climate science, data analytics, conservation tech.</p>
                </div>
              </div>

              <div className="card overflow-hidden">
                <img className="w-full h-36 object-cover" src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder" alt="build"/>
                <div className="p-4">
                  <h4 className="font-semibold">Build Sprints</h4>
                  <p className="text-sm text-slate-600 mt-2">Hands-on hackathons and challenge sprints to prototype solutions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="programs" className="bg-emerald-50 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-center">Our Approach: Learn. Build. Deploy. Scale.</h3>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="card text-center">
              <div className="mx-auto w-14 h-14 mb-3 flex items-center justify-center bg-emerald-100 rounded-full">📘</div>
              <h5 className="font-semibold">Educate</h5>
              <p className="text-sm text-slate-600 mt-2">Modules on climate science, GIS, remote sensing, and data viz.</p>
            </div>
            <div className="card text-center">
              <div className="mx-auto w-14 h-14 mb-3 flex items-center justify-center bg-emerald-100 rounded-full">💡</div>
              <h5 className="font-semibold">Innovate</h5>
              <p className="text-sm text-slate-600 mt-2">Hackathons, mentorship and prototype funding.</p>
            </div>
            <div className="card text-center">
              <div className="mx-auto w-14 h-14 mb-3 flex items-center justify-center bg-emerald-100 rounded-full">🚀</div>
              <h5 className="font-semibold">Launch</h5>
              <p className="text-sm text-slate-600 mt-2">Field pilots and community testing with monitoring.</p>
            </div>
            <div className="card text-center">
              <div className="mx-auto w-14 h-14 mb-3 flex items-center justify-center bg-emerald-100 rounded-full">📊</div>
              <h5 className="font-semibold">Impact</h5>
              <p className="text-sm text-slate-600 mt-2">Measure outcomes and scale what works.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="partners" className="max-w-6xl mx-auto px-6 py-12">
        <h3 className="text-2xl font-bold text-center">Pilot & University Network</h3>
        <p className="text-center text-slate-600 mt-2">Launching with a cohort of leading universities and research partners.</p>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-6 gap-6 items-center">
          {['University of Ghana','KNUST','Ashesi','UCC','UPSA','UMaT'].map((n)=>(
            <div className="bg-white p-4 rounded-lg shadow-sm text-center text-sm" key={n}>{n}</div>
          ))}
        </div>
      </section>

      <section id="join" className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold">Get Involved</h3>
          <p className="mt-3 text-slate-600">Students, universities, and partners — join our pilot to co-create digital solutions that protect ecosystems and support communities.</p>

          <form className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-3 items-center">
            <input aria-label="Full name" placeholder="Full name" className="md:col-span-1 px-4 py-3 rounded-lg border" />
            <input aria-label="Email" placeholder="Email address" className="md:col-span-1 px-4 py-3 rounded-lg border" />
            <div className="md:col-span-1">
              <button className="w-full bg-primary text-white px-4 py-3 rounded-lg font-semibold">Register Interest</button>
            </div>
          </form>

          <p className="text-xs text-slate-400 mt-3">We’ll only use your email to share program updates and pilot info.</p>
        </div>
      </section>

      <footer className="bg-primary text-emerald-50 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-6">
          <div>
            <img src="/logo-white.svg" alt="logo" className="w-12 h-12" />
            <p className="mt-2 text-sm text-emerald-200">EcoTech Nexus — driving climate solutions with Africa’s students.</p>
          </div>

          <div className="flex gap-8">
            <div>
              <h4 className="font-semibold">Contact</h4>
              <p className="text-sm mt-2">hello@ecotechnexus.org</p>
            </div>
            <div>
              <h4 className="font-semibold">Legal</h4>
              <a className="text-sm block mt-2">Privacy</a>
              <a className="text-sm block">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
