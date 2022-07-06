// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { mysqlProcedure } from "utils/mysql.util";
import { TcommonResponse } from '../types/common.type';
const date = require("date-and-time");
const procedure = "PROC_COMMON"
const getRequests = ['vehicle_types', 'vehicle_subtypes', 'vehicle_models', 'vehicles']

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<TcommonResponse>
) {
    let dtmAction: string = date.format(new Date(), "YYYY-MM-DD HH:mm:ss", true);
    if (req.method == "GET") {
        if (req.query?.common?.[1]) {
            let action = req.query.common?.[1]
            delete req.query.common
            let reqData = { ...req.query, action, dtmAction }
            if (getRequests.filter(i => i === reqData.action).length > 0) {
                let result = await commonRequest(reqData);
                res.status(200).json(result)
            } else {
                res.status(200).json({ successful: false, message: 'Invalid action', data: null })
            }
        } else {
            res.status(200).json({ successful: false, message: 'Invalid request', data: null })
        }

    }
}

const commonRequest = async (reqData: { [key: string]: any }) => {
    reqData = {
        ...reqData,
        type: reqData?.type || '',
        subtype: reqData?.subtype || '',
        model: reqData?.model || '',
    }
    console.log(reqData)

    let response: TcommonResponse = { successful: false, message: '', data: [] }
    let data = await mysqlProcedure(procedure, reqData.action.toUpperCase(), reqData);
    if (data) response = { successful: true, message: 'Successfull', data }
    return response
}