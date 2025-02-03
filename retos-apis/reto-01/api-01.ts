import axios from 'axios'
import dotenv from "dotenv";

dotenv.config()

const urlApi01 = process.env.URL_API_01

// console.log(urlApi01)

interface Slip{
    id: number
    advice: string
}

interface apiResponse{
    slip: Slip
}

const getMessage = async() =>{
    try {
        const response = await axios.get<apiResponse>(urlApi01!)
        console.log(response.data.slip.advice)
    } catch (error) {
        console.error("Ojo, salio un error: ", error)
    }
}

getMessage()

