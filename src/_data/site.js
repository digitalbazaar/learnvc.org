/*!
 * Copyright (c) 2026 Digital Bazaar, Inc. All rights reserved.
 */
// Single source of truth for site-wide metadata and company info.
// Used by layouts, SEO meta, the footer, sitemap.xml, and llms.txt.
export default {
  name: 'LearnVC',
  // Override per environment (GitHub Pages sets this in CI via SITE_URL).
  url: process.env.SITE_URL || 'https://learnvc.org',
  tagline: 'Issue and verify W3C Verifiable Credentials — without vendor lock-in.',
  description:
    'A developer-first guide to issuing and verifying W3C Verifiable ' +
    'Credentials with VCALM (the VC API). Pick a vertical, see how it ' +
    'works, ship.',
  company: {
    name: 'Digital Bazaar, Inc.',
    url: 'https://digitalbazaar.com',
    blurb:
      'Digital Bazaar builds open, standards-based infrastructure for ' +
      'Verifiable Credentials and decentralized identity.'
  },
  // Top-level nav. Verticals are appended automatically from the collection.
  nav: [
    {text: 'Home', url: '/'},
    {text: 'What is VCALM', url: '/what-is-vcalm/'},
    {text: 'Why VCALM', url: '/why-vcalm/'},
    {text: 'About', url: '/company/about/'},
    {text: 'Contact', url: '/company/contact/'}
  ]
};
