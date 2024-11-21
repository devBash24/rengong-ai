import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import { textGeneration } from "@huggingface/inference";


const APIKEY = process.env.HUGGINGFACE_API_KEY



export async function POST(request: NextRequest) {

    try{

        const body = await request.json()
        const {input} = body

        console.log("Fetching response from Huggingface...")
        const response =await textGeneration({
            accessToken: APIKEY,
            model: "gpt2",
            inputs: input,
            max_length: 300,
          })
        
          console.log(response.details)
          
          

        return NextResponse.json({message: "success",data: response.generated_text})

    }
    catch(e){
        console.error((e as Error).message)
        return NextResponse.json({error: e})
    }

}