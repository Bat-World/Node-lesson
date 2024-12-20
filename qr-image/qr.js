// qr.js
import qr from 'qr-image';
import { createWriteStream } from 'fs';

// URL or link you want to encode as a QR code
const url = 'https://www.example.com'; // Replace with your desired URL

// Create a QR code for the URL and save it as a PNG file
const qr_png = qr.image(url, { type: 'png' });
qr_png.pipe(createWriteStream('qr_code_for_url.png'));

// Optionally, generate the QR code synchronously as a PNG buffer
const png_buffer = qr.imageSync(url, { type: 'png' });
// You can use png_buffer as needed (e.g., sending it over HTTP or saving it elsewhere)
