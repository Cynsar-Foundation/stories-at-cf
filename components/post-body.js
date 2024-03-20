import markdownStyles from "./markdown-styles.module.css";
import { PortableText } from "@portabletext/react";
import ScrollamaServiceLeft from "./scrollamaServiceLeft";
import ScrollamaServicesRight from "./srollamaServicesRight";
import { urlForImage } from "../lib/sanity";
import { useEffect, useState } from "react";

export default function PostBody({ content, stepsData }) {
  const insideBlogStepLeft = stepsData
    ? stepsData.filter((step) => step.stepTitle === "Inside Blog Left")
    : [];
  const insideBlogStepRight = stepsData
    ? stepsData.filter((step) => step.stepTitle === "Inside Blog Right")
    : [];

  const extractImages = (insideBlog, allImageUrls) => {
    insideBlog.forEach((data) => {
      if (data && Array.isArray(data.images)) {
        const imageUrls = data.images.map((imageObj) =>
          urlForImage(imageObj.asset).height(800).width(500).url(),
        );
        allImageUrls.push(...imageUrls);
      }
    });
  };

  const allImageUrlsLeft = [];
  const allImageUrlsRight = [];
  extractImages(insideBlogStepLeft, allImageUrlsLeft);
  extractImages(insideBlogStepRight, allImageUrlsRight);

  const [loadedImagesCount, setLoadedImagesCount] = useState(0);

  useEffect(() => {
    if (
      loadedImagesCount ===
      allImageUrlsLeft.length + allImageUrlsRight.length
    ) {
      // All images have loaded
    }
  }, [loadedImagesCount]);

  const handleImageLoad = () => {
    setLoadedImagesCount((prevCount) => prevCount + 1);
  };

  const splitIndex = Math.floor(content.length / 3);
  const secondSplitIndex = Math.floor((2 * content.length) / 3);
  const beforeSection = content.slice(0, splitIndex);
  const afterSection = content.slice(splitIndex, secondSplitIndex);
  const postAfterSection = content.slice(secondSplitIndex);

  return (
    <div className={`${markdownStyles.markdown}`}>
      {[...allImageUrlsLeft, ...allImageUrlsRight].map((url) => (
        <img
          key={url}
          src={url}
          alt="Step related"
          onLoad={handleImageLoad}
          style={{ display: "none" }}
        />
      ))}
      {loadedImagesCount ===
        allImageUrlsLeft.length + allImageUrlsRight.length && (
        <>
          <div className="mx-auto max-w-2xl">
            <PortableText
              value={beforeSection}
              components={{
                block: {
                  normal: ({ children }) => (
                    <p className="mx-auto max-w-2xl">{children}</p>
                  ),
                },
              }}
            />
          </div>
          {insideBlogStepLeft.length > 0 && (
            <ScrollamaServiceLeft
              stepsData={insideBlogStepLeft.map((step) => step.stepContent)}
              images={allImageUrlsLeft}
            />
          )}
          <div className="mx-auto max-w-2xl">
            <PortableText
              value={afterSection}
              components={{
                block: {
                  normal: ({ children }) => (
                    <p className="mx-auto max-w-2xl">{children}</p>
                  ),
                },
              }}
            />
          </div>
          {insideBlogStepRight.length > 0 && (
            <ScrollamaServicesRight
              stepsData={insideBlogStepRight.map((step) => step.stepContent)}
              images={allImageUrlsRight}
            />
          )}
          <div className="mx-auto max-w-2xl">
            <PortableText
              value={postAfterSection}
              components={{
                block: {
                  normal: ({ children }) => (
                    <p className="mx-auto max-w-2xl">{children}</p>
                  ),
                },
              }}
            />
          </div>
        </>
      )}
      <div className="mx-auto mt-10 max-w-5xl rounded-lg bg-gray-100 p-8">
        <div className="flex items-center justify-between">
          <div className="text-gray-700">
            <h2 className="text-2xl font-bold">We Need Your Support!</h2>
            <p className="mt-2">
              Help us in bringing these impactful stories to light.
            </p>
          </div>
          <button className="rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-600">
            Donate Now
          </button>
        </div>
      </div>
    </div>
  );
}
