/*!
 * Copyright (c) 2026 Digital Bazaar, Inc. All rights reserved.
 */
import syntaxHighlight from '@11ty/eleventy-plugin-syntaxhighlight';

export default function(eleventyConfig) {
  // Build-time syntax highlighting (PrismJS token classes; no client JS).
  eleventyConfig.addPlugin(syntaxHighlight);

  // Pass static assets straight through.
  eleventyConfig.addPassthroughCopy({ 'src/assets': 'assets' });
  eleventyConfig.addPassthroughCopy({ "src/assets/favicons/favicon.ico": "favicon.ico" });
  // GitHub Pages custom-domain marker — copy verbatim to the site root.
  eleventyConfig.addPassthroughCopy('src/CNAME');

  // Collection: every vertical entry point (Layer 1 landing pages).
  // Drives the home page list, the sitemap, and llms.txt — so adding a
  // vertical updates all three automatically at build time.
  eleventyConfig.addCollection('verticals', collection =>
    collection.getFilteredByGlob('src/verticals/*/index.njk')
      .sort((a, b) => (a.data.order ?? 99) - (b.data.order ?? 99)));

  // Collection: all build pages that opt into discovery (sitemap + llms.txt).
  // A page is included unless it sets `eleventyExcludeFromCollections` or
  // `discoverable: false` in front matter.
  eleventyConfig.addCollection('discoverable', collection =>
    collection.getAll()
      .filter(item => item.data.discoverable !== false && item.url)
      .sort((a, b) => a.url.localeCompare(b.url)));

  // Absolute-URL filter for sitemap/llms.txt entries.
  eleventyConfig.addFilter('absoluteUrl', (url, base) =>
    new URL(url, base).toString());

  // Plain-text normalizer for the machine-readable llms.txt:
  //  - em/en dashes → " - "
  //  - decode the HTML entities Nunjucks auto-escapes (&#39; &amp; &quot; ...)
  // Keeps HTML pages' titles untouched; only llms.txt uses this filter.
  eleventyConfig.addFilter('asciiDashes', str =>
    String(str)
      .replace(/\s*[–—]\s*/g, ' - ')
      .replace(/&#39;|&apos;/g, "'")
      .replace(/&quot;/g, '"')
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>'));

  return {
    dir: {
      input: 'src',
      includes: '_includes',
      data: '_data',
      output: '_site'
    },
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk'
  };
}
