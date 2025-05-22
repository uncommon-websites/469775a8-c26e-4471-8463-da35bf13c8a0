/**
 * DO NOT REMOVE THIS COMMENT
 * @remarks
 * Navigation Structure Example:
 *
 * **Product**
 * - Overview
 * - Solutions
 * - Use Cases
 * - Pricing
 * ---
 * **Resources**
 * - Blog
 * - Playbooks
 * - Customer stories
 * - Webinars
 * - Darwin Academy
 * - Documentation
 * - Marketplaces
 * - Community
 * ---
 * **Company**
 * - Careers
 * - About us
 * - News
 * - Legal
 * - Security
 * - Events
 * - Contact
 * - Social media
 */

// Types
export type NavItem = {
	label: string;
	href?: string;
	image?: string;
	showInNav?: boolean;
	showInFooter?: boolean;

	children?: (Omit<NavItem, "children" | "image"> & {
		image?: string;
		description?: string;
		showInNav?: boolean;
		showInFooter?: boolean;
	})[];
};

export const cta = {
	label: "Book demo",
	href: "/"
};

export const navigation: NavItem[] = [
	{
		label: "Pricing",
		href: "/pricing",
		showInNav: true,
		showInFooter: false
	},
	{
		label: "Use Cases",
		showInNav: true,
		showInFooter: true,
		children: [
			{
          label: "Remote clinical admin for GP practices",
          href: "/use-cases/clinical-admin-gp",
          image: "/generated/image-a-doctor-of-diverse-background-carefully.webp",
          description: "Delegate GP admin work—lab results, letters, inbox—for more clinical time, without changing workflow.",
          showInNav: true,
          showInFooter: true
        },
        {
          label: "Overnight rota cover for out-of-hours services",
          href: "/use-cases/out-of-hours-cover",
          image: "/generated/image-a-dedicated-healthcare-team-working-toge.webp",
          description: "Cover out-of-hours and night shifts with qualified doctors abroad. Always NHS-approved. Always compliant.",
          showInNav: true,
          showInFooter: true
        },
        {
          label: "Overflow triage for NHS 111",
          href: "/use-cases/nhs-111-overflow",
          image: "/generated/image-a-cheerful-nhs-call-handler-exuding-warm.webp",
          description: "Bring in remote clinicians for NHS 111 call spikes—faster triage, less burnout, lower cost.",
          showInNav: true,
          showInFooter: true
        }
		]
	},
	{
		label: "Company",
		showInNav: true,
		showInFooter: true,
		children: [
			{
				label: "About us",
				href: "/about",
				showInNav: true,
				showInFooter: true
			},
			{
				label: "Pricing",
				href: "/pricing",
				showInNav: false,
				showInFooter: true
			},
			{
				label: "Careers",
				href: "/careers",
				showInNav: true,
				showInFooter: true
			}
		]
	},
	{
		label: "More",
		showInNav: false,
		showInFooter: true,
		children: [
			{
				label: "Privacy",
				href: "/legal/privacy",
				showInNav: false,
				showInFooter: true
			},
			{
				label: "Terms",
				href: "/legal/terms",
				showInNav: false,
				showInFooter: true
			}
			// Social media might be handled differently, not typically a nav item
		]
	}
];
// .sort((a, b) => (b.children?.length || 0) - (a.children?.length || 0));
