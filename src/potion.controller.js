import Potion from './model.js';

export default { findAll, findPotionByPk, createPotion, updatePotion, deletePotionByPk }

function findAll(request, response) {
  Potion.findAll()
    .then(function (results) {
      response.json(results).status(200);
    })
    .catch(function (e) {
      console.log(e);
    });
}

function findPotionByPk(request, response) {
  Potion.findByPk(request.params.id)
    .then(function (result) {
      response.json(result).status(200);
    })
    .catch(function (e) {
      console.log(e);
    });
}

function createPotion(request, response) {
  Potion.create({
    name: request.body.name,
    document: request.body.document,
  })
    .then(function (result) {
      response.status(201).json(result);
    })
    .catch(function (e) {
      console.log(e);
    });
}

function updatePotion(request, response) {
  Potion.update(
    { name: request.body.name, document: request.body.document },
    { where: { id: request.params.id } },
  )
    .then(function (result) {
      response.status(200).send();
    })
    .catch(function (e) {
      console.log(e);
    });
}

function deletePotionByPk(request, response) {
  Potion.destroy({ where: { id: request.params.id } })
    .then(function (result) {
      if (result == 1) {
        response.status(200).send();
      } else {
        response.status(404).send();
      }
    })
    .catch(function (e) {
      console.log(e);
    });
}
