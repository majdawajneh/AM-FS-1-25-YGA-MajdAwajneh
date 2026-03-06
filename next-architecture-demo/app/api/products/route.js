export default function GET(){

    const products =
    [
        {"id":1, "name":"Keyboard", "price":35},
        {"id":2, "name":"Mouse", "price":30},
        {"id":1, "name":"Monitor", "price":150}
    ];

    return Response.json(products);
}