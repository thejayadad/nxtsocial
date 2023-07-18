import db from "@/lib/db";
import Donut from "@/models/Donut";


export async function POST(req) {
    await db.connect()

    try {
        const body = await req.json()
        const newDonut = await Donut.create(body)

        return new Response(JSON.stringify(newDonut), { status: 201 })
    } catch (error) {
        return new Response(JSON.stringify(null), { status: 500 })
    }
}