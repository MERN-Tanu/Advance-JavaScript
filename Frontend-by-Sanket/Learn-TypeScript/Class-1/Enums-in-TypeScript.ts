// Enum or Enumeration :
// It is Constant which is mapped to some integers, and you can change the integer mapping in enum.

/*
 const INITIALISED = "initialised";
 Ticket status = ["initialised","cancelled","resolved","pending"]
 ti.status == "resolved"

*/

enum TickedStatus {
  INITIALISED = "initialsed",
  CANCELLED = "cancel",
  PENDING = "pending",
  CLOSED = "closed",
}

console.log(TickedStatus);
console.log(TickedStatus.CANCELLED);
console.log(TickedStatus.PENDING);

const Ticket = {
  id: 1,
  title: "new ticket",
  status: TickedStatus.CLOSED,
};

console.log(Ticket);

/*
output:

[LOG]: {
  "0": "INITIALISED",
  "1": "CANCELLED",
  "2": "PENDING",
  "3": "CLOSED",
  "INITIALISED": 0,
  "CANCELLED": 1,
  "PENDING": 2,
  "CLOSED": 3
} 
[LOG]: 1 
[LOG]: 2 
[LOG]: {
  "id": 1,
  "title": "new ticket",
  "status": 3
} 
*/

if (Ticket.status == TickedStatus.INITIALISED) {
  console.log("done"); // Done
}

// you cn change the Mapping of Enum which is given by-default,

enum StatusCode {
  NotFound = 404,
  Success = 200,
  Accepted = 202,
  Created = 201,
  BadRequest = 400,
}

const response = {
  url: "www.somethin.com",
  type: "Get",
  data: "Some string",
  status: StatusCode.Success,
};

console.log(response);

/*
output:

[LOG]: {
  "url": "www.somethin.com",
  "type": "Get",
  "data": "Some string",
  "status": 200
} 
*/
