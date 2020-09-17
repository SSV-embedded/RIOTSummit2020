import {LitElement, html} from 'lit-element';
import {formatNumber} from '../helper.js';
import './peripherals.js';

const getInputInt = (e) => parseInt((e.path || e.composedPath())[0].value);

const PHASES = ['meas', 'tx', 'rx', 'sleep'];

class PeripheralsExperiment extends LitElement {
	static get properties() {
		return {
			pm: {type: Number},
			trx: {type: Number},
			current: {type: Number},
		};
	}

	constructor () {
		super();
		this.pm = 3;
		this.trx = 2;
		this.current = 0;
	}

	render() {
		return html`
		<style>
			my-peripherals {
				display: block;
				width: 60%;
				height: 40vh;
			}

			.container {
				display: flex;
				align-items: flex-start;
				justify-content: space-between;
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

		<div class="container">
			<my-peripherals
				.pm="${this.pm}"
				.trx="${this.trx}"
				@change="${(e) => {this.current = (e.path || e.composedPath())[0].current;}}"
			></my-peripherals>
			<table>
				<tr>
					<th>SLEEPCFG State</th>
					<td class="r">
						<select @change="${(e) => {this.pm = (e.path || e.composedPath())[0].value;}}">
							${['OFF', 'BACKUP', 'STANDBY', 'IDLE/PL0/PL1/PL2'].map((mode, value) => html`
								<option value="${value}" ?selected=${this.pm == value}>${mode}</option>
							`)}
						</select>
					</td>
				</tr>
				<tr>
					<th>RF Network Interface State</th>
					<td class="r">
						<select @change="${(e) => {this.trx = (e.path || e.composedPath())[0].value;}}">
							${['OFF', 'SLEEP', 'RX', 'TX'].map((mode, value) => html`
								<option value="${value}" ?selected=${this.trx == value}>${mode}</option>
							`)}
						</select>
					</td>
				</tr>
				<tr>
					<th>Current Consumption</th>
					<td class="r">${formatNumber(this.current, 1)}μA</td>
				</tr>
			</table>
		</div>
		`;
	}
}

customElements.define('peripherals-experiment', PeripheralsExperiment);
