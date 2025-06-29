ServerEvents.recipes(event => {
    ////////////////////////////////////////////////////////////////////////////
    // Remove recipes by ID
    const ids = [
        'aquaculture:tin_can_to_iron_nugget_from_blasting',
        'aquaculture:tin_can_to_iron_nugget',
    ];
    ids.forEach(id => {
        event.remove({ id: id })});
    ///////////////////////////////////////////////////////////////////////////

    //Smelting: Product, Ingredient, Experience, Cooking Time (ticks)
    event.smelting('7x gtceu:tin_nugget', 'aquaculture:tin_can', 0.7, 150);















    
})

