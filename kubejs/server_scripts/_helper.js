// priority: 9999

/*Este codigo pertenece a CABIN (Create Above 'n Beyond In New), todos los creditos hacie los autores de este.*/

// Java imports
const Registry = Java.loadClass("net.minecraft.core.Registry"); // registries, needed for almost everything involving Java classes
// const BlockPos = Java.loadClass('net.minecraft.core.BlockPos'); //Block position. For some reason we don't need to import this?
const TagKey = Java.loadClass("net.minecraft.tags.TagKey");
const AxisDirection = Java.loadClass("net.minecraft.core.Direction$AxisDirection");

const Random = Java.loadClass("java.util.Random")
const InputItem = Java.loadClass("dev.latvian.mods.kubejs.item.InputItem")
const OutputItem = Java.loadClass("dev.latvian.mods.kubejs.item.OutputItem")
const InputFluid = Java.loadClass("dev.latvian.mods.kubejs.fluid.InputFluid")
const OutputFluid = Java.loadClass("dev.latvian.mods.kubejs.fluid.OutputFluid")
const FluidStackJS = Java.loadClass("dev.latvian.mods.kubejs.fluid.FluidStackJS")
const JsonObject = Java.loadClass("com.google.gson.JsonObject")


/** Used in a datapack event to remove a configured feature by its resource location */
const removeFeature = function(event, featureName) {
    featureName = featureName.split(":")
    let namespace = featureName[0]
    let identifier = featureName[1]
    event.addJson(`${namespace}:worldgen/configured_feature/${identifier}`, {
        "type": "minecraft:no_op",
        "config": {}
    })
}

/** Used in a datapack event to add ore generation for an ore to the overworld
 * This function only works for ores with both a stone and deepslate variant
*/
const addOregenOverworld = function(event, featureName, blockName, heightType, heightMin, heightMax, veinCount, veinSize, discardChanceOnAirExposure) {
    featureName = featureName.split(":")
    let namespace = featureName[0]
    let identifier = featureName[1]

    blockName = blockName.split(":")
    let blockNamespace = blockName[0]
    let blockIdentifier = blockName[1]

    event.addJson(`${namespace}:worldgen/configured_feature/${identifier}`, {
        "type": "minecraft:ore",
        "config": {
            "discard_chance_on_air_exposure": discardChanceOnAirExposure,
            "size": veinSize,
            "targets": [
                {
                    "state": {"Name": `${blockNamespace}:${blockIdentifier}`},
                    "target": {"predicate_type": "minecraft:tag_match", "tag": "minecraft:stone_ore_replaceables"}
                },
                {
                    "state": {"Name": `${blockNamespace}:deepslate_${blockIdentifier}`},
                    "target": {"predicate_type": "minecraft:tag_match", "tag": "minecraft:deepslate_ore_replaceables"}
                }
            ]
        }
    })
    let minInclusive = {"absolute": heightMin}
    let maxInclusive = {"absolute": heightMax}
    // EMI Oregen will display more useful information if we change to using Above Bottom where it makes sense to
    if (heightMin < -64) {
        minInclusive = {"above_bottom": heightMin + 64}
        maxInclusive = {"above_bottom": heightMax + 64}
    } else if (heightMax > 320) {
        minInclusive = {"below_top": -(heightMin - 320)}
        maxInclusive = {"below_top": -(heightMax - 320)}
    }

    event.addJson(`${namespace}:worldgen/placed_feature/${identifier}`, {
        "feature": `${namespace}:${identifier}`,
        "placement": [
            {"type": "minecraft:count", "count": veinCount},
            {"type": "minecraft:in_square"},
            {
                "type": "minecraft:height_range",
                "height": {
                    "type": heightType,
                    "min_inclusive": minInclusive,
                    "max_inclusive": maxInclusive
                }
            },
            {"type": "minecraft:biome"}
        ]
    })

    event.addJson(`${namespace}:forge/biome_modifier/${identifier}`, {
        "type": "forge:add_features",
        "biomes": "#minecraft:is_overworld",
        "features": `${namespace}:${identifier}`,
        "step": "underground_ores"
    })
}
