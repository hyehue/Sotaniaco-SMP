LootJS.modifiers((event) => {
    event
        .addLootTypeModifier(LootType.ENTITY)
        .removeLoot('#sotaniaco:disabled/loot')
});