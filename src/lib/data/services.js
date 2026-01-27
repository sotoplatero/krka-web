/**
 * Krka Power Inc. - Services Data
 * @typedef {Object} ServiceItem
 * @property {string} id - Unique identifier
 * @property {string} title - Display title
 * @property {string} [subtitle] - Optional subtitle/specification
 * @property {string} description - Service description
 * @property {string} [image] - Optional image path for slideshow
 */

/** @type {ServiceItem[]} */
export const designManufacturing = [
	{
		id: 'switchgear',
		title: 'SWITCHGEAR',
		subtitle: 'HV/MV',
		description: 'High and medium voltage switchgear rated up to 38kV, 3000A. Custom configurations for mission-critical applications.'
	},
	{
		id: 'switchboard',
		title: 'SWITCHBOARD',
		subtitle: 'MV/LV',
		description: 'Medium and low voltage switchboards for critical facilities. CSA and ANSI certified for maximum reliability.'
	},
	{
		id: 'arcflash',
		title: 'ARC FLASH',
		subtitle: 'Safety Solutions',
		description: 'Arc-resistant equipment and flash hazard reduction solutions. Enhanced worker safety through engineering excellence.'
	},
	{
		id: 'distribution',
		title: 'DISTRIBUTION',
		subtitle: 'Power Panels',
		description: 'Power distribution and control panels engineered for every industry. Custom configurations to exact specifications.'
	},
	{
		id: 'panels',
		title: 'PANELS',
		subtitle: 'Custom Build',
		description: 'Custom panel boards, metering panels, and specialty configurations. ANSI/CSA standards compliant.'
	},
	{
		id: 'metering',
		title: 'ADVANCED METERING',
		subtitle: 'Monitoring',
		description: 'Revenue-grade metering and power quality monitoring systems. Real-time data for informed decisions.'
	}
];

/** @type {ServiceItem[]} */
export const engineeringServices = [
	{
		id: 'installation',
		title: 'Installation & Commissioning',
		description: 'Full-service electrical equipment installation with comprehensive testing and commissioning protocols.'
	},
	{
		id: 'maintenance',
		title: 'Preventive Maintenance',
		description: 'Scheduled maintenance programs designed to maximize uptime and extend equipment lifespan.'
	},
	{
		id: 'emergency',
		title: 'Emergency Repair',
		description: '24/7 emergency response services with rapid deployment to minimize operational downtime.'
	},
	{
		id: 'arcflash-study',
		title: 'Arc Flash Studies',
		description: 'NFPA 70E compliance studies, hazard analysis, and labeling services for worker protection.'
	}
];

/** @type {ServiceItem[]} */
export const automationControl = [
	{
		id: 'plc',
		title: 'PLC PROGRAMMING',
		description: 'Best practices including IEC 61131 programming for safety and reliability. Custom logic for your process requirements.'
	},
	{
		id: 'distributed',
		title: 'DISTRIBUTED APPLICATIONS',
		description: 'Distributed control system design and implementation for large-scale industrial processes.'
	},
	{
		id: 'communication',
		title: 'INDUSTRIAL COMMUNICATION',
		description: 'Complete integration of Profinet, Ethernet/IP, DeviceNet, HART, and BACnet protocols for seamless operation.'
	},
	{
		id: 'turnkey',
		title: 'TURNKEY AUTOMATION',
		description: 'Full system design, procurement, installation, and commissioning. End-to-end project delivery.'
	}
];

/** @type {ServiceItem[]} */
export const robotics = [
	{
		id: 'palletizing',
		title: 'PALLETIZING',
		description: 'Automated end-of-line palletizing systems for boxes, bags, and pails. Increased throughput with precision placement.'
	},
	{
		id: 'picking',
		title: 'PICKING',
		description: 'Robotic picking for order fulfillment, bin picking, and sortation. AI-powered vision for accuracy.'
	},
	{
		id: 'vision-testing',
		title: 'VISION TESTING',
		description: 'Machine vision inspection for quality control and defect detection. Real-time analysis for zero-defect manufacturing.'
	},
	{
		id: 'human-benefits',
		title: 'HUMAN BENEFITS',
		description: 'Collaborative robots that work safely alongside operators. Ergonomic solutions reducing repetitive strain.'
	},
	{
		id: 'machine-vision',
		title: 'MACHINE VISION',
		description: 'Vision-guided robotics for precision positioning and identification. Sub-millimeter accuracy for demanding applications.'
	}
];
