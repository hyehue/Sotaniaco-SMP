ServerEvents.recipes(Sotaniaco => {


    Sotaniaco.remove({ type: 'gtceu:assembler', output: 'crafting_table' })
    Sotaniaco.recipes.gtceu.assembler('crafting_table').itemInputs('minecraft:flint', '#minecraft:logs').itemOutputs('minecraft:crafting_table').duration(80).EUt(6).circuit(4)

    // Sotaniaco.remove({  })


    // Sotaniaco.remove({ mod: 'gtceu'})

})