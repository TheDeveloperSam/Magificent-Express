import LegalPageLayout from "@/components/legal/LegalPageLayout"

const sections = [
  { id: "introduction", title: "Introduction" },
  { id: "what-does-this-privacy-policy-cover", title: "What Does This Privacy Policy Cover?" },
  { id: "information-we-may-collect", title: "Information We May Collect" },
  { id: "how-we-use-information", title: "How We Use Information" },
  { id: "how-we-may-share-information", title: "How We May Share Information" },
  { id: "payment-information", title: "Payment Information" },
  { id: "cookies-and-similar-technologies", title: "Cookies and Similar Technologies" },
  { id: "how-we-protect-information", title: "How We Protect Information" },
  { id: "how-long-we-keep-information", title: "How Long We Keep Information" },
  { id: "your-privacy-choices-and-rights", title: "Your Privacy Choices and Rights" },
  { id: "childrens-privacy", title: "Children's Privacy" },
  { id: "third-party-websites-and-services", title: "Third-Party Websites and Services" },
  { id: "changes-to-this-privacy-policy", title: "Changes to This Privacy Policy" },
  { id: "contact-us", title: "Contact Us" },
]

export default function PrivacyPage() {
  return (
    <LegalPageLayout
      title="Privacy Policy"
      lastUpdated="August 24, 2026"
      sections={sections}
    >
      {/* Introduction */}
      <section id="introduction">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Introduction
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Magnificent Express LLC ("Magnificent Express," "we," "us," or "our") respects your privacy and is committed to handling your personal information responsibly.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
          This Privacy Policy explains how we may collect, use, store, protect, and share information when you visit our website, place an order, contact us, or otherwise interact with Magnificent Express.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
          Please read this Privacy Policy carefully.
        </p>
      </section>

      {/* What Does This Privacy Policy Cover? */}
      <section id="what-does-this-privacy-policy-cover">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          What Does This Privacy Policy Cover?
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          This Privacy Policy applies to information collected through or in connection with:
        </p>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 leading-relaxed mt-4 space-y-2">
          <li>The Magnificent Express website;</li>
          <li>Food orders and customer requests;</li>
          <li>Pickup and delivery services;</li>
          <li>Customer support;</li>
          <li>Promotions and communications;</li>
          <li>Forms or other features we provide; and</li>
          <li>Other Magnificent Express services that link to this Privacy Policy.</li>
        </ul>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
          Additional privacy notices may apply when you use certain third-party services or platforms.
        </p>
      </section>

      {/* Information We May Collect */}
      <section id="information-we-may-collect">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Information We May Collect
        </h2>
        
        <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-3 mt-6">
          Information You Provide to Us
        </h3>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          You may provide information when you place an order, contact us, complete a form, sign up for communications, or otherwise interact with us.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
          This information may include:
        </p>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 leading-relaxed mt-4 space-y-2">
          <li>Your name;</li>
          <li>Email address;</li>
          <li>Phone number;</li>
          <li>Delivery or pickup information;</li>
          <li>Order details;</li>
          <li>Messages or questions you send us; and</li>
          <li>Other information you choose to provide.</li>
        </ul>

        <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-3 mt-6">
          Information Collected Automatically
        </h3>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          When you use our website, certain information may be collected automatically depending on the technologies and services used by the website.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
          This may include:
        </p>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 leading-relaxed mt-4 space-y-2">
          <li>Device and browser information;</li>
          <li>IP address;</li>
          <li>Pages or features you access;</li>
          <li>Approximate location derived from technical information;</li>
          <li>Website activity and usage information;</li>
          <li>Cookies or similar technologies; and</li>
          <li>Technical logs and information used to maintain security and functionality.</li>
        </ul>
      </section>

      {/* How We Use Information */}
      <section id="how-we-use-information">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          How We Use Information
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          We may use information we collect to:
        </p>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 leading-relaxed mt-4 space-y-2">
          <li>Process and manage orders;</li>
          <li>Provide food, pickup, delivery, and customer services;</li>
          <li>Communicate with you about your order or account;</li>
          <li>Respond to questions and support requests;</li>
          <li>Improve our website, products, and services;</li>
          <li>Maintain the security and operation of our services;</li>
          <li>Prevent fraud, abuse, or unauthorized activity;</li>
          <li>Comply with applicable legal obligations; and</li>
          <li>Carry out other purposes that we explain to you or obtain permission for when required.</li>
        </ul>
      </section>

      {/* How We May Share Information */}
      <section id="how-we-may-share-information">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          How We May Share Information
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          We do not share your personal information unnecessarily.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
          Depending on how our services operate, we may disclose information to:
        </p>

        <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-3 mt-6">
          Service Providers
        </h3>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Companies that help us operate our business, website, payments, communications, technology, or other services.
        </p>

        <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-3 mt-6">
          Delivery or Ordering Partners
        </h3>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Where necessary to process, prepare, fulfill, deliver, or support your order.
        </p>

        <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-3 mt-6">
          Legal and Safety Authorities
        </h3>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          When we reasonably believe disclosure is necessary to comply with applicable law, respond to a valid legal request, protect safety, prevent fraud, or protect our rights and property.
        </p>

        <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-3 mt-6">
          Business Changes
        </h3>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          In connection with a merger, acquisition, restructuring, sale, or transfer of all or part of our business, where permitted by applicable law.
        </p>

        <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-3 mt-6">
          With Your Permission
        </h3>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          When you ask or authorize us to share information.
        </p>
      </section>

      {/* Payment Information */}
      <section id="payment-information">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Payment Information
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Payments may be processed by third-party payment providers or ordering platforms.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
          Magnificent Express may not directly store complete payment card information when a secure third-party processor handles the payment.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
          The privacy practices of payment providers are governed by their applicable privacy policies and terms.
        </p>
      </section>

      {/* Cookies and Similar Technologies */}
      <section id="cookies-and-similar-technologies">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Cookies and Similar Technologies
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Our website or service providers may use cookies or similar technologies.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
          These technologies may help us:
        </p>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 leading-relaxed mt-4 space-y-2">
          <li>Remember preferences;</li>
          <li>Keep our services functioning properly;</li>
          <li>Understand website usage;</li>
          <li>Improve performance;</li>
          <li>Protect against security problems; and</li>
          <li>Provide certain website features.</li>
        </ul>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
          You may be able to control certain cookies through your browser or device settings. Please understand that disabling certain technologies may affect how some website features work.
        </p>
      </section>

      {/* How We Protect Information */}
      <section id="how-we-protect-information">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          How We Protect Information
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          We use reasonable administrative, technical, and organizational measures designed to protect information.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
          However, no website, system, or method of electronic transmission can be guaranteed to be completely secure.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
          You should also take reasonable steps to protect your own information and devices.
        </p>
      </section>

      {/* How Long We Keep Information */}
      <section id="how-long-we-keep-information">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          How Long We Keep Information
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          We generally keep personal information only for as long as reasonably necessary for purposes such as:
        </p>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 leading-relaxed mt-4 space-y-2">
          <li>Providing our services;</li>
          <li>Completing orders and transactions;</li>
          <li>Maintaining business and financial records;</li>
          <li>Resolving disputes;</li>
          <li>Enforcing our policies;</li>
          <li>Maintaining security; and</li>
          <li>Complying with legal obligations.</li>
        </ul>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
          The amount of time we retain information may depend on the type of information and the reason we collected it.
        </p>
      </section>

      {/* Your Privacy Choices and Rights */}
      <section id="your-privacy-choices-and-rights">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Your Privacy Choices and Rights
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Depending on where you live and applicable law, you may have certain rights regarding your personal information.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
          These rights may include the ability to request:
        </p>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 leading-relaxed mt-4 space-y-2">
          <li>Access to certain personal information;</li>
          <li>Correction of inaccurate information;</li>
          <li>Deletion of certain personal information; or</li>
          <li>Information about how your personal information is processed.</li>
        </ul>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
          Some requests may be limited by legal requirements or legitimate business obligations.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
          To submit a privacy-related request, please contact Magnificent Express using the contact information provided on our website.
        </p>
      </section>

      {/* Children's Privacy */}
      <section id="childrens-privacy">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Children's Privacy
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Our services are not intended to knowingly collect personal information from children in violation of applicable law.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
          If you believe that a child has provided personal information to us in a way that should not have occurred, please contact us so we can review the situation and take appropriate action.
        </p>
      </section>

      {/* Third-Party Websites and Services */}
      <section id="third-party-websites-and-services">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Third-Party Websites and Services
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Our website or services may contain links to third-party websites, platforms, or services.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
          Magnificent Express does not control the privacy practices of those third parties. We encourage you to review their privacy policies before providing them with personal information.
        </p>
      </section>

      {/* Changes to This Privacy Policy */}
      <section id="changes-to-this-privacy-policy">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Changes to This Privacy Policy
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          We may update this Privacy Policy from time to time.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
          When we make changes, we may update the "Last Updated" date at the top of this page.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
          We encourage you to review this Privacy Policy periodically.
        </p>
      </section>

      {/* Contact Us */}
      <section id="contact-us">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Contact Us
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          If you have questions, concerns, or requests regarding this Privacy Policy or how Magnificent Express handles personal information, please contact us through the contact information provided on our website.
        </p>
      </section>
    </LegalPageLayout>
  )
}