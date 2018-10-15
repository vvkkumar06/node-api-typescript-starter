import { Schema, model } from 'mongoose';

let PostSchema: Schema = new Schema({
  createdAt: Date,
  updatedAt: Date,
  name: {
    type: String,
    default: '',
    required: true
  },
  email: {
    type: String,
    default: '',
    required: true,
    unique: true
  },
  password: {
    type: String,
    default: '',
    required: true
  }
})

export default model('Posts', PostSchema);