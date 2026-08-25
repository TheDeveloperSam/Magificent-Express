import Link from "next/link"

export default function Footer() {
  return (
    <footer className="mt-auto bg-white dark:bg-surface px-4 py-12 text-black dark:text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 md:grid-cols-3">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold">
            Magnificent Express
          </h2>

          <p className="mt-4 max-w-sm text-gray-600 dark:text-gray-400">
            Helping make your special occasions memorable with food, events,
            and services for every celebration.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold">Quick Links</h3>

          <ul className="mt-4 space-y-3 text-gray-600 dark:text-gray-400">
            <li>
              <Link href="/" className="transition hover:text-black dark:hover:text-white">
                Home
              </Link>
            </li>

            <li>
              <Link href="/categories" className="transition hover:text-black dark:hover:text-white">
                Categories
              </Link>
            </li>

            <li>
              <Link href="/services" className="transition hover:text-black dark:hover:text-white">
                Services
              </Link>
            </li>

            <li>
              <Link href="/contact" className="transition hover:text-black dark:hover:text-white">
                Contact
              </Link>
            </li>

            <li>
              <Link href="/terms" className="transition hover:text-black dark:hover:text-white">
                Terms
              </Link>
            </li>

            <li>
              <Link href="/privacy" className="transition hover:text-black dark:hover:text-white">
                Privacy
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold">Contact Us</h3>

          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Have questions? Get in touch with us.
          </p>

          <a
            href="mailto:YOUR_EMAIL_HERE"
            className="mt-4 inline-block text-black dark:text-white underline transition hover:text-gray-700 dark:hover:text-gray-300"
          >
            Contact Us
          </a>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-gray-200 dark:border-gray-800 pt-6 text-center text-sm text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} Magnificent Express. All rights reserved.
      </div>
    </footer>
  )
}
`11111111 `