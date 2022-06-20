import http from 'http';
import url from 'url';

// The format to use the calculator is
// http://localhost:4000/?a=33&b=223

const PORT = process.env.PORT || 3204;


export const server = http.createServer( (req, res) => {
    const query = url.parse(req.url as string).query;
   
    const second = query?.indexOf('&b=')

    const a = (query as string).slice(2, second )
    const b = (query as string).slice( second as number + 3 )

            res.end(`
                <!DOCTYPE html>
                <html lang="es">
                <head>
                    <meta charset="UTF-8">
                    <meta http-equiv="X-UA-Compatible" content="IE=edge">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Document</title>
                </head>
                <body>
                    <h1>Calculadora</h1>
                    <p><strong>Primer número: ${a}</strong></p>
                    <p><strong>Segundo número: ${b}</strong></p>
                    <hr>
                    <p><strong>Suma: ${Number(a) + Number(b)}</strong></p>
                    <p><strong>Resta: ${Number(a) - Number(b)}</strong></p>
                    <p><strong>Multiplicación: ${Number(a) * Number(b)}</strong></p>
                    <p><strong>División: ${Number(a) / Number(b)}</strong></p>

                </body>
                </html>
                

            `);
        }

);
server.listen(PORT);

server.on('error', (err) => {
    console.error((err as Error).message);
});
