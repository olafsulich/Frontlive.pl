import { registerTransforms } from "@tokens-studio/sd-transforms";
import StyleDictionary from "style-dictionary";

registerTransforms(StyleDictionary);

StyleDictionary.registerTransform({
  name: "px-to-rem",
  type: "value",
  matcher: (token) => token.original.value.includes("px"),
  transformer: (token) => `${parseFloat(token.original.value) / 16}rem`,
});

const config = StyleDictionary.extend({
  source: ["packages/design-system/generated/css-variables.json"],
  platforms: {
    css: {
      transforms: [
        "attribute/cti",
        "ts/size/lineheight",
        "ts/type/fontWeight",
        "ts/descriptionToComment",
        "color/hsl",
        "px-to-rem",
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
  },
});

config.cleanAllPlatforms();
config.buildAllPlatforms();
