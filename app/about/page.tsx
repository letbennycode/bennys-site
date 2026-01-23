export const metadata = {
  title: 'About',
  description: 'Learn about Benny - a creative culture engineer, senior fullstack developer, and music producer.',
  openGraph: {
    title: 'About | Benny\'s Site',
    description: 'Learn about Benny - a creative culture engineer, senior fullstack developer, and music producer.',
  },
}

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-black mb-8">
        About
      </h1>

      <div className="space-y-12 text-black leading-relaxed">
        <section>
          <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-black mb-4">
            Creative Culture Engineer
          </h2>
          <p className="text-lg mb-4">
            I am a <strong className="font-bold text-black">creative culture engineer</strong>—a role that transcends traditional job titles. 
            I don&apos;t just write code or produce music; I architect the cultural foundations that enable teams and products to flourish.
          </p>
          <p>
            This means building systems, processes, and environments where creativity and technical excellence coexist. 
            It&apos;s about understanding that the best products emerge from teams that are empowered, inspired, and aligned around a shared vision.
          </p>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-black mb-4">
            Background
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold text-black mb-2">Senior Fullstack Developer</h3>
              <p>
                With extensive experience across the full technology stack, I build robust, scalable applications that solve real problems. 
                From frontend interfaces that delight users to backend systems that handle complexity with elegance, I bring a holistic approach to software development.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-black mb-2">Music Producer</h3>
              <p>
                Music production has taught me the art of iteration, the importance of detail, and how to balance technical precision with creative expression. 
                These principles directly inform my approach to software engineering and team building.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-black mb-2">The Intersection</h3>
              <p>
                Where these disciplines meet is where I thrive. The same attention to detail that goes into a mix translates to clean, maintainable code. 
                The collaborative process of music production mirrors the team dynamics needed for successful product development. 
                Both require understanding the bigger picture while executing on the smallest details.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-black mb-4">
            Philosophy & Approach
          </h2>
          <p className="text-lg mb-4">
            Building culture around teams and products isn&apos;t about ping-pong tables or free snacks. 
            It&apos;s about creating environments where people can do their best work, where ideas flow freely, and where technical decisions are made with both immediate needs and long-term vision in mind.
          </p>
          <p>
            My creative engineering mindset means I approach every problem with curiosity, rigor, and a willingness to experiment. 
            I believe in the power of constraints to drive innovation, in the importance of clear communication, and in building systems that are both powerful and humane.
          </p>
        </section>
      </div>
    </div>
  )
}
