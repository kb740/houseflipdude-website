import { useEffect } from "react";

export default function PrivacyPolicy() {
  useEffect(() => {
    document.title = "Privacy Policy | HouseFlipDude - Bay Area Cash Home Buyers";
  }, []);

  return (
    <section className="py-16 lg:py-20 bg-background">
      <div className="container max-w-3xl">
        <h1 className="text-4xl font-extrabold text-foreground mb-2">Privacy Policy</h1>
        <p className="text-muted-foreground mb-10">Last updated: February 10, 2026</p>

        <div className="prose prose-lg max-w-none text-foreground/90 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-foreground">1. Introduction</h2>
            <p className="mt-2 leading-relaxed">
              HouseFlipDude ("we," "us," or "our") operates the website www.houseflipdude.com (the "Site"). 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when 
              you visit our Site or submit information through our forms. Please read this policy carefully. 
              By using the Site, you consent to the practices described in this policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground">2. Information We Collect</h2>
            <p className="mt-2 leading-relaxed">We may collect the following types of information:</p>
            <h3 className="text-xl font-semibold text-foreground mt-4">Personal Information You Provide</h3>
            <p className="mt-2 leading-relaxed">
              When you fill out our "Get Your Competing Offers" form or contact us, you may provide:
            </p>
            <ul className="list-disc pl-6 space-y-1 mt-2 text-foreground/80">
              <li>Your name</li>
              <li>Phone number</li>
              <li>Email address</li>
              <li>Property address</li>
              <li>Information about the property (condition, reason for selling, timeline)</li>
              <li>Whether you are a homeowner, realtor, or other</li>
              <li>How you heard about us</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-4">Automatically Collected Information</h3>
            <p className="mt-2 leading-relaxed">
              When you visit our Site, we may automatically collect certain information about your device, 
              including your IP address, browser type, operating system, referring URLs, and pages viewed. 
              This information is collected through cookies, web beacons, and similar technologies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground">3. How We Use Your Information</h2>
            <p className="mt-2 leading-relaxed">We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2 text-foreground/80">
              <li>Respond to your inquiries and provide you with competing offers from our investor network</li>
              <li>Communicate with you about your property and our services</li>
              <li>Share your property information with vetted investors in our network who may be interested in purchasing your property</li>
              <li>Improve our Site and services</li>
              <li>Send you marketing communications (with your consent)</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground">4. How We Share Your Information</h2>
            <p className="mt-2 leading-relaxed">
              We may share your personal information in the following circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2 text-foreground/80">
              <li>
                <strong className="text-foreground">With Our Investor Network:</strong> When you submit your property information, we share 
                it with vetted real estate investors in our network who may be interested in making an offer on 
                your property. This is a core part of our service — having multiple investors compete to buy 
                your home.
              </li>
              <li>
                <strong className="text-foreground">Service Providers:</strong> We may share information with third-party service providers 
                who assist us in operating our Site, conducting our business, or servicing you.
              </li>
              <li>
                <strong className="text-foreground">Legal Requirements:</strong> We may disclose your information where required by law, 
                regulation, or legal process.
              </li>
            </ul>
            <p className="mt-3 leading-relaxed">
              We do not sell your personal information to third parties for their own marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground">5. Cookies and Tracking Technologies</h2>
            <p className="mt-2 leading-relaxed">
              Our Site may use cookies and similar tracking technologies to enhance your browsing experience, 
              analyze Site traffic, and understand where our visitors come from. You can control cookies through 
              your browser settings. Disabling cookies may affect the functionality of certain parts of the Site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground">6. Data Security</h2>
            <p className="mt-2 leading-relaxed">
              We implement reasonable administrative, technical, and physical security measures to protect your 
              personal information. However, no method of transmission over the Internet or electronic storage 
              is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground">7. Your California Privacy Rights</h2>
            <p className="mt-2 leading-relaxed">
              If you are a California resident, you have certain rights under the California Consumer Privacy 
              Act (CCPA), including the right to:
            </p>
            <ul className="list-disc pl-6 space-y-1 mt-2 text-foreground/80">
              <li>Know what personal information we collect, use, and disclose</li>
              <li>Request deletion of your personal information</li>
              <li>Opt out of the sale of your personal information (we do not sell personal information)</li>
              <li>Non-discrimination for exercising your privacy rights</li>
            </ul>
            <p className="mt-3 leading-relaxed">
              To exercise these rights, contact us at kb@houseflipdude.com or call (415) 686-2846.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground">8. Third-Party Links</h2>
            <p className="mt-2 leading-relaxed">
              Our Site may contain links to third-party websites. We are not responsible for the privacy 
              practices or content of those websites. We encourage you to review the privacy policies of 
              any third-party sites you visit.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground">9. Children's Privacy</h2>
            <p className="mt-2 leading-relaxed">
              Our Site is not directed to individuals under the age of 18. We do not knowingly collect 
              personal information from children. If you believe we have collected information from a child, 
              please contact us immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground">10. Changes to This Policy</h2>
            <p className="mt-2 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by 
              posting the new policy on this page and updating the "Last updated" date. Your continued use 
              of the Site after any changes constitutes your acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground">11. Contact Us</h2>
            <p className="mt-2 leading-relaxed">
              If you have questions about this Privacy Policy, please contact us:
            </p>
            <ul className="list-none space-y-1 mt-2">
              <li><strong>Email:</strong> kb@houseflipdude.com</li>
              <li><strong>Phone:</strong> (415) 686-2846</li>
              <li><strong>Website:</strong> www.houseflipdude.com</li>
            </ul>
            <p className="mt-4 text-sm text-muted-foreground">
              HouseFlipDude is operated by Ironhorse Real Estate Investments, Inc. — Licensed California 
              Real Estate Broker, DRE# 01205925.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
