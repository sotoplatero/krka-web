import { fail, redirect } from "@sveltejs/kit";
import type { Actions } from "./$types";
import nodemailer from "nodemailer";

const FREE_EMAIL_DOMAINS = [
	"gmail.com",
	"yahoo.com",
	"hotmail.com",
	"outlook.com",
	"aol.com",
	"icloud.com",
	"protonmail.com",
	"mail.com",
	"yandex.com",
	"live.com",
];

function isCorporateEmail(email: string): boolean {
	const domain = email.split("@")?.[1]?.toLowerCase();
	if (!domain) return false;
	return !FREE_EMAIL_DOMAINS.includes(domain);
}

function getServiceLabel(value: string): string {
	const labels: Record<string, string> = {
		switchgear: "Switchgear",
		switchboard: "Switchboards",
		panels: "Custom Panels",
		arcflash: "Arc Flash Solutions",
		"engineering-install": "Installation",
		maintenance: "Maintenance",
		emergency: "Emergency Repair",
		"arcflash-study": "Arc Flash Study",
		plc: "PLC & Automation",
		dcs: "DCS & Control Systems",
		robotics: "Robotics Integration",
		vision: "Machine Vision",
		other: "Other / Multiple",
	};
	return labels[value] || value;
}

function getTimelineLabel(value: string): string {
	const labels: Record<string, string> = {
		immediate: "Immediate - Emergency / Urgent",
		"1month": "Within 1 month",
		"1-3months": "1-3 months",
		"3-6months": "3-6 months",
		"6plus": "6+ months / Planning phase",
	};
	return labels[value] || value;
}

