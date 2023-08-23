import markdownStyles from './markdown-styles.module.css'
import { PortableText } from '@portabletext/react'
import ScrollamaService from './scrollamaService';
import CoverImageUrl from './coverImage';
import ScrollamaServiceLeft from './scrollamaServiceLeft';
import ScrollamaServiceRight from './srollamaServicesRight';

export default function PostBody({ content, stepsData }) {
  const insideBlogStep = stepsData.filter(step => step.stepTitle === "Inside Blog");

  if (!insideBlogStep) {
    return (
      <div className={`max-w-2xl mx-auto ${markdownStyles.markdown}`}>
        <PortableText value={content} />
      </div>
    );
  }

  const stepImages = [
    "https://images.unsplash.com/photo-1682687981630-cefe9cd73072?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80",
    "https://plus.unsplash.com/premium_photo-1692387164064-5678bd9f1ff3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    // ... add more images corresponding to each step
  ];
  
  const splitIndex = Math.floor(content.length/ 2)

  const beforeSection = content.slice(0, splitIndex);
  const afterSection = content.slice(splitIndex);

  // Divide the content, and make the Scrollama for left and righ , based on that feed the content with image as a slider.

  return (
    <div className={`${markdownStyles.markdown}`}>
    
    <div className='max-w-2xl mx-auto'> <PortableText value={beforeSection} /> </div>
    
    <ScrollamaServiceLeft stepsData={insideBlogStep.map(step => step.stepContent)} images={stepImages}></ScrollamaServiceLeft>
    <div className='max-w-2xl mx-auto'><PortableText value={afterSection} /> </div>
    <ScrollamaServiceRight stepsData={insideBlogStep.map(step => step.stepContent)} images={stepImages}></ScrollamaServiceRight>
    </div>
  )
}
