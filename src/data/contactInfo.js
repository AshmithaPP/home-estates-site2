/**
 * Site-wide contact details — single source of truth.
 *
 * PLACEHOLDER VALUES: the real Ajay Homes address, phone numbers and email
 * have not been provided yet. Replace the values below when they are available;
 * the footer, Contact page, chat widget and legal pages all read from here.
 */
export const CONTACT = {
  companyName: 'Ajay Homes',

  // Corporate address, one entry per line as shown in the footer
  addressLines: [
    'Building Name, Street Name,',
    'Area / Locality,',
    'Chennai - 600 000,',
    'Tamil Nadu, India',
  ],

  // Toll-free sales line
  salesPhone: { display: '1800 000 0000', tel: '18000000000' },

  // Office landline for other enquiries
  officePhone: { display: '+91 44 0000 0000', tel: '+914400000000' },

  // Primary mobile used for "Call" buttons and site-visit bookings
  mobilePhone: { display: '+91 90000 00000', tel: '+919000000000' },

  email: 'info@example.com',
};

// Full address on a single line (legal pages, etc.)
export const CONTACT_ADDRESS_ONE_LINE = CONTACT.addressLines.join(' ').replace(/,\s*$/, '');

export default CONTACT;
