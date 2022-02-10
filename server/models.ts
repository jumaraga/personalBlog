import mon, { model, models, Schema, SchemaTypes } from "mongoose";
import slugify from "slugify";

const articule = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String
    },
    markdown: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
    author:{
        type:String,
        required:true
    }
})
console.log('hola')
articule.pre('validate', function (next) {
    if (this.title) {
        this.slug = slugify(this.title, { lower: true, strict: true })
    }

    next()
})
const Articule = mon.models.Articule || model('Articule', articule)
export { Articule }