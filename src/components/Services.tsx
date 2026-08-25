import Link from "next/link"

type Service = {
  title: string
  description: string
}

const services: Service[] = [
  {
    title: "Event Planning",
    description:
      "We help organize every detail of your event from start to finish.",
  },
  {
    title: "Food & Catering",
    description:
      "Choose from delicious food and catering options for your event.",
  },
  {
    title: "Event Decorations",
    description:
      "Make your event look beautiful with decorations designed for your occasion.",
  },
]

export default function Services() {
  return (
    <section className="w-full bg-white dark:bg-surface px-4 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold md:text-4xl text-gray-900 dark:text-white">
            Our Services
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-gray-600 dark:text-gray-400">
            Everything you need to help make your event special.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl bg-gray-50 dark:bg-gray-900 p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {service.title}
              </h3>

              <p className="mt-3 leading-relaxed text-gray-600 dark:text-gray-400">
                {service.description}
              </p>

              <Link
                href="/services"
                className="mt-6 inline-block font-medium underline text-gray-900 dark:text-white"
              >
                Learn more
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="inline-flex cursor-pointer items-center justify-center rounded-full bg-black dark:bg-white px-6 py-3 font-medium text-white dark:text-black transition hover:bg-gray-800 dark:hover:bg-gray-200"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}