<script lang="ts">
	// Components
	import UseCases from "$lib/components/layout/UseCases.svelte";
	import Summary from "$lib/components/layout/Summary.svelte";
	import Features from "$lib/components/layout/Features.svelte";
	import Testimonials from "$lib/components/layout/Testimonials.svelte";
	import CallToAction from "$lib/components/layout/CallToAction.svelte";
	import AboutTeaser from "$lib/components/layout/AboutTeaser.svelte";
	import LogoScroller from "$lib/components/layout/LogoScroller.svelte";
	import CustomerCardHero from "$lib/components/layout/hero-sections/CustomerCardHero.svelte";
</script>

<CustomerCardHero
  centered={false}
  title="Affordable clinical cover, without the hassle"
  subtitle="Fully compliant, GMC-registered remote clinicians that fit into your existing NHS workflows—ready to support your team and save you money."
  customers={[
    {
      name: "Dr. Simon Bennett",
      position: "GP, Bridgewater Practice",
      imageSrc: "/generated/image-a-british-male-gp-in-a-clean-and-well-li.webp"
    },
    {
      name: "Dr. Helen Carter",
      position: "GP, Willow View Surgery",
      imageSrc: "/generated/image-a-british-female-gp-in-a-bright-and-spac.webp"
    },
    {
      name: "James Stewart",
      position: "NHS 111 Clinical Manager",
      imageSrc: "/generated/image-a-british-male-nhs-111-clinical-manager-.webp"
    },
    {
      name: "Rachel Owen",
      position: "GP Surgery Manager, Parkside Health",
      imageSrc: "/generated/image-a-british-female-gp-surgery-manager-in-a.webp"
    },
    {
      name: "Matthew Green",
      position: "Founder, MedTech Connect",
      imageSrc: "/generated/image-a-british-male-health-tech-founder-in-a-.webp"
    }
  ]}
/>

<LogoScroller
  label="Trusted by industry leaders"
  logoUrls={[
    'https://logo.clearbit.com/spirehealthcare.com',
    'https://logo.clearbit.com/circlehealthgroup.co.uk',
    'https://logo.clearbit.com/virgincare.co.uk'
  ]}
/>

<Summary
	title="What we do"
	text="Asterix Health gives UK healthcare providers instant access to GMC-registered doctors overseas—at 60% lower cost. We provide compliant, remote clinical staff who integrate into existing NHS workflows, helping you solve staffing shortages efficiently and affordably."
/>

<Testimonials
	testimonials={[
		{
			name: "Siobhan Carver",
			position: "Practice Manager, Birchwell Surgery",
			quote: "We've saved over 12 hours a week on clinical admin. That time now goes back into patients—where it should be.",
			image: "/generated/image-a-woman-in-a-gp-practice-office-dressed-.webp"
		},
		{
			name: "Bryn Emberson",
			position: "Director of Operations, NorthEast GP Federation",
			quote: "Asterix cut our locum dependency by 80%. We finally have continuity—and zero last-minute rota scrambles.",
			image: "/generated/image-a-man-standing-confidently-in-an-nhs-adm.webp"
		},
		{
			name: "Eilidh Masson",
			position: "Clinical Director, Allleigh Integrated Care Board",
			quote: "We’ve reduced clinical backfill costs by 58%, and the care quality hasn’t dropped a bit. Feels like the future of NHS staffing.",
			image: "/generated/image-a-woman-in-a-healthcare-boardroom-wearin.webp"
		}
	]}
/>

<Features
  title="Key features"
  subtitle="What sets Asterix Health apart"
  features={[
    {
      title: "NHS-approved clinical staffing",
      description: "The first and only provider with written approval from the NHS national team."
    },
    {
      title: "60% lower cost, same high standards",
      description: "Access UK-registered doctors at a fraction of the usual price, with no compromise on quality."
    },
    {
      title: "Remote GMC-registered clinicians",
      description: "All doctors are fully qualified in the UK and integrated with NHS-approved systems."
    },
    {
      title: "Fits your existing workflow",
      description: "No new tech to learn—our doctors work inside your current NHS processes."
    },
    {
      title: "Day and night cover across time zones",
      description: "Clinicians work UK day or night shifts, leveraging global time differences for true 24/7 support."
    },
    {
      title: "Future-ready with AI integration",
      description: "We’re advancing toward up to 90% savings as AI supports clinical tasks alongside our team."
    }
  ]}
/>

<UseCases
  title="Use Cases"
  subtitle="Real-world applications for your business needs"
  useCases={[
    {
      title: "Remote clinical admin for GP practices",
      description: "Free up GPs by delegating lab results, letters, and admin tasks to qualified overseas doctors—no changes to your existing systems required.",
      image: "/generated/image-a-doctor-of-diverse-background-carefully.webp",
      link: {
        href: "/use-cases/clinical-admin-gp",
        label: "Learn more"
      }
    },
    {
      title: "Overnight rota cover for out-of-hours services",
      description: "Staff evenings and nights with GMC-registered doctors in different time zones—all working securely through NHS-approved platforms.",
      image: "/generated/image-a-dedicated-healthcare-team-working-toge.webp",
      link: {
        href: "/use-cases/out-of-hours-cover",
        label: "Learn more"
      }
    },
    {
      title: "Overflow triage for NHS 111",
      description: "Add remote clinicians instantly for peak demand—keep call times low and quality high, without the cost or hassle of short-term locums.",
      image: "/generated/image-a-cheerful-nhs-call-handler-exuding-warm.webp",
      link: {
        href: "/use-cases/nhs-111-overflow",
        label: "Learn more"
      }
    }
  ]}
/>

<AboutTeaser />
<CallToAction
  title="UK-registered doctors. 60% lower cost."
  subtitle="NHS-approved remote staffing, ready when you are."
  description="Trusted by NHS leaders, Asterix Health gives you fully compliant remote doctors with GMC registration—using your systems, no workflow changes. NHS-approved and ready to start at a fraction of local staffing costs."
  imageSrc="/generated/image-a-smiling-british-nhs-gp-in-a-contempora.webp"
  callsToAction={[
    { href: "/contact", label: "Book a call", variant: "primary" },
    { href: "/how-it-works", label: "How it works", variant: "secondary" }
  ]}
/>
