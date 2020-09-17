import {LitElement, html} from 'lit-element';

class PMLayeredExperiment extends LitElement {
	static get properties() {
		return {
			standby: {type: Number},
			backup: {type: Number},
		};
	}

	constructor () {
		super();
		this.standby = 1;
		this.backup = 1;
	}

	render() {
		return html`
		<style>
			table {
				margin: 30px auto 30px auto;
			}
			table th, table td {
				padding: 0px 10px 0px 10px;
			}
		</style>

		<table>
			<thead>
				<tr>
					<th>Power Mode</th>
					<th colspan="3">Blocker</th>
					<th>Lowest Mode?</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>IDLE</td>
					<td></td>
					<td></td>
					<td></td>
					<td>${this.standby ? '❮' : ''}</td>
				</tr>
				<tr>
					<td>STANDBY</td>
					<td><input type="button" value="pm_unblock(STANDBY)" @click="${() => {this.standby = Math.max(0, this.standby - 1);}}"></td>
					<td>${this.standby}</td>
					<td><input type="button" value="pm_block(STANDBY)" @click="${() => {this.standby++;}}"></td>
					<td>${this.backup && !this.standby ? '❮' : ''}</td>
				</tr>
				<tr>
					<td>BACKUP</td>
					<td><input type="button" value="pm_unblock(BACKUP)" @click="${() => {this.backup = Math.max(0, this.standby - 1);}}"></td>
					<td>${this.backup}</td>
					<td><input type="button" value="pm_block(BACKUP)" @click="${() => {this.backup++;}}"></td>
					<td>${!this.backup && !this.standby ? '❮' : ''}</td>
				</tr>
			</tbody>
		</table>
		`;
	}
}

customElements.define('pmlayered-experiment', PMLayeredExperiment);
