export interface CategoryGuide {
  overview: string[];
  sections: Array<{ heading: string; body: string }>;
  faqs: Array<{ question: string; answer: string }>;
  relatedTerms: string[];
}

/** Editorial copy for category hubs. These paragraphs are intentionally separate from card data. */
export const categoryGuides: Record<string, CategoryGuide> = {
  ocean: {
    overview: [
      "Ocean discovery is the study of a world that is physically close to us but still difficult to reach. Pressure, darkness, cold, distance from shore, and the cost of operating a research vessel all limit what scientists can observe. As a result, a new ocean discovery can be a species, a habitat, a geological process, or a clue about how life survives without sunlight. The catalogue brings these findings together so a named animal can be understood alongside the seafloor, expedition, and chemistry that make its existence possible.",
      "The strongest ocean discoveries connect field observation with careful identification. A remotely operated vehicle may record an unusual animal, but taxonomy, genetics, microscopy, and repeat observations are what establish whether it is genuinely new. This distinction matters in the deep sea, where a striking appearance is not by itself proof of a new species. The Nucleon follows that chain from where a discovery was made to what it changes about our understanding of marine life.",
    ],
    sections: [
      { heading: "From sunlight to the hadal zone", body: "The ocean is not one uniform environment. Coral reefs, open-water habitats, abyssal plains, hydrothermal vents, and trenches each impose different physical and biological conditions. Depth is therefore a useful organising principle: it helps explain why a transparent fish, iron-armoured snail, or pigmentless octopus can evolve traits that would be unnecessary or impossible near the surface." },
      { heading: "Why expeditions matter", body: "Most marine discoveries are collaborative. A research vessel supplies the navigation and sampling platform; an ROV or submersible supplies the eyes and hands; museums, universities, and reference collections preserve the evidence. Reading an entry with its institution and location keeps the headline discovery connected to the scientific work that made it credible." },
    ],
    faqs: [
      { question: "Why are new ocean species still being found?", answer: "Much of the seafloor and deep water has never been observed at the resolution needed for species identification. New expeditions continue to sample habitats that have been visited rarely or never." },
      { question: "Does a video prove that an animal is a new species?", answer: "Usually not. Video can document appearance and behaviour, but formal identification often requires anatomy, genetics, or comparison with preserved material." },
      { question: "What is a hydrothermal vent?", answer: "It is a seafloor opening where chemically altered, heated water enters the ocean. Vent ecosystems use chemical energy rather than sunlight as the foundation of their food webs." },
    ],
    relatedTerms: ["deep sea", "hydrothermal vent", "ROV", "chemosynthesis", "coral reef", "taxonomy"],
  },
  space: {
    overview: [
      "Space discoveries turn faint signals into physical knowledge. A periodic dip in starlight can reveal a planet; a radio pattern can expose a black-hole environment; a carefully timed gravitational-wave signal can confirm that two massive objects merged. The catalogue treats these results as measurements before they become headlines, explaining the instrument, observing strategy, and uncertainty behind each claim.",
      "Astronomy also rewards patient comparison. A single observation may suggest an exoplanet or transient event, but follow-up telescopes establish its orbit, mass, composition, or distance. The same approach helps separate a genuine cosmic object from an instrumental artifact. Each entry is therefore connected to an observatory, mission, or collaboration so readers can follow how evidence moved from detector to discovery.",
    ],
    sections: [
      { heading: "Seeing what cannot be visited", body: "Astronomers rarely collect their objects directly. They infer them from light, radio waves, particle showers, and changes in motion. That makes calibration, repeated observations, and statistical confidence central parts of discovery. Images are powerful, but many of the most important results are built from data that cannot be seen with the naked eye." },
      { heading: "Worlds, stars, and extreme physics", body: "The space catalogue spans nearby planets, stellar remnants, galaxies, and the physics of the early universe. Taken together, these discoveries show how the same laws operate across radically different scales—from the atmosphere of a rocky planet to the shadow of a supermassive black hole." },
    ],
    faqs: [
      { question: "How is an exoplanet discovered?", answer: "Common methods include measuring a star's dimming when a planet transits and detecting the star's reflex motion through radial velocity." },
      { question: "Why do space discoveries need follow-up observations?", answer: "Follow-up observations test whether an initial signal is real and measure additional properties such as mass, orbit, temperature, or composition." },
      { question: "What does a telescope image actually show?", answer: "It shows detected radiation processed into a visual representation. Colour may encode wavelength or intensity rather than what human eyes would see." },
    ],
    relatedTerms: ["exoplanet", "transit", "spectroscopy", "black hole", "gravitational wave", "observatory"],
  },
  "dinosaurs-fossils": {
    overview: [
      "Fossils are not simply old bones; they are preserved evidence of bodies, environments, behaviour, and geological time. A new dinosaur or fossil mammal can change a family tree, extend the known range of a group, or reveal an adaptation that was previously invisible. The Nucleon presents fossil discoveries with the rock layer, location, and reconstruction choices that allow scientists to move from a fragment in the ground to a testable account of ancient life.",
      "Interpretation is especially important in palaeontology because the original organism is incomplete. Teeth, footprints, skin impressions, and sediment can each tell a different part of the story. A responsible reconstruction distinguishes what is directly preserved from what is inferred by comparing living relatives, biomechanics, and the surrounding environment.",
    ],
    sections: [
      { heading: "Reading deep time", body: "Stratigraphy provides the timeline that gives a fossil meaning. The age of a layer, the fossils found beside it, and the chemistry of the surrounding rock help establish when an organism lived and what kind of environment it occupied." },
      { heading: "From specimen to species", body: "Naming a fossil species requires diagnostic features that distinguish it from known relatives. Modern imaging and digital modelling increasingly allow researchers to examine internal anatomy without destroying rare specimens." },
    ],
    faqs: [
      { question: "How do scientists know how old a fossil is?", answer: "They combine the age of the surrounding rocks, radiometric dating where possible, and the fossil's position within a well-studied sequence of layers." },
      { question: "Why are dinosaur reconstructions sometimes revised?", answer: "New fossils, improved biomechanics, and better comparisons with living animals can change conclusions about posture, movement, colour, or behaviour." },
      { question: "What makes a fossil species new?", answer: "It must have a combination of anatomical features that is not already documented in another species." },
    ],
    relatedTerms: ["fossil", "stratigraphy", "palaeontology", "mass extinction", "trace fossil", "evolution"],
  },
  biology: {
    overview: [
      "Biology discoveries reveal how living systems are built, inherited, adapted, and changed. They range from a species previously missed by taxonomy to a molecular mechanism that explains how cells copy information. The catalogue connects these scales rather than treating them as separate stories: an organism's form reflects its environment, while its genes and chemistry provide the mechanisms that make that form possible.",
      "Good biological discovery depends on comparison. Researchers distinguish a new species from a variable population, a new gene function from a correlation, and a laboratory result from what occurs in nature. Specimens, sequence data, controlled experiments, and ecological observations each provide different kinds of evidence. The pages in this section make those methods visible alongside the result.",
    ],
    sections: [
      { heading: "Life is easier to find than to define", body: "A photograph may reveal an organism, but classification requires stable features and a relationship to known life. Molecular tools have widened the search while also showing how much diversity is hidden in apparently familiar environments." },
      { heading: "From molecules to ecosystems", body: "The same principles of selection, information transfer, and energy use appear at multiple levels. A catalytic RNA, an unusual animal, and a microbial community can all illuminate different parts of the history and organisation of life." },
    ],
    faqs: [
      { question: "How is a new species confirmed?", answer: "Scientists compare its anatomy, genetics, behaviour, and ecology with related organisms and document features that consistently distinguish it." },
      { question: "Why is DNA useful in biology discoveries?", answer: "DNA can reveal relationships and differences that are difficult to see from appearance alone, especially in small or visually similar organisms." },
      { question: "What is the RNA-world hypothesis?", answer: "It is the idea that early life may have relied on RNA for both information storage and chemical catalysis before modern DNA-protein biology evolved." },
    ],
    relatedTerms: ["taxonomy", "genome", "ribozyme", "evolution", "microbiology", "ecosystem"],
  },
  archaeology: {
    overview: [
      "Archaeological discovery is the reconstruction of human lives from material traces. A settlement, burial, tool, inscription, or ritual site becomes meaningful only when its position, surrounding objects, and chronology are recorded together. The Nucleon focuses on the evidence that lets researchers distinguish a dramatic interpretation from a conclusion supported by context.",
      "New technology has widened what archaeology can recover. Remote sensing can identify structures beneath vegetation, chemical analysis can trace materials across trade routes, and careful excavation can reveal activity that left no written record. These techniques do not replace fieldwork; they help researchers ask sharper questions while protecting the relationship between an object and the place where it was found.",
    ],
    sections: [
      { heading: "Context is the evidence", body: "An artefact separated from its layer loses much of its meaning. Archaeologists record associations, construction phases, soil changes, and the sequence of occupation so that an object can be interpreted as part of a human system." },
      { heading: "History beyond written records", body: "Archaeology can recover the activities of people who left few documents. Food remains, architecture, craft debris, and landscape changes can reveal economies and beliefs that written histories overlook." },
    ],
    faqs: [
      { question: "How are archaeological discoveries dated?", answer: "Methods include stratigraphy, radiocarbon dating, ceramic sequences, tree rings, and comparisons with securely dated sites." },
      { question: "Why does excavation change a site?", answer: "Excavation removes layers permanently, so recording and preservation are essential parts of the scientific process." },
      { question: "Can remote sensing prove what is underground?", answer: "It can identify patterns consistent with buried structures, but excavation or other evidence is usually needed to confirm their identity and age." },
    ],
    relatedTerms: ["stratigraphy", "radiocarbon dating", "remote sensing", "artefact", "settlement", "conservation"],
  },
  "earth-science": {
    overview: [
      "Earth-science discoveries explain a planet that is constantly changing beneath apparently stable landscapes. Volcanic deposits, earthquakes, ice cores, and ancient shorelines preserve records of processes that unfold over seconds, centuries, or millions of years. The catalogue brings these timescales together and shows how field measurements become evidence about Earth's interior, climate, and surface history.",
      "The discipline is unusually dependent on context. A rock is not just a sample; its position, neighbouring layers, mineral chemistry, and structural setting determine what it can reveal. Researchers combine direct observations with models and historical records, making uncertainty part of the explanation rather than something to hide.",
    ],
    sections: [
      { heading: "A planet written in layers", body: "Sediment, lava, ice, and fault zones preserve different kinds of history. Reading them together helps scientists separate local events from global changes and short-lived shocks from long trends." },
      { heading: "Why Earth science matters now", body: "Understanding past eruptions, climate shifts, and seismic behaviour improves present-day risk assessment. Discovery is therefore not only about ancient events; it also supports decisions about communities and infrastructure." },
    ],
    faqs: [
      { question: "What can an ice core tell scientists?", answer: "Layers of ice preserve bubbles, dust, and chemical signatures that can record past atmospheric composition and climate conditions." },
      { question: "Why do volcanic timelines change?", answer: "Improved dating and newly identified layers can reveal that eruptions occurred earlier, later, or in a different sequence than previously thought." },
      { question: "How are earthquakes studied?", answer: "Researchers combine seismic waves, fault mapping, GPS measurements, historical records, and laboratory models of rock behaviour." },
    ],
    relatedTerms: ["volcano", "earthquake", "ice core", "climate record", "plate tectonics", "stratigraphy"],
  },
  physics: {
    overview: [
      "Physics discoveries test the rules that connect matter, energy, space, and time. Some are made by observing a rare particle in a collider; others emerge when a quantum system behaves in a way classical intuition cannot explain. The Nucleon presents these findings with the measurement and theoretical question that made them significant, so a result is not reduced to an impressive name or a single number.",
      "The field advances through increasingly precise disagreement. A new result matters when it survives calibration checks, independent analysis, and comparison with existing theory. That is why discovery-level claims are often followed by years of confirmation and refinement. The catalogue keeps the distinction between an observation, an interpretation, and a settled physical principle visible to readers.",
    ],
    sections: [
      { heading: "Precision is the instrument", body: "Particle detectors, interferometers, quantum processors, and fusion experiments all turn invisible processes into measurable signals. Their engineering is part of the discovery story because sensitivity determines which questions can be asked." },
      { heading: "When theory meets data", body: "Physics is a conversation between mathematical models and experiments. A result can confirm a prediction, reveal a missing ingredient, or open a conflict that points toward a deeper theory." },
    ],
    faqs: [
      { question: "What does discovery-level significance mean?", answer: "It is a statistical threshold used in particle physics to indicate that a signal is very unlikely to be a random fluctuation under the tested background model." },
      { question: "Why are physics results independently checked?", answer: "Small calibration errors or unmodelled backgrounds can imitate a signal, so independent analyses and later experiments strengthen confidence." },
      { question: "What is quantum supremacy?", answer: "It refers to a computation performed by a quantum processor that is impractical for a comparable classical system, under a defined benchmark." },
    ],
    relatedTerms: ["quantum mechanics", "particle physics", "fusion", "interferometer", "standard model", "relativity"],
  },
  technology: {
    overview: [
      "Technology discoveries are changes in what humans can build, measure, automate, or compute. They are scientific when the underlying material, algorithm, or process is tested and explained—not simply because a product is new. The Nucleon places technical breakthroughs beside the research problem they address, the constraints that shaped the solution, and the evidence that demonstrates it works.",
      "A useful technology page should also show its limits. A laboratory prototype may prove a principle without being ready for mass production; a benchmark may demonstrate speed without establishing reliability in the real world. Keeping those distinctions clear makes the catalogue more valuable than a stream of hype and helps readers understand what has actually changed.",
    ],
    sections: [
      { heading: "From demonstration to deployment", body: "Most technologies pass through stages: a physical or computational principle, a controlled demonstration, engineering refinement, and adoption in a real setting. Discovery occurs at several of these points, but each has a different standard of evidence." },
      { heading: "The systems around the invention", body: "Materials, energy, software, manufacturing, and human use all shape whether an invention matters. A technical discovery becomes historically important when it changes what a broader system can do." },
    ],
    faqs: [
      { question: "Is every new technology a scientific discovery?", answer: "No. A product launch can be commercially new without adding a new scientific or engineering capability. Discovery pages focus on demonstrated principles and documented breakthroughs." },
      { question: "Why do prototypes often take years to become useful?", answer: "Reliability, cost, manufacturing scale, safety, and integration with existing systems can be harder than proving the underlying idea." },
      { question: "What makes a technology result credible?", answer: "Clear methods, reproducible testing, meaningful benchmarks, and transparent limits are stronger evidence than a marketing claim." },
    ],
    relatedTerms: ["robotics", "artificial intelligence", "quantum computing", "materials science", "prototype", "benchmark"],
  },
};

export function getCategoryGuide(slug: string): CategoryGuide {
  return categoryGuides[slug] ?? {
    overview: ["This field brings together discoveries that expand what we know about the natural world and the methods used to study it."],
    sections: [],
    faqs: [],
    relatedTerms: [],
  };
}
