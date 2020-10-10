---
layout: archive
title: "Research"
permalink: /research/
author_profile: true

---

{% include base_path %}

My research has four connected themes.

## Dynamics of somatic evolution

The proximate cause of cancer is somatic evolution. 
Recent studies have unveiled extensive genetic heterogeneity not only in tumours but also in normal human tissues. 
Yet while rich data sets are rapidly accumulating, we still have little understanding of the evolutionary processes that generate the observed patterns of diversity.

<figure>
  <a href="/images/Cagan3_Sanger2018.jpg">
  <img src="/images/Cagan3_Sanger2018_small.jpg" alt = "The mode and predictability of intra-tumour evoluion" />
    </a>
  <figcaption>The mode and predictability of intra-tumour evoluion, Sanger Institute seminar 2018, drawn by <a href = "https://twitter.com/ATJCagan">Alex Cagan</a></figcaption>
</figure>

I have created a sophisticated spatial computational model of tumour population genetics that can simulate a range of tissue architectures within a common mathematical framework. 
By parametrizing this model using information derived from histopathological image analysis, I have shown that differences in tumour architecture can explain the variety of evolutionary modes observed in human cancers, including four archetypal “oncoevotypes” [1].
This work thus provides a simple, mechanistic explanation for a wide range of empirical observations.

I am extending my modelling framework towards a general systematic understanding of somatic evolution.
To test predictions and refine research questions, I will continue to use molecular data, in collaboration with bioinformaticians, experts in histopathological image analysis, and specialists in multi-region sequencing of tumours and heathy tissue.

