import Avatar from '../components/avatar'
import Date from '../components/date'
import CoverImage from '../components/cover-image'
import PostTitle from '../components/post-title'
import ScrollamaService from './scrollamaService'
import { fetchSteps } from './services'
import { useEffect, useState } from 'react'


export default function PostHeader({ title, coverImage, date, authors , steps}) {

  

  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="container mx-auto px-5 hidden md:block md:mb-12">
        {authors && authors.map((author, index) => (
          <Avatar key={index} name={author.name} picture={author.picture} />
        ))}
      </div>
    
      <ScrollamaService steps={steps.map(step => step.stepContent)}>
        <CoverImage title={title} image={coverImage} priority />
      </ScrollamaService>
      <div className="max-w-2xl mx-auto mt-8">
          <div className="block mb-6 md:hidden">
          {authors && authors.map((author, index) => (
            <Avatar key={index} name={author.name} picture={author.picture} />
          ))}
          </div>
          <div className="mb-6 text-lg">
            <Date dateString={date} />
          </div>
        </div>
    </>
  )
}
