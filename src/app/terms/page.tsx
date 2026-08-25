import LegalPageLayout from "@/components/legal/LegalPageLayout"
import Link from "next/link"

const sections = [
  { id: "introduction", title: "Introduction" },
  { id: "who-we-are", title: "Who We Are" },
  { id: "these-terms", title: "These Terms" },
  { id: "changes-to-these-terms", title: "Changes to These Terms" },
  { id: "our-products-and-services", title: "Our Products and Services" },
  { id: "orders", title: "Orders" },
  { id: "prices-and-payments", title: "Prices and Payments" },
  { id: "delivery-and-pickup", title: "Delivery and Pickup" },
  { id: "allergies-and-dietary-information", title: "Allergies and Dietary Information" },
  { id: "customer-responsibilities", title: "Customer Responsibilities" },
  { id: "promotions-and-discounts", title: "Promotions and Discounts" },
  { id: "intellectual-property", title: "Intellectual Property" },
  { id: "third-party-services", title: "Third-Party Services" },
  { id: "disclaimer", title: "Disclaimer" },
  { id: "limitation-of-liability", title: "Limitation of Liability" },
  { id: "termination-or-restriction-of-access", title: "Termination or Restriction of Access" },
  { id: "privacy", title: "Privacy" },
  { id: "governing-law", title: "Governing Law" },
  { id: "contact-us", title: "Contact Us" },
  { id: "final-terms", title: "Final Terms" },
]

