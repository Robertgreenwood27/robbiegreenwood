import React, { useEffect, useRef, useState } from 'react';
import useOnClickOutside from "./useOnClickOutside";
import Link from "next/link";
import AOS from 'aos';
import 'aos/dist/aos.css';

const navData = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export default function Header() {
  const [isModalOpen, setModalOpen] = useState(false);
  const ref = useRef(null);

  useOnClickOutside(ref, () => setModalOpen(false));

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="header-container fixed top-0 left-0 w-full z-50 text-zinc-300" style={{ backgroundColor: '#313131' }}>
      <div className="flex container justify-between items-center font-bold text-2xl px-5 py-6 text-zinc-300 min-w-full">
        <Link href="/" legacyBehavior>
        <div className="logo" style={{ width: '100%', maxWidth: '439px' }}>
          <div style={{ position: 'relative', width: '100%', paddingBottom: '18.45%' }}>
            <iframe
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                border: 'none',
                overflow: 'hidden', // This line hides the scrollbars
              }}
              src="https://rive.app/s/8FzjZj_Hi0ysXt2OWMM2rA/embed"
              allowFullScreen
              scrolling="no" // This attribute also helps in disabling scrollbars
            ></iframe>
          </div>
        </div>
        </Link>
        <nav className="hidden md:flex space-x-10 items-center">
          {navData.map((n, index) => {
            return (
              <Link key={n.name} href={n.href} passHref legacyBehavior>
                <a className="block hover:opacity-75" target={n.target || '_self'} data-aos="fade-down" data-aos-delay={`${index * 100}`}>
                  {n.name}
                </a>
              </Link>
            );
          })}
        </nav>
        <div className="md:hidden">
          <button onClick={() => setModalOpen(!isModalOpen)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
          {isModalOpen && (
            <div
              ref={ref}
              className="bg-zinc-900 border-[1px] border-red-100/20 fixed right-0 top-0 h-screen transition translate-x-[-1px] rounded-lg text-white w-full md:w-[24rem]"
              data-aos="fade-left"
            >
              <div className="pt-5 pb-6 px-5">
                <button
                  onClick={() => setModalOpen(!isModalOpen)}
                  className="-mr-2 float-right mb-3"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>

                <div className="mt-[5rem] relative">
                  <nav className="grid gap-y-8">
                    {navData.map((item, index) => (
                      <a
                        key={item.name}
                        href={item.href}
                        target={item.target || '_self'}
                        className="-m-3 p-3 flex items-center rounded-md hover:bg-black/20 border-[1px] border-gray-500/60"
                        data-aos="zoom-in"
                        data-aos-delay={`${index * 100}`}
                      >
                        <h1 className="my-3 ml-3 text-3xl font-bold">
                          {item.name}
                        </h1>
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}