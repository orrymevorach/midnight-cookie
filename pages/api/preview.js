export default async function preview(req, res) {
  const { slug, content_model } = req.query;

  // Enable Preview Mode by setting the cookies
  res.setPreviewData({});

  // Redirect to the path while remove query strings as not to expose secrets
  const url = `/${content_model}/${slug}`;
  res.writeHead(307, { Location: url });
  res.end();
}
