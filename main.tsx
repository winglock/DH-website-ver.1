import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'

export default function Component() {
  const [activeTab, setActiveTab] = useState('home')
  const homeRef = useRef<HTMLDivElement>(null)
  const devExplanationRef = useRef<HTMLDivElement>(null)
  const trustRef = useRef<HTMLDivElement>(null)
  const navRef = useRef<HTMLDivElement>(null)

  const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement>) => {
    if (sectionRef.current && navRef.current) {
      const navHeight = navRef.current.offsetHeight
      const sectionTop = sectionRef.current.offsetTop - navHeight - 20 // 20px extra padding
      window.scrollTo({
        top: sectionTop,
        behavior: 'smooth',
      })
    }
  }

  useEffect(() => {
    if (activeTab === 'trust') {
      scrollToSection(trustRef)
    }
  }, [activeTab])

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-200 via-yellow-300 to-yellow-400 text-gray-800">
      <nav ref={navRef} className="bg-yellow-500 bg-opacity-90 p-4 sticky top-0 z-10 shadow-md">
        <div className="container mx-auto flex justify-center space-x-4">
          {[
            { name: 'Home', ref: homeRef },
            { name: 'Dev Explanation', ref: devExplanationRef },
            { name: 'Trust', ref: trustRef },
          ].map((tab) => (
            <button
              key={tab.name}
              className={`px-4 py-2 rounded-full transition-colors ${
                activeTab === tab.name.toLowerCase()
                  ? 'bg-yellow-600 text-white'
                  : 'bg-yellow-400 hover:bg-yellow-500'
              }`}
              onClick={() => {
                setActiveTab(tab.name.toLowerCase())
                scrollToSection(tab.ref)
              }}
            >
              {tab.name}
            </button>
          ))}
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        <section ref={homeRef} className="mb-24">
          <Image
            src="/images/1.jpg"
            alt="Meme Token Mascot"
            width={300}
            height={300}
            className="mx-auto rounded-full border-4 border-yellow-600 shadow-lg"
          />
          <p className="mt-4 text-xl text-center font-semibold">
            D stands for "뒤질만큼" (dying to), and H means "홀딩하면 졸업한다"
          </p>
        </section>

        <section ref={devExplanationRef} className="mb-12">
          <Image
            src="/images/2.jpg"
            alt="Meme Token Dev"
            width={300}
            height={300}
            className="mx-auto rounded-lg border-4 border-yellow-600 shadow-lg"
          />
          <p className="mt-4 text-lg text-center">
            The dev is too dumb and has no hands, so they can't do a rug pull!
          </p>
        </section>

        <section ref={trustRef} className="mb-24">
          <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
            <Image
              src="/images/4.jpg"
              alt="SOL-DH Liquidity Lock"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-2xl border-4 border-yellow-600"
            />
          </div>
          <p className="mt-4 text-xl text-center font-semibold">
            The dev has locked 53.85k SOL-DH in liquidity, betting their life on this meme coin!
          </p>
        </section>

        <section className="mb-24 text-center">
          <Image
            src="/images/3.jpg"
            alt="Take My Money Meme"
            width={300}
            height={300}
            className="mx-auto rounded-lg border-4 border-yellow-600 shadow-lg"
          />
          <div className="mt-4 space-y-4">
            <a
              href="https://x.com/DHKM95"
              className="block text-xl hover:underline text-yellow-800"
              target="_blank" // 새 탭에서 열기
              rel="noopener noreferrer" // 보안 강화
            >
              Follow Dev on Twitter
            </a>
            <a
              href="https://jup.ag/swap/SOL-Go8p6BheZd51xnr9xfHVUBuY5fmQ37gGAndoLfBDfM4V"
              className="inline-block bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:from-yellow-600 hover:to-yellow-700 transition-all transform hover:scale-105 shadow-lg"
              target="_blank" // 새 탭에서 열기
              rel="noopener noreferrer" // 보안 강화
            >
              Buy $DH
            </a>
            <p className="text-sm">
              Contract Address: Go8p6BheZd51xnr9xfHVUBuY5fmQ37gGAndoLfBDfM4V
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}

