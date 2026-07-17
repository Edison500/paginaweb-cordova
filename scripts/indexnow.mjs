import { readFileSync } from 'node:fs';

const KEY = '0341e29339fe4537a3d7081021fc230d';
const HOST = 'www.cordovapropertyservices.com';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

const sitemap = readFileSync(new URL('../static/sitemap.xml', import.meta.url), 'utf-8');
const urlList = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);

const res = await fetch('https://api.indexnow.org/indexnow', {
	method: 'POST',
	headers: { 'Content-Type': 'application/json; charset=utf-8' },
	body: JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList })
});

console.log(`IndexNow: ${res.status} ${res.statusText}`);
console.log(`${urlList.length} URLs enviadas:`);
urlList.forEach((u) => console.log(' -', u));
