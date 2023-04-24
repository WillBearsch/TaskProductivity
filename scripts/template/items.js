const ITEM = {};

// Items
ITEM.dualFire = {
    // Display
    color: '#F1C40F',
    // Methods
    canPickUp(pl) {
        return pl.weapon !== 'dualFire' && pl.weapon !== 'tripleFire';
    },
    onPickup(pl) {
        pl.fireRate = 10;
        pl.weapon = 'dualFire';
    }
};

ITEM.tripleFire = {
    // Display
    color: '#F1C40F',
    // Rarity
    rarity: 'rare',
    // Methods
    canPickUp(pl) {
        return pl.weapon !== 'tripleFire';
    },
    onPickup(pl) {
        pl.fireRate = 8;
        pl.weapon = 'tripleFire';
    }
};