const ClientLogos = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Trusted by Leading Companies</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">Our training programs have helped professionals from these organizations accelerate their careers and drive innovation.</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          <div className="grayscale hover:grayscale-0 transition">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png" 
              alt="Google" 
              className="h-10 w-auto"
            />
          </div>
          <div className="grayscale hover:grayscale-0 transition">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png" 
              alt="Microsoft" 
              className="h-10 w-auto"
            />
          </div>
          <div className="grayscale hover:grayscale-0 transition">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png" 
              alt="Apple" 
              className="h-10 w-auto"
            />
          </div>
          <div className="grayscale hover:grayscale-0 transition">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/2560px-IBM_logo.svg.png" 
              alt="IBM" 
              className="h-10 w-auto"
            />
          </div>
          <div className="grayscale hover:grayscale-0 transition">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png" 
              alt="Amazon" 
              className="h-10 w-auto"
            />
          </div>
          <div className="grayscale hover:grayscale-0 transition">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" 
              alt="Netflix" 
              className="h-10 w-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
