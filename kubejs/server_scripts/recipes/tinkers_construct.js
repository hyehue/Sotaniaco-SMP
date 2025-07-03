// This script adds a Tinkers' Construct melting recipe
const tinkerMeltingRecipe = (event, item, amount, fluidName, temp, seg) => {
    let time = seg / 0.25
  event.custom({
    type: 'tconstruct:melting',
    ingredient: { item: item },
    result: {amount: amount, fluid: fluidName},
    temperature: temp,
    time: time
  });
};



ServerEvents.recipes(event => {
    // Melting recipes for Tinkers' Construct
  tinkerMeltingRecipe(event, "aquaculture:tin_can", 70, "tconstruct:molten_tin", 1000, 5);


});

ServerEvents.recipes(Sotaniaco => {
  Sotaniaco.remove({ id: 'tconstruct:smeltery/seared/grout' })
  Sotaniaco.remove({ id: 'tconstruct:smeltery/seared/grout_multiple' })
  Sotaniaco.shapeless(Item.of('tconstruct:grout', 2), 
  [
    '2x gtceu:small_brick_dust',
    'gtceu:clay_dust',
    '3x #forge:sand',
    '3x minecraft:gravel'
  ])



  Sotaniaco.replaceInput({ id: 'tconstruct:tables/pattern' }, 'minecraft:stick', 'minecraft:paper')
})