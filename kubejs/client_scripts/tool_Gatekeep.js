ItemEvents.tooltip(e => {

    const vanillaTools = [
      'minecraft:stone_pickaxe',
      'minecraft:stone_axe',
      'minecraft:stone_shovel',
      'minecraft:iron_pickaxe',
      'minecraft:iron_axe',
      'minecraft:iron_shovel',
      'minecraft:golden_pickaxe',
      'minecraft:golden_axe',
      'minecraft:golden_shovel',
      'minecraft:diamond_pickaxe',
      'minecraft:diamond_axe',
      'minecraft:diamond_shovel',
      'minecraft:netherite_pickaxe',
      'minecraft:netherite_axe',
      'minecraft:netherite_shovel',
      'minecraft:stone_sword',
      'minecraft:iron_sword',
      'minecraft:golden_sword',
      'minecraft:diamond_sword',
      'minecraft:netherite_sword',
      'minecraft:stone_hoe',
      'minecraft:iron_hoe',
      'minecraft:golden_hoe',
      'minecraft:diamond_hoe',
      'minecraft:netherite_hoe',
    ]

    vanillaTools.forEach(id => {
        e.addAdvanced(id, (item, advanced, text) => {
            text.add(1, 'Este objeto no tiene ningún uso')
            text.add(2, Text.of('(Es como si rompieras con la mano)').gray().italic())
            text.add(3, Text.red('Solo se puede utilizar para crafteos'))
        })

        // e.add(id, Text.of('§7(Solo se puede utilizar para crafteo)').italic())
    })



})