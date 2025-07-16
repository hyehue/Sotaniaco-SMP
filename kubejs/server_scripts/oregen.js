ServerEvents.lowPriorityData(event => {

    removeFeature(event, "minecraft:ore_copper")


    //(event, featureName, blockName, heightType, heightMin, heightMax, veinCount, veinSize, discardChanceOnAirExposure)
    addOregenOverworld(event, "kubejs:ore_copper", "minecraft:copper_ore", "minecraft:trapezoid", -40, 60, 3, 5, 0)
    addOregenOverworld(event, "kubejs:ore_aluminium", "gtceu:aluminium_ore", "minecraft:trapezoid", -40, 16, 3, 5, 0)
    addOregenNether(event, "kubejs:ore_sulfur", "gtceu:netherrack_sulfur_ore", "minecraft:trapezoid", 10, 120, 10, 10, 0)
    addOregenNether(event, "kubejs:ore_certus_quartz", "gtceu:netherrack_certus_quartz_ore", "minecraft:trapezoid", 40, 80, 10, 10, 0)

})