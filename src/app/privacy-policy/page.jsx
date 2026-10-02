import LegalPage from '@/components/Legal/LegalPage';

export const metadata = {
  title: 'Privacy Policy | Ajay Homes & Estates',
  description: 'How Ajay Homes collects, uses, and protects the personal information you share through our website.',
};

const SECTIONS = [
  {
    id: 'information-we-collect',
    title: 'Information We Collect',
    blocks: [
      { type: 'p', text: 'We may collect information you voluntarily provide through our website, including:' },
      {
        type: 'list',
        items: [
          'Name',
          'Phone number',
          'Email address',
          'Property or project details',
          'Location',
          'Service requirements',
          'Any other information submitted through our enquiry forms',
        ],
      },
      { type: 'p', text: 'We may also collect basic technical information such as browser type, device information, IP address, and website usage data.' },
    ],
  },
  {
    id: 'how-we-use-your-information',
    title: 'How We Use Your Information',
    blocks: [
      { type: 'p', text: 'We may use your information to:' },
      {
        type: 'list',
        items: [
          'Respond to your enquiries',
          'Understand your project or property requirements',
          'Provide requested services or information',
          'Contact you regarding your enquiry',
          'Improve our website and services',
          'Maintain website security',
          'Comply with applicable legal requirements',
        ],
      },
      { type: 'p', text: 'We do not use your information for purposes unrelated to your enquiry without an appropriate basis or consent where required.' },
    ],
  },
  {
    id: 'how-we-protect-your-information',
    title: 'How We Protect Your Information',
    blocks: [
      { type: 'p', text: 'We take reasonable administrative, technical, and organisational measures to protect your personal information from unauthorised access, misuse, alteration, or disclosure.' },
      { type: 'p', text: 'However, no online transmission or storage system can be guaranteed to be completely secure.' },
    ],
  },
  {
    id: 'sharing-of-information',
    title: 'Sharing of Information',
    blocks: [
      { type: 'p', text: 'Ajay Homes does not sell or rent your personal information.' },
      { type: 'p', text: 'We may share information with trusted service providers, consultants, contractors, technology providers, or other parties where reasonably necessary to respond to your enquiry, provide services, operate our website, or meet legal obligations.' },
    ],
  },
  {
    id: 'cookies',
    title: 'Cookies',
    blocks: [
      { type: 'p', text: 'Our website may use cookies and similar technologies to improve functionality, understand website usage, and enhance your experience.' },
      { type: 'p', text: 'You can manage or disable cookies through your browser settings. Some website features may be affected if cookies are disabled.' },
    ],
  },
  {
    id: 'third-party-services',
    title: 'Third-Party Services',
    blocks: [
      { type: 'p', text: 'Our website may use third-party services such as analytics, advertising, maps, communication, or other technology platforms.' },
      { type: 'p', text: 'These services may collect or process information according to their own privacy policies.' },
    ],
  },
  {
    id: 'your-rights',
    title: 'Your Rights',
    blocks: [
      { type: 'p', text: 'Depending on applicable law, you may have rights relating to your personal information, including requesting access, correction, or deletion of information.' },
      { type: 'p', text: 'To make a privacy-related request, please contact us using the details below.' },
    ],
  },
  {
    id: 'childrens-privacy',
    title: "Children's Privacy",
    blocks: [
      { type: 'p', text: 'Our website is not specifically intended for children. We do not knowingly collect personal information from children without appropriate consent.' },
    ],
  },
  {
    id: 'changes-to-this-policy',
    title: 'Changes to This Policy',
    blocks: [
      { type: 'p', text: 'We may update this Privacy Policy from time to time. Any changes will be published on this page with the revised date.' },
    ],
  },
  {
    id: 'contact-us',
    title: 'Contact Us',
    blocks: [
      { type: 'p', text: 'For questions or requests regarding this Privacy Policy:' },
      {
        type: 'contact',
        name: 'Ajay Homes',
        address: 'Ajay Signature Towers, 2nd Avenue, Anna Nagar East, Chennai - 600102, Tamil Nadu, India',
        email: 'properties@ajayhomesestates.com',
        phones: [
          { label: '1800 313 0080', href: 'tel:18003130080' },
          { label: '+91 44 2626 7890', href: 'tel:+914426267890' },
        ],
      },
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      titleAccent="Privacy"
      titleRest="Policy"
      intro={[
        'At Ajay Homes, we respect your privacy and are committed to protecting the personal information you share with us through our website.',
        'This Privacy Policy explains how we collect, use, and protect your information when you visit our website or contact us.',
      ]}
      sections={SECTIONS}
    />
  );
}
