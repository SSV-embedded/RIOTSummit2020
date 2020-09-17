import {LitElement, html} from 'lit-element';
import {formatNumber} from '../helper.js';
import './diagram.js';

const getInputInt = (e) => parseInt((e.path || e.composedPath())[0].value);

const PHASES = ['meas', 'tx', 'rx', 'sleep'];

class ChargeExperiment extends LitElement {
	static get properties() {
		return {
			measCurrent: {type: Number},
			txCurrent: {type: Number},
			rxCurrent: {type: Number},
			sleepCurrent: {type: Number},
			measTime: {type: Number},
			txTime: {type: Number},
			rxTime: {type: Number},
			sleepTime: {type: Number},
			measCharge: {type: Number},
			txCharge: {type: Number},
			rxCharge: {type: Number},
			sleepCharge: {type: Number},
			chargePerCycle: {type: Number},
			cycleCount: {type: Number},
		};
	}

	constructor () {
		super();
		this.measCurrent = 1000;
		this.txCurrent = 13500;
		this.rxCurrent = 8200;
		this.sleepCurrent = 1000;
		this.dischargeCurrent = 1.9;

		this.cycleTime = 300;
		this.measTime = 0.1;
		this.txTime = 0.05;
		this.rxTime = 0.2;
		this.sleepTime = this.cycleTime - this.measTime - this.txTime - this.rxTime;

		this.measCharge = 0;
		this.txCharge = 0;
		this.rxCharge = 0;
		this.sleepCharge = 0;

		this.chargePerCycle = 0;
		this.cycleCount = 0;
		this.batteryCharge = 2400 * 3600;
	}

	updated (changedProperties) {
		PHASES.forEach((p) => {
			if (changedProperties.has(p + 'Current') || changedProperties.has(p + 'Time')) {
				this[p + 'Charge'] = this[p + 'Current'] * this[p + 'Time'] / 1000;
			}
		});

		if (PHASES.reduce((changed, p) => changed || changedProperties.has(p + 'Charge'), false)) {
			this.chargePerCycle = PHASES.reduce((sum, p) => sum + this[p + 'Charge'], 0);
		}

		if (changedProperties.has('chargePerCycle')) {
			this.cycleCount = this.batteryCharge / (this.chargePerCycle + this.dischargeCurrent * this.cycleTime / 1000);
		}
	}

	render() {
		return html`
		<style>
			my-diagram {
				display: block;
				width: 100%;
				height: 350px;
				margin-bottom: 20px;
			}

			.container {
				display: flex;
				align-items: flex-start;
				justify-content: space-between;
			}

			a {
				color: #000000;
			}

			table {
				font-size: 0.6em;
			}

			table td, table th {
				text-align: left;
				min-width: 75px;
			}

			table td.r, table th.r {
				text-align: right;
			}
		</style>
		<my-diagram
			fullScale="12000"
			.measCurrent="${this.measCurrent}"
			.txCurrent="${this.txCurrent}"
			.rxCurrent="${this.rxCurrent}"
			.sleepCurrent="${this.sleepCurrent}"
		></my-diagram>
		<div class="container">
			<table>
				<thead>
					<tr>
						<th>Phase</th>
						<th class="r">Duration</th>
						<th colspan="2" class="r">Current</th>
						<th class="r">Charge</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td><span style="color: #f3971d; font-weight: bold;">Measure</span></td>
						<td class="r">${formatNumber(this.measTime * 1000)} ms</td>
						<td>
							<input
								type="range"
								min="10"
								max="14000"
								value="${this.measCurrent}"
								@input="${(e) => {this.measCurrent = getInputInt(e);}}"
							>
						</td>
						<td class="r">${formatNumber(this.measCurrent)} μA</td>
						<td class="r">${formatNumber(this.measCharge, 1)} mC</td>
					</tr>
					<tr>
						<td><span style="color: #d2002d; font-weight: bold;">TX</span></td>
						<td class="r">${formatNumber(this.txTime * 1000)} ms</td>
						<td>
							<input
								type="range"
								min="10"
								max="14000"
								value="${this.txCurrent}"
								@input="${(e) => {this.txCurrent = getInputInt(e);}}"
							>
						</td>
						<td class="r">${formatNumber(this.txCurrent)} μA</td>
						<td class="r">${formatNumber(this.txCharge, 1)} mC</td>
					</tr>
					<tr>
						<td><span style="color: #42a62a; font-weight: bold;">RX</span></td>
						<td class="r">${formatNumber(this.rxTime * 1000)} ms</td>
						<td>
							<input
								type="range"
								min="10"
								max="14000"
								value="${this.rxCurrent}"
								@input="${(e) => {this.rxCurrent = getInputInt(e);}}"
							>
						</td>
						<td class="r">${formatNumber(this.rxCurrent)} μA</td>
						<td class="r">${formatNumber(this.rxCharge, 1)} mC</td>
					</tr>
					<tr>
						<td><span style="color: #555555; font-weight: bold;">Sleep</span></td>
						<td class="r">${formatNumber(this.sleepTime * 1000)} ms</td>
						<td>
							<input
								type="range"
								min="10"
								max="14000"
								value="${this.sleepCurrent}"
								@input="${(e) => {this.sleepCurrent = getInputInt(e);}}"
							>
						</td>
						<td class="r">${formatNumber(this.sleepCurrent)} μA</td>
						<td class="r">${formatNumber(this.sleepCharge, 1)} mC</td>
					</tr>
					<tr>
						<th>Sum:</th>
						<td class="r">${formatNumber((this.measTime + this.txTime + this.rxTime + this.sleepTime) * 1000)} ms</td>
						<td></td>
						<td></td>
						<td class="r">${formatNumber(this.chargePerCycle, 1)} mC</td>
					</tr>
				</tbody>
			</table>
			<table>
				<tr>
					<th>Battery Charge: <sup>[<a href="#/references">1</a>]</sup></th>
					<td class="r">${formatNumber(this.batteryCharge / 3600)} mAh = ${formatNumber(this.batteryCharge)} mC</td>
				</tr>
				<tr>
					<th>Battery Self-discharge Current: <sup>[<a href="#/references">2</a>]</sup</th>
					<td class="r">${formatNumber(this.dischargeCurrent, 1)} μA</td>
				</tr>
				<tr>
					<th>Number of Cycles:</th>
					<td class="r">${formatNumber(this.cycleCount)}</td>
				</tr>
				<tr>
					<th>Livetime:</th>
					<td class="r">${formatNumber(this.cycleCount * this.cycleTime / 3600 / 24 / 365, 2)} years</td>
				</tr>
			</table>
		</div>
		`;
	}
}

customElements.define('charge-experiment', ChargeExperiment);
