import React from 'react';
import footLogo from '../../assets/pmp.png'
const Footer = () => {
    return (
        <>
         <footer className="bg-[#fbf9fc] text-[#2a0138]">
  {/* Top columns */}
  <nav
    aria-label="Footer"
    className="mx-auto max-w-[1200px] px-4 py-10 md:py-14"
  >
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 bg-white/0">
      {/* Col 1 */}
      <ul className="space-y-8 md:pr-10 md:border-r md:border-[#eadff2]">
        <li>
          <a
            href="#"
            className="text-2xl font-extrabold leading-none hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6a1b9a]/40 rounded"
          >
            Premier League
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-2xl font-extrabold leading-none hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6a1b9a]/40 rounded"
          >
            Fantasy
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-2xl font-extrabold leading-none hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6a1b9a]/40 rounded"
          >
            Matches
          </a>
        </li>
      </ul>

      {/* Col 2 */}
      <ul className="space-y-8 md:px-10 md:border-r md:border-[#eadff2]">
        <li>
          <a href="#" className="text-2xl font-extrabold leading-none hover:underline focus-visible:ring-2 focus-visible:ring-[#6a1b9a]/40 rounded">
            Table
          </a>
        </li>
        <li>
          <a href="#" className="text-2xl font-extrabold leading-none hover:underline focus-visible:ring-2 focus-visible:ring-[#6a1b9a]/40 rounded">
            Statistics
          </a>
        </li>
        <li>
          <a href="#" className="text-2xl font-extrabold leading-none hover:underline focus-visible:ring-2 focus-visible:ring-[#6a1b9a]/40 rounded">
            Latest News
          </a>
        </li>
      </ul>

      {/* Col 3 */}
      <ul className="space-y-8 md:pl-10">
        <li>
          <a href="#" className="text-2xl font-extrabold leading-none hover:underline focus-visible:ring-2 focus-visible:ring-[#6a1b9a]/40 rounded">
            Latest Video
          </a>
        </li>
        <li>
          <a href="#" className="text-2xl font-extrabold leading-none hover:underline focus-visible:ring-2 focus-visible:ring-[#6a1b9a]/40 rounded">
            Clubs
          </a>
        </li>
        <li>
          <a href="#" className="text-2xl font-extrabold leading-none hover:underline focus-visible:ring-2 focus-visible:ring-[#6a1b9a]/40 rounded">
            Players
          </a>
        </li>
      </ul>
    </div>
  </nav>

  {/* Thin divider */}
  <div className="border-t border-[#eadff2]" />

  {/* Bottom bar */}
  <div className="mx-auto max-w-[1200px] px-4 py-5 flex items-center justify-between gap-4">
    <div className="text-sm flex flex-wrap items-center gap-x-4 gap-y-2 text-[#2a0138]">
      <span className="font-semibold tracking-wide">© PREMIER LEAGUE 2025</span>
      <a href="#" className="hover:underline">Modern Slavery Statement</a>
      <span className="opacity-60">•</span>
      <a href="#" className="hover:underline">Equality, Diversity and Inclusion Standard</a>
      <span className="opacity-60">•</span>
      <a href="#" className="hover:underline">Terms of Use</a>
      <span className="opacity-60">•</span>
      <a href="#" className="hover:underline">Policies</a>
      <span className="opacity-60">•</span>
      <a href="#" className="hover:underline">Cookie Policy</a>
      <span className="opacity-60">•</span>
      <a href="#" className="hover:underline">Contact Us</a>
      <span className="opacity-60">•</span>
      <a href="#" className="hover:underline">Appearance</a>
      <span className="opacity-60">•</span>
      <a href="#" className="hover:underline">Back To Top</a>
    </div>

    {/* Right logo (replace src) */}
    <a href="#" className="shrink-0 inline-flex items-center gap-2">
      <img
        src={footLogo}  // <-- put your PL logo path here
        alt="Premier League"
        className="h-15 w-auto"
      />
    </a>
  </div>
</footer>

        </>
    );
};

export default Footer;