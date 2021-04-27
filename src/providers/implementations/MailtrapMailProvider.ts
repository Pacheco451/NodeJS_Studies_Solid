import { IMailProvider, IMessage } from "../IMailProvider";
import  nodemailer  from 'nodemailer'
import Mail from "nodemailer/lib/mailer";
import { fromString } from "uuidv4";

export class MailtrapMailprovider implements IMailProvider {
    private transporter: Mail;
    
    constructor(){
        this.transporter = nodemailer.createTransport({
            host: 'nfpapfa',
            port: 555,
            auth: {
                user:'asdasd', 
                pass: 'asdasdsa' 
            }
        })
    }
    
    async sendMail(message: IMessage): Promise<void> {
        await this.transporter.sendMail({
            to: {
                name: message.to.name,
                address: message.to.email,
            },
            from: {
                name: message.from.name,
                address: message.from.email,
            },
            subject: message.subject,
            html: message.body
         })
    }
}