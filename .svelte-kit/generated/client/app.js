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
<<<<<<< Updated upstream
	() => import('./nodes/18')
=======
	() => import('./nodes/18'),
	() => import('./nodes/19'),
	() => import('./nodes/20'),
	() => import('./nodes/21')
>>>>>>> Stashed changes
];

export const server_loads = [];

export const dictionary = {
		"/": [2],
		"/about": [3],
		"/contact": [4],
		"/our-work": [5],
		"/services": [6],
		"/services/cabinet-painting": [7],
<<<<<<< Updated upstream
		"/services/cleaning": [8],
		"/services/counter-resurfacing": [9],
		"/services/installations": [10],
		"/services/millwork": [11],
		"/services/painting": [12],
		"/services/pressure-washing": [13],
		"/services/repairs": [14],
		"/services/sheetrock": [15],
		"/services/tub-resurfacing": [16],
		"/services/turnkey": [17],
		"/services/water-remediation": [18]
=======
		"/services/carpet-cleaning": [8],
		"/services/cleaning": [9],
		"/services/concrete-repairs": [10],
		"/services/counter-resurfacing": [11],
		"/services/installations": [12],
		"/services/millwork": [13],
		"/services/painting": [14],
		"/services/pressure-washing": [15],
		"/services/repairs": [16],
		"/services/sheetrock": [17],
		"/services/trash-out": [18],
		"/services/tub-resurfacing": [19],
		"/services/turnkey": [20],
		"/services/water-remediation": [21]
>>>>>>> Stashed changes
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