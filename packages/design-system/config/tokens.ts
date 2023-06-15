import { registerTransforms } from "@tokens-studio/sd-transforms";
import StyleDictionary from "style-dictionary";

registerTransforms(StyleDictionary);

StyleDictionary.registerTransform({
  name: "px-to-rem",
  type: "value",
  matcher: (token) => {
    return (
      typeof token.original.value === "string" &&
      token.original.value.includes("px")
    );
  },
  transformer: (token) => {
    return `${parseFloat(token.original.value) / 16}rem`;
  },
});

const config = StyleDictionary.extend({
  source: ["packages/design-system/generated/css-variables.json"],
  platforms: {
    css: {
      transforms: [
        "attribute/cti",
        "px-to-rem",
        "ts/size/lineheight",
        "ts/type/fontWeight",
        "ts/descriptionToComment",
        "color/hsl",
        "name/cti/kebab",
      ],
      transformGroup: "css",
      files: [
        {
          destination: "packages/design-system/styles/variables.css",
          format: "css/variables",
        },
      ],
    },
    ts: {
      transforms: ["attribute/cti", "name/cti/camel", "px-to-rem", "color/hsl"],
      transformGroup: "js",
      files: [
        {
          format: "javascript/es6",
          destination: "packages/design-system/styles/variables.ts",
        },
      ],
    },
  },
});

config.cleanAllPlatforms();
config.buildAllPlatforms();
