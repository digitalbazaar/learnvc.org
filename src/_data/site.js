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
    'A guide to issuing and verifying W3C Verifiable ' +
    'Credentials with VCALM (the VC API). Pick a vertical, see how it ' +
    'works, ship.',
  company: {
    name: 'Digital Bazaar, Inc.',
    url: 'https://digitalbazaar.com',
    blurb:
      'Digital Bazaar builds open, standards-based infrastructure for ' +
      'Verifiable Credentials and decentralized identity.'
  },
  // Inline review comments via Hypothesis (https://web.hypothes.is).
  // Off by default so production carries no third-party script. Enable on a
  // review deployment with HYPOTHESIS_COMMENTS=1. Set HYPOTHESIS_GROUP to a
  // Hypothesis private group id to scope the client to the DB review group;
  // logged-in members of that group see/post comments, the public does not.
  comments: {
    enabled: process.env.HYPOTHESIS_COMMENTS === '1',
    group: process.env.HYPOTHESIS_GROUP || ''
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
