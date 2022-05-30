<div id="top"></div>


<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![LinkedIn][linkedin-shield]](https://www.linkedin.com/in/mariano-farace/)


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



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project


![Nuwe-Mailer](client/public/Screenshot.png)
This is a mailing service made to participate at Nuwe/Talent Squad Hackathon. The purpose of the app is to provide users a way of sending emails using a third party mail service. In this case, gmail is being used as the mail service provider.

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* Node.js
* Express
* Nodemailer

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

The app has independent client and server 

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
This API uses `POST` request to communicate and HTTP response codes(https://en.wikipedia.org/wiki/List_of_HTTP_status_codes) to indenticate status and errors. All responses come in standard JSON. All requests must include a `content-type` of `application/json` and the body must be valid JSON.

## Response Codes 
### Response Codes
```
200: Success
400: Bad request
401: Unauthorized
404: Cannot be found
405: Method not allowed
422: Unprocessable Entity 
50X: Server Error
```
### Error Codes Details
```
100: Bad Request
110: Unauthorized
120: User Authenticaion Invalid
130: Parameter Error
140: Item Missing
150: Conflict
160: Server Error
```
### Example Error Message
```json
http code 402
{
    "code": 120,
    "message": "invalid crendetials",
    "resolve": "The username or password is not correct."
}
```

## Send Peer to Peer Email
**You send:**  Emitter and Recipient name and email. Subject and message
**You get:** A response with information about the email sent.

**Request:**
```json
POST /email-simple HTTP/1.1
Accept: application/json
Content-Type: application/json
Content-Length: xy

{
    "emitterName":"Pepe",
    "emitterEmail":"pepe@gmail.com",
    "recipientName":"Mariano Farace",
    "recipientEmail":"mariano_farace@hotmail.com",
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
            "mariano_farace@hotmail.com"
        ],
        "rejected": [],
        "envelopeTime": 811,
        "messageTime": 1434,
        "messageSize": 975,
        "response": "250 2.0.0 OK  1653887868 c1-20020adfe701000000b00210288c55d0sm5052347wrm.52 - gsmtp",
        "envelope": {
            "from": "pepe@gmail.com",
            "to": [
                "mariano_farace@hotmail.com"
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
## Contact

Mariano Farace - mariano_farace@hotmail.com

Project Link: [https://github.com/mariano-farace/nuwe-mailer](https://github.com/mariano-farace/nuwe-mailer)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: images/screenshot.png
