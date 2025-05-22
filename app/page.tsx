"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="bg-white shadow-sm fixed w-full z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="Turkish Club Logo"
                width={40}
                height={40}
                className="rounded"
              />
              <span className="ml-2 text-xl font-bold text-[#C1392B]">Turkish Club</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#about" className="text-gray-700 hover:text-[#C1392B] transition">
                Hakkımızda
              </Link>
              <Link href="#events" className="text-gray-700 hover:text-[#C1392B] transition">
                Etkinlikler
              </Link>
              <Link href="#faq" className="text-gray-700 hover:text-[#C1392B] transition">
                SSS
              </Link>
              <Link href="#contact" className="text-gray-700 hover:text-[#C1392B] transition">
                İletişim
              </Link>
              <button className="bg-[#C1392B] text-white px-4 py-2 rounded-full hover:bg-opacity-90 transition">
                Üye Ol
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700 hover:text-[#C1392B] transition"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 space-y-4">
              <Link
                href="#about"
                className="block text-gray-700 hover:text-[#C1392B] transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Hakkımızda
              </Link>
              <Link
                href="#events"
                className="block text-gray-700 hover:text-[#C1392B] transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Etkinlikler
              </Link>
              <Link
                href="#faq"
                className="block text-gray-700 hover:text-[#C1392B] transition"
                onClick={() => setIsMenuOpen(false)}
              >
                SSS
              </Link>
              <Link
                href="#contact"
                className="block text-gray-700 hover:text-[#C1392B] transition"
                onClick={() => setIsMenuOpen(false)}
              >
                İletişim
              </Link>
              <button className="w-full bg-[#C1392B] text-white px-4 py-2 rounded-full hover:bg-opacity-90 transition">
                Üye Ol
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Add padding to account for fixed navbar */}
      <div className="pt-16">
        {/* Hero Section */}
        <section className="bg-[#C1392B] text-white py-16 px-4 text-center">
          <div className="container mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Turkish Club
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Münih Türk Öğrenci Topluluğu
            </p>
            <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition">
              Üye Ol
            </button>
          </div>
        </section>

        {/* Event Section */}
        <section className="py-16 px-4" id="events">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative aspect-[3/4] w-full">
                <Image
                  src="/event-poster.png"
                  alt="19 Mayıs Akşamı Kuruluş Kokteyli"
                  fill
                  className="object-cover rounded-lg"
                  priority
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4">19 Mayıs Akşamı</h2>
                <h3 className="text-2xl mb-6">Kuruluş Kokteyli&apos;ne Katıl</h3>
                <button className="bg-[#C1392B] text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition">
                  Etkinliğe Katıl
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Chat Preview Section */}
        <section className="bg-gray-50 py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto">
              <h3 className="text-xl font-semibold mb-4">
                Türk Kulübü&apos;nde Ne Görmek İstersiniz?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Image
                    src="/avatar1.jpg"
                    alt="User Avatar"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div className="bg-gray-100 rounded-lg p-3 flex-1">
                    <p className="text-sm">Aktiviteler hakkında daha fazla bilgi almak istiyorum.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Image
                    src="/avatar2.jpg"
                    alt="User Avatar"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div className="bg-gray-100 rounded-lg p-3 flex-1">
                    <p className="text-sm">En son etkinlik ne zaman olacak?</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4" id="faq">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold mb-8 text-center">FAQ</h2>
            <div className="space-y-4">
              <details className="bg-white shadow rounded-lg p-4">
                <summary className="font-medium cursor-pointer">Turkish Club Nedir?</summary>
                <p className="mt-2 text-gray-600">Answer goes here</p>
              </details>
              <details className="bg-white shadow rounded-lg p-4">
                <summary className="font-medium cursor-pointer">Kulüp üyeliği ücreti ne kadar?</summary>
                <p className="mt-2 text-gray-600">Answer goes here</p>
              </details>
              <details className="bg-white shadow rounded-lg p-4">
                <summary className="font-medium cursor-pointer">Ne tür etkinlikler düzenliyorsunuz?</summary>
                <p className="mt-2 text-gray-600">Answer goes here</p>
              </details>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#C1392B] text-white py-8 px-4" id="contact">
          <div className="container mx-auto text-center">
            <p>© Turkish Club</p>
            <div className="mt-4 flex justify-center items-center gap-4">
              <a href="https://instagram.com" className="">
                <Image
                  src="/instagram-icon.png"
                  alt="Instagram"
                  width={24}
                  height={24}
                  className="bg-transparent"
                />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
