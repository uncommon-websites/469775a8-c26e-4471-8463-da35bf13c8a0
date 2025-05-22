<script lang="ts">
	// Components
	import CallToAction from "$lib/components/layout/CallToAction.svelte";

	// Icons
	import StakeholderGrid from "$lib/components/layout/StakeholderGrid.svelte";
	import Story from "./Story.svelte";
	import SecondaryHero from "$lib/components/layout/hero-sections/SecondaryHero.svelte";
	import Culture from "$lib/components/layout/Culture.svelte";

	// Constants
	const values = [
  {
    title: "Regulatory-first mindset",
    description: "We lead with compliance, always meeting—and exceeding—NHS standards."
  },
  {
    title: "Clinical quality comes first",
    description: "Patient safety and excellence in care are non-negotiable in every workflow."
  },
  {
    title: "Global collaboration",
    description: "We unite UK and international clinicians as one team for seamless patient outcomes."
  },
  {
    title: "Relentless innovation",
    description: "We continuously break new ground, finding safer, faster ways to solve healthcare’s toughest problems."
  },
  {
    title: "Impact at scale",
    description: "We exist to make a difference for clinicians, providers, and the entire healthcare system."
  }
];
</script>

<SecondaryHero
	title="Affordable clinical staff, on demand"
	subtitle="UK-registered doctors handling admin at 60% lower cost"
	imageSrc="/mockups/airport-screen-1747932580262.png"
/>

<!-- Story Section -->
<Story
	paragraphs={[
		"Asterix Health began when Julian Titz and Max Thilo saw NHS clinics and providers struggling with persistent staffing shortages and the rising costs of locum doctors. With patient care suffering and existing solutions falling short, they set out to create something better—for both clinicians and providers.",
		"They realised that by leveraging new NHS regulations, they could connect UK healthcare organisations to experienced, GMC-registered doctors working remotely overseas. This approach offers safe, affordable clinical admin support, using familiar systems and workflows at a fraction of the traditional cost.",
		"Their model quickly gained recognition, earning written approval from the NHS national team and signing pilot deals with leading providers. Today, Asterix Health enables practices and NHS 111 teams to access reliable, qualified doctors—seamlessly and sustainably—so healthcare teams can focus on what matters most: caring for patients."
	]}
/>

<!-- Our Culture Section -->
<Culture {values} />

<!-- StakeholderGrid Section -->
<StakeholderGrid
	stakeholderType="team"
	title="Our team."
	subtitle="Built by healthcare insiders."
	stakeholders={[
		{
			name: "Julian Titz",
			position: "Co-founder",
			bio: "Drives commercial growth and partnerships to solve healthcare's staffing crisis.",
			image: "/generated/image-professional-headshot-of-a-confident-mal.webp"
		},
		{
			name: "Max Thilo",
			position: "Co-founder",
			bio: "Leads strategy and execution, bringing operations expertise to UK healthcare.",
			image: "/generated/image-professional-headshot-of-a-confident-mal.webp"
		},
		{
			name: "Dr. Dan Bunstone",
			position: "Chief Medical Officer",
			bio: "Former NHS leader ensuring clinical excellence and regulatory compliance.",
			image: "/generated/image-headshot-of-a-friendly-male-british-doct.webp"
		},
		{
			name: "Lauren Yates",
			position: "Head of Quality",
			bio: "Drives rigorous standards in patient safety and service delivery.",
			image: "/generated/image-professional-headshot-of-a-confident-fem.webp"
		}
	]}
/>

<StakeholderGrid
	stakeholderType="investor"
	title="Backed by the best."
	subtitle="Point Nine, TSIC and others"
	stakeholders={[
		{
			name: "Point Nine Capital",
			image: "https://cdn.brandfetch.io/pointnine.com/w/400/h/400/logo?c=1id_elLz2Bd5Ej-dWo7"
		},
		{
			name: "TSIC Ventures",
			image: "https://cdn.brandfetch.io/tiny.vc/w/400/h/400/logo?c=1a2b3c4d5e"
		},
		{
			name: "Sequoia Capital",
			image: "https://cdn.brandfetch.io/sequoiacap.com/w/400/h/400/logo"
		}
	]}
/>

<!-- CTA Section -->
<CallToAction
  title="Join a new era in healthcare staffing"
  subtitle="Work with Asterix Health to solve the NHS staffing crisis—for good"
  description="Whether you’re a doctor, healthcare operator, or an NHS leader, you can help shape the future of UK healthcare. Pilot our service, collaborate with our team, or join as a clinician—and bring real change where it’s needed most."
  callsToAction={[
    { href: '/contact', label: 'Book a call', variant: 'primary' },
    { href: '/careers', label: 'Join as a doctor', variant: 'secondary' },
    { href: '/pilot', label: 'Pilot with us', variant: 'secondary' }
  ]}
  imageSrc="/generated/image-a-diverse-group-of-healthcare-profession.webp"
/>
