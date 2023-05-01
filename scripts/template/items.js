const ITEM = {};

// Items
ITEM.dualFire = {
    // Display
    color: '#F1C40F',
    // Drop rate
    weight: .50,
    // Fire rate
    fireRate: 10,
    // Weapon type
    weapon: 'dualFire',
    // Methods
    canPickUp(pl) {
        return pl.weapon !== 'dualFire' && pl.weapon !== 'tripleFire';
    },
    onPickup(pl) {
        inv.addItem('Dual Fire', 'Fire two shots.');
    }
};

ITEM.tripleFire = {
    // Display
    color: '#F1C40F',
    // Drop rate
    weight: .50,
    // Fire Rate
    fireRate: 8,
    // Weapon type
    weapon: 'tripleFire',
    // Methods
    canPickUp(pl) {
        return pl.weapon !== 'tripleFire';
    },
    onPickup(pl) {
        inv.addItem('Triple Fire', 'Fire three shots.');
    }
};
