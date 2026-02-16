const SUPABASE_URL = 'https://vxhftpfqzrxulcdrzmyc.supabase.co';
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

async function fetchSlugs(table, filter = '') {
  try {
    const url = `${SUPABASE_URL}/rest/v1/${table}?select=slug${filter}`;
    const res = await fetch(url, {
      headers: {
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`,
      },
    });
    if (!res.ok) return [];
    const data = await res.json();
    return data.map((item) => item.slug).filter(Boolean);
  } catch {
    return [];
  }
}

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.capitalassociated.com',
  generateRobotsTxt: true,
  exclude: [
    '/admin',
    '/admin/**',
    '/api/**',
    '/icon.svg',
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/api'],
      },
    ],
  },
  priority: null, // disable default priority, set per-path below
  changefreq: null, // disable default changefreq, set per-path below
  transform: async (config, path) => {
    // Set priority and changefreq based on path
    let priority = 0.7;
    let changefreq = 'weekly';

    if (path === '/') {
      priority = 1.0;
      changefreq = 'daily';
    } else if (['/about-us', '/contact-us', '/services', '/our-work', '/our-team', '/career', '/blog'].includes(path)) {
      priority = 0.8;
      changefreq = 'weekly';
    } else if (path.startsWith('/blog/')) {
      priority = 0.6;
      changefreq = 'monthly';
    } else if (path.startsWith('/services/') || path.startsWith('/our-work/') || path.startsWith('/our-team/') || path.startsWith('/career/')) {
      priority = 0.7;
      changefreq = 'monthly';
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
    };
  },
  additionalPaths: async (config) => {
    const paths = [];

    // Add dynamic list pages that next-sitemap may not discover automatically
    paths.push({
      loc: '/blog',
      changefreq: 'daily',
      priority: 0.8,
      lastmod: new Date().toISOString(),
    });
    paths.push({
      loc: '/services',
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: new Date().toISOString(),
    });

    // Fetch all published blog slugs
    const blogSlugs = await fetchSlugs('blogs', '&published=eq.true');
    for (const slug of blogSlugs) {
      paths.push({
        loc: `/blog/${slug}`,
        changefreq: 'monthly',
        priority: 0.6,
        lastmod: new Date().toISOString(),
      });
    }

    // Fetch all published service slugs
    const serviceSlugs = await fetchSlugs('services', '&published=eq.true');
    for (const slug of serviceSlugs) {
      paths.push({
        loc: `/services/${slug}`,
        changefreq: 'monthly',
        priority: 0.7,
        lastmod: new Date().toISOString(),
      });
    }

    // Fetch all project slugs
    const projectSlugs = await fetchSlugs('projects', '&published=eq.true');
    for (const slug of projectSlugs) {
      paths.push({
        loc: `/our-work/${slug}`,
        changefreq: 'monthly',
        priority: 0.7,
        lastmod: new Date().toISOString(),
      });
    }

    // Fetch all team member slugs
    const teamSlugs = await fetchSlugs('team');
    for (const slug of teamSlugs) {
      paths.push({
        loc: `/our-team/${slug}`,
        changefreq: 'monthly',
        priority: 0.6,
        lastmod: new Date().toISOString(),
      });
    }

    // Fetch all career slugs
    const careerSlugs = await fetchSlugs('careers');
    for (const slug of careerSlugs) {
      paths.push({
        loc: `/career/${slug}`,
        changefreq: 'weekly',
        priority: 0.6,
        lastmod: new Date().toISOString(),
      });
    }

    return paths;
  },
};