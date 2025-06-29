ServerEvents.lowPriorityData(event => {

    removeFeature(event, "minecraft:ore_copper")

    addOregenOverworld(event, "kubejs:ore_copper", "minecraft:copper_ore", "minecraft:trapezoid", -40, 60, 3, 5, 0)
    addOregenOverworld(event, "kubejs:ore_aluminium", "gtceu:aluminium_ore", "minecraft:trapezoid", -40, 16, 3, 5, 0)

})