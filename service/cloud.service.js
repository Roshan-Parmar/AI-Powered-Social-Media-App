const ImageKit = require("imagekit");

var imagekit = new ImageKit({
    publicKey : process.env.PUBLICKEY,
    privateKey : process.env.PRIVATEKEY,
    urlEndpoint : process.env.URLENDPOINT 
});


async function uploadFile(fileBuffer, filename) {
    try {
        const response = await imagekit.upload({
            file: `data:image/jpeg;base64,${fileBuffer}`,
            fileName: filename,
            // folder : "caption&image",
        });
        return response;
    } catch (error) {
        console.error("Image upload failed:", error);
        throw error;
    }
}

module.exports = uploadFile;