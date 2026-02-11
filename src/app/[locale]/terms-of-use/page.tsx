import { setRequestLocale } from "next-intl/server";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/sections/Footer";

export default async function TermsOfUsePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Header />
      <main id="terms-top" className="min-h-screen bg-gradient-to-b from-white to-primary-50 pt-24 pb-16 scroll-smooth">
        <div className="mx-auto max-w-3xl px-4">
          <h1 className="mb-8 text-3xl font-bold text-primary-950 sm:text-4xl">
            Terms &amp; Conditions
          </h1>

          <div className="prose prose-primary max-w-none text-primary-700">
            <p className="text-primary-600 mb-6">
              Last updated: February 2026
            </p>

            <p className="mb-6">
              By downloading or using the app, these terms will automatically apply to you – you should make sure therefore that you read them carefully before using the app. You&apos;re not allowed to copy, or modify the app, any part of the app, or our trademarks in any way. You&apos;re not allowed to attempt to extract the source code of the app, and you also shouldn&apos;t try to translate the app into other languages, or make derivative versions. The app itself, and all the trademarks, copyright, database rights, and other intellectual property rights related to it, still belong to Oye Teknoloji Anonim Şirketi.
            </p>

            <p className="mb-6">
              Oye Teknoloji Anonim Şirketi is committed to ensuring that the app is as useful and efficient as possible. For that reason, we reserve the right to make changes to the app or to charge for its services, at any time and for any reason. We will never charge you for the app or its services without making it very clear to you exactly what you&apos;re paying for.
            </p>

            <p className="mb-6">
              The app stores and processes personal data that you have provided to us, in order to provide our Service. It&apos;s your responsibility to keep your phone and access to the app secure. We therefore recommend that you do not jailbreak or root your phone, which is the process of removing software restrictions and limitations imposed by the official operating system of your device. It could make your phone vulnerable to malware/viruses/malicious programs, compromise your phone&apos;s security features and it could mean that the app won&apos;t work properly or at all.
            </p>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-primary-900 mb-4">Third-Party Services</h2>
              <p className="mb-4">
                The app does use third-party services that declare their own Terms and Conditions.
              </p>
              <p className="mb-4">
                Link to Terms and Conditions of third-party service providers used by the app:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li><a href="https://policies.google.com/terms" className="text-gold-600 hover:text-gold-700 underline">Google Play Services</a></li>
                <li><a href="https://www.apple.com/legal/internet-services/itunes/" className="text-gold-600 hover:text-gold-700 underline">Apple App Store</a></li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-primary-900 mb-4">Limitations of Responsibility</h2>
              <p className="mb-4">
                You should be aware that there are certain things that Oye Teknoloji Anonim Şirketi will not take responsibility for. Certain functions of the app will require the app to have an active internet connection. The connection can be Wi-Fi, or provided by your mobile network provider, but Oye Teknoloji Anonim Şirketi cannot take responsibility for the app not working at full functionality if you don&apos;t have access to Wi-Fi, and you don&apos;t have any of your data allowance left.
              </p>
              <p className="mb-4">
                If you&apos;re using the app outside of an area with Wi-Fi, you should remember that your terms of the agreement with your mobile network provider will still apply. As a result, you may be charged by your mobile provider for the cost of data for the duration of the connection while accessing the app, or other third-party charges. In using the app, you&apos;re accepting responsibility for any such charges, including roaming data charges if you use the app outside of your home territory (i.e., region or country) without turning off data roaming. If you are not the bill payer for the device on which you&apos;re using the app, please be aware that we assume that you have received permission from the bill payer for using the app.
              </p>
              <p className="mb-4">
                Along the same lines, Oye Teknoloji Anonim Şirketi cannot always take responsibility for the way you use the app i.e., You need to make sure that your device stays charged – if it runs out of battery and you can&apos;t turn it on to avail the Service, Oye Teknoloji Anonim Şirketi cannot accept responsibility.
              </p>
              <p className="mb-4">
                With respect to Oye Teknoloji Anonim Şirketi&apos;s responsibility for your use of the app, when you&apos;re using the app, it&apos;s important to bear in mind that although we endeavor to ensure that it is updated and correct at all times, we do rely on third parties to provide information to us so that we can make it available to you. Oye Teknoloji Anonim Şirketi accepts no liability for any loss, direct or indirect, you experience as a result of relying wholly on this functionality of the app.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-primary-900 mb-4">App Updates and Termination</h2>
              <p className="mb-4">
                At some point, we may wish to update the app. The app is currently available on Android &amp; iOS – the requirements for both systems (and for any additional systems we decide to extend the availability of the app to) may change, and you&apos;ll need to download the updates if you want to keep using the app. Oye Teknoloji Anonim Şirketi does not promise that it will always update the app so that it is relevant to you and/or works with the Android &amp; iOS version that you have installed on your device. However, you promise to always accept updates to the application when offered to you. We may also wish to stop providing the app, and may terminate the use of it at any time without giving notice of termination to you. Unless we tell you otherwise, upon any termination, (a) the rights and licenses granted to you in these terms will end; (b) you must stop using the app, and (if needed) delete it from your device.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-primary-900 mb-4">Abuse Prevention and Rate Limiting</h2>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li><strong>Automatic Analysis and Interruption:</strong> Our systems continuously monitor and analyze user activity to prevent any form of misuse or abuse. If any usage patterns are detected that may harm or interfere with our applications, our system reserves the right to automatically restrict your access.</li>
                <li><strong>Purpose of Rate Limiting:</strong> The implementation of automatic rate limiting is crucial to ensure the stability and reliability of our underlying servers. By preventing abusive behaviors, we aim to provide a seamless and uninterrupted experience for all users.</li>
                <li><strong>Behavior Detection and Blocking:</strong> Our system is equipped with advanced algorithms designed to detect any suspicious or harmful behavior. If such behavior is identified, your interaction with the service may be temporarily blocked.</li>
                <li><strong>Temporary Blocks:</strong> Any access restrictions imposed by our system are temporary and will be lifted after a certain period. This ensures that genuine users can continue to use our services after the temporary block has been removed.</li>
                <li><strong>Compliance:</strong> By using our services, you agree to comply with these terms and acknowledge that the automatic rate limiting measures are in place to protect both our systems and the user community from potential abuse.</li>
              </ul>
              <p className="mb-4">
                For any concerns or if you believe your access has been incorrectly restricted, please contact our support team for further assistance.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-primary-900 mb-4">Changes to This Terms and Conditions</h2>
              <p className="mb-4">
                We may update our Terms and Conditions from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Terms and Conditions on this page.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-primary-900 mb-4">Contact Us</h2>
              <p className="mb-4">
                If you have any questions or suggestions about our Terms and Conditions, do not hesitate to contact us at:
              </p>
              <p className="font-semibold">
                info@oyeteknoloji.com
              </p>
            </section>

            <p className="text-sm text-primary-500 mt-8">
              This is the Terms &amp; Conditions of apps by Oye Teknoloji Anonim Şirketi, including the &quot;Islam & Deen Buddy&quot; app and its various &amp; next versions.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
