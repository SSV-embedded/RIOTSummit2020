import '../components/charge/experiment.js';
import '../components/peripherals/experiment.js';
import '../components/pm_layered/experiment.js';
import Reveal from 'reveal.js';
import Highlight from 'reveal.js/plugin/highlight/highlight.esm.js';
let deck = new Reveal({
	controls: false,
	progress: false,
	slideNumber: true,
	hash: true,
	center: false,
	transition: 'none',
	backgroundTransition: 'none',
	plugins: [Highlight],
	pdfSeparateFragments: false
});
deck.initialize();
