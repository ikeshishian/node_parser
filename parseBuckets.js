//https://www.digitalocean.com/community/tutorials/how-to-read-and-write-csv-files-in-node-js-using-node-csv
const fs = require('fs');
const xml2js = require('xml2js');

var e;
// Read the XML file
fs.readFile('./input/brandBuckets.xml', function(err, data) {
    if (err) throw err;
    //console.log("ddd" + data);

    // Parse the XML data
    xml2js.parseString(data, function (err, result) {
        if (err) throw err;

        // Access the parsed XML data
        console.log('ss ' + data);
    });
});

const data = [];
//
// fs.createReadStream('./input/brands.csv')
//     .pipe(csv.parse({ delimiter: ";", from_line: 2 }))
//     .on("data", row => {
//         data.push(row);
//     })
//     .on('end', () => {
//         var xml = builder.create('catalog')
//             .dec({'encoding': 'UTF-8'})
//             .att('catalog-id', 'goodwill-master')
//             .att('xmlns', 'http://www.demandware.com/xml/impex/catalog/2006-10-31');
//
//         data.forEach((row) => {
//             xml.ele('product')
//                 .att('product-id', row[1])
//                 .ele('brand', row[4]);
//         });
//
//         fs.writeFile('./output/catalog-brands.xml', xml.end({ pretty: true }), "utf-8", err => {
//             if (err) {
//                 console.error(err);
//             }
//         });
//     });
