const Footer = () => {
  return (
    <div className="bg-white border-t">
      <div className="mx-auto py-10">
        <div className="text-center text-xs text-black">
          &copy; {new Date().getFullYear()} Lautaro Exequiel Aguilar, Inc. All
          rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
