import { motion } from 'framer-motion'

const TechPill = ({ text }: { text: string }) => (
  <motion.span 
    className="tech-pill select-none touch-none"
    whileTap={{ scale: 0.97 }}
    style={{ 
      willChange: 'transform',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}
    transition={{ 
      type: "spring",
      stiffness: 700,
      damping: 30,
      duration: 0.15
    }}
  >
    {text}
  </motion.span>
)

const SocialLink = ({ href, icon, label }: { href: string; icon: string; label: string }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <i className={`fab ${icon} text-xl`} />
    <span>{label}</span>
  </motion.a>
)

export default function App() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <motion.nav 
        className="bg-gray-800/80 backdrop-blur-sm fixed w-full z-10"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <div className="section-container py-4">
          <div className="flex items-center justify-between">
            <motion.h1 
              className="text-xl font-bold gradient-text"
              whileHover={{ scale: 1.05 }}
            >
              Nitesh C Balusu
            </motion.h1>
            <div className="hidden md:flex space-x-8">
              <motion.a href="#about" className="nav-link" whileHover={{ scale: 1.05 }}>About</motion.a>
              <motion.a href="#experience" className="nav-link" whileHover={{ scale: 1.05 }}>Experience</motion.a>
              <motion.a href="#projects" className="nav-link" whileHover={{ scale: 1.05 }}>Projects</motion.a>
              <motion.a href="#journey" className="nav-link" whileHover={{ scale: 1.05 }}>Journey</motion.a>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="about" className="section-container pt-32">
        <motion.div 
          className="max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row items-start gap-8 mb-8">
            <motion.div
              className="relative w-48 h-48 rounded-full overflow-hidden shadow-xl ring-4 ring-gray-700"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <img 
                src="/nitesh.jpeg" 
                alt="Nitesh C Balusu" 
                className="w-full h-full object-cover"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent" />
            </motion.div>

            <div>
              <motion.h2 
                className="text-2xl text-gray-400 mb-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                Hi, I'm
              </motion.h2>
              <h1 className="text-5xl font-bold mb-6">
                <motion.span 
                  className="gradient-text block"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  Nitesh
                </motion.span>
                <motion.span
                  className="text-gray-100"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  ServiceNow Architect
                  <br />& Full Stack Engineer
                </motion.span>
              </h1>
            </div>
          </div>

          <motion.p 
            className="text-xl text-gray-400 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Passionate about building scalable solutions with modern technologies.
            Specializing in ServiceNow architecture, Bitcoin/Lightning Network development,
            and enterprise integrations.
          </motion.p>

          {/* Social Links */}
          <motion.div 
            className="flex flex-wrap gap-6 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <SocialLink href="https://github.com/niteshbalusu11/" icon="fa-github" label="GitHub" />
            <SocialLink href="https://www.linkedin.com/in/niteshbalusu/" icon="fa-linkedin" label="LinkedIn" />
            <SocialLink href="https://x.com/nitesh_btc" icon="fa-x-twitter" label="Twitter" />
            <SocialLink 
              href="https://drive.google.com/file/d/1KqLueNHbSabJ0SqKgsTwE7QnGYk414CS/view" 
              icon="fa-file-pdf" 
              label="Resume" 
            />
          </motion.div>

          <motion.div 
            className="flex flex-wrap gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <TechPill text="ServiceNow" />
            <TechPill text="TypeScript" />
            <TechPill text="Rust" />
            <TechPill text="Bitcoin" />
            <TechPill text="Lightning Network" />
            <TechPill text="AWS" />
            <TechPill text="DevOps" />
          </motion.div>
        </motion.div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section-container">
        <motion.h2 
          className="text-3xl font-bold mb-8 gradient-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Professional Experience
        </motion.h2>
        <div className="space-y-8">
          <motion.div 
            className="bg-gray-800 p-6 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-2">Open Source Contributions</h3>
            <p className="text-gray-400 mb-4">
              Significant contributor to the Bitcoin & Lightning Network ecosystem. Major contributor
              to Balance of Satoshis, actively maintaining and improving the codebase. Created RustDress,
              a Lightning Address server, and contributed to Blixt Wallet. Passionate about teaching and
              mentoring others in running Lightning nodes.
            </p>
            <div className="flex flex-wrap gap-2">
              <TechPill text="Bitcoin" />
              <TechPill text="Lightning" />
              <TechPill text="Rust" />
              <TechPill text="Node.js" />
              <TechPill text="TypeScript" />
            </div>
          </motion.div>

          <motion.div 
            className="bg-gray-800 p-6 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-2">ServiceNow Platform Architect</h3>
            <p className="text-gray-400 mb-4">
              Led enterprise-wide ServiceNow implementations, specializing in ITSM, HRSD, and CSM modules.
              Architected and delivered high-impact solutions for Fortune 500 companies. Spearheaded the
              complete rebuild of OTIS's ESC portal, modernizing user experience and streamlining service delivery.
              Maintained mission-critical integrations with enterprise systems including Workday, ProntoForms, and Snowflake.
            </p>
            <div className="flex flex-wrap gap-2">
              <TechPill text="ITSM" />
              <TechPill text="HRSD" />
              <TechPill text="CSM" />
              <TechPill text="CMDB" />
              <TechPill text="ITOM" />
              <TechPill text="Solution Architecture" />
            </div>
          </motion.div>

          <motion.div 
            className="bg-gray-800 p-6 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-2">DevOps & Full Stack Engineering</h3>
            <p className="text-gray-400 mb-4">
              Extensive experience in DevOps practices and full-stack development. Implemented CI/CD pipelines,
              infrastructure as code, and cloud solutions. Built and maintained scalable applications using
              modern technologies. Strong focus on code quality, performance optimization, and best practices.
            </p>
            <div className="flex flex-wrap gap-2">
              <TechPill text="AWS" />
              <TechPill text="CI/CD" />
              <TechPill text="Docker" />
              <TechPill text="TypeScript" />
              <TechPill text="React" />
              <TechPill text="Node.js" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-container">
        <motion.h2 
          className="text-3xl font-bold mb-8 gradient-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div 
            className="bg-gray-800 p-6 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-xl font-semibold mb-2">
              <a href="https://github.com/alexbosworth/balanceofsatoshis" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="hover:text-blue-400 transition-colors"
              >
                Balance of Satoshis
              </a>
            </h3>
            <p className="text-gray-400 mb-4">
              Major contributor to this command line utility for working with Lightning
              Network nodes. Implemented key features and improvements.
            </p>
            <div className="flex flex-wrap gap-2">
              <TechPill text="Node.js" />
              <TechPill text="Lightning" />
              <TechPill text="Bitcoin" />
            </div>
          </motion.div>

          <motion.div 
            className="bg-gray-800 p-6 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-xl font-semibold mb-2">
              <a href="https://github.com/hsjoberg/blixt-wallet" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="hover:text-blue-400 transition-colors"
              >
                Blixt Wallet
              </a>
            </h3>
            <p className="text-gray-400 mb-4">
              A non-custodial Lightning Network wallet focused on providing a seamless
              user experience while maintaining security and privacy.
            </p>
            <div className="flex flex-wrap gap-2">
              <TechPill text="React Native" />
              <TechPill text="Lightning" />
              <TechPill text="Bitcoin" />
            </div>
          </motion.div>

          <motion.div 
            className="bg-gray-800 p-6 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-xl font-semibold mb-2">
              <a href="https://github.com/niteshbalusu11/rustdress" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="hover:text-blue-400 transition-colors"
              >
                RustDress
              </a>
            </h3>
            <p className="text-gray-400 mb-4">
              Self-hosted Lightning Address Server and NIP-05 Verification Server built with Rust.
              Enables custom Lightning addresses and Nostr verification.
            </p>
            <div className="flex flex-wrap gap-2">
              <TechPill text="Rust" />
              <TechPill text="Lightning" />
              <TechPill text="Nostr" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Professional Journey Timeline */}
      <section id="journey" className="section-container pb-32">
        <motion.h2 
          className="text-3xl font-bold mb-12 gradient-text text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Professional Journey
        </motion.h2>
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 md:-translate-x-1/2 bg-gradient-to-b from-blue-400 to-purple-500" />
          
          {[
            {
              date: "May 2024 - Present",
              role: "DevOps Engineer",
              company: "ZBD",
              type: "Contract",
              location: "Remote",
              skills: ["TypeScript", "Node.js", "DevOps", "Solution Architecture"]
            },
            {
              date: "Feb 2021 - Present",
              role: "ServiceNow Architect",
              company: "Otis Elevator Co.",
              type: "Full-time",
              location: "Atlanta Metropolitan Area",
              skills: ["ITOM", "HRSD", "ServiceNow Administration", "Solution Architecture"]
            },
            {
              date: "Aug 2022 - Oct 2023",
              role: "Bitcoin Lightning Network Engineer",
              company: "Foundry",
              type: "Full-time",
              location: "Atlanta, Georgia (Remote)",
              skills: ["Rust", "TypeScript", "Node.js", "DevOps"]
            },
            {
              date: "Jun 2019 - Dec 2020",
              role: "Sr. ServiceNow Developer",
              company: "Equifax",
              type: "Contract",
              location: "Alpharetta, Georgia",
              skills: ["ITOM", "HRSD", "CSM", "ServiceNow Administration"]
            },
            {
              date: "Jan 2019 - Jun 2019",
              role: "Sr. ServiceNow Consultant",
              company: "Northside Hospital",
              type: "Contract",
              location: "Atlanta, Georgia",
              skills: ["ITOM", "HRSD", "CSM", "ServiceNow Administration"]
            },
            {
              date: "Apr 2018 - Dec 2018",
              role: "Sr. Enterprise Configuration Manager",
              company: "Sabre Corporation",
              type: "Full-time",
              location: "Southlake, Texas",
              skills: ["HRSD", "CSM", "ServiceNow Administration"]
            }
          ].map((job, index) => (
            <motion.div 
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              key={index}
              className={`relative flex items-start md:items-center mb-12 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
              initial={{ opacity: 0, x: 0, y: 50 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Timeline Point */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-blue-400 rounded-full transform -translate-y-1/2 md:-translate-x-1/2" />
              
              {/* Content */}
              <motion.div 
                className={`pl-12 md:w-5/12 ${
                  index % 2 === 0 ? "md:pl-0 md:pr-12" : "md:pl-12"
                }`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                  <span className="text-blue-400 text-sm font-semibold">{job.date}</span>
                  <h3 className="text-xl font-bold mt-2">{job.role}</h3>
                  <div className="flex items-center gap-2 text-gray-400 mt-1">
                    <span>{job.company}</span>
                    <span>•</span>
                    <span className="text-sm">{job.type}</span>
                  </div>
                  <p className="text-gray-400 text-sm mt-1">{job.location}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {job.skills.map((skill, skillIndex) => (
                      // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
<TechPill key={skillIndex} text={skill} />
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}