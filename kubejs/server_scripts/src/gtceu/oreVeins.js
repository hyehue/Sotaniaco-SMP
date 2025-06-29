GTCEuServerEvents.oreVeins(e => {
    e.removeAll()

/*///////////////////////////*/
////// Overworld (Stone) //////
/*///////////////////////////*/

//Copper Tin
e.add('kubejs:overworld/copper_tin', v => {
    //v = Vein
    v.weight(50)
    v.clusterSize(45)
    v.density(0.15)
    v.discardChanceOnAirExposure(0)
    v.layer('stone')
    v.dimensions("minecraft:overworld")
    v.heightRangeUniform(-10, 160)
    v.classicVeinGenerator(generator => generator
        .primary(b => b.mat(GTMaterials.Chalcopyrite).size(2))
        .secondary(b => b.mat(GTMaterials.Zeolite).size(2))
        .between(b => b.mat(GTMaterials.Cassiterite).size(2))
        .sporadic(b => b.mat(GTMaterials.Realgar))
    )
    
    v.surfaceIndicatorGenerator(indicator => indicator
        .surfaceRock(GTMaterials.Copper)
        .density(0.15)
    )
})
//Coal
e.add('kubejs:overworld/coal', v => {
    //v = Vein
    v.weight(80)
    v.clusterSize(45)
    v.density(0.15)
    v.discardChanceOnAirExposure(0)
    v.layer('stone')
    v.dimensions("minecraft:overworld")
    v.heightRangeUniform(10, 100)
    v.classicVeinGenerator(generator => generator
        .primary(b => b.mat(GTMaterials.Coal).size(3))
        .secondary(b => b.mat(GTMaterials.Coal).size(2))
        .between(b => b.mat(GTMaterials.Coal).size(2))
        .sporadic(b => b.block(() => Block.getBlock('gtceu:raw_coal_block')))
    )
    
    v.surfaceIndicatorGenerator(indicator => indicator
        .surfaceRock(GTMaterials.Coal)
        .density(0.15)
    )
})


// Cassiterite (Tin)
e.add('kubejs:overworld/cassiterite', v => {
    v.weight(80);
    v.clusterSize(45);
    v.density(0.15);
    v.discardChanceOnAirExposure(0);
    v.layer('stone');
    v.dimensions("minecraft:overworld");
    v.heightRangeUniform(10, 100);
    v.classicVeinGenerator(generator => generator
        .primary(b => b.mat(GTMaterials.Tin).size(2))
        .secondary(b => b.mat(GTMaterials.Tin).size(2))
        .between(b => b.mat(GTMaterials.Cassiterite).size(2))
        .sporadic(b => b.mat(GTMaterials.Cassiterite))
    );
    v.surfaceIndicatorGenerator(indicator => indicator
        .surfaceRock(GTMaterials.Cassiterite)
        .density(0.15)
    );
});


// Iron
e.add('kubejs:overworld/iron', v => {
    v.weight(120);
    v.clusterSize(45);
    v.density(0.15);
    v.discardChanceOnAirExposure(0);
    v.layer('stone');
    v.dimensions("minecraft:overworld");
    v.heightRangeUniform(-10, 100);
    v.classicVeinGenerator(generator => generator
        .primary(b => b.mat(GTMaterials.Goethite).size(2))
        .secondary(b => b.mat(GTMaterials.YellowLimonite).size(2))
        .between(b => b.mat(GTMaterials.Hematite).size(2))
        .sporadic(b => b.mat(GTMaterials.Malachite))
    );
    v.surfaceIndicatorGenerator(indicator => indicator
        .surfaceRock(GTMaterials.Goethite)
        .density(0.15)
    );
});

// Galena
e.add('kubejs:overworld/galena', v => {
    v.weight(40);
    v.clusterSize(45);
    v.density(0.15);
    v.discardChanceOnAirExposure(0);
    v.layer('stone');
    v.dimensions("minecraft:overworld");
    v.heightRangeUniform(-15, 45);
    v.classicVeinGenerator(generator => generator
        .primary(b => b.mat(GTMaterials.Galena).size(2))
        .secondary(b => b.mat(GTMaterials.Silver).size(2))
        .between(b => b.mat(GTMaterials.Lead).size(2))
        .sporadic(b => b.mat(GTMaterials.Galena))
    );
    v.surfaceIndicatorGenerator(indicator => indicator
        .surfaceRock(GTMaterials.Galena)
        .density(0.15)
    );
});


// Nickel
e.add('kubejs:overworld/nickel', v => {
    v.weight(40);
    v.clusterSize(45);
    v.density(0.15);
    v.discardChanceOnAirExposure(0);
    v.layer('stone');
    v.dimensions("minecraft:overworld");
    v.heightRangeUniform(-10, 60);
    v.classicVeinGenerator(generator => generator
        .primary(b => b.mat(GTMaterials.Garnierite).size(2))
        .secondary(b => b.mat(GTMaterials.Nickel).size(2))
        .between(b => b.mat(GTMaterials.Cobaltite).size(2))
        .sporadic(b => b.mat(GTMaterials.Pentlandite))
    );
    v.surfaceIndicatorGenerator(indicator => indicator
        .surfaceRock(GTMaterials.Nickel)
        .density(0.15)
    );
});

// Garnet
e.add('kubejs:overworld/garnet', v => {
    v.weight(40);
    v.clusterSize(45);
    v.density(0.15);
    v.discardChanceOnAirExposure(0);
    v.layer('stone');
    v.dimensions("minecraft:overworld");
    v.heightRangeUniform(-10, 50);
    v.classicVeinGenerator(generator => generator
        .primary(b => b.mat(GTMaterials.GarnetRed).size(2))
        .secondary(b => b.mat(GTMaterials.GarnetYellow).size(2))
        .between(b => b.mat(GTMaterials.Amethyst).size(2))
        .sporadic(b => b.mat(GTMaterials.Opal))
    );
    v.surfaceIndicatorGenerator(indicator => indicator
        .surfaceRock(GTMaterials.GarnetRed)
        .density(0.15)
    );
});
// Garnet Tin
e.add('kubejs:overworld/garnet_tin', v => {
    v.weight(80);
    v.clusterSize(45);
    v.density(0.15);
    v.discardChanceOnAirExposure(0);
    v.layer('stone');
    v.dimensions("minecraft:overworld");
    v.heightRangeUniform(30, 60);
    v.classicVeinGenerator(generator => generator
        .primary(b => b.mat(GTMaterials.CassiteriteSand).size(3))
        .secondary(b => b.mat(GTMaterials.GarnetSand).size(1))
        .between(b => b.mat(GTMaterials.Asbestos).size(1))
        .sporadic(b => b.mat(GTMaterials.Diatomite))
    );
    v.surfaceIndicatorGenerator(indicator => indicator
        .surfaceRock(GTMaterials.GarnetSand)
        .density(0.15)
    );
});

// Magnetite
e.add('kubejs:overworld/magnetite', v => {
    v.weight(80);
    v.clusterSize(45);
    v.density(0.15);
    v.discardChanceOnAirExposure(0);
    v.layer('stone');
    v.dimensions("minecraft:overworld");
    v.heightRangeUniform(10, 100);
    v.classicVeinGenerator(generator => generator
        .primary(b => b.mat(GTMaterials.Magnetite).size(2))
        .secondary(b => b.mat(GTMaterials.VanadiumMagnetite).size(2))
        .between(b => b.mat(GTMaterials.Chromite).size(2))
        .sporadic(b => b.block(() => Block.getBlock('minecraft:raw_gold_block')))
    );
    v.surfaceIndicatorGenerator(indicator => indicator
        .surfaceRock(GTMaterials.Magnetite)
        .density(0.15)
    );
});

// Apatite
e.add('kubejs:overworld/apatite', v => {
    v.weight(30);
    v.clusterSize(45);
    v.density(0.15);
    v.discardChanceOnAirExposure(0);
    v.layer('stone');
    v.dimensions("minecraft:overworld");
    v.heightRangeUniform(10, 80);
    v.classicVeinGenerator(generator => generator
        .primary(b => b.mat(GTMaterials.Apatite).size(2))
        .secondary(b => b.mat(GTMaterials.TricalciumPhosphate).size(2))
        .between(b => b.mat(GTMaterials.Pyrochlore).size(2))
        .sporadic(b => b.mat(GTMaterials.Apatite))
    );
    v.surfaceIndicatorGenerator(indicator => indicator
        .surfaceRock(GTMaterials.Apatite)
        .density(0.15)
    );
});

// Mineral Sand
e.add('kubejs:overworld/mineral_sand', v => {
    v.weight(80);
    v.clusterSize(45);
    v.density(0.15);
    v.discardChanceOnAirExposure(0);
    v.layer('stone');
    v.dimensions("minecraft:overworld");
    v.heightRangeUniform(15, 60);
    v.classicVeinGenerator(generator => generator
        .primary(b => b.mat(GTMaterials.BasalticMineralSand).size(2))
        .secondary(b => b.mat(GTMaterials.GraniticMineralSand).size(2))
        .between(b => b.mat(GTMaterials.FullersEarth).size(2))
        .sporadic(b => b.mat(GTMaterials.Gypsum))
    );
    v.surfaceIndicatorGenerator(indicator => indicator
        .surfaceRock(GTMaterials.BasalticMineralSand)
        .density(0.15)
    );
});

// Oilsands
e.add('kubejs:overworld/oilsands', v => {
    v.weight(40);
    v.clusterSize(32);
    v.density(0.15);
    v.discardChanceOnAirExposure(0);
    v.layer('stone');
    v.dimensions("minecraft:overworld");
    v.heightRangeUniform(30, 100);
    v.classicVeinGenerator(generator => generator
        .primary(b => b.mat(GTMaterials.Oilsands).size(3))
        .secondary(b => b.mat(GTMaterials.Oilsands).size(1))
        .between(b => b.mat(GTMaterials.Oilsands).size(1))
        .sporadic(b => b.mat(GTMaterials.Oilsands))
    );
    v.surfaceIndicatorGenerator(indicator => indicator
        .surfaceRock(GTMaterials.BasalticMineralSand)
        .density(0.15)
    );
});

// Lubricant
e.add('kubejs:overworld/lubricant', v => {
    v.weight(40);
    v.clusterSize(32);
    v.density(0.15);
    v.discardChanceOnAirExposure(0);
    v.layer('stone');
    v.dimensions("minecraft:overworld");
    v.heightRangeUniform(0, 50);
    v.classicVeinGenerator(generator => generator
        .primary(b => b.mat(GTMaterials.Soapstone).size(2))
        .secondary(b => b.mat(GTMaterials.Talc).size(2))
        .between(b => b.mat(GTMaterials.GlauconiteSand).size(2))
        .sporadic(b => b.mat(GTMaterials.Pentlandite))
    );
    v.surfaceIndicatorGenerator(indicator => indicator
        .surfaceRock(GTMaterials.Talc)
        .density(0.15)
    );
});

// Salts
e.add('kubejs:overworld/salts', v => {
    v.weight(50);
    v.clusterSize(45);
    v.density(0.15);
    v.discardChanceOnAirExposure(0);
    v.layer('stone');
    v.dimensions("minecraft:overworld");
    v.heightRangeUniform(30, 70);
    v.classicVeinGenerator(generator => generator
        .primary(b => b.mat(GTMaterials.RockSalt).size(2))
        .secondary(b => b.mat(GTMaterials.Salt).size(2))
        .between(b => b.mat(GTMaterials.Lepidolite).size(2))
        .sporadic(b => b.mat(GTMaterials.Spodumene))
    );
    v.surfaceIndicatorGenerator(indicator => indicator
        .surfaceRock(GTMaterials.Salt)
        .density(0.15)
    );
});
// // Aluminium
// e.add('kubejs:overworld/aluminium', v => {
//     v.weight(120);
//     v.clusterSize(32);
//     v.density(0.15);
//     v.discardChanceOnAirExposure(0);
//     v.layer('stone');
//     v.dimensions("minecraft:overworld");
//     v.heightRangeUniform(30, 70);
//     v.dikeVeinGenerator(generator => generator
//     .withBlock(GTMaterials.Aluminium, 3, 10, 80))
// });


/*///////////////////////////////*/
////// Overworld (Deepslate) //////
/*///////////////////////////////*/

//Copper
    e.add('kubejs:overworld/copper', v => {
        //v = Vein
        v.weight(80)
        v.clusterSize(45)
        v.density(0.15)
        v.discardChanceOnAirExposure(0)
        v.layer('deepslate')
        v.dimensions("minecraft:overworld")
        v.heightRangeUniform(-40, 100)
        v.classicVeinGenerator(generator => generator
            .primary(b => b.mat(GTMaterials.Chalcopyrite).size(2))
            .secondary(b => b.block(() => Block.getBlock('minecraft:deepslate_iron_ore')).size(2))
            .between(b => b.mat(GTMaterials.Pyrite).size(2))
            .sporadic(b => b.block(() => Block.getBlock('minecraft:raw_copper_block')))
        );
        v.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Copper)
            .density(0.15)
        );
    })
