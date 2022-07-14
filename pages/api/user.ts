import {NextApiRequest, NextApiResponse} from "next";

export default async function handler(req: NextApiRequest, resp: NextApiResponse) {
    setTimeout(() => {
        resp.status(200).json({name: "Theo "+Math.floor(Math.random() * 100)})
    }, 2000)
}