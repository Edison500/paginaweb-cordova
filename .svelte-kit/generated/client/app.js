export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15'),
	() => import('./nodes/16'),
	() => import('./nodes/17'),
	() => import('./nodes/18'),
	() => import('./nodes/19'),
	() => import('./nodes/20')
];

export const server_loads = [];

export const dictionary = {
		"/": [2],
		"/about": [3],
		"/contact": [4],
		"/services": [5],
		"/services/cabinet-painting": [6],
		"/services/carpet-cleaning": [7],
		"/services/cleaning": [8],
		"/services/concrete-repairs": [9],
		"/services/counter-resurfacing": [10],
		"/services/installations": [11],
		"/services/millwork": [12],
		"/services/painting": [13],
		"/services/pressure-washing": [14],
		"/services/repairs": [15],
		"/services/sheetrock": [16],
		"/services/trash-out": [17],
		"/services/tub-resurfacing": [18],
		"/services/turnkey": [19],
		"/services/water-remediation": [20]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
	
	reroute: (() => {}),
	transport: {}
};

export const decoders = Object.fromEntries(Object.entries(hooks.transport).map(([k, v]) => [k, v.decode]));
export const encoders = Object.fromEntries(Object.entries(hooks.transport).map(([k, v]) => [k, v.encode]));

export const hash = false;

export const decode = (type, value) => decoders[type](value);

export { default as root } from '../root.js';