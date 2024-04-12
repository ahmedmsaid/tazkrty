import { SafeUrl } from "@angular/platform-browser";

export interface ITicket {
    id: number,
    ticketNum: string,
    firstName: string,
    lastName: string,
    phone: string,
    avatar?: string,
    price: number,
    cinema: string,
    numOfPeople: number,
    quantity: number,
    pdf: SafeUrl
}
