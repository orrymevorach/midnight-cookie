export default async function preview(req, res) {
  const { secret, slug, content_model } = req.query;

  if (secret !== process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_ACCESS_TOKEN) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  if (!slug) return res.status(401).json({ message: 'No slug' });

  // Enable Preview Mode by setting the cookies
  res.setPreviewData({});

  // Redirect to the path from the fetched post
  // We don't redirect to req.query.slug as that might lead to open redirect vulnerabilities
  res.writeHead(307, { Location: `/${content_model}/${slug}` });
  const url = `/${content_model}/${slug}`;
  // res.setHeader('Content-Type', 'text/html');
  res.write(
    `<!DOCTYPE html><html><head><meta http-equiv="Refresh" content="0; url=${url}" />
    <script>window.location.href = '${url}'</script>
    </head>
    </html>`
  );
  res.end();
}