Collaborators include [Jakob Kather](https://jnkather.github.io) (RWTH University Hospital, Aachen).

### References:

1. Noble *et al.* [Spatial structure governs the mode of tumour evolution.](https://www.biorxiv.org/content/10.1101/586735v1) (In revision)

## Forecasting tumour evolution

Accurate methods for predicting whether neoplasms will grow aggressively, how they will initially respond to treatment, and whether and when drug resistance will develop, are lacking. 
Computational models that account for cancer’s dynamic, evolving nature have enormous, untapped potential to provide more detailed patient-specific forecasts for informing clinical decision making.

Working closely with oncologists during a four-year clinical trial, I have developed and analyzed a mathematical model of clonal dynamics during treatment of myeloproliferative neoplasms. 
By combining this model with a Bayesian inferential method, I have obtained the first estimates of mutated-cell proliferation and differentiation rates in these diseases, which can be used to predict treatment response [1]. 
For solid tumours, I have used computational modelling to assess when, why and how intratumour heterogeneity can be used to forecast tumour growth rate and clinical progression [2]. 
This work informs the search for new prognostic biomarkers and contributes to establishing a theoretical foundation for the new field of predictive oncology.

I am now working towards models that can forecast the evolution of realistically large, heterogeneous tumours. 
This includes using diffusion approximations and other methods from statistical physics and population genetics to describe how clonal expansion speeds depend on key biological parameters, and using machine-learning methods to infer patient-specific parameter values from clinical data.

Collaborators include [Isabelle Plo and William Vainchenker](https://www.gustaveroussy.fr/fr/des-cellules-souches-hematopoietiques-aux-megacaryocytes-membres-de-lequipe) (Institut Gustav Roussy, Paris).

### References:

1. Mosca & Noble *et al.* Predicting the long-term response of IFN$\alpha$ in myeloproliferative neoplasms. (In prep)
2. Noble, Burley, Le Sueur & Hochberg. [When, why and how tumour clonal diversity predicts survival.](https://doi.org/10.1111/eva.13057) Evol. Appl. (2020)

## Evolutionarily-informed cancer therapy

Evolutionary theory and growing empirical data suggest that the emergence of resistance to cancer therapy may be prevented or delayed by exploiting competition between drug-sensitive and resistant cells. 
However, proposed mathematical models of evolutionary cancer therapies lack specificity. 
There is no reliable way to predict which strategy will work best for a particular patient.

<figure>
  <a href="/images/Cagan2_ISEEC2017.jpg">
  <img src="/images/Cagan2_ISEEC2017_small.jpg" alt = "Spatial competition constrains resistance to targeted cancer therapy" />
    </a>
  <figcaption>Spatial competition constrains resistance to targeted cancer therapy, ISEEC 2017, drawn by <a href = "https://twitter.com/ATJCagan">Alex Cagan</a></figcaption>
</figure>

In collaboration with cancer cell biologists, I have validated an adaptive therapy concept by using computational and mathematical modelling to show how spatial constraints can be exploited to suppress resistance to targeted therapy [1].
I have further contributed to extending these results towards a mathematically rigorous theory of cancer adaptive therapy that unifies and generalizes previous formulations [2].
I have relatedly investigated how public goods cooperation in bacteria depends on ecological antagonisms [3], with potential implications for therapeutic manipulation of ecological interactions, such as in tumours that depend on paracrine growth factors.

Building on these results, I am investigating how different tumour architectures and microenvironmental feedbacks result in different optimal strategies. 
My long-term objective is to design optimal treatment regimens for each tumour type, and ultimately each patient.

Collaborators include [Daniel Fisher](http://www.igmm.cnrs.fr/en/team/controle-nucleaire-de-la-proliferation-cellulaire/) (IGMM, Montpellier) and [Yannick Viossat](https://www.ceremade.dauphine.fr/fr/membres/detail-cv/profile/yannick-viossat.html) (Université Paris Dauphine, Paris).

### References:

1. Bacevic & Noble *et al.* [Spatial competition constrains resistance to targeted cancer therapy.](https://www.nature.com/articles/s41467-017-01516-1) Nat. Commun. (2017)
2. Viossat & Noble. [The logic of containing tumors.](https://www.biorxiv.org/content/10.1101/2020.01.22.915355v2) (Submitted)
3. Vasse & Noble *et al.* [Antibiotic stress selects against cooperation in the pathogenic bacterium *Pseudomonas aeruginosa*.](https://www.pnas.org/content/114/3/546) PNAS (2017)

## Evolution of cancer risk

The ultimate cause of cancer is that multicellular organisms have evolved imperfect defence mechanisms against the breakdown of cell-cell cooperation. 
This vulnerability can be understood through mathematical modelling in the framework of life history theory.

<figure>
  <a href="/images/Cagan1_IBECC2015.jpg">
  <img src="/images/Cagan1_IBECC2015_small.jpg" alt = "Peto's paradox and human cancers" />
    </a>
  <figcaption>Peto's paradox and human cancers, IBECC 2015, drawn by <a href = "https://twitter.com/ATJCagan">Alex Cagan</a></figcaption>
</figure>

I have argued that most modern-day cancers in animals – and humans in particular – are due to environmental changes outpacing cancer resistance evolution [1]. 
I am now using matrix population models to examine whether particular life history traits can explain cases of species with exceptional resistance to both senescence and cancer. 
At the within-organism level, I have shown that variation in risk of human cancer types is analogous to the paradoxical lack of variation in cancer incidence among animal species and may likewise be understood as a result of natural selection [2]. 
My analyses indicate that differences in microenvironment, tissue structure and evolved protection mechanisms are of central importance in determining cancer risk [3].

Having shown that cancer risk per stem cell division is several orders of magnitude greater in some human tissues than in others, I am now working towards explaining this enormous variation by integrating demographic models with multistage models of carcinogenesis. 
This includes examining how systemic and tissue-specific cancer protection evolves subject to life history trade-offs across dissimilar tissues.

Collaborators include [Hanna Kokko](https://www.ieu.uzh.ch/en/staff/member/kokko_hanna.html) (University of Zurich).

### References:

1. Hochberg & Noble. [A framework for how environment contributes to cancer risk.](https://onlinelibrary.wiley.com/doi/full/10.1111/ele.12726) Ecology Letters (2017)
2. Noble, Kaltz & Hochberg. [Peto's paradox and human cancers.](https://royalsocietypublishing.org/doi/10.1098/rstb.2015.0104) Phil. Trans. R. Soc. B (2015)
3. Noble *et al.* [Overestimating the Role of Environment in Cancers.](https://cancerpreventionresearch.aacrjournals.org/content/9/10/773) Cancer Prev. Res. (2016)
