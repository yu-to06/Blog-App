import {defineDocumentType, makeSource} from "contentlayer/source-files";

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `blog/**/*.mdx`,
  fields: {
    title: {type: "string", required: true},
    description: {type: "string"},
    date: {type: "date", required: true},
    published: {type: "boolean", default: true},
    image: {type: "string", required: true},
    authors: {type: "list", of: {type: "string"}, required: true},
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => `${doc._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  contentDirPath: "./content",
  documentTypes: [Post],
});
