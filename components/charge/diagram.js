import {LitElement, html} from 'lit-element';

class MyDiagram extends LitElement {
	static get properties() {
		return {
			measCurrent: {type: Number},
			txCurrent: {type: Number},
			rxCurrent: {type: Number},
			sleepCurrent: {type: Number},
			fullScale: {type: Number}
		};
	}

	constructor () {
		super();
		this.measCurrent = 1000;
		this.txCurrent = 12000;
		this.rxCurrent = 8000;
		this.sleepCurrent = 600;
		this.fullScale = 12000;
	}

	current2height (c) {
		return c / this.fullScale * 48;
	}

	current2y (c) {
		return 52.699 - this.current2height(c);
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
			<svg
			   xmlns:dc="http://purl.org/dc/elements/1.1/"
			   xmlns:cc="http://creativecommons.org/ns#"
			   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
			   xmlns:svg="http://www.w3.org/2000/svg"
			   xmlns="http://www.w3.org/2000/svg"
			   xmlns:xlink="http://www.w3.org/1999/xlink"
			   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
			   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
			   width="166.11847mm"
			   height="55.682255mm"
			   viewBox="0 0 166.11846 55.682255"
			   version="1.1"
			   id="svg8"
			   inkscape:version="1.0 (4035a4fb49, 2020-05-01)"
			   sodipodi:docname="diagram.svg">
			  <defs
				 id="defs2">
				<linearGradient
				   id="linearGradient966"
				   inkscape:collect="always">
				  <stop
					 id="stop962"
					 offset="0"
					 style="stop-color:#f3971d;stop-opacity:1;" />
				  <stop
					 id="stop964"
					 offset="1"
					 style="stop-color:#f3971d;stop-opacity:0;" />
				</linearGradient>
				<marker
				   inkscape:stockid="Arrow2Mend"
				   orient="auto"
				   refY="0"
				   refX="0"
				   id="Arrow2Mend"
				   style="overflow:visible"
				   inkscape:isstock="true">
				  <path
					 id="path862"
					 style="fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.625;stroke-linejoin:round;stroke-opacity:1"
					 d="M 8.7185878,4.0337352 -2.2072895,0.01601326 8.7185884,-4.0017078 c -1.7454984,2.3720609 -1.7354408,5.6174519 -6e-7,8.035443 z"
					 transform="scale(-0.6)" />
				</marker>
				<marker
				   inkscape:stockid="Arrow1Lend"
				   orient="auto"
				   refY="0"
				   refX="0"
				   id="Arrow1Lend"
				   style="overflow:visible"
				   inkscape:isstock="true">
				  <path
					 id="path838"
					 d="M 0,0 5,-5 -12.5,0 5,5 Z"
					 style="fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:1pt;stroke-opacity:1"
					 transform="matrix(-0.8,0,0,-0.8,-10,0)" />
				</marker>
				<marker
				   inkscape:stockid="Arrow2Mstart"
				   orient="auto"
				   refY="0"
				   refX="0"
				   id="Arrow2Mstart"
				   style="overflow:visible"
				   inkscape:isstock="true">
				  <path
					 id="path859"
					 style="fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.625;stroke-linejoin:round;stroke-opacity:1"
					 d="M 8.7185878,4.0337352 -2.2072895,0.01601326 8.7185884,-4.0017078 c -1.7454984,2.3720609 -1.7354408,5.6174519 -6e-7,8.035443 z"
					 transform="scale(0.6)" />
				</marker>
				<linearGradient
				   gradientUnits="userSpaceOnUse"
				   y2="-47.777233"
				   x2="150.79243"
				   y1="-47.777233"
				   x1="148.50146"
				   id="linearGradient968"
				   xlink:href="#linearGradient966"
				   inkscape:collect="always" />
			  </defs>
			  <sodipodi:namedview
				 inkscape:object-paths="true"
				 id="base"
				 pagecolor="#ffffff"
				 bordercolor="#666666"
				 borderopacity="1.0"
				 inkscape:pageopacity="0.0"
				 inkscape:pageshadow="2"
				 inkscape:zoom="2.8284271"
				 inkscape:cx="253.26281"
				 inkscape:cy="121.19142"
				 inkscape:document-units="mm"
				 inkscape:current-layer="layer1"
				 inkscape:document-rotation="0"
				 showgrid="false"
				 inkscape:snap-intersection-paths="true"
				 inkscape:snap-text-baseline="true"
				 inkscape:snap-smooth-nodes="true"
				 inkscape:snap-midpoints="false"
				 showguides="true"
				 inkscape:guide-bbox="true"
				 inkscape:window-width="1920"
				 inkscape:window-height="1135"
				 inkscape:window-x="1920"
				 inkscape:window-y="28"
				 inkscape:window-maximized="1"
				 fit-margin-top="0"
				 fit-margin-left="0"
				 fit-margin-right="0"
				 fit-margin-bottom="0" />
			  <metadata
				 id="metadata5">
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
				 inkscape:label="Layer 1"
				 inkscape:groupmode="layer"
				 id="layer1"
				 transform="translate(8.4232701,0.12027865)">
				<rect
				   y="${this.current2y(this.measCurrent)}"
				   x="145.79243"
				   height="${this.current2height(this.measCurrent)}"
				   width="5"
				   id="rect960"
				   style="fill:url(#linearGradient968);fill-opacity:1;stroke:none;stroke-width:0.150363;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;paint-order:normal" />
				<rect
				   style="fill:#f3971d;fill-opacity:1;stroke:none;stroke-width:0.150363;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;paint-order:normal"
				   id="rect1169"
				   width="5"
				   height="${this.current2height(this.measCurrent)}"
				   x="3.3410423"
				   y="${this.current2y(this.measCurrent)}" />
				<rect
				   style="fill:#d2002d;fill-opacity:1;stroke:none;stroke-width:0.0653169;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;paint-order:normal"
				   id="rect1171"
				   width="2.4346831"
				   height="${this.current2height(this.txCurrent)}"
				   x="8.3410425"
				   y="${this.current2y(this.txCurrent)}" />
				<rect
				   style="fill:#42a62a;fill-opacity:1;stroke:none;stroke-width:0.114102;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;paint-order:normal"
				   id="rect1173"
				   width="9.8858976"
				   height="${this.current2height(this.rxCurrent)}"
				   x="10.775725"
				   y="${this.current2y(this.rxCurrent)}" />
				<rect
				   style="fill:#cccccc;fill-opacity:0.992157;stroke:none;stroke-width:0.454545;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;paint-order:normal"
				   id="rect1175"
				   width="125.13081"
				   height="${this.current2height(this.sleepCurrent)}"
				   x="20.661623"
				   y="${this.current2y(this.sleepCurrent)}" />
				<path
				   style="fill:none;stroke:#000000;stroke-width:0.320506;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;marker-start:url(#Arrow2Mstart);marker-end:url(#Arrow2Mend)"
				   d="M 3.3410423,1.8186521 V 52.672036 H 151.60931"
				   id="path833"
				   sodipodi:nodetypes="ccc" />
				<text
				   xml:space="preserve"
				   style="font-style:normal;font-weight:normal;font-size:2.82222px;line-height:1.25;font-family:sans-serif;text-align:center;letter-spacing:0px;word-spacing:0px;text-anchor:middle;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.264583"
				   x="3.3139479"
				   y="55.522015"
				   id="text1287"><tspan
					 sodipodi:role="line"
					 id="tspan1285"
					 x="3.3139479"
					 y="55.522015"
					 style="font-size:2.82222px;text-align:center;text-anchor:middle;stroke-width:0.264583">0</tspan></text>
				<text
				   xml:space="preserve"
				   style="font-style:normal;font-weight:normal;font-size:2.82222px;line-height:1.25;font-family:sans-serif;text-align:center;letter-spacing:0px;word-spacing:0px;text-anchor:middle;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.264583"
				   x="145.79243"
				   y="55.522015"
				   id="text1315"><tspan
					 sodipodi:role="line"
					 id="tspan1313"
					 x="145.79243"
					 y="55.522015"
					 style="font-size:2.82222px;text-align:center;text-anchor:middle;stroke-width:0.264583">5min</tspan></text>
				<path
				   style="fill:none;stroke:#000000;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
				   d="m 3.3410423,52.672036 v 0.70468"
				   id="path1347" />
				<path
				   sodipodi:nodetypes="cc"
				   style="fill:none;stroke:#000000;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
				   d="m 145.79243,52.652236 v 0.72448"
				   id="path1349" />
				<text
				   xml:space="preserve"
				   style="font-style:normal;font-weight:normal;font-size:2.82222px;line-height:1.25;font-family:sans-serif;text-align:end;letter-spacing:0px;word-spacing:0px;text-anchor:end;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.264583"
				   x="2.0181174"
				   y="1.9743378"
				   id="text1353"><tspan
					 sodipodi:role="line"
					 id="tspan1351"
					 x="2.0181177"
					 y="1.9743378"
					 style="font-size:2.82222px;text-align:end;text-anchor:end;stroke-width:0.264583">Current</tspan></text>
				<text
				   xml:space="preserve"
				   style="font-style:normal;font-weight:normal;font-size:2.82222px;line-height:1.25;font-family:sans-serif;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.264583"
				   x="150.93869"
				   y="55.522015"
				   id="text1381"><tspan
					 y="55.522015"
					 x="150.93869"
					 sodipodi:role="line"
					 id="tspan1379"
					 style="font-size:2.82222px;stroke-width:0.264583">Time</tspan></text>
				<text
				   xml:space="preserve"
				   style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:3.52778px;line-height:1.25;font-family:'Source Sans Pro';-inkscape-font-specification:'Source Sans Pro';text-align:center;letter-spacing:0px;word-spacing:0px;text-anchor:middle;fill:#0055d4;fill-opacity:1;stroke:none;stroke-width:0.264583"
				   x="5.8410411"
				   y="50.763813"
				   id="text1398"><tspan
					 sodipodi:role="line"
					 id="tspan1396"
					 x="5.8410411"
					 y="50.763813"
					 style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:3.52778px;font-family:'Source Sans Pro';-inkscape-font-specification:'Source Sans Pro';text-align:center;text-anchor:middle;fill:#ffffff;fill-opacity:1;stroke-width:0.264583">M</tspan></text>
				<path
				   style="fill:none;stroke:#000000;stroke-width:0.264583px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
				   d="m 3.3410423,4.6720376 h -0.70468"
				   id="path1444" />
				<text
				   id="text1463"
				   y="5.655787"
				   x="2.0033109"
				   style="font-style:normal;font-weight:normal;font-size:2.82222px;line-height:1.25;font-family:sans-serif;text-align:end;letter-spacing:0px;word-spacing:0px;text-anchor:end;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.264583"
				   xml:space="preserve"><tspan
					 style="font-size:2.82222px;text-align:end;text-anchor:end;stroke-width:0.264583"
					 y="5.655787"
					 x="2.0033109"
					 id="tspan1461"
					 sodipodi:role="line">${this.fullScale / 1000}mA</tspan></text>
				<text
				   id="text950"
				   y="50.763813"
				   x="9.5566187"
				   style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:3.52778px;line-height:1.25;font-family:'Source Sans Pro';-inkscape-font-specification:'Source Sans Pro';text-align:center;letter-spacing:0px;word-spacing:0px;text-anchor:middle;fill:#0055d4;fill-opacity:1;stroke:none;stroke-width:0.264583"
				   xml:space="preserve"><tspan
					 style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:3.52778px;font-family:'Source Sans Pro';-inkscape-font-specification:'Source Sans Pro';text-align:center;text-anchor:middle;fill:#ffffff;fill-opacity:1;stroke-width:0.264583"
					 y="50.763813"
					 x="9.5566187"
					 id="tspan948"
					 sodipodi:role="line">T</tspan></text>
				<text
				   xml:space="preserve"
				   style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:3.52778px;line-height:1.25;font-family:'Source Sans Pro';-inkscape-font-specification:'Source Sans Pro';text-align:center;letter-spacing:0px;word-spacing:0px;text-anchor:middle;fill:#0055d4;fill-opacity:1;stroke:none;stroke-width:0.264583"
				   x="15.604021"
				   y="50.763813"
				   id="text954"><tspan
					 sodipodi:role="line"
					 id="tspan952"
					 x="15.604021"
					 y="50.763813"
					 style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:3.52778px;font-family:'Source Sans Pro';-inkscape-font-specification:'Source Sans Pro';text-align:center;text-anchor:middle;fill:#ffffff;fill-opacity:1;stroke-width:0.264583">R</tspan></text>
				<text
				   id="text958"
				   y="50.763813"
				   x="83.219971"
				   style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:3.52778px;line-height:1.25;font-family:'Source Sans Pro';-inkscape-font-specification:'Source Sans Pro';text-align:center;letter-spacing:0px;word-spacing:0px;text-anchor:middle;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.264583"
				   xml:space="preserve"><tspan
					 style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:3.52778px;font-family:'Source Sans Pro';-inkscape-font-specification:'Source Sans Pro';text-align:center;text-anchor:middle;fill:#000000;fill-opacity:1;stroke-width:0.264583"
					 y="50.763813"
					 x="83.219971"
					 id="tspan956"
					 sodipodi:role="line">S</tspan></text>
			  </g>
			</svg>
		</div>
		`;
	}
}

customElements.define('my-diagram', MyDiagram);
