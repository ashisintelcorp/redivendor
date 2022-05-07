const mysql = require("serverless-mysql");
// const dotenv = require("dotenv");
// dotenv.config();

const prodDB = {
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
};
const devDB = {
    host: process.env.DEV_MYSQL_HOST,
    port: process.env.DEV_MYSQL_PORT,
    database: process.env.DEV_MYSQL_DATABASE,
    user: process.env.DEV_MYSQL_USER,
    password: process.env.DEV_MYSQL_PASSWORD,
};

const db = mysql({
    config: process.env.NODE_ENV == "production" ? prodDB : devDB
});

export const mysqlProcedure = async (procName: string, procAction: string, data: any = {}, debug: boolean = false) => {
    let params = "";
    if (Object.keys(data).length > 0) {
        let arrkeys = Object.keys(data);
        arrkeys.forEach((el) => {
            if (typeof data[el] == "object") {
                try {
                    data[el] = JSON.stringify(data[el]);
                } catch (error) { }
            } else {
                data[el] = data[el].toString();
            }
            params += "@p_" + el + "='" + data[el].trim().replace(/'/g, "''").replace(/\\/g, "\\\\\\\\").replace(/\"/g, '\\"') + "',";
        });
        params += "@p_debug=1";
    } else {
        params = "@p_empty='1'";
    }
    let sql = `CALL ${procName}('${procAction}', "${params}")`;
    let result = await mysqlQuery(sql);
    result = mysqlSanitizeData(result[0]);
    return debug ? sql : result;
};

export const mysqlSanitizeData = (data: any) => {
    try {
        data = JSON.stringify(data);
        data = JSON.parse(data);
        // console.log(data)
        data = data.map((item: any) => {
            Object.keys(item).map((itm) => {
                if (item[itm] == null) item[itm] = "";
                try {
                    item[itm] = JSON.parse(item[itm]);
                } catch (error) { }
            });
            return item;
        });
    } catch (error) { }
    return data;
};

export const mysqlQuery = async (query: string) => {
    try {
        let results = await db.query(query);
        results = mysqlSanitizeData(results);
        await db.end();
        // console.log(results)
        return results;
    } catch (error) {
        console.log(error);
        return { error };
    }
};
