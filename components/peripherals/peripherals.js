import {LitElement, html} from 'lit-element';
import {formatNumber} from '../helper.js';

const PM_OFF = 0;
const PM_BACKUP = 1;
const PM_STANDBY = 2;
const PM_IDLE = 3;

const TRX_OFF = 0;
const TRX_SLEEP = 1;
const TRX_RX = 2;
const TRX_TX = 3;

const S_OFF = 'OFF';
const S_RET = 'RETENTION';
const S_ACT = 'ACTIVE';
const S_SLP = 'SLEEP';
const S_RX  = 'RX';
const S_TX  = 'TX';

const PM_MODE = {
	pll: [
		[S_OFF, S_OFF, S_OFF, S_ACT],
		[0    , 0    , 0    , 600]
	],
	cpu: [
		[S_OFF, S_OFF, S_RET, S_ACT],
		[0    , 0    , 0.01 , 4560]
	],
	ram: [
		[S_OFF, S_OFF, S_RET, S_ACT],
		[0    , 0    , 1.5  , 1]
	],
	hst: [
		[S_OFF, S_OFF, S_RET, S_ACT],
		[0    , 0    , 0.01 , 60]
	],
	lst: [
		[S_OFF, S_ACT, S_ACT, S_ACT],
		[0    , 0.3  , 0.3  , 0.3]
	],
	lxtal: [
		[S_OFF, S_ACT, S_ACT, S_ACT],
		[0    , 0.3  , 0.3  , 0.3]
	],
};

const TRX_MODE = {
	trx: [
		[S_OFF, S_RET, S_RX, S_TX],
		[0    , 0.1  , 8200, 13500]
	],
	hxtal: [
		[S_ACT, S_OFF, S_ACT, S_ACT],
		[450  , 0    , 450  , 450]
	]
};

function getColor (state) {
	switch (state) {
		case 'OFF': return '#000000';
		case 'RETENTION': return '#143d77';
		default: return '#42a62a';
	}
}

const CURRENT_KEYS = Object.keys(PM_MODE).concat(Object.keys(TRX_MODE)).map((p) => p + 'Current');

class MyPeripherals extends LitElement {
	static get properties() {
		return {
			pm: {type: Number},
			trx: {type: Number},
			current: {type: Number},
			pllState: {type: Number},
			pllCurrent: {type: Number},
			cpuState: {type: Number},
			cpuCurrent: {type: Number},
			ramState: {type: Number},
			ramCurrent: {type: Number},
			hstState: {type: Number},
			hstCurrent: {type: Number},
			lstState: {type: Number},
			lstCurrent: {type: Number},
			lxtalState: {type: Number},
			lxtalCurrent: {type: Number},
			trxState: {type: Number},
			trxCurrent: {type: Number},
			hxtalState: {type: Number},
			hxtalCurrent: {type: Number}
		};
	}

	constructor () {
		super();
	}

	firstUpdated () {
		this.pm = PM_IDLE;
		this.trx = TRX_RX;
	}

	updated (changedProperties) {
		if (changedProperties.has('pm')) {
			Object.entries(PM_MODE).forEach(([prefix, [state, current]]) => {
				this[prefix + 'State'] = state[this.pm];
				this[prefix + 'Current'] = current[this.pm];
			});
		}

		if (changedProperties.has('trx')) {
			Object.entries(TRX_MODE).forEach(([prefix, [state, current]]) => {
				this[prefix + 'State'] = state[this.trx];
				this[prefix + 'Current'] = current[this.trx];
			});
		}

		if (CURRENT_KEYS.reduce((changed, key) => changed || changedProperties.has(key), false)) {
			this.current = CURRENT_KEYS.reduce((acc, key) => acc + this[key], 0);
			this.dispatchEvent(new Event('change'));
		}
	}

