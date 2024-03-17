import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  if (req.method === "POST") {
    try {
      const {
        firstName,
        lastName,
        companyName,
        branch,
        employees,
        email,
        country,
        phoneNumber,
        description,
        budget,
      } = req.body;

      if (process.env.NEXT_PUBLIC_GMAIL === undefined) {
        throw new Error("NEXT_PUBLIC_GMAIL environment variable is not defined");
      }
      
      const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
          user: "georgitonkow@gmail.com",
          pass: process.env.NEXT_PUBLIC_GMAIL.replace(/\\n/g, "\n"),
        },
      });
      
      const info = await transporter.sendMail({
        from: "georgitonkow@gmail.com",
        to: "noncreativeblog@gmail.com",
        subject: "Strive from Booking Form",
        html: `
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Company Name:</strong> ${companyName}</p>
          <p><strong>Branch:</strong> ${branch}</p>
          <p><strong>Number of Employees:</strong> ${employees}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Country:</strong> ${
            country?.label || "N/A"
          }</p> <!-- Use country?.label -->
          <p><strong>Phone Number:</strong> ${phoneNumber}</p>
          <p><strong>Description:</strong> ${description}</p>
          <p><strong>Budget:</strong> ${budget}</p>
        `,
      });

      console.log("Message sent: %s", info.messageId);

      res
        .status(200)
        .json({ success: true, message: "Message sent successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        success: false,
        message: "An error occurred while sending the message",
      });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
