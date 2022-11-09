import { Accordion } from 'flowbite-react';
import React from 'react';

const Blog = () => {
    return (
        <div className='mb-5'>
            <h1 className="text-4xl m-10">Blog Section</h1>
            <div>
            <Accordion alwaysOpen={true}>
  <Accordion.Panel>
    <Accordion.Title>
    Difference between SQL and NoSQL
    </Accordion.Title>
    <Accordion.Content>
      
    </Accordion.Content>
  </Accordion.Panel>
  <Accordion.Panel>
    <Accordion.Title>
    What is JWT, and how does it work?
    </Accordion.Title>
    <Accordion.Content>
      
    </Accordion.Content>
  </Accordion.Panel>
  <Accordion.Panel>
    <Accordion.Title>
    What is the difference between javascript and NodeJS?
    </Accordion.Title>
    <Accordion.Content>
      
    </Accordion.Content>
  </Accordion.Panel>
  <Accordion.Panel>
    <Accordion.Title>
      What are the differences between Flowbite and Tailwind UI?
    </Accordion.Title>
    <Accordion.Content>
      
    </Accordion.Content>
  </Accordion.Panel>
</Accordion>
            </div>
            
        </div>
    );
};

export default Blog;