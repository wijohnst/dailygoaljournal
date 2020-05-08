import React, { useState } from 'react'
import AppContext from './AppContext'

export default function AppContextProvider(props) {
  
  const [userGoals] = useState({
                              id: '0001',
                              goals: 
                              [
                                {
                                  description: 'Be able to meditate for 2 hours.',
                                  creationDate: '05/01/2020',
                                  duration: 365,
                                  benchmarks: [
                                      {
                                      description: 'Meditate for 10 minutes each day',
                                      records: [true,true,true,false,false,true,false]
                                    }
                                  ]
                                },
                                {
                                  description: 'Find a front end developer job.',
                                  creationDate: '05/07/2020',
                                  duration: 365,
                                  benchmarks: [
                                    {
                                      description: 'Code for 2 hours each day',
                                      records: [true]
                                    },
                                    {
                                      description: 'Learn one new coding skill each day',
                                      records: [true]
                                    },
                                    {
                                      description: 'Apply for one developer job each day',
                                      records: [false]
                                    }
                                  ]
                                }
                              ]
                            }
                          )
  return (
    <AppContext.Provider value={userGoals}>
      {props.children}
    </AppContext.Provider>
  )
}
