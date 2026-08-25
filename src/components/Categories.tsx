"use client"

import Link from "next/link"

type Category = {
  title: string
  image: string
}

const categories: Category[] = [
  {
    title: "Weddings",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Birthdays",
    image:
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Anniversaries",
    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Corporate Events",
    image:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Baby Showers",
    image:
      "https://images.unsplash.com/photo-1542038382126-77ae2819338d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Retirement Parties",
    image:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80",
  },
]

export default function Categories() {
  return (
    <section className="w-full bg-white dark:bg-surface px-4 py-16 md:py-24 pt-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold md:text-4xl text-gray-900 dark:text-white">
            Explore Our Categories
          </h2>

          <p className="mt-3 text-gray-600 dark:text-gray-400">
            Find the perfect option for your special occasion.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.title}
              href="/categories"
              className="group relative h-72 overflow-hidden rounded-2xl"
            >
              <img
                src={category.image}
                alt={category.title}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/40 transition group-hover:bg-black/50" />

              <div className="absolute inset-0 flex items-end p-6">
                <h3 className="text-2xl font-bold text-white">
                  {category.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/categories"
            className="inline-flex items-center justify-center rounded-full bg-black dark:bg-white px-6 py-3 font-medium text-white dark:text-black transition hover:bg-gray-800 dark:hover:bg-gray-200"
          >
            View All Categories
          </Link>
        </div>
      </div>
    </section>
  )
}