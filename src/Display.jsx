export default function Display() {
  return (
    <>
      <div className="fun">
        <div className="grid">
          <div className="busess">
            <div id="just">
              <h3>Select Your Bus To Track</h3>
              <p id="small">
                Choose a bus to track your driver's real time location
              </p>
            </div>
            <div className="all-bus">
              <div className="bus">
                <div id="detail-card">
                  <h2>1</h2>
                  <p>North Campus Bus</p>
                </div>
                <p>Main gate - Library- scienceblock-North campus</p>
                <p>Diver: Chancelets</p>
                <p>ETA:6 mins</p>
              </div>
            </div>
          </div>
          <div className="gps"></div>
        </div>
      </div>
    </>
  );
}