async function sendQuoteEmail(data: {
	name: string;
	email: string;
	phone: string;
	company: string;
	service: string;
		timeline: string;
	description: string;
}) {
	const transporter = nodemailer.createTransport({
		host: process.env.SMTP_HOST || "localhost",
		port: Number.parseInt(process.env.SMTP_PORT || "587"),
	 secure: process.env.SMTP_SECURE === "true",
		auth:
			process.env.SMTP_USER && process.env.SMTP_PASS
				? {
						user: process.env.SMTP_USER,
						pass: process.env.SMTP_PASS,
					}
				: undefined,
	});

	// Email to Krka team (internal notification)
	const internalHtml = `
		<!DOCTYPE html>
	<html>
	<head>
		<style>
			body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
			.container { max-width: 600px; margin: 0 auto; padding: 20px; }
			.header { background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); padding: 20px; border-radius: 8px 8px 0 0; }
			.header h1 { color: #00d4aa; margin: 0; font-size: 24px; }
			.content { background: #f9fafb; padding: 20px; border: 1px solid #e5e7eb; }
			.field { margin: 10px 0; }
			.field-label { font-weight: bold; color: #4b5563; }
			.field-value { color: #6b7280; }
			.footer { text-align: center; padding: 20px; color: #6b7280; font-size: 12px; }
		</style>
	</head>
	<body>
		<div class="container">
			<div class="header">
				<h1>🔌 New Quote Request</h1>
			</div>
			<div class="content">
				<p><strong>A new quote request has been submitted.</strong></p>
				<div class="field">
					<div class="field-label">Name:</div>
					<div class="field-value">${data.name}</div>
				</div>
				<div class="field">
					<div class="field-label">Email:</div>
					<div class="field-value">${data.email}</div>
				</div>
				<div class="field">
					<div class="field-label">Phone:</div>
					<div class="field-value">${data.phone || "Not provided"}</div>
				</div>
				<div class="field">
					<div class="field-label">Company:</div>
					<div class="field-value">${data.company}</div>
				</div>
				<div class="field">
					<div class="field-label">Service:</div>
					<div class="field-value">${getServiceLabel(data.service)}</div>
				</div>
				<div class="field">
					<div class="field-label">Timeline:</div>
					<div class="field-value">${data.timeline ? getTimelineLabel(data.timeline) : "Not specified"}</div>
				</div>
				<div class="field">
					<div class="field-label">Project Description:</div>
					<div class="field-value">${data.description.replace(/\n/g, "<br>")}</div>
				</div>
				<div class="field">
					<div class="field-label">Submitted:</div>
					<div class="field-value">${new Date().toLocaleString()}</div>
				</div>
			</div>
		</div>
	</body>
	</html>
	`;

	// Confirmation email to the customer
	const confirmHtml = `
	<!DOCTYPE html>
	<html>
	<head>
		<style>
			body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
			.container { max-width: 600px; margin: 0 auto; padding: 20px; }
			.header { background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); padding: 30px 20px; border-radius: 8px 8px 0 0; text-align: center; }
			.header h1 { color: #00d4aa; margin: 0; font-size: 28px; }
			.header p { color: rgba(255,255,255,0.8); margin: 10px 0 0 0; }
			.content { background: #f9fafb; padding: 30px 20px; border: 1px solid #e5e7eb; }
			.footer { background: #f3f4f6; padding: 20px; text-align: center; border-radius: 0 0 8px 8px; color: #6b7280; font-size: 14px; }
			.info-box { background: #e0f2fe; border-left: 4px solid #00bcd4; padding: 15px; margin: 20px 0; }
			.contact-info { text-align: center; margin: 20px 0; }
			.contact-info p { margin: 5px 0; }
		</style>
	</head>
	<body>
		<div class="container">
			<div class="header">
				<h1>Thank You for Your Inquiry!</h1>
				<p>We've received your quote request and will respond within 24 hours.</p>
			</div>
			<div class="content">
				<p>Hi ${data.name},</p>
				<p>Thank you for choosing Krka Power Inc. for your power distribution and automation needs.</p>

				<div class="info-box">
					<strong>Your Request Details:</strong><br>
					Service: ${getServiceLabel(data.service)}<br>
					${data.timeline ? `Timeline: ${getTimelineLabel(data.timeline)}<br>` : ""}
					We'll review your requirements and get back to you with a detailed proposal.
				</div>

				<div class="contact-info">
					<p><strong>Need immediate assistance?</strong></p>
					<p>📞 Phone: <a href="tel:9056910691">905 691-0691</a></p>
					<p>📧 Email: <a href="mailto:[email protected]">[email protected]</a></p>
				</div>
			</div>
			<div class="footer">
				<p><strong>Krka Power Inc.</strong> | Burlington, Ontario</p>
				<p>CSA Certified | Serving Ontario since 2013</p>
				<p><a href="https://krkapower.com">krkapower.com</a></p>
			</div>
		</div>
	</body>
	</html>
	`;

	try {
		// Send internal notification
		await transporter.sendMail({
			from: process.env.SMTP_FROM || "[email protected]",
			to: process.env.QUOTE_TO || "[email protected]",
			subject: `New Quote Request - ${data.company} - ${data.service}`,
			html: internalHtml,
		});

		// Send confirmation to customer (if email is valid)
		if (isCorporateEmail(data.email)) {
			await transporter.sendMail({
				from: process.env.SMTP_FROM || "[email protected]",
				to: data.email,
				subject: "Thank You for Your Quote Request - Krka Power Inc.",
				html: confirmHtml,
			});
		}
	} catch (error) {
		console.error("Failed to send email:", error);
		// Continue anyway - don't block the submission
	}
}

export const actions: Actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const name = data.get("name")?.toString().trim();
		const email = data.get("email")?.toString().trim().toLowerCase();
		const phone = data.get("phone")?.toString().trim();
		const company = data.get("company")?.toString().trim();
		const service = data.get("service")?.toString().trim();
		const timeline = data.get("timeline")?.toString().trim();
		const description = data.get("description")?.toString().trim();

		// Validation
		const errors: Record<string, string> = {};

		if (!name || name.length < 2) {
			errors.name = "Please enter your full name";
		}

		if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
			errors.email = "Please enter a valid email address";
		} else if (!isCorporateEmail(email)) {
			errors.email =
				"Please use your corporate email address (no Gmail, Yahoo, etc.)";
		}

		if (!company || company.length < 2) {
			errors.company = "Please enter your company name";
		}

		if (!service) {
			errors.service = "Please select a service type";
		}

		if (!description || description.length < 10) {
			errors.description =
				"Please provide a brief description of your project (min. 10 characters)";
		}

		if (Object.keys(errors).length > 0) {
			return fail(400, {
				errors,
				values: { name, email, phone, company, service, timeline, description },
			});
		}

		// Send email
		await sendQuoteEmail({
			name: name || "",
			email: email || "",
			phone: phone || "",
			company: company || "",
			service: service || "",
			timeline: timeline || "",
			description: description || "",
		});

		// Redirect to success page
		throw redirect(303, "/get-quote?success=true");
	},
};
