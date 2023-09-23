
const imageByIndex = (
  index: number,
  images: []
) => images[index % images.length];

export default imageByIndex;