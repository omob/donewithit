import client from "./client";

const endpoint = "/listings";

const getListings = () => client.get(endpoint);

const addListing = (listing, onUploadProgress) => {
  const formData = new FormData();
  formData.append("title", listing.title);
  formData.append("price", listing.price);
  formData.append("categoryId", listing.category.value);
  formData.append("description", listing.description);

  if (listing.location)
    formData.append("location", JSON.stringify(listing.location));

  listing.images.forEach((image, index) =>
    formData.append("images", {
      name: "image" + index,
      type: "image/jpeg",
      uri: image,
    })
  );

  return client.post(endpoint, formData, {
    onUploadProgress: (progress) =>
      onUploadProgress(progress.loaded / progress.total),
  });
};
export default {
  getListings,
  addListing,
};
