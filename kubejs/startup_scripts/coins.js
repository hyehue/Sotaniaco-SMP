StartupEvents.registry('item', e => {
    e.create('gold_coin').maxStackSize(64).rarity('UNCOMMON').displayName('Moneda de Oro')
        // .tooltip('&6Se puede usar en el mercado')
    e.create('silver_coin').maxStackSize(64).rarity('UNCOMMON').displayName('Moneda de Plata')



    e.create('reward_coin_i').maxStackSize(64).rarity('RARE').displayName('Sotaniaco Token I')
    e.create('reward_coin_ii').maxStackSize(64).rarity('RARE').displayName('Sotaniaco Token II')
    e.create('reward_coin_iii').maxStackSize(64).rarity('RARE').displayName('Sotaniaco Token III')
    e.create('reward_coin_iv').maxStackSize(64).rarity('RARE').displayName('Sotaniaco Token IV')
        // .tooltip('&eHecho para ser utilizado')
        // .tooltip('&ecomo intercambio en caso')
        // .tooltip('&ede necesitar un item')


    
})