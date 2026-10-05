import { Resend } from "resend"
import { NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)

type ContactBody = {
    name?: string
    email?: string
    subject?: string
    message?: string
    website?: string
}

function isValidEmail(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function POST(request: Request) {
    const apiKey = process.env.RESEND_API_KEY
    const to = process.env.CONTACT_TO_EMAIL
    const from = process.env.RESEND_FROM

    if (!apiKey || !to || !from) {
        console.error("Contact form misconfigured: missing RESEND_API_KEY, CONTACT_TO_EMAIL, or RESEND_FROM")
        return NextResponse.json({ error: "Contact form is not configured." }, { status: 503 })
    }

    let body: ContactBody
    try {
        body = await request.json()
    } catch {
        return NextResponse.json({ error: "Invalid request body." }, { status: 400 })
    }

    if (body.website?.trim()) {
        return NextResponse.json({ ok: true })
    }

    const name = body.name?.trim() ?? ""
    const email = body.email?.trim() ?? ""
    const subject = body.subject?.trim() ?? ""
    const message = body.message?.trim() ?? ""

    if (!name || !email || !subject || !message) {
        return NextResponse.json({ error: "All fields are required." }, { status: 400 })
    }

    if (!isValidEmail(email)) {
        return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 })
    }

    if (name.length > 200 || subject.length > 300 || message.length > 10000) {
        return NextResponse.json({ error: "Message is too long." }, { status: 400 })
    }

    const escapedName = name.replace(/</g, "&lt;").replace(/>/g, "&gt;")
    const escapedSubject = subject.replace(/</g, "&lt;").replace(/>/g, "&gt;")
    const escapedMessage = message.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\n/g, "<br />")

    const { error } = await resend.emails.send({
        from,
        to: [to],
        replyTo: email,
        subject: `[Portfolio] ${subject}`,
        html: `
            <p><strong>From:</strong> ${escapedName} &lt;${email}&gt;</p>
            <p><strong>Subject:</strong> ${escapedSubject}</p>
            <hr />
            <p>${escapedMessage}</p>
        `,
    })

    if (error) {
        console.error("Resend error:", error)
        return NextResponse.json({ error: "Failed to send message. Please try again later." }, { status: 502 })
    }

    return NextResponse.json({ ok: true })
}
