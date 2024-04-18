import Potion from "./src/model.js"

await Potion.sync().then(function () {
    console.log('Banco sincronizado!')
})

await Potion.create({
    name : 'Poção Blue Sky',
    description : 'Essa poção provê um surto de inspiração por 24 horas. Foi utilizada por John Lennon quando escreveu Lucy in the Sky with Diamonds.',
    img : 'https://i.ibb.co/ZzS7xb2/rsz-sky.png',
    price : 300
})

await Potion.create({
    name : 'Poção do Perfume Misterioso',
    description : 'Essa poção faz com que você fique cheirando lilás e groselha por 24 dias. Essência muito admirada pelos bruxos.',
    img : 'https://i.ibb.co/pyhZJXf/rsz-lilas.png',
    price : 200
})

await Potion.create({
    name : 'Poção de Pinus',
    description : 'Essa poção faz com que você fique 10 cm mais alto!',
    img : 'https://i.ibb.co/DkzdL1q/rsz-pinus.png',
    price : 3000
})

await Potion.create({
    name : 'Poção da Beleza Eterna',
    description : 'Veneno que mata rápido.',
    img : 'https://i.ibb.co/9p872NK/rsz-1beleza.png',
    price : 100
})

await Potion.create({
    name : 'Poção do Arco Iro',
    description : 'Traz felicidade momentânea. Pode durar de 10 minutos a 2 dias.',
    img : 'https://i.ibb.co/PrC09MP/rsz-2unicornio.png',
    price : 120
})

await Potion.create({
    name : 'Calderão das Verdades Secretas',
    description : 'As pessoas lhe dirão apenas verdades por 1 hora. É necessário beber os 5L.',
    img : 'hhttps://i.ibb.co/s9Lyvj8/rsz-verdades.png',
    price : 500
})
