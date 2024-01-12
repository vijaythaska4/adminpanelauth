import path from "path"
export default {
     dev:true,
     devENV:`${path.resolve()}/.env.development`,
     prodENV:`${path.resolve()}/.env.production`,
     buildPath:`${path.resolve()}/dist`
}