	render() {
		return html`
		<style>
			div {
				position: relative;
				height: 100%;
				width: 100%;
			}
			svg {
				position: absolute;
				height: 100%;
				width: 100%;
				left: 0;
				top: 0;
			}
		</style>
		<div>
		<?xml version="1.0" encoding="UTF-8" standalone="no"?>
		<svg
		   xmlns:dc="http://purl.org/dc/elements/1.1/"
		   xmlns:cc="http://creativecommons.org/ns#"
		   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
		   xmlns:svg="http://www.w3.org/2000/svg"
		   xmlns="http://www.w3.org/2000/svg"
		   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
		   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
		   width="83.560593mm"
		   height="93.00634mm"
		   viewBox="0 0 83.560593 93.00634"
		   version="1.1"
		   id="svg944"
		   sodipodi:docname="peripherals.svg"
		   inkscape:version="1.0 (4035a4fb49, 2020-05-01)">
		  <defs
		     id="defs938">
		    <marker
		       inkscape:isstock="true"
		       style="overflow:visible"
		       id="marker4104"
		       refX="0"
		       refY="0"
		       orient="auto"
		       inkscape:stockid="Arrow1Mstart">
		      <path
		         transform="matrix(0.4,0,0,0.4,4,0)"
		         style="fill:#143d77;fill-opacity:1;fill-rule:evenodd;stroke:#143d77;stroke-width:1pt;stroke-opacity:1"
		         d="M 0,0 5,-5 -12.5,0 5,5 Z"
		         id="path4102" />
		    </marker>
		    <marker
		       inkscape:isstock="true"
		       style="overflow:visible"
		       id="marker4094"
		       refX="0"
		       refY="0"
		       orient="auto"
		       inkscape:stockid="Arrow1Mstart">
		      <path
		         transform="matrix(0.4,0,0,0.4,4,0)"
		         style="fill:#143d77;fill-opacity:1;fill-rule:evenodd;stroke:#143d77;stroke-width:1pt;stroke-opacity:1"
		         d="M 0,0 5,-5 -12.5,0 5,5 Z"
		         id="path4092" />
		    </marker>
		    <marker
		       inkscape:isstock="true"
		       style="overflow:visible"
		       id="marker4084"
		       refX="0"
		       refY="0"
		       orient="auto"
		       inkscape:stockid="Arrow1Mstart">
		      <path
		         transform="matrix(0.4,0,0,0.4,4,0)"
		         style="fill:#143d77;fill-opacity:1;fill-rule:evenodd;stroke:#143d77;stroke-width:1pt;stroke-opacity:1"
		         d="M 0,0 5,-5 -12.5,0 5,5 Z"
		         id="path4082" />
		    </marker>
		    <marker
		       inkscape:isstock="true"
		       style="overflow:visible"
		       id="marker4074"
		       refX="0"
		       refY="0"
		       orient="auto"
		       inkscape:stockid="Arrow1Mstart">
		      <path
		         transform="matrix(0.4,0,0,0.4,4,0)"
		         style="fill:#143d77;fill-opacity:1;fill-rule:evenodd;stroke:#143d77;stroke-width:1pt;stroke-opacity:1"
		         d="M 0,0 5,-5 -12.5,0 5,5 Z"
		         id="path4072" />
		    </marker>
		    <marker
		       inkscape:isstock="true"
		       style="overflow:visible"
		       id="marker4064"
		       refX="0"
		       refY="0"
		       orient="auto"
		       inkscape:stockid="Arrow1Mstart">
		      <path
		         transform="matrix(0.4,0,0,0.4,4,0)"
		         style="fill:#143d77;fill-opacity:1;fill-rule:evenodd;stroke:#143d77;stroke-width:1pt;stroke-opacity:1"
		         d="M 0,0 5,-5 -12.5,0 5,5 Z"
		         id="path4062" />
		    </marker>
		    <marker
		       inkscape:stockid="Arrow1Mend"
		       orient="auto"
		       refY="0"
		       refX="0"
		       id="marker3806"
		       style="overflow:visible"
		       inkscape:isstock="true">
		      <path
		         id="path3804"
		         d="M 0,0 5,-5 -12.5,0 5,5 Z"
		         style="fill:#143d77;fill-opacity:1;fill-rule:evenodd;stroke:#143d77;stroke-width:1pt;stroke-opacity:1"
		         transform="matrix(-0.4,0,0,-0.4,-4,0)" />
		    </marker>
		    <marker
		       inkscape:isstock="true"
		       style="overflow:visible"
		       id="marker3638"
		       refX="0"
		       refY="0"
		       orient="auto"
		       inkscape:stockid="Arrow1Mend"
		       inkscape:collect="always">
		      <path
		         transform="matrix(-0.4,0,0,-0.4,-4,0)"
		         style="fill:#143d77;fill-opacity:1;fill-rule:evenodd;stroke:#143d77;stroke-width:1pt;stroke-opacity:1"
		         d="M 0,0 5,-5 -12.5,0 5,5 Z"
		         id="path3636" />
		    </marker>
		    <marker
		       inkscape:stockid="Arrow1Mend"
		       orient="auto"
		       refY="0"
		       refX="0"
		       id="marker3478"
		       style="overflow:visible"
		       inkscape:isstock="true"
		       inkscape:collect="always">
		      <path
		         id="path3476"
		         d="M 0,0 5,-5 -12.5,0 5,5 Z"
		         style="fill:#143d77;fill-opacity:1;fill-rule:evenodd;stroke:#143d77;stroke-width:1pt;stroke-opacity:1"
		         transform="matrix(-0.4,0,0,-0.4,-4,0)" />
		    </marker>
		    <marker
		       inkscape:isstock="true"
		       style="overflow:visible"
		       id="marker3326"
		       refX="0"
		       refY="0"
		       orient="auto"
		       inkscape:stockid="Arrow1Mend"
		       inkscape:collect="always">
		      <path
		         transform="matrix(-0.4,0,0,-0.4,-4,0)"
		         style="fill:#143d77;fill-opacity:1;fill-rule:evenodd;stroke:#143d77;stroke-width:1pt;stroke-opacity:1"
		         d="M 0,0 5,-5 -12.5,0 5,5 Z"
		         id="path3324" />
		    </marker>
		    <marker
		       inkscape:stockid="Arrow1Mend"
		       orient="auto"
		       refY="0"
		       refX="0"
		       id="marker3164"
		       style="overflow:visible"
		       inkscape:isstock="true"
		       inkscape:collect="always">
		      <path
		         id="path3162"
		         d="M 0,0 5,-5 -12.5,0 5,5 Z"
		         style="fill:#143d77;fill-opacity:1;fill-rule:evenodd;stroke:#143d77;stroke-width:1pt;stroke-opacity:1"
		         transform="matrix(-0.4,0,0,-0.4,-4,0)" />
		    </marker>
		    <marker
		       inkscape:stockid="TriangleOutS"
		       orient="auto"
		       refY="0"
		       refX="0"
		       id="TriangleOutS"
		       style="overflow:visible"
		       inkscape:isstock="true">
		      <path
		         id="path1840"
		         d="M 5.77,0 -2.88,5 V -5 Z"
		         style="fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:1pt;stroke-opacity:1"
		         transform="scale(0.2)" />
		    </marker>
		    <marker
		       inkscape:stockid="TriangleInM"
		       orient="auto"
		       refY="0"
		       refX="0"
		       id="TriangleInM"
		       style="overflow:visible"
		       inkscape:isstock="true">
		      <path
		         id="path1828"
		         d="M 5.77,0 -2.88,5 V -5 Z"
		         style="fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:1pt;stroke-opacity:1"
		         transform="scale(-0.4)" />
		    </marker>
		    <marker
		       inkscape:stockid="TriangleInS"
		       orient="auto"
		       refY="0"
		       refX="0"
		       id="TriangleInS"
		       style="overflow:visible"
		       inkscape:isstock="true">
		      <path
		         id="path1831"
		         d="M 5.77,0 -2.88,5 V -5 Z"
		         style="fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:1pt;stroke-opacity:1"
		         transform="scale(-0.2)" />
		    </marker>
		    <marker
		       inkscape:stockid="Arrow2Sstart"
		       orient="auto"
		       refY="0"
		       refX="0"
		       id="Arrow2Sstart"
		       style="overflow:visible"
		       inkscape:isstock="true">
		      <path
		         id="path1722"
		         style="fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.625;stroke-linejoin:round;stroke-opacity:1"
		         d="M 8.7185878,4.0337352 -2.2072895,0.01601326 8.7185884,-4.0017078 c -1.7454984,2.3720609 -1.7354408,5.6174519 -6e-7,8.035443 z"
		         transform="matrix(0.3,0,0,0.3,-0.69,0)" />
		    </marker>
		    <marker
		       inkscape:isstock="true"
		       style="overflow:visible"
		       id="marker2450"
		       refX="0"
		       refY="0"
		       orient="auto"
		       inkscape:stockid="Arrow1Mstart">
		      <path
		         transform="matrix(0.4,0,0,0.4,4,0)"
		         style="fill:#143d77;fill-opacity:1;fill-rule:evenodd;stroke:#143d77;stroke-width:1pt;stroke-opacity:1"
		         d="M 0,0 5,-5 -12.5,0 5,5 Z"
		         id="path2448" />
		    </marker>
		    <marker
		       inkscape:isstock="true"
		       style="overflow:visible"
		       id="marker2296"
		       refX="0"
		       refY="0"
		       orient="auto"
		       inkscape:stockid="Arrow1Mend">
		      <path
		         transform="matrix(-0.4,0,0,-0.4,-4,0)"
		         style="fill:#143d77;fill-opacity:1;fill-rule:evenodd;stroke:#143d77;stroke-width:1pt;stroke-opacity:1"
		         d="M 0,0 5,-5 -12.5,0 5,5 Z"
		         id="path2294" />
		    </marker>
		    <marker
		       inkscape:isstock="true"
		       style="overflow:visible"
		       id="marker2286"
		       refX="0"
		       refY="0"
		       orient="auto"
		       inkscape:stockid="Arrow1Mend"
		       inkscape:collect="always">
		      <path
		         transform="matrix(-0.4,0,0,-0.4,-4,0)"
		         style="fill:#143d77;fill-opacity:1;fill-rule:evenodd;stroke:#143d77;stroke-width:1pt;stroke-opacity:1"
		         d="M 0,0 5,-5 -12.5,0 5,5 Z"
		         id="path2284" />
		    </marker>
		    <marker
		       inkscape:stockid="Arrow1Mend"
		       orient="auto"
		       refY="0"
		       refX="0"
		       id="marker2182"
		       style="overflow:visible"
		       inkscape:isstock="true">
		      <path
		         id="path2180"
		         d="M 0,0 5,-5 -12.5,0 5,5 Z"
		         style="fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:1pt;stroke-opacity:1"
		         transform="matrix(-0.4,0,0,-0.4,-4,0)" />
		    </marker>
		    <marker
		       inkscape:stockid="Arrow1Mend"
		       orient="auto"
		       refY="0"
		       refX="0"
		       id="Arrow1Mend"
		       style="overflow:visible"
		       inkscape:isstock="true">
		      <path
		         id="path1701"
		         d="M 0,0 5,-5 -12.5,0 5,5 Z"
		         style="fill:#143d77;fill-opacity:1;fill-rule:evenodd;stroke:#143d77;stroke-width:1pt;stroke-opacity:1"
		         transform="matrix(-0.4,0,0,-0.4,-4,0)" />
		    </marker>
		    <marker
		       inkscape:stockid="Arrow1Mstart"
		       orient="auto"
		       refY="0"
		       refX="0"
		       id="Arrow1Mstart"
		       style="overflow:visible"
		       inkscape:isstock="true"
		       inkscape:collect="always">
		      <path
		         id="path1698"
		         d="M 0,0 5,-5 -12.5,0 5,5 Z"
		         style="fill:#143d77;fill-opacity:1;fill-rule:evenodd;stroke:#143d77;stroke-width:1pt;stroke-opacity:1"
		         transform="matrix(0.4,0,0,0.4,4,0)" />
		    </marker>
		    <marker
		       inkscape:stockid="Arrow1Lstart"
		       orient="auto"
		       refY="0"
		       refX="0"
		       id="Arrow1Lstart"
		       style="overflow:visible"
		       inkscape:isstock="true">
		      <path
		         id="path1692"
		         d="M 0,0 5,-5 -12.5,0 5,5 Z"
		         style="fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:1pt;stroke-opacity:1"
		         transform="matrix(0.8,0,0,0.8,10,0)" />
		    </marker>
		    <marker
		       inkscape:stockid="DotM"
		       orient="auto"
		       refY="0"
		       refX="0"
		       id="DotM"
		       style="overflow:visible"
		       inkscape:isstock="true">
		      <path
		         id="path1756"
		         d="m -2.5,-1 c 0,2.76 -2.24,5 -5,5 -2.76,0 -5,-2.24 -5,-5 0,-2.76 2.24,-5 5,-5 2.76,0 5,2.24 5,5 z"
		         style="fill:#143d77;fill-opacity:1;fill-rule:evenodd;stroke:#143d77;stroke-width:1pt;stroke-opacity:1"
		         transform="matrix(0.4,0,0,0.4,2.96,0.4)" />
		    </marker>
		    <marker
		       inkscape:stockid="DotS"
		       orient="auto"
		       refY="0"
		       refX="0"
		       id="DotS"
		       style="overflow:visible"
		       inkscape:isstock="true">
		      <path
		         id="path1759"
		         d="m -2.5,-1 c 0,2.76 -2.24,5 -5,5 -2.76,0 -5,-2.24 -5,-5 0,-2.76 2.24,-5 5,-5 2.76,0 5,2.24 5,5 z"
		         style="fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:1pt;stroke-opacity:1"
		         transform="matrix(0.2,0,0,0.2,1.48,0.2)" />
		    </marker>
		    <marker
		       inkscape:stockid="DotL"
		       orient="auto"
		       refY="0"
		       refX="0"
		       id="DotL"
		       style="overflow:visible"
		       inkscape:isstock="true">
		      <path
		         id="path1753"
		         d="m -2.5,-1 c 0,2.76 -2.24,5 -5,5 -2.76,0 -5,-2.24 -5,-5 0,-2.76 2.24,-5 5,-5 2.76,0 5,2.24 5,5 z"
		         style="fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:1pt;stroke-opacity:1"
		         transform="matrix(0.8,0,0,0.8,5.92,0.8)" />
		    </marker>
		  </defs>
		  <sodipodi:namedview
		     id="base"
		     pagecolor="#ffffff"
		     bordercolor="#666666"
		     borderopacity="1.0"
		     inkscape:pageopacity="0.0"
		     inkscape:pageshadow="2"
		     inkscape:zoom="0.98994949"
		     inkscape:cx="412.02151"
		     inkscape:cy="184.55724"
		     inkscape:document-units="mm"
		     inkscape:current-layer="layer1"
		     inkscape:document-rotation="0"
		     showgrid="true"
		     showborder="false"
		     inkscape:snap-text-baseline="true"
		     inkscape:object-nodes="false"
		     inkscape:snap-midpoints="true"
		     inkscape:snap-bbox="true"
		     inkscape:bbox-paths="true"
		     inkscape:snap-nodes="true"
		     inkscape:window-width="1920"
		     inkscape:window-height="1163"
		     inkscape:window-x="0"
		     inkscape:window-y="0"
		     inkscape:window-maximized="1">
		    <inkscape:grid
		       originy="-12.860869"
		       originx="-37.04167"
		       type="xygrid"
		       id="grid1509"
		       dotted="false"
		       spacingx="2.6458333"
		       spacingy="2.6458333" />
		  </sodipodi:namedview>
		  <metadata
		     id="metadata941">
		    <rdf:RDF>
		      <cc:Work
		         rdf:about="">
		        <dc:format>image/svg+xml</dc:format>
		        <dc:type
		           rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
		        <dc:title />
		      </cc:Work>
		    </rdf:RDF>
		  </metadata>
		  <g
		     transform="translate(-37.041668,-12.860869)"
		     inkscape:label="Layer 1"
		     inkscape:groupmode="layer"
		     id="layer1">
		    <rect
		       y="37.041668"
		       x="79.375"
		       height="10.583332"
		       width="26.458332"
		       id="rect1563"
		       style="fill:${getColor(this.ramState)};fill-opacity:1;stroke:none;stroke-width:0.237022;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
		    <text
		       id="text1569"
		       y="43.721867"
		       x="92.587227"
		       style="font-style:normal;font-weight:normal;font-size:4.23333px;line-height:1;font-family:sans-serif;letter-spacing:0px;word-spacing:0px;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:0.264583"
		       xml:space="preserve"><tspan
		         id="tspan1567"
		         style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-family:'Source Sans Pro';-inkscape-font-specification:'Source Sans Pro';text-align:center;text-anchor:middle;fill:#ffffff;stroke-width:0.264583"
		         y="43.721867"
		         x="92.587227"
		         sodipodi:role="line">RAM</tspan></text>
		    <rect
		       style="fill:${getColor(this.cpuState)};fill-opacity:1;stroke:none;stroke-width:0.237022;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		       id="rect1575"
		       width="26.458332"
		       height="10.583334"
		       x="79.375"
		       y="18.520834" />
		    <text
		       xml:space="preserve"
		       style="font-style:normal;font-weight:normal;font-size:4.23333px;line-height:1;font-family:sans-serif;letter-spacing:0px;word-spacing:0px;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:0.264583"
		       x="92.587227"
		       y="25.201033"
		       id="text1579"><tspan
		         sodipodi:role="line"
		         x="92.587227"
		         y="25.201033"
		         style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-family:'Source Sans Pro';-inkscape-font-specification:'Source Sans Pro';text-align:center;text-anchor:middle;fill:#ffffff;stroke-width:0.264583"
		         id="tspan1577">CPU</tspan></text>
		    <rect
		       style="fill:${getColor(this.pllState)};stroke:none;stroke-width:0.237022;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		       id="rect1581"
		       width="26.458332"
		       height="10.583333"
		       x="37.041668"
		       y="37.041664" />
		    <text
		       xml:space="preserve"
		       style="font-style:normal;font-weight:normal;font-size:4.23333px;line-height:1;font-family:sans-serif;letter-spacing:0px;word-spacing:0px;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:0.264583"
		       x="50.253895"
		       y="43.696465"
		       id="text1585"><tspan
		         sodipodi:role="line"
		         x="50.253895"
		         y="43.696465"
		         style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-family:'Source Sans Pro';-inkscape-font-specification:'Source Sans Pro';text-align:center;text-anchor:middle;fill:#ffffff;stroke-width:0.264583"
		         id="tspan1583">48MHz PLL</tspan></text>
		    <rect
		       style="fill:${getColor(this.hstState)};fill-opacity:1;stroke:none;stroke-width:0.237022;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		       id="rect1531"
		       width="26.458332"
		       height="10.583331"
		       x="79.375"
		       y="55.5625" />
		    <text
		       xml:space="preserve"
		       style="font-style:normal;font-weight:normal;font-size:4.23333px;line-height:1;font-family:sans-serif;letter-spacing:0px;word-spacing:0px;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:0.264583"
		       x="92.587227"
		       y="60.133095"
		       id="text1521"><tspan
		         sodipodi:role="line"
		         id="tspan1519"
		         x="92.587227"
		         y="60.133095"
		         style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-family:'Source Sans Pro';-inkscape-font-specification:'Source Sans Pro';text-align:center;text-anchor:middle;fill:#ffffff;stroke-width:0.264583">High Speed</tspan><tspan
		         sodipodi:role="line"
		         x="92.587227"
		         y="64.538574"
		         style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-family:'Source Sans Pro';-inkscape-font-specification:'Source Sans Pro';text-align:center;text-anchor:middle;fill:#ffffff;stroke-width:0.264583"
		         id="tspan1523">Timer</tspan></text>
		    <rect
		       y="74.083336"
		       x="79.375"
		       height="10.583334"
		       width="26.458332"
		       id="rect1539"
		       style="fill:${getColor(this.lstState)};fill-opacity:1;stroke:none;stroke-width:0.237022;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
		    <text
		       id="text1545"
		       y="78.653931"
		       x="92.587227"
		       style="font-style:normal;font-weight:normal;font-size:4.23333px;line-height:1;font-family:sans-serif;letter-spacing:0px;word-spacing:0px;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:0.264583"
		       xml:space="preserve"><tspan
		         style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-family:'Source Sans Pro';-inkscape-font-specification:'Source Sans Pro';text-align:center;text-anchor:middle;fill:#ffffff;stroke-width:0.264583"
		         y="78.653931"
		         x="92.587227"
		         id="tspan1541"
		         sodipodi:role="line">Low Speed</tspan><tspan
		         id="tspan1543"
		         style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-family:'Source Sans Pro';-inkscape-font-specification:'Source Sans Pro';text-align:center;text-anchor:middle;fill:#ffffff;stroke-width:0.264583"
		         y="83.05941"
		         x="92.587227"
		         sodipodi:role="line">Timer</tspan></text>
		    <rect
		       style="fill:${getColor(this.trxState)};fill-opacity:1;stroke:none;stroke-width:0.237022;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		       id="rect1549"
		       width="26.458332"
		       height="10.583337"
		       x="79.375"
		       y="92.604164" />
		    <text
		       xml:space="preserve"
		       style="font-style:normal;font-weight:normal;font-size:4.23333px;line-height:1;font-family:sans-serif;letter-spacing:0px;word-spacing:0px;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:0.264583"
		       x="92.587227"
		       y="97.174759"
		       id="text1555"><tspan
		         sodipodi:role="line"
		         x="92.587227"
		         y="97.174759"
		         style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-family:'Source Sans Pro';-inkscape-font-specification:'Source Sans Pro';text-align:center;text-anchor:middle;fill:#ffffff;stroke-width:0.264583"
		         id="tspan1553">RF Network</tspan><tspan
		         id="tspan1561"
		         sodipodi:role="line"
		         x="92.587227"
		         y="101.58024"
		         style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-family:'Source Sans Pro';-inkscape-font-specification:'Source Sans Pro';text-align:center;text-anchor:middle;fill:#ffffff;stroke-width:0.264583">Interface</tspan></text>
		    <text
		       xml:space="preserve"
		       style="font-style:normal;font-weight:normal;font-size:2.82222px;line-height:1.25;font-family:sans-serif;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.264583"
		       x="105.83333"
		       y="31.75"
		       id="text1612"><tspan
		         sodipodi:role="line"
		         id="tspan1610"
		         x="105.83333"
		         y="31.75"
		         style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:2.82222px;font-family:'Source Sans Pro';-inkscape-font-specification:'Source Sans Pro';text-align:end;text-anchor:end;stroke-width:0.264583">${formatNumber(this.cpuCurrent, 1)}μA</tspan></text>
		    <text
		       xml:space="preserve"
		       style="font-style:normal;font-weight:normal;font-size:2.82222px;line-height:1.25;font-family:sans-serif;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.264583"
		       x="79.375"
		       y="31.75"
		       id="text1616"><tspan
		         sodipodi:role="line"
		         id="tspan1614"
		         x="79.375"
		         y="31.75"
		         style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:2.82222px;font-family:'Source Sans Pro';-inkscape-font-specification:'Source Sans Pro';stroke-width:0.264583">${this.cpuState}</tspan></text>
		    <text
		       id="text1620"
		       y="50.270832"
		       x="105.83333"
		       style="font-style:normal;font-weight:normal;font-size:2.82222px;line-height:1.25;font-family:sans-serif;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.264583"
		       xml:space="preserve"><tspan
		         style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:2.82222px;font-family:'Source Sans Pro';-inkscape-font-specification:'Source Sans Pro';text-align:end;text-anchor:end;stroke-width:0.264583"
		         y="50.270832"
		         x="105.83333"
		         id="tspan1618"
		         sodipodi:role="line">${formatNumber(this.ramCurrent, 1)}μA</tspan></text>
		    <text
		       id="text1624"
		       y="50.270832"
		       x="79.375"
		       style="font-style:normal;font-weight:normal;font-size:2.82222px;line-height:1.25;font-family:sans-serif;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.264583"
		       xml:space="preserve"><tspan
		         style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:2.82222px;font-family:'Source Sans Pro';-inkscape-font-specification:'Source Sans Pro';stroke-width:0.264583"
		         y="50.270832"
		         x="79.375"
		         id="tspan1622"
		         sodipodi:role="line">${this.ramState}</tspan></text>
		    <text
		       xml:space="preserve"
		       style="font-style:normal;font-weight:normal;font-size:2.82222px;line-height:1.25;font-family:sans-serif;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.264583"
		       x="105.83333"
		       y="68.791664"
		       id="text1628"><tspan
		         sodipodi:role="line"
		         id="tspan1626"
		         x="105.83333"
		         y="68.791664"
		         style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:2.82222px;font-family:'Source Sans Pro';-inkscape-font-specification:'Source Sans Pro';text-align:end;text-anchor:end;stroke-width:0.264583">${formatNumber(this.hstCurrent, 1)}μA</tspan></text>
		    <text
		       xml:space="preserve"
		       style="font-style:normal;font-weight:normal;font-size:2.82222px;line-height:1.25;font-family:sans-serif;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.264583"
		       x="79.375"
		       y="68.791664"
		       id="text1632"><tspan
		         sodipodi:role="line"
		         id="tspan1630"
		         x="79.375"
		         y="68.791664"
		         style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:2.82222px;font-family:'Source Sans Pro';-inkscape-font-specification:'Source Sans Pro';stroke-width:0.264583">${this.hstState}</tspan></text>
		    <text
		       id="text1636"
		       y="87.3125"
		       x="105.83333"
		       style="font-style:normal;font-weight:normal;font-size:2.82222px;line-height:1.25;font-family:sans-serif;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.264583"
		       xml:space="preserve"><tspan
		         style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:2.82222px;font-family:'Source Sans Pro';-inkscape-font-specification:'Source Sans Pro';text-align:end;text-anchor:end;stroke-width:0.264583"
		         y="87.3125"
		         x="105.83333"
		         id="tspan1634"
		         sodipodi:role="line">${formatNumber(this.lstCurrent, 1)}μA</tspan></text>
		    <text
		       id="text1640"
		       y="87.3125"
		       x="79.375"
		       style="font-style:normal;font-weight:normal;font-size:2.82222px;line-height:1.25;font-family:sans-serif;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.264583"
		       xml:space="preserve"><tspan
		         style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:2.82222px;font-family:'Source Sans Pro';-inkscape-font-specification:'Source Sans Pro';stroke-width:0.264583"
		         y="87.3125"
		         x="79.375"
		         id="tspan1638"
		         sodipodi:role="line">${this.lstState}</tspan></text>
		    <text
		       xml:space="preserve"
		       style="font-style:normal;font-weight:normal;font-size:2.82222px;line-height:1.25;font-family:sans-serif;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.264583"
		       x="105.83333"
		       y="105.83333"
		       id="text1644"><tspan
		         sodipodi:role="line"
		         id="tspan1642"
		         x="105.83333"
		         y="105.83333"
		         style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:2.82222px;font-family:'Source Sans Pro';-inkscape-font-specification:'Source Sans Pro';text-align:end;text-anchor:end;stroke-width:0.264583">${formatNumber(this.trxCurrent, 1)}μA</tspan></text>
		    <text
		       xml:space="preserve"
		       style="font-style:normal;font-weight:normal;font-size:2.82222px;line-height:1.25;font-family:sans-serif;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.264583"
		       x="79.375"
		       y="105.83333"
		       id="text1648"><tspan
		         sodipodi:role="line"
		         id="tspan1646"
		         x="79.375"
		         y="105.83333"
		         style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:2.82222px;font-family:'Source Sans Pro';-inkscape-font-specification:'Source Sans Pro';stroke-width:0.264583">${this.trxState}</tspan></text>
		    <text
		       xml:space="preserve"
		       style="font-style:normal;font-weight:normal;font-size:2.82222px;line-height:1.25;font-family:sans-serif;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.264583"
		       x="63.5"
		       y="50.270832"
		       id="text1652"><tspan
		         sodipodi:role="line"
		         id="tspan1650"
		         x="63.5"
		         y="50.270832"
		         style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:2.82222px;font-family:'Source Sans Pro';-inkscape-font-specification:'Source Sans Pro';text-align:end;text-anchor:end;stroke-width:0.264583">${formatNumber(this.pllCurrent, 1)}μA</tspan></text>
		    <text
		       xml:space="preserve"
		       style="font-style:normal;font-weight:normal;font-size:2.82222px;line-height:1.25;font-family:sans-serif;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.264583"
		       x="37.041672"
		       y="50.270832"
		       id="text1656"><tspan
		         sodipodi:role="line"
		         id="tspan1654"
		         x="37.041672"
		         y="50.270832"
		         style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:2.82222px;font-family:'Source Sans Pro';-inkscape-font-specification:'Source Sans Pro';stroke-width:0.264583">${this.pllState}</tspan></text>
		    <rect
		       y="74.083336"
		       x="37.041668"
		       height="10.583333"
		       width="26.458332"
		       id="rect1658"
		       style="fill:${getColor(this.lxtalState)};fill-opacity:1;stroke:none;stroke-width:0.237022;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
		    <text
		       id="text1662"
		       y="80.738136"
		       x="50.253895"
		       style="font-style:normal;font-weight:normal;font-size:4.23333px;line-height:1;font-family:sans-serif;letter-spacing:0px;word-spacing:0px;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:0.264583"
		       xml:space="preserve"><tspan
		         id="tspan1660"
		         style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-family:'Source Sans Pro';-inkscape-font-specification:'Source Sans Pro';text-align:center;text-anchor:middle;fill:#ffffff;stroke-width:0.264583"
		         y="80.738136"
		         x="50.253895"
		         sodipodi:role="line">32kHz XTAL</tspan></text>
		    <text
		       id="text1666"
		       y="87.3125"
		       x="63.500004"
		       style="font-style:normal;font-weight:normal;font-size:2.82222px;line-height:1.25;font-family:sans-serif;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.264583"
		       xml:space="preserve"><tspan
		         style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:2.82222px;font-family:'Source Sans Pro';-inkscape-font-specification:'Source Sans Pro';text-align:end;text-anchor:end;stroke-width:0.264583"
		         y="87.3125"
		         x="63.500004"
		         id="tspan1664"
		         sodipodi:role="line">${formatNumber(this.lxtalCurrent, 1)}μA</tspan></text>
		    <text
		       id="text1670"
		       y="87.3125"
		       x="37.041672"
		       style="font-style:normal;font-weight:normal;font-size:2.82222px;line-height:1.25;font-family:sans-serif;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.264583"
		       xml:space="preserve"><tspan
		         style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:2.82222px;font-family:'Source Sans Pro';-inkscape-font-specification:'Source Sans Pro';stroke-width:0.264583"
		         y="87.3125"
		         x="37.041672"
		         id="tspan1668"
		         sodipodi:role="line">${this.lxtalState}</tspan></text>
		    <rect
		       style="fill:${getColor(this.hxtalState)};fill-opacity:1;stroke:none;stroke-width:0.237022;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
		       id="rect1672"
		       width="26.458332"
		       height="10.583333"
		       x="37.041672"
		       y="92.604172" />
		    <text
		       xml:space="preserve"
		       style="font-style:normal;font-weight:normal;font-size:4.23333px;line-height:1;font-family:sans-serif;letter-spacing:0px;word-spacing:0px;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:0.264583"
		       x="50.253899"
		       y="99.258972"
		       id="text1676"><tspan
		         sodipodi:role="line"
		         x="50.253899"
		         y="99.258972"
		         style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-family:'Source Sans Pro';-inkscape-font-specification:'Source Sans Pro';text-align:center;text-anchor:middle;fill:#ffffff;stroke-width:0.264583"
		         id="tspan1674">16MHz XTAL</tspan></text>
		    <text
		       xml:space="preserve"
		       style="font-style:normal;font-weight:normal;font-size:2.82222px;line-height:1.25;font-family:sans-serif;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.264583"
		       x="63.500011"
		       y="105.83334"
		       id="text1680"><tspan
		         sodipodi:role="line"
		         id="tspan1678"
		         x="63.500011"
		         y="105.83334"
		         style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:2.82222px;font-family:'Source Sans Pro';-inkscape-font-specification:'Source Sans Pro';text-align:end;text-anchor:end;stroke-width:0.264583">${formatNumber(this.hxtalCurrent, 1)}μA</tspan></text>
		    <text
		       xml:space="preserve"
		       style="font-style:normal;font-weight:normal;font-size:2.82222px;line-height:1.25;font-family:sans-serif;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.264583"
		       x="37.041676"
		       y="105.83334"
		       id="text1684"><tspan
		         sodipodi:role="line"
		         id="tspan1682"
		         x="37.041676"
		         y="105.83334"
		         style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:2.82222px;font-family:'Source Sans Pro';-inkscape-font-specification:'Source Sans Pro';stroke-width:0.264583">${this.hxtalState}</tspan></text>
		    <path
		       style="fill:none;stroke:#143d77;stroke-width:0.259968px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;marker-end:url(#Arrow1Mend)"
		       d="M 63.499999,42.333333 H 78.825918"
		       id="path1686" />
		    <path
		       style="fill:none;stroke:#143d77;stroke-width:0.256391;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:3.5;stroke-dasharray:none;stroke-opacity:1;marker-start:url(#Arrow1Mstart);marker-end:url(#DotM)"
		       d="M 78.8576,23.794245 H 71.418763 V 42.351751"
		       id="path1688"
		       sodipodi:nodetypes="ccc" />
		    <path
		       style="fill:none;stroke:#143d77;stroke-width:0.256398px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;marker-start:url(#marker2450)"
		       d="M 78.885324,60.86404 H 71.43958 V 42.322716"
		       id="path1690" />
		    <path
		       id="path2044"
		       d="M 63.499998,79.375003 H 78.865256"
		       style="fill:none;stroke:#143d77;stroke-width:0.2603px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;marker-end:url(#marker2286)" />
		    <path
		       style="fill:none;stroke:#143d77;stroke-width:0.260415px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;marker-end:url(#marker2296)"
		       d="M 63.499998,97.895836 H 78.878752"
		       id="path2046" />
		    <path
		       id="path3130"
		       style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;font-variant-ligatures:normal;font-variant-position:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-alternates:normal;font-variant-east-asian:normal;font-feature-settings:normal;font-variation-settings:normal;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;writing-mode:lr-tb;direction:ltr;text-orientation:mixed;dominant-baseline:auto;baseline-shift:baseline;text-anchor:start;white-space:normal;shape-padding:0;shape-margin:0;inline-size:0;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;vector-effect:none;fill:none;fill-opacity:1;fill-rule:nonzero;stroke:#143d77;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate;stop-color:#000000"
		       d="m 450,64.28125 -0.46484,0.804688 -4.48828,7.765624 h 2.9375 V 387.14258 h -2.9375 L 450,395.7207 l 0.46484,-0.80468 4.48828,-7.77344 h -2.9375 V 72.851562 h 2.9375 z"
		       transform="scale(0.26458333)" />
		    <path
		       style="fill:none;stroke:#143d77;stroke-width:0.228436px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;marker-start:url(#marker4074);marker-end:url(#marker3164)"
		       d="m 106.23739,23.771697 h 11.82053"
		       id="path3160" />
		    <path
		       id="path3322"
		       d="m 106.23739,42.312932 h 11.82053"
		       style="fill:none;stroke:#143d77;stroke-width:0.228436px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;marker-start:url(#marker4084);marker-end:url(#marker3326)" />
		    <path
		       style="fill:none;stroke:#143d77;stroke-width:0.228436px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;marker-start:url(#marker4094);marker-end:url(#marker3478)"
		       d="m 106.23739,60.854166 h 11.82053"
		       id="path3474" />
		    <path
		       id="path3634"
		       d="m 106.23739,79.3954 h 11.82053"
		       style="fill:none;stroke:#143d77;stroke-width:0.228436px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;marker-start:url(#marker4104);marker-end:url(#marker3638)" />
		    <path
		       style="fill:none;stroke:#143d77;stroke-width:0.228436px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;marker-start:url(#marker4064);marker-end:url(#marker3806)"
		       d="m 106.23739,97.936635 h 11.82053"
		       id="path3802" />
		    <text
		       xml:space="preserve"
		       style="font-style:normal;font-weight:normal;font-size:4.23333px;line-height:1.25;font-family:sans-serif;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.264583"
		       x="50.270832"
		       y="15.875"
		       id="text5014"><tspan
		         sodipodi:role="line"
		         id="tspan5012"
		         x="50.270832"
		         y="15.875"
		         style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-family:'Source Sans Pro';-inkscape-font-specification:'Source Sans Pro';text-align:center;text-anchor:middle;stroke-width:0.264583">Clock Sources</tspan></text>
		    <text
		       id="text5018"
		       y="15.875"
		       x="92.604164"
		       style="font-style:normal;font-weight:normal;font-size:4.23333px;line-height:1.25;font-family:sans-serif;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.264583"
		       xml:space="preserve"><tspan
		         style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-family:'Source Sans Pro';-inkscape-font-specification:'Source Sans Pro';text-align:center;text-anchor:middle;stroke-width:0.264583"
		         y="15.875"
		         x="92.604164"
		         id="tspan5016"
		         sodipodi:role="line">CPU+Peripherals</tspan></text>
		  </g>
		</svg>

		</div>
		`;
	}
}

customElements.define('my-peripherals', MyPeripherals);
