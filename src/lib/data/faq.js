/**
 * Krka Power Inc. - FAQ Data
 * @typedef {Object} FAQItem
 * @property {string} id - Unique identifier
 * @property {string} question - FAQ question
 * @property {string} answer - FAQ answer
 */

/** @type {FAQItem[]} */
export const faqItems = [
	{
		id: 'lead-times',
		question: 'What are your typical lead times for custom equipment?',
		answer: 'Lead times typically range from 8-16 weeks depending on complexity and specifications. For standard configurations, we can often deliver in 6-8 weeks. Expedited options are available for critical projects—contact us to discuss your timeline requirements.'
	},
	{
		id: 'certifications',
		question: 'What certifications does your equipment carry?',
		answer: 'All our equipment is CSA and ANSI certified. We comply with IEEE standards and NFPA 70E requirements. Our facility operates under ISO 9001 quality management standards, ensuring consistent excellence in every build.'
	},
	{
		id: 'custom-orders',
		question: 'Can you handle custom specifications outside standard offerings?',
		answer: 'Absolutely. Custom engineering is our specialty. We work with clients to develop solutions for unique voltage requirements, space constraints, environmental conditions, and specialized safety needs. Provide your specifications and our engineering team will design a solution.'
	},
	{
		id: 'service-areas',
		question: 'What geographic areas do you serve?',
		answer: 'We serve clients across Ontario and throughout Canada. Our field service teams have completed projects across North America. For installations outside our local area, we coordinate with qualified local contractors while providing engineering oversight and commissioning support.'
	},
	{
		id: 'maintenance',
		question: 'Do you offer ongoing maintenance services?',
		answer: 'Yes, we provide comprehensive maintenance programs including preventive maintenance schedules, emergency repair services, arc flash studies, and equipment upgrades. Our 24/7 emergency response team is available for critical situations.'
	},
	{
		id: 'quote-process',
		question: 'How do I get a quote for my project?',
		answer: 'Contact us at 905 691-0691 or email [email protected] with your project requirements. We respond to all inquiries within 24 hours. For detailed quotes, we may schedule a site visit or technical call to understand your specifications fully.'
	}
];
