import express, { Application } from 'express'
import cors from 'cors'

class Server{
    private app: Application
    private port: string
    
    constructor(){
        
        this.app  = express()
        this.port = '3000'

        this.middleware()
        
    }

    middleware(){
        this.app.use( cors() )
    }

    listen(){
        this.app.listen( this.port, ()=>{
            console.log(`El sevidor esta en linea en el puerto ${ this.port }`)
        })
    }
}

export default Server