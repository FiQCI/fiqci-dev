import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 text-sm">
      <div className="md:mx-[50px] lg:mx-[50px] 2xl:mx-[150px] px-6 py-4 flex flex-wrap md:flex-nowrap justify-between items-start space-y-4 md:space-y-0">
        <div className='flex content-evenly space-x-8'>
        <div className="w-full md:w-auto">
          <p className="font-semibold">Brought to you by:</p>
          <div className="flex items-center space-x-3 mt-1">
              <img src="/assets/footer-icons/footer-logo-vtt.jpg" alt="VTT" className="h-10" />
              <img src="/assets/footer-icons/footer-logo-aalto.png" alt="Aalto University" className="h-10" />
               <img src="/assets/footer-icons/footer-logo-csc.svg" alt="CSC" className="h-10" />
          </div>
        </div>

        <div className="w-full md:w-auto">
          <p className="font-semibold">Supported by:</p>
          <div className="flex items-center space-x-3 mt-1">
                 <img src="/assets/images/funders/Academy_of_Finland.png" alt="Academy of Finland" className="h-10" />
                  <img src="/assets/images/funders/EU-RRF.jpg" alt="EU Funding" className="h-10" />
          </div>
        </div>
        </div>

        <div className="w-full md:w-auto text-left md:text-right">
          <p className="font-semibold">Customer support</p>
          <a href="mailto:fiqci-feedback@postit.csc.fi" className="text-blue-600 hover:underline">
            fiqci-feedback@postit.csc.fi
          </a>
        </div>
      </div>

      <div className="bg-gray-200 py-3">
        <div className="md:mx-[50px] lg:mx-[50px] 2xl:mx-[150px] px-6 flex flex-col md:flex-row justify-between items-center text-gray-600 space-y-2 md:space-y-0">
          <p className="text-center md:text-left">
            © 2024 The FiQCI Consortium. Powered by{" "}
            <a href="https://jekyllrb.com/" className="underline">
              Jekyll
            </a>{" "}
            &{" "}
            <a href="https://mmistakes.github.io/minimal-mistakes/" className="underline">
              Minimal Mistakes
            </a>.
          </p>
          <div className="flex space-x-4">
            <a href="/cookies" className="underline">
              Cookies
            </a>
            <a href="/accessibility" className="underline">
              Accessibility statements
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
