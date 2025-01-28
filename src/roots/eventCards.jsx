import React from 'react'
import { EventCard } from '../components/EventCards'
import { injectComponent } from '../utils/root'

const component = <EventCard />
const rootId = 'event-cards'

injectComponent(component, rootId)
