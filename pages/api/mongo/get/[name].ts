import {NextApiRequest, NextApiResponse} from "next";
import {Cat, dbSetup} from "../../../../utils/mongo";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await dbSetup()
    const {name} = req.query
    const cats = await Cat.find({
        name
    })

    res.status(200).json(cats)
}