// Diamond
    e.add('kubejs:overworld/diamond', v => {
        v.weight(40);
        v.clusterSize(45);
        v.density(0.15);
        v.discardChanceOnAirExposure(0);
        v.layer('deepslate');
        v.dimensions("minecraft:overworld");
        v.heightRangeUniform(-55, -30);
        v.classicVeinGenerator(generator => generator
            .primary(b => b.mat(GTMaterials.Graphite).size(4))
            .secondary(b => b.mat(GTMaterials.Graphite).size(3))
            .between(b => b.mat(GTMaterials.Diamond).size(3))
            .sporadic(b => b.mat(GTMaterials.Coal))
        );
        v.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Diamond)
            .density(0.15)
        );
    });
// Lapis
    e.add('kubejs:overworld/lapis', v => {
        v.weight(40);
        v.clusterSize(45);
        v.density(0.15);
        v.discardChanceOnAirExposure(0);
        v.layer('deepslate');
        v.dimensions("minecraft:overworld");
        v.heightRangeUniform(-60, 30);
        v.classicVeinGenerator(generator => generator
            .primary(b => b.mat(GTMaterials.Lazurite).size(3))
            .secondary(b => b.mat(GTMaterials.Sodalite).size(2))
            .between(b => b.mat(GTMaterials.Lapis).size(2))
            .sporadic(b => b.mat(GTMaterials.Calcite))
        );
        v.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Lapis)
            .density(0.15)
        );
    });
// Manganese
    e.add('kubejs:overworld/manganese', v => {
        v.weight(20);
        v.clusterSize(45);
        v.density(0.15);
        v.discardChanceOnAirExposure(0);
        v.layer('deepslate');
        v.dimensions("minecraft:overworld");
        v.heightRangeUniform(-30, 0);
        v.classicVeinGenerator(generator => generator
            .primary(b => b.mat(GTMaterials.Grossular).size(2))
            .secondary(b => b.mat(GTMaterials.Spessartine).size(2))
            .between(b => b.mat(GTMaterials.Pyrolusite).size(2))
            .sporadic(b => b.mat(GTMaterials.Tantalite))
        );
        v.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Grossular)
            .density(0.15)
        );
    });
// Mica
    e.add('kubejs:overworld/mica', v => {
        v.weight(20);
        v.clusterSize(45);
        v.density(0.15);
        v.discardChanceOnAirExposure(0);
        v.layer('deepslate');
        v.dimensions("minecraft:overworld");
        v.heightRangeUniform(-40, -10);
        v.classicVeinGenerator(generator => generator
            .primary(b => b.mat(GTMaterials.Kyanite).size(2))
            .secondary(b => b.mat(GTMaterials.Mica).size(1))
            .between(b => b.mat(GTMaterials.Bauxite).size(1))
            .sporadic(b => b.mat(GTMaterials.Pollucite))
        );
        v.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Mica)
            .density(0.1)
        );
    });
    
