'use client'

import Link from 'next/link'
import { useState } from 'react'
import Image from "next/image";
import logo from "../assets/images/logo.png";

const LOGO_SIZE = 32; // small logo size

const navItems = [
  { label: 'HOME', href: '/' },
  { label: 'ABOUT', href: '/about' },
  { label: 'WORKS', href: '/works' },
  { label: 'MUSIC', href: '/music' },
  { label: 'CONTACT', href: '/contact' },
]

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeItem, setActiveItem] = useState('HOME');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setActiveItem(item.label)}
                className={`${activeItem === item.label ? 'text-black underline' : 'text-black'} text-sm font-bold uppercase tracking-wider text-black hover:underline transition-all`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Spinning Logo - Top Right */}
          <style>{`
            @keyframes spin-slow {
              from { transform: rotateY(0deg); }
              to { transform: rotateY(360deg); }
            }
          `}</style>
          <div className="hidden md:flex" style={{ animation: 'spin-slow 8s linear infinite' }}>
            <Image
              src={logo}
              alt="Logo"
              width={LOGO_SIZE}
              height={LOGO_SIZE}
              priority
              className="object-contain"
            />
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            className="md:hidden p-2 text-black"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
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

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="block px-3 py-2 text-sm font-bold uppercase tracking-wider text-black hover:bg-gray-100 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
