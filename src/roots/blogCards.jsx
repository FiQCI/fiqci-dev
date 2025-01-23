import React from 'react'
import { BlogCard } from '../components/BlogCards'
import { injectComponent } from '../utils/root'

const component = <BlogCard />
const rootId = 'blog-cards'

injectComponent(component, rootId)
