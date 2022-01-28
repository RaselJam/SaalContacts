class Contact {
  id: string;
  name: string;
  email: string;
  telephone: string;
  type: string;
  // people can be part of a Company, comapnies can be part of other company too
  company? : string;
  constructor(name: string, email: string, telephone: string, id: string, type : string, company: string ="N/A") {
    this.id = id;
    this.name = name;
    this.email = email;
    this.telephone = telephone;
    this.type =type
    this.company= company
  }
}

export default Contact;
