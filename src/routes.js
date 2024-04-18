import express from 'express'
import potionController from './potion.controller.js'

const routes = express.Router()

routes.get('/potions', potionController.findAll)
routes.get('/potions/:id', potionController.findPotionByPk)
routes.post('/potions', potionController.createPotion)
routes.put('/potions/:id', potionController.updatePotion)
routes.delete('/potions/:id', potionController.deletePotionByPk)

export default routes
