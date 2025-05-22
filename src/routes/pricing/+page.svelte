<script lang="ts">
	// Types
	import type { PageProps } from "./$types";

	// Components
	import Features from "$lib/components/layout/Features.svelte";
	import Testimonials from "$lib/components/layout/Testimonials.svelte";
	import CallToAction from "$lib/components/layout/CallToAction.svelte";
	import Pricing from "$lib/components/layout/Pricing.svelte";

	// Props
	const { data }: PageProps = $props();
</script>

<Pricing />

<Testimonials
  testimonials={[
    {
      name: "Anna Malik",
      position: "PCN Operations Manager",
      company: "Central London Primary Care",
      quote:
        "We cut our admin load by half within 2 weeks—which gave our in-house team time to actually focus on patients again.",
      image: "/generated/image-portrait-of-anna-malik-a-south-asian-wom.webp"
    },
    {
      name: "Dr. Reena Malik",
      position: "GP Partner",
      company: "Northwest Family Practice",
      quote:
        "The doctors are fast, reliable, and clearly well-trained. Honestly, I wasn’t expecting it to work this smoothly.",
      image: "/generated/image-portrait-of-dr-reena-malik-a-south-asian.webp"
    },
    {
      name: "Stephen Ascott",
      position: "CEO",
      company: "Urgent Health 24",
      quote:
        "We projected months to find additional GP cover. Asterix gave us three fully registered doctors in a fortnight.",
      image: "/generated/image-portrait-of-stephen-ascott-a-white-briti.webp"
    }
  ]}
/>

<CallToAction
  title="The fastest, most affordable way to solve your clinical staffing gaps"
  subtitle="Asterix Health gives you instant access to qualified, UK-registered doctors—at up to 60% lower cost."
  description="No workflow changes. No compromise on safety. Just safe, simple, scalable remote support. Book a free intro call and see how fast NHS staffing can be."
  imageSrc="/generated/image-a-cheerful-healthcare-manager-with-a-war.webp"
  callsToAction={[{ href: '/contact', label: 'Book your free intro call', variant: 'primary' }]}
/>