// Olivine
    e.add('kubejs:overworld/olivine', v => {
        v.weight(20);
        v.clusterSize(45);
        v.density(0.15);
        v.discardChanceOnAirExposure(0);
        v.layer('deepslate');
        v.dimensions("minecraft:overworld");
        v.heightRangeUniform(-20, 10);
        v.classicVeinGenerator(generator => generator
            .primary(b => b.mat(GTMaterials.Bentonite).size(2))
            .secondary(b => b.mat(GTMaterials.Magnesite).size(2))
            .between(b => b.mat(GTMaterials.Olivine).size(2))
            .sporadic(b => b.mat(GTMaterials.GlauconiteSand))
        );
        v.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Olivine)
            .density(0.1)
        );
    });
    
// Redstone
    e.add('kubejs:overworld/redstone', v => {
        v.weight(60);
        v.clusterSize(45);
        v.density(0.15);
        v.discardChanceOnAirExposure(0);
        v.layer('deepslate');
        v.dimensions("minecraft:overworld");
        v.heightRangeUniform(-65, 30);
        v.classicVeinGenerator(generator => generator
            .primary(b => b.mat(GTMaterials.Redstone).size(4))
            .secondary(b => b.mat(GTMaterials.Ruby).size(1))
            .between(b => b.mat(GTMaterials.Cinnabar).size(1))
            .sporadic(b => b.mat(GTMaterials.Redstone))
        );
        v.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Redstone)
            .density(0.1)
        );
    });
// Sapphire
    e.add('kubejs:overworld/sapphire', v => {
        v.weight(60);
        v.clusterSize(45);
        v.density(0.15);
        v.discardChanceOnAirExposure(0);
        v.layer('deepslate');
        v.dimensions("minecraft:overworld");
        v.heightRangeUniform(-40, 0);
        v.classicVeinGenerator(generator => generator
            .primary(b => b.mat(GTMaterials.Almandine).size(2))
            .secondary(b => b.mat(GTMaterials.Pyrope).size(2))
            .between(b => b.mat(GTMaterials.Sapphire).size(2))
            .sporadic(b => b.mat(GTMaterials.GreenSapphire))
        );
        v.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Sapphire)
            .density(0.1)
        );
    });
    
// // Aluminium Deepslate
//     e.add('kubejs:overworld/aluminium_deepslate', v => {
//         v.weight(120);
//         v.clusterSize(32);
//         v.density(0.15);
//         v.discardChanceOnAirExposure(0);
//         v.layer('deepslate');
//         v.dimensions("minecraft:overworld");
//         v.heightRangeUniform(-40, 10);
//         v.dikeVeinGenerator(generator => generator
//         .withBlock(GTMaterials.Aluminium, 3, -40, 10))
//     });
    
    
    

})


