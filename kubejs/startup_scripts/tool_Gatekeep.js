// This File has been authored by HYEHUE, this pack is licensed under All Rights Reserved.

/* 
Modificacion de las herramientas para gatekeepearlas
*/

ItemEvents.modification(e => {
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
    //defining the sword we want to modify
    e.modify(id, item => {
        //boost is the amount we want to add to the diamond sword's current damage, eventually totaling 10 (diamond sword has 7 by default)
        let boostDmg = -2
        let boostSpd = 4
        let amount = 0
        //attributeAttackDamage is the item's current attributeAttackDamage, we need this so we can use it in the addAttribute later
        let attributeAttackDamage = item.getAttributes("generic.attack_damage").get(0)
        let attributeAttackSpeed = item.getAttributes("generic.attack_speed").get(0)
        //we need to remove the sword's current attributeAttackDamage so we overwrite the whole attributeAttackDamage of the sword
        item.removeAttribute("generic.attack_damage", attributeAttackDamage.id)
        item.removeAttribute("generic.attack_speed", attributeAttackSpeed.id)
        //here we add the final attributeAttackDamage, the attributeAttackDamage.id in this case will be the attributeAttackDamage's UUID
        //this here (attributeAttackDamage.amount + boost) is adding our boost (in this case its set to 3) to the current attack damage
        //of the sword, attributeAttackDamage.operation will grab the operation of the sword's generic.attack_damage(whatever the mod/minecraft)
        //decided to use for it, in this case it is addition
        item.addAttribute("generic.attack_damage", attributeAttackDamage.id, attributeAttackDamage.name, amount + boostDmg, attributeAttackDamage.operation)
        item.addAttribute("generic.attack_speed", attributeAttackSpeed.id, attributeAttackSpeed.name, amount - boostSpd, attributeAttackSpeed.operation)
    });
})


    vanillaTools.forEach(id => {
        e.modify(id, item => {
            try {
                item.digSpeed = 0       // no rompe bloques
                item.attackDamage = 0 // no sirve
                item.attackSpeed = 0   // Lento
                item.toolTypes.clear()  // Elimina clasificacion como herramienta
            } catch (e) {
                console.log(`WIU WIU WIU ALEEEEEEEEEERTAAAAAA    No se pudo modificar algo de ${id}: ${e}`)
            }

        })
    })
})


// This File has been authored by HYEHUE, this pack is licensed under All Rights Reserved.