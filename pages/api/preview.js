export default async function preview(req, res) {
  const { secret, slug, content_model, environment } = req.query;

  if (environment !== 'development') {
    if (secret !== process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_ACCESS_TOKEN) {
      return res.status(401).json({ message: 'Invalid token' });
    }

    if (!slug) return res.status(401).json({ message: 'No slug' });
  }

  // Enable Preview Mode by setting the cookies
  res.setPreviewData({});

  // Redirect to the path while remove query strings as not to expose secrets
  const url = `/${content_model}/${slug}`;
  res.redirect(url);
  res.end();
}
