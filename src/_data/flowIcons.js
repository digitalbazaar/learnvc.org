/*!
 * Copyright (c) 2026 Digital Bazaar, Inc. All rights reserved.
 */

// Inline SVG icons for the postcard-row flow diagrams.
// Each icon is a 80x80 viewBox SVG fragment (no outer <svg> tag —
// the partial wraps it). Kept here to avoid quote-escaping issues
// inside Nunjucks {% set %} blocks.

export default {
  educationIssue: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="14" y="28" width="52" height="6" rx="1.5" fill="#1b1a17"/>
    <polygon points="40,16 14,34 66,34" fill="#1b1a17"/>
    <line x1="66" y1="34" x2="70" y2="46" stroke="#1b1a17" stroke-width="2"/>
    <circle cx="70" cy="49" r="4" fill="#c0341d"/>
    <rect x="18" y="44" width="44" height="26" rx="2" fill="#f4f0e6" stroke="#9a7b2e" stroke-width="1.5"/>
    <rect x="22" y="48" width="10" height="10" rx="1" fill="#c0341d" opacity=".15"/>
    <text x="27" y="57" text-anchor="middle" font-size="5" fill="#c0341d" font-family="Georgia,serif" font-style="italic">SEAL</text>
    <line x1="36" y1="50" x2="58" y2="50" stroke="#c9c0ab" stroke-width="1.5"/>
    <line x1="36" y1="55" x2="56" y2="55" stroke="#c9c0ab" stroke-width="1"/>
    <line x1="36" y1="60" x2="58" y2="60" stroke="#c9c0ab" stroke-width="1"/>
    <circle cx="55" cy="65" r="4" fill="none" stroke="#9a7b2e" stroke-width="1.5"/>
    <text x="55" y="68" text-anchor="middle" font-size="6" fill="#9a7b2e" font-family="Georgia,serif">&#x2713;</text>
  </svg>`,

  educationHold: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="26" y="12" width="28" height="48" rx="5" fill="#1b1a17"/>
    <rect x="30" y="18" width="20" height="34" rx="2" fill="#f4f0e6"/>
    <rect x="32" y="20" width="16" height="12" rx="1" fill="#ece6d6" stroke="#9a7b2e" stroke-width=".75"/>
    <line x1="34" y1="24" x2="46" y2="24" stroke="#c9c0ab" stroke-width="1"/>
    <line x1="34" y1="28" x2="44" y2="28" stroke="#c9c0ab" stroke-width="1"/>
    <rect x="34" y="38" width="10" height="8" rx="2" fill="#9a7b2e"/>
    <path d="M35,38 v-3 a4,4 0 0,1 8,0 v3" fill="none" stroke="#9a7b2e" stroke-width="1.5"/>
    <circle cx="39" cy="43" r="1.5" fill="#f4f0e6"/>
    <rect x="34" y="56" width="12" height="2" rx="1" fill="#c9c0ab"/>
  </svg>`,

  educationVerify: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="40" cy="38" r="22" fill="none" stroke="#2f6b4f" stroke-width="1.5" stroke-dasharray="5,3"/>
    <circle cx="40" cy="38" r="14" fill="#f4f0e6" stroke="#2f6b4f" stroke-width="1"/>
    <text x="40" y="45" text-anchor="middle" font-size="18" fill="#2f6b4f" font-family="Georgia,serif">&#x2713;</text>
    <text x="40" y="68" text-anchor="middle" font-size="7" fill="#2f6b4f" font-family="Georgia,serif" letter-spacing=".06em">VERIFIED</text>
  </svg>`,

  supplyIssue: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="14" y="44" width="52" height="24" rx="0" fill="none" stroke="#1b1a17" stroke-width="1.5"/>
    <rect x="20" y="36" width="10" height="8" fill="#1b1a17"/>
    <rect x="34" y="32" width="10" height="12" fill="#1b1a17"/>
    <rect x="50" y="38" width="10" height="6" fill="#1b1a17"/>
    <rect x="20" y="52" width="8" height="8" rx="1" fill="#f4f0e6" stroke="#c9c0ab" stroke-width="1"/>
    <rect x="34" y="52" width="8" height="8" rx="1" fill="#f4f0e6" stroke="#c9c0ab" stroke-width="1"/>
    <rect x="48" y="52" width="8" height="8" rx="1" fill="#f4f0e6" stroke="#c9c0ab" stroke-width="1"/>
    <rect x="56" y="48" width="16" height="12" rx="2" fill="#f4f0e6" stroke="#9a7b2e" stroke-width="1"/>
    <line x1="58" y1="52" x2="70" y2="52" stroke="#c9c0ab" stroke-width="1"/>
    <line x1="58" y1="56" x2="68" y2="56" stroke="#c9c0ab" stroke-width="1"/>
    <circle cx="64" cy="48" r="1.5" fill="#9a7b2e"/>
    <line x1="64" y1="46" x2="64" y2="42" stroke="#9a7b2e" stroke-width="1"/>
  </svg>`,

  supplyCarry: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="16" y="22" width="48" height="34" rx="2" fill="#f4f0e6" stroke="#1b1a17" stroke-width="1.5"/>
    <line x1="16" y1="34" x2="64" y2="34" stroke="#1b1a17" stroke-width="1"/>
    <line x1="32" y1="22" x2="32" y2="34" stroke="#c9c0ab" stroke-width="1.5"/>
    <line x1="48" y1="22" x2="48" y2="34" stroke="#c9c0ab" stroke-width="1.5"/>
    <rect x="20" y="38" width="16" height="14" rx="1" fill="#ece6d6" stroke="#9a7b2e" stroke-width="1"/>
    <rect x="22" y="40" width="4" height="4" fill="#1b1a17" opacity=".4"/>
    <rect x="28" y="40" width="4" height="4" fill="#1b1a17" opacity=".4"/>
    <rect x="22" y="46" width="4" height="4" fill="#1b1a17" opacity=".4"/>
    <circle cx="24" cy="66" r="3" fill="#c9c0ab"/>
    <circle cx="36" cy="70" r="3" fill="#c9c0ab"/>
    <circle cx="48" cy="66" r="3" fill="#9a7b2e"/>
    <circle cx="60" cy="70" r="3" fill="#c9c0ab"/>
    <line x1="27" y1="66" x2="33" y2="70" stroke="#c9c0ab" stroke-width="1"/>
    <line x1="39" y1="70" x2="45" y2="66" stroke="#c9c0ab" stroke-width="1"/>
    <line x1="51" y1="66" x2="57" y2="70" stroke="#c9c0ab" stroke-width="1"/>
  </svg>`,

  supplyVerify: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="10" y="20" width="26" height="42" rx="4" fill="#1b1a17"/>
    <rect x="13" y="25" width="20" height="28" rx="1" fill="#f4f0e6"/>
    <line x1="15" y1="32" x2="31" y2="32" stroke="#2f6b4f" stroke-width="1.5"/>
    <line x1="15" y1="37" x2="31" y2="37" stroke="#2f6b4f" stroke-width=".75" opacity=".5"/>
    <line x1="15" y1="42" x2="31" y2="42" stroke="#2f6b4f" stroke-width=".75" opacity=".3"/>
    <text x="23" y="50" text-anchor="middle" font-size="9" fill="#2f6b4f" font-family="Georgia,serif">&#x2713;</text>
    <rect x="44" y="28" width="28" height="22" rx="2" fill="#f4f0e6" stroke="#2f6b4f" stroke-width="1.5"/>
    <text x="58" y="37" text-anchor="middle" font-size="6" fill="#2f6b4f" font-family="Georgia,serif" font-weight="bold">ORIGIN</text>
    <text x="58" y="44" text-anchor="middle" font-size="6" fill="#2f6b4f" font-family="Georgia,serif" font-weight="bold">VERIFIED</text>
    <line x1="36" y1="39" x2="44" y2="39" stroke="#2f6b4f" stroke-width="1" stroke-dasharray="3,2"/>
  </svg>`,

  govIssue: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="18" y="48" width="44" height="20" rx="0" fill="none" stroke="#1b1a17" stroke-width="1.5"/>
    <line x1="26" y1="48" x2="26" y2="68" stroke="#1b1a17" stroke-width="1.5"/>
    <line x1="36" y1="48" x2="36" y2="68" stroke="#1b1a17" stroke-width="1.5"/>
    <line x1="44" y1="48" x2="44" y2="68" stroke="#1b1a17" stroke-width="1.5"/>
    <line x1="54" y1="48" x2="54" y2="68" stroke="#1b1a17" stroke-width="1.5"/>
    <polygon points="12,48 40,22 68,48" fill="none" stroke="#1b1a17" stroke-width="1.5"/>
    <text x="40" y="42" text-anchor="middle" font-size="9" fill="#1b1a17" font-family="Georgia,serif">&#x2605;</text>
    <text x="40" y="62" text-anchor="middle" font-size="7" fill="#514c43" font-family="Georgia,serif" letter-spacing=".06em">DMV</text>
    <rect x="10" y="68" width="60" height="3" rx="0" fill="#1b1a17" opacity=".15"/>
  </svg>`,

  govHold: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="26" y="10" width="28" height="50" rx="5" fill="#1b1a17"/>
    <rect x="30" y="16" width="20" height="36" rx="2" fill="#f4f0e6"/>
    <rect x="32" y="18" width="16" height="12" rx="1" fill="#ece6d6" stroke="#1b1a17" stroke-width=".75"/>
    <rect x="33" y="20" width="5" height="7" rx="1" fill="#c9c0ab"/>
    <line x1="40" y1="20" x2="46" y2="20" stroke="#c9c0ab" stroke-width="1"/>
    <line x1="40" y1="23" x2="45" y2="23" stroke="#c9c0ab" stroke-width="1"/>
    <line x1="40" y1="26" x2="46" y2="26" stroke="#c9c0ab" stroke-width="1"/>
    <text x="47" y="30" font-size="5" fill="#c0341d" font-family="Georgia,serif">DL</text>
    <path d="M35,38 l5,-3 l5,3 v6 a5,5 0 0,1 -10,0 z" fill="none" stroke="#9a7b2e" stroke-width="1.5"/>
    <circle cx="40" cy="43" r="1.5" fill="#9a7b2e"/>
    <rect x="34" y="56" width="12" height="2" rx="1" fill="#c9c0ab"/>
  </svg>`,

  govDisclose: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="8" y="22" width="36" height="44" rx="2" fill="#ece6d6" stroke="#c9c0ab" stroke-width="1" opacity=".7"/>
    <line x1="14" y1="32" x2="38" y2="32" stroke="#c9c0ab" stroke-width="1"/>
    <line x1="14" y1="38" x2="36" y2="38" stroke="#c9c0ab" stroke-width="1"/>
    <line x1="14" y1="44" x2="38" y2="44" stroke="#c9c0ab" stroke-width="1"/>
    <line x1="14" y1="50" x2="34" y2="50" stroke="#c9c0ab" stroke-width="1"/>
    <line x1="14" y1="32" x2="24" y2="44" stroke="#c0341d" stroke-width="1" opacity=".4"/>
    <line x1="24" y1="32" x2="14" y2="44" stroke="#c0341d" stroke-width="1" opacity=".4"/>
    <text x="22" y="62" text-anchor="middle" font-size="7" fill="#c9c0ab" font-family="Georgia,serif" font-style="italic">full ID</text>
    <rect x="36" y="30" width="38" height="26" rx="2" fill="#f4f0e6" stroke="#2f6b4f" stroke-width="2"/>
    <text x="55" y="42" text-anchor="middle" font-size="9" fill="#2f6b4f" font-family="Georgia,serif" font-weight="bold">OVER 21</text>
    <text x="55" y="52" text-anchor="middle" font-size="8" fill="#2f6b4f" font-family="Georgia,serif">&#x2713; verified</text>
  </svg>`,

  // Small heading glyphs for the "What X experiences" columns.
  // Individual holder (resident / graduate / buyer).
  person: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="12" cy="8" r="4" fill="none" stroke="#c0341d" stroke-width="1.6"/>
    <path d="M4,21 a8,8 0 0,1 16,0" fill="none" stroke="#c0341d" stroke-width="1.6" stroke-linecap="round"/>
  </svg>`,

  // Institution / agency (issuer or verifier organization).
  institution: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <polygon points="12,3 21,8 3,8" fill="none" stroke="#c0341d" stroke-width="1.6" stroke-linejoin="round"/>
    <line x1="5" y1="11" x2="5" y2="18" stroke="#c0341d" stroke-width="1.6" stroke-linecap="round"/>
    <line x1="10" y1="11" x2="10" y2="18" stroke="#c0341d" stroke-width="1.6" stroke-linecap="round"/>
    <line x1="14" y1="11" x2="14" y2="18" stroke="#c0341d" stroke-width="1.6" stroke-linecap="round"/>
    <line x1="19" y1="11" x2="19" y2="18" stroke="#c0341d" stroke-width="1.6" stroke-linecap="round"/>
    <line x1="3" y1="21" x2="21" y2="21" stroke="#c0341d" stroke-width="1.6" stroke-linecap="round"/>
  </svg>`
};
