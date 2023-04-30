const ITEM = {};

// Items
ITEM.dualFire = {
    // Display
    color: '#F1C40F',
    // Drop rate
    weight: .50,
    // Methods
    canPickUp(pl) {
        return pl.weapon !== 'dualFire' && pl.weapon !== 'tripleFire';
    },
    onPickup(pl) {
        pl.fireRate = 10;
        pl.weapon = 'dualFire';
        inv.addItem('Dual Fire', 'Fire two shots.');
    }
};

ITEM.tripleFire = {
    // Display
    color: '#F1C40F',
    // Drop rate
    weight: .50,
    // Methods
    canPickUp(pl) {
        return pl.weapon !== 'tripleFire';
    },
    onPickup(pl) {
        pl.fireRate = 8;
        pl.weapon = 'tripleFire';
        inv.addItem('Triple Fire', 'Fire three shots.');
    }
};
