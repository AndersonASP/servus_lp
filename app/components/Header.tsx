'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from './ui/button'

/** 0 = topo sobre o hero, 1 = barra totalmente “sólida” */
function scrollToProgress(y: number): number {
  const start = 8
  const range = 96
  const t = (y - start) / range
  return Math.min(1, Math.max(0, t))
}

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3)
}

function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t
}

function lerpHex(from: [number, number, number], to: [number, number, number], t: number): string {
  const r = Math.round(lerp(from[0], to[0], t))
  const g = Math.round(lerp(from[1], to[1], t))
  const b = Math.round(lerp(from[2], to[2], t))
  return `rgb(${r},${g},${b})`
}

const WHITE: [number, number, number] = [255, 255, 255]
const MUTED: [number, number, number] = [75, 85, 99]
const DARK_TEXT: [number, number, number] = [34, 47, 117]
const CORAL: [number, number, number] = [255, 160, 122]

/** Logo em tom #222F75 (servus-dark) sobre fundo claro — mesmo filtro da barra antiga */
const LOGO_FILTER_ON_LIGHT =
  'brightness(0) saturate(100%) invert(13%) sepia(45%) saturate(2500%) hue-rotate(220deg) brightness(0.85) contrast(1.05)'

export function Header() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let ticking = false
    const update = () => {
      ticking = false
      setProgress(scrollToProgress(window.scrollY))
    }
    const onScroll = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(update)
      }
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const e = easeOutCubic(progress)
  const bgAlpha = lerp(0, 0.94, e)
  const blurPx = lerp(0, 14, e)
  const borderAlpha = lerp(0, 1, e)
  const shadowAlpha = lerp(0, 0.08, e)

  const navColor = lerpHex(WHITE, MUTED, e * 0.92)
  const navHover = lerpHex(WHITE, DARK_TEXT, e * 0.92)

  const btnBg = lerpHex(CORAL, DARK_TEXT, e)
  const btnFg = lerpHex(DARK_TEXT, WHITE, e)
  const btnHover = lerpHex([255, 140, 105], [36, 50, 125], e)

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 will-change-[background-color]"
      style={{
        backgroundColor: `rgba(255, 255, 255, ${bgAlpha})`,
        backdropFilter: blurPx > 0.5 ? `saturate(1.15) blur(${blurPx}px)` : 'none',
        WebkitBackdropFilter: blurPx > 0.5 ? `saturate(1.15) blur(${blurPx}px)` : 'none',
        borderBottom: `1px solid rgba(229, 231, 235, ${borderAlpha * 0.85})`,
        boxShadow: e > 0.02 ? `0 1px ${12 * e}px rgba(34, 47, 117, ${shadowAlpha})` : 'none',
      }}
    >
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-[4.25rem]">
          <Link href="/" className="flex items-center hover:opacity-95 transition-opacity duration-200" aria-label="Servus - Página inicial">
            <div className="relative h-8 w-[140px] shrink-0">
              <div
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                style={{
                  opacity: 1 - e,
                  filter: 'brightness(0) invert(1)',
                }}
                aria-hidden
              >
                <Image src="/logo-servus.svg" alt="" width={140} height={30} className="h-8 w-auto" priority unoptimized />
              </div>
              <div
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                style={{
                  opacity: e,
                  filter: LOGO_FILTER_ON_LIGHT,
                }}
                aria-hidden
              >
                <Image src="/logo-servus.svg" alt="" width={140} height={30} className="h-8 w-auto" unoptimized />
              </div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="#produto"
              className="text-sm font-medium transition-colors duration-200 ease-out"
              style={{ color: navColor }}
              onMouseEnter={(ev) => {
                ev.currentTarget.style.color = navHover
              }}
              onMouseLeave={(ev) => {
                ev.currentTarget.style.color = navColor
              }}
            >
              Produto
            </Link>
            <Link
              href="#recursos"
              className="text-sm font-medium transition-colors duration-200 ease-out"
              style={{ color: navColor }}
              onMouseEnter={(ev) => {
                ev.currentTarget.style.color = navHover
              }}
              onMouseLeave={(ev) => {
                ev.currentTarget.style.color = navColor
              }}
            >
              Recursos
            </Link>
            <Link
              href="#pioneiros"
              className="text-sm font-medium transition-colors duration-200 ease-out"
              style={{ color: navColor }}
              onMouseEnter={(ev) => {
                ev.currentTarget.style.color = navHover
              }}
              onMouseLeave={(ev) => {
                ev.currentTarget.style.color = navColor
              }}
            >
              Pioneiros
            </Link>
            <Link
              href="#faq"
              className="text-sm font-medium transition-colors duration-200 ease-out"
              style={{ color: navColor }}
              onMouseEnter={(ev) => {
                ev.currentTarget.style.color = navHover
              }}
              onMouseLeave={(ev) => {
                ev.currentTarget.style.color = navColor
              }}
            >
              FAQ
            </Link>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <span
              className="text-sm hidden sm:inline px-3 py-2 rounded-md cursor-default transition-colors duration-200 ease-out"
              style={{ color: lerpHex([255, 255, 255], MUTED, e * 0.9), opacity: lerp(0.88, 1, e) }}
            >
              Login em breve
            </span>
            <Button
              type="button"
              className="text-sm font-semibold rounded-lg border-0 shadow-none transition-[background-color,color] duration-200 ease-out"
              style={{
                backgroundColor: btnBg,
                color: btnFg,
              }}
              onMouseEnter={(ev) => {
                ev.currentTarget.style.backgroundColor = btnHover
              }}
              onMouseLeave={(ev) => {
                ev.currentTarget.style.backgroundColor = btnBg
                ev.currentTarget.style.color = btnFg
              }}
              onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Lista pioneiros
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
