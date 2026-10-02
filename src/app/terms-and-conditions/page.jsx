import LegalPage from '@/components/Legal/LegalPage';

export const metadata = {
  title: 'Terms & Conditions | Ajay Homes & Estates',
  description: 'Terms & Conditions for using the Ajay Homes website.',
};

const SECTIONS = [
  {
    id: 'website-information',
    title: 'Website Information',
    blocks: [
      { type: 'p', text: 'The information provided on this website is intended for general informational purposes.' },
      { type: 'p', text: 'While we make reasonable efforts to keep the information accurate and current, Ajay Homes does not guarantee that all website content will always be complete, accurate, or up to date.' },
    ],
  },
  {
    id: 'services',
    title: 'Services',
    blocks: [
      { type: 'p', text: 'Ajay Homes provides services relating to:' },
      {
        type: 'list',
        items: [
          'Construction',
          'Layout Promotion',
          'Project Management',
          'Property Development',
          'Interior Designing',
          'Real Estate Buying & Selling',
        ],
      },
      { type: 'p', text: 'Specific services, deliverables, costs, timelines, and responsibilities will depend on the individual project and will be confirmed separately with the client.' },
    ],
  },
  {
    id: 'project-information',
    title: 'Project Information',
    blocks: [
      { type: 'p', text: 'Images, project descriptions, specifications, materials, timelines, and other information displayed on the website may be indicative and may vary depending on the project.' },
      { type: 'p', text: 'Any quotation, proposal, estimate, or project discussion provided by Ajay Homes will be subject to the specific terms agreed with the client.' },
    ],
  },
  {
    id: 'property-information',
    title: 'Property Information',
    blocks: [
      { type: 'p', text: 'Property-related information displayed on the website is provided for general reference.' },
      { type: 'p', text: 'Availability, pricing, specifications, location details, and other property information may change without prior notice and should be verified with Ajay Homes before making a decision.' },
    ],
  },
  {
    id: 'website-use',
    title: 'Website Use',
    blocks: [
      { type: 'p', text: 'You agree not to:' },
      {
        type: 'list',
        items: [
          'Use the website for unlawful purposes',
          'Attempt to gain unauthorised access to the website or its systems',
          'Copy, reproduce, or misuse website content without permission',
          'Introduce malicious software or harmful material',
          'Interfere with the operation or security of the website',
        ],
      },
    ],
  },
  {
    id: 'intellectual-property',
    title: 'Intellectual Property',
    blocks: [
      { type: 'p', text: 'All website content, including text, photographs, graphics, logos, designs, and other materials, is owned by or licensed to Ajay Homes unless otherwise stated.' },
      { type: 'p', text: 'Unauthorised copying, reproduction, distribution, or commercial use is not permitted.' },
    ],
  },
  {
    id: 'third-party-links',
    title: 'Third-Party Links',
    blocks: [
      { type: 'p', text: 'The website may contain links to third-party websites or services.' },
      { type: 'p', text: 'Ajay Homes is not responsible for the content, availability, security, or privacy practices of third-party websites.' },
    ],
  },
  {
    id: 'limitation-of-liability',
    title: 'Limitation of Liability',
    blocks: [
      { type: 'p', text: 'To the extent permitted by applicable law, Ajay Homes shall not be liable for losses arising from reliance on general information provided through this website.' },
      { type: 'p', text: 'Project-specific decisions should be made based on the relevant agreements, documents, professional advice, and verified information.' },
    ],
  },
  {
    id: 'changes-to-these-terms',
    title: 'Changes to These Terms',
    blocks: [
      { type: 'p', text: 'Ajay Homes may update these Terms & Conditions from time to time. Updated terms will be published on this page.' },
    ],
  },
  {
    id: 'governing-law',
    title: 'Governing Law',
    blocks: [
      { type: 'p', text: 'These Terms & Conditions shall be governed by the applicable laws of India.' },
      { type: 'p', text: 'Any disputes shall be subject to the jurisdiction of the appropriate courts in Chennai, Tamil Nadu, unless otherwise agreed in writing.' },
    ],
  },
  {
    id: 'contact-us',
    title: 'Contact Us',
    blocks: [
      { type: 'p', text: 'For questions regarding these Terms & Conditions:' },
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

export default function TermsAndConditionsPage() {
  return (
    <LegalPage
      titleAccent="Terms &"
      titleRest="Conditions"
      intro={['Welcome to the Ajay Homes website. By accessing or using this website, you agree to the following Terms & Conditions.']}
      sections={SECTIONS}
    />
  );
}