export default function TermsPage() {
  return (
    <LegalPageLayout
      title="Terms and Conditions"
      lastUpdated="August 24, 2026"
      sections={sections}
    >
      {/* Introduction */}
      <section id="introduction">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Introduction
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Welcome to Magnificent Express.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
          These Terms and Conditions ("Terms") explain the rules and responsibilities that apply when you access or use the Magnificent Express website, place an order, contact us, request services, or otherwise interact with Magnificent Express.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
          Please read these Terms carefully.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
          By accessing or using our website or services, you agree to these Terms. If you do not agree with these Terms, please do not use our website or services.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
          If you are under the age of majority in your state or jurisdiction, please ask a parent or legal guardian to review these Terms with you before placing an order or using services that require a purchase.
        </p>
      </section>

      {/* Who We Are */}
      <section id="who-we-are">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Who We Are
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          "Magnificent Express," "we," "us," and "our" refer to Magnificent Express LLC and the services, products, website, and operations provided by our business.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
          "You" and "your" refer to a customer, website visitor, user, or other person interacting with Magnificent Express.
        </p>
      </section>

      {/* These Terms */}
      <section id="these-terms">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          These Terms
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          These Terms apply to your use of:
        </p>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 leading-relaxed mt-4 space-y-2">
          <li>The Magnificent Express website;</li>
          <li>Our food and menu services;</li>
          <li>Orders placed with Magnificent Express;</li>
          <li>Delivery or pickup services, where available;</li>
          <li>Customer support and communications; and</li>
          <li>Other products, services, features, or experiences that link to or reference these Terms.</li>
        </ul>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
          Additional terms may apply to certain products, promotions, delivery services, payment providers, or third-party platforms.
        </p>
      </section>

      {/* Changes to These Terms */}
      <section id="changes-to-these-terms">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Changes to These Terms
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          We may update these Terms from time to time.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
          When we make changes, we may update the "Last Updated" date at the top of this page. Changes may become effective when they are posted unless applicable law requires otherwise.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
          Your continued use of Magnificent Express after updated Terms become effective means that you accept the updated Terms.
        </p>
      </section>

      {/* Our Products and Services */}
      <section id="our-products-and-services">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Our Products and Services
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Magnificent Express may offer food, beverages, catering, pickup, delivery, specialty items, and other products or services.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
          Availability may vary based on factors including:
        </p>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 leading-relaxed mt-4 space-y-2">
          <li>Location;</li>
          <li>Business hours;</li>
          <li>Ingredient availability;</li>
          <li>Staffing;</li>
          <li>Delivery availability;</li>
          <li>Weather or local conditions; and</li>
          <li>Other operational circumstances.</li>
        </ul>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
          We may change, add, remove, or discontinue menu items, services, prices, promotions, or features when reasonably necessary.
        </p>
      </section>

      {/* Orders */}
      <section id="orders">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Orders
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          When you submit an order, you are requesting to purchase the selected products or services.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
          We may need to confirm, modify, delay, or cancel an order in certain situations, including when:
        </p>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 leading-relaxed mt-4 space-y-2">
          <li>A product is unavailable;</li>
          <li>Information provided with the order is incomplete or inaccurate;</li>
          <li>There is a pricing or technical error;</li>
          <li>We are unable to safely or reasonably fulfill the order; or</li>
          <li>Cancellation is otherwise required by law or operational circumstances.</li>
        </ul>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
          Submitting an order does not guarantee that every requested item will be available.
        </p>
      </section>

      {/* Prices and Payments */}
      <section id="prices-and-payments">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Prices and Payments
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Prices may be displayed on our website, menu, ordering platform, or another authorized location.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
          Prices, fees, taxes, delivery charges, and other applicable charges may change from time to time.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
          Before completing an order, you should review the total amount shown to you.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
          Payments may be processed by Magnificent Express or by authorized third-party payment providers. When you use a third-party payment service, that provider's terms and privacy practices may also apply.
        </p>
      </section>

      {/* Delivery and Pickup */}
      <section id="delivery-and-pickup">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Delivery and Pickup
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Delivery and pickup availability may depend on your location and the options available when you place your order.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
          Estimated preparation and delivery times are estimates only and are not guaranteed.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
          Delays may occur because of weather, traffic, demand, staffing, technical issues, or circumstances outside our reasonable control.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
          You are responsible for providing accurate pickup or delivery information.
        </p>
      </section>

      {/* Allergies and Dietary Information */}
      <section id="allergies-and-dietary-information">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Allergies and Dietary Information
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Some of our products may contain or come into contact with common allergens.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
          If you have a food allergy, dietary restriction, or other concern about ingredients, please contact Magnificent Express before placing your order.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
          Although we may provide ingredient information when available, we cannot guarantee that any product is completely free from a particular allergen unless we specifically state otherwise.
        </p>
      </section>

      {/* Customer Responsibilities */}
      <section id="customer-responsibilities">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Customer Responsibilities
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          You agree to provide accurate information when placing an order or contacting us.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
          You also agree not to:
        </p>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 leading-relaxed mt-4 space-y-2">
          <li>Use our services for unlawful purposes;</li>
          <li>Attempt to interfere with our website or systems;</li>
          <li>Submit fraudulent orders or payment information;</li>
          <li>Impersonate another person or organization;</li>
          <li>Abuse, threaten, or harass our employees or representatives; or</li>
          <li>Use our website in a way that could harm Magnificent Express, other customers, or our services.</li>
        </ul>
      </section>

      {/* Promotions and Discounts */}
      <section id="promotions-and-discounts">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Promotions and Discounts
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          We may occasionally offer promotions, discounts, coupons, or special offers.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
          Additional rules may apply to individual promotions.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
          Unless we state otherwise, promotions may:
        </p>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 leading-relaxed mt-4 space-y-2">
          <li>Have expiration dates;</li>
          <li>Be limited to specific products or locations;</li>
          <li>Be subject to availability;</li>
          <li>Not be combined with other offers; or</li>
          <li>Be changed or ended at any time where permitted by law.</li>
        </ul>
      </section>

      {/* Intellectual Property */}
      <section id="intellectual-property">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Intellectual Property
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          The Magnificent Express name, logo, website design, graphics, photographs, text, branding, and other content may be protected by intellectual property laws.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
          You may not copy, reproduce, distribute, modify, or commercially use our protected content without permission from Magnificent Express or the applicable rights holder.
        </p>
      </section>

      {/* Third-Party Services */}
      <section id="third-party-services">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Third-Party Services
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Our services may interact with third-party companies or platforms, including payment processors, delivery platforms, social media platforms, and technology providers.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
          We do not control third-party services. Their own terms, conditions, and privacy policies may apply to your use of those services.
        </p>
      </section>

      {/* Disclaimer */}
      <section id="disclaimer">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Disclaimer
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          We work to provide accurate information and reliable services. However, our website and services may occasionally contain errors, interruptions, outdated information, or inaccuracies.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
          To the extent permitted by applicable law, Magnificent Express does not guarantee that our website or services will always be available, uninterrupted, error-free, or suitable for every purpose.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
          Nothing in these Terms is intended to limit rights that cannot legally be limited under applicable law.
        </p>
      </section>

      {/* Limitation of Liability */}
      <section id="limitation-of-liability">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Limitation of Liability
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          To the extent permitted by applicable law, Magnificent Express will not be responsible for indirect, incidental, special, or consequential damages arising from your use of our website or services.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
          This section does not limit liability where such a limitation is prohibited by applicable law.
        </p>
      </section>

      {/* Termination or Restriction of Access */}
      <section id="termination-or-restriction-of-access">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Termination or Restriction of Access
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          We may suspend or restrict access to our website or services when reasonably necessary, including to protect our customers, employees, systems, business, or legal rights.
        </p>
      </section>

      {/* Privacy */}
      <section id="privacy">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Privacy
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Our collection and use of personal information is described in our Privacy Policy.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
          By using Magnificent Express, you acknowledge that your information may be handled as described in our Privacy Policy.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
          <Link href="/privacy" className="text-purple-600 dark:text-purple-400 hover:underline">
            View our Privacy Policy
          </Link>
        </p>
      </section>

      {/* Governing Law */}
      <section id="governing-law">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Governing Law
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          These Terms will be governed by applicable laws relevant to Magnificent Express and its operations, subject to any consumer protection laws that apply to you.
        </p>
      </section>

      {/* Contact Us */}
      <section id="contact-us">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Contact Us
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          If you have questions about these Terms or Magnificent Express, please contact us through the contact information provided on our website.
        </p>
      </section>

      {/* Final Terms */}
      <section id="final-terms">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Final Terms
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          If any part of these Terms is found to be invalid or unenforceable, the remaining parts will continue to apply to the extent permitted by law.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
          These Terms, together with any applicable additional policies or terms, form the agreement between you and Magnificent Express regarding your use of the services covered by these Terms.
        </p>
      </section>
    </LegalPageLayout>
  )
}