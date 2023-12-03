
import nodemailer from 'nodemailer'
import nodemailerOutlook from 'nodejs-nodemailer-outlook'
import { NextResponse } from "next/server"

export async function POST(req, res) {
    const data = await req.json()

    nodemailerOutlook.sendEmail({
        auth: {
            user: process.env.OUTLOOK_USER,
            pass: process.env.OUTLOOK_PASS
        },
        from: 'slabbaf1994@outlook.com',
        to: 'slabbaf1994@gmail.com',
        subject: `Message From ${data.name}`,
        text: data.message,
        html: `<div>${data.message}</div>
                <div>email: ${data.email}</div>
                <div>phone: ${data.phone}</div>`,
        onError: (e) => console.log(e),
        onSuccess: (i) => console.log(i)
    })

    console.log('data: ', data)
    return NextResponse.json(data)
}