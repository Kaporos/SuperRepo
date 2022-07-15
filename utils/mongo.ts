import {Db, MongoClient} from "mongodb";

async function getClient(): Promise<MongoClient> {
    const client = new MongoClient(process.env.MONGODB_URI)
    await client.connect()
    return client
}

export async function getDatabase(): Promise<Db> {
    const client = await getClient()
    const database = client.db(process.env.MONGODB_DATABASE)
    return database
}