import React from "react";
// TEMPORARY (if you haven’t installed shadcn/ui):
// Replace these with basic divs or Tailwind cards/buttons for now


export default function Portfolio() {
  return (
    <div className="font-sans text-gray-800 bg-white dark:bg-gray-900 dark:text-white min-h-screen">
      <header className="p-6 bg-blue-600 text-white text-center text-3xl font-bold shadow">
        My Portfolio
      </header>

      <main className="p-6 grid gap-10 max-w-4xl mx-auto">
        {/* About Me */}
        <section id="about">
          <h2 className="text-2xl font-semibold mb-2">About Me</h2>
          <Card>
            <CardContent className="p-4">
              <p>
                Hi, I'm [Your Name], a [Your Role, e.g., Software Engineer or Student] with a passion for
                [interests like web development, robotics, AI, etc.]. I love building things that make an impact.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Projects */}
        <section id="projects">
          <h2 className="text-2xl font-semibold mb-2">Personal Projects</h2>
          <div className="grid gap-4">
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold">SmartMed (RFID Hospital Triage)</h3>
                <p>Designed an RFID-enabled system to improve hospital patient tracking and triage efficiency.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold">Rotating Embedded Platform</h3>
                <p>Created a microcontroller-controlled platform with EEPROM logging, RTC, and an FSM.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Resume */}
        <section id="resume">
          <h2 className="text-2xl font-semibold mb-2">Resume</h2>
          <Card>
            <CardContent className="p-4">
              <p>You can view or download my resume below:</p>
              <Button className="mt-2" asChild>
                <a href="/resume.pdf" download>
                  Download Resume
                </a>
              </Button>
            </CardContent>
          </Card>
        </section>

        {/* Contact */}
        <section id="contact">
          <h2 className="text-2xl font-semibold mb-2">Contact</h2>
          <Card>
            <CardContent className="p-4">
              <p>Email: <a href="mailto:your.email@example.com" className="text-blue-500 underline">your.email@example.com</a></p>
              <p className="mt-2">Or connect with me on <a href="https://www.linkedin.com/in/yourprofile" className="text-blue-500 underline">LinkedIn</a>.</p>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="text-center p-4 text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Your Name. All rights reserved.
      </footer>
    </div>
  );
}
