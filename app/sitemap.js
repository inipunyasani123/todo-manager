const URL = 'https://todo-manager.pintuweb.id';

export default function sitemap() {
  const now = new Date();
  return ['', '/kalender', '/label'].map((p) => ({ url: URL + p, lastModified: now, changeFrequency: 'monthly', priority: p ? 0.6 : 1 }));
}
