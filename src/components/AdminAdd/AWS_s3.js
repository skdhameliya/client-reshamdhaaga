const AWS = require('aws-sdk');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');


const region = "ap-south-1"
const bucketName = "reshamdhaaga2"
const accessKeyId = "AKIA4WUDEU2XIGZ4WHI6"
const secretAccessKey = "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"

const s3 = new AWS.S3({
    region: region,
    accessKeyId: accessKeyId ,
    secretAccessKey: secretAccessKey
});

export const uploadFile = (fileName) => {
    // console.log(JSON.stringify(fileName))
    // console.log(fileName)
    // Read content from the file
    // console.log("fileName => "+fileName);
    // const fileContent = fs.readFileSync(fileName, {encoding:'utf8', flag:'r'});

    // Setting up S3 upload parameters
    const params = {
        Bucket: "reshamdhaaga2",
        Key: uuidv4(), // File name you want to save as in S3
        Body: fileName,
        ContentType: "image/JPG"
    };

    // Uploading files to the bucket
    s3.upload(params, function(err, data) {
        if (err) {
            throw err;
        }
        console.log(`File uploaded successfully. ${data.Location}`);
    });
};