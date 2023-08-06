const urlAddress = 'https://ian-cedric-ramirez.vercel.app/';

export default async function sitemap() {
	return [
		{
			url: urlAddress,
			lastmod: new Date().toISOString(),
			changefreq: 'daily',
			priority: 0.9,
		},
	];
}
