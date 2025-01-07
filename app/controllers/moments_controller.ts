import {v4 as uuidv4} from 'uuid'

import { HttpContext } from '@adonisjs/core/http'

import Moment from '#models/moment'

import app from '@adonisjs/core/services/app'

export default class MomentsController {

    private validationOptions = {
        types: ["image"],
        size: "2mb",
    }

    public async store({request, response}: HttpContext) {

        const body = request.body()

        const image = request.file('image', this.validationOptions)

        if (image) {
            const imageName = `${uuidv4()}.${image.extname}`

            await image.move(app.publicPath('uploads'), {
                name: imageName
            })

            body.image = imageName
        }

        const moment = await Moment.create(body)

        response.status(201)

        return {
            msg: "Momento criado com sucesso!",
            data: moment,
        }

    }

    public async index() {
        const moments = await Moment.query().preload('comments')

        return{
            data:moments,
        }
    }

    public async show({params}: HttpContext) {
        
        const moment = await Moment.findOrFail(params.id)

        await moment.load('comments')

        return{
            data: moment,
        }

    }

    public async destroy({params}: HttpContext) {

        const moment = await Moment.findOrFail(params.id)

        await moment.delete()

        return{
            message: "Moment excluído com sucesso!",
            data: moment,
        }

    }

    public async update({params, request}: HttpContext){

        const body = request.body()

        const moment = await Moment.findOrFail(params.id)

        moment.title = body.title
        moment.description = body.description

        if (moment.image != body.image || !moment.image) {
            const image = request.file('image', this.validationOptions)

            if (image) {
                const imageName = `${uuidv4()}.${image.extname}`

                await image.move(app.publicPath('uploads'), {
                    name: imageName
                })

                moment.image = imageName
            }
        }

        await moment.save()

        return {
            message: "Momento atualizado com sucesso!",
            data: moment,
        }
    }
}