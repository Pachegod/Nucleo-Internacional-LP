import type { LegalDocuments } from "./types";

// English translation of the PT-BR legal texts (the Portuguese version prevails).
export const legalEn: LegalDocuments = ({ entity, email, paths }) => ({
  privacy: {
    title: "Privacy Policy",
    summary:
      "How Núcleo Polaris collects, uses, shares and protects the personal data of visitors to this website and of those who contact us about an institutional partnership, under Brazil's General Data Protection Law (Law No. 13,709/2018 — LGPD).",
    sections: [
      {
        title: "1. Data controller",
        paragraphs: [
          `The controller of the personal data processed on this website is ${entity.name}, Brazilian company registration (CNPJ) No. ${entity.cnpj}, headquartered at ${entity.address}, part of Grupo Nota Máxima and responsible for Núcleo Polaris (“Núcleo”, “we”).`,
          `Data Protection Officer (DPO): reachable at ${email}.`,
        ],
      },
      {
        title: "2. Who this policy applies to",
        paragraphs: [
          "This is an institutional website aimed at educational institutions (high schools, universities, language schools, academies and short-term programs). This policy applies to website visitors and to people who fill in the partnership form on behalf of an institution.",
          "This website is not intended for children or teenagers and does not knowingly collect student data.",
        ],
      },
      {
        title: "3. Data we collect",
        list: [
          "Partnership form: name, job title, institution, type of institution, country/city, email, WhatsApp/phone and the language of the page where the form was filled in.",
          "Conversations: the content of messages you send us by WhatsApp or email.",
          "Technical browsing data: IP address, date and time of access, browser, device and pages visited, automatically logged by our hosting provider.",
          `Cookies: as described in the [Cookie Policy](${paths.cookies}).`,
        ],
        after: ["We do not request sensitive personal data. Please do not send it through the form or in conversations."],
      },
      {
        title: "4. Why we use your data and on what legal basis",
        table: {
          head: ["Purpose", "Data", "Legal basis (LGPD)"],
          rows: [
            [
              "Responding to your interest and conducting partnership discussions",
              "Form and conversations",
              "Steps prior to entering into a contract (art. 7, V) and legitimate interest (art. 7, IX)",
            ],
            [
              "Keeping a record of our relationship with partner and prospective partner institutions",
              "Form and conversations",
              "Legitimate interest (art. 7, IX)",
            ],
            [
              "Sending institutional updates about Núcleo programs, events and news",
              "Name, email and WhatsApp",
              "Legitimate interest (art. 7, IX), with the option to unsubscribe at any time",
            ],
            [
              "Keeping the website secure and retaining access logs",
              "Technical browsing data",
              "Compliance with a legal obligation (art. 7, II; Brazilian Internet Act, art. 15)",
            ],
            [
              "Remembering your language and cookie choices",
              "Essential cookies",
              "Legitimate interest (art. 7, IX)",
            ],
            [
              "Measuring website and campaign audiences, if these features are enabled",
              "Analytics and marketing cookies",
              "Consent (art. 7, I), which you may withdraw at any time",
            ],
          ],
        },
      },
      {
        title: "5. Who we share data with",
        paragraphs: ["We do not sell personal data. We only share what is necessary with:"],
        list: [
          "Technology providers that operate the website on our behalf, such as hosting (Vercel Inc.) and cloud database (Neon Inc.).",
          "WhatsApp (Meta Platforms), when you choose to continue the conversation there. From that point on, WhatsApp's own terms and privacy policy also apply.",
          "The Núcleo team and the Grupo Nota Máxima companies involved in handling your request, always under a duty of confidentiality.",
          "Public authorities, when required by law or court order.",
        ],
      },
      {
        title: "6. International transfers",
        paragraphs: [
          "Some of our providers store or process data outside Brazil, particularly in the United States. Such transfers follow article 33 of the LGPD, with providers that adopt contractual clauses and security measures consistent with Brazilian law.",
        ],
      },
      {
        title: "7. How long we keep data",
        list: [
          "Form and conversation data: for as long as discussions or the partnership last, and for up to 2 years after the last contact.",
          "Access logs: 6 months, as required by the Brazilian Internet Act.",
          `Cookies: for the periods listed in the [Cookie Policy](${paths.cookies}).`,
        ],
        after: [
          "After these periods, data is deleted or anonymized, unless we must keep it to comply with a legal obligation or to exercise rights in legal proceedings.",
        ],
      },
      {
        title: "8. Your rights",
        paragraphs: ["Under article 18 of the LGPD, you may request at any time:"],
        list: [
          "confirmation that we process your data, and access to it;",
          "correction of incomplete, inaccurate or outdated data;",
          "anonymization, blocking or deletion of unnecessary or excessive data, or data processed unlawfully;",
          "portability of your data to another provider;",
          "information about who we share your data with;",
          "withdrawal of consent and deletion of data processed on that basis;",
          "objection to processing based on legitimate interest.",
        ],
        after: [
          `To exercise your rights, write to ${email}. We may ask for information to confirm your identity and will reply within 15 days. You may also file a complaint with the Brazilian Data Protection Authority (ANPD).`,
        ],
      },
      {
        title: "9. Security",
        paragraphs: [
          "We adopt technical and administrative measures to protect data, such as encrypted connections (HTTPS), access restricted to authorized staff and providers with recognized security standards. If an incident occurs that may pose a significant risk, we will notify the data subjects and the ANPD, as required by the LGPD.",
        ],
      },
      {
        title: "10. Cookies",
        paragraphs: [`Details about cookies and how to manage them are in the [Cookie Policy](${paths.cookies}).`],
      },
      {
        title: "11. Changes to this policy",
        paragraphs: [
          "We may update this policy to reflect changes to the website, our services or the law. The date of the last update is shown at the top of the page. Significant changes will also be highlighted on the website.",
        ],
      },
    ],
  },

  terms: {
    title: "Terms of Use",
    summary: "The rules for using the Núcleo Polaris website. By browsing this website, you agree to these terms.",
    sections: [
      {
        title: "1. About the website",
        paragraphs: [
          `This website is maintained by ${entity.name}, CNPJ ${entity.cnpj}, which is responsible for Núcleo Polaris. It presents the Núcleo and partnership opportunities to educational institutions.`,
          "The content is for information only and is not a binding offer. Every partnership depends on negotiation and on a separate agreement signed by the parties.",
        ],
      },
      {
        title: "2. Permitted use",
        paragraphs: ["You agree to use the website lawfully and in good faith. You may not:"],
        list: [
          "try to access restricted areas, systems or data without authorization;",
          "submit false information or third-party data without authorization;",
          "scrape content in an automated and abusive way, or overload the website's infrastructure;",
          "introduce malicious code or interfere with the website's operation;",
          "use the content for unlawful purposes or in breach of third-party rights.",
        ],
      },
      {
        title: "3. Information you submit",
        paragraphs: [
          `By filling in the partnership form, you confirm that the information is accurate and that you are authorized to speak on behalf of the institution indicated. This data is processed under our [Privacy Policy](${paths.privacy}).`,
        ],
      },
      {
        title: "4. Restricted area",
        paragraphs: [
          "The “Sign in” access is reserved for the Núcleo team and authorized partners. Credentials are personal and non-transferable. Each user is responsible for the use of their own account.",
        ],
      },
      {
        title: "5. Intellectual property",
        paragraphs: [
          "The texts, trademarks, logos, layout and other materials on this website belong to Núcleo Polaris and the Grupo Nota Máxima companies, or are used with their owners' permission. They may not be reproduced, modified or distributed without prior written authorization.",
          "Partner institutions' trademarks belong to their respective owners and appear only to identify the partnerships. Some images are illustrative. Third-party photos are used under their respective licenses, with credits shown.",
        ],
      },
      {
        title: "6. Third-party links and services",
        paragraphs: [
          "The website links to third-party services such as WhatsApp, Instagram, YouTube and partner institutions' websites. These services have their own terms and policies, and we are not responsible for their content or practices.",
        ],
      },
      {
        title: "7. Information and liability",
        paragraphs: [
          "Figures, admissions, programs and other information are presented in good faith, based on internal and public data, and may change without notice. We do our best to keep the website available and accurate, but we do not guarantee uninterrupted or error-free operation.",
          "To the fullest extent permitted by law, we are not liable for indirect damages arising from the use of, or inability to use, the website.",
        ],
      },
      {
        title: "8. Privacy and cookies",
        paragraphs: [
          `The use of personal data is governed by the [Privacy Policy](${paths.privacy}) and the [Cookie Policy](${paths.cookies}), which form part of these terms.`,
        ],
      },
      {
        title: "9. Changes",
        paragraphs: ["We may change these terms at any time. The version in force is the one published on this page, with the date of the last update."],
      },
      {
        title: "10. Language, governing law and jurisdiction",
        paragraphs: [
          "These terms are governed by Brazilian law. The English and Spanish versions are translations; in case of any discrepancy, the Portuguese version prevails.",
          `The courts of ${entity.city}, Brazil, shall have jurisdiction over any disputes, except where the law provides otherwise.`,
        ],
      },
      {
        title: "11. Contact",
        paragraphs: [`Questions about these terms: ${email}.`],
      },
    ],
  },

  cookies: {
    title: "Cookie Policy",
    summary: "Which cookies this website uses, why, for how long, and how you control your choices.",
    sections: [
      {
        title: "1. What cookies are",
        paragraphs: [
          "Cookies are small files that a website stores in your browser to remember information between visits, such as your chosen language.",
        ],
      },
      {
        title: "2. Categories",
        table: {
          head: ["Category", "Purpose", "Status"],
          rows: [
            ["Essential", "Make the website work: your chosen language and a record of your cookie preferences.", "Always on"],
            ["Analytics", "Help us understand how the website is used (pages visited, traffic sources) so we can improve it.", "Only with your consent"],
            ["Marketing", "Measure campaign results and enable more relevant ads on other platforms.", "Only with your consent"],
          ],
        },
        after: [
          "Today the website uses essential cookies only. If analytics or marketing tools are added, they will only load after you consent, and this page will be updated with the corresponding cookies.",
        ],
      },
      {
        title: "3. Cookies in use",
        table: {
          head: ["Name", "Type", "Purpose", "Duration"],
          rows: [
            ["ni-lang", "Essential · first-party", "Remembers the language chosen in the selector", "12 months"],
            ["ni-consent", "Essential · first-party", "Stores your cookie choices", "12 months"],
          ],
        },
      },
      {
        title: "4. Third-party content",
        paragraphs: [
          "YouTube or Vimeo videos only load when you click play, in those services' privacy-enhanced mode. When you play a video, the provider may use its own cookies, under its own policy.",
          "Links to WhatsApp, Instagram and other services lead to third-party websites with their own cookie policies.",
        ],
      },
      {
        title: "5. Managing cookies",
        paragraphs: [
          "You can change your choices at any time through the “Cookie preferences” link in the website footer. You can also block or delete cookies in your browser settings; blocking essential cookies may affect how the website works.",
        ],
      },
      {
        title: "6. More information",
        paragraphs: [`How we process personal data is detailed in the [Privacy Policy](${paths.privacy}). Questions: ${email}.`],
      },
    ],
  },
});
