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
              src="/images/logos/google-logo.png" 
              alt="Google" 
              className="h-10 w-auto"
            />
          </div>
          <div className="grayscale hover:grayscale-0 transition">
            <img 
              src="/images/logos/microsoft-logo.png" 
              alt="Microsoft" 
              className="h-10 w-auto"
            />
          </div>
          <div className="grayscale hover:grayscale-0 transition">
            <img 
              src="/images/logos/apple-logo.png" 
              alt="Apple" 
              className="h-10 w-auto"
            />
          </div>
          <div className="grayscale hover:grayscale-0 transition">
            <img 
              src="/images/logos/ibm-logo.png" 
              alt="IBM" 
              className="h-10 w-auto"
            />
          </div>
          <div className="grayscale hover:grayscale-0 transition">
            <img 
              src="/images/logos/amazon-logo.png" 
              alt="Amazon" 
              className="h-10 w-auto"
            />
          </div>
          <div className="grayscale hover:grayscale-0 transition">
            <img 
              src="/images/logos/netflix-logo.png" 
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
