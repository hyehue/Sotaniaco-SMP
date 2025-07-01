ItemEvents.tooltip(Sotaniaco => {
    Sotaniaco.add('kubejs:gold_coin', Text.gold('Válido en el mercado.')); 
    Sotaniaco.add('kubejs:silver_coin', Text.aqua('Válido en el mercado.'));


    let rewardCoins = [
        'kubejs:reward_coin_i',
        'kubejs:reward_coin_ii',
        'kubejs:reward_coin_iii',
        'kubejs:reward_coin_iv'
    ]


  rewardCoins.forEach(coin => {
      Sotaniaco.add(coin, Text.yellow('Hecho para ser utilizado'));
      Sotaniaco.add(coin, Text.yellow('como intercambio en caso'));
      Sotaniaco.add(coin, Text.yellow('de necesitar un item'));

  })

})