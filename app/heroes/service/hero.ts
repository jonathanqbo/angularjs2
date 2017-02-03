export class Hero {

	constructor (
		public id: number,
		public name: string,
		public power: string,
		//  here ? means this param is optional
		public alterEgo?: string
	) {	}

}