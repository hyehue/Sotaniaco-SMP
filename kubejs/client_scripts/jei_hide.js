JEIEvents.hideItems(Sotaniaco => {
    Sotaniaco.hide('ae2:facade')
    Sotaniaco.hide('gtceu:iron_ore')
    Sotaniaco.hide('gtceu:deepslate_iron_ore')
    Sotaniaco.hide(/itemfilters/)
    Sotaniaco.hide(/itemfilters:.*/)
    Sotaniaco.hide(/incomplete/)
    Sotaniaco.hide('twilightforest:uncrafting_table')

    // Item.getAll().forEach(item => {
    //     if (
    //     item.id.startsWith("gtceu:") &&
    //     keywords.some(kw => item.id.includes(kw))
    //     ) {
    //     Sotaniaco.hide(item);
    //     }
    // });

})