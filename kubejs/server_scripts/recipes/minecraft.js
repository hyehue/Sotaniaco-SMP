ServerEvents.recipes(Sotaniaco => {
    //Removing Recipes
    Sotaniaco.remove({ id: 'minecraft:crafting_table' });
})

ServerEvents.recipes(Sotaniaco => {
    //Adding Recipes
    Sotaniaco.shaped(
        Item.of('minecraft:crafting_table'),
        [
            'AA',
            'BB'
        ],
        {
            A: 'minecraft:flint',
            B: '#minecraft:logs'
        }
    );
})