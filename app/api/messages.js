import client from "./client";

const endpoint = "/messages";

const contactSeller = (message, listingId) =>
  client.post(endpoint, { message, listingId });

export default {
  contactSeller,
};
