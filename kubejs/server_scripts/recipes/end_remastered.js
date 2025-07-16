ServerEvents.recipes(e => {
    e.shaped(
        Item.of('endrem:magical_eye'),
        [
            'CTC',
            'TET',
            'CTC'
        ],
        {
            C: 'ars_nouveau:conjuration_essence',
            T: 'minecraft:totem_of_undying',
            E: 'cataclysm:cursed_eye'
        }
    )

    e.custom({
        type: "cataclysm:weapon_fusion",
        base: {
        item: "cataclysm:infernal_forge"
        },
        addition: {
        item: "cataclysm:mech_eye"
        },
        result: {
        item: "endrem:lost_eye"
        }
    })

    e.shaped(
        Item.of('endrem:cursed_eye'),
        [
            'CBC',
            'BEB',
            'CBC'
        ],
        {
            C: 'architects_palette:unobtanium',
            B: 'born_in_chaos_v1:phantom_bomb',
            E: 'irons_spellbooks:ender_upgrade_orb'
        }
    )

})



LootJS.modifiers((event) => {
    event
        .addLootTypeModifier([LootType.ENTITY])
        .matchEntity((entity) => {
            entity.anyType("cataclysm:ignis");
        })
        .addLoot("endrem:nether_eye");
});