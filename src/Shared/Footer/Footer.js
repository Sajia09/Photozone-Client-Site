import { Footer } from 'flowbite-react';
import React from 'react';

const fter = () => {
    return (
        <Footer container={true}>
  <Footer.Copyright
    href="#"
    by="Sajia™"
    year={2022}
  />
  <Footer.LinkGroup>
    <Footer.Link href="#">
      About
    </Footer.Link>
    <Footer.Link href="#">
      Privacy Policy
    </Footer.Link>
    <Footer.Link href="#">
      Licensing
    </Footer.Link>
    <Footer.Link href="#">
      Contact
    </Footer.Link>
  </Footer.LinkGroup>
</Footer>
    );
};

export default fter;