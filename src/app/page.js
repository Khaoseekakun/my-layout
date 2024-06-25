export default function Home() {
  return (
    <>
      <div className="container-fluid">
        <div className="row text-center">
          <div className="p-3 col-md-12 bg-warning">
            Navbar
          </div>
        </div>
        <div className="row text-center">
          <div className="p-5 col-md-12 bg-info">
            Header
          </div>
        </div>
        <div className="row text-center">
          <div className="p-5 col-md-4 bg-primary">
            Card1
          </div>
          <div className="p-5 col-md-4 bg-danger">
            Card2
          </div>
          <div className="p-5 col-md-4 bg-success">
            Card3
          </div>
        </div>

        <div className="row text-center">
          <div className="p-5 col-md-12 bg-warning">
            Footer
          </div>
        </div>

      </div>
    </>
  );
}
