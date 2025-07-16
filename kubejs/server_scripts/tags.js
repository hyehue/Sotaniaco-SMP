ServerEvents.tags('item', Sotaniaco => {
    Sotaniaco.add('forge:tool/hammer', '#forge:tools/hammers')
    Sotaniaco.add('forge:tool/scythe', '#forge:tools/scythe')
    Sotaniaco.add('forge:tool/file', '#forge:tools/files')
    Sotaniaco.add('forge:tool/saw', '#forge:tools/saws')
    Sotaniaco.add('forge:tool/screwdriver', '#forge:tools/screwdrivers')
    Sotaniaco.add('forge:tool/crowbar', '#forge:tools/crowbars')

    let eyesEndRem = [
        'endrem:black_eye',
        'endrem:cold_eye',
        'endrem:corrupted_eye',
        'endrem:lost_eye',
        'endrem:nether_eye',
        'endrem:old_eye',
        'endrem:rogue_eye',
        'endrem:cursed_eye',
        'endrem:evil_eye',
        'endrem:guardian_eye',
        'endrem:magical_eye',
        'endrem:wither_eye',
        'endrem:witch_eye',
        'endrem:undead_eye',
        'endrem:exotic_eye',
        'endrem:cryptic_eye'
    ]

    eyesEndRem.forEach(eye => {
        Sotaniaco.add('sotaniaco:disabled/loot', eye)

    })



})

