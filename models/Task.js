import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
  text: { type: String, required: true },
  completed: { type: Boolean, default: false },
  priority: { type: String, default: 'Medium' },
  dueDate: { type: Date }, // Ensure this matches the Frontend
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Task', taskSchema);