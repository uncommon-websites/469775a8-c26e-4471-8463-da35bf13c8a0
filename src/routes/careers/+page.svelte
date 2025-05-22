<script lang="ts">
	// Types

	// Components
	import SectionHeader from "$lib/components/layout/SectionHeader.svelte";
	import Culture from "$lib/components/layout/Culture.svelte";
	import Testimonials from "$lib/components/layout/Testimonials.svelte";
	import SecondaryHero from "$lib/components/layout/hero-sections/SecondaryHero.svelte";
	import Card from "$lib/components/ui/Card.svelte";
	import JobList, { type JobOpening } from "./JobList.svelte";

	// Icons
	import IconBriefcase from "~icons/lucide/briefcase";
	import IconUsers from "~icons/lucide/users";
	import IconHeart from "~icons/lucide/heart";
	import IconGlobe from "~icons/lucide/globe";

	// Constants
	const SECTION_BASE_CLASSES = "section-py section-px container mx-auto";
	const GRADIENT_BG_CLASSES =
		"bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800";
	const ICON_CONTAINER_CLASSES =
		"bg-primary-50 text-primary-600 dark:bg-primary-950 dark:text-primary-400 flex items-center justify-center rounded-full";

	const benefits = [
  {
    title: "Make a real impact",
    description: "Help fix the UK's healthcare staffing crisis and shape the future of care delivery.",
    icon: IconBriefcase
  },
  {
    title: "Learn from experts",
    description: "Collaborate with healthcare leaders, NHS advisors, and clinical innovators.",
    icon: IconUsers
  },
  {
    title: "Grow your career globally",
    description: "Access unique professional development and build a cross-border career in healthcare.",
    icon: IconHeart
  }
];

	const openings: JobOpening[] = [
		// Engineering
		{
			title: "Senior Frontend Developer",
			department: "Engineering",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},
		{
			title: "Backend Engineer",
			department: "Engineering",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},
		{
			title: "Design Engineer",
			department: "Engineering",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},

		// Design
		{
			title: "UX/UI Designer",
			department: "Design",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},
		{
			title: "Product Designer",
			department: "Design",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},

		// Product
		{
			title: "Product Manager",
			department: "Product",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},
		{
			title: "Product Analyst",
			department: "Product",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},

		// Marketing
		{
			title: "Marketing Specialist",
			department: "Marketing",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},
		{
			title: "Content Strategist",
			department: "Marketing",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},
		{
			title: "Social Media Manager",
			department: "Marketing",
			location: "Remote",
			type: "Full-time",
			url: "#"
		}
	];

	const employeeTestimonials = [
  {
    name: "Dr. Nazeera Mahendran",
    position: "GP, clinician team (Malaysia)",
    company: "Clinical Team",
    quote: "Working with Asterix Health has been incredible. I get to support primary care teams in the UK, stay clinically sharp, and have true work-life balance—without relocating or burning out.",
    image: "/generated/image-a-professional-headshot-of-a-malaysian-f.webp"
  },
  {
    name: "Callum Reyes",
    position: "Operations associate",
    company: "Operations Team",
    quote: "I joined early thinking this would be a startup with big ambition—and I was right. I'm learning every week, working with smart, kind people solving a real crisis in healthcare staffing.",
    image: "/generated/professional-headshot-of-a-young-hispanic-male-in-o.webp"
  },
  {
    name: "Anaya Patel",
    position: "Head of product",
    company: "Product Team",
    quote: "We're building tools that expand what clinicians and ops teams can do—safe, simple, compliant. Everyone here moves fast but with real purpose. It's energizing.",
    image: "/generated/professional-headshot-of-a-south-asian-woman-in-p.webp"
  }
];

	const processSteps = [
  {
    step: 1,
    title: "Submit interest",
    description:
      "Send a quick application—no CV required. Tell us about your background and, if clinical, your GMC/UK credentials."
  },
  {
    step: 2,
    title: "Intro call",
    description: "We’ll set up a video chat to learn about your experience and answer your questions within a week."
  },
  {
    step: 3,
    title: "Clinical & team interview",
    description:
      "Doctors will have a review with our leadership for safety, language, and readiness. All candidates connect with the core team."
  },
  {
    step: 4,
    title: "Offer & onboarding",
    description:
      "Get fast feedback. Join us for compliance training, tech setup, and tailored orientation. Most finish in under two weeks."
  }
];

	const values = [
  {
    icon: IconHeart,
    title: "Patients come first",
    description: "Every decision starts with clinical quality and real-world outcomes."
  },
  {
    icon: IconUsers,
    title: "Move fast, support each other",
    description: "We build quickly, grow together, and favour action. Collaboration beats hierarchy."
  },
  {
    icon: IconGlobe,
    title: "Global perspective, local impact",
    description: "We blend UK health system expertise with a global network for 24/7 coverage and new ideas."
  }
];
</script>

<!-- Hero Section -->

<SecondaryHero
	title="Empowering care. Everywhere."
	subtitle="Join a global team transforming UK healthcare—remotely, inclusively, and with purpose"
	imageSrc="/generated/image-a-diverse-group-of-healthcare-profession.webp"
/>

<!-- Why Join Us Section -->
<section class={SECTION_BASE_CLASSES}>
	<SectionHeader title="Why join us?" subtitle="Build your career while making an impact" />

	<div class="mt-16 grid gap-4 md:grid-cols-3">
		{#each benefits as benefit}
			<Card {...benefit} />
		{/each}
	</div>
</section>

<!-- Culture Section -->
<Culture {values} />

<Testimonials testimonials={employeeTestimonials} />

<!-- Application Process -->
<section class={SECTION_BASE_CLASSES}>
	<div class="mx-auto">
		<h2 class="text-title1 mb-16">Our application process</h2>

		<div class="grid gap-12 md:grid-cols-3">
			{#each processSteps as { step, title, description }, i}
				<div class="flex flex-col">
					<div class="{ICON_CONTAINER_CLASSES} mb-6 size-11">
						<span class="text-headline">{step}</span>
					</div>
					<h3 class="text-headline mb-3">{title}</h3>
					<p class="text-body text-emphasis-low">{description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>
<!-- Current Openings Section -->
<section class={GRADIENT_BG_CLASSES}>
	<div class="section-px section-py container mx-auto grid w-full items-start lg:grid-cols-2">
		<SectionHeader title="Current openings" subtitle="Find your perfect role" />

		<JobList {openings} />
	</div>
</section>
