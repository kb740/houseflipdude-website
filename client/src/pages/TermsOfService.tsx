import { useEffect } from "react";
import { useSEO } from "@/hooks/useSEO";

export default function TermsOfService() {
  useSEO({
    title: "Terms of Service | HouseFlipDude",
    description: "Read the HouseFlipDude terms of service for using our Bay Area house buying platform and competing investor network.",
  });

  useEffect(() => {
    document.title = "Terms of Service | HouseFlipDude - Bay Area Cash Home Buyers";
  }, []);

  return (
    <section className="py-16 lg:py-20 bg-background">
      <div className="container max-w-3xl">
        <h1 className="text-4xl font-extrabold text-foreground mb-2">Terms of Service</h1>
        <p className="text-muted-foreground mb-10">Last updated: February 10, 2026</p>

        <div className="prose prose-lg max-w-none text-foreground/90 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-foreground">1. Acceptance of Terms</h2>
            <p className="mt-2 leading-relaxed">
              By accessing and using www.houseflipdude.com (the "Site"), you accept and agree to be bound 
              by these Terms of Service. If you do not agree to these terms, please do not use the Site. 
              We reserve the right to modify these terms at any time, and your continued use of the Site 
              constitutes acceptance of any changes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground">2. Description of Services</h2>
            <p className="mt-2 leading-relaxed">
              HouseFlipDude operates an investor marketplace platform that connects homeowners looking to 
              sell their properties with a network of vetted real estate investors in the San Francisco Bay 
              Area and surrounding regions. Our service allows multiple investors to compete to purchase 
              your property, with the goal of obtaining the best possible price for the homeowner.
            </p>
            <p className="mt-2 leading-relaxed">
              HouseFlipDude is not a real estate brokerage acting on behalf of the homeowner in a traditional 
              listing capacity. We facilitate introductions between property owners and qualified investors. 
              Any purchase agreement is between the homeowner and the purchasing investor directly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground">3. No Obligation</h2>
            <p className="mt-2 leading-relaxed">
              Submitting your property information through our Site does not obligate you to sell your 
              property or accept any offer. You are free to accept or reject any offer at your sole 
              discretion. There are no fees charged to homeowners for using our service — all transaction 
              fees are paid by the purchasing investor.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground">4. Property Information</h2>
            <p className="mt-2 leading-relaxed">
              By submitting property information through our forms, you represent and warrant that:
            </p>
            <ul className="list-disc pl-6 space-y-1 mt-2 text-foreground/80">
              <li>You are the legal owner of the property, an authorized representative of the owner, or a licensed real estate agent with authority to submit the property information</li>
              <li>The information you provide is accurate and complete to the best of your knowledge</li>
              <li>You consent to us sharing the property information with investors in our network for the purpose of generating purchase offers</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground">5. No Guarantees</h2>
            <p className="mt-2 leading-relaxed">
              While we strive to connect homeowners with qualified investors quickly, we do not guarantee:
            </p>
            <ul className="list-disc pl-6 space-y-1 mt-2 text-foreground/80">
              <li>That you will receive any offers on your property</li>
              <li>Any specific purchase price or offer amount</li>
              <li>Any specific timeline for receiving offers</li>
              <li>That any transaction will close successfully</li>
            </ul>
            <p className="mt-3 leading-relaxed">
              Real estate transactions involve inherent risks and uncertainties. We recommend consulting 
              with legal and financial professionals before making any real estate decisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground">6. Intellectual Property</h2>
            <p className="mt-2 leading-relaxed">
              All content on this Site, including text, graphics, logos, images, videos, and software, is 
              the property of HouseFlipDude or its content suppliers and is protected by United States and 
              international copyright laws. You may not reproduce, distribute, modify, or create derivative 
              works from any content on this Site without our express written permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground">7. User Conduct</h2>
            <p className="mt-2 leading-relaxed">You agree not to:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2 text-foreground/80">
              <li>Submit false, misleading, or fraudulent property information</li>
              <li>Use the Site for any unlawful purpose</li>
              <li>Attempt to gain unauthorized access to any portion of the Site</li>
              <li>Interfere with or disrupt the Site or servers connected to the Site</li>
              <li>Use automated systems (bots, scrapers) to access the Site without our permission</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground">8. Disclaimer of Warranties</h2>
            <p className="mt-2 leading-relaxed">
              The Site and all content, services, and features are provided on an "as is" and "as available" 
              basis without warranties of any kind, either express or implied. We disclaim all warranties, 
              including but not limited to implied warranties of merchantability, fitness for a particular 
              purpose, and non-infringement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground">9. Limitation of Liability</h2>
            <p className="mt-2 leading-relaxed">
              To the fullest extent permitted by law, HouseFlipDude and its officers, directors, employees, 
              and agents shall not be liable for any indirect, incidental, special, consequential, or 
              punitive damages arising out of or related to your use of the Site or our services, including 
              but not limited to any real estate transaction facilitated through our platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground">10. Indemnification</h2>
            <p className="mt-2 leading-relaxed">
              You agree to indemnify and hold harmless HouseFlipDude, its officers, directors, employees, 
              and agents from any claims, damages, losses, liabilities, and expenses (including attorneys' 
              fees) arising out of your use of the Site, your violation of these Terms, or your violation 
              of any rights of a third party.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground">11. Governing Law</h2>
            <p className="mt-2 leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of the State of 
              California, without regard to its conflict of law provisions. Any disputes arising under 
              these Terms shall be resolved in the state or federal courts located in Contra Costa County, 
              California.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground">12. Real Estate Disclosures</h2>
            <p className="mt-2 leading-relaxed">
              HouseFlipDude is operated by Ironhorse Real Estate Investments, Inc., a Licensed California 
              Real Estate Broker (DRE# 01205925). All real estate transactions facilitated through our 
              platform are subject to applicable California real estate laws and regulations. Homeowners 
              are encouraged to seek independent legal counsel before entering into any purchase agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground">13. Contact Us</h2>
            <p className="mt-2 leading-relaxed">
              If you have questions about these Terms of Service, please contact us:
            </p>
            <ul className="list-none space-y-1 mt-2">
              <li><strong>Email:</strong> kb@houseflipdude.com</li>
              <li><strong>Phone:</strong> (925) 588-7804</li>
              <li><strong>Website:</strong> www.houseflipdude.com</li>
            </ul>
          </section>
        </div>
      </div>
    </section>
  );
}
