const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white p-6 mt-8">
      <div className="container">
        <p className="text-sm text-center">
          &copy; {new Date().getFullYear()} MyFlashcards. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
