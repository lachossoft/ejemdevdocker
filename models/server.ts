import express, { Application } from 'express'
import cors from 'cors'

import Mariadb from '../database/mariadb.database'




class Server{
    private app: Application
    private port: string
    private routes = {
        user: '/api/v1/users'
    }
    
    constructor(){
        
        this.app  = express()
        this.port = '3000'


        this.middleware()
        this.dbConnection()
        
    }

    async dbConnection(){
        try{
            await Mariadb.authenticate()
            console.log('El Servidor de Base de datos esta en linea')
        }catch (error){
            let message = String(error)
            throw new Error( message )
        }
    }

    middleware(){
        this.app.use( cors() )
    }

    listen(){
        this.app.listen( this.port, ()=>{
            console.log(`El sevidor esta en linea en el puerto ${ this.port }, ya es hora`)
        })
    }
}

export default Server