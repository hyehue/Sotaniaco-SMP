ServerEvents.recipes(e => {
    e.remove({ output: 'gtceu:steel_ingot'})


    e.shapeless(Item.of("gtceu:steel_dust", 3), 
[
    'gtceu:iron_dust',
    '4x minecraft:coal',
    '#forge:tools/hammers'
])

    e.smelting('gtceu:steel_ingot', 'gtceu:steel_dust', 0, 200)



})