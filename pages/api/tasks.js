import { connectToDatabase } from '../../../utils/mongodb';

export default async function handler(req, res) {
    const { db } = await connectToDatabase();

    if (req.method === 'GET') {
        const tasks = await db.collection('tasks').find({}).toArray();
        res.status(200).json(tasks);
    } else if (req.method === 'POST') {
        const { name, description } = req.body;
        const newTask = { name, description };

        await db.collection('tasks').insertOne(newTask);
        res.status(201).json(newTask);
    } else {
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}