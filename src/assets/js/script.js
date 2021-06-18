import { axios } from 'axios';
import { fstat } from 'fs';
import google from 'googleapis';
import path from 'path';

function Gdrive() {
    const client_id = '737540360406-e30o6r9o7bmhe1kts8p37p375j2u1o1k.apps.googleusercontent.com';
    const client_secret = 'JV-F_HYFXJvNq-mp-YT_4kEx';
    const redirect_uri = 'https://developers.google.com/oauthplayground/';
    const refrest_token = '1//04GFEUI0hRHdnCgYIARAAGAQSNwF-L9Ir7y4ckyivVyErzsn1cpZR18NW-3c479s_zaD08QNFEvrVF8AR8YRm17uPh0Tlh3TOnqI';

    const oauth2Client = new google.auth.OAuth2(
        client_id,
        client_secret,
        redirect_uri
    );

    oauth2Client.setCredentials({ refrest_token: refrest_token });

    const drive = google.drive({
        version: 'v3',
        auth: 'oauth2Client'
    })
    filePath = path.join(__dirname, 'nama.jpg');
    uploadFile(filePath)
}

async function uploadFile(filePath) {
    try {
        const res = await drive.files.create({
            requestBody: {
                name: "",
                mimeType: "image/png"
            },
            media: {
                mimeType: 'image/png',
                body: fs.createReadStream(filePath)
            }
        })
        console.log(res.data)
    } catch (err) {
        console.log(err.message)
    }
}

