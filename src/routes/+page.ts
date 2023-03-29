/** @type {import('./$types').PageLoad} */
export async function load({ fetch, setHeaders }) {
	// const url = 'https://author-p54352-e854610.adobeaemcloud.com/graphql/execute.json/sample-list/Homepage';
	const url = 'https://api.sampleapis.com/futurama/characters';
	const response = await fetch(url, {
		headers: { credentials: 'include' }
	});

	// cache the page for the same length of time
	// as the underlying data
	setHeaders({
		'cache-control': response.headers.get('cache-control') ?? 'max-age=0'
	});

	// Default way to return data
	// return response.json();

	// return data as props, because sampleapis.com returns an array
	const data = await response.json();

	return { props: { data } };
}
