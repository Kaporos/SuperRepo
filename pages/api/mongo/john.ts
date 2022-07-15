import {NextApiRequest, NextApiResponse} from "next";
import {getDatabase} from "../../../utils/mongo";

export default async function handler(req: NextApiRequest, resp: NextApiResponse) {
    const database = await getDatabase()
    const collection = await database.collection("comments")
    const comment = await collection.findOne({
        "name": "Mercedes Tyler"
    })
    resp.status(200).json(comment)
}