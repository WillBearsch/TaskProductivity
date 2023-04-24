class Inventory {
	constructor() {
	    this.items = [];
	}

	display() {
		if (this.items[0]) {
			console.log("You carry:");
			this.items.forEach(inventory => {
				console.log(`* ${inventory.desc}`);
			});
			return true;
		}else{
			console.log("You have nothing.");
			return false;
		}
	}

	hasItem(name) {
		for (var i in this.items) {
			if (name == this.items[i].name) {
				return true;
			}
		}
		return false;
	}
	
	removeItem(name) {
		this.items.forEach(inventory => {
			if (name == inventory.name) {
				this.items.pop(inventory.name);
				return true;
			} else {
				return false;
			}
		});
	}

	addItem(name, desc) {
		this.items.push({
			"name": name,
			"desc": desc,
		});
		return this.items.length;
	}
}