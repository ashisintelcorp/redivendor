// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { mysqlProcedure } from "utils/mysql.util";
import { TcommonResponse } from '../types/common.type';
const date = require("date-and-time");
const procedure = "PROC_ADMIN_AUTH"

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<TcommonResponse>
) {
    let dtmAction: string = date.format(new Date(), "YYYY-MM-DD HH:mm:ss", true);
    if (req.method == "POST") {
        let result = { successful: false, message: 'Invalid request', data: null }
        let action = req.body?.action
        let reqData = { ...req.body, dtmAction }
        if (action) {
            delete req.body.action
            switch (action) {
                case 'login':
                    result = await login(reqData)
                    break;

                default:
                    result.message = 'Action not found!'
                    break;
            }
        }
        else
            result.message = 'Action not found!'
        res.status(result.successful ? 200 : 400).json(result)
    } else {
        res.status(200).json({ successful: false, message: 'Invalid request', data: null })
    }
}

const login = async ({ username, password }: { username: string; password: string; }) => {
    console.log(username, password)
    return { successful: false, message: 'Invalid action', data: null }
}