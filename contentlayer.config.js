import { defineDocumentType, makeSource } from "contentlayer/source-files";
import remarkGfm from "remark-gfm";

const Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
      required: true,
    },
    publishedAt: {
      type: "date",
      required: true,
    },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => `${doc._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  contentDirPath: "src/data/blog",
  documentTypes: [Blog],
  mdx: {
    remarkPlugins: [remarkGfm],
  },
});
