/**
 * Krka Power Inc. - Industries Data
 * @typedef {Object} Industry
 * @property {string} id - Unique identifier
 * @property {string} name - Industry name
 * @property {string} icon - Lucide icon component name
 * @property {string} description - Industry description
 */

/** @type {Industry[]} */
export const industries = [
	{
		id: 'healthcare',
		name: 'Healthcare',
		icon: 'Hospital',
		description: 'Mission-critical power for hospitals, surgical centers, and medical research facilities requiring zero downtime.'
	},
	{
		id: 'data-centers',
		name: 'Data Centers',
		icon: 'Server',
		description: 'Uninterrupted power distribution for digital infrastructure demanding 99.999% uptime and redundancy.'
	},
	{
		id: 'manufacturing',
		name: 'Manufacturing',
		icon: 'Factory',
		description: 'Industrial automation, motor control, and power distribution for production facilities.'
	},
	{
		id: 'education',
		name: 'Education',
		icon: 'GraduationCap',
		description: 'Reliable power solutions for universities, colleges, and campus-wide electrical infrastructure.'
	},
	{
		id: 'oil-gas',
		name: 'Oil & Gas',
		icon: 'Fuel',
		description: 'Hazardous location equipment and explosion-proof solutions for energy sector applications.'
	},
	{
		id: 'chemical',
		name: 'Chemical',
		icon: 'FlaskConical',
		description: 'Process control and safety systems for chemical processing and pharmaceutical facilities.'
	},
	{
		id: 'commercial',
		name: 'Commercial',
		icon: 'Building',
		description: 'Power distribution for high-rise buildings, retail centers, and commercial developments.'
	},
	{
		id: 'government',
		name: 'Government',
		icon: 'Landmark',
		description: 'Secure, reliable power systems for government facilities and critical public infrastructure.'
	}
];
