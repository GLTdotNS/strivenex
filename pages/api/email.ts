import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  // Provide your email provider configuration here
  port: 465,
  host: "smtp.gmail.com",
  auth: {
    user: "georgitonkow@gmail.com",
    pass: `acvh shny vfub upbk
      `.replace(/\\n/g, "\n"),
  },
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    // Validate input
    if (!name || !email || !message) {
      return res
        .status(400)
        .json({ error: "Name, email, and message are required" });
    }

    try {
      // Send email
      await transporter.sendMail({
        from: "georgitonkow@gmail.com",
        to: "noncreativeblog@gmail.com",
        subject: "From contact form Strive",
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      });

      // Respond with success message
      res
        .status(200)
        .json({ success: true, message: "Email sent successfully" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  } else {
    // Method Not Allowed
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ error: `Method ${req.method} not allowed` });
  }
}
