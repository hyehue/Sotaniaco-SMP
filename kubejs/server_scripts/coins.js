//priority: 999


/*
Modification for Gold Coin
This code modifies the 'thermal:gold_coin' item to change its display name and rarity.
*/

// ItemEvents.modifyTooltips(Sotaniaco => {
//     Sotaniaco.add('thermal:gold_coin', Text.gold('Esta moneda es de un material brillante y valioso'))
//     Sotaniaco.add('thermal:gold_coin', {shift: true}, Text.white('Puede ser utilizada como moneda de cambio en el mercado.'))
        
// })

ServerEvents.recipes(Sotaniaco => {
    Sotaniaco.remove({output: 'thermal:gold_coin'})
    Sotaniaco.remove({input: 'thermal:gold_coin'})
})



/*
Modification for Iron Coin
This code modifies the 'thermal:iron_coin' item to change its display name and rarity.
*/

// ItemEvents.modifyTooltips(Sotaniaco => {
//     Sotaniaco.add('thermal:iron_coin', Text.aqua('Esta moneda es de un material resistente y duradero'))
//     Sotaniaco.add('thermal:iron_coin', {shift: true}, Text.white('Puede ser utilizada como moneda de cambio en el mercado.'))

// })

ServerEvents.recipes(Sotaniaco => {
    Sotaniaco.remove({output: 'thermal:iron_coin'})
    Sotaniaco.remove({input: 'thermal:iron_coin'})
})