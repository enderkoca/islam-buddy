import { setRequestLocale } from "next-intl/server";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/sections/Footer";

export default async function PrivacyPolicyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Header />
      <main id="privacy-top" className="min-h-screen bg-gradient-to-b from-white to-primary-50 pt-24 pb-16 scroll-smooth">
        <div className="mx-auto max-w-3xl px-4">
          <h1 className="mb-8 text-3xl font-bold text-primary-950 sm:text-4xl">
            Privacy Policy
          </h1>

          <div className="prose prose-primary max-w-none text-primary-700">
            <p className="text-primary-600 mb-6">
              Last updated: February 2026
            </p>

            <p className="mb-6">
              This is the Privacy Policy of apps by Oye Teknoloji Anonim Şirketi and its various & next versions (hereinafter collectively referred to as &quot;us&quot;, &quot;we&quot;, or &quot;our&quot;) and is incorporated into and is subject to our Terms of Use. In this Privacy Policy, we refer to our products and services as the &quot;Service&quot;. Please read on to learn more about our data handling practices. Your use of the Service signifies that you agree with the terms of this Privacy Policy. If you do not agree with the terms of this Privacy Policy, please do not use the Service.
            </p>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-primary-900 mb-4">Information we collect</h2>
              <p className="mb-4">
                When you install the Service on your device and register, personally identifiable information about you may be collected during the download process for the Service (as requested during the download process) and when you register with us. For registration, you are required to provide your email address, city location, gender, and name, depending on the device(s) you are using on the Service. You may also provide personally identifiable information, but that is optional. When you log in using your Facebook account, we may collect additional information you make available to us (see &quot;Your User Profile&quot; below).
              </p>
              <p className="mb-4">
                In addition, when you install the Service on your device and register, you may be asked to allow us access to your address book. If you consent, we will have access to contact information in your address book on the device you use for the Service (names, numbers, emails, and Facebook IDs, but not notes or other personal information in your address book) and we will store them on our servers and use them to help you use the Service, for example, by synchronizing your contacts between different devices you may want to use with the Service.
              </p>
              <p className="mb-4">
                We may also collect and gather non-personally identifiable information, such as certain profile information including country of residence and preferences. In addition, we may collect and store information about your and others&apos; usage of and interaction with the Service and our websites, including matches, numbers of matches made by members, match durations, text messages, usage by geographies, device and connection information, IP address, device capability, bandwidth, statistics on page views, network type and traffic to and from our websites.
              </p>
              <p className="mb-4">
                Our applications allow you to share text messages, photos, screenshots, videos, and other communications in the application with other users, and if you choose to do so your text messages, photos, screenshots, videos, and other communications will be stored on our servers. In addition, if you choose to share these items with other users, we may not be able to remove them from our servers or make them unavailable to anyone you have shared them with. Sending and sharing text messages, photos, screenshots, videos, or other communications in the application is your decision. By choosing to share that information, you should understand that you may no longer be able to control how that information is used and that it may become publicly available (depending in part on your actions or the actions of others with whom you have shared the information). We are not responsible for any use or misuse of information you share.
              </p>
              <p className="mb-4">
                We may also collect and gather user contents (e.g., photos, screenshots, comments, and other materials) that you create on the Service. To complete a commerce transaction on shop, you will be requested to provide your payment information, including your credit card number, card expiration date, CVV code, and billing address. In that event, we will transmit your information securely directly to a third party vendor or merchant who will collect such information in order to process and fulfill your purchase. We do not process or store your payment information. However, we may store other information about your purchases made on the Service, which may include the merchant&apos;s name, the date, time, and amount of the transaction and other behavioral information.
              </p>
              <p className="mb-4">
                We also collect error-reporting information if the Service crashes or hangs up so that we can investigate the error and improve the stability of the Service for future releases. In general, these reports do not contain personally identifiable information, or only incidentally. As part of these error reports, we receive information about the type and version of your device, the device identifier, the time the error occurred, the feature being used and the state of the application when the error occurred. We do not use this information for any purpose other than investigating and fixing the error.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-primary-900 mb-4">Sharing of your information</h2>
              <p className="mb-4">
                We will not rent or sell your information to third parties without your consent, except as noted in this Privacy Policy.
              </p>

              <h3 className="text-lg font-semibold text-primary-900 mb-3">Parties with whom we may share your information:</h3>
              <p className="mb-4">
                We may share User Content and your information (including but not limited to, information from cookies, log files, device identifiers, location data, and usage data) with businesses that are legally part of the same group of companies that is part of, or that become part of that group (&quot;Affiliates&quot;). Affiliates may use this information to help provide, understand, and improve the Service (including by providing analytics) and Affiliates&apos; own services (including by providing you with better and more relevant experiences). But these Affiliates will honor the choices you make about who can see your contents.
              </p>
              <p className="mb-4">
                We also may share your information as well as information from tools like cookies, log files, and device identifiers and location data, with third-party organizations that help us provide the Service to you (&quot;Service Providers&quot;). Our Service Providers will be given access to your information as is reasonably necessary to provide the Service under reasonable confidentiality terms.
              </p>
              <p className="mb-4">
                We may also share aggregate or anonymous information with third parties, including advertisers and investors. For example, we may tell our advertisers the number of users our app receives. This information does not contain any personal or personally identifiable information and is used to develop content and services that we hope you will find of interest.
              </p>
              <p className="mb-4">
                We may remove parts of data that can identify you and share anonymized data with other parties. We may also combine your information with other information in a way that it is no longer associated with you and share that aggregated information.
              </p>

              <h3 className="text-lg font-semibold text-primary-900 mb-3">Parties with whom you may choose to share your User Content:</h3>
              <p className="mb-4">
                Any information or content that you voluntarily disclose for posting to the Service, such as User Content, becomes available to the public. Once you have shared User Content or made it public, that User Content may be re-shared by others.
              </p>
              <p className="mb-4">
                If you remove information and contents that you created on the Service, copies may remain viewable in cached and archived pages of the Service, or if other Users or third parties have copied or saved that information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-primary-900 mb-4">How we use information we collect</h2>
              <p className="mb-4">We use or may disclose your personal information only as follows:</p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>To verify your identity;</li>
                <li>To connect you with others as enabled by the Service;</li>
                <li>To share your Profile with others on the Service;</li>
                <li>To allow your use of certain features of the Service that may be offered from time to time;</li>
                <li>To show you the names of persons you communicate with and to show your name to persons you communicate with on the Service;</li>
                <li>To deliver to you any administrative notices, alerts and communications relevant to your use of the Service;</li>
                <li>To provide you with relevant content that you requested, using information that you allow us to collect from you or that you provide to a social media provider with which your account is connected;</li>
                <li>To contact you via email, SMS, or otherwise for the purpose of informing you about new products, services, or promotions offered by us;</li>
                <li>For internal operations, including troubleshooting problems, data analysis, testing, research, improvements to the Service, detecting and protecting against error, fraud, or other illegal activity;</li>
                <li>When we have a good faith belief that the law, any legal process, law enforcement, national security, or issue of public importance requires disclosure;</li>
                <li>To protect and defend our rights or property (including to enforce our Terms of Use and other agreements); or</li>
                <li>In connection with a corporate transaction involving us, such as the purchase or sale of a business unit, an acquisition, merger, sale of assets, or other similar event.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-primary-900 mb-4">Face Data Collection and Usage</h2>
              <p className="mb-4">
                If the Service includes features that use face data, we provide the following explicit disclosures:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>We do not retain face data after its intended purpose is fulfilled.</li>
                <li>Face data is collected and processed solely for providing the specific functionality (e.g., generating AI-enhanced features). We do not use face data for any other purpose.</li>
                <li>Face data is stored temporarily for a duration necessary to complete its processing and is securely deleted immediately afterward. We do not store face data indefinitely.</li>
                <li>Face data is not shared with third parties unless explicitly stated and with your consent.</li>
                <li>Third parties with whom face data may be shared do not store it beyond the processing time required for the requested functionality.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-primary-900 mb-4">Your User Profile</h2>
              <p className="mb-4">
                The information you enter into your user profile (your &quot;Profile&quot;) may be shared with your contacts. You control your Profile and you can access and modify your Profile from the application at any time. In addition, if you register using your Facebook account (e.g., Facebook Connect), we may store your Facebook ID and corresponding token on our servers and, if you give us your express consent, we will have access to and may collect certain information that you make available on Facebook (for example, your first and last names, email address, profile picture, your friend lists, and birthdays). Your Profile is available to other users of the Service who are connected to you on our applications. You may also &quot;block out&quot; specific contacts with whom you do not want to share your Profile. You may also deactivate your account at any time. If you deactivate your account, your Profile information will no longer be viewable.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-primary-900 mb-4">Security</h2>
              <p className="mb-4">
                We have implemented administrative and technical safeguards designed to protect your information. For example, we use industry-standard Secure Socket Layer (SSL) encryption technology to safeguard your credit card data when in transit and on PCI-compliant Payment Processors&apos; servers. We also use industry-standard SSL encryption technology to safeguard your registration data. Although we believe the measures we have implemented reduce the likelihood of security problems, we cannot guarantee the security of your information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-primary-900 mb-4">Controlling your personal information</h2>
              <p className="mb-4">
                Other users may be able to identify you or associate you with your account if you include personal information in your Profile. You can reduce the risk of being personally identified by using the Service pseudonymously, though doing so could detract from the credibility of your contributions to the Service.
              </p>
              <p className="mb-4">
                If you provide us with your email address, we will use it to respond to your inquiry. By providing us your email address, you are agreeing to this use. If you do not want us to contact you, do not provide us with your email address.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-primary-900 mb-4">Your Choices About Your Information</h2>
              <p className="mb-4">You have several choices regarding the use of information on our Services:</p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li><strong>Email Communications:</strong> We may periodically send you free newsletters and emails that directly promote our Services. When you receive such promotional communications from us, you will have the opportunity to &quot;opt-out&quot;. We do need to send you certain communications regarding the Services and you will not be able to opt out of those communications (e.g., communications regarding updates to our Terms of Use or this Privacy Policy).</li>
                <li><strong>De-linking SNS:</strong> If you link your account on the Service with an account on another SNS, you can manage the information we receive from such SNS as part of your Profile. You can also de-link the SNS account. Please note that if you de-link the SNS account, certain features of the Service may no longer be available to you.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-primary-900 mb-4">Children</h2>
              <p className="mb-4">
                The Children&apos;s Online Privacy Protection Act (&quot;COPPA&quot;) protects the online privacy of children under 13 years of age. We do not knowingly collect or solicit personal information from or about children under 13; if you are a child under 13, please do not attempt to register for or otherwise use the Services or send us any personal information. If we learn we have collected personal information from a child under 13, we will delete that information as quickly as possible. If you believe that a child under 13 may have provided us personal information, please contact us at info@oyeteknoloji.com.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-primary-900 mb-4">Merger, Sale, or Bankruptcy</h2>
              <p className="mb-4">
                In the event that we are acquired by or merged with a third-party entity, we reserve the right to transfer or assign the information we have collected from users as part of such merger, acquisition, sale, or other change of control. In the unlikely event of our bankruptcy, insolvency, reorganization, receivership, or assignment for the benefit of creditors, or the application of laws or equitable principles affecting creditors&apos; rights generally, we may not be able to control how your personal information is treated, transferred, or used.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-primary-900 mb-4">Changes and updates to this Privacy Policy</h2>
              <p className="mb-4">
                We may occasionally update this Privacy Policy. When we do, we will also revise the &quot;last updated&quot; date at the top of the Privacy Policy. Your continued use of the Service after such changes will be subject to the then-current Privacy Policy. We encourage you to periodically review this Privacy Policy to stay informed about how we are protecting the personally identifiable information we collect. Your continued use of the Service constitutes your agreement to this Privacy Policy and any updates.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-primary-900 mb-4">Contacting us</h2>
              <p className="mb-4">
                If you have any questions, comments, or concerns about this Privacy Policy, please contact us at:
              </p>
              <p className="font-semibold">
                info@oyeteknoloji.com
              </p>
            </section>

            <p className="text-sm text-primary-500 mt-8">
              This is the Privacy Policy of apps by Oye Teknoloji Anonim Şirketi, including the &quot;Islam & Deen Buddy&quot; app and its various & next versions.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
