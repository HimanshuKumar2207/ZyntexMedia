import ImageKit from "imagekit";

const imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY, // ✅ Correct casing
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY, // ✅ Correct casing
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT, // ✅ Correct env name
});

export default imagekit;
