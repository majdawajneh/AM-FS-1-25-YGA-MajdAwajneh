export default function GET(){

    //Because w dint have a DB we make this data here to kearn how to get data
    const products =
    [
        {"id":1, "name":"Keyboard", "price":45},
        {"id":2, "name":"Mouse", "price":30},
        {"id":3, "name":"Monitor", "price":150}
    ];

    return Response.json(products);
};