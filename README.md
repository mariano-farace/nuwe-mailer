<div id="top"></div>

[![CodeFactor](https://www.codefactor.io/repository/github/mariano-farace/nuwe-mailer/badge)](https://www.codefactor.io/repository/github/mariano-farace/nuwe-mailer)
<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->



<!-- PROJECT LOGO -->
<br />
<div align="center">


<h3 align="center">Nuwe-Mailer</h3>

  <p align="center">
    An email service built with nodeMailer
    <br />
    <a href="https://github.com/mariano-farace/SPRINT5-ITAcademey-Chat-App"><strong>Explore the docs »</strong></a>
  </p>
</div>


<!-- ABOUT THE PROJECT -->
# About The Project


Nuwe-Mailer is a mailing service made to participate at Nuwe/Talent Squad Hackathon. The purpose of the app is to provide users a way of sending emails using a third party mail service. In this case, gmail is being used as the mail service provider.

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With:

* Node.js
* Express
* Nodemailer

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
# Getting Started

### Prerequisites

* Clone the repo
   ```sh
   git clone https://github.com/mariano-farace/nuwe-mailer
   ```
* Have node v16 or higher
### Installation

1. At the root folder install NPM packages
   ```sh
   npm install
   ```
2. Rename  `template.env` to `.env`
   
3. Enter your google OAuth credentials in `.env`. 
   1. [Here](https://www.ibm.com/docs/en/app-connect/containers_eus?topic=gmail-connecting-google-application-by-providing-credentials-app-connect-use-basic-oauth) are the instuctions on how to get them. 
   2. Be aware that your Google project must have enabled Gmail API, find the instructions [here](https://support.google.com/googleapi/answer/6158841?hl=en) 
   ```js
   CLIENT_ID="<your client id>"
   CLIENT_SECRET="<your client secret>"
   REDIRECT_URI="https://developers.google.com/oauthplayground"
   REFRESH_TOKEN="<your refresh token>"
   BACKEND_MAIL="<your backend mail>"
   ```
4. Run the server. Will run on port 3030. Use dev version for nodemon
   ```sh
   npm start || npm run dev
   ```



# API Documentation
This API uses `POST` request to communicate and HTTP [response codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes) to indenticate status and errors. All responses come in standard JSON. All requests must include a `content-type` of `application/json` and the body must be valid JSON.

## Send Welcome Email
Will send a Welcome email to the user, using a template.

**You send:**  User name and email.

**You get:** A response with information about the email sent.

**Request:**
```json
POST /register HTTP/1.1
Accept: application/json
Content-Type: application/json
Content-Length: xy

{
    "email":"johndoe@someemail.com",
    "name":"John Doe"
}
```
**Successful Response:**
```json
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: xy

{
    "status:": "sent",
    "info": {
        "accepted": [
            "johndoe@gmail.com"
        ],
        "rejected": [],
        "envelopeTime": 612,
        "messageTime": 1433,
        "messageSize": 195260,
        "response": "250 2.0.0 OK  1653888993 p42-20020a05600c1daa00b0039aef592ca0sm4443630wms.35 - gsmtp",
        "envelope": {
            "from": "",
            "to": [
                "johndoe@gmail.com"
            ]
        },
        "messageId": "<e4cedb38-c8ee-99cb-3ad8-1d3fb5e7294b@atom-Legion-5-15ACH6H>"
    }
}
```
**Failed Response:**
```json
HTTP/1.1 400 Bad Request
Content-Type: application/json
Content-Length: xy

{
    "status:": "Validation error",
    "message": "\"emitterName\" is required"
}
``` 


## Send Peer to Peer Email
Will send an email from the Emitter to the recipient, making use of the mailing service provided by the API. Alternatively, you can use a form served at http://localhost:3030/main.html 

**You send:**  Emitter and Recipient name and email. Subject and message

**You get:** A response with information about the email sent.

**Request:**
```json
POST /email-simple HTTP/1.1
Accept: application/json
Content-Type: application/json
Content-Length: xy

{
    "emitterName":"John Doe",
    "emitterEmail":"johndoe@email.com",
    "recipientName":"Jane Smith",
    "recipientEmail":"janesmith@email.com",
    "subject":"Este es un mail de prueba",
    "message":"Lorem Ipsum is simply dummy text of the printing"
}
```
**Successful Response:**
```json
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: xy

{
    "status:": "sent",
    "info": {
        "accepted": [
            "janesmith@email.com"
        ],
        "rejected": [],
        "envelopeTime": 811,
        "messageTime": 1434,
        "messageSize": 975,
        "response": "250 2.0.0 OK  1653887868 c1-20020adfe701000000b00210288c55d0sm5052347wrm.52 - gsmtp",
        "envelope": {
            "from": "johndoe@email.com",
            "to": [
                "janesmith@email.com"
            ]
        },
        "messageId": "<fbfae462-b3c4-b844-7c26-80c58ce23c5c@gmail.com>"
    }
}
```
**Failed Response:**
```json
HTTP/1.1 400 Bad Request
Content-Type: application/json
Content-Length: xy

{
    "status:": "Validation error",
    "message": "\"emitterName\" is required"
}
``` 


<!-- CONTACT -->
# Contact
[![LinkedIn][linkedin-shield]](https://www.linkedin.com/in/mariano-farace/) 



e-mail: mariano_farace@hotmail.com

Project Link: [https://github.com/mariano-farace/nuwe-mailer](https://github.com/mariano-farace/nuwe-mailer)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: images/screenshot.png

