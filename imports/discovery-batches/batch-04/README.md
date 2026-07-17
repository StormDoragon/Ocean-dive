# Beyond Signal Discovery Batch 04

## Scope

Batch 04 is an additive import of 20 discoveries into Beyond Signal. It starts from the verified 111-discovery `main` baseline that contains the Batch 03 merge commit `8f0a63d7270e4ca0747f6120eba7342f48c9e9e5`; the expected catalog total after registration is 131.

- Research cutoff: 2026-07-17
- Years: 4 discoveries each from 2022, 2023, 2024, 2025, and 2026
- Catalog change: 111 → 131 (+20)
- Prior batches: unchanged

## Selections

### 2022

- `wasp-39b-carbon-dioxide` — *Webb Detects Carbon Dioxide in WASP-39 b’s Atmosphere* (`space`, source-verified)
- `global-ocean-rna-viruses` — *A Global Ocean Census of RNA Viruses* (`ocean`, source-verified)
- `mandrin-modern-human-incursion` — *Modern Humans at Grotte Mandrin 54,000 Years Ago* (`archaeology`, source-verified)
- `strange-pentaquark-candidate` — *LHCb’s Strange Pentaquark Candidate* (`physics`, preliminary)

### 2023

- `methyl-cation-protoplanetary-disk` — *JWST Detects the Methyl Cation in a Protoplanetary Disk* (`space`, source-verified)
- `nyayanga-oldowan-hippo-butchery` — *Oldowan Tools at Nyayanga Butchered Hippos* (`archaeology`, source-verified)
- `anteromedial-thalamus-memory-consolidation` — *The Anteromedial Thalamus Gates Long-Term Memory in Mice* (`biology`, source-verified)
- `human-lung-bud-microarrays` — *Human Lung-Bud Microarrays Expose a BMP-Linked Infection Signal* (`technology`, source-verified)

### 2024

- `pebanista-yacuruna-giant-river-dolphin` — *Pebanista yacuruna, the Largest Known River Dolphin* (`dinosaurs-fossils`, source-verified)
- `bicyclus-anynana-sex-determination` — *A New Sex-Determination Mechanism in an African Butterfly* (`biology`, source-verified)
- `bridge-rna-programmable-recombination` — *Bridge RNAs Link DNA Targets and Donors for Programmable Recombination* (`technology`, source-verified)
- `landau-phonon-polaritons-graphene` — *Landau–Phonon Polaritons Imaged in Graphene Heterostructures* (`physics`, source-verified)

### 2025

- `hadal-trench-chemosynthetic-communities` — *Chemosynthetic Communities Found Across Hadal Trenches* (`ocean`, source-verified)
- `ledi-geraru-early-homo-australopithecus` — *Early Homo and an Unnamed Australopithecus at Ledi-Geraru* (`archaeology`, preliminary)
- `titan-tidal-dissipation-no-ocean` — *Cassini Gravity Data Reveal Strong Tidal Dissipation in Titan* (`space`, preliminary)
- `arctic-new-coastlines-glacier-retreat` — *Glacier Retreat Exposed Thousands of Kilometres of New Arctic Coastline* (`earth-science`, source-verified)

### 2026

- `diamantina-zone-whale-necropolis` — *A Deep-Sea Whale Necropolis in the Diamantina Zone* (`dinosaurs-fossils`, source-verified)
- `casablanca-773000-year-hominins` — *773,000-Year-Old Hominins from Casablanca* (`archaeology`, preliminary)
- `southeast-indian-ridge-rifting-event` — *Seafloor Spreading Captured at the Southeast Indian Ridge* (`earth-science`, source-verified)
- `magnetic-field-boosted-graphene-superconductors` — *Magnetic Fields Boost Superconductivity in Rhombohedral Graphene* (`physics`, source-verified)

## Distribution

| Dimension | Count |
| --- | ---: |
| 2022 | 4 |
| 2023 | 4 |
| 2024 | 4 |
| 2025 | 4 |
| 2026 | 4 |
| archaeology | 4 |
| biology | 2 |
| dinosaurs-fossils | 2 |
| earth-science | 2 |
| ocean | 2 |
| physics | 3 |
| space | 3 |
| technology | 2 |
| source-verified | 16 |
| preliminary | 4 |
| editor-reviewed | 0 |

## Preliminary entries

- `strange-pentaquark-candidate`: LHCb directly observes a resonance, but its internal structure is unresolved and the collaboration describes it as a pentaquark candidate.
- `ledi-geraru-early-homo-australopithecus`: the material supports distinct early *Homo* and unnamed *Australopithecus* dental forms, but the latter is not a formally named species and is based on limited fossil material.
- `titan-tidal-dissipation-no-ocean`: Cassini gravity data constrain tidal dissipation directly, while the implications for Titan’s interior and a global ocean are model-dependent.
- `casablanca-773000-year-hominins`: the fossils and age evidence are direct, while the proposed placement near the root of the *Homo sapiens* lineage is a morphology-based phylogenetic inference.

## Source policy

Every selection has a DOI-linked peer-reviewed paper as its paper source, with a distinct official agency, research institute, university, or project source for supporting context. Records use the final version of record where available, identify the reported discovery date, and record `2026-07-17` as the source-access date. General reporting is not used as a primary scientific source.

## Image policy

Each discovery has one unique, local 1600 × 1000 SVG hero asset under `public/images/discoveries/{year}/`. These are original Beyond Signal editorial graphics, licensed `CC BY 4.0 (original Beyond Signal editorial graphic)`, with no third-party visual assets and no production image hotlinks. They are accurately labelled as diagrams, data visualizations, artist impressions, or reconstructions as appropriate; all use `imageRelation: "illustration"`.

`docs/discovery-image-rights/batch-04.json` and `.csv` contain the final file dimensions, byte sizes, SHA-256 values, source-page record, rights status, primary DOI URL, and DOI list for exactly 20 assets. `GRAPHIC-FACT-CHECKLIST.md` records the source-grounded review of every visual relationship.

## Known limitations

- The four preliminary entries retain their uncertainty in both their prose and visual framing.
- Editorial SVGs explain the evidence and method; they are not photographs, literal reconstructions of unobserved scenes, or quantitative charts.
- Publisher pages may require reader access, but each entry retains its traceable DOI URL and separate official supporting source.

## Required release checks

Before this draft is marked ready for review, the final head must have all of the following recorded against that exact commit:

- `npm ci`, import tests, content validation, lint, production build, image check, and strict validation.
- A strict-validation comparison against the exact `main` baseline showing zero new warnings and zero new errors.
- 20 matching JSON and CSV image-rights records with resolving paths, dimensions, final byte sizes, unique hashes, and source records.
- Full-size SVG inspection plus desktop and mobile hero-crop inspection for all 20 graphics.
- A READY Vercel preview, 40 discovery-page viewport checks, and supporting-page QA.
- A fresh normal GitHub CI result, a conflict-free PR, and review/thread inspection with no unresolved factual P1 or P2 finding